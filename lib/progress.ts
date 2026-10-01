import type { Lesson } from '@/content/types';
import { newCard, schedule, isDue, type SrsCard } from './srs';

export type ProgressState = {
  lessons: Record<string, { steps: string[]; exercises: Record<string, boolean> }>;
  hardWords: string[];
  cards: Record<string, SrsCard>; // spaced-repetition cards, keyed by vocab id
  xp: number;
  activity: Record<string, number>; // dateKey (UTC YYYY-MM-DD) -> XP earned that day
  completedLessons: string[]; // lessons finished at least once (for one-time bonuses)
};

export const emptyProgress = (): ProgressState => ({
  lessons: {},
  hardWords: [],
  cards: {},
  xp: 0,
  activity: {},
  completedLessons: [],
});

// Fill in any fields missing from an older/partial saved shape so upgrades and
// cloud payloads never crash. Exported for the sync layer.
export function normalizeProgress(p: Partial<ProgressState> | null | undefined): ProgressState {
  const base = emptyProgress();
  if (!p) return base;
  return {
    lessons: p.lessons ?? base.lessons,
    hardWords: p.hardWords ?? base.hardWords,
    cards: p.cards ?? base.cards,
    xp: p.xp ?? base.xp,
    activity: p.activity ?? base.activity,
    completedLessons: p.completedLessons ?? base.completedLessons,
  };
}

// Merge two progress states (local + cloud) so signing in never loses progress.
// Everything is combined toward "more progressed": union of steps/words/lessons,
// truthy exercise results win, higher XP wins, per-day activity takes the max,
// and the more-reviewed SRS card wins.
export function mergeProgress(
  a: Partial<ProgressState> | null | undefined,
  b: Partial<ProgressState> | null | undefined,
): ProgressState {
  const x = normalizeProgress(a);
  const y = normalizeProgress(b);

  const lessons: ProgressState['lessons'] = {};
  for (const id of new Set([...Object.keys(x.lessons), ...Object.keys(y.lessons)])) {
    const lx = x.lessons[id];
    const ly = y.lessons[id];
    const exercises: Record<string, boolean> = { ...(lx?.exercises ?? {}), ...(ly?.exercises ?? {}) };
    for (const src of [lx?.exercises, ly?.exercises]) {
      for (const [k, v] of Object.entries(src ?? {})) if (v) exercises[k] = true;
    }
    lessons[id] = {
      steps: Array.from(new Set([...(lx?.steps ?? []), ...(ly?.steps ?? [])])),
      exercises,
    };
  }

  const cards: ProgressState['cards'] = {};
  for (const id of new Set([...Object.keys(x.cards), ...Object.keys(y.cards)])) {
    const cx = x.cards[id];
    const cy = y.cards[id];
    cards[id] = cx && cy ? (cx.reps >= cy.reps ? cx : cy) : (cx ?? cy)!;
  }

  const activity: Record<string, number> = {};
  for (const d of new Set([...Object.keys(x.activity), ...Object.keys(y.activity)])) {
    activity[d] = Math.max(x.activity[d] ?? 0, y.activity[d] ?? 0);
  }

  return {
    lessons,
    hardWords: Array.from(new Set([...x.hardWords, ...y.hardWords])),
    cards,
    xp: Math.max(x.xp, y.xp),
    activity,
    completedLessons: Array.from(new Set([...x.completedLessons, ...y.completedLessons])),
  };
}

function ensure(s: ProgressState, id: string) {
  return s.lessons[id] ?? { steps: [], exercises: {} };
}

// --- gamification tuning -------------------------------------------------
export const XP_EXERCISE = 10; // first correct answer on an exercise
export const XP_REVIEW = 5; // correct spaced-repetition review
export const XP_LESSON = 20; // finishing a lesson the first time
export const DAILY_GOAL_XP = 30; // default daily target

// Level curve: level N starts at 50*(N-1)^2 XP. Gentle early, steeper later.
export function levelForXp(xp: number): number {
  return Math.floor(Math.sqrt(Math.max(0, xp) / 50)) + 1;
}
export function levelProgress(xp: number): { level: number; into: number; span: number; nextAt: number } {
  const level = levelForXp(xp);
  const base = 50 * (level - 1) * (level - 1);
  const nextAt = 50 * level * level;
  return { level, into: xp - base, span: nextAt - base, nextAt };
}

// --- date helpers (UTC day boundaries for deterministic streaks) ---------
export function dateKey(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10);
}
export function addDaysKey(key: string, delta: number): string {
  const ms = Date.parse(`${key}T00:00:00Z`) + delta * 86_400_000;
  return new Date(ms).toISOString().slice(0, 10);
}

// --- step / exercise reducers (unchanged behavior) -----------------------
export function withStepDone(s: ProgressState, lessonId: string, stepId: string): ProgressState {
  const l = ensure(s, lessonId);
  if (l.steps.includes(stepId)) return s;
  return { ...s, lessons: { ...s.lessons, [lessonId]: { ...l, steps: [...l.steps, stepId] } } };
}
export function withExerciseResult(s: ProgressState, lessonId: string, exId: string, correct: boolean): ProgressState {
  const l = ensure(s, lessonId);
  // Special-course quizzes keep the best result, so a failed retake never undoes a pass (same rule as mergeProgress).
  const keep = lessonId.startsWith('sp-') && l.exercises[exId] === true;
  return { ...s, lessons: { ...s.lessons, [lessonId]: { ...l, exercises: { ...l.exercises, [exId]: correct || keep } } } };
}

// --- hard words + their SRS cards ----------------------------------------
export function withHardWord(s: ProgressState, vocabId: string): ProgressState {
  if (s.hardWords.includes(vocabId)) return s;
  return { ...s, hardWords: [...s.hardWords, vocabId] };
}
export function withoutHardWord(s: ProgressState, vocabId: string): ProgressState {
  return { ...s, hardWords: s.hardWords.filter((v) => v !== vocabId) };
}
export function withNewCard(s: ProgressState, vocabId: string, now: number): ProgressState {
  if (s.cards[vocabId]) return s;
  return { ...s, cards: { ...s.cards, [vocabId]: newCard(now) } };
}
export function withoutCard(s: ProgressState, vocabId: string): ProgressState {
  if (!s.cards[vocabId]) return s;
  const cards = { ...s.cards };
  delete cards[vocabId];
  return { ...s, cards };
}
export function withCardReview(s: ProgressState, vocabId: string, correct: boolean, now: number): ProgressState {
  const card = s.cards[vocabId] ?? newCard(now);
  return { ...s, cards: { ...s.cards, [vocabId]: schedule(card, correct, now) } };
}

// --- XP / activity / lessons ---------------------------------------------
export function withXp(s: ProgressState, amount: number, day: string): ProgressState {
  return { ...s, xp: s.xp + amount, activity: { ...s.activity, [day]: (s.activity[day] ?? 0) + amount } };
}
export function withCompletedLesson(s: ProgressState, lessonId: string): ProgressState {
  if (s.completedLessons.includes(lessonId)) return s;
  return { ...s, completedLessons: [...s.completedLessons, lessonId] };
}

// --- derived selectors ----------------------------------------------------
export function lessonCompletion(s: ProgressState, lesson: Lesson): number {
  const done = s.lessons[lesson.id]?.steps.length ?? 0;
  return lesson.steps.length ? Math.min(done, lesson.steps.length) / lesson.steps.length : 0;
}
export function dueVocabIds(s: ProgressState, now: number): string[] {
  return Object.keys(s.cards).filter((id) => isDue(s.cards[id], now));
}
// Consecutive days with activity ending today (or yesterday if today is still empty).
export function currentStreak(s: ProgressState, todayKey: string): number {
  let day = (s.activity[todayKey] ?? 0) > 0 ? todayKey : addDaysKey(todayKey, -1);
  if ((s.activity[day] ?? 0) <= 0) return 0;
  let streak = 0;
  while ((s.activity[day] ?? 0) > 0) {
    streak++;
    day = addDaysKey(day, -1);
  }
  return streak;
}

const KEY = 'deutsch-a1-progress';
export function loadProgress(): ProgressState {
  if (typeof window === 'undefined') return emptyProgress();
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? normalizeProgress(JSON.parse(raw) as Partial<ProgressState>) : emptyProgress();
  } catch {
    return emptyProgress();
  }
}
export function saveProgress(s: ProgressState): void {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* quota — ignore */ }
}

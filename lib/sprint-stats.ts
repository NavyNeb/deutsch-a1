import type { Level } from '@/content/types';
import type { Answer } from './game';

// What the learner has met in Word Sprint, kept on this device only.

export type WordRec = { r: number; w: number }; // times answered right / wrong
export type DailyRec = { level: Level; score: number; total: number };
export type SprintStats = {
  words: Record<string, WordRec>;
  daily: Record<string, DailyRec>; // by YYYY-MM-DD
  level: Level | null;             // last level played
};

const KEY = 'deutsch-a1-sprint-stats';

export const emptyStats = (): SprintStats => ({ words: {}, daily: {}, level: null });

export function loadStats(): SprintStats {
  if (typeof window === 'undefined') return emptyStats();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyStats();
    const p = JSON.parse(raw) as Partial<SprintStats>;
    return { words: p.words ?? {}, daily: p.daily ?? {}, level: p.level ?? null };
  } catch { return emptyStats(); }
}

export function saveStats(s: SprintStats): void {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* quota — ignore */ }
}

/** Fold a round's answers into the per-word record. */
export function recordAnswers(s: SprintStats, answers: Answer[]): SprintStats {
  const words = { ...s.words };
  for (const a of answers) {
    const id = a.question.prompt.id;
    const cur = words[id] ?? { r: 0, w: 0 };
    words[id] = a.correct ? { r: cur.r + 1, w: cur.w } : { r: cur.r, w: cur.w + 1 };
  }
  return { ...s, words };
}

export const isSeen = (r: WordRec | undefined) => !!r && r.r + r.w > 0;
/** Known well: right at least twice, and right more often than wrong. */
export const isMastered = (r: WordRec | undefined) => !!r && r.r >= 2 && r.r > r.w;

export type LevelProgress = { total: number; seen: number; mastered: number };

export function levelProgress(s: SprintStats, ids: string[]): LevelProgress {
  let seen = 0, mastered = 0;
  for (const id of ids) {
    const r = s.words[id];
    if (isSeen(r)) seen++;
    if (isMastered(r)) mastered++;
  }
  return { total: ids.length, seen, mastered };
}

export function recordDaily(s: SprintStats, day: string, rec: DailyRec): SprintStats {
  const prev = s.daily[day];
  // Playing the daily set again can only improve the day's result.
  if (prev && prev.level === rec.level && prev.score >= rec.score) return s;
  return { ...s, daily: { ...s.daily, [day]: rec } };
}

function prevDay(day: string): string {
  const [y, m, d] = day.split('-').map(Number);
  const dt = new Date(y, m - 1, d - 1);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
}

/** Days in a row with a finished daily set, counting back from today (or yesterday if today is still open). */
export function dailyStreak(s: SprintStats, today: string): number {
  let day = s.daily[today] ? today : prevDay(today);
  let n = 0;
  while (s.daily[day]) { n++; day = prevDay(day); }
  return n;
}

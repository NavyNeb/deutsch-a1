// What the learner has practised speaking, kept on this device only.

export type DayRec = { seconds: number; talks: number; words: number };
export type SprechenStats = {
  days: Record<string, DayRec>;          // by YYYY-MM-DD
  bestWpm: number;
  weak: Record<string, number>;          // words missed in repeat practice, by count
  goalMinutes: number;                   // weekly goal
  /** Daily AI-partner usage, to keep spending small. */
  ai: Record<string, { turns: number; feedbacks: number }>;
};

const KEY = 'deutsch-a1-sprechen-stats';
export const DEFAULT_GOAL_MINUTES = 30;
export const AI_DAILY_TURNS = 20;
export const AI_DAILY_FEEDBACKS = 2;

export const emptySprechen = (): SprechenStats => ({ days: {}, bestWpm: 0, weak: {}, goalMinutes: DEFAULT_GOAL_MINUTES, ai: {} });

export function loadSprechen(): SprechenStats {
  if (typeof window === 'undefined') return emptySprechen();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptySprechen();
    const p = JSON.parse(raw) as Partial<SprechenStats>;
    return {
      days: p.days ?? {}, bestWpm: p.bestWpm ?? 0, weak: p.weak ?? {},
      goalMinutes: p.goalMinutes && p.goalMinutes > 0 ? p.goalMinutes : DEFAULT_GOAL_MINUTES, ai: p.ai ?? {},
    };
  } catch { return emptySprechen(); }
}

export function saveSprechen(s: SprechenStats): void {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* quota — ignore */ }
}

/** Add a finished speaking session (a talk, an exam part, a role-play) to the day's total. */
export function recordSpeaking(s: SprechenStats, day: string, add: { seconds: number; words: number; wordsPerMinute?: number }): SprechenStats {
  const cur = s.days[day] ?? { seconds: 0, talks: 0, words: 0 };
  return {
    ...s,
    days: { ...s.days, [day]: { seconds: cur.seconds + Math.max(0, Math.round(add.seconds)), talks: cur.talks + 1, words: cur.words + Math.max(0, add.words) } },
    bestWpm: Math.max(s.bestWpm, add.wordsPerMinute ?? 0),
  };
}

export function addWeakWords(s: SprechenStats, words: string[]): SprechenStats {
  if (!words.length) return s;
  const weak = { ...s.weak };
  for (const w of words) { const k = w.toLowerCase(); weak[k] = (weak[k] ?? 0) + 1; }
  return { ...s, weak };
}

export function topWeakWords(s: SprechenStats, n = 8): { word: string; count: number }[] {
  return Object.entries(s.weak).map(([word, count]) => ({ word, count })).sort((a, b) => b.count - a.count || (a.word < b.word ? -1 : 1)).slice(0, n);
}

function shiftDay(day: string, delta: number): string {
  const [y, m, d] = day.split('-').map(Number);
  const dt = new Date(y, m - 1, d + delta);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
}

/** Whole minutes spoken in the 7 days ending `today`. */
export function weeklyMinutes(s: SprechenStats, today: string): number {
  let seconds = 0;
  for (let i = 0; i < 7; i++) seconds += s.days[shiftDay(today, -i)]?.seconds ?? 0;
  return Math.floor(seconds / 60);
}

/** Days in a row with some speaking, counted back from today (or yesterday while today is still open). */
export function speakingStreak(s: SprechenStats, today: string): number {
  let day = (s.days[today]?.seconds ?? 0) > 0 ? today : shiftDay(today, -1);
  let n = 0;
  while ((s.days[day]?.seconds ?? 0) > 0) { n++; day = shiftDay(day, -1); }
  return n;
}

/** Minutes per day for the last `n` days, oldest first (for a small chart). */
export function lastDays(s: SprechenStats, today: string, n = 7): { day: string; minutes: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const day = shiftDay(today, i - (n - 1));
    return { day, minutes: Math.round(((s.days[day]?.seconds ?? 0) / 60) * 10) / 10 };
  });
}

export function aiUsage(s: SprechenStats, day: string) {
  const u = s.ai[day] ?? { turns: 0, feedbacks: 0 };
  return { ...u, turnsLeft: Math.max(0, AI_DAILY_TURNS - u.turns), feedbacksLeft: Math.max(0, AI_DAILY_FEEDBACKS - u.feedbacks) };
}

export function recordAi(s: SprechenStats, day: string, kind: 'turn' | 'feedback'): SprechenStats {
  const u = s.ai[day] ?? { turns: 0, feedbacks: 0 };
  // Keep only the last few days so the stored blob does not grow forever.
  const keep = Object.fromEntries(Object.entries(s.ai).filter(([d]) => d >= shiftDay(day, -7)));
  return { ...s, ai: { ...keep, [day]: kind === 'turn' ? { ...u, turns: u.turns + 1 } : { ...u, feedbacks: u.feedbacks + 1 } } };
}

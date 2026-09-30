import type { VocabItem } from '@/content/types';

export type Question = { prompt: VocabItem; choices: VocabItem[]; answer: number };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Build multiple-choice questions from a vocab pool. Each question shows one
// target word and 4 choices (the target + 3 distractors with distinct meanings).
export function buildQuestions(pool: VocabItem[], count: number): Question[] {
  const usable = pool.filter((v) => v.english && v.german);
  if (usable.length < 4) return [];
  const targets = shuffle(usable).slice(0, count);
  return targets.map((prompt) => {
    const distractors = shuffle(
      usable.filter((v) => v.id !== prompt.id && v.english !== prompt.english),
    ).slice(0, 3);
    const choices = shuffle([prompt, ...distractors]);
    return { prompt, choices, answer: choices.indexOf(prompt) };
  });
}

const BEST_PREFIX = 'deutsch-a1-game-best-';
export function loadBest(mode: string): number {
  if (typeof window === 'undefined') return 0;
  try { return Number(localStorage.getItem(BEST_PREFIX + mode)) || 0; } catch { return 0; }
}
export function saveBest(mode: string, score: number): void {
  if (typeof window === 'undefined') return;
  try {
    if (score > loadBest(mode)) localStorage.setItem(BEST_PREFIX + mode, String(score));
  } catch { /* quota — ignore */ }
}

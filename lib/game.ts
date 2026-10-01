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

function usableOf(pool: VocabItem[]): VocabItem[] {
  return pool.filter((v) => v.english && v.german);
}

function makeQuestion(usable: VocabItem[], prompt: VocabItem): Question {
  const distractors = shuffle(
    usable.filter((v) => v.id !== prompt.id && v.english !== prompt.english),
  ).slice(0, 3);
  const choices = shuffle([prompt, ...distractors]);
  return { prompt, choices, answer: choices.indexOf(prompt) };
}

// Build multiple-choice questions from a vocab pool. Each question shows one
// target word and 4 choices (the target + 3 distractors with distinct meanings).
export function buildQuestions(pool: VocabItem[], count: number): Question[] {
  const usable = usableOf(pool);
  if (usable.length < 4) return [];
  return shuffle(usable).slice(0, count).map((prompt) => makeQuestion(usable, prompt));
}

// One question per given target word (a "practise your mistakes" round), with
// distractors drawn from the whole pool.
export function buildPracticeQuestions(pool: VocabItem[], targets: VocabItem[]): Question[] {
  const usable = usableOf(pool);
  if (usable.length < 4) return [];
  return shuffle(targets).map((prompt) => makeQuestion(usable, prompt));
}

export type Answer = { question: Question; picked: number; correct: boolean };

export type MissedWord = { item: VocabItem; misses: number; wrongPicks: VocabItem[] };

export type RoundSummary = {
  total: number;
  correct: number;
  accuracy: number; // 0-100
  missed: MissedWord[]; // words answered wrong at least once, most-missed first
  right: VocabItem[]; // words answered right and never missed
};

// Boil a round's answer log down to what the learner should review. A word that
// appears twice in a round is listed once (as missed if it was ever missed).
export function summarizeRound(answers: Answer[]): RoundSummary {
  const missedById = new Map<string, MissedWord>();
  for (const a of answers) {
    if (a.correct) continue;
    const item = a.question.prompt;
    const wrong = a.question.choices[a.picked];
    const entry = missedById.get(item.id) ?? { item, misses: 0, wrongPicks: [] };
    entry.misses += 1;
    if (wrong && !entry.wrongPicks.some((w) => w.id === wrong.id)) entry.wrongPicks.push(wrong);
    missedById.set(item.id, entry);
  }
  const rightById = new Map<string, VocabItem>();
  for (const a of answers) {
    if (a.correct && !missedById.has(a.question.prompt.id)) rightById.set(a.question.prompt.id, a.question.prompt);
  }
  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  return {
    total,
    correct,
    accuracy: total ? Math.round((correct / total) * 100) : 0,
    missed: [...missedById.values()].sort((a, b) => b.misses - a.misses),
    right: [...rightById.values()],
  };
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

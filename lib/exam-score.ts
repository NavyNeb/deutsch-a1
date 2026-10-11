import type { LesenPart, SchreibenTask } from '@/content/exams/types';

export type LesenAnswers = Record<string, boolean | number | string | undefined>; // keyed by item id

export type PartScore = { correct: number; total: number; perItem: Record<string, boolean> };

export function scoreLesenPart(part: LesenPart, answers: LesenAnswers): PartScore {
  const perItem: Record<string, boolean> = {};
  let correct = 0;
  for (const item of part.items) {
    const ok = answers[item.id] !== undefined && answers[item.id] === item.answer;
    perItem[item.id] = ok;
    if (ok) correct++;
  }
  return { correct, total: part.items.length, perItem };
}

export function scoreLesen(parts: LesenPart[], answers: LesenAnswers) {
  const perPart = parts.map((p) => scoreLesenPart(p, answers));
  const correct = perPart.reduce((n, s) => n + s.correct, 0);
  const total = perPart.reduce((n, s) => n + s.total, 0);
  return { perPart, correct, total, percent: total ? Math.round((correct / total) * 100) : 0 };
}

export const passed = (percent: number, passPercent = 60) => percent >= passPercent;

const norm = (s: string) =>
  s.toLowerCase().normalize('NFC').replace(/ß/g, 'ss').replace(/[.,;:!?'"()]/g, '').replace(/\s+/g, ' ').trim();

// Form answers are compared ignoring case, spacing and punctuation; digits must match exactly.
export function checkFormField(accept: string[], value: string): boolean {
  const v = norm(value);
  return v.length > 0 && accept.some((a) => norm(a) === v);
}

export function scoreForm(task: Extract<SchreibenTask, { kind: 'form' }>, values: Record<string, string>) {
  const perField: Record<string, boolean> = {};
  let correct = 0;
  for (const f of task.fields) {
    const ok = checkFormField(f.accept, values[f.id] ?? '');
    perField[f.id] = ok;
    if (ok) correct++;
  }
  return { correct, total: task.fields.length, perField };
}

export const countWords = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

// Heuristic: a content point counts as covered when the text contains any of its keyword stems.
// It cannot judge quality; the UI presents it as a self-check aid, never as a grade.
export function coveredPoints(
  task: Extract<SchreibenTask, { kind: 'message' }>,
  text: string,
): Record<string, boolean> {
  const hay = norm(text);
  const out: Record<string, boolean> = {};
  for (const p of task.points) out[p.id] = p.keywords.some((k) => hay.includes(norm(k)));
  return out;
}

export type LengthState = 'short' | 'ok' | 'long';
export function lengthState(words: number, min: number, max: number): LengthState {
  return words < min ? 'short' : words > max ? 'long' : 'ok';
}

// Greeting + closing are scored on the real exam; this checks the surface forms only.
export function hasGreetingAndClosing(text: string, register: 'informal' | 'formal') {
  const t = norm(text);
  const greeting = register === 'formal'
    ? /sehr geehrte|guten tag|hallo/.test(t)
    : /hallo|hi |liebe|lieber|guten tag|servus/.test(t + ' ');
  const closing = register === 'formal'
    ? /mit freundlichen gruessen|freundliche gruesse|viele gruesse|beste gruesse/.test(t.replace(/ü/g, 'ue'))
    : /gruesse|gruss|bis bald|bis dann|tschuess|liebe gruesse|dein|deine/.test(t.replace(/ü/g, 'ue'));
  return { greeting, closing };
}

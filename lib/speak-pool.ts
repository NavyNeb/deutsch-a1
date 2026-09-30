import { lessons } from '@/content';
import { SPEAKING_PROMPTS } from '@/content/speaking-prompts.mjs';
import { fnv1a } from './audio-names.mjs';

export type SpeakLevel = 'A1' | 'A2' | 'B1';
export const SPEAK_LEVELS: SpeakLevel[] = ['A1', 'A2', 'B1'];

export type SpeakItem = { id: string; level: SpeakLevel; de: string; en: string; fr?: string; authored: boolean };

const MAX_WORDS: Record<SpeakLevel, number> = { A1: 8, A2: 12, B1: 16 };
const MIN_WORDS = 3;

const wordCount = (s: string) => s.trim().split(/\s+/).length;
const usable = (de: string, level: SpeakLevel) => {
  const n = wordCount(de);
  return n >= MIN_WORDS && n <= MAX_WORDS[level] && !/[_…]|\.\.\./.test(de);
};

// Sentences from the lessons a learner has seen (vocab and grammar examples), each
// already has a reference recording. Built lazily and cached per level.
const lessonCache = new Map<SpeakLevel, SpeakItem[]>();

function lessonSentences(level: SpeakLevel): SpeakItem[] {
  const cached = lessonCache.get(level);
  if (cached) return cached;
  const seen = new Set<string>();
  const out: SpeakItem[] = [];
  const add = (e: { de: string; en: string; fr?: string }) => {
    const de = e.de.trim();
    if (seen.has(de) || !usable(de, level)) return;
    seen.add(de);
    out.push({ id: `ex-${fnv1a(de)}`, level, de, en: e.en, fr: e.fr, authored: false });
  };
  for (const l of lessons) {
    if (l.level !== level) continue;
    for (const s of l.steps) {
      if (s.kind === 'vocab') add(s.item.example);
      else if (s.kind === 'pronunciation') s.items.forEach((it) => add(it.example));
      else if (s.kind === 'grammar') s.note.examples.forEach(add);
    }
  }
  lessonCache.set(level, out);
  return out;
}

const authored = (level: SpeakLevel): SpeakItem[] =>
  (SPEAKING_PROMPTS as { id: string; level: string; de: string; en: string; fr?: string }[])
    .filter((p) => p.level === level)
    .map((p) => ({ id: p.id, level, de: p.de, en: p.en, fr: p.fr, authored: true }));

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// A mixed set: mostly authored, everyday sentences plus some from the lessons.
export function pickSet(level: SpeakLevel, size = 8, rng: () => number = Math.random): SpeakItem[] {
  const a = shuffle(authored(level), rng);
  const l = shuffle(lessonSentences(level), rng);
  const nAuthored = Math.min(a.length, Math.ceil(size * 0.6));
  const set = [...a.slice(0, nAuthored), ...l.slice(0, size - nAuthored)];
  const fill = [...a.slice(nAuthored), ...l.slice(size - nAuthored)];
  while (set.length < size && fill.length) set.push(fill.shift()!);
  return shuffle(set, rng);
}

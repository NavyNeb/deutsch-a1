import type { Level, VocabItem } from '@/content/types';

// Pure logic behind the level-based Word Sprint: which words belong to a level, the daily word set,
// and the per-word progress used for "words met" and "words mastered".

export const SPRINT_LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

const fold = (s: string) => s.toLowerCase().replace(/^(der|die|das)\s+/, '').trim();

/**
 * One pool per level. A German word belongs to the lowest level that has it, so pools never overlap;
 * lesson vocabulary comes first, then the word bank. Words without an English meaning are dropped.
 */
export function buildPools(lessonVocab: Record<Level, VocabItem[]>, bank: Record<Level, VocabItem[]>): Record<Level, VocabItem[]> {
  const claimed = new Set<string>();
  const out: Record<Level, VocabItem[]> = { A1: [], A2: [], B1: [], B2: [] };
  for (const level of SPRINT_LEVELS) {
    for (const item of [...lessonVocab[level], ...bank[level]]) {
      const key = fold(item.german);
      if (!item.german || !item.english || claimed.has(key)) continue;
      claimed.add(key);
      out[level].push(item);
    }
  }
  return out;
}

/** The words a round at `level` draws from: that level, plus the easier ones when asked. */
export function poolFor(pools: Record<Level, VocabItem[]>, level: Level, includeEasier: boolean): VocabItem[] {
  const upTo = includeEasier ? SPRINT_LEVELS.slice(0, SPRINT_LEVELS.indexOf(level) + 1) : [level];
  return upTo.flatMap((l) => pools[l]);
}

// Small deterministic generator, so the daily set is the same all day on every device.
function seeded(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The same `count` words for everyone who plays `level` on `day` (a YYYY-MM-DD key). */
export function dailyWords(pool: VocabItem[], level: Level, day: string, count: number): VocabItem[] {
  const rand = seeded(`${day}|${level}`);
  const a = [...pool].sort((x, y) => (x.id < y.id ? -1 : 1));
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, count);
}

export type WordKind = 'noun' | 'verb' | 'other';

/** Rough word type, used to pick wrong answers of the same type so a noun is never the odd one out. */
export function kindOf(item: VocabItem): WordKind {
  if (item.gender) return 'noun';
  if (/^[a-zäöüß]+(en|ern|eln)$/.test(item.german)) return 'verb';
  return 'other';
}

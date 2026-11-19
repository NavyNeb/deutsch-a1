import { describe, it, expect } from 'vitest';
import type { Level, VocabItem } from '@/content/types';
import { buildPools, dailyWords, kindOf, poolFor, SPRINT_LEVELS } from './sprint';
import { buildQuestions } from './game';

const w = (id: string, german: string, english = id, gender: VocabItem['gender'] = null): VocabItem => ({
  id, german, english, gender, syllables: [german], example: { de: '', en: '' },
});
const none = (): Record<Level, VocabItem[]> => ({ A1: [], A2: [], B1: [], B2: [] });

describe('buildPools', () => {
  it('puts a word in the lowest level that has it, so pools never overlap', () => {
    const lessons = { ...none(), A1: [w('a', 'Haus', 'house')], B1: [w('b', 'Haus', 'house'), w('c', 'Idee', 'idea')] };
    const bank = { ...none(), A2: [w('d', 'Haus', 'house'), w('e', 'laufen', 'to run')] };
    const pools = buildPools(lessons, bank);
    expect(pools.A1.map((x) => x.id)).toEqual(['a']);
    expect(pools.A2.map((x) => x.id)).toEqual(['e']);
    expect(pools.B1.map((x) => x.id)).toEqual(['c']);
  });

  it('treats "der Baum" and "Baum" as the same word', () => {
    const pools = buildPools({ ...none(), A1: [w('a', 'der Baum', 'tree', 'der')] }, { ...none(), A2: [w('b', 'Baum', 'tree')] });
    expect(pools.A1).toHaveLength(1);
    expect(pools.A2).toHaveLength(0);
  });

  it('puts lesson vocabulary before bank words at the same level', () => {
    const pools = buildPools({ ...none(), A1: [w('l', 'Tisch', 'table')] }, { ...none(), A1: [w('b', 'Tisch', 'table'), w('c', 'Stuhl', 'chair')] });
    expect(pools.A1.map((x) => x.id)).toEqual(['l', 'c']);
  });

  it('drops words without a meaning', () => {
    const pools = buildPools({ ...none(), A1: [w('a', 'Tisch', '')] }, none());
    expect(pools.A1).toEqual([]);
  });
});

describe('poolFor', () => {
  const pools = { A1: [w('1', 'eins')], A2: [w('2', 'zwei')], B1: [w('3', 'drei')], B2: [w('4', 'vier')] };
  it('is the chosen level alone by default', () => {
    expect(poolFor(pools, 'B1', false).map((x) => x.id)).toEqual(['3']);
  });
  it('adds the easier levels on request, never harder ones', () => {
    expect(poolFor(pools, 'B1', true).map((x) => x.id)).toEqual(['1', '2', '3']);
    expect(poolFor(pools, 'A1', true).map((x) => x.id)).toEqual(['1']);
    expect(SPRINT_LEVELS).toEqual(['A1', 'A2', 'B1', 'B2']);
  });
});

describe('dailyWords', () => {
  const pool = Array.from({ length: 80 }, (_, i) => w(`w${i}`, `Wort${i}`));
  it('is the same on the same day for the same level, whatever order the pool is in', () => {
    const a = dailyWords(pool, 'A2', '2026-11-19', 15).map((x) => x.id);
    const b = dailyWords([...pool].reverse(), 'A2', '2026-11-19', 15).map((x) => x.id);
    expect(a).toEqual(b);
    expect(a).toHaveLength(15);
    expect(new Set(a).size).toBe(15);
  });
  it('changes with the day and with the level', () => {
    const base = dailyWords(pool, 'A2', '2026-11-19', 15).map((x) => x.id).join();
    expect(dailyWords(pool, 'A2', '2026-11-20', 15).map((x) => x.id).join()).not.toBe(base);
    expect(dailyWords(pool, 'B1', '2026-11-19', 15).map((x) => x.id).join()).not.toBe(base);
  });
  it('returns the whole pool when it is smaller than the count', () => {
    expect(dailyWords(pool.slice(0, 5), 'A1', '2026-11-19', 15)).toHaveLength(5);
  });
});

describe('kindOf', () => {
  it('tells nouns, verbs and the rest apart', () => {
    expect(kindOf(w('a', 'der Baum', 'tree', 'der'))).toBe('noun');
    expect(kindOf(w('b', 'laufen'))).toBe('verb');
    expect(kindOf(w('c', 'wandern'))).toBe('verb');
    expect(kindOf(w('d', 'schnell'))).toBe('other');
    expect(kindOf(w('e', 'sich freuen'))).toBe('other');
  });
});

describe('wrong answers', () => {
  it('are of the same word type as the right answer when enough exist', () => {
    const nouns = ['Haus', 'Tisch', 'Stuhl', 'Bett', 'Lampe'].map((n, i) => w(`n${i}`, `der ${n}`, `noun ${i}`, 'der'));
    const verbs = ['laufen', 'gehen', 'kommen', 'machen'].map((v, i) => w(`v${i}`, v, `verb ${i}`));
    for (let r = 0; r < 20; r++) {
      for (const q of buildQuestions([...nouns, ...verbs], 9)) {
        const kind = kindOf(q.prompt);
        const same = q.choices.filter((c) => kindOf(c) === kind).length;
        expect(same).toBe(Math.min(4, kind === 'noun' ? nouns.length : verbs.length));
      }
    }
  });
});

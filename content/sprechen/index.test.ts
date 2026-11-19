import { describe, it, expect } from 'vitest';
import { MINIMAL_PAIRS, PHRASES, PHRASE_FUNCTIONS, SOUND_GROUPS, TALK_TOPICS } from './index';

const unique = (ids: string[]) => new Set(ids).size === ids.length;

describe('exam phrases', () => {
  it('have unique ids and every function has phrases at both levels', () => {
    expect(unique(PHRASES.map((p) => p.id))).toBe(true);
    for (const f of PHRASE_FUNCTIONS) {
      const mine = PHRASES.filter((p) => p.fn === f.id);
      expect(mine.length, f.id).toBeGreaterThanOrEqual(2);
    }
    expect(PHRASES.some((p) => p.level === 'B1')).toBe(true);
    expect(PHRASES.some((p) => p.level === 'B2')).toBe(true);
  });

  it('have German, English and French, and a gap word that is in the sentence', () => {
    for (const p of PHRASES) {
      expect(p.de.length, p.id).toBeGreaterThan(5);
      expect(p.en.length, p.id).toBeGreaterThan(3);
      expect(p.fr.length, p.id).toBeGreaterThan(3);
      expect(PHRASE_FUNCTIONS.some((f) => f.id === p.fn), p.id).toBe(true);
      expect(p.de.includes(p.gap), `${p.id}: gap "${p.gap}" not in "${p.de}"`).toBe(true);
    }
  });

  it('each function has English and French names', () => {
    for (const f of PHRASE_FUNCTIONS) { expect(f.en).toBeTruthy(); expect(f.fr).toBeTruthy(); }
  });
});

describe('topic talks', () => {
  it('have unique ids and enough topics per level', () => {
    expect(unique(TALK_TOPICS.map((t) => t.id))).toBe(true);
    expect(TALK_TOPICS.filter((t) => t.level === 'B1').length).toBeGreaterThanOrEqual(20);
    expect(TALK_TOPICS.filter((t) => t.level === 'B2').length).toBeGreaterThanOrEqual(15);
  });

  it('have a title in three languages, four prompts and useful words', () => {
    for (const t of TALK_TOPICS) {
      expect(t.de && t.en && t.fr, t.id).toBeTruthy();
      expect(t.points, t.id).toHaveLength(4);
      expect(t.words.length, t.id).toBeGreaterThanOrEqual(4);
      for (const p of t.points) expect(p.endsWith('?') || p.length > 10, `${t.id}: ${p}`).toBe(true);
    }
  });
});

describe('minimal pairs', () => {
  it('have unique ids, known sound groups, two different words and meanings in both languages', () => {
    expect(unique(MINIMAL_PAIRS.map((p) => p.id))).toBe(true);
    for (const g of SOUND_GROUPS) { expect(g.tip.en).toBeTruthy(); expect(g.tip.fr).toBeTruthy(); }
    for (const p of MINIMAL_PAIRS) {
      expect(SOUND_GROUPS.some((g) => g.id === p.group), p.id).toBe(true);
      expect(p.a, p.id).not.toBe(p.b);
      for (const m of [p.ea, p.eb, p.fa, p.fb]) expect(m, p.id).toBeTruthy();
    }
  });

  it('cover every sound group at least twice', () => {
    for (const g of SOUND_GROUPS) expect(MINIMAL_PAIRS.filter((p) => p.group === g.id).length, g.id).toBeGreaterThanOrEqual(2);
  });
});

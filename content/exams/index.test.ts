import { describe, expect, it } from 'vitest';
import { ALL_EXAM_SETS } from './index';
import { describeSets } from './checks';

describe('exam sets', () => {
  it('has unique set ids that match board-level-number', () => {
    const ids = ALL_EXAM_SETS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const s of ALL_EXAM_SETS) expect(s.id).toBe(`${s.board}-${s.level.toLowerCase()}-${s.number}`);
  });

  it('has globally unique ids for parts, items and tasks', () => {
    const seen = new Set<string>();
    const add = (id: string) => {
      expect(seen.has(id), `duplicate id ${id}`).toBe(false);
      seen.add(id);
    };
    for (const s of ALL_EXAM_SETS) {
      for (const p of s.lesen) {
        add(p.id);
        p.items.forEach((i) => add(`${s.id}/${i.id}`));
      }
      for (const t of s.schreiben) add(t.id);
      for (const p of s.sprechen) add(p.id);
    }
  });

  describeSets(ALL_EXAM_SETS);
});

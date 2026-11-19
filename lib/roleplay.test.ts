import { describe, it, expect } from 'vitest';
import { lessons } from '@/content';
import type { Lesson } from '@/content/types';
import { buildDialogues, learnerLineIndexes, MAX_LINE_WORDS } from './roleplay';

const lesson = (steps: unknown[]): Lesson => ({
  id: 'x-l1', level: 'A1', number: 1, title: { de: 'T', en: 'Title', fr: 'Titre' }, theme: '', goals: [], steps,
} as unknown as Lesson);

const sit = (lines: [string, string][]) => ({
  kind: 'situation', title: 'Im Café', setting: '', words: [],
  lines: lines.map(([who, de]) => ({ who, de, en: de, fr: de })),
});

describe('buildDialogues', () => {
  it('turns a two-speaker dialogue into a role-play with both roles', () => {
    const [d] = buildDialogues([lesson([sit([['Kellner', 'Guten Tag!'], ['Gast', 'Hallo!'], ['Kellner', 'Was möchten Sie?']])])]);
    expect(d.id).toBe('x-l1--0');
    expect(d.roles).toEqual(['Kellner', 'Gast']);
    expect(d.lines).toHaveLength(3);
    expect(d.level).toBe('A1');
  });

  it('skips one-speaker, very short and very long-line dialogues', () => {
    const long = Array.from({ length: MAX_LINE_WORDS + 1 }, () => 'Wort').join(' ');
    const out = buildDialogues([lesson([
      sit([['A', 'Hallo'], ['A', 'Noch eins'], ['A', 'Und noch eins']]),
      sit([['A', 'Hallo'], ['B', 'Hi']]),
      sit([['A', long], ['B', 'Hi'], ['A', 'Tschüss']]),
    ])]);
    expect(out).toEqual([]);
  });

  it('numbers dialogues by their step so ids stay unique within a lesson', () => {
    const ids = buildDialogues([lesson([sit([['A', 'a'], ['B', 'b'], ['A', 'c']]), { kind: 'chapter', title: 'x' }, sit([['A', 'a'], ['B', 'b'], ['A', 'c']])])]).map((d) => d.id);
    expect(ids).toEqual(['x-l1--0', 'x-l1--2']);
  });
});

describe('learnerLineIndexes', () => {
  it('lists the lines of the chosen role', () => {
    const [d] = buildDialogues([lesson([sit([['A', 'a'], ['B', 'b'], ['A', 'c'], ['B', 'd']])])]);
    expect(learnerLineIndexes(d, 'B')).toEqual([1, 3]);
  });
});

describe('real lessons', () => {
  const all = buildDialogues(lessons);
  it('give plenty of role-plays at every level with unique ids', () => {
    expect(new Set(all.map((d) => d.id)).size).toBe(all.length);
    for (const level of ['A1', 'A2', 'B1', 'B2'] as const) expect(all.filter((d) => d.level === level).length, level).toBeGreaterThanOrEqual(5);
  });
  it('have a speaker name and German text on every line', () => {
    for (const d of all) for (const l of d.lines) { expect(l.who).toBeTruthy(); expect(l.de).toBeTruthy(); }
  });
});

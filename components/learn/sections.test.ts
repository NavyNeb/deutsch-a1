import { describe, it, expect } from 'vitest';
import { buildSections, sectionIndexOf } from './sections';

const ex = { kind: 'exercise', exercise: { id: 'e' } };
const vocab = { kind: 'vocab', item: { id: 'v' } };

describe('buildSections', () => {
  it('groups a chaptered special: chapters and the quiz own their following steps', () => {
    const lesson = {
      steps: [
        { kind: 'intro' },
        { kind: 'chapter', title: 'Basics', titleFr: 'Bases' }, vocab, { kind: 'grammar' }, ex,
        { kind: 'chapter', title: 'More', titleFr: 'Plus' }, vocab,
        { kind: 'wrapup' },
        { kind: 'quiz', title: 'Quiz', titleFr: 'Quiz' }, ex, ex,
      ],
    } as any;
    const s = buildSections(lesson);
    expect(s.map((x) => [x.kind, x.start, x.end])).toEqual([
      ['intro', 0, 0], ['chapter', 1, 4], ['chapter', 5, 6], ['wrapup', 7, 7], ['quiz', 8, 10],
    ]);
    expect(s[1].label).toBe('Kapitel 1: Basics');
    expect(s[1].labelFr).toBe('Kapitel 1: Bases');
    expect(s[2].label).toBe('Kapitel 2: More');
  });

  it('falls back to runs of the same step type when a lesson has no chapters', () => {
    const lesson = {
      steps: [{ kind: 'intro' }, vocab, vocab, { kind: 'grammar' }, ex, ex, { kind: 'pronunciation' }, { kind: 'wrapup' }],
    } as any;
    const s = buildSections(lesson);
    expect(s.map((x) => [x.label, x.start, x.end])).toEqual([
      ['Einstieg', 0, 0], ['Wortschatz', 1, 2], ['Grammatik', 3, 3], ['Übungen', 4, 5], ['Aussprache', 6, 6], ['Fertig', 7, 7],
    ]);
  });

  it('finds the section containing a step', () => {
    const lesson = { steps: [{ kind: 'intro' }, vocab, vocab, { kind: 'wrapup' }] } as any;
    const s = buildSections(lesson);
    expect(sectionIndexOf(s, 0)).toBe(0);
    expect(sectionIndexOf(s, 2)).toBe(1);
    expect(sectionIndexOf(s, 3)).toBe(2);
  });
});

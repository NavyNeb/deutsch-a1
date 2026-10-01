import { describe, it, expect } from 'vitest';
import { parseLesson } from './types';

const valid = {
  id: 'l1', number: 1, title: { de: 'Hallo!', en: 'Hello!' }, theme: 'greetings', goals: ['greet'],
  steps: [
    { kind: 'intro', title: 'Willkommen', goals: ['greet'] },
    { kind: 'vocab', item: { id: 'v1', german: 'Guten Tag', english: 'Hello', gender: null, syllables: ['GU','ten','TAG'], example: { de: 'Guten Tag!', en: 'Hello!' } } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'e1', word: 'Fenster', answer: 'das' } },
  ],
};

describe('parseLesson', () => {
  it('accepts a valid lesson', () => { expect(parseLesson(valid).id).toBe('l1'); });
  it('rejects an unknown exercise type', () => {
    const bad = structuredClone(valid);
    (bad.steps[2] as any).exercise.type = 'nope';
    expect(() => parseLesson(bad)).toThrow();
  });
  it('rejects an invalid gender', () => {
    const bad = structuredClone(valid);
    (bad.steps[1] as any).item.gender = 'los';
    expect(() => parseLesson(bad)).toThrow();
  });
});

import { LessonStepSchema, SpecialSchema, parseSpecial } from './types';

const specialBase = {
  id: 'sp-modalverben', number: 1, level: 'A2', title: { de: 'Modalverben', en: 'Modal verbs', fr: 'Verbes modaux' },
  theme: 'verbs', goals: ['g'],
  special: { slug: 'modalverben', group: 'verbs', levels: ['A1', 'B1'], related: ['l7'] },
  steps: [{ kind: 'intro', title: 'x', goals: [] }],
};

describe('special-course schema', () => {
  it('parses chapter and quiz steps, defaulting passMark to 0.8', () => {
    expect(LessonStepSchema.parse({ kind: 'chapter', title: 'Kapitel' }).kind).toBe('chapter');
    const q = LessonStepSchema.parse({ kind: 'quiz', title: 'Quiz' });
    expect(q.kind === 'quiz' && q.passMark).toBe(0.8);
  });
  it('accepts sp- ids and rejects lesson ids', () => {
    expect(parseSpecial(specialBase).id).toBe('sp-modalverben');
    expect(() => parseSpecial({ ...specialBase, id: 'lesson-1' })).toThrow();
    expect(SpecialSchema.safeParse({ ...specialBase, special: { ...specialBase.special, group: 'nope' } }).success).toBe(false);
  });
  it('defaults bookRefs to empty and allows a ref without lektion', () => {
    expect(parseSpecial(specialBase).special.bookRefs).toEqual([]);
    const p = parseSpecial({ ...specialBase, special: { ...specialBase.special, bookRefs: [{ book: 'daf-grammatiktrainer', start: 206, end: 210 }] } });
    expect(p.special.bookRefs[0].lektion).toBeUndefined();
  });
});

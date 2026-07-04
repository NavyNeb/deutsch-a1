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

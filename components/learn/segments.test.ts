import { describe, it, expect } from 'vitest';
import type { Lesson, LessonStep } from '@/content/types';
import { segmentsFor } from './segments';

const vocab = (id: string): LessonStep => ({ kind: 'vocab', item: { id, german: id, english: id, gender: null, syllables: ['X'], example: { de: 'x', en: 'x' } } });
const ex = (id: string): LessonStep => ({ kind: 'exercise', exercise: { type: 'articlePicker', id, word: 'Haus', answer: 'das' } });

// intro(0) | vocab 1-3 | exercise 4-5 | wrapup(6)
const lesson = {
  id: 'x', level: 'A1', number: 1, title: { de: 'x', en: 'x' }, theme: '', goals: [],
  steps: [
    { kind: 'intro', title: 'i', goals: [] },
    vocab('a'), vocab('b'), vocab('c'),
    ex('e1'), ex('e2'),
    { kind: 'wrapup', summary: 's' },
  ],
} as Lesson;

describe('segmentsFor', () => {
  it('first step: first segment partial, the rest empty', () => {
    const seg = segmentsFor(lesson, 0);
    expect(seg[0].fraction).toBe(1); // one-step intro segment, step 0 reached
    expect(seg.slice(1).every((s) => s.fraction === 0)).toBe(true);
  });

  it('mid lesson: earlier segments full, current partial, later empty', () => {
    const seg = segmentsFor(lesson, 2); // second vocab step
    expect(seg.map((s) => s.label)).toEqual(['Einstieg', 'Wortschatz', 'Übungen', 'Fertig']);
    expect(seg[0].fraction).toBe(1);
    expect(seg[1].fraction).toBeCloseTo(2 / 3);
    expect(seg[2].fraction).toBe(0);
    expect(seg[3].fraction).toBe(0);
  });

  it('last step: every segment full', () => {
    expect(segmentsFor(lesson, 6).every((s) => s.fraction === 1)).toBe(true);
  });

  it('weights follow the number of steps in each segment', () => {
    expect(segmentsFor(lesson, 0).map((s) => s.weight)).toEqual([1, 3, 2, 1]);
  });
});

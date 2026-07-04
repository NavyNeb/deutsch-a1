import { describe, it, expect } from 'vitest';
import { lessons, getLesson } from '../index';
import { LessonSchema } from '../types';

describe('lesson content', () => {
  it('every lesson passes the schema', () => {
    for (const l of lessons) expect(() => LessonSchema.parse(l)).not.toThrow();
  });
  it('step and exercise ids are unique within a lesson', () => {
    for (const l of lessons) {
      const ids = l.steps.flatMap((s) => s.kind === 'exercise' ? [s.exercise.id] : s.kind === 'vocab' ? [s.item.id] : []);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });
  it('getLesson resolves by id', () => { expect(getLesson('l1')?.number).toBe(1); });
});

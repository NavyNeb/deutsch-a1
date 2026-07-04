import { describe, it, expect } from 'vitest';
import { emptyProgress, withStepDone, withExerciseResult, withHardWord, lessonCompletion } from './progress';

const lesson = { id: 'l1', number: 1, title: { de: '', en: '' }, theme: '', goals: [],
  steps: [{ kind: 'intro', title: 'x', goals: [] }, { kind: 'wrapup', summary: 'y' }] } as any;

describe('progress reducers', () => {
  it('marks steps done without duplicates', () => {
    let s = emptyProgress();
    s = withStepDone(s, 'l1', 'intro-0');
    s = withStepDone(s, 'l1', 'intro-0');
    expect(s.lessons.l1.steps).toEqual(['intro-0']);
  });
  it('records exercise results', () => {
    const s = withExerciseResult(emptyProgress(), 'l1', 'e1', true);
    expect(s.lessons.l1.exercises.e1).toBe(true);
  });
  it('adds hard words once', () => {
    let s = withHardWord(emptyProgress(), 'v1');
    s = withHardWord(s, 'v1');
    expect(s.hardWords).toEqual(['v1']);
  });
  it('computes completion as done/total steps', () => {
    let s = emptyProgress();
    expect(lessonCompletion(s, lesson)).toBe(0);
    s = withStepDone(s, 'l1', 's0');
    expect(lessonCompletion(s, lesson)).toBe(0.5);
  });
});

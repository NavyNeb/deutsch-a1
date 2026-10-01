import { describe, it, expect } from 'vitest';
import { emptyProgress, withExerciseResult, withStepDone, type ProgressState } from './progress';
import { specialProgress } from './specials-progress';
import type { Special } from '@/content/types';

const ex = (id: string) => ({ kind: 'exercise', exercise: { type: 'fillBlank', id, prompt: 'p', answer: 'a' } });
const sp = {
  id: 'sp-test', level: 'A2', number: 1, title: { de: 't', en: 't' }, theme: 't', goals: [],
  special: { slug: 'test', group: 'verbs', levels: ['A1', 'A2'], related: [], bookRefs: [] },
  steps: [
    { kind: 'intro', title: 'i', goals: [] },
    { kind: 'chapter', title: 'c1' }, ex('c1e1'),
    { kind: 'chapter', title: 'c2' }, ex('c2e1'),
    { kind: 'wrapup', summary: 's' },
    { kind: 'quiz', title: 'q', passMark: 0.8 },
    ex('q1'), ex('q2'), ex('q3'), ex('q4'), ex('q5'),
  ],
} as unknown as Special;

const answer = (s: ProgressState, id: string, ok: boolean) => withExerciseResult(s, 'sp-test', id, ok);
const answerQuiz = (flags: boolean[]) => flags.reduce((s, ok, i) => answer(s, `q${i + 1}`, ok), emptyProgress());

describe('specialProgress', () => {
  it('starts empty and not passed', () => {
    const p = specialProgress(emptyProgress(), sp);
    expect(p).toMatchObject({ stepsDone: 0, stepsTotal: 12, chaptersTotal: 2, chaptersDone: 0, quizTotal: 5, quizAnswered: 0, quizCorrect: 0, quizPassed: false, complete: false });
  });
  it('passes with 4/5 and fails with 3/5', () => {
    expect(specialProgress(answerQuiz([true, true, true, true, false]), sp).quizPassed).toBe(true);
    expect(specialProgress(answerQuiz([true, true, true, false, false]), sp).quizPassed).toBe(false);
  });
  it('is not passed until every quiz question is answered', () => {
    const p = specialProgress(answerQuiz([true, true, true, true]), sp);
    expect(p.quizAnswered).toBe(4);
    expect(p.quizPassed).toBe(false);
  });
  it('ignores chapter exercises when scoring the quiz', () => {
    const s = answer(answerQuiz([true, true, true, true, true]), 'c1e1', false);
    expect(specialProgress(s, sp).quizCorrect).toBe(5);
  });
  it('a failed retake never removes an earned pass (best result counts)', () => {
    let s = answerQuiz([true, true, true, true, true]);
    s = answer(s, 'q1', false);
    s = answer(s, 'q2', false);
    expect(specialProgress(s, sp).quizPassed).toBe(true);
  });
  it('a failed question can be fixed on retake', () => {
    let s = answerQuiz([false, true, true, true, false]);
    expect(specialProgress(s, sp).quizPassed).toBe(false);
    s = answer(s, 'q1', true);
    expect(specialProgress(s, sp).quizPassed).toBe(true);
  });
  it('ignores unknown step ids and counts chapters from done dividers', () => {
    let s = emptyProgress();
    for (let i = 0; i < 30; i++) s = withStepDone(s, 'sp-test', `junk-${i}`);
    s = withStepDone(s, 'sp-test', 'chapter-1');
    const p = specialProgress(s, sp);
    expect(p.stepsDone).toBe(1);
    expect(p.chaptersDone).toBe(1);
  });
  it('is complete when every step is done', () => {
    let s = emptyProgress();
    const ids = ['intro-0', 'chapter-1', 'c1e1', 'chapter-3', 'c2e1', 'wrapup-5', 'quiz-6', 'q1', 'q2', 'q3', 'q4', 'q5'];
    for (const id of ids) s = withStepDone(s, 'sp-test', id);
    expect(specialProgress(s, sp).complete).toBe(true);
  });
});

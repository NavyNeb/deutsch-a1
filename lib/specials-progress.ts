import type { Lesson } from '@/content/types';
import { stepId } from '@/components/learn/stepId';
import type { ProgressState } from './progress';

export interface SpecialProgress {
  stepsDone: number; stepsTotal: number;
  chaptersDone: number; chaptersTotal: number;
  quizAnswered: number; quizTotal: number; quizCorrect: number;
  quizPassed: boolean; complete: boolean;
}

// Everything is derived from the lesson-shaped progress record stored under the special's id.
export function specialProgress(s: ProgressState, sp: Pick<Lesson, 'id' | 'steps'>): SpecialProgress {
  const rec = s.lessons[sp.id];
  const done = new Set(rec?.steps ?? []);
  const results = rec?.exercises ?? {};
  const quizAt = sp.steps.findIndex((st) => st.kind === 'quiz');
  const quizStep = quizAt >= 0 ? sp.steps[quizAt] : undefined;
  const passMark = quizStep?.kind === 'quiz' ? quizStep.passMark : 0.8;

  let stepsDone = 0, chaptersDone = 0, chaptersTotal = 0;
  const quizIds: string[] = [];
  sp.steps.forEach((st, i) => {
    const id = stepId(st, i);
    if (done.has(id)) stepsDone++;
    if (st.kind === 'chapter') { chaptersTotal++; if (done.has(id)) chaptersDone++; }
    if (quizAt >= 0 && i > quizAt && st.kind === 'exercise') quizIds.push(st.exercise.id);
  });

  const quizAnswered = quizIds.filter((id) => id in results).length;
  const quizCorrect = quizIds.filter((id) => results[id] === true).length;
  const quizPassed = quizIds.length > 0 && quizAnswered === quizIds.length && quizCorrect / quizIds.length >= passMark;

  return {
    stepsDone, stepsTotal: sp.steps.length, chaptersDone, chaptersTotal,
    quizAnswered, quizTotal: quizIds.length, quizCorrect, quizPassed,
    complete: stepsDone === sp.steps.length,
  };
}

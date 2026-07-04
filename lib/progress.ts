import type { Lesson } from '@/content/types';

export type ProgressState = {
  lessons: Record<string, { steps: string[]; exercises: Record<string, boolean> }>;
  hardWords: string[];
};

export const emptyProgress = (): ProgressState => ({ lessons: {}, hardWords: [] });

function ensure(s: ProgressState, id: string) {
  return s.lessons[id] ?? { steps: [], exercises: {} };
}

export function withStepDone(s: ProgressState, lessonId: string, stepId: string): ProgressState {
  const l = ensure(s, lessonId);
  if (l.steps.includes(stepId)) return s;
  return { ...s, lessons: { ...s.lessons, [lessonId]: { ...l, steps: [...l.steps, stepId] } } };
}
export function withExerciseResult(s: ProgressState, lessonId: string, exId: string, correct: boolean): ProgressState {
  const l = ensure(s, lessonId);
  return { ...s, lessons: { ...s.lessons, [lessonId]: { ...l, exercises: { ...l.exercises, [exId]: correct } } } };
}
export function withHardWord(s: ProgressState, vocabId: string): ProgressState {
  if (s.hardWords.includes(vocabId)) return s;
  return { ...s, hardWords: [...s.hardWords, vocabId] };
}
export function withoutHardWord(s: ProgressState, vocabId: string): ProgressState {
  return { ...s, hardWords: s.hardWords.filter((v) => v !== vocabId) };
}
export function lessonCompletion(s: ProgressState, lesson: Lesson): number {
  const done = s.lessons[lesson.id]?.steps.length ?? 0;
  return lesson.steps.length ? Math.min(done, lesson.steps.length) / lesson.steps.length : 0;
}

const KEY = 'deutsch-a1-progress';
export function loadProgress(): ProgressState {
  if (typeof window === 'undefined') return emptyProgress();
  try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) as ProgressState : emptyProgress(); }
  catch { return emptyProgress(); }
}
export function saveProgress(s: ProgressState): void {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* quota — ignore */ }
}

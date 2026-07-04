import { parseLesson, type Lesson, type VocabItem } from './types';
import { lektion1 } from './lessons/lektion-1';
import { lektion2 } from './lessons/lektion-2';

// parseLesson validates at module load — a malformed lesson throws immediately.
export const lessons: Lesson[] = [lektion1, lektion2].map(parseLesson);
export function getLesson(id: string): Lesson | undefined { return lessons.find((l) => l.id === id); }

// Flattens every vocab item across all lessons — from `vocab` steps and `pronunciation` step items —
// so features like hard-word lookup can resolve a vocab id without knowing which lesson it lives in.
export function allVocab(): VocabItem[] {
  return lessons.flatMap((l) =>
    l.steps.flatMap((s) => {
      if (s.kind === 'vocab') return [s.item];
      if (s.kind === 'pronunciation') return s.items;
      return [];
    })
  );
}

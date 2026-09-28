import { parseLesson, type Lesson, type VocabItem } from './types';
import { lektion1 } from './lessons/lektion-1';
import { lektion2 } from './lessons/lektion-2';
import { lektion3 } from './lessons/lektion-3';
import { lektion4 } from './lessons/lektion-4';
import { lektion5 } from './lessons/lektion-5';
import { lektion6 } from './lessons/lektion-6';
import { lektion7 } from './lessons/lektion-7';
import { lektion8 } from './lessons/lektion-8';
import { lektion9 } from './lessons/lektion-9';

// parseLesson validates at module load — a malformed lesson throws immediately.
export const lessons: Lesson[] = [
  lektion1, lektion2, lektion3, lektion4, lektion5, lektion6, lektion7, lektion8, lektion9,
].map(parseLesson);
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

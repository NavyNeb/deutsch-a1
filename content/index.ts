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
import { lektion10 } from './lessons/lektion-10';
import { lektion11 } from './lessons/lektion-11';
import { lektion12 } from './lessons/lektion-12';
import { a2lektion1 } from './lessons/a2-lektion-1';
import { a2lektion2 } from './lessons/a2-lektion-2';
import { a2lektion3 } from './lessons/a2-lektion-3';

// parseLesson validates at module load — a malformed lesson throws immediately.
export const lessons: Lesson[] = [
  lektion1, lektion2, lektion3, lektion4, lektion5, lektion6,
  lektion7, lektion8, lektion9, lektion10, lektion11, lektion12,
  a2lektion1, a2lektion2, a2lektion3,
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

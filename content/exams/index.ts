import { ExamSetSchema, type Board, type ExamLevel, type ExamSet } from './types';
import { GOETHE_A1 } from './data/goethe-a1';
import { GOETHE_A2 } from './data/goethe-a2';
import { GOETHE_B1 } from './data/goethe-b1';
import { TELC_A1 } from './data/telc-a1';
import { TELC_A2 } from './data/telc-a2';
import { TELC_B1 } from './data/telc-b1';

export const ALL_EXAM_SETS: ExamSet[] = [
  ...GOETHE_A1, ...GOETHE_A2, ...GOETHE_B1, ...TELC_A1, ...TELC_A2, ...TELC_B1,
].map((s) => ExamSetSchema.parse(s));

export function examSets(board: Board, level: ExamLevel): ExamSet[] {
  return ALL_EXAM_SETS.filter((s) => s.board === board && s.level === level).sort((a, b) => a.number - b.number);
}

export function examSet(id: string): ExamSet | undefined {
  return ALL_EXAM_SETS.find((s) => s.id === id);
}

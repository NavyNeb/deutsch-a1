import { ExamSetSchema, type Board, type ExamLevel, type ExamSet } from './types';
import { GOETHE_A1 } from './data/goethe-a1';
import { GOETHE_A2 } from './data/goethe-a2';
import { GOETHE_B1 } from './data/goethe-b1';
import { TELC_A1 } from './data/telc-a1';
import { TELC_A2 } from './data/telc-a2';
import { TELC_B1 } from './data/telc-b1';

import { GOETHE_A1_4_6 } from './data/goethe-a1-4-6';
import { GOETHE_A1_7_8 } from './data/goethe-a1-7-8';
import { GOETHE_A1_9_10 } from './data/goethe-a1-9-10';
import { GOETHE_A2_3_4 } from './data/goethe-a2-3-4';
import { GOETHE_A2_5_6 } from './data/goethe-a2-5-6';
import { GOETHE_A2_7_8 } from './data/goethe-a2-7-8';
import { GOETHE_A2_9_10 } from './data/goethe-a2-9-10';
import { GOETHE_B1_3_4 } from './data/goethe-b1-3-4';
import { GOETHE_B1_5_6 } from './data/goethe-b1-5-6';
import { GOETHE_B1_7_8 } from './data/goethe-b1-7-8';
import { GOETHE_B1_9_10 } from './data/goethe-b1-9-10';
import { TELC_A1_4_6 } from './data/telc-a1-4-6';
import { TELC_A1_7_8 } from './data/telc-a1-7-8';
import { TELC_A1_9_10 } from './data/telc-a1-9-10';
import { TELC_A2_3_4 } from './data/telc-a2-3-4';
import { TELC_A2_5_6 } from './data/telc-a2-5-6';
import { TELC_A2_7_8 } from './data/telc-a2-7-8';
import { TELC_A2_9_10 } from './data/telc-a2-9-10';
import { TELC_B1_3_4 } from './data/telc-b1-3-4';
import { TELC_B1_5_6 } from './data/telc-b1-5-6';
import { TELC_B1_7_8 } from './data/telc-b1-7-8';
import { TELC_B1_9_10 } from './data/telc-b1-9-10';

export const ALL_EXAM_SETS: ExamSet[] = [
  ...GOETHE_A1, ...GOETHE_A2, ...GOETHE_B1, ...TELC_A1, ...TELC_A2, ...TELC_B1,
  ...GOETHE_A1_4_6, ...GOETHE_A1_7_8, ...GOETHE_A1_9_10, ...GOETHE_A2_3_4, ...GOETHE_A2_5_6, ...GOETHE_A2_7_8, ...GOETHE_A2_9_10, ...GOETHE_B1_3_4, ...GOETHE_B1_5_6, ...GOETHE_B1_7_8, ...GOETHE_B1_9_10, ...TELC_A1_4_6, ...TELC_A1_7_8, ...TELC_A1_9_10, ...TELC_A2_3_4, ...TELC_A2_5_6, ...TELC_A2_7_8, ...TELC_A2_9_10, ...TELC_B1_3_4, ...TELC_B1_5_6, ...TELC_B1_7_8, ...TELC_B1_9_10,
].map((s) => ExamSetSchema.parse(s));

export function examSets(board: Board, level: ExamLevel): ExamSet[] {
  return ALL_EXAM_SETS.filter((s) => s.board === board && s.level === level).sort((a, b) => a.number - b.number);
}

export function examSet(id: string): ExamSet | undefined {
  return ALL_EXAM_SETS.find((s) => s.id === id);
}

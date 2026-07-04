import { parseLesson, type Lesson } from './types';
import { lektion1 } from './lessons/lektion-1';

// parseLesson validates at module load — a malformed lesson throws immediately.
export const lessons: Lesson[] = [lektion1].map(parseLesson);
export function getLesson(id: string): Lesson | undefined { return lessons.find((l) => l.id === id); }

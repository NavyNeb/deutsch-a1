import type { Lesson } from '@/content/types';
import { buildSections } from './sections';

export type LessonSegment = { key: string; label: string; labelFr: string; fraction: number; weight: number };

/** One progress segment per table-of-contents section, filled up to `stepIndex`. */
export function segmentsFor(lesson: Lesson, stepIndex: number): LessonSegment[] {
  return buildSections(lesson).map((sec) => {
    const weight = sec.end - sec.start + 1;
    const fraction = stepIndex > sec.end ? 1 : stepIndex < sec.start ? 0 : (stepIndex - sec.start + 1) / weight;
    return { key: sec.key, label: sec.label, labelFr: sec.labelFr, fraction, weight };
  });
}

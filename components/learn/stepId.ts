import type { LessonStep } from '@/content/types';

export function stepId(step: LessonStep, index: number): string {
  if (step.kind === 'vocab') return step.item.id;
  if (step.kind === 'exercise') return step.exercise.id;
  return `${step.kind}-${index}`;
}

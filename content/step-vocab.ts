import type { LessonStep, VocabItem } from './types';

/** Every vocabulary item a step teaches, whatever the step kind (single word, group, situation or pronunciation). */
export function stepVocab(step: LessonStep): VocabItem[] {
  switch (step.kind) {
    case 'vocab': return [step.item];
    case 'pronunciation': return step.items;
    case 'wordgroup': return step.items;
    case 'situation': return step.words;
    default: return [];
  }
}

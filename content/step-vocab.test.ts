import { describe, it, expect } from 'vitest';
import { stepVocab } from './step-vocab';
import type { LessonStep, VocabItem } from './types';

const v = (id: string): VocabItem => ({ id, german: id, english: id, gender: null, syllables: [id], example: { de: id, en: id } });

describe('stepVocab', () => {
  it('returns the item of a vocab step', () => {
    expect(stepVocab({ kind: 'vocab', item: v('a') }).map((x) => x.id)).toEqual(['a']);
  });
  it('returns the items of pronunciation, wordgroup and the words of a situation', () => {
    const steps: LessonStep[] = [
      { kind: 'pronunciation', focus: 'f', items: [v('p1'), v('p2')] },
      { kind: 'wordgroup', title: 't', items: [v('g1'), v('g2')] },
      { kind: 'situation', title: 't', setting: 's', lines: [{ who: 'A', de: 'x', en: 'x' }, { who: 'B', de: 'y', en: 'y' }], words: [v('s1')] },
    ];
    expect(steps.map((s) => stepVocab(s).map((x) => x.id))).toEqual([['p1', 'p2'], ['g1', 'g2'], ['s1']]);
  });
  it('returns nothing for steps without vocabulary', () => {
    expect(stepVocab({ kind: 'wrapup', summary: 's' })).toEqual([]);
    expect(stepVocab({ kind: 'intro', title: 't', goals: [] })).toEqual([]);
  });
});

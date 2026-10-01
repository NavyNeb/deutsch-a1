import { describe, it, expect } from 'vitest';
import type { VocabItem } from '@/content/types';
import { buildPracticeQuestions, summarizeRound, type Answer, type Question } from './game';

const word = (id: string, english = id): VocabItem => ({
  id, german: `de-${id}`, english, gender: null, syllables: [id],
  example: { de: `Satz ${id}`, en: `Sentence ${id}` },
});
const A = word('a'), B = word('b'), C = word('c'), D = word('d'), E = word('e');

const q = (prompt: VocabItem, choices: VocabItem[]): Question => ({ prompt, choices, answer: choices.indexOf(prompt) });
const answer = (question: Question, picked: number): Answer => ({ question, picked, correct: picked === question.answer });

describe('summarizeRound', () => {
  it('is empty and 0% for a round with no answers', () => {
    expect(summarizeRound([])).toEqual({ total: 0, correct: 0, accuracy: 0, missed: [], right: [] });
  });

  it('splits missed and right words and records what the learner picked instead', () => {
    const s = summarizeRound([
      answer(q(A, [A, B, C, D]), 0),
      answer(q(B, [A, B, C, D]), 2),
    ]);
    expect(s).toMatchObject({ total: 2, correct: 1, accuracy: 50 });
    expect(s.right).toEqual([A]);
    expect(s.missed).toEqual([{ item: B, misses: 1, wrongPicks: [C] }]);
  });

  it('lists a repeated word once, as missed if it was ever missed, most-missed first', () => {
    const s = summarizeRound([
      answer(q(A, [A, B, C, D]), 1),
      answer(q(B, [A, B, C, D]), 0),
      answer(q(B, [E, B, C, D]), 1),
      answer(q(A, [A, B, C, D]), 0),
      answer(q(B, [A, B, C, D]), 3),
    ]);
    expect(s.right).toEqual([]);
    expect(s.missed.map((m) => [m.item.id, m.misses])).toEqual([['b', 2], ['a', 1]]);
    expect(s.missed[0].wrongPicks.map((w) => w.id)).toEqual(['a', 'd']);
  });
});

describe('buildPracticeQuestions', () => {
  it('builds exactly one question per target, each containing its answer', () => {
    const pool = [A, B, C, D, E];
    const qs = buildPracticeQuestions(pool, [A, C]);
    expect(qs.map((x) => x.prompt.id).sort()).toEqual(['a', 'c']);
    for (const x of qs) {
      expect(x.choices).toHaveLength(4);
      expect(x.choices[x.answer].id).toBe(x.prompt.id);
    }
  });

  it('returns nothing when the pool is too small to make distractors', () => {
    expect(buildPracticeQuestions([A, B, C], [A])).toEqual([]);
  });
});

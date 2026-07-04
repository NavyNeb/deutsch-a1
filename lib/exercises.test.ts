import { describe, it, expect } from 'vitest';
import { checkAnswer } from './exercises';

describe('checkAnswer', () => {
  it('multipleChoice', () => {
    const ex = { type: 'multipleChoice', id: 'e', prompt: '', options: ['a', 'b'], answer: 1, explain: 'because' } as const;
    expect(checkAnswer(ex, 1)).toEqual({ correct: true, explanation: 'because' });
    expect(checkAnswer(ex, 0).correct).toBe(false);
  });
  it('listenChoose compares the chosen index', () => {
    const ex = { type: 'listenChoose', id: 'e', audio: { ttsText: 'Guten Tag' }, options: ['A greeting', 'Ordering food'], answer: 0 } as const;
    expect(checkAnswer(ex, 0).correct).toBe(true);
    expect(checkAnswer(ex, 1).correct).toBe(false);
  });
  it('fillBlank is case/space-insensitive', () => {
    const ex = { type: 'fillBlank', id: 'e', prompt: '', answer: 'bist' } as const;
    expect(checkAnswer(ex, '  Bist ').correct).toBe(true);
  });
  it('articlePicker', () => {
    const ex = { type: 'articlePicker', id: 'e', word: 'Fenster', answer: 'das' } as const;
    expect(checkAnswer(ex, 'das').correct).toBe(true);
    expect(checkAnswer(ex, 'der').correct).toBe(false);
  });
  it('wordOrder', () => {
    const ex = { type: 'wordOrder', id: 'e', tokens: ['bin', 'Ich', 'Nicole'], answer: ['Ich', 'bin', 'Nicole'] } as const;
    expect(checkAnswer(ex, ['Ich', 'bin', 'Nicole']).correct).toBe(true);
    expect(checkAnswer(ex, ['bin', 'Ich', 'Nicole']).correct).toBe(false);
  });
  it('match requires all pairs correct', () => {
    const ex = { type: 'match', id: 'e', pairs: [{ de: 'Hallo', en: 'Hello' }, { de: 'Tschüss', en: 'Bye' }] } as const;
    expect(checkAnswer(ex, { Hallo: 'Hello', 'Tschüss': 'Bye' }).correct).toBe(true);
    expect(checkAnswer(ex, { Hallo: 'Bye', 'Tschüss': 'Hello' }).correct).toBe(false);
  });
});

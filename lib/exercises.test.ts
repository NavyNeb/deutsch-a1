import { describe, it, expect } from 'vitest';
import { checkAnswer } from './exercises';
import type { Exercise } from '@/content/types';

describe('checkAnswer', () => {
  it('multipleChoice', () => {
    const ex: Exercise = { type: 'multipleChoice', id: 'e', prompt: '', options: ['a', 'b'], answer: 1, explain: 'because' };
    expect(checkAnswer(ex, 1)).toEqual({ correct: true, explanation: 'because' });
    expect(checkAnswer(ex, 0).correct).toBe(false);
  });
  it('listenChoose compares the chosen index', () => {
    const ex: Exercise = { type: 'listenChoose', id: 'e', audio: { ttsText: 'Guten Tag' }, options: ['A greeting', 'Ordering food'], answer: 0 };
    expect(checkAnswer(ex, 0).correct).toBe(true);
    expect(checkAnswer(ex, 1).correct).toBe(false);
  });
  it('fillBlank is case/space-insensitive', () => {
    const ex: Exercise = { type: 'fillBlank', id: 'e', prompt: '', answer: 'bist' };
    expect(checkAnswer(ex, '  Bist ').correct).toBe(true);
  });
  it('articlePicker', () => {
    const ex: Exercise = { type: 'articlePicker', id: 'e', word: 'Fenster', answer: 'das' };
    expect(checkAnswer(ex, 'das').correct).toBe(true);
    expect(checkAnswer(ex, 'der').correct).toBe(false);
  });
  it('wordOrder', () => {
    const ex: Exercise = { type: 'wordOrder', id: 'e', tokens: ['bin', 'Ich', 'Nicole'], answer: ['Ich', 'bin', 'Nicole'] };
    expect(checkAnswer(ex, ['Ich', 'bin', 'Nicole']).correct).toBe(true);
    expect(checkAnswer(ex, ['bin', 'Ich', 'Nicole']).correct).toBe(false);
  });
  it('match requires all pairs correct', () => {
    const ex: Exercise = { type: 'match', id: 'e', pairs: [{ de: 'Hallo', en: 'Hello' }, { de: 'Tschüss', en: 'Bye' }] };
    expect(checkAnswer(ex, { Hallo: 'Hello', 'Tschüss': 'Bye' }).correct).toBe(true);
    expect(checkAnswer(ex, { Hallo: 'Bye', 'Tschüss': 'Hello' }).correct).toBe(false);
  });
});

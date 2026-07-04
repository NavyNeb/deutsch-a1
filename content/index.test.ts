import { describe, it, expect } from 'vitest';
import { allVocab } from './index';

describe('allVocab', () => {
  it('flattens vocab from vocab steps and pronunciation steps, including Lektion 1', () => {
    const vocab = allVocab();
    expect(vocab.length).toBeGreaterThan(0);
    // vocab step item
    expect(vocab.some((v) => v.id === 'l1-hallo' && v.german === 'Hallo')).toBe(true);
    // pronunciation step item
    expect(vocab.some((v) => v.id === 'l1-tschuess-pron')).toBe(true);
  });
});

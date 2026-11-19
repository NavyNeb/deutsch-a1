import { describe, it, expect } from 'vitest';
import { SPRECHEN, sc, type SprechenKey } from './sprechen-copy';

describe('sprechen copy', () => {
  it('has English and French text for every key', () => {
    for (const [key, v] of Object.entries(SPRECHEN)) {
      expect(v.en.trim().length, `${key} en`).toBeGreaterThan(0);
      expect(v.fr.trim().length, `${key} fr`).toBeGreaterThan(0);
    }
  });

  it('returns the text for the chosen language', () => {
    expect(sc('hubTitle', 'en')).toBe('Speaking');
    expect(sc('hubTitle', 'fr')).toBe('Expression orale');
  });

  it('has no leftover placeholders or doubled spaces', () => {
    for (const [key, v] of Object.entries(SPRECHEN) as [SprechenKey, { en: string; fr: string }][]) {
      for (const text of [v.en, v.fr]) {
        expect(text, key).not.toMatch(/TODO|\{\w+\}|\s{2,}/);
      }
    }
  });
});

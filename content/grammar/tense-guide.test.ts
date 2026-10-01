import { describe, it, expect } from 'vitest';
import { TENSE_IDS } from '@/lib/conjugate';
import { TENSE_GUIDE, TenseGuideEntrySchema, SPECIAL_SLUGS } from './tense-guide';

describe('tense guide', () => {
  it('has an entry for every tense', () => {
    expect(Object.keys(TENSE_GUIDE).sort()).toEqual([...TENSE_IDS].sort());
  });

  for (const id of TENSE_IDS) {
    it(`${id} is complete in EN and FR`, () => {
      const e = TENSE_GUIDE[id];
      expect(TenseGuideEntrySchema.safeParse(e).success).toBe(true);
      expect(e.how.en.length).toBeGreaterThan(10);
      expect(e.how.fr.length).toBeGreaterThan(10);
      expect(e.when.en.length).toBeGreaterThan(20);
      expect(e.when.fr.length).toBeGreaterThan(20);
      expect(e.examples).toHaveLength(2);
      for (const x of e.examples) {
        expect(x.de.trim()).not.toBe('');
        expect(x.en.trim()).not.toBe('');
        expect(x.fr.trim()).not.toBe('');
      }
      if (e.specialSlug) expect(SPECIAL_SLUGS).toContain(e.specialSlug);
    });
  }

  it('rejects an entry with a missing French field', () => {
    const bad = { ...TENSE_GUIDE.perfekt, how: { en: 'x'.repeat(20), fr: '' } };
    expect(TenseGuideEntrySchema.safeParse(bad).success).toBe(false);
  });
});

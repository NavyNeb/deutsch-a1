import { describe, it, expect } from 'vitest';
import { wordHref, lemmaOf, lessonSentences } from './word-links';

describe('word links', () => {
  it('encodes headwords and the optional query', () => {
    expect(wordHref('gehen')).toBe('/dictionary/gehen');
    expect(wordHref('Straße', 'strasse')).toBe('/dictionary/Stra%C3%9Fe?q=strasse');
    expect(wordHref('sich freuen')).toBe('/dictionary/sich%20freuen');
  });

  it('links a form, English or fuzzy hit to its lemma', () => {
    expect(lemmaOf({ entry: { w: 'gehen', p: 'verb', s: [] } })).toBe('gehen');
  });

  it('matches whole words only', () => {
    const r = lessonSentences(['hat'], 50);
    expect(r.length).toBeGreaterThan(0);
    for (const s of r) expect(/(?<![\p{L}])hat(?![\p{L}])/iu.test(s.de)).toBe(true);
    expect(r[0].lessonId).toBeTruthy();
  });

  it('returns nothing for empty or unknown forms and respects the limit', () => {
    expect(lessonSentences([])).toEqual([]);
    expect(lessonSentences(['zzzqqqxx'])).toEqual([]);
    expect(lessonSentences(['ich', 'du', 'ist'], 2)).toHaveLength(2);
  });

  it('treats regex characters in forms literally', () => {
    expect(() => lessonSentences(['a(b', '[x'])).not.toThrow();
  });
});

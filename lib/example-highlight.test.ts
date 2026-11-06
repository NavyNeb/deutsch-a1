import { describe, it, expect } from 'vitest';
import type { VocabItem } from '@/content/types';
import { highlightExample } from './example-highlight';

const v = (german: string, gender: VocabItem['gender']): VocabItem => ({
  id: german, german, english: 'x', gender, syllables: ['X'], example: { de: 'x', en: 'x' },
});

const vocab = [v('die Lampe', 'die'), v('der Tisch', 'der'), v('aufstehen', null), v('Guten Tag', null), v('das Tischtennis', 'das')];

describe('highlightExample', () => {
  it('marks the nouns of the vocabulary with their gender', () => {
    const segs = highlightExample('Die Lampe steht auf dem Tisch.', vocab);
    expect(segs.filter((s) => s.gender).map((s) => [s.text, s.gender])).toEqual([['Lampe', 'die'], ['Tisch', 'der']]);
  });

  it('round-trips to the original string', () => {
    const text = 'Die Lampe steht auf dem Tisch, nicht wahr?';
    expect(highlightExample(text, vocab).map((s) => s.text).join('')).toBe(text);
  });

  it('ignores verbs and phrases without a gender', () => {
    const segs = highlightExample('Ich will aufstehen. Guten Tag!', vocab);
    expect(segs.every((s) => s.gender === null)).toBe(true);
  });

  it('a sentence without matches is a single segment', () => {
    expect(highlightExample('Es regnet heute.', vocab)).toEqual([{ text: 'Es regnet heute.', gender: null }]);
  });

  it('does not match substrings of longer words', () => {
    const segs = highlightExample('Wir spielen Tischtennis.', [v('der Tisch', 'der')]);
    expect(segs.every((s) => s.gender === null)).toBe(true);
  });

  it('matches the whole compound when it is in the vocabulary', () => {
    const segs = highlightExample('Wir spielen Tischtennis.', vocab);
    expect(segs.find((s) => s.gender)).toEqual({ text: 'Tischtennis', gender: 'das' });
  });

  it('is case-sensitive: a lowercase verb is not the noun', () => {
    expect(highlightExample('Wir tisch', [v('der Tisch', 'der')]).every((s) => s.gender === null)).toBe(true);
  });

  it('handles an empty sentence and empty vocabulary', () => {
    expect(highlightExample('', vocab)).toEqual([]);
    expect(highlightExample('Die Lampe.', [])).toEqual([{ text: 'Die Lampe.', gender: null }]);
  });
});

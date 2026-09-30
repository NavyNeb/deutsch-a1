import { describe, expect, it } from 'vitest';
import { findArticleIssues } from './article-check';
import type { DictEntry } from './dictionary';

const DB: Record<string, DictEntry[]> = {
  Haus: [{ w: 'Haus', p: 'noun', g: 'n', pl: 'Häuser', s: ['house'] }],
  Tisch: [{ w: 'Tisch', p: 'noun', g: 'm', pl: 'Tische', s: ['table'] }],
  Frau: [{ w: 'Frau', p: 'noun', g: 'f', pl: 'Frauen', s: ['woman'] }],
  Lehrer: [{ w: 'Lehrer', p: 'noun', g: 'm', pl: 'Lehrer', s: ['teacher'] }],
  See: [{ w: 'See', p: 'noun', g: 'm/f', pl: 'Seen', s: ['lake'] }],
  Ding: [{ w: 'Ding', p: 'noun', s: ['thing'] }],
};
const lookup = (w: string) => DB[w];

describe('findArticleIssues', () => {
  it('accepts correct articles', () => {
    expect(findArticleIssues('Das Haus ist groß. Ein Tisch. Eine Frau. Die Frau.', lookup)).toEqual([]);
  });

  it('flags das + masculine and offers der', () => {
    const [i] = findArticleIssues('Ich sehe das Tisch.', lookup);
    expect(i.offset).toBe(9);
    expect(i.length).toBe(3);
    expect(i.replacements).toEqual(['der']);
  });

  it('flags ein + feminine and eine + neuter, keeping capitalisation', () => {
    expect(findArticleIssues('Ein Frau', lookup)[0].replacements).toEqual(['Eine']);
    expect(findArticleIssues('eine Haus', lookup)[0].replacements).toEqual(['ein']);
  });

  it('flags die + masculine unless the plural equals the singular', () => {
    expect(findArticleIssues('die Tisch', lookup)).toHaveLength(1);
    expect(findArticleIssues('die Lehrer', lookup)).toEqual([]);
  });

  it('never flags ambiguous words or unknown ones', () => {
    expect(findArticleIssues('die See', lookup)).toEqual([]);
    expect(findArticleIssues('das See', lookup)[0].replacements).toEqual(['der', 'die']);
    expect(findArticleIssues('das Ding', lookup)).toEqual([]);
    expect(findArticleIssues('das Unbekannt', lookup)).toEqual([]);
    expect(findArticleIssues('der Haus', lookup)).toEqual([]);
  });

  it('ignores non-adjacent or lowercase words', () => {
    expect(findArticleIssues('das, Tisch', lookup)).toEqual([]);
    expect(findArticleIssues('das tisch', lookup)).toEqual([]);
  });

  it('localises the message', () => {
    expect(findArticleIssues('das Tisch', lookup, 'fr')[0].message).toContain('masculin');
  });
});

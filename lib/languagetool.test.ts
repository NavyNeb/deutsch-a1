import { describe, expect, it } from 'vitest';
import { applyIssue, mapMatches, overlaps, rebaseIssues } from './languagetool';

const text = 'Ich habe ein Haus gehen. Das ist shcön.';
const fixture = {
  matches: [
    {
      message: 'Möglicherweise fehlt ein Verb.',
      offset: 4, length: 4,
      replacements: [{ value: 'hatte' }, { value: 'habe' }],
      rule: { id: 'X_RULE', issueType: 'grammar', category: { id: 'GRAMMAR' } },
    },
    {
      message: 'Möglicher Tippfehler gefunden.',
      offset: 32, length: 5,
      replacements: [{ value: 'schön' }],
      rule: { id: 'GERMAN_SPELLER_RULE', issueType: 'misspelling', category: { id: 'TYPOS' } },
    },
    { message: 'bad', offset: 500, length: 3, rule: { id: 'OUT' } },
    { message: 'zero', offset: 1, length: 0, rule: { id: 'ZERO' } },
  ],
};

describe('mapMatches', () => {
  it('maps, classifies and sorts issues, dropping out-of-range ones', () => {
    const issues = mapMatches(fixture, text);
    expect(issues.map((i) => i.ruleId)).toEqual(['X_RULE', 'GERMAN_SPELLER_RULE']);
    expect(issues[0].kind).toBe('grammar');
    expect(issues[1].kind).toBe('spelling');
    expect(issues[1].replacements).toEqual(['schön']);
  });

  it('tolerates malformed payloads', () => {
    expect(mapMatches(null, text)).toEqual([]);
    expect(mapMatches({}, text)).toEqual([]);
  });
});

describe('applyIssue / overlaps', () => {
  it('replaces the flagged range', () => {
    expect(applyIssue('Das ist shcön.', { offset: 8, length: 5 }, 'schön')).toBe('Das ist schön.');
  });
  it('detects overlapping ranges', () => {
    expect(overlaps({ offset: 0, length: 5 }, { offset: 4, length: 3 })).toBe(true);
    expect(overlaps({ offset: 0, length: 4 }, { offset: 4, length: 3 })).toBe(false);
  });
});

describe('rebaseIssues', () => {
  const issues = [{ offset: 4, length: 4 }, { offset: 20, length: 5 }];
  const old = 'Ich habe ein Haus gehen shcön';
  it('keeps issues before an edit and shifts those after it', () => {
    const next = old.replace('ein Haus', 'einen großen Haus');
    const r = rebaseIssues([{ offset: 4, length: 4 }, { offset: 24, length: 5 }], old, next);
    expect(r[0].offset).toBe(4);
    expect(r[1].offset).toBe(24 + (next.length - old.length));
  });
  it('drops issues touched by the edit', () => {
    expect(rebaseIssues(issues, old, old.replace('habe', 'hab'))).toHaveLength(1);
  });
  it('is the identity for unchanged text', () => {
    expect(rebaseIssues(issues, old, old)).toBe(issues);
  });
});

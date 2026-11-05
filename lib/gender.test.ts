import { describe, it, expect } from 'vitest';
import { genderMeta, splitArticle } from './gender';

describe('genderMeta', () => {
  it('der is a cobalt square', () => {
    expect(genderMeta('der')).toEqual({ gender: 'der', shape: 'square', fill: 'var(--der)', text: 'var(--der-t)' });
  });
  it('die is a rose circle', () => {
    expect(genderMeta('die')).toMatchObject({ shape: 'circle', fill: 'var(--die)', text: 'var(--die-t)' });
  });
  it('das is a sun triangle', () => {
    expect(genderMeta('das')).toMatchObject({ shape: 'triangle', fill: 'var(--das)', text: 'var(--das-t)' });
  });
  it('null gender has no meta', () => {
    expect(genderMeta(null)).toBeNull();
  });
});

describe('splitArticle', () => {
  it('strips a matching leading article', () => {
    expect(splitArticle('die Uhr', 'die')).toEqual({ article: 'die', noun: 'Uhr' });
  });
  it('leaves phrases without gender untouched', () => {
    expect(splitArticle('Guten Tag', null)).toEqual({ article: null, noun: 'Guten Tag' });
  });
  it('leaves verbs untouched', () => {
    expect(splitArticle('aufstehen', null)).toEqual({ article: null, noun: 'aufstehen' });
  });
  it('handles plural-only nouns', () => {
    expect(splitArticle('die Eltern', 'die')).toEqual({ article: 'die', noun: 'Eltern' });
  });
  it('does not strip an article that disagrees with the gender', () => {
    expect(splitArticle('der Tag', 'die')).toEqual({ article: null, noun: 'der Tag' });
  });
});

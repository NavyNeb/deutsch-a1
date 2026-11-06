import { describe, expect, it } from 'vitest';
import { PAGE_GROUPS, pageGroupFor } from './kumpel-pages';

describe('pageGroupFor', () => {
  it.each([
    ['/', 'today'],
    ['/path', 'path'],
    ['/path/', 'path'],
    ['/practice', 'practice'],
    ['/specials', 'practice'],
    ['/library', 'library'],
    ['/dictionary', 'library'],
    ['/dictionary/Haus', 'library'],
    ['/textbook', 'library'],
    ['/exams', 'library'],
    ['/exams/goethe/a1', 'library'],
    ['/me', 'me'],
    ['/statistics', 'me'],
    ['/account', 'me'],
    ['/settings', 'me'],
  ])('%s is in the %s group', (path, group) => {
    expect(pageGroupFor(path)).toBe(group);
  });

  it.each([
    '/lesson/l1/learn',
    '/lesson/l1/review',
    '/specials/x/learn',
    '/specials/x',
    '/practice/review',
    '/games/sprint',
    '/games/audio',
    '/speak',
    '/write',
    '/textbook/read/abc',
    '/exams/goethe/a1/set1/lesen',
    '/exams/goethe/a1/part/lesen/1',
    '/welcome',
    '/offline',
    '/nope',
  ])('%s gets no Kumpel', (path) => {
    expect(pageGroupFor(path)).toBeNull();
  });

  it('lists the five groups in order', () => {
    expect(PAGE_GROUPS).toEqual(['today', 'path', 'practice', 'library', 'me']);
  });
});

import { describe, expect, it } from 'vitest';
import { PAGE_GROUPS, pageGroupFor } from './kumpel-pages';

describe('pageGroupFor', () => {
  it.each([
    ['/', 'today'],
    ['/path', 'path'],
    ['/path/', 'path'],
    ['/practice', 'practice'],
    ['/practice/review', 'review'],
    ['/games/sprint', 'games'],
    ['/games/audio', 'games'],
    ['/speak', 'speak'],
    ['/write', 'write'],
    ['/specials', 'specials'],
    ['/specials/modalverben', 'special'],
    ['/specials/modalverben/review', 'special'],
    ['/library', 'library'],
    ['/dictionary', 'dictionary'],
    ['/dictionary/Haus', 'word'],
    ['/textbook', 'textbook'],
    ['/exams', 'exams'],
    ['/exams/goethe/a1', 'examLevel'],
    ['/exams/goethe/a1/part/lesen/1', 'examLevel'],
    ['/exams/goethe/a1/set1/lesen', 'examTask'],
    ['/exams/goethe/a1/part/lesen/1/set1', 'examTask'],
    ['/me', 'me'],
    ['/statistics', 'statistics'],
    ['/account', 'account'],
    ['/settings', 'settings'],
    ['/lesson/l1/review', 'chapter'],
  ])('%s is in the %s group', (path, group) => {
    expect(pageGroupFor(path)).toBe(group);
  });

  it.each([
    '/lesson/l1/learn',
    '/specials/modalverben/learn',
    '/textbook/read/abc',
    '/welcome',
    '/offline',
    '/nope',
    '/exams/goethe',
  ])('%s gets no Kumpel', (path) => {
    expect(pageGroupFor(path)).toBeNull();
  });

  it('lists every group exactly once', () => {
    expect(new Set(PAGE_GROUPS).size).toBe(PAGE_GROUPS.length);
    expect(PAGE_GROUPS.length).toBe(21);
  });
});

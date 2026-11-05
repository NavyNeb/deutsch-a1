import { describe, it, expect } from 'vitest';
import { NAV_ITEMS, activeNavId, isImmersive } from './nav';

describe('NAV_ITEMS', () => {
  it('lists the five destinations in order', () => {
    expect(NAV_ITEMS.map((n) => [n.id, n.href, n.de])).toEqual([
      ['today', '/', 'Heute'],
      ['path', '/path', 'Weg'],
      ['practice', '/practice', 'Üben'],
      ['library', '/library', 'Bibliothek'],
      ['me', '/me', 'Du'],
    ]);
  });
});

describe('activeNavId', () => {
  it('/ is today', () => expect(activeNavId('/')).toBe('today'));
  it('/path is path', () => expect(activeNavId('/path')).toBe('path'));
  it('/games/sprint belongs to practice', () => expect(activeNavId('/games/sprint')).toBe('practice'));
  it('/practice/review belongs to practice', () => expect(activeNavId('/practice/review')).toBe('practice'));
  it('/specials/modalverben belongs to practice', () => expect(activeNavId('/specials/modalverben')).toBe('practice'));
  it('/dictionary/haus belongs to library', () => expect(activeNavId('/dictionary/haus')).toBe('library'));
  it('/exams/goethe/a1 belongs to library', () => expect(activeNavId('/exams/goethe/a1')).toBe('library'));
  it('/statistics belongs to me', () => expect(activeNavId('/statistics')).toBe('me'));
  it('/ does not leak into other routes', () => expect(activeNavId('/path')).not.toBe('today'));
  it('does not match a route that merely shares a prefix', () => expect(activeNavId('/pathology')).toBeNull());
  it('the lesson player has no active tab', () => expect(activeNavId('/lesson/l1/learn')).toBeNull());
  it('lesson review has no active tab', () => expect(activeNavId('/lesson/l1/review')).toBeNull());
});

describe('isImmersive', () => {
  it('lesson player is immersive', () => expect(isImmersive('/lesson/l1/learn')).toBe(true));
  it('special player is immersive', () => expect(isImmersive('/specials/modalverben/learn')).toBe(true));
  it('lesson review is not immersive', () => expect(isImmersive('/lesson/l1/review')).toBe(false));
  it('home is not immersive', () => expect(isImmersive('/')).toBe(false));
});

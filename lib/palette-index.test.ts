import { describe, it, expect } from 'vitest';
import { lessons } from '@/content';
import { buildPaletteIndex, searchPalette, type PaletteItem } from './palette-index';

const index: PaletteItem[] = buildPaletteIndex(lessons, 'en');

describe('buildPaletteIndex', () => {
  it('has one item per lesson linking to its player', () => {
    const items = index.filter((i) => i.group === 'lesson');
    expect(items).toHaveLength(lessons.length);
    const first = lessons[0];
    expect(items.find((i) => i.id === `lesson:${first.id}`)).toMatchObject({ href: `/lesson/${first.id}/learn`, title: first.title.de });
  });

  it('includes the five nav pages and the practice tools', () => {
    const hrefs = index.map((i) => i.href);
    for (const h of ['/', '/path', '/practice', '/library', '/me', '/games/sprint', '/games/audio', '/practice/review', '/speak', '/write']) {
      expect(hrefs, h).toContain(h);
    }
  });
});

describe('Kumpel command', () => {
  it('is in the index as a page command that carries no route', () => {
    const item = index.find((i) => i.id === 'page:kumpel');
    expect(item).toMatchObject({ group: 'page', title: 'Kumpel', href: '#kumpel' });
  });

  it('is found by typing its name', () => {
    expect(searchPalette('kum', index).map((i) => i.id)).toContain('page:kumpel');
  });
});

describe('searchPalette', () => {
  it('finds a lesson by German title prefix, first', () => {
    const r = searchPalette('gegen', index);
    expect(r[0].title).toBe('Gegenstände und Plural');
  });

  it('is diacritic-insensitive', () => {
    expect(searchPalette('gegenstande', index).map((i) => i.title)).toContain('Gegenstände und Plural');
  });

  it('empty or blank query returns []', () => {
    expect(searchPalette('', index)).toEqual([]);
    expect(searchPalette('   ', index)).toEqual([]);
  });

  it('prefix outranks substring', () => {
    const items: PaletteItem[] = [
      { id: 'a', group: 'page', title: 'Weltreise', href: '/a' },
      { id: 'b', group: 'page', title: 'Reise', href: '/b' },
    ];
    expect(searchPalette('reise', items).map((i) => i.id)).toEqual(['b', 'a']);
  });

  it('respects the limit', () => {
    expect(searchPalette('e', index, 3)).toHaveLength(3);
  });

  it('matches the translated subtitle too', () => {
    expect(searchPalette('library', index).map((i) => i.href)).toContain('/library');
  });
});

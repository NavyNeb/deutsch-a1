import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import type { DictEntry } from '@/lib/dictionary';
import { addRecent, clearRecents } from '@/lib/recent-searches';

let search = '';
vi.mock('next/navigation', () => ({ useSearchParams: () => new URLSearchParams(search) }));
vi.mock('@/lib/audio', () => ({ speakText: vi.fn(), ttsSrc: (s: string) => s, playAudio: vi.fn() }));

const HAUS: DictEntry = { w: 'Haus', p: 'noun', g: 'n', pl: 'Häuser', gen: 'Hauses', s: ['house', 'building'] };
const GEHEN: DictEntry = { w: 'gehen', p: 'verb', v: 'geht, ging, ist gegangen', s: ['to go'] };
vi.mock('@/lib/dictionary', async () => {
  const actual = await vi.importActual<typeof import('@/lib/dictionary')>('@/lib/dictionary');
  return {
    ...actual,
    searchDictionary: async (q: string) => ({
      hits: q.toLowerCase().startsWith('haus') ? [{ entry: HAUS, kind: 'exact' as const }] : q.toLowerCase().startsWith('geh') ? [{ entry: GEHEN, kind: 'exact' as const }] : [],
      needsMoreLetters: false,
    }),
  };
});

import { DictionaryView } from './DictionaryView';

beforeEach(() => { search = ''; localStorage.clear(); clearRecents(); window.history.replaceState(null, '', '/dictionary'); });

describe('DictionaryView', () => {
  it('has a search bar that opens the ⌘K modal instead of taking typing itself', () => {
    const { container } = render(<DictionaryView />);
    expect(container.querySelector('input')).toBeNull();
    const opened: unknown[] = [];
    const h = (e: Event) => opened.push((e as CustomEvent).detail);
    window.addEventListener('open-palette', h);
    fireEvent.click(screen.getByRole('button', { name: /search german or english/i }));
    window.removeEventListener('open-palette', h);
    expect(opened).toEqual([{ query: '' }]);
  });

  it('lists recent dictionary lookups as links, leaving out lessons and pages', () => {
    addRecent({ title: 'Haus', subtitle: 'house', href: '/dictionary/Haus' });
    addRecent({ title: 'Gegenstände und Plural', href: '/lesson/l5/learn' });
    render(<DictionaryView />);
    expect(screen.getByText('Recent searches')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Haus' })).toHaveAttribute('href', '/dictionary/Haus');
    expect(screen.queryByRole('link', { name: /Gegenstände/ })).toBeNull();
  });

  it('hides the recents block when there are none', () => {
    render(<DictionaryView />);
    expect(screen.queryByText('Recent searches')).toBeNull();
  });

  it('shows results for the ?q= in the URL', async () => {
    search = 'q=haus';
    render(<DictionaryView />);
    expect(await screen.findByRole('heading', { name: 'Haus' })).toBeInTheDocument();
    expect(screen.getByText('haus', { selector: 'span' })).toBeInTheDocument(); // the query shown in the bar
  });

  it('follows a new ?q= arriving from the modal ("all results")', async () => {
    search = 'q=haus';
    const { rerender } = render(<DictionaryView />);
    await screen.findByRole('heading', { name: 'Haus' });
    search = 'q=gehen';
    rerender(<DictionaryView />);
    expect(await screen.findByRole('heading', { name: 'gehen' })).toBeInTheDocument();
  });

  it('clearing the query returns to the landing state', async () => {
    search = 'q=haus';
    render(<DictionaryView />);
    await screen.findByRole('heading', { name: 'Haus' });
    fireEvent.click(screen.getByRole('button', { name: /clear/i }));
    expect(screen.queryByRole('heading', { name: 'Haus' })).toBeNull();
  });
});

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { WordDetail } from './WordDetail';
import { clearRecents, getRecents } from '@/lib/recent-searches';
import type { DictEntry } from '@/lib/dictionary';

const DATA: Record<string, DictEntry[]> = {
  gehen: [{ w: 'gehen', p: 'verb', v: 'geht, ging, ist gegangen', s: ['to go', 'to walk'], ipa: 'ˈɡeːən' }],
  Student: [{ w: 'Student', p: 'noun', g: 'm', pl: 'Studenten', gen: 'Studenten', s: ['student'] }],
  schön: [{ w: 'schön', p: 'adj', v: 'schöner, am schönsten', s: ['beautiful'] }],
};

let search = '';
vi.mock('next/navigation', () => ({ useSearchParams: () => new URLSearchParams(search) }));
vi.mock('@/lib/audio', () => ({ speakText: vi.fn(), ttsSrc: (s: string) => s, playAudio: vi.fn() }));
vi.mock('@/lib/dictionary', async () => {
  const actual = await vi.importActual<typeof import('@/lib/dictionary')>('@/lib/dictionary');
  return {
    ...actual,
    loadMeta: async () => ({}) as never,
    entriesFor: async (_m: unknown, w: string) => DATA[w] ?? [],
  };
});

beforeEach(() => { search = ''; localStorage.clear(); clearRecents(); });

describe('WordDetail', () => {
  it('renders a verb with its badge, gloss and tense tabs', async () => {
    render(<WordDetail word="gehen" />);
    expect(await screen.findByRole('heading', { level: 1, name: 'gehen' })).toBeTruthy();
    expect(screen.getByText('to go')).toBeTruthy();
    expect(screen.getByText('verb', { selector: 'span' })).toBeTruthy();
    expect(screen.getAllByRole('tab').length).toBeGreaterThan(5);
  });

  it('renders a noun with its case table', async () => {
    render(<WordDetail word="Student" />);
    await screen.findByRole('heading', { level: 1, name: 'Student' });
    expect(screen.getAllByText('den Studenten').length).toBeGreaterThan(0);
  });

  it('renders an adjective comparison', async () => {
    render(<WordDetail word="schön" />);
    expect(await screen.findByText('am schönsten')).toBeTruthy();
  });

  it('finds a lowercase landing for a capitalised noun', async () => {
    render(<WordDetail word="student" />);
    expect(await screen.findByRole('heading', { level: 1, name: 'Student' })).toBeTruthy();
  });

  it('shows the not-found state with a link back to the dictionary', async () => {
    render(<WordDetail word="Xyzzyfoo" />);
    expect(await screen.findByText(/couldn.t find this word/i)).toBeTruthy();
    const links = screen.getAllByRole('link').map((a) => a.getAttribute('href'));
    expect(links).toContain('/dictionary');
  });

  it('falls back to lesson vocabulary for a word the dictionary lacks', async () => {
    const { allVocab } = await import('@/content');
    const lessonOnly = allVocab().find((v) => !DATA[v.german]);
    expect(lessonOnly).toBeTruthy();
    render(<WordDetail word={lessonOnly!.german} />);
    expect(await screen.findByRole('heading', { level: 1, name: lessonOnly!.german })).toBeTruthy();
    expect(screen.getByText(/comes from our lessons/i)).toBeTruthy();
  });

  it('keeps the search query on the back link and shows the credit', async () => {
    search = 'q=ge';
    render(<WordDetail word="gehen" />);
    await screen.findByRole('heading', { level: 1, name: 'gehen' });
    const back = screen.getAllByRole('link').find((a) => /back to search/i.test(a.textContent ?? ''));
    expect(back?.getAttribute('href')).toBe('/dictionary?q=ge');
    await waitFor(() => expect(screen.getByText(/CC BY-SA 4.0/)).toBeTruthy());
  });

  it('has a search bar that opens the search modal, carrying the query you came from', async () => {
    search = 'q=stud';
    render(<WordDetail word="Student" />);
    await screen.findByRole('heading', { level: 1, name: 'Student' });
    const opened: unknown[] = [];
    const h = (e: Event) => opened.push((e as CustomEvent).detail);
    window.addEventListener('open-palette', h);
    fireEvent.click(screen.getByRole('button', { name: /search german or english/i }));
    window.removeEventListener('open-palette', h);
    expect(opened).toEqual([{ query: 'stud' }]);
  });

  it('puts the article above a noun in its gender colour, and none above a verb', async () => {
    const { container, unmount } = render(<WordDetail word="Student" />);
    await screen.findByRole('heading', { level: 1, name: 'Student' });
    const art = container.querySelector('[data-article]') as HTMLElement;
    expect(art.textContent).toBe('der');
    expect(art.getAttribute('data-article')).toBe('der');
    unmount();
    const verb = render(<WordDetail word="gehen" />);
    await screen.findByRole('heading', { level: 1, name: 'gehen' });
    expect(verb.container.querySelector('[data-article]')).toBeNull();
  });

  it('remembers the word in recent searches once it has loaded', async () => {
    render(<WordDetail word="Student" />);
    await screen.findByRole('heading', { level: 1, name: 'Student' });
    expect(getRecents()[0]).toMatchObject({ title: 'der Student', href: '/dictionary/Student' });
  });

  it('does not remember a word that was not found', async () => {
    render(<WordDetail word="Qwxyz" />);
    await screen.findByText(/not found|introuvable|couldn/i).catch(() => {});
    expect(getRecents()).toEqual([]);
  });
});

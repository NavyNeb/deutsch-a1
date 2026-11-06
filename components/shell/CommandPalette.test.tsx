import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { lessons } from '@/content';
import { buildPaletteIndex, searchPalette } from '@/lib/palette-index';
import { addRecent, clearRecents, getRecents } from '@/lib/recent-searches';
import { replaceSettings } from '@/lib/settings-store';

const push = vi.fn();
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }), usePathname: () => '/' }));
vi.mock('@/lib/dictionary', () => ({
  MIN_QUERY_LETTERS: 2,
  searchDictionary: vi.fn().mockResolvedValue({ hits: [], needsMoreLetters: false }),
}));

import { CommandPalette } from './CommandPalette';

beforeEach(() => { push.mockClear(); localStorage.clear(); clearRecents(); });

const open = () => fireEvent.keyDown(document, { key: 'k', ctrlKey: true });

describe('CommandPalette', () => {
  it('opens on Ctrl+K', () => {
    render(<CommandPalette />);
    expect(screen.queryByRole('dialog')).toBeNull();
    open();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('opens on the open-palette window event', () => {
    render(<CommandPalette />);
    act(() => { window.dispatchEvent(new Event('open-palette')); });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('opens on / but not while typing in an input', () => {
    render(<><input aria-label="other" /><CommandPalette /></>);
    const input = screen.getByLabelText('other');
    input.focus();
    fireEvent.keyDown(input, { key: '/' });
    expect(screen.queryByRole('dialog')).toBeNull();
    fireEvent.keyDown(document.body, { key: '/' });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('Esc closes', () => {
    render(<CommandPalette />);
    open();
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('Enter on the selected result navigates to its href', async () => {
    render(<CommandPalette />);
    open();
    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'gegen' } });
    const top = searchPalette('gegen', buildPaletteIndex(lessons, 'en'))[0];
    await waitFor(() => expect(screen.getAllByRole('option')[0]).toHaveTextContent(top.title));
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(push).toHaveBeenCalledWith(top.href);
  });

  it('arrow keys move the selection', async () => {
    render(<CommandPalette />);
    open();
    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'l' } });
    const results = searchPalette('l', buildPaletteIndex(lessons, 'en'));
    expect(results.length).toBeGreaterThan(1);
    await waitFor(() => expect(screen.getAllByRole('option')[1]).toHaveTextContent(results[1].title));
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(push).toHaveBeenCalledWith(results[1].href);
  });

  it('shows recent searches first when empty, newest first, and they navigate', async () => {
    addRecent({ title: 'Haus', subtitle: 'house', href: '/dictionary/Haus' });
    addRecent({ title: 'gehen', subtitle: 'to go', href: '/dictionary/gehen' });
    render(<CommandPalette />);
    open();
    expect(screen.getByText('Zuletzt')).toBeInTheDocument();
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveTextContent('gehen');
    expect(options[1]).toHaveTextContent('Haus');
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Enter' });
    expect(push).toHaveBeenCalledWith('/dictionary/gehen');
  });

  it('shows no recents section when nothing was searched yet', () => {
    render(<CommandPalette />);
    open();
    expect(screen.queryByText('Zuletzt')).toBeNull();
  });

  it('remembers what you opened', async () => {
    render(<CommandPalette />);
    open();
    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'gegen' } });
    const top = searchPalette('gegen', buildPaletteIndex(lessons, 'en'))[0];
    await waitFor(() => expect(screen.getAllByRole('option')[0]).toHaveTextContent(top.title));
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(getRecents()[0]).toMatchObject({ href: top.href, title: top.title });
  });

  it('can clear the recents', async () => {
    addRecent({ title: 'Haus', href: '/dictionary/Haus' });
    render(<CommandPalette />);
    open();
    fireEvent.click(screen.getByRole('button', { name: /clear recent/i }));
    expect(getRecents()).toEqual([]);
    expect(screen.queryByText('Zuletzt')).toBeNull();
  });

  it('opens with a prefilled query when the opener passes one (the dictionary search bar)', () => {
    render(<CommandPalette />);
    act(() => { window.dispatchEvent(new CustomEvent('open-palette', { detail: { query: 'haus' } })); });
    expect((screen.getByRole('combobox') as HTMLInputElement).value).toBe('haus');
  });

  it('offers "all results" for a typed word, linking to the dictionary results page', () => {
    render(<CommandPalette />);
    open();
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'haus' } });
    const all = screen.getAllByRole('option').find((o) => /all results for/i.test(o.textContent ?? ''))!;
    expect(all).toBeTruthy();
    fireEvent.click(all);
    expect(push).toHaveBeenCalledWith('/dictionary?q=haus');
  });

  it('Ctrl+K while open closes it and the next open starts clean', () => {
    render(<CommandPalette />);
    open();
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'stale' } });
    open();
    expect(screen.queryByRole('dialog')).toBeNull();
    open();
    expect((screen.getByRole('combobox') as HTMLInputElement).value).toBe('');
  });

  it('option ids stay valid for words containing spaces', () => {
    render(<CommandPalette />);
    open();
    addRecent({ title: 'künstliche Intelligenz', href: '/dictionary/k%C3%BCnstliche%20Intelligenz' });
    act(() => { window.dispatchEvent(new CustomEvent('open-palette')); });
    for (const o of screen.getAllByRole('option')) expect(o.id).not.toMatch(/\s/);
  });

  it('the Kumpel command opens Kumpel instead of navigating, and is not remembered', async () => {
    const spy = vi.fn();
    window.addEventListener('open-kumpel', spy);
    render(<CommandPalette />);
    open();
    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'kum' } });
    await waitFor(() => expect(screen.getAllByRole('option')[0]).toHaveTextContent('Kumpel'));
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(push).not.toHaveBeenCalled();
    expect(getRecents()).toHaveLength(0);
    window.removeEventListener('open-kumpel', spy);
  });

  it('hides the Kumpel command when Kumpel is switched off', async () => {
    replaceSettings({ kumpel: { enabled: false } });
    render(<CommandPalette />);
    open();
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'kum' } });
    await act(async () => {});
    expect(screen.queryByRole('option', { name: /Kumpel/ })).toBeNull();
    replaceSettings({ kumpel: undefined });
  });
});

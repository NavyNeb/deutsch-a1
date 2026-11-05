import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { lessons } from '@/content';
import { buildPaletteIndex, searchPalette } from '@/lib/palette-index';

const push = vi.fn();
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }), usePathname: () => '/' }));
vi.mock('@/lib/dictionary', () => ({
  MIN_QUERY_LETTERS: 2,
  searchDictionary: vi.fn().mockResolvedValue({ hits: [], needsMoreLetters: false }),
}));

import { CommandPalette } from './CommandPalette';

beforeEach(() => push.mockClear());

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
});

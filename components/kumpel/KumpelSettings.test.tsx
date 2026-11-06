import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { replaceSettings } from '@/lib/settings-store';
import { useLocale } from '@/lib/locale-store';
import { KumpelSettings } from './KumpelSettings';

const saved = () => JSON.parse(localStorage.getItem('deutsch-a1-settings')!).kumpel;

beforeEach(() => {
  localStorage.clear();
  replaceSettings({ kumpel: undefined });
});

describe('KumpelSettings', () => {
  it('shows every control', () => {
    render(<KumpelSettings />);
    expect(screen.getByRole('heading', { name: 'Kumpel' })).toBeInTheDocument();
    expect(screen.getByRole('switch', { name: 'Show Kumpel' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('switch', { name: 'Little hints' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: 'Right' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: 'Auto' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('button', { name: 'Restart tour' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset all hints' })).toBeInTheDocument();
    expect(screen.getByText(/Phones always use the bottom right/)).toBeInTheDocument();
  });

  it('Show Kumpel writes enabled', () => {
    render(<KumpelSettings />);
    fireEvent.click(screen.getByRole('switch', { name: 'Show Kumpel' }));
    expect(saved().enabled).toBe(false);
    expect(screen.getByRole('switch', { name: 'Show Kumpel' })).toHaveAttribute('aria-checked', 'false');
  });

  it('Position writes side', () => {
    render(<KumpelSettings />);
    fireEvent.click(screen.getByRole('radio', { name: 'Left' }));
    expect(saved().side).toBe('left');
    expect(screen.getByRole('radio', { name: 'Left' })).toHaveAttribute('aria-checked', 'true');
  });

  it('Little hints writes hints', () => {
    render(<KumpelSettings />);
    fireEvent.click(screen.getByRole('switch', { name: 'Little hints' }));
    expect(saved().hints).toBe(false);
  });

  it('Motion writes motion', () => {
    render(<KumpelSettings />);
    fireEvent.click(screen.getByRole('radio', { name: 'Calm' }));
    expect(saved().motion).toBe('calm');
  });

  it('Reset all hints empties the seen list', () => {
    replaceSettings({ kumpel: { seen: ['today', 'path'] } });
    render(<KumpelSettings />);
    fireEvent.click(screen.getByRole('button', { name: 'Reset all hints' }));
    expect(saved().seen).toEqual([]);
  });

  it('Restart tour brings Kumpel back if it was hidden or muted, then asks for the tour', () => {
    replaceSettings({ kumpel: { enabled: false, muted: true } });
    const spy = vi.fn();
    window.addEventListener('open-kumpel', spy);
    render(<KumpelSettings />);
    fireEvent.click(screen.getByRole('button', { name: 'Restart tour' }));
    expect(saved().enabled).toBe(true);
    expect(saved().muted).toBe(false);
    expect(spy.mock.calls.some((c) => (c[0] as CustomEvent).detail?.tour === true)).toBe(true);
    window.removeEventListener('open-kumpel', spy);
  });

  describe('in French', () => {
    beforeEach(() => { const h = renderHook(() => useLocale()); act(() => h.result.current.setLocale('fr')); });
    afterEach(() => { const h = renderHook(() => useLocale()); act(() => h.result.current.setLocale('en')); });

    it('renders French labels', () => {
      render(<KumpelSettings />);
      expect(screen.getByRole('switch', { name: 'Afficher Kumpel' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Relancer la visite' })).toBeInTheDocument();
    });
  });

  it('shows Show Kumpel as off after Ruhe, bitte, and turning it on un-mutes', () => {
    replaceSettings({ kumpel: { muted: true, enabled: true } });
    render(<KumpelSettings />);
    const sw = screen.getByRole('switch', { name: 'Show Kumpel' });
    expect(sw).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(sw);
    expect(saved().muted).toBe(false);
    expect(saved().enabled).toBe(true);
    expect(screen.getByRole('switch', { name: 'Show Kumpel' })).toHaveAttribute('aria-checked', 'true');
  });

  it('stacks each action under its text on narrow phones so French labels fit', () => {
    render(<KumpelSettings />);
    const row = screen.getByRole('button', { name: 'Reset all hints' }).parentElement!;
    expect(row.className).toContain('max-sm:flex-col');
    expect(row.className).toContain('max-sm:items-start');
  });
});

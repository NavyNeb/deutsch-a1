import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { replaceSettings } from '@/lib/settings-store';

let pathname = '/';
vi.mock('next/navigation', () => ({
  usePathname: () => pathname,
  useRouter: () => ({ push: vi.fn() }),
}));

import { Kumpel } from './Kumpel';

const button = () => screen.queryByRole('button', { name: 'Open Kumpel help' });

beforeEach(() => {
  pathname = '/';
  localStorage.clear();
  replaceSettings({ kumpel: undefined });
});

describe('Kumpel (resting buddy)', () => {
  it.each(['/', '/path', '/practice', '/library', '/me'])('shows on %s', async (p) => {
    pathname = p;
    render(<Kumpel />);
    expect(await screen.findByRole('button', { name: 'Open Kumpel help' })).toBeInTheDocument();
  });

  it.each(['/lesson/l1/learn', '/textbook/read/x', '/welcome', '/practice/review'])('is not shown on %s', async (p) => {
    pathname = p;
    render(<Kumpel />);
    await act(async () => {});
    expect(button()).toBeNull();
  });

  it.each([{ enabled: false }, { muted: true }])('is hidden when %j', async (kumpel) => {
    replaceSettings({ kumpel });
    render(<Kumpel />);
    await act(async () => {});
    expect(button()).toBeNull();
  });

  it('sits bottom right on phones and by default on desktop', async () => {
    render(<Kumpel />);
    const b = await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(b.className).toContain('right-4');
    expect(b.className).toContain('md:right-6');
    expect(b.className).not.toContain('md:left-6');
  });

  it('moves to the left on desktop only', async () => {
    replaceSettings({ kumpel: { side: 'left' } });
    render(<Kumpel />);
    const b = await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(b.className).toContain('md:left-6');
    expect(b.className).toContain('right-4');
    expect(b.className).not.toContain('md:right-6');
  });

  it('renders nothing on the server and on the first client render', () => {
    expect(renderToString(<Kumpel />)).toBe('');
    replaceSettings({ kumpel: { muted: true } });
    expect(renderToString(<Kumpel />)).toBe('');
  });

  it('shows the pulse ring by default and drops it in calm mode', async () => {
    const { unmount } = render(<Kumpel />);
    await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(screen.getByTestId('kumpel-ring')).toBeInTheDocument();
    unmount();
    replaceSettings({ kumpel: { motion: 'calm' } });
    render(<Kumpel />);
    await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(screen.queryByTestId('kumpel-ring')).toBeNull();
  });

  it('lifts above the fixed lesson button on the path page', async () => {
    pathname = '/path';
    render(<Kumpel />);
    const b = await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(b.className).toContain('bottom-[calc(168px+env(safe-area-inset-bottom))]');
  });

  it('toggles aria-expanded when pressed', async () => {
    render(<Kumpel />);
    const b = await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(b).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(b);
    expect(b).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(b);
    expect(b).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens the help panel for the current page and closes it with Esc, giving focus back', async () => {
    render(<Kumpel />);
    const b = await screen.findByRole('button', { name: 'Open Kumpel help' });
    fireEvent.click(b);
    const dialog = screen.getByRole('dialog', { name: 'Kumpel help' });
    expect(dialog).toHaveTextContent('Heute');
    fireEvent.keyDown(dialog, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(b).toHaveAttribute('aria-expanded', 'false');
    expect(document.activeElement).toBe(b);
  });

  it('opens straight on Questions for openKumpel({ tab: "ask" })', async () => {
    render(<Kumpel />);
    await screen.findByRole('button', { name: 'Open Kumpel help' });
    act(() => { window.dispatchEvent(new CustomEvent('open-kumpel', { detail: { tab: 'ask' } })); });
    expect(screen.getByRole('tab', { name: 'Questions' })).toHaveAttribute('aria-selected', 'true');
  });

  it('starting the tour from the panel closes the panel and announces the tour request', async () => {
    const spy = vi.fn();
    window.addEventListener('open-kumpel', spy);
    render(<Kumpel />);
    fireEvent.click(await screen.findByRole('button', { name: 'Open Kumpel help' }));
    fireEvent.click(screen.getByRole('button', { name: /Tour starten/ }));
    expect(screen.queryByRole('dialog', { name: 'Kumpel help' })).toBeNull();
    expect(spy.mock.calls.some((c) => (c[0] as CustomEvent).detail?.tour === true)).toBe(true);
    window.removeEventListener('open-kumpel', spy);
  });
});

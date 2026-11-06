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
});

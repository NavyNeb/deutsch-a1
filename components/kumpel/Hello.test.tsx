import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { replaceSettings } from '@/lib/settings-store';
import { localDay, nextLocalDay } from '@/lib/kumpel-store';

let pathname = '/';
vi.mock('next/navigation', () => ({ usePathname: () => pathname, useRouter: () => ({ push: vi.fn() }) }));

import { Kumpel } from './Kumpel';

const HELLO = { name: 'Hallo! Ich bin Kumpel.' };
const saved = () => JSON.parse(localStorage.getItem('deutsch-a1-settings')!).kumpel;

/** A learner who has started, finished the pace question and not yet met Kumpel. */
function ready(kumpel: Record<string, unknown> = {}, onboarded = true) {
  const p = emptyProgress();
  p.xp = 10;
  replaceProgress(p);
  replaceSettings({ onboarded, kumpel });
}

beforeEach(() => {
  pathname = '/';
  localStorage.clear();
  replaceProgress(emptyProgress());
  replaceSettings({ onboarded: false, kumpel: undefined });
});
afterEach(() => { vi.useRealTimers(); });

describe('first hello', () => {
  it('appears once for a learner who has started and finished the pace question', async () => {
    ready();
    render(<Kumpel />);
    const dialog = await screen.findByRole('dialog', HELLO);
    expect(dialog).toHaveTextContent('Tour starten');
    expect(dialog).toHaveTextContent('Später');
    expect(dialog).toHaveTextContent('Ruhe, bitte');
  });

  it.each([
    ['the pace question is unanswered', () => ready({}, false), '/'],
    ['a brand-new visitor (nothing started)', () => { replaceSettings({ onboarded: true }); }, '/'],
    ['on the path page', () => ready(), '/path'],
    ['on /welcome', () => ready(), '/welcome'],
    ['in the lesson player', () => ready(), '/lesson/l1/learn'],
    ['muted', () => ready({ muted: true }), '/'],
    ['switched off', () => ready({ enabled: false }), '/'],
    ['already welcomed', () => ready({ welcomed: true }), '/'],
    ['snoozed until tomorrow', () => ready({ snoozeUntil: nextLocalDay(new Date()) }), '/'],
  ])('does not appear when %s', async (_label, setup, path) => {
    setup();
    pathname = path;
    render(<Kumpel />);
    await act(async () => {});
    expect(screen.queryByRole('dialog', HELLO)).toBeNull();
  });

  it('comes back on the day the snooze ends', async () => {
    ready({ snoozeUntil: localDay(new Date()) });
    render(<Kumpel />);
    expect(await screen.findByRole('dialog', HELLO)).toBeInTheDocument();
  });

  it('Tour starten saves the hello as done before anything else renders, and asks for the tour', async () => {
    ready();
    const spy = vi.fn();
    window.addEventListener('open-kumpel', spy);
    render(<Kumpel />);
    await screen.findByRole('dialog', HELLO);
    fireEvent.click(screen.getByRole('button', { name: /Tour starten/ }));
    expect(saved().welcomed).toBe(true);
    expect(spy.mock.calls.some((c) => (c[0] as CustomEvent).detail?.tour === 'app')).toBe(true);
    expect(screen.queryByRole('dialog', HELLO)).toBeNull();
    window.removeEventListener('open-kumpel', spy);
  });

  it('a second tab or a reload does not repeat it', async () => {
    ready();
    const first = render(<Kumpel />);
    await screen.findByRole('dialog', HELLO);
    fireEvent.click(screen.getByRole('button', { name: /Tour starten/ }));
    first.unmount();
    render(<Kumpel />);
    await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(screen.queryByRole('dialog', HELLO)).toBeNull();
  });

  it('Später snoozes until tomorrow and keeps the buddy', async () => {
    ready();
    render(<Kumpel />);
    await screen.findByRole('dialog', HELLO);
    fireEvent.click(screen.getByRole('button', { name: 'Später' }));
    expect(saved().snoozeUntil).toBe(nextLocalDay(new Date()));
    expect(saved().welcomed).not.toBe(true);
    expect(screen.queryByRole('dialog', HELLO)).toBeNull();
    expect(screen.getByRole('button', { name: 'Open Kumpel help' })).toBeInTheDocument();
  });

  it('Esc counts as Später', async () => {
    ready();
    render(<Kumpel />);
    const dialog = await screen.findByRole('dialog', HELLO);
    fireEvent.keyDown(dialog, { key: 'Escape' });
    expect(saved().snoozeUntil).toBe(nextLocalDay(new Date()));
    expect(screen.queryByRole('dialog', HELLO)).toBeNull();
  });

  it('Ruhe, bitte mutes Kumpel everywhere and for good', async () => {
    ready();
    render(<Kumpel />);
    await screen.findByRole('dialog', HELLO);
    fireEvent.click(screen.getByRole('button', { name: 'Ruhe, bitte' }));
    expect(saved().muted).toBe(true);
    expect(saved().welcomed).toBe(true);
    expect(screen.queryByRole('dialog', HELLO)).toBeNull();
    expect(screen.queryByRole('button', { name: 'Open Kumpel help' })).toBeNull();
  });

  it('shows only once even if it is ignored: a later visit stays quiet', async () => {
    ready();
    const first = render(<Kumpel />);
    await screen.findByRole('dialog', HELLO);
    first.unmount();
    render(<Kumpel />);
    await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(screen.queryByRole('dialog', HELLO)).toBeNull();
    expect(saved().snoozeUntil).toBe(nextLocalDay(new Date()));
  });

  it('does not come back after the help panel was used', async () => {
    ready();
    render(<Kumpel />);
    await screen.findByRole('dialog', HELLO);
    fireEvent.click(screen.getByRole('button', { name: 'Open Kumpel help' }));
    expect(screen.queryByRole('dialog', HELLO)).toBeNull();
    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(screen.queryByRole('dialog', HELLO)).toBeNull();
  });

  it('sits right of the rail when Kumpel is on the left', async () => {
    ready({ side: 'left' });
    render(<Kumpel />);
    const dialog = await screen.findByRole('dialog', HELLO);
    expect(dialog.className).toContain('md:left-[288px]');
    expect(dialog.className).not.toContain('md:left-auto');
  });
});

import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { replaceSettings } from '@/lib/settings-store';
import { UI, t, type UIKey } from '@/lib/ui-strings';

let pathname = '/';
vi.mock('next/navigation', () => ({ usePathname: () => pathname, useRouter: () => ({ push: vi.fn() }) }));

import { Kumpel } from './Kumpel';

const HINT_KEYS = ['kumpelHintToday', 'kumpelHintPath', 'kumpelHintPractice', 'kumpelHintLibrary', 'kumpelHintMe'] as const satisfies readonly UIKey[];
const saved = () => JSON.parse(localStorage.getItem('deutsch-a1-settings')!).kumpel;

/** A learner who has already met Kumpel (the hello is done), so page hints may appear. */
function met(kumpel: Record<string, unknown> = {}) {
  const p = emptyProgress();
  p.xp = 10;
  replaceProgress(p);
  replaceSettings({ onboarded: true, kumpel: { welcomed: true, ...kumpel } });
}

beforeEach(() => {
  pathname = '/';
  localStorage.clear();
  replaceProgress(emptyProgress());
  replaceSettings({ onboarded: false, kumpel: undefined });
});
afterEach(() => { vi.useRealTimers(); });

describe('hint copy', () => {
  it.each(HINT_KEYS)('%s is short, calm and in both languages', (key) => {
    for (const l of ['en', 'fr'] as const) {
      expect(UI[key][l].length).toBeLessThanOrEqual(70);
      expect(UI[key][l]).not.toContain('!');
    }
  });
});

describe('page hints', () => {
  it('shows a hint the first time a page type is visited and remembers it', async () => {
    met();
    render(<Kumpel />);
    expect(await screen.findByTestId('kumpel-hint')).toHaveTextContent(t('kumpelHintToday', 'en'));
    expect(saved().seen).toContain('today');
  });

  it('never shows the same hint twice', async () => {
    met();
    const first = render(<Kumpel />);
    await screen.findByTestId('kumpel-hint');
    first.unmount();
    render(<Kumpel />);
    await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(screen.queryByTestId('kumpel-hint')).toBeNull();
  });

  it('shows each page type its own hint', async () => {
    met({ seen: ['today'] });
    pathname = '/path';
    render(<Kumpel />);
    expect(await screen.findByTestId('kumpel-hint')).toHaveTextContent(t('kumpelHintPath', 'en'));
  });

  it.each([
    ['hints are off', { hints: false }],
    ['Kumpel is switched off', { enabled: false }],
    ['Kumpel is muted', { muted: true }],
    ['the hello is still to come', { welcomed: false }],
  ])('stays quiet when %s', async (_label, kumpel) => {
    met(kumpel);
    render(<Kumpel />);
    await act(async () => {});
    expect(screen.queryByTestId('kumpel-hint')).toBeNull();
  });

  it('goes away when the help panel opens', async () => {
    met();
    render(<Kumpel />);
    await screen.findByTestId('kumpel-hint');
    fireEvent.click(screen.getByRole('button', { name: 'Open Kumpel help' }));
    expect(screen.queryByTestId('kumpel-hint')).toBeNull();
  });

  it('fades out by itself after six seconds', async () => {
    vi.useFakeTimers();
    met();
    render(<Kumpel />);
    await act(async () => {});
    expect(screen.getByTestId('kumpel-hint')).toBeInTheDocument();
    act(() => { vi.advanceTimersByTime(5900); });
    expect(screen.getByTestId('kumpel-hint')).toBeInTheDocument();
    act(() => { vi.advanceTimersByTime(300); });
    expect(screen.queryByTestId('kumpel-hint')).toBeNull();
  });

  it.each([
    ['a click', () => fireEvent.click(document.body)],
    ['a scroll', () => fireEvent.scroll(window)],
    ['a key press', () => fireEvent.keyDown(document.body, { key: 'a' })],
  ])('is dismissed by %s', async (_label, act1) => {
    met();
    render(<Kumpel />);
    await screen.findByTestId('kumpel-hint');
    act(() => { act1(); });
    expect(screen.queryByTestId('kumpel-hint')).toBeNull();
  });
});

import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { replaceSettings } from '@/lib/settings-store';
import { UI, t } from '@/lib/ui-strings';

let pathname = '/';
vi.mock('next/navigation', () => ({ usePathname: () => pathname, useRouter: () => ({ push: vi.fn() }) }));

import { Kumpel } from './Kumpel';

const saved = () => JSON.parse(localStorage.getItem('deutsch-a1-settings')!).kumpel;
const offer = () => screen.queryByTestId('kumpel-offer');

/** A learner who has started, so Heute is the real Heute. Kumpel state is whatever the test passes. */
function learner(kumpel: Record<string, unknown> = {}) {
  const p = emptyProgress();
  p.xp = 10;
  replaceProgress(p);
  replaceSettings({ onboarded: true, kumpel });
}

beforeEach(() => {
  pathname = '/path';
  localStorage.clear();
  replaceProgress(emptyProgress());
  replaceSettings({ onboarded: false, kumpel: undefined });
});
afterEach(() => { vi.useRealTimers(); });

describe('offer copy', () => {
  it.each(['kumpelOfferBody', 'kumpelOfferLabel'] as const)('%s is short, calm and in both languages', (key) => {
    for (const l of ['en', 'fr'] as const) {
      expect(UI[key][l].length).toBeLessThanOrEqual(60);
      expect(UI[key][l]).not.toContain('!');
    }
  });
});

describe('first-visit tour offer', () => {
  it('offers the tour of this page the first time, and remembers it', async () => {
    learner();
    render(<Kumpel />);
    const card = await screen.findByTestId('kumpel-offer');
    expect(card).toHaveTextContent('Weg');
    expect(card).toHaveTextContent(t('kumpelOfferBody', 'en'));
    expect(screen.getByRole('button', { name: 'Tour starten' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Später' })).toBeInTheDocument();
    expect(saved().seen).toContain('path');
  });

  it('does not wait for the hello: someone who has not met Kumpel yet still gets it on another page', async () => {
    learner({ welcomed: false });
    render(<Kumpel />);
    expect(await screen.findByTestId('kumpel-offer')).toBeInTheDocument();
  });

  it.each([
    ['/library', 'Bibliothek'],
    ['/exams', 'Prüfungen'],
    ['/specials', 'Specials'],
    ['/specials/modalverben', 'Kurs'],
    ['/statistics', 'Statistik'],
    ['/dictionary/Haus', 'Wort'],
  ])('offers a tour on %s, named %s', async (path, name) => {
    learner();
    pathname = path;
    render(<Kumpel />);
    expect(await screen.findByTestId('kumpel-offer')).toHaveTextContent(name);
  });

  it('leaves Heute to the hello', async () => {
    learner({ welcomed: true });
    pathname = '/';
    render(<Kumpel />);
    await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(offer()).toBeNull();
  });

  it('never offers the same page twice', async () => {
    learner();
    const first = render(<Kumpel />);
    await screen.findByTestId('kumpel-offer');
    first.unmount();
    render(<Kumpel />);
    await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(offer()).toBeNull();
  });

  it('offers each kind of page its own tour', async () => {
    learner({ seen: ['path'] });
    pathname = '/practice';
    render(<Kumpel />);
    expect(await screen.findByTestId('kumpel-offer')).toHaveTextContent('Üben');
  });

  it.each([
    ['page tours are off', { hints: false }],
    ['Kumpel is switched off', { enabled: false }],
    ['Kumpel is muted', { muted: true }],
  ])('stays quiet when %s', async (_label, kumpel) => {
    learner(kumpel);
    render(<Kumpel />);
    await act(async () => {});
    expect(offer()).toBeNull();
  });

  it('stays until the learner answers: no timer, no click-away', async () => {
    vi.useFakeTimers();
    learner();
    render(<Kumpel />);
    await act(async () => {});
    expect(offer()).not.toBeNull();
    act(() => { vi.advanceTimersByTime(60_000); });
    fireEvent.click(document.body);
    expect(offer()).not.toBeNull();
  });

  it('Später dismisses it and it stays remembered', async () => {
    learner();
    render(<Kumpel />);
    await screen.findByTestId('kumpel-offer');
    fireEvent.click(screen.getByRole('button', { name: 'Später' }));
    expect(offer()).toBeNull();
    expect(saved().seen).toContain('path');
  });

  it('Tour starten asks for the tour of this page, not the app tour, and closes the offer', async () => {
    learner();
    const spy = vi.fn();
    window.addEventListener('open-kumpel', spy);
    render(<Kumpel />);
    await screen.findByTestId('kumpel-offer');
    fireEvent.click(screen.getByRole('button', { name: 'Tour starten' }));
    expect(offer()).toBeNull();
    expect(spy.mock.calls.some((c) => (c[0] as CustomEvent).detail?.tour === true)).toBe(true);
    expect(spy.mock.calls.some((c) => (c[0] as CustomEvent).detail?.tour === 'app')).toBe(false);
    window.removeEventListener('open-kumpel', spy);
  });

  it('goes away when the help panel opens', async () => {
    learner();
    render(<Kumpel />);
    await screen.findByTestId('kumpel-offer');
    fireEvent.click(screen.getByRole('button', { name: 'Open Kumpel help' }));
    expect(offer()).toBeNull();
  });

  it('is announced politely, and does not steal focus', async () => {
    learner();
    render(<Kumpel />);
    await screen.findByTestId('kumpel-offer');
    expect(screen.getByTestId('kumpel-announce')).toHaveTextContent(t('kumpelOfferBody', 'en'));
    expect(screen.getByTestId('kumpel-offer').contains(document.activeElement)).toBe(false);
  });
});

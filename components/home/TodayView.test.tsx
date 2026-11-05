import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { newCard } from '@/lib/srs';
import { replaceProgress } from '@/lib/progress-store';
import { replaceSettings } from '@/lib/settings-store';
import { TodayView, dayPart } from './TodayView';

beforeEach(() => { replaceProgress(emptyProgress()); replaceSettings({ dailyGoal: 30, onboarded: true }); });
afterEach(() => vi.useRealTimers());

describe('dayPart', () => {
  it('maps hours to German greetings', () => {
    expect(dayPart(7)).toBe('Guten Morgen');
    expect(dayPart(13)).toBe('Guten Tag');
    expect(dayPart(19)).toBe('Guten Abend');
    expect(dayPart(23)).toBe('Guten Abend');
    expect(dayPart(3)).toBe('Guten Abend');
  });
});

describe('TodayView', () => {
  it('greets by time of day', () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date(2026, 10, 5, 19, 0, 0));
    render(<TodayView />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/^Guten Abend/);
  });

  it('shows the due count from the review queue', () => {
    const s = emptyProgress();
    const past = Date.now() - 86_400_000;
    for (const id of ['l1-hallo', 'l1-gutentag']) s.cards[id] = newCard(past);
    replaceProgress(s);
    render(<TodayView />);
    expect(screen.getByLabelText('words due')).toHaveTextContent('2');
  });

  it('renders the five sections', () => {
    render(<TodayView />);
    for (const id of ['next-up', 'goal', 'due', 'word-of-day', 'activity']) {
      expect(screen.getByTestId(`today-${id}`), id).toBeInTheDocument();
    }
  });

  it('has quick-practice links', () => {
    render(<TodayView />);
    for (const href of ['/games/sprint', '/games/audio', '/speak', '/write']) {
      expect(document.querySelector(`a[href="${href}"]`), href).not.toBeNull();
    }
  });
});

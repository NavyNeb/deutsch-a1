import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { dailyStreak, emptyStats, recordDaily, saveStats } from '@/lib/sprint-stats';
import { dateKey } from '@/lib/progress';
import type { Answer } from '@/lib/game';
import type { VocabItem } from '@/content/types';
import { QuizGame } from './QuizGame';
import { RoundReview } from './RoundReview';
import { summarizeRound } from '@/lib/game';

beforeEach(() => { localStorage.clear(); replaceProgress(emptyProgress()); });

const sprint = () => render(
  <QuizGame mode="text" gradient="none" illustration="/x.png" titleKey="sprintTitle" taglineKey="sprintTagline" howToKey="howToPlaySprint" />,
);

describe('Word Sprint level picker', () => {
  it('offers the four levels, A1 selected, each with its word count', () => {
    sprint();
    const radios = screen.getAllByRole('radio');
    expect(radios.map((r) => r.textContent?.slice(0, 2))).toEqual(['A1', 'A2', 'B1', 'B2']);
    expect(radios[0]).toHaveAttribute('aria-checked', 'true');
    for (const r of radios) expect(r.textContent).toMatch(/\d+ words/);
  });

  it('switches level, and offers easier levels only above A1', () => {
    sprint();
    expect(screen.queryByLabelText(/easier levels/i)).toBeNull();
    fireEvent.click(screen.getAllByRole('radio')[3]);
    expect(screen.getAllByRole('radio')[3]).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByLabelText(/easier levels/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start game · B2/i })).toBeInTheDocument();
  });

  it('remembers the last level played', () => {
    saveStats({ ...emptyStats(), level: 'B1' });
    sprint();
    expect(screen.getAllByRole('radio')[2]).toHaveAttribute('aria-checked', 'true');
  });

  it('starts a round at the chosen level', () => {
    sprint();
    fireEvent.click(screen.getAllByRole('radio')[1]);
    fireEvent.click(screen.getByRole('button', { name: /start game · A2/i }));
    expect(screen.getByText('60s')).toBeInTheDocument();
    expect(screen.getByText('A2')).toBeInTheDocument();
  });

  it('shows the daily challenge with the streak and today’s result', () => {
    const today = dateKey(Date.now());
    const s = recordDaily(emptyStats(), today, { level: 'A2', score: 11, total: 15 });
    saveStats(s);
    expect(dailyStreak(s, today)).toBe(1);
    sprint();
    const daily = screen.getByTestId('sprint-daily');
    expect(daily).toHaveTextContent(/daily 15/i);
    expect(daily).toHaveTextContent('Done today');
    expect(daily).toHaveTextContent('A2 11/15');
    expect(daily).toHaveTextContent('1 day streak');
  });
});

const item = (id: string, german: string, english: string, gender: VocabItem['gender'] = null): VocabItem => ({
  id, german, english, gender, syllables: [german], example: { de: '', en: '' },
});

describe('round review dictionary link', () => {
  it('sends each missed word to a dictionary search with the article removed', () => {
    const a = item('a', 'der Baum', 'tree', 'der');
    const b = item('b', 'laufen', 'to run');
    const wrong: Answer = { question: { prompt: a, choices: [a, b, item('c', 'x', 'x'), item('d', 'y', 'y')], answer: 0 }, picked: 1, correct: false };
    const wrong2: Answer = { question: { prompt: b, choices: [b, a, item('c', 'x', 'x'), item('d', 'y', 'y')], answer: 0 }, picked: 1, correct: false };
    render(<RoundReview summary={summarizeRound([wrong, wrong2])} />);
    const links = screen.getAllByRole('link', { name: /dictionary/i });
    expect(links.map((l) => l.getAttribute('href'))).toEqual(['/dictionary?q=Baum', '/dictionary?q=laufen']);
    expect(screen.getAllByText('tree').length).toBeGreaterThan(0); // the full meaning stays visible
    expect(screen.queryByText(/Satz/)).toBeNull(); // bank words have no example box
  });
});

import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { dateKey, emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { replaceSettings } from '@/lib/settings-store';
import { GoalCard } from './GoalCard';

const xpToday = (xp: number) => {
  const s = emptyProgress();
  s.activity[dateKey(Date.now())] = xp;
  replaceProgress(s);
};

beforeEach(() => { replaceProgress(emptyProgress()); replaceSettings({ dailyGoal: 30, onboarded: true }); });

describe('GoalCard', () => {
  it('0 XP of 30 renders 0% without NaN', () => {
    render(<GoalCard />);
    expect(screen.getByRole('img', { name: '0%' })).toBeInTheDocument();
    expect(screen.queryByText(/NaN/)).toBeNull();
    expect(screen.getByText('30 XP to go', { exact: false })).toBeInTheDocument();
  });

  it('custom daily goal of 100 with 18 XP is 18%', () => {
    replaceSettings({ dailyGoal: 100 });
    xpToday(18);
    render(<GoalCard />);
    expect(screen.getByRole('img', { name: '18%' })).toBeInTheDocument();
    expect(screen.getByText('82 XP to go', { exact: false })).toBeInTheDocument();
  });

  it('goal reached shows 100% and the success copy', () => {
    xpToday(45);
    render(<GoalCard />);
    expect(screen.getByRole('img', { name: '100%' })).toBeInTheDocument();
    expect(screen.getByText('Daily goal reached. Well done.')).toBeInTheDocument();
  });

  it('the remaining-XP line does not claim one lesson is enough', () => {
    replaceSettings({ dailyGoal: 100 });
    render(<GoalCard />);
    expect(screen.getByText('100 XP to go', { exact: false }).textContent).not.toMatch(/lesson|leçon/i);
  });
});

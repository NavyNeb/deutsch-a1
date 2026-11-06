import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { replaceSettings } from '@/lib/settings-store';
import { OnboardingGate } from './OnboardingGate';

beforeEach(() => { localStorage.clear(); replaceProgress(emptyProgress()); replaceSettings({ onboarded: false, dailyGoal: 30 }); });

describe('OnboardingGate', () => {
  it('stays out of the way for a brand-new visitor, so the welcome page is visible first', async () => {
    render(<OnboardingGate />);
    await new Promise((r) => setTimeout(r, 20));
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('asks for a daily pace once the learner has started', async () => {
    const s = emptyProgress();
    s.xp = 10;
    replaceProgress(s);
    render(<OnboardingGate />);
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('never shows once onboarded', async () => {
    const s = emptyProgress();
    s.xp = 10;
    replaceProgress(s);
    replaceSettings({ onboarded: true });
    render(<OnboardingGate />);
    await new Promise((r) => setTimeout(r, 20));
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});

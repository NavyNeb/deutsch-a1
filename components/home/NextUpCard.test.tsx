import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { lessons } from '@/content';
import { emptyProgress, type ProgressState } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { NextUpCard } from './NextUpCard';

const first = lessons.find((l) => l.id === 'l1')!;

beforeEach(() => replaceProgress(emptyProgress()));

describe('NextUpCard', () => {
  it('shows the next lesson title, step count and minutes left', () => {
    const s: ProgressState = emptyProgress();
    s.lessons.l1 = { steps: first.steps.slice(0, 3).map((_, i) => String(i)), exercises: {} };
    replaceProgress(s);
    render(<NextUpCard />);
    expect(screen.getByRole('heading', { name: first.title.de })).toBeInTheDocument();
    expect(screen.getByText(`Step 3 of ${first.steps.length}`)).toBeInTheDocument();
    expect(screen.getByText(/min left/)).toBeInTheDocument();
  });

  it('CTA links to the lesson player', () => {
    render(<NextUpCard />);
    expect(screen.getByRole('link', { name: /Start/ })).toHaveAttribute('href', `/lesson/${first.id}/learn`);
  });

  it('says Continue once a lesson is under way', () => {
    const s = emptyProgress();
    s.lessons.l1 = { steps: ['0'], exercises: {} };
    replaceProgress(s);
    render(<NextUpCard />);
    expect(screen.getByRole('link', { name: /Continue/ })).toBeInTheDocument();
  });

  it('when every lesson is complete shows "Alles geschafft" and links to the path', () => {
    const s = emptyProgress();
    for (const l of lessons) s.lessons[l.id] = { steps: l.steps.map((_, i) => String(i)), exercises: {} };
    replaceProgress(s);
    render(<NextUpCard />);
    expect(screen.getByRole('heading', { name: 'Alles geschafft' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Path|Weg/ })).toHaveAttribute('href', '/path');
  });
});

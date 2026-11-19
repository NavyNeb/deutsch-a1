import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { PHRASES, TALK_TOPICS } from '@/content/sprechen';
import { PhraseTrainer, withGap } from './PhraseTrainer';
import { SoundsTrainer, buildRound } from './SoundsTrainer';
import { TalkTrainer } from './TalkTrainer';
import { MINIMAL_PAIRS } from '@/content/sprechen';

beforeEach(() => { localStorage.clear(); replaceProgress(emptyProgress()); vi.restoreAllMocks(); });

describe('PhraseTrainer', () => {
  it('hides the gap word in the German sentence', () => {
    expect(withGap({ de: 'Da stimme ich Ihnen zu.', gap: 'stimme' })).toBe('Da _____ ich Ihnen zu.');
  });

  it('starts on the first phrase with its gap and counts the list', () => {
    render(<PhraseTrainer />);
    expect(screen.getByText(new RegExp(`1 / ${PHRASES.length} · 0 known`))).toBeInTheDocument();
    expect(document.body.textContent).toContain('_____');
  });

  it('filters by level and remembers a phrase marked as known', () => {
    render(<PhraseTrainer />);
    fireEvent.click(screen.getByRole('radio', { name: 'B2' }));
    const b2 = PHRASES.filter((p) => p.level === 'B2').length;
    expect(screen.getByText(new RegExp(`1 / ${b2} ·`))).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /got it/i }));
    expect(JSON.parse(localStorage.getItem('deutsch-a1-phrases-known') ?? '[]')).toHaveLength(1);
  });
});

describe('SoundsTrainer', () => {
  it('builds a round of ten questions with a known side to hear', () => {
    const round = buildRound(MINIMAL_PAIRS);
    expect(round).toHaveLength(10);
    for (const q of round) expect(['a', 'b']).toContain(q.heard);
  });

  it('repeats pairs when a group has fewer than ten', () => {
    expect(buildRound(MINIMAL_PAIRS.slice(0, 3))).toHaveLength(10);
  });

  it('shows the two words and the meanings after an answer', () => {
    render(<SoundsTrainer />);
    fireEvent.click(screen.getByRole('button', { name: /start/i }));
    const [first] = screen.getAllByRole('button').filter((b) => b.getAttribute('lang') === 'de');
    fireEvent.click(first);
    expect(screen.getByText(/=/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });
});

describe('TalkTrainer', () => {
  it('lists the B1 topics first, then the B2 topics', () => {
    render(<TalkTrainer />);
    const b1 = TALK_TOPICS.filter((t) => t.level === 'B1');
    expect(screen.getByText(b1[0].de)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('radio', { name: 'B2' }));
    const b2 = TALK_TOPICS.filter((t) => t.level === 'B2');
    expect(screen.getByText(b2[0].de)).toBeInTheDocument();
    expect(screen.queryByText(b1[0].de)).toBeNull();
  });

  it('offers the right lengths per level', () => {
    render(<TalkTrainer />);
    expect(screen.getByRole('radio', { name: '60 seconds' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('radio', { name: 'B2' }));
    expect(screen.getByRole('radio', { name: '240 seconds' })).toBeInTheDocument();
    expect(screen.queryByRole('radio', { name: '60 seconds' })).toBeNull();
  });

  it('warns when the browser cannot recognise speech', async () => {
    render(<TalkTrainer />);
    expect(await screen.findByText(/cannot turn speech into text/i)).toBeInTheDocument();
  });
});

import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { dateKey } from '@/lib/progress';
import { addWeakWords, emptySprechen, recordSpeaking, saveSprechen } from '@/lib/sprechen-stats';
import { recordExamResult } from '@/lib/exam-progress';
import { memoryBackend, saveTake, useBackendForTests } from '@/lib/takes-store';
import { SpeakProgress } from './SpeakProgress';

beforeEach(() => { localStorage.clear(); useBackendForTests(memoryBackend()); });

describe('SpeakProgress', () => {
  it('starts empty and honest', async () => {
    render(<SpeakProgress />);
    expect(screen.getByText(/No recordings yet/)).toBeInTheDocument();
    expect(screen.getAllByText('Not tried yet')).toHaveLength(7);
    expect(screen.queryByText('Words to practise')).toBeNull();
  });

  it('shows minutes this week, weak words as dictionary links, and mock exam results', async () => {
    const today = dateKey(Date.now());
    saveSprechen(addWeakWords(recordSpeaking(emptySprechen(), today, { seconds: 1200, words: 100, wordsPerMinute: 88 }), ['schön', 'schön', 'Straße']));
    recordExamResult('sim-goethe-B1', 'sprechen', 70);
    render(<SpeakProgress />);
    expect(await screen.findByText('20')).toBeInTheDocument();
    expect(screen.getByText('88')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /schön/ })).toHaveAttribute('href', '/dictionary?q=sch%C3%B6n');
    expect(screen.getByText('70% (70%)')).toBeInTheDocument();
    expect(screen.getByText('Finished a mock oral exam').closest('li')).toHaveClass('font-semibold');
    expect(screen.getByText(/Rated yourself 60% or more/).closest('li')).toHaveClass('font-semibold');
  });

  it('saves a new weekly goal', async () => {
    render(<SpeakProgress />);
    fireEvent.click(screen.getByRole('radio', { name: '60' }));
    expect(JSON.parse(localStorage.getItem('deutsch-a1-sprechen-stats') ?? '{}').goalMinutes).toBe(60);
    expect(screen.getByRole('radio', { name: '60' })).toHaveAttribute('aria-checked', 'true');
  });

  it('lists recordings and deletes one', async () => {
    await saveTake({ id: 't1', at: Date.now(), kind: 'talk', label: 'Soziale Medien: Chance oder Risiko?', seconds: 90, words: 120, wordsPerMinute: 80, blob: new Blob(['x']) });
    render(<SpeakProgress />);
    expect(await screen.findByText('Soziale Medien: Chance oder Risiko?')).toBeInTheDocument();
    await act(async () => { fireEvent.click(screen.getByRole('button', { name: /Delete: Soziale Medien/ })); });
    await waitFor(() => expect(screen.queryByText('Soziale Medien: Chance oder Risiko?')).toBeNull());
    expect(screen.getByText(/No recordings yet/)).toBeInTheDocument();
  });
});

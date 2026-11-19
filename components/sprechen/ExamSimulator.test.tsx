import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { ExamPicker } from './ExamPicker';
import { ExamSimulator } from './ExamSimulator';

vi.mock('@/lib/audio', async (orig) => ({ ...(await orig<typeof import('@/lib/audio')>()), playUntilEnd: () => Promise.resolve() }));

vi.mock('./useTalkSession', async () => {
  const React = await import('react');
  return {
    useTalkSession: () => {
      const [running, setRunning] = React.useState(false);
      return {
        running, elapsed: 0, text: '', listening: running, speechSupported: true, speechReady: true, speechError: null,
        recorderSupported: false, recorderError: null, resetText: () => {},
        start: async () => { setRunning(true); },
        finish: async () => { setRunning(false); return { text: 'Ich möchte heute über Medien sprechen. Meiner Meinung nach ist das wichtig, weil es hilft.', seconds: 100, blob: null }; },
      };
    },
  };
});

beforeEach(() => { localStorage.clear(); replaceProgress(emptyProgress()); });

describe('ExamPicker', () => {
  it('lists every mock exam with its parts and a link', () => {
    render(<ExamPicker />);
    for (const id of ['goethe-B1', 'goethe-B2', 'telc-B1', 'telc-B2', 'osd-B1', 'osd-B2', 'dtz-B1']) {
      expect(document.querySelector(`a[href="/speak/exam/${id}"]`), id).not.toBeNull();
    }
    expect(screen.getByText('Vortrag halten')).toBeInTheDocument();
    expect(screen.getAllByText(/Order of parts checked/).length).toBe(3);
  });
});

describe('ExamSimulator', () => {
  it('shows the parts before starting', () => {
    render(<ExamSimulator formatId="goethe-B2" />);
    expect(screen.getByRole('heading', { name: 'Goethe-Zertifikat B2' })).toBeInTheDocument();
    expect(screen.getByText('Vortrag halten')).toBeInTheDocument();
    expect(screen.getByText('Diskussion führen')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start the mock exam/i })).toBeInTheDocument();
  });

  it('runs a whole Goethe B2 exam, asks for a self-rating, and stores the result', async () => {
    render(<ExamSimulator formatId="goethe-B2" />);
    fireEvent.click(screen.getByRole('button', { name: /start the mock exam/i }));

    // Drive the exam until the rating screen: the examiner's voice is mocked to finish at once.
    for (let guard = 0; guard < 40; guard++) {
      if (screen.queryByRole('heading', { name: 'Rate yourself' })) break;
      await waitFor(() => {
        const any = screen.queryByRole('button', { name: /^(start now|speak|i am done|for)$/i }) ?? screen.queryByRole('heading', { name: 'Rate yourself' });
        expect(any).not.toBeNull();
      }, { timeout: 3000 });
      const next = screen.queryByRole('button', { name: /^(start now|speak|i am done|for)$/i });
      if (next) await act(async () => { fireEvent.click(next); });
    }
    expect(screen.getByRole('heading', { name: 'Rate yourself' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /see my result/i })).toBeDisabled();

    for (const group of screen.getAllByRole('radiogroup')) fireEvent.click(within(group).getByRole('radio', { name: '3' }));
    const finish = screen.getByRole('button', { name: /see my result/i });
    expect(finish).toBeEnabled();
    await act(async () => { fireEvent.click(finish); });

    expect(await screen.findByText('75%')).toBeInTheDocument();
    const stored = JSON.parse(localStorage.getItem('deutsch-a1-exam-progress') ?? '{}');
    expect(stored['sim-goethe-B2:sprechen']).toMatchObject({ best: 75, last: 75 });
    const stats = JSON.parse(localStorage.getItem('deutsch-a1-sprechen-stats') ?? '{}');
    expect(Object.values(stats.days as Record<string, { seconds: number }>)[0].seconds).toBeGreaterThan(0);
  }, 30000);

  it('says so for an unknown exam', () => {
    render(<ExamSimulator formatId="nope" />);
    expect(screen.queryByRole('button', { name: /start/i })).toBeNull();
  });
});


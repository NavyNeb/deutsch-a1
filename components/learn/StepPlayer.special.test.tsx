import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';

const push = vi.fn();
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }) }));
vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  motion: new Proxy({}, { get: () => (props: any) => { const { children, ...rest } = props; return React.createElement('div', rest, children); } }),
}));

import { StepPlayer } from './StepPlayer';
import { getProgressState, replaceProgress } from '@/lib/progress-store';
import { emptyProgress } from '@/lib/progress';

const special = {
  id: 'sp-demo', level: 'A1', number: 1, title: { de: 'Demo', en: 'Demo' }, theme: '', goals: [],
  steps: [
    { kind: 'chapter', title: 'Kapitel Eins', blurb: 'Erste Schritte' },
    { kind: 'wrapup', summary: 'ok' },
    { kind: 'quiz', title: 'Abschlussquiz', passMark: 0.8 },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'q1', prompt: 'Ich ___ Sasha.', answer: 'bin' } },
  ],
} as any;

beforeEach(() => { push.mockClear(); replaceProgress(emptyProgress()); });

describe('StepPlayer with a special', () => {
  it('renders chapter and quiz dividers and exits to exitHref', async () => {
    render(<StepPlayer lesson={special} exitHref="/specials/demo" />);
    expect(screen.getByRole('heading', { name: 'Kapitel Eins' })).toBeInTheDocument();
    expect(screen.getByText(/chapter 1 \/ 1/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /^weiter/i }));
    await userEvent.click(screen.getByRole('button', { name: /^weiter/i }));
    expect(screen.getByRole('heading', { name: 'Abschlussquiz' })).toBeInTheDocument();
    expect(screen.getByText(/80%/)).toBeInTheDocument();
  });

  it('shows the quiz result on the results screen and leaves via exitHref', async () => {
    replaceProgress({ ...emptyProgress(), lessons: { 'sp-demo': { steps: ['q1'], exercises: { q1: true } } } });
    const one = { ...special, steps: [special.steps[2], special.steps[3]] };
    render(<StepPlayer lesson={one} exitHref="/specials/demo" />);
    await userEvent.click(screen.getByRole('button', { name: /^weiter/i }));
    // jump straight to the already-answered exercise and finish
    await userEvent.click(screen.getByRole('button', { name: /^fertig/i }));
    expect(screen.getByRole('status').textContent).toMatch(/quiz passed/i);
    expect(getProgressState().lessons['sp-demo'].exercises.q1).toBe(true);
    await userEvent.click(screen.getByRole('button', { name: /back to the special/i }));
    expect(push).toHaveBeenCalledWith('/specials/demo');
    expect(screen.getByRole('button', { name: /retake the quiz/i })).toBeInTheDocument();
  });
});

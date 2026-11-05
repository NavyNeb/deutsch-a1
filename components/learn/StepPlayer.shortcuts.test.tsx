import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';

vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  motion: new Proxy({}, { get: () => (props: any) => { const { children, initial, animate, exit, transition, ...rest } = props; return React.createElement('div', rest, children); } }),
}));

import { StepPlayer } from './StepPlayer';

const lesson = {
  id: 'kb', level: 'A1', number: 1, title: { de: 'Tastatur', en: 'Keyboard' }, theme: '', goals: [],
  steps: [
    { kind: 'intro', title: 'Willkommen', goals: ['x'] },
    { kind: 'vocab', item: { id: 'kb-haus', german: 'das Haus', english: 'the house', gender: 'das', syllables: ['HAUS'], example: { de: 'Das Haus ist groß.', en: 'The house is big.' } } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'kb-e1', prompt: 'Wie heißt du?', answer: 'ja' } },
    { kind: 'wrapup', summary: 'fertig' },
  ],
} as any;

beforeEach(() => { localStorage.clear(); replaceProgress(emptyProgress()); });

describe('StepPlayer keyboard shortcuts', () => {
  it('Space advances on a vocab step', () => {
    render(<StepPlayer lesson={lesson} />);
    fireEvent.keyDown(document.body, { key: ' ' }); // intro → vocab
    expect(screen.getByRole('heading', { name: /Haus/ })).toBeInTheDocument();
    fireEvent.keyDown(document.body, { key: ' ' }); // vocab → exercise
    expect(screen.getByText('Wie heißt du?')).toBeInTheDocument();
  });

  it('ArrowLeft goes back', () => {
    render(<StepPlayer lesson={lesson} />);
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    expect(screen.getByRole('heading', { name: /Haus/ })).toBeInTheDocument();
    fireEvent.keyDown(document.body, { key: 'ArrowLeft' });
    expect(screen.getByText('Willkommen')).toBeInTheDocument();
  });

  it('ArrowRight does not advance an unanswered exercise', () => {
    render(<StepPlayer lesson={lesson} />);
    fireEvent.keyDown(document.body, { key: ' ' });
    fireEvent.keyDown(document.body, { key: ' ' });
    expect(screen.getByText('Wie heißt du?')).toBeInTheDocument();
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    fireEvent.keyDown(document.body, { key: ' ' });
    expect(screen.getByText('Wie heißt du?')).toBeInTheDocument();
    expect(screen.queryByText('fertig')).toBeNull();
  });

  it('Space inside a text input neither advances nor is cancelled, even once the step may advance', async () => {
    render(<StepPlayer lesson={lesson} />);
    fireEvent.keyDown(document.body, { key: ' ' });
    fireEvent.keyDown(document.body, { key: ' ' });
    const input = screen.getByPlaceholderText(/answer|réponse/i);
    await userEvent.type(input, 'ja');
    await userEvent.click(screen.getByRole('button', { name: /check|vérifier/i })); // correct → advancing is now allowed
    input.focus();
    const notCancelled = fireEvent.keyDown(input, { key: ' ' });
    expect(notCancelled).toBe(true);
    expect(screen.getByText('Wie heißt du?')).toBeInTheDocument();
    expect(screen.queryByText('fertig')).toBeNull();
  });

  it('typing a phrase with spaces into an answer field keeps every character', async () => {
    render(<StepPlayer lesson={lesson} />);
    fireEvent.keyDown(document.body, { key: ' ' });
    fireEvent.keyDown(document.body, { key: ' ' });
    const input = screen.getByPlaceholderText(/answer|réponse/i);
    await userEvent.type(input, 'ich bin hier');
    expect((input as HTMLInputElement).value).toBe('ich bin hier');
    expect(screen.getByText('Wie heißt du?')).toBeInTheDocument();
  });

  it('the translation toggle persists to localStorage', async () => {
    render(<StepPlayer lesson={lesson} />);
    await userEvent.click(screen.getByRole('button', { name: /translation|traduction/i }));
    expect(localStorage.getItem('deutsch-a1-show-translation')).toBe('false');
  });
});

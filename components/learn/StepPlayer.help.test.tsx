import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { replaceSettings } from '@/lib/settings-store';
import { lessonHelpFor } from '@/lib/lesson-help';

vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useReducedMotion: () => true,
  motion: new Proxy({}, { get: () => (props: any) => { const { children, ...rest } = props; return React.createElement('div', rest, children); } }),
}));

import { StepPlayer } from './StepPlayer';

const lesson = { id: 'l1', number: 1, title: { de: 'Hallo', en: 'Hi' }, theme: '', goals: [],
  steps: [ { kind: 'intro', title: 'Willkommen', goals: ['x'] }, { kind: 'wrapup', summary: 'done' } ] } as any;

const helpButton = () => screen.getByRole('button', { name: 'Help for this card' });

beforeEach(() => {
  localStorage.clear();
  replaceSettings({ kumpel: undefined });
});

describe('StepPlayer help', () => {
  it('has a "?" button in the top bar', () => {
    render(<StepPlayer lesson={lesson} />);
    expect(helpButton()).toHaveAttribute('aria-haspopup', 'dialog');
    expect(helpButton()).toHaveTextContent('?');
  });

  it('opens help for the current step from the button and closes it with Esc', () => {
    render(<StepPlayer lesson={lesson} />);
    fireEvent.click(helpButton());
    expect(screen.getByRole('dialog', { name: 'Help for this card' })).toHaveTextContent(lessonHelpFor('intro').title.en);
    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(screen.queryByRole('dialog', { name: 'Help for this card' })).toBeNull();
  });

  it('opens from the ? key', () => {
    render(<StepPlayer lesson={lesson} />);
    fireEvent.keyDown(document.body, { key: '?', shiftKey: true });
    expect(screen.getByRole('dialog', { name: 'Help for this card' })).toBeInTheDocument();
  });

  it('ignores the ? key while typing in a field', () => {
    render(<StepPlayer lesson={lesson} />);
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    fireEvent.keyDown(input, { key: '?', shiftKey: true });
    expect(screen.queryByRole('dialog', { name: 'Help for this card' })).toBeNull();
    input.remove();
  });

  it('keeps the lesson where it is while help is open', () => {
    render(<StepPlayer lesson={lesson} />);
    fireEvent.click(helpButton());
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    fireEvent.keyDown(document.body, { key: ' ' });
    expect(screen.queryByText('done')).toBeNull();
  });

  it('explains the step the learner is on', () => {
    render(<StepPlayer lesson={lesson} />);
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    expect(screen.getByText('done')).toBeInTheDocument();
    fireEvent.click(helpButton());
    expect(screen.getByRole('dialog', { name: 'Help for this card' })).toHaveTextContent(lessonHelpFor('wrapup').title.en);
  });

  it.each([{ enabled: false }, { muted: true }])('is still there when Kumpel is hidden (%j)', (kumpel) => {
    replaceSettings({ kumpel });
    render(<StepPlayer lesson={lesson} />);
    expect(helpButton()).toBeInTheDocument();
  });
});

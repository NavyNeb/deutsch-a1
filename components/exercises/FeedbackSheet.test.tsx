import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { FeedbackSheet } from './FeedbackSheet';

describe('FeedbackSheet', () => {
  it('richtig renders "Richtig!" and its primary button', () => {
    render(<FeedbackSheet kind="richtig" primaryLabel="Weiter" onPrimary={() => {}} />);
    expect(screen.getByText('Richtig!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Weiter' })).toBeInTheDocument();
  });

  it('fast renders "Fast!", the answer and the hint', () => {
    render(<FeedbackSheet kind="fast" answerLabel="Answer" answer="der Tisch" hintLabel="Tip" hint="Learn the article with the noun." primaryLabel="Try again" onPrimary={() => {}} />);
    expect(screen.getByText('Fast!')).toBeInTheDocument();
    expect(screen.getByText('der Tisch')).toBeInTheDocument();
    expect(screen.getByText('Learn the article with the noun.')).toBeInTheDocument();
    expect(screen.getByText(/^Answer:/)).toBeInTheDocument();
  });

  it('never uses the old red "bad" colour', () => {
    const { container } = render(<FeedbackSheet kind="fast" primaryLabel="Again" onPrimary={() => {}} />);
    expect(container.innerHTML).not.toMatch(/\bbad\b|--bad|red/i);
  });

  it('primary and secondary call their handlers', async () => {
    const onPrimary = vi.fn();
    const onSecondary = vi.fn();
    render(<FeedbackSheet kind="fast" primaryLabel="Try again" onPrimary={onPrimary} secondaryLabel="Show answer" onSecondary={onSecondary} />);
    await userEvent.click(screen.getByRole('button', { name: 'Try again' }));
    await userEvent.click(screen.getByRole('button', { name: 'Show answer' }));
    expect(onPrimary).toHaveBeenCalledTimes(1);
    expect(onSecondary).toHaveBeenCalledTimes(1);
  });

  it('omits buttons that have no handler', () => {
    render(<FeedbackSheet kind="richtig" />);
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('is announced politely as a status', () => {
    render(<FeedbackSheet kind="richtig" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});

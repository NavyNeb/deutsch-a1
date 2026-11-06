import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ExerciseView } from './ExerciseView';

describe('ExerciseView — feedback sheet', () => {
  const mc = { type: 'multipleChoice' as const, id: 'f1', prompt: 'Formal greeting?', options: ['Hallo', 'Guten Tag'], answer: 1, explain: 'formal' };

  it('a correct answer shows Richtig! and Weiter calls onContinue', async () => {
    const onContinue = vi.fn();
    render(<ExerciseView onResult={() => {}} onContinue={onContinue} exercise={mc} />);
    await userEvent.click(screen.getByText('Guten Tag'));
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(screen.getByText('Richtig!')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Weiter' }));
    expect(onContinue).toHaveBeenCalledTimes(1);
  });

  it('a wrong answer shows Fast! and Try again resets the response', async () => {
    render(<ExerciseView onResult={() => {}} exercise={mc} />);
    await userEvent.click(screen.getByText('Hallo'));
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(screen.getByText('Fast!')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /try again/i }));
    expect(screen.queryByText('Fast!')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /check/i })).toBeDisabled();
  });

  it('after two wrong answers Show answer reveals it and Weiter appears', async () => {
    const onContinue = vi.fn();
    render(<ExerciseView onResult={() => {}} onContinue={onContinue} exercise={mc} />);
    for (let n = 0; n < 2; n++) {
      await userEvent.click(screen.getByText('Hallo'));
      await userEvent.click(screen.getByRole('button', { name: /check/i }));
      if (n === 0) await userEvent.click(screen.getByRole('button', { name: /try again/i }));
    }
    await userEvent.click(screen.getByRole('button', { name: /show answer/i }));
    expect(screen.getByText(/^answer:/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Weiter' }));
    expect(onContinue).toHaveBeenCalledTimes(1);
  });

  it('does not show the correct article tile before the answer is revealed', async () => {
    render(<ExerciseView onResult={() => {}} exercise={{ type: 'articlePicker', id: 'f2', word: 'Fenster', answer: 'das' }} />);
    await userEvent.click(screen.getByRole('button', { name: 'der' }));
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(screen.getByRole('button', { name: 'das' })).not.toHaveAttribute('data-correct');
  });
});

describe('ExerciseView — wrong-answer hint box and Try again', () => {
  it('shows a tip box with the hint (not the answer) on a wrong multipleChoice answer, and hides it on correct', async () => {
    const onResult = vi.fn();
    render(<ExerciseView onResult={onResult}
      exercise={{
        type: 'multipleChoice', id: 'e', prompt: 'Formal greeting?', options: ['Hallo', 'Guten Tag'], answer: 1,
        explain: 'formal', hint: 'Look for the one used with strangers.',
      }} />);

    await userEvent.click(screen.getByText('Hallo'));
    await userEvent.click(screen.getByRole('button', { name: /check/i }));

    expect(onResult).toHaveBeenCalledWith(false);
    expect(screen.getByText('Fast!')).toBeInTheDocument();
    expect(screen.getByText(/look for the one used with strangers/i)).toBeInTheDocument();
    expect(screen.queryByText('formal')).not.toBeInTheDocument(); // no correct-only explanation shown
    const tryAgain = screen.getByRole('button', { name: /try again/i });
    expect(tryAgain).toBeInTheDocument();

    // Try again resets the local state: no result shown, and the wrong option
    // is no longer selected — so the learner can pick again.
    await userEvent.click(tryAgain);
    expect(screen.queryByText('Fast!')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /try again/i })).not.toBeInTheDocument();

    // Re-attempt with the correct option — no hint box, correct feedback shown instead.
    await userEvent.click(screen.getByText('Guten Tag'));
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(onResult).toHaveBeenLastCalledWith(true);
    expect(screen.getByText(/formal/)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /try again/i })).not.toBeInTheDocument();
  });

  it('falls back to the multipleChoice "explain" note as the hint when no dedicated hint is authored', async () => {
    const onResult = vi.fn();
    render(<ExerciseView onResult={onResult}
      exercise={{ type: 'multipleChoice', id: 'e2', prompt: 'p', options: ['a', 'b'], answer: 1, explain: 'teaching note' }} />);
    await userEvent.click(screen.getByText('a'));
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(screen.getByText(/teaching note/)).toBeInTheDocument();
  });

  it('never reveals the answer via the hint box for articlePicker (no dedicated hint authored)', async () => {
    const onResult = vi.fn();
    render(<ExerciseView onResult={onResult} exercise={{ type: 'articlePicker', id: 'e3', word: 'Fenster', answer: 'das' }} />);
    await userEvent.click(screen.getByRole('button', { name: 'der' }));
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(onResult).toHaveBeenCalledWith(false);
    // The answer-revealing "das Fenster" explanation must not leak into the wrong-answer box.
    expect(screen.queryByText(/das Fenster/)).not.toBeInTheDocument();
  });

  it('clears the typed value on Try again for fillBlank', async () => {
    const onResult = vi.fn();
    render(<ExerciseView onResult={onResult}
      exercise={{ type: 'fillBlank', id: 'e4', prompt: 'Ich ___ Nicole.', answer: 'bin', hint: 'Which form of sein goes with ich?' }} />);
    const input = screen.getByPlaceholderText(/type your answer/i);
    await userEvent.type(input, 'bist');
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(onResult).toHaveBeenCalledWith(false);
    expect(screen.getByText(/which form of sein goes with ich/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /try again/i }));
    const freshInput = screen.getByPlaceholderText(/type your answer/i) as HTMLInputElement;
    expect(freshInput.value).toBe('');
    expect(screen.getByRole('button', { name: /check/i })).toBeDisabled();
  });
});

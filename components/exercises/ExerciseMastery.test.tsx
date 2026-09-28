import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ExerciseView } from './ExerciseView';

const mc = {
  type: 'multipleChoice' as const,
  id: 'e',
  prompt: 'Formal greeting?',
  options: ['Hallo', 'Guten Tag'],
  answer: 1,
  hint: 'Used with strangers.',
};

describe('ExerciseView — mastery gating', () => {
  it('calls onPass on a correct answer, not on a wrong one', async () => {
    const onPass = vi.fn();
    render(<ExerciseView onResult={() => {}} onPass={onPass} exercise={mc} />);

    await userEvent.click(screen.getByText('Hallo')); // wrong
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(onPass).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('button', { name: /try again/i }));
    await userEvent.click(screen.getByText('Guten Tag')); // correct
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(onPass).toHaveBeenCalledTimes(1);
  });

  it('offers "Show answer" only after two misses, then reveals the answer and unlocks', async () => {
    const onPass = vi.fn();
    render(<ExerciseView onResult={() => {}} onPass={onPass} exercise={mc} />);

    // First miss — no reveal offered yet.
    await userEvent.click(screen.getByText('Hallo'));
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    expect(screen.queryByRole('button', { name: /show answer/i })).not.toBeInTheDocument();

    // Second miss — reveal now offered.
    await userEvent.click(screen.getByRole('button', { name: /try again/i }));
    await userEvent.click(screen.getByText('Hallo'));
    await userEvent.click(screen.getByRole('button', { name: /check/i }));
    const show = screen.getByRole('button', { name: /show answer/i });

    await userEvent.click(show);
    expect(screen.getByText(/^answer:/i)).toBeInTheDocument(); // reveal box shown
    expect(screen.queryByRole('button', { name: /try again/i })).not.toBeInTheDocument(); // wrong box replaced
    expect(onPass).toHaveBeenCalledTimes(1); // revealing unlocks advancing
  });
});

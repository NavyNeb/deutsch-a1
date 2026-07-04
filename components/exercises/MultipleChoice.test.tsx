import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ExerciseView } from './ExerciseView';

it('reports correct selection and shows explanation', async () => {
  const onResult = vi.fn();
  render(<ExerciseView onResult={onResult}
    exercise={{ type: 'multipleChoice', id: 'e', prompt: 'Formal greeting?', options: ['Hallo', 'Guten Tag'], answer: 1, explain: 'formal' }} />);
  await userEvent.click(screen.getByText('Guten Tag'));
  await userEvent.click(screen.getByRole('button', { name: /check/i }));
  expect(onResult).toHaveBeenCalledWith(true);
  expect(screen.getByText(/formal/)).toBeInTheDocument();
});

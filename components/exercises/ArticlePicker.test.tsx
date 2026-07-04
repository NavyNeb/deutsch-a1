import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ExerciseView } from './ExerciseView';

it('checks the chosen article', async () => {
  const onResult = vi.fn();
  render(<ExerciseView onResult={onResult} exercise={{ type: 'articlePicker', id: 'e', word: 'Fenster', answer: 'das' }} />);
  await userEvent.click(screen.getByRole('button', { name: 'das' }));
  await userEvent.click(screen.getByRole('button', { name: /check/i }));
  expect(onResult).toHaveBeenCalledWith(true);
});

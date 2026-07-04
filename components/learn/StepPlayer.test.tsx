import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

// StepPlayer calls next/navigation's useRouter(), which throws outside a mounted
// App Router context. Plain RTL render() doesn't mount one, so we stub the module
// for this unit test (StepPlayer's router usage is a fire-and-forget `router.push`
// on the last step, not exercised by this test).
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));

import { StepPlayer } from './StepPlayer';

const lesson = { id: 'l1', number: 1, title: { de: 'Hallo', en: 'Hi' }, theme: '', goals: [],
  steps: [ { kind: 'intro', title: 'Willkommen', goals: ['x'] }, { kind: 'wrapup', summary: 'done' } ] } as any;

it('advances through steps with Weiter', async () => {
  render(<StepPlayer lesson={lesson} />);
  expect(screen.getByText('Willkommen')).toBeInTheDocument();
  await userEvent.click(screen.getByRole('button', { name: /weiter/i }));
  expect(screen.getByText('done')).toBeInTheDocument();
});

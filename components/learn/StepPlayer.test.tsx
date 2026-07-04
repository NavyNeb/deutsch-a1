import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

// StepPlayer calls next/navigation's useRouter(), which throws outside a mounted
// App Router context. Plain RTL render() doesn't mount one, so we stub the module
// for this unit test (StepPlayer's router usage is a fire-and-forget `router.push`
// on the last step, not exercised by this test).
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));

// StepPlayer uses <AnimatePresence mode="wait"> so the outgoing step's exit
// animation completes before the incoming step mounts. jsdom never resolves
// framer-motion's exit animations, so real AnimatePresence would leave the
// old step in the DOM forever during a test. Mock framer-motion so animations
// are inert: AnimatePresence is a passthrough and motion.* elements render as
// plain DOM elements.
vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  motion: new Proxy(
    {},
    {
      get: () => (props: any) => {
        const { children, ...rest } = props;
        return React.createElement('div', rest, children);
      },
    }
  ),
}));

import { StepPlayer } from './StepPlayer';

const lesson = { id: 'l1', number: 1, title: { de: 'Hallo', en: 'Hi' }, theme: '', goals: [],
  steps: [ { kind: 'intro', title: 'Willkommen', goals: ['x'] }, { kind: 'wrapup', summary: 'done' } ] } as any;

it('advances through steps with Weiter', async () => {
  render(<StepPlayer lesson={lesson} />);
  expect(screen.getByText('Willkommen')).toBeInTheDocument();
  await userEvent.click(screen.getByRole('button', { name: /weiter/i }));
  expect(screen.getByText('done')).toBeInTheDocument();
});

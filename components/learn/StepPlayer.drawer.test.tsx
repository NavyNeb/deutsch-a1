import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';

vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useReducedMotion: () => true,
  motion: new Proxy({}, { get: () => (props: any) => { const { children, initial, animate, exit, transition, ...rest } = props; return React.createElement('div', rest, children); } }),
}));

import { StepPlayer } from './StepPlayer';

const lesson = {
  id: 'dr', level: 'A1', number: 1, title: { de: 'Schublade', en: 'Drawer' }, theme: '', goals: [],
  steps: [
    { kind: 'intro', title: 'Willkommen', goals: ['x'] },
    { kind: 'wrapup', summary: 'fertig' },
  ],
} as any;

beforeEach(() => { localStorage.clear(); replaceProgress(emptyProgress()); });

const opener = () => screen.getByRole('button', { name: /open lesson navigation/i });

describe('lesson contents drawer', () => {
  it('opens as a modal dialog and moves focus inside it', async () => {
    render(<StepPlayer lesson={lesson} />);
    await userEvent.click(opener());
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog.contains(document.activeElement)).toBe(true);
  });

  it('Escape closes it from anywhere and focus returns to the contents button', async () => {
    render(<StepPlayer lesson={lesson} />);
    await userEvent.click(opener());
    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.activeElement).toBe(opener());
  });

  it('Tab stays inside the dialog', async () => {
    render(<StepPlayer lesson={lesson} />);
    await userEvent.click(opener());
    const dialog = screen.getByRole('dialog');
    for (let i = 0; i < 12; i++) {
      await userEvent.tab();
      expect(dialog.contains(document.activeElement), `after ${i + 1} tabs`).toBe(true);
    }
    for (let i = 0; i < 12; i++) {
      await userEvent.tab({ shift: true });
      expect(dialog.contains(document.activeElement), `after ${i + 1} shift-tabs`).toBe(true);
    }
  });

  it('the lesson shortcuts are inert while the drawer is open', async () => {
    render(<StepPlayer lesson={lesson} />);
    await userEvent.click(opener());
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    expect(screen.queryByText('fertig')).toBeNull();
  });
});

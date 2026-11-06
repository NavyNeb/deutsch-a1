import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { lessonHelpFor, type StepKind } from '@/lib/lesson-help';
import { LessonHelp } from './LessonHelp';

describe('LessonHelp', () => {
  it.each(['vocab', 'exercise', 'intro'] as StepKind[])('shows the help for a %s step', (kind) => {
    render(<LessonHelp kind={kind} onClose={vi.fn()} />);
    const dialog = screen.getByRole('dialog', { name: 'Help for this card' });
    const help = lessonHelpFor(kind);
    expect(within(dialog).getByRole('heading', { name: help.title.en })).toBeInTheDocument();
    for (const item of help.items) {
      expect(within(dialog).getByText(item.de)).toBeInTheDocument();
      expect(within(dialog).getByText(item.text.en)).toBeInTheDocument();
    }
  });

  it('shows the keyboard keys of the move row on a word card', () => {
    render(<LessonHelp kind="vocab" onClose={vi.fn()} />);
    const dialog = screen.getByRole('dialog');
    for (const key of ['Space', '←', '→']) {
      expect(within(dialog).getByText(key, { selector: 'kbd' })).toBeInTheDocument();
    }
  });

  it('reminds that colour is grammar, with the three shapes', () => {
    render(<LessonHelp kind="vocab" onClose={vi.fn()} />);
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByText(/Colour is grammar/)).toBeInTheDocument();
    const shapes = Array.from(dialog.querySelectorAll('[data-shape]')).map((e) => e.getAttribute('data-shape'));
    expect(shapes).toEqual(['square', 'circle', 'triangle']);
  });

  it('closes with Esc and with the scrim', () => {
    const onClose = vi.fn();
    render(<LessonHelp kind="vocab" onClose={onClose} />);
    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByTestId('lesson-help-scrim'));
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it('moves focus in and gives it back to the opener', () => {
    const opener = document.createElement('button');
    document.body.appendChild(opener);
    opener.focus();
    const { unmount } = render(<LessonHelp kind="vocab" onClose={vi.fn()} />);
    expect(screen.getByRole('dialog').contains(document.activeElement)).toBe(true);
    unmount();
    expect(document.activeElement).toBe(opener);
    opener.remove();
  });
});

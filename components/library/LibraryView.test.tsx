import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BOARDS, EXAM_LEVELS } from '@/content/exams/formats';
import { LibraryView } from './LibraryView';

describe('LibraryView', () => {
  it('renders the three sections', () => {
    render(<LibraryView />);
    expect(screen.getByRole('heading', { level: 1, name: 'Nachschlagen.' })).toBeInTheDocument();
    for (const name of ['Wörterbuch', 'Lehrbuch', 'Prüfungen']) {
      expect(screen.getByRole('heading', { level: 2, name }), name).toBeInTheDocument();
    }
  });

  it('links to the textbook library', () => {
    render(<LibraryView />);
    expect(screen.getByRole('link', { name: /Lehrbuch|textbook|manuel/i })).toHaveAttribute('href', '/textbook');
  });

  it('links to every exam board and level', () => {
    render(<LibraryView />);
    for (const board of BOARDS) for (const level of EXAM_LEVELS) {
      expect(document.querySelector(`a[href="/exams/${board}/${level.toLowerCase()}"]`), `${board} ${level}`).not.toBeNull();
    }
  });

  it('pressing the search card opens the command palette', () => {
    const spy = vi.fn();
    window.addEventListener('open-palette', spy);
    render(<LibraryView />);
    fireEvent.click(screen.getByRole('button', { name: /search|chercher|rechercher/i }));
    expect(spy).toHaveBeenCalledTimes(1);
    window.removeEventListener('open-palette', spy);
  });
});

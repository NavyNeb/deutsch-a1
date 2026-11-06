import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BOOKS } from '@/lib/books';
import { BookLibrary } from './BookLibrary';

describe('BookLibrary', () => {
  it('links every book to its reader', () => {
    render(<BookLibrary />);
    for (const b of BOOKS) {
      expect(document.querySelector(`a[href="/textbook/read/${b.id}"]`), b.id).not.toBeNull();
    }
  });

  it('shows each book\'s short cover badge', () => {
    render(<BookLibrary />);
    for (const b of BOOKS.filter((x) => x.badge)) {
      expect(screen.getAllByText(b.badge!).length, b.id).toBeGreaterThan(0);
    }
  });

  it('keeps colour for grammar: covers are neutral, with no per-level gradients', () => {
    const { container } = render(<BookLibrary />);
    expect(container.innerHTML).not.toMatch(/bg-gradient|from-\[#|to-\[#/);
  });

  it('keeps the read-only notice', () => {
    render(<BookLibrary />);
    expect(screen.getByText(/can’t be downloaded or printed/)).toBeInTheDocument();
  });
});

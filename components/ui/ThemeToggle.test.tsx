import { render, screen } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';
import { ThemeToggle } from './ThemeToggle';

afterEach(() => document.documentElement.removeAttribute('data-theme'));

describe('ThemeToggle', () => {
  it('defaults to dark when no theme is stored', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument();
  });

  it('keeps a stored light theme', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeInTheDocument();
  });
});

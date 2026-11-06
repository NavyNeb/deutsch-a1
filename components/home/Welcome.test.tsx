import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Welcome } from './Welcome';

describe('Welcome', () => {
  it('pitches the product and starts at lesson 1', () => {
    render(<Welcome />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Colour is grammar/i);
    expect(screen.getByRole('link', { name: /Start with lesson 1/ })).toHaveAttribute('href', '/lesson/l1/learn');
  });
});

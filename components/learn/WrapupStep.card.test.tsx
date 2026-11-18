import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { WrapupStep } from './WrapupStep';

describe('WrapupStep summary card', () => {
  it('shows the lesson cheat sheet when the lesson has one', () => {
    render(<WrapupStep summary="Well done." card={{ title: 'Cheat sheet', sections: [{ heading: 'sein', rows: [{ de: 'ich bin', en: 'I am', fr: 'je suis' }] }] }} />);
    expect(screen.getByRole('heading', { name: 'Cheat sheet' })).toBeInTheDocument();
    expect(screen.getByText('sein')).toBeInTheDocument();
    expect(screen.getByText('ich bin')).toBeInTheDocument();
    expect(screen.getByText('I am')).toBeInTheDocument();
  });

  it('works without a card', () => {
    render(<WrapupStep summary="Well done." />);
    expect(screen.getByText('Well done.')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Cheat sheet' })).toBeNull();
  });
});

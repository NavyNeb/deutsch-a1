import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SyllableStress } from './SyllableStress';

describe('SyllableStress', () => {
  it('marks the uppercase syllable as stressed', () => {
    render(<SyllableStress syllables={['GU', 'ten', 'TAG']} />);
    expect(screen.getByText('GU')).toHaveAttribute('data-stress', 'true');
    expect(screen.getByText('ten')).toHaveAttribute('data-stress', 'false');
  });

  it('underlines the stressed syllable in the gender colour when a gender is given', () => {
    render(<SyllableStress syllables={['LAM', 'pe']} gender="die" />);
    expect((screen.getByText('LAM') as HTMLElement).style.borderBottom).toContain('var(--die)');
    expect((screen.getByText('pe') as HTMLElement).style.borderBottom).toBe('');
  });
});

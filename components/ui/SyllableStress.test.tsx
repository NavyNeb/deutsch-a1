import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SyllableStress } from './SyllableStress';

describe('SyllableStress', () => {
  it('marks the uppercase syllable as stressed', () => {
    render(<SyllableStress syllables={['GU', 'ten', 'TAG']} />);
    expect(screen.getByText('GU')).toHaveAttribute('data-stress', 'true');
    expect(screen.getByText('ten')).toHaveAttribute('data-stress', 'false');
  });
});

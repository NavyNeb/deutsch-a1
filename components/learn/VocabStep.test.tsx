import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { VocabStep } from './VocabStep';

const item = {
  id: 'v1',
  german: 'Haus',
  english: 'house',
  gender: 'das' as const,
  syllables: ['HAUS'],
  example: { de: 'Das Haus ist groß.', en: 'The house is big.' },
};

describe('VocabStep', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('marks and unmarks the word as difficult, tracking it in the hard-words store', async () => {
    render(<VocabStep item={item} />);

    const markButton = screen.getByRole('button', { name: /als schwierig markieren/i });
    expect(markButton).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(markButton);

    const markedButton = screen.getByRole('button', { name: /gemerkt/i });
    expect(markedButton).toHaveAttribute('aria-pressed', 'true');
    expect(JSON.parse(window.localStorage.getItem('deutsch-a1-progress') ?? '{}').hardWords).toContain('v1');

    await userEvent.click(markedButton);

    expect(screen.getByRole('button', { name: /als schwierig markieren/i })).toHaveAttribute('aria-pressed', 'false');
    expect(JSON.parse(window.localStorage.getItem('deutsch-a1-progress') ?? '{}').hardWords).not.toContain('v1');
  });
});

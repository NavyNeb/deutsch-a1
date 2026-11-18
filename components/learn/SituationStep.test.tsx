import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import type { LessonStep, VocabItem } from '@/content/types';
import { SituationStep } from './SituationStep';

type Situation = Extract<LessonStep, { kind: 'situation' }>;

const kaffee: VocabItem = { id: 'k1', german: 'der Kaffee', english: 'coffee', french: 'le café', gender: 'der', syllables: ['kaf', 'FEE'], example: { de: 'Ich trinke Kaffee.', en: 'I drink coffee.' } };

const step: Situation = {
  kind: 'situation', title: 'Im Café', setting: 'Two friends meet for a drink.',
  lines: [
    { who: 'Ana', de: 'Guten Tag! Einen Kaffee, bitte.', en: 'Hello! A coffee, please.', fr: 'Bonjour ! Un café, s’il vous plaît.' },
    { who: 'Ben', de: 'Gern. Das macht drei Euro.', en: 'Gladly. That is three euros.' },
  ],
  words: [kaffee],
};

beforeEach(() => { window.localStorage.clear(); });

describe('SituationStep', () => {
  it('shows the title, the setting and who says each line', () => {
    render(<SituationStep step={step} />);
    expect(screen.getByRole('heading', { name: 'Im Café' })).toBeInTheDocument();
    expect(screen.getByText('Two friends meet for a drink.')).toBeInTheDocument();
    expect(screen.getByText('Ana')).toBeInTheDocument();
    expect(screen.getByText('Ben')).toBeInTheDocument();
  });

  it('shows every German line with its translation and an audio button', () => {
    const { container } = render(<SituationStep step={step} />);
    expect(container.textContent).toContain('Guten Tag! Einen Kaffee, bitte.');
    expect(container.textContent).toContain('Gern. Das macht drei Euro.');
    expect(screen.getByText('Hello! A coffee, please.')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /^Anhören: /i })).toHaveLength(2);
  });

  it('highlights the lesson words inside the lines', () => {
    const { container } = render(<SituationStep step={step} />);
    const marked = Array.from(container.querySelectorAll('[data-keyword]')).map((e) => e.textContent);
    expect(marked).toContain('Kaffee');
  });

  it('lists the key words with their meaning', () => {
    render(<SituationStep step={step} />);
    expect(screen.getByRole('heading', { name: /key words|mots clés/i })).toBeInTheDocument();
    expect(screen.getByText('coffee')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import type { LessonStep, VocabItem } from '@/content/types';
import { WordGroupStep } from './WordGroupStep';

type Group = Extract<LessonStep, { kind: 'wordgroup' }>;

const mk = (id: string, german: string, gender: VocabItem['gender'], english: string, ex: string): VocabItem =>
  ({ id, german, english, gender, syllables: [german], example: { de: ex, en: `${english} example` } });

const step: Group = {
  kind: 'wordgroup', title: 'Drinks', note: 'Learn the article with the noun.',
  items: [mk('g1', 'der Tee', 'der', 'tea', 'Der Tee ist heiß.'), mk('g2', 'die Milch', 'die', 'milk', 'Die Milch ist kalt.'), mk('g3', 'trinken', null, 'to drink', 'Ich trinke Tee.')],
};

beforeEach(() => { window.localStorage.clear(); });

describe('WordGroupStep', () => {
  it('shows the title, the note and every word with its meaning and example', () => {
    const { container } = render(<WordGroupStep step={step} />);
    expect(screen.getByRole('heading', { name: 'Drinks' })).toBeInTheDocument();
    expect(screen.getByText('Learn the article with the noun.')).toBeInTheDocument();
    for (const w of ['tea', 'milk', 'to drink']) expect(screen.getByText(w)).toBeInTheDocument();
    expect(container.textContent).toContain('Der Tee ist heiß.');
    expect(container.textContent).toContain('Ich trinke Tee.');
  });

  it('colours the article of a gendered word and leaves other words plain', () => {
    const { container } = render(<WordGroupStep step={step} />);
    const articles = Array.from(container.querySelectorAll('[data-article]')).map((e) => e.getAttribute('data-article'));
    expect(articles).toEqual(['der', 'die']);
  });

  it('lets the learner save a word for review', async () => {
    render(<WordGroupStep step={step} />);
    await userEvent.click(screen.getAllByRole('button', { name: /^merken/i })[1]);
    expect(JSON.parse(window.localStorage.getItem('deutsch-a1-progress') ?? '{}').hardWords).toEqual(['g2']);
  });
});

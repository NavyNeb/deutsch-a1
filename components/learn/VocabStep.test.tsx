import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import type { VocabItem } from '@/content/types';
import { VocabStep } from './VocabStep';

const item: VocabItem = {
  id: 'v1',
  german: 'Haus',
  english: 'house',
  gender: 'das',
  syllables: ['HAUS'],
  example: { de: 'Das Haus ist groß.', en: 'The house is big.' },
};

const lampe: VocabItem = {
  id: 'v2', german: 'die Lampe', english: 'lamp', gender: 'die', syllables: ['LAM', 'pe'],
  example: { de: 'Die Lampe steht auf dem Tisch.', en: 'The lamp is on the table.' },
};
const tisch: VocabItem = { id: 'v3', german: 'der Tisch', english: 'table', gender: 'der', syllables: ['TISCH'], example: { de: 'x', en: 'x' } };

beforeEach(() => {
  window.localStorage.clear();
});

describe('VocabStep', () => {
  it('marks and unmarks the word as difficult, tracking it in the hard-words store', async () => {
    render(<VocabStep item={item} />);

    const markButton = screen.getByRole('button', { name: /^merken/i });
    expect(markButton).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(markButton);

    const markedButton = screen.getByRole('button', { name: /^gemerkt/i });
    expect(markedButton).toHaveAttribute('aria-pressed', 'true');
    expect(JSON.parse(window.localStorage.getItem('deutsch-a1-progress') ?? '{}').hardWords).toContain('v1');

    await userEvent.click(markedButton);

    expect(screen.getByRole('button', { name: /^merken/i })).toHaveAttribute('aria-pressed', 'false');
    expect(JSON.parse(window.localStorage.getItem('deutsch-a1-progress') ?? '{}').hardWords).not.toContain('v1');
  });

  it('renders the article above the noun for a gendered word', () => {
    const { container } = render(<VocabStep item={lampe} />);
    expect(screen.getByRole('heading', { name: 'Lampe' })).toBeInTheDocument();
    const article = container.querySelector('[data-article]') as HTMLElement;
    expect(article.textContent).toBe('die');
    expect(article.getAttribute('data-article')).toBe('die');
  });

  it('uses the declared gender as article when the word itself has none', () => {
    const { container } = render(<VocabStep item={item} />);
    expect(screen.getByRole('heading', { name: 'Haus' })).toBeInTheDocument();
    expect(container.querySelector('[data-article]')?.textContent).toBe('das');
  });

  it('renders no article and no shape for a phrase without gender', () => {
    const phrase: VocabItem = { id: 'v4', german: 'Guten Tag', english: 'Hello', gender: null, syllables: ['GU', 'ten', 'TAG'], example: { de: 'Guten Tag, Frau Meier.', en: 'Good day, Mrs Meier.' } };
    const { container } = render(<VocabStep item={phrase} />);
    expect(screen.getByRole('heading', { name: 'Guten Tag' })).toBeInTheDocument();
    expect(container.querySelector('[data-article]')).toBeNull();
    expect(container.querySelector('[data-shape]')).toBeNull();
  });

  it('renders a verb without crashing or an article', () => {
    const verb: VocabItem = { id: 'v5', german: 'aufstehen', english: 'to get up', gender: null, syllables: ['AUF', 'ste', 'hen'], example: { de: 'Ich stehe um sieben Uhr auf.', en: 'I get up at seven.' } };
    const { container } = render(<VocabStep item={verb} />);
    expect(screen.getByRole('heading', { name: 'aufstehen' })).toBeInTheDocument();
    expect(container.querySelector('[data-article]')).toBeNull();
  });

  it('handles plural-only nouns', () => {
    const eltern: VocabItem = { id: 'v6', german: 'die Eltern', english: 'parents', gender: 'die', syllables: ['EL', 'tern'], example: { de: 'Meine Eltern wohnen hier.', en: 'My parents live here.' } };
    const { container } = render(<VocabStep item={eltern} />);
    expect(screen.getByRole('heading', { name: 'Eltern' })).toBeInTheDocument();
    expect(container.querySelector('[data-article]')?.textContent).toBe('die');
  });

  it('shows the translation by default and hides it when the toggle is off', () => {
    const { unmount } = render(<VocabStep item={lampe} />);
    expect(screen.getByText('lamp')).toBeInTheDocument();
    expect(screen.getByText('The lamp is on the table.')).toBeInTheDocument();
    unmount();
    window.localStorage.setItem('deutsch-a1-show-translation', 'false');
    render(<VocabStep item={lampe} />);
    expect(screen.queryByText('lamp')).toBeNull();
    expect(screen.queryByText('The lamp is on the table.')).toBeNull();
    expect(screen.getByRole('heading', { name: 'Lampe' })).toBeInTheDocument();
  });

  it('highlights the target noun and the other lesson nouns by gender in the example', () => {
    const { container } = render(<VocabStep item={lampe} lessonVocab={[lampe, tisch]} />);
    const marked = Array.from(container.querySelectorAll('[data-gender]')).map((e) => [e.textContent, e.getAttribute('data-gender')]);
    expect(marked).toEqual([['Lampe', 'die'], ['Tisch', 'der']]);
  });

  it('shows the position in the lesson when given', () => {
    render(<VocabStep item={lampe} position={{ n: 3, total: 10 }} />);
    expect(screen.getByText(/3\s*\/\s*10/)).toBeInTheDocument();
  });
});

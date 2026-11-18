import { render, screen, renderHook, act } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { useLocale } from '@/lib/locale-store';
import type { GrammarNote } from '@/content/types';
import { GrammarStep } from './GrammarStep';

const note: GrammarNote = {
  id: 'n1', title: 'Verb in position 2', explanationMd: 'The **verb** is always second.',
  examples: [{ de: 'Ich lerne Deutsch.', en: 'I learn German.' }],
  lead: 'Use this for every statement.',
  tables: [{ title: 'sein', headers: ['ich', 'du', 'er'], rows: [['bin', 'bist', 'ist']], highlightCol: 1 }],
  anatomy: [{ parts: [{ text: 'Heute', role: 'time' }, { text: 'lerne', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'Deutsch', role: 'accusative' }], en: 'Today I learn German.' }],
  contrast: {
    a: { label: 'obwohl', examples: [{ de: 'Obwohl es regnet, gehe ich.', en: 'Although it rains, I go.' }], note: 'verb at the end' },
    b: { label: 'trotzdem', examples: [{ de: 'Es regnet. Trotzdem gehe ich.', en: 'It rains. Still, I go.' }], note: 'verb second' },
  },
  mistakes: [{ wrong: 'Heute ich lerne.', right: 'Heute lerne ich.', why: 'The verb stays second.' }],
};

afterEach(() => { const h = renderHook(() => useLocale()); act(() => h.result.current.setLocale('en')); });

describe('GrammarStep rich blocks', () => {
  it('shows the French headers and cells of a table when the interface is French', () => {
    const h = renderHook(() => useLocale());
    act(() => h.result.current.setLocale('fr'));
    const withFr: GrammarNote = { ...note, tables: [{ title: 'Moments', titleFr: 'Moments', headers: ['When', 'Say'], headersFr: ['Quand', 'Dire'], rows: [['morning', 'Guten Morgen']], rowsFr: [['matin', 'Guten Morgen']] }] };
    render(<GrammarStep note={withFr} />);
    expect(screen.getByRole('columnheader', { name: 'Quand' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'matin' })).toBeInTheDocument();
    expect(screen.queryByRole('cell', { name: 'morning' })).toBeNull();
  });

  it('shows the "use it when" lead above the explanation', () => {
    render(<GrammarStep note={note} />);
    expect(screen.getByText('Use this for every statement.')).toBeInTheDocument();
  });

  it('renders a table with headers, cells and a highlighted column', () => {
    render(<GrammarStep note={note} />);
    const table = screen.getByRole('table', { name: 'sein' });
    expect(table).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'du' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'bist' })).toHaveAttribute('data-highlight', 'true');
    expect(screen.getByRole('cell', { name: 'bin' })).not.toHaveAttribute('data-highlight', 'true');
  });

  it('breaks a sentence into parts coloured by role, with its translation', () => {
    const { container } = render(<GrammarStep note={note} />);
    expect(container.querySelector('[data-role="verb"]')?.textContent).toBe('lerne');
    expect(container.querySelector('[data-role="time"]')?.textContent).toBe('Heute');
    expect(container.querySelector('[data-role="accusative"]')?.textContent).toBe('Deutsch');
    expect(screen.getByText('Today I learn German.')).toBeInTheDocument();
  });

  it('puts two ideas side by side', () => {
    render(<GrammarStep note={note} />);
    expect(screen.getByText('obwohl')).toBeInTheDocument();
    expect(screen.getByText('trotzdem')).toBeInTheDocument();
    expect(screen.getByText('verb at the end')).toBeInTheDocument();
    expect(screen.getByText('Es regnet. Trotzdem gehe ich.')).toBeInTheDocument();
  });

  it('shows the common mistake next to the fix and why', () => {
    const { container } = render(<GrammarStep note={note} />);
    expect(container.querySelector('[data-mistake="wrong"]')?.textContent).toBe('Heute ich lerne.');
    expect(container.querySelector('[data-mistake="right"]')?.textContent).toBe('Heute lerne ich.');
    expect(screen.getByText('The verb stays second.')).toBeInTheDocument();
  });

  it('labels the example list on a rich rule screen but not on an old-style note', () => {
    const rich = render(<GrammarStep note={note} />);
    expect(screen.getByRole('heading', { name: 'Examples' })).toBeInTheDocument();
    rich.unmount();
    const plain: GrammarNote = { id: 'p', title: 'Plain', explanationMd: 'Just text.', examples: [{ de: 'Hallo.', en: 'Hello.' }] };
    render(<GrammarStep note={plain} />);
    expect(screen.queryByRole('heading', { name: 'Examples' })).toBeNull();
  });

  it('still renders an old-style note with only examples', () => {
    const plain: GrammarNote = { id: 'p', title: 'Plain', explanationMd: 'Just text.', examples: [{ de: 'Hallo.', en: 'Hello.' }] };
    const { container } = render(<GrammarStep note={plain} />);
    expect(screen.getByRole('heading', { name: 'Plain' })).toBeInTheDocument();
    expect(container.querySelector('table')).toBeNull();
    expect(container.querySelector('[data-role]')).toBeNull();
  });
});

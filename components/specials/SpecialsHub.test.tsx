import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within, fireEvent, act } from '@testing-library/react';
import { SpecialsHub } from './SpecialsHub';
import { emptyProgress, withExerciseResult, withStepDone } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import type { Special } from '@/content/types';

const ex = (id: string) => ({ kind: 'exercise', exercise: { type: 'fillBlank', id, prompt: 'p', answer: 'a' } });
const make = (slug: string, group: string, title: string, number: number, levels = ['A1', 'B1']) => ({
  id: `sp-${slug}`, level: levels[0], number, title: { de: title, en: `${title} EN`, fr: `${title} FR` }, theme: 't', goals: [],
  special: { slug, group, levels, related: [], bookRefs: [] },
  steps: [
    { kind: 'chapter', title: 'c1' }, { kind: 'chapter', title: 'c2' },
    { kind: 'quiz', title: 'q', passMark: 0.8 }, ex(`${slug}-q1`),
  ],
}) as unknown as Special;

const items = [
  make('alpha', 'verbs', 'Alpha', 1),
  make('beta', 'verbs', 'Beta', 2, ['A2', 'B1']),
  make('gamma', 'words', 'Gamma', 3, ['B1', 'B1']),
];

beforeEach(() => { act(() => replaceProgress(emptyProgress())); });

describe('SpecialsHub', () => {
  it('renders a linked card per special with level, chapter count and Start', () => {
    render(<SpecialsHub items={items} />);
    const link = screen.getByRole('link', { name: /Alpha/ });
    expect(link.getAttribute('href')).toBe('/specials/alpha');
    expect(within(link).getByText('A1–B1')).toBeTruthy();
    expect(within(link).getByText(/2 chapters/)).toBeTruthy();
    expect(within(link).getByText('Start')).toBeTruthy();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('groups specials under their level headings, in level order', () => {
    render(<SpecialsHub items={items} />);
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent ?? '');
    expect(headings[0]).toMatch(/^A1/);
    expect(headings[1]).toMatch(/^A2/);
    expect(headings[2]).toMatch(/^B1/);
    expect(headings).toHaveLength(3);
  });

  it('narrows the list with a level filter', () => {
    render(<SpecialsHub items={items} />);
    fireEvent.click(screen.getByRole('radio', { name: 'B1' }));
    expect(screen.queryByRole('link', { name: /Alpha/ })).toBeNull();
    expect(screen.getByRole('link', { name: /Gamma/ })).toBeTruthy();
    fireEvent.click(screen.getByRole('radio', { name: 'All' }));
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('shows Continue for partial progress and Quiz passed once the quiz is passed', () => {
    let s = withStepDone(emptyProgress(), 'sp-alpha', 'chapter-0');
    s = withExerciseResult(s, 'sp-beta', 'beta-q1', true);
    act(() => replaceProgress(s));
    render(<SpecialsHub items={items} />);
    expect(within(screen.getByRole('link', { name: /Alpha/ })).getByText('Continue')).toBeTruthy();
    expect(within(screen.getByRole('link', { name: /Beta/ })).getByText('Quiz passed')).toBeTruthy();
    expect(within(screen.getByRole('link', { name: /Gamma/ })).getByText('Start')).toBeTruthy();
  });
});

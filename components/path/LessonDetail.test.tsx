import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { lessons } from '@/content';
import type { Lesson } from '@/content/types';
import { emptyProgress } from '@/lib/progress';
import { LessonDetail } from './LessonDetail';

const l5 = lessons.find((l) => l.id === 'l5')!;
const bare: Lesson = { id: 'x', level: 'A1', number: 1, title: { de: 'Nur Titel', en: 'Only title' }, theme: 't', goals: [], steps: [{ kind: 'wrapup', summary: 's' }] };

describe('LessonDetail', () => {
  it('shows the authored can-do line', () => {
    render(<LessonDetail lesson={{ ...bare, canDo: { de: 'Ich kann mich vorstellen.', en: 'I can introduce myself.' } }} state={emptyProgress()} />);
    expect(screen.getByText('Ich kann mich vorstellen.')).toBeInTheDocument();
    expect(screen.getByText('I can introduce myself.')).toBeInTheDocument();
  });

  it('omits the can-do section when there is no line to show', () => {
    render(<LessonDetail lesson={bare} state={emptyProgress()} />);
    expect(screen.queryByText('Ich kann …')).toBeNull();
    expect(screen.getByRole('heading', { name: 'Nur Titel' })).toBeInTheDocument();
  });

  it('labels the grammar fallback "Schwerpunkt" rather than pretending it is an "Ich kann" line', () => {
    const withGrammar: Lesson = { ...bare, steps: [{ kind: 'grammar', note: { id: 'g', title: 'The verb sein', explanationMd: '', examples: [] } }] };
    render(<LessonDetail lesson={withGrammar} state={emptyProgress()} />);
    expect(screen.getByText('Schwerpunkt')).toBeInTheDocument();
    expect(screen.queryByText('Ich kann …')).toBeNull();
  });

  it('lists new words with gender shapes', () => {
    const { container } = render(<LessonDetail lesson={l5} state={emptyProgress()} />);
    expect(container.querySelectorAll('[data-shape]').length).toBeGreaterThan(0);
  });

  it('CTA links to the lesson player', () => {
    render(<LessonDetail lesson={l5} state={emptyProgress()} />);
    expect(screen.getByRole('link', { name: /Start/ })).toHaveAttribute('href', '/lesson/l5/learn');
  });

  it('says Continue with the step count once started', () => {
    const s = emptyProgress();
    s.lessons.l5 = { steps: ['0', '1', '2'], exercises: {} };
    render(<LessonDetail lesson={l5} state={s} />);
    expect(screen.getByRole('link', { name: /Continue/ })).toBeInTheDocument();
  });
});

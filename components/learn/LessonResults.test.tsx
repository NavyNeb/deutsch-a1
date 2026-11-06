import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { lessons } from '@/content';
import { emptyProgress, dateKey, type ProgressState } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { nextLesson } from '@/lib/path-model';
import { LessonResults } from './LessonResults';

const l1 = lessons.find((l) => l.id === 'l1')!;

function completed(): ProgressState {
  const s = emptyProgress();
  s.lessons.l1 = { steps: l1.steps.map((_, i) => String(i)), exercises: {} };
  for (const st of l1.steps) if (st.kind === 'exercise') s.lessons.l1.exercises[st.exercise.id] = true;
  s.activity[dateKey(Date.now())] = 20;
  return s;
}

const ready = () => waitFor(() => expect(document.querySelector('[data-next-loaded]')).not.toBeNull());

beforeEach(() => replaceProgress(completed()));

describe('LessonResults', () => {
  it('celebrates with Geschafft! and the lesson title', () => {
    render(<LessonResults lesson={l1} onHome={() => {}} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Geschafft!' })).toBeInTheDocument();
    expect(screen.getByText(l1.title.de)).toBeInTheDocument();
  });

  it('shows the exercise score and the number of words learned', () => {
    render(<LessonResults lesson={l1} onHome={() => {}} />);
    const quizAt = l1.steps.findIndex((s) => s.kind === 'quiz');
    const ex = l1.steps.filter((s, i) => s.kind === 'exercise' && (quizAt < 0 || i < quizAt)).length;
    if (ex > 0) expect(screen.getByText(`${ex}/${ex}`)).toBeInTheDocument();
    const words = new Set(l1.steps.flatMap((s) => (s.kind === 'vocab' ? [s.item.id] : s.kind === 'pronunciation' ? s.items.map((i) => i.id) : []))).size;
    expect(screen.getByText(String(words))).toBeInTheDocument();
  });

  it('shows the streak tower for today\'s activity', () => {
    render(<LessonResults lesson={l1} onHome={() => {}} />);
    expect(screen.getByText(/1 Tag in Folge/)).toBeInTheDocument();
  });

  it('offers the next incomplete lesson', async () => {
    render(<LessonResults lesson={l1} onHome={() => {}} />);
    await ready();
    const next = nextLesson(completed(), lessons)!;
    expect(screen.getByRole('link', { name: /Nächste Lektion/ })).toHaveAttribute('href', `/lesson/${next.id}/learn`);
  });

  it('omits the next-lesson link when every lesson is complete', async () => {
    const s = emptyProgress();
    for (const l of lessons) s.lessons[l.id] = { steps: l.steps.map((_, i) => String(i)), exercises: {} };
    s.activity[dateKey(Date.now())] = 20;
    replaceProgress(s);
    render(<LessonResults lesson={l1} onHome={() => {}} />);
    await ready();
    expect(screen.queryByRole('link', { name: /Nächste Lektion/ })).toBeNull();
    expect(screen.getByRole('button', { name: /today|aujourd/i })).toBeInTheDocument();
  });

  it('a special course never offers the next main lesson', async () => {
    const special = { ...l1, id: 'sp-demo' };
    render(<LessonResults lesson={special} onHome={() => {}} homeLabel="Back to the special" />);
    await ready();
    expect(screen.queryByRole('link', { name: /Nächste Lektion/ })).toBeNull();
    expect(screen.getByRole('button', { name: 'Back to the special' })).toBeInTheDocument();
  });

  it('links to reviewing the lesson', () => {
    render(<LessonResults lesson={l1} onHome={() => {}} />);
    expect(screen.getByRole('link', { name: /review/i })).toHaveAttribute('href', '/lesson/l1/review');
  });
});

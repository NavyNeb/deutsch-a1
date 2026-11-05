import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { lessons } from '@/content';
import type { Lesson } from '@/content/types';
import { chaptersForLevel } from '@/lib/path-model';
import { emptyProgress, type ProgressState } from '@/lib/progress';
import { ChapterList } from './ChapterList';

const chapters = chaptersForLevel(lessons, 'A1');
const [c1, c2, c3] = chapters;
const esc = (s: string) => new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const complete = (s: ProgressState, l: Lesson) => { s.lessons[l.id] = { steps: l.steps.map((_, i) => String(i)), exercises: {} }; };
const row = (l: Lesson) => screen.queryByRole('button', { name: esc(l.title.de) });

describe('ChapterList', () => {
  it('expands the chapter of the selected lesson and collapses the others', () => {
    render(<ChapterList chapters={chapters} state={emptyProgress()} selectedId={c2.lessons[1].id} onSelect={() => {}} />);
    expect(row(c2.lessons[0])).not.toBeNull();
    expect(row(c2.lessons[1])).not.toBeNull();
    expect(row(c3.lessons[0])).toBeNull();
    expect(row(c1.lessons[0])).toBeNull();
  });

  it('a completed chapter shows n / n', () => {
    const s = emptyProgress();
    for (const l of c1.lessons) complete(s, l);
    render(<ChapterList chapters={chapters} state={s} selectedId={c2.lessons[0].id} onSelect={() => {}} />);
    expect(screen.getAllByText(`${c1.lessons.length} / ${c1.lessons.length}`).length).toBeGreaterThan(0);
  });

  it('clicking a lesson calls onSelect with its id', () => {
    const onSelect = vi.fn();
    render(<ChapterList chapters={chapters} state={emptyProgress()} selectedId={c2.lessons[0].id} onSelect={onSelect} />);
    fireEvent.click(row(c2.lessons[2])!);
    expect(onSelect).toHaveBeenCalledWith(c2.lessons[2].id);
  });

  it('clicking a collapsed chapter header expands it', () => {
    render(<ChapterList chapters={chapters} state={emptyProgress()} selectedId={c2.lessons[0].id} onSelect={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: esc(c3.name.de) }));
    expect(row(c3.lessons[0])).not.toBeNull();
  });

  it('each lesson row carries its status', () => {
    const s = emptyProgress();
    complete(s, c2.lessons[0]);
    s.lessons[c2.lessons[1].id] = { steps: ['0', '1'], exercises: {} };
    render(<ChapterList chapters={chapters} state={s} selectedId={c2.lessons[1].id} onSelect={() => {}} />);
    expect(row(c2.lessons[0])).toHaveAttribute('data-status', 'done');
    expect(row(c2.lessons[1])).toHaveAttribute('data-status', 'current');
    expect(row(c2.lessons[2])).toHaveAttribute('data-status', 'todo');
  });
});

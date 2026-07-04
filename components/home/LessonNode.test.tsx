import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LessonNode } from './LessonNode';

const lesson = { id: 'l1', number: 1, title: { de: 'Hallo', en: 'Hi' }, theme: 'greetings', goals: [], steps: [] } as any;

describe('LessonNode', () => {
  it('links to the learn route and shows the title', () => {
    render(<LessonNode lesson={lesson} completion={0.5} />);
    expect(screen.getByRole('link', { name: /hallo/i })).toHaveAttribute('href', '/lesson/l1/learn');
  });

  it('links to the review route', () => {
    render(<LessonNode lesson={lesson} completion={0.5} />);
    expect(screen.getByRole('link', { name: /review/i })).toHaveAttribute('href', '/lesson/l1/review');
  });
});

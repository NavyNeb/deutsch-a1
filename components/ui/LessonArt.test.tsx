import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LessonArt } from './LessonArt';

describe('LessonArt', () => {
  it('renders the three gender shapes, hidden from assistive tech', () => {
    const { container } = render(<LessonArt lesson={{ id: 'l1', level: 'A1', number: 1 }} />);
    const shapes = Array.from(container.querySelectorAll('[data-shape]')).map((e) => e.getAttribute('data-shape')).sort();
    expect(shapes).toEqual(['circle', 'square', 'triangle']);
    expect((container.firstElementChild as HTMLElement).getAttribute('aria-hidden')).toBe('true');
  });
});

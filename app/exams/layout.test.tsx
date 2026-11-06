import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExamsLayout from './layout';

describe('exams layout', () => {
  it('renders its children inside the light "Papier" theme scope', () => {
    render(<ExamsLayout><p>exam content</p></ExamsLayout>);
    const scope = screen.getByText('exam content').closest('[data-theme]');
    expect(scope).not.toBeNull();
    expect(scope!.getAttribute('data-theme')).toBe('light');
  });
});

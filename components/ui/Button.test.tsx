import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('primary uses cta classes', () => {
    render(<Button>Go</Button>);
    const b = screen.getByRole('button', { name: 'Go' });
    expect(b).toHaveClass('bg-cta');
    expect(b).toHaveClass('text-cta-ink');
  });
  it('disabled has pointer-events-none', () => {
    render(<Button disabled>Go</Button>);
    expect(screen.getByRole('button', { name: 'Go' })).toHaveClass('disabled:pointer-events-none');
    expect(screen.getByRole('button', { name: 'Go' })).toBeDisabled();
  });
  it('danger variant renders ember classes, never red', () => {
    render(<Button variant="danger">Del</Button>);
    const b = screen.getByRole('button', { name: 'Del' });
    expect(b).toHaveClass('bg-ember');
    expect(b.className).not.toMatch(/\bbad\b/);
  });
  it('ember variant matches danger', () => {
    render(<Button variant="ember">Fast</Button>);
    expect(screen.getByRole('button', { name: 'Fast' })).toHaveClass('bg-ember');
  });
  it('every size keeps a 44px minimum height', () => {
    for (const size of ['sm', 'md', 'lg'] as const) {
      const { unmount } = render(<Button size={size}>X</Button>);
      expect(screen.getByRole('button', { name: 'X' }).className).toMatch(/min-h-\[44px\]|min-h-11|h-\[56px\]/);
      unmount();
    }
  });
});

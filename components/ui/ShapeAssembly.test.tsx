import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ShapeAssembly } from './ShapeAssembly';

describe('ShapeAssembly', () => {
  it('renders the three gender shapes, hidden from assistive tech', () => {
    const { container } = render(<ShapeAssembly size={260} />);
    const kinds = Array.from(container.querySelectorAll('[data-shape]')).map((e) => e.getAttribute('data-shape')).sort();
    expect(kinds).toEqual(['circle', 'square', 'triangle']);
    expect((container.firstElementChild as HTMLElement).getAttribute('aria-hidden')).toBe('true');
  });

  it('scales with the size prop', () => {
    const { container } = render(<ShapeAssembly size={130} />);
    expect((container.firstElementChild as HTMLElement).style.width).toBe('130px');
  });
});

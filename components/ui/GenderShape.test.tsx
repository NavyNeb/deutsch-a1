import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GenderShape } from './GenderShape';

describe('GenderShape', () => {
  it('renders nothing for null', () => {
    const { container } = render(<GenderShape gender={null} size={12} />);
    expect(container).toBeEmptyDOMElement();
  });
  it('das is an aria-hidden triangle', () => {
    const { container } = render(<GenderShape gender="das" size={12} />);
    const el = container.querySelector('[data-shape]') as HTMLElement;
    expect(el.getAttribute('data-shape')).toBe('triangle');
    expect(el.getAttribute('aria-hidden')).toBe('true');
  });
  it('der is a square and die is a circle', () => {
    const a = render(<GenderShape gender="der" size={12} />);
    expect(a.container.querySelector('[data-shape]')!.getAttribute('data-shape')).toBe('square');
    const b = render(<GenderShape gender="die" size={12} />);
    expect(b.container.querySelector('[data-shape]')!.getAttribute('data-shape')).toBe('circle');
  });
});

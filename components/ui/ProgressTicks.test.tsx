import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProgressTicks } from './ProgressTicks';

const ticks = (c: HTMLElement) => Array.from(c.querySelectorAll('[data-tick]'));

describe('ProgressTicks', () => {
  it('renders total ticks', () => {
    const { container } = render(<ProgressTicks total={10} done={3} />);
    expect(ticks(container)).toHaveLength(10);
  });
  it('marks exactly done ticks as filled', () => {
    const { container } = render(<ProgressTicks total={10} done={4} />);
    expect(ticks(container).filter((t) => t.getAttribute('data-on') === 'true')).toHaveLength(4);
  });
  it('clamps done above total', () => {
    const { container } = render(<ProgressTicks total={5} done={9} />);
    expect(ticks(container).filter((t) => t.getAttribute('data-on') === 'true')).toHaveLength(5);
  });
  it('default aria-label is "3 / 10"', () => {
    render(<ProgressTicks total={10} done={3} />);
    expect(screen.getByRole('img', { name: '3 / 10' })).toBeInTheDocument();
  });
  it('flags the current tick when current is set', () => {
    const { container } = render(<ProgressTicks total={6} done={2} current />);
    expect(ticks(container)[2].getAttribute('data-current')).toBe('true');
  });
  it('handles total 0 without throwing', () => {
    const { container } = render(<ProgressTicks total={0} done={0} />);
    expect(ticks(container)).toHaveLength(0);
  });
});

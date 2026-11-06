import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
  it('is a labelled switch whose state follows the prop', () => {
    const { rerender } = render(<Switch checked={false} onChange={vi.fn()} label="Show Kumpel" />);
    const sw = screen.getByRole('switch', { name: 'Show Kumpel' });
    expect(sw).toHaveAttribute('aria-checked', 'false');
    rerender(<Switch checked onChange={vi.fn()} label="Show Kumpel" />);
    expect(sw).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onChange with the opposite value when clicked', () => {
    const onChange = vi.fn();
    render(<Switch checked={false} onChange={onChange} label="x" />);
    fireEvent.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('is a real button so Space and Enter toggle it natively, with a 44px hit area', () => {
    render(<Switch checked onChange={vi.fn()} label="x" />);
    const sw = screen.getByRole('switch');
    expect(sw.tagName).toBe('BUTTON');
    expect(sw.className).toContain('min-h-11');
  });
});

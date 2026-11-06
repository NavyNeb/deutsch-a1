import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ArticleTiles } from './ArticleTiles';

describe('ArticleTiles', () => {
  it('clicking a tile calls onChange with der, die or das', async () => {
    const onChange = vi.fn();
    render(<ArticleTiles value={undefined} onChange={onChange} />);
    await userEvent.click(screen.getByRole('button', { name: 'die' }));
    await userEvent.click(screen.getByRole('button', { name: 'das' }));
    expect(onChange.mock.calls).toEqual([['die'], ['das']]);
  });

  it('disabled blocks clicks', async () => {
    const onChange = vi.fn();
    render(<ArticleTiles value="der" onChange={onChange} disabled />);
    await userEvent.click(screen.getByRole('button', { name: 'die' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('each tile shows its shape', () => {
    const { container } = render(<ArticleTiles value={undefined} onChange={() => {}} />);
    expect(Array.from(container.querySelectorAll('[data-shape]')).map((e) => e.getAttribute('data-shape'))).toEqual(['square', 'circle', 'triangle']);
  });

  it('marks the selected tile with aria-pressed', () => {
    render(<ArticleTiles value="die" onChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'die' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'der' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('rings the correct tile only when told to', () => {
    const { rerender } = render(<ArticleTiles value="der" onChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'das' })).not.toHaveAttribute('data-correct');
    rerender(<ArticleTiles value="der" onChange={() => {}} correct="das" />);
    expect(screen.getByRole('button', { name: 'das' })).toHaveAttribute('data-correct', 'true');
  });
});

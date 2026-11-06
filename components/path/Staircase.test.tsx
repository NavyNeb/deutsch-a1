import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Staircase } from './Staircase';

const levels = [
  { level: 'A1' as const, done: 5, total: 19 },
  { level: 'A2' as const, done: 0, total: 12 },
  { level: 'B1' as const, done: 0, total: 12 },
  { level: 'B2' as const, done: 0, total: 0 },
];

describe('Staircase', () => {
  it('renders four levels in order with rising heights', () => {
    render(<Staircase levels={levels} selected="A1" onSelect={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.map((b) => b.getAttribute('data-level'))).toEqual(['A1', 'A2', 'B1', 'B2']);
    const heights = buttons.map((b) => parseInt((b as HTMLElement).style.height, 10));
    expect(heights).toEqual([...heights].sort((a, b) => a - b));
    expect(new Set(heights).size).toBe(4);
  });

  it('shows done / total for a level with lessons', () => {
    render(<Staircase levels={levels} selected="A1" onSelect={() => {}} />);
    expect(screen.getByText('5 / 19')).toBeInTheDocument();
  });

  it('marks a level with no lessons as coming soon and keeps it unselectable', () => {
    const onSelect = vi.fn();
    render(<Staircase levels={levels} selected="A1" onSelect={onSelect} />);
    const b2 = screen.getByRole('button', { name: /B2/ });
    expect(b2).toBeDisabled();
    expect(screen.getByText('Coming soon')).toBeInTheDocument();
    fireEvent.click(b2);
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('selecting a level calls onSelect', () => {
    const onSelect = vi.fn();
    render(<Staircase levels={levels} selected="A1" onSelect={onSelect} />);
    fireEvent.click(screen.getByRole('button', { name: /A2/ }));
    expect(onSelect).toHaveBeenCalledWith('A2');
  });

  it('flags the selected level', () => {
    render(<Staircase levels={levels} selected="A2" onSelect={() => {}} />);
    expect(screen.getByRole('button', { name: /A2/ })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /A1/ })).toHaveAttribute('aria-pressed', 'false');
  });

  it('the progress fill stays translucent so the level label remains readable at any progress', () => {
    const { container } = render(<Staircase levels={[{ level: 'A1', done: 18, total: 18 }, { level: 'A2', done: 0, total: 12 }, { level: 'B1', done: 0, total: 12 }, { level: 'B2', done: 0, total: 0 }]} selected="A1" onSelect={() => {}} />);
    const fill = container.querySelector('[data-fill]') as HTMLElement;
    expect(fill).not.toBeNull();
    expect(fill.className).toMatch(/bg-text\/(10|15|20)/);
    expect(fill.className).not.toMatch(/bg-text\/(7|8|9)\d|bg-text(?![/\w-])/);
  });
});

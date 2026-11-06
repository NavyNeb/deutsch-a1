import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchTrigger } from './SearchTrigger';

function listenOpen() {
  const calls: Array<{ query?: string } | undefined> = [];
  const h = (e: Event) => calls.push((e as CustomEvent).detail);
  window.addEventListener('open-palette', h);
  return { calls, stop: () => window.removeEventListener('open-palette', h) };
}

describe('SearchTrigger', () => {
  it('looks like a search bar but is a button, with the placeholder when there is no query', () => {
    const { container } = render(<SearchTrigger />);
    expect(container.querySelector('input')).toBeNull();
    expect(screen.getByRole('button', { name: /search german or english/i })).toBeInTheDocument();
  });

  it('opens the search modal, passing the current query along', () => {
    const l = listenOpen();
    render(<SearchTrigger query="haus" />);
    fireEvent.click(screen.getByRole('button', { name: /haus|search german/i }));
    expect(l.calls).toEqual([{ query: 'haus' }]);
    l.stop();
  });

  it('shows the current query in the bar', () => {
    render(<SearchTrigger query="gehen" />);
    expect(screen.getByText('gehen')).toBeInTheDocument();
  });

  it('clearing does not open the modal', () => {
    const l = listenOpen();
    const onClear = vi.fn();
    render(<SearchTrigger query="haus" onClear={onClear} />);
    fireEvent.click(screen.getByRole('button', { name: /clear/i }));
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(l.calls).toEqual([]);
    l.stop();
  });

  it('only offers clear when there is a query and a handler', () => {
    const { rerender } = render(<SearchTrigger onClear={() => {}} />);
    expect(screen.queryByRole('button', { name: /clear/i })).toBeNull();
    rerender(<SearchTrigger query="x" />);
    expect(screen.queryByRole('button', { name: /clear/i })).toBeNull();
  });

  it('announces a running search', () => {
    render(<SearchTrigger query="haus" loading />);
    expect(screen.getByLabelText(/searching/i)).toBeInTheDocument();
  });
});

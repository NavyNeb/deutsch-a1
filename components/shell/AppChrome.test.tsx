import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';

let pathname = '/';
vi.mock('next/navigation', () => ({
  usePathname: () => pathname,
  useRouter: () => ({ push: vi.fn() }),
}));

import { AppChrome } from './AppChrome';

beforeEach(() => { pathname = '/'; });

describe('AppChrome', () => {
  it('renders the rail and the tab bar with five links each on /', () => {
    render(<AppChrome><p>content</p></AppChrome>);
    const rail = screen.getByRole('navigation', { name: 'Main' });
    const tabs = screen.getByRole('navigation', { name: 'Tabs' });
    expect(within(rail).getAllByRole('link')).toHaveLength(5);
    expect(within(tabs).getAllByRole('link')).toHaveLength(5);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('renders neither in the lesson player', () => {
    pathname = '/lesson/l1/learn';
    render(<AppChrome><p>player</p></AppChrome>);
    expect(screen.queryByRole('navigation', { name: 'Main' })).toBeNull();
    expect(screen.queryByRole('navigation', { name: 'Tabs' })).toBeNull();
    expect(screen.getByText('player')).toBeInTheDocument();
  });

  it('marks the current route with aria-current', () => {
    pathname = '/path';
    render(<AppChrome><p>x</p></AppChrome>);
    const rail = screen.getByRole('navigation', { name: 'Main' });
    expect(within(rail).getByRole('link', { name: /Weg/ })).toHaveAttribute('aria-current', 'page');
    expect(within(rail).getByRole('link', { name: /Heute/ })).not.toHaveAttribute('aria-current');
  });
});

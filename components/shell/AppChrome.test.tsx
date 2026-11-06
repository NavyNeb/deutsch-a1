import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { replaceSettings } from '@/lib/settings-store';

let pathname = '/';
vi.mock('next/navigation', () => ({
  usePathname: () => pathname,
  useRouter: () => ({ push: vi.fn() }),
}));

import { AppChrome } from './AppChrome';

beforeEach(() => {
  pathname = '/';
  localStorage.clear();
  replaceSettings({ kumpel: undefined });
  const p = emptyProgress();
  p.xp = 10;
  replaceProgress(p);
});

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

  it('mounts Kumpel in the app shell but not in the lesson player', async () => {
    render(<AppChrome><p>x</p></AppChrome>);
    expect(await screen.findByRole('button', { name: 'Open Kumpel help' })).toBeInTheDocument();
  });

  it('has no Kumpel in the lesson player', async () => {
    pathname = '/lesson/l1/learn';
    render(<AppChrome><p>player</p></AppChrome>);
    await Promise.resolve();
    expect(screen.queryByRole('button', { name: 'Open Kumpel help' })).toBeNull();
  });

  it('leaves room under the content for the buddy, and only while it is there', async () => {
    const { unmount } = render(<AppChrome><p>x</p></AppChrome>);
    await screen.findByRole('button', { name: 'Open Kumpel help' });
    expect(screen.getByRole('main').className).toContain('pb-[calc(140px');
    unmount();
    replaceSettings({ kumpel: { enabled: false } });
    render(<AppChrome><p>x</p></AppChrome>);
    await Promise.resolve();
    expect(screen.getByRole('main').className).toContain('pb-[calc(76px');
    expect(screen.getByRole('main').className).not.toContain('140px');
  });
});

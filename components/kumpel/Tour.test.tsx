import { act, fireEvent, render, screen } from '@testing-library/react';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { replaceSettings } from '@/lib/settings-store';
import { TOUR_STOPS } from '@/lib/kumpel-tour';

let pathname = '/';
const push = vi.fn();
vi.mock('next/navigation', () => ({ usePathname: () => pathname, useRouter: () => ({ push }) }));

import { Tour } from './Tour';

type R = { top: number; left: number; width: number; height: number };
const rects = new Map<string, R>();

function addTarget(id: string, rect: R) {
  rects.set(id, rect);
  const el = document.createElement('div');
  el.setAttribute('data-kumpel', id);
  el.getBoundingClientRect = () => {
    const r = rects.get(id)!;
    return { ...r, right: r.left + r.width, bottom: r.top + r.height, x: r.left, y: r.top, toJSON: () => ({}) } as DOMRect;
  };
  document.body.appendChild(el);
  return el;
}

const ALL: Record<string, R> = {
  continue: { top: 200, left: 320, width: 700, height: 420 },
  goal: { top: 200, left: 1040, width: 330, height: 420 },
  nav: { top: 150, left: 10, width: 244, height: 270 },
  search: { top: 88, left: 10, width: 244, height: 44 },
  kumpel: { top: 812, left: 1336, width: 64, height: 64 },
};
const addAll = (skip: string[] = []) => Object.entries(ALL).forEach(([id, r]) => { if (!skip.includes(id)) addTarget(id, r); });

beforeEach(() => {
  pathname = '/';
  push.mockClear();
  rects.clear();
  localStorage.clear();
  replaceSettings({ kumpel: undefined });
});
afterEach(() => { document.body.innerHTML = ''; vi.useRealTimers(); });

const next = () => fireEvent.click(screen.getByRole('button', { name: /^(Weiter|Fertig)$/ }));

describe('Tour', () => {
  it('walks through five stops and finishes with Fertig', async () => {
    addAll();
    const onClose = vi.fn();
    render(<Tour group="today" scope="app" onClose={onClose} />);
    expect(await screen.findByText('Station 1 von 5')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Weiter' })).toBeInTheDocument();
    next();
    expect(screen.getByText('Station 2 von 5')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tagesziel' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Zurück' }));
    expect(screen.getByText('Station 1 von 5')).toBeInTheDocument();
    next(); next(); next(); next();
    expect(screen.getByText('Station 5 von 5')).toBeInTheDocument();
    expect(onClose).not.toHaveBeenCalled();
    next();
    expect(onClose).toHaveBeenCalledWith('done');
  });

  it('marks the current stop with aria-current', async () => {
    addAll();
    render(<Tour group="today" scope="app" onClose={vi.fn()} />);
    await screen.findByText('Station 1 von 5');
    const dots = screen.getAllByRole('listitem');
    expect(dots).toHaveLength(5);
    expect(dots[0]).toHaveAttribute('aria-current', 'step');
    expect(dots[1]).not.toHaveAttribute('aria-current');
  });

  it('has no Zurück on the first stop', async () => {
    addAll();
    render(<Tour group="today" scope="app" onClose={vi.fn()} />);
    await screen.findByText('Station 1 von 5');
    expect(screen.queryByRole('button', { name: 'Zurück' })).toBeNull();
  });

  it('skips a stop whose target is missing and counts only what remains', async () => {
    addAll(['search']);
    render(<Tour group="today" scope="app" onClose={vi.fn()} />);
    expect(await screen.findByText('Station 1 von 4')).toBeInTheDocument();
    next(); next(); next();
    expect(screen.getByText('Station 4 von 4')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Suche' })).toBeNull();
  });

  it('skips a stop whose target is hidden (zero size)', async () => {
    addAll(['nav']);
    addTarget('nav', { top: 0, left: 0, width: 0, height: 0 });
    render(<Tour group="today" scope="app" onClose={vi.fn()} />);
    expect(await screen.findByText('Station 1 von 4')).toBeInTheDocument();
  });

  it('closes at once, rendering nothing, when no target exists on the home page', async () => {
    const onClose = vi.fn();
    const { container } = render(<Tour group="today" scope="app" onClose={onClose} />);
    await act(async () => {});
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledWith('skip');
    expect(container).toBeEmptyDOMElement();
  });

  it('Esc, Überspringen and the keyboard drive the tour', async () => {
    addAll();
    const onClose = vi.fn();
    render(<Tour group="today" scope="app" onClose={onClose} />);
    await screen.findByText('Station 1 von 5');
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    expect(screen.getByText('Station 2 von 5')).toBeInTheDocument();
    fireEvent.keyDown(document.body, { key: 'ArrowLeft' });
    expect(screen.getByText('Station 1 von 5')).toBeInTheDocument();
    fireEvent.keyDown(document.body, { key: 'Enter' });
    expect(screen.getByText('Station 2 von 5')).toBeInTheDocument();
    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(onClose).toHaveBeenLastCalledWith('skip');
    fireEvent.click(screen.getByRole('button', { name: 'Überspringen' }));
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it('Enter on a focused button does not also advance the tour', async () => {
    addAll();
    const onClose = vi.fn();
    render(<Tour group="today" scope="app" onClose={onClose} />);
    await screen.findByText('Station 1 von 5');
    const skip = screen.getByRole('button', { name: 'Überspringen' });
    skip.focus();
    fireEvent.keyDown(skip, { key: 'Enter' });
    expect(screen.getByText('Station 1 von 5')).toBeInTheDocument();
  });

  it('from another page it goes to Heute once and waits for the targets', async () => {
    vi.useFakeTimers();
    pathname = '/library';
    const onClose = vi.fn();
    render(<Tour group="today" scope="app" onClose={onClose} />);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith('/');
    expect(screen.queryByRole('dialog')).toBeNull();
    addAll();
    await act(async () => { vi.advanceTimersByTime(100); });
    expect(screen.getByText('Station 1 von 5')).toBeInTheDocument();
    expect(push).toHaveBeenCalledTimes(1);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('gives up waiting after 1.5s and uses whatever is on screen', async () => {
    vi.useFakeTimers();
    pathname = '/library';
    addTarget('nav', ALL.nav);
    render(<Tour group="today" scope="app" onClose={vi.fn()} />);
    expect(screen.queryByRole('dialog')).toBeNull();
    await act(async () => { vi.advanceTimersByTime(1600); });
    expect(screen.getByText('Station 1 von 1')).toBeInTheDocument();
  });

  it('closes quietly when nothing ever shows up after navigating', async () => {
    vi.useFakeTimers();
    pathname = '/library';
    const onClose = vi.fn();
    render(<Tour group="today" scope="app" onClose={onClose} />);
    await act(async () => { vi.advanceTimersByTime(1600); });
    expect(onClose).toHaveBeenCalledWith('skip');
  });

  it('moves focus into the step card and gives it back afterwards', async () => {
    addAll();
    const opener = document.createElement('button');
    document.body.appendChild(opener);
    opener.focus();
    const { unmount } = render(<Tour group="today" scope="app" onClose={vi.fn()} />);
    const card = await screen.findByRole('dialog', { name: 'Tour' });
    expect(card.contains(document.activeElement)).toBe(true);
    unmount();
    expect(document.activeElement).toBe(opener);
  });

  it('measures the target again on resize', async () => {
    addAll();
    render(<Tour group="today" scope="app" onClose={vi.fn()} />);
    const spot = await screen.findByTestId('kumpel-spotlight');
    expect(spot.style.top).toBe('192px');
    rects.set('continue', { ...ALL.continue, top: 400 });
    act(() => { window.dispatchEvent(new Event('resize')); });
    expect(screen.getByTestId('kumpel-spotlight').style.top).toBe('392px');
  });

  it('has no spotlight transition in calm mode', async () => {
    replaceSettings({ kumpel: { motion: 'calm' } });
    addAll();
    render(<Tour group="today" scope="app" onClose={vi.fn()} />);
    const spot = await screen.findByTestId('kumpel-spotlight');
    expect(spot.style.transition).toBe('');
  });
});

describe('page tours', () => {
  it('tours the page you are on and never navigates', async () => {
    pathname = '/library';
    render(<Tour group="library" scope="page" onClose={vi.fn()} />);
    expect(await screen.findByText('Station 1 von 3')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Wörterbuch' })).toBeInTheDocument();
    expect(push).not.toHaveBeenCalled();
  });

  it('shows every step even when no anchor is on screen, as a centred card with no spotlight', async () => {
    pathname = '/library';
    render(<Tour group="library" scope="page" onClose={vi.fn()} />);
    await screen.findByText('Station 1 von 3');
    expect(screen.queryByTestId('kumpel-spotlight')).toBeNull();
    next(); next();
    expect(screen.getByText('Station 3 von 3')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Prüfungen' })).toBeInTheDocument();
  });

  it('spotlights a step whose anchor is there, and goes back to a centred card for one that has none', async () => {
    pathname = '/library';
    addTarget('library-dict', { top: 100, left: 300, width: 600, height: 120 });
    render(<Tour group="library" scope="page" onClose={vi.fn()} />);
    expect(await screen.findByTestId('kumpel-spotlight')).toBeInTheDocument();
    next();
    expect(screen.queryByTestId('kumpel-spotlight')).toBeNull();
  });

  it('works on a page whose guide has no anchors at all', async () => {
    pathname = '/games/sprint';
    const onClose = vi.fn();
    render(<Tour group="games" scope="page" onClose={onClose} />);
    expect(await screen.findByText('Station 1 von 2')).toBeInTheDocument();
    next(); next();
    expect(onClose).toHaveBeenCalledWith('done');
  });

  it('Esc and Überspringen leave a centred step too', async () => {
    pathname = '/exams';
    const onClose = vi.fn();
    render(<Tour group="exams" scope="page" onClose={onClose} />);
    await screen.findByText('Station 1 von 2');
    fireEvent.click(screen.getByRole('button', { name: 'Überspringen' }));
    expect(onClose).toHaveBeenCalledWith('skip');
  });
});

describe('tour drift guard', () => {
  function walk(dir: string, out: string[] = []): string[] {
    for (const name of readdirSync(dir)) {
      const full = path.join(dir, name);
      if (statSync(full).isDirectory()) walk(full, out);
      else if (/\.tsx$/.test(name) && !/\.test\.tsx$/.test(name)) out.push(full);
    }
    return out;
  }

  it('every tour target is rendered by some component', () => {
    const source = walk(path.resolve(__dirname, '..')).map((f) => readFileSync(f, 'utf8')).join('\n');
    for (const stop of TOUR_STOPS) {
      expect(source, `data-kumpel="${stop.target}" is missing`).toContain(`data-kumpel="${stop.target}"`);
    }
  });
});

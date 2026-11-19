import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { dateKey } from '@/lib/progress';
import { emptySprechen, recordSpeaking, saveSprechen } from '@/lib/sprechen-stats';
import { SpeakHub } from './SpeakHub';

const mockFetch = (enabled: boolean | 'fail') => {
  vi.stubGlobal('fetch', vi.fn(() => (enabled === 'fail' ? Promise.reject(new Error('offline')) : Promise.resolve({ ok: true, json: () => Promise.resolve({ enabled }) }))));
};

beforeEach(() => localStorage.clear());
afterEach(() => vi.unstubAllGlobals());

describe('SpeakHub', () => {
  it('links to every speaking tool except the AI partner when AI is off', async () => {
    mockFetch(false);
    render(<SpeakHub />);
    for (const href of ['/speak/repeat', '/speak/roleplay', '/speak/phrases', '/speak/talk', '/speak/exam', '/speak/sounds', '/speak/progress']) {
      expect(document.querySelector(`a[href="${href}"]`), href).not.toBeNull();
    }
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(document.querySelector('a[href="/speak/partner"]')).toBeNull();
  });

  it('shows the AI partner card first when the server says it is enabled', async () => {
    mockFetch(true);
    render(<SpeakHub />);
    await waitFor(() => expect(document.querySelector('a[href="/speak/partner"]')).not.toBeNull());
    const links = [...document.querySelectorAll('[data-kumpel="speak-modes"] a')].map((a) => a.getAttribute('href'));
    expect(links[0]).toBe('/speak/partner');
  });

  it('keeps the partner hidden when the check fails', async () => {
    mockFetch('fail');
    render(<SpeakHub />);
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(document.querySelector('a[href="/speak/partner"]')).toBeNull();
  });

  it('shows this week’s minutes against the goal and the streak', async () => {
    mockFetch(false);
    const today = dateKey(Date.now());
    saveSprechen(recordSpeaking(emptySprechen(), today, { seconds: 600, words: 100 }));
    render(<SpeakHub />);
    expect(await screen.findByText('10')).toBeInTheDocument();
    expect(screen.getByText(/min this week · Goal 30/)).toBeInTheDocument();
    expect(screen.getByText(/1 day streak/)).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '10');
  });
});

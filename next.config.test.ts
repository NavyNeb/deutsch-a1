import { describe, it, expect } from 'vitest';
import nextConfig from './next.config';

async function redirects() {
  return (await nextConfig.redirects?.()) ?? [];
}

describe('next.config redirects', () => {
  it('redirects /games to /practice', async () => {
    const r = (await redirects()).find((x) => x.source === '/games');
    expect(r).toMatchObject({ destination: '/practice', permanent: false });
  });

  it('does not redirect routes that must keep working', async () => {
    const sources = (await redirects()).map((r) => r.source);
    for (const keep of ['/statistics', '/account', '/settings', '/textbook', '/dictionary', '/exams', '/speak', '/write', '/specials']) {
      expect(sources, keep).not.toContain(keep);
    }
  });

  it('keeps the service worker uncached', async () => {
    const headers = (await nextConfig.headers?.()) ?? [];
    expect(headers.some((h) => h.source === '/sw.js')).toBe(true);
  });
});

// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import manifest from './manifest';

const publicFile = (src: string) => path.join(process.cwd(), 'public', src);

describe('PWA manifest', () => {
  const m = manifest();

  it('is installable: standalone, scoped, named', () => {
    expect(m.display).toBe('standalone');
    expect(m.name).toBeTruthy();
    expect(m.short_name).toBeTruthy();
    expect(m.start_url).toMatch(/^\//);
    expect(m.scope).toBe('/');
  });

  it('ships 192 and 512 icons plus a maskable one, all present on disk', () => {
    const icons = m.icons ?? [];
    const sizes = icons.map((i) => i.sizes);
    expect(sizes).toEqual(expect.arrayContaining(['192x192', '512x512']));
    expect(icons.some((i) => i.purpose === 'maskable')).toBe(true);
    for (const i of icons) expect(existsSync(publicFile(i.src)), i.src).toBe(true);
  });

  it('shortcuts point at real icons and in-scope URLs', () => {
    for (const s of m.shortcuts ?? []) {
      expect(s.url.startsWith('/')).toBe(true);
      for (const i of s.icons ?? []) expect(existsSync(publicFile(i.src)), i.src).toBe(true);
    }
  });
});

describe('service worker file', () => {
  const sw = readFileSync(publicFile('sw.js'), 'utf8');

  it('parses as valid JavaScript', () => {
    expect(() => new Function(sw)).not.toThrow();
  });

  it('never intercepts API, account or auth routes', () => {
    expect(sw).toMatch(/NEVER_CACHE[^;]*\/\^\\\/api\\\//);
    expect(sw).toContain('/^\\/account/');
  });

  it('precaches only assets that exist', () => {
    const list = /PRECACHE_ASSETS = \[([^\]]*)\]/.exec(sw)?.[1] ?? '';
    const files = [...list.matchAll(/'([^']+)'/g)].map((x) => x[1]);
    expect(files.length).toBeGreaterThan(0);
    for (const f of files) expect(existsSync(publicFile(f)), f).toBe(true);
  });
});

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';

// Guard for the Dreiklang design system: the pre-redesign token names must not creep back into
// components or pages. Use text-text / bg-cta / font-display / var(--t1) / var(--ok) / var(--ember) instead.
const LEGACY: [string, RegExp][] = [
  ['primary colour utilities (use text-text / bg-cta / border-text)', /(?<![\w-])(?:text|bg|border|ring|from|to)-primary(?![\w-]|-[a-z])/],
  ['primary-ink (use text-cta-ink)', /(?<![\w-])text-primary-ink(?![\w-])/],
  ['font-rounded (use font-display)', /(?<![\w-])font-rounded(?![\w-])/],
  ['shadow-primary', /(?<![\w-])shadow-primary(?![\w-])/],
  ['var(--primary*)', /var\(--primary/],
  ['var(--accent*) / var(--soft*)', /var\(--(?:accent|soft)/],
  ['var(--good) / var(--bad) / var(--amber)', /var\(--(?:good|bad|amber)\)/],
  ['--*-wash legacy tints', /var\(--(?:primary|good|bad|amber|accent)-wash\)/],
  ['text-faint / text-amber', /(?<![\w-])text-(?:faint|amber)(?![\w-])/],
];

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) return files(p);
    return /\.(tsx|ts)$/.test(name) && !/\.test\./.test(name) ? [p] : [];
  });
}

const root = path.resolve(__dirname, '..');
const sources = [...files(path.join(root, 'components')), ...files(path.join(root, 'app'))];

describe('design tokens in use', () => {
  it('scans a meaningful number of source files', () => {
    expect(sources.length).toBeGreaterThan(80);
  });

  for (const [label, re] of LEGACY) {
    it(`no source file uses legacy ${label}`, () => {
      const hits = sources.filter((f) => re.test(readFileSync(f, 'utf8'))).map((f) => path.relative(root, f));
      expect(hits).toEqual([]);
    });
  }
});

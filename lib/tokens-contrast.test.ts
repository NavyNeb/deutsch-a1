import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';

const css = readFileSync(path.resolve(__dirname, '../app/globals.css'), 'utf8');

function block(selector: string): string {
  const start = css.indexOf(selector + ' {');
  if (start < 0) throw new Error(`block ${selector} not found`);
  const open = css.indexOf('{', start);
  let depth = 0;
  for (let i = open; i < css.length; i++) {
    if (css[i] === '{') depth++;
    if (css[i] === '}') { depth--; if (depth === 0) return css.slice(open + 1, i); }
  }
  throw new Error(`block ${selector} not closed`);
}

function tokens(selector: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of block(selector).matchAll(/--([a-z0-9-]+):\s*(#[0-9A-Fa-f]{6})\b/g)) out[m[1]] = m[2];
  return out;
}

const lin = (c: number) => { const s = c / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; };
function lum(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  return 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
}
function contrast(a: string, b: string): number {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const themes = { dark: tokens(':root'), light: tokens('[data-theme="light"]') } as const;

describe('design tokens', () => {
  it('dark text tokens meet 4.5:1', () => {
    const t = themes.dark;
    for (const fg of ['t1', 't2', 't3']) for (const bg of ['ink', 's1', 's2']) {
      expect(contrast(t[fg], t[bg]), `${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('light text tokens meet 4.5:1', () => {
    const t = themes.light;
    for (const fg of ['t1', 't2', 't3']) for (const bg of ['ink', 's1', 's2']) {
      expect(contrast(t[fg], t[bg]), `${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('gender text tokens meet 4.5:1 in both themes', () => {
    for (const [name, t] of Object.entries(themes)) {
      for (const fg of ['der-t', 'die-t', 'das-t']) for (const bg of ['ink', 's1']) {
        expect(contrast(t[fg], t[bg]), `${name}: ${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5);
      }
    }
  });

  it('cta text meets 7:1 in both themes', () => {
    for (const [name, t] of Object.entries(themes)) {
      expect(contrast(t['cta-i'], t['cta']), name).toBeGreaterThanOrEqual(7);
    }
  });
});

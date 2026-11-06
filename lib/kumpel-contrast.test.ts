import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

// Static design guards for everything Kumpel renders. They read the source because the rules are about
// what is written (a 10px size, a red class, a hex colour), not about what jsdom happens to compute.
const ROOT = path.resolve(__dirname, '..');
const dir = path.join(ROOT, 'components/kumpel');
const FILES = [
  ...readdirSync(dir).filter((f) => f.endsWith('.tsx') && !f.endsWith('.test.tsx')).map((f) => path.join(dir, f)),
  path.join(ROOT, 'components/ui/Switch.tsx'),
];
const src = (file: string) => readFileSync(file, 'utf8');
const rel = (file: string) => path.relative(ROOT, file);

describe('Kumpel design guards', () => {
  it('covers the Kumpel components', () => {
    expect(FILES.length).toBeGreaterThanOrEqual(8);
  });

  it.each(FILES)('%s: no text smaller than 12px', (file) => {
    expect(src(file), rel(file)).not.toMatch(/text-\[(?:[0-9]|1[01])(?:\.\d+)?px\]/);
  });

  it.each(FILES)('%s: nothing red (mistakes and alerts are never red)', (file) => {
    expect(src(file), rel(file)).not.toMatch(/(?:text|bg|border|fill|stroke|ring)-red/);
  });

  it.each(FILES)('%s: no emoji', (file) => {
    expect(src(file), rel(file)).not.toMatch(/\p{Extended_Pictographic}/u);
  });

  it.each(FILES)('%s: tokens only, no hex colours', (file) => {
    expect(src(file), rel(file)).not.toMatch(/#[0-9a-fA-F]{3,8}\b/);
  });

  it.each(FILES)('%s: every button has a visible label or an aria-label', (file) => {
    const source = src(file);
    const buttons = source.matchAll(/<button\b((?:=>|[^>])*?)>([\s\S]*?)<\/button>/g);
    for (const [, attrs, inner] of buttons) {
      const hasName = /aria-label=/.test(attrs) || inner.replace(/<[^>]*>/g, '').trim().length > 0;
      expect(hasName, `${rel(file)}: unnamed button <button${attrs.slice(0, 60)}`).toBe(true);
    }
  });

  it.each(FILES)('%s: dialogs are labelled', (file) => {
    const source = src(file);
    for (const m of source.matchAll(/role="dialog"([\s\S]{0,200})/g)) {
      const around = source.slice(Math.max(0, (m.index ?? 0) - 200), (m.index ?? 0) + 300);
      expect(/aria-label=|aria-labelledby=/.test(around), `${rel(file)}: dialog without a label`).toBe(true);
    }
  });
});

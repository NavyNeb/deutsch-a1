import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';

// bg-cta and bg-text are the paper-white (dark theme) / ink (light theme) fills. A hard-coded text-white on them
// is invisible in the default dark theme — the tense tab bug. Text on those fills must be text-cta-ink / text-bg.
const BAD = [
  /(?:bg-cta|bg-text)(?![\w/-])[^"'`]*(?<![\w-])text-white(?![\w-])/,
  /(?<![\w-])text-white(?![\w-])[^"'`]*(?:bg-cta|bg-text)(?![\w/-])/,
];

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) return files(p);
    return /\.tsx$/.test(name) && !/\.test\./.test(name) ? [p] : [];
  });
}

const root = path.resolve(__dirname, '..');

describe('text on paper-coloured fills', () => {
  it('no component puts text-white on bg-cta or bg-text', () => {
    const hits = [...files(path.join(root, 'components')), ...files(path.join(root, 'app'))]
      .filter((f) => BAD.some((re) => re.test(readFileSync(f, 'utf8').split('\n').join(' ').replace(/\s+/g, ' '))))
      .map((f) => path.relative(root, f));
    expect(hits).toEqual([]);
  });
});

import { describe, it } from 'vitest';
import { ExamSetSchema } from './types';
import { describeSets } from './checks';

// Authoring aid: EXAM_FILE=goethe-a1-4-6 npx vitest run content/exams/file-check.test.ts
const file = process.env.EXAM_FILE;
if (!file) {
  describe.skip('file check', () => it('skipped', () => {}));
} else {
  const mod = (await import(`./data/${file}`)) as Record<string, unknown[]>;
  const sets = Object.values(mod)[0].map((s) => ExamSetSchema.parse(s));
  describe(`file ${file}`, () => describeSets(sets));
}

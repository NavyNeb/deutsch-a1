import { writeFile } from 'node:fs/promises';
import { lessons } from '../content/index.ts';

await writeFile(new URL('../content/lessons.snapshot.json', import.meta.url), JSON.stringify(lessons, null, 2));
console.log(`snapshot: ${lessons.length} lesson(s) written`);

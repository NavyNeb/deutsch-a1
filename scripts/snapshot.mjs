import { writeFile } from 'node:fs/promises';
import { lessons } from '../content/index.ts';
import { specials } from '../content/specials/index.ts';

await writeFile(new URL('../content/lessons.snapshot.json', import.meta.url), JSON.stringify([...lessons, ...specials], null, 2));
console.log(`snapshot: ${lessons.length} lesson(s) + ${specials.length} special(s) written`);

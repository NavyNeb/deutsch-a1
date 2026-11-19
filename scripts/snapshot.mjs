import { writeFile } from 'node:fs/promises';
import { lessons } from '../content/index.ts';
import { specials } from '../content/specials/index.ts';
import { allBankWords } from '../content/word-bank/index.ts';

await writeFile(new URL('../content/lessons.snapshot.json', import.meta.url), JSON.stringify([...lessons, ...specials], null, 2));
console.log(`snapshot: ${lessons.length} lesson(s) + ${specials.length} special(s) written`);
await writeFile(new URL('../content/wordbank.snapshot.json', import.meta.url), JSON.stringify(allBankWords().map((w) => ({ id: w.id, german: w.german })), null, 2));
console.log(`snapshot: ${allBankWords().length} word-bank word(s) written`);

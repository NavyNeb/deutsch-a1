// Audits lib/conjugate.ts against Wiktionary's form->lemma shards (public/dict/fm).
// Usage: npm run audit [-- --verbose]
import { readFile, readdir } from 'node:fs/promises';
import { conjugate } from '../lib/conjugate.ts';
import { fold, shardKey } from '../lib/dict-shared.mjs';

const verbose = process.argv.includes('--verbose');
const DICT = new URL('../public/dict/', import.meta.url);
const readJson = async (p) => JSON.parse(await readFile(new URL(p, DICT), 'utf8'));

const meta = await readJson('meta.json');
const fmSplit = new Set(meta.fm.split);
const fmCache = new Map();
async function fmShard(key) {
  if (!fmCache.has(key)) fmCache.set(key, meta.fm.shards.includes(key) ? await readJson(`fm/${key}.json`) : {});
  return fmCache.get(key);
}

const verbs = [];
for (const f of await readdir(new URL('de/', DICT))) {
  for (const e of await readJson(`de/${f}`)) if (e.p === 'verb' && !/\s/.test(e.w)) verbs.push(e);
}

const CHECKED = ['praesens', 'praeteritum', 'konj1', 'konj2', 'imperativ'];
const clean = (s) => s.replace(/[!?.,]$/, '').trim();

function collect(c) {
  const out = [];
  for (const tense of CHECKED) {
    for (const r of c.tenses[tense] ?? []) {
      const form = clean(r.text);
      if (form && !/\s/.test(form)) out.push({ tense, pronoun: r.pronoun, form });
    }
  }
  const perfekt = c.tenses.perfekt?.[0]?.text.split(/\s+/);
  if (perfekt && perfekt.length === 2) out.push({ tense: 'partizip', pronoun: '', form: perfekt[1] });
  return out;
}

let verbsOk = 0, verbsCheck = 0, total = 0, matched = 0, errors = 0, identity = 0;
const bad = new Map();
const badVerbs = new Map();

for (const e of verbs) {
  let c;
  try { c = conjugate({ lemma: e.w, v: e.v }); } catch (err) { errors++; if (verbose) console.error('THROW', e.w, err.message); continue; }
  if (c.confidence !== 'ok') { verbsCheck++; continue; }
  verbsOk++;
  for (const { tense, pronoun, form } of collect(c)) {
    // The shards never list a lemma as a form of itself, so identical forms (wir/sie/infinitive-shaped) cannot be audited.
    if (form.toLowerCase() === e.w.toLowerCase()) { identity++; continue; }
    total++;
    const shard = await fmShard(shardKey(form, fmSplit));
    const lemmas = shard[fold(form)] ?? [];
    if (lemmas.includes(e.w)) { matched++; continue; }
    const pattern = `${tense}/${pronoun || '-'}/…${form.slice(-2)}`;
    const rec = bad.get(pattern) ?? { n: 0, ex: [] };
    rec.n++;
    if (rec.ex.length < 4) rec.ex.push(`${e.w}→${form}`);
    bad.set(pattern, rec);
    badVerbs.set(e.w, (badVerbs.get(e.w) ?? 0) + 1);
  }
}

const pct = total ? ((matched / total) * 100).toFixed(2) : '0';
console.log(`verbs: ${verbs.length} (ok ${verbsOk}, check ${verbsCheck}, threw ${errors})`);
console.log(`forms checked: ${total}, matched: ${matched} (${pct}%) — ${identity} lemma-identical forms skipped`);
console.log('top mismatch patterns:');
for (const [p, r] of [...bad].sort((a, b) => b[1].n - a[1].n).slice(0, 25)) {
  console.log(`  ${String(r.n).padStart(6)}  ${p.padEnd(26)} ${r.ex.join(', ')}`);
}
if (verbose) console.log('worst verbs:', [...badVerbs].sort((a, b) => b[1] - a[1]).slice(0, 40).map(([w, n]) => `${w}(${n})`).join(' '));

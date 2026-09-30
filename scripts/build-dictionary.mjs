// Builds the static, sharded German dictionary in public/dict/ from the
// kaikki.org / wiktextract German dump (derived from Wiktionary, CC BY-SA 4.0).
//
//   curl --compressed -o kaikki-de.jsonl https://kaikki.org/dictionary/German/kaikki.org-dictionary-German.jsonl
//   node scripts/build-dictionary.mjs path/to/kaikki-de.jsonl
//
// The raw dump (~1 GB) is never committed; only the trimmed output is.
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { fold, letters, shardKey } from '../lib/dict-shared.mjs';

const input = process.argv[2];
if (!input) { console.error('usage: node scripts/build-dictionary.mjs <kaikki-de.jsonl>'); process.exit(1); }
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'dict');

const KEEP_POS = new Set(['noun', 'verb', 'adj', 'adv', 'prep', 'conj', 'pron', 'num', 'intj', 'det', 'article', 'particle']);
const SKIP_SENSE_TAGS = new Set(['obsolete', 'archaic', 'dated', 'historical', 'rare', 'poetic', 'dialectal', 'regional', 'vulgar', 'offensive', 'slur', 'nonstandard', 'proscribed']);
const MAX_GLOSSES = 4;
const MAX_GLOSS_LEN = 90;
const MAX_EXAMPLE_LEN = 110;
const MAX_EN_PER_KEY = 8;
const MAX_EN_KEYS_PER_ENTRY = 8;
const SPLIT_BYTES = 300 * 1024;

const clip = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…');

// Long glosses: drop long explanatory (...) / [...] asides (balanced, nesting-safe) before clipping.
function stripLongAsides(s, open, close, min) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== open) { out += s[i]; continue; }
    let depth = 0, j = i;
    for (; j < s.length; j++) {
      if (s[j] === open) depth++;
      else if (s[j] === close && --depth === 0) break;
    }
    if (j >= s.length || j - i + 1 < min) { out += s[i]; continue; }
    i = j;
  }
  return out.replace(/\s+/g, ' ').replace(/\s+([,;.])/g, '$1').trim();
}
function cleanGloss(g) {
  let s = g;
  if (s.length > 70) s = stripLongAsides(stripLongAsides(s, '(', ')', 25), '[', ']', 20);
  if (!/\p{L}{2}/u.test(s)) s = g;
  return clip(s, MAX_GLOSS_LEN);
}

function firstIpa(sounds) {
  for (const s of sounds || []) {
    if (!s.ipa) continue;
    const m = s.ipa.match(/^[/[](.+)[/\]]$/);
    return (m ? m[1] : s.ipa).trim();
  }
  return undefined;
}

function genderOf(o) {
  const token = String(o.head_templates?.[0]?.args?.['1'] ?? '').split(',')[0];
  const out = [];
  for (const ch of token.match(/[mfn]/g) || []) if (!out.includes(ch)) out.push(ch);
  return out.length ? out.join('/') : undefined;
}

const tagsOf = (f) => f.tags || [];
const plainForms = (o) => (o.forms || []).filter((f) => f.form && f.form !== '-');
const pickForm = (forms, pred) => forms.find((f) => f.source == null && pred(tagsOf(f))) ?? forms.find((f) => pred(tagsOf(f)));

function nounForms(o) {
  const forms = plainForms(o);
  const pl = pickForm(forms, (t) => t.length === 1 && t[0] === 'plural');
  const gen = pickForm(forms, (t) => t.includes('genitive') && !t.includes('plural') && !t.includes('diminutive'));
  return { pl: pl?.form, gen: gen?.form };
}

function verbParts(o) {
  const forms = plainForms(o);
  const third = pickForm(forms, (t) => t.includes('present') && t.includes('third-person') && t.includes('singular') && !t.includes('subjunctive'));
  const past = pickForm(forms, (t) => t.length === 1 && t[0] === 'past');
  const part = pickForm(forms, (t) => t.includes('participle') && t.includes('past'));
  const aux = forms.filter((f) => tagsOf(f).length === 1 && tagsOf(f)[0] === 'auxiliary').map((f) => f.form);
  const auxWord = [...new Set(aux)].map((a) => (a === 'sein' ? 'ist' : a === 'haben' ? 'hat' : a)).join('/');
  if (!past && !part) return undefined;
  return [third?.form, past?.form, part ? `${auxWord ? auxWord + ' ' : ''}${part.form}` : undefined].filter(Boolean).join(', ');
}

function adjParts(o) {
  const forms = plainForms(o);
  const comp = pickForm(forms, (t) => t.length === 1 && t[0] === 'comparative');
  const sup = pickForm(forms, (t) => t.length === 1 && t[0] === 'superlative');
  if (!comp && !sup) return undefined;
  return [comp?.form, sup ? (/^am /.test(sup.form) ? sup.form : `am ${sup.form}`) : undefined].filter(Boolean).join(', ');
}

// Glosses and one example from the senses that are worth showing a learner.
function sensesOf(o) {
  const glosses = [];
  let example;
  for (const s of o.senses || []) {
    if (s.form_of || s.alt_of) continue;
    if ((s.tags || []).some((t) => SKIP_SENSE_TAGS.has(t))) continue;
    const g = s.glosses?.[s.glosses.length - 1]?.trim();
    if (!g || g.length < 2 || /^(inflection|plural|genitive|dative|accusative|nominative|singular) .* of\b/i.test(g)) continue;
    const gloss = cleanGloss(g);
    if (!glosses.includes(gloss) && glosses.length < MAX_GLOSSES) glosses.push(gloss);
    if (!example) {
      const ex = (s.examples || []).find((e) => (e.type == null || e.type === 'example') && e.text && (e.english || e.translation) && e.text.length <= MAX_EXAMPLE_LEN);
      if (ex) example = [ex.text.trim(), clip(String(ex.english || ex.translation).trim(), MAX_EXAMPLE_LEN)];
    }
  }
  return { glosses, example };
}

function score(e) {
  return (e.x ? 3 : 0) + (e.ipa ? 1 : 0) + Math.min(e.s.length, 4) + (e.g || e.v || e.pl ? 1 : 0) + Math.max(0, 14 - letters(e.w).length) / 4;
}

// English gloss -> short lookup keys ("to go, to walk" -> go, walk).
function enKeys(entry) {
  const keys = [];
  for (const gloss of entry.s.slice(0, 3)) {
    const plain = gloss.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
    for (let piece of plain.split(/[,;]/)) {
      piece = piece.trim().toLowerCase();
      if (entry.p === 'verb') piece = piece.replace(/^to /, '');
      piece = piece.replace(/^(a|an|the) /, '');
      const k = fold(piece);
      if (k.length < 2 || k.length > 30 || k.split(' ').length > 3) continue;
      if (!keys.includes(k)) keys.push(k);
    }
  }
  return keys.slice(0, MAX_EN_KEYS_PER_ENTRY);
}

const lemmas = new Map();       // "word|pos|g" -> entry (merge duplicates)
const formPairs = new Map();    // folded form -> Set(lemma word)
const addForm = (form, lemma) => {
  if (!form || /[\s\d/]/.test(form) || form.length < 2) return;
  const k = fold(form);
  if (k.length < 2 || k === fold(lemma)) return;
  if (!formPairs.has(k)) formPairs.set(k, new Set());
  formPairs.get(k).add(lemma);
};
const pendingFormOf = []; // [formWord, lemmaWord] from form-of/alt-of entries

let lines = 0;
const rl = readline.createInterface({ input: fs.createReadStream(input), crlfDelay: Infinity });
for await (const line of rl) {
  lines++;
  let o;
  try { o = JSON.parse(line); } catch { continue; }
  if (!o.word || !KEEP_POS.has(o.pos)) continue;

  const senses = o.senses || [];
  const target = senses.find((s) => s.form_of?.[0]?.word || s.alt_of?.[0]?.word);
  const isLemma = senses.some((s) => !s.form_of && !s.alt_of);
  if (target && !isLemma) {
    const t = target.form_of?.[0]?.word || target.alt_of?.[0]?.word;
    if (t && !/\s/.test(o.word)) pendingFormOf.push([o.word, t]);
    continue;
  }

  const { glosses, example } = sensesOf(o);
  if (!glosses.length) continue;

  const entry = { w: o.word, p: o.pos === 'article' ? 'det' : o.pos === 'particle' ? 'part' : o.pos, s: glosses };
  if (o.pos === 'noun') {
    const g = genderOf(o); if (g) entry.g = g;
    const { pl, gen } = nounForms(o);
    if (pl && pl !== o.word) entry.pl = pl;
    if (gen && gen !== o.word) entry.gen = gen;
  } else if (o.pos === 'verb') {
    const v = verbParts(o); if (v) entry.v = v;
  } else if (o.pos === 'adj') {
    const v = adjParts(o); if (v) entry.v = v;
  }
  const ipa = firstIpa(o.sounds); if (ipa) entry.ipa = ipa;
  if (example) entry.x = example;

  const key = `${entry.w}|${entry.p}|${entry.g ?? ''}`;
  const prev = lemmas.get(key);
  if (prev) {
    for (const g of entry.s) if (!prev.s.includes(g) && prev.s.length < MAX_GLOSSES) prev.s.push(g);
    for (const k of ['ipa', 'x', 'pl', 'gen', 'v']) if (!prev[k] && entry[k]) prev[k] = entry[k];
  } else {
    lemmas.set(key, entry);
  }

  // Forms listed on the lemma itself (conjugation/declension), minus table junk.
  for (const f of o.forms || []) {
    const tags = f.tags || [];
    if (tags.some((t) => ['table-tags', 'inflection-template', 'class', 'error-unrecognized-form', 'romanization', 'auxiliary'].includes(t))) continue;
    if (f.form && !/^(de-|no-)/.test(f.form)) addForm(f.form, o.word);
  }
}
console.log(`read ${lines} lines, ${lemmas.size} lemma entries, ${pendingFormOf.length} form-of entries`);

const lemmaWords = new Set([...lemmas.values()].map((e) => e.w));
for (const [form, lemma] of pendingFormOf) if (lemmaWords.has(lemma)) addForm(form, lemma);

const entries = [...lemmas.values()];

// ---- write shards -------------------------------------------------------
fs.mkdirSync(OUT, { recursive: true });
for (const d of ['de', 'fm', 'en']) {
  fs.rmSync(path.join(OUT, d), { recursive: true, force: true });
  fs.mkdirSync(path.join(OUT, d), { recursive: true });
}

function chooseSplits(items, keyOf, sizeOf) {
  const bytes = new Map();
  for (const it of items) { const k = shardKey(keyOf(it), null); bytes.set(k, (bytes.get(k) ?? 0) + sizeOf(it)); }
  return new Set([...bytes].filter(([, b]) => b > SPLIT_BYTES).map(([k]) => k));
}

function writeNamespace(ns, items, keyOf, sizeOf, serialize) {
  const split = chooseSplits(items, keyOf, sizeOf);
  const groups = new Map();
  for (const it of items) {
    const k = shardKey(keyOf(it), split);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(it);
  }
  let total = 0, biggest = ['', 0];
  for (const [k, group] of groups) {
    const json = serialize(group);
    fs.writeFileSync(path.join(OUT, ns, `${k}.json`), json);
    total += json.length;
    if (json.length > biggest[1]) biggest = [k, json.length];
  }
  console.log(`${ns}: ${items.length} items, ${groups.size} shards, ${(total / 1e6).toFixed(2)} MB raw, biggest ${biggest[0]} ${(biggest[1] / 1e3).toFixed(0)} KB, split ${[...split].join(',') || '-'}`);
  return { shards: [...groups.keys()].sort(), split: [...split].sort() };
}

const de = writeNamespace('de', entries, (e) => e.w, (e) => JSON.stringify(e).length + 1,
  (group) => JSON.stringify(group.sort((a, b) => score(b) - score(a) || a.w.localeCompare(b.w, 'de'))));

const scoreByLemma = new Map();
for (const e of entries) scoreByLemma.set(e.w, Math.max(scoreByLemma.get(e.w) ?? 0, score(e)));

const fmItems = [...formPairs].map(([form, set]) => [form, [...set].sort((a, b) => (scoreByLemma.get(b) ?? 0) - (scoreByLemma.get(a) ?? 0)).slice(0, 4)]);
const fm = writeNamespace('fm', fmItems, ([k]) => k, ([k, v]) => k.length + v.join('').length + 8,
  (group) => JSON.stringify(Object.fromEntries(group)));

const enMap = new Map();
for (const e of [...entries].sort((a, b) => score(b) - score(a))) {
  for (const k of enKeys(e)) {
    if (!enMap.has(k)) enMap.set(k, []);
    const arr = enMap.get(k);
    if (arr.length < MAX_EN_PER_KEY && !arr.includes(e.w)) arr.push(e.w);
  }
}
const enItems = [...enMap];
const en = writeNamespace('en', enItems, ([k]) => k, ([k, v]) => k.length + v.join('').length + 8,
  (group) => JSON.stringify(Object.fromEntries(group)));

const meta = { generated: new Date().toISOString().slice(0, 10), counts: { de: entries.length, fm: fmItems.length, en: enItems.length }, de, fm, en };
fs.writeFileSync(path.join(OUT, 'meta.json'), JSON.stringify(meta));
fs.writeFileSync(path.join(OUT, 'ATTRIBUTION.txt'),
  `German dictionary data derived from Wiktionary (https://en.wiktionary.org),\nextracted by wiktextract and distributed by kaikki.org (https://kaikki.org).\nLicensed under Creative Commons Attribution-ShareAlike 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)\nand GFDL. The files in this directory are a trimmed, reformatted derivative and are\nshared under the same license. Generated ${meta.generated}.\n`);
console.log('done');

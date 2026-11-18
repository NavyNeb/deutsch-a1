// Authoring tools for the lesson redesign (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
//
//   npx tsx scripts/lesson-tools.mjs view <exportName> <oldFile>
//       Prints a compact view of an old-format lesson: words, rules, exercises.
//   npx tsx scripts/lesson-tools.mjs build <exportName> <oldFile> <templateFile> <outFile>
//       Expands a template into a lesson file. Inside the template:
//         @ex id1 id2 …   (own line) → those exercise steps of the old lesson, unchanged
//         @word id        (inline)   → the old vocabulary item with that id, as an object literal
//         @pron           (own line) → the old pronunciation step, unchanged
//         @meta module=1 number=4   (own line) → id, level, module, number, title, theme, goals of the old lesson
//                                   (module and number can be overridden)
//
// The old file is the lesson as it was in the old format (kept from git, not edited).
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const [cmd, exportName, oldFile, templateFile, outFile] = process.argv.slice(2);
const mod = await import(pathToFileURL(path.resolve(oldFile)).href);
const lesson = mod[exportName];
if (!lesson) { console.error(`export ${exportName} not found in ${oldFile}`); process.exit(1); }

const isIdent = (k) => /^[A-Za-z_$][\w$]*$/.test(k);
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`;
function toTs(v) {
  if (v === null) return 'null';
  if (typeof v === 'string') return q(v);
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) return `[${v.map(toTs).join(', ')}]`;
  return `{ ${Object.entries(v).filter(([, x]) => x !== undefined).map(([k, x]) => `${isIdent(k) ? k : q(k)}: ${toTs(x)}`).join(', ')} }`;
}

const vocab = new Map();
for (const s of lesson.steps) {
  if (s.kind === 'vocab') vocab.set(s.item.id, s.item);
  if (s.kind === 'pronunciation') for (const it of s.items) vocab.set(it.id, it);
}
const exercises = new Map(lesson.steps.filter((s) => s.kind === 'exercise').map((s) => [s.exercise.id, s]));
const pron = lesson.steps.find((s) => s.kind === 'pronunciation');

if (cmd === 'view') {
  console.log(`# ${lesson.id} ${lesson.level} module ${lesson.module} number ${lesson.number} | ${lesson.title.en} | ${lesson.theme}`);
  console.log('goals:', lesson.goals.join(' / '));
  console.log('\nWORDS');
  for (const [id, v] of vocab) console.log(`${id}: ${v.german}${v.gender ? ` [${v.gender}]` : ''} = ${v.english} | ${v.example.de}`);
  console.log('\nRULES');
  for (const s of lesson.steps) if (s.kind === 'grammar') {
    console.log(`- ${s.note.title}: ${s.note.explanationMd.replace(/\n+/g, ' ⏎ ')}`);
    for (const e of s.note.examples) console.log(`    · ${e.de} = ${e.en}`);
  }
  console.log('\nEXERCISES');
  for (const [id, s] of exercises) {
    const e = s.exercise;
    const detail = e.type === 'multipleChoice' || e.type === 'listenChoose' ? `${e.prompt} → ${e.options[e.answer]}${e.audio?.ttsText ? ` (audio: ${e.audio.ttsText})` : ''}`
      : e.type === 'fillBlank' ? `${e.prompt} → ${e.answer}`
      : e.type === 'wordOrder' ? `${e.answer.join(' ')}`
      : e.type === 'match' ? e.pairs.map((p) => `${p.de}=${p.en}`).join(', ')
      : e.type === 'articlePicker' ? `${e.word} → ${e.answer}` : '';
    console.log(`${id} [${e.type}] ${detail}`);
  }
  if (pron) console.log(`\nPRONUNCIATION: ${pron.focus} | ${pron.items.map((i) => i.german).join(', ')}`);
} else if (cmd === 'build') {
  const used = new Set();
  const lines = fs.readFileSync(templateFile, 'utf8').split('\n');
  const out = [];
  for (const raw of lines) {
    const ex = raw.match(/^(\s*)@ex\s+(.+?)\s*$/);
    if (ex) {
      for (const id of ex[2].split(/\s+/)) {
        const step = exercises.get(id);
        if (!step) { console.error(`unknown exercise id: ${id}`); process.exit(1); }
        used.add(id);
        out.push(`${ex[1]}${toTs(step)},`);
      }
      continue;
    }
    const meta = raw.match(/^(\s*)@meta(.*)$/);
    if (meta) {
      const o = Object.fromEntries([...meta[2].matchAll(/(\w+)=(\S+)/g)].map((m) => [m[1], m[2]]));
      const ind = meta[1];
      out.push(`${ind}id: ${q(lesson.id)}, level: ${q(lesson.level)}, module: ${o.module ?? lesson.module}, number: ${o.number ?? lesson.number},`);
      out.push(`${ind}title: ${toTs(lesson.title)},`);
      out.push(`${ind}theme: ${q(lesson.theme)},${lesson.themeFr ? ` themeFr: ${q(lesson.themeFr)},` : ''}`);
      out.push(`${ind}goals: ${toTs(lesson.goals)},${lesson.goalsFr ? ` goalsFr: ${toTs(lesson.goalsFr)},` : ''}`);
      continue;
    }
    const pr = raw.match(/^(\s*)@pron\s*$/);
    if (pr) {
      if (!pron) { console.error('no pronunciation step in the old lesson'); process.exit(1); }
      out.push(`${pr[1]}${toTs(pron)},`);
      continue;
    }
    out.push(raw.replace(/@word\s+([^\s,\]\)]+)/g, (_, id) => {
      const v = vocab.get(id);
      if (!v) { console.error(`unknown word id: ${id}`); process.exit(1); }
      return toTs(v);
    }));
  }
  fs.writeFileSync(outFile, out.join('\n'));
  const unused = [...exercises.keys()].filter((id) => !used.has(id));
  console.log(`wrote ${outFile}; exercises carried: ${used.size}/${exercises.size}${unused.length ? `; dropped: ${unused.join(', ')}` : ''}`);
} else {
  console.error('usage: view|build');
  process.exit(1);
}

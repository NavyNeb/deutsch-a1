import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import { readFile, copyFile, mkdir, access, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { officialTrackName, ttsFileName, TTS_VOICE } from '../lib/audio-names.mjs';
import { SPEAKING_PROMPTS } from '../content/speaking-prompts.mjs';

const OFFICIAL_SRC = process.env.MENSCHEN_AUDIO_DIR || 'C:/Users/F3LX_STOR/Downloads/Menschen A1 audio';
const OUT = path.resolve('public/audio');

// German words that appear in the app's UI chrome (nav buttons, the "mark
// difficult" toggle). The app plays these via ttsSrc(), so their clips must be
// generated too — otherwise those 🔊 buttons request a file that 404s.
export const UI_PHRASES = ['Zurück', 'Weiter', 'Fertig', 'Als schwierig markieren', 'Gemerkt'];

// Pull audio-bearing text + official refs out of the lessons.
export function collectAudioJobs(lessons) {
  const official = [], tts = new Set();
  for (const lesson of lessons) for (const step of lesson.steps) {
    if (step.kind === 'vocab') { tts.add(step.item.german); tts.add(step.item.example.de); }
    if (step.kind === 'pronunciation') for (const it of step.items) { tts.add(it.german); tts.add(it.example.de); }
    if (step.kind === 'grammar') {
      const n = step.note;
      for (const e of n.examples) tts.add(e.de);
      // The breakdown plays as one sentence: its parts joined by spaces (GrammarStep builds the same string).
      for (const a of n.anatomy ?? []) tts.add(a.parts.map((x) => x.text).join(' '));
      for (const side of n.contrast ? [n.contrast.a, n.contrast.b] : []) for (const e of side.examples) tts.add(e.de);
      for (const m of n.mistakes ?? []) tts.add(m.right); // only the correct sentence is ever played
    }
    if (step.kind === 'situation') {
      for (const l of step.lines) tts.add(l.de);
      for (const it of step.words ?? []) { tts.add(it.german); tts.add(it.example.de); }
    }
    if (step.kind === 'wordgroup') for (const it of step.items) { tts.add(it.german); tts.add(it.example.de); }
    if (step.kind === 'wrapup') for (const sec of step.card?.sections ?? []) for (const r of sec.rows) tts.add(r.de);
    if (step.kind === 'exercise' && step.exercise.type === 'listenChoose') {
      const a = step.exercise.audio;
      if (a.official) official.push(a.official); else tts.add(a.ttsText);
    }
  }
  return { official, tts: [...tts] };
}

const exists = (p) => access(p).then(() => true).catch(() => false);

async function main() {
  // Lessons are TS; load the JSON snapshot the build writes (see note) OR import via tsx.
  const lessons = JSON.parse(await readFile(path.resolve('content/lessons.snapshot.json'), 'utf8'));
  await mkdir(OUT, { recursive: true });
  const { official, tts: contentTts } = collectAudioJobs(lessons);
  const tts = [...new Set([...contentTts, ...UI_PHRASES, ...SPEAKING_PROMPTS.map((p) => p.de)])];

  let copied = 0, generated = 0, skipped = 0, missing = [];
  for (const { lesson, activity } of official) {
    const dest = path.join(OUT, officialTrackName(lesson, activity));
    if (await exists(dest)) { skipped++; continue; }
    const srcName = `Lektion ${lesson}, ${activity}.mp3`;
    const src = path.join(OFFICIAL_SRC, srcName);
    if (await exists(src)) { await copyFile(src, dest); copied++; }
    else missing.push(srcName);
  }

  const engine = new MsEdgeTTS();
  await engine.setMetadata(TTS_VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  for (const text of tts) {
    const dest = path.join(OUT, ttsFileName(text));
    if (await exists(dest)) { skipped++; continue; }
    const { audioStream } = await engine.toStream(text);
    const chunks = [];
    for await (const c of audioStream) chunks.push(c);
    await writeFile(dest, Buffer.concat(chunks));
    generated++;
  }
  console.log(`audio: copied ${copied}, generated ${generated}, skipped ${skipped}`);
  if (missing.length) console.warn('MISSING official tracks:\n' + missing.join('\n'));
}

// Only run when invoked directly (not when imported by the test).
if (import.meta.url === pathToFileURL(process.argv[1]).href) main();

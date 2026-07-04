# Deutsch A1 — Personal German Learning App

**Design spec** · 2026-07-04 · Working title: *Deutsch A1*

## 1. Purpose & scope

A single-user web app that guides the owner through learning German at CEFR **A1**, with a strong emphasis on **guided steps, pronunciation (voice), and visual learning**. Not a product for other users — no accounts, no backend, no multi-tenancy.

**MVP scope:** Module 1 of the curriculum — **Lektionen 1–3** — built fully end-to-end (vocab, grammar, exercises, voice, visuals, progress). Lessons 4–12 (and later A1.2) are deliberately out of MVP scope; the data model and UI must make adding them a content-only task.

**Non-goals (MVP):**
- Speech recognition / "say it back" scoring (deferred; voice is playback + visual guidance only).
- Multi-user, auth, cloud sync, leaderboards.
- Lessons 4–12 content.

## 2. Decisions locked in brainstorming

| Area | Decision |
|---|---|
| Visual style | **Editorial & Calm** — serif headings, warm paper tones (`#F5F3EE`/`#FCFBF8`), ink text (`#2B2A26`), muted brick accent (`#B0472F`), generous whitespace |
| Learn mode | **Guided steps** — one idea per screen, progress bar, hints |
| Review mode | **Scrolling chapter** — the whole lesson as one elegant page |
| Voice | **Pre-generated native MP3s** via free Microsoft Edge neural German voice (e.g. de-DE Katja/Conrad) |
| Content sources | *Menschen A1.1* (Hueber) → themes/vocab/dialogues/goals; *Basic German* (Schenke & Seago) → grammar explanations + exercises |
| AI assist | **Optional** Claude-powered help; app is fully functional without it |
| Users | Single user; no accounts; progress in `localStorage` |

## 3. Curriculum — Module 1 (MVP)

Sequenced to match *Menschen A1.1*, with grammar depth grafted from *Basic German*. Grammar not in A1 (dative, genitive, simple past, future, adjective endings) is excluded.

- **Lektion 1 — Hallo! Ich bin Nicole** · greetings & introducing yourself.
  - Vocab: greetings/farewells, countries, the alphabet.
  - Grammar: verb **sein** (present, singular), personal pronouns, **W-questions** (Wer/Was/Wo/Woher/Wie).
  - Can-do: greet, introduce self & others, say where you're from, spell your name.
- **Lektion 2 — Ich bin Journalistin** · profession & personal info.
  - Vocab: jobs, marital status, numbers 1–100.
  - Grammar: verb conjugation (singular + plural), **negation with *nicht***, yes/no questions & *doch*.
  - Can-do: state your job, give personal details, fill a simple profile.
- **Lektion 3 — Das ist meine Mutter** · family & languages.
  - Vocab: family members, languages, numbers 100–1,000,000.
  - Grammar: **possessive articles** *mein/dein*, **definite article** der/das/die, vowel-change verbs, pronouns er/es/sie.
  - Can-do: talk about family, say which languages you speak.

**Cross-cutting foundations** woven in from Lektion 1: alphabet & spelling, umlauts (ä/ö/ü) & ß, noun **gender** learned with the article, pronunciation of tricky sounds.

## 4. Architecture

Next.js (App Router) + TypeScript + Tailwind CSS. No database, no server state.

- **Content** — structured, typed data files in the repo (`/content/lessons/*.ts`). Authored by extracting & curating from the two PDFs.
- **Progress** — browser `localStorage` (completed steps/lessons, exercise results, hard-words list).
- **Audio** — static MP3s in `/public/audio`, generated once by a build script, committed to the repo → offline & free at runtime.
- **AI assist** — a single Next.js Route Handler (`/api/assist`) calling the Claude API via the Anthropic SDK; enabled only when `ANTHROPIC_API_KEY` is present.
- **Runs** locally (`npm run dev`); deployable to Vercel unchanged.

### Component boundaries
- `content/` — data + Zod-validated types (`Lesson`, `VocabItem`, `GrammarNote`, `Exercise`). Pure data, no UI.
- `lib/progress` — read/write progress to `localStorage`; single source of truth for "what's done".
- `lib/audio` — resolve a word/sentence → its MP3 path; play helper.
- `components/learn/` — the guided step player (one component per step type).
- `components/review/` — the scrolling-chapter renderer.
- `components/exercises/` — one component per exercise type, each with a shared `onResult` contract.
- `app/` — routes: home (learning path), `/lesson/[id]/learn`, `/lesson/[id]/review`.

## 5. Data model (shape, not final)

```ts
type Gender = 'der' | 'die' | 'das' | null;

interface VocabItem {
  id: string;
  german: string;          // e.g. "das Fenster"
  english: string;
  gender: Gender;          // drives color-coding
  syllables: string[];     // ["das","FENS","ter"] — stressed syllable uppercased
  example: { de: string; en: string };
  audioWord: string;       // /audio/... .mp3
  audioExample: string;
  image?: string;          // optional illustrative asset
}

interface GrammarNote {
  id: string;
  title: string;
  explanationMd: string;   // clear, A1-level, English with German examples
  examples: { de: string; en: string; audio?: string }[];
  diagram?: 'verb-second' | 'satzklammer' | 'conjugation-table';
}

type Exercise =
  | { type: 'multipleChoice'; prompt: string; options: string[]; answer: number; explain?: string }
  | { type: 'fillBlank';      prompt: string; answer: string; hint?: string }
  | { type: 'articlePicker';  word: string; answer: Gender }
  | { type: 'match';          pairs: { de: string; en: string }[] }
  | { type: 'wordOrder';      tokens: string[]; answer: string[] }
  | { type: 'listenChoose';   audio: string; options: string[]; answer: number };

type LessonStep =
  | { kind: 'intro'; title: string; scene?: string; goals: string[] }
  | { kind: 'vocab'; item: VocabItem }
  | { kind: 'grammar'; note: GrammarNote }
  | { kind: 'exercise'; exercise: Exercise }
  | { kind: 'pronunciation'; focus: string; items: VocabItem[] }
  | { kind: 'wrapup'; summary: string };

interface Lesson {
  id: string; number: number;
  title: { de: string; en: string };
  theme: string; goals: string[];
  steps: LessonStep[];     // Learn mode = ordered steps; Review mode groups them by kind
}
```

## 6. Lesson experience

**Learn mode** (`/lesson/[id]/learn`) — a step player. Renders `lesson.steps` one at a time with a top progress bar and a `Weiter →` control. Vocab steps show the word, syllable/stress breakdown, a 🔊 button, the example sentence, and optional image. Exercise steps give instant feedback + a short explanation; a **Hint** is always available. Step transitions are gentle (fade/slide).

**Review mode** (`/lesson/[id]/review`) — the same lesson re-rendered as one calm scrolling page: vocab list (each with audio), grammar notes, example sentences. For revisiting, not first learning.

**Visual-learning touches:**
- **Gender color-coding**: consistent subtle accents for der/die/das everywhere a noun appears.
- **Syllable & stress** display on vocab and pronunciation steps.
- **Sentence-structure diagrams**: verb-second position and the *Satzklammer* shown visually.
- Icons/illustrations per vocab item where they aid recall.

## 7. Voice pipeline

- Build script `scripts/generate-audio.mjs` walks the content data, and for each German word and example sentence calls a free Edge-neural TTS (Node package `msedge-tts`; fallback: Python `edge-tts`, which is available locally) with a German neural voice.
- Output MP3 named by a stable hash of the text+voice, written to `/public/audio/`, committed to the repo.
- Content references audio by that path. Re-run the script when content changes (idempotent — skips existing files).
- Runtime playback is a static file fetch: instant, offline, free.

### 7a. Listening exercises (no original CD needed)

*Menschen A1.1* references audio tracks on a CD/DVD. We are not *dependent* on them, but we use them when available. **Audio source precedence** (best available wins per item):

1. **Official Menschen MP3** — if the owner provides the course audio, it is preferred for the listening scenes/dialogues it covers (professional actors, exact match to the book, natural intonation).
2. **TTS-generated** — for anything not on the CD: vocabulary words, example sentences, authored exercises. For multi-speaker dialogues, assign **distinct German neural voices per speaker** (e.g. Katja + Conrad).
3. **Authored equivalent** — for a pure comprehension task with no transcript and no track: author a short A1-in-scope script (only already-taught vocab), then generate its audio.

Official and generated MP3s coexist in `/public/audio/`; an exercise's `audio` field points to whichever applies — no code difference between sources.

**Official audio is available** at `C:\Users\F3LX_STOR\Downloads\Menschen A1 audio` — 59 MP3s named by lesson + Kursbuch activity number (`Lektion 1, 2a.mp3`, `Lektion 3, 6a.mp3`, `Intro.mp3`). Module 1 coverage: **Lektion 1** (activities 1, 2a, 3, 4, 5, 6c, 7, 9a, 10), **Lektion 2** (1b, 2a, 3b, 3c, 4a, 5a), **Lektion 3** (1, 2, 3a, 6a). These are **scene/dialogue** tracks, not per-word clips — so TTS remains responsible for per-word pronunciation and example sentences. During content authoring, files are copied into `/public/audio/` under normalized names (e.g. `l1-2a.mp3`) and mapped from each activity. (`4_5814252388583739013.mp3` appears to duplicate `Lektion 1, 1.mp3` — ignore unless proven otherwise.)

The `listenChoose` exercise type consumes these MP3s. The audio-generation script (§7) fills only the gaps — it skips any item already covered by an official file.

**Copyright note:** official Menschen tracks are Hueber's copyrighted material — fine for personal, local use. A **public deployment** must not bundle them; for a public build, substitute TTS audio. Local/personal use is the default and MVP target.

## 8. AI assist (optional)

- Buttons on vocab/grammar steps: **"Explain more"**, **"5 more examples"**, **"Quiz me"**.
- Each calls `/api/assist`, which uses the Anthropic SDK with a cost-appropriate current model (e.g. Haiku 4.5 for cheap calls, Sonnet for richer explanations) and a German-A1-tutor system prompt.
- Enabled only if `ANTHROPIC_API_KEY` is set; otherwise the buttons are hidden. The core app never depends on it.
- Small per-use cost is acceptable and owner-understood.

## 9. Home / progress

- Home = **learning path**: the 12 lessons shown as a vertical path; Module 1 active, the rest visibly "coming soon". Each active lesson shows a **progress ring**.
- A **"Words to review"** section surfaces items the owner marked hard or missed in exercises.
- Progress model in `localStorage`: per-lesson step completion, per-exercise correctness, hard-words set, optional day streak.

## 10. Tech stack

- **Next.js** (App Router, latest), **TypeScript**, **Tailwind CSS**.
- **Zod** for content validation at load.
- **Framer Motion** for gentle step transitions.
- **msedge-tts** (build-time audio generation).
- **@anthropic-ai/sdk** (optional assist route).
- Base components hand-built for the Editorial style (shadcn/ui optional for primitives only).

## 11. Testing strategy

- **Content validation** — Zod schemas run in a test to guarantee every lesson/vocab/exercise is well-formed and every referenced audio file exists.
- **Exercise logic** — unit tests for each exercise type's answer-checking.
- **Progress lib** — unit tests for localStorage read/write/derive (completed %, hard-words).
- **Audio script** — a dry-run test that it enumerates the expected file set from content.
- Manual pass through Lektion 1 learn + review flows before calling MVP done.

## 12. Milestones

1. Project scaffold (Next.js + TS + Tailwind + Editorial theme tokens) and content types + Zod.
2. Author Lektion 1 content (vocab/grammar/exercises) from PDFs.
3. Audio generation script + Lektion 1 MP3s.
4. Learn-mode step player + all exercise components.
5. Review-mode chapter renderer.
6. Home/learning-path + progress lib.
7. Optional AI-assist route + buttons.
8. Author Lektionen 2–3; full manual pass; polish.

# Deutsch A1

A single-user German A1 learning app, built around the *Menschen A1* course. It pairs
guided lessons with focused chapter review, native audio, and visual aids for
pronunciation and grammar.

## What it does

- **Guided learn mode** (`/lesson/[id]/learn`) — steps through a lesson's vocab,
  pronunciation, grammar, and exercises one at a time, with progress gated on
  completing each step.
- **Chapter review mode** (`/lesson/[id]/review`) — a denser, all-at-once view of a
  lesson's content for revisiting material already learned.
- **Home / learning path** (`/`) — shows the full 12-lesson path for Module 1, with
  the authored lessons active and the rest greyed out as "coming soon", plus
  progress rings and a "words to review" list drawn from missed exercises.
- **Native audio** — official *Menschen* course audio where available, generated
  TTS (Microsoft Edge neural voices) as a fallback/supplement for everything else,
  including listening-comprehension exercises.
- **Visual aids** — der/die/das color-coding for noun gender, syllable/stress
  markup for pronunciation, and simple sentence-structure diagrams for grammar
  notes.
- **Optional Claude-powered assist** — an in-app "ask for help" affordance that
  calls the Anthropic API when configured; the app works fully without it.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19
- TypeScript, Zod (content schema validation)
- Tailwind CSS 4
- Vitest + Testing Library (unit/component tests)
- `msedge-tts` for offline-friendly TTS audio generation
- `@anthropic-ai/sdk` for the optional assist feature

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Next.js dev server. |
| `npm test` | Run the Vitest suite. |
| `npm run typecheck` | Run `tsc --noEmit` — no build output, just type-checking. |
| `npm run build` | Production build (`next build`). |
| `npm run start` | Serve the production build (run `build` first). |
| `npm run audio` | Regenerate lesson audio (see below). |

Before committing, `npm test`, `npm run typecheck`, and `npm run build` should all
pass.

## Regenerating audio

Lesson content (in `content/`) references audio either via the official
*Menschen* course track or as TTS text. `npm run audio` snapshots the lesson
content to JSON and then walks every audio reference, copying/generating the
corresponding file into `public/audio/`:

```bash
npm run audio
```

This **needs internet access** (the TTS step calls Microsoft's Edge neural voice
endpoint). It's safe to re-run — existing output files are skipped, not
regenerated.

Official audio tracks are copied from a local folder of the *Menschen A1*
course audio. By default the script looks in a hardcoded path
(`scripts/prepare-audio.mjs`); override it with an environment variable if your
copy lives elsewhere:

```bash
MENSCHEN_AUDIO_DIR="/path/to/Menschen A1 audio" npm run audio
```

## Optional: Claude-powered assist

The app can offer an "ask for help" feature backed by the Anthropic API. It is
fully optional — without configuration, the assist UI simply doesn't appear and
nothing else is affected.

To enable it, copy `.env.example` to `.env` and fill in:

```bash
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_ASSIST=1
```

`ANTHROPIC_API_KEY` is used server-side only (in the `/api/assist` route) and is
never exposed to the client. `NEXT_PUBLIC_ASSIST=1` turns the feature's UI on.

## Copyright note — do not publish official audio

`public/audio/l*.mp3` are the official *Menschen A1* course audio tracks
(© Hueber Verlag), copied locally by `npm run audio` for personal study use.
They are **gitignored and must never be committed, published, or deployed
publicly**. Only the generated TTS audio (`public/audio/tts-*.mp3`) is safe to
commit and ship in a public deployment — if you deploy this app somewhere
public, make sure the official tracks are excluded (they should already be,
since they're gitignored and never make it into version control in the first
place).

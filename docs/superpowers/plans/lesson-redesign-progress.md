# Lesson redesign: progress ledger

Spec: `docs/superpowers/specs/2026-11-18-lesson-redesign-design.md`. Branch `feat/lesson-redesign`.
Sasha asked (2026-11-18, going to bed): all lessons AND all special courses in the new format, working autonomously. Review is in the morning.

## How a lesson is rebuilt (the loop)

1. Original lessons are kept from git in the scratchpad (`old/lektion-N.ts`, from `git show HEAD:content/lessons/…`). If the scratchpad is gone, recreate with `git show <first-redesign-commit-parent>:path` or from `HEAD` before the file was overwritten (see "Originals" below).
2. `npx tsx scripts/lesson-tools.mjs view <exportName> <oldFile>` prints the old words, rules and exercises.
3. Write a template (`tpl/<name>.tpl.ts`) with `@meta module=M number=N`, `@word id`, `@ex id1 id2`, `@pron`, then
   `npx tsx scripts/lesson-tools.mjs build <exportName> <oldFile> <tpl> content/lessons/<file>.ts`.
4. `npx vitest run content` must stay green (quality bar in `content/quality.ts`). Run the full suite and `npx tsc --noEmit` at the end of each batch.
5. Never repeat a word id within a lesson (situation words, wordgroup items and pronunciation items share one id space).

## A1 numbering (path order is by `number`; chapters by `module`)

| number | module | id | title |
|---|---|---|---|
| 1 | 1 | l1 | Hello! I am Nicole (done, pilot) |
| 2 | 1 | l20 | Sounds of German (new) |
| 3 | 1 | l21 | Sorry? Slowly, please (new) |
| 4 | 1 | l4 | Numbers and age (0–20, haben) |
| 5 | 1 | l2 | I am a journalist (numbers to 100) |
| 6 | 1 | l3 | This is my mother |
| 7 | 2 | l13 | Things and plurals |
| 8 | 2 | l5 | Time and daily routine |
| 9 | 2 | l14 | Making plans and word order |
| 10 | 2 | l7 | Free time and hobbies |
| 11 | 2 | l23 | Work, school and learning German (new) |
| 12 | 3 | l6 | Food and drink |
| 13 | 3 | l8 | Shopping |
| 14 | 3 | l9 | Living / Home |
| 15 | 3 | l15 | My house, your house |
| 16 | 4 | l11 | Transport and directions |
| 17 | 4 | l22 | Services and the phone (new) |
| 18 | 4 | l16 | Rules and prohibitions |
| 19 | 4 | l10 | Health and the body |
| 20 | 4 | l17 | Imperative |
| 21 | 5 | l18 | Holidays, events, denn |
| 22 | 5 | l12 | Weather and seasons |
| 23 | 5 | l19 | Dates, ordinals, wishes |
| 24 | 6 | l25 | Yesterday: first Perfekt (new) |
| 25 | 6 | l24 | Short messages and forms (new) |
| 26 | 6 | l26 | Start Deutsch 1 check (new) |

Module 6 needs a chapter name in `lib/path-model.ts` (`CHAPTER_NAMES['A1-6']`).

## Status

| Part | State |
|---|---|
| Engine, pilots (l1, b1-l6) | done |
| A1: all 19 existing lessons rebuilt + 7 new (l20–l26), numbered and registered | done, tsc 0, vitest 117 files green |
| A2: 24 existing rebuilt + 6 new (a2-l25 Work, a2-l26 Appointments, a2-l27 Travel, a2-l28 Writing, a2-l29 Media/relative clauses, a2-l30 A2 check; module 7) | done, tsc 0, vitest 117 files / 1643 tests green |
| B1: 26 existing rebuilt + 2 new (b1-l27 Telling a story, b1-l28 B1 check; module 7) | done, tsc 0 and full vitest green |
| B2: 26 existing rebuilt + 1 new (b2-l27 B2 check, module 9) | done, quality bar and tsc green |
| Specials (41) | done: 151 runs of single word cards regrouped into wordgroup steps (all 41), 45 dialogues (situation steps) added to 9 word-heavy specials; grammar/exercise/quiz steps unchanged; SpecialOverview and SpecialReview read the new kinds |

Update the table as batches finish.


## Tools and where the originals are

- `scripts/lesson-tools.mjs` (view / build). Templates are written in the scratchpad (`tpl/`), originals in `old/` (from `git show HEAD:content/lessons/...`; HEAD is the commit before any lesson was rebuilt). The scratchpad is session-local; if it is gone, re-create originals with `git show HEAD:content/lessons/<file>` from a checkout where the file is still the old version (the first redesign commit's parent).
- New A1 lessons (l20–l26) have no old version: they were written directly as TypeScript.
- Templates for A2/B1/B2 use the same loop. Numbers for A2/B1/B2 stay as they are unless new lessons are inserted.

## Next

1. A2 (24 lessons) then new A2 lessons, B1, B2, then specials.
2. After each level: `npx tsc --noEmit`, `npx vitest run`.

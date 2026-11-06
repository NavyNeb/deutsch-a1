# Dreiklang baseline (2026-11-06, branch `feat/dreiklang` cut from `main` @ 0309e8a)

## Checks before any change
- `npm run typecheck` — pass.
- `npm test` — 43 files passed, 1 skipped; 872 tests passed, 1 skipped (~105 s). No failures.
- `npm run build` — pass.

## `/lesson/l1/learn` hang
- Dev server (Turbopack): the route did not answer within 200 s once, on first compile.
- Production (`next build && next start`): first request 200 in 12.6 s (cold), then 200 in ~0.03 s. Not a hang in production. Treated as dev-server first-compile slowness; no action in this project.

## Next.js docs relied on (node_modules/next/dist/docs/)
- Redirects: `01-app/03-api-reference/05-config/01-next-config-js/redirects.md`
- Fonts: `01-app/03-api-reference/02-components/font.md` (local fonts)
- Viewport/theme colour: `01-app/03-api-reference/04-functions/generate-viewport.md`
- `proxy.ts` (renamed middleware) — existing file, unchanged.

## Lighthouse baseline
Recorded in the final task (Task 18) against `/` and `/path`.

## Pre-existing working-tree edits that are NOT part of this work
`components/textbook/BookLibrary.tsx`, `components/textbook/BookReader.tsx`, `lib/books.ts` — never staged by this branch.

## Final verification (branch `feat/dreiklang`)
- `npm run typecheck` — pass. `npm test` — 81 files passed, 1 skipped; 1088 tests passed (baseline was 872).
- Legacy design tokens (`primary`, `font-rounded`, `*-wash`, `--soft`, `--accent`, `--good/--bad/--amber`) were replaced across live source files. The aliases `--color-primary`, `--primary` and `font-rounded` are intentionally kept, because the in-progress textbook reader (`components/textbook/BookLibrary.tsx`, `BookReader.tsx`, `lib/books.ts`, uncommitted and not touched by this branch) still uses them. Remove them when that work lands.
- Lighthouse was not run (no headless Chrome available in this session); run it on `/` and `/path` before release.
- Dead files left on disk because the delete command was refused by the safety check (verified unreferenced by live code after the review): `components/shell/TopNav.tsx`, `components/shell/SiteFooter.tsx`, `components/home/LearningPath.tsx`, `components/home/LessonCard.tsx`, `components/home/LessonNode.tsx` (+ its test), `lib/lesson-visuals.ts`, `lib/special-visuals.ts`, `public/fonts/poppins-*.woff2`, `public/illustrations/hero-couple.png`, `note-1.png`, `note-2.png`.
- Still LIVE — do not delete: `components/ui/Mascot.tsx` (AccountView, QuizIntro, WrapupStep, OfflineScreen, ReviewSession), `components/ui/Confetti.tsx` (ReviewSession), `public/illustrations/greeter.png` and `runner.png` (StatisticsView, games/audio, games/sprint). `HomeHeader.tsx` / `WordsToReview.tsx`: check importers before deleting.

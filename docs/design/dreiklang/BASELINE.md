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

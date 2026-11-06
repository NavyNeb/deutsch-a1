# Dreiklang Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Deutsch's teal/Poppins/emoji UI with the Dreiklang design language and the new Heute · Weg · Üben · Bibliothek · Du structure, without changing learning logic, content, progress, sync or audio.

**Architecture:** Tokens first. The new ink/paper + der/die/das tokens go into `app/globals.css` and the legacy token names (`--primary`, `--card`, `--bg`, …) are aliased to them, so every existing screen re-skins immediately and stays working while screens are rebuilt one by one. New shared primitives (`GenderShape`, `Ring`, `ProgressTicks`, `LessonArt`) and pure helpers (`lib/gender.ts`, `lib/path-model.ts`, `lib/lesson-art.ts`, `lib/nav.ts`, `lib/palette-index.ts`) carry the logic and the tests; screens compose them. Old URLs keep working; the final task deletes legacy code.

**Tech Stack:** Next.js 16.2 (App Router, Turbopack), React 19, Tailwind 4 (`@theme inline`), framer-motion, lucide-react, vitest + Testing Library (jsdom).

**Spec:** `docs/superpowers/specs/2026-11-05-dreiklang-redesign-design.md`
**Prototype (look and feel source of truth):** https://claude.ai/artifact/YHzt6xT6BE8qtWubGKyruk — source in `docs/design/dreiklang/project/*.dc.html`. When this plan says "as the prototype", open the named board and match layout, spacing, type sizes and colours.

## Global Constraints

- `AGENTS.md`: this Next.js has breaking changes — before touching routing, redirects, fonts or metadata, read the matching guide under `node_modules/next/dist/docs/` (Task 0 lists them).
- Do not stage the user's pre-existing uncommitted edits (`components/textbook/BookLibrary.tsx`, `components/textbook/BookReader.tsx`, `lib/books.ts`). Always `git add` explicit paths, never `git add -A`/`.`. Work on branch `feat/dreiklang`.
- Every new UI string goes in `lib/ui-strings.ts` with both `en` and `fr`. German labels (Heute, Weg, Üben, Bibliothek, Du) are fixed words; the EN/FR gloss is shown beside them.
- Fonts self-hosted: Jost 300–700 and Inter 400–700, latin + latin-ext (umlauts, ß). No runtime Google Fonts request.
- Tokens (dark default, `[data-theme="light"]` = "Papier"): `--ink --s1 --s2 --s3 --line --line2 --t1 --t2 --t3 --der --die --das --der-t --die-t --das-t --ok --ember --cta --cta-i`. Dark values: ink `#09090B`, s1 `#111114`, s2 `#17171B`, s3 `#222228`, t1 `#F5F3EE`, t2 `#B7B4AD`, t3 `#8F8C85`, der `#5B8CFF`, die `#FF6F96`, das `#FFCB45`, der-t `#8DAEFF`, die-t `#FF8FAE`, das-t `#FFCB45`, ok `#46E0A0`, ember `#FF9150`, cta `#F5F3EE`, cta-i `#09090B`. Light values: ink `#F1EDE4`, s1 `#FAF7F0`, s2 `#FFFFFF`, s3 `#E8E3D8`, t1 `#111114`, t2 `#47443E`, t3 `#6B675F`, der `#2F5FF0`, die `#E83E73`, das `#F4B400`, der-t `#2447C9`, die-t `#C2285D`, das-t `#7A5600`, ok `#0E9F6E`, ember `#D9601A`, cta `#111114`, cta-i `#F5F3EE`. Lines: dark `rgba(255,255,255,.08/.16)`, light `rgba(20,18,12,.10/.18)`.
- Shapes: der = square, die = circle, das = triangle. Colour never appears without its shape; colour is never used decoratively.
- Type: German/display = Jost (700 display, 600 headings, 300 articles); explanations = Inter. No text below 12px. Eyebrow = Inter 600 12px caps +0.14em.
- Mistakes are never red: feedback copy is **Richtig!** (`--ok`) and **Fast!** (`--ember`).
- Text contrast ≥ 4.5:1, touch targets ≥ 44px, `prefers-reduced-motion` → fades only.
- Do not change: `lib/progress*.ts` logic, `lib/srs.ts`, `lib/audio.ts`, Supabase sync, the exercise-checking logic in `lib/exercises.ts`, the textbook reader's copy protection.
- Existing tests must pass at the end of every task: `npm run typecheck && npm test`.

## Review Focus

Failure modes the spec implies that a person would hit; each is pinned by a test in the named task.

1. **Spacebar/arrows inside a text field must not advance the lesson** — fill-blank answers contain spaces (Task 11).
2. **Vocab with no gender or no article** (verbs, phrases like "Guten Tag", plural-only words) must render no article/shape and must not crash (Task 2, Task 12).
3. **Returning users keep their saved theme; old URLs and installed PWAs keep working** — `deutsch-a1-theme=light` stays light, `/games`, `/statistics`, `/account`, `/settings`, `/textbook`, `/dictionary`, `/exams` still resolve, SW cache is versioned (Task 1, Task 6).
4. **Empty and finished states** — brand-new visitor (no progress, no account), a learner who finished every lesson, and `dailyGoal` of any option never divide by zero or show an empty hero (Task 8, Task 9).
5. **French UI** — every new key has non-empty `en` and `fr`; German nav labels plus FR glosses must not overflow the 264px rail or phone tab bar (Task 5).

---

### Task 0: Baseline, branch, docs

**Files:**
- Create: `docs/design/dreiklang/BASELINE.md`
- Commit: the spec, this plan, `docs/design/dreiklang/project/*`

- [ ] **Step 1:** Create branch `feat/dreiklang` (use superpowers:using-git-worktrees if a worktree is wanted). Confirm `git status` still shows the user's three modified files as modified and unstaged; leave them alone.
- [ ] **Step 2:** Run `npm run typecheck && npm test`; record pass/fail counts in `BASELINE.md`. Any pre-existing failure is recorded, not fixed here.
- [ ] **Step 3:** Diagnose the `/lesson/l1/learn` hang seen once in dev (>200 s): run `npm run build && npm start`, `curl -s -o /dev/null -w "%{time_total}" http://localhost:3000/lesson/l1/learn`. Record whether it is dev-only. If it also hangs in production, stop and report to the user before continuing.
- [ ] **Step 4:** Read and note in `BASELINE.md` the doc paths you rely on (list them): redirects in `next.config` (`node_modules/next/dist/docs/01-app/03-api-reference/**/redirects*`), `next/font/local`, route handling for `proxy.ts`, `metadata`/`viewport`.
- [ ] **Step 5:** Commit: `git add docs/design docs/superpowers && git commit -m "docs: dreiklang spec, plan, prototype sources, baseline"`.

---

## Phase 1 — Foundations

### Task 1: Tokens, fonts, default theme

**Files:**
- Modify: `app/globals.css`, `app/layout.tsx`, `components/ui/ThemeToggle.tsx`
- Create: `public/fonts/jost-latin-wght-normal.woff2`, `public/fonts/jost-latin-ext-wght-normal.woff2`, `public/fonts/inter-latin-wght-normal.woff2`, `public/fonts/inter-latin-ext-wght-normal.woff2`
- Test: `lib/tokens-contrast.test.ts`, `components/ui/ThemeToggle.test.tsx`

**Interfaces:**
- Produces: CSS vars listed in Global Constraints; Tailwind theme colors `bg(=ink) card(=s1) surface-2(=s2) surface-3(=s3) border(=line) border-strong(=line2) text(=t1) text-2(=t2) muted(=t3) faint(=t3) der die das der-text die-text das-text good(=ok) bad(=ember) cta cta-ink`; fonts `font-display` (Jost) and `font-sans` (Inter); legacy aliases kept: `primary(=cta) primary-ink(=cta-i) primary-2 font-rounded(=Jost)`, `--primary-wash`, `--soft`, `--soft-ink`, `--accent`, `--accent-wash`, `--amber-wash/good-wash/bad-wash`, `--shadow-*`. The old `--ink` (= text colour) and `--paper` aliases are **dropped**, not aliased: the new `--ink` is the ground colour and nothing in the code uses the old ones (checked: only `--accent` is referenced, in `LanguageToggle.tsx`).
- Consumes: nothing.

- [ ] **Step 1: Write `lib/tokens-contrast.test.ts`.** It reads `app/globals.css`, extracts the `:root { … }` (dark) and `[data-theme="light"] { … }` blocks, and asserts WCAG contrast ≥ 4.5 for: `--t1`,`--t2`,`--t3` on each of `--ink`,`--s1`,`--s2`; `--der-t`,`--die-t`,`--das-t` on `--ink` and `--s1`; and `--cta-i` on `--cta` ≥ 7. Test names: `dark text tokens meet 4.5:1`, `light text tokens meet 4.5:1`, `gender text tokens meet 4.5:1 in both themes`, `cta text meets 7:1 in both themes`.
- [ ] **Step 2:** Write `components/ui/ThemeToggle.test.tsx`: `defaults to dark when no theme is stored` (button label "Switch to light theme"); `keeps a stored light theme` (set `document.documentElement` `data-theme="light"` before render → label "Switch to dark theme"). Run both tests: contrast test and the first toggle test FAIL.
- [ ] **Step 3:** Rewrite the token blocks of `app/globals.css`: `:root` = dark values, `[data-theme="light"]` = Papier values (all from Global Constraints), `color-scheme` per theme; add the legacy alias vars on both; update `@theme inline` per Interfaces; replace the Poppins `@font-face` set with `@font-face` for the four Jost/Inter files above (variable `font-weight: 300 700`, `font-display: swap`, `unicode-range` for latin / latin-ext). Get the woff2 files by `npm i -D @fontsource-variable/jost @fontsource-variable/inter`, copying `files/jost-latin-wght-normal.woff2` etc. from `node_modules/@fontsource-variable/*/files/`, then `npm rm` both packages. Headings stay `font-family: var(--font-display)`; body `var(--font-sans)`. Raise `.label` to 12px and add `.eyebrow` (Inter 600 12px caps +0.14em).
- [ ] **Step 4:** `app/layout.tsx`: set `themeColor` to `#09090B` (dark) / `#F1EDE4` (light) in `viewport`; keep the pre-paint script but make it only set `data-theme="light"` when stored value is `'light'` (dark is the CSS default). `ThemeToggle`: initial state `'dark'`, sync from the attribute in `useEffect`, same storage key `deutsch-a1-theme`.
- [ ] **Step 5:** Run `npx vitest run lib/tokens-contrast.test.ts components/ui/ThemeToggle.test.tsx` → PASS; then `npm run typecheck && npm test` → all green.
- [ ] **Step 6:** Start dev server and eyeball `/`, `/games`, `/dictionary` in dark and light: no unreadable text, no broken layout (the app should look "ink and paper" with white CTAs).
- [ ] **Step 7:** Commit: `git add app/globals.css app/layout.tsx components/ui/ThemeToggle.tsx components/ui/ThemeToggle.test.tsx lib/tokens-contrast.test.ts public/fonts package.json package-lock.json && git commit -m "feat(design): dreiklang tokens, Jost/Inter, dark default"`.

### Task 2: Gender model and shapes

**Files:**
- Create: `lib/gender.ts`, `components/ui/GenderShape.tsx`
- Modify: `components/ui/GenderTag.tsx`
- Test: `lib/gender.test.ts`, `components/ui/GenderShape.test.tsx`, extend `components/ui/GenderTag.test.tsx`

**Interfaces:**
- Produces:
  - `type GenderShapeKind = 'square' | 'circle' | 'triangle'`
  - `genderMeta(g: Gender): { gender: 'der'|'die'|'das'; shape: GenderShapeKind; fill: string; text: string } | null` (`fill` = `var(--der)`…, `text` = `var(--der-t)`…)
  - `splitArticle(german: string, gender: Gender): { article: 'der'|'die'|'das'|null; noun: string }` — strips a leading `der|die|das ` only when `gender` is non-null and equals that article; otherwise `{article:null, noun:german}`.
  - `<GenderShape gender={Gender} size={number} className? />` renders an `aria-hidden` square/circle/triangle (CSS `clip-path` triangle) filled with `fill`; renders `null` for `null` gender.

- [ ] **Step 1:** Write `lib/gender.test.ts`: `genderMeta('der') → square/var(--der)/var(--der-t)`, `'die' → circle`, `'das' → triangle`, `null → null`; `splitArticle('die Uhr','die') → {article:'die', noun:'Uhr'}`; `splitArticle('Guten Tag', null) → {article:null, noun:'Guten Tag'}`; `splitArticle('aufstehen', null)` unchanged; `splitArticle('die Eltern','die')` → noun `Eltern`; `splitArticle('der Tag','die')` (mismatch) → article null, noun unchanged.
- [ ] **Step 2:** `GenderShape.test.tsx`: renders nothing for null; for `das` the element has `data-shape="triangle"` and is `aria-hidden="true"`. `GenderTag.test.tsx` additions: tag for `die` contains the word `die` and an element with `data-shape="circle"`.
- [ ] **Step 3:** Run the three tests → FAIL. Implement `lib/gender.ts`, `GenderShape.tsx`, and update `GenderTag` to render `GenderShape` (size 10) + the article in `--*-t`, on a `color-mix(in srgb, var(--der) 14%, transparent)` pill. Run → PASS; `npm test` green.
- [ ] **Step 4:** Commit: `git add lib/gender.ts lib/gender.test.ts components/ui/GenderShape.tsx components/ui/GenderShape.test.tsx components/ui/GenderTag.tsx components/ui/GenderTag.test.tsx && git commit -m "feat(design): gender model and shapes"`.

### Task 3: UI primitives

**Files:**
- Modify: `components/ui/Button.tsx`, `components/ui/Card.tsx`, `components/ui/ProgressBar.tsx`
- Create: `components/ui/ProgressTicks.tsx`, `components/ui/Ring.tsx`
- Test: `components/ui/ProgressTicks.test.tsx`, `components/ui/Ring.test.tsx`, `components/ui/Button.test.tsx`

**Interfaces:**
- Produces:
  - `Button` variants `'primary' | 'secondary' | 'ghost' | 'ember'` (+ legacy `'danger'` mapped to `ember`); `primary` = `bg-cta text-cta-ink`, `secondary` = transparent + `border-border-strong`; sizes `sm|md|lg` with `lg` = 56px high; min height 44px for every size. Existing props unchanged.
  - `<ProgressTicks total={number} done={number} current?={boolean} label?={string} />` — flex row of `total` ticks (8px high, 2px radius, `done` filled `bg-text`, the next one half-opacity when `current`); `role="img"` with `aria-label` (default `${done} / ${total}`).
  - `<Ring value={number /*0..1*/} size={number} stroke?={number} children? />` — conic-gradient circle, `role="img"`, `aria-label` = rounded percentage; clamps value to 0..1.
  - `Card` radius 24px, background `bg-card`, no shadow.

- [ ] **Step 1:** Tests — `ProgressTicks`: `renders total ticks`, `marks exactly done ticks as filled` (count elements with `data-on="true"`), `clamps done above total`, `default aria-label is "3 / 10"`. `Ring`: `clamps value to 1` (aria-label `100%`), `clamps negative to 0`, `value 0.6 → "60%"`. `Button`: `primary uses cta classes`, `disabled has pointer-events-none`, `danger variant renders ember classes`.
- [ ] **Step 2:** Run → FAIL. Implement. Run → PASS; `npm test` green.
- [ ] **Step 3:** Commit: `git add components/ui && git commit -m "feat(design): button, card, ticks, ring primitives"`.

### Task 4: Generated lesson art

**Files:**
- Create: `lib/lesson-art.ts`, `components/ui/LessonArt.tsx`
- Modify: `components/home/LessonCard.tsx`, `components/home/ContinueCard.tsx` (and any other importer of `lib/lesson-visuals` — find with `grep -rn "lesson-visuals" components app lib`)
- Test: `lib/lesson-art.test.ts`, `components/ui/LessonArt.test.tsx`

**Interfaces:**
- Produces:
  - `type ArtShape = { kind: GenderShapeKind; gender: 'der'|'die'|'das'; x: number; y: number; size: number }` (all in a 0–100 box; `x,y` = top-left, `x+size ≤ 100`, `y+size ≤ 100`)
  - `lessonArt(lesson: Pick<Lesson,'id'|'level'|'number'>): ArtShape[]` — deterministic from `lesson.id` (use `fnv1a` from `lib/audio`'s re-export or a local hash), 3 shapes, one of each kind, overlapping composition like the prototype hero.
  - `<LessonArt lesson={…} className? />` — `aria-hidden` absolutely-sized SVG/div composition using `fill` colours from `genderMeta`.

- [ ] **Step 1:** `lib/lesson-art.test.ts`: `is deterministic for the same lesson`; `returns exactly one square, one circle, one triangle`; `all shapes fit inside the 0–100 box`; `different lessons produce different compositions` (compare `l1` vs `l2`, `a2-lektion-1`); `works for all lessons in content` (map over `lessons` from `@/content`, no throw).
- [ ] **Step 2:** `LessonArt.test.tsx`: renders three `data-shape` elements and `aria-hidden="true"`.
- [ ] **Step 3:** Run → FAIL. Implement; replace the emoji glyph + gradient band in `LessonCard` and `ContinueCard` with `<LessonArt>` on a `bg-surface-2` tile (these two components are rewritten later; this keeps them working now). Run → PASS.
- [ ] **Step 4:** Do not delete `lib/lesson-visuals.ts` yet if anything else imports it; the grep from Files must reach zero importers before Task 18 deletes it.
- [ ] **Step 5:** `npm run typecheck && npm test` green. Commit: `git add lib/lesson-art.ts lib/lesson-art.test.ts components/ui/LessonArt.tsx components/ui/LessonArt.test.tsx components/home && git commit -m "feat(design): generated lesson art replaces emoji"`.

---

## Phase 2 — Shell

### Task 5: Navigation model, rail, tab bar, chrome

**Files:**
- Create: `lib/nav.ts`, `components/shell/AppRail.tsx`, `components/shell/MobileTabBar.tsx`
- Modify: `components/shell/AppChrome.tsx`, `lib/ui-strings.ts`
- Test: `lib/nav.test.ts`, `components/shell/AppChrome.test.tsx`, `lib/ui-strings.test.ts`

**Interfaces:**
- Produces:
  - `type NavItem = { id: 'today'|'path'|'practice'|'library'|'me'; href: string; de: string; labelKey: UIKey; icon: LucideIcon; match: string[] }`
  - `NAV_ITEMS: NavItem[]` in order: today `/` (`Heute`), path `/path` (`Weg`), practice `/practice` (`Üben`, match also `/games /speak /write /specials`), library `/library` (`Bibliothek`, match also `/dictionary /textbook /exams`), me `/me` (`Du`, match also `/statistics /account /settings`).
  - `activeNavId(pathname: string): NavItem['id'] | null` — `/` matches only exactly; others by prefix; lesson player routes return `null`.
  - `isImmersive(pathname: string): boolean` — true for `/lesson/<id>/learn` and `/specials/<slug>/learn`.
  - UI keys `navToday navPath navPractice(existing key reused) navLibrary navMe` with en/fr glosses (`Today/Aujourd’hui`, `Path/Parcours`, `Practice/Pratique`, `Library/Bibliothèque`, `You/Toi`).

- [ ] **Step 1:** `lib/nav.test.ts`: `/` → today; `/path` → path; `/games/sprint` → practice; `/dictionary/haus` → library; `/statistics` → me; `/lesson/l1/learn` → null and `isImmersive` true; `/lesson/l1/review` → not immersive and active null; `/` does not match for `/path`. `lib/ui-strings.test.ts`: `every UI key has non-empty en and fr` (iterate `UI`), and the five nav keys exist.
- [ ] **Step 2:** `AppChrome.test.tsx` (mock `next/navigation` `usePathname`): renders rail + tab bar on `/` (rail has `nav` with 5 links, tab bar has 5 links); renders neither on `/lesson/l1/learn`; the link for the current route has `aria-current="page"`.
- [ ] **Step 3:** Run → FAIL. Implement `lib/nav.ts`, `AppRail` (264px, `hidden md:flex`, brand mark = three shapes + "Deutsch", ⌘K field button that dispatches `window.dispatchEvent(new Event('open-palette'))` — Task 7 listens, streak card, profile row via `useUser`), `MobileTabBar` (84px, `md:hidden`, fixed bottom, safe-area padding, labels ≥12px), and `AppChrome` composing `OfflineBar`, rail, `<main>` with bottom padding for the tab bar. Delete nothing yet. Match the prototype boards `Today.dc.html` (rail) and `Today-Mobile.dc.html` (tab bar).
- [ ] **Step 3b:** Move `LanguageToggle` and `ThemeToggle` out of chrome (they are used again in Task 16); `TopNav` stops being rendered but stays on disk until Task 18.
- [ ] **Step 4:** Run → PASS; `npm run typecheck && npm test` green. Verify at 1440 and 390 widths in the browser; switch to FR and confirm labels do not overflow.
- [ ] **Step 5:** Commit: `git add lib/nav.ts lib/nav.test.ts lib/ui-strings.ts lib/ui-strings.test.ts components/shell && git commit -m "feat(shell): rail, tab bar, nav model"`.

### Task 6: Routes, redirects, service worker

**Files:**
- Create: `app/path/page.tsx` (placeholder `<div/>` until Task 10), `app/library/page.tsx` (placeholder until Task 15), `app/me/page.tsx` (placeholder until Task 16), `app/practice/review/page.tsx`, `app/welcome/page.tsx` (placeholder until Task 9)
- Modify: `app/practice/page.tsx` (now renders `GamesHub`), `next.config.ts`, `public/sw.js`
- Test: `next.config.test.ts`

**Interfaces:**
- Produces: `/practice` = hub (`GamesHub` for now), `/practice/review` = `ReviewSession`; `nextConfig.redirects()` returns `[{ source: '/games', destination: '/practice', permanent: false }]`; links to the review queue across the app point at `/practice/review` (grep `href="/practice"` and `'/practice'` in `components lib app` and update each).

- [ ] **Step 1:** `next.config.test.ts`: `redirects /games to /practice`; `does not redirect /statistics /account /settings /textbook /dictionary /exams` (assert none of those are a `source`).
- [ ] **Step 2:** Run → FAIL. Implement per Interfaces. `/games/sprint` and `/games/audio` stay as deep routes (no redirect).
- [ ] **Step 3:** `public/sw.js`: `VERSION = 'v2'`; `PRECACHE_PAGES` = `[OFFLINE_URL, '/', '/path', '/practice', '/library', '/me', '/dictionary', '/textbook']`.
- [ ] **Step 4:** `npm test` (the existing `app/manifest.test.ts` must stay green). Manually visit every route in Task 5's table plus `/games`, `/practice/review`.
- [ ] **Step 5:** Commit: `git add app next.config.ts next.config.test.ts public/sw.js components lib && git commit -m "feat(routes): new top-level routes, redirects, sw v2"`.

### Task 7: Command palette

**Files:**
- Create: `lib/palette-index.ts`, `components/shell/CommandPalette.tsx`
- Modify: `components/shell/AppChrome.tsx` (mount the palette)
- Test: `lib/palette-index.test.ts`, `components/shell/CommandPalette.test.tsx`

**Interfaces:**
- Produces:
  - `type PaletteItem = { id: string; group: 'lesson'|'practice'|'page'; title: string; subtitle?: string; href: string }`
  - `buildPaletteIndex(lessons: Lesson[], locale: Locale): PaletteItem[]` — one item per lesson (`title.de`, subtitle `"Lektion N · <en/fr title>"`), plus fixed items for the five nav pages and practice tools (Word Sprint `/games/sprint`, Audio-Call `/games/audio`, Review `/practice/review`, Speak `/speak`, Write `/write`).
  - `searchPalette(query: string, index: PaletteItem[], limit = 6): PaletteItem[]` — case/diacritic-insensitive (use `fold` from `lib/dict-shared.mjs`); ranking: title prefix > title word-prefix > substring of title/subtitle; empty query returns `[]`.
  - `<CommandPalette />` — opens on `⌘K`/`Ctrl+K`, on `/` when focus is not in an input/textarea/contenteditable, and on the `open-palette` window event; closes on `Esc` and backdrop click; ↑/↓ moves selection, Enter navigates via `router.push`. Dictionary results come from `searchDictionary(query)` (debounced 150 ms, min `MIN_QUERY_LETTERS`), shown in a "Wörterbuch" group above lessons; the right pane previews the selected dictionary entry (article + noun in Jost, translation, and the existing `NounPanel` declension table for nouns — read `components/dictionary/NounPanel.tsx` for its props). Layout as the prototype board `Library.dc.html`. Dialog has `role="dialog"`, `aria-label`, focus trap, restores focus on close.

- [ ] **Step 1:** `palette-index.test.ts`: `finds a lesson by German title prefix` ("gegen" → lesson "Gegenstände und Plural" first); `is diacritic-insensitive` ("gegenstande"); `empty query returns []`; `prefix outranks substring`; `respects limit`.
- [ ] **Step 2:** `CommandPalette.test.tsx` (mock `next/navigation` and `@/lib/dictionary`): `opens on Ctrl+K`; `opens on / but not while typing in an input`; `Esc closes`; `Enter on a selected lesson navigates to its href`; `arrow keys move the selection`.
- [ ] **Step 3:** Run → FAIL. Implement. Run → PASS; `npm run typecheck && npm test` green.
- [ ] **Step 4:** Commit: `git add lib/palette-index.ts lib/palette-index.test.ts components/shell && git commit -m "feat(shell): command palette"`.

---

## Phase 3 — Heute and Weg

### Task 8: Path model

**Files:**
- Create: `lib/path-model.ts`, `lib/visitor.ts`
- Modify: `content/types.ts` (optional `canDo`), `content/types.test.ts`
- Test: `lib/path-model.test.ts`, `lib/visitor.test.ts`

**Interfaces:**
- Produces:
  - `LessonSchema` gains `canDo: z.object({ de: z.string(), en: z.string(), fr: z.string().optional() }).optional()`.
  - `canDoFor(lesson: Lesson): { de: string; en: string; fr?: string } | null` — `lesson.canDo` if set, else the first `grammar` step's `note.title` as `{de, en, fr}` (both from `title`, `fr` from `titleFr`), else `null`.
  - `type Chapter = { key: string; level: Level; module: number; name: { de: string; en: string; fr: string }; lessons: Lesson[] }`
  - `chaptersForLevel(all: Lesson[], level: Level): Chapter[]` — groups by `lessonModule(lesson)` (`lesson.module ?? ceil(number/3)`, move this helper here from `lesson-visuals`), sorted by module then number; names from a `CHAPTER_NAMES` table for A1 modules 1–7 (Kennenlernen, Alltag & Dinge, Freizeit & Essen, Zuhause, Unterwegs, Jahreslauf, Mehr zu üben), other levels `Kapitel N`.
  - `nextLesson(state: ProgressState, all: Lesson[]): Lesson | undefined` — first lesson (ordered level then number) with `lessonCompletion < 1`.
  - `stepProgress(state: ProgressState, lesson: Lesson): { done: number; total: number; minutesLeft: number }` — `done` = steps recorded in `state.lessons[id]?.steps`, `minutesLeft = Math.max(1, Math.ceil((total-done) * 0.5))` (0 when `done===total`).
  - `levelStats(state, all, level): { done: number; total: number; fraction: number }` (fraction 0 when total 0).
  - `wordOfDay(vocab: VocabItem[], dayKey: string): VocabItem | null` — deterministic pick (hash of `dayKey`) among vocab with a non-null gender; `null` for an empty list.
  - `isFreshVisitor(state: ProgressState, signedIn: boolean): boolean` — true only when not signed in, `state.xp === 0` and no lesson has any completed step.

- [ ] **Step 1:** Tests: `chaptersForLevel` groups L1–L3 into module 1, orders lessons, handles a level with no lessons (`[]`); `nextLesson` returns `l1` for empty progress, skips completed lessons, returns `undefined` when all complete; `stepProgress` for 0/total/partial/complete (`minutesLeft` 0 when complete); `levelStats` with zero lessons → fraction 0; `wordOfDay` is stable for the same day, differs across days (sample 10 days → ≥2 distinct), returns `null` for `[]`, never returns a null-gender word; `canDoFor` uses `canDo` when present, falls back to first grammar title, `null` when neither; `isFreshVisitor` true/false matrix. Add to `content/types.test.ts`: `a lesson with canDo parses`.
- [ ] **Step 2:** Run → FAIL. Implement. Run → PASS; `npm run typecheck && npm test` green.
- [ ] **Step 3:** Commit: `git add lib/path-model.ts lib/path-model.test.ts lib/visitor.ts lib/visitor.test.ts content/types.ts content/types.test.ts && git commit -m "feat(path): path model, can-do, visitor state"`.

### Task 9: Heute, Welcome, onboarding

**Files:**
- Create: `components/home/TodayView.tsx`, `components/home/NextUpCard.tsx`, `components/home/GoalCard.tsx`, `components/home/DueCard.tsx`, `components/home/WordOfDayCard.tsx`, `components/home/ActivityGrid.tsx`, `components/home/QuickPractice.tsx`, `components/home/Welcome.tsx`
- Modify: `app/page.tsx`, `app/welcome/page.tsx`, `components/home/OnboardingGate.tsx`, `components/home/Hero.tsx` (moved into `Welcome`), `lib/ui-strings.ts`
- Test: `components/home/TodayView.test.tsx`, `components/home/NextUpCard.test.tsx`, `components/home/GoalCard.test.tsx`

**Interfaces:**
- Consumes: `nextLesson`, `stepProgress`, `wordOfDay`, `isFreshVisitor` (Task 8); `LessonArt`, `ProgressTicks`, `Ring`, `GenderShape`; `useProgress`, `useSettings`, `useUser`; `dueVocabIds`, `currentStreak`, `dateKey`.
- Produces: `app/page.tsx` renders `<OnboardingGate/>` + (`isFreshVisitor` ? `<Welcome/>` : `<TodayView/>`) + `InstallBanner`; `/welcome` always renders `<Welcome/>`.

- [ ] **Step 1:** Tests. `NextUpCard`: `shows lesson title, step X of Y and minutes left`; `CTA links to /lesson/<id>/learn`; `all complete → shows "Alles geschafft" and a link to /path`. `GoalCard`: `0 XP of 30 renders 0% without NaN`; `custom dailyGoal 100 and 18 XP → 18%`; `goal reached → 100% and success copy`. `TodayView`: `renders greeting with day part (Guten Morgen/Tag/Abend)` using fake timers; `shows due count from dueVocabIds`; `renders the five sections` (next-up, goal, due, word of day, activity). `Welcome` renders the pitch headline and a link to `/lesson/l1/learn`.
- [ ] **Step 2:** Run → FAIL. Implement as the prototype boards `Today.dc.html` (desktop: hero + goal ring on row 1, three cards on row 2, four quick tiles on row 3) and `Today-Mobile.dc.html` (390×844: greeting, hero with full-width CTA, two small cards, word of the day, all above the fold). Week row Mo–So from `state.activity`; activity grid = last 10 weeks × 7 days with four intensity levels from XP per day (reuse logic of `ActivityCalendar`). Hero art = `LessonArt` of the next lesson. Quick practice tiles link to `/games/sprint`, `/games/audio`, `/speak`, `/write`.
- [ ] **Step 3:** `OnboardingGate`: restyle as a centred sheet with the four `DAILY_GOAL_OPTIONS` as tiles; each shows the XP number plus a plain gloss ("≈ 5 min", "≈ 10 min", "≈ 20 min", "≈ 40 min" — en/fr) instead of the abstract "XP / day" only.
- [ ] **Step 4:** Run → PASS; `npm run typecheck && npm test`. Browser check at 1440 and 390 in dark and light, EN and FR, with empty progress (shows Welcome) and with progress seeded via the dev console (`localStorage` progress key from `lib/progress.ts`).
- [ ] **Step 5:** Commit: `git add components/home app/page.tsx app/welcome lib/ui-strings.ts && git commit -m "feat(home): Heute, Welcome, goal onboarding"`.

### Task 10: Weg

**Files:**
- Create: `components/path/PathView.tsx`, `components/path/Staircase.tsx`, `components/path/ChapterList.tsx`, `components/path/LessonDetail.tsx`
- Modify: `app/path/page.tsx`, `lib/ui-strings.ts`
- Test: `components/path/Staircase.test.tsx`, `components/path/ChapterList.test.tsx`, `components/path/LessonDetail.test.tsx`

**Interfaces:**
- Consumes: `chaptersForLevel`, `levelStats`, `nextLesson`, `stepProgress`, `canDoFor`, `lessonCompletion`, `LessonArt`, `GenderShape`, `splitArticle`.
- Produces: `<PathView />` (client): staircase for the four levels (A1–B2; levels with no lessons render dashed "coming soon"), chapter list for the selected level (default: level of `nextLesson`), selected lesson state (default `nextLesson`), detail panel (`lg:sticky`). On screens below `lg` the detail panel is replaced by a fixed bottom CTA bar for the selected lesson ("Weiter · Lektion N").

- [ ] **Step 1:** Tests. `Staircase`: `renders four levels in order with heights increasing`; `A1 shows done/total`; `level with no lessons is marked coming soon`. `ChapterList`: `current chapter is expanded, others collapsed`; `completed chapter shows done count n / n`; `clicking a lesson calls onSelect with its id`; `each lesson row shows its status: done, current (with step X/Y), or untouched`. `LessonDetail`: `shows can-do from canDoFor`; `falls back gracefully when canDoFor is null (section omitted)`; `lists new words with gender shapes`, `CTA links to /lesson/<id>/learn`.
- [ ] **Step 2:** Run → FAIL. Implement as prototype board `Path.dc.html`. All lessons stay open (no locks). Replace `components/home/LearningPath.tsx` usage (it is no longer rendered; deletion in Task 18).
- [ ] **Step 3:** Run → PASS; `npm run typecheck && npm test`; browser check at 1440/390, dark/light, EN/FR.
- [ ] **Step 4:** Commit: `git add components/path app/path lib/ui-strings.ts && git commit -m "feat(path): Weg screen"`.

---

## Phase 4 — Lesson player

### Task 11: Player shell

**Files:**
- Create: `components/learn/LessonTopBar.tsx`, `components/learn/segments.ts`, `lib/lesson-prefs.ts`
- Modify: `components/learn/StepPlayer.tsx`, `components/learn/LessonStepNav.tsx` (rendered inside a drawer on all sizes), `components/ui/SpeedToggle.tsx` (compact `1×` circle style)
- Test: `components/learn/segments.test.ts`, `components/learn/StepPlayer.shortcuts.test.tsx`, extend `components/learn/StepPlayer.test.tsx`

**Interfaces:**
- Produces:
  - `segmentsFor(lesson: Lesson, stepIndex: number): { key: string; label: string; labelFr: string; fraction: number }[]` — from `buildSections(lesson)`; `fraction` = 1 before the current section, `(stepIndex - start + 1)/(end - start + 1)` in it, 0 after.
  - `useShowTranslation(): [boolean, (v: boolean) => void]` in `lib/lesson-prefs.ts` — persisted in `localStorage` key `deutsch-a1-show-translation`, default `true`, safe when storage throws.
  - `StepPlayer` layout: `LessonTopBar` (close → `exitHref`, lesson title, segmented progress, translation toggle, speed, contents button) + centred step column (max 760px) + bottom bar (Zurück circle, keyboard hint, Weiter primary). No bordered panel, no sidebar; contents open in a drawer.
  - Keyboard: `ArrowRight` and `Space` = advance, `ArrowLeft` = back — **only** when the event target is not an `input`, `textarea`, `select`, `[contenteditable]`, and (for exercise steps) only when advancing is allowed (`answered`).

- [ ] **Step 1:** `segments.test.ts`: first step → first segment partial, others 0; mid lesson → earlier segments 1; last step → all 1. `StepPlayer.shortcuts.test.tsx`: `Space advances on a vocab step`; `Space inside a text input does not advance and does not call preventDefault` (render a fill-blank exercise step, type "der Tisch" including a space, assert the step is unchanged); `ArrowRight does not advance an unanswered exercise`; `ArrowLeft goes back`; `translation toggle persists to localStorage`.
- [ ] **Step 2:** Run → FAIL. Implement. Keep the existing step-gating logic (`answered`, `goTo`, `retaking`) untouched; only layout and input handling change.
- [ ] **Step 3:** Update `StepPlayer.test.tsx` selectors broken by the layout change deliberately (the assertions about gating stay).
- [ ] **Step 4:** `npm run typecheck && npm test`; browser check of a full lesson run-through at 1440/390 (`/lesson/l1/learn`).
- [ ] **Step 5:** Commit: `git add components/learn components/ui/SpeedToggle.tsx lib/lesson-prefs.ts && git commit -m "feat(learn): focus-mode lesson player shell"`.

### Task 12: Wortkarte

**Files:**
- Create: `lib/example-highlight.ts`
- Modify: `components/learn/VocabStep.tsx`, `components/learn/PronunciationStep.tsx`, `components/ui/SyllableStress.tsx`
- Test: `lib/example-highlight.test.ts`, update `components/learn/VocabStep.test.tsx`, `components/ui/SyllableStress.test.tsx`

**Interfaces:**
- Consumes: `splitArticle`, `genderMeta`, `GenderShape`, `useShowTranslation`.
- Produces: `highlightExample(text: string, vocab: VocabItem[]): { text: string; gender: 'der'|'die'|'das'|null }[]` — splits the sentence into segments; a token (punctuation stripped, exact match) that equals a vocab noun from `splitArticle(v.german, v.gender).noun` with non-null gender gets that gender; every other token (including punctuation and spaces) is a segment with `gender: null`; concatenating all `text` reproduces the input exactly.
- `VocabStep` Wortkarte as prototype `Lesson-Word.dc.html`/`Lesson-Word-Mobile.dc.html`: article (Jost 300, `--*-t`) above the noun (Jost 700, `clamp(96px, 18vw, 176px)`), stress-underlined syllables + plural (when known), big audio button, translation line (hidden when `useShowTranslation()` is false), example sentence card with highlighted nouns and its own audio button, three icon tools: Sprich (existing `SpeakButton` logic), Merken (existing `toggleHardWord`), Erklären (existing `AssistButtons` trigger). No-gender words render the word only (no article line, no shape).

- [ ] **Step 1:** `example-highlight.test.ts`: `"Die Lampe steht auf dem Tisch."` with vocab `die Lampe`, `der Tisch` → segments for `Lampe` (die) and `Tisch` (der), rest `null`; round-trips to the original string; ignores verbs (gender null); handles a sentence with no matches (one segment); does not match substrings (`Tischtennis` is not `Tisch`).
- [ ] **Step 2:** `VocabStep.test.tsx` (keep existing passing assertions where still valid; add): `renders article above the noun for der/die/das words`; `renders no article and no shape for "Guten Tag" (gender null)`; `renders plural-only "die Eltern" with article die and noun Eltern`; `translation line hidden when toggle is off`; `example highlights the target noun with its gender shape colour`.
- [ ] **Step 3:** Run → FAIL. Implement; `SyllableStress` underlines the uppercase (stressed) syllable in the gender colour when a gender is passed (new optional prop `gender?: Gender`; existing test stays green).
- [ ] **Step 4:** `npm run typecheck && npm test`; browser check on lesson 5 (nouns) and lesson 1 (phrases).
- [ ] **Step 5:** Commit: `git add lib/example-highlight.ts lib/example-highlight.test.ts components/learn components/ui && git commit -m "feat(learn): Wortkarte vocab step"`.

### Task 13: Exercises and feedback sheet

**Files:**
- Create: `components/exercises/FeedbackSheet.tsx`, `components/exercises/ArticleTiles.tsx`, `components/exercises/OptionTile.tsx`
- Modify: `components/exercises/ExerciseView.tsx`, `components/learn/StepPlayer.tsx` (pass `onContinue`), `lib/ui-strings.ts`
- Test: `components/exercises/FeedbackSheet.test.tsx`, `components/exercises/ArticleTiles.test.tsx`, update `ExerciseView.test.tsx`, `ArticlePicker.test.tsx`, `MultipleChoice.test.tsx`, `ExerciseMastery.test.tsx`

**Interfaces:**
- Produces:
  - `<FeedbackSheet kind="richtig" | "fast" answer={string}? hint={string}? primaryLabel={string} onPrimary={() => void} secondaryLabel?={string} onSecondary?={() => void} />` — bottom sheet (slide-up 300ms, `role="status"`), `richtig` uses `--ok` with a check icon and heading **Richtig!**, `fast` uses `--ember` and heading **Fast!**, shows the right answer line and the hint; never uses `--bad`.
  - `<ArticleTiles value={'der'|'die'|'das'|undefined} onChange disabled? correct?={...} />` — three tiles (min 120×150), each `GenderShape` + article in Jost; selected tile lifts 6px (`transform`) with a gender-colour border; keeps `aria-label` `der|die|das` (existing tests rely on them).
  - `ExerciseView` gains optional `onContinue?: () => void`. Behaviour of checking, reveal after `REVEAL_AFTER` misses, `onResult` and `onPass` is unchanged; after Prüfen the sheet shows: correct → `richtig` with "Weiter" (`onContinue`); wrong → `fast` with "Nochmal" (`tryAgain`) and, after `REVEAL_AFTER` misses, a "Lösung zeigen" secondary (`reveal`) that then offers "Weiter".
  - Other exercise types adopt the same tile (`OptionTile`) and field styling (as prototype `Exercise-Mobile.dc.html`).

- [ ] **Step 1:** Tests. `FeedbackSheet`: `richtig renders "Richtig!" and primary button`; `fast renders "Fast!", the answer and the hint`; `never renders elements with the bad colour class`; `primary calls onPrimary`. `ArticleTiles`: `clicking a tile calls onChange with der|die|das`; `disabled blocks clicks`; `each tile shows its shape (data-shape)`. `ExerciseView`: `correct answer shows Richtig! and Weiter calls onContinue`; `wrong answer shows Fast! and Nochmal resets the response`; `after two wrong answers Lösung zeigen reveals the answer and Weiter appears` (reuse existing scenario data).
- [ ] **Step 2:** Run → FAIL. Implement; update the four existing exercise tests only where markup changed (role/labels), not their behavioural assertions.
- [ ] **Step 3:** `npm run typecheck && npm test`; browser check of all six exercise types (find a lesson with each via `grep -ln "type: '<t>'" content/lessons`).
- [ ] **Step 4:** Commit: `git add components/exercises components/learn/StepPlayer.tsx lib/ui-strings.ts && git commit -m "feat(learn): exercise tiles and feedback sheet"`.

### Task 14: Completion screen

**Files:**
- Create: `components/ui/ShapeAssembly.tsx`
- Modify: `components/learn/LessonResults.tsx`
- Test: `components/ui/ShapeAssembly.test.tsx`, `components/learn/LessonResults.test.tsx`

**Interfaces:**
- Produces: `<ShapeAssembly size={number} />` — three shapes animate into place (framer-motion springs, staggered 150 ms) with `der/die/das` labels; renders the final composition statically under `prefers-reduced-motion`.
- `LessonResults` as prototype `Complete-Mobile.dc.html`: **Geschafft!** headline, lesson title, three stat tiles (XP earned, correct/total, new words), streak tower (blocks = min(streak, 7)), primary "Nächste Lektion" (next lesson via `nextLesson`), secondary "Zurück". Existing props and quiz-retake/review behaviour unchanged.

- [ ] **Step 1:** Tests: `ShapeAssembly` renders three `data-shape` elements; `LessonResults` shows "Geschafft!", the XP and accuracy values passed in via progress state, a "Nächste Lektion" link to the next incomplete lesson, and omits it when none remains.
- [ ] **Step 2:** Run → FAIL. Implement. Run → PASS; `npm run typecheck && npm test`.
- [ ] **Step 3:** Commit: `git add components/ui/ShapeAssembly.tsx components/ui/ShapeAssembly.test.tsx components/learn/LessonResults.tsx components/learn/LessonResults.test.tsx && git commit -m "feat(learn): completion screen"`.

---

## Phase 5 — Library, Practice, Du

### Task 15: Bibliothek and Papier exams

**Files:**
- Create: `components/library/LibraryView.tsx`, `app/exams/layout.tsx`
- Modify: `app/library/page.tsx`, `components/dictionary/DictionaryView.tsx`, `components/textbook/BookLibrary.tsx` (**user has uncommitted edits — read the diff first, restyle only with classes/tokens, do not revert or stage their logic changes; if a conflict is unavoidable, stop and ask**), `components/exams/ExamsHub.tsx`, `components/exams/LevelView.tsx`
- Test: `components/library/LibraryView.test.tsx`, `app/exams/layout.test.tsx`

**Interfaces:**
- Produces: `/library` with sections Wörterbuch (search entry that opens the palette via the `open-palette` event), Lehrbuch (links to `/textbook`), Prüfungen (Goethe/telc × A1–B2 links into `/exams/...`); `app/exams/layout.tsx` wraps children in `<div data-theme="light" className="bg-bg text-text min-h-[100dvh]">` so the exam area always renders in Papier.

- [ ] **Step 1:** Tests: `LibraryView renders three sections and links`; `pressing the search card dispatches open-palette`; exams layout renders its children inside an element with `data-theme="light"`.
- [ ] **Step 2:** Run → FAIL. Implement per prototype `Library.dc.html` (page behind the palette). Restyle dictionary, textbook library and exam hub/level pages to the new tokens (consistent cards: `bg-card`, 24px radius, Jost headings, no gradients).
- [ ] **Step 3:** `npm run typecheck && npm test`; browser check `/library`, `/dictionary`, `/textbook`, `/exams`, an exam runner page (Papier) at 1440/390.
- [ ] **Step 4:** Commit explicit paths only: `git add components/library app/library app/exams components/dictionary components/exams && git commit -m "feat(library): Bibliothek and Papier exams"` — plus `components/textbook/BookLibrary.tsx` **only** if you changed it and have separated your edits from the user's.

### Task 16: Üben hub and Du

**Files:**
- Create: `components/me/MeView.tsx`
- Modify: `components/games/GamesHub.tsx`, `app/me/page.tsx`, `components/settings/SettingsView.tsx`, `components/stats/StatisticsView.tsx`, `components/auth/AccountView.tsx`, `components/review/ReviewSession.tsx`, `components/speak/SpeakStudio.tsx`, `components/write/WriteEditor.tsx`, `components/specials/SpecialsHub.tsx`
- Test: `components/me/MeView.test.tsx`, `components/settings/SettingsView.test.tsx`, update `components/specials/SpecialsHub.test.tsx`

**Interfaces:**
- Produces: `/practice` hub as prototype quick-practice tiles scaled up (Word Sprint, Audio-Call, Review queue with due count, Speak, Write, Specials); `/me` with cards Statistik (`/statistics`), Konto (`/account`), Einstellungen (`/settings`) and the current streak/level; `SettingsView` gains **Language (EN/FR)** and **Theme (Dark/Papier)** controls (reusing `LanguageToggle` and `ThemeToggle` logic) — these no longer appear in global chrome.

- [ ] **Step 1:** Tests: `MeView links to statistics, account and settings`; `SettingsView renders language and theme controls and switching language updates the locale store`; `GamesHub shows the due-count on the review tile` (seed progress with due cards).
- [ ] **Step 2:** Run → FAIL. Implement; restyle the listed screens with tokens only (no layout rewrites): cards `bg-card`, 24px radius, Jost headings, eyebrows, no colour except gender/feedback semantics.
- [ ] **Step 3:** `npm run typecheck && npm test`; browser check each route at 1440/390.
- [ ] **Step 4:** Commit: `git add components/me app/me components/games components/settings components/stats components/auth components/review components/speak components/write components/specials && git commit -m "feat: Üben hub and Du"`.

---

## Phase 6 — Polish and cleanup

### Task 17: Motion and haptics

**Files:**
- Create: `lib/haptics.ts`
- Modify: `components/exercises/ArticleTiles.tsx`, `components/exercises/FeedbackSheet.tsx`, `components/exercises/ExerciseView.tsx`, `components/ui/ShapeAssembly.tsx`
- Test: `lib/haptics.test.ts`

**Interfaces:**
- Produces: `haptics.select()` → `navigator.vibrate(8)`; `haptics.success()` → `navigator.vibrate([10, 40, 10])`; both no-ops when `navigator.vibrate` is missing or `prefers-reduced-motion` matches. Tile select calls `select()`, a correct result calls `success()`. Correct tile "clicks shut" with a 240 ms spring (scale 0.96 → 1) and the sheet slides up 300 ms; wrong result settles with opacity only (no shake). Under reduced motion all springs become 0 ms fades.

- [ ] **Step 1:** `haptics.test.ts` (stub `navigator.vibrate`): `select vibrates 8ms`; `success vibrates the double pattern`; `no vibrate support → no throw`; `reduced motion → no vibrate`.
- [ ] **Step 2:** Run → FAIL. Implement and wire. Run → PASS; `npm run typecheck && npm test`.
- [ ] **Step 3:** Commit: `git add lib/haptics.ts lib/haptics.test.ts components && git commit -m "feat(design): haptics and motion polish"`.

### Task 18: Remove legacy, final verification

**Files:**
- Delete: `components/shell/TopNav.tsx`, `components/shell/SiteFooter.tsx`, `components/home/LearningPath.tsx`, `components/home/LessonCard.tsx`, `lib/lesson-visuals.ts`, `public/fonts/poppins-*.woff2`, `components/ui/Mascot.tsx` (only if no importers), `public/illustrations/*` that nothing references
- Modify: every file still using legacy utilities; `app/globals.css`

- [ ] **Step 1:** For each deletion candidate run `grep -rn "<name>" components app lib` and delete only when there are zero importers; if one remains, migrate it first.
- [ ] **Step 2:** Codemod legacy utility classes across `components` and `app`: `bg-primary`→`bg-cta`, `text-primary-ink`→`text-cta-ink`, `shadow-primary`→(remove), `hover:brightness-*` on those buttons→(remove), `text-primary`→`text-text`, `bg-[var(--primary-wash)]`→`bg-surface-2`, `font-rounded`→`font-display`, `text-faint`→`text-muted`, `bg-[var(--good-wash)]`/`text-[var(--good)]`→`--ok` equivalents, `bg-[var(--bad-wash)]`/`text-[var(--bad)]`→`--ember` equivalents. Review the diff by screen; semantic exceptions (eyebrows that should stay muted) are fixed by hand.
- [ ] **Step 3:** Remove the legacy alias vars and `@theme` entries (`primary`, `primary-2`, `primary-ink`, `font-rounded`, `*-wash`, `soft*`, `accent*`, `paper`, `ink` legacy) from `app/globals.css`; `grep -rn "primary\|font-rounded\|-wash\|--soft" app components lib` must return zero style uses.
- [ ] **Step 4:** Final verification: `npm run typecheck && npm test && npm run build` all green. Manual pass at 1440 and 390, dark and light, EN and FR, over: `/welcome`, `/`, `/path`, a full lesson (vocab → grammar → exercises → quiz → results), `/practice`, `/practice/review`, `/games/sprint`, `/speak`, `/write`, `/specials`, `/library`, ⌘K, `/dictionary/haus`, `/textbook`, an exam in Papier, `/me`, `/statistics`, `/account`, `/settings`, offline (`/offline`). Check keyboard focus rings, tab order, targets ≥44px, no text under 12px (`grep -rn "text-\[1[01]px\]\|text-\[[0-9]px\]" components app` → fix every hit).
- [ ] **Step 5:** Lighthouse (mobile) on `/` and `/path`: record performance and accessibility scores in `docs/design/dreiklang/BASELINE.md`; accessibility ≥ 95, no regression in LCP versus the baseline recorded in Task 0 (add the baseline numbers there if missing).
- [ ] **Step 6:** Commit: `git add -u && git add docs/design/dreiklang/BASELINE.md && git commit -m "chore(design): remove legacy UI, final verification"` — then check `git status` still shows only the user's three pre-existing edits as unstaged.

---

## Self-Review

- **Spec coverage:** §6.1 tokens → T1; §6.2 type → T1 (+T18 sweep); §6.3 nav/⌘K → T5, T7, T16 (controls moved); §6.4 routes → T6 (`/practice` clash resolved), T9 (`/welcome`), T15/T16; §6.5 Heute → T9, Weg → T10, player → T11–T12, exercises/feedback → T13, completion → T14, Bibliothek + ⌘K + Papier exams → T7, T15, phone layouts → T9/T11/T14; §6.6 motion/haptics → T14, T17 (sound deliberately not built: spec marks it optional and off by default); §7 phases 0–6 map to T0, T1–T4, T5–T7, T8–T10, T11–T14, T15–T16, T17–T18; §9 calls reflected in T6 (practice hub), T8 (canDo fallback, chapter names table), T1 (dark default, stored theme kept); §10 open items: T0 (hang check), T15 (real book names stay since only restyled).
- **Type consistency:** `GenderShapeKind`, `genderMeta`, `splitArticle` (T2) are used by T4, T10, T12; `lessonModule` moves to `lib/path-model.ts` in T8 and `lesson-visuals` is deleted in T18 only after importers are gone; `open-palette` event is dispatched in T5/T15 and handled in T7; `useShowTranslation` defined in T11, used in T12; `onContinue` defined in T13, passed from `StepPlayer` in the same task.
- **Review Focus coverage:** items 1–5 pinned by tests in T11, T2/T12, T1/T6, T8/T9, T5 respectively.
- **Proportion:** logic tasks carry tests and signatures; visual tasks point at named prototype boards instead of transcribing markup.

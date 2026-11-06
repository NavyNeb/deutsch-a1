# Kumpel Buddy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Kumpel, a small optional in-app buddy that explains the current page, answers curated questions, runs a five-stop tour and says hello once, plus a "?" help popover inside lessons and a Kumpel card in Settings.

**Architecture:** Pure data and logic first (state slice, page allow-list, help copy, tour stops, lesson help), each with tests, then UI that composes them. Kumpel's preferences live inside the existing synced `Settings` object (`settings.kumpel`). One `<Kumpel />` is mounted in `AppChrome`; it owns the resting button, help panel, tour, hello and hint, and is opened by a `open-kumpel` window event (mirroring `open-palette`). No new dependency.

**Tech Stack:** Next.js 16.2 (App Router), React 19, Tailwind 4 (`@theme inline` tokens), framer-motion (`useReducedMotion`), lucide-react, vitest + Testing Library (jsdom).

**Spec:** `docs/superpowers/specs/2026-11-06-kumpel-buddy-design.md`
**Design (look and feel source of truth):** https://claude.ai/artifact/YHzt6xT6BE8qtWubGKyruk — boards `Buddy-Language`, `Buddy-Live` (interactive), `Buddy-Welcome`, `Buddy-Lesson`, `Buddy-Mobile-Closed|Sheet|Tour`, `Buddy-Settings`; source in `docs/design/dreiklang/project/Buddy-*.dc.html`. "As the board" means match layout, spacing, type sizes and tokens.

## Global Constraints

- `AGENTS.md`: this Next.js has breaking changes — before touching anything routing- or metadata-related read the matching guide under `node_modules/next/dist/docs/`. This plan only needs `usePathname`/`useRouter` from `next/navigation` (already used in `AppChrome`).
- Work on branch `feat/kumpel`. Always `git add` explicit paths, never `git add -A` / `.`. Do not stage `docs/design/dreiklang/project/canvas.json` changes except in Task 1's commit of the design files.
- Every new UI string goes in `lib/ui-strings.ts` (chrome) or `lib/kumpel-copy.ts` (help prose), with both `en` and `fr`. German labels stay German and untranslated: Kumpel, Tour starten, Später, Ruhe, bitte, Zurück, Weiter, Fertig, Überspringen, Station n von m, Diese Seite, Heute, Weg, Üben, Bibliothek, Du.
- Tokens only (`--ink --s1 --s2 --s3 --line --line2 --t1 --t2 --t3 --cta --cta-i` via the existing Tailwind names `bg-card`, `bg-surface-2`, `text-text`, `text-text-2`, `text-muted`, `border-border`, `border-border-strong`, `bg-cta`, `text-cta-ink`). Kumpel has no gender colour. Mistakes/alerts never red.
- Type: Jost (`font-display`) for Kumpel's name, titles and German labels; Inter for explanations. Nothing under 12px. Touch targets ≥ 44px (the phone buddy is 52px, desktop 64px).
- `prefers-reduced-motion` or `settings.kumpel.motion === 'calm'` → no pulse ring, no travel, fades only.
- No emoji. Icons from lucide-react (stroke 1.8).
- Dialogs: `role="dialog"`, labelled, Esc closes, focus moves in on open and returns to the opener on close.
- z-order: resting button `z-30`; help panel, sheet, tour and hello `z-[45]`; the command palette (`z-50`) stays on top. The phone tab bar is `z-40`.
- Do not change: progress, SRS, audio, Supabase sync code, exercise logic, the textbook reader. Existing tests must keep passing; update one only deliberately and say why in the commit message.
- Kumpel is never mounted in immersive routes (`isImmersive`) and only on pages in the allow-list of Task 2.
- Commit trailer on every commit: `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.

## Review Focus

Spec-implied conditions no obvious task test would otherwise exercise; each has its pinning test in the named task.

1. **Corrupt or foreign `settings.kumpel`** (cloud sync returns wrong types, `null`, an array, extra keys): `resolveKumpel` falls back to defaults field by field and never throws. (Task 1)
2. **Server render / hydration:** `<Kumpel />` renders nothing on the server and on the first client render, then appears — no hydration mismatch, no flash of the buddy for a muted learner. (Task 4)
3. **Tour with a missing or hidden target** (the phone has no search button; the rail is `display:none` on phones; the learner starts the tour from `/library`): hidden or absent stops are skipped, the counter shows the remaining total, Esc always exits and returns focus, nothing throws. (Task 6)
4. **Hello exactly once:** never for a fresh/un-onboarded visitor, never on `/welcome`, never in immersive routes, snoozed learners see nothing until the next local day, muted learners never see it; `welcomed` is persisted before the next render so a reload or second tab does not repeat it. (Task 7)
5. **French is longer than English:** question chips, tour titles and buttons must not overflow; a test caps chip text at 28 characters in both locales and the board is checked visually in FR at 390px. (Tasks 2, 10)

---

### Task 1: Branch, design files, and the Kumpel state slice

**Files:**
- Create: `lib/kumpel-store.ts`, `lib/kumpel-store.test.ts`
- Modify: `lib/settings-store.ts` (add optional `kumpel?: Partial<KumpelState>` to `Settings`; no change to `DEFAULTS`)

**Interfaces:**
- Produces (all in `lib/kumpel-store.ts`):
  - `type KumpelState = { enabled: boolean; side: 'left' | 'right'; hints: boolean; motion: 'auto' | 'calm'; muted: boolean; welcomed: boolean; snoozeUntil: string | null; tourDone: boolean; seen: string[] }`
  - `const KUMPEL_DEFAULTS: KumpelState` = `{enabled:true, side:'right', hints:true, motion:'auto', muted:false, welcomed:false, snoozeUntil:null, tourDone:false, seen:[]}`
  - `resolveKumpel(raw: unknown): KumpelState` — field-by-field validation over the defaults.
  - `localDay(d: Date): string` (`YYYY-MM-DD`, local time) and `nextLocalDay(d: Date): string`.
  - `isVisible(s: KumpelState): boolean` (`enabled && !muted`).
  - `isHelloDue(s: KumpelState, today: string): boolean` (`isVisible && !welcomed && !(snoozeUntil && today < snoozeUntil)`).
  - `useKumpel(): { state: KumpelState; update(patch: Partial<KumpelState>): void; markSeen(id: string): void; resetHints(): void; snoozeHello(): void; muteForever(): void; finishHello(): void }`. `update` merges into `settings.kumpel` through `replaceSettings` so the account sync picks it up. `snoozeHello` sets `snoozeUntil = nextLocalDay(now)`. `muteForever` sets `muted: true, welcomed: true`. `finishHello` sets `welcomed: true, snoozeUntil: null`. `resetHints` sets `seen: []`.

- [ ] **Step 1: Create the branch and commit the design material**

Run `git switch -c feat/kumpel main`. Stage and commit only: the eight `docs/design/dreiklang/project/Buddy-*.dc.html` files, `docs/design/dreiklang/project/canvas.json`, `docs/superpowers/specs/2026-11-06-kumpel-buddy-design.md`, `docs/superpowers/plans/2026-11-06-kumpel-buddy.md`. Message: `docs(kumpel): design boards, spec and plan`.
Expected: `git status --short` afterwards shows nothing under `docs/`.

- [ ] **Step 2: Write the failing tests in `lib/kumpel-store.test.ts`**

Cases, each its own `it`:
`resolveKumpel(undefined)`, `(null)`, `([])`, `('x')` all equal `KUMPEL_DEFAULTS`;
`resolveKumpel({ enabled: 'yes', side: 'up', hints: 1, motion: 'x', muted: 'no', welcomed: 3, snoozeUntil: 5, tourDone: null, seen: 'a' })` equals the defaults (every wrong type falls back);
`resolveKumpel({ side: 'left', seen: ['today', 7, 'path'] })` keeps `side:'left'` and `seen` as `['today','path']`;
`resolveKumpel({ snoozeUntil: '2026-11-07' }).snoozeUntil` is `'2026-11-07'` and `'garbage'` becomes `null` (must match `/^\d{4}-\d{2}-\d{2}$/`);
`nextLocalDay(new Date(2026, 10, 30, 23, 30))` is `'2026-12-01'` and `localDay(new Date(2026, 0, 5))` is `'2026-01-05'`;
`isHelloDue({...KUMPEL_DEFAULTS}, '2026-11-06')` is true; false when `muted`, when `enabled:false`, when `welcomed`, when `snoozeUntil:'2026-11-07'` and today is `'2026-11-06'`, and true again when today is `'2026-11-07'`;
a `useKumpel` hook test (`renderHook`, `localStorage.clear()` in `beforeEach`): `snoozeHello()` then `result.current.state.snoozeUntil` is a valid day after today; `muteForever()` sets `muted` and `welcomed`; `markSeen('today')` twice leaves `seen` as `['today']`; `resetHints()` empties it; and after `update({ side: 'left' })`, `JSON.parse(localStorage.getItem('deutsch-a1-settings')!).kumpel.side === 'left'` (proves it rides the synced settings object).

- [ ] **Step 3: Run to verify failure**

Run: `npx vitest run lib/kumpel-store.test.ts`
Expected: FAIL — module `./kumpel-store` not found.

- [ ] **Step 4: Implement `lib/kumpel-store.ts` and the `Settings.kumpel` field**

Add `kumpel?: Partial<KumpelState>` to the `Settings` type in `lib/settings-store.ts` (type import from `./kumpel-store` is a cycle risk — declare the field as `kumpel?: Record<string, unknown>` instead, and let `resolveKumpel` validate). `useKumpel` reads `useSettings().settings.kumpel` through `resolveKumpel` (memoise on the raw object so the returned `state` is referentially stable between changes) and writes with `replaceSettings({ kumpel: { ...getSettingsState().kumpel, ...patch } })`.

- [ ] **Step 5: Run to verify pass, then the whole suite**

Run: `npx vitest run lib/kumpel-store.test.ts` — Expected: PASS. Then `npx vitest run` — Expected: all green (settings-store consumers unchanged).

- [ ] **Step 6: Commit**

`git add lib/kumpel-store.ts lib/kumpel-store.test.ts lib/settings-store.ts` · `feat(kumpel): preferences and hello state in the synced settings`

---

### Task 2: Page allow-list and help copy

**Files:**
- Create: `lib/kumpel-pages.ts`, `lib/kumpel-pages.test.ts`, `lib/kumpel-copy.ts`, `lib/kumpel-copy.test.ts`

**Interfaces:**
- Produces:
  - `type PageGroupId = 'today' | 'path' | 'practice' | 'library' | 'me'`; `PAGE_GROUPS: PageGroupId[]` in the order above.
  - `pageGroupFor(pathname: string): PageGroupId | null` — the allow-list:
    `today`: `/` · `path`: `/path` · `practice`: `/practice`, `/specials` · `library`: `/library`, `/dictionary`, `/dictionary/*`, `/textbook`, `/exams`, and exactly `/exams/<board>/<level>` (two segments) · `me`: `/me`, `/statistics`, `/account`, `/settings`. Everything else is `null` (lessons, `/specials/*/learn`, `/practice/review`, `/games/*`, `/speak`, `/write`, `/textbook/read/*`, deeper `/exams/*`, `/welcome`, `/offline`). Trailing slashes tolerated.
  - In `lib/kumpel-copy.ts`: `type L = { en: string; fr: string }`; `type PageHelp = { de: string; purpose: L; parts: { de: string; text: L }[]; questions: { q: L; a: L }[] }`; `PAGE_HELP: Record<PageGroupId, PageHelp>`; `pickL(l: L, locale: Locale): string`.

- [ ] **Step 1: Write the failing tests**

`kumpel-pages.test.ts`: a table test — `/`→today, `/path`→path, `/practice`→practice, `/specials`→practice, `/library`→library, `/dictionary`, `/dictionary/Haus`, `/textbook`, `/exams`, `/exams/goethe/a1`→library, `/me`, `/statistics`, `/account`, `/settings`→me; and `null` for `/lesson/l1/learn`, `/specials/x/learn`, `/practice/review`, `/games/sprint`, `/speak`, `/write`, `/textbook/read/abc`, `/exams/goethe/a1/set1/lesen`, `/exams/goethe/a1/part/lesen/1`, `/welcome`, `/offline`, `/nope`. Also `pageGroupFor('/path/')` is `'path'`.
`kumpel-copy.test.ts`: for every group — `parts.length` is 1..3, `questions.length` is 4..6, every `L` has non-empty trimmed `en` and `fr`, no help string (purpose, parts, answers) contains `!` (tone rule: the only exclamation mark is the hello), every question `q` is ≤ 28 characters in both locales (chip width, Review Focus 5), and **drift guard**: a `SOURCES` table maps each group to the component files that render that page (`today` → `components/home/TodayView.tsx` plus the card files it imports; `path` → `components/path/PathView.tsx`; `practice` → `components/games/GamesHub.tsx`; `library` → `components/library/LibraryView.tsx`; `me` → `components/me/MeView.tsx`); the test reads those files with `fs.readFileSync` and expects each `parts[i].de` to occur in at least one of them.

- [ ] **Step 2: Run to verify failure** — `npx vitest run lib/kumpel-pages.test.ts lib/kumpel-copy.test.ts` — Expected: FAIL, modules not found.

- [ ] **Step 3: Implement `kumpel-pages.ts`** (pure function over `pathname.replace(/\/+$/, '') || '/'`).

- [ ] **Step 4: Implement `kumpel-copy.ts`**

Write the help for the five groups in the tone of spec §6.9 (short, warm, plain, no `!`). Parts are the real German labels that exist on the page — open each view file, pick up to three labels that really appear (e.g. Heute: Weiter, Tagesziel, Wiederholen — confirm against `NextUpCard`, `GoalCard`, `DueCard`; if a label differs, use the real one; the drift test enforces it). Each group gets 4–6 questions covering: what XP is, what the streak is, how to save a word, how review works, how to open search (⌘K or `/`), how to change language/theme/goal, where the textbook is, what the exams section is — assigned to the group where the learner would ask. The copy file is data only. Drafted EN first, then FR; Sasha reviews before phase 2 ships (spec §11).

- [ ] **Step 5: Run to verify pass** — same command — Expected: PASS. Then `npx vitest run` — all green.

- [ ] **Step 6: Commit** — `git add lib/kumpel-pages.ts lib/kumpel-pages.test.ts lib/kumpel-copy.ts lib/kumpel-copy.test.ts` · `feat(kumpel): page allow-list and per-page help copy (EN/FR)`

---

### Task 3: Tour stops and lesson-step help

**Files:**
- Create: `lib/kumpel-tour.ts`, `lib/kumpel-tour.test.ts`, `lib/lesson-help.ts`, `lib/lesson-help.test.ts`, `lib/kumpel-events.ts`, `lib/kumpel-events.test.ts`

**Interfaces:**
- Consumes: `L` from `lib/kumpel-copy.ts`.
- Produces:
  - `type TourStopId = 'continue' | 'goal' | 'nav' | 'search' | 'kumpel'`; `type TourStop = { id: TourStopId; target: string /* the data-kumpel value */; de: string; title: L; body: L }`; `TOUR_STOPS: TourStop[]` in the order of spec §6.4 (target equals id). German titles: Weiter, Tagesziel, Navigation, Suche, Kumpel.
  - `availableStops(isPresent: (target: string) => boolean): TourStop[]` — keeps stops whose target is present and visible.
  - `stopLabel(index: number, total: number): string` → `Station ${index+1} von ${total}`; `lastStop(index, total): boolean`.
  - In `lib/lesson-help.ts`: `type StepKind = 'intro'|'chapter'|'quiz'|'wrapup'|'vocab'|'grammar'|'exercise'|'pronunciation'`; `type LessonHelp = { title: L; items: { key: 'play'|'speak'|'save'|'move'|'translate'|'contents'|'speed'|'answer'|'hint'; de: string; text: L; shortcut?: string[] }[] }`; `lessonHelpFor(kind: StepKind): LessonHelp`.
  - In `lib/kumpel-events.ts`: `type KumpelOpenDetail = { tab?: 'here' | 'ask'; tour?: boolean }`; `openKumpel(detail?: KumpelOpenDetail): void` (dispatches `new CustomEvent('open-kumpel', { detail })` on `window`); `KUMPEL_EVENT = 'open-kumpel'`.

- [ ] **Step 1: Write the failing tests**

Tour: `TOUR_STOPS.map(s => s.id)` equals `['continue','goal','nav','search','kumpel']`; `availableStops(() => true)` has 5; `availableStops(t => t !== 'search')` has 4 and no `search`; `availableStops(() => false)` is `[]`; `stopLabel(1, 4)` is `'Station 2 von 4'`; `lastStop(3, 4)` true, `lastStop(2, 4)` false. Every stop has non-empty en/fr title and body, and no `!` in bodies.
Lesson help: every `StepKind` returns a non-empty title and ≥1 item, all `L` non-empty in both locales; `lessonHelpFor('vocab')` contains items with keys `play`, `speak`, `save`, `move`, and the `move` item has `shortcut` including `'Space'`, `'←'`, `'→'` (matches the Lesson board); `lessonHelpFor('exercise')` contains `answer`.
Events: `openKumpel({ tour: true })` makes a `window.addEventListener('open-kumpel', spy)` listener receive `detail.tour === true`; `openKumpel()` has `detail` undefined.

- [ ] **Step 2: Run to verify failure** — `npx vitest run lib/kumpel-tour.test.ts lib/lesson-help.test.ts lib/kumpel-events.test.ts` — Expected: FAIL, modules not found.

- [ ] **Step 3: Implement the three modules.** Body copy follows spec §6.4 and the Live board's step cards. Lesson help copy follows the Lesson board ("Hear it", "Sprich", "Merken", "Weiter / Zurück", colour-is-grammar note is rendered by the component, not stored here).

- [ ] **Step 4: Run to verify pass**, then `npx vitest run` — all green.

- [ ] **Step 5: Commit** — `git add lib/kumpel-tour.ts lib/kumpel-tour.test.ts lib/lesson-help.ts lib/lesson-help.test.ts lib/kumpel-events.ts lib/kumpel-events.test.ts` · `feat(kumpel): tour stops, lesson-step help, open event`

---

### Task 4: The resting buddy, mounted in the shell

**Files:**
- Create: `components/kumpel/KumpelFace.tsx`, `components/kumpel/Kumpel.tsx`, `components/kumpel/Kumpel.test.tsx`
- Modify: `components/shell/AppChrome.tsx` (mount `<Kumpel />` after `<CommandPalette />`), `lib/ui-strings.ts`

**Interfaces:**
- Consumes: `pageGroupFor`, `useKumpel`, `isVisible`, `KUMPEL_EVENT`.
- Produces:
  - `KumpelFace({ mood, size, className }: { mood: 'rest'|'smile'|'think'|'point'|'wave'|'sleep'; size?: number; className?: string })` — inline SVG, 64×64 viewBox, a `--cta` circle with `--cta-i` features exactly as in the Language board; `aria-hidden` unless `role="img"` + `aria-label` is passed by the caller.
  - `Kumpel()` — owns UI state `{ panel: 'closed'|'here'|'ask'; tour: boolean }` and subscribes to `open-kumpel`. This task renders only the resting button; panel/tour/hello/hint are mounted by later tasks at the marked slots.
  - UI strings added (both locales): `kumpelOpen` ('Open Kumpel help' / 'Ouvrir l’aide de Kumpel'), `kumpelTapMe` ('Tap me for help' / 'Touche-moi pour de l’aide').

- [ ] **Step 1: Write the failing tests (`Kumpel.test.tsx`, mock `next/navigation` like `AppChrome.test.tsx`)**

- On `/`: a button named "Open Kumpel help" exists after mount; on `/path` too.
- On `/lesson/l1/learn`, `/textbook/read/x`, `/welcome`, `/practice/review`: no such button (render `<Kumpel />` directly, so the allow-list not `AppChrome` is what hides it).
- With `settings.kumpel = { enabled: false }` or `{ muted: true }` seeded in `localStorage['deutsch-a1-settings']` before render: no button.
- `side: 'left'` adds the class `md:left-6`; default has `md:right-6`; both always contain `right-4` for phones (phones ignore the setting).
- **Hydration (Review Focus 2):** `renderToString(<Kumpel />)` (from `react-dom/server`) with a seeded muted state returns an empty string, and so does the default state — the button only appears after effects run (`render` + `await screen.findByRole('button', …)`).
- With `motion: 'calm'` the pulse ring element (`data-testid="kumpel-ring"`) is absent; default shows it.
- Clicking the button dispatches nothing yet but sets `aria-expanded` true (panel slot opened); pressing it again or `Esc` closes — this is exercised fully in Task 5.
- `AppChrome.test.tsx` gets one added case: on `/` a button "Open Kumpel help" exists; on `/lesson/l1/learn` it does not (AppChrome returns early there).

- [ ] **Step 2: Run to verify failure** — `npx vitest run components/kumpel/Kumpel.test.tsx` — Expected: FAIL.

- [ ] **Step 3: Implement `KumpelFace` and `Kumpel`** as the Mobile-Closed/Live boards: fixed button, `z-30`, 52px on phones and 64px from `md`; phones `bottom-[calc(88px+env(safe-area-inset-bottom))] right-4`, desktop `md:bottom-6` plus `md:right-6` or `md:left-6`; focus ring from the global style; hover lifts 2px (not under reduced motion). The pulse ring is an absolutely positioned bordered circle animating `scale 1→1.55` and `opacity .55→0` over 2.4s, defined as a keyframe in `app/globals.css` with a `@media (prefers-reduced-motion: reduce)` override that removes it; also omitted when `motion === 'calm'`. Gate rendering on a `mounted` flag set in `useEffect` so the server and first client render are `null`. Add the two UI strings.

- [ ] **Step 4: Run to verify pass**; then `npx vitest run` and `npm run typecheck` — all green.

- [ ] **Step 5: Visual check** — start the dev server (a background one on port 3000 may already run: reuse it), open `/` at 1440×900 and at 390×844 in the built-in browser, compare with `Buddy-Mobile-Closed` and the resting corner of `Buddy-Live`: the buddy sits clear of the tab bar and the content.

- [ ] **Step 6: Commit** — `git add components/kumpel components/shell/AppChrome.tsx components/shell/AppChrome.test.tsx lib/ui-strings.ts app/globals.css` · `feat(kumpel): resting buddy in the app shell`

---

### Task 5: The help panel (desktop popover, phone sheet) and the palette command

**Files:**
- Create: `components/kumpel/HelpPanel.tsx`, `components/kumpel/HelpPanel.test.tsx`
- Modify: `components/kumpel/Kumpel.tsx`, `lib/ui-strings.ts`, `lib/palette-index.ts`, `lib/palette-index.test.ts`, `components/shell/CommandPalette.tsx`, `components/shell/CommandPalette.test.tsx`

**Interfaces:**
- Consumes: `PAGE_HELP`, `pickL`, `PageGroupId`, `useLocale`, `openKumpel`.
- Produces:
  - `HelpPanel({ group, tab, onTab, onClose, onStartTour }: { group: PageGroupId; tab: 'here'|'ask'; onTab(t): void; onClose(): void; onStartTour(): void })`.
  - Palette item `{ id: 'page:kumpel', group: 'page', title: 'Kumpel', subtitle: t('kumpelAsk', locale), href: '#kumpel' }` appended after the nav pages in `buildPaletteIndex`. In `CommandPalette.go`, a row whose `href === '#kumpel'` closes the palette, calls `openKumpel()` after the close focus restore, and is **not** added to recents.
  - UI strings (both locales): `kumpelHelpLabel` ('Kumpel help' / 'Aide de Kumpel'), `kumpelThisPage` ('This page' / 'Cette page'), `kumpelQuestions` ('Questions'), `kumpelPageEyebrow` ('Page' / 'Page'), `kumpelClose` ('Close' / 'Fermer'), `kumpelAsk` ('Ask for help' / 'Demander de l’aide').

- [ ] **Step 1: Write the failing tests**

`HelpPanel.test.tsx`: renders `role="dialog"` with accessible name "Kumpel help"; default tab shows `PAGE_HELP.today.purpose.en`, the three part labels (`Weiter`, `Tagesziel`, `Wiederholen` — whatever Task 2 fixed) and numbered 1–3; switching to "Questions" lists the group's questions and clicking one reveals its answer while a second click on another question closes the first (one open at a time, `aria-expanded` toggles); the footer shows at most three chips and a button "Tour starten" that calls `onStartTour`; `Esc` calls `onClose`; the close button (≥44px, `aria-label` "Close") calls `onClose`; focus moves into the dialog on mount and returns to the previously focused element on unmount; in French the French strings render.
`Kumpel.test.tsx` additions: clicking the buddy opens the panel for the current page group (title mentions the page's German name from `PAGE_HELP[group].de`) and `Esc` closes it and focus returns to the buddy; `openKumpel({ tab: 'ask' })` opens straight on Questions; the buddy button's `aria-expanded` follows the panel.
Palette: `buildPaletteIndex([], 'en')` contains `page:kumpel`; selecting it in `CommandPalette` (type "kum", Enter) dispatches `open-kumpel` and does not call `router.push` or write a recent.

- [ ] **Step 2: Run to verify failure** — `npx vitest run components/kumpel lib/palette-index.test.ts components/shell/CommandPalette.test.tsx` — Expected: FAIL (new cases only).

- [ ] **Step 3: Implement `HelpPanel`** as the Live board (desktop: 400×552 popover anchored above the buddy on its side, rounded-[28px], header with face + "Kumpel" + "Your buddy · on <page>" + close; segmented tabs; body scrolls; footer chips + primary button) and the Mobile-Sheet board (below `md`: bottom sheet, 610px max, grab handle, scrim `bg-black/55`, slide-up 300ms unless reduced motion; closing by scrim tap or ✕). Use `role="dialog"` with `aria-modal` only for the sheet. Trap Tab inside while open. Questions use the disclosure pattern (button + region). Wire into `Kumpel` (`panel` state and the slot from Task 4); `onStartTour` closes the panel and sets `tour` (consumed by Task 6).

- [ ] **Step 4: Implement the palette command** as specified above and update the existing palette-index test deliberately (item count) — say so in the commit message.

- [ ] **Step 5: Run to verify pass**, then `npx vitest run`, `npm run typecheck` — all green.

- [ ] **Step 6: Visual check** — compare `/` and `/library` at desktop and 390px (EN and FR) with `Buddy-Live` and `Buddy-Mobile-Sheet`; FR chips and part lines do not clip.

- [ ] **Step 7: Commit** — `git add components/kumpel lib/palette-index.ts lib/palette-index.test.ts components/shell/CommandPalette.tsx components/shell/CommandPalette.test.tsx lib/ui-strings.ts` · `feat(kumpel): help panel, sheet and palette command`

---

### Task 6: The tour

**Files:**
- Create: `components/kumpel/Tour.tsx`, `components/kumpel/Tour.test.tsx`, `lib/kumpel-targets.ts`, `lib/kumpel-targets.test.ts`
- Modify: `components/home/TodayView.tsx` (add `data-kumpel="continue"` to the `NextUpCard` wrapper div and `data-kumpel="goal"` to the `GoalCard` wrapper div), `components/shell/AppRail.tsx` (`data-kumpel="nav"` on the `<nav>`, `data-kumpel="search"` on the search button), `components/shell/MobileTabBar.tsx` (`data-kumpel="nav"` on the `<nav>`), `components/kumpel/Kumpel.tsx` (`data-kumpel="kumpel"` on the resting button; mount `Tour`), `lib/ui-strings.ts`

**Interfaces:**
- Consumes: `TOUR_STOPS`, `availableStops`, `stopLabel`, `lastStop`, `useKumpel`, `usePathname`, `useRouter`.
- Produces:
  - `findTarget(id: string): HTMLElement | null` in `lib/kumpel-targets.ts` — among `document.querySelectorAll('[data-kumpel="…"]')` returns the first element with a non-zero `getBoundingClientRect()` width and height (the rail and tab bar both exist; one is `display:none`), else `null`. `targetRect(el): { top, left, width, height }` with a 8px outset.
  - `Tour({ onClose }: { onClose(reason: 'done' | 'skip'): void })` — full-screen `z-[45]` overlay: a spotlight div positioned over the target rect with `box-shadow: 0 0 0 2000px rgba(0,0,0,.68), 0 0 0 2px var(--t1)` and radius 36px (as the Tour boards), a step card (`role="dialog"`, `aria-label` "Tour"), eyebrow "Station n von m", German title, EN/FR body, progress dots, buttons Zurück / Weiter (last stop: Fertig) / Überspringen. The card is bottom-fixed above the tab bar on phones (`bottom-[calc(96px+env(safe-area-inset-bottom))]`) and beside/below the target on desktop, clamped inside the viewport.
  - UI strings (both locales): `kumpelTourLabel` ('Tour'), `kumpelTourEnd` ('Tour finished. Kumpel is always bottom right.' / equivalent) for the polite live-region announcement at the end.

- [ ] **Step 1: Write the failing tests**

`kumpel-targets.test.ts`: with two elements `data-kumpel="nav"`, one whose rect is stubbed `{width:0,height:0}` and one `{width:200,height:300,top:10,left:20}`, `findTarget('nav')` returns the second; with only a zero-size element returns `null`; absent returns `null`; `targetRect` outsets by 8px.
`Tour.test.tsx` (stub `getBoundingClientRect` for the test targets; mock `next/navigation`): 
- with all five targets present: shows "Station 1 von 5", title "Weiter"; clicking Weiter advances to "Station 2 von 5" / "Tagesziel"; Zurück goes back; the dots mark the current one (`aria-current="step"`); on the last stop the primary button reads "Fertig" and calls `onClose('done')`.
- **Missing/hidden target (Review Focus 3):** with no `search` target present the counter reads "Station n von 4" throughout and never shows "Suche"; with no targets at all it calls `onClose('skip')` once on mount and renders nothing, without throwing.
- Keys: ArrowRight/Enter advance, ArrowLeft back, Escape calls `onClose('skip')`; "Überspringen" calls `onClose('skip')`.
- Started from `/library` (pathname mocked): `router.push('/')` is called once and the tour waits (renders nothing) until `continue` and `goal` targets appear, polling via `requestAnimationFrame` for at most 1500ms, after which it falls back to whatever is present.
- Focus: the card receives focus on open; on close focus returns to the element that was focused before.
- Resize: after `window.dispatchEvent(new Event('resize'))` the spotlight reads the target rect again (change the stub and assert the spotlight style changed).
- Reduced motion (`calm` seeded): no transition classes on the spotlight.
Drift guard (static, in `Tour.test.tsx` or `lib/kumpel-tour.test.ts`): for every `TOUR_STOPS[i].target` the string `data-kumpel="<target>"` appears in at least one file under `components/` (read with `fs`).

- [ ] **Step 2: Run to verify failure** — `npx vitest run lib/kumpel-targets.test.ts components/kumpel/Tour.test.tsx` — Expected: FAIL.

- [ ] **Step 3: Add the `data-kumpel` attributes** to the four existing components (wrapper-level only; no markup or class changes) and the buddy button.

- [ ] **Step 4: Implement `kumpel-targets.ts` and `Tour`.** The spotlight transitions position over 250ms (none under reduced motion). On tour end call `update({ tourDone: true, welcomed: true })`. `Kumpel` mounts `Tour` when its `tour` state is true; starting from the help panel or `openKumpel({ tour: true })`; if the current pathname is not `/`, `Tour` calls `router.push('/')` first (see test). Announce completion in a `role="status"` region.

- [ ] **Step 5: Run to verify pass**, then `npx vitest run`, `npm run typecheck`.

- [ ] **Step 6: Visual check** — run the tour on `/` at 1440×900 and 390×844 (EN and FR); compare with `Buddy-Live` and `Buddy-Mobile-Tour`. On the phone it must show four stops (no Suche).

- [ ] **Step 7: Commit** — `git add components/kumpel components/home/TodayView.tsx components/shell/AppRail.tsx components/shell/MobileTabBar.tsx lib/kumpel-targets.ts lib/kumpel-targets.test.ts lib/ui-strings.ts` · `feat(kumpel): five-stop spotlight tour`

---

### Task 7: First hello and page hints

**Files:**
- Create: `components/kumpel/Hello.tsx`, `components/kumpel/Hint.tsx`, `components/kumpel/Hello.test.tsx`, `components/kumpel/Hint.test.tsx`
- Modify: `components/kumpel/Kumpel.tsx`, `lib/ui-strings.ts`

**Interfaces:**
- Consumes: `useKumpel` (`finishHello`, `snoozeHello`, `muteForever`, `markSeen`), `isHelloDue`, `localDay`, `settings.onboarded`, `isFreshVisitor` (`lib/visitor`), `useProgress`, `useUser`.
- Produces:
  - `Hello({ onTour, onLater, onMute })` — the Welcome board card: "Hallo! Ich bin Kumpel.", the EN/FR body, buttons "Tour starten" / "Später", and the quiet line with "Ruhe, bitte" (link-style button). Anchored bottom right above the buddy, `z-[45]`, `role="dialog"`, `aria-labelledby`.
  - `Hint({ group, onDone })` — a small speech bubble beside the buddy: text from `kumpelHint*` strings, `role="status"`.
  - UI strings (both locales): `kumpelHelloBody` ('I will be right here whenever you want to know how something works. Want a one-minute tour of the app?' / FR), `kumpelHelloEyebrow` ('First time here?'), `kumpelHelloMute` ('Not for you?'), `kumpelHelloMuteNote` ('I won’t ask again.'), and one `kumpelHint…` per group (`kumpelHintToday`, `kumpelHintPath`, `kumpelHintPractice`, `kumpelHintLibrary`, `kumpelHintMe`; ≤ 70 characters each in both locales).

- [ ] **Step 1: Write the failing tests**

`Hello.test.tsx` (render `<Kumpel />` with pathname `/` and seeded storage): hello appears only when `settings.onboarded` is true and the visitor is not fresh (`isFreshVisitor(state, loggedIn)` false — seed progress so the learner has started) and `welcomed` false; **not** shown (Review Focus 4): when not onboarded, on `/path` (hello is Heute-only), on `/welcome`, in `/lesson/l1/learn`, when `muted`, when `enabled:false`, when `snoozeUntil` is tomorrow, when `welcomed: true`; shown again when `snoozeUntil` equals today's local day (use `vi.setSystemTime`). Buttons: "Tour starten" persists `welcomed: true` **before** the next render (assert `localStorage` immediately after click) and starts the tour; "Später" sets `snoozeUntil` to tomorrow and hides it; "Ruhe, bitte" sets `muted` and `welcomed` and removes the buddy; `Esc` behaves as Später. Rendering the component twice (two roots, same storage) after "Tour starten" shows no hello in the second (the cross-tab/reload case).
`Hint.test.tsx`: a hint appears on a group's first visit once the hello is done (`welcomed: true`), `markSeen(group)` is persisted on show so a remount shows nothing; hidden when `hints: false`, while the panel is open, while the hello is due, and when Kumpel is hidden; auto-dismisses after 6s (fake timers), on any click, scroll or keydown; never shown twice for the same group; different group shows its own.

- [ ] **Step 2: Run to verify failure** — `npx vitest run components/kumpel/Hello.test.tsx components/kumpel/Hint.test.tsx` — Expected: FAIL.

- [ ] **Step 3: Implement `Hello`, `Hint` and wire them into `Kumpel`.** Order of precedence: panel open > tour > hello > hint. `welcomed` is persisted synchronously in each handler. The hello uses the `smile`/`wave` face with the gentle 4.5s bob from the Welcome board (not under reduced motion/calm). The page hint disappears with a fade only.

- [ ] **Step 4: Run to verify pass**, then `npx vitest run`, `npm run typecheck`.

- [ ] **Step 5: Visual check** — clear `localStorage`, onboard, reach `/`, compare with `Buddy-Welcome`.

- [ ] **Step 6: Commit** — `git add components/kumpel lib/ui-strings.ts` · `feat(kumpel): one-time hello and first-visit page hints`

---

### Task 8: Help inside lessons ("?" button and `?` key)

**Files:**
- Create: `components/kumpel/LessonHelp.tsx`, `components/kumpel/LessonHelp.test.tsx`
- Modify: `components/learn/LessonTopBar.tsx` (new prop `onOpenHelp`), `components/learn/StepPlayer.tsx` (help state, `?` shortcut, render `LessonHelp`), `lib/ui-strings.ts`

**Interfaces:**
- Consumes: `lessonHelpFor`, `StepKind`, `useLocale`.
- Produces:
  - `LessonHelp({ kind, onClose }: { kind: StepKind; onClose(): void })` — popover per the Lesson board: a scrim (`bg-black/45`), a `role="dialog"` card (420px wide, right-aligned under the top bar, full-width sheet below `sm`), face + eyebrow "Kumpel · <step title>", the title, rows with an icon, German label, one line, key hints as `<kbd>`, the "Colour is grammar" strip (square = der, circle = die, triangle = das using `GenderShape`), `esc` hint.
  - `LessonTopBar` gets `onOpenHelp: () => void` and a 44px "?" button (`aria-label` from `lessonHelpOpen`, `aria-haspopup="dialog"`), styled as the primary circle (`bg-cta text-cta-ink`) after the contents button.
  - UI strings (both locales): `lessonHelpOpen` ('Help for this card' / 'Aide pour cette carte'), `lessonHelpGrammarNote` ('Colour is grammar. Square = der, circle = die, triangle = das.' / FR), `lessonHelpFooter` ('Kumpel stays out of the way while you study — the ? is always here.' / FR).

- [ ] **Step 1: Write the failing tests**

`LessonHelp.test.tsx`: renders the dialog with the help for each of `vocab` and `exercise` (title text and ≥1 row), shows the `<kbd>` keys for `vocab`'s move row (`Space`, `←`, `→`), shows the grammar strip with three shapes, `Esc` and scrim click call `onClose`, focus returns to the "?" button after close. In `StepPlayer.test.tsx` (existing, extend): the "?" button exists in the top bar; clicking it opens a dialog; pressing `?` (shift+/) opens it when focus is not in an input; pressing `?` while typing in an input does nothing; `Esc` closes it; while it is open the lesson shortcuts (Space/←/→) do not advance the lesson; the help shown matches the current step kind (vocab step vs. exercise step). The "?" is present even when `settings.kumpel.enabled` is false or `muted` is true (help, not the buddy).

- [ ] **Step 2: Run to verify failure** — `npx vitest run components/kumpel/LessonHelp.test.tsx components/learn` — Expected: FAIL for new cases only.

- [ ] **Step 3: Implement.** Read `StepPlayer.tsx`'s existing keyboard handler first and add `?` beside it with the same "not while typing" guard; do not alter existing shortcut behaviour. Pass `step.kind` to `LessonHelp` (specials use the same player).

- [ ] **Step 4: Run to verify pass**, then `npx vitest run`, `npm run typecheck` — all green, existing StepPlayer suites untouched.

- [ ] **Step 5: Visual check** — open `/lesson/l1/learn` at 1440×900 and 390×844; compare with `Buddy-Lesson`; the popover never covers the word.

- [ ] **Step 6: Commit** — `git add components/kumpel components/learn lib/ui-strings.ts` · `feat(kumpel): "?" help popover inside lessons`

---

### Task 9: Kumpel settings card

**Files:**
- Create: `components/ui/Switch.tsx`, `components/ui/Switch.test.tsx`, `components/kumpel/KumpelSettings.tsx`, `components/kumpel/KumpelSettings.test.tsx`
- Modify: `components/settings/SettingsView.tsx`, `lib/ui-strings.ts`

**Interfaces:**
- Consumes: `useKumpel`, `Segmented` (`components/ui/Segmented`), `Card`, `openKumpel`.
- Produces:
  - `Switch({ checked, onChange, label }: { checked: boolean; onChange(v: boolean): void; label: string })` — `role="switch"`, `aria-checked`, 52×30 track with a 24px knob as the Settings board, 44px hit area, Space/Enter toggles.
  - `KumpelSettings()` — the card: Show Kumpel (Switch), Position (Segmented Left/Right, hidden below `md` with the note "Phones always use the bottom right."), Little hints (Switch), Motion (Segmented Auto/Calm), "Restart tour" (button → `openKumpel({ tour: true })`; if Kumpel is hidden it still runs because the event is handled by the mounted component only when visible — so this button also sets `enabled: true` and clears `muted` first), "Reset all hints" (calls `resetHints`). Rendered inside `SettingsView` after the exam-translations card.
  - UI strings (both locales): `kumpelSettingsTitle` ('Kumpel'), `kumpelShow` ('Show Kumpel'), `kumpelShowHint` ('The small buddy on Heute, Weg, Üben, Bibliothek and Du. Never inside lessons or exams.'), `kumpelPosition`, `kumpelLeft`, `kumpelRight`, `kumpelPhoneNote`, `kumpelHints`, `kumpelHintsHint`, `kumpelMotion`, `kumpelMotionAuto`, `kumpelMotionCalm`, `kumpelMotionHint`, `kumpelRestartTour`, `kumpelRestartHint`, `kumpelResetHints`, `kumpelResetHintsHint`, `kumpelStoredNote`.

- [ ] **Step 1: Write the failing tests**

`Switch.test.tsx`: role switch with accessible name, `aria-checked` reflects the prop, click and Space/Enter call `onChange(!checked)`, the control is ≥44px tall via a `min-h-[44px]` hit area.
`KumpelSettings.test.tsx`: each control changes the persisted state — toggling "Show Kumpel" writes `enabled:false` to `localStorage['deutsch-a1-settings'].kumpel`; position Left/Right writes `side`; hints toggle writes `hints`; motion Calm writes `motion:'calm'`; "Reset all hints" empties `seen`; "Restart tour" sets `enabled:true, muted:false` and dispatches `open-kumpel` with `tour: true`; the card renders in FR. `SettingsView.test.tsx` (existing, if present; otherwise new): the Kumpel card heading appears on `/settings`.

- [ ] **Step 2: Run to verify failure** — `npx vitest run components/ui/Switch.test.tsx components/kumpel/KumpelSettings.test.tsx` — Expected: FAIL.

- [ ] **Step 3: Implement** per the Settings board; reuse `Card`, `Segmented`, and the existing `Row` look from `SettingsView` (extract nothing; copy the pattern).

- [ ] **Step 4: Run to verify pass**, then `npx vitest run`, `npm run typecheck`.

- [ ] **Step 5: Visual check** — `/settings` at desktop and 390px, EN and FR, against `Buddy-Settings`.

- [ ] **Step 6: Commit** — `git add components/ui/Switch.tsx components/ui/Switch.test.tsx components/kumpel components/settings/SettingsView.tsx lib/ui-strings.ts` · `feat(kumpel): Kumpel card in settings`

---

### Task 10: Polish, accessibility and full verification

**Files:**
- Create: `lib/kumpel-contrast.test.ts`
- Modify: whichever Kumpel files the checks below force a fix in.

**Interfaces:** none new.

- [ ] **Step 1: Write the failing guard test `lib/kumpel-contrast.test.ts`**

Static guards over `components/kumpel/*.tsx` (read with `fs`, excluding tests): no Tailwind arbitrary font size below 12px (`/text-\[(?:[0-9]|1[01])(?:\.\d+)?px\]/`), no `text-red`/`bg-red`/`border-red`, no emoji (`/\p{Extended_Pictographic}/u`), no `#` hex colour literals (tokens only), and every `<button` in the files carries either visible text or an `aria-label`. Reuse the helper style from `lib/design-tokens-lint.test.ts`. Run it first; fix whatever it flags.

- [ ] **Step 2: Run the guard** — `npx vitest run lib/kumpel-contrast.test.ts` — Expected: PASS after fixes (or FAIL listing real violations to fix; a test that passes with no violations on first run is acceptable here because the guard targets already-written code — note that in the ledger).

- [ ] **Step 3: Full verification**

Run `npx vitest run`, `npm run typecheck`, `npm run lint`, `npm run build` (stop the dev server on port 3000 first; delete `.next` afterwards and restart dev, as earlier — stale `.next` makes dev 404). Expected: tests green, no type errors, no new lint errors, build succeeds.

- [ ] **Step 4: Manual a11y and responsive pass in the built-in browser** (dev server): 1440×900, 768×1024 and 390×844, dark and Papier, EN and FR. Check: keyboard only (Tab to the buddy, Enter, Tab inside the panel, Esc returns focus), screen-reader names (`read_page` shows labelled dialogs/switches), `prefers-reduced-motion` emulation removes the ring and the bob, text ≥ 12px, tour on a phone shows four stops, Kumpel clear of the tab bar and any bottom CTA on `/`, `/path`, `/practice`, `/library`, `/me`. Fix and commit each finding with its own test where it is logic; visual-only fixes get a one-line note in the commit.

- [ ] **Step 5: Service worker** — Kumpel adds no static assets; confirm `public/sw.js` needs no change (no bump). If the build produced new static files that the SW precaches, bump the cache version as in the Dreiklang plan.

- [ ] **Step 6: Commit** — `git add lib/kumpel-contrast.test.ts <touched files>` · `test(kumpel): design guards, a11y and responsive pass`

---

## Self-review (run against the spec)

- **§6.1 placement / allow-list:** Tasks 2, 4. **§6.2 resting + ring + hint:** Tasks 4, 7. **§6.3 help panel:** Task 5. **§6.4 tour:** Tasks 3, 6. **§6.5 hints:** Task 7. **§6.6 hello:** Task 7. **§6.7 lessons:** Tasks 3, 8. **§6.8 settings:** Task 9. **§6.9 tone:** `!` ban asserted in Tasks 2 and 3. **§7 drift guard:** Tasks 2 (labels) and 6 (targets). **§8 phases 1–6** map to Tasks 1–4, 5, 6–7, 8, 9, 10.
- **Rulings made here (the executor ledgers them):**
  1. Help prose lives in `lib/kumpel-copy.ts`, UI chrome strings in `lib/ui-strings.ts` (the spec says ui-strings for strings; the page-help prose is data and would bloat that file). Both are EN/FR-tested.
  2. `PAGE_HELP` is in `kumpel-copy.ts`, not `kumpel-pages.ts` (spec §7 put both in one file) to keep the allow-list function small and dependency-free.
  3. "After the daily-pace question and the first lesson step" is implemented as `settings.onboarded && !isFreshVisitor(...)` because the pace question is only asked after the visitor has started a lesson (see `OnboardingGate`).
  4. The phone tour has four stops (no search button on phones) and the counter says so; the Mobile-Tour board shows "1 von 5" as a sample.
  5. The lesson "?" button is always shown, even when Kumpel is hidden or muted — it is lesson help, not the buddy.
  6. `Settings.kumpel` is typed `Record<string, unknown>` in `settings-store.ts` to avoid an import cycle; `resolveKumpel` is the only reader.
- **Type consistency:** `KumpelState`, `PageGroupId`, `TourStopId`, `StepKind`, `L` and `openKumpel(detail)` are defined once (Tasks 1–3) and used with the same names in Tasks 4–9.
- **Proportion:** the plan states interfaces, test cases and assertions; it deliberately leaves JSX, class strings and copy wording to the builder, guided by the boards.

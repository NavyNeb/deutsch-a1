# Kumpel — an in-app buddy that explains the app

Status: draft for approval · 2026-11-06
Design (approved 2026-11-06, "Approve design"): https://claude.ai/artifact/YHzt6xT6BE8qtWubGKyruk
Design source files: `docs/design/dreiklang/project/Buddy-*.dc.html` (uncommitted)
Builds on: `2026-11-05-dreiklang-redesign-design.md` (tokens, type, shell).

## 1. Intent

Learners should never have to guess how a page works. Kumpel is a small, calm round buddy that rests
in a corner of the app. Tapping it explains the current page, answers common questions and can run a
one-minute tour. It is help on request, not a mascot that performs.

Kumpel is drawn in the Dreiklang language: a cta-coloured circle with a simple face (no gender
colour — colour stays reserved for grammar). Moods are six small face variants (resting, smiling,
thinking, pointing, waving, sleeping) shown in the design's Language board.

## 2. Goals

1. A first-time learner can get the five-stop tour within one tap of meeting Kumpel.
2. On any main page, one tap shows "what is this page and what can I do here".
3. Kumpel never covers content, never blocks a learning task and never interrupts a lesson.
4. Fully optional: hidden, moved or muted in Settings; "Ruhe, bitte" mutes it from the first hello.
5. Accessible by construction: keyboard, screen reader, reduced motion, ≥44px target, ≥4.5:1 text.
6. Works the same on desktop and phone; every string in EN and FR.

## 3. Non-goals (phase 1)

- No AI chat or free-text answers. Help is written by us, per page. (A later phase may add it.)
- No new learning content, no change to SRS, progress, sync, audio or exercise logic.
- No analytics or telemetry on what learners ask Kumpel.
- No gamification (no XP for the tour, no rewards, no streaks for Kumpel).
- No floating buddy inside lessons, speaking drills or exams.

## 4. Anti-goals (a failure even if it ships)

- Kumpel opens by itself more than once (the first hello).
- It covers the word card, an answer tile, a player button or the tab bar.
- Red or alarm styling, shaking, bouncing for attention, sounds.
- A tour that cannot be skipped, or that traps focus without an escape.
- Help text that describes the UI wrongly after the UI changes (see §7 drift guard).
- Regressions in the existing suite, PWA behaviour or page performance.

## 5. Constraints

- Next.js 16.2 App Router. **`AGENTS.md`: this Next.js has breaking changes — read the relevant
  guide in `node_modules/next/dist/docs/` before writing code.**
- Tokens, fonts and shapes from the Dreiklang system; nothing under 12px; Jost for German words
  and titles, Inter for explanations.
- Strings via `lib/ui-strings.ts`, EN and FR required. German labels stay German (Weiter,
  Tagesziel, Wiederholen, Tour starten, Später, Ruhe, bitte).
- State in `useSyncExternalStore` stores like the existing ones; no new dependency.
- Framer-motion is already installed; `prefers-reduced-motion` → fade only, no travel.
- Mounted once in `AppChrome`, never in immersive routes (`isImmersive`).

## 6. Decisions (from the approved design)

### 6.1 Where Kumpel lives
- Desktop: bottom right (or left, a setting), 64px, 24px from the edge; the panel is 400×552.
- Phone: 52px, bottom right, 16px from the edge, directly above the tab bar
  (`bottom: calc(84px + env(safe-area-inset-bottom) + 12px)`). Help opens as a bottom sheet (610px).
- Pages with Kumpel: Heute, Weg, Üben, Bibliothek (incl. dictionary, textbook, exams hubs), Du.
- Pages without: lesson players (`isImmersive`), exam tasks, speaking/writing drills, the textbook
  reader, `/welcome`, onboarding. Unlisted pages default to none (allow-list, not deny-list).

### 6.2 Resting state
A static circle with a calm 2.4s pulse ring (opacity only; no ring under reduced motion). A hint
bubble ("Tap me for help") shows only when a page-hint is unseen (§6.5). It disappears after 6s or
on any tap/scroll and is never shown twice per page type.

### 6.3 Help panel
Two tabs.
- **This page** (default): eyebrow "Diese Seite · <page>", a one-sentence purpose, and up to
  three numbered parts ("Weiter", "Tagesziel", "Wiederholen"), each a German label plus one line.
- **Questions**: 4–6 curated questions per page group, answered inline (accordion, one open).
Footer: up to three question chips and the primary button "Tour starten · 1 min".
Closes with ✕, Esc, tap outside (sheet: drag down or tap scrim). Focus returns to the buddy.
Opens as `role="dialog"` with `aria-label="Kumpel help"`; focus moves into the panel.

### 6.4 Tour
Five stops, in order, each with a spotlight cut-out around a real element and a step card:
1. Weiter — the continue card on Heute.
2. Tagesziel — goal ring.
3. Navigation — rail (desktop) / tab bar (phone).
4. Suche — search / ⌘K palette.
5. Kumpel — "I am always here."
Controls: Zurück, Weiter (last: "Fertig"), Überspringen, dots for progress ("Station 2 von 5").
Keys: → / Enter next, ← back, Esc skip. If a target is missing on the current page, the tour first
navigates to `/` (Heute) and starts there; a missing target on a later stop is skipped, never an
error. The tour never changes learner data.
Targets are found by `data-kumpel="<id>"` attributes added to existing components (no brittle
selectors). The spotlight is a box-shadow cut-out around the target rect, recomputed on resize and
scroll.

### 6.5 Hints
One short speech bubble per page type the first time it is visited after the first hello. Each hint
shows once ever (state `seen`), only when Kumpel is on and "Little hints" is on. Nothing animates
besides a fade.

### 6.6 First hello
After the learner finishes the daily-pace question and the first lesson step (never over `/welcome`
or onboarding), Kumpel opens once on Heute with the card "Hallo! Ich bin Kumpel.": Tour starten,
Später (snooze until the next local day), "Ruhe, bitte" (mute everywhere, never ask again). This is
the only time Kumpel opens by itself.

### 6.7 Lessons, exams and drills
No floating buddy. The lesson top bar gets a "?" button (44px) and the `?` key opens a popover
"So funktioniert die <card type>" with help written for that step type (design: Lesson board). It
opens over a scrim, beside the bar, and never covers the word.

### 6.8 Settings (Du → Kumpel, per the Settings board)
Show Kumpel · Position (Left/Right; phone ignores it) · Little hints · Motion (Auto/Calm) ·
Tour starten (restart) · Reset all hints.

### 6.9 Tone
Short, warm, plain. No exclamation marks except the hello. No jokes at the learner's expense and no
"mistake" language. Same register as the Dreiklang feedback copy ("Richtig!", "Fast!").

## 7. Architecture

Pure data first, UI second, so the content can be tested without a browser.

- `lib/kumpel-pages.ts` — `pageGroupFor(pathname): PageGroupId | null` (the allow-list in §6.1)
  and `PAGE_HELP: Record<PageGroupId, { titleKey, purposeKey, parts: {de, textKey}[], questions: {qKey, aKey}[] }>`.
- `lib/kumpel-tour.ts` — `TOUR_STOPS: {id, target, titleKey, bodyKey, de}[]`, `nextStop`,
  `prevStop`, helpers that skip stops whose target is absent.
- `lib/kumpel-store.ts` — `useKumpel()` over `useSyncExternalStore`; persisted JSON in
  `localStorage` (`deutsch-a1-kumpel`), plus the synced slice (below).
- `lib/lesson-help.ts` — `stepHelpFor(stepType)` for the lesson "?" popover.
- `components/kumpel/` — `Kumpel` (mount + resting + position), `KumpelFace` (six SVG moods),
  `HelpPanel` (desktop popover / phone sheet), `Tour` (spotlight + card), `Hello`, `Hint`,
  `LessonHelp`, `KumpelSettings`.
- `AppChrome` mounts `<Kumpel />` next to `<CommandPalette />`; `LessonTopBar` renders the "?" button.
- Existing components get `data-kumpel` attributes on the four tour targets.
- Global event `open-kumpel` (`detail?: { tab?: 'here'|'ask'; tour?: boolean }`), mirroring
  `open-palette`, so the palette and Settings can open it. The palette gets one command, "Kumpel".
- **Drift guard:** a test fails if any `data-kumpel` target named in `TOUR_STOPS` no longer exists
  in the rendered page, and if a help part's German label no longer appears on its page.

### State shape
```ts
type KumpelState = {
  enabled: boolean;        // default true
  side: 'left' | 'right';  // default 'right'
  hints: boolean;          // default true
  motion: 'auto' | 'calm'; // default 'auto'
  muted: boolean;          // "Ruhe, bitte"
  welcomed: boolean;       // hello shown
  snoozeUntil: string|null // ISO date, local day
  tourDone: boolean;
  seen: string[];          // page-group hints already shown
};
```
Defaults: `{enabled:true, side:'right', hints:true, motion:'auto', muted:false, welcomed:false,
snoozeUntil:null, tourDone:false, seen:[]}`. `muted` behaves as `enabled=false` plus "never ask".

## 8. Delivery phases (each ships on its own)

1. **Core:** data modules (`kumpel-pages`, `kumpel-tour`, `kumpel-store`) with tests; `KumpelFace`;
   resting `Kumpel` mounted in `AppChrome` with correct placement and allow-list.
2. **Help panel:** This page + Questions tabs, desktop popover and phone sheet, focus and Esc,
   `open-kumpel` event and the palette command; EN/FR strings for all page groups.
3. **Tour + first hello:** spotlight, step card, keyboard, `data-kumpel` targets, hello and snooze,
   drift-guard tests.
4. **Lesson help:** "?" in `LessonTopBar`, `?` shortcut, step-type help content.
5. **Settings + hints:** Kumpel card in Du, hints, reset, motion, optional cloud sync.
6. **Polish:** reduced motion, a11y audit (contrast, focus, labels), SW cache bump if assets
   changed, visual check against the boards on desktop, tablet and phone.

## 9. Left to the builder

- Popover positioning approach (CSS anchoring vs measured) and spotlight rect maths.
- File naming inside `components/kumpel/`.
- Exact help copy (drafted by the builder in the tone of §6.9, reviewed by Sasha) — one set per
  page group: Heute, Weg, Üben, Bibliothek, Du. Questions are a starting set of 4–6 each.
- Whether the six moods animate at all beyond a fade (default: no).

## 10. My calls — please check these

1. **Name:** "Kumpel".
2. **Help is curated, no AI** in phase 1. The panel is built so a text field and answers could be added later.
3. **Hidden in lessons, exams and drills**; the "?" button replaces it there.
4. **Auto-opens exactly once** (the hello). Hints are bubbles, not panels.
5. **Allow-list placement** (§6.1): new pages get no Kumpel until added.
6. **Sync:** the `KumpelState` slice is stored inside the existing `Settings` object so it syncs with the account for free; last write wins across devices. If you prefer device-local, say so.
7. **No sound, no haptics** for Kumpel.
8. **Position:** phone always bottom right; the left/right setting is desktop only.
9. **Tour starts on Heute** even if invoked elsewhere (it navigates first).
10. The tour has five stops; the Language board's "sleeping" and "waving" moods are used only for the hello and for after the tour.

## 11. Open items

- Sasha to review the drafted help copy (EN, then FR) before phase 2 ships.
- Decide later whether Kumpel gets an AI "ask me anything" in phase 2 (needs a backend, rate limits and a privacy line).

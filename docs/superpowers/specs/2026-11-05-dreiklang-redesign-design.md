# Dreiklang — full UI/UX redesign of Deutsch

Status: draft for approval · 2026-11-05
Prototype (source of truth for look and feel): https://claude.ai/artifact/YHzt6xT6BE8qtWubGKyruk
Prototype source files: `docs/design/dreiklang/project/*.dc.html` (uncommitted)

## 1. Intent

Deutsch is a premium, shippable German course (A1 → B2, EN/FR UI, PWA, Supabase sync).
Its content is strong; its look is generic (teal, Poppins, stock 3D art, emoji tiles) and its
structure puts marketing and chrome ahead of the daily task. The redesign gives the product one
ownable idea and a structure built around "what do I do today".

**The idea — Dreiklang (triad): colour is grammar.** The interface is ink and paper. Colour is
reserved for noun gender, and every gender colour travels with a shape:

| Gender | Shape | Colour (dark) |
|---|---|---|
| der | square | cobalt `#5B8CFF` |
| die | circle | rose `#FF6F96` |
| das | triangle | sun `#FFCB45` |

The font is the language: German is set in Jost (display voice, large); explanations in the UI
language (EN/FR) are Inter (quiet voice).

## 2. Goals

1. One memorable visual identity: Bauhaus-rooted, dark-first, Linear/Apple precision.
2. A returning learner lands on "what to do today" in one glance, on desktop and phone.
3. A path through A1 → B2 that shows progress and scales past 19 lessons without a wall of cards.
4. A focused lesson player: one thing on screen, one primary action.
5. Feedback that feels rewarding without red/green clichés or colour collisions.
6. One consistent system across learn, practice, library, exams, account.
7. Accessible by construction: shape + colour, ≥4.5:1 text, ≥12px text, ≥44px targets, reduced-motion.

## 3. Non-goals

- No new learning content except the small items in §9 (can-do lines, chapter names).
- No change to the SRS, progress store, Supabase sync, audio pipeline, exercise logic or content model.
- No new backend or auth features.
- No change to the textbook reader's copyright protections (preview-only, no print/download).
- No A2/B1/B2 content authoring.

## 4. Anti-goals (a failure even if it ships)

- A reskin that keeps the old layout and just swaps colours.
- Colour used decoratively (gradient bands, brand teal, "pretty" accents) — it dilutes the grammar signal.
- Red used for mistakes.
- Utility controls (language, theme, speed) back in the global chrome.
- Regressions in progress, sync, offline/PWA, or the existing test suite.
- Gamification noise (badges, leaderboards, hearts) that the prototype does not show.

## 5. Constraints

- Stack stays: Next.js 16.2 (App Router), React 19, Tailwind 4, framer-motion, lucide-react,
  Supabase, vitest. **`AGENTS.md`: this Next.js has breaking changes — read the relevant guide in
  `node_modules/next/dist/docs/` before writing code.**
- EN/FR UI strings via `lib/ui-strings.ts`; every new string needs both. German UI labels
  (Heute, Weg, Üben…) are fixed words; English/French gloss shown beside them.
- Existing URLs must keep working (redirects), and the service worker cache must be versioned
  so installed PWAs pick up the new shell.
- Fonts self-hosted (no runtime Google Fonts fetch): Jost 300–700, Inter 400–700, with umlauts/ß.
- Light theme ("Papier") supported from day one via the same tokens.
- Existing tests in `components/**` and `lib/**` must pass or be updated deliberately.
- Icons: lucide-react (stroke 1.8). No emoji in UI. Lesson art is generated geometry, not emoji.

## 6. Decisions (agreed: "Approve direction", 2026-11-05)

### 6.1 Tokens
Dark is the default; light ("Papier") toggles via `data-theme`. Values are in the prototype
helmet CSS (`.dz` and `.dz[data-theme="light"]`). Semantic names to introduce:
`--ink --s1 --s2 --s3 --line --line2 --t1 --t2 --t3 --der --die --das --der-t --die-t --das-t --ok --ember --cta --cta-i`.
`--*-t` are text-safe variants (light theme needs darker das). Old tokens (`--primary`, teal washes)
stay as aliases during migration, then are removed.

### 6.2 Type
Display: Jost 700, 96–176px / 0.9, tracking −0.04em. Headings: Jost 600. Body: Inter 400 17/1.55.
Eyebrow: Inter 600 12px caps, +0.14em. Nothing under 12px (the current 10–11px labels go).
Rule: target-language text is always ≥1.5× its translation's size.

### 6.3 Navigation
- Desktop: 264px left rail — brand, ⌘K field, Heute · Weg · Üben · Bibliothek · Du, streak card, profile.
- Phone: bottom tab bar, same five destinations (labels may shorten, e.g. "Lesen" → decide in build).
- Language (EN/FR), theme and audio speed move out of global chrome: language and theme live in
  Du → Settings; translation toggle and speed live inside the lesson player.
- ⌘K / `/` opens a global palette: dictionary entries (with preview + declension), lessons, exercises.

### 6.4 Route map (old URLs redirect)
| New | Contains | Replaces |
|---|---|---|
| `/` Heute | next-up hero, daily goal, due words, word of the day, activity, quick practice | home |
| `/path` Weg | level staircase, chapter/lesson list, lesson detail panel | course list on home |
| `/practice` Üben | sprint, audio-call, review queue, speak, write, specials | `/games`, `/practice`, `/speak`, `/write`, `/specials` hubs |
| `/library` Bibliothek | dictionary, textbook, exams entry | `/dictionary`, `/textbook`, `/exams` hubs |
| `/me` Du | statistics, account, settings | `/statistics`, `/account`, `/settings` |
| `/welcome` | logged-out marketing page (hero art, pitch) | the home hero |
Deep routes (`/lesson/[id]/learn`, `/exams/...`, `/dictionary/[word]`, etc.) keep their paths.
Name clash to resolve: today `/practice` is the review queue and `/games` is the hub. In the new map
`/practice` becomes the hub and the review queue moves to `/practice/review` (my call, §9.9); `/games`,
`/games/sprint`, `/games/audio` keep working via redirects or stay as deep routes under `/practice`.

### 6.5 Screens (see prototype boards)
- **Heute:** greeting + week row; hero card (lesson title Jost 60, 38-tick step bar, "Weiter lernen");
  daily goal ring; Wiederholen card; Wort des Tages; 10-week activity grid; four quick-practice tiles.
- **Weg:** staircase graphic for A1/A2/B1/B2 (progress fills in paper tone, B2 dashed "coming soon");
  chapters as rows, current chapter expanded to lesson rows; sticky detail panel (can-do line, counts,
  new-word chips with shapes, grammar pills, primary CTA). All lessons stay open; the current one is highlighted.
- **Lesson player (focus mode, no global chrome):** top bar = close, segmented progress by chapter, translation
  toggle, speed, contents drawer. Word card: article (Jost 300, gender colour) over the noun
  (Jost 700, ~176px), stress-underlined syllables, big audio button, translation, example sentence with
  nouns coloured and underlined by gender, three icon tools (Sprich, Merken, Erklären). Bottom bar: back + Weiter, with keyboard hints.
  The 280px contents sidebar becomes an on-demand drawer; the card-inside-card panel is removed.
- **Exercises:** large gender tiles (shape + article) for article exercises; other types adopt the same
  tile/field language. Feedback is a bottom sheet: **Richtig!** (`--ok`) or **Fast!** (`--ember`) with the
  right answer and one-line rule. Never red.
- **Completion:** shapes snap together (motion), XP / accuracy / new words, streak tower, next-lesson CTA.
- **Bibliothek + ⌘K:** three sections (Wörterbuch, Lehrbuch, Prüfungen); palette with grouped results and
  a right-hand preview (noun panel, four-case table). Exams force the Papier theme to feel like the paper exam.
- **Today/Weg/Lesson on phone:** as drawn; hero and primary CTA fully above the fold at 390×844.

### 6.6 Motion, sound, haptics
- Correct answer: shape "clicks shut" (spring ~240ms); wrong: soft settle, no shake.
- Lesson art and completion: shapes assemble with staggered spring.
- Shape morph between tabs is optional polish (phase 7).
- Haptics: light on select, double-tick on correct (where supported). Sound: optional, off by default.
- `prefers-reduced-motion`: crossfade only.

## 7. Delivery phases (each ships on its own)

0. **Baseline:** reproduce/diagnose the `/lesson/l1/learn` dev-server hang (>200s, seen once); run `npm test` + `npm run typecheck`; capture before-screenshots.
1. **Foundations:** tokens + aliases, fonts, `GenderShape`, updated `GenderTag`, `Button`/`Card`/`ProgressTicks`/`Ring` primitives, theme default flip, shape-based lesson artwork generator replacing `lib/lesson-visuals.ts` emoji.
2. **Shell:** `AppRail`, `MobileTabBar`, `CommandPalette`, new routes + redirects, SW cache bump, utility controls relocated.
3. **Heute + Weg**, `/welcome`, onboarding rewrite (goal in minutes/XP with a plain explanation).
4. **Lesson player:** focus mode, word card, step types, exercises + feedback sheet, completion.
5. **Library, Practice, Exams (Papier), Du** (stats/account/settings).
6. **Polish:** motion, haptics, optional sound, a11y audit (contrast, focus, targets, screen-reader labels), Lighthouse/CWV.

## 8. Left to the builder

- Component structure, file naming, and exact Tailwind v4 token wiring (keep the `@theme inline` pattern).
- Font loading mechanism (`next/font/local` vs `@font-face`) — must be self-hosted and non-blocking.
- Algorithm for generated lesson art (deterministic from lesson id/nouns; 2–3 primitives; must look good at 56px and 330px).
- Exact tab-bar labels on phone (Lesen vs Bibliothek) and breakpoint for rail ↔ tab bar.
- How ⌘K indexes lessons/exercises (static index at build time is fine).
- Handling of the other exercise types (match, word order, fill-blank, listen) in the new language — follow the tile/field/sheet rules.

## 9. My calls — please check these

1. **Colour change:** replaces teal and the earlier indigo note; das moves green → yellow to avoid the "correct" green clash.
2. **Weg chapter names** (Kennenlernen, Alltag & Dinge, Freizeit & Essen, Zuhause, Unterwegs, Jahreslauf) are placeholders; the content model has `module` numbers only.
3. **"Ich kann …" can-do lines** per lesson are new content (EN/FR + DE). Without them the detail panel falls back to the lesson's first grammar point.
4. **Lehrbuch cards** show generic A1.1/A1.2 labels in the prototype; keep the real book names if you want them visible.
5. **`/welcome`** is a new logged-out page; logged-in users never see it.
6. **Exams in Papier theme** is an idea, not yet drawn.
7. **Sound** defaults to off.
8. Prototype numbers (streak, XP, progress) are sample data.
9. `/practice` becomes the hub; the review queue moves to `/practice/review` (see §6.4).
10. Dark is the default for new visitors; anyone with a saved theme choice keeps it.

## 10. Open items

- Verify the `/lesson/l1/learn` hang is dev-only (phase 0).
- Sasha to decide: keep or drop the real textbook names on library cards.
- Sasha to decide: author the can-do lines now (recommended, ~19 for A1) or ship the fallback first.

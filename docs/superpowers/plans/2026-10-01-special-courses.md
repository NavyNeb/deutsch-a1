# Special Courses Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a "Specials" section: 32 original, topic-based mini-courses (modal verbs, separable verbs, Konjunktiv II, colours, body parts …), each with 4–6 chapters, a wrap-up and an end-of-course quiz, reachable from the main nav, home page, footer and "Related special" chips on lessons.

**Architecture:** A special is a lesson-shaped object (`SpecialSchema` extends `LessonSchema` with a `special` block) kept in its own array, so the 69 lessons and their progress ids never change. The existing `StepPlayer` plays it (two new divider step kinds: `chapter`, `quiz`) via `/specials/<slug>/learn`; progress is stored under id `sp-<slug>` using the existing lesson progress shape; "quiz passed" is derived from stored exercise results (no new persisted field).

**Tech Stack:** Next.js 16 App Router (React 19), TypeScript, Zod, Tailwind v4 tokens, Framer Motion, Vitest, Edge-TTS audio script.

**Spec:** `docs/superpowers/specs/2026-10-01-special-courses-design.md`

## Global Constraints

- Next 16: `params` is a Promise (`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/dynamic-routes.md`); await it in server pages. Static params via `generateStaticParams` from the specials registry.
- All content is original (the Menschen/DaF/PONS books are copyrighted: use them only for topic coverage and `bookRefs` page pointers, never copy text).
- Every string EN + FR; chrome strings via `lib/ui-strings.ts`, course content via `titleFr`/`...Fr` fields.
- ≥25 specials ship (target 32); each has 4–6 `chapter` dividers, a `wrapup`, a `quiz` marker and a quiz of 12–15 exercises using ≥3 exercise types; quiz pass mark default 0.8.
- Special ids are `sp-<slug>`; vocab ids `sp-<slug>-…`; not added to `lessons`; `allVocab()` includes specials, `vocabByLevel()` does not.
- MiniMarkdown renders **bold** and bullets only (no tables); use `grammar` notes with `diagram:'conjugation-table'` or example lists for tables.
- Any spoken text must be covered by `collectAudioJobs` (vocab german/example.de, pronunciation items, grammar examples, listenChoose audio) and then `npm run audio`, else audio 404s.
- No push / deploy unless asked. Windows + Git Bash; use node script files for bulk text replacement.

## Review Focus

- A failed quiz retake after an earlier pass: the displayed pass state must follow the *latest* attempt unless the product decision says "best"; verify `withExerciseResult` overwrite vs `mergeProgress` truthy-wins after cloud merge (Task 1 test, documents the chosen rule).
- `lessonCompletion` / sidebar unlocking with `chapter` and `quiz` dividers: dividers must count as steps that can be marked done by Next, not trap the learner (Task 2 test).
- Unknown slug `/specials/nope` and `/specials/nope/learn`: 404, not a crash (Task 4 test).
- Special completion must not distort home "next lesson" logic, lesson counts, stats or XP (only `sp-` ids; stats totals show specials separately) (Task 6 test).
- Nav overflow with 8 items at tablet (768–1024px) and 375px drawer (Task 7 browser check).
- Spoken-text coverage: every `de` string a learner can hear has an audio job (Task 3 + Task 10 test).

## File Structure

| File | Responsibility |
|---|---|
| `content/types.ts` | + `chapter`/`quiz` step kinds, `SpecialSchema`, `parseSpecial` |
| `content/specials/index.ts` | `specials` array, `getSpecial`, `specialsByGroup`, `allSpecialVocab` |
| `content/specials/<slug>.ts` | One file per course (32) |
| `content/specials/meta.ts` | Catalog metadata (slug, group, levels, related, bookRefs) shared by hub/tests |
| `lib/specials-progress.ts` | `specialProgress(state, special)` (chapters done, quiz status), pure + tested |
| `components/learn/StepPlayer.tsx` | + optional `exitHref`, `chapter`/`quiz` rendering, special results |
| `components/specials/*` | Hub (`SpecialsHub`), `SpecialCard`, `SpecialOverview`, `RelatedSpecials` |
| `app/specials/page.tsx`, `[slug]/page.tsx`, `[slug]/learn/page.tsx`, `[slug]/review/page.tsx` | Routes |
| `scripts/prepare-audio.mjs`, `scripts/snapshot.mjs` | Include specials |
| `content/specials/index.test.ts` | Coverage test |

---

### Task 1: Schema, registry skeleton and progress selector

**Files:**
- Modify: `content/types.ts`, `lib/book-refs.ts` (`lektion` optional), `content/index.ts` (`allVocab` includes specials via a lazy import-free hook: see below)
- Create: `content/specials/index.ts` (empty registry for now), `content/specials/meta.ts`, `lib/specials-progress.ts`
- Test: `content/types.test.ts` (extend), `lib/specials-progress.test.ts`

**Interfaces:**
- Produces:
```ts
// step kinds
{ kind:'chapter', title:string, titleFr?:string, blurb?:string, blurbFr?:string }
{ kind:'quiz', title:string, titleFr?:string, passMark:number /* default 0.8 */ }
export const SpecialGroupSchema = z.enum(['verbs','cases','sentences','words','life']);
export const SpecialSchema = LessonSchema.extend({
  id: z.string().regex(/^sp-[a-z0-9-]+$/),
  special: z.object({
    slug: z.string(), group: SpecialGroupSchema,
    levels: z.tuple([LevelSchema, LevelSchema]),
    related: z.array(z.string()),            // lesson ids
    bookRefs: z.array(BookRefSchema).default([]),
  }),
});
export type Special = z.infer<typeof SpecialSchema>;
export function parseSpecial(data: unknown): Special;
// lib/specials-progress.ts
export function specialProgress(s: ProgressState, sp: Special): {
  stepsDone: number; stepsTotal: number; chaptersDone: number; chaptersTotal: number;
  quizAnswered: number; quizTotal: number; quizCorrect: number; quizPassed: boolean; complete: boolean;
};
```
- `quizPassed` = every quiz exercise answered and `correct/total >= passMark`, computed from `s.lessons[id].exercises` only for exercises after the `quiz` marker.

- [ ] **Step 1: Failing tests.** Extend `content/types.test.ts`: `chapter` and `quiz` steps parse; `quiz` default `passMark` 0.8; `SpecialSchema` rejects id `lesson-1`, accepts `sp-modalverben`. `lib/specials-progress.test.ts` builds a tiny in-memory special (2 chapters, quiz with 5 exercises, passMark 0.8) and checks: no progress → 0 and not passed; 4/5 correct → passed; 3/5 → not passed; answering a retake wrong after a pass flips `quizPassed` to false (latest result rule), steps beyond total don't exceed 100%.
- [ ] **Step 2:** `npx vitest run content/types.test.ts lib/specials-progress.test.ts` → FAIL.
- [ ] **Step 3:** Implement. Check `withExerciseResult`/`mergeProgress` in `lib/progress.ts`: retake overwrites locally; in `mergeProgress` truthy wins, meaning a failed retake after cloud sync can re-surface an earlier pass. Decision: keep "best result counts" (consistent with merge) and write that into the test (pass state never regresses); remove the "flips to false" assertion accordingly. Make `BookRef.lektion` optional (`lektion?: number`) and update its consumers (`BookRefLinks`, tests) with a fallback label. `content/specials/index.ts`: `export const specials: Special[] = [].map(parseSpecial)` typed; `getSpecial(slug)`; `specialsByGroup()`.
- [ ] **Step 4:** PASS + `npm run typecheck`. Commit `feat: special-course schema, step kinds and progress selector`.

---

### Task 2: StepPlayer supports chapters, quiz marker, exitHref

**Files:**
- Modify: `components/learn/StepPlayer.tsx`, `components/learn/LessonStepNav.tsx` (`labelFor`), `components/learn/LessonResults.tsx` (exitHref + review link), `components/learn/stepId.ts` (verify default)
- Create: `components/learn/ChapterDivider.tsx`, `components/learn/QuizIntro.tsx`
- Test: `components/learn/StepPlayer.special.test.tsx`

**Interfaces:**
- Consumes: `Special` (Task 1).
- Produces: `StepPlayer` props `{ lesson: Lesson | Special; exitHref?: string; reviewHref?: string }`; defaults keep the existing lesson behaviour (`/` and `/lesson/${id}/review`).

- [ ] **Step 1: Failing test:** render `StepPlayer` with a special containing `intro, chapter, grammar, chapter, vocab, wrapup, quiz, 3 exercises`; assert: chapter divider shows its title (EN and FR locale), Next advances and marks the divider step done, quiz marker shows pass-mark copy, finishing the last exercise shows results whose "Back" link goes to `exitHref` and "Review" link goes to `reviewHref`; `LessonStepNav` shows chapter titles as section headers and the `Quiz` item.
- [ ] **Step 2:** FAIL. **Step 3:** implement: `chapter` renders `ChapterDivider` (big number "Chapter n of m" computed from the order of chapters, title, blurb, Continue button = the player's existing Next); `quiz` renders `QuizIntro` (title, count of questions after it, pass mark %, retake note). Both are marked done via the existing `markStepDone` path. Update the `labelFor` switch with `chapter` → `titleFr/title`, `quiz` → localized "Quiz". Wire `exitHref`/`reviewHref` into `LessonResults` (replace hard-coded `onHome` and `/lesson/${id}/review`). Results screen for specials adds "Quiz passed / not yet" from `specialProgress`.
- [ ] **Step 4:** PASS + existing StepPlayer tests still pass (`npm test`). Commit `feat: StepPlayer plays specials (chapter + quiz steps, exitHref)`.

---

### Task 3: Audio + snapshot + vocab integration

**Files:**
- Modify: `scripts/prepare-audio.mjs` (`collectAudioJobs` accepts lessons and specials; iterate both; ignore `chapter`/`quiz`), `scripts/snapshot.mjs` (writes `content/lessons.snapshot.json` containing both arrays: `{ lessons, specials }` OR concatenated — keep the file backwards-compatible: concatenate and keep step handling generic), `content/index.ts` (`allVocab()` includes specials; `vocabByLevel()` unchanged)
- Test: `scripts/prepare-audio.test.mjs` (extend), `content/index.test.ts` (extend)

- [ ] **Step 1: Failing tests:** `collectAudioJobs([specialFixture])` yields jobs for its vocab/examples/grammar examples/listenChoose and nothing for `chapter`/`quiz`; `allVocab()` contains a fixture special's vocab id `sp-…` only when specials are registered (use the real registry once pilots exist: assert `allVocab().some(v=>v.id.startsWith('sp-'))` in Task 9); `vocabByLevel` totals unchanged.
- [ ] **Step 2:** FAIL. **Step 3:** implement; keep `lessons.snapshot.json` as the concatenated lessons+specials list so the audio script needs only a generic step walker. **Step 4:** PASS. Commit `feat: audio jobs and vocab include specials`.

---

### Task 4: Routes and hub

**Files:**
- Create: `app/specials/page.tsx`, `app/specials/[slug]/page.tsx`, `app/specials/[slug]/learn/page.tsx`, `app/specials/[slug]/review/page.tsx`
- Create: `components/specials/SpecialsHub.tsx`, `SpecialCard.tsx`, `SpecialOverview.tsx`
- Modify: `lib/ui-strings.ts` (Specials strings: nav, hub title/subtitle, group names, "Start / Continue / Retake quiz", "Quiz passed", "Chapters", "Level", "Builds on lessons", "Book pages", pass-mark copy)
- Test: `components/specials/SpecialsHub.test.tsx`

**Interfaces:**
- Consumes: `specials`, `getSpecial`, `specialsByGroup`, `specialProgress`, `useProgress`, `StepPlayer`, `ChapterView` (reuse for review).
- Routes: pages `await params`; `generateStaticParams` returns slugs; unknown slug → `notFound()`.

- [ ] **Step 1: Failing test:** with a fake registry (inject through props), `SpecialsHub` renders the five groups, a card per special with level badge, chapter count and progress; the card links to `/specials/<slug>`; a group filter chip narrows the list; an empty progress shows "Start", partial shows "Continue", passed shows "Quiz passed".
- [ ] **Step 2:** FAIL. **Step 3:** implement hub (Linear/Apple look matching `LessonCard`; group chips as segmented control; search-free), overview page (hero with title/theme/levels, chapter list from the `chapter` steps with blurb, vocab/exercise counts, Builds-on lesson chips linking to the lessons, `BookRefLinks` from `special.bookRefs`, Start/Continue button → `/specials/<slug>/learn`), learn route (`<StepPlayer lesson={sp} exitHref="/specials" reviewHref={…/review} />`), review route (`ChapterView`; make it accept `Special`). Read-only guards for unknown slug. **Step 4:** PASS + `npm run build`. Commit `feat: specials hub, overview and routes`.

---

### Task 5: Navigation, home row, footer, lesson chips

**Files:**
- Modify: `components/shell/TopNav.tsx` (8th item "Specials"; verify desktop fit 768–1280px and the drawer), `components/shell/SiteFooter.tsx`, `app/page.tsx` (+ `components/home/SpecialsRow.tsx`), lesson overview/intro (`components/specials/RelatedSpecials.tsx` rendered in the lesson intro step and the lesson card/overview — locate where lesson overview is rendered), `components/stats/*` (specials counts separate from lessons)
- Modify: `lib/ui-strings.ts`
- Test: `components/specials/RelatedSpecials.test.tsx`, nav test if one exists

**Interfaces:**
- Produces: `relatedSpecials(lessonId): Special[]` in `content/specials/index.ts` (reverse lookup of `special.related`).

- [ ] **Step 1: Failing tests:** `relatedSpecials('lektion-6')` returns specials whose `related` include it; `RelatedSpecials` renders nothing for a lesson without matches and links `/specials/<slug>` otherwise.
- [ ] **Step 2:** FAIL. **Step 3:** implement + wire. **Step 4:** PASS, typecheck. Commit `feat: specials in nav, home, footer, lesson chips and stats`.

---

### Task 6: Pilot courses (4)

**Files:**
- Create: `content/specials/modalverben.ts`, `konjunktiv-2.ts`, `farben-kleidung.ts`, `wortstellung.ts`; `content/specials/meta.ts` entries; register in `content/specials/index.ts`
- Create: `content/specials/index.test.ts` (coverage test, Task 9 extends the thresholds)

**Interfaces:**
- Each file exports a `Special` object literal; follow the structure: `intro` → 4–6 × (`chapter` → `grammar`/`vocab`/`exercise` mix, `pronunciation` where useful) → `wrapup` → `quiz` → 12–15 exercises, ≥3 types, EN+FR everywhere, original sentences, `related` ids that exist, `bookRefs` pointing at real pages (verify in the reader).

- [ ] **Step 1: Failing coverage test** (`content/specials/index.test.ts`): for each registered special — id `sp-<slug>`, `special.slug` matches id, 4–6 chapters, exactly one `wrapup`, exactly one `quiz`, quiz exercises ≥12 and ≥3 types, EN+FR present on every title/goal/explanation/prompt, every `related` id exists in `lessons`, every `bookRefs[].book` exists in `lib/books.ts`, every exercise id unique within the special, multipleChoice `answer` index valid, fillBlank answers non-empty, vocab ids prefixed `sp-<slug>-`, `collectAudioJobs` covers each vocab `german`.
- [ ] **Step 2:** run → FAIL (no specials registered → "at least 4 pilot specials" check fails).
- [ ] **Step 3:** author the four pilots (use forked agents for drafting, then review each in full yourself before merging): Modalverben (A1–A2), Konjunktiv II (B1), Farben & Kleidung (A1), Wortstellung (A2). Each is deep (see spec: 4–6 chapters with explanation, tables as example lists, usage contrasts, common mistakes, practice, then the 12–15-question quiz).
- [ ] **Step 4:** PASS, typecheck. Commit `feat: pilot special courses (Modalverben, Konjunktiv II, Farben & Kleidung, Wortstellung)`.
- [ ] **Step 5 (review gate):** browser-check the pilots end to end, then pause for the user to review quality before scaling (the user instructed "write the plan and implement"; if the pilots look right in the browser pass, continue to Task 7 without waiting).

---

### Task 7: Remaining 28 courses (parallel batches)

**Files:**
- Create: `content/specials/<slug>.ts` × 28; update `meta.ts` and `index.ts` per batch

- [ ] **Step 1:** Batch A (Verbs): trennbare-verben, perfekt, praeteritum, passiv, reflexive-verben, verben-praepositionen. Batch B (Cases + Sentences): genus, plural, vier-faelle, adjektivendungen, wechselpraepositionen, negation, konnektoren, relativsaetze, infinitiv-zu, indirekte-rede. Batch C (Words): familie, koerper-gesundheit, essen-restaurant, wohnen-moebel, zahlen-geld-zeit, reisen-wege, arbeit-berufe, wetter-natur. Batch D (Life): modalpartikeln, falsche-freunde, briefe-emails, redewendungen. Each batch is forked agents (one course per agent, each given the spec entry, a finished pilot as the model file, and the coverage test), then the coordinator runs `npx vitest run content/specials` and `npm run typecheck` per batch and reads every file.
- [ ] **Step 2:** Per batch: fix test failures, FR proofreading pass, commit `feat: special courses — <batch name>`.
- [ ] **Step 3:** After all batches: raise the coverage threshold in `content/specials/index.test.ts` to `specials.length >= 25` (target 32) and assert every catalog slug in `meta.ts` has a course. Commit.

---

### Task 8: Audio generation

- [ ] **Step 1:** `npm run audio` (snapshot + Edge-TTS). Note the prerequisite (network). Spot-check count of new mp3s, then verify a sample vocab and a listenChoose item play in the browser.
- [ ] **Step 2:** Commit the new mp3s (`feat: audio for special courses`) — check repo size impact first (`git count-objects -vH`); if it exceeds what the repo comfortably holds, stop and report instead of committing.

---

### Task 9: Dictionary integration

**Files:**
- Modify: `lib/word-links.ts` / `WordDetail.tsx` (from the dictionary plan): "Learn more" links map verbs → specials (`perfekt`, `praeteritum`, `konjunktiv-2`, `passiv`), modal verbs → `modalverben`, separable verbs → `trennbare-verben`, reflexive → `reflexive-verben`, nouns → `plural`/`genus`, adjectives → `adjektivendungen`; `lessonSentences` also searches special examples; `TENSE_GUIDE.specialSlug` becomes a real link.
- Test: `lib/word-links.test.ts` extension.

- [ ] **Step 1:** Failing test: for `gehen`'s verb entry the Learn-more list contains `/specials/perfekt`; for `können` contains `/specials/modalverben`. **Step 2–4:** implement, test, commit `feat: word pages link to special courses`.

---

### Task 10: Browser pass and release checks

- [ ] **Step 1:** `npm run typecheck && npm test && npm run build`; confirm `/specials` and each pilot route build.
- [ ] **Step 2:** At 1280×800 and 375×812: hub (filter chips, cards, progress), overview, run a full special end to end (answer quiz wrong, then right; confirm pass state and XP awarded once), review page, nav at 768/1024px, drawer, FR locale, a lesson with "Related special" chips, dictionary → special link.
- [ ] **Step 3:** Fix defects, rerun tests, commit `fix: specials polish from browser pass`. Do not deploy; report what is ready.

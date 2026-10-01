# Dictionary Word Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every dictionary search card open a word page (`/dictionary/<word>`) with meanings, lesson sentences, and a full verb conjugation (10 tenses with usage notes), noun case table and adjective comparison forms.

**Architecture:** A pure rule-based conjugator (`lib/conjugate.ts`) derives all forms from the three principal parts already in the dictionary data (`v`), with hard-coded tables for the irregular core. A server `app/dictionary/[word]/page.tsx` awaits `params` and renders a client `WordDetail` that loads shards in the browser through the existing `entriesFor`. Cards become stretched links. An offline audit script validates the conjugator against the `fm/` form index.

**Tech Stack:** Next.js 16 App Router (React 19), TypeScript, Tailwind v4 tokens, Zod, Vitest + Testing Library (jsdom), Node scripts.

**Spec:** `docs/superpowers/specs/2026-10-01-dictionary-word-pages-design.md`

## Global Constraints

- Next 16: `params` is a `Promise`; read `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/dynamic-routes.md` (done: server page `await params`, pass string to client component).
- Every user-facing string exists in EN and FR (`lib/ui-strings.ts` `UI` entries, `pick(en, fr, locale)` for content).
- No new hosted data, no server work, no growth of `public/dict/` shards.
- Dictionary data credit (Wiktionary / kaikki.org / CC BY-SA 4.0) stays visible on the word page.
- Tenses: Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I, Futur II, Konjunktiv I, Konjunktiv II, Imperativ, Passiv — all with an EN+FR usage note.
- `confidence:'check'` must produce a visible "check irregular forms" note, never silent errors.
- Audit target: >97% match of generated finite forms/participles against `fm/` for `confidence:'ok'` verbs, or remaining patterns listed as known gaps in the spec.
- Windows + Git Bash; CRLF warnings are harmless. Do not push or deploy.

## Review Focus

- Verb entry with no `v`, a 1/2-part `v`, or the 6-part outlier: page renders with the "check" note, no crash (Task 1, Task 4 tests).
- `sich` verbs and lemmas that are also nouns (homographs such as `Essen`/`essen`): one section per entry, reflexive pronouns inserted (Task 1, Task 5).
- Percent-encoded and umlaut/ß URLs (`/dictionary/Fu%C3%9F`, `/dictionary/M%C3%A4dchen`): decoded exactly once, not-found state for unknown words (Task 5 test).
- Form/English/fuzzy cards link to the *lemma*, not the typed form (Task 3 test).
- Audio/star buttons inside a card must not trigger navigation and must not be nested inside the link (Task 3 test).
- Nouns with missing `pl`/`gen` (e.g. `Wasser`, `Frau`) show "—" for plural or rule-based defaults instead of `undefined` (Task 4 test).

## File Structure

| File | Responsibility |
|---|---|
| `lib/conjugate.ts` | Pure conjugation engine; `conjugate()`; no I/O, no React |
| `lib/conjugate.test.ts` | Golden table of ~60 verbs × tenses |
| `lib/declension.ts` | Pure noun case table + adjective comparison; tested in `lib/declension.test.ts` |
| `content/grammar/tense-guide.ts` | Per-tense how/when/examples EN+FR + Zod schema; `tense-guide.test.ts` |
| `lib/word-links.ts` | `wordHref(entry)`; lessons-containing-word lookup `sentencesFor(word, forms)` |
| `components/dictionary/WordDetail.tsx` | Page: loads entries, sections |
| `components/dictionary/VerbPanel.tsx`, `NounPanel.tsx`, `AdjectivePanel.tsx` | POS panels |
| `components/dictionary/DictCardLink.tsx` | Stretched-link card wrapper (`ResultCard` consumes it) |
| `app/dictionary/[word]/page.tsx` | Server wrapper |
| `scripts/audit-conjugation.mjs` | Offline audit |

---

### Task 1: Conjugator core (`lib/conjugate.ts`)

**Files:**
- Create: `lib/conjugate.ts`
- Test: `lib/conjugate.test.ts`

**Interfaces:**
- Produces:
```ts
export type TenseId = 'praesens'|'praeteritum'|'perfekt'|'plusquamperfekt'|'futur1'|'futur2'|'konj1'|'konj2'|'imperativ'|'passiv';
export const TENSE_IDS: TenseId[];
export type Row = { pronoun: string; text: string };
export type Conjugation = {
  confidence: 'ok' | 'check';
  aux: 'haben' | 'sein' | 'both';
  separable?: string;
  reflexive: boolean;
  tenses: Record<TenseId, Row[]>;
  wuerde?: Row[];            // Konjunktiv II "würde + Infinitiv" alternative
  passivPraeteritum?: Row[]; // Passiv: Präteritum (wurde gemacht)
  passivPerfekt?: Row[];     // Passiv: Perfekt (ist gemacht worden)
};
export function conjugate(input: { lemma: string; v?: string }): Conjugation;
export function parsePrincipalParts(v: string | undefined): { third: string; pret: string; aux: 'haben'|'sein'|'both'; participle: string } | null;
```

- [ ] **Step 1: Write failing tests** covering at least these golden cases (each assertion is `rows.map(r=>r.text)` for the tense):
  - `sein` (`ist, war, ist gewesen`): Präsens `bin, bist, ist, sind, seid, sind`; Präteritum `war, warst, war, waren, wart, waren`; Perfekt `bin gewesen, bist gewesen, ist gewesen, sind gewesen, seid gewesen, sind gewesen`; Konj I `sei, seiest, sei, seien, seiet, seien`; Konj II `wäre, wärest, wäre, wären, wäret, wären`; Imperativ `sei, seid, seien Sie`; no Passiv (`tenses.passiv` empty array).
  - `haben` (`hat, hatte, hat gehabt`): Präsens `habe, hast, hat, haben, habt, haben`; Konj II `hätte, hättest, hätte, hätten, hättet, hätten`.
  - `werden` (`wird, wurde, ist geworden`): Präsens `werde, wirst, wird, werden, werdet, werden`; Präteritum `wurde, wurdest, wurde, wurden, wurdet, wurden`; Konj II `würde, würdest, würde, würden, würdet, würden`.
  - `können` (`kann, konnte, hat gekonnt`): Präsens `kann, kannst, kann, können, könnt, können`; Präteritum `konnte, konntest, konnte, konnten, konntet, konnten`; Konj II `könnte, könntest, könnte, könnten, könntet, könnten`; no Imperativ rows.
  - `wissen` (`weiß, wusste, hat gewusst`): Präsens `weiß, weißt, weiß, wissen, wisst, wissen`; Konj II `wüsste, wüsstest, wüsste, wüssten, wüsstet, wüssten`.
  - `machen` (`macht, machte, hat gemacht`): Präsens `mache, machst, macht, machen, macht, machen`; Präteritum `machte, machtest, machte, machten, machtet, machten`; Perfekt `habe gemacht, …`; Plusquamperfekt `hatte gemacht, hattest gemacht, …`; Futur I `werde machen, wirst machen, …`; Futur II `werde gemacht haben, …`; Konj I `mache, machest, mache, machen, machet, machen`; Konj II (= Präteritum) `machte, …`, `wuerde` rows `würde machen, …`; Imperativ `mach, macht, machen Sie`; Passiv `werde gemacht, wirst gemacht, wird gemacht, …`.
  - `gehen` (`geht, ging, ist gegangen`): Präteritum `ging, gingst, ging, gingen, gingt, gingen`; Perfekt `bin gegangen, …`; Konj II `ginge, gingest, ginge, gingen, ginget, gingen`; Imperativ `geh, geht, gehen Sie`.
  - `fahren` (`fährt, fuhr, ist gefahren` / `hat/ist gefahren` → both): Präsens `fahre, fährst, fährt, fahren, fahrt, fahren`; Imperativ `fahr, fahrt, fahren Sie`; Konj II `führe, führest, …` (umlaut a→ä? `fuhr` → `führe`).
  - `lesen` (`liest, las, hat gelesen`): Präsens `lese, liest, liest, lesen, lest, lesen`; Imperativ `lies, lest, lesen Sie`; Konj II `läse, läsest, läse, läsen, läset, läsen`.
  - `nehmen` (`nimmt, nahm, hat genommen`): Präsens `nehme, nimmst, nimmt, nehmen, nehmt, nehmen`; Imperativ `nimm, nehmt, nehmen Sie`.
  - `arbeiten` (`arbeitet, arbeitete, hat gearbeitet`): du `arbeitest`, ihr `arbeitet`; Präteritum `arbeitete, arbeitetest, arbeitete, arbeiteten, arbeitetet, arbeiteten`.
  - `heißen` (`heißt, hieß, hat geheißen`): du `heißt`; Präteritum du `hießt`.
  - `reisen` (`reist, reiste, ist gereist`): du `reist`.
  - `tanzen` (`tanzt, tanzte, hat getanzt`): du `tanzt`.
  - `anrufen` (`ruft an, rief an, hat angerufen`): `separable === 'an'`; Präsens `rufe … an, rufst … an, ruft … an, rufen … an, ruft … an, rufen … an` rendered as `ich rufe … an` => rows have `text: 'rufe an'`, `rufst an` …; Perfekt `habe angerufen`; Imperativ `ruf an, ruft an, rufen Sie an`.
  - `aufstehen` (`steht auf, stand auf, ist aufgestanden`): Präteritum `stand auf, …`.
  - `besuchen` (`besucht, besuchte, hat besucht`): no separable; participle unchanged.
  - `studieren` (`studiert, studierte, hat studiert`): regular.
  - `sich freuen` (`freut sich, freute sich, hat sich gefreut`): `reflexive === true`; Präsens `freue mich, freust dich, freut sich, freuen uns, freut euch, freuen sich`; Perfekt `habe mich gefreut, hast dich gefreut, …`.
  - Missing `v`: `conjugate({lemma:'blubbern'})` → `confidence:'check'`, regular weak rules still produced (`blubbere, blubberst, blubbert, blubbern, blubbert, blubbern`) with Perfekt `habe geblubbert`.
  - Two-part `v` (`'ist, war'`) → `confidence:'check'`, no throw.
  - 6-part outlier string → `confidence:'check'`, no throw.
  - `hat/ist gefahren` → `aux:'both'`, Perfekt rows show `habe/bin gefahren`.

- [ ] **Step 2:** Run `npx vitest run lib/conjugate.test.ts` → FAIL (module missing).
- [ ] **Step 3: Implement `lib/conjugate.ts`.** Algorithm:
  1. `parsePrincipalParts(v)`: split on `,` and trim; require 3 parts. Third part is `"hat X"`, `"ist X"`, `"hat/ist X"`, `"haben or sein X"`, or `"hat sich X"` — strip the leading auxiliary token(s) (`hat`, `ist`, `hat/ist`, `ist/hat`, `haben or sein`, `sein or haben`) to get `aux` and `participle` (also strip a leading `sich`). Pret part may end with ` sich` (`freute sich`) or a separable particle (`rief an`) — strip both, remember them. Third-person present may also be `ruft an` / `freut sich`.
  2. Reflexive: `lemma.startsWith('sich ')`; infinitive = lemma without `sich `.
  3. Separable: if `third` has a trailing particle token (`ruft an` → `an`) set `separable`; the stem work uses the first word.
  4. Hard-coded tables (full objects keyed by lemma) for `sein`, `haben`, `werden`, `wissen`, `können`, `müssen`, `dürfen`, `sollen`, `wollen`, `mögen` (and `möchte` as a separate pseudo-lemma used by the modals special) — returning all tenses by composing from their Präsens/Präteritum/Konj tables so Perfekt etc. still use the shared composer.
  5. Rule engine: `stemInf = infinitive minus -en/-n`; du-form: strong stem change from `third` (stem of third minus final `-t`), ending `-st`, or `-t` when stem ends in `s ß x z`, `-est` when stem ends in `d t` (and not already a changed `er`-vowel stem; `liest`, `hält` stay), ich = stem(inf) + `e`; wir/sie = infinitive; ihr = stem + `t`/`et`; Präteritum from `pret`: weak when it ends with `te`; endings per spec; strong du ending `-st`/`-est` (stems ending s,ß,x,z,sch? only `s ß x z` → `-est`... keep `hießt`: stem ending ß takes `-t`); Konj II: weak → pret; strong/irregular → pret stem + umlaut (a→ä, o→ö, u→ü, au→äu; none if already umlauted or e/i vowels) + `e` endings; plus `wuerde = würde + inf` rows; Konj I: stem(inf)+e endings (`-est`, `-e`, `-en`, `-et`, `-en`) (ich/er `-e`), `sein` hard-coded; Imperativ: du = stem (keep `e→i(e)` change from third; no umlaut: use infinitive stem with vowel from third if third's stem vowel is `i`/`ie` and inf vowel is `e`), `-e` dropped; ihr = ihr form; Sie = infinitive + ` Sie`; Passiv rows = werden(Präsens) + participle, `variants.passiv` for Präteritum and Perfekt are in the same tense? — `tenses.passiv` holds Präsens Passiv; `passivPraeteritum` and `passivPerfekt` hold the other two Passiv tenses.
  6. Composer helper `place(row, parts)`: separable → verb at end-of-clause (`rufe … an` → `text: 'rufe an'`), reflexive → pronoun after the verb for finite single-word forms (`freue mich`), and between auxiliary and participle for compound forms (`habe mich gefreut`, `werde mich freuen`).
  7. `confidence` is `'check'` when `v` is missing or parts < 3 or parts > 3, or when the lemma doesn't end in `-en`/`-n`/`-ern`/`-eln`; otherwise `'ok'`.
- [ ] **Step 4:** Run tests → PASS. Commit `feat: rule-based German verb conjugator with golden tests`.

---

### Task 2: Tense guide content + schema

**Files:**
- Create: `content/grammar/tense-guide.ts`
- Test: `content/grammar/tense-guide.test.ts`

**Interfaces:**
- Consumes: `TenseId`, `TENSE_IDS` from `lib/conjugate.ts`.
- Produces:
```ts
export const TenseGuideEntrySchema; // zod
export type TenseGuideEntry = { how: {en:string;fr:string}; when: {en:string;fr:string}; examples: {de:string;en:string;fr:string}[]; specialSlug?: string };
export const TENSE_GUIDE: Record<TenseId, TenseGuideEntry>;
```

- [ ] **Step 1: Failing test:** for every `TENSE_IDS` entry, `TENSE_GUIDE[id]` parses with the schema; `how`, `when` have non-empty EN and FR; `examples.length === 2`; every example has non-empty `de`, `en`, `fr`; `specialSlug` values (if present) are in a fixed allow-list `['perfekt','praeteritum','konjunktiv-2','passiv','modalverben','indirekte-rede']` (the spec's slugs; kept as a const so Plan 2 can validate against the real registry).
- [ ] **Step 2:** run → FAIL. **Step 3:** write the content: for each tense, one sentence on formation (e.g. Perfekt: "haben/sein in the present + past participle at the end"), 2–4 sentences on use (Präteritum = writing and narration, Perfekt = everyday speech, Konjunktiv II = polite wishes/unreal conditions with `würde`-form for most verbs, Konjunktiv I = reported speech in news, Futur I = plans/predictions but Präsens + time word is more common, Futur II = assumption about completed action, Plusquamperfekt = action before another past action, Imperativ = commands to du/ihr/Sie, Passiv = process focus, `werden` + participle), and two example sentences with EN+FR (original sentences). FR must be proper French with accents.
- [ ] **Step 4:** PASS. Commit `feat: tense guide content (EN/FR) with schema test`.

---

### Task 3: Word links, lesson-sentence lookup and card link

**Files:**
- Create: `lib/word-links.ts`, `lib/word-links.test.ts`
- Create: `components/dictionary/DictCardLink.tsx`, `components/dictionary/DictCardLink.test.tsx`
- Modify: `components/dictionary/DictionaryView.tsx` (ResultCard, ~line 150–250)
- Modify: `lib/ui-strings.ts` (add keys)

**Interfaces:**
- Produces:
```ts
export function wordHref(headword: string, q?: string): string; // `/dictionary/${encodeURIComponent(w)}` + optional `?q=`
export function lemmaOf(hit: { entry: {w:string}; kind: string }): string; // entry.w for every kind (hits already carry the lemma entry)
export function lessonSentences(forms: string[], limit?: number): { de: string; en: string; fr?: string; lessonId: string; lessonTitle: string }[];
```
- UI keys added: `dictOpenWord`, `dictBackToSearch`, `dictWordNotFound`, `dictInOurLessons`, `dictMeanings`, `dictCheckForms`, `dictCaseTable`, `dictComparison`, plus the tense/case labels needed by Tasks 4–5 (listed there).

- [ ] **Step 1: Failing tests.** `wordHref('Fuß')` === `/dictionary/Fu%C3%9F`; `wordHref('gehen','gegangen')` === `/dictionary/gehen?q=gegangen`; `lessonSentences(['gehe','gehst','geht','gehen','ging','gegangen'])` returns ≥1 sentence each containing a form as a whole word (word-boundary, case-insensitive, umlaut-safe), capped by `limit` (default 6); `DictCardLink`: renders one `<a href="/dictionary/gehen">`, the star and listen buttons are siblings (not descendants) of the anchor, clicking them does not change `window.location` and calls their handlers; keyboard: anchor has `aria-label` containing the headword.
- [ ] **Step 2:** run → FAIL.
- [ ] **Step 3: Implement.** `lessonSentences` iterates `lessons` and `allVocab`-style steps: vocab `example.de`, grammar `examples[].de`; match with a regex built from escaped forms using `(?<![\p{L}])form(?![\p{L}])` and `u` flag. `DictCardLink` renders `<article class="relative …">` with an `<a class="absolute inset-0" aria-label=…>` stretched link and children positioned `relative z-10` only for the buttons (`pointer-events-auto`), so card body is click-through to the link. In `ResultCard`, wrap with it, link target `wordHref(entry.w, kind === 'exact' ? undefined : …)`; keep `q` back-link param as the current query (`?q=` is for back-navigation: pass `from` through `useSearchParams` in `WordDetail`, so cards link to `/dictionary/<lemma>?q=<current query>`). Hover state: card gets `hover:border-primary hover:shadow-pop`.
- [ ] **Step 4:** run tests + `npm run typecheck` → PASS. Commit `feat: clickable dictionary cards (stretched link) + word-link helpers`.

---

### Task 4: Declension helpers + verb/noun/adjective panels

**Files:**
- Create: `lib/declension.ts`, `lib/declension.test.ts`
- Create: `components/dictionary/VerbPanel.tsx`, `NounPanel.tsx`, `AdjectivePanel.tsx`, `components/dictionary/panels.test.tsx`
- Modify: `lib/ui-strings.ts`

**Interfaces:**
- Consumes: `conjugate`, `TENSE_GUIDE`, `speakText` (`lib/audio`), `DictEntry` (`lib/dictionary`).
- Produces:
```ts
export type CaseRow = { case: 'nom'|'acc'|'dat'|'gen'; sing: string; plur: string };
export function nounCases(e: { w: string; g?: string; pl?: string; gen?: string }): { rows: CaseRow[]; note?: 'plural-missing' | 'gender-ambiguous' };
export function comparison(e: { w: string; v?: string }): { positive: string; comparative: string; superlative: string; irregular: boolean; check: boolean };
```

- [ ] **Step 1: Failing tests.** `nounCases({w:'Haus',g:'n',pl:'Häuser',gen:'Hauses'})`: nom `das Haus / die Häuser`, acc same, dat `dem Haus / den Häusern`, gen `des Hauses / der Häuser`. `Student` (`m`, pl `Studenten`, gen `Studenten`): acc sing `den Studenten`, dat plural `den Studenten` (ends in n → no extra -n). `Auto` (`n`, pl `Autos`): dat plural `den Autos`. `Frau` (`f`, no gen): gen `der Frau`. `Wasser` (no pl): `note:'plural-missing'`, plural column `—`. `Nachbar` with `g:'m/n'` → uses first gender, `note:'gender-ambiguous'`. `comparison`: `schön` (from `v:'schöner, am schönsten'`) → `schön / schöner / am schönsten`, `check:false`; `gut` → `gut / besser / am besten`, irregular; `alt` → `älter / am ältesten`; `groß` → `größer / am größten`; `teuer`, `dunkel` drop the e (`teurer`, `dunkler`) — when `v` is present it wins; if absent, apply regular + `check:true`.
- [ ] **Step 2:** FAIL. **Step 3:** implement `declension.ts` (article table: m `der/den/dem/des`, f `die/die/der/der`, n `das/das/dem/des`, plural `die/die/den/der`; dative plural + `n` unless ends in `n`/`s`; gen from data else `-s`/`-es` for m/n (use `-es` if the word ends in `s ß x z sch` or is one syllable? — one-syllable rule only used when data is missing: `-es`), f unchanged). Components: `VerbPanel` with tense tabs (`role="tablist"`, buttons `role="tab"`, horizontal scroll, sticky label), usage note (`how`, `when`, examples with `speakText`), the table (pronoun | form | play button), aux note when `aux==='both'`, separable note, `check` banner (`dictCheckForms`), variant table for Konj II `würde`-form and passive past forms. `NounPanel`/`AdjectivePanel` render tables. Component tests: VerbPanel for `gehen` shows 10 tabs, switching to Perfekt shows `bin gegangen`; for entry without `v` shows the check banner; NounPanel for `Wasser` shows `—` and no literal `undefined`.
- [ ] **Step 4:** PASS + typecheck. Commit `feat: noun/adjective helpers and verb/noun/adjective panels`.

---

### Task 5: Word page route and `WordDetail`

**Files:**
- Create: `app/dictionary/[word]/page.tsx`
- Create: `components/dictionary/WordDetail.tsx`, `components/dictionary/WordDetail.test.tsx`
- Modify: `lib/ui-strings.ts`, `components/shell/TopNav.tsx` (active state for `/dictionary/*` if it matches by exact path — verify)

**Interfaces:**
- Consumes: `loadMeta`, `entriesFor` (`lib/dictionary`), `lessonSentences` (`lib/word-links`), `VerbPanel`, `NounPanel`, `AdjectivePanel`, `allVocab`, `ttsSrc`, `playAudio`, `speakText`.
- Page: `export default async function Page({ params }: { params: Promise<{ word: string }> }) { const { word } = await params; return <WordDetail word={decodeURIComponent(word)} />; }` — check that Next already decodes segments; if it does, do NOT double-decode (a word containing `%` would break). Verify with a manual request and the umlaut test below; pass the string exactly as the framework provides it if it is already decoded.

- [ ] **Step 1: Failing test (WordDetail, jsdom, `fetch` mocked to a tiny shard fixture):** loading `gehen` shows header `gehen`, the verb badge, English gloss, the Perfekt tab content; `Student` shows noun table; unknown `Xyzzyfoo` shows not-found state with a link back to `/dictionary`; `fußball` style lesson-only word renders from lesson vocab (no dictionary data); the Wiktionary/CC BY-SA credit renders; "In our lessons" lists one lesson sentence with a link to `/lesson/<id>/learn`... use `/lesson/<id>/review`? Use the lesson learn page.
- [ ] **Step 2:** FAIL. **Step 3:** implement. `WordDetail` (client): `useEffect` → `loadMeta` → `entriesFor(meta, word)`; if empty, try the lowercase/Capitalised variants (nouns are capitalised; users may land on lowercase), then lesson vocab (`fold`ed `german` match) and render `lessonToEntry`; if still empty, not-found. Sections per the spec (header, meanings + Wiktionary example, in-our-lessons, POS panel, learn-more links, credit). Back link: `useSearchParams().get('q')` → `/dictionary?q=…`, else `/dictionary`.
- [ ] **Step 4:** PASS; `npm run typecheck`; `npm run build` to confirm the route compiles (App Router, server+client split). Commit `feat: dictionary word page with verb, noun and adjective panels`.

---

### Task 6: Conjugation audit script + fixes

**Files:**
- Create: `scripts/audit-conjugation.mjs`
- Modify: `lib/conjugate.ts` (fixes found by the audit), `lib/conjugate.test.ts` (regression cases for fixed patterns), spec (known gaps list)

**Interfaces:**
- Consumes: `conjugate` (run with `tsx`, like `scripts/snapshot.mjs`), `public/dict/de/*.json`, `public/dict/fm/*.json`.

- [ ] **Step 1:** Implement the script: load all `de/` shards, filter `p === 'verb'`; for each verb with `confidence:'ok'`, collect the single-word finite forms from Präsens, Präteritum, Konjunktiv I/II (when synthetic), Imperativ du/ihr, and the participle; check that each form exists as a key in the `fm/` shard for its folded key and maps to this lemma; print totals, match rate, and the top 25 mismatch patterns (grouped by form suffix + tense). Add `"audit": "tsx scripts/audit-conjugation.mjs"` to `package.json`.
- [ ] **Step 2:** Run `npm run audit`. Record the baseline. Fix systematic rule errors in `lib/conjugate.ts` (each fix gets a golden-test case), re-run until the rate on `ok` verbs is >97% or remaining patterns are explainable (e.g. forms Wiktionary omits). Write remaining known gaps into the spec (`## Known gaps` section).
- [ ] **Step 3:** `npm test` all green. Commit `feat: conjugation audit script and rule fixes`.

---

### Task 7: Browser pass, strings sweep, wrap-up

**Files:**
- Modify: whatever the pass finds.

- [ ] **Step 1:** `npm run typecheck && npm test && npm run build`.
- [ ] **Step 2:** Start the dev server; in the browser at 1280×800 and 375×812 visit `/dictionary?q=gehen` (click the card), `fahren`, `anrufen`, `sich freuen`, `sein`, `können`, `Haus`, `Student`, `schön`, `house` (English hit → German lemma), `gegangen` (form → `gehen`), an unknown word, and reload on a word URL. Check: tabs scroll on phones without page-level horizontal overflow, 40px+ targets, no `undefined`/`NaN`, FR locale shows French chrome and tense notes, audio buttons work, back link restores the search.
- [ ] **Step 3:** Fix defects, rerun tests, commit `fix: word page polish from browser pass`.

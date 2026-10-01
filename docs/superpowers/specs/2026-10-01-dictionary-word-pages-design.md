# Dictionary word pages — design

Date: 2026-10-01 · Status: awaiting user review · Sub-project B of 2 (sub-project A: [special courses](2026-10-01-special-courses-design.md)). Build B first: specials link to word pages.

## Goal

Search-result cards on `/dictionary` become clickable and open a word page (`/dictionary/<word>`) with fuller explanations and use cases. For verbs the page shows the conjugation in every tense, with a short "when to use it" note for each. Nouns get a case table, adjectives their comparison forms.

Success criteria
- Every result card (exact, form, English, prefix, fuzzy) opens the right word page; the page works on direct load, refresh and share.
- A verb page shows Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I, Futur II, Konjunktiv I, Konjunktiv II, Imperativ and Passiv, each with a usage note in EN and FR.
- Generated forms are right for the irregular core (sein, haben, werden, wissen, modals, gehen, nehmen, fahren, denken, separable, inseparable, -ieren) and for the great majority of the ~9.6k dictionary verbs, measured by an audit (below).
- No new data hosted, no server work, no growth of the dictionary shards.

## Out of scope (v1)

- French glosses (the source data is English-only; UI strings are EN+FR).
- More Wiktionary example sentences (would grow shards; revisit after a size audit).
- AI "explain this word" button; saving arbitrary dictionary words to the user's list.
- Zustandspassiv and archaic forms (dative -e, genitive of verbs).

## Existing code this builds on

- `lib/dictionary.ts`: `DictEntry { w, p, g?, pl?, gen?, v?, ipa?, s[], x? }`, `entriesFor(meta, word)`, `searchDictionary(query)` → `DictHit { entry, kind, via? }`.
- `components/dictionary/DictionaryView.tsx`: renders the result cards; deep link `?q=`; lesson words are rendered with the same card (`lessonToEntry`).
- Data check (2026-10-01): of 9,639 verb entries, 9,573 have three principal parts in `v` (3rd-person present, Präteritum, auxiliary + participle), e.g. `fährt, fuhr, hat/ist/haben or sein gefahren`. Only 44 lemmas start with `sich`.
- `public/dict/fm/` maps every inflected form to its lemma (334k forms). It is used here for an offline audit, not at runtime.

## Design

### 1. Routing and cards

- New route `app/dictionary/[word]/page.tsx` (server component, awaits `params`) rendering a client `WordDetail`. Read `node_modules/next/dist/docs/` for the Next 16 dynamic-route and `params` conventions before writing it (AGENTS.md).
- The word page loads shards in the browser through `entriesFor`, exactly like search. Homographs (e.g. a noun and a verb with the same spelling, or two genders) render as one section per entry, anchored by part of speech.
- Card links: exact/prefix/fuzzy hits link to the headword; form hits link to the lemma (the "via" form is shown as "form of …"); English hits link to the German lemma. Lesson-only words (not in the dictionary) link to the same route and render from lesson vocab data.
- Cards use the stretched-link pattern: the whole card is one `<Link>`; the audio and star buttons sit above it and stop propagation, so there are no nested interactive elements. Keyboard focus and `aria-label` follow the link.
- The back link returns to `/dictionary?q=…` so the search state survives.
- Unknown word → friendly not-found state with a search box.

### 2. Page sections

1. Header: word, article/gender tag, part of speech, IPA, audio (pre-generated mp3 via `ttsSrc`, else `speakText`).
2. Meanings: English glosses (`s`) and the Wiktionary example (`x`).
3. "In our lessons": every lesson/special sentence that contains the word or one of its forms (search `example.de` across lessons), each linking to its lesson. This is the main source of extra use cases without growing the data.
4. Part-of-speech panel (below).
5. Learn more: links to related lessons and specials (static map, e.g. Perfekt special for verbs, plural special for nouns).
6. Footer: Wiktionary / kaikki.org / CC BY-SA 4.0 credit (reuse the existing text).

### 3. Verb panel and conjugator

`lib/conjugate.ts` is a pure function `conjugate({ lemma, v? }) → Conjugation`; no I/O, no React.

Output: `{ confidence: 'ok' | 'check', aux: 'haben' | 'sein' | 'both', separable?: string, reflexive: boolean, tenses: Record<TenseId, Row[]> }`, where a row is `{ pronoun, text }` for ich, du, er/sie/es, wir, ihr, sie/Sie (Imperativ has du, ihr, Sie).

Rules (derived from the three principal parts):
- Stem change: the 3rd-person form gives the du/er stem (`fährt` → du fährst, er fährt; `liest` → du liest; stems ending in s, ß, x, z take `-t`). Modals and `wissen` use the ich = er pattern.
- Präteritum: weak (form ends in `-te`) takes `-te, -test, -te, -ten, -tet, -ten`; strong takes bare form for ich/er, `-st`/`-est`, `-en`, `-t`/`-et`, `-en`.
- Perfekt/Plusquamperfekt: auxiliary + participle from `v`; `hat/ist/haben or sein` yields both auxiliaries, shown with a note.
- Futur I: werden + infinitive; Futur II: werden + participle + haben/sein.
- Konjunktiv II: strong verbs and the common irregulars use the synthetic form (Präteritum stem + umlaut + `-e`: ginge, wäre, hätte, käme); weak verbs use the Präteritum; the page also shows the everyday `würde + Infinitiv` form with a note.
- Konjunktiv I: infinitive stem + `-e` endings (sein: sei, seiest…).
- Imperativ: du (stem, strong `e→i` kept: gib, lies; no umlaut), ihr, Sie.
- Passiv: werden + participle in Präsens, Präteritum and Perfekt (`ist … worden`); only for verbs where it makes sense (not sein, haben, modals, werden).
- Separable (prefix read from `v`: `ruft an` → `an`): prefix goes to the end in Präsens, Präteritum, Imperativ and main clauses, with a note on subordinate clauses; participles come from `v`.
- Reflexive (lemma starts with `sich`): pronoun inserted (mich, dich, sich, uns, euch, sich).
- Hard-coded tables for sein, haben, werden, wissen and the six modals plus `möchte-` forms.
- `confidence: 'check'` when `v` is missing or has fewer than three parts, or when a rule cannot be applied; the page then shows a visible "Check irregular forms" note instead of presenting the table as certain.

Usage notes live in `content/grammar/tense-guide.ts`: for each tense, `how` (formation), `when` (uses), two fixed examples, all EN and FR, plus a link to the matching special. A Zod schema checks that every tense has all fields in both languages.

UI: tense tabs (a segmented control that scrolls horizontally on phones, with a sticky current-tense label), a table per tab, the usage note above it, and a play button on each form using `speakText` (browser TTS; forms are not pre-generated).

### 4. Noun and adjective panels

- Noun: a case × singular/plural table. Nominative/accusative/dative/genitive of the article plus the noun, using `g`, `pl` and `gen` from the data; dative plural adds `-n` unless the plural ends in `-n` or `-s`; `gen` falls back to `-s`/`-es` only when the data has none. Weak nouns (Student → Studenten) are shown correctly when `gen` supplies the `-en` form.
- Adjective: positive / comparative / superlative with the regular rule, a short irregular table (gut, viel, gern, hoch, nah) and an umlaut list (alt, jung, groß, lang, kurz, kalt, warm, stark, arm, klug…). Adjectives outside these lists show the regular forms with the same "check" note.

## Verification

- `lib/conjugate.test.ts`: golden table of about 60 verbs × all tenses (the irregular core above, plus ~30 common regular and strong verbs and every verb used in lessons A1–B1).
- `scripts/audit-conjugation.mjs` (offline, not shipped): runs the conjugator over all dictionary verbs and checks each generated finite form and participle against the `fm/` index (form → lemma). It prints the match rate and the top mismatch patterns; rules are fixed until the rate on verbs with `confidence: 'ok'` is above 97%, or the remaining patterns are explicitly listed as known gaps in the spec.
- `tense-guide` schema test (EN+FR complete).
- Component test for the card: link target per hit kind; audio and star do not navigate.
- Browser pass at 1280×800 and 375×812: `gehen`, `fahren`, `anrufen`, `sich freuen`, `sein`, `können`, `Haus`, `Student`, `schön`, an English query (`house`), a form query (`gegangen`), an unknown word, direct load and refresh of a word URL.

## Risks

- Rules are only as good as the principal parts; mitigated by the audit and the visible "check" state instead of silent errors.
- Several Wiktionary entries mark both auxiliaries (`hat/ist`); the page shows both rather than choosing.
- The dictionary is a static export of Wiktionary, so rare words may have thin senses; the page says so only through its content, not with error states.

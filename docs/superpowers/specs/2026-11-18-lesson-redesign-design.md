# Lesson redesign: from word cards to real teaching

Status: draft for Sasha's review. Branch `feat/lesson-redesign`.

## 1. Why

Sasha's feedback: lessons are "one word, one example", monotonous, "just Wortschatz". The data agrees.

- 95 lessons contain 1,105 `vocab` steps, 259 grammar notes and 1,031 exercises.
- A grammar note averages 68 words and 2.4 example sentences. No tables, no contrast, no sentence breakdown.
- Example, B1 lesson 6 (connectors): ten one-word cards, then three short grammar paragraphs, then ten exercises.

The reference Sasha showed (a TikTok carousel of handwritten B1 notes, 6.4k likes, 5.6k saves) teaches differently. One page covers one topic completely: the whole pronoun table, sentences broken into colour-labelled parts, side-by-side contrasts, many examples with translations, and "when to use it" notes. People save it because it explains how German works.

Goal: a complete beginner who finishes the course can understand and use everyday German at A1 to B2, and the app teaches the way those reference notes do. The original wording, examples and layout of that post are not reused; only the teaching approach is.

## 2. Research and what it changes

Sources read in full (Goethe-Institut exam-goal handbooks; extracted text, not summaries):

- [Goethe-Zertifikat A1: Start Deutsch 1, Prüfungsziele](https://goethe.de/pro/relaunch/prf/et/Pruefungsziele_Testbeschreibung_A1_SD1.pdf), chapters on themes, speech acts and grammar.
- [Goethe A2 (Fit in Deutsch 2) Prüfungsziele](https://goethe.de/pro/relaunch/prf/de/Pruefungsziele_Testbeschreibung_A2_Fit2.pdf), grammar inventory (this is the 2013 edition for the earlier exam; the current exam is based on the 2015 handbook, which I could not locate).
- [Goethe-Zertifikat B2 Handbuch](https://www.goethe.de/pro/relaunch/prf/sr/Pruefungsziele_Testbeschreibung_B2.pdf), exam aims and tasks (2007 edition; the grammar list sits in Profile deutsch, which I could not open).

Sources found but only partly readable: Profile deutsch grammar overview A1 to B2 (a Word grid; the level columns were lost in extraction, so I do not use it to assign levels); Goethe B1 handbook (blocked, only sample sets reachable); the processability literature and retrieval-practice summaries (secondary or vendor sources, flagged where used).

What the sources establish, and the rule it gives us:

| Finding | Source | Rule for the app |
|---|---|---|
| "Grammar is not taught for its own sake but as the repertoire for carrying out language acts." At A1, being understood matters more than correct forms. | Goethe A1 | Every lesson is built around a can-do and a real situation; rules appear only when the situation needs them. |
| Konjunktiv II (polite requests like *ich möchte*, *ich hätte gern*, *würde gern*) is vital at A1 but taught "not systematically, only as lexical units". | Goethe A1 | Chunks first, rule later. Teach whole phrases as units before any table. |
| A1 themes: person, housing, environment, travel, food, shopping, services (post, phone, bank, police), education and learning, work, leisure. A1 speech acts: greet, introduce, ask, request, thank, apologise, invite, agree, describe, report. | Goethe A1 | Curriculum map (section 5) checks every theme and act against a lesson. Gaps listed there. |
| A1 grammar inventory includes the present of all listed verbs, selected Perfekt forms (*ich habe schon gegessen*), war/hatte, modal verbs, separable verbs, the nominative, accusative and dative with selected verbs (*helfen, danken, gehören, es geht mir gut*), personal pronouns in accusative and dative, two-way prepositions, *nicht/kein*, both question types, *und/oder/aber/denn/dann/wenn*. | Goethe A1 | Official checklist for the A1 syllabus. Our A1 currently lacks a first Perfekt and has no consolidated pronoun and dative-verb teaching. |
| A2 adds the Perfekt and Präteritum broadly, adjective endings, comparison, reflexive and reciprocal pronouns, *dass/weil/wenn* clauses, *seit/bis/von … bis*, Wortbildung (*-er, -ung, -in, un-, -los*). | Goethe A2 | Matches our A2 well. Add Wortbildung practice and work, services and messages themes. |
| B2 is marked by effective argumentation, endurance in discourse and language awareness; the tasks are a ~200-word text, a 3 to 4 minute statement, and a negotiation. | Goethe B2 | B2 lessons end in producing an argument or a message, not in answering gap-fill items. |
| Word-order development in German follows a fairly fixed path (canonical order, then fronting and verb-second, then verb-final in subordinate clauses). Instruction cannot skip it. Contested: dynamic approaches reject universal stages. | Pienemann and the ZISA project, via Wikipedia and research summaries | Keep our order: V2, questions, modal + infinitive (*Satzklammer*), separable verbs and Perfekt, then *weil/dass*, then relative clauses and passive. |
| Combining comprehensible input with explicit teaching beats input alone. Spaced retrieval beats re-reading. A teacher synthesis argues the order input, then processing, then rehearsal, then retrieval; retrieving before something is understood weakens learning. | Secondary sources (a teaching-research guide, a 2026 teacher blog). Not primary studies. | Each block: situation, explanation, practice immediately, review later. The existing review queue provides spacing. |

## 3. Principles

1. **Situation first.** A short dialogue or text opens each topic. New words appear inside it.
2. **One screen, one idea, fully explained.** A rule screen shows the pattern as a table, a colour-labelled sentence, a contrast and the usual mistakes.
3. **Words are learned in groups and in sentences**, never as an endless run of single cards.
4. **Practise at once.** Two to four exercises follow every rule screen, not ten at the end.
5. **Chunks before rules at A1.** Politeness and survival phrases are taught whole.
6. **Output matters.** Each lesson ends with a short production task (say it, write it).
7. **Keep what works:** colour grammar (der blue square, die pink circle, das yellow triangle), EN/FR, audio, the review queue, the path, exams, specials, Kumpel.

## 4. Lesson anatomy

A new-format lesson is a sequence of steps. Target length 25 to 35 steps, about 20 to 25 minutes.

0. `chapter` steps mark each topic block (they drive the contents list and the progress bar).
1. `intro`: the can-do ("Ich kann …"), goals, and the scene. (exists)
2. `situation`: a dialogue or text, 4 to 8 lines, with audio per line, translation, key words highlighted and a key-word list. One comprehension exercise follows as an ordinary `exercise` step. **new**
3. `wordgroup`: 4 to 8 related words on one screen, each with article/gender colour, audio and an example. One or two per lesson. **new**
4. `grammar` (rich): the rule block. It carries a one-line "use it when" lead, one or more tables, sentence breakdowns with colour-coded roles, a side-by-side contrast, common mistakes, and at least six examples grouped by pattern. **extended**
5. `exercise` ×2 to 4: immediately after each rule block. (exists; two new types listed below)
6. Repeat 4 and 5 for each rule (two or three per lesson).
7. `pronunciation`: sound or stress focus. (exists)
8. `exercise`: mixed review, including one listening and one production item.
9. `wrapup` with a **summary card**: the save-worthy page (tables and key sentences), the equivalent of a good set of notes. **extended**

Quality bar, enforced by `content/quality.ts` for every lesson that contains a `situation` step: a can-do line; starts with an intro; no run of more than two single `vocab` steps; every `grammar` step has a table or a sentence breakdown and at least six examples; no more than four exercises in a row before the next teaching step (eight in the final mixed review); French for everything the learner reads (including table headers and cells); the wrapup has a summary card.

## 5. Data model changes (backwards compatible)

Old lessons keep working and keep their ids (ids are progress keys).

- `GrammarNote` gains optional fields: `lead`, `tables[]` (title, headers, rows, highlighted column, plus `headersFr` and `rowsFr`, the parallel French table), `anatomy[]` (a sentence split into parts with roles: subject, verb, accusative, dative, time, place, connector, other, plus EN/FR gloss), `contrast` (two columns with label, examples and a note), `mistakes[]` (wrong, right, why). All have French fields.
- New step `situation`: `title`, `setting`, `lines[] {who, de, en, fr}`, `words: VocabItem[]`.
- New step `wordgroup`: `title`, `note`, `items: VocabItem[]`.
- `wrapup` gains optional `card {title, sections[] {heading, rows[][] | lines[]}}`.
- A helper `stepVocab(step)` returns the vocabulary of any step. It replaces the ad hoc `vocab`/`pronunciation` flat-maps (dictionary, games, review, speaking pool, word links, lesson results, path).
- `content/author.ts` holds `g()`, `line()` and `word()` helpers so lesson files stay short.
- `content/quality.ts` implements the quality bar below as code; `content/quality.test.ts` runs it on every lesson that contains a `situation` step.
- New exercise types: `errorSpot` (find and fix the wrong sentence) and `reply` (choose the natural reply in a dialogue). Added after the first pilot, only if the pilot shows a need.

## 6. Curriculum map

Existing structure is kept: A1 19, A2 24, B1 26, B2 26 lessons, with the order of grammar above. The audit against the official inventories found these gaps. New lessons are added, none removed.

**A1 (19 to 26 lessons).** New lessons:
1. *Sounds and the alphabet*: letters, umlauts, ch, sch, z, w, stress, spelling aloud. First in the course. A beginner needs this before lesson 1's spelling.
2. *Sorry? Slowly, please*: survival phrases (Wie bitte? Langsamer, bitte. Wie sagt man …?), thanks, apologies, greetings by time of day.
3. *Services and the phone*: post office, bank, police, calling and leaving a message (official theme "Dienstleistungen").
4. *Work, school and learning German*: workplace, school subjects, the course (official themes "Arbeit" and "Erziehung/Lernen").
5. *Short messages and forms*: SMS, postcard, e-mail of 20 to 30 words, a registration form (the A1 writing tasks).
6. *Yesterday*: first Perfekt of selected verbs, war/hatte (official A1 list).
7. *Start Deutsch 1 check*: the four skills in exam format as a capstone.
Also folded into existing lessons: personal pronouns in accusative and dative (mich/dich, mir/dir), dative verbs (helfen, danken, gehören, gefallen), *und/oder/aber*.

**A2 (24 to 30).** New: *At work*, *Services and appointments* (doctor, authorities), *Travel and hotel*, *Writing e-mails and messages*, *Media and internet*, *A2 check*. Existing grammar lessons stay; Wortbildung gets its own practice block.

**B1 (26 to 28).** New: *Telling a story* (narrative in Präteritum and Perfekt with connectors), *B1 check*.

**B2 (26 to 27).** New: *B2 check* (writing 200 words, 3 minute statement, negotiation).

Each existing lesson is also **rebuilt in the new anatomy**, using the same id, theme and exercises as raw material. Every lesson gets a can-do, a situation, grouped words, rich rule blocks and a summary card.

## 7. Rollout

1. **Pilot (done on this branch):** the engine (types, steps, contents list, player, vocab helper, audio script, quality bar, tests) plus two rebuilt lessons: A1 lesson 1 and B1 lesson 6 (connectors). Checked in the browser at tablet width. Waiting for Sasha's review before the rollout.
2. **A1 pass:** rebuild A1 lessons, add the seven new ones, then a sample audio check (`npm run audio`).
3. **A2, B1, B2 passes**, one level at a time.
4. **Exams and specials** reuse the new rule blocks where they overlap.

Each pass is verified by: schema and quality-bar tests, the full test suite, a look at the lessons in the browser (desktop and phone width), and EN and FR spot checks.

## 8. Risks and decisions

- **Volume.** About 100 lessons in two languages. Mitigation: a strict authoring guide produced from the pilots, one level per pass, quality-bar test as the gate.
- **French quality.** Written in parallel, flagged for Sasha's review as before.
- **Audio.** Clips are pre-generated files named by a hash of the text, and the player does not fall back to speech synthesis for them. The audio script now collects every German string of the new steps, but `npm run audio` has not been run for the pilots yet, so their new sentences are silent until it is (it needs network access to the TTS service).
- **Saved progress.** Rebuilding a lesson changes its number of steps, so a learner's completion percentage for that lesson can shift. Word and exercise ids that existed before are kept, so saved words and exercise results still match.
- **Copyright.** All content is original. Menschen and the TikTok notes are references for approach only.
- **Not in scope now:** new exercise engines beyond two types, voice scoring changes, the exams module.

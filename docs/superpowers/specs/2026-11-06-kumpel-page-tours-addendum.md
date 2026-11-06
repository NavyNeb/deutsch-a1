# Kumpel — page tours (addendum to the Kumpel design)

Status: approved by Sasha's direction, 2026-11-06 (feedback on PR #6) · extends `2026-11-06-kumpel-buddy-design.md`

## What Sasha asked for (their words, condensed)

The tour is not page aware: it always sends you back to the home page and repeats the general tour.
Instead, on **every page** Kumpel should offer a tour **of that page**, and the app as a whole should be
covered — special courses, exams and the rest — not only Heute.

## Decisions

1. **Per-page tours.** Every page that Kumpel appears on has its own guide: a purpose line, 2–4 steps and a few
   curated questions (EN/FR). The same steps are listed in the help panel and walked in the tour, so the panel and the
   tour can never disagree. A step may point at a real element (spotlight) or, when there is no good anchor or
   the anchor is not on screen, show as a centred card — it is never dropped, so the explanation is never lost.
2. **The panel's "Tour starten" tours the page you are on.** It never navigates.
3. **First visit to a page → Kumpel offers its tour.** A small card beside the buddy ("Tour starten" / "Später"),
   once per kind of page, after the first hello. It replaces the earlier text-only hint bubble. Heute is covered by
   the hello, so it gets no second offer. "Little hints" in Settings becomes "Page tours" and switches the offers off.
4. **The general app tour remains**, as "Tour of the app": Heute's steps plus the shell (navigation, search, the buddy). It is
   what the first hello and Settings → "Restart tour" start (these are the only tours that go to Heute).
5. **Coverage.** Kumpel now appears on all pages that sit inside the app shell: Heute, Weg, Üben (hub), games
   (Sprint, Audio-Call), the review queue, Sprechen, Schreiben, Specials (hub and a course), Bibliothek, Wörterbuch (search and a
   word), Lehrbuch/Books, Prüfungen (hub, a level, a task), Du, Statistik, Konto, Einstellungen and a lesson's chapter review.
   This **overrides** the first spec's "no buddy in drills and exam tasks": Sasha asked for every page. Still excluded: the
   lesson/special players (they keep their "?"), the book reader, `/welcome`, `/offline`.
6. On pages with their own sticky bottom bar (path, Schreiben, exam tasks) the buddy sits above it.

## Non-goals

No new help *behaviour* beyond this; no AI; no change to progress, sync or exercises.

## For review

The guide copy for ~20 page types is drafted by Claude in EN/FR and needs Sasha's read-through.

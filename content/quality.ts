import type { Lesson, LessonStep } from './types';

// The quality bar for lessons written in the redesigned format (docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// A lesson counts as redesigned as soon as it opens a topic with a dialogue (`situation` step); older lessons are not checked.
export const isRedesigned = (lesson: Lesson): boolean => lesson.steps.some((s) => s.kind === 'situation');

const MAX_SINGLE_WORDS_IN_A_ROW = 2;
const MAX_EXERCISES_IN_A_ROW = 4;
const MAX_EXERCISES_IN_THE_FINAL_REVIEW = 8;
const MIN_RULE_EXAMPLES = 6;

const blank = (s: string | undefined): boolean => !s || !s.trim();

/** Everything the learner reads in French, as [where, value] pairs; a blank value is a missing translation. */
function frenchFields(lesson: Lesson): [string, string | undefined][] {
  const out: [string, string | undefined][] = [
    ['title', lesson.title.fr], ['theme', lesson.themeFr], ['canDo', lesson.canDo?.fr],
  ];
  lesson.goalsFr?.length === lesson.goals.length || out.push(['goals', undefined]);
  lesson.steps.forEach((s, i) => {
    const at = (what: string) => `step ${i + 1} (${s.kind}) ${what}`;
    switch (s.kind) {
      case 'intro':
        out.push([at('title'), s.titleFr]);
        if (s.goalsFr?.length !== s.goals.length) out.push([at('goals'), undefined]);
        break;
      case 'situation':
        out.push([at('title'), s.titleFr], [at('setting'), s.settingFr]);
        s.lines.forEach((l, k) => out.push([at(`line ${k + 1}`), l.fr]));
        s.words.forEach((w) => out.push([at(`word ${w.german}`), w.french], [at(`example of ${w.german}`), w.example.fr]));
        break;
      case 'wordgroup':
        out.push([at('title'), s.titleFr]);
        s.items.forEach((w) => out.push([at(`word ${w.german}`), w.french], [at(`example of ${w.german}`), w.example.fr]));
        break;
      case 'vocab':
        out.push([at(s.item.german), s.item.french], [at(`example of ${s.item.german}`), s.item.example.fr]);
        break;
      case 'grammar': {
        const n = s.note;
        out.push([at('title'), n.titleFr], [at('explanation'), n.explanationMdFr]);
        n.examples.forEach((e, k) => out.push([at(`example ${k + 1}`), e.fr]));
        if (n.lead) out.push([at('lead'), n.leadFr]);
        n.tables?.forEach((tb, k) => {
          out.push([at(`table ${k + 1} title`), tb.titleFr]);
          if (tb.headersFr?.length !== tb.headers.length) out.push([at(`table ${k + 1} headers`), undefined]);
          const sameShape = tb.rowsFr?.length === tb.rows.length && tb.rows.every((r, ri) => tb.rowsFr![ri]?.length === r.length);
          if (!sameShape) out.push([at(`table ${k + 1} cells`), undefined]);
        });
        n.anatomy?.forEach((a, k) => out.push([at(`breakdown ${k + 1}`), a.fr]));
        if (n.contrast) {
          for (const side of [n.contrast.a, n.contrast.b]) {
            out.push([at(`contrast ${side.label}`), side.labelFr]);
            side.examples.forEach((e, k) => out.push([at(`contrast ${side.label} example ${k + 1}`), e.fr]));
          }
        }
        n.mistakes?.forEach((m, k) => out.push([at(`mistake ${k + 1}`), m.whyFr]));
        break;
      }
      case 'wrapup':
        out.push([at('summary'), s.summaryFr]);
        s.card?.sections.forEach((sec, k) => {
          out.push([at(`card section ${k + 1}`), sec.headingFr]);
          sec.rows.forEach((r) => out.push([at(`card row ${r.de}`), r.fr]));
        });
        if (s.card) out.push([at('card title'), s.card.titleFr]);
        break;
      default:
        break;
    }
  });
  return out;
}

const isTeaching = (s: LessonStep) => s.kind === 'situation' || s.kind === 'wordgroup' || s.kind === 'grammar' || s.kind === 'vocab';

export function lessonQualityIssues(lesson: Lesson): string[] {
  const issues: string[] = [];

  if (!lesson.canDo) issues.push('has no can-do line ("Ich kann …")');
  if (lesson.steps[0]?.kind !== 'intro') issues.push('does not start with an intro step');
  const wrap = lesson.steps.find((s) => s.kind === 'wrapup');
  if (!wrap || wrap.kind !== 'wrapup' || !wrap.card) issues.push('has no summary card on the wrapup step');

  let singles = 0;
  lesson.steps.forEach((s) => {
    singles = s.kind === 'vocab' ? singles + 1 : 0;
    if (singles === MAX_SINGLE_WORDS_IN_A_ROW + 1) issues.push(`has more than ${MAX_SINGLE_WORDS_IN_A_ROW} single word cards in a row (use a wordgroup or a dialogue)`);
  });

  // Exercises must follow the teaching closely; only the last run (the mixed review) may be longer.
  let run = 0;
  lesson.steps.forEach((s, i) => {
    run = s.kind === 'exercise' ? run + 1 : 0;
    if (run === 0) return;
    const finalRun = !lesson.steps.slice(i + 1).some(isTeaching);
    const max = finalRun ? MAX_EXERCISES_IN_THE_FINAL_REVIEW : MAX_EXERCISES_IN_A_ROW;
    if (run === max + 1) issues.push(`has more than ${max} exercises in a row${finalRun ? ' in the final review' : ' before the next teaching step'}`);
  });

  lesson.steps.forEach((s, i) => {
    if (s.kind !== 'grammar') return;
    const n = s.note;
    const rich = (n.tables?.length ?? 0) + (n.anatomy?.length ?? 0) > 0;
    if (!rich) issues.push(`step ${i + 1}: rule "${n.title}" needs a table or a sentence breakdown`);
    if (n.examples.length < MIN_RULE_EXAMPLES) issues.push(`step ${i + 1}: rule "${n.title}" needs at least ${MIN_RULE_EXAMPLES} examples (has ${n.examples.length})`);
  });

  for (const [where, value] of frenchFields(lesson)) {
    if (blank(value)) issues.push(`is missing French for ${where}`);
  }
  return issues;
}

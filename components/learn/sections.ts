import type { Lesson } from '@/content/types';

export interface Section {
  key: string;
  kind: 'intro' | 'chapter' | 'quiz' | 'wrapup' | 'vocab' | 'grammar' | 'exercise' | 'pronunciation';
  label: string;
  labelFr: string;
  start: number;
  end: number;
}

const RUN_LABEL = {
  vocab: 'Wortschatz',
  grammar: 'Grammatik',
  exercise: 'Übungen',
  pronunciation: 'Aussprache',
} as const;

// Groups a lesson's flat step list into the table-of-contents sections:
// each chapter / the quiz owns every step up to the next marker; lessons
// without chapters fall back to runs of the same step type.
export function buildSections(lesson: Lesson): Section[] {
  const out: Section[] = [];
  let chapters = 0;
  lesson.steps.forEach((step, i) => {
    const last = out[out.length - 1];
    switch (step.kind) {
      case 'intro':
        out.push({ key: `intro-${i}`, kind: 'intro', label: 'Einstieg', labelFr: 'Einstieg', start: i, end: i });
        break;
      case 'chapter': {
        chapters += 1;
        out.push({
          key: `chapter-${i}`, kind: 'chapter', start: i, end: i,
          label: `Kapitel ${chapters}: ${step.title}`,
          labelFr: `Kapitel ${chapters}: ${step.titleFr ?? step.title}`,
        });
        break;
      }
      case 'quiz':
        out.push({ key: `quiz-${i}`, kind: 'quiz', start: i, end: i, label: step.title, labelFr: step.titleFr ?? step.title });
        break;
      case 'wrapup':
        out.push({ key: `wrapup-${i}`, kind: 'wrapup', label: 'Fertig', labelFr: 'Fertig', start: i, end: i });
        break;
      default: {
        const kind = step.kind;
        if (last && (last.kind === 'chapter' || last.kind === 'quiz' || last.kind === kind)) {
          last.end = i;
        } else {
          out.push({ key: `${kind}-${i}`, kind, label: RUN_LABEL[kind], labelFr: RUN_LABEL[kind], start: i, end: i });
        }
      }
    }
  });
  return out;
}

export function sectionIndexOf(sections: Section[], stepIndex: number): number {
  const idx = sections.findIndex((s) => stepIndex >= s.start && stepIndex <= s.end);
  return idx < 0 ? 0 : idx;
}

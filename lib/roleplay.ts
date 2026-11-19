import type { Lesson, Level } from '@/content/types';

// Role-play dialogues, taken from the lessons' dialogue steps ("situation"): the learner plays one speaker,
// the other voice is the recorded line. Nothing is written twice, and every line already has audio.

export type DialogueLine = { who: string; de: string; en: string; fr?: string };
export type Dialogue = {
  id: string;            // `${lessonId}--${stepIndex}`, safe in a URL
  lessonId: string;
  level: Level;
  title: { de: string; en: string; fr?: string };
  lines: DialogueLine[];
  roles: string[];
};

/** Longest line (in words) a learner is asked to say in a role-play; longer ones are better read than spoken. */
export const MAX_LINE_WORDS = 35;

const words = (s: string) => s.trim().split(/\s+/).length;

export function buildDialogues(lessons: Lesson[]): Dialogue[] {
  const out: Dialogue[] = [];
  for (const lesson of lessons) {
    lesson.steps.forEach((step, i) => {
      if (step.kind !== 'situation') return;
      const roles = [...new Set(step.lines.map((l) => l.who))];
      if (roles.length < 2 || step.lines.length < 3) return;
      if (step.lines.some((l) => words(l.de) > MAX_LINE_WORDS)) return;
      out.push({
        id: `${lesson.id}--${i}`, lessonId: lesson.id, level: lesson.level,
        title: { de: step.title, en: lesson.title.en, fr: lesson.title.fr },
        lines: step.lines.map((l) => ({ who: l.who, de: l.de, en: l.en, fr: l.fr })),
        roles,
      });
    });
  }
  return out;
}

/** Which of the dialogue's lines are the learner's, given the chosen role. */
export function learnerLineIndexes(d: Dialogue, role: string): number[] {
  return d.lines.flatMap((l, i) => (l.who === role ? [i] : []));
}

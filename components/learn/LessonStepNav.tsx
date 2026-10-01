'use client';
import { Lock, Check } from 'lucide-react';
import type { Lesson, LessonStep } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { lessonCompletion } from '@/lib/progress';
import { stepId } from './stepId';

function labelFor(step: LessonStep, index: number, lesson: Lesson): string {
  switch (step.kind) {
    case 'intro':
      return 'Einstieg';
    case 'vocab':
      return step.item.german;
    case 'grammar':
      return step.note.title;
    case 'exercise': {
      const exerciseNumber = lesson.steps.slice(0, index + 1).filter((s) => s.kind === 'exercise').length;
      return `Übung ${exerciseNumber}`;
    }
    case 'pronunciation':
      return 'Aussprache';
    case 'wrapup':
      return 'Fertig';
    case 'chapter': {
      const n = lesson.steps.slice(0, index + 1).filter((x) => x.kind === 'chapter').length;
      return `Kapitel ${n}: ${step.title}`;
    }
    case 'quiz':
      return step.title;
    default:
      return `Schritt ${index + 1}`;
  }
}

// Collapsible in-lesson navigation: every step in order, with a completion
// indicator and a jump-to-any-step click handler. Renders nothing when closed —
// the toggle button lives in the parent (StepPlayer) so it stays visible even
// when the panel itself is collapsed.
export function LessonStepNav({
  lesson,
  current,
  onJump,
  open,
}: {
  lesson: Lesson;
  current: number;
  onJump: (index: number) => void;
  open: boolean;
}) {
  const { state } = useProgress();
  const { locale } = useLocale();
  const doneSteps = state.lessons[lesson.id]?.steps ?? [];

  // Progressive unlocking: you can reach any step you've completed, the current
  // step, and the very next one after your furthest-reached step — but not skip
  // ahead into unseen cards on a first pass. Once the whole lesson is finished,
  // everything unlocks so you can jump straight to any card to review fast.
  const fullyComplete = lessonCompletion(state, lesson) >= 1;
  let furthest = current;
  lesson.steps.forEach((s, idx) => {
    if (doneSteps.includes(stepId(s, idx))) furthest = Math.max(furthest, idx);
  });
  const unlockedThrough = furthest + 1;

  if (!open) return null;

  return (
    <nav
      aria-label={t('lessonStepsNav', locale)}
      className="fixed inset-y-0 left-0 z-50 w-[min(300px,86vw)] shadow-pop border-r border-border h-[100dvh] overflow-y-auto overflow-x-hidden overscroll-contain
        pt-[max(4rem,env(safe-area-inset-top))] px-2.5 pb-[max(1.5rem,env(safe-area-inset-bottom))] bg-bg-soft
        md:sticky md:top-0 md:z-auto md:w-[260px] md:min-w-[260px] md:shrink-0 md:shadow-none"
    >
      <ol className="list-none m-0 p-0 grid gap-0.5">
        {lesson.steps.map((step, index) => {
          const id = stepId(step, index);
          const isDone = doneSteps.includes(id);
          const isCurrent = index === current;
          const locked = !fullyComplete && index > unlockedThrough;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => { if (!locked) onJump(index); }}
                disabled={locked}
                aria-current={isCurrent ? 'step' : undefined}
                title={locked ? t('completeEarlierSteps', locale) : undefined}
                className={
                  'w-full text-left flex items-center gap-2 px-2.5 py-3 md:py-2 rounded-[10px] border-none transition-colors ' +
                  (locked ? 'cursor-not-allowed text-faint' : 'cursor-pointer ') +
                  (isCurrent ? 'bg-[var(--primary-wash)] text-primary font-semibold' : locked ? '' : 'text-text hover:bg-surface-2')
                }
              >
                <span className={'text-xs min-w-[18px] tabular-nums ' + (locked ? 'text-faint' : 'text-muted')}>{index + 1}</span>
                <span className="flex-1 text-sm overflow-hidden text-ellipsis whitespace-nowrap font-rounded">
                  {labelFor(step, index, lesson)}
                </span>
                <span aria-hidden="true" className="shrink-0 grid place-items-center w-4 h-4">
                  {locked ? (
                    <Lock size={12} strokeWidth={2.2} />
                  ) : isDone ? (
                    <Check size={14} strokeWidth={2.6} className="text-primary" />
                  ) : (
                    <span className="w-1 h-1 rounded-full bg-muted" />
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

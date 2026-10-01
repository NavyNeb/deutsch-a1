'use client';
import { useEffect, useRef } from 'react';
import { Lock, Check, ChevronLeft, X } from 'lucide-react';
import type { Lesson, LessonStep } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';
import { t } from '@/lib/ui-strings';
import { lessonCompletion } from '@/lib/progress';
import { stepId } from './stepId';
import { buildSections, sectionIndexOf } from './sections';

function labelFor(step: LessonStep, index: number, lesson: Lesson): string {
  switch (step.kind) {
    case 'vocab':
      return step.item.german;
    case 'grammar':
      return step.note.title;
    case 'exercise': {
      const n = lesson.steps.slice(0, index + 1).filter((s) => s.kind === 'exercise').length;
      return `Übung ${n}`;
    }
    case 'pronunciation':
      return 'Aussprache';
    default:
      return `Schritt ${index + 1}`;
  }
}

// Table of contents for a lesson: sections (Einstieg, chapters, quiz, Fertig)
// with the steps of the current section unfolded beneath it. Unlock rules: any
// completed step, the current one and the next after the furthest reached are
// open; the rest stay locked until the lesson is finished once.
export function LessonStepNav({
  lesson,
  current,
  onJump,
  onClose,
  onCollapse,
}: {
  lesson: Lesson;
  current: number;
  onJump: (index: number) => void;
  onClose?: () => void;
  onCollapse?: () => void;
}) {
  const { state } = useProgress();
  const { locale } = useLocale();
  const currentRef = useRef<HTMLButtonElement>(null);
  const doneSteps = state.lessons[lesson.id]?.steps ?? [];

  const fullyComplete = lessonCompletion(state, lesson) >= 1;
  let furthest = current;
  lesson.steps.forEach((s, idx) => {
    if (doneSteps.includes(stepId(s, idx))) furthest = Math.max(furthest, idx);
  });
  const unlockedThrough = furthest + 1;
  const isLocked = (index: number) => !fullyComplete && index > unlockedThrough;
  const isDone = (index: number) => doneSteps.includes(stepId(lesson.steps[index], index));

  const sections = buildSections(lesson);
  const currentSection = sectionIndexOf(sections, current);

  useEffect(() => {
    currentRef.current?.scrollIntoView?.({ block: 'nearest' });
  }, [current]);

  return (
    <nav aria-label={t('lessonStepsNav', locale)} className="flex flex-col min-h-0">
      <div className="flex items-center justify-between gap-2 px-3 pt-3 pb-2">
        <span className="label">{t('contents', locale)}</span>
        {onCollapse && (
          <button
            type="button"
            onClick={onCollapse}
            aria-label={t('hideContents', locale)}
            className="grid place-items-center w-8 h-8 rounded-lg border-none bg-transparent text-muted hover:bg-surface-2 hover:text-text cursor-pointer transition-colors"
          >
            <ChevronLeft size={18} strokeWidth={2.2} />
          </button>
        )}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label={t('closeLessonNav', locale)}
            className="grid place-items-center w-10 h-10 rounded-lg border-none bg-transparent text-muted hover:bg-surface-2 hover:text-text cursor-pointer transition-colors"
          >
            <X size={18} strokeWidth={2.2} />
          </button>
        )}
      </div>

      <ol className="list-none m-0 p-0 pb-3 grid">
        {sections.map((section, si) => {
          const isCurrent = si === currentSection;
          const locked = isLocked(section.start);
          const total = section.end - section.start + 1;
          const doneCount = Array.from({ length: total }, (_, k) => section.start + k).filter(isDone).length;
          const sectionDone = doneCount === total;
          const subStart =
            section.kind === 'chapter' || section.kind === 'quiz' ? section.start + 1
            : section.kind === 'intro' || section.kind === 'wrapup' ? section.end + 1
            : section.start;
          const showSteps = isCurrent && subStart <= section.end;
          return (
            <li key={section.key}>
              <button
                type="button"
                ref={isCurrent ? currentRef : undefined}
                onClick={() => { if (!locked) onJump(section.start); }}
                disabled={locked}
                aria-current={isCurrent ? 'step' : undefined}
                title={locked ? t('completeEarlierSteps', locale) : undefined}
                className={
                  'w-full text-left flex items-center gap-2.5 pl-3 pr-3 py-3 md:py-2.5 border-0 border-l-[3px] border-solid transition-colors ' +
                  (isCurrent
                    ? 'border-l-primary bg-[var(--primary-wash)] text-primary font-semibold '
                    : 'border-l-transparent ' + (locked ? 'text-faint cursor-not-allowed ' : 'bg-transparent text-text hover:bg-surface-2 cursor-pointer '))
                }
              >
                <span className="flex-1 min-w-0 text-[13.5px] leading-snug font-rounded">
                  {pick(section.label, section.labelFr, locale)}
                </span>
                <span aria-hidden="true" className="shrink-0 flex items-center gap-1.5 text-xs tabular-nums">
                  {locked ? (
                    <Lock size={12} strokeWidth={2.2} />
                  ) : sectionDone ? (
                    <Check size={14} strokeWidth={2.6} className="text-primary" />
                  ) : total > 1 ? (
                    <span className="text-muted">{doneCount}/{total}</span>
                  ) : null}
                </span>
              </button>

              {showSteps && (
                <ol className="list-none m-0 py-1 pl-6 pr-2 grid gap-0.5 border-0 border-l-[3px] border-solid border-l-primary bg-[var(--primary-wash)]/40">
                  {Array.from({ length: section.end - subStart + 1 }, (_, k) => subStart + k).map((index) => {
                    const stepLocked = isLocked(index);
                    const stepCurrent = index === current;
                    return (
                      <li key={index}>
                        <button
                          type="button"
                          onClick={() => { if (!stepLocked) onJump(index); }}
                          disabled={stepLocked}
                          aria-current={stepCurrent ? 'step' : undefined}
                          title={stepLocked ? t('completeEarlierSteps', locale) : undefined}
                          className={
                            'w-full text-left flex items-center gap-2 px-2 py-2 md:py-1.5 rounded-lg border-none bg-transparent transition-colors text-[13px] ' +
                            (stepLocked ? 'text-faint cursor-not-allowed ' : 'cursor-pointer hover:bg-surface-2 ') +
                            (stepCurrent ? 'font-semibold text-primary' : stepLocked ? '' : 'text-text-2')
                          }
                        >
                          <span className="flex-1 min-w-0 truncate">{labelFor(lesson.steps[index], index, lesson)}</span>
                          <span aria-hidden="true" className="shrink-0 grid place-items-center w-4 h-4">
                            {stepLocked ? (
                              <Lock size={11} strokeWidth={2.2} />
                            ) : isDone(index) ? (
                              <Check size={13} strokeWidth={2.6} className="text-primary" />
                            ) : (
                              <span className="w-1 h-1 rounded-full bg-muted" />
                            )}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

'use client';
import type { Lesson, LessonStep } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
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
      aria-label="Lesson steps"
      style={{
        width: 260,
        minWidth: 260,
        flexShrink: 0,
        borderRight: '1px solid var(--border)',
        height: '100dvh',
        position: 'sticky',
        top: 0,
        overflowY: 'auto',
        padding: '64px 10px 24px',
        background: 'var(--paper)',
      }}
    >
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 2 }}>
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
                title={locked ? 'Complete the earlier steps to unlock this one' : undefined}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 10px',
                  borderRadius: 6,
                  border: 'none',
                  cursor: locked ? 'not-allowed' : 'pointer',
                  background: isCurrent ? 'var(--accent-wash)' : 'transparent',
                  color: locked ? 'var(--border)' : isCurrent ? 'var(--accent)' : 'var(--ink)',
                  fontWeight: isCurrent ? 600 : 400,
                }}
              >
                <span style={{ fontSize: 12, color: locked ? 'var(--border)' : 'var(--muted)', minWidth: 18 }}>{index + 1}</span>
                <span style={{ flex: 1, fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {labelFor(step, index, lesson)}
                </span>
                <span aria-hidden="true" style={{ color: isDone ? 'var(--accent)' : 'var(--muted)', fontSize: 13 }}>
                  {locked ? '🔒' : isDone ? '✓' : '·'}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

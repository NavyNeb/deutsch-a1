'use client';
import { Lock } from 'lucide-react';
import { lessons } from '@/content';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { lessonCompletion } from '@/lib/progress';
import { LessonNode } from './LessonNode';

// The full A1 curriculum runs to 24 lessons; only the first lessons have content authored
// so far. Slots beyond the authored lessons render as plain "coming soon" placeholders —
// no fake lesson data is invented for them.
const TOTAL_LESSON_SLOTS = 12;

export function LearningPath() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const byNumber = new Map(lessons.map((l) => [l.number, l]));

  return (
    <div className="grid gap-3">
      {Array.from({ length: TOTAL_LESSON_SLOTS }, (_, i) => i + 1).map((number) => {
        const lesson = byNumber.get(number);
        if (lesson) {
          return <LessonNode key={lesson.id} lesson={lesson} completion={lessonCompletion(state, lesson)} />;
        }
        return (
          <div
            key={`slot-${number}`}
            className="flex items-center gap-4 p-4 bg-card/60 border border-border border-dashed rounded-[18px] opacity-60"
          >
            <span className="grid place-items-center shrink-0 rounded-full bg-surface-2 text-faint" style={{ width: 48, height: 48 }}>
              <Lock size={18} strokeWidth={2.2} />
            </span>
            <div>
              <span className="label">Lektion {number}</span>
              <p className="m-0 text-muted text-sm">{t('comingSoon', locale)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

'use client';
import { lessons } from '@/content';
import { useProgress } from '@/lib/progress-store';
import { lessonCompletion } from '@/lib/progress';
import { LessonNode } from './LessonNode';

// The full curriculum has 12 lessons across the A1 syllabus; only Module 1 (1-3) has
// content authored so far. Slots beyond the authored lessons render as plain "coming
// soon" placeholders — no fake lesson data is invented for them.
const TOTAL_LESSON_SLOTS = 12;

export function LearningPath() {
  const { state } = useProgress();
  const byNumber = new Map(lessons.map((l) => [l.number, l]));

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {Array.from({ length: TOTAL_LESSON_SLOTS }, (_, i) => i + 1).map((number) => {
        const lesson = byNumber.get(number);
        if (lesson) {
          return <LessonNode key={lesson.id} lesson={lesson} completion={lessonCompletion(state, lesson)} />;
        }
        return (
          <div
            key={`slot-${number}`}
            style={{
              display: 'flex', alignItems: 'center', gap: 16, padding: 16,
              background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 4,
              opacity: 0.5,
            }}
          >
            <span className="label">Lektion {number}</span>
            <p style={{ margin: 0, color: 'var(--muted)' }}>Bald verfügbar</p>
          </div>
        );
      })}
    </div>
  );
}

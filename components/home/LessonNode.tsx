import Link from 'next/link';
import type { Lesson } from '@/content/types';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// LessonNode only ever receives authored lessons (Module 1, numbers 1-3) — LearningPath
// renders the greyed-out "coming soon" slots for the rest of the curriculum itself.
export function LessonNode({ lesson, completion }: { lesson: Lesson; completion: number }) {
  const pct = Math.max(0, Math.min(1, completion));
  const dashOffset = CIRCUMFERENCE * (1 - pct);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 4 }}>
      <Link href={`/lesson/${lesson.id}/learn`} style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, textDecoration: 'none', color: 'inherit' }}>
        <svg width={48} height={48} viewBox="0 0 48 48" aria-hidden="true">
          <circle cx={24} cy={24} r={RADIUS} fill="none" stroke="var(--border)" strokeWidth={4} />
          <circle
            cx={24} cy={24} r={RADIUS} fill="none" stroke="var(--accent)" strokeWidth={4}
            strokeDasharray={CIRCUMFERENCE} strokeDashoffset={dashOffset}
            strokeLinecap="round" transform="rotate(-90 24 24)"
          />
        </svg>
        <div>
          <p className="label" style={{ marginBottom: 2 }}>Lektion {lesson.number}</p>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, margin: 0 }}>{lesson.title.de}</h3>
          <p style={{ color: 'var(--muted)', margin: '2px 0 0', fontSize: 14 }}>{lesson.title.en}</p>
        </div>
      </Link>
      <Link href={`/lesson/${lesson.id}/review`} className="label" style={{ color: 'var(--accent)' }}>
        Review
      </Link>
    </div>
  );
}

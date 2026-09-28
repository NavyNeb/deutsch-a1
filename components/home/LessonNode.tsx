'use client';
import Link from 'next/link';
import { Check } from 'lucide-react';
import type { Lesson } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// LessonNode only ever receives authored lessons — LearningPath renders the greyed-out
// "coming soon" slots for the rest of the curriculum itself.
export function LessonNode({ lesson, completion }: { lesson: Lesson; completion: number }) {
  const { locale } = useLocale();
  const pct = Math.max(0, Math.min(1, completion));
  const dashOffset = CIRCUMFERENCE * (1 - pct);
  const complete = pct >= 1;

  return (
    <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-[18px] shadow-card
      transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-0.5 hover:shadow-pop hover:border-border-strong">
      <Link
        href={`/lesson/${lesson.id}/learn`}
        className="flex items-center gap-4 flex-1 min-w-0 no-underline text-inherit"
      >
        <span className="relative shrink-0 grid place-items-center" style={{ width: 48, height: 48 }}>
          <svg width={48} height={48} viewBox="0 0 48 48" aria-hidden="true">
            <circle cx={24} cy={24} r={RADIUS} fill="none" stroke="var(--surface-3)" strokeWidth={4} />
            <circle
              cx={24} cy={24} r={RADIUS} fill="none" stroke="var(--primary)" strokeWidth={4}
              strokeDasharray={CIRCUMFERENCE} strokeDashoffset={dashOffset}
              strokeLinecap="round" transform="rotate(-90 24 24)"
              style={{ transition: 'stroke-dashoffset .6s cubic-bezier(.2,.7,.2,1)' }}
            />
          </svg>
          {complete && <Check className="absolute text-primary" size={20} strokeWidth={3} />}
        </span>
        <div className="min-w-0">
          <p className="label mb-0.5">Lektion {lesson.number}</p>
          <h3 className="text-[19px] font-bold m-0 truncate">{lesson.title.de}</h3>
          <p className="text-muted text-sm m-0 mt-0.5 truncate">
            {pick(lesson.title.en, lesson.title.fr, locale)}
          </p>
        </div>
      </Link>
      {complete ? (
        <Link
          href={`/lesson/${lesson.id}/review`}
          className="label shrink-0 text-primary bg-[var(--primary-wash)] rounded-full px-3 py-1.5 no-underline
            transition hover:brightness-105"
        >
          {t('review', locale)}
        </Link>
      ) : (
        <span className="shrink-0 text-faint text-[11px] leading-tight max-w-[88px] text-right">
          {t('completeLessonUnlockReview', locale)}
        </span>
      )}
    </div>
  );
}

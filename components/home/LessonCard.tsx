'use client';
import Link from 'next/link';
import { Check, Play } from 'lucide-react';
import type { Lesson } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { LessonArt } from '@/components/ui/LessonArt';

const R = 15;
const C = 2 * Math.PI * R;

export function LessonCard({ lesson, completion }: { lesson: Lesson; completion: number }) {
  const { locale } = useLocale();
  const pct = Math.max(0, Math.min(1, completion));
  const complete = pct >= 1;
  const started = pct > 0 && !complete;

  return (
    <Link
      href={`/lesson/${lesson.id}/learn`}
      className="group relative flex flex-col bg-card border border-border rounded-[22px] shadow-card overflow-hidden no-underline text-inherit
        transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-1 hover:shadow-pop hover:border-border-strong"
    >
      {/* Generated artwork + progress */}
      <div className="relative h-[92px] bg-surface-2 overflow-hidden">
        <div className="absolute right-4 top-3 bottom-3 w-[76px]">
          <LessonArt lesson={lesson} />
        </div>
        <span className="absolute top-3 left-4 font-sans font-semibold text-[12px] tracking-wide rounded-full px-2 py-0.5 bg-surface-3 text-text-2">
          {lesson.level} · L{lesson.number}
        </span>

        {/* progress ring / done badge */}
        <span className="absolute bottom-2.5 left-3 grid place-items-center w-11 h-11">
          {complete ? (
            <span className="grid place-items-center w-8 h-8 rounded-full bg-text text-bg">
              <Check size={18} strokeWidth={3} />
            </span>
          ) : (
            <>
              <svg width={40} height={40} viewBox="0 0 40 40" aria-hidden="true">
                <circle cx={20} cy={20} r={R} fill="none" stroke="var(--s3)" strokeWidth={4} />
                <circle
                  cx={20} cy={20} r={R} fill="none" stroke="var(--t1)" strokeWidth={4}
                  strokeDasharray={C} strokeDashoffset={C * (1 - pct)}
                  strokeLinecap="round" transform="rotate(-90 20 20)"
                />
              </svg>
              {started && (
                <span className="absolute font-sans font-semibold text-[12px] text-text tabular-nums">
                  {Math.round(pct * 100)}
                </span>
              )}
              {!started && (
                <Play className="absolute text-text" size={14} strokeWidth={2.6} fill="currentColor" />
              )}
            </>
          )}
        </span>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="font-display font-extrabold text-[17px] leading-tight text-text m-0">{lesson.title.de}</h3>
        <p className="text-muted text-[13.5px] m-0 mt-1 line-clamp-2">{pick(lesson.title.en, lesson.title.fr, locale)}</p>
        <div className="mt-auto pt-3 flex items-center gap-2">
          <span
            className={
              'font-display font-bold text-[12px] rounded-full px-2.5 py-1 ' +
              (complete
                ? 'bg-[var(--ok-wash)] text-[var(--ok-t)]'
                : started
                  ? 'bg-[var(--ember-wash)] text-ember-text'
                  : 'bg-surface-2 text-text')
            }
          >
            {complete ? t('review', locale) : started ? t('continue', locale) : t('start', locale)}
          </span>
        </div>
      </div>
    </Link>
  );
}

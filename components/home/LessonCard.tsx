'use client';
import Link from 'next/link';
import { Check, Play } from 'lucide-react';
import type { Lesson } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { lessonBand, lessonGlyph } from '@/lib/lesson-visuals';

const R = 15;
const C = 2 * Math.PI * R;

export function LessonCard({ lesson, completion }: { lesson: Lesson; completion: number }) {
  const { locale } = useLocale();
  const pct = Math.max(0, Math.min(1, completion));
  const complete = pct >= 1;
  const started = pct > 0 && !complete;
  const band = lessonBand(lesson);
  const glyph = lessonGlyph(lesson);

  return (
    <Link
      href={`/lesson/${lesson.id}/learn`}
      className="group relative flex flex-col bg-card border border-border rounded-[22px] shadow-card overflow-hidden no-underline text-inherit
        transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-1 hover:shadow-pop hover:border-border-strong"
    >
      {/* Illustrated colour band */}
      <div className="relative h-[92px] flex items-center px-4" style={{ background: band.grad }}>
        <span className="text-[44px] leading-none drop-shadow-[0_3px_5px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6">
          {glyph}
        </span>
        <span
          className="absolute top-3 left-4 font-rounded font-extrabold text-[11px] tracking-wide rounded-full px-2 py-0.5 backdrop-blur-sm"
          style={{ background: 'rgba(255,255,255,0.22)', color: band.ink }}
        >
          {lesson.level} · L{lesson.number}
        </span>

        {/* progress ring / done badge */}
        <span className="absolute top-2.5 right-3 grid place-items-center w-11 h-11">
          {complete ? (
            <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-[color:var(--good)] shadow-sm">
              <Check size={18} strokeWidth={3} />
            </span>
          ) : (
            <>
              <svg width={40} height={40} viewBox="0 0 40 40" aria-hidden="true">
                <circle cx={20} cy={20} r={R} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={4} />
                <circle
                  cx={20} cy={20} r={R} fill="none" stroke="#fff" strokeWidth={4}
                  strokeDasharray={C} strokeDashoffset={C * (1 - pct)}
                  strokeLinecap="round" transform="rotate(-90 20 20)"
                />
              </svg>
              {started && (
                <span className="absolute font-rounded font-extrabold text-[10px] text-white tabular-nums">
                  {Math.round(pct * 100)}
                </span>
              )}
              {!started && (
                <Play className="absolute text-white" size={14} strokeWidth={2.6} fill="currentColor" />
              )}
            </>
          )}
        </span>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="font-rounded font-extrabold text-[17px] leading-tight text-text m-0">{lesson.title.de}</h3>
        <p className="text-muted text-[13.5px] m-0 mt-1 line-clamp-2">{pick(lesson.title.en, lesson.title.fr, locale)}</p>
        <div className="mt-auto pt-3 flex items-center gap-2">
          <span
            className={
              'font-rounded font-bold text-[12px] rounded-full px-2.5 py-1 ' +
              (complete
                ? 'bg-[var(--good-wash)] text-[var(--good)]'
                : started
                  ? 'bg-[var(--amber-wash)] text-amber'
                  : 'bg-[var(--primary-wash)] text-primary')
            }
          >
            {complete ? t('review', locale) : started ? t('continue', locale) : t('start', locale)}
          </span>
        </div>
      </div>
    </Link>
  );
}

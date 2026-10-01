'use client';
import Link from 'next/link';
import { Check } from 'lucide-react';
import type { Special } from '@/content/types';
import type { SpecialProgress } from '@/lib/specials-progress';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { lessonGlyph } from '@/lib/lesson-visuals';
import { GROUP_BAND } from '@/lib/special-visuals';

export function levelRange(sp: Special): string {
  const [a, b] = sp.special.levels;
  return a === b ? a : `${a}–${b}`;
}

export function SpecialCard({ special, progress }: { special: Special; progress: SpecialProgress }) {
  const { locale } = useLocale();
  const band = GROUP_BAND[special.special.group];
  const passed = progress.quizPassed;
  const started = !passed && (progress.stepsDone > 0 || progress.quizAnswered > 0);
  const pct = progress.stepsTotal ? progress.stepsDone / progress.stepsTotal : 0;
  const status = passed ? t('quizPassed', locale) : started ? t('continue', locale) : t('start', locale);

  return (
    <Link
      href={`/specials/${special.special.slug}`}
      className="group relative flex flex-col bg-card border border-border rounded-[22px] shadow-card overflow-hidden no-underline text-inherit
        transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-1 hover:shadow-pop hover:border-border-strong"
    >
      <div className="relative h-[84px] flex items-center px-4" style={{ background: band.grad }}>
        <span aria-hidden="true" className="text-[40px] leading-none drop-shadow-[0_3px_5px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6">
          {lessonGlyph(special)}
        </span>
        <span
          className="absolute top-3 right-4 font-rounded font-extrabold text-[11px] tracking-wide rounded-full px-2 py-0.5 backdrop-blur-sm"
          style={{ background: 'rgba(255,255,255,0.22)', color: band.ink }}
        >
          {levelRange(special)}
        </span>
        {passed && (
          <span className="absolute top-2.5 left-3 grid place-items-center w-7 h-7 rounded-full bg-white text-[color:var(--good)] shadow-sm" aria-hidden="true">
            <Check size={16} strokeWidth={3} />
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col p-4">
        <h3 className="font-rounded font-extrabold text-[17px] leading-tight text-text m-0">{special.title.de}</h3>
        <p className="text-muted text-[13.5px] m-0 mt-1 line-clamp-2">{pick(special.title.en, special.title.fr, locale)}</p>
        <div className="mt-auto pt-3 grid gap-2">
          <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden" aria-hidden="true">
            <div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${Math.round(pct * 100)}%` }} />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={
                'font-rounded font-bold text-[12px] rounded-full px-2.5 py-1 ' +
                (passed ? 'bg-[var(--good-wash)] text-[var(--good)]' : started ? 'bg-[var(--amber-wash)] text-amber' : 'bg-[var(--primary-wash)] text-primary')
              }
            >
              {status}
            </span>
            <span className="text-[12.5px] text-muted">{progress.chaptersTotal} {t('specialsChapters', locale)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

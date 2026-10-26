'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { lessons } from '@/content';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { lessonCompletion } from '@/lib/progress';
import { lessonBand, lessonGlyph } from '@/lib/lesson-visuals';

export function ContinueCard() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const ordered = [...lessons].sort((a, b) => a.level.localeCompare(b.level) || a.number - b.number);
  const next = ordered.find((l) => lessonCompletion(state, l) < 1);
  if (!next) return null;
  const pct = Math.round(lessonCompletion(state, next) * 100);
  const band = lessonBand(next);

  return (
    <Link
      href={`/lesson/${next.id}/learn`}
      className="group flex items-center gap-4 mb-4 p-4 sm:p-5 rounded-[22px] no-underline text-inherit border border-border bg-card shadow-card
        transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-pop"
    >
      <span className="grid place-items-center shrink-0 w-16 h-16 rounded-[18px] text-[34px]" style={{ background: band.grad }}>
        {lessonGlyph(next)}
      </span>
      <div className="min-w-0 flex-1">
        <span className="label text-muted">{next.level} · L{next.number}{pct > 0 ? ` · ${pct}%` : ''}</span>
        <h2 className="font-rounded font-extrabold text-[20px] leading-tight m-0 mt-0.5 truncate">{next.title.de}</h2>
        <p className="m-0 mt-0.5 text-[13.5px] text-muted truncate">{pick(next.title.en, next.title.fr, locale)}</p>
      </div>
      <span className="shrink-0 inline-flex items-center gap-1.5 font-rounded font-bold text-[14px] text-primary-ink bg-primary rounded-full px-4 py-2.5 shadow-primary">
        {pct > 0 ? t('continue', locale) : t('start', locale)} <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

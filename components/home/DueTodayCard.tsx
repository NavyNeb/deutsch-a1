'use client';
import Link from 'next/link';
import { RotateCcw, ArrowRight } from 'lucide-react';
import { useProgress } from '@/lib/progress-store';
import { dueVocabIds } from '@/lib/progress';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

export function DueTodayCard() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const due = dueVocabIds(state, Date.now()).length;
  if (due === 0) return null;

  return (
    <Link
      href="/practice"
      className="flex items-center gap-4 mb-6 p-4 rounded-[18px] no-underline text-inherit
        border border-[color:color-mix(in_srgb,var(--primary)_35%,transparent)]
        bg-[linear-gradient(120deg,var(--primary-wash),transparent)]
        transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-card"
    >
      <span className="grid place-items-center shrink-0 w-11 h-11 rounded-[13px] bg-[var(--primary-wash)] text-primary">
        <RotateCcw size={20} strokeWidth={2.2} />
      </span>
      <div className="min-w-0">
        <b className="font-rounded font-bold text-[15px] block">{t('reviewDueToday', locale)}</b>
        <p className="m-0 text-[13px] text-text-2">{due} {t('wordsDue', locale)} · {t('keepStreakAlive', locale)}</p>
      </div>
      <span className="ml-auto shrink-0 inline-flex items-center gap-1.5 text-[13px] font-rounded font-bold text-primary
        bg-[var(--primary-wash)] rounded-[10px] px-3 py-2">
        {t('reviewNow', locale)} <ArrowRight size={15} strokeWidth={2.4} />
      </span>
    </Link>
  );
}

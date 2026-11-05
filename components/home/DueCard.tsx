'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import { allVocab } from '@/content';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { dueVocabIds } from '@/lib/progress';
import { genderMeta, splitArticle } from '@/lib/gender';

export function DueCard() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const due = dueVocabIds(state, Date.now());
  const vocab = useMemo(() => (due.length ? allVocab() : []), [due.length]);
  const sample = due.slice(0, 2).flatMap((id) => { const v = vocab.find((x) => x.id === id); return v ? [v] : []; });

  return (
    <section data-testid="today-due" className="relative overflow-hidden rounded-[24px] border border-border bg-card p-8 min-h-[300px]">
      <div className="eyebrow">Wiederholen</div>
      <div className="flex items-baseline gap-2.5 mt-5">
        <span aria-label={t('wordsDue', locale)} className="font-display font-semibold text-[72px] leading-none tracking-[-0.03em] tabular-nums">{due.length}</span>
        <span className="text-[15px] text-text-2">{t('wordsDue', locale)}</span>
      </div>

      {sample.map((v, i) => {
        const meta = genderMeta(v.gender);
        const { article, noun } = splitArticle(v.german, v.gender);
        return (
          <div
            key={v.id}
            aria-hidden="true"
            className="absolute w-[150px] h-[96px] rounded-2xl border p-3.5"
            style={{
              right: i === 0 ? 30 : -14,
              bottom: i === 0 ? 72 : 78,
              transform: `rotate(${i === 0 ? -4 : 9}deg)`,
              background: meta ? `color-mix(in srgb, ${meta.fill} 20%, var(--s2))` : 'var(--s2)',
              borderColor: meta ? `color-mix(in srgb, ${meta.fill} 40%, transparent)` : 'var(--line)',
            }}
          >
            {article && <div className="font-display text-[13px]" style={{ color: meta?.text }}>{article}</div>}
            <div className="font-display font-semibold text-[24px] leading-tight truncate">{noun}</div>
          </div>
        );
      })}

      {due.length > 0 ? (
        <Link href="/practice/review" className="absolute left-8 bottom-8 inline-flex items-center h-11 px-5 rounded-full border border-border-strong text-text font-semibold text-[15px] no-underline hover:bg-surface-2">
          {t('startReview', locale)}
        </Link>
      ) : (
        <p className="absolute left-8 right-8 bottom-8 m-0 text-[14px] text-muted">{t('nothingDue', locale)}</p>
      )}
    </section>
  );
}

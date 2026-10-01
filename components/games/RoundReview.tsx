'use client';
import Link from 'next/link';
import { Check, X, Volume2, ArrowUpRight } from 'lucide-react';
import type { VocabItem } from '@/content/types';
import type { MissedWord, RoundSummary } from '@/lib/game';
import { ttsSrc, playAudio } from '@/lib/audio';
import { wordHref } from '@/lib/word-links';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { GenderTag } from '@/components/ui/GenderTag';

const meaning = (v: VocabItem, locale: 'en' | 'fr') => pick(v.english, v.french, locale);
const headword = (v: VocabItem) => (v.gender ? v.german.replace(/^(der|die|das)\s+/i, '') : v.german);

function Speak({ item, label }: { item: VocabItem; label: string }) {
  return (
    <button
      type="button"
      onClick={() => playAudio(ttsSrc(item.german))}
      aria-label={label}
      className="grid place-items-center shrink-0 w-10 h-10 rounded-full border-none bg-[var(--primary-wash)] text-primary hover:brightness-105 active:scale-90 transition cursor-pointer"
    >
      <Volume2 size={18} strokeWidth={2.3} />
    </button>
  );
}

function MissedCard({ m }: { m: MissedWord }) {
  const { locale } = useLocale();
  const { item } = m;
  return (
    <li className="rounded-2xl border border-border border-l-[4px] border-l-[var(--bad)] bg-card p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="font-rounded font-extrabold text-[20px] text-text">{item.german}</span>
            <GenderTag gender={item.gender} />
            {m.misses > 1 && <span className="label text-[var(--bad)]">{t('missedTimes', locale)}{m.misses}</span>}
          </div>
          <p className="m-0 mt-1 flex items-center gap-1.5 text-[15px] font-semibold text-[var(--good)]">
            <Check size={15} strokeWidth={3} aria-hidden="true" /> {meaning(item, locale)}
          </p>
        </div>
        <Speak item={item} label={`${t('replayAudio', locale)}: ${item.german}`} />
      </div>

      {m.wrongPicks.length > 0 && (
        <p className="m-0 mt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[14px] text-text-2">
          <X size={14} strokeWidth={3} className="text-[var(--bad)] shrink-0" aria-hidden="true" />
          <span className="text-muted">{t('youChose', locale)}:</span>
          {m.wrongPicks.map((w, i) => (
            <span key={w.id}>
              <span className="font-semibold text-[var(--bad)]">{meaning(w, locale)}</span>
              <span className="text-muted"> ({w.german})</span>
              {i < m.wrongPicks.length - 1 ? ',' : ''}
            </span>
          ))}
        </p>
      )}

      <div className="mt-3 rounded-xl bg-surface-2 px-3.5 py-2.5">
        <p className="m-0 text-[15px] text-text font-medium">{item.example.de}</p>
        <p className="m-0 mt-0.5 text-[13.5px] text-muted">{pick(item.example.en, item.example.fr, locale)}</p>
      </div>

      <Link
        href={wordHref(headword(item))}
        className="mt-3 inline-flex items-center gap-1 text-[13.5px] font-semibold text-primary no-underline hover:underline"
      >
        {t('openWordPage', locale)} <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden="true" />
      </Link>
    </li>
  );
}

export function RoundReview({ summary }: { summary: RoundSummary }) {
  const { locale } = useLocale();

  if (summary.total === 0) {
    return <p className="text-center text-muted text-[14px] mt-2">{t('noAnswers', locale)}</p>;
  }

  return (
    <section className="mt-10 text-left" aria-label={t('reviewRound', locale)}>
      <div className="flex items-baseline justify-between gap-3 mb-4">
        <h2 className="font-rounded font-extrabold text-[22px] text-text m-0">{t('reviewRound', locale)}</h2>
        <span className="label tabular-nums text-muted">
          {summary.correct}/{summary.total} {t('roundAccuracy', locale)} · {summary.accuracy}%
        </span>
      </div>

      {summary.missed.length === 0 ? (
        <p className="rounded-2xl border border-border bg-[var(--good-wash)] text-[var(--good)] font-rounded font-bold text-[16px] text-center px-4 py-5 m-0">
          🎉 {t('perfectRound', locale)}
        </p>
      ) : (
        <>
          <h3 className="font-rounded font-bold text-[16px] text-text m-0">
            {t('missedWords', locale)} <span className="text-muted tabular-nums">({summary.missed.length})</span>
          </h3>
          <p className="text-muted text-[13.5px] mt-1 mb-3">{t('missedWordsHint', locale)}</p>
          <ul className="list-none m-0 p-0 grid gap-3">
            {summary.missed.map((m) => <MissedCard key={m.item.id} m={m} />)}
          </ul>
        </>
      )}

      {summary.right.length > 0 && (
        <details className="mt-6 rounded-2xl border border-border bg-card group">
          <summary className="flex items-center gap-2 cursor-pointer list-none px-4 py-3.5 font-rounded font-bold text-[15px] text-text [&::-webkit-details-marker]:hidden">
            <Check size={16} strokeWidth={3} className="text-[var(--good)]" aria-hidden="true" />
            {t('correctWords', locale)} <span className="text-muted tabular-nums">({summary.right.length})</span>
          </summary>
          <ul className="list-none m-0 px-4 pb-3 grid">
            {summary.right.map((v) => (
              <li key={v.id} className="flex items-center gap-3 py-2 border-t border-border">
                <div className="flex-1 min-w-0">
                  <span className="font-rounded font-bold text-[16px] text-text">{v.german}</span>
                  <span className="text-muted text-[14px]"> — {meaning(v, locale)}</span>
                </div>
                <Speak item={v} label={`${t('replayAudio', locale)}: ${v.german}`} />
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}

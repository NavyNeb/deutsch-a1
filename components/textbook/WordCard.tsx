'use client';
import { Volume2, Star, Check } from 'lucide-react';
import type { VocabItem } from '@/content/types';
import { ttsSrc, playAudio } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { GenderTag } from '@/components/ui/GenderTag';

export function WordCard({ item }: { item: VocabItem }) {
  const { state, toggleHardWord } = useProgress();
  const { locale } = useLocale();
  const saved = state.hardWords.includes(item.id);

  const bandBg = item.gender
    ? `color-mix(in srgb, var(--${item.gender}) 13%, var(--card))`
    : 'var(--primary-wash)';

  return (
    <div className="bg-card border border-border rounded-[18px] shadow-card overflow-hidden flex flex-col transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-1 hover:shadow-pop">
      {/* Header band (tinted by gender) */}
      <div className="p-4 pb-3.5 relative" style={{ background: bandBg }}>
        <button
          onClick={() => toggleHardWord(item.id)}
          aria-label={saved ? t('savedToReview', locale) : t('addToLearned', locale)}
          className={'absolute top-3 right-3 grid place-items-center w-8 h-8 rounded-full transition-colors ' + (saved ? 'text-amber' : 'text-faint hover:text-amber')}
        >
          <Star size={17} strokeWidth={2.2} fill={saved ? 'currentColor' : 'none'} />
        </button>

        <div className="mb-1.5 min-h-[18px]">{item.gender && <GenderTag gender={item.gender} />}</div>
        <div className="flex items-end justify-between gap-2 pr-8">
          <span className="font-rounded font-extrabold text-[23px] leading-tight text-text">{item.german}</span>
          <button
            onClick={() => playAudio(ttsSrc(item.german))}
            aria-label={`${item.german} anhören`}
            className="grid place-items-center shrink-0 w-9 h-9 rounded-full bg-card text-primary shadow-sm hover:brightness-105 active:scale-90 transition"
          >
            <Volume2 size={17} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        {item.pronunciation && (
          <span className="font-mono text-[13px] text-primary">[{item.pronunciation}]</span>
        )}
        <p className="text-text-2 text-[15px] font-rounded font-semibold m-0">{pick(item.english, item.french, locale)}</p>
        <div className="border-t border-border pt-2.5 mt-1">
          <p className="text-[13px] text-muted m-0 leading-relaxed">
            <span className="text-text">{item.example.de}</span> — {pick(item.example.en, item.example.fr, locale)}
          </p>
        </div>
      </div>

      {/* Action */}
      <div className="p-4 pt-0">
        <button
          onClick={() => toggleHardWord(item.id)}
          className={
            'w-full inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 font-rounded font-bold text-[14px] transition ' +
            (saved
              ? 'bg-[var(--good-wash)] text-[var(--good)] hover:brightness-[0.98]'
              : 'bg-[var(--soft)] text-[var(--soft-ink)] hover:brightness-[1.03]')
          }
        >
          {saved ? <><Check size={15} strokeWidth={2.6} /> {t('savedToReview', locale)}</> : <><Star size={14} strokeWidth={2.4} /> {t('addToLearned', locale)}</>}
        </button>
      </div>
    </div>
  );
}

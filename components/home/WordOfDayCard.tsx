'use client';
import { useMemo } from 'react';
import { Play } from 'lucide-react';
import { allVocab } from '@/content';
import { dateKey } from '@/lib/progress';
import { wordOfDay } from '@/lib/path-model';
import { genderMeta, splitArticle } from '@/lib/gender';
import { playAudio, ttsSrc } from '@/lib/audio';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';
import { GenderShape } from '@/components/ui/GenderShape';

export function WordOfDayCard() {
  const { locale } = useLocale();
  const word = useMemo(() => wordOfDay(allVocab(), dateKey(Date.now())), []);
  const meta = word ? genderMeta(word.gender) : null;
  const split = word ? splitArticle(word.german, word.gender) : null;

  return (
    <section
      data-testid="today-word-of-day"
      className="relative rounded-[24px] border p-8 min-h-[300px]"
      style={{
        background: meta ? `color-mix(in srgb, ${meta.fill} 11%, var(--s1))` : 'var(--s1)',
        borderColor: meta ? `color-mix(in srgb, ${meta.fill} 28%, transparent)` : 'var(--line)',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="eyebrow">Wort des Tages</div>
        {word && <GenderShape gender={word.gender} size={18} />}
      </div>
      {word && split && meta ? (
        <>
          {split.article && <div className="font-display font-light text-[22px] leading-none mt-9" style={{ color: meta.text }}>{split.article}</div>}
          <div className="font-display font-bold text-[clamp(36px,4vw,54px)] leading-none tracking-[-0.03em] mt-1 break-words">{split.noun}</div>
          <p className="text-[16px] text-text-2 mt-3 mb-0">{pick(word.english, word.french, locale)}</p>
          <p className="font-display font-medium text-[18px] mt-5 mb-0 pr-16">{word.example.de}</p>
          <button
            type="button"
            aria-label={word.german}
            onClick={() => playAudio(ttsSrc(word.german))}
            className="absolute right-7 bottom-7 grid place-items-center w-[52px] h-[52px] rounded-full border-0 bg-cta text-cta-ink cursor-pointer active:scale-95 transition"
          >
            <Play size={20} fill="currentColor" aria-hidden="true" />
          </button>
        </>
      ) : null}
    </section>
  );
}

'use client';
import { Star } from 'lucide-react';
import type { VocabItem } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { GenderTag } from '@/components/ui/GenderTag';
import { SyllableStress } from '@/components/ui/SyllableStress';
import { Card } from '@/components/ui/Card';
import { AssistButtons } from '@/components/assist/AssistButtons';

export function VocabStep({ item }: { item: VocabItem }) {
  const { state, toggleHardWord } = useProgress();
  const { locale } = useLocale();
  const isHard = state.hardWords.includes(item.id);

  return (
    <Card>
      <div className="flex justify-between items-center">
        <GenderTag gender={item.gender} />
        <AudioButton src={ttsSrc(item.german)} label={`${item.german} anhören`} size={40} />
      </div>

      <h2 className="font-rounded text-[48px] font-extrabold leading-[1.1] m-0 mt-3 mb-1.5">{item.german}</h2>

      {item.pronunciation && (
        <p className="m-0 mb-1 text-[20px] font-semibold text-text">
          <span className="text-muted font-normal text-[13px] uppercase tracking-[0.05em] mr-2">
            {t('sayIt', locale)}
          </span>
          {item.pronunciation}
        </p>
      )}

      <div className="mb-4 text-base">
        <SyllableStress syllables={item.syllables} />
      </div>

      <p className="text-muted mb-6 text-[18px]">{pick(item.english, item.french, locale)}</p>

      <div className="flex gap-3 items-center pl-4 border-l-[3px] border-primary">
        <div>
          <em className="text-[17px] not-italic font-medium text-text">{item.example.de}</em>
          <br />
          <span className="text-muted text-[15px]">{pick(item.example.en, item.example.fr, locale)}</span>
        </div>
        <AudioButton src={ttsSrc(item.example.de)} label="Beispiel anhören" />
      </div>

      <div className="mt-4">
        <SpeakButton target={item.german} />
      </div>

      <div
        className={
          'mt-5 inline-flex items-center gap-1.5 rounded-full pl-3.5 pr-2 py-1.5 border transition-colors ' +
          (isHard ? 'border-primary bg-[var(--primary-wash)]' : 'border-border bg-card')
        }
      >
        <button
          type="button"
          aria-pressed={isHard}
          title={isHard ? t('savedToReviewTapRemove', locale) : t('saveWordHint', locale)}
          onClick={() => toggleHardWord(item.id)}
          className={
            'inline-flex flex-col items-start gap-px bg-transparent border-none p-0 cursor-pointer ' +
            (isHard ? 'text-primary' : 'text-muted')
          }
        >
          <span className="inline-flex items-center gap-1.5 text-sm font-rounded font-bold">
            <Star size={15} strokeWidth={2.2} fill={isHard ? 'currentColor' : 'none'} aria-hidden="true" />
            {isHard ? 'Gemerkt' : 'Als schwierig markieren'}
          </span>
          <span className="text-[11px] text-muted">
            {isHard ? t('savedToReview', locale) : t('markDifficult', locale)}
          </span>
        </button>
        <AudioButton
          src={ttsSrc(isHard ? 'Gemerkt' : 'Als schwierig markieren')}
          label={`Anhören: ${isHard ? 'Gemerkt' : 'Als schwierig markieren'}`}
          size={26}
        />
      </div>

      <AssistButtons term={item.german} context={item.example.de} />
    </Card>
  );
}

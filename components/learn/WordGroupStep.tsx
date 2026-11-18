'use client';
import { Star } from 'lucide-react';
import type { LessonStep, VocabItem } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { genderMeta, splitArticle } from '@/lib/gender';
import { useShowTranslation } from '@/lib/lesson-prefs';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';
import { SyllableStress } from '@/components/ui/SyllableStress';

type Group = Extract<LessonStep, { kind: 'wordgroup' }>;

function WordRow({ item }: { item: VocabItem }) {
  const { state, toggleHardWord } = useProgress();
  const { locale } = useLocale();
  const [showTranslation] = useShowTranslation();
  const isHard = state.hardWords.includes(item.id);
  const meta = genderMeta(item.gender);
  const { noun } = splitArticle(item.german, item.gender);

  return (
    <li className="rounded-[20px] bg-card border border-border px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline flex-wrap gap-x-2.5">
            {meta && <span data-article={meta.gender} className="font-display font-light text-[22px]" style={{ color: meta.text }}>{meta.gender}</span>}
            <span className="font-display font-bold text-[28px] leading-none tracking-[-0.03em]">{noun}</span>
            <span className="text-[15px]"><SyllableStress syllables={item.syllables} gender={item.gender} /></span>
          </div>
          {showTranslation && <div className="text-[17px] text-text-2 mt-1">{pick(item.english, item.french, locale)}</div>}
        </div>
        <AudioButton src={ttsSrc(item.german)} label={`${item.german} anhören`} size={40} />
        <button
          type="button"
          aria-pressed={isHard}
          aria-label={isHard ? 'Gemerkt' : 'Merken'}
          title={isHard ? t('savedToReviewTapRemove', locale) : t('markDifficult', locale)}
          onClick={() => toggleHardWord(item.id)}
          className={'grid place-items-center w-10 h-10 rounded-full border border-border-strong bg-transparent text-text cursor-pointer transition hover:bg-surface-2 active:scale-95' + (isHard ? ' !bg-surface-3 !border-text' : '')}
        >
          <Star size={18} strokeWidth={1.8} fill={isHard ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
      </div>
      <div className="flex items-start gap-3 mt-3 pt-3 border-t border-border">
        <div className="min-w-0 flex-1">
          <div className="font-display font-medium text-[18px] leading-[1.3]">{item.example.de}</div>
          {showTranslation && <div className="text-[14px] text-muted mt-0.5">{pick(item.example.en, item.example.fr, locale)}</div>}
        </div>
        <AudioButton src={ttsSrc(item.example.de)} label={`Anhören: ${item.example.de}`} size={30} />
      </div>
    </li>
  );
}

export function WordGroupStep({ step }: { step: Group }) {
  const { locale } = useLocale();
  return (
    <div className="flex flex-col gap-4">
      <header>
        <div className="eyebrow mb-2">Wortschatz</div>
        <h2 className="font-display font-semibold text-[30px] leading-[1.05] tracking-[-0.03em] m-0">{pick(step.title, step.titleFr, locale)}</h2>
        {step.note && <p className="text-[15px] text-text-2 mt-2 mb-0">{pick(step.note, step.noteFr, locale)}</p>}
      </header>
      <ul className="list-none m-0 p-0 grid gap-3">
        {step.items.map((item) => <WordRow key={item.id} item={item} />)}
      </ul>
    </div>
  );
}

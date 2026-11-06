'use client';
import { Star, Volume2, Play } from 'lucide-react';
import type { VocabItem } from '@/content/types';
import { playAudio, ttsSrc } from '@/lib/audio';
import { genderMeta, splitArticle } from '@/lib/gender';
import { highlightExample } from '@/lib/example-highlight';
import { fitSize } from '@/lib/fit-size';
import { useShowTranslation } from '@/lib/lesson-prefs';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { SyllableStress } from '@/components/ui/SyllableStress';
import { AssistButtons } from '@/components/assist/AssistButtons';

const tool = 'grid place-items-center w-12 h-12 rounded-full border border-border-strong bg-transparent text-text cursor-pointer transition hover:bg-surface-2 active:scale-95';

export function VocabStep({
  item,
  lessonVocab,
  position,
}: {
  item: VocabItem;
  /** All vocabulary of the lesson, so nouns other than the target are coloured in the example too. */
  lessonVocab?: VocabItem[];
  position?: { n: number; total: number };
}) {
  const { state, toggleHardWord } = useProgress();
  const { locale } = useLocale();
  const [showTranslation] = useShowTranslation();
  const isHard = state.hardWords.includes(item.id);
  const meta = genderMeta(item.gender);
  const { noun } = splitArticle(item.german, item.gender);
  const segments = highlightExample(item.example.de, lessonVocab?.length ? lessonVocab : [item]);

  return (
    <div className="relative flex flex-col items-center text-center py-4">
      {meta && (
        <span
          aria-hidden="true"
          className="absolute -z-0 opacity-[0.07] pointer-events-none"
          style={{
            background: meta.fill,
            width: 'min(560px, 90%)',
            aspectRatio: '1',
            top: '8%',
            borderRadius: meta.shape === 'circle' ? '50%' : undefined,
            clipPath: meta.shape === 'triangle' ? 'polygon(50% 0, 100% 100%, 0 100%)' : undefined,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col items-center w-full">
        {position && <div className="eyebrow mb-6">Vokabel {position.n} / {position.total}</div>}

        {meta && (
          <div data-article={meta.gender} className="font-display font-light text-[44px] sm:text-[60px] leading-none -mb-1 tracking-[-0.02em]" style={{ color: meta.text }}>
            {meta.gender}
          </div>
        )}
        <h2 className="font-display font-bold leading-[0.95] tracking-[-0.045em] m-0 break-words max-w-full" style={{ fontSize: fitSize(noun, 176, 700) }}>{noun}</h2>

        <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2 mt-5">
          <span className="text-[22px]"><SyllableStress syllables={item.syllables} gender={item.gender} /></span>
          {item.pronunciation && (
            <>
              <span className="w-px h-5 bg-border-strong" aria-hidden="true" />
              <span className="text-[15px] text-muted"><span className="uppercase tracking-[0.05em] text-[12px] mr-2">{t('sayIt', locale)}</span>{item.pronunciation}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-6 mt-8">
          <button
            type="button"
            aria-label={`${item.german} anhören`}
            onClick={() => playAudio(ttsSrc(item.german))}
            className="relative grid place-items-center w-[72px] h-[72px] rounded-full border-0 bg-cta text-cta-ink cursor-pointer transition active:scale-95"
          >
            <Play size={26} fill="currentColor" aria-hidden="true" />
          </button>
          {showTranslation && (
            <div className="text-left">
              <div className="text-[28px] font-medium leading-tight">{pick(item.english, item.french, locale)}</div>
            </div>
          )}
        </div>

        <div className="mt-9 w-full max-w-[640px] flex items-center gap-5 text-left rounded-[22px] bg-card border border-border px-7 py-5">
          <div className="flex-1 min-w-0">
            <div className="font-display font-medium text-[clamp(22px,3vw,30px)] leading-[1.25] tracking-[-0.01em]">
              {segments.map((seg, i) => {
                const m = genderMeta(seg.gender);
                return m ? (
                  <span key={i} data-gender={m.gender} style={{ color: m.text, borderBottom: `2px solid ${m.fill}` }}>{seg.text}</span>
                ) : (
                  <span key={i}>{seg.text}</span>
                );
              })}
            </div>
            {showTranslation && <div className="text-[15px] text-muted mt-2">{pick(item.example.en, item.example.fr, locale)}</div>}
          </div>
          <button type="button" aria-label="Beispiel anhören" onClick={() => playAudio(ttsSrc(item.example.de))} className={tool}>
            <Volume2 size={20} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>

        <div className="flex gap-8 mt-8">
          <div className="flex flex-col items-center">
            <SpeakButton target={item.german} size={48} />
            <span className="text-[12px] text-muted mt-2">Sprich</span>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="button"
              aria-pressed={isHard}
              aria-label={isHard ? 'Gemerkt' : 'Merken'}
              title={isHard ? t('savedToReviewTapRemove', locale) : t('markDifficult', locale)}
              onClick={() => toggleHardWord(item.id)}
              className={tool + (isHard ? ' !bg-surface-3 !border-text' : '')}
            >
              <Star size={20} strokeWidth={1.8} fill={isHard ? 'currentColor' : 'none'} aria-hidden="true" />
            </button>
            <span className="text-[12px] text-muted mt-2">{isHard ? 'Gemerkt' : 'Merken'}</span>
          </div>
        </div>

        <AssistButtons term={item.german} context={item.example.de} />
      </div>
    </div>
  );
}

'use client';
import { X } from 'lucide-react';
import { allVocab } from '@/content';
import { ttsSrc } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';
import { GenderTag } from '@/components/ui/GenderTag';
import { Card } from '@/components/ui/Card';

export function WordsToReview() {
  const { state, toggleHardWord } = useProgress();
  const { locale } = useLocale();
  const vocab = allVocab();
  const hardWords = state.hardWords
    .map((id) => vocab.find((v) => v.id === id))
    .filter((v): v is NonNullable<typeof v> => v != null);

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-[26px] font-extrabold m-0">Schwierige Wörter</h2>
        <p className="label text-muted m-0 mt-0.5">{t('wordsToReview', locale)}</p>
      </div>
      {hardWords.length === 0 ? (
        <Card>
          <p className="text-muted m-0">{t('noWordsYet', locale)}</p>
        </Card>
      ) : (
        <Card>
          <div className="grid gap-4">
            {hardWords.map((item, i) => (
              <div
                key={item.id}
                className={
                  'flex items-center gap-3 ' +
                  (i < hardWords.length - 1 ? 'border-b border-border pb-4' : '')
                }
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[20px] font-bold font-rounded">{item.german}</span>
                    <GenderTag gender={item.gender} />
                  </div>
                  <p className="text-muted m-0 mt-0.5">{pick(item.english, item.french, locale)}</p>
                </div>
                <AudioButton src={ttsSrc(item.german)} label={`${item.german} anhören`} />
                <button
                  aria-label={`${t('removeWord', locale)} ${item.german} ${t('fromReview', locale)}`}
                  onClick={() => toggleHardWord(item.id)}
                  className="grid place-items-center shrink-0 w-8 h-8 rounded-full text-muted border border-border
                    transition-[background,color,border-color] duration-150 hover:text-[var(--bad)] hover:border-[var(--bad)] hover:bg-[var(--bad-wash)]"
                >
                  <X size={15} strokeWidth={2.4} />
                </button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </section>
  );
}

'use client';
import { allVocab } from '@/content';
import { ttsSrc } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
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
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, margin: 0 }}>Schwierige Wörter</h2>
        <p className="label" style={{ color: 'var(--muted)', margin: '2px 0 0' }}>{t('wordsToReview', locale)}</p>
      </div>
      {hardWords.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>
          {t('noWordsYet', locale)}
        </p>
      ) : (
        <Card>
          <div style={{ display: 'grid', gap: 16 }}>
            {hardWords.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)', paddingBottom: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20 }}>{item.german}</span>
                    <GenderTag gender={item.gender} />
                  </div>
                  <p style={{ color: 'var(--muted)', margin: '2px 0 0' }}>{item.english}</p>
                </div>
                <AudioButton src={ttsSrc(item.german)} label={`Say ${item.german}`} />
                <button
                  aria-label={`${t('removeWord', locale)} ${item.german} ${t('fromReview', locale)}`}
                  onClick={() => toggleHardWord(item.id)}
                  style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '50%', width: 32, height: 32, color: 'var(--muted)', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </section>
  );
}

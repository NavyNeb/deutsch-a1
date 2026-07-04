'use client';
import { allVocab } from '@/content';
import { ttsSrc } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { AudioButton } from '@/components/ui/AudioButton';
import { GenderTag } from '@/components/ui/GenderTag';
import { Card } from '@/components/ui/Card';

export function WordsToReview() {
  const { state, toggleHardWord } = useProgress();
  const vocab = allVocab();
  const hardWords = state.hardWords
    .map((id) => vocab.find((v) => v.id === id))
    .filter((v): v is NonNullable<typeof v> => v != null);

  return (
    <section>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, margin: '0 0 16px' }}>Schwierige Wörter</h2>
      {hardWords.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>
          No hard words yet — mark a word while learning to review it here.
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
                  aria-label={`Remove ${item.german} from hard words`}
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

'use client';
import type { VocabItem } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <GenderTag gender={item.gender} />
        <AudioButton src={ttsSrc(item.german)} label={`Say ${item.german}`} />
      </div>
      <h2 style={{ fontSize: 48, lineHeight: 1.1, margin: '12px 0 6px' }}>{item.german}</h2>
      {item.pronunciation && (
        <p style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 600, color: 'var(--ink)' }}>
          <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: 8 }}>
            {t('sayIt', locale)}
          </span>
          {item.pronunciation}
        </p>
      )}
      <div style={{ marginBottom: 16, fontSize: 16 }}><SyllableStress syllables={item.syllables} /></div>
      <p style={{ color: 'var(--muted)', marginBottom: 22, fontSize: 18 }}>{pick(item.english, item.french, locale)}</p>
      <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
        <div><em style={{ fontSize: 17 }}>{item.example.de}</em><br /><span style={{ color: 'var(--muted)', fontSize: 15 }}>{pick(item.example.en, item.example.fr, locale)}</span></div>
        <AudioButton src={ttsSrc(item.example.de)} label="Play example" />
      </div>
      <div
        style={{
          marginTop: 20,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          border: `1px solid ${isHard ? 'var(--accent)' : 'var(--border)'}`,
          background: isHard ? 'var(--accent-wash)' : 'var(--card)',
          borderRadius: 999, padding: '6px 8px 6px 14px',
        }}
      >
        <button
          type="button"
          aria-pressed={isHard}
          title={isHard ? t('savedToReviewTapRemove', locale) : t('saveWordHint', locale)}
          onClick={() => toggleHardWord(item.id)}
          style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1,
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            color: isHard ? 'var(--accent)' : 'var(--muted)',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
            <span aria-hidden="true">{isHard ? '★' : '☆'}</span>
            {isHard ? 'Gemerkt' : 'Als schwierig markieren'}
          </span>
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>
            {isHard ? t('savedToReview', locale) : t('markDifficult', locale)}
          </span>
        </button>
        <AudioButton
          src={ttsSrc(isHard ? 'Gemerkt' : 'Als schwierig markieren')}
          label={`Say ${isHard ? 'Gemerkt' : 'Als schwierig markieren'}`}
          size={26}
        />
      </div>
      <AssistButtons term={item.german} context={item.example.de} />
    </Card>
  );
}

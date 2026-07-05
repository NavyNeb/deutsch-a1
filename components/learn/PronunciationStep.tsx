'use client';
import type { VocabItem } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { GermanText } from '@/components/ui/GermanText';
import { SyllableStress } from '@/components/ui/SyllableStress';
import { Card } from '@/components/ui/Card';

export function PronunciationStep({ focus, focusFr, items }: { focus: string; focusFr?: string; items: VocabItem[] }) {
  const { locale } = useLocale();
  return (
    <Card>
      <h2 style={{ fontSize: 24, margin: '0 0 8px' }}>{t('pronunciation', locale)}</h2>
      <p style={{ color: 'var(--muted)', marginBottom: 16 }}>{pick(focus, focusFr, locale)}</p>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((item) => (
          <div key={item.id} style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
            <GermanText de={item.german} en={pick(item.english, item.french, locale)} deSize={20} />
            <div style={{ marginTop: 4 }}><SyllableStress syllables={item.syllables} /></div>
          </div>
        ))}
      </div>
    </Card>
  );
}

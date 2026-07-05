import type { VocabItem } from '@/content/types';
import { GermanText } from '@/components/ui/GermanText';
import { SyllableStress } from '@/components/ui/SyllableStress';
import { Card } from '@/components/ui/Card';

export function PronunciationStep({ focus, items }: { focus: string; items: VocabItem[] }) {
  return (
    <Card>
      <h2 style={{ fontSize: 24, margin: '0 0 8px' }}>Pronunciation</h2>
      <p style={{ color: 'var(--muted)', marginBottom: 16 }}>{focus}</p>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((item) => (
          <div key={item.id} style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
            <GermanText de={item.german} en={item.english} deSize={20} />
            <div style={{ marginTop: 4 }}><SyllableStress syllables={item.syllables} /></div>
          </div>
        ))}
      </div>
    </Card>
  );
}

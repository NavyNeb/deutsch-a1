import type { VocabItem } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { AudioButton } from '@/components/ui/AudioButton';
import { SyllableStress } from '@/components/ui/SyllableStress';
import { Card } from '@/components/ui/Card';

export function PronunciationStep({ focus, items }: { focus: string; items: VocabItem[] }) {
  return (
    <Card>
      <h2 style={{ fontSize: 24, margin: '0 0 8px' }}>Pronunciation</h2>
      <p style={{ color: 'var(--muted)', marginBottom: 16 }}>{focus}</p>
      <div style={{ display: 'grid', gap: 12 }}>
        {items.map((item) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: 12 }}>
            <div>
              <div style={{ fontSize: 20 }}>{item.german}</div>
              <SyllableStress syllables={item.syllables} />
            </div>
            <AudioButton src={ttsSrc(item.german)} label={`Say ${item.german}`} />
          </div>
        ))}
      </div>
    </Card>
  );
}

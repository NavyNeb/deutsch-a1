import type { VocabItem } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { AudioButton } from '@/components/ui/AudioButton';
import { GenderTag } from '@/components/ui/GenderTag';
import { SyllableStress } from '@/components/ui/SyllableStress';
import { Card } from '@/components/ui/Card';
import { AssistButtons } from '@/components/assist/AssistButtons';

export function VocabStep({ item }: { item: VocabItem }) {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <GenderTag gender={item.gender} />
        <AudioButton src={ttsSrc(item.german)} label={`Say ${item.german}`} />
      </div>
      <h2 style={{ fontSize: 34, margin: '8px 0 4px' }}>{item.german}</h2>
      <div style={{ marginBottom: 12 }}><SyllableStress syllables={item.syllables} /></div>
      <p style={{ color: 'var(--muted)', marginBottom: 16 }}>{item.english}</p>
      <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 12, display: 'flex', gap: 10, alignItems: 'center' }}>
        <div><em>{item.example.de}</em><br /><span style={{ color: 'var(--muted)', fontSize: 14 }}>{item.example.en}</span></div>
        <AudioButton src={ttsSrc(item.example.de)} label="Play example" />
      </div>
      <AssistButtons term={item.german} context={item.example.de} />
    </Card>
  );
}

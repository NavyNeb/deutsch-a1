'use client';
import type { VocabItem } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { AudioButton } from '@/components/ui/AudioButton';
import { GenderTag } from '@/components/ui/GenderTag';
import { SyllableStress } from '@/components/ui/SyllableStress';
import { Card } from '@/components/ui/Card';
import { AssistButtons } from '@/components/assist/AssistButtons';

export function VocabStep({ item }: { item: VocabItem }) {
  const { state, toggleHardWord } = useProgress();
  const isHard = state.hardWords.includes(item.id);

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
      <button
        type="button"
        aria-pressed={isHard}
        onClick={() => toggleHardWord(item.id)}
        style={{
          marginTop: 14,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          border: `1px solid ${isHard ? 'var(--accent)' : 'var(--border)'}`,
          background: isHard ? 'var(--accent-wash)' : 'var(--card)',
          color: isHard ? 'var(--accent)' : 'var(--muted)',
          borderRadius: 999, padding: '6px 12px', fontSize: 13, cursor: 'pointer',
        }}
      >
        <span aria-hidden="true">{isHard ? '★' : '☆'}</span>
        {isHard ? 'Gemerkt' : 'Als schwierig markieren'}
      </button>
      <AssistButtons term={item.german} context={item.example.de} />
    </Card>
  );
}

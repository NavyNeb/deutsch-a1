'use client';
import { ttsSrc } from '@/lib/audio';
import { AudioButton } from './AudioButton';

// Reusable "German + audio + translation" pattern: a German phrase with a small
// speaker button, and its English translation directly underneath in muted,
// smaller text. Used anywhere German content is shown to the learner.
export function GermanText({
  de,
  en,
  deSize = 18,
  align = 'left',
}: {
  de: string;
  en: string;
  deSize?: number;
  align?: 'left' | 'center';
}) {
  return (
    <div style={{ textAlign: align }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          justifyContent: align === 'center' ? 'center' : 'flex-start',
        }}
      >
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: deSize }}>{de}</span>
        <AudioButton src={ttsSrc(de)} label={`Say ${de}`} size={26} />
      </div>
      <div style={{ color: 'var(--muted)', fontSize: Math.max(13, deSize - 4), marginTop: 2 }}>{en}</div>
    </div>
  );
}

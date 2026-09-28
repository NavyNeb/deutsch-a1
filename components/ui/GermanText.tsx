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
        className="inline-flex items-center gap-2"
        style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}
      >
        <span className="font-rounded font-semibold" style={{ fontSize: deSize }}>{de}</span>
        <AudioButton src={ttsSrc(de)} label={`Anhören: ${de}`} size={26} />
      </div>
      <div className="text-muted mt-0.5" style={{ fontSize: Math.max(13, deSize - 4) }}>{en}</div>
    </div>
  );
}

'use client';
import { Volume2 } from 'lucide-react';
import { playAudio } from '@/lib/audio';

export function AudioButton({
  src,
  label = 'Anhören',
  size = 36,
}: {
  src: string;
  label?: string;
  size?: number;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => playAudio(src)}
      className="inline-flex items-center justify-center rounded-full shrink-0 text-primary bg-[var(--primary-wash)]
        transition-[transform,filter] duration-150 hover:brightness-105 active:scale-90"
      style={{ width: size, height: size }}
    >
      <Volume2 size={Math.round(size * 0.5)} strokeWidth={2.2} />
    </button>
  );
}

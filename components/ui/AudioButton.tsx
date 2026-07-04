'use client';
import { playAudio } from '@/lib/audio';
export function AudioButton({ src, label = 'Play audio' }: { src: string; label?: string }) {
  return (
    <button aria-label={label} onClick={() => playAudio(src)}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white"
      style={{ background: 'var(--accent)' }}>🔊</button>
  );
}

'use client';
import { playAudio } from '@/lib/audio';
export function AudioButton({ src, label = 'Play audio', size = 36 }: { src: string; label?: string; size?: number }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => playAudio(src)}
      className="inline-flex items-center justify-center rounded-full text-white shrink-0"
      style={{ background: 'var(--accent)', width: size, height: size, fontSize: size <= 28 ? 12 : 16, lineHeight: 1 }}
    >
      🔊
    </button>
  );
}

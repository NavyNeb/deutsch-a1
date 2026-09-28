'use client';
import { useEffect, useState } from 'react';

type Piece = { dx: number; dy: number; color: string; delay: number };
const COLORS = ['#5B57E8', '#F59E0B', '#E85C97', '#1F9E68', '#2F6BF0'];

// A one-shot celebratory burst. Absolutely positioned — drop it inside a
// `relative` container. Renders nothing when the user prefers reduced motion.
export function Confetti({ count = 30 }: { count?: number }) {
  const [pieces, setPieces] = useState<Piece[] | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;
    setPieces(
      Array.from({ length: count }, (_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 70 + Math.random() * 150;
        return {
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist - 50,
          color: COLORS[i % COLORS.length],
          delay: Math.random() * 0.15,
        };
      }),
    );
  }, [count]);

  if (!pieces) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: '38%',
            left: '50%',
            width: 9,
            height: 9,
            borderRadius: 2,
            background: p.color,
            ['--dx' as string]: `${p.dx.toFixed(0)}px`,
            ['--dy' as string]: `${p.dy.toFixed(0)}px`,
            animation: `confetti-fly 0.95s ease-out ${p.delay.toFixed(2)}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

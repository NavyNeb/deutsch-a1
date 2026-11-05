import type { CSSProperties } from 'react';
import type { Gender } from '@/content/types';
import { genderMeta } from '@/lib/gender';

/** der = square, die = circle, das = triangle — colour never travels without its shape. */
export function GenderShape({ gender, size, className = '' }: { gender: Gender; size: number; className?: string }) {
  const meta = genderMeta(gender);
  if (!meta) return null;
  const style: CSSProperties = { display: 'inline-block', flex: 'none', background: meta.fill, width: size, height: size };
  if (meta.shape === 'circle') style.borderRadius = '50%';
  if (meta.shape === 'triangle') {
    style.width = Math.round(size * 1.1);
    style.height = Math.round(size * 0.95);
    style.clipPath = 'polygon(50% 0, 100% 100%, 0 100%)';
  }
  return <span aria-hidden="true" data-shape={meta.shape} className={className} style={style} />;
}

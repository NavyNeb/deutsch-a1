import type { Gender } from '@/content/types';

const COLOR: Record<string, string> = { der: 'var(--der)', die: 'var(--die)', das: 'var(--das)' };

export function GenderTag({ gender }: { gender: Gender }) {
  if (!gender) return null;
  const c = COLOR[gender];
  return (
    <span
      className="label"
      style={{
        color: c,
        border: `1px solid ${c}`,
        background: `color-mix(in srgb, ${c} 12%, transparent)`,
        borderRadius: 999,
        padding: '2px 9px',
      }}
    >
      {gender}
    </span>
  );
}

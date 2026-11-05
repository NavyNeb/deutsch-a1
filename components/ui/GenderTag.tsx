import type { Gender } from '@/content/types';
import { genderMeta } from '@/lib/gender';
import { GenderShape } from './GenderShape';

export function GenderTag({ gender }: { gender: Gender }) {
  const meta = genderMeta(gender);
  if (!meta) return null;
  return (
    <span
      className="inline-flex items-center gap-1.5 font-display font-semibold text-[14px]"
      style={{
        color: meta.text,
        background: `color-mix(in srgb, ${meta.fill} 14%, transparent)`,
        borderRadius: 999,
        padding: '3px 11px 3px 9px',
      }}
    >
      <GenderShape gender={gender} size={9} />
      {gender}
    </span>
  );
}

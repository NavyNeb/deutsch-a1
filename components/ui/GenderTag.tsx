import type { Gender } from '@/content/types';
const COLOR: Record<string, string> = { der: 'var(--der)', die: 'var(--die)', das: 'var(--das)' };
export function GenderTag({ gender }: { gender: Gender }) {
  if (!gender) return null;
  return <span className="label" style={{ color: COLOR[gender], border: `1px solid ${COLOR[gender]}`, borderRadius: 999, padding: '2px 8px' }}>{gender}</span>;
}

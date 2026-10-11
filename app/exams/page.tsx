import { ExamsHub } from '@/components/exams/ExamsHub';
import { ALL_EXAM_SETS } from '@/content/exams';

export const metadata = { title: 'Exams — Deutsch' };

export default function ExamsPage() {
  const counts: Record<string, number> = {};
  for (const s of ALL_EXAM_SETS) counts[`${s.board}-${s.level}`] = (counts[`${s.board}-${s.level}`] ?? 0) + 1;
  return <ExamsHub counts={counts} />;
}

import { notFound } from 'next/navigation';
import { LesenRunner } from '@/components/exams/LesenRunner';
import { SchreibenRunner } from '@/components/exams/SchreibenRunner';
import { SprechenRunner } from '@/components/exams/SprechenRunner';
import { ALL_EXAM_SETS, examSet } from '@/content/exams';
import { SkillSchema } from '@/content/exams/types';

export function generateStaticParams() {
  return ALL_EXAM_SETS.flatMap((s) =>
    SkillSchema.options.map((skill) => ({ board: s.board, level: s.level.toLowerCase(), set: String(s.number), skill })),
  );
}

export const metadata = { title: 'Exam practice — Deutsch' };

export default async function ExamRunnerPage({ params }: { params: Promise<{ board: string; level: string; set: string; skill: string }> }) {
  const { board, level, set, skill } = await params;
  const s = examSet(`${board}-${level}-${set}`);
  const k = SkillSchema.safeParse(skill);
  if (!s || !k.success) notFound();
  if (k.data === 'lesen') return <LesenRunner set={s} />;
  if (k.data === 'schreiben') return <SchreibenRunner set={s} />;
  return <SprechenRunner set={s} />;
}

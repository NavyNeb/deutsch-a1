import { notFound } from 'next/navigation';
import { LesenRunner } from '@/components/exams/LesenRunner';
import { SchreibenRunner } from '@/components/exams/SchreibenRunner';
import { SprechenRunner } from '@/components/exams/SprechenRunner';
import { ALL_EXAM_SETS, examSet } from '@/content/exams';
import { SkillSchema, type ExamSet, type Skill } from '@/content/exams/types';

function teils(set: ExamSet, skill: Skill) {
  return (skill === 'lesen' ? set.lesen : skill === 'schreiben' ? set.schreiben : set.sprechen).map((p) => p.teil);
}

export function generateStaticParams() {
  return ALL_EXAM_SETS.flatMap((s) =>
    SkillSchema.options.flatMap((skill) =>
      teils(s, skill).map((teil) => ({ board: s.board, level: s.level.toLowerCase(), skill, teil: String(teil), set: String(s.number) })),
    ),
  );
}

export const metadata = { title: 'Exam practice — Deutsch' };

export default async function PartRunnerPage({ params }: { params: Promise<{ board: string; level: string; skill: string; teil: string; set: string }> }) {
  const { board, level, skill, teil, set } = await params;
  const s = examSet(`${board}-${level}-${set}`);
  const k = SkillSchema.safeParse(skill);
  const n = Number(teil);
  if (!s || !k.success || !teils(s, k.data).includes(n)) notFound();
  if (k.data === 'lesen') return <LesenRunner set={s} teil={n} />;
  if (k.data === 'schreiben') return <SchreibenRunner set={s} teil={n} />;
  return <SprechenRunner set={s} teil={n} />;
}

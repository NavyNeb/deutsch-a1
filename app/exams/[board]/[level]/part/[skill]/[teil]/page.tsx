import { notFound } from 'next/navigation';
import { PartDrillView } from '@/components/exams/PartDrillView';
import { ALL_EXAM_SETS, examSets } from '@/content/exams';
import { BOARD_LABEL, FORMATS } from '@/content/exams/formats';
import { BoardSchema, ExamLevelSchema, SkillSchema, type Board, type ExamLevel, type Skill } from '@/content/exams/types';

function partTeils(board: Board, level: ExamLevel, skill: Skill) {
  const f = FORMATS[board][level];
  return (skill === 'lesen' ? f.lesen.parts : skill === 'schreiben' ? f.schreiben.tasks : f.sprechen.parts).map((p) => p.teil);
}

export function generateStaticParams() {
  const seen = new Set<string>();
  return ALL_EXAM_SETS.flatMap((s) =>
    SkillSchema.options.flatMap((skill) =>
      partTeils(s.board, s.level, skill).map((teil) => ({ board: s.board, level: s.level.toLowerCase(), skill, teil: String(teil) })),
    ),
  ).filter((p) => {
    const k = `${p.board}/${p.level}/${p.skill}/${p.teil}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export async function generateMetadata({ params }: { params: Promise<{ board: string; level: string }> }) {
  const { board, level } = await params;
  const b = BoardSchema.safeParse(board);
  return { title: b.success ? `${BOARD_LABEL[b.data]} ${level.toUpperCase()} — Deutsch` : 'Exams — Deutsch' };
}

export default async function PartDrillPage({ params }: { params: Promise<{ board: string; level: string; skill: string; teil: string }> }) {
  const { board, level, skill, teil } = await params;
  const b = BoardSchema.safeParse(board);
  const l = ExamLevelSchema.safeParse(level.toUpperCase());
  const k = SkillSchema.safeParse(skill);
  const n = Number(teil);
  if (!b.success || !l.success || !k.success || !partTeils(b.data, l.data, k.data).includes(n)) notFound();
  const sets = examSets(b.data, l.data).map((s) => s.number);
  return <PartDrillView board={b.data} level={l.data} skill={k.data} teil={n} sets={sets} />;
}

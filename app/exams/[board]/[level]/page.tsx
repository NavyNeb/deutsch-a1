import { notFound } from 'next/navigation';
import { LevelView } from '@/components/exams/LevelView';
import { examSets } from '@/content/exams';
import { BOARDS, EXAM_LEVELS, BOARD_LABEL } from '@/content/exams/formats';
import { BoardSchema, ExamLevelSchema } from '@/content/exams/types';

export function generateStaticParams() {
  return BOARDS.flatMap((board) => EXAM_LEVELS.map((level) => ({ board, level: level.toLowerCase() })));
}

export async function generateMetadata({ params }: { params: Promise<{ board: string; level: string }> }) {
  const { board, level } = await params;
  const b = BoardSchema.safeParse(board);
  return { title: b.success ? `${BOARD_LABEL[b.data]} ${level.toUpperCase()} — Deutsch` : 'Exams — Deutsch' };
}

export default async function LevelPage({ params }: { params: Promise<{ board: string; level: string }> }) {
  const { board, level } = await params;
  const b = BoardSchema.safeParse(board);
  const l = ExamLevelSchema.safeParse(level.toUpperCase());
  if (!b.success || !l.success) notFound();
  return <LevelView board={b.data} level={l.data} sets={examSets(b.data, l.data)} />;
}

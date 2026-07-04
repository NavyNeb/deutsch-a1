import { notFound } from 'next/navigation';
import { getLesson } from '@/content';
import { StepPlayer } from '@/components/learn/StepPlayer';

export default async function LearnPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) notFound();
  return <StepPlayer lesson={lesson} />;
}

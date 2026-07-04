import { notFound } from 'next/navigation';
import { getLesson } from '@/content';
import { ChapterView } from '@/components/review/ChapterView';

export default async function ReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) notFound();
  return <ChapterView lesson={lesson} />;
}

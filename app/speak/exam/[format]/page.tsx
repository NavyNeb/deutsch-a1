import { notFound } from 'next/navigation';
import { ExamSimulator } from '@/components/sprechen/ExamSimulator';
import { SPEAK_EXAMS, getSpeakExam } from '@/content/sprechen/exam-formats';

export function generateStaticParams() {
  return SPEAK_EXAMS.map((e) => ({ format: e.id }));
}

export const metadata = { title: 'Mock oral exam — Deutsch' };

export default async function SpeakExamRunPage({ params }: { params: Promise<{ format: string }> }) {
  const { format } = await params;
  if (!getSpeakExam(format)) notFound();
  return <ExamSimulator formatId={format} />;
}

import { Suspense } from 'react';
import { WordDetail } from '@/components/dictionary/WordDetail';

function safeDecode(s: string): string {
  try { return decodeURIComponent(s); } catch { return s; }
}

export async function generateMetadata({ params }: { params: Promise<{ word: string }> }) {
  const { word } = await params;
  return { title: `${safeDecode(word)} — Deutsch` };
}

export default async function WordPage({ params }: { params: Promise<{ word: string }> }) {
  const { word } = await params;
  return (
    <Suspense fallback={null}>
      <WordDetail word={safeDecode(word)} />
    </Suspense>
  );
}

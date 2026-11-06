import { Suspense } from 'react';
import { DictionaryView } from '@/components/dictionary/DictionaryView';

export const metadata = { title: 'Dictionary — Deutsch' };

export default function DictionaryPage() {
  return (
    <Suspense fallback={null}>
      <DictionaryView />
    </Suspense>
  );
}

'use client';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { BOOK_REFS } from '@/lib/book-refs';
import { BOOKS } from '@/lib/books';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';

// "Go deeper" links into the preview-only textbook reader, at the pages that cover this lesson's topic.
export function BookRefLinks({ lessonId }: { lessonId: string }) {
  const { locale } = useLocale();
  const refs = BOOK_REFS[lessonId];
  if (!refs?.length) return null;
  return (
    <div className="mt-3 rounded-[16px] border border-border bg-card px-4 py-3 shadow-card">
      <p className="label m-0 mb-2 inline-flex items-center gap-1.5"><BookOpen size={13} strokeWidth={2.4} />{pick('More practice in the textbook', 'Pour aller plus loin dans le manuel', locale)}</p>
      <div className="flex flex-wrap gap-2">
        {refs.map((r) => {
          const book = BOOKS.find((b) => b.id === r.book);
          return (
            <Link
              key={`${r.book}-${r.lektion}`}
              href={`/textbook/read/${r.book}?page=${r.start}`}
              className="tap-area inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1.5 text-[13px] font-rounded font-bold text-text-2 no-underline hover:border-primary hover:text-primary"
            >
              {book?.title ?? r.book} · {pick('Lektion', 'Leçon', locale)} {r.lektion} · p. {r.start}–{r.end}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

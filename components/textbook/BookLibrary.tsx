'use client';
import Link from 'next/link';
import { BookOpen, Eye } from 'lucide-react';
import { BOOKS, type Book } from '@/lib/books';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';

function BookCard({ book }: { book: Book }) {
  const { locale } = useLocale();
  const coverLabel = book.badge || book.title.replace('Menschen ', '');

  return (
    <Link
      href={`/textbook/read/${book.id}`}
      className="group flex gap-3.5 sm:gap-4 p-3.5 sm:p-4 bg-card border border-border rounded-[24px] no-underline transition-[border-color,background] duration-150 hover:border-border-strong hover:bg-surface-2"
    >
      {/* Neutral cover: colour is reserved for grammar, so levels are told apart by the badge, not a hue. */}
      <div className="relative shrink-0 w-[84px] h-[116px] rounded-[12px] bg-surface-3 border border-border-strong text-text p-2.5 flex flex-col justify-between overflow-hidden">
        <span className="font-sans font-semibold text-[12px] text-text-2 leading-tight truncate">
          {book.publisher || 'DaF'}
        </span>
        <span className="font-display font-bold text-[18px] leading-snug line-clamp-2 break-words">
          {coverLabel}
        </span>
        <BookOpen size={14} className="text-text-2 shrink-0" />
      </div>
      <div className="min-w-0 flex-1 flex flex-col justify-center">
        <span className="eyebrow mb-1">{book.level}</span>
        <h3 className="m-0 font-display font-semibold text-[18px] sm:text-[20px] text-text leading-snug line-clamp-2 break-words">
          {book.title}
        </h3>
        <p className="m-0 mt-1 text-muted text-[13px] line-clamp-2 leading-relaxed">
          {pick(book.subtitle.en, book.subtitle.fr, locale)}
        </p>
        <span className="mt-2.5 inline-flex items-center gap-1.5 font-semibold text-[13px] text-text group-hover:underline">
          <Eye size={14} strokeWidth={2} /> {pick('Read', 'Lire', locale)}
        </span>
      </div>
    </Link>
  );
}

export function BookLibrary() {
  const { locale } = useLocale();
  const groups: { key: string; label: string; books: Book[] }[] = [
    { key: 'A1', label: 'Menschen A1', books: BOOKS.filter((b) => b.kind === 'course' && b.level === 'A1') },
    { key: 'A2', label: 'Menschen A2', books: BOOKS.filter((b) => b.kind === 'course' && b.level === 'A2') },
    { key: 'B1', label: 'Menschen B1', books: BOOKS.filter((b) => b.kind === 'course' && b.level === 'B1') },
    { key: 'extra', label: pick('Grammar & self-study', 'Grammaire & auto-apprentissage', locale), books: BOOKS.filter((b) => b.kind !== 'course') },
  ];
  return (
    <div className="grid gap-9">
      <p className="m-0 text-muted text-[14px] max-w-[60ch]">
        {pick(
          'Read-only library. Pages open inside the app; the books can’t be downloaded or printed.',
          'Bibliothèque en lecture seule. Les pages s’ouvrent dans l’application ; les livres ne peuvent être ni téléchargés ni imprimés.',
          locale,
        )}
      </p>
      {groups.map((g) => (
        <section key={g.key}>
          <h2 className="font-display font-semibold text-[22px] text-text m-0 mb-4">{g.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {g.books.map((b) => <BookCard key={b.id} book={b} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

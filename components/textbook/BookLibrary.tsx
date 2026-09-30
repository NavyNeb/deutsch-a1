'use client';
import Link from 'next/link';
import { BookOpen, Eye } from 'lucide-react';
import { BOOKS, type Book } from '@/lib/books';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';

const COVER: Record<string, string> = {
  A1: 'from-[#34c38f] to-[#1f9d72]',
  A2: 'from-[#4f8cff] to-[#2f63d6]',
  B1: 'from-[#a06bff] to-[#6a3fd1]',
  'A1–B2': 'from-[#ff9f4a] to-[#e0702a]',
};

function BookCard({ book }: { book: Book }) {
  const { locale } = useLocale();
  return (
    <Link
      href={`/textbook/read/${book.id}`}
      className="group flex gap-4 p-4 bg-card border border-border rounded-[20px] shadow-card no-underline hover:border-primary transition-colors"
    >
      <div className={`relative shrink-0 w-[84px] h-[116px] rounded-[10px] bg-gradient-to-br ${COVER[book.level]} text-white p-2.5 flex flex-col justify-between shadow-md`}>
        <span className="font-rounded font-extrabold text-[11px] opacity-90 leading-tight">{book.publisher || 'DaF'}</span>
        <span className="font-rounded font-extrabold text-[15px] leading-tight">{book.title.replace('Menschen ', '')}</span>
        <BookOpen size={14} className="opacity-80" />
      </div>
      <div className="min-w-0 flex flex-col justify-center">
        <span className="label mb-1">{book.level}</span>
        <h3 className="m-0 font-rounded font-extrabold text-[17px] text-text leading-snug">{book.title}</h3>
        <p className="m-0 mt-1 text-muted text-[13px]">{pick(book.subtitle.en, book.subtitle.fr, locale)}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-rounded font-bold text-[13px] text-primary group-hover:underline">
          <Eye size={14} strokeWidth={2.4} /> {pick('Read', 'Lire', locale)}
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
          <h2 className="font-rounded font-extrabold text-[18px] text-text m-0 mb-4">{g.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {g.books.map((b) => <BookCard key={b.id} book={b} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

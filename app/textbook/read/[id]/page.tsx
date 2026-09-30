import { notFound } from 'next/navigation';
import { BookReader } from '@/components/textbook/BookReader';
import { getBook } from '@/lib/books';

export default async function ReadPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ page?: string }> }) {
  const { id } = await params;
  const { page } = await searchParams;
  const book = getBook(id);
  if (!book) notFound();
  const n = Number(page);
  return <BookReader id={book.id} title={book.title} initialPage={Number.isInteger(n) && n > 0 ? n : undefined} />;
}

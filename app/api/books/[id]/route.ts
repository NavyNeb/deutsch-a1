import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { Readable } from 'node:stream';
import type { NextRequest } from 'next/server';
import { getBook } from '@/lib/books';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const HEADERS = {
  'Content-Type': 'application/pdf',
  'Accept-Ranges': 'bytes',
  'Cache-Control': 'private, no-store',
  // no Content-Disposition: download managers (IDM) treat an inline PDF as a download and swallow the response
  'X-Content-Type-Options': 'nosniff',
};

// Streams a textbook PDF to the in-app reader only. Direct navigation (address bar, <a>) is refused.
export async function GET(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const book = getBook(id);
  if (!book) return new Response('Not found', { status: 404 });

  const fetchSite = req.headers.get('sec-fetch-site');
  const fetchDest = req.headers.get('sec-fetch-dest');
  if (fetchDest === 'document' || (fetchSite && fetchSite !== 'same-origin')) {
    return new Response('Preview only', { status: 403 });
  }

  const file = path.join(process.cwd(), 'private', 'books', book.file);
  let size: number;
  try {
    size = (await stat(file)).size;
  } catch {
    return new Response('Book not available', { status: 404 });
  }

  const range = req.headers.get('range');
  let start = 0;
  let end = size - 1;
  let status = 200;
  if (range) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!m || (m[1] === '' && m[2] === '')) return new Response('Bad range', { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
    if (m[1] === '') {
      start = Math.max(0, size - Number(m[2]));
    } else {
      start = Number(m[1]);
      if (m[2] !== '') end = Math.min(end, Number(m[2]));
    }
    if (start > end || start >= size) return new Response('Bad range', { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
    status = 206;
  }

  const stream = Readable.toWeb(createReadStream(file, { start, end })) as ReadableStream;
  const headers: Record<string, string> = { ...HEADERS, 'Content-Length': String(end - start + 1) };
  if (status === 206) headers['Content-Range'] = `bytes ${start}-${end}/${size}`;
  return new Response(stream, { status, headers });
}

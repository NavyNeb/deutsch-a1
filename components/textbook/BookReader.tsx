'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowLeft, Minus, Plus, Loader2 } from 'lucide-react';
import type { PDFDocumentProxy, PDFDocumentLoadingTask, RenderTask } from 'pdfjs-dist';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';

const MAX_FIT = 860;
const ZOOMS = [0.75, 1, 1.25, 1.5, 2];

function storageKey(id: string) {
  return `book-page:${id}`;
}

// Preview-only PDF viewer: pages are painted on a <canvas>; there is no download, print or save UI.
export function BookReader({ id, title, initialPage }: { id: string; title: string; initialPage?: number }) {
  const { locale } = useLocale();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const docRef = useRef<PDFDocumentProxy | null>(null);
  const loadRef = useRef<PDFDocumentLoadingTask | null>(null);
  const taskRef = useRef<RenderTask | null>(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [rendering, setRendering] = useState(false);
  const [width, setWidth] = useState(0);
  const [draft, setDraft] = useState('1');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const pdfjs = await import('pdfjs-dist');
        pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();
        const task = pdfjs.getDocument({ url: `/api/books/${id}`, disableAutoFetch: true, disableStream: false, wasmUrl: '/pdfjs/wasm/', cMapUrl: '/pdfjs/cmaps/', cMapPacked: true, standardFontDataUrl: '/pdfjs/standard_fonts/', iccUrl: '/pdfjs/iccs/' });
        loadRef.current = task;
        const doc = await task.promise;
        if (cancelled) { task.destroy(); return; }
        docRef.current = doc;
        let start = initialPage ?? 0;
        if (!start) {
          try { start = Number(localStorage.getItem(storageKey(id))) || 1; } catch { start = 1; }
        }
        setTotal(doc.numPages);
        setPage(Math.min(Math.max(1, start), doc.numPages));
        setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    })();
    return () => {
      cancelled = true;
      taskRef.current?.cancel();
      loadRef.current?.destroy();
      loadRef.current = null;
      docRef.current = null;
    };
  }, [id, initialPage]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => { const cs = getComputedStyle(el); setWidth(el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)); };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setDraft(String(page));
    if (status === 'ready') {
      try { localStorage.setItem(storageKey(id), String(page)); } catch { /* ignore */ }
    }
  }, [page, id, status]);

  useEffect(() => {
    const doc = docRef.current;
    const canvas = canvasRef.current;
    if (status !== 'ready' || !doc || !canvas || !width) return;
    let cancelled = false;
    setRendering(true);
    (async () => {
      try {
        const p = await doc.getPage(page);
        if (cancelled) return;
        const base = p.getViewport({ scale: 1 });
        const cssScale = (Math.min(width, MAX_FIT) / base.width) * zoom;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const viewport = p.getViewport({ scale: cssScale * dpr });
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
        canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;
        taskRef.current?.cancel();
        const task = p.render({ canvas, viewport });
        taskRef.current = task;
        await task.promise;
        if (!cancelled) setRendering(false);
      } catch (e) {
        if ((e as { name?: string })?.name !== 'RenderingCancelledException' && !cancelled) setRendering(false);
      }
    })();
    return () => { cancelled = true; };
  }, [page, zoom, width, status]);

  const go = useCallback((n: number) => setPage((p) => Math.min(Math.max(1, total ? n : p), total || 1)), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'o'].includes(e.key.toLowerCase())) { e.preventDefault(); return; }
      if (tag === 'INPUT') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); setPage((p) => Math.min(total || 1, p + 1)); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [total]);

  const stepZoom = (dir: 1 | -1) => {
    const i = ZOOMS.indexOf(zoom);
    setZoom(ZOOMS[Math.min(ZOOMS.length - 1, Math.max(0, i + dir))]);
  };

  return (
    <div className="book-reader flex flex-col h-[calc(100dvh-69px)] bg-surface-2" onContextMenu={(e) => e.preventDefault()}>
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 bg-card border-b border-border">
        <Link href="/textbook" className="tap-area inline-flex items-center gap-1.5 text-muted hover:text-text no-underline font-rounded font-bold text-[14px]">
          <ArrowLeft size={17} strokeWidth={2.4} /> <span className="hidden sm:inline">{pick('Library', 'Bibliothèque', locale)}</span>
        </Link>
        <h1 className="m-0 flex-1 min-w-0 truncate text-center font-rounded font-extrabold text-[15px] sm:text-[17px] text-text">{title}</h1>
        <div className="flex items-center gap-1">
          <button aria-label="Zoom out" onClick={() => stepZoom(-1)} disabled={zoom === ZOOMS[0]} className="grid place-items-center w-10 h-10 rounded-full text-text-2 hover:bg-surface-2 disabled:opacity-35"><Minus size={16} /></button>
          <span className="w-11 text-center label tabular-nums">{Math.round(zoom * 100)}%</span>
          <button aria-label="Zoom in" onClick={() => stepZoom(1)} disabled={zoom === ZOOMS[ZOOMS.length - 1]} className="grid place-items-center w-10 h-10 rounded-full text-text-2 hover:bg-surface-2 disabled:opacity-35"><Plus size={16} /></button>
        </div>
      </div>

      <div ref={wrapRef} className="flex-1 overflow-auto px-2 sm:px-6 py-4 select-none" style={{ WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>
        {status === 'loading' && (
          <div className="grid place-items-center h-full text-muted"><Loader2 className="animate-spin" /></div>
        )}
        {status === 'error' && (
          <div className="max-w-[420px] mx-auto mt-16 text-center bg-card border border-border rounded-[20px] shadow-card p-8">
            <p className="font-rounded font-bold text-text m-0 mb-2">{pick('This book isn’t available right now.', 'Ce livre n’est pas disponible pour le moment.', locale)}</p>
            <p className="text-muted text-sm m-0">{pick('Textbooks are only installed on the device that hosts this app.', 'Les manuels ne sont installés que sur l’appareil qui héberge cette application.', locale)}</p>
          </div>
        )}
        {status === 'ready' && (
          <div className="mx-auto w-fit relative">
            <canvas ref={canvasRef} draggable={false} onDragStart={(e) => e.preventDefault()} className="block bg-white shadow-card rounded-[6px]" />
            {rendering && <div className="absolute inset-0 grid place-items-center bg-white/40"><Loader2 className="animate-spin text-muted" /></div>}
          </div>
        )}
      </div>

      {status === 'ready' && (
        <div className="flex items-center justify-center gap-3 px-3 py-2.5 bg-card border-t border-border pb-[max(10px,env(safe-area-inset-bottom))]">
          <button aria-label="Previous page" onClick={() => go(page - 1)} disabled={page <= 1} className="grid place-items-center w-11 h-11 rounded-full border border-border text-text-2 hover:border-primary hover:text-primary disabled:opacity-35"><ChevronLeft size={18} /></button>
          <form onSubmit={(e) => { e.preventDefault(); go(Number(draft) || page); }} className="flex items-center gap-2 font-rounded font-bold text-[15px] text-text">
            <input
              inputMode="numeric"
              value={draft}
              onChange={(e) => setDraft(e.target.value.replace(/\D/g, ''))}
              onBlur={() => go(Number(draft) || page)}
              aria-label="Page"
              className="w-14 h-10 text-center rounded-[10px] border border-border bg-card text-[16px] tabular-nums"
            />
            <span className="text-muted tabular-nums">/ {total}</span>
          </form>
          <button aria-label="Next page" onClick={() => go(page + 1)} disabled={page >= total} className="grid place-items-center w-11 h-11 rounded-full border border-border text-text-2 hover:border-primary hover:text-primary disabled:opacity-35"><ChevronRight size={18} /></button>
        </div>
      )}
    </div>
  );
}

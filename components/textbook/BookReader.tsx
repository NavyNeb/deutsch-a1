'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Minus,
  Plus,
  Loader2,
  PanelLeftClose,
  PanelLeft,
  ScrollText,
  FileText,
} from 'lucide-react';
import type { PDFDocumentProxy, PDFDocumentLoadingTask, RenderTask } from 'pdfjs-dist';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';

const MAX_FIT = 860;
const ZOOMS = [0.75, 1, 1.25, 1.5, 2];

function storageKey(id: string) {
  return `book-page:${id}`;
}

function modeStorageKey(id: string) {
  return `book-mode:${id}`;
}

// Thumbnail item for the sidebar
function ThumbnailItem({
  doc,
  pageNum,
  isActive,
  onClick,
}: {
  doc: PDFDocumentProxy | null;
  pageNum: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const taskRef = useRef<RenderTask | null>(null);
  const [rendered, setRendered] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLButtonElement>(null);

  // Lazy render thumbnail when button intersects visible viewport of thumbnail list
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !doc || !canvasRef.current || rendered) return;
    let cancelled = false;

    (async () => {
      try {
        const page = await doc.getPage(pageNum);
        if (cancelled) return;
        const unscaledViewport = page.getViewport({ scale: 1 });
        // Target thumbnail width around 108px
        const scale = 108 / unscaledViewport.width;
        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        taskRef.current?.cancel();
        const task = page.render({ canvas, viewport });
        taskRef.current = task;
        await task.promise;
        if (!cancelled) setRendered(true);
      } catch (e) {
        if ((e as { name?: string })?.name !== 'RenderingCancelledException' && !cancelled) {
          // ignore error
        }
      }
    })();

    return () => {
      cancelled = true;
      taskRef.current?.cancel();
    };
  }, [doc, pageNum, inView, rendered]);

  return (
    <button
      ref={containerRef}
      type="button"
      onClick={onClick}
      className={`group relative flex flex-col items-center p-2 rounded-[14px] text-left transition-all ${
        isActive
          ? 'bg-primary/10 ring-2 ring-primary'
          : 'hover:bg-surface-2 text-text-2'
      }`}
    >
      <div className="w-[108px] min-h-[140px] bg-white rounded-[6px] shadow-sm flex items-center justify-center overflow-hidden border border-border/60">
        <canvas ref={canvasRef} className="block pointer-events-none" />
        {!rendered && (
          <span className="text-xs text-muted font-rounded font-bold">{pageNum}</span>
        )}
      </div>
      <span
        className={`mt-1.5 font-rounded text-[12px] font-bold ${
          isActive ? 'text-primary' : 'text-muted group-hover:text-text'
        }`}
      >
        {pageNum}
      </span>
    </button>
  );
}

// Continuous page item with intersection observer for active page detection
function ContinuousPage({
  doc,
  pageNum,
  width,
  zoom,
  onVisible,
}: {
  doc: PDFDocumentProxy;
  pageNum: number;
  width: number;
  zoom: number;
  onVisible: (num: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const taskRef = useRef<RenderTask | null>(null);
  const [inView, setInView] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number>(1.414); // standard A4 aspect ratio fallback

  // Visibility observation for lazy rendering
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          onVisible(pageNum);
        }
      },
      { threshold: [0, 0.5, 1], rootMargin: '400px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pageNum, onVisible]);

  useEffect(() => {
    if (!inView || !doc || !canvasRef.current || !width) return;
    let cancelled = false;
    setRendering(true);

    (async () => {
      try {
        const p = await doc.getPage(pageNum);
        if (cancelled) return;
        const base = p.getViewport({ scale: 1 });
        setAspectRatio(base.height / base.width);
        const cssScale = (Math.min(width, MAX_FIT) / base.width) * zoom;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const viewport = p.getViewport({ scale: cssScale * dpr });
        const canvas = canvasRef.current;
        if (!canvas) return;

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
        if ((e as { name?: string })?.name !== 'RenderingCancelledException' && !cancelled) {
          setRendering(false);
        }
      }
    })();

    return () => {
      cancelled = true;
      taskRef.current?.cancel();
    };
  }, [doc, pageNum, width, zoom, inView]);

  const targetWidth = Math.min(width, MAX_FIT) * zoom;
  const estimatedHeight = targetWidth * aspectRatio;

  return (
    <div
      ref={containerRef}
      id={`pdf-page-${pageNum}`}
      className="relative mx-auto my-3 flex flex-col items-center"
      style={{ minHeight: `${estimatedHeight}px` }}
    >
      <canvas
        ref={canvasRef}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="block bg-white shadow-card rounded-[6px]"
      />
      {rendering && (
        <div className="absolute inset-0 grid place-items-center bg-white/40">
          <Loader2 className="animate-spin text-muted" />
        </div>
      )}
      <span className="mt-2 text-xs font-rounded font-medium text-muted">
        {pageNum}
      </span>
    </div>
  );
}

// Preview-only PDF viewer with side panel thumbnails and multiple navigation modes
export function BookReader({
  id,
  title,
  initialPage,
}: {
  id: string;
  title: string;
  initialPage?: number;
}) {
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

  // Sidebar & Navigation Mode States
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [navMode, setNavMode] = useState<'single' | 'continuous'>('single');

  // Load preferred navigation mode from storage
  useEffect(() => {
    try {
      const savedMode = localStorage.getItem(modeStorageKey(id));
      if (savedMode === 'continuous' || savedMode === 'single') {
        setNavMode(savedMode);
      }
    } catch {
      /* ignore */
    }
  }, [id]);

  const changeNavMode = (mode: 'single' | 'continuous') => {
    setNavMode(mode);
    try {
      localStorage.setItem(modeStorageKey(id), mode);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const pdfjs = await import('pdfjs-dist');
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url
        ).toString();
        const task = pdfjs.getDocument({
          url: `/api/books/${id}`,
          disableAutoFetch: true,
          disableStream: false,
          wasmUrl: '/pdfjs/wasm/',
          cMapUrl: '/pdfjs/cmaps/',
          cMapPacked: true,
          standardFontDataUrl: '/pdfjs/standard_fonts/',
          iccUrl: '/pdfjs/iccs/',
        });
        loadRef.current = task;
        const doc = await task.promise;
        if (cancelled) {
          task.destroy();
          return;
        }
        docRef.current = doc;
        let start = initialPage ?? 0;
        if (!start) {
          try {
            start = Number(localStorage.getItem(storageKey(id))) || 1;
          } catch {
            start = 1;
          }
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

  // Width measurement
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const cs = getComputedStyle(el);
      setWidth(el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight));
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();
    return () => ro.disconnect();
  }, [sidebarOpen]);

  useEffect(() => {
    setDraft(String(page));
    if (status === 'ready') {
      try {
        localStorage.setItem(storageKey(id), String(page));
      } catch {
        /* ignore */
      }
    }
  }, [page, id, status]);

  // Single page mode canvas rendering
  useEffect(() => {
    if (navMode !== 'single') return;
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
        if ((e as { name?: string })?.name !== 'RenderingCancelledException' && !cancelled)
          setRendering(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [page, zoom, width, status, navMode]);

  const scrollToPage = useCallback(
    (n: number) => {
      const targetPage = Math.min(Math.max(1, total ? n : page), total || 1);
      setPage(targetPage);
      if (navMode === 'continuous') {
        const targetEl = document.getElementById(`pdf-page-${targetPage}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (wrapRef.current) {
        wrapRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [navMode, page, total]
  );

  const go = useCallback(
    (n: number) => {
      scrollToPage(n);
    },
    [scrollToPage]
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'o'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        return;
      }
      if (tag === 'INPUT') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        go(page + 1);
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        go(page - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [total, page, go]);

  const stepZoom = (dir: 1 | -1) => {
    const i = ZOOMS.indexOf(zoom);
    setZoom(ZOOMS[Math.min(ZOOMS.length - 1, Math.max(0, i + dir))]);
  };

  const pagesArray = useMemo(() => {
    return Array.from({ length: total }, (_, i) => i + 1);
  }, [total]);

  return (
    <div
      className="book-reader flex flex-col h-[calc(100dvh-69px)] bg-surface-2"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Top Header & Toolbar */}
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 bg-card border-b border-border select-none">
        <Link
          href="/textbook"
          className="tap-area inline-flex items-center gap-1.5 text-muted hover:text-text no-underline font-rounded font-bold text-[14px]"
        >
          <ArrowLeft size={17} strokeWidth={2.4} />{' '}
          <span className="hidden sm:inline">{pick('Library', 'Bibliothèque', locale)}</span>
        </Link>

        {/* Sidebar Toggle */}
        <button
          type="button"
          aria-label={sidebarOpen ? 'Hide pages panel' : 'Show pages panel'}
          title={sidebarOpen ? 'Hide pages panel' : 'Show pages panel'}
          onClick={() => setSidebarOpen((v) => !v)}
          className={`grid place-items-center w-9 h-9 rounded-[10px] border border-border transition-colors ${
            sidebarOpen
              ? 'bg-primary/10 text-primary border-primary/40'
              : 'text-text-2 hover:bg-surface-2'
          }`}
        >
          {sidebarOpen ? <PanelLeftClose size={17} /> : <PanelLeft size={17} />}
        </button>

        {/* Navigation Mode Selector */}
        <div className="hidden sm:flex items-center p-0.5 rounded-[10px] bg-surface-2 border border-border">
          <button
            type="button"
            onClick={() => changeNavMode('single')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] text-[12px] font-rounded font-bold transition-colors ${
              navMode === 'single'
                ? 'bg-card text-text shadow-sm'
                : 'text-muted hover:text-text'
            }`}
          >
            <FileText size={14} /> {pick('Single page', 'Page unique', locale)}
          </button>
          <button
            type="button"
            onClick={() => changeNavMode('continuous')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] text-[12px] font-rounded font-bold transition-colors ${
              navMode === 'continuous'
                ? 'bg-card text-text shadow-sm'
                : 'text-muted hover:text-text'
            }`}
          >
            <ScrollText size={14} /> {pick('Continuous scroll', 'Défilement continu', locale)}
          </button>
        </div>

        <h1 className="m-0 flex-1 min-w-0 truncate text-center font-rounded font-extrabold text-[15px] sm:text-[17px] text-text">
          {title}
        </h1>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1">
          <button
            aria-label="Zoom out"
            onClick={() => stepZoom(-1)}
            disabled={zoom === ZOOMS[0]}
            className="grid place-items-center w-9 h-9 rounded-full text-text-2 hover:bg-surface-2 disabled:opacity-35"
          >
            <Minus size={16} />
          </button>
          <span className="w-11 text-center label tabular-nums">
            {Math.round(zoom * 100)}%
          </span>
          <button
            aria-label="Zoom in"
            onClick={() => stepZoom(1)}
            disabled={zoom === ZOOMS[ZOOMS.length - 1]}
            className="grid place-items-center w-9 h-9 rounded-full text-text-2 hover:bg-surface-2 disabled:opacity-35"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Main Body: Sidebar + PDF Viewport */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Thumbnails Sidebar */}
        {sidebarOpen && status === 'ready' && (
          <aside className="w-[148px] sm:w-[160px] shrink-0 border-r border-border bg-card/60 backdrop-blur-sm flex flex-col h-full overflow-hidden select-none">
            <div className="px-3 py-2 border-b border-border/80 flex items-center justify-between">
              <span className="label text-[11px] font-bold text-muted">
                {total} {pick('pages', 'pages', locale)}
              </span>
              {/* Mobile mode switch icon button */}
              <button
                type="button"
                onClick={() => changeNavMode(navMode === 'single' ? 'continuous' : 'single')}
                className="sm:hidden p-1 text-muted hover:text-text rounded-[6px]"
                title={navMode === 'single' ? 'Switch to Continuous' : 'Switch to Single'}
              >
                {navMode === 'single' ? <ScrollText size={14} /> : <FileText size={14} />}
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-2 py-3 flex flex-col items-center gap-2.5">
              {pagesArray.map((pNum) => (
                <ThumbnailItem
                  key={pNum}
                  doc={docRef.current}
                  pageNum={pNum}
                  isActive={page === pNum}
                  onClick={() => scrollToPage(pNum)}
                />
              ))}
            </div>
          </aside>
        )}

        {/* PDF Viewport */}
        <div
          ref={wrapRef}
          className="flex-1 overflow-auto px-2 sm:px-6 py-4 select-none"
          style={{ WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}
        >
          {status === 'loading' && (
            <div className="grid place-items-center h-full text-muted">
              <Loader2 className="animate-spin" />
            </div>
          )}

          {status === 'error' && (
            <div className="max-w-[420px] mx-auto mt-16 text-center bg-card border border-border rounded-[20px] shadow-card p-8">
              <p className="font-rounded font-bold text-text m-0 mb-2">
                {pick(
                  'This book isn’t available right now.',
                  'Ce livre n’est pas disponible pour le moment.',
                  locale
                )}
              </p>
              <p className="text-muted text-sm m-0">
                {pick(
                  'Textbooks are only installed on the device that hosts this app.',
                  'Les manuels ne sont installés que sur l’appareil qui héberge cette application.',
                  locale
                )}
              </p>
            </div>
          )}

          {status === 'ready' && navMode === 'single' && (
            <div className="mx-auto w-fit relative">
              <canvas
                ref={canvasRef}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="block bg-white shadow-card rounded-[6px]"
              />
              {rendering && (
                <div className="absolute inset-0 grid place-items-center bg-white/40">
                  <Loader2 className="animate-spin text-muted" />
                </div>
              )}
            </div>
          )}

          {status === 'ready' && navMode === 'continuous' && docRef.current && (
            <div className="flex flex-col items-center">
              {pagesArray.map((pNum) => (
                <ContinuousPage
                  key={pNum}
                  doc={docRef.current!}
                  pageNum={pNum}
                  width={width}
                  zoom={zoom}
                  onVisible={(currentNum) => setPage(currentNum)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      {status === 'ready' && (
        <div className="flex items-center justify-center gap-3 px-3 py-2.5 bg-card border-t border-border pb-[max(10px,env(safe-area-inset-bottom))] select-none">
          <button
            aria-label="Previous page"
            onClick={() => go(page - 1)}
            disabled={page <= 1}
            className="grid place-items-center w-11 h-11 rounded-full border border-border text-text-2 hover:border-primary hover:text-primary disabled:opacity-35"
          >
            <ChevronLeft size={18} />
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              go(Number(draft) || page);
            }}
            className="flex items-center gap-2 font-rounded font-bold text-[15px] text-text"
          >
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
          <button
            aria-label="Next page"
            onClick={() => go(page + 1)}
            disabled={page >= total}
            className="grid place-items-center w-11 h-11 rounded-full border border-border text-text-2 hover:border-primary hover:text-primary disabled:opacity-35"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

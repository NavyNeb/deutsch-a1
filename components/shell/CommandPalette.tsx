'use client';
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import type { Gender, Lesson } from '@/content/types';
import { MIN_QUERY_LETTERS, searchDictionary, type DictHit } from '@/lib/dictionary';
import { letters } from '@/lib/dict-shared.mjs';
import { KUMPEL_HREF, buildPaletteIndex, searchPalette, type PaletteItem } from '@/lib/palette-index';
import { isVisible, useKumpel } from '@/lib/kumpel-store';
import { pageGroupFor } from '@/lib/kumpel-pages';
import { openKumpel } from '@/lib/kumpel-events';
import { addRecent, useRecents } from '@/lib/recent-searches';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { GenderShape } from '@/components/ui/GenderShape';
import { NounPanel } from '@/components/dictionary/NounPanel';
import { articlesOf } from '@/components/dictionary/entry-utils';

type Row = { key: string; group: 'recent' | 'all' | 'dict' | PaletteItem['group']; title: string; subtitle?: string; href: string; gender?: Gender; hit?: DictHit };

const isTyping = (el: EventTarget | null) =>
  el instanceof HTMLElement && (['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName) || el.closest('[contenteditable="true"]') !== null);

const GROUP_LABEL: Record<Row['group'], string> = { recent: 'Zuletzt', all: 'Mehr', dict: 'Wörterbuch', lesson: 'Lektionen', practice: 'Üben', page: 'Seiten' };
// DOM ids must not contain whitespace (dictionary headwords can).
const domId = (s: string) => s.replace(/[^\w-]/g, '_');

export function CommandPalette() {
  const router = useRouter();
  const pathname = usePathname();
  const { state: kumpel } = useKumpel();
  const { locale } = useLocale();
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [sel, setSel] = useState(0);
  const [hits, setHits] = useState<DictHit[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [recents, clearRecents] = useRecents();
  const lastFocus = useRef<HTMLElement | null>(null);
  const reqId = useRef(0);

  const openPalette = useCallback(() => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false); setQuery(''); setSel(0); setHits([]);
    lastFocus.current?.focus?.();
  }, []);

  // Global shortcuts: ⌘K / Ctrl+K toggles, "/" opens (never while typing), plus the rail's event.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (open) close(); else openPalette();
      } else if (e.key === '/' && !isTyping(e.target) && !open) {
        e.preventDefault();
        openPalette();
      }
    };
    // The opener may pass a query to start from (e.g. the dictionary search bar).
    const onOpen = (e: Event) => {
      const q = (e as CustomEvent<{ query?: string } | undefined>).detail?.query;
      if (typeof q === 'string') { setQuery(q); setSel(0); }
      openPalette();
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('open-palette', onOpen);
    return () => { document.removeEventListener('keydown', onKey); window.removeEventListener('open-palette', onOpen); };
  }, [open, openPalette, close]);

  // The lesson list is large; load it only once the palette is first opened.
  useEffect(() => {
    if (!open || lessons.length) return;
    let live = true;
    import('@/content').then((m) => { if (live) setLessons(m.lessons); });
    return () => { live = false; };
  }, [open, lessons.length]);

  // Dictionary search, debounced.
  useEffect(() => {
    if (!open || letters(query).length < MIN_QUERY_LETTERS) { setHits([]); return; }
    const id = ++reqId.current;
    const timer = setTimeout(() => {
      searchDictionary(query)
        .then((r) => { if (id === reqId.current) setHits(r.hits.slice(0, 5)); })
        .catch(() => { if (id === reqId.current) setHits([]); });
    }, 150);
    return () => clearTimeout(timer);
  }, [open, query]);

  // The Kumpel command only makes sense where Kumpel can actually appear.
  const kumpelOn = isVisible(kumpel) && pageGroupFor(pathname) !== null;
  const index = useMemo(
    () => buildPaletteIndex(lessons, locale).filter((i) => i.href !== KUMPEL_HREF || kumpelOn),
    [lessons, locale, kumpelOn],
  );

  const rows: Row[] = useMemo(() => {
    const dict: Row[] = hits.map((h, i) => {
      const art = articlesOf(h.entry.g);
      return {
        key: `dict:${i}:${h.entry.w}`, group: 'dict', hit: h,
        title: art.length === 1 ? `${art[0]} ${h.entry.w}` : h.entry.w,
        subtitle: h.entry.s[0],
        href: `/dictionary/${encodeURIComponent(h.entry.w)}`,
        gender: art.length === 1 ? art[0] : null,
      };
    });
    const q = query.trim();
    const base = q ? searchPalette(query, index) : index.filter((i) => i.group !== 'lesson');
    const recentRows: Row[] = q ? [] : recents.map((r) => ({ key: `recent:${r.href}`, group: 'recent', title: r.title, subtitle: r.subtitle, href: r.href }));
    const all: Row[] = letters(q).length >= MIN_QUERY_LETTERS
      ? [{ key: 'all-results', group: 'all', title: `${t('allResultsFor', locale)} “${q}”`, href: `/dictionary?q=${encodeURIComponent(q)}` }]
      : [];
    return [...recentRows, ...dict, ...base.map((i): Row => ({ key: i.id, group: i.group, title: i.title, subtitle: i.subtitle, href: i.href })), ...all];
  }, [hits, index, query, recents, locale]);

  const selected = rows[Math.min(sel, Math.max(rows.length - 1, 0))];
  const go = (row?: Row) => {
    if (!row) return;
    if (row.href === KUMPEL_HREF) { close(); openKumpel(); return; }
    if (row.group !== 'all') addRecent({ title: row.title, subtitle: row.subtitle, href: row.href });
    router.push(row.href);
    close();
  };

  if (!open) return null;

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, rows.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); go(selected); }
    else if (e.key === 'Tab') e.preventDefault(); // the input is the only tab stop in the dialog
  };

  let lastGroup: Row['group'] | null = null;

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" aria-label={t('closeSearch', locale)} tabIndex={-1} onClick={close} className="absolute inset-0 w-full border-0 cursor-default bg-bg/60 backdrop-blur-[7px]" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('searchAnything', locale)}
        onKeyDown={(e) => { if (e.key === 'Escape') { e.stopPropagation(); close(); } }}
        className="absolute left-1/2 top-[10vh] -translate-x-1/2 flex flex-col w-[min(960px,calc(100%-32px))] h-[min(620px,80dvh)] rounded-[26px] border border-border-strong bg-card shadow-pop overflow-hidden"
      >
        <div className="flex items-center gap-4 h-[72px] px-6 border-b border-border">
          <Search size={22} strokeWidth={1.8} aria-hidden="true" className="text-text-2 shrink-0" />
          <input
            autoFocus
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={selected ? `${listId}-${domId(selected.key)}` : undefined}
            aria-label={t('searchAnything', locale)}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSel(0); }}
            onKeyDown={onInputKey}
            placeholder={t('searchAnything', locale)}
            className="flex-1 min-w-0 bg-transparent border-0 outline-none font-display text-[26px] font-medium text-text placeholder:text-muted"
          />
          <kbd className="text-[12px] text-muted border border-border-strong rounded-md px-2 py-0.5">esc</kbd>
        </div>

        <div className="flex flex-1 min-h-0">
          <div id={listId} role="listbox" className="w-full md:w-[360px] md:shrink-0 md:border-r border-border p-2.5 overflow-y-auto">
            {rows.length === 0 && <p className="px-3 py-6 text-[14px] text-muted m-0">—</p>}
            {rows.map((row, i) => {
              const head = row.group !== lastGroup ? GROUP_LABEL[row.group] : null;
              lastGroup = row.group;
              const on = selected?.key === row.key;
              return (
                <div key={row.key}>
                  {head && (
                    <div className="flex items-center justify-between px-3.5 pt-3.5 pb-2">
                      <span className="eyebrow">{head}</span>
                      {row.group === 'recent' && (
                        <button type="button" onClick={clearRecents} className="text-[12px] text-muted bg-transparent border-0 cursor-pointer hover:text-text min-h-[28px]">{t('clearRecent', locale)}</button>
                      )}
                    </div>
                  )}
                  <div
                    id={`${listId}-${domId(row.key)}`}
                    role="option"
                    aria-selected={on}
                    onMouseEnter={() => setSel(i)}
                    onClick={() => go(row)}
                    className={'flex items-center gap-3.5 min-h-[52px] px-3.5 rounded-[14px] cursor-pointer ' + (on ? 'bg-surface-3' : '')}
                  >
                    {row.gender ? <GenderShape gender={row.gender} size={13} /> : <span className="w-[13px]" aria-hidden="true" />}
                    <span className="flex-1 min-w-0">
                      <span className="font-display font-semibold text-[18px] text-text">{row.title}</span>
                      {row.subtitle && <span className="text-[12px] text-muted"> · {row.subtitle}</span>}
                    </span>
                    {on && <span className="text-[12px] text-muted" aria-hidden="true">↵</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden md:block flex-1 min-w-0 p-8 overflow-y-auto">
            {selected?.hit ? <Preview hit={selected.hit} /> : <p className="m-0 text-[14px] text-muted">{selected?.subtitle ?? ''}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Preview({ hit }: { hit: DictHit }) {
  const { entry } = hit;
  const art = articlesOf(entry.g);
  const article = art.length === 1 ? art[0] : null;
  return (
    <div>
      {article && <div className="font-display font-light text-[24px] leading-none" style={{ color: `var(--${article}-t)` }}>{article}</div>}
      <div className="font-display font-bold text-[56px] leading-[0.95] tracking-[-0.04em] text-text">{entry.w}</div>
      <p className="mt-3 mb-0 text-[17px] text-text-2">{entry.s.slice(0, 3).join(', ')}</p>
      {entry.p === 'noun' && <div className="mt-6"><NounPanel entry={entry} /></div>}
      {entry.x && <p className="mt-5 mb-0 font-display text-[18px] text-text">{entry.x[0]}<span className="block font-sans text-[14px] text-muted">{entry.x[1]}</span></p>}
    </div>
  );
}

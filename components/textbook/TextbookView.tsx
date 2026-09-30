'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { BookOpen, BookMarked, Zap, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import { vocabByLevel, allVocab } from '@/content';
import type { Level } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { WordCard } from './WordCard';

const LEVELS: { lv: Level; diff: 'easy' | 'medium' | 'hard' }[] = [
  { lv: 'A1', diff: 'easy' },
  { lv: 'A2', diff: 'easy' },
  { lv: 'B1', diff: 'medium' },
  { lv: 'B2', diff: 'hard' },
];
const DIFF_LABEL: Record<'easy' | 'medium' | 'hard', UIKey> = { easy: 'easy', medium: 'medium', hard: 'hard' };
const DIFF_CLS: Record<'easy' | 'medium' | 'hard', string> = {
  easy: 'bg-[var(--good-wash)] text-[var(--good)]',
  medium: 'bg-[var(--amber-wash)] text-[var(--amber)]',
  hard: 'bg-[var(--bad-wash)] text-[var(--bad)]',
};
const PER_PAGE = 12;

export function TextbookView() {
  const { locale } = useLocale();
  const { state } = useProgress();
  const [tab, setTab] = useState<'textbook' | 'dictionary'>('textbook');
  const [level, setLevel] = useState<Level>('A1');
  const [page, setPage] = useState(0);

  const byLevel = useMemo(() => vocabByLevel(), []);
  const vocab = useMemo(() => allVocab(), []);

  const dictionary = useMemo(
    () => state.hardWords.map((id) => vocab.find((v) => v.id === id)).filter((v): v is NonNullable<typeof v> => v != null),
    [state.hardWords, vocab],
  );

  const words = tab === 'textbook' ? byLevel[level] : dictionary;
  const pageCount = Math.max(1, Math.ceil(words.length / PER_PAGE));
  useEffect(() => setPage(0), [tab, level]);
  const shown = words.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-8">
      {/* Toolbar */}
      <div className="bg-card border border-border rounded-[20px] shadow-card px-4 sm:px-6 py-3.5 flex flex-wrap items-center gap-4 mb-7">
        <div className="flex items-center gap-1">
          <ToolTab active={tab === 'textbook'} onClick={() => setTab('textbook')} icon={<BookOpen size={17} strokeWidth={2.3} />} label={t('navTextbook', locale)} />
          <ToolTab active={tab === 'dictionary'} onClick={() => setTab('dictionary')} icon={<BookMarked size={17} strokeWidth={2.3} />} label={t('navDictionary', locale)} />
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <Link href="/games/sprint" className="inline-flex items-center gap-1.5 rounded-full bg-[var(--soft)] text-[var(--soft-ink)] font-rounded font-bold text-[13px] px-3.5 py-2 no-underline hover:brightness-[1.03] transition">
            <Zap size={14} strokeWidth={2.4} fill="currentColor" stroke="none" /> {t('navSprint', locale)}
          </Link>
          <Link href="/games/audio" className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-wash)] text-primary font-rounded font-bold text-[13px] px-3.5 py-2 no-underline hover:brightness-105 transition">
            <Headphones size={14} strokeWidth={2.4} /> {t('navAudioCall', locale)}
          </Link>
        </div>
      </div>

      {/* Level tabs */}
      {tab === 'textbook' && (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-7">
          {LEVELS.map(({ lv, diff }) => (
            <button key={lv} onClick={() => setLevel(lv)} className="inline-flex items-center gap-2 group">
              <span className={'font-rounded font-extrabold text-[20px] transition-colors ' + (level === lv ? 'text-text underline decoration-2 underline-offset-8 decoration-primary' : 'text-muted group-hover:text-text')}>
                {lv}
              </span>
              <span className={'label rounded-full px-2 py-0.5 ' + DIFF_CLS[diff]}>{t(DIFF_LABEL[diff], locale)}</span>
            </button>
          ))}
          <span className="ml-auto label text-muted">{words.length} {t('wordsStudied', locale)}</span>
        </div>
      )}

      {/* Grid */}
      {shown.length === 0 ? (
        <div className="bg-card border border-border rounded-[20px] shadow-card p-10 text-center text-muted">
          {tab === 'dictionary' ? t('noWordsYet', locale) : '—'}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((item) => <WordCard key={item.id} item={item} />)}
        </div>
      )}

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex items-center justify-center gap-2 mt-9">
          <Pager label={<ChevronLeft size={16} />} disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))} />
          {pageWindow(page, pageCount).map((n, i) =>
            n === -1 ? (
              <span key={`e${i}`} className="text-faint px-1">…</span>
            ) : (
              <Pager key={n} label={n + 1} active={n === page} onClick={() => setPage(n)} />
            ),
          )}
          <Pager label={<ChevronRight size={16} />} disabled={page >= pageCount - 1} onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))} />
        </div>
      )}
    </div>
  );
}

function ToolTab({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={'inline-flex items-center gap-2 rounded-full px-4 py-2 font-rounded font-bold text-[15px] transition-colors ' + (active ? 'bg-[var(--primary-wash)] text-primary' : 'text-muted hover:text-text')}
    >
      {icon} {label}
    </button>
  );
}

function Pager({ label, active, disabled, onClick }: { label: React.ReactNode; active?: boolean; disabled?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        'grid place-items-center w-9 h-9 rounded-full font-rounded font-bold text-[14px] tabular-nums transition-colors disabled:opacity-35 disabled:pointer-events-none ' +
        (active ? 'bg-primary text-primary-ink' : 'border border-border text-text-2 hover:border-primary hover:text-primary')
      }
    >
      {label}
    </button>
  );
}

// Windowed page list with ellipses, e.g. [0,1,2,-1,26,27,28]
function pageWindow(page: number, count: number): number[] {
  if (count <= 7) return Array.from({ length: count }, (_, i) => i);
  const out = new Set<number>([0, count - 1, page, page - 1, page + 1]);
  const list = [...out].filter((n) => n >= 0 && n < count).sort((a, b) => a - b);
  const res: number[] = [];
  for (let i = 0; i < list.length; i++) {
    if (i > 0 && list[i] - list[i - 1] > 1) res.push(-1);
    res.push(list[i]);
  }
  return res;
}

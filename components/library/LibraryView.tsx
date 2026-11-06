'use client';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { BOARD_LABEL, BOARDS, EXAM_LEVELS } from '@/content/exams/formats';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

export function LibraryView() {
  const { locale } = useLocale();
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 md:px-14 md:py-12">
      <div className="eyebrow mb-4">Bibliothek · {t('navLibrary', locale)}</div>
      <h1 className="font-display font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.03em] m-0 mb-10">Nachschlagen.</h1>

      <section className="mb-11">
        <h2 className="eyebrow m-0 mb-4">Wörterbuch</h2>
        <button
          type="button"
          aria-label={t('searchAnything', locale)}
          onClick={() => window.dispatchEvent(new Event('open-palette'))}
          className="w-full flex items-center gap-[18px] text-left rounded-3xl border border-border bg-card px-8 py-7 text-muted text-[18px] cursor-pointer transition hover:bg-surface-2 hover:border-border-strong"
        >
          <Search size={24} strokeWidth={1.8} aria-hidden="true" className="shrink-0" />
          <span className="flex-1">{t('libDictDesc', locale)}</span>
          <kbd className="text-[13px] border border-border-strong rounded-lg px-2.5 py-1">⌘K</kbd>
        </button>
      </section>

      <section className="mb-11">
        <h2 className="eyebrow m-0 mb-4">Lehrbuch</h2>
        <Link href="/textbook" className="flex items-center gap-[18px] rounded-3xl border border-border bg-card px-8 py-7 no-underline text-text transition hover:bg-surface-2 hover:border-border-strong">
          <span className="flex-1">
            <span className="block font-display font-semibold text-[28px] leading-tight">{t('navTextbook', locale)}</span>
            <span className="block text-[15px] text-muted mt-1.5">{t('libBookDesc', locale)}</span>
          </span>
          <ArrowRight size={20} aria-hidden="true" className="text-muted" />
        </Link>
      </section>

      <section>
        <h2 className="eyebrow m-0 mb-2">Prüfungen</h2>
        <p className="text-[14px] text-muted m-0 mb-5">{t('libExamDesc', locale)}</p>
        {BOARDS.map((board) => (
          <div key={board} className="mb-6">
            <div className="font-display font-semibold text-[20px] mb-3">{BOARD_LABEL[board]}</div>
            <div className="flex flex-wrap gap-4">
              {EXAM_LEVELS.map((level) => (
                <Link
                  key={level}
                  href={`/exams/${board}/${level.toLowerCase()}`}
                  className="flex-1 basis-[180px] rounded-[18px] border border-border bg-card px-5 py-[18px] no-underline text-text transition hover:bg-surface-2 hover:border-border-strong"
                >
                  <span className="block font-display font-bold text-[34px] leading-none">{level}</span>
                  <span className="block text-[13px] text-muted mt-2">{BOARD_LABEL[board]}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <Link href="/exams" className="inline-flex items-center gap-2 text-[15px] font-semibold text-text-2 no-underline hover:text-text">
          {t('examsTitle', locale)} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}

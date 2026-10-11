'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Languages } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { useSettings } from '@/lib/settings-store';
import { t } from '@/lib/ui-strings';
import type { ExamText, Tr } from '@/content/exams/types';

// The in-task switch writes the same setting as the Settings page.
export function useExamTranslations() {
  const { settings, setExamTranslations } = useSettings();
  const { locale } = useLocale();
  return {
    show: settings.examTranslations,
    toggle: () => setExamTranslations(!settings.examTranslations),
    locale,
  };
}

export function TrLine({ tr, className = '' }: { tr?: Tr; className?: string }) {
  const { show, locale } = useExamTranslations();
  if (!show || !tr) return null;
  return (
    <p lang={locale} className={'m-0 mt-1 whitespace-pre-line text-[13.5px] leading-relaxed text-muted italic ' + className}>
      {tr[locale]}
    </p>
  );
}

export function TranslationToggle() {
  const { show, toggle, locale } = useExamTranslations();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={show}
      className={
        'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13.5px] font-rounded font-bold transition ' +
        (show ? 'border-primary bg-[var(--primary-wash)] text-primary' : 'border-border bg-card text-text-2 hover:bg-surface-2')
      }
    >
      <Languages size={15} />
      {t('examShowTr', locale)}
    </button>
  );
}

export function useCountdown(minutes: number, enabled: boolean) {
  const total = minutes * 60;
  const [left, setLeft] = useState(total);
  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [enabled]);
  return { left, reset: () => setLeft(total) };
}

export function formatClock(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function TimerPill({ left, locale }: { left: number; locale: 'en' | 'fr' }) {
  const over = left === 0;
  return (
    <span
      role="timer"
      className={
        'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13.5px] font-rounded font-bold tabular-nums ' +
        (over ? 'border-[var(--bad)] bg-[var(--bad-wash)] text-[var(--bad)]' : 'border-border bg-card text-text-2')
      }
    >
      <Clock size={15} />
      {over ? t('examTimeUp', locale) : formatClock(left)}
    </span>
  );
}

export function ExamTopBar({ backHref, backLabel, title, children }: {
  backHref: string; backLabel: string; title: string; children?: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <Link href={backHref} className="inline-flex items-center gap-1.5 py-2 text-[14px] text-muted hover:text-text no-underline">
        <ArrowLeft size={15} />{backLabel}
      </Link>
      <h1 className="font-rounded font-extrabold text-[clamp(26px,4.5vw,38px)] leading-[1.1] tracking-tight m-0 mt-1">{title}</h1>
      {children && <div className="mt-4 flex flex-wrap items-center gap-2">{children}</div>}
    </div>
  );
}

export function TextCard({ text }: { text: ExamText }) {
  return (
    <div className="rounded-[16px] border border-border bg-card p-4 md:p-5">
      {(text.label || text.title) && (
        <p className="m-0 mb-2 flex items-center gap-2 font-rounded font-bold text-[14px]">
          {text.label && (
            <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[var(--primary-wash)] px-1.5 text-[13px] text-primary uppercase">
              {text.label}
            </span>
          )}
          {text.title && <span lang="de">{text.title}</span>}
        </p>
      )}
      <p lang="de" className="m-0 whitespace-pre-line text-[16px] leading-[1.65]">{text.de}</p>
      <TrLine tr={text.tr} />
    </div>
  );
}

export function PartHeading({ teil, title, instruction, instructionTr }: {
  teil: number; title: string; instruction: string; instructionTr: Tr;
}) {
  return (
    <header className="mb-4">
      {title.trim() !== `Teil ${teil}` && <p className="m-0 text-[12px] font-rounded font-bold tracking-wider text-muted uppercase">Teil {teil}</p>}
      <h2 lang="de" className="font-rounded font-extrabold text-[22px] m-0 mt-0.5">{title}</h2>
      <p lang="de" className="m-0 mt-2 text-[15.5px] leading-relaxed text-text-2">{instruction}</p>
      <TrLine tr={instructionTr} />
    </header>
  );
}

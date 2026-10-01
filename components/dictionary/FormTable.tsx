'use client';
import { Volume2 } from 'lucide-react';
import { speakText } from '@/lib/audio';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

export function PlayButton({ text, label }: { text: string; label?: string }) {
  const { locale } = useLocale();
  return (
    <button
      type="button"
      onClick={() => speakText(text)}
      aria-label={`${t('dictPlay', locale)}: ${label ?? text}`}
      className="grid place-items-center shrink-0 w-10 h-10 rounded-full text-primary hover:bg-[var(--primary-wash)] active:scale-90 transition"
    >
      <Volume2 size={16} strokeWidth={2.2} />
    </button>
  );
}

export function Notice({ children, tone = 'info' }: { children: React.ReactNode; tone?: 'info' | 'warn' }) {
  return (
    <p
      role={tone === 'warn' ? 'status' : undefined}
      className={
        'm-0 rounded-[14px] border px-4 py-3 text-[13.5px] leading-relaxed ' +
        (tone === 'warn'
          ? 'border-[var(--amber)] bg-[color-mix(in_srgb,var(--amber)_12%,var(--card))] text-text'
          : 'border-border bg-surface-2 text-text-2')
      }
    >
      {children}
    </p>
  );
}

export function TableShell({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <div className="overflow-x-auto rounded-[16px] border border-border bg-card">
      <table className="w-full border-collapse text-[15px]">
        {caption && <caption className="label text-muted text-left px-4 pt-3 pb-1">{caption}</caption>}
        {children}
      </table>
    </div>
  );
}

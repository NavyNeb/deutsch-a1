'use client';
import { Loader2, Search, X } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

/**
 * A search bar that is really a door to the ⌘K search modal: it never takes typing itself.
 * Passes the current query along so the modal opens where the learner left off.
 */
export function SearchTrigger({
  query = '',
  onClear,
  loading = false,
  compact = false,
}: {
  query?: string;
  onClear?: () => void;
  loading?: boolean;
  compact?: boolean;
}) {
  const { locale } = useLocale();
  const open = () => window.dispatchEvent(new CustomEvent('open-palette', { detail: { query } }));
  const canClear = Boolean(query && onClear);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={open}
        aria-label={t('dictPlaceholder', locale)}
        className={
          'w-full flex items-center gap-3.5 text-left rounded-full bg-card border border-border-strong cursor-pointer transition hover:bg-surface-2 ' +
          (compact ? 'h-12 pl-4 pr-20' : 'h-[60px] pl-5 pr-28')
        }
      >
        <Search size={compact ? 18 : 20} strokeWidth={1.8} aria-hidden="true" className="shrink-0 text-muted" />
        <span className={'flex-1 min-w-0 truncate font-display font-medium ' + (compact ? 'text-[16px] ' : 'text-[19px] ') + (query ? 'text-text' : 'text-muted')}>
          {query || t('dictPlaceholder', locale)}
        </span>
      </button>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
        {loading && <Loader2 size={18} className="animate-spin text-text" aria-label={t('dictSearching', locale)} />}
        {canClear && (
          <button type="button" onClick={onClear} aria-label="Clear" className="grid place-items-center w-10 h-10 rounded-full text-muted hover:text-text hover:bg-surface-2 transition cursor-pointer border-0 bg-transparent">
            <X size={18} strokeWidth={2} aria-hidden="true" />
          </button>
        )}
        <kbd aria-hidden="true" className="hidden sm:block text-[12px] text-muted border border-border-strong rounded-md px-1.5 py-0.5 pointer-events-none">⌘K</kbd>
      </div>
    </div>
  );
}

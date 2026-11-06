'use client';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

type Props = {
  /** The page's German name, as the eyebrow. */
  name: string;
  onTour: () => void;
  onLater: () => void;
  /** Placement classes decided by the shell (side, offset above the buddy). */
  className: string;
};

/**
 * The first time a kind of page is visited, Kumpel offers to tour it. It waits beside the buddy until the learner
 * answers; it does not move focus, fade away or react to clicks elsewhere.
 */
export function Offer({ name, onTour, onLater, className }: Props) {
  const { locale } = useLocale();
  return (
    <div className={'fixed z-30 flex items-end ' + className}>
      <div
        data-testid="kumpel-offer"
        role="group"
        aria-label={t('kumpelOfferLabel', locale)}
        className="kumpel-fade w-[calc(100vw-96px)] max-w-[300px] rounded-[20px_20px_6px_20px] border border-border-strong bg-card shadow-pop p-4"
      >
        <div className="eyebrow mb-1.5">{name}</div>
        <p className="m-0 mb-3 text-[14px] leading-snug text-text">{t('kumpelOfferBody', locale)}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onTour}
            className="h-11 px-4 rounded-full border-0 bg-cta text-cta-ink text-[14px] font-semibold cursor-pointer"
          >
            Tour starten
          </button>
          <button
            type="button"
            onClick={onLater}
            className="h-11 px-4 rounded-full border border-border-strong bg-transparent text-text text-[14px] font-semibold cursor-pointer hover:bg-surface-2"
          >
            Später
          </button>
        </div>
      </div>
    </div>
  );
}

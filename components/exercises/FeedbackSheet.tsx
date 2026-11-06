import { Check } from 'lucide-react';

type Kind = 'richtig' | 'fast';

const TONE: Record<Kind, { heading: string; color: string; border: string }> = {
  richtig: { heading: 'Richtig!', color: 'var(--ok)', border: 'var(--ok)' },
  fast: { heading: 'Fast!', color: 'var(--ember)', border: 'var(--ember)' },
};

/**
 * The bottom sheet that answers a check: **Richtig!** (ok) or **Fast!** (ember). Mistakes are never red.
 * Buttons only render when they have a handler.
 */
export function FeedbackSheet({
  kind,
  answerLabel,
  answer,
  hintLabel,
  hint,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
}: {
  kind: Kind;
  answerLabel?: string;
  answer?: string;
  hintLabel?: string;
  hint?: string;
  primaryLabel?: string;
  onPrimary?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}) {
  const tone = TONE[kind];
  return (
    <div
      role="status"
      className="sheet-up fixed inset-x-0 bottom-0 z-40 rounded-t-[30px] pb-[max(1.25rem,env(safe-area-inset-bottom))]"
      style={{ background: `color-mix(in srgb, ${tone.color} 15%, var(--s1))`, borderTop: `1.5px solid ${tone.border}` }}
    >
      <div className="w-full max-w-[760px] mx-auto px-5 sm:px-6 pt-6">
        <div className="flex items-center gap-3">
          {kind === 'richtig' && (
            <span aria-hidden="true" className="grid place-items-center w-9 h-9 rounded-full" style={{ background: tone.color, color: '#07130E' }}>
              <Check size={20} strokeWidth={2.6} />
            </span>
          )}
          <span className="font-display font-semibold text-[34px] leading-none tracking-[-0.01em]" style={{ color: tone.color }}>{tone.heading}</span>
        </div>

        {answer && (
          <p className="font-display font-medium text-[26px] leading-snug mt-3 mb-0">
            {answerLabel && <strong className="text-[15px] font-sans font-semibold text-text-2 mr-1.5">{answerLabel}:</strong>}
            <span>{answer}</span>
          </p>
        )}
        {hint && (
          <p role="note" aria-label={hintLabel} className="text-[15px] leading-relaxed text-text-2 mt-3 mb-0">
            {hintLabel && <strong className="text-text mr-1.5">{hintLabel}:</strong>}
            <span>{hint}</span>
          </p>
        )}

        {(onPrimary || onSecondary) && (
          <div className="flex items-center gap-3 mt-5">
            {onPrimary && (
              <button
                type="button"
                onClick={onPrimary}
                className="flex-1 sm:flex-none sm:min-w-[180px] h-[52px] px-7 rounded-full border-0 font-semibold text-[16px] cursor-pointer transition active:scale-[.98]"
                style={{ background: tone.color, color: kind === 'richtig' ? '#07130E' : '#1A0C02' }}
              >
                {primaryLabel}
              </button>
            )}
            {onSecondary && (
              <button type="button" onClick={onSecondary} className="h-[52px] px-4 bg-transparent border-0 text-text-2 underline underline-offset-2 text-[15px] cursor-pointer hover:text-text">
                {secondaryLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

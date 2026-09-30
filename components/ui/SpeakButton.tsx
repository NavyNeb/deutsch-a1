'use client';
import { Mic } from 'lucide-react';
import { useSpeechRecognition } from '@/lib/useSpeechRecognition';
import { bestAlternative } from '@/lib/speech-score';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

// Speaking practice: tap to say the German word; the Web Speech API transcribes
// it and we score it against the target. Renders nothing where the browser
// has no speech recognition (e.g. Firefox), so it never dead-ends.
export function SpeakButton({ target, size = 34 }: { target: string; size?: number }) {
  const { supported, listening, alternatives, listen } = useSpeechRecognition('de-DE');
  const { locale } = useLocale();
  if (!supported) return null;

  const best = alternatives && !listening ? bestAlternative(alternatives, target) : null;
  const ok = best ? best.score.percent >= 70 : null;

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={listen}
        aria-label={t('speak', locale)}
        className={
          'inline-flex items-center justify-center rounded-full shrink-0 transition-[transform,filter] duration-150 active:scale-90 ' +
          (listening ? 'bg-[var(--bad)] text-white animate-pulse' : 'bg-[var(--primary-wash)] text-primary hover:brightness-105')
        }
        style={{ width: size, height: size }}
      >
        <Mic size={Math.round(size * 0.5)} strokeWidth={2.2} />
      </button>
      {listening && <span className="text-muted text-sm">{t('listening', locale)}</span>}
      {alternatives != null && !listening && (
        ok ? (
          <span className="text-[var(--good)] text-sm font-rounded font-bold">✓ {t('soundsGood', locale)}</span>
        ) : (
          <span className="text-muted text-sm">{t('notQuiteHeard', locale)}: „{best?.text ?? alternatives[0] ?? '…'}“</span>
        )
      )}
    </div>
  );
}

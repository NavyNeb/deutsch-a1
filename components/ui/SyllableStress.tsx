import type { Gender } from '@/content/types';
import { genderMeta } from '@/lib/gender';

/** Syllables with the stressed (UPPERCASE) one emphasised — underlined in the noun's gender colour when known. */
export function SyllableStress({ syllables, gender = null }: { syllables: string[]; gender?: Gender }) {
  const meta = genderMeta(gender);
  return (
    <span className="font-display font-medium text-text-2">
      {syllables.map((s, i) => {
        const stressed = s === s.toUpperCase() && /[A-ZÄÖÜẞ]/.test(s);
        return (
          <span key={i}>
            <span
              data-stress={String(stressed)}
              style={{
                fontWeight: stressed ? 700 : 400,
                color: stressed ? 'var(--t1)' : undefined,
                opacity: stressed ? 1 : 0.75,
                borderBottom: stressed && meta ? `3px solid ${meta.fill}` : undefined,
                paddingBottom: stressed && meta ? 2 : undefined,
              }}
            >
              {s}
            </span>
            {i < syllables.length - 1 ? <span className="text-muted">{' · '}</span> : ''}
          </span>
        );
      })}
    </span>
  );
}

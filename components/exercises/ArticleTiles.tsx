'use client';
import type { ArticleGender } from '@/lib/gender';
import { genderMeta } from '@/lib/gender';
import { GenderShape } from '@/components/ui/GenderShape';

const ARTICLES: ArticleGender[] = ['der', 'die', 'das'];

/** der / die / das as three large tiles — shape + article, the Dreiklang in the learner's hands. */
export function ArticleTiles({
  value,
  onChange,
  disabled = false,
  correct,
}: {
  value: ArticleGender | undefined;
  onChange: (a: ArticleGender) => void;
  disabled?: boolean;
  /** Set only once the answer has been revealed: that tile gets the "ok" ring. */
  correct?: ArticleGender;
}) {
  return (
    <div className="flex gap-3">
      {ARTICLES.map((a) => {
        const meta = genderMeta(a)!;
        const on = value === a;
        const isCorrect = correct === a;
        return (
          <button
            key={a}
            type="button"
            aria-label={a}
            aria-pressed={on}
            data-correct={isCorrect ? 'true' : undefined}
            disabled={disabled}
            onClick={() => onChange(a)}
            className="flex-1 h-[150px] sm:h-[170px] rounded-[26px] border-[1.5px] flex flex-col items-center justify-center gap-4 font-display cursor-pointer transition-[transform,border-color,background] duration-200 disabled:cursor-default"
            style={{
              borderColor: isCorrect ? 'var(--ok)' : on ? meta.fill : 'var(--line2)',
              background: on ? `color-mix(in srgb, ${meta.fill} 16%, var(--s1))` : 'var(--s1)',
              transform: on ? 'translateY(-6px)' : undefined,
            }}
          >
            <GenderShape gender={a} size={34} />
            <span className="font-semibold text-[34px] leading-none" style={{ color: meta.text }}>{a}</span>
          </button>
        );
      })}
    </div>
  );
}

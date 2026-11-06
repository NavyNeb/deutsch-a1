export type KumpelMood = 'rest' | 'smile' | 'think' | 'point' | 'wave' | 'sleep';

type Props = {
  mood?: KumpelMood;
  size?: number;
  className?: string;
  /** Pass a label to expose the face to screen readers; otherwise it is decorative. */
  label?: string;
};

const ink = 'fill-cta-ink';
const stroke = 'stroke-cta-ink';

/** Kumpel's face: a circle in the CTA colour with a few strokes. No gender colour; colour stays grammar. */
export function KumpelFace({ mood = 'rest', size = 52, className, label }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    >
      <circle cx="32" cy="32" r="30" className="fill-cta" />
      {mood === 'rest' && (
        <>
          <circle cx="23" cy="28" r="4.2" className={ink} />
          <circle cx="41" cy="28" r="4.2" className={ink} />
          <path d="M23 41c3 3.5 15 3.5 18 0" className={stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
        </>
      )}
      {mood === 'smile' && (
        <>
          <path d="M18.5 30a4.5 4.5 0 019 0" className={stroke} strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <path d="M36.5 30a4.5 4.5 0 019 0" className={stroke} strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <path d="M21 39h22c0 6-5 10-11 10s-11-4-11-10z" className={ink} />
        </>
      )}
      {mood === 'think' && (
        <>
          <circle cx="24" cy="26" r="4.2" className={ink} />
          <circle cx="42" cy="26" r="4.2" className={ink} />
          <path d="M26 43h11" className={stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
        </>
      )}
      {mood === 'point' && (
        <>
          <circle cx="23" cy="28" r="5.4" className={ink} />
          <circle cx="41" cy="28" r="5.4" className={ink} />
          <circle cx="24.5" cy="26.5" r="1.6" className="fill-cta" />
          <circle cx="42.5" cy="26.5" r="1.6" className="fill-cta" />
          <circle cx="32" cy="42" r="3" className={ink} />
        </>
      )}
      {mood === 'wave' && (
        <>
          <circle cx="23" cy="28" r="4.2" className={ink} />
          <circle cx="41" cy="28" r="4.2" className={ink} />
          <path d="M22 39c3 6 17 6 20 0" className={stroke} strokeWidth="3.2" strokeLinecap="round" fill="none" />
        </>
      )}
      {mood === 'sleep' && (
        <>
          <path d="M17.5 29c2 3 7 3 9 0" className={stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M37.5 29c2 3 7 3 9 0" className={stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M28 43h8" className={stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
        </>
      )}
    </svg>
  );
}

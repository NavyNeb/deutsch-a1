type Expression = 'happy' | 'celebrate' | 'think';

/**
 * Ada — the course's friendly guide. A rounded, approachable character drawn in
 * SVG so it inherits the theme (uses --primary / --amber / --primary-ink) and
 * stays crisp at any size. Purely decorative: hidden from assistive tech.
 */
export function Mascot({
  size = 44,
  expression = 'happy',
  className = '',
}: {
  size?: number;
  expression?: Expression;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* head */}
      <rect x="6" y="8" width="36" height="32" rx="12" fill="var(--primary)" />
      {/* little antenna / tuft */}
      <rect x="21" y="2.5" width="6" height="7" rx="3" fill="var(--amber)" />
      {/* eyes */}
      <circle cx="18" cy="23" r="3.4" fill="#fff" />
      <circle cx="30" cy="23" r="3.4" fill="#fff" />
      {expression === 'think' ? (
        <>
          <circle cx="18" cy="24" r="1.5" fill="var(--primary-ink)" />
          <circle cx="30" cy="24" r="1.5" fill="var(--primary-ink)" />
        </>
      ) : (
        <>
          <circle cx="18.8" cy="23.8" r="1.5" fill="var(--primary-ink)" />
          <circle cx="30.8" cy="23.8" r="1.5" fill="var(--primary-ink)" />
        </>
      )}
      {/* mouth */}
      {expression === 'celebrate' ? (
        <path d="M18 29c1.6 3 10.4 3 12 0v0a6 6 0 0 1-12 0Z" fill="#fff" />
      ) : expression === 'think' ? (
        <path d="M20 31h6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      ) : (
        <path
          d="M19 30c1.6 1.6 8.4 1.6 10 0"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      )}
    </svg>
  );
}

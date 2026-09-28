export function SyllableStress({ syllables }: { syllables: string[] }) {
  return (
    <span className="text-primary font-medium italic font-rounded">
      {syllables.map((s, i) => {
        const stressed = s === s.toUpperCase() && /[A-ZÄÖÜẞ]/.test(s);
        return (
          <span key={i}>
            <span data-stress={String(stressed)} style={{ fontWeight: stressed ? 700 : 400, opacity: stressed ? 1 : 0.7 }}>
              {s}
            </span>
            {i < syllables.length - 1 ? ' · ' : ''}
          </span>
        );
      })}
    </span>
  );
}

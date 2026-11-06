export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-text"
        style={{
          width: `${Math.round(Math.max(0, Math.min(1, value)) * 100)}%`,
          transition: 'width .35s cubic-bezier(.2,.7,.2,1)',
        }}
      />
    </div>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div style={{ height: 5, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
      <div style={{ width: `${Math.round(value * 100)}%`, height: '100%', background: 'var(--accent)', transition: 'width .3s' }} />
    </div>
  );
}

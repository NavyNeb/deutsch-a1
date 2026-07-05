export function Card({ children }: { children: React.ReactNode }) {
  return <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 6, padding: 36 }}>{children}</div>;
}

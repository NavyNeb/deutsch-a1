export function Card({ children }: { children: React.ReactNode }) {
  return <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 4, padding: 24 }}>{children}</div>;
}

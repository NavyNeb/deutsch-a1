import { RoleplayPlayer } from '@/components/sprechen/RoleplayPlayer';

export const metadata = { title: 'Role-play — Deutsch' };

export default async function RoleplayDialoguePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <RoleplayPlayer id={decodeURIComponent(id)} />;
}

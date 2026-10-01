import { notFound } from 'next/navigation';
import { getSpecial, specials } from '@/content/specials';
import { SpecialOverview } from '@/components/specials/SpecialOverview';

export function generateStaticParams() {
  return specials.map((s) => ({ slug: s.special.slug }));
}

export default async function SpecialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const special = getSpecial(slug);
  if (!special) notFound();
  return <SpecialOverview special={special} />;
}

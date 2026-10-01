import { notFound } from 'next/navigation';
import { getSpecial, specials } from '@/content/specials';
import { StepPlayer } from '@/components/learn/StepPlayer';

export function generateStaticParams() {
  return specials.map((s) => ({ slug: s.special.slug }));
}

export default async function SpecialLearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const special = getSpecial(slug);
  if (!special) notFound();
  return <StepPlayer lesson={special} exitHref={`/specials/${slug}`} reviewHref={`/specials/${slug}/review`} />;
}

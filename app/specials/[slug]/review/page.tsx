import { notFound } from 'next/navigation';
import { getSpecial, specials } from '@/content/specials';
import { SpecialReview } from '@/components/specials/SpecialReview';

export function generateStaticParams() {
  return specials.map((s) => ({ slug: s.special.slug }));
}

export default async function SpecialReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const special = getSpecial(slug);
  if (!special) notFound();
  return <SpecialReview special={special} />;
}

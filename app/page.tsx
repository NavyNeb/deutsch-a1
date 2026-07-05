import { LearningPath } from '@/components/home/LearningPath';
import { WordsToReview } from '@/components/home/WordsToReview';
import { HomeHeader } from '@/components/home/HomeHeader';

export default function Home() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24, width: '100%' }}>
      <HomeHeader />

      <section style={{ marginBottom: 40 }}>
        <LearningPath />
      </section>

      <WordsToReview />
    </div>
  );
}

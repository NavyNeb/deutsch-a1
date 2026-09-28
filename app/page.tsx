import { LearningPath } from '@/components/home/LearningPath';
import { WordsToReview } from '@/components/home/WordsToReview';
import { HomeHeader } from '@/components/home/HomeHeader';
import { HomeStats } from '@/components/home/HomeStats';
import { DueTodayCard } from '@/components/home/DueTodayCard';
import { OnboardingGate } from '@/components/home/OnboardingGate';

export default function Home() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24, width: '100%' }}>
      <OnboardingGate />
      <HomeHeader />
      <HomeStats />
      <DueTodayCard />

      <section style={{ marginBottom: 40 }}>
        <LearningPath />
      </section>

      <WordsToReview />
    </div>
  );
}

import { Hero } from '@/components/home/Hero';
import { ContinueCard } from '@/components/home/ContinueCard';
import { HomeStats } from '@/components/home/HomeStats';
import { DueTodayCard } from '@/components/home/DueTodayCard';
import { LearningPath } from '@/components/home/LearningPath';
import { OnboardingGate } from '@/components/home/OnboardingGate';
import { InstallBanner } from '@/components/pwa/InstallBanner';

export default function Home() {
  return (
    <>
      <OnboardingGate />
      <Hero />
      <div className="mx-auto max-w-[1200px] px-5 pb-4">
        <div className="max-w-[920px]">
          <ContinueCard />
          <DueTodayCard />
          <HomeStats />
          <InstallBanner />
        </div>
        <LearningPath />
      </div>
    </>
  );
}

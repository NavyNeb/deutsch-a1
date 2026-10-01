import { Hero } from '@/components/home/Hero';
import { HomeStats } from '@/components/home/HomeStats';
import { DueTodayCard } from '@/components/home/DueTodayCard';
import { SpecialsRow } from '@/components/home/SpecialsRow';
import { LearningPath } from '@/components/home/LearningPath';
import { OnboardingGate } from '@/components/home/OnboardingGate';

export default function Home() {
  return (
    <>
      <OnboardingGate />
      <Hero />
      <div className="mx-auto max-w-[1200px] px-5 pb-4">
        <div className="max-w-[920px]">
          <HomeStats />
          <DueTodayCard />
        </div>
        <SpecialsRow />
        <LearningPath />
      </div>
    </>
  );
}

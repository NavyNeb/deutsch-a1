import { HomeSwitch } from '@/components/home/HomeSwitch';
import { OnboardingGate } from '@/components/home/OnboardingGate';
import { InstallBanner } from '@/components/pwa/InstallBanner';

export default function Home() {
  return (
    <>
      <OnboardingGate />
      <HomeSwitch />
      <div className="mx-auto max-w-[1100px] px-5 md:px-14 pb-8">
        <InstallBanner />
      </div>
    </>
  );
}

import { LearningPath } from '@/components/home/LearningPath';
import { WordsToReview } from '@/components/home/WordsToReview';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export default function Home() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24, width: '100%' }}>
      <header style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, margin: '0 0 8px' }}>Deutsch A1</h1>
          <p style={{ color: 'var(--muted)' }}>
            Your German A1 learning path — work through each lesson, track your progress, and review the words you find hard.
          </p>
        </div>
        <LanguageToggle />
      </header>

      <section style={{ marginBottom: 40 }}>
        <LearningPath />
      </section>

      <WordsToReview />
    </div>
  );
}

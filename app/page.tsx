import { LearningPath } from '@/components/home/LearningPath';
import { WordsToReview } from '@/components/home/WordsToReview';

export default function Home() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24, width: '100%' }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, margin: '0 0 8px' }}>Deutsch A1</h1>
        <p style={{ color: 'var(--muted)' }}>
          Your German A1 learning path — work through each lesson, track your progress, and review the words you find hard.
        </p>
      </header>

      <section style={{ marginBottom: 40 }}>
        <LearningPath />
      </section>

      <WordsToReview />
    </div>
  );
}

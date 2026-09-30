import { QuizGame } from '@/components/games/QuizGame';

export default function SprintPage() {
  return (
    <QuizGame
      mode="text"
      gradient="linear-gradient(135deg,#2B788B,#57A9BC)"
      illustration="/illustrations/runner.png"
      titleKey="sprintTitle"
      taglineKey="sprintTagline"
      howToKey="howToPlaySprint"
    />
  );
}

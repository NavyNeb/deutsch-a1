import { QuizGame } from '@/components/games/QuizGame';

export default function AudioGamePage() {
  return (
    <QuizGame
      mode="audio"
      gradient="linear-gradient(135deg,#7A6BC4,#A99BE4)"
      illustration="/illustrations/greeter.png"
      titleKey="audioTitle"
      taglineKey="audioTagline"
      howToKey="howToPlayAudio"
    />
  );
}

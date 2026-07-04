import { fnv1a, TTS_VOICE, officialTrackName, ttsFileName } from './audio-names.mjs';

export { fnv1a, TTS_VOICE, officialTrackName, ttsFileName };

export function officialSrc(lesson: number, activity: string): string {
  return `/audio/${officialTrackName(lesson, activity)}`;
}
export function ttsSrc(text: string): string {
  return `/audio/${ttsFileName(text)}`;
}

type AudioSource = { official: { lesson: number; activity: string } } | { ttsText: string };
export function audioSrc(a: AudioSource): string {
  return 'official' in a ? officialSrc(a.official.lesson, a.official.activity) : ttsSrc(a.ttsText);
}

export function playAudio(src: string): Promise<void> {
  const audio = new Audio(src);
  return audio.play().catch(() => { /* ignore autoplay/user-gesture errors */ });
}

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

// A single, persistent audio element reused for every clip. Creating a fresh
// `new Audio()` per tap works on desktop but goes silent on mobile: the
// un-referenced element is garbage-collected mid-load and isn't reliably
// unlocked by the user gesture. One retained element, played within the tap
// that sets it, stays unlocked and audible across mobile browsers.
let sharedAudio: HTMLAudioElement | null = null;

export function playAudio(src: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (!sharedAudio) sharedAudio = new Audio();
  sharedAudio.src = src;
  try { sharedAudio.currentTime = 0; } catch { /* not always settable before load */ }
  return sharedAudio.play().catch(() => { /* ignore autoplay/user-gesture errors */ });
}

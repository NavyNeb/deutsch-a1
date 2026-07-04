export const TTS_VOICE = 'de-DE-KatjaNeural';

// FNV-1a (32-bit) — pure, identical in node and browser
function fnv1a(str: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16);
}

export function officialTrackName(lesson: number, activity: string): string {
  return `l${lesson}-${activity.toLowerCase().replace(/\s+/g, '')}.mp3`;
}
export function ttsFileName(text: string): string {
  return `tts-${fnv1a(TTS_VOICE + '|' + text.trim())}.mp3`;
}
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

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

// Playback rate, persisted so a learner's "slow it down" preference survives
// reloads. Applied to every clip. 1 = normal; 0.75 = the slow-listening speed.
const RATE_KEY = 'deutsch-a1-audio-rate';
let playbackRate = 1;
if (typeof window !== 'undefined') {
  try { const r = Number(localStorage.getItem(RATE_KEY)); if (r > 0) playbackRate = r; } catch { /* ignore */ }
}
export function getPlaybackRate(): number { return playbackRate; }
export function setPlaybackRate(rate: number): void {
  playbackRate = rate;
  try { localStorage.setItem(RATE_KEY, String(rate)); } catch { /* ignore */ }
  if (sharedAudio) sharedAudio.playbackRate = rate;
}

// Browser text-to-speech for text that has no pre-generated clip (e.g. any
// dictionary word outside the lessons). Quality depends on the device's voices.
export function speakText(text: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  const voices = synth.getVoices();
  const voice = voices.find((v) => v.lang === 'de-DE') ?? voices.find((v) => v.lang.startsWith('de'));
  if (voice) u.voice = voice;
  u.rate = playbackRate;
  synth.speak(u);
}

export function playAudio(src: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (!sharedAudio) sharedAudio = new Audio();
  sharedAudio.src = src;
  sharedAudio.playbackRate = playbackRate;
  try { sharedAudio.currentTime = 0; } catch { /* not always settable before load */ }
  return sharedAudio.play().catch(() => { /* ignore autoplay/user-gesture errors */ });
}

// Plays the pre-generated clip for `text`; where there is none (new content before its audio is generated,
// or a phrase built on the fly) the browser voice reads it instead.
export function playOrSpeak(text: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (!sharedAudio) sharedAudio = new Audio();
  sharedAudio.src = ttsSrc(text);
  sharedAudio.playbackRate = playbackRate;
  try { sharedAudio.currentTime = 0; } catch { /* not always settable before load */ }
  return sharedAudio.play().catch(() => speakText(text));
}

// Plays a clip (or the browser voice when there is none) and resolves when it has finished, so a role-play can
// wait for the partner to stop talking before it is the learner's turn.
export function playUntilEnd(text: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (!sharedAudio) sharedAudio = new Audio();
  const a = sharedAudio;
  return new Promise<void>((resolve) => {
    let settled = false;
    const done = () => { if (settled) return; settled = true; a.removeEventListener('ended', done); a.removeEventListener('error', fallback); resolve(); };
    const fallback = () => {
      a.removeEventListener('ended', done);
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) { done(); return; }
      speakText(text);
      const u = window.speechSynthesis;
      const poll = setInterval(() => { if (!u.speaking && !u.pending) { clearInterval(poll); done(); } }, 200);
      setTimeout(() => { clearInterval(poll); done(); }, 15000);
    };
    a.addEventListener('ended', done);
    a.addEventListener('error', fallback, { once: true });
    a.src = ttsSrc(text);
    a.playbackRate = playbackRate;
    try { a.currentTime = 0; } catch { /* not always settable before load */ }
    a.play().catch(fallback);
  });
}

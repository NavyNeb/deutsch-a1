export function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(16);
}
export const TTS_VOICE = 'de-DE-KatjaNeural';
export const officialTrackName = (lesson, activity) => `l${lesson}-${activity.toLowerCase().replace(/\s+/g, '')}.mp3`;
export const ttsFileName = (text) => `tts-${fnv1a(TTS_VOICE + '|' + text.trim())}.mp3`;

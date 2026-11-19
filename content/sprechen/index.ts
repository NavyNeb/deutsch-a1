import { PHRASES as RAW_PHRASES, PHRASE_FUNCTIONS as RAW_FUNCTIONS } from './redemittel.mjs';
import { TALK_TOPICS as RAW_TOPICS } from './topics.mjs';
import { MINIMAL_PAIRS as RAW_PAIRS, SOUND_GROUPS as RAW_GROUPS } from './minimal-pairs.mjs';

// Typed views of the plain .mjs content (the audio script reads the .mjs files directly).

export type SpeakLevelBX = 'B1' | 'B2';

export type PhraseFunction = { id: string; en: string; fr: string };
export type Phrase = { id: string; fn: string; level: SpeakLevelBX; de: string; en: string; fr: string; gap: string };
export type TalkTopic = { id: string; level: SpeakLevelBX; de: string; en: string; fr: string; points: string[]; words: string[] };
export type SoundGroup = { id: string; en: string; fr: string; tip: { en: string; fr: string } };
export type MinimalPair = { id: string; group: string; a: string; b: string; ea: string; eb: string; fa: string; fb: string };

export const PHRASE_FUNCTIONS = RAW_FUNCTIONS as PhraseFunction[];
export const PHRASES = RAW_PHRASES as Phrase[];
export const TALK_TOPICS = RAW_TOPICS as TalkTopic[];
export const SOUND_GROUPS = RAW_GROUPS as SoundGroup[];
export const MINIMAL_PAIRS = RAW_PAIRS as MinimalPair[];

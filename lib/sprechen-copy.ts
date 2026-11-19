import type { Locale } from './locale-store';

// Words on the Sprechen (speaking) pages, English and French. Kept apart from ui-strings so the speaking
// trainer can grow without touching the shared list; `sprechen-copy.test.ts` checks every key has both.

type Pair = { en: string; fr: string };

export const SPRECHEN = {
  // Hub
  hubTitle: { en: 'Speaking', fr: 'Expression orale' },
  hubSubtitle: { en: 'Talk out loud every day. Repeat, role-play, give short talks and rehearse the real B1 and B2 oral exams.', fr: 'Parle à voix haute chaque jour. Répète, joue des dialogues, fais de courts exposés et répète les vrais oraux B1 et B2.' },
  weekMinutes: { en: 'min this week', fr: 'min cette semaine' },
  weekGoal: { en: 'Goal', fr: 'Objectif' },
  streakDays: { en: 'day streak', fr: 'jours d’affilée' },
  progressLink: { en: 'My speaking progress', fr: 'Mes progrès à l’oral' },
  backToHub: { en: 'Speaking', fr: 'Expression orale' },
  repeatTitle: { en: 'Listen and repeat', fr: 'Écouter et répéter' },
  repeatTag: { en: 'Copy native sentences and see which words you got.', fr: 'Imite des phrases natives et vois quels mots sont justes.' },
  roleplayTitle: { en: 'Role-play', fr: 'Jeu de rôle' },
  roleplayTag: { en: 'Play one side of the lesson dialogues. The other voice answers you.', fr: 'Joue un rôle des dialogues de leçon. L’autre voix te répond.' },
  phrasesTitle: { en: 'Exam phrases', fr: 'Formules d’examen' },
  phrasesTag: { en: 'The sentences that win points: opinions, agreeing, suggesting, asking back.', fr: 'Les phrases qui rapportent des points : opinion, accord, proposition, relance.' },
  talkTitle: { en: 'Topic talks', fr: 'Exposés sur un thème' },
  talkTag: { en: 'Speak 60 seconds to 4 minutes on a topic and get your numbers.', fr: 'Parle de 60 secondes à 4 minutes sur un thème et obtiens tes chiffres.' },
  examTitle: { en: 'Mock oral exam', fr: 'Oral blanc' },
  examTag: { en: 'Goethe, telc, ÖSD and DTZ parts with an examiner voice and timers.', fr: 'Épreuves Goethe, telc, ÖSD et DTZ avec voix d’examinateur et chronos.' },
  soundsTitle: { en: 'Sounds', fr: 'Sons' },
  soundsTag: { en: 'Minimal pairs: ü/u, ö/o, ich/ach, sch/s and more.', fr: 'Paires minimales : ü/u, ö/o, ich/ach, sch/s et plus.' },
  partnerTitle: { en: 'Talk with an AI partner', fr: 'Parler avec un partenaire IA' },
  partnerTag: { en: 'Free conversation, exam partner and corrections at the end.', fr: 'Conversation libre, partenaire d’examen et corrections à la fin.' },
  open: { en: 'Open', fr: 'Ouvrir' },

  // Shared
  level: { en: 'Level', fr: 'Niveau' },
  start: { en: 'Start', fr: 'Commencer' },
  stop: { en: 'Stop', fr: 'Arrêter' },
  again: { en: 'Again', fr: 'Encore' },
  next: { en: 'Next', fr: 'Suivant' },
  done: { en: 'Done', fr: 'Terminé' },
  back: { en: 'Back', fr: 'Retour' },
  listen: { en: 'Listen', fr: 'Écouter' },
  playMine: { en: 'My voice', fr: 'Ma voix' },
  playModel: { en: 'Model', fr: 'Modèle' },
  compare: { en: 'Compare', fr: 'Comparer' },
  heardYou: { en: 'The app heard', fr: 'L’appli a entendu' },
  noRecognition: { en: 'This browser cannot turn speech into text. You can still record yourself and listen back; use Chrome, Edge or Safari for the score.', fr: 'Ce navigateur ne transforme pas la voix en texte. Tu peux quand même t’enregistrer et t’écouter ; utilise Chrome, Edge ou Safari pour le score.' },
  noRecorder: { en: 'Recording is not available here, so there is no replay.', fr: 'L’enregistrement n’est pas disponible ici, donc pas de réécoute.' },
  micDenied: { en: 'The microphone is blocked. Allow it in the browser address bar and try again.', fr: 'Le micro est bloqué. Autorise-le dans la barre d’adresse du navigateur et réessaie.' },
  honestNote: { en: 'The score checks which words were recognised, not your accent. Listen to your own recording against the model to judge the sound.', fr: 'Le score vérifie les mots reconnus, pas ton accent. Écoute ton enregistrement face au modèle pour juger le son.' },
  privacy: { en: 'Recordings stay on this device. Speech recognition is done by your browser, which may send the audio to its provider.', fr: 'Les enregistrements restent sur cet appareil. La reconnaissance vocale est faite par ton navigateur, qui peut envoyer l’audio à son fournisseur.' },

  // Topic talks
  talkPick: { en: 'Pick a topic', fr: 'Choisis un thème' },
  talkLength: { en: 'Length', fr: 'Durée' },
  talkSeconds: { en: 'seconds', fr: 'secondes' },
  talkIdeas: { en: 'Say something about', fr: 'Dis quelque chose sur' },
  talkWords: { en: 'Useful words', fr: 'Mots utiles' },
  talkStartSpeaking: { en: 'Start speaking', fr: 'Je commence à parler' },
  talkRandom: { en: 'Surprise me', fr: 'Surprends-moi' },
  talkTime: { en: 'Time', fr: 'Temps' },
  talkLive: { en: 'What you said', fr: 'Ce que tu as dit' },
  talkResult: { en: 'Your talk in numbers', fr: 'Ton exposé en chiffres' },
  talkWordsStat: { en: 'words', fr: 'mots' },
  talkWpm: { en: 'words per minute', fr: 'mots par minute' },
  talkVariety: { en: 'different words', fr: 'mots différents' },
  talkFillers: { en: 'filler sounds', fr: 'bruits d’hésitation' },
  talkConnectors: { en: 'connectors used', fr: 'connecteurs utilisés' },
  talkKonj: { en: 'Konjunktiv II forms', fr: 'formes du Konjunktiv II' },
  talkTips: { en: 'Next time', fr: 'La prochaine fois' },
  talkSaved: { en: 'Saved to your recordings', fr: 'Ajouté à tes enregistrements' },
  tipSpeakMore: { en: 'Speak longer: aim for the full time and at least the target number of words.', fr: 'Parle plus longtemps : vise le temps complet et au moins le nombre de mots cible.' },
  tipSlowPace: { en: 'You paused a lot. Keep going with simple sentences instead of stopping to find the perfect word.', fr: 'Tu as fait beaucoup de pauses. Continue avec des phrases simples au lieu de chercher le mot parfait.' },
  tipFastPace: { en: 'You spoke very fast. Slow down a little so every word is clear.', fr: 'Tu as parlé très vite. Ralentis un peu pour que chaque mot soit clair.' },
  tipMoreConnectors: { en: 'Link your ideas: weil, deshalb, obwohl, einerseits … andererseits, zum Beispiel.', fr: 'Relie tes idées : weil, deshalb, obwohl, einerseits … andererseits, zum Beispiel.' },
  tipTryKonjunktiv: { en: 'Add a polite or hypothetical sentence: Ich würde …, Ich wäre …, Ich hätte gern …', fr: 'Ajoute une phrase polie ou hypothétique : Ich würde …, Ich wäre …, Ich hätte gern …' },
  tipMoreVariety: { en: 'You repeated the same words. Use synonyms and more exact words.', fr: 'Tu as répété les mêmes mots. Utilise des synonymes et des mots plus précis.' },
  tipGreat: { en: 'Strong talk. Try a harder topic or a longer time.', fr: 'Bel exposé. Essaie un thème plus difficile ou une durée plus longue.' },

  // Exam phrases
  phrasesPick: { en: 'Pick what you want to say', fr: 'Choisis ce que tu veux dire' },
  phrasesFlip: { en: 'Show meaning', fr: 'Voir le sens' },
  phrasesSayIt: { en: 'Say it aloud', fr: 'Dis-le à voix haute' },
  phrasesMine: { en: 'Got it', fr: 'Je l’ai' },
  phrasesAgain: { en: 'Again later', fr: 'À revoir' },
  phrasesFill: { en: 'Fill the gap, then say the whole sentence', fr: 'Complète le trou, puis dis toute la phrase' },
  phrasesCount: { en: 'phrases', fr: 'formules' },
  phrasesKnown: { en: 'known', fr: 'connues' },

  // Role-play
  roleplayPick: { en: 'Choose a dialogue', fr: 'Choisis un dialogue' },
  roleplayYou: { en: 'You', fr: 'Toi' },
  roleplayPlayAs: { en: 'Play as', fr: 'Jouer le rôle de' },
  roleplayYourTurn: { en: 'Your turn: say this line', fr: 'À toi : dis cette réplique' },
  roleplayHeard: { en: 'Your line', fr: 'Ta réplique' },
  roleplayDone: { en: 'Dialogue finished', fr: 'Dialogue terminé' },
  roleplayAverage: { en: 'Average', fr: 'Moyenne' },
  roleplayShowLine: { en: 'Show the line', fr: 'Voir la réplique' },
  roleplayHideLine: { en: 'Hide the line (harder)', fr: 'Cacher la réplique (plus dur)' },
  roleplayCount: { en: 'dialogues', fr: 'dialogues' },

  // Sounds
  soundsPair: { en: 'Which one do you hear?', fr: 'Lequel entends-tu ?' },
  soundsSay: { en: 'Now say both', fr: 'Dis maintenant les deux' },
  soundsScore: { en: 'right', fr: 'justes' },
} satisfies Record<string, Pair>;

export type SprechenKey = keyof typeof SPRECHEN;

export function sc(key: SprechenKey, locale: Locale): string {
  const p = SPRECHEN[key];
  return locale === 'fr' ? p.fr : p.en;
}

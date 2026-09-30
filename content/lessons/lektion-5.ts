import type { Lesson } from '../types';

export const lektion5: Lesson = {
  id: 'l5', level: 'A1', module: 2, number: 6,
  title: { de: 'Uhrzeit und Alltag', en: 'Time and daily routine', fr: 'L’heure et le quotidien' },
  theme: 'Telling the time, days of the week, and daily activities',
  themeFr: 'Dire l’heure, les jours de la semaine et les activités quotidiennes',
  goals: ['Tell the time with "Es ist … Uhr"', 'Name the days of the week', 'Talk about your daily routine', 'Use separable verbs like "aufstehen"'],
  goalsFr: ['Dire l’heure avec « Es ist … Uhr »', 'Nommer les jours de la semaine', 'Parler de ta routine quotidienne', 'Utiliser les verbes à particule comme « aufstehen »'],
  steps: [
    { kind: 'intro', title: 'Mein Tag ⏰', titleFr: 'Ma journée ⏰',
      scene: 'Talking about what you do and when during the day.', sceneFr: 'On parle de ce qu’on fait et à quel moment de la journée.',
      goals: ['Ask and tell the time', 'Say the days of the week', 'Describe a daily routine', 'Use separable verbs correctly'],
      goalsFr: ['Demander et dire l’heure', 'Dire les jours de la semaine', 'Décrire une routine quotidienne', 'Utiliser correctement les verbes à particule'] },

    { kind: 'vocab', item: { id: 'l5-uhr', german: 'die Uhr', english: 'the clock / o’clock', french: 'l’horloge / heure', gender: 'die', syllables: ['UHR'], pronunciation: 'dee OOR', example: { de: 'Es ist acht Uhr.', en: 'It is eight o’clock.', fr: 'Il est huit heures.' } } },
    { kind: 'vocab', item: { id: 'l5-uhrzeit', german: 'die Uhrzeit', english: 'the time (of day)', french: 'l’heure (qu’il est)', gender: 'die', syllables: ['UHR', 'zeit'], pronunciation: 'OOR-tsait', example: { de: 'Wie ist die Uhrzeit?', en: 'What is the time?', fr: 'Quelle heure est-il ?' } } },
    { kind: 'vocab', item: { id: 'l5-tag', german: 'der Tag', english: 'the day', french: 'le jour', gender: 'der', syllables: ['TAG'], pronunciation: 'dair TAHK', example: { de: 'Der Tag beginnt um sieben Uhr.', en: 'The day starts at seven o’clock.', fr: 'La journée commence à sept heures.' } } },
    { kind: 'vocab', item: { id: 'l5-woche', german: 'die Woche', english: 'the week', french: 'la semaine', gender: 'die', syllables: ['WO', 'che'], pronunciation: 'dee VOKH-uh', example: { de: 'Die Woche hat sieben Tage.', en: 'The week has seven days.', fr: 'La semaine a sept jours.' } } },
    { kind: 'vocab', item: { id: 'l5-montag', german: 'der Montag', english: 'Monday', french: 'lundi', gender: 'der', syllables: ['MON', 'tag'], pronunciation: 'dair MOHN-tahk', example: { de: 'Am Montag arbeite ich.', en: 'On Monday I work.', fr: 'Le lundi, je travaille.' } } },
    { kind: 'vocab', item: { id: 'l5-aufstehen', german: 'aufstehen', english: 'to get up', french: 'se lever', gender: null, syllables: ['AUF', 'ste', 'hen'], pronunciation: 'OWF-shtay-en', example: { de: 'Ich stehe um sieben Uhr auf.', en: 'I get up at seven o’clock.', fr: 'Je me lève à sept heures.' } } },
    { kind: 'vocab', item: { id: 'l5-arbeiten', german: 'arbeiten', english: 'to work', french: 'travailler', gender: null, syllables: ['AR', 'bei', 'ten'], pronunciation: 'AR-bai-ten', example: { de: 'Ich arbeite von neun bis fünf.', en: 'I work from nine to five.', fr: 'Je travaille de neuf à cinq heures.' } } },
    { kind: 'vocab', item: { id: 'l5-essen', german: 'essen', english: 'to eat', french: 'manger', gender: null, syllables: ['ES', 'sen'], pronunciation: 'ESS-en', example: { de: 'Mittags esse ich in der Kantine.', en: 'At noon I eat in the canteen.', fr: 'À midi, je mange à la cantine.' } } },
    { kind: 'vocab', item: { id: 'l5-schlafen', german: 'schlafen', english: 'to sleep', french: 'dormir', gender: null, syllables: ['SCHLA', 'fen'], pronunciation: 'SHLAH-fen', example: { de: 'Ich schlafe acht Stunden.', en: 'I sleep eight hours.', fr: 'Je dors huit heures.' } } },
    { kind: 'vocab', item: { id: 'l5-morgens', german: 'morgens', english: 'in the morning', french: 'le matin', gender: null, syllables: ['MOR', 'gens'], pronunciation: 'MOR-gens', example: { de: 'Morgens trinke ich Kaffee.', en: 'In the morning I drink coffee.', fr: 'Le matin, je bois du café.' } } },

    { kind: 'grammar', note: {
      id: 'l5-uhrzeit-note', title: 'Telling the time', titleFr: 'Dire l’heure',
      explanationMd: 'Ask **Wie spät ist es?** (What time is it?). Answer with **Es ist … Uhr**:\n\n- Es ist **acht** Uhr. — It’s 8:00.\n- Es ist **halb** neun. — It’s 8:30 (literally "half to nine").\n\nTo say *at* a time, use **um**: **um acht Uhr** (at eight o’clock).',
      explanationMdFr: 'Demande **Wie spät ist es?** (Quelle heure est-il ?). Réponds avec **Es ist … Uhr** :\n\n- Es ist **acht** Uhr. — Il est 8h00.\n- Es ist **halb** neun. — Il est 8h30 (littéralement « la moitié vers neuf »).\n\nPour dire *à* telle heure, utilise **um** : **um acht Uhr** (à huit heures).',
      examples: [
        { de: 'Wie spät ist es? – Es ist zehn Uhr.', en: 'What time is it? – It is ten o’clock.', fr: 'Quelle heure est-il ? – Il est dix heures.' },
        { de: 'Der Kurs beginnt um neun Uhr.', en: 'The course starts at nine o’clock.', fr: 'Le cours commence à neuf heures.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l5-wochentage', title: 'The days of the week', titleFr: 'Les jours de la semaine',
      explanationMd: 'The seven days (all **der**):\n\n- Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag\n\nUse **am** to say *on* a day: **am Montag** (on Monday).',
      explanationMdFr: 'Les sept jours (tous **der**) :\n\n- Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag\n\nUtilise **am** pour dire *le* tel jour : **am Montag** (le lundi).',
      examples: [
        { de: 'Am Freitag habe ich frei.', en: 'On Friday I have off.', fr: 'Le vendredi, je suis libre.' },
        { de: 'Am Sonntag schlafe ich lange.', en: 'On Sunday I sleep in.', fr: 'Le dimanche, je fais la grasse matinée.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l5-trennbare', title: 'Separable verbs', titleFr: 'Les verbes à particule',
      explanationMd: 'Some verbs have a **prefix** that separates in a sentence and jumps to the **end**. **aufstehen** (to get up):\n\n- Ich **stehe** um sieben Uhr **auf**.\n- **Stehst** du früh **auf**?\n\nThe prefix (**auf**) goes to the very end.',
      explanationMdFr: 'Certains verbes ont une **particule** qui se sépare dans la phrase et va à la **fin**. **aufstehen** (se lever) :\n\n- Ich **stehe** um sieben Uhr **auf**.\n- **Stehst** du früh **auf** ?\n\nLa particule (**auf**) va tout à la fin.',
      examples: [
        { de: 'Ich stehe um sechs Uhr auf.', en: 'I get up at six o’clock.', fr: 'Je me lève à six heures.' },
        { de: 'Wann stehst du auf?', en: 'When do you get up?', fr: 'Quand te lèves-tu ?' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l5-e1', prompt: 'Es ist acht ___. (o’clock)', answer: 'Uhr', hint: 'the word for "o’clock" / clock', hintFr: 'le mot pour « heure » (à l’horloge)' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l5-e2', prompt: 'Which day is "Mittwoch"?', promptFr: 'Quel jour est « Mittwoch » ?', options: ['Monday', 'Wednesday', 'Sunday'], answer: 1, explain: '"Mittwoch" (mid-week) is Wednesday.', explainFr: '« Mittwoch » (milieu de semaine) est mercredi.', hint: 'It literally means "mid-week".', hintFr: 'Ça signifie littéralement « milieu de semaine ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l5-e3', tokens: ['auf', 'stehe', 'um', 'sieben', 'Ich', 'Uhr'], answer: ['Ich', 'stehe', 'um', 'sieben', 'Uhr', 'auf'], hint: 'Separable verb: the prefix "auf" goes to the very end.', hintFr: 'Verbe à particule : la particule « auf » va tout à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l5-e4', pairs: [ { de: 'Montag', en: 'Monday', fr: 'lundi' }, { de: 'Freitag', en: 'Friday', fr: 'vendredi' }, { de: 'Sonntag', en: 'Sunday', fr: 'dimanche' } ], hint: 'Match each German day to its English name.', hintFr: 'Associe chaque jour allemand à son nom.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l5-e5', prompt: 'Listen. At what time does Lena get up?', promptFr: 'Écoute. À quelle heure Lena se lève-t-elle ?', audio: { ttsText: 'Ich heiße Lena. Ich stehe um sechs Uhr auf.' }, options: ['6:00', '7:00', '8:00'], answer: 0, hint: 'Listen for the number before "Uhr".', hintFr: 'Écoute le nombre avant « Uhr ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l5-e6', word: 'Woche', answer: 'die', hint: '"Woche" (week) is feminine.', hintFr: '« Woche » (semaine) est féminin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l5-e7', prompt: '___ Montag arbeite ich. (on)', answer: 'Am', hint: 'Use "am" to say "on" a day.', hintFr: 'Utilise « am » pour dire « le » tel jour.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l5-e8', prompt: 'How do you say "at nine o’clock"?', promptFr: 'Comment dit-on « à neuf heures » ?', options: ['in neun Uhr', 'um neun Uhr', 'am neun Uhr'], answer: 1, explain: 'Use "um" for clock times: um neun Uhr.', explainFr: 'On utilise « um » pour les heures : um neun Uhr.', hint: 'Which little word goes with a clock time?', hintFr: 'Quel petit mot accompagne une heure ?' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l5-e9', tokens: ['ich', 'Kaffee', 'trinke', 'Morgens'], answer: ['Morgens', 'trinke', 'ich', 'Kaffee'], hint: 'The verb stays in second position, even after a time word.', hintFr: 'Le verbe reste en deuxième position, même après un mot de temps.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l5-e10', prompt: 'Listen. What does Max do on Sunday?', promptFr: 'Écoute. Que fait Max le dimanche ?', audio: { ttsText: 'Am Sonntag arbeite ich nicht. Ich schlafe lange.' }, options: ['He works', 'He sleeps in', 'He studies'], optionsFr: ['Il travaille', 'Il fait la grasse matinée', 'Il étudie'], answer: 1, hint: '"schlafen" means to sleep; "lange" means for a long time.', hintFr: '« schlafen » = dormir ; « lange » = longtemps.' } },

    { kind: 'pronunciation', focus: 'The "w" sounds like English "v" (Woche, Mittwoch) and "ch" is soft after i/e (ich)', focusFr: 'Le « w » se prononce comme « v » (Woche, Mittwoch) et « ch » est doux après i/e (ich)', items: [
      { id: 'l5-woche-pron', german: 'Woche', english: 'week', french: 'semaine', gender: null, syllables: ['WO', 'che'], pronunciation: 'VOKH-uh', example: { de: 'Eine Woche hat sieben Tage.', en: 'A week has seven days.', fr: 'Une semaine a sept jours.' } },
      { id: 'l5-mittwoch-pron', german: 'Mittwoch', english: 'Wednesday', french: 'mercredi', gender: null, syllables: ['MITT', 'woch'], pronunciation: 'MIT-vokh', example: { de: 'Am Mittwoch habe ich Deutsch.', en: 'On Wednesday I have German.', fr: 'Le mercredi, j’ai allemand.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now tell the time with **Es ist … Uhr**, name the days of the week, describe your daily routine, and use separable verbs like **aufstehen** (Ich stehe … auf). 🎉',
      summaryFr: 'Tu sais maintenant dire l’heure avec **Es ist … Uhr**, nommer les jours de la semaine, décrire ta routine, et utiliser les verbes à particule comme **aufstehen** (Ich stehe … auf). 🎉' },
  ],
};

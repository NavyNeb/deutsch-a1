import type { Lesson } from '../types';

export const lektion7: Lesson = {
  id: 'l7', level: 'A1', module: 2, number: 8,
  title: { de: 'Freizeit und Hobbys', en: 'Free time and hobbies', fr: 'Loisirs et passe-temps' },
  theme: 'Hobbies, free-time activities, and saying what you can and like to do',
  themeFr: 'Loisirs, activités de temps libre, et dire ce qu’on sait faire et aime faire',
  goals: ['Name common hobbies', 'Say what you like doing with "gern"', 'Use the modal verb "können" (can)', 'Put the infinitive at the end of the sentence'],
  goalsFr: ['Nommer des loisirs courants', 'Dire ce qu’on aime faire avec « gern »', 'Utiliser le verbe modal « können » (pouvoir)', 'Mettre l’infinitif à la fin de la phrase'],
  steps: [
    { kind: 'intro', title: 'Was machst du gern? 🎧', titleFr: 'Qu’aimes-tu faire ? 🎧',
      scene: 'Two classmates talk about their weekend hobbies.', sceneFr: 'Deux camarades parlent de leurs loisirs du week-end.',
      goals: ['Name your hobbies', 'Say what you like doing with "gern"', 'Say what you can do with "können"', 'Build sentences with the infinitive at the end'],
      goalsFr: ['Nommer tes loisirs', 'Dire ce que tu aimes faire avec « gern »', 'Dire ce que tu sais faire avec « können »', 'Construire des phrases avec l’infinitif à la fin'] },

    { kind: 'vocab', item: { id: 'l7-hobby', german: 'das Hobby', english: 'the hobby', french: 'le passe-temps', gender: 'das', syllables: ['HOB', 'by'], pronunciation: 'dahs HOB-ee', example: { de: 'Mein Hobby ist Musik.', en: 'My hobby is music.', fr: 'Mon passe-temps, c’est la musique.' } } },
    { kind: 'vocab', item: { id: 'l7-freizeit', german: 'die Freizeit', english: 'free time', french: 'le temps libre', gender: 'die', syllables: ['FREI', 'zeit'], pronunciation: 'dee FRY-tsait', example: { de: 'In der Freizeit lese ich.', en: 'In my free time I read.', fr: 'Pendant mon temps libre, je lis.' } } },
    { kind: 'vocab', item: { id: 'l7-musik', german: 'die Musik', english: 'the music', french: 'la musique', gender: 'die', syllables: ['mu', 'SIK'], pronunciation: 'dee moo-ZEEK', example: { de: 'Ich höre gern Musik.', en: 'I like listening to music.', fr: 'J’aime écouter de la musique.' } } },
    { kind: 'vocab', item: { id: 'l7-sport', german: 'der Sport', english: 'the sport', french: 'le sport', gender: 'der', syllables: ['SPORT'], pronunciation: 'dair SHPORT', example: { de: 'Ich mache Sport.', en: 'I do sport.', fr: 'Je fais du sport.' } } },
    { kind: 'vocab', item: { id: 'l7-spielen', german: 'spielen', english: 'to play', french: 'jouer', gender: null, syllables: ['SPIE', 'len'], pronunciation: 'SHPEE-len', example: { de: 'Ich spiele Fußball.', en: 'I play football.', fr: 'Je joue au football.' } } },
    { kind: 'vocab', item: { id: 'l7-lesen', german: 'lesen', english: 'to read', french: 'lire', gender: null, syllables: ['LE', 'sen'], pronunciation: 'LAY-zen', example: { de: 'Ich lese ein Buch.', en: 'I read a book.', fr: 'Je lis un livre.' } } },
    { kind: 'vocab', item: { id: 'l7-schwimmen', german: 'schwimmen', english: 'to swim', french: 'nager', gender: null, syllables: ['SCHWIM', 'men'], pronunciation: 'SHVIM-en', example: { de: 'Ich kann gut schwimmen.', en: 'I can swim well.', fr: 'Je sais bien nager.' } } },
    { kind: 'vocab', item: { id: 'l7-tanzen', german: 'tanzen', english: 'to dance', french: 'danser', gender: null, syllables: ['TAN', 'zen'], pronunciation: 'TAHN-tsen', example: { de: 'Sie tanzt gern.', en: 'She likes to dance.', fr: 'Elle aime danser.' } } },
    { kind: 'vocab', item: { id: 'l7-koennen', german: 'können', english: 'can / to be able to', french: 'pouvoir / savoir', gender: null, syllables: ['KÖN', 'nen'], pronunciation: 'KOEN-en', example: { de: 'Ich kann Gitarre spielen.', en: 'I can play guitar.', fr: 'Je sais jouer de la guitare.' } } },
    { kind: 'vocab', item: { id: 'l7-gern', german: 'gern', english: 'gladly / to like doing', french: 'volontiers / aimer faire', gender: null, syllables: ['GERN'], pronunciation: 'gairn', example: { de: 'Ich koche gern.', en: 'I like cooking.', fr: 'J’aime cuisiner.' } } },

    { kind: 'grammar', note: {
      id: 'l7-gern-note', title: 'Saying what you like doing with "gern"', titleFr: 'Dire ce qu’on aime faire avec « gern »',
      explanationMd: 'Put **gern** right after the verb to say you *like* doing something:\n\n- Ich spiele **gern** Fußball. — I like playing football.\n- Ich lese **gern**. — I like reading.\n\nFor "don’t like", use **nicht gern**: Ich tanze **nicht gern**.',
      explanationMdFr: 'Place **gern** juste après le verbe pour dire que tu *aimes* faire quelque chose :\n\n- Ich spiele **gern** Fußball. — J’aime jouer au football.\n- Ich lese **gern**. — J’aime lire.\n\nPour « ne pas aimer », utilise **nicht gern** : Ich tanze **nicht gern**.',
      examples: [
        { de: 'Ich höre gern Musik.', en: 'I like listening to music.', fr: 'J’aime écouter de la musique.' },
        { de: 'Er spielt gern Tennis.', en: 'He likes playing tennis.', fr: 'Il aime jouer au tennis.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l7-koennen-note', title: 'The modal verb "können" (can)', titleFr: 'Le verbe modal « können » (pouvoir)',
      explanationMd: '**können** says what you are able to do:\n\n- ich **kann** — I can\n- du **kannst** — you can\n- er/sie/es **kann** — he/she/it can',
      explanationMdFr: '**können** dit ce qu’on est capable de faire :\n\n- ich **kann** — je peux/sais\n- du **kannst** — tu peux/sais\n- er/sie/es **kann** — il/elle/on peut/sait',
      examples: [
        { de: 'Ich kann schwimmen.', en: 'I can swim.', fr: 'Je sais nager.' },
        { de: 'Kannst du kochen?', en: 'Can you cook?', fr: 'Sais-tu cuisiner ?' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l7-satzklammer', title: 'Modal verb + infinitive at the end', titleFr: 'Verbe modal + infinitif à la fin',
      explanationMd: 'With a modal verb, the **modal** is in position 2 and the **infinitive** goes to the **end**. This frame is called the *Satzklammer* (sentence bracket):\n\n- Ich **kann** gut Gitarre **spielen**.\n- **Kannst** du Deutsch **sprechen**?',
      explanationMdFr: 'Avec un verbe modal, le **modal** est en position 2 et l’**infinitif** va à la **fin**. Ce cadre s’appelle la *Satzklammer* (parenthèse verbale) :\n\n- Ich **kann** gut Gitarre **spielen**.\n- **Kannst** du Deutsch **sprechen** ?',
      examples: [
        { de: 'Ich kann gut schwimmen.', en: 'I can swim well.', fr: 'Je sais bien nager.' },
        { de: 'Wir können Fußball spielen.', en: 'We can play football.', fr: 'Nous pouvons jouer au football.' },
      ],
      diagram: 'satzklammer' } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l7-e1', prompt: 'Ich ___ gut schwimmen. (können)', answer: 'kann', hint: 'first person singular of können', hintFr: 'première personne du singulier de können' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l7-e2', prompt: 'What does "Ich lese gern" mean?', promptFr: 'Que signifie « Ich lese gern » ?', options: ['I read now', 'I like reading', 'I can read'], optionsFr: ['Je lis maintenant', 'J’aime lire', 'Je sais lire'], answer: 1, explain: '"gern" + verb means you like doing it.', explainFr: '« gern » + verbe = aimer faire.', hint: 'Focus on the word "gern".', hintFr: 'Concentre-toi sur le mot « gern ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l7-e3', tokens: ['spielen', 'kann', 'Gitarre', 'Ich'], answer: ['Ich', 'kann', 'Gitarre', 'spielen'], hint: 'Modal verb in second position, infinitive at the end.', hintFr: 'Verbe modal en deuxième position, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l7-e4', pairs: [ { de: 'lesen', en: 'to read', fr: 'lire' }, { de: 'schwimmen', en: 'to swim', fr: 'nager' }, { de: 'tanzen', en: 'to dance', fr: 'danser' } ], hint: 'Match each activity verb to its meaning.', hintFr: 'Associe chaque verbe d’activité à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l7-e5', prompt: 'Listen. What is Jonas’s hobby?', promptFr: 'Écoute. Quel est le passe-temps de Jonas ?', audio: { ttsText: 'Ich bin Jonas. In der Freizeit spiele ich gern Fußball.' }, options: ['Football', 'Music', 'Reading'], optionsFr: ['Football', 'Musique', 'Lecture'], answer: 0, hint: 'Listen for the activity after "gern".', hintFr: 'Écoute l’activité après « gern ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l7-e6', word: 'Musik', answer: 'die', hint: '"Musik" is feminine.', hintFr: '« Musik » est féminin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l7-e7', prompt: '___ du Tennis spielen? (können, du-form)', answer: 'Kannst', hint: 'second person singular of können', hintFr: 'deuxième personne du singulier de können' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l7-e8', prompt: 'Where does the infinitive go with a modal verb?', promptFr: 'Où va l’infinitif avec un verbe modal ?', options: ['At the start', 'In second position', 'At the end'], optionsFr: ['Au début', 'En deuxième position', 'À la fin'], answer: 2, explain: 'The infinitive goes to the end (Satzklammer).', explainFr: 'L’infinitif va à la fin (Satzklammer).', hint: 'Remember the sentence bracket.', hintFr: 'Rappelle-toi la parenthèse verbale.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l7-e9', tokens: ['gern', 'Musik', 'höre', 'Ich'], answer: ['Ich', 'höre', 'gern', 'Musik'], hint: '"gern" comes right after the verb.', hintFr: '« gern » vient juste après le verbe.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l7-e10', prompt: 'Listen. What can Mia do well?', promptFr: 'Écoute. Que sait bien faire Mia ?', audio: { ttsText: 'Ich heiße Mia. Ich kann sehr gut tanzen.' }, options: ['Dance', 'Swim', 'Cook'], optionsFr: ['Danser', 'Nager', 'Cuisiner'], answer: 0, hint: 'Listen for the verb after "kann sehr gut".', hintFr: 'Écoute le verbe après « kann sehr gut ».' } },

    { kind: 'pronunciation', focus: 'At the start of a word, "sp" and "st" sound like "shp" and "sht" (Sport, spielen)', focusFr: 'En début de mot, « sp » et « st » se prononcent « chp » et « cht » (Sport, spielen)', items: [
      { id: 'l7-sport-pron', german: 'Sport', english: 'sport', french: 'sport', gender: null, syllables: ['SPORT'], pronunciation: 'SHPORT', example: { de: 'Ich mache gern Sport.', en: 'I like doing sport.', fr: 'J’aime faire du sport.' } },
      { id: 'l7-spielen-pron', german: 'spielen', english: 'to play', french: 'jouer', gender: null, syllables: ['SPIE', 'len'], pronunciation: 'SHPEE-len', example: { de: 'Wir spielen Tennis.', en: 'We play tennis.', fr: 'Nous jouons au tennis.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now name hobbies, say what you like doing with **gern**, and use the modal verb **können** with the infinitive at the end of the sentence. 🎉',
      summaryFr: 'Tu sais maintenant nommer des loisirs, dire ce que tu aimes faire avec **gern**, et utiliser le verbe modal **können** avec l’infinitif à la fin de la phrase. 🎉' },
  ],
};

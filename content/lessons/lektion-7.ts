import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion7: Lesson = {
  id: 'l7', level: 'A1', module: 2, number: 10,
  title: { de: 'Freizeit und Hobbys', en: 'Free time and hobbies', fr: 'Loisirs et passe-temps' },
  theme: 'Hobbies, free-time activities, and saying what you can and like to do', themeFr: 'Loisirs, activités de temps libre, et dire ce qu’on sait faire et aime faire',
  goals: ['Name common hobbies', 'Say what you like doing with "gern"', 'Use the modal verb "können" (can)', 'Put the infinitive at the end of the sentence'], goalsFr: ['Nommer des loisirs courants', 'Dire ce qu’on aime faire avec « gern »', 'Utiliser le verbe modal « können » (pouvoir)', 'Mettre l’infinitif à la fin de la phrase'],
  canDo: g('Ich kann über meine Hobbys sprechen und sagen, was ich gern mache und was ich kann.', 'I can talk about my hobbies and say what I like doing and what I can do.', 'Je sais parler de mes loisirs et dire ce que j’aime faire et ce que je sais faire.'),
  steps: [
    { kind: 'intro', title: 'Freizeit und Hobbys 🎸', titleFr: 'Loisirs et hobbies 🎸',
      scene: 'Two classmates compare their hobbies.', sceneFr: 'Deux camarades comparent leurs loisirs.',
      goals: ['Name common hobbies', 'Say what you like doing with gern', 'Say what you can do with können', 'Put the infinitive at the end of the sentence'],
      goalsFr: ['Nommer des loisirs courants', 'Dire ce que tu aimes faire avec gern', 'Dire ce que tu sais faire avec können', 'Mettre l’infinitif à la fin de la phrase'] },

    // ───────────── 1 · Hobbies and gern ─────────────
    { kind: 'chapter', title: 'Hobbys und gern', titleFr: 'Loisirs et gern', blurb: 'What do you like doing?', blurbFr: 'Qu’aimes-tu faire ?' },

    { kind: 'situation', title: 'Was ist dein Hobby?', titleFr: 'Quel est ton hobby ?',
      setting: 'Mia and Jonas talk about their free time.', settingFr: 'Mia et Jonas parlent de leur temps libre.',
      lines: [
        line('Mia', 'Was ist dein Hobby, Jonas?', 'What is your hobby, Jonas?', 'Quel est ton hobby, Jonas ?'),
        line('Jonas', 'In der Freizeit spiele ich gern Fußball. Und du?', 'In my free time I like playing football. And you?', 'Pendant mon temps libre, j’aime jouer au football. Et toi ?'),
        line('Mia', 'Ich höre gern Musik, und ich tanze gern.', 'I like listening to music, and I like dancing.', 'J’aime écouter de la musique, et j’aime danser.'),
        line('Jonas', 'Liest du auch gern?', 'Do you like reading too?', 'Aimes-tu aussi lire ?'),
        line('Mia', 'Nein, ich lese nicht gern. Aber ich mache viel Sport.', 'No, I don’t like reading. But I do a lot of sport.', 'Non, je n’aime pas lire. Mais je fais beaucoup de sport.'),
      ],
      words: [{ id: 'l7-hobby', german: 'das Hobby', english: 'the hobby', french: 'le passe-temps', gender: 'das', syllables: ['HOB', 'by'], pronunciation: 'dahs HOB-ee', example: { de: 'Mein Hobby ist Musik.', en: 'My hobby is music.', fr: 'Mon passe-temps, c’est la musique.' } }, { id: 'l7-freizeit', german: 'die Freizeit', english: 'free time', french: 'le temps libre', gender: 'die', syllables: ['FREI', 'zeit'], pronunciation: 'dee FRY-tsait', example: { de: 'In der Freizeit lese ich.', en: 'In my free time I read.', fr: 'Pendant mon temps libre, je lis.' } }, { id: 'l7-gern', german: 'gern', english: 'gladly / to like doing', french: 'volontiers / aimer faire', gender: null, syllables: ['GERN'], pronunciation: 'gairn', example: { de: 'Ich koche gern.', en: 'I like cooking.', fr: 'J’aime cuisiner.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l7-e11', prompt: 'Does Mia like reading?', promptFr: 'Mia aime-t-elle lire ?', options: ['No', 'Yes', 'Only on Sundays'], optionsFr: ['Non', 'Oui', 'Seulement le dimanche'], answer: 0, explain: 'She says: “Nein, ich lese nicht gern.”', explainFr: 'Elle dit : « Nein, ich lese nicht gern. »', hint: 'Look for “nicht gern”.', hintFr: 'Cherche « nicht gern ».' } },

    { kind: 'wordgroup', title: 'Was man in der Freizeit macht', titleFr: 'Ce qu’on fait pendant son temps libre',
      items: [{ id: 'l7-musik', german: 'die Musik', english: 'the music', french: 'la musique', gender: 'die', syllables: ['mu', 'SIK'], pronunciation: 'dee moo-ZEEK', example: { de: 'Ich höre gern Musik.', en: 'I like listening to music.', fr: 'J’aime écouter de la musique.' } }, { id: 'l7-sport', german: 'der Sport', english: 'the sport', french: 'le sport', gender: 'der', syllables: ['SPORT'], pronunciation: 'dair SHPORT', example: { de: 'Ich mache Sport.', en: 'I do sport.', fr: 'Je fais du sport.' } }, { id: 'l7-spielen', german: 'spielen', english: 'to play', french: 'jouer', gender: null, syllables: ['SPIE', 'len'], pronunciation: 'SHPEE-len', example: { de: 'Ich spiele Fußball.', en: 'I play football.', fr: 'Je joue au football.' } }, { id: 'l7-lesen', german: 'lesen', english: 'to read', french: 'lire', gender: null, syllables: ['LE', 'sen'], pronunciation: 'LAY-zen', example: { de: 'Ich lese ein Buch.', en: 'I read a book.', fr: 'Je lis un livre.' } }, { id: 'l7-schwimmen', german: 'schwimmen', english: 'to swim', french: 'nager', gender: null, syllables: ['SCHWIM', 'men'], pronunciation: 'SHVIM-en', example: { de: 'Ich kann gut schwimmen.', en: 'I can swim well.', fr: 'Je sais bien nager.' } }, { id: 'l7-tanzen', german: 'tanzen', english: 'to dance', french: 'danser', gender: null, syllables: ['TAN', 'zen'], pronunciation: 'TAHN-tsen', example: { de: 'Sie tanzt gern.', en: 'She likes to dance.', fr: 'Elle aime danser.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'l7-e4', pairs: [{ de: 'lesen', en: 'to read', fr: 'lire' }, { de: 'schwimmen', en: 'to swim', fr: 'nager' }, { de: 'tanzen', en: 'to dance', fr: 'danser' }], hint: 'Match each activity verb to its meaning.', hintFr: 'Associe chaque verbe d’activité à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'l7-gern', title: 'gern: what you like doing', titleFr: 'gern : ce que tu aimes faire',
      lead: 'Put gern right after the verb. For “don’t like”, use nicht gern.',
      leadFr: 'Place gern juste après le verbe. Pour « je n’aime pas », utilise nicht gern.',
      explanationMd: 'German has no verb for “to like doing”. Instead you add **gern** (gladly) **right after the verb**: **Ich spiele gern Fußball.** To say you do **not** like it, use **nicht gern**: **Ich tanze nicht gern.**',
      explanationMdFr: 'L’allemand n’a pas de verbe pour « aimer faire ». On ajoute **gern** (volontiers) **juste après le verbe** : **Ich spiele gern Fußball.** Pour dire que tu n’aimes **pas**, utilise **nicht gern** : **Ich tanze nicht gern.**',
      tables: [{ title: 'gern and nicht gern', titleFr: 'gern et nicht gern', headers: ['I like it', 'I do not like it'], headersFr: ['J’aime', 'Je n’aime pas'],
        rows: [['Ich lese gern.', 'Ich lese nicht gern.'], ['Ich tanze gern.', 'Ich tanze nicht gern.'], ['Ich spiele gern Fußball.', 'Ich spiele nicht gern Fußball.']],
        rowsFr: [['Ich lese gern.', 'Ich lese nicht gern.'], ['Ich tanze gern.', 'Ich tanze nicht gern.'], ['Ich spiele gern Fußball.', 'Ich spiele nicht gern Fußball.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'spiele', role: 'verb' }, { text: 'gern', role: 'connector' }, { text: 'Fußball.', role: 'accusative' }], en: 'I like playing football.', fr: 'J’aime jouer au football.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'tanze', role: 'verb' }, { text: 'nicht gern.', role: 'connector' }], en: 'I do not like dancing.', fr: 'Je n’aime pas danser.' },
      ],
      contrast: {
        a: { label: 'gern', labelFr: 'gern', note: 'I like doing it', noteFr: 'j’aime le faire', examples: [g('Ich höre gern Musik.', 'I like listening to music.', 'J’aime écouter de la musique.'), g('Er spielt gern Tennis.', 'He likes playing tennis.', 'Il aime jouer au tennis.')] },
        b: { label: 'nicht gern', labelFr: 'nicht gern', note: 'I do not like doing it', noteFr: 'je n’aime pas le faire', examples: [g('Ich lese nicht gern.', 'I do not like reading.', 'Je n’aime pas lire.'), g('Sie tanzt nicht gern.', 'She does not like dancing.', 'Elle n’aime pas danser.')] },
      },
      examples: [
        g('Ich höre gern Musik.', 'I like listening to music.', 'J’aime écouter de la musique.'),
        g('Er spielt gern Tennis.', 'He likes playing tennis.', 'Il aime jouer au tennis.'),
        g('Ich lese gern.', 'I like reading.', 'J’aime lire.'),
        g('Sie tanzt gern.', 'She likes dancing.', 'Elle aime danser.'),
        g('Ich koche gern.', 'I like cooking.', 'J’aime cuisiner.'),
        g('Wir schwimmen gern.', 'We like swimming.', 'Nous aimons nager.'),
        g('Ich tanze nicht gern.', 'I do not like dancing.', 'Je n’aime pas danser.'),
      ],
      mistakes: [
        { wrong: 'Ich gern spiele Fußball.', right: 'Ich spiele gern Fußball.', why: 'gern comes right after the verb.', whyFr: 'gern vient juste après le verbe.' },
        { wrong: 'Ich nicht gern tanze.', right: 'Ich tanze nicht gern.', why: 'The verb stays second, then nicht gern.', whyFr: 'Le verbe reste en deuxième, puis nicht gern.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l7-e2', prompt: 'What does "Ich lese gern" mean?', promptFr: 'Que signifie « Ich lese gern » ?', options: ['I read now', 'I like reading', 'I can read'], optionsFr: ['Je lis maintenant', 'J’aime lire', 'Je sais lire'], answer: 1, explain: '"gern" + verb means you like doing it.', explainFr: '« gern » + verbe = aimer faire.', hint: 'Focus on the word "gern".', hintFr: 'Concentre-toi sur le mot « gern ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l7-e9', tokens: ['gern', 'Musik', 'höre', 'Ich'], answer: ['Ich', 'höre', 'gern', 'Musik'], hint: '"gern" comes right after the verb.', hintFr: '« gern » vient juste après le verbe.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l7-e5', prompt: 'Listen. What is Jonas’s hobby?', promptFr: 'Écoute. Quel est le passe-temps de Jonas ?', audio: { ttsText: 'Ich bin Jonas. In der Freizeit spiele ich gern Fußball.' }, options: ['Football', 'Music', 'Reading'], optionsFr: ['Football', 'Musique', 'Lecture'], answer: 0, hint: 'Listen for the activity after "gern".', hintFr: 'Écoute l’activité après « gern ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l7-e6', word: 'Musik', answer: 'die', hint: '"Musik" is feminine.', hintFr: '« Musik » est féminin.' } },

    // ───────────── 2 · können ─────────────
    { kind: 'chapter', title: 'können: was ich kann', titleFr: 'können : ce que je sais faire', blurb: 'Say what you can do, and where the second verb goes.', blurbFr: 'Dire ce que tu sais faire, et où va le deuxième verbe.' },

    { kind: 'situation', title: 'Was kannst du gut?', titleFr: 'Qu’est-ce que tu sais bien faire ?',
      setting: 'Jonas and Mia talk about what they can do.', settingFr: 'Jonas et Mia parlent de ce qu’ils savent faire.',
      lines: [
        line('Jonas', 'Kannst du schwimmen, Mia?', 'Can you swim, Mia?', 'Sais-tu nager, Mia ?'),
        line('Mia', 'Ja, ich kann gut schwimmen. Ich kann auch sehr gut tanzen.', 'Yes, I can swim well. I can also dance very well.', 'Oui, je sais bien nager. Je sais aussi très bien danser.'),
        line('Jonas', 'Wirklich? Kannst du auch Gitarre spielen?', 'Really? Can you also play the guitar?', 'Vraiment ? Sais-tu aussi jouer de la guitare ?'),
        line('Mia', 'Nein, Gitarre kann ich nicht spielen. Und du?', 'No, I can’t play the guitar. And you?', 'Non, je ne sais pas jouer de la guitare. Et toi ?'),
        line('Jonas', 'Ich kann Gitarre spielen, aber ich kann nicht tanzen.', 'I can play the guitar, but I can’t dance.', 'Je sais jouer de la guitare, mais je ne sais pas danser.'),
      ],
      words: [{ id: 'l7-koennen', german: 'können', english: 'can / to be able to', french: 'pouvoir / savoir', gender: null, syllables: ['KÖN', 'nen'], pronunciation: 'KOEN-en', example: { de: 'Ich kann Gitarre spielen.', en: 'I can play guitar.', fr: 'Je sais jouer de la guitare.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l7-e12', prompt: 'What can Mia NOT do?', promptFr: 'Que Mia ne sait-elle PAS faire ?', options: ['Play the guitar', 'Swim', 'Dance'], optionsFr: ['Jouer de la guitare', 'Nager', 'Danser'], answer: 0, explain: 'She says: “Gitarre kann ich nicht spielen.”', explainFr: 'Elle dit : « Gitarre kann ich nicht spielen. »', hint: 'Look for “nicht”.', hintFr: 'Cherche « nicht ».' } },

    { kind: 'grammar', note: {
      id: 'l7-koennen-note', title: 'können: to be able to', titleFr: 'können : savoir, pouvoir',
      lead: 'ich kann, du kannst, er kann: the singular forms have no ending in ich and er/sie/es.',
      leadFr: 'ich kann, du kannst, er kann : aux formes ich et er/sie/es, pas de terminaison.',
      explanationMd: '**können** is a **modal verb**: it says what you are **able** to do. It is irregular in the singular: **ich kann, du kannst, er/sie/es kann**. The plural is regular: **wir können, ihr könnt, sie können**.',
      explanationMdFr: '**können** est un **verbe modal** : il dit ce que tu es **capable** de faire. Il est irrégulier au singulier : **ich kann, du kannst, er/sie/es kann**. Le pluriel est régulier : **wir können, ihr könnt, sie können**.',
      tables: [{ title: 'können (can)', titleFr: 'können (pouvoir, savoir)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['kann', 'kannst', 'kann', 'können', 'könnt', 'können']], rowsFr: [['kann', 'kannst', 'kann', 'können', 'könnt', 'können']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'kann', role: 'verb' }, { text: 'gut', role: 'other' }, { text: 'schwimmen.', role: 'verb' }], en: 'I can swim well.', fr: 'Je sais bien nager.' },
        { parts: [{ text: 'Kannst', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'kochen?', role: 'verb' }], en: 'Can you cook?', fr: 'Sais-tu cuisiner ?' },
      ],
      contrast: {
        a: { label: 'ich / er: kann', labelFr: 'ich / er : kann', note: 'no ending', noteFr: 'aucune terminaison', examples: [g('Ich kann schwimmen.', 'I can swim.', 'Je sais nager.'), g('Sie kann tanzen.', 'She can dance.', 'Elle sait danser.')] },
        b: { label: 'du: kannst', labelFr: 'du : kannst', note: '-st like other verbs', noteFr: '-st comme les autres verbes', examples: [g('Kannst du kochen?', 'Can you cook?', 'Sais-tu cuisiner ?'), g('Du kannst gut singen.', 'You can sing well.', 'Tu chantes bien.')] },
      },
      examples: [
        g('Ich kann schwimmen.', 'I can swim.', 'Je sais nager.'),
        g('Kannst du kochen?', 'Can you cook?', 'Sais-tu cuisiner ?'),
        g('Sie kann sehr gut tanzen.', 'She can dance very well.', 'Elle sait très bien danser.'),
        g('Wir können Fußball spielen.', 'We can play football.', 'Nous savons jouer au football.'),
        g('Ihr könnt gut singen.', 'You (pl.) can sing well.', 'Vous chantez bien.'),
        g('Sie können Deutsch sprechen.', 'They can speak German.', 'Ils savent parler allemand.'),
      ],
      mistakes: [
        { wrong: 'Ich kannst schwimmen.', right: 'Ich kann schwimmen.', why: 'ich takes kann, without -st.', whyFr: 'ich prend kann, sans -st.' },
        { wrong: 'Er kannt tanzen.', right: 'Er kann tanzen.', why: 'er/sie/es also takes kann.', whyFr: 'er/sie/es prend aussi kann.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l7-e1', prompt: 'Ich ___ gut schwimmen. (können)', answer: 'kann', hint: 'first person singular of können', hintFr: 'première personne du singulier de können' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l7-e7', prompt: '___ du Tennis spielen? (können, du-form)', answer: 'Kannst', hint: 'second person singular of können', hintFr: 'deuxième personne du singulier de können' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l7-e10', prompt: 'Listen. What can Mia do well?', promptFr: 'Écoute. Que sait bien faire Mia ?', audio: { ttsText: 'Ich heiße Mia. Ich kann sehr gut tanzen.' }, options: ['Dance', 'Swim', 'Cook'], optionsFr: ['Danser', 'Nager', 'Cuisiner'], answer: 0, hint: 'Listen for the verb after "kann sehr gut".', hintFr: 'Écoute le verbe après « kann sehr gut ».' } },

    { kind: 'grammar', note: {
      id: 'l7-satzklammer', title: 'Modal verb + infinitive at the end', titleFr: 'Verbe modal + infinitif à la fin',
      lead: 'The modal verb is in position 2, the infinitive goes to the very end. The two verbs make a frame.',
      leadFr: 'Le verbe modal est en position 2, l’infinitif va tout à la fin. Les deux verbes forment un cadre.',
      explanationMd: 'With a modal verb the **modal** stays in **position 2** and the **second verb in the infinitive** goes to the **very end**. Everything else sits **between** them. This frame is called the **Satzklammer** (sentence bracket).\n\nIn a **question** the modal comes first, and the infinitive is still last.',
      explanationMdFr: 'Avec un verbe modal, le **modal** reste **en position 2** et le **deuxième verbe à l’infinitif** va **tout à la fin**. Tout le reste se place **entre** les deux. Ce cadre s’appelle la **Satzklammer** (parenthèse de la phrase).\n\nDans une **question**, le modal vient en premier, et l’infinitif reste en dernier.',
      tables: [{ title: 'The frame', titleFr: 'Le cadre', headers: ['Position 1', 'Modal (2)', 'Middle', 'Infinitive (end)'], headersFr: ['Position 1', 'Modal (2)', 'Milieu', 'Infinitif (fin)'],
        rows: [['Ich', 'kann', 'gut Gitarre', 'spielen.'], ['Wir', 'können', 'heute Fußball', 'spielen.'], ['Kannst', 'du', 'Deutsch', 'sprechen?'], ['Mia', 'kann', 'sehr gut', 'tanzen.']],
        rowsFr: [['Ich', 'kann', 'gut Gitarre', 'spielen.'], ['Wir', 'können', 'heute Fußball', 'spielen.'], ['Kannst', 'du', 'Deutsch', 'sprechen ?'], ['Mia', 'kann', 'sehr gut', 'tanzen.']], highlightCol: 3 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'kann', role: 'verb' }, { text: 'gut Gitarre', role: 'accusative' }, { text: 'spielen.', role: 'verb' }], en: 'I can play the guitar well.', fr: 'Je sais bien jouer de la guitare.' },
        { parts: [{ text: 'Kannst', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'Deutsch', role: 'accusative' }, { text: 'sprechen?', role: 'verb' }], en: 'Can you speak German?', fr: 'Sais-tu parler allemand ?' },
      ],
      contrast: {
        a: { label: 'Without a modal', labelFr: 'Sans modal', note: 'one verb, position 2', noteFr: 'un seul verbe, position 2', examples: [g('Ich spiele Gitarre.', 'I play the guitar.', 'Je joue de la guitare.'), g('Ich schwimme.', 'I swim.', 'Je nage.')] },
        b: { label: 'With können', labelFr: 'Avec können', note: 'can in position 2, infinitive at the end', noteFr: 'kann en position 2, infinitif à la fin', examples: [g('Ich kann Gitarre spielen.', 'I can play the guitar.', 'Je sais jouer de la guitare.'), g('Ich kann schwimmen.', 'I can swim.', 'Je sais nager.')] },
      },
      examples: [
        g('Ich kann gut schwimmen.', 'I can swim well.', 'Je sais bien nager.'),
        g('Wir können Fußball spielen.', 'We can play football.', 'Nous savons jouer au football.'),
        g('Kannst du Deutsch sprechen?', 'Can you speak German?', 'Sais-tu parler allemand ?'),
        g('Ich kann Gitarre spielen.', 'I can play the guitar.', 'Je sais jouer de la guitare.'),
        g('Kannst du heute Abend kommen?', 'Can you come tonight?', 'Peux-tu venir ce soir ?'),
        g('Er kann sehr gut kochen.', 'He can cook very well.', 'Il sait très bien cuisiner.'),
        g('Ich kann leider nicht tanzen.', 'Unfortunately I cannot dance.', 'Hélas, je ne sais pas danser.'),
      ],
      mistakes: [
        { wrong: 'Ich kann spielen Gitarre.', right: 'Ich kann Gitarre spielen.', why: 'The infinitive goes to the very end.', whyFr: 'L’infinitif va tout à la fin.' },
        { wrong: 'Ich kann Gitarre spiele.', right: 'Ich kann Gitarre spielen.', why: 'After a modal verb the second verb stays in the infinitive.', whyFr: 'Après un modal, le deuxième verbe reste à l’infinitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l7-e3', tokens: ['spielen', 'kann', 'Gitarre', 'Ich'], answer: ['Ich', 'kann', 'Gitarre', 'spielen'], hint: 'Modal verb in second position, infinitive at the end.', hintFr: 'Verbe modal en deuxième position, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l7-e8', prompt: 'Where does the infinitive go with a modal verb?', promptFr: 'Où va l’infinitif avec un verbe modal ?', options: ['At the start', 'In second position', 'At the end'], optionsFr: ['Au début', 'En deuxième position', 'À la fin'], answer: 2, explain: 'The infinitive goes to the end (Satzklammer).', explainFr: 'L’infinitif va à la fin (Satzklammer).', hint: 'Remember the sentence bracket.', hintFr: 'Rappelle-toi la parenthèse verbale.' } },

    { kind: 'pronunciation', focus: 'At the start of a word, "sp" and "st" sound like "shp" and "sht" (Sport, spielen)', focusFr: 'En début de mot, « sp » et « st » se prononcent « chp » et « cht » (Sport, spielen)', items: [{ id: 'l7-sport-pron', german: 'Sport', english: 'sport', french: 'sport', gender: null, syllables: ['SPORT'], pronunciation: 'SHPORT', example: { de: 'Ich mache gern Sport.', en: 'I like doing sport.', fr: 'J’aime faire du sport.' } }, { id: 'l7-spielen-pron', german: 'spielen', english: 'to play', french: 'jouer', gender: null, syllables: ['SPIE', 'len'], pronunciation: 'SHPEE-len', example: { de: 'Wir spielen Tennis.', en: 'We play tennis.', fr: 'Nous jouons au tennis.' } }] },

    { kind: 'wrapup',
      summary: 'You can now say what you like doing with **gern**, what you can do with **können**, and build the frame **modal verb … infinitive**. 🎉',
      summaryFr: 'Tu sais maintenant dire ce que tu aimes faire avec **gern**, ce que tu sais faire avec **können**, et construire le cadre **verbe modal … infinitif**. 🎉',
      card: { title: 'Lesson 10 on one page', titleFr: 'La leçon 10 en une page', sections: [
        { heading: 'gern', headingFr: 'gern', rows: [g('Ich spiele gern Fußball.', 'I like playing football.', 'J’aime jouer au football.'), g('Ich tanze nicht gern.', 'I do not like dancing.', 'Je n’aime pas danser.')] },
        { heading: 'können', headingFr: 'können', rows: [g('ich kann, du kannst, er kann', 'singular', 'singulier'), g('wir können, ihr könnt, sie können', 'plural', 'pluriel')] },
        { heading: 'The frame', headingFr: 'Le cadre', rows: [g('Ich kann gut Gitarre spielen.', 'modal 2nd, infinitive last', 'modal en 2e, infinitif en dernier'), g('Kannst du Deutsch sprechen?', 'question: modal first', 'question : modal en premier')] },
      ] } },
  ],
};

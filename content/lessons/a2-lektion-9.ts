import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion9: Lesson = {
  id: 'a2-l9', level: 'A2', module: 5, number: 18,
  title: { de: 'Reflexive Verben', en: 'Reflexive verbs', fr: 'Les verbes pronominaux' },
  theme: 'Reflexive verbs, reflexive pronouns, and verbs with fixed prepositions', themeFr: 'Les verbes pronominaux, les pronoms réfléchis et les verbes à préposition fixe',
  goals: ['Use reflexive verbs like "sich freuen"', 'Use the reflexive pronouns (mich, dich, sich …)', 'Talk about feelings and daily routine', 'Use "sich freuen auf" and "sich interessieren für"'], goalsFr: ['Utiliser les verbes pronominaux comme « sich freuen »', 'Utiliser les pronoms réfléchis (mich, dich, sich …)', 'Parler des sentiments et de la routine', 'Utiliser « sich freuen auf » et « sich interessieren für »'],
  canDo: g('Ich kann über Gefühle und Alltag sprechen und reflexive Verben mit dem richtigen Pronomen und der festen Präposition benutzen.', 'I can talk about feelings and daily routine and use reflexive verbs with the right pronoun and fixed preposition.', 'Je sais parler de sentiments et de routine quotidienne et utiliser des verbes pronominaux avec le bon pronom et la préposition fixe.'),
  steps: [
    { kind: 'intro', title: 'Reflexive Verben 😌', titleFr: 'Les verbes pronominaux 😌',
      scene: 'Lara and Lea talk about the weekend, their feelings and what they are looking forward to.', sceneFr: 'Lara et Lea parlent du week-end, de leurs sentiments et de ce qu’elles attendent avec impatience.',
      goals: ['Use reflexive verbs like sich freuen', 'Use the reflexive pronouns mich, dich, sich, uns, euch', 'Use verbs with fixed prepositions: sich freuen auf, sich interessieren für'],
      goalsFr: ['Utiliser des verbes pronominaux comme sich freuen', 'Utiliser les pronoms réfléchis mich, dich, sich, uns, euch', 'Utiliser des verbes à préposition fixe : sich freuen auf, sich interessieren für'] },

    // ───────────── 1 · Reflexive pronouns ─────────────
    { kind: 'chapter', title: 'Reflexivpronomen', titleFr: 'Les pronoms réfléchis', blurb: 'ich freue mich, du freust dich.', blurbFr: 'ich freue mich, du freust dich.' },

    { kind: 'situation', title: 'Ich freue mich!', titleFr: 'Je suis contente !',
      setting: 'Lara greets Lea on Friday.', settingFr: 'Lara salue Lea le vendredi.',
      lines: [
        line('Lara', 'Hallo Lea! Wie fühlst du dich heute?', 'Hi Lea! How do you feel today?', 'Salut Lea ! Comment te sens-tu aujourd’hui ?'),
        line('Lea', 'Heute fühle ich mich sehr gut. Ich freue mich auf das Wochenende!', 'Today I feel very good. I’m looking forward to the weekend!', 'Aujourd’hui je me sens très bien. Je me réjouis du week-end !'),
        line('Lara', 'Wir treffen uns um acht, oder? Er wäscht sich noch, er kommt gleich.', 'We’re meeting at eight, right? He’s still washing, he’s coming in a moment.', 'Nous nous retrouvons à huit heures, non ? Il se lave encore, il arrive tout de suite.'),
        line('Lea', 'Ich wasche mich schnell und dann gehen wir.', 'I’ll wash up quickly and then we go.', 'Je me lave vite et ensuite nous y allons.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l9-e11', prompt: 'How does Lea feel today?', promptFr: 'Comment Lea se sent-elle aujourd’hui ?', options: ['Very good', 'Tired', 'Ill'], optionsFr: ['Très bien', 'Fatiguée', 'Malade'], answer: 0, explain: 'She says: “Heute fühle ich mich sehr gut.”', explainFr: 'Elle dit : « Heute fühle ich mich sehr gut. »', hint: 'Look at Lea’s first line.', hintFr: 'Regarde la première réplique de Lea.' } },

    { kind: 'wordgroup', title: 'Reflexive Verben', titleFr: 'Verbes pronominaux',
      items: [{ id: 'a2l9-sich-freuen', german: 'sich freuen', english: 'to be glad / look forward', french: 'se réjouir', gender: null, syllables: ['sich', 'FREU', 'en'], pronunciation: 'zikh FROY-en', example: { de: 'Ich freue mich.', en: 'I am glad.', fr: 'Je me réjouis.' } }, { id: 'a2l9-sich-fuehlen', german: 'sich fühlen', english: 'to feel', french: 'se sentir', gender: null, syllables: ['sich', 'FÜH', 'len'], pronunciation: 'zikh FUE-len', example: { de: 'Ich fühle mich gut.', en: 'I feel good.', fr: 'Je me sens bien.' } }, { id: 'a2l9-sich-waschen', german: 'sich waschen', english: 'to wash (oneself)', french: 'se laver', gender: null, syllables: ['sich', 'WA', 'schen'], pronunciation: 'zikh VAH-shen', example: { de: 'Ich wasche mich.', en: 'I wash myself.', fr: 'Je me lave.' } }, { id: 'a2l9-sich-treffen', german: 'sich treffen', english: 'to meet (each other)', french: 'se rencontrer', gender: null, syllables: ['sich', 'TREF', 'fen'], pronunciation: 'zikh TREF-fen', example: { de: 'Wir treffen uns um acht.', en: 'We meet at eight.', fr: 'On se retrouve à huit heures.' } }, { id: 'a2l9-sich-entspannen', german: 'sich entspannen', english: 'to relax', french: 'se détendre', gender: null, syllables: ['sich', 'ent', 'SPAN', 'nen'], pronunciation: 'zikh ent-SHPAHN-en', example: { de: 'Am Sonntag entspanne ich mich.', en: 'On Sunday I relax.', fr: 'Le dimanche, je me détends.' } }] },

    { kind: 'wordgroup', title: 'Die Pronomen', titleFr: 'Les pronoms',
      items: [{ id: 'a2l9-mich', german: 'mich', english: 'myself (reflexive)', french: 'me (réfléchi)', gender: null, syllables: ['MICH'], pronunciation: 'mikh', example: { de: 'Ich freue mich.', en: 'I am glad.', fr: 'Je me réjouis.' } }, { id: 'a2l9-dich', german: 'dich', english: 'yourself (reflexive)', french: 'te (réfléchi)', gender: null, syllables: ['DICH'], pronunciation: 'dikh', example: { de: 'Wie fühlst du dich?', en: 'How do you feel?', fr: 'Comment te sens-tu ?' } }, { id: 'a2l9-sich', german: 'sich', english: 'himself / herself / themselves', french: 'se (réfléchi)', gender: null, syllables: ['SICH'], pronunciation: 'zikh', example: { de: 'Er wäscht sich.', en: 'He washes himself.', fr: 'Il se lave.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l9-reflexiv', title: 'Reflexive verbs and pronouns', titleFr: 'Verbes et pronoms réfléchis',
      lead: 'The reflexive pronoun matches the subject: ich → mich, du → dich, er → sich, wir → uns, ihr → euch, sie → sich.',
      leadFr: 'Le pronom réfléchi s’accorde avec le sujet : ich → mich, du → dich, er → sich, wir → uns, ihr → euch, sie → sich.',
      explanationMd: 'A **reflexive verb** needs a **reflexive pronoun** (accusative) that **matches the subject**: **ich → mich, du → dich, er / sie / es → sich, wir → uns, ihr → euch, sie / Sie → sich**. The pronoun usually comes **right after the verb**: **Ich freue mich. Wie fühlst du dich? Er wäscht sich.** Many everyday actions are reflexive: **sich waschen, sich anziehen, sich fühlen, sich entspannen, sich treffen**. In a dictionary they appear as **sich + infinitive**.',
      explanationMdFr: 'Un **verbe pronominal** a besoin d’un **pronom réfléchi** (accusatif) qui **s’accorde avec le sujet** : **ich → mich, du → dich, er / sie / es → sich, wir → uns, ihr → euch, sie / Sie → sich**. Le pronom suit généralement **directement le verbe** : **Ich freue mich. Wie fühlst du dich ? Er wäscht sich.** Beaucoup d’actions quotidiennes sont pronominales : **sich waschen, sich anziehen, sich fühlen, sich entspannen, sich treffen**. Dans un dictionnaire, ils apparaissent comme **sich + infinitif**.',
      tables: [{ title: 'sich freuen', titleFr: 'sich freuen', headers: ['Person', 'Pronoun', 'Example'], headersFr: ['Personne', 'Pronom', 'Exemple'],
        rows: [['ich', 'mich', 'Ich freue mich.'], ['du', 'dich', 'Du freust dich.'], ['er / sie / es', 'sich', 'Er freut sich.'], ['wir', 'uns', 'Wir freuen uns.'], ['ihr', 'euch', 'Ihr freut euch.'], ['sie / Sie', 'sich', 'Sie freuen sich.']],
        rowsFr: [['ich', 'mich', 'Ich freue mich.'], ['du', 'dich', 'Du freust dich.'], ['er / sie / es', 'sich', 'Er freut sich.'], ['wir', 'uns', 'Wir freuen uns.'], ['ihr', 'euch', 'Ihr freut euch.'], ['sie / Sie', 'sich', 'Sie freuen sich.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'fühle', role: 'verb' }, { text: 'mich', role: 'accusative' }, { text: 'gut.', role: 'other' }], en: 'I feel good.', fr: 'Je me sens bien.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'treffen', role: 'verb' }, { text: 'uns', role: 'accusative' }, { text: 'später.', role: 'time' }], en: 'We meet later.', fr: 'Nous nous retrouvons plus tard.' },
      ],
      contrast: {
        a: { label: 'Reflexive', labelFr: 'Réfléchi', note: 'the pronoun = the subject', noteFr: 'le pronom = le sujet', examples: [g('Ich wasche mich.', 'I wash myself.', 'Je me lave.'), g('Er wäscht sich.', 'He washes himself.', 'Il se lave.')] },
        b: { label: 'Not reflexive', labelFr: 'Non réfléchi', note: 'someone else', noteFr: 'quelqu’un d’autre', examples: [g('Ich wasche das Auto.', 'I wash the car.', 'Je lave la voiture.'), g('Er wäscht ihn.', 'He washes him.', 'Il le lave.')] },
      },
      examples: [
        g('Ich fühle mich gut.', 'I feel good.', 'Je me sens bien.'),
        g('Wir treffen uns später.', 'We meet later.', 'Nous nous retrouvons plus tard.'),
        g('Wie fühlst du dich?', 'How do you feel?', 'Comment te sens-tu ?'),
        g('Er wäscht sich.', 'He washes himself.', 'Il se lave.'),
        g('Am Wochenende entspanne ich mich.', 'At the weekend I relax.', 'Le week-end, je me détends.'),
        g('Am Morgen wasche ich mich.', 'In the morning I wash.', 'Le matin, je me lave.'),
      ],
      mistakes: [
        { wrong: 'Ich freue dich.', right: 'Ich freue mich.', why: 'The pronoun must match the subject (ich → mich).', whyFr: 'Le pronom doit s’accorder avec le sujet (ich → mich).' },
        { wrong: 'Er wäscht mich.', right: 'Er wäscht sich.', why: 'He washes himself: sich.', whyFr: 'Il se lave lui-même : sich.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l9-e1', prompt: 'Ich freue ___. (reflexive pronoun for ich)', answer: 'mich', hint: 'ich → mich', hintFr: 'ich → mich' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l9-e2', prompt: 'Wie fühlst du ___? (reflexive pronoun for du)', answer: 'dich', hint: 'du → dich', hintFr: 'du → dich' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l9-e3', prompt: 'Which reflexive pronoun goes with "er"?', promptFr: 'Quel pronom réfléchi va avec « er » ?', options: ['mich', 'sich', 'dich'], answer: 1, explain: 'er/sie/es → sich.', explainFr: 'er/sie/es → sich.', hint: 'Third person uses "sich".', hintFr: 'La troisième personne utilise « sich ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l9-e9', prompt: 'Er wäscht ___. (reflexive pronoun for er)', answer: 'sich', hint: 'er → sich', hintFr: 'er → sich' } },

    // ───────────── 2 · Daily life ─────────────
    { kind: 'chapter', title: 'Alltag und Gefühle', titleFr: 'Quotidien et sentiments', blurb: 'sich entspannen, sich anziehen.', blurbFr: 'sich entspannen, sich anziehen.' },

    { kind: 'situation', title: 'Mein Tag', titleFr: 'Ma journée',
      setting: 'Lea tells Lara about her routine.', settingFr: 'Lea raconte sa routine à Lara.',
      lines: [
        line('Lea', 'Am Morgen wasche ich mich und ziehe mich an. Dann treffen wir uns im Café.', 'In the morning I wash and get dressed. Then we meet at the café.', 'Le matin, je me lave et je m’habille. Ensuite nous nous retrouvons au café.'),
        line('Lara', 'Am Wochenende entspanne ich mich. Dann fühle ich mich wohl.', 'At the weekend I relax. Then I feel good.', 'Le week-end, je me détends. Alors je me sens bien.'),
        line('Lea', 'Ich fühle mich auch am Sonntag am besten.', 'I feel best on Sunday too.', 'Moi aussi, je me sens le mieux le dimanche.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l9-e12', prompt: 'When does Lara relax?', promptFr: 'Quand Lara se détend-elle ?', options: ['At the weekend', 'In the morning', 'At work'], optionsFr: ['Le week-end', 'Le matin', 'Au travail'], answer: 0, explain: 'She says: “Am Wochenende entspanne ich mich.”', explainFr: 'Elle dit : « Am Wochenende entspanne ich mich. »', hint: 'Look at Lara’s line.', hintFr: 'Regarde la réplique de Lara.' } },

    { kind: 'exercise', exercise: { type: 'match', id: 'a2l9-e4', pairs: [{ de: 'ich', en: 'mich', fr: 'mich' }, { de: 'du', en: 'dich', fr: 'dich' }, { de: 'wir', en: 'uns', fr: 'uns' }], hint: 'Match each subject to its reflexive pronoun.', hintFr: 'Associe chaque sujet à son pronom réfléchi.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l9-e6', tokens: ['mich', 'entspanne', 'Ich', 'am', 'Sonntag'], answer: ['Ich', 'entspanne', 'mich', 'am', 'Sonntag'], hint: 'The reflexive pronoun comes right after the verb.', hintFr: 'Le pronom réfléchi vient juste après le verbe.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l9-e5', prompt: 'Listen. How does Lea feel?', promptFr: 'Écoute. Comment se sent Lea ?', audio: { ttsText: 'Heute fühle ich mich sehr gut.' }, options: ['Very good', 'Tired', 'Ill'], optionsFr: ['Très bien', 'Fatiguée', 'Malade'], answer: 0, hint: 'Listen after "fühle ich mich".', hintFr: 'Écoute après « fühle ich mich ».' } },

    // ───────────── 3 · Fixed prepositions ─────────────
    { kind: 'chapter', title: 'Feste Präpositionen', titleFr: 'Prépositions fixes', blurb: 'sich freuen auf, sich interessieren für.', blurbFr: 'sich freuen auf, sich interessieren für.' },

    { kind: 'situation', title: 'Wofür interessierst du dich?', titleFr: 'Qu’est-ce qui t’intéresse ?',
      setting: 'Max and Lara talk about hobbies and holidays.', settingFr: 'Max et Lara parlent de loisirs et de vacances.',
      lines: [
        line('Lara', 'Wofür interessierst du dich, Max?', 'What are you interested in, Max?', 'Qu’est-ce qui t’intéresse, Max ?'),
        line('Max', 'Ich interessiere mich sehr für Sport und Musik. Und du? Freust du dich auf den Urlaub?', 'I am very interested in sport and music. And you? Are you looking forward to the holiday?', 'Je m’intéresse beaucoup au sport et à la musique. Et toi ? Tu te réjouis des vacances ?'),
        line('Lara', 'Ja, ich freue mich auf den Urlaub. Sie interessiert sich für Kunst, aber ich erinnere mich an die Museen.', 'Yes, I’m looking forward to the holiday. She is interested in art, but I remember the museums.', 'Oui, je me réjouis des vacances. Elle s’intéresse à l’art, mais moi je me souviens des musées.'),
      ],
      words: [{ id: 'a2l9-sich-interessieren', german: 'sich interessieren für', english: 'to be interested in', french: 's’intéresser à', gender: null, syllables: ['in', 'te', 'res', 'SIE', 'ren'], pronunciation: 'in-te-res-SEE-ren', example: { de: 'Ich interessiere mich für Musik.', en: 'I am interested in music.', fr: 'Je m’intéresse à la musique.' } }, { id: 'a2l9-sich-erinnern', german: 'sich erinnern an', english: 'to remember', french: 'se souvenir de', gender: null, syllables: ['er', 'IN', 'nern'], pronunciation: 'air-IN-nern', example: { de: 'Ich erinnere mich an dich.', en: 'I remember you.', fr: 'Je me souviens de toi.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l9-praepositionen', title: 'Reflexive verbs with fixed prepositions', titleFr: 'Verbes pronominaux avec prépositions fixes',
      lead: 'sich freuen auf, sich interessieren für, sich erinnern an: the preposition is fixed and takes the accusative.',
      leadFr: 'sich freuen auf, sich interessieren für, sich erinnern an : la préposition est fixe et prend l’accusatif.',
      explanationMd: 'Some reflexive verbs come with a **fixed preposition** that you learn together with the verb: **sich freuen auf + accusative** (to look forward to), **sich interessieren für + accusative** (to be interested in), **sich erinnern an + accusative** (to remember). Ask with **wo(r) + preposition**: **Worauf freust du dich?** **Wofür interessierst du dich?** **Woran erinnerst du dich?** Learn the preposition **with** the verb — you cannot guess it.',
      explanationMdFr: 'Certains verbes pronominaux ont une **préposition fixe** que tu apprends avec le verbe : **sich freuen auf + accusatif** (se réjouir de), **sich interessieren für + accusatif** (s’intéresser à), **sich erinnern an + accusatif** (se souvenir de). Pose la question avec **wo(r) + préposition** : **Worauf freust du dich ?** **Wofür interessierst du dich ?** **Woran erinnerst du dich ?** Apprends la préposition **avec** le verbe — on ne peut pas la deviner.',
      tables: [{ title: 'Fixed prepositions', titleFr: 'Prépositions fixes', headers: ['Verb', 'Preposition', 'Example'], headersFr: ['Verbe', 'Préposition', 'Exemple'],
        rows: [['sich freuen', 'auf + acc', 'Ich freue mich auf den Urlaub.'], ['sich interessieren', 'für + acc', 'Sie interessiert sich für Kunst.'], ['sich erinnern', 'an + acc', 'Ich erinnere mich an dich.']],
        rowsFr: [['sich freuen', 'auf + acc', 'Ich freue mich auf den Urlaub.'], ['sich interessieren', 'für + acc', 'Sie interessiert sich für Kunst.'], ['sich erinnern', 'an + acc', 'Ich erinnere mich an dich.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'freue', role: 'verb' }, { text: 'mich', role: 'accusative' }, { text: 'auf den Urlaub.', role: 'accusative' }], en: 'I’m looking forward to the holiday.', fr: 'Je me réjouis des vacances.' },
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'interessiert', role: 'verb' }, { text: 'sich', role: 'accusative' }, { text: 'für Kunst.', role: 'accusative' }], en: 'She is interested in art.', fr: 'Elle s’intéresse à l’art.' },
      ],
      contrast: {
        a: { label: 'Question with wo(r)-', labelFr: 'Question avec wo(r)-', note: 'for things', noteFr: 'pour les choses', examples: [g('Worauf freust du dich? — Auf den Urlaub.', 'What are you looking forward to? — The holiday.', 'De quoi te réjouis-tu ? — Des vacances.'), g('Wofür interessierst du dich? — Für Musik.', 'What are you interested in? — Music.', 'À quoi t’intéresses-tu ? — À la musique.')] },
        b: { label: 'Answer', labelFr: 'Réponse', note: 'preposition + accusative', noteFr: 'préposition + accusatif', examples: [g('Ich freue mich auf das Wochenende.', 'I look forward to the weekend.', 'Je me réjouis du week-end.'), g('Ich erinnere mich an die Museen.', 'I remember the museums.', 'Je me souviens des musées.')] },
      },
      examples: [
        g('Ich freue mich auf den Urlaub.', 'I look forward to the holiday.', 'Je me réjouis des vacances.'),
        g('Sie interessiert sich für Kunst.', 'She is interested in art.', 'Elle s’intéresse à l’art.'),
        g('Ich interessiere mich sehr für Sport und Musik.', 'I am very interested in sport and music.', 'Je m’intéresse beaucoup au sport et à la musique.'),
        g('Ich erinnere mich an dich.', 'I remember you.', 'Je me souviens de toi.'),
        g('Worauf freust du dich?', 'What are you looking forward to?', 'De quoi te réjouis-tu ?'),
        g('Ich freue mich auf das Wochenende.', 'I look forward to the weekend.', 'Je me réjouis du week-end.'),
      ],
      mistakes: [
        { wrong: 'Ich freue mich für den Urlaub.', right: 'Ich freue mich auf den Urlaub.', why: 'sich freuen goes with auf, not für.', whyFr: 'sich freuen va avec auf, pas für.' },
        { wrong: 'Ich interessiere mich auf Musik.', right: 'Ich interessiere mich für Musik.', why: 'sich interessieren goes with für.', whyFr: 'sich interessieren va avec für.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l9-e7', prompt: 'Ich interessiere mich ___ Musik. (fixed preposition)', answer: 'für', hint: 'sich interessieren + für', hintFr: 'sich interessieren + für' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l9-e8', prompt: 'Which preposition goes with "sich freuen" (to look forward)?', promptFr: 'Quelle préposition va avec « sich freuen » (attendre avec impatience) ?', options: ['für', 'auf', 'an'], answer: 1, explain: '"sich freuen auf" (+ accusative) = to look forward to.', explainFr: '« sich freuen auf » (+ accusatif) = attendre avec impatience.', hint: 'Ich freue mich … das Wochenende.', hintFr: 'Ich freue mich … das Wochenende.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l9-e10', prompt: 'Listen. What is Max interested in?', promptFr: 'Écoute. À quoi Max s’intéresse-t-il ?', audio: { ttsText: 'Ich interessiere mich sehr für Sport und Musik.' }, options: ['Sport and music', 'Art and film', 'Cooking'], optionsFr: ['Le sport et la musique', 'L’art et le cinéma', 'La cuisine'], answer: 0, hint: 'Listen after "für".', hintFr: 'Écoute après « für ».' } },

    { kind: 'pronunciation', focus: 'The reflexive "sich" is "zikh"; "eu" in freuen is "oy" and "ü" in fühlen is rounded', focusFr: 'Le réfléchi « sich » se dit « zikh » ; « eu » de freuen est « oï » et « ü » de fühlen est arrondi', items: [{ id: 'a2l9-freuen-pron', german: 'sich freuen', english: 'to be glad', french: 'se réjouir', gender: null, syllables: ['sich', 'FREU', 'en'], pronunciation: 'zikh FROY-en', example: { de: 'Ich freue mich sehr.', en: 'I am very glad.', fr: 'Je me réjouis beaucoup.' } }, { id: 'a2l9-fuehlen-pron', german: 'sich fühlen', english: 'to feel', french: 'se sentir', gender: null, syllables: ['sich', 'FÜH', 'len'], pronunciation: 'zikh FUE-len', example: { de: 'Ich fühle mich wohl.', en: 'I feel comfortable.', fr: 'Je me sens bien.' } }] },

    { kind: 'wrapup',
      summary: 'You can now use **reflexive verbs** with **mich, dich, sich, uns, euch** and the fixed prepositions **sich freuen auf**, **sich interessieren für**, **sich erinnern an**. 🎉',
      summaryFr: 'Tu sais maintenant utiliser des **verbes pronominaux** avec **mich, dich, sich, uns, euch** et les prépositions fixes **sich freuen auf**, **sich interessieren für**, **sich erinnern an**. 🎉',
      card: { title: 'Reflexive verbs on one page', titleFr: 'Les verbes pronominaux en une page', sections: [
        { heading: 'Pronouns', headingFr: 'Pronoms', rows: [g('mich · dich · sich', 'ich · du · er/sie/es', 'ich · du · er/sie/es'), g('uns · euch · sich', 'wir · ihr · sie/Sie', 'wir · ihr · sie/Sie')] },
        { heading: 'Fixed prepositions', headingFr: 'Prépositions fixes', rows: [g('sich freuen auf + acc', 'look forward to', 'se réjouir de'), g('sich interessieren für + acc', 'be interested in', 's’intéresser à'), g('sich erinnern an + acc', 'remember', 'se souvenir de')] },
      ] } },
  ],
};

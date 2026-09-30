import type { Lesson } from '../types';

export const a2lektion10: Lesson = {
  id: 'a2-l10', level: 'A2', module: 6, number: 22,
  title: { de: 'Früher war das anders', en: 'It was different back then', fr: 'Avant, c’était différent' },
  theme: 'The simple past (Präteritum) of sein, haben, and the modal verbs',
  themeFr: 'Le prétérit (Präteritum) de sein, haben et des verbes modaux',
  goals: ['Talk about the past with "war" and "hatte"', 'Use the Präteritum of modal verbs (konnte, musste …)', 'Tell a short story about your childhood', 'Know when to use Präteritum vs. Perfekt'],
  goalsFr: ['Parler du passé avec « war » et « hatte »', 'Utiliser le prétérit des modaux (konnte, musste …)', 'Raconter une courte histoire sur ton enfance', 'Savoir quand utiliser le prétérit ou le Perfekt'],
  steps: [
    { kind: 'intro', title: 'Als ich ein Kind war … 👶', titleFr: 'Quand j’étais enfant … 👶',
      scene: 'Reminiscing about how life used to be.', sceneFr: 'On se remémore comment était la vie avant.',
      goals: ['Use war and hatte', 'Use the past of modal verbs', 'Describe how things used to be', 'Choose Präteritum or Perfekt'],
      goalsFr: ['Utiliser war et hatte', 'Utiliser le passé des modaux', 'Décrire comment c’était avant', 'Choisir le prétérit ou le Perfekt'] },

    { kind: 'vocab', item: { id: 'a2l10-frueher', german: 'früher', english: 'earlier / in the past', french: 'avant / autrefois', gender: null, syllables: ['FRÜ', 'her'], pronunciation: 'FRUE-her', example: { de: 'Früher war alles anders.', en: 'In the past everything was different.', fr: 'Avant, tout était différent.' } } },
    { kind: 'vocab', item: { id: 'a2l10-damals', german: 'damals', english: 'back then', french: 'à l’époque', gender: null, syllables: ['DA', 'mals'], pronunciation: 'DAH-mahls', example: { de: 'Damals hatte ich kein Handy.', en: 'Back then I had no mobile.', fr: 'À l’époque, je n’avais pas de portable.' } } },
    { kind: 'vocab', item: { id: 'a2l10-kindheit', german: 'die Kindheit', english: 'the childhood', french: 'l’enfance', gender: 'die', syllables: ['KIND', 'heit'], pronunciation: 'dee KINT-hite', example: { de: 'Meine Kindheit war schön.', en: 'My childhood was lovely.', fr: 'Mon enfance était belle.' } } },
    { kind: 'vocab', item: { id: 'a2l10-schule', german: 'die Schule', english: 'the school', french: 'l’école', gender: 'die', syllables: ['SCHU', 'le'], pronunciation: 'dee SHOO-le', example: { de: 'Ich war gern in der Schule.', en: 'I liked being at school.', fr: 'J’aimais bien l’école.' } } },
    { kind: 'vocab', item: { id: 'a2l10-geschichte', german: 'die Geschichte', english: 'the story / history', french: 'l’histoire', gender: 'die', syllables: ['ge', 'SCHICH', 'te'], pronunciation: 'ge-SHIKH-te', example: { de: 'Erzähl mir eine Geschichte.', en: 'Tell me a story.', fr: 'Raconte-moi une histoire.' } } },
    { kind: 'vocab', item: { id: 'a2l10-leben', german: 'das Leben', english: 'the life', french: 'la vie', gender: 'das', syllables: ['LE', 'ben'], pronunciation: 'dahs LAY-ben', example: { de: 'Das Leben war einfacher.', en: 'Life was simpler.', fr: 'La vie était plus simple.' } } },
    { kind: 'vocab', item: { id: 'a2l10-oft', german: 'oft', english: 'often', french: 'souvent', gender: null, syllables: ['OFT'], pronunciation: 'oft', example: { de: 'Als Kind war ich oft krank.', en: 'As a child I was often ill.', fr: 'Enfant, j’étais souvent malade.' } } },
    { kind: 'vocab', item: { id: 'a2l10-nie', german: 'nie', english: 'never', french: 'jamais', gender: null, syllables: ['NIE'], pronunciation: 'nee', example: { de: 'Ich hatte nie Zeit.', en: 'I never had time.', fr: 'Je n’avais jamais le temps.' } } },
    { kind: 'vocab', item: { id: 'a2l10-immer', german: 'immer', english: 'always', french: 'toujours', gender: null, syllables: ['IM', 'mer'], pronunciation: 'IM-mer', example: { de: 'Wir waren immer zusammen.', en: 'We were always together.', fr: 'Nous étions toujours ensemble.' } } },
    { kind: 'vocab', item: { id: 'a2l10-letztes-jahr', german: 'letztes Jahr', english: 'last year', french: 'l’année dernière', gender: null, syllables: ['LETZ', 'tes', 'JAHR'], pronunciation: 'LETS-tes YAAR', example: { de: 'Letztes Jahr war ich in Wien.', en: 'Last year I was in Vienna.', fr: 'L’année dernière, j’étais à Vienne.' } } },

    { kind: 'grammar', note: {
      id: 'a2l10-sein-haben', title: 'Präteritum of sein and haben', titleFr: 'Le prétérit de sein et haben',
      explanationMd: 'For **sein** and **haben**, Germans use the simple past even in speech:\n\n**sein** → ich **war**, du **warst**, er/sie/es **war**, wir **waren**\n**haben** → ich **hatte**, du **hattest**, er/sie/es **hatte**, wir **hatten**\n\nIch **war** müde. · Ich **hatte** keine Zeit.',
      explanationMdFr: 'Pour **sein** et **haben**, on utilise le prétérit même à l’oral :\n\n**sein** → ich **war**, du **warst**, er/sie/es **war**, wir **waren**\n**haben** → ich **hatte**, du **hattest**, er/sie/es **hatte**, wir **hatten**\n\nIch **war** müde. · Ich **hatte** keine Zeit.',
      examples: [
        { de: 'Gestern war ich krank.', en: 'Yesterday I was ill.', fr: 'Hier, j’étais malade.' },
        { de: 'Wir hatten viel Spaß.', en: 'We had a lot of fun.', fr: 'Nous nous sommes bien amusés.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'a2l10-modalverben', title: 'Präteritum of the modal verbs', titleFr: 'Le prétérit des verbes modaux',
      explanationMd: 'Modals are also used in the simple past. They **lose the umlaut** and add **-te**:\n\n- können → **konnte** · müssen → **musste** · wollen → **wollte**\n- dürfen → **durfte** · sollen → **sollte**\n\nIch **konnte** nicht kommen, weil ich arbeiten **musste**.',
      explanationMdFr: 'Les modaux s’emploient aussi au prétérit. Ils **perdent le tréma** et ajoutent **-te** :\n\n- können → **konnte** · müssen → **musste** · wollen → **wollte**\n- dürfen → **durfte** · sollen → **sollte**\n\nIch **konnte** nicht kommen, weil ich arbeiten **musste**.',
      examples: [
        { de: 'Ich musste gestern arbeiten.', en: 'I had to work yesterday.', fr: 'Hier, je devais travailler.' },
        { de: 'Als Kind konnte ich schon lesen.', en: 'As a child I could already read.', fr: 'Enfant, je savais déjà lire.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'a2l10-wann', title: 'Präteritum or Perfekt?', titleFr: 'Prétérit ou Perfekt ?',
      explanationMd: 'In everyday speech:\n\n- Use the **Präteritum** for **sein, haben, and modals** (war, hatte, konnte …).\n- Use the **Perfekt** for most **other** verbs (Ich habe gespielt, Ich bin gefahren).\n\nIn writing (stories, reports), the Präteritum is used for all verbs.',
      explanationMdFr: 'À l’oral quotidien :\n\n- Utilise le **prétérit** pour **sein, haben et les modaux** (war, hatte, konnte …).\n- Utilise le **Perfekt** pour la plupart des **autres** verbes (Ich habe gespielt, Ich bin gefahren).\n\nÀ l’écrit (récits, rapports), le prétérit s’emploie pour tous les verbes.',
      examples: [
        { de: 'Ich war im Kino und habe einen Film gesehen.', en: 'I was at the cinema and watched a film.', fr: 'J’étais au cinéma et j’ai vu un film.' },
        { de: 'Ich hatte Hunger und habe eine Pizza gegessen.', en: 'I was hungry and ate a pizza.', fr: 'J’avais faim et j’ai mangé une pizza.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l10-e1', prompt: 'Gestern ___ ich krank. (sein — Präteritum, ich)', answer: 'war', hint: 'sein in the simple past: ich war', hintFr: 'sein au prétérit : ich war' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l10-e2', prompt: 'Ich ___ keine Zeit. (haben — Präteritum, ich)', answer: 'hatte', hint: 'haben in the simple past: ich hatte', hintFr: 'haben au prétérit : ich hatte' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l10-e3', prompt: 'What is the Präteritum of "müssen" (ich)?', promptFr: 'Quel est le prétérit de « müssen » (ich) ?', options: ['müsste', 'musste', 'muss'], answer: 1, explain: 'müssen → musste (no umlaut in the past).', explainFr: 'müssen → musste (pas de tréma au passé).', hint: 'The umlaut disappears.', hintFr: 'Le tréma disparaît.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l10-e4', pairs: [ { de: 'können', en: 'konnte', fr: 'konnte' }, { de: 'wollen', en: 'wollte', fr: 'wollte' }, { de: 'dürfen', en: 'durfte', fr: 'durfte' } ], hint: 'Match each modal to its simple-past form.', hintFr: 'Associe chaque modal à sa forme au prétérit.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l10-e5', prompt: 'Listen. How was Anna as a child?', promptFr: 'Écoute. Comment était Anna enfant ?', audio: { ttsText: 'Als Kind war ich oft krank, aber ich war sehr glücklich.' }, options: ['Often ill but happy', 'Always healthy', 'Never at school'], optionsFr: ['Souvent malade mais heureuse', 'Toujours en bonne santé', 'Jamais à l’école'], answer: 0, hint: 'Listen for "krank" and "glücklich".', hintFr: 'Écoute « krank » et « glücklich ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l10-e6', prompt: 'Ich ___ nicht kommen. (können — Präteritum, ich)', answer: 'konnte', hint: 'können → konnte', hintFr: 'können → konnte' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l10-e7', prompt: 'Which verb normally uses the Präteritum in speech?', promptFr: 'Quel verbe utilise normalement le prétérit à l’oral ?', options: ['spielen', 'sein', 'kaufen'], answer: 1, explain: 'sein, haben and modals use the Präteritum in speech.', explainFr: 'sein, haben et les modaux utilisent le prétérit à l’oral.', hint: 'Not a normal action verb.', hintFr: 'Pas un verbe d’action ordinaire.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l10-e8', tokens: ['Zeit', 'hatte', 'keine', 'Ich', 'gestern'], answer: ['Ich', 'hatte', 'gestern', 'keine', 'Zeit'], hint: 'Subject, "hatte", time, then the object.', hintFr: 'Sujet, « hatte », le temps, puis l’objet.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l10-e9', prompt: 'Wir ___ immer zusammen. (sein — Präteritum, wir)', answer: 'waren', hint: 'sein → wir waren', hintFr: 'sein → wir waren' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l10-e10', prompt: 'Listen. Why couldn’t Tom come?', promptFr: 'Écoute. Pourquoi Tom n’a-t-il pas pu venir ?', audio: { ttsText: 'Ich konnte nicht kommen, weil ich arbeiten musste.' }, options: ['He had to work', 'He was ill', 'He had no money'], optionsFr: ['Il devait travailler', 'Il était malade', 'Il n’avait pas d’argent'], answer: 0, hint: 'Listen after "weil ich".', hintFr: 'Écoute après « weil ich ».' } },

    { kind: 'pronunciation', focus: 'Long "a" in war/waren; the modal past forms are short (konnte, musste) with no umlaut', focusFr: 'Le « a » long dans war/waren ; les modaux au passé sont brefs (konnte, musste) sans tréma', items: [
      { id: 'a2l10-war-pron', german: 'war', english: 'was', french: 'était', gender: null, syllables: ['WAR'], pronunciation: 'vaar', example: { de: 'Ich war zu Hause.', en: 'I was at home.', fr: 'J’étais à la maison.' } },
      { id: 'a2l10-konnte-pron', german: 'konnte', english: 'could', french: 'pouvait', gender: null, syllables: ['KONN', 'te'], pronunciation: 'KON-te', example: { de: 'Ich konnte nicht schlafen.', en: 'I couldn’t sleep.', fr: 'Je ne pouvais pas dormir.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now talk about the past with the **Präteritum** of **sein** (war), **haben** (hatte), and the modals (**konnte, musste, wollte, durfte**) — which lose their umlaut. In speech, use the Präteritum for these and the Perfekt for most other verbs. 🎉',
      summaryFr: 'Tu sais maintenant parler du passé avec le **prétérit** de **sein** (war), **haben** (hatte) et des modaux (**konnte, musste, wollte, durfte**) — qui perdent leur tréma. À l’oral, utilise le prétérit pour ceux-ci et le Perfekt pour la plupart des autres verbes. 🎉' },
  ],
};

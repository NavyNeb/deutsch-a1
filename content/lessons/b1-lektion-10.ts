import type { Lesson } from '../types';

export const b1lektion10: Lesson = {
  id: 'b1-l10', level: 'B1', module: 4, number: 10,
  title: { de: 'Verben mit Präposition', en: 'Verbs with prepositions', fr: 'Les verbes à préposition' },
  theme: 'Fixed verb + preposition combinations and da-/wo-compounds',
  themeFr: 'Les combinaisons verbe + préposition fixes et les composés da-/wo-',
  goals: ['Learn verbs with fixed prepositions (warten auf, denken an)', 'Use the right case after each preposition', 'Replace things with darauf/daran/darüber', 'Ask with worauf/woran/worüber'],
  goalsFr: ['Apprendre les verbes à préposition fixe (warten auf, denken an)', 'Utiliser le bon cas après chaque préposition', 'Remplacer les choses par darauf/daran/darüber', 'Demander avec worauf/woran/worüber'],
  steps: [
    { kind: 'intro', title: 'Worauf wartest du? 🚏', titleFr: 'Qu’attends-tu ? 🚏',
      scene: 'Talking about what people wait for, think about, and talk about.', sceneFr: 'On parle de ce que les gens attendent, pensent et discutent.',
      goals: ['Use verbs with fixed prepositions', 'Choose accusative or dative', 'Use da-compounds for things', 'Use wo-compounds for questions'],
      goalsFr: ['Utiliser les verbes à préposition fixe', 'Choisir accusatif ou datif', 'Utiliser les composés da- pour les choses', 'Utiliser les composés wo- pour les questions'] },

    { kind: 'vocab', item: { id: 'b1l10-warten-auf', german: 'warten auf', english: 'to wait for (+ acc)', french: 'attendre (+ acc)', gender: null, syllables: ['WAR', 'ten', 'auf'], pronunciation: 'VAR-ten owf', example: { de: 'Ich warte auf den Bus.', en: 'I wait for the bus.', fr: 'J’attends le bus.' } } },
    { kind: 'vocab', item: { id: 'b1l10-denken-an', german: 'denken an', english: 'to think of (+ acc)', french: 'penser à (+ acc)', gender: null, syllables: ['DEN', 'ken', 'an'], pronunciation: 'DENK-en ahn', example: { de: 'Ich denke an die Prüfung.', en: 'I think about the exam.', fr: 'Je pense à l’examen.' } } },
    { kind: 'vocab', item: { id: 'b1l10-sprechen-ueber', german: 'sprechen über', english: 'to talk about (+ acc)', french: 'parler de (+ acc)', gender: null, syllables: ['SPRE', 'chen', 'ü', 'ber'], pronunciation: 'SHPRE-khen UE-ber', example: { de: 'Wir sprechen über das Wetter.', en: 'We talk about the weather.', fr: 'Nous parlons du temps.' } } },
    { kind: 'vocab', item: { id: 'b1l10-kuemmern-um', german: 'sich kümmern um', english: 'to take care of (+ acc)', french: 's’occuper de (+ acc)', gender: null, syllables: ['KÜM', 'mern', 'um'], pronunciation: 'KUEM-mern oom', example: { de: 'Ich kümmere mich um die Kinder.', en: 'I take care of the children.', fr: 'Je m’occupe des enfants.' } } },
    { kind: 'vocab', item: { id: 'b1l10-abhaengen-von', german: 'abhängen von', english: 'to depend on (+ dat)', french: 'dépendre de (+ dat)', gender: null, syllables: ['AB', 'hän', 'gen', 'von'], pronunciation: 'AHP-heng-en fon', example: { de: 'Das hängt vom Wetter ab.', en: 'That depends on the weather.', fr: 'Ça dépend du temps.' } } },
    { kind: 'vocab', item: { id: 'b1l10-teilnehmen-an', german: 'teilnehmen an', english: 'to take part in (+ dat)', french: 'participer à (+ dat)', gender: null, syllables: ['TEIL', 'neh', 'men', 'an'], pronunciation: 'TILE-nay-men ahn', example: { de: 'Ich nehme an dem Kurs teil.', en: 'I take part in the course.', fr: 'Je participe au cours.' } } },
    { kind: 'vocab', item: { id: 'b1l10-worauf', german: 'worauf', english: 'for/on what', french: 'sur/après quoi', gender: null, syllables: ['wo', 'RAUF'], pronunciation: 'vo-ROWF', example: { de: 'Worauf wartest du?', en: 'What are you waiting for?', fr: 'Qu’attends-tu ?' } } },
    { kind: 'vocab', item: { id: 'b1l10-darauf', german: 'darauf', english: 'for/on it', french: 'dessus / cela', gender: null, syllables: ['da', 'RAUF'], pronunciation: 'dah-ROWF', example: { de: 'Ich warte darauf.', en: 'I’m waiting for it.', fr: 'Je l’attends.' } } },
    { kind: 'vocab', item: { id: 'b1l10-woran', german: 'woran', english: 'of/about what', french: 'à quoi', gender: null, syllables: ['wo', 'RAN'], pronunciation: 'vo-RAHN', example: { de: 'Woran denkst du?', en: 'What are you thinking about?', fr: 'À quoi penses-tu ?' } } },
    { kind: 'vocab', item: { id: 'b1l10-daran', german: 'daran', english: 'of/about it', french: 'à cela / y', gender: null, syllables: ['da', 'RAN'], pronunciation: 'dah-RAHN', example: { de: 'Ich denke oft daran.', en: 'I often think about it.', fr: 'J’y pense souvent.' } } },

    { kind: 'grammar', note: {
      id: 'b1l10-feste-praep', title: 'Verbs with fixed prepositions', titleFr: 'Verbes à préposition fixe',
      explanationMd: 'Many verbs come with a **fixed preposition** and a **fixed case** — learn them together:\n\n- **warten auf** (+ acc) — Ich warte **auf den** Bus.\n- **denken an** (+ acc) — Ich denke **an die** Prüfung.\n- **abhängen von** (+ dat) — Das hängt **vom** Wetter ab.\n- **teilnehmen an** (+ dat) — Ich nehme **an dem** Kurs teil.',
      explanationMdFr: 'Beaucoup de verbes ont une **préposition fixe** et un **cas fixe** — à apprendre ensemble :\n\n- **warten auf** (+ acc) — Ich warte **auf den** Bus.\n- **denken an** (+ acc) — Ich denke **an die** Prüfung.\n- **abhängen von** (+ dat) — Das hängt **vom** Wetter ab.\n- **teilnehmen an** (+ dat) — Ich nehme **an dem** Kurs teil.',
      examples: [
        { de: 'Wir sprechen über das Projekt.', en: 'We talk about the project.', fr: 'Nous parlons du projet.' },
        { de: 'Sie kümmert sich um ihre Eltern.', en: 'She takes care of her parents.', fr: 'Elle s’occupe de ses parents.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l10-da-compounds', title: 'da-compounds for things', titleFr: 'Les composés da- pour les choses',
      explanationMd: 'To refer to a **thing** (not a person), don’t use "preposition + it". Instead use **da(r)- + preposition**:\n\n- Ich warte auf den Bus → Ich warte **darauf**.\n- Ich denke an die Arbeit → Ich denke **daran**.\n- Wir sprechen über den Film → Wir sprechen **darüber**.\n\nAdd **-r-** when the preposition starts with a vowel (dar**auf**, dar**an**, dar**über**).',
      explanationMdFr: 'Pour renvoyer à une **chose** (pas une personne), n’utilise pas « préposition + it ». Utilise **da(r)- + préposition** :\n\n- Ich warte auf den Bus → Ich warte **darauf**.\n- Ich denke an die Arbeit → Ich denke **daran**.\n- Wir sprechen über den Film → Wir sprechen **darüber**.\n\nAjoute **-r-** quand la préposition commence par une voyelle (dar**auf**, dar**an**, dar**über**).',
      examples: [
        { de: 'Freust du dich auf den Urlaub? – Ja, ich freue mich darauf.', en: 'Are you looking forward to the holiday? – Yes, I’m looking forward to it.', fr: 'Tu attends les vacances ? – Oui, je les attends avec impatience.' },
        { de: 'Das Wetter? Es hängt davon ab.', en: 'The weather? It depends on it.', fr: 'Le temps ? Ça en dépend.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l10-wo-compounds', title: 'wo-compounds and people', titleFr: 'Les composés wo- et les personnes',
      explanationMd: 'Ask about a **thing** with **wo(r)- + preposition**:\n\n- **Worauf** wartest du? · **Woran** denkst du? · **Worüber** sprecht ihr?\n\nFor a **person**, keep the preposition + a question word/pronoun:\n\n- **Auf wen** wartest du? · Ich denke **an dich**.',
      explanationMdFr: 'Demande à propos d’une **chose** avec **wo(r)- + préposition** :\n\n- **Worauf** wartest du ? · **Woran** denkst du ? · **Worüber** sprecht ihr ?\n\nPour une **personne**, garde la préposition + un mot interrogatif/pronom :\n\n- **Auf wen** wartest du ? · Ich denke **an dich**.',
      examples: [
        { de: 'Worüber lacht ihr?', en: 'What are you laughing about?', fr: 'De quoi riez-vous ?' },
        { de: 'An wen denkst du? – An meine Familie.', en: 'Who are you thinking of? – Of my family.', fr: 'À qui penses-tu ? – À ma famille.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l10-e1', prompt: 'Ich warte ___ den Bus. (fixed preposition)', answer: 'auf', hint: 'warten + auf', hintFr: 'warten + auf' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l10-e2', prompt: 'Ich denke ___ die Prüfung. (fixed preposition)', answer: 'an', hint: 'denken + an', hintFr: 'denken + an' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l10-e3', prompt: 'Replace "auf den Bus": "Ich warte ___."', promptFr: 'Remplace « auf den Bus » : « Ich warte ___. »', options: ['auf ihn', 'darauf', 'worauf'], answer: 1, explain: 'A thing → da-compound: darauf.', explainFr: 'Une chose → composé da- : darauf.', hint: 'Bus is a thing → da-compound.', hintFr: 'Le bus est une chose → composé da-.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l10-e4', prompt: '___ denkst du? (question about a thing: an → ?)', answer: 'Woran', hint: 'wo + r + an → woran', hintFr: 'wo + r + an → woran' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l10-e5', pairs: [ { de: 'warten auf', en: 'wait for', fr: 'attendre' }, { de: 'denken an', en: 'think of', fr: 'penser à' }, { de: 'sprechen über', en: 'talk about', fr: 'parler de' } ], hint: 'Match each verb+preposition to its meaning.', hintFr: 'Associe chaque verbe+préposition à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l10-e6', prompt: 'Listen. What is Ben waiting for?', promptFr: 'Écoute. Qu’attend Ben ?', audio: { ttsText: 'Ich warte auf eine wichtige E-Mail.' }, options: ['An important email', 'The bus', 'A friend'], optionsFr: ['Un e-mail important', 'Le bus', 'Un ami'], answer: 0, hint: 'Listen after "auf".', hintFr: 'Écoute après « auf ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l10-e7', prompt: 'For a PERSON, how do you ask "who are you waiting for"?', promptFr: 'Pour une PERSONNE, comment demander « qui attends-tu » ?', options: ['Worauf wartest du?', 'Auf wen wartest du?', 'Darauf wartest du?'], answer: 1, explain: 'People → preposition + wen: Auf wen …?', explainFr: 'Personnes → préposition + wen : Auf wen …?', hint: 'Not a wo-compound for people.', hintFr: 'Pas de composé wo- pour les personnes.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l10-e8', prompt: 'Das hängt ___ Wetter ab. (abhängen von → vom)', answer: 'vom', hint: 'abhängen von + dem = vom', hintFr: 'abhängen von + dem = vom' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l10-e9', tokens: ['darauf', 'mich', 'Ich', 'freue'], answer: ['Ich', 'freue', 'mich', 'darauf'], hint: 'Reflexive + da-compound at the end.', hintFr: 'Réfléchi + composé da- à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l10-e10', prompt: 'Listen. What are they talking about?', promptFr: 'Écoute. De quoi parlent-ils ?', audio: { ttsText: 'Wir sprechen über die Reise nach Italien.' }, options: ['The trip to Italy', 'The weather', 'A film'], optionsFr: ['Le voyage en Italie', 'Le temps', 'Un film'], answer: 0, hint: 'Listen after "über".', hintFr: 'Écoute après « über ».' } },

    { kind: 'pronunciation', focus: 'da-/wo-compounds stress the preposition: daRAUF, woRAN, daRÜBER', focusFr: 'Les composés da-/wo- accentuent la préposition : daRAUF, woRAN, daRÜBER', items: [
      { id: 'b1l10-darauf-pron', german: 'darauf', english: 'for it', french: 'dessus', gender: null, syllables: ['da', 'RAUF'], pronunciation: 'dah-ROWF', example: { de: 'Ich freue mich darauf.', en: 'I look forward to it.', fr: 'Je l’attends avec impatience.' } },
      { id: 'b1l10-woran-pron', german: 'woran', english: 'of what', french: 'à quoi', gender: null, syllables: ['wo', 'RAN'], pronunciation: 'vo-RAHN', example: { de: 'Woran denkst du?', en: 'What are you thinking of?', fr: 'À quoi penses-tu ?' } },
    ] },

    { kind: 'wrapup', summary: 'You can now use verbs with **fixed prepositions** (warten auf, denken an, abhängen von), refer to things with **da-compounds** (darauf, daran, darüber), and ask about things with **wo-compounds** (worauf, woran) — while people keep preposition + wen/pronoun. 🎉',
      summaryFr: 'Tu sais maintenant utiliser les verbes à **préposition fixe** (warten auf, denken an, abhängen von), renvoyer aux choses avec les **composés da-** (darauf, daran, darüber), et interroger sur les choses avec les **composés wo-** (worauf, woran) — tandis que les personnes gardent préposition + wen/pronom. 🎉' },
  ],
};

import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion10: Lesson = {
  id: 'b1-l10', level: 'B1', module: 6, number: 22,
  title: { de: 'Verben mit Präposition', en: 'Verbs with prepositions', fr: 'Les verbes à préposition' },
  theme: 'Fixed verb + preposition combinations and da-/wo-compounds', themeFr: 'Les combinaisons verbe + préposition fixes et les composés da-/wo-',
  goals: ['Learn verbs with fixed prepositions (warten auf, denken an)', 'Use the right case after each preposition', 'Replace things with darauf/daran/darüber', 'Ask with worauf/woran/worüber'], goalsFr: ['Apprendre les verbes à préposition fixe (warten auf, denken an)', 'Utiliser le bon cas après chaque préposition', 'Remplacer les choses par darauf/daran/darüber', 'Demander avec worauf/woran/worüber'],
  canDo: g('Ich kann Verben mit festen Präpositionen und dem richtigen Kasus benutzen und mit da- und wo-Komposita fragen und antworten.', 'I can use verbs with fixed prepositions and the right case and ask and answer with da- and wo-compounds.', 'Je sais utiliser des verbes à préposition fixe avec le bon cas et poser et répondre avec les composés en da- et wo-.'),
  steps: [
    { kind: 'intro', title: 'Verben mit Präpositionen 🔗', titleFr: 'Verbes à préposition 🔗',
      scene: 'Ben waits, thinks, talks and worries — every verb needs its own little word.', sceneFr: 'Ben attend, pense, parle et s’inquiète — chaque verbe a besoin de son petit mot.',
      goals: ['Learn verbs with fixed prepositions (warten auf, denken an)', 'Use the right case after each preposition', 'Replace things with darauf / daran and ask with worauf / woran'],
      goalsFr: ['Apprendre des verbes à préposition fixe (warten auf, denken an)', 'Utiliser le bon cas après chaque préposition', 'Remplacer des choses par darauf / daran et poser avec worauf / woran'] },

    // ───────────── 1 · Fixed prepositions ─────────────
    { kind: 'chapter', title: 'Feste Verb-Präposition-Paare', titleFr: 'Paires verbe-préposition fixes', blurb: 'warten auf, denken an, sprechen über.', blurbFr: 'warten auf, denken an, sprechen über.' },

    { kind: 'situation', title: 'Worauf wartest du?', titleFr: 'Qu’attends-tu ?',
      setting: 'Ben talks with a colleague.', settingFr: 'Ben parle avec une collègue.',
      lines: [
        line('Kollegin', 'Worauf wartest du? Woran denkst du?', 'What are you waiting for? What are you thinking about?', 'Qu’attends-tu ? À quoi penses-tu ?'),
        line('Ben', 'Ich warte auf eine wichtige E-Mail. Ich denke an die Prüfung. Wir sprechen über das Projekt und über das Wetter.', 'I am waiting for an important e-mail. I am thinking of the exam. We talk about the project and about the weather.', 'J’attends un e-mail important. Je pense à l’examen. Nous parlons du projet et du temps.'),
        line('Kollegin', 'Ich kümmere mich um die Kinder. Sie kümmert sich um ihre Eltern. Ich nehme an dem Kurs teil.', 'I take care of the children. She takes care of her parents. I take part in the course.', 'Je m’occupe des enfants. Elle s’occupe de ses parents. Je participe au cours.'),
        line('Ben', 'Das hängt vom Wetter ab. Wir sprechen über die Reise nach Italien.', 'That depends on the weather. We are talking about the trip to Italy.', 'Cela dépend du temps. Nous parlons du voyage en Italie.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l10-e11', prompt: 'What is Ben waiting for?', promptFr: 'Qu’attend Ben ?', options: ['An important e-mail', 'The bus', 'A phone call'], optionsFr: ['Un e-mail important', 'Le bus', 'Un appel'], answer: 0, explain: 'He says: “Ich warte auf eine wichtige E-Mail.”', explainFr: 'Il dit : « Ich warte auf eine wichtige E-Mail. »', hint: 'Look for “warte auf”.', hintFr: 'Cherche « warte auf ».' } },

    { kind: 'wordgroup', title: 'Verben + Akkusativ', titleFr: 'Verbes + accusatif',
      items: [{ id: 'b1l10-warten-auf', german: 'warten auf', english: 'to wait for (+ acc)', french: 'attendre (+ acc)', gender: null, syllables: ['WAR', 'ten', 'auf'], pronunciation: 'VAR-ten owf', example: { de: 'Ich warte auf den Bus.', en: 'I wait for the bus.', fr: 'J’attends le bus.' } }, { id: 'b1l10-denken-an', german: 'denken an', english: 'to think of (+ acc)', french: 'penser à (+ acc)', gender: null, syllables: ['DEN', 'ken', 'an'], pronunciation: 'DENK-en ahn', example: { de: 'Ich denke an die Prüfung.', en: 'I think about the exam.', fr: 'Je pense à l’examen.' } }, { id: 'b1l10-sprechen-ueber', german: 'sprechen über', english: 'to talk about (+ acc)', french: 'parler de (+ acc)', gender: null, syllables: ['SPRE', 'chen', 'ü', 'ber'], pronunciation: 'SHPRE-khen UE-ber', example: { de: 'Wir sprechen über das Wetter.', en: 'We talk about the weather.', fr: 'Nous parlons du temps.' } }, { id: 'b1l10-kuemmern-um', german: 'sich kümmern um', english: 'to take care of (+ acc)', french: 's’occuper de (+ acc)', gender: null, syllables: ['KÜM', 'mern', 'um'], pronunciation: 'KUEM-mern oom', example: { de: 'Ich kümmere mich um die Kinder.', en: 'I take care of the children.', fr: 'Je m’occupe des enfants.' } }] },

    { kind: 'wordgroup', title: 'Verben + Dativ', titleFr: 'Verbes + datif',
      items: [{ id: 'b1l10-abhaengen-von', german: 'abhängen von', english: 'to depend on (+ dat)', french: 'dépendre de (+ dat)', gender: null, syllables: ['AB', 'hän', 'gen', 'von'], pronunciation: 'AHP-heng-en fon', example: { de: 'Das hängt vom Wetter ab.', en: 'That depends on the weather.', fr: 'Ça dépend du temps.' } }, { id: 'b1l10-teilnehmen-an', german: 'teilnehmen an', english: 'to take part in (+ dat)', french: 'participer à (+ dat)', gender: null, syllables: ['TEIL', 'neh', 'men', 'an'], pronunciation: 'TILE-nay-men ahn', example: { de: 'Ich nehme an dem Kurs teil.', en: 'I take part in the course.', fr: 'Je participe au cours.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l10-feste-praepositionen', title: 'Verbs with fixed prepositions', titleFr: 'Verbes à préposition fixe',
      lead: 'Learn verb + preposition + case together. You cannot guess the preposition.',
      leadFr: 'Apprends ensemble verbe + préposition + cas. On ne peut pas deviner la préposition.',
      explanationMd: 'Many verbs come with a **fixed preposition** and a **fixed case** — **learn them together**: **warten auf + Akk: Ich warte auf den Bus.** **denken an + Akk: Ich denke an die Prüfung.** **sprechen über + Akk: Wir sprechen über das Wetter.** **sich kümmern um + Akk: Ich kümmere mich um die Kinder.** **abhängen von + Dat: Das hängt vom Wetter ab.** **teilnehmen an + Dat: Ich nehme an dem Kurs teil.** You **cannot guess** the preposition from English or French — **write each verb with its preposition and case in your vocabulary list**.',
      explanationMdFr: 'Beaucoup de verbes ont une **préposition fixe** et un **cas fixe** — **apprends-les ensemble** : **warten auf + Akk : Ich warte auf den Bus.** **denken an + Akk : Ich denke an die Prüfung.** **sprechen über + Akk : Wir sprechen über das Wetter.** **sich kümmern um + Akk : Ich kümmere mich um die Kinder.** **abhängen von + Dat : Das hängt vom Wetter ab.** **teilnehmen an + Dat : Ich nehme an dem Kurs teil.** Tu **ne peux pas deviner** la préposition à partir de l’anglais ou du français — **note chaque verbe avec sa préposition et son cas dans ta liste de vocabulaire**.',
      tables: [{ title: 'Verbs and prepositions', titleFr: 'Verbes et prépositions', headers: ['Verb', 'Preposition + case', 'Example'], headersFr: ['Verbe', 'Préposition + cas', 'Exemple'],
        rows: [['warten', 'auf + Akk', 'Ich warte auf den Bus.'], ['denken', 'an + Akk', 'Ich denke an die Prüfung.'], ['sprechen', 'über + Akk', 'Wir sprechen über das Wetter.'], ['sich kümmern', 'um + Akk', 'Ich kümmere mich um die Kinder.'], ['abhängen', 'von + Dat', 'Das hängt vom Wetter ab.'], ['teilnehmen', 'an + Dat', 'Ich nehme an dem Kurs teil.']],
        rowsFr: [['warten', 'auf + Akk', 'Ich warte auf den Bus.'], ['denken', 'an + Akk', 'Ich denke an die Prüfung.'], ['sprechen', 'über + Akk', 'Wir sprechen über das Wetter.'], ['sich kümmern', 'um + Akk', 'Ich kümmere mich um die Kinder.'], ['abhängen', 'von + Dat', 'Das hängt vom Wetter ab.'], ['teilnehmen', 'an + Dat', 'Ich nehme an dem Kurs teil.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'warte', role: 'verb' }, { text: 'auf den Bus.', role: 'accusative' }], en: 'I am waiting for the bus.', fr: 'J’attends le bus.' },
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'hängt', role: 'verb' }, { text: 'vom Wetter', role: 'dative' }, { text: 'ab.', role: 'verb' }], en: 'That depends on the weather.', fr: 'Cela dépend du temps.' },
      ],
      contrast: {
        a: { label: 'Accusative verbs', labelFr: 'Verbes + accusatif', note: 'warten auf, denken an', noteFr: 'warten auf, denken an', examples: [g('Ich warte auf den Bus.', 'I am waiting for the bus.', 'J’attends le bus.'), g('Ich denke an die Prüfung.', 'I am thinking of the exam.', 'Je pense à l’examen.')] },
        b: { label: 'Dative verbs', labelFr: 'Verbes + datif', note: 'abhängen von, teilnehmen an', noteFr: 'abhängen von, teilnehmen an', examples: [g('Das hängt vom Wetter ab.', 'That depends on the weather.', 'Cela dépend du temps.'), g('Ich nehme an dem Kurs teil.', 'I take part in the course.', 'Je participe au cours.')] },
      },
      examples: [
        g('Ich warte auf den Bus.', 'I am waiting for the bus.', 'J’attends le bus.'),
        g('Ich denke an die Prüfung.', 'I am thinking of the exam.', 'Je pense à l’examen.'),
        g('Wir sprechen über das Projekt.', 'We talk about the project.', 'Nous parlons du projet.'),
        g('Sie kümmert sich um ihre Eltern.', 'She takes care of her parents.', 'Elle s’occupe de ses parents.'),
        g('Das hängt vom Wetter ab.', 'That depends on the weather.', 'Cela dépend du temps.'),
        g('Ich nehme an dem Kurs teil.', 'I take part in the course.', 'Je participe au cours.'),
      ],
      mistakes: [
        { wrong: 'Ich warte für den Bus.', right: 'Ich warte auf den Bus.', why: 'warten goes with auf.', whyFr: 'warten va avec auf.' },
        { wrong: 'Das hängt von das Wetter ab.', right: 'Das hängt vom Wetter ab.', why: 'abhängen von + dative: vom.', whyFr: 'abhängen von + datif : vom.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l10-e1', prompt: 'Ich warte ___ den Bus. (fixed preposition)', answer: 'auf', hint: 'warten + auf', hintFr: 'warten + auf' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l10-e2', prompt: 'Ich denke ___ die Prüfung. (fixed preposition)', answer: 'an', hint: 'denken + an', hintFr: 'denken + an' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l10-e8', prompt: 'Das hängt ___ Wetter ab. (abhängen von → vom)', answer: 'vom', hint: 'abhängen von + dem = vom', hintFr: 'abhängen von + dem = vom' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l10-e5', pairs: [{ de: 'warten auf', en: 'wait for', fr: 'attendre' }, { de: 'denken an', en: 'think of', fr: 'penser à' }, { de: 'sprechen über', en: 'talk about', fr: 'parler de' }], hint: 'Match each verb+preposition to its meaning.', hintFr: 'Associe chaque verbe+préposition à sa signification.' } },

    // ───────────── 2 · da-compounds ─────────────
    { kind: 'chapter', title: 'da-Komposita: darauf, daran, darüber', titleFr: 'Composés en da- : darauf, daran, darüber', blurb: 'Replacing a thing.', blurbFr: 'Remplacer une chose.' },

    { kind: 'situation', title: 'Ja, ich freue mich darauf', titleFr: 'Oui, je m’en réjouis',
      setting: 'Ben and a friend talk about the holiday.', settingFr: 'Ben et un ami parlent des vacances.',
      lines: [
        line('Freund', 'Freust du dich auf den Urlaub? — Ja, ich freue mich darauf. Denkst du an die Arbeit? — Ich denke oft daran.', 'Are you looking forward to the holiday? — Yes, I’m looking forward to it. Do you think of work? — I often think about it.', 'Te réjouis-tu des vacances ? — Oui, je m’en réjouis. Penses-tu au travail ? — J’y pense souvent.'),
        line('Ben', 'Wir sprechen über den Film. Wir sprechen darüber. Das Wetter? Es hängt davon ab.', 'We talk about the film. We talk about it. The weather? It depends on it.', 'Nous parlons du film. Nous en parlons. Le temps ? Cela en dépend.'),
        line('Freund', 'Ich warte auf den Bus. Ich warte darauf. Ich freue mich darauf.', 'I am waiting for the bus. I am waiting for it. I am looking forward to it.', 'J’attends le bus. Je l’attends. Je m’en réjouis.'),
      ],
      words: [{ id: 'b1l10-darauf', german: 'darauf', english: 'for/on it', french: 'dessus / cela', gender: null, syllables: ['da', 'RAUF'], pronunciation: 'dah-ROWF', example: { de: 'Ich warte darauf.', en: 'I’m waiting for it.', fr: 'Je l’attends.' } }, { id: 'b1l10-daran', german: 'daran', english: 'of/about it', french: 'à cela / y', gender: null, syllables: ['da', 'RAN'], pronunciation: 'dah-RAHN', example: { de: 'Ich denke oft daran.', en: 'I often think about it.', fr: 'J’y pense souvent.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l10-da-komposita', title: 'da-compounds for things', titleFr: 'Composés en da- pour les choses',
      lead: 'For a thing: da(r)- + preposition. Add -r- before a vowel (darauf, daran, darüber).',
      leadFr: 'Pour une chose : da(r)- + préposition. Ajoute -r- devant une voyelle (darauf, daran, darüber).',
      explanationMd: 'To refer to a **thing** (not a person), don’t use “preposition + it”. Use **da(r)- + preposition**: **Ich warte auf den Bus → Ich warte darauf.** **Ich denke an die Arbeit → Ich denke daran.** **Wir sprechen über den Film → Wir sprechen darüber.** **Das hängt vom Wetter ab → Es hängt davon ab.** Add **-r-** when the preposition **starts with a vowel**: **dar-auf, dar-an, dar-über, dar-um**. The **da-compound** stands **in the middle field** or at the start (**Darauf freue ich mich.**). With **dass / zu-infinitive** it points forward: **Ich freue mich darauf, dass du kommst.**',
      explanationMdFr: 'Pour désigner une **chose** (pas une personne), n’utilise pas « préposition + it ». Utilise **da(r)- + préposition** : **Ich warte auf den Bus → Ich warte darauf.** **Ich denke an die Arbeit → Ich denke daran.** **Wir sprechen über den Film → Wir sprechen darüber.** **Das hängt vom Wetter ab → Es hängt davon ab.** Ajoute **-r-** quand la préposition **commence par une voyelle** : **dar-auf, dar-an, dar-über, dar-um**. Le **composé en da-** se place **dans le champ du milieu** ou en tête (**Darauf freue ich mich.**). Avec **dass / zu + infinitif**, il annonce ce qui suit : **Ich freue mich darauf, dass du kommst.**',
      tables: [{ title: 'da-compounds', titleFr: 'Composés en da-', headers: ['Preposition', 'da-compound', 'Example'], headersFr: ['Préposition', 'Composé en da-', 'Exemple'],
        rows: [['auf', 'darauf', 'Ich warte darauf.'], ['an', 'daran', 'Ich denke oft daran.'], ['über', 'darüber', 'Wir sprechen darüber.'], ['von', 'davon', 'Es hängt davon ab.'], ['um', 'darum', 'Ich kümmere mich darum.'], ['für', 'dafür', 'Ich interessiere mich dafür.']],
        rowsFr: [['auf', 'darauf', 'Ich warte darauf.'], ['an', 'daran', 'Ich denke oft daran.'], ['über', 'darüber', 'Wir sprechen darüber.'], ['von', 'davon', 'Es hängt davon ab.'], ['um', 'darum', 'Ich kümmere mich darum.'], ['für', 'dafür', 'Ich interessiere mich dafür.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'freue', role: 'verb' }, { text: 'mich', role: 'accusative' }, { text: 'darauf.', role: 'other' }], en: 'I am looking forward to it.', fr: 'Je m’en réjouis.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'freue', role: 'verb' }, { text: 'mich', role: 'accusative' }, { text: 'darauf,', role: 'other' }, { text: 'dass', role: 'connector' }, { text: 'du', role: 'subject' }, { text: 'kommst.', role: 'verb' }], en: 'I am looking forward to you coming.', fr: 'Je me réjouis que tu viennes.' },
      ],
      contrast: {
        a: { label: 'With the noun', labelFr: 'Avec le nom', note: 'preposition + noun', noteFr: 'préposition + nom', examples: [g('Ich warte auf den Bus.', 'I am waiting for the bus.', 'J’attends le bus.'), g('Wir sprechen über den Film.', 'We talk about the film.', 'Nous parlons du film.')] },
        b: { label: 'With da-', labelFr: 'Avec da-', note: 'replaces the noun', noteFr: 'remplace le nom', examples: [g('Ich warte darauf.', 'I am waiting for it.', 'Je l’attends.'), g('Wir sprechen darüber.', 'We talk about it.', 'Nous en parlons.')] },
      },
      examples: [
        g('Freust du dich auf den Urlaub? — Ja, ich freue mich darauf.', 'Are you looking forward to the holiday? — Yes, I’m looking forward to it.', 'Te réjouis-tu des vacances ? — Oui, je m’en réjouis.'),
        g('Das Wetter? Es hängt davon ab.', 'The weather? It depends on it.', 'Le temps ? Cela en dépend.'),
        g('Denkst du an die Arbeit? — Ich denke oft daran.', 'Do you think of work? — I often think about it.', 'Penses-tu au travail ? — J’y pense souvent.'),
        g('Wir sprechen über den Film. — Wir sprechen darüber.', 'We talk about the film. — We talk about it.', 'Nous parlons du film. — Nous en parlons.'),
        g('Ich freue mich darauf, dass du kommst.', 'I am looking forward to you coming.', 'Je me réjouis que tu viennes.'),
        g('Ich kümmere mich darum.', 'I’ll take care of it.', 'Je m’en occupe.'),
      ],
      mistakes: [
        { wrong: 'Ich warte auf es.', right: 'Ich warte darauf.', why: 'For things use da(r)- + preposition.', whyFr: 'Pour les choses, utilise da(r)- + préposition.' },
        { wrong: 'Ich denke dadurch.', right: 'Ich denke daran.', why: 'denken goes with an: daran.', whyFr: 'denken va avec an : daran.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l10-e3', prompt: 'Replace "auf den Bus": "Ich warte ___."', promptFr: 'Remplace « auf den Bus » : « Ich warte ___. »', options: ['auf ihn', 'darauf', 'worauf'], answer: 1, explain: 'A thing → da-compound: darauf.', explainFr: 'Une chose → composé da- : darauf.', hint: 'Bus is a thing → da-compound.', hintFr: 'Le bus est une chose → composé da-.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l10-e9', tokens: ['darauf', 'mich', 'Ich', 'freue'], answer: ['Ich', 'freue', 'mich', 'darauf'], hint: 'Reflexive + da-compound at the end.', hintFr: 'Réfléchi + composé da- à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l10-e6', prompt: 'Listen. What is Ben waiting for?', promptFr: 'Écoute. Qu’attend Ben ?', audio: { ttsText: 'Ich warte auf eine wichtige E-Mail.' }, options: ['An important email', 'The bus', 'A friend'], optionsFr: ['Un e-mail important', 'Le bus', 'Un ami'], answer: 0, hint: 'Listen after "auf".', hintFr: 'Écoute après « auf ».' } },

    // ───────────── 3 · wo-compounds and people ─────────────
    { kind: 'chapter', title: 'wo-Komposita und Personen', titleFr: 'Composés en wo- et personnes', blurb: 'Worauf? — Auf wen?', blurbFr: 'Worauf ? — Auf wen ?' },

    { kind: 'situation', title: 'Woran denkst du? — An wen?', titleFr: 'À quoi penses-tu ? — À qui ?',
      setting: 'Questions about things and about people.', settingFr: 'Questions sur des choses et sur des personnes.',
      lines: [
        line('Freundin', 'Woran denkst du? — An wen denkst du? — An meine Familie. Ich denke an dich.', 'What are you thinking about? — Who are you thinking of? — Of my family. I am thinking of you.', 'À quoi penses-tu ? — À qui penses-tu ? — À ma famille. Je pense à toi.'),
        line('Ben', 'Worüber lacht ihr? Worüber sprecht ihr? Auf wen wartest du?', 'What are you laughing about? What are you talking about? Who are you waiting for?', 'De quoi riez-vous ? De quoi parlez-vous ? Qui attends-tu ?'),
        line('Freundin', 'Worauf wartest du? Worauf freust du dich? — Auf den Urlaub. — Und auf wen? — Auf meine Schwester.', 'What are you waiting for? What are you looking forward to? — The holiday. — And who? — My sister.', 'Qu’attends-tu ? De quoi te réjouis-tu ? — Des vacances. — Et de qui ? — De ma sœur.'),
      ],
      words: [{ id: 'b1l10-worauf', german: 'worauf', english: 'for/on what', french: 'sur/après quoi', gender: null, syllables: ['wo', 'RAUF'], pronunciation: 'vo-ROWF', example: { de: 'Worauf wartest du?', en: 'What are you waiting for?', fr: 'Qu’attends-tu ?' } }, { id: 'b1l10-woran', german: 'woran', english: 'of/about what', french: 'à quoi', gender: null, syllables: ['wo', 'RAN'], pronunciation: 'vo-RAHN', example: { de: 'Woran denkst du?', en: 'What are you thinking about?', fr: 'À quoi penses-tu ?' } }] },

    { kind: 'grammar', note: {
      id: 'b1l10-wo-komposita', title: 'wo-compounds and people', titleFr: 'Composés en wo- et personnes',
      lead: 'Thing: wo(r)- + preposition (Worauf?). Person: preposition + question word (Auf wen?).',
      leadFr: 'Chose : wo(r)- + préposition (Worauf ?). Personne : préposition + mot interrogatif (Auf wen ?).',
      explanationMd: 'Ask about a **thing** with **wo(r)- + preposition**: **Worauf wartest du? Woran denkst du? Worüber sprecht ihr? Wofür interessierst du dich?** For a **person**, keep the **preposition + a question word or pronoun**: **Auf wen wartest du? An wen denkst du? Ich denke an dich.** The **answer** mirrors the question: **thing → da(r)-**, **person → preposition + pronoun**: **Worauf wartest du? — Darauf. / Auf wen wartest du? — Auf ihn.** Choose by asking: **is it a person or a thing?**',
      explanationMdFr: 'Pose une question sur une **chose** avec **wo(r)- + préposition** : **Worauf wartest du? Woran denkst du? Worüber sprecht ihr? Wofür interessierst du dich ?** Pour une **personne**, garde la **préposition + un mot interrogatif ou un pronom** : **Auf wen wartest du? An wen denkst du? Ich denke an dich.** La **réponse** reflète la question : **chose → da(r)-**, **personne → préposition + pronom** : **Worauf wartest du ? — Darauf. / Auf wen wartest du ? — Auf ihn.** Choisis en te demandant : **est-ce une personne ou une chose ?**',
      tables: [{ title: 'Things and people', titleFr: 'Choses et personnes', headers: ['', 'Thing', 'Person'], headersFr: ['', 'Chose', 'Personne'],
        rows: [['Question', 'Worauf wartest du?', 'Auf wen wartest du?'], ['Answer', 'Ich warte darauf.', 'Ich warte auf ihn.'], ['Question', 'Woran denkst du?', 'An wen denkst du?'], ['Answer', 'Ich denke daran.', 'Ich denke an dich.']],
        rowsFr: [['Question', 'Worauf wartest du ?', 'Auf wen wartest du ?'], ['Réponse', 'Ich warte darauf.', 'Ich warte auf ihn.'], ['Question', 'Woran denkst du ?', 'An wen denkst du ?'], ['Réponse', 'Ich denke daran.', 'Ich denke an dich.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Worauf', role: 'connector' }, { text: 'wartest', role: 'verb' }, { text: 'du?', role: 'subject' }], en: 'What are you waiting for?', fr: 'Qu’attends-tu ?' },
        { parts: [{ text: 'Auf wen', role: 'connector' }, { text: 'wartest', role: 'verb' }, { text: 'du?', role: 'subject' }], en: 'Who are you waiting for?', fr: 'Qui attends-tu ?' },
      ],
      contrast: {
        a: { label: 'Thing: wo(r)-', labelFr: 'Chose : wo(r)-', note: 'Worauf? Woran?', noteFr: 'Worauf ? Woran ?', examples: [g('Woran denkst du?', 'What are you thinking about?', 'À quoi penses-tu ?'), g('Worüber lacht ihr?', 'What are you laughing about?', 'De quoi riez-vous ?')] },
        b: { label: 'Person: preposition + wen', labelFr: 'Personne : préposition + wen', note: 'Auf wen? An wen?', noteFr: 'Auf wen ? An wen ?', examples: [g('An wen denkst du? — An meine Familie.', 'Who are you thinking of? — Of my family.', 'À qui penses-tu ? — À ma famille.'), g('Auf wen wartest du?', 'Who are you waiting for?', 'Qui attends-tu ?')] },
      },
      examples: [
        g('Worauf wartest du?', 'What are you waiting for?', 'Qu’attends-tu ?'),
        g('Woran denkst du?', 'What are you thinking about?', 'À quoi penses-tu ?'),
        g('Worüber sprecht ihr?', 'What are you talking about?', 'De quoi parlez-vous ?'),
        g('Worüber lacht ihr?', 'What are you laughing about?', 'De quoi riez-vous ?'),
        g('An wen denkst du? — An meine Familie.', 'Who are you thinking of? — Of my family.', 'À qui penses-tu ? — À ma famille.'),
        g('Auf wen wartest du?', 'Who are you waiting for?', 'Qui attends-tu ?'),
      ],
      mistakes: [
        { wrong: 'Auf was wartest du?', right: 'Worauf wartest du?', why: 'For things use wo(r)- + preposition.', whyFr: 'Pour les choses, utilise wo(r)- + préposition.' },
        { wrong: 'Woran denkst du? — Ich denke daran dich.', right: 'Woran denkst du? — Ich denke daran. / An wen denkst du? — Ich denke an dich.', why: 'Person: preposition + pronoun, not da-.', whyFr: 'Personne : préposition + pronom, pas da-.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l10-e4', prompt: '___ denkst du? (question about a thing: an → ?)', answer: 'Woran', hint: 'wo + r + an → woran', hintFr: 'wo + r + an → woran' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l10-e7', prompt: 'For a PERSON, how do you ask "who are you waiting for"?', promptFr: 'Pour une PERSONNE, comment demander « qui attends-tu » ?', options: ['Worauf wartest du?', 'Auf wen wartest du?', 'Darauf wartest du?'], answer: 1, explain: 'People → preposition + wen: Auf wen …?', explainFr: 'Personnes → préposition + wen : Auf wen …?', hint: 'Not a wo-compound for people.', hintFr: 'Pas de composé wo- pour les personnes.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l10-e10', prompt: 'Listen. What are they talking about?', promptFr: 'Écoute. De quoi parlent-ils ?', audio: { ttsText: 'Wir sprechen über die Reise nach Italien.' }, options: ['The trip to Italy', 'The weather', 'A film'], optionsFr: ['Le voyage en Italie', 'Le temps', 'Un film'], answer: 0, hint: 'Listen after "über".', hintFr: 'Écoute après « über ».' } },

    { kind: 'pronunciation', focus: 'da-/wo-compounds stress the preposition: daRAUF, woRAN, daRÜBER', focusFr: 'Les composés da-/wo- accentuent la préposition : daRAUF, woRAN, daRÜBER', items: [{ id: 'b1l10-darauf-pron', german: 'darauf', english: 'for it', french: 'dessus', gender: null, syllables: ['da', 'RAUF'], pronunciation: 'dah-ROWF', example: { de: 'Ich freue mich darauf.', en: 'I look forward to it.', fr: 'Je l’attends avec impatience.' } }, { id: 'b1l10-woran-pron', german: 'woran', english: 'of what', french: 'à quoi', gender: null, syllables: ['wo', 'RAN'], pronunciation: 'vo-RAHN', example: { de: 'Woran denkst du?', en: 'What are you thinking of?', fr: 'À quoi penses-tu ?' } }] },

    { kind: 'wrapup',
      summary: 'You can now use **verbs with fixed prepositions** (**warten auf, denken an, abhängen von**), replace things with **darauf / daran** and ask with **worauf / woran** — and **auf wen** for people. 🎉',
      summaryFr: 'Tu sais maintenant utiliser des **verbes à préposition fixe** (**warten auf, denken an, abhängen von**), remplacer des choses par **darauf / daran** et poser avec **worauf / woran** — et **auf wen** pour les personnes. 🎉',
      card: { title: 'Verbs with prepositions on one page', titleFr: 'Les verbes à préposition en une page', sections: [
        { heading: 'Pairs', headingFr: 'Paires', rows: [g('warten auf · denken an · sprechen über · sich kümmern um', '+ Akk', '+ Akk'), g('abhängen von · teilnehmen an', '+ Dat', '+ Dat')] },
        { heading: 'Things', headingFr: 'Choses', rows: [g('Worauf? — Darauf.', 'wo(r)- / da(r)-', 'wo(r)- / da(r)-')] },
        { heading: 'People', headingFr: 'Personnes', rows: [g('Auf wen? — Auf ihn.', 'preposition + pronoun', 'préposition + pronom')] },
      ] } },
  ],
};

import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion9: Lesson = {
  id: 'b1-l9', level: 'B1', module: 6, number: 21,
  title: { de: 'Indirekte Fragen', en: 'Indirect questions', fr: 'Les questions indirectes' },
  theme: 'Embedding questions politely with "ob" and question words', themeFr: 'Intégrer des questions poliment avec « ob » et les mots interrogatifs',
  goals: ['Form indirect yes/no questions with "ob"', 'Form indirect W-questions', 'Send the verb to the end', 'Ask more politely'], goalsFr: ['Former des questions indirectes fermées avec « ob »', 'Former des questions indirectes en W', 'Envoyer le verbe à la fin', 'Demander plus poliment'],
  canDo: g('Ich kann indirekte Fragen mit „ob“ und Fragewörtern bilden — auch im Perfekt und mit Modalverben — und damit höflich nachfragen.', 'I can build indirect questions with “ob” and question words — also in the Perfekt and with modals — and ask politely.', 'Je sais construire des questions indirectes avec « ob » et des mots interrogatifs — aussi au Perfekt et avec des modaux — et demander poliment.'),
  steps: [
    { kind: 'intro', title: 'Höflich nachfragen 🙋', titleFr: 'Demander poliment 🙋',
      scene: 'Lena asks questions at the station, at the office and on the phone — and makes each one sound more polite.', sceneFr: 'Lena pose des questions à la gare, au bureau et au téléphone — et rend chacune plus polie.',
      goals: ['Form indirect yes/no questions with ob', 'Form indirect W-questions and send the verb to the end', 'Ask more politely, also in the Perfekt and with modals'],
      goalsFr: ['Former des questions indirectes oui/non avec ob', 'Former des questions indirectes en W et envoyer le verbe à la fin', 'Demander plus poliment, aussi au Perfekt et avec des modaux'] },

    // ───────────── 1 · ob ─────────────
    { kind: 'chapter', title: 'Indirekte Ja/Nein-Fragen mit „ob“', titleFr: 'Questions indirectes oui/non avec « ob »', blurb: 'Weißt du, ob …?', blurbFr: 'Sais-tu si … ?' },

    { kind: 'situation', title: 'Am Bahnhof', titleFr: 'À la gare',
      setting: 'Lena asks a station employee.', settingFr: 'Lena interroge un employé de la gare.',
      lines: [
        line('Lena', 'Entschuldigung, können Sie mir sagen, ob der Zug pünktlich ist? Ich weiß nicht, ob es stimmt.', 'Excuse me, can you tell me whether the train is on time? I don’t know whether it’s true.', 'Excusez-moi, pouvez-vous me dire si le train est à l’heure ? Je ne sais pas si c’est vrai.'),
        line('Mitarbeiter', 'Ich frage kurz nach. Wissen Sie, ob Sie umsteigen müssen?', 'I’ll just check. Do you know whether you have to change?', 'Je vérifie rapidement. Savez-vous si vous devez changer ?'),
        line('Lena', 'Ich frage mich, ob das richtig ist. Ich bin unsicher. Ich möchte wissen, ob noch Plätze frei sind.', 'I wonder whether that is correct. I’m unsure. I would like to know whether there are still free seats.', 'Je me demande si c’est correct. Je suis incertaine. J’aimerais savoir s’il reste des places libres.'),
        line('Mitarbeiter', 'Ich habe keine Antwort. Ich brauche eine Information vom Büro.', 'I have no answer. I need information from the office.', 'Je n’ai pas de réponse. J’ai besoin d’une information du bureau.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l9-e11', prompt: 'What does Lena want to know first?', promptFr: 'Que veut savoir Lena d’abord ?', options: ['Whether the train is on time', 'Where the exit is', 'How much the ticket costs'], optionsFr: ['Si le train est à l’heure', 'Où est la sortie', 'Combien coûte le billet'], answer: 0, explain: 'She asks: “…ob der Zug pünktlich ist?”', explainFr: 'Elle demande : « …ob der Zug pünktlich ist ? »', hint: 'Look for “ob”.', hintFr: 'Cherche « ob ».' } },

    { kind: 'wordgroup', title: 'Fragen und Antworten', titleFr: 'Questions et réponses',
      items: [{ id: 'b1l9-fragen', german: 'fragen', english: 'to ask', french: 'demander', gender: null, syllables: ['FRA', 'gen'], pronunciation: 'FRAH-gen', example: { de: 'Ich frage, ob er Zeit hat.', en: 'I ask whether he has time.', fr: 'Je demande s’il a le temps.' } }, { id: 'b1l9-ob', german: 'ob', english: 'whether / if', french: 'si (question)', gender: null, syllables: ['OB'], pronunciation: 'op', example: { de: 'Ich weiß nicht, ob es stimmt.', en: 'I don’t know whether it’s true.', fr: 'Je ne sais pas si c’est vrai.' } }, { id: 'b1l9-antwort', german: 'die Antwort', english: 'the answer', french: 'la réponse', gender: 'die', syllables: ['ANT', 'wort'], pronunciation: 'dee AHNT-vort', example: { de: 'Ich habe keine Antwort.', en: 'I have no answer.', fr: 'Je n’ai pas de réponse.' } }, { id: 'b1l9-antworten', german: 'antworten', english: 'to answer', french: 'répondre', gender: null, syllables: ['ANT', 'wor', 'ten'], pronunciation: 'AHNT-vor-ten', example: { de: 'Kannst du mir antworten?', en: 'Can you answer me?', fr: 'Peux-tu me répondre ?' } }, { id: 'b1l9-sich-fragen', german: 'sich fragen', english: 'to wonder', french: 'se demander', gender: null, syllables: ['sich', 'FRA', 'gen'], pronunciation: 'zikh FRAH-gen', example: { de: 'Ich frage mich, ob das gut ist.', en: 'I wonder whether that is good.', fr: 'Je me demande si c’est bien.' } }, { id: 'b1l9-unsicher', german: 'unsicher', english: 'unsure', french: 'incertain', gender: null, syllables: ['UN', 'si', 'cher'], pronunciation: 'OON-zi-kher', example: { de: 'Ich bin unsicher, wann er kommt.', en: 'I’m unsure when he’s coming.', fr: 'Je ne suis pas sûr de quand il vient.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l9-ob', title: 'Indirect yes/no questions with ob', titleFr: 'Questions indirectes oui/non avec ob',
      lead: 'A yes/no question becomes ob + the verb at the end.',
      leadFr: 'Une question oui/non devient ob + le verbe à la fin.',
      explanationMd: 'A **yes/no question** becomes **indirect** with **ob** (whether), and the **verb goes to the end**: **Direct: Kommt er? → Indirect: Ich weiß nicht, ob er kommt.** **Direct: Hat sie Zeit? → Weißt du, ob sie Zeit hat?** The **opener** is a verb of **asking, knowing or wondering**: **fragen, wissen, sich fragen, nachfragen, nicht wissen**: **Ich frage mich, ob das richtig ist.** The **comma** separates the two clauses. If the **whole sentence** is a question the **question mark** stays at the end.',
      explanationMdFr: 'Une **question oui/non** devient **indirecte** avec **ob** (si), et le **verbe va à la fin** : **Direct : Kommt er ? → Indirect : Ich weiß nicht, ob er kommt.** **Direct : Hat sie Zeit ? → Weißt du, ob sie Zeit hat ?** L’**amorce** est un verbe de **demande, de savoir ou de doute** : **fragen, wissen, sich fragen, nachfragen, nicht wissen** : **Ich frage mich, ob das richtig ist.** La **virgule** sépare les deux propositions. Si **toute la phrase** est une question, le **point d’interrogation** reste à la fin.',
      tables: [{ title: 'Direct → indirect (ob)', titleFr: 'Direct → indirect (ob)', headers: ['Direct', 'Indirect'], headersFr: ['Direct', 'Indirect'],
        rows: [['Kommt er?', 'Ich weiß nicht, ob er kommt.'], ['Hat sie Zeit?', 'Weißt du, ob sie Zeit hat?'], ['Ist das richtig?', 'Ich frage mich, ob das richtig ist.'], ['Ist der Zug pünktlich?', 'Können Sie mir sagen, ob der Zug pünktlich ist?']],
        rowsFr: [['Kommt er ?', 'Ich weiß nicht, ob er kommt.'], ['Hat sie Zeit ?', 'Weißt du, ob sie Zeit hat ?'], ['Ist das richtig ?', 'Ich frage mich, ob das richtig ist.'], ['Ist der Zug pünktlich ?', 'Können Sie mir sagen, ob der Zug pünktlich ist ?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'weiß', role: 'verb' }, { text: 'nicht,', role: 'other' }, { text: 'ob', role: 'connector' }, { text: 'er', role: 'subject' }, { text: 'kommt.', role: 'verb' }], en: 'I don’t know whether he is coming.', fr: 'Je ne sais pas s’il vient.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'frage', role: 'verb' }, { text: 'mich,', role: 'accusative' }, { text: 'ob', role: 'connector' }, { text: 'das', role: 'subject' }, { text: 'richtig', role: 'other' }, { text: 'ist.', role: 'verb' }], en: 'I wonder whether that is correct.', fr: 'Je me demande si c’est correct.' },
      ],
      contrast: {
        a: { label: 'Direct', labelFr: 'Direct', note: 'verb first', noteFr: 'verbe en premier', examples: [g('Kommt er?', 'Is he coming?', 'Vient-il ?'), g('Ist der Zug pünktlich?', 'Is the train on time?', 'Le train est-il à l’heure ?')] },
        b: { label: 'Indirect with ob', labelFr: 'Indirect avec ob', note: 'verb last', noteFr: 'verbe à la fin', examples: [g('Ich weiß nicht, ob er kommt.', 'I don’t know whether he is coming.', 'Je ne sais pas s’il vient.'), g('Können Sie mir sagen, ob der Zug pünktlich ist?', 'Can you tell me whether the train is on time?', 'Pouvez-vous me dire si le train est à l’heure ?')] },
      },
      examples: [
        g('Ich weiß nicht, ob es stimmt.', 'I don’t know whether it is true.', 'Je ne sais pas si c’est vrai.'),
        g('Ich frage mich, ob das richtig ist.', 'I wonder whether that is correct.', 'Je me demande si c’est correct.'),
        g('Können Sie mir sagen, ob der Zug pünktlich ist?', 'Can you tell me whether the train is on time?', 'Pouvez-vous me dire si le train est à l’heure ?'),
        g('Weißt du, ob sie Zeit hat?', 'Do you know whether she has time?', 'Sais-tu si elle a du temps ?'),
        g('Ich möchte wissen, ob noch Plätze frei sind.', 'I would like to know whether there are still free seats.', 'J’aimerais savoir s’il reste des places libres.'),
        g('Ich frage, ob er Zeit hat.', 'I ask whether he has time.', 'Je demande s’il a du temps.'),
      ],
      mistakes: [
        { wrong: 'Ich weiß nicht, ob kommt er.', right: 'Ich weiß nicht, ob er kommt.', why: 'After ob the verb goes last.', whyFr: 'Après ob, le verbe va en dernier.' },
        { wrong: 'Ich weiß nicht, dass er kommt. (question)', right: 'Ich weiß nicht, ob er kommt.', why: 'A question needs ob, not dass.', whyFr: 'Une question demande ob, pas dass.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l9-e1', prompt: 'Ich weiß nicht, ___ er kommt. (whether)', answer: 'ob', hint: 'indirect yes/no → ob', hintFr: 'question fermée indirecte → ob' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l9-e2', tokens: ['er', 'ob', 'kommt', 'Ich weiß nicht'], answer: ['Ich weiß nicht', 'ob', 'er', 'kommt'], hint: 'ob-clause: verb at the end.', hintFr: 'subordonnée ob : verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l9-e9', prompt: 'Ich frage mich, ___ das eine gute Idee ist. (whether)', answer: 'ob', hint: 'yes/no → ob', hintFr: 'fermée → ob' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l9-e5', pairs: [{ de: 'ob', en: 'whether', fr: 'si' }, { de: 'die Antwort', en: 'answer', fr: 'réponse' }, { de: 'sich fragen', en: 'to wonder', fr: 'se demander' }], hint: 'Match each item to its meaning.', hintFr: 'Associe chaque élément à sa signification.' } },

    // ───────────── 2 · W-questions ─────────────
    { kind: 'chapter', title: 'Indirekte W-Fragen', titleFr: 'Questions indirectes en W', blurb: 'wann, wo, wie viel.', blurbFr: 'wann, wo, wie viel.' },

    { kind: 'situation', title: 'Keine Ahnung, wo er ist', titleFr: 'Aucune idée de où il est',
      setting: 'Lena asks for directions and prices.', settingFr: 'Lena demande son chemin et des prix.',
      lines: [
        line('Lena', 'Ich weiß nicht, wann er kommt. Ich habe keine Ahnung, wo er ist. Ich weiß nicht, wo mein Handy ist.', 'I don’t know when he is coming. I have no idea where he is. I don’t know where my phone is.', 'Je ne sais pas quand il vient. Je n’ai aucune idée de où il est. Je ne sais pas où est mon téléphone.'),
        line('Mitarbeiter', 'Weißt du, wo sie wohnt? Können Sie mir sagen, wie viel das kostet?', 'Do you know where she lives? Can you tell me how much that costs?', 'Sais-tu où elle habite ? Pouvez-vous me dire combien cela coûte ?'),
        line('Lena', 'Können Sie erklären, wie das geht? Wissen Sie, wie viel das kostet?', 'Can you explain how that works? Do you know how much that costs?', 'Pouvez-vous expliquer comment cela fonctionne ? Savez-vous combien cela coûte ?'),
      ],
      words: [{ id: 'b1l9-ahnung', german: 'die Ahnung', english: 'the idea / clue', french: 'l’idée', gender: 'die', syllables: ['AH', 'nung'], pronunciation: 'dee AH-noong', example: { de: 'Ich habe keine Ahnung, wo er ist.', en: 'I have no idea where he is.', fr: 'Je n’ai aucune idée d’où il est.' } }, { id: 'b1l9-erklaeren2', german: 'erklären', english: 'to explain', french: 'expliquer', gender: null, syllables: ['er', 'KLÄ', 'ren'], pronunciation: 'air-KLAY-ren', example: { de: 'Können Sie erklären, wie das geht?', en: 'Can you explain how that works?', fr: 'Pouvez-vous expliquer comment ça marche ?' } }] },

    { kind: 'grammar', note: {
      id: 'b1l9-w-fragen', title: 'Indirect W-questions', titleFr: 'Questions indirectes en W',
      lead: 'The question word stays (wann, wo, wie viel, warum …), the verb goes to the end.',
      leadFr: 'Le mot interrogatif reste (wann, wo, wie viel, warum …), le verbe va à la fin.',
      explanationMd: 'For **W-questions** keep the **question word** and send the **verb to the end**: **Direct: Wann kommt er? → Indirect: Ich weiß nicht, wann er kommt.** **Wo wohnt sie? → Weißt du, wo sie wohnt?** **Wie viel kostet das? → Können Sie mir sagen, wie viel das kostet?** **Question words**: **wann, wo, wohin, woher, wie, wie viel, warum, was, wer, welcher**. **Never add ob** to a W-question: **Ich weiß nicht, wann er kommt.** (not: *ob wann*). With **was / wer** as **subject**, the word stays in front: **Ich frage mich, wer das war.**',
      explanationMdFr: 'Pour les **questions en W**, garde le **mot interrogatif** et envoie le **verbe à la fin** : **Direct : Wann kommt er ? → Indirect : Ich weiß nicht, wann er kommt.** **Wo wohnt sie ? → Weißt du, wo sie wohnt ?** **Wie viel kostet das ? → Können Sie mir sagen, wie viel das kostet ?** **Mots interrogatifs** : **wann, wo, wohin, woher, wie, wie viel, warum, was, wer, welcher**. **N’ajoute jamais ob** à une question en W : **Ich weiß nicht, wann er kommt.** (pas : *ob wann*). Avec **was / wer** comme **sujet**, le mot reste en tête : **Ich frage mich, wer das war.**',
      tables: [{ title: 'Direct → indirect (W-question)', titleFr: 'Direct → indirect (question en W)', headers: ['Direct', 'Indirect'], headersFr: ['Direct', 'Indirect'],
        rows: [['Wann kommt er?', 'Ich weiß nicht, wann er kommt.'], ['Wo wohnt sie?', 'Weißt du, wo sie wohnt?'], ['Wie viel kostet das?', 'Können Sie mir sagen, wie viel das kostet?'], ['Wie geht das?', 'Können Sie erklären, wie das geht?']],
        rowsFr: [['Wann kommt er ?', 'Ich weiß nicht, wann er kommt.'], ['Wo wohnt sie ?', 'Weißt du, wo sie wohnt ?'], ['Wie viel kostet das ?', 'Können Sie mir sagen, wie viel das kostet ?'], ['Wie geht das ?', 'Können Sie erklären, wie das geht ?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'keine Ahnung,', role: 'accusative' }, { text: 'wo', role: 'connector' }, { text: 'er', role: 'subject' }, { text: 'ist.', role: 'verb' }], en: 'I have no idea where he is.', fr: 'Je n’ai aucune idée de où il est.' },
        { parts: [{ text: 'Können', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'mir', role: 'dative' }, { text: 'sagen,', role: 'verb' }, { text: 'wie viel', role: 'connector' }, { text: 'das', role: 'subject' }, { text: 'kostet?', role: 'verb' }], en: 'Can you tell me how much that costs?', fr: 'Pouvez-vous me dire combien cela coûte ?' },
      ],
      contrast: {
        a: { label: 'Yes/no → ob', labelFr: 'Oui/non → ob', note: 'whether', noteFr: 'si', examples: [g('Ich weiß nicht, ob er kommt.', 'I don’t know whether he is coming.', 'Je ne sais pas s’il vient.'), g('Weißt du, ob sie Zeit hat?', 'Do you know whether she has time?', 'Sais-tu si elle a du temps ?')] },
        b: { label: 'W-question → same word', labelFr: 'Question en W → même mot', note: 'wann, wo, wie viel', noteFr: 'wann, wo, wie viel', examples: [g('Ich weiß nicht, wann er kommt.', 'I don’t know when he is coming.', 'Je ne sais pas quand il vient.'), g('Weißt du, wo sie wohnt?', 'Do you know where she lives?', 'Sais-tu où elle habite ?')] },
      },
      examples: [
        g('Ich weiß nicht, wann er kommt.', 'I don’t know when he is coming.', 'Je ne sais pas quand il vient.'),
        g('Ich habe keine Ahnung, wo er ist.', 'I have no idea where he is.', 'Je n’ai aucune idée de où il est.'),
        g('Weißt du, wo sie wohnt?', 'Do you know where she lives?', 'Sais-tu où elle habite ?'),
        g('Können Sie mir sagen, wie viel das kostet?', 'Can you tell me how much that costs?', 'Pouvez-vous me dire combien cela coûte ?'),
        g('Können Sie erklären, wie das geht?', 'Can you explain how that works?', 'Pouvez-vous expliquer comment cela fonctionne ?'),
        g('Ich weiß nicht, wo mein Handy ist.', 'I don’t know where my phone is.', 'Je ne sais pas où est mon téléphone.'),
      ],
      mistakes: [
        { wrong: 'Ich weiß nicht, wann kommt er.', right: 'Ich weiß nicht, wann er kommt.', why: 'After the question word the verb goes last.', whyFr: 'Après le mot interrogatif, le verbe va en dernier.' },
        { wrong: 'Ich weiß nicht, ob wann er kommt.', right: 'Ich weiß nicht, wann er kommt.', why: 'A W-question does not take ob.', whyFr: 'Une question en W ne prend pas ob.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l9-e3', prompt: 'Make indirect: "Wann kommt der Bus?"', promptFr: 'Rends indirecte : « Wann kommt der Bus? »', options: ['Weißt du, wann kommt der Bus?', 'Weißt du, wann der Bus kommt?', 'Weißt du, ob der Bus wann kommt?'], answer: 1, explain: 'Keep "wann", send the verb "kommt" to the end.', explainFr: 'Garde « wann », envoie le verbe « kommt » à la fin.', hint: 'Verb goes last.', hintFr: 'Le verbe va en dernier.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l9-e4', prompt: 'Ich habe keine Ahnung, ___ er wohnt. (where)', answer: 'wo', hint: 'indirect W-question keeps the W-word', hintFr: 'la question indirecte en W garde le mot en W' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l9-e7', tokens: ['das', 'kostet', 'wie viel', 'Wissen Sie'], answer: ['Wissen Sie', 'wie viel', 'das', 'kostet'], hint: 'Keep "wie viel", verb at the end.', hintFr: 'Garde « wie viel », verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l9-e10', prompt: 'Listen. What does Lena not know?', promptFr: 'Écoute. Que ne sait pas Lena ?', audio: { ttsText: 'Ich weiß nicht, wo mein Handy ist.' }, options: ['Where her phone is', 'When the bus comes', 'Whether it rains'], optionsFr: ['Où est son téléphone', 'Quand vient le bus', 'S’il pleut'], answer: 0, hint: 'Listen after "wo".', hintFr: 'Écoute après « wo ».' } },

    // ───────────── 3 · Polite openers, Perfekt and modals ─────────────
    { kind: 'chapter', title: 'Höflich fragen: Einleitungen, Perfekt, Modalverben', titleFr: 'Demander poliment : amorces, Perfekt, modaux', blurb: 'Können Sie mir sagen, …', blurbFr: 'Pouvez-vous me dire, …' },

    { kind: 'situation', title: 'Am Telefon', titleFr: 'Au téléphone',
      setting: 'Lena phones an office with polite questions.', settingFr: 'Lena téléphone à un bureau avec des questions polies.',
      lines: [
        line('Lena', 'Können Sie mir sagen, wo die Toilette ist? Ich möchte wissen, ob noch Plätze frei sind.', 'Can you tell me where the toilet is? I would like to know whether there are still free seats.', 'Pouvez-vous me dire où sont les toilettes ? J’aimerais savoir s’il reste des places libres.'),
        line('Mitarbeiterin', 'Wissen Sie, ob Sie einen Termin gebucht haben? Ich frage kurz nach, wann Sie angerufen haben.', 'Do you know whether you have booked an appointment? I’ll just check when you called.', 'Savez-vous si vous avez réservé un rendez-vous ? Je vérifie rapidement quand vous avez appelé.'),
        line('Lena', 'Ich weiß nicht, ob ich kommen kann. Können Sie mir sagen, ob ich noch absagen darf?', 'I don’t know whether I can come. Can you tell me whether I may still cancel?', 'Je ne sais pas si je peux venir. Pouvez-vous me dire si j’ai encore le droit d’annuler ?'),
      ],
      words: [{ id: 'b1l9-information', german: 'die Information', english: 'the information', french: 'l’information', gender: 'die', syllables: ['in', 'for', 'ma', 'TION'], pronunciation: 'in-for-mah-TSYOHN', example: { de: 'Ich brauche eine Information.', en: 'I need some information.', fr: 'J’ai besoin d’une information.' } }, { id: 'b1l9-nachfragen', german: 'nachfragen', english: 'to enquire / ask again', french: 'se renseigner', gender: null, syllables: ['NACH', 'fra', 'gen'], pronunciation: 'NAHKH-frah-gen', example: { de: 'Ich frage kurz nach.', en: 'I’ll quickly ask.', fr: 'Je me renseigne vite.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l9-hoeflich', title: 'Polite openers, Perfekt and modals', titleFr: 'Amorces polies, Perfekt et modaux',
      lead: 'Können Sie mir sagen, … / Wissen Sie, … / Ich möchte wissen, …. In the Perfekt and with modals the whole verb group stands at the end.',
      leadFr: 'Können Sie mir sagen, … / Wissen Sie, … / Ich möchte wissen, …. Au Perfekt et avec des modaux, tout le groupe verbal est à la fin.',
      explanationMd: 'Indirect questions sound **softer and more polite**. Common **openers**: **Können Sie mir sagen, …? · Wissen Sie, …? · Ich möchte wissen, … · Ich frage kurz nach, …** In the **Perfekt** the **auxiliary is last**: **Wissen Sie, ob Sie einen Termin gebucht haben?** With a **modal** the **modal is last**: **Ich weiß nicht, ob ich kommen kann.** **Können Sie mir sagen, ob ich noch absagen darf?** The **question mark** stays only when the **whole sentence** is a question: **Können Sie mir sagen, wo … ist?** but **Ich möchte wissen, ob noch Plätze frei sind.** (statement).',
      explanationMdFr: 'Les questions indirectes sonnent **plus douces et plus polies**. **Amorces** courantes : **Können Sie mir sagen, …? · Wissen Sie, …? · Ich möchte wissen, … · Ich frage kurz nach, …** Au **Perfekt**, l’**auxiliaire est en dernier** : **Wissen Sie, ob Sie einen Termin gebucht haben ?** Avec un **modal**, le **modal est en dernier** : **Ich weiß nicht, ob ich kommen kann.** **Können Sie mir sagen, ob ich noch absagen darf ?** Le **point d’interrogation** ne reste que si **toute la phrase** est une question : **Können Sie mir sagen, wo … ist ?** mais **Ich möchte wissen, ob noch Plätze frei sind.** (affirmation).',
      tables: [{ title: 'Openers and verb groups', titleFr: 'Amorces et groupes verbaux', headers: ['Type', 'Example'], headersFr: ['Type', 'Exemple'],
        rows: [['Opener: question', 'Können Sie mir sagen, wo die Toilette ist?'], ['Opener: statement', 'Ich möchte wissen, ob noch Plätze frei sind.'], ['Perfekt (auxiliary last)', 'Wissen Sie, ob Sie einen Termin gebucht haben?'], ['Modal (modal last)', 'Ich weiß nicht, ob ich kommen kann.']],
        rowsFr: [['Amorce : question', 'Können Sie mir sagen, wo die Toilette ist ?'], ['Amorce : affirmation', 'Ich möchte wissen, ob noch Plätze frei sind.'], ['Perfekt (auxiliaire en dernier)', 'Wissen Sie, ob Sie einen Termin gebucht haben ?'], ['Modal (modal en dernier)', 'Ich weiß nicht, ob ich kommen kann.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wissen', role: 'verb' }, { text: 'Sie,', role: 'subject' }, { text: 'ob', role: 'connector' }, { text: 'Sie', role: 'subject' }, { text: 'einen Termin', role: 'accusative' }, { text: 'gebucht haben?', role: 'verb' }], en: 'Do you know whether you have booked an appointment?', fr: 'Savez-vous si vous avez réservé un rendez-vous ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'weiß', role: 'verb' }, { text: 'nicht,', role: 'other' }, { text: 'ob', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'kommen kann.', role: 'verb' }], en: 'I don’t know whether I can come.', fr: 'Je ne sais pas si je peux venir.' },
      ],
      contrast: {
        a: { label: 'Direct question', labelFr: 'Question directe', note: 'blunt', noteFr: 'directe', examples: [g('Wo ist die Toilette?', 'Where is the toilet?', 'Où sont les toilettes ?'), g('Sind noch Plätze frei?', 'Are there still free seats?', 'Reste-t-il des places libres ?')] },
        b: { label: 'Indirect question', labelFr: 'Question indirecte', note: 'polite', noteFr: 'polie', examples: [g('Können Sie mir sagen, wo die Toilette ist?', 'Can you tell me where the toilet is?', 'Pouvez-vous me dire où sont les toilettes ?'), g('Ich möchte wissen, ob noch Plätze frei sind.', 'I would like to know whether there are still free seats.', 'J’aimerais savoir s’il reste des places libres.')] },
      },
      examples: [
        g('Können Sie mir sagen, wo die Toilette ist?', 'Can you tell me where the toilet is?', 'Pouvez-vous me dire où sont les toilettes ?'),
        g('Ich möchte wissen, ob noch Plätze frei sind.', 'I would like to know whether there are still free seats.', 'J’aimerais savoir s’il reste des places libres.'),
        g('Wissen Sie, ob Sie einen Termin gebucht haben?', 'Do you know whether you have booked an appointment?', 'Savez-vous si vous avez réservé un rendez-vous ?'),
        g('Ich weiß nicht, ob ich kommen kann.', 'I don’t know whether I can come.', 'Je ne sais pas si je peux venir.'),
        g('Können Sie mir sagen, ob ich noch absagen darf?', 'Can you tell me whether I may still cancel?', 'Pouvez-vous me dire si j’ai encore le droit d’annuler ?'),
        g('Ich frage kurz nach, wann Sie angerufen haben.', 'I’ll just check when you called.', 'Je vérifie rapidement quand vous avez appelé.'),
      ],
      mistakes: [
        { wrong: 'Ich weiß nicht, ob ich kann kommen.', right: 'Ich weiß nicht, ob ich kommen kann.', why: 'The modal is the last word.', whyFr: 'Le modal est le dernier mot.' },
        { wrong: 'Wissen Sie, ob Sie haben einen Termin gebucht?', right: 'Wissen Sie, ob Sie einen Termin gebucht haben?', why: 'The auxiliary goes to the very end.', whyFr: 'L’auxiliaire va tout à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l9-e8', prompt: 'Which is more polite?', promptFr: 'Laquelle est plus polie ?', options: ['Wo ist die Toilette?', 'Können Sie mir sagen, wo die Toilette ist?', 'Toilette?'], answer: 1, explain: 'The indirect question is more polite.', explainFr: 'La question indirecte est plus polie.', hint: 'Look for "Können Sie mir sagen".', hintFr: 'Cherche « Können Sie mir sagen ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l9-e6', prompt: 'Listen. What does the caller want to know?', promptFr: 'Écoute. Que veut savoir la personne ?', audio: { ttsText: 'Können Sie mir sagen, ob der Zug pünktlich ist?' }, options: ['Whether the train is on time', 'Where the station is', 'How much a ticket costs'], optionsFr: ['Si le train est à l’heure', 'Où est la gare', 'Combien coûte un billet'], answer: 0, hint: 'Listen after "ob".', hintFr: 'Écoute après « ob ».' } },

    { kind: 'pronunciation', focus: 'Keep intonation gentle; "ob" is short, and the sentence-final verb is where the clause "clicks shut"', focusFr: 'Garde une intonation douce ; « ob » est court, et le verbe final « ferme » la subordonnée', items: [{ id: 'b1l9-ob-pron', german: 'ob', english: 'whether', french: 'si', gender: null, syllables: ['OB'], pronunciation: 'op', example: { de: 'Ich weiß nicht, ob.', en: 'I don’t know whether.', fr: 'Je ne sais pas si.' } }, { id: 'b1l9-ahnung-pron', german: 'Ahnung', english: 'idea/clue', french: 'idée', gender: null, syllables: ['AH', 'nung'], pronunciation: 'AH-noong', example: { de: 'Keine Ahnung!', en: 'No idea!', fr: 'Aucune idée !' } }] },

    { kind: 'wrapup',
      summary: 'You can now ask **politely** with **indirect questions**: **ob** for yes/no, the **question word** for W-questions, the **verb group at the end** — also in the **Perfekt** and with **modals**. 🎉',
      summaryFr: 'Tu sais maintenant demander **poliment** avec des **questions indirectes** : **ob** pour oui/non, le **mot interrogatif** pour les questions en W, le **groupe verbal à la fin** — aussi au **Perfekt** et avec des **modaux**. 🎉',
      card: { title: 'Indirect questions on one page', titleFr: 'Les questions indirectes en une page', sections: [
        { heading: 'Yes/no', headingFr: 'Oui/non', rows: [g('…, ob er kommt.', 'ob + verb last', 'ob + verbe à la fin')] },
        { heading: 'W-question', headingFr: 'Question en W', rows: [g('…, wann er kommt.', 'same question word, verb last', 'même mot interrogatif, verbe à la fin')] },
        { heading: 'Polite openers', headingFr: 'Amorces polies', rows: [g('Können Sie mir sagen, … · Wissen Sie, … · Ich möchte wissen, …', 'softer than a direct question', 'plus doux qu’une question directe')] },
      ] } },
  ],
};

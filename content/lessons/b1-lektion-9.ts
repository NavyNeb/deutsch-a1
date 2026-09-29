import type { Lesson } from '../types';

export const b1lektion9: Lesson = {
  id: 'b1-l9', level: 'B1', module: 3, number: 9,
  title: { de: 'Indirekte Fragen', en: 'Indirect questions', fr: 'Les questions indirectes' },
  theme: 'Embedding questions politely with "ob" and question words',
  themeFr: 'Intégrer des questions poliment avec « ob » et les mots interrogatifs',
  goals: ['Form indirect yes/no questions with "ob"', 'Form indirect W-questions', 'Send the verb to the end', 'Ask more politely'],
  goalsFr: ['Former des questions indirectes fermées avec « ob »', 'Former des questions indirectes en W', 'Envoyer le verbe à la fin', 'Demander plus poliment'],
  steps: [
    { kind: 'intro', title: 'Weißt du, ob …? 🤷', titleFr: 'Sais-tu si … ? 🤷',
      scene: 'Asking for information politely and indirectly.', sceneFr: 'On demande des informations poliment et indirectement.',
      goals: ['Use "ob" for indirect yes/no questions', 'Use W-words for indirect questions', 'Put the verb at the end', 'Sound more polite'],
      goalsFr: ['Utiliser « ob » pour les questions fermées indirectes', 'Utiliser les mots en W pour les questions indirectes', 'Mettre le verbe à la fin', 'Paraître plus poli'] },

    { kind: 'vocab', item: { id: 'b1l9-fragen', german: 'fragen', english: 'to ask', french: 'demander', gender: null, syllables: ['FRA', 'gen'], pronunciation: 'FRAH-gen', example: { de: 'Ich frage, ob er Zeit hat.', en: 'I ask whether he has time.', fr: 'Je demande s’il a le temps.' } } },
    { kind: 'vocab', item: { id: 'b1l9-ob', german: 'ob', english: 'whether / if', french: 'si (question)', gender: null, syllables: ['OB'], pronunciation: 'op', example: { de: 'Ich weiß nicht, ob es stimmt.', en: 'I don’t know whether it’s true.', fr: 'Je ne sais pas si c’est vrai.' } } },
    { kind: 'vocab', item: { id: 'b1l9-antwort', german: 'die Antwort', english: 'the answer', french: 'la réponse', gender: 'die', syllables: ['ANT', 'wort'], pronunciation: 'dee AHNT-vort', example: { de: 'Ich habe keine Antwort.', en: 'I have no answer.', fr: 'Je n’ai pas de réponse.' } } },
    { kind: 'vocab', item: { id: 'b1l9-antworten', german: 'antworten', english: 'to answer', french: 'répondre', gender: null, syllables: ['ANT', 'wor', 'ten'], pronunciation: 'AHNT-vor-ten', example: { de: 'Kannst du mir antworten?', en: 'Can you answer me?', fr: 'Peux-tu me répondre ?' } } },
    { kind: 'vocab', item: { id: 'b1l9-sich-fragen', german: 'sich fragen', english: 'to wonder', french: 'se demander', gender: null, syllables: ['sich', 'FRA', 'gen'], pronunciation: 'zikh FRAH-gen', example: { de: 'Ich frage mich, ob das gut ist.', en: 'I wonder whether that is good.', fr: 'Je me demande si c’est bien.' } } },
    { kind: 'vocab', item: { id: 'b1l9-unsicher', german: 'unsicher', english: 'unsure', french: 'incertain', gender: null, syllables: ['UN', 'si', 'cher'], pronunciation: 'OON-zi-kher', example: { de: 'Ich bin unsicher, wann er kommt.', en: 'I’m unsure when he’s coming.', fr: 'Je ne suis pas sûr de quand il vient.' } } },
    { kind: 'vocab', item: { id: 'b1l9-information', german: 'die Information', english: 'the information', french: 'l’information', gender: 'die', syllables: ['in', 'for', 'ma', 'TION'], pronunciation: 'in-for-mah-TSYOHN', example: { de: 'Ich brauche eine Information.', en: 'I need some information.', fr: 'J’ai besoin d’une information.' } } },
    { kind: 'vocab', item: { id: 'b1l9-nachfragen', german: 'nachfragen', english: 'to enquire / ask again', french: 'se renseigner', gender: null, syllables: ['NACH', 'fra', 'gen'], pronunciation: 'NAHKH-frah-gen', example: { de: 'Ich frage kurz nach.', en: 'I’ll quickly ask.', fr: 'Je me renseigne vite.' } } },
    { kind: 'vocab', item: { id: 'b1l9-ahnung', german: 'die Ahnung', english: 'the idea / clue', french: 'l’idée', gender: 'die', syllables: ['AH', 'nung'], pronunciation: 'dee AH-noong', example: { de: 'Ich habe keine Ahnung, wo er ist.', en: 'I have no idea where he is.', fr: 'Je n’ai aucune idée d’où il est.' } } },
    { kind: 'vocab', item: { id: 'b1l9-erklaeren2', german: 'erklären', english: 'to explain', french: 'expliquer', gender: null, syllables: ['er', 'KLÄ', 'ren'], pronunciation: 'air-KLAY-ren', example: { de: 'Können Sie erklären, wie das geht?', en: 'Can you explain how that works?', fr: 'Pouvez-vous expliquer comment ça marche ?' } } },

    { kind: 'grammar', note: {
      id: 'b1l9-ob-note', title: 'Indirect yes/no questions with "ob"', titleFr: 'Questions fermées indirectes avec « ob »',
      explanationMd: 'A **yes/no** question becomes indirect with **ob** (whether), and the **verb goes to the end**:\n\n- Direct: **Kommt** er? → Indirect: Ich weiß nicht, **ob** er **kommt**.\n- Direct: **Hat** sie Zeit? → Indirect: Weißt du, **ob** sie Zeit **hat**?',
      explanationMdFr: 'Une question **fermée** devient indirecte avec **ob** (si), et le **verbe va à la fin** :\n\n- Direct : **Kommt** er ? → Indirect : Ich weiß nicht, **ob** er **kommt**.\n- Direct : **Hat** sie Zeit ? → Indirect : Weißt du, **ob** sie Zeit **hat** ?',
      examples: [
        { de: 'Ich frage mich, ob das richtig ist.', en: 'I wonder whether that is correct.', fr: 'Je me demande si c’est correct.' },
        { de: 'Können Sie mir sagen, ob der Zug pünktlich ist?', en: 'Can you tell me whether the train is on time?', fr: 'Pouvez-vous me dire si le train est à l’heure ?' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l9-w-note', title: 'Indirect W-questions', titleFr: 'Questions indirectes en W',
      explanationMd: 'For **W-questions**, keep the question word and send the **verb to the end**:\n\n- Direct: **Wann** kommt er? → Indirect: Ich weiß nicht, **wann** er **kommt**.\n- Direct: **Wo** wohnt sie? → Indirect: Weißt du, **wo** sie **wohnt**?',
      explanationMdFr: 'Pour les **questions en W**, garde le mot interrogatif et envoie le **verbe à la fin** :\n\n- Direct : **Wann** kommt er ? → Indirect : Ich weiß nicht, **wann** er **kommt**.\n- Direct : **Wo** wohnt sie ? → Indirect : Weißt du, **wo** sie **wohnt** ?',
      examples: [
        { de: 'Ich habe keine Ahnung, wo er ist.', en: 'I have no idea where he is.', fr: 'Je n’ai aucune idée d’où il est.' },
        { de: 'Können Sie mir sagen, wie viel das kostet?', en: 'Can you tell me how much that costs?', fr: 'Pouvez-vous me dire combien ça coûte ?' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l9-hoeflich', title: 'Indirect = more polite', titleFr: 'Indirect = plus poli',
      explanationMd: 'Indirect questions sound **softer and more polite**. Common openers:\n\n- **Können Sie mir sagen, …?**\n- **Wissen Sie, …?**\n- **Ich möchte wissen, …**\n\nThe question mark stays only if the whole sentence is a question (Können Sie mir sagen, wo … ist?).',
      explanationMdFr: 'Les questions indirectes sont **plus douces et plus polies**. Introductions courantes :\n\n- **Können Sie mir sagen, …?**\n- **Wissen Sie, …?**\n- **Ich möchte wissen, …**\n\nLe point d’interrogation ne reste que si toute la phrase est une question (Können Sie mir sagen, wo … ist ?).',
      examples: [
        { de: 'Können Sie mir sagen, wo die Toilette ist?', en: 'Can you tell me where the toilet is?', fr: 'Pouvez-vous me dire où sont les toilettes ?' },
        { de: 'Ich möchte wissen, ob noch Plätze frei sind.', en: 'I would like to know whether there are still free seats.', fr: 'Je voudrais savoir s’il reste des places.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l9-e1', prompt: 'Ich weiß nicht, ___ er kommt. (whether)', answer: 'ob', hint: 'indirect yes/no → ob', hintFr: 'question fermée indirecte → ob' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l9-e2', tokens: ['er', 'ob', 'kommt', 'Ich weiß nicht'], answer: ['Ich weiß nicht', 'ob', 'er', 'kommt'], hint: 'ob-clause: verb at the end.', hintFr: 'subordonnée ob : verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l9-e3', prompt: 'Make indirect: "Wann kommt der Bus?"', promptFr: 'Rends indirecte : « Wann kommt der Bus? »', options: ['Weißt du, wann kommt der Bus?', 'Weißt du, wann der Bus kommt?', 'Weißt du, ob der Bus wann kommt?'], answer: 1, explain: 'Keep "wann", send the verb "kommt" to the end.', explainFr: 'Garde « wann », envoie le verbe « kommt » à la fin.', hint: 'Verb goes last.', hintFr: 'Le verbe va en dernier.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l9-e4', prompt: 'Ich habe keine Ahnung, ___ er wohnt. (where)', answer: 'wo', hint: 'indirect W-question keeps the W-word', hintFr: 'la question indirecte en W garde le mot en W' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l9-e5', pairs: [ { de: 'ob', en: 'whether', fr: 'si' }, { de: 'die Antwort', en: 'answer', fr: 'réponse' }, { de: 'sich fragen', en: 'to wonder', fr: 'se demander' } ], hint: 'Match each item to its meaning.', hintFr: 'Associe chaque élément à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l9-e6', prompt: 'Listen. What does the caller want to know?', promptFr: 'Écoute. Que veut savoir la personne ?', audio: { ttsText: 'Können Sie mir sagen, ob der Zug pünktlich ist?' }, options: ['Whether the train is on time', 'Where the station is', 'How much a ticket costs'], optionsFr: ['Si le train est à l’heure', 'Où est la gare', 'Combien coûte un billet'], answer: 0, hint: 'Listen after "ob".', hintFr: 'Écoute après « ob ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l9-e7', tokens: ['das', 'kostet', 'wie viel', 'Wissen Sie'], answer: ['Wissen Sie', 'wie viel', 'das', 'kostet'], hint: 'Keep "wie viel", verb at the end.', hintFr: 'Garde « wie viel », verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l9-e8', prompt: 'Which is more polite?', promptFr: 'Laquelle est plus polie ?', options: ['Wo ist die Toilette?', 'Können Sie mir sagen, wo die Toilette ist?', 'Toilette?'], answer: 1, explain: 'The indirect question is more polite.', explainFr: 'La question indirecte est plus polie.', hint: 'Look for "Können Sie mir sagen".', hintFr: 'Cherche « Können Sie mir sagen ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l9-e9', prompt: 'Ich frage mich, ___ das eine gute Idee ist. (whether)', answer: 'ob', hint: 'yes/no → ob', hintFr: 'fermée → ob' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l9-e10', prompt: 'Listen. What does Lena not know?', promptFr: 'Écoute. Que ne sait pas Lena ?', audio: { ttsText: 'Ich weiß nicht, wo mein Handy ist.' }, options: ['Where her phone is', 'When the bus comes', 'Whether it rains'], optionsFr: ['Où est son téléphone', 'Quand vient le bus', 'S’il pleut'], answer: 0, hint: 'Listen after "wo".', hintFr: 'Écoute après « wo ».' } },

    { kind: 'pronunciation', focus: 'Keep intonation gentle; "ob" is short, and the sentence-final verb is where the clause "clicks shut"', focusFr: 'Garde une intonation douce ; « ob » est court, et le verbe final « ferme » la subordonnée', items: [
      { id: 'b1l9-ob-pron', german: 'ob', english: 'whether', french: 'si', gender: null, syllables: ['OB'], pronunciation: 'op', example: { de: 'Ich weiß nicht, ob.', en: 'I don’t know whether.', fr: 'Je ne sais pas si.' } },
      { id: 'b1l9-ahnung-pron', german: 'Ahnung', english: 'idea/clue', french: 'idée', gender: null, syllables: ['AH', 'nung'], pronunciation: 'AH-noong', example: { de: 'Keine Ahnung!', en: 'No idea!', fr: 'Aucune idée !' } },
    ] },

    { kind: 'wrapup', summary: 'You can now embed questions: use **ob** for indirect yes/no questions and keep the **W-word** for W-questions — in both, the **verb goes to the end**. Openers like "Können Sie mir sagen, …?" make you sound polite. 🎉',
      summaryFr: 'Tu sais maintenant intégrer des questions : utilise **ob** pour les questions fermées indirectes et garde le **mot en W** pour les questions en W — dans les deux cas, le **verbe va à la fin**. Des introductions comme « Können Sie mir sagen, …? » te rendent poli. 🎉' },
  ],
};

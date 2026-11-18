import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion7: Lesson = {
  id: 'a2-l7', level: 'A2', module: 5, number: 19,
  title: { de: 'Warum? — weil und dass', en: 'Why? — weil and dass', fr: 'Pourquoi ? — weil et dass' },
  theme: 'Giving reasons and opinions with subordinate clauses (weil, dass)', themeFr: 'Donner des raisons et des opinions avec les subordonnées (weil, dass)',
  goals: ['Give reasons with "weil" (because)', 'Report opinions with "dass" (that)', 'Send the verb to the end of a subordinate clause', 'Use the verb "wissen" (to know)'], goalsFr: ['Donner des raisons avec « weil » (parce que)', 'Rapporter des opinions avec « dass » (que)', 'Envoyer le verbe à la fin de la subordonnée', 'Utiliser le verbe « wissen » (savoir)'],
  canDo: g('Ich kann Gründe mit „weil“ nennen, Meinungen mit „dass“ berichten und das Verb ans Satzende stellen.', 'I can give reasons with “weil”, report opinions with “dass” and send the verb to the end of the clause.', 'Je sais donner des raisons avec « weil », rapporter des opinions avec « dass » et placer le verbe à la fin de la proposition.'),
  steps: [
    { kind: 'intro', title: 'Warum? Weil … und dass … 🤔', titleFr: 'Pourquoi ? Weil … et dass … 🤔',
      scene: 'Ana, Ben and Lara explain why they learn German and what they think — in longer sentences.', sceneFr: 'Ana, Ben et Lara expliquent pourquoi ils apprennent l’allemand et ce qu’ils pensent — avec des phrases plus longues.',
      goals: ['Give reasons with weil', 'Report opinions with dass', 'Send the verb to the end of a subordinate clause and use wissen'],
      goalsFr: ['Donner des raisons avec weil', 'Rapporter des opinions avec dass', 'Envoyer le verbe à la fin d’une proposition subordonnée et utiliser wissen'] },

    // ───────────── 1 · weil ─────────────
    { kind: 'chapter', title: 'Gründe mit „weil“', titleFr: 'Les raisons avec « weil »', blurb: 'Warum? — Weil …', blurbFr: 'Pourquoi ? — Parce que …' },

    { kind: 'situation', title: 'Warum lernst du Deutsch?', titleFr: 'Pourquoi apprends-tu l’allemand ?',
      setting: 'Lara asks Ana at the language school.', settingFr: 'Lara interroge Ana à l’école de langues.',
      lines: [
        line('Lara', 'Warum lernst du Deutsch, Ana?', 'Why are you learning German, Ana?', 'Pourquoi apprends-tu l’allemand, Ana ?'),
        line('Ana', 'Ich lerne Deutsch, weil ich in Deutschland arbeiten will. Das ist der Grund.', 'I’m learning German because I want to work in Germany. That’s the reason.', 'J’apprends l’allemand parce que je veux travailler en Allemagne. C’est la raison.'),
        line('Lara', 'Ich trinke Kaffee, weil ich müde bin. Und ich bleibe heute zu Hause, weil es wichtig ist, dass ich lerne.', 'I’m drinking coffee because I’m tired. And I’m staying home today because it’s important that I study.', 'Je bois du café parce que je suis fatiguée. Et je reste à la maison aujourd’hui parce qu’il est important que j’étudie.'),
        line('Ana', 'Deutsch ist wichtig für die Arbeit. Verstehst du den Satz?', 'German is important for work. Do you understand the sentence?', 'L’allemand est important pour le travail. Comprends-tu la phrase ?'),
      ],
      words: [{ id: 'a2l7-warum', german: 'warum', english: 'why', french: 'pourquoi', gender: null, syllables: ['wa', 'RUM'], pronunciation: 'vah-ROOM', example: { de: 'Warum lernst du Deutsch?', en: 'Why do you learn German?', fr: 'Pourquoi apprends-tu l’allemand ?' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l7-e11', prompt: 'Why is Ana learning German?', promptFr: 'Pourquoi Ana apprend-elle l’allemand ?', options: ['To work in Germany', 'To travel', 'For fun'], optionsFr: ['Pour travailler en Allemagne', 'Pour voyager', 'Pour le plaisir'], answer: 0, explain: 'She says: “…, weil ich in Deutschland arbeiten will.”', explainFr: 'Elle dit : « …, weil ich in Deutschland arbeiten will. »', hint: 'Look for “weil”.', hintFr: 'Cherche « weil ».' } },

    { kind: 'wordgroup', title: 'Gründe und Meinungen', titleFr: 'Raisons et opinions',
      items: [{ id: 'a2l7-weil', german: 'weil', english: 'because', french: 'parce que', gender: null, syllables: ['WEIL'], pronunciation: 'vile', example: { de: 'Ich lerne Deutsch, weil es wichtig ist.', en: 'I learn German because it is important.', fr: 'J’apprends l’allemand parce que c’est important.' } }, { id: 'a2l7-grund', german: 'der Grund', english: 'the reason', french: 'la raison', gender: 'der', syllables: ['GRUND'], pronunciation: 'dair GROONT', example: { de: 'Was ist der Grund?', en: 'What is the reason?', fr: 'Quelle est la raison ?' } }, { id: 'a2l7-wichtig', german: 'wichtig', english: 'important', french: 'important', gender: null, syllables: ['WICH', 'tig'], pronunciation: 'VIKH-tikh', example: { de: 'Deutsch ist wichtig für die Arbeit.', en: 'German is important for work.', fr: 'L’allemand est important pour le travail.' } }, { id: 'a2l7-muede', german: 'müde', english: 'tired', french: 'fatigué', gender: null, syllables: ['MÜ', 'de'], pronunciation: 'MUE-de', example: { de: 'Ich bin müde.', en: 'I am tired.', fr: 'Je suis fatigué.' } }, { id: 'a2l7-verstehen', german: 'verstehen', english: 'to understand', french: 'comprendre', gender: null, syllables: ['ver', 'STE', 'hen'], pronunciation: 'fair-SHTAY-en', example: { de: 'Ich verstehe das nicht.', en: 'I don’t understand that.', fr: 'Je ne comprends pas ça.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l7-weil', title: 'Reasons with weil (verb to the end)', titleFr: 'Raisons avec weil (verbe à la fin)',
      lead: 'weil starts a subordinate clause: the conjugated verb goes to the very end. Comma before weil.',
      leadFr: 'weil introduit une proposition subordonnée : le verbe conjugué va tout à la fin. Virgule avant weil.',
      explanationMd: '**weil** (because) starts a **subordinate clause**, and the **conjugated verb moves to the very end**: **Ich bleibe zu Hause, weil ich müde bin.** Put a **comma** before **weil**. In a short answer you can use **weil** alone: **Warum? — Weil es wichtig ist.** With a **separable verb** the two parts stay together at the end: **…, weil ich früh aufstehe.**',
      explanationMdFr: '**weil** (parce que) introduit une **proposition subordonnée**, et le **verbe conjugué passe tout à la fin** : **Ich bleibe zu Hause, weil ich müde bin.** Mets une **virgule** avant **weil**. Dans une réponse courte, tu peux employer **weil** seul : **Warum ? — Weil es wichtig ist.** Avec un **verbe séparable**, les deux parties restent ensemble à la fin : **…, weil ich früh aufstehe.**',
      tables: [{ title: 'Main clause + weil clause', titleFr: 'Principale + subordonnée en weil', headers: ['Main clause', 'weil-clause (verb last)'], headersFr: ['Principale', 'Subordonnée en weil (verbe à la fin)'],
        rows: [['Ich bleibe zu Hause,', 'weil ich müde bin.'], ['Ich lerne Deutsch,', 'weil ich in Deutschland arbeiten will.'], ['Ich trinke Kaffee,', 'weil ich müde bin.'], ['Sie kommt nicht,', 'weil sie früh aufsteht.']],
        rowsFr: [['Ich bleibe zu Hause,', 'weil ich müde bin.'], ['Ich lerne Deutsch,', 'weil ich in Deutschland arbeiten will.'], ['Ich trinke Kaffee,', 'weil ich müde bin.'], ['Sie kommt nicht,', 'weil sie früh aufsteht.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bleibe', role: 'verb' }, { text: 'zu Hause,', role: 'place' }, { text: 'weil', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'müde', role: 'other' }, { text: 'bin.', role: 'verb' }], en: 'I stay at home because I am tired.', fr: 'Je reste à la maison parce que je suis fatigué.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'lerne', role: 'verb' }, { text: 'Deutsch,', role: 'accusative' }, { text: 'weil', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'in Deutschland', role: 'place' }, { text: 'arbeiten will.', role: 'verb' }], en: 'I learn German because I want to work in Germany.', fr: 'J’apprends l’allemand parce que je veux travailler en Allemagne.' },
      ],
      contrast: {
        a: { label: 'Main clause', labelFr: 'Principale', note: 'verb in position 2', noteFr: 'verbe en position 2', examples: [g('Ich bin müde.', 'I am tired.', 'Je suis fatigué.'), g('Ich trinke Kaffee.', 'I drink coffee.', 'Je bois du café.')] },
        b: { label: 'weil-clause', labelFr: 'Subordonnée en weil', note: 'verb at the end', noteFr: 'verbe à la fin', examples: [g('Ich trinke Kaffee, weil ich müde bin.', 'I drink coffee because I am tired.', 'Je bois du café parce que je suis fatigué.'), g('Warum? — Weil es wichtig ist.', 'Why? — Because it is important.', 'Pourquoi ? — Parce que c’est important.')] },
      },
      examples: [
        g('Ich trinke Kaffee, weil ich müde bin.', 'I drink coffee because I am tired.', 'Je bois du café parce que je suis fatigué.'),
        g('Warum? — Weil es wichtig ist.', 'Why? — Because it is important.', 'Pourquoi ? — Parce que c’est important.'),
        g('Ich lerne Deutsch, weil ich in Deutschland arbeiten will.', 'I learn German because I want to work in Germany.', 'J’apprends l’allemand parce que je veux travailler en Allemagne.'),
        g('Ich bleibe zu Hause, weil ich müde bin.', 'I stay at home because I am tired.', 'Je reste à la maison parce que je suis fatigué.'),
        g('Er kommt nicht, weil er krank ist.', 'He is not coming because he is ill.', 'Il ne vient pas parce qu’il est malade.'),
        g('Sie geht früh ins Bett, weil sie früh aufsteht.', 'She goes to bed early because she gets up early.', 'Elle se couche tôt parce qu’elle se lève tôt.'),
      ],
      mistakes: [
        { wrong: 'Ich bleibe zu Hause, weil ich bin müde.', right: 'Ich bleibe zu Hause, weil ich müde bin.', why: 'In a weil-clause the verb goes last.', whyFr: 'Dans une subordonnée en weil, le verbe va en dernier.' },
        { wrong: 'Ich bleibe zu Hause weil ich müde bin.', right: 'Ich bleibe zu Hause, weil ich müde bin.', why: 'Always put a comma before weil.', whyFr: 'Mets toujours une virgule avant weil.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l7-e1', tokens: ['müde', 'weil', 'bin', 'ich'], answer: ['weil', 'ich', 'müde', 'bin'], hint: 'In a "weil" clause the verb goes to the end.', hintFr: 'Dans une subordonnée « weil », le verbe va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l7-e3', prompt: 'Which sentence has correct word order?', promptFr: 'Quelle phrase a le bon ordre des mots ?', options: ['Ich bleibe zu Hause, weil ich bin müde.', 'Ich bleibe zu Hause, weil ich müde bin.', 'Ich bleibe zu Hause, weil bin ich müde.'], answer: 1, explain: 'After "weil", the verb goes to the end: … weil ich müde bin.', explainFr: 'Après « weil », le verbe va à la fin : … weil ich müde bin.', hint: 'The verb must be last.', hintFr: 'Le verbe doit être en dernier.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l7-e8', prompt: 'Ich lerne Deutsch, ___ es wichtig ist. (because)', answer: 'weil', hint: 'gives the reason', hintFr: 'donne la raison' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l7-e5', pairs: [{ de: 'weil', en: 'because', fr: 'parce que' }, { de: 'dass', en: 'that', fr: 'que' }, { de: 'warum', en: 'why', fr: 'pourquoi' }], hint: 'Match each connector to its meaning.', hintFr: 'Associe chaque connecteur à sa signification.' } },

    // ───────────── 2 · dass ─────────────
    { kind: 'chapter', title: 'Meinungen mit „dass“', titleFr: 'Opinions avec « dass »', blurb: 'Ich glaube, dass …', blurbFr: 'Je crois que …' },

    { kind: 'situation', title: 'Was glaubst du?', titleFr: 'Que crois-tu ?',
      setting: 'Ben and Lara talk about tomorrow.', settingFr: 'Ben et Lara parlent de demain.',
      lines: [
        line('Ben', 'Ich glaube, dass das Wetter morgen besser wird.', 'I believe that the weather will be better tomorrow.', 'Je crois que le temps sera meilleur demain.'),
        line('Lara', 'Ich denke, dass Deutsch schön ist. Ich hoffe, dass du bald kommst.', 'I think that German is beautiful. I hope that you come soon.', 'Je pense que l’allemand est beau. J’espère que tu viens bientôt.'),
        line('Ben', 'Ich weiß, dass du morgen kommst. Ich glaube, dass er recht hat.', 'I know that you are coming tomorrow. I believe that he is right.', 'Je sais que tu viens demain. Je crois qu’il a raison.'),
        line('Lara', 'Ich denke oft daran. Ich glaube, das ist richtig.', 'I often think about it. I believe that is correct.', 'J’y pense souvent. Je crois que c’est correct.'),
      ],
      words: [{ id: 'a2l7-dass', german: 'dass', english: 'that (conjunction)', french: 'que (conjonction)', gender: null, syllables: ['DASS'], pronunciation: 'dahss', example: { de: 'Ich glaube, dass er recht hat.', en: 'I think that he is right.', fr: 'Je crois qu’il a raison.' } }, { id: 'a2l7-glauben', german: 'glauben', english: 'to believe / think', french: 'croire', gender: null, syllables: ['GLAU', 'ben'], pronunciation: 'GLOW-ben', example: { de: 'Ich glaube, das ist richtig.', en: 'I believe that is right.', fr: 'Je crois que c’est juste.' } }, { id: 'a2l7-denken', german: 'denken', english: 'to think', french: 'penser', gender: null, syllables: ['DEN', 'ken'], pronunciation: 'DENK-en', example: { de: 'Ich denke oft an dich.', en: 'I often think of you.', fr: 'Je pense souvent à toi.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l7-dass', title: 'Opinions with dass (verb to the end)', titleFr: 'Opinions avec dass (verbe à la fin)',
      lead: 'After glauben, denken, wissen, hoffen: dass + the verb at the end. Comma before dass.',
      leadFr: 'Après glauben, denken, wissen, hoffen : dass + le verbe à la fin. Virgule avant dass.',
      explanationMd: '**dass** (that) works like **weil**: the **verb goes to the end**. Use it after verbs of **thinking and saying**: **glauben, denken, wissen, hoffen, sagen, meinen**. **Ich glaube, dass er recht hat.** **Ich weiß, dass du morgen kommst.** Note the **comma** and the double **s** (**dass** the conjunction; **das** is the article or pronoun). If the sentence after the verb is a plain opinion without **dass**, the **verb stays in position 2**: **Ich glaube, er hat recht.**',
      explanationMdFr: '**dass** (que) fonctionne comme **weil** : le **verbe va à la fin**. Utilise-le après des verbes de **pensée et de parole** : **glauben, denken, wissen, hoffen, sagen, meinen**. **Ich glaube, dass er recht hat.** **Ich weiß, dass du morgen kommst.** Note la **virgule** et le double **s** (**dass** la conjonction ; **das** est l’article ou le pronom). Si la phrase après le verbe est une simple opinion sans **dass**, le **verbe reste en position 2** : **Ich glaube, er hat recht.**',
      tables: [{ title: 'Verbs + dass', titleFr: 'Verbes + dass', headers: ['Verb', 'Example'], headersFr: ['Verbe', 'Exemple'],
        rows: [['glauben', 'Ich glaube, dass er recht hat.'], ['denken', 'Ich denke, dass Deutsch schön ist.'], ['wissen', 'Ich weiß, dass du morgen kommst.'], ['hoffen', 'Ich hoffe, dass du bald kommst.'], ['sagen', 'Er sagt, dass er müde ist.']],
        rowsFr: [['glauben', 'Ich glaube, dass er recht hat.'], ['denken', 'Ich denke, dass Deutsch schön ist.'], ['wissen', 'Ich weiß, dass du morgen kommst.'], ['hoffen', 'Ich hoffe, dass du bald kommst.'], ['sagen', 'Er sagt, dass er müde ist.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'glaube,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'er', role: 'subject' }, { text: 'recht', role: 'accusative' }, { text: 'hat.', role: 'verb' }], en: 'I believe that he is right.', fr: 'Je crois qu’il a raison.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'hoffe,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'du', role: 'subject' }, { text: 'bald', role: 'time' }, { text: 'kommst.', role: 'verb' }], en: 'I hope that you come soon.', fr: 'J’espère que tu viens bientôt.' },
      ],
      contrast: {
        a: { label: 'With dass', labelFr: 'Avec dass', note: 'verb at the end', noteFr: 'verbe à la fin', examples: [g('Ich glaube, dass er recht hat.', 'I believe that he is right.', 'Je crois qu’il a raison.'), g('Ich hoffe, dass du bald kommst.', 'I hope that you come soon.', 'J’espère que tu viens bientôt.')] },
        b: { label: 'Without dass', labelFr: 'Sans dass', note: 'verb in position 2', noteFr: 'verbe en position 2', examples: [g('Ich glaube, er hat recht.', 'I think he is right.', 'Je crois qu’il a raison.'), g('Ich denke, das ist richtig.', 'I think that is correct.', 'Je pense que c’est correct.')] },
      },
      examples: [
        g('Ich glaube, dass er recht hat.', 'I believe that he is right.', 'Je crois qu’il a raison.'),
        g('Ich weiß, dass du morgen kommst.', 'I know that you are coming tomorrow.', 'Je sais que tu viens demain.'),
        g('Ich denke, dass Deutsch schön ist.', 'I think that German is beautiful.', 'Je pense que l’allemand est beau.'),
        g('Ich hoffe, dass du bald kommst.', 'I hope that you come soon.', 'J’espère que tu viens bientôt.'),
        g('Ich glaube, dass das Wetter morgen besser wird.', 'I believe that the weather will be better tomorrow.', 'Je crois que le temps sera meilleur demain.'),
        g('Er sagt, dass er müde ist.', 'He says that he is tired.', 'Il dit qu’il est fatigué.'),
      ],
      mistakes: [
        { wrong: 'Ich glaube, dass er hat recht.', right: 'Ich glaube, dass er recht hat.', why: 'In a dass-clause the verb goes last.', whyFr: 'Dans une subordonnée en dass, le verbe va en dernier.' },
        { wrong: 'Ich weiß, das du kommst.', right: 'Ich weiß, dass du kommst.', why: 'The conjunction is dass with double s.', whyFr: 'La conjonction est dass avec double s.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l7-e2', prompt: 'Ich glaube, ___ er recht hat. (that)', answer: 'dass', hint: 'the conjunction meaning "that"', hintFr: 'la conjonction qui signifie « que »' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l7-e7', tokens: ['dass', 'kommst', 'du', 'weiß', 'Ich'], answer: ['Ich', 'weiß', 'dass', 'du', 'kommst'], hint: 'Main clause, comma, then "dass" with the verb at the end.', hintFr: 'Principale, virgule, puis « dass » avec le verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l7-e9', prompt: 'Which verb usually introduces a "dass" clause?', promptFr: 'Quel verbe introduit souvent une subordonnée « dass » ?', options: ['fahren', 'glauben', 'kaufen'], answer: 1, explain: '"glauben, denken, wissen …" introduce dass-clauses.', explainFr: '« glauben, denken, wissen … » introduisent des subordonnées en dass.', hint: 'A verb of thinking/opinion.', hintFr: 'Un verbe d’opinion.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l7-e10', prompt: 'Listen. What does Ben believe?', promptFr: 'Écoute. Que croit Ben ?', audio: { ttsText: 'Ich glaube, dass das Wetter morgen besser wird.' }, options: ['The weather will be better tomorrow', 'It will rain', 'He is tired'], optionsFr: ['Le temps sera meilleur demain', 'Il va pleuvoir', 'Il est fatigué'], answer: 0, hint: 'Listen after "dass".', hintFr: 'Écoute après « dass ».' } },

    // ───────────── 3 · wissen ─────────────
    { kind: 'chapter', title: 'Das Verb „wissen“', titleFr: 'Le verbe « wissen »', blurb: 'ich weiß, du weißt.', blurbFr: 'ich weiß, du weißt.' },

    { kind: 'situation', title: 'Weißt du, wo der Bahnhof ist?', titleFr: 'Sais-tu où est la gare ?',
      setting: 'A tourist asks Lara for directions.', settingFr: 'Un touriste demande son chemin à Lara.',
      lines: [
        line('Tourist', 'Weißt du, wo der Bahnhof ist?', 'Do you know where the station is?', 'Sais-tu où est la gare ?'),
        line('Lara', 'Ich weiß es nicht. Aber ich weiß, dass er in der Nähe ist.', 'I don’t know. But I know that it is nearby.', 'Je ne sais pas. Mais je sais qu’elle est tout près.'),
        line('Tourist', 'Wissen Sie, wie spät es ist?', 'Do you know what time it is?', 'Savez-vous quelle heure il est ?'),
        line('Lara', 'Wir wissen nicht genau. Ich verstehe das nicht.', 'We don’t know exactly. I don’t understand that.', 'Nous ne savons pas exactement. Je ne comprends pas.'),
      ],
      words: [{ id: 'a2l7-wissen', german: 'wissen', english: 'to know (a fact)', french: 'savoir', gender: null, syllables: ['WIS', 'sen'], pronunciation: 'VISS-en', example: { de: 'Ich weiß, dass du kommst.', en: 'I know that you are coming.', fr: 'Je sais que tu viens.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l7-wissen', title: 'The verb wissen', titleFr: 'Le verbe wissen',
      lead: 'wissen is irregular in the singular: ich weiß, du weißt, er weiß. Use it for facts.',
      leadFr: 'wissen est irrégulier au singulier : ich weiß, du weißt, er weiß. Utilise-le pour les faits.',
      explanationMd: '**wissen** (to know a **fact**) is **irregular** in the singular: **ich weiß, du weißt, er / sie / es weiß** (no ending for **ich** and **er**!). Plural: **wir wissen, ihr wisst, sie wissen**. Use **wissen** for **facts and information**; use **kennen** for **people and places**. **wissen** often introduces **dass** or a question word: **Ich weiß, dass du kommst. Weißt du, wo der Bahnhof ist?**',
      explanationMdFr: '**wissen** (savoir un **fait**) est **irrégulier** au singulier : **ich weiß, du weißt, er / sie / es weiß** (pas de terminaison pour **ich** et **er** !). Pluriel : **wir wissen, ihr wisst, sie wissen**. Utilise **wissen** pour les **faits et informations** ; utilise **kennen** pour les **personnes et lieux**. **wissen** introduit souvent **dass** ou un mot interrogatif : **Ich weiß, dass du kommst. Weißt du, wo der Bahnhof ist ?**',
      tables: [{ title: 'wissen', titleFr: 'wissen', headers: ['Person', 'wissen', 'Example'], headersFr: ['Personne', 'wissen', 'Exemple'],
        rows: [['ich', 'weiß', 'Ich weiß es nicht.'], ['du', 'weißt', 'Weißt du, wo der Bahnhof ist?'], ['er / sie / es', 'weiß', 'Er weiß alles.'], ['wir', 'wissen', 'Wir wissen es nicht.'], ['ihr', 'wisst', 'Wisst ihr den Weg?'], ['sie / Sie', 'wissen', 'Wissen Sie, wie spät es ist?']],
        rowsFr: [['ich', 'weiß', 'Ich weiß es nicht.'], ['du', 'weißt', 'Weißt du, wo der Bahnhof ist ?'], ['er / sie / es', 'weiß', 'Er weiß alles.'], ['wir', 'wissen', 'Wir wissen es nicht.'], ['ihr', 'wisst', 'Wisst ihr den Weg ?'], ['sie / Sie', 'wissen', 'Wissen Sie, wie spät es ist ?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Weißt', role: 'verb' }, { text: 'du,', role: 'subject' }, { text: 'wo', role: 'connector' }, { text: 'der Bahnhof', role: 'subject' }, { text: 'ist?', role: 'verb' }], en: 'Do you know where the station is?', fr: 'Sais-tu où est la gare ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'weiß,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'er', role: 'subject' }, { text: 'in der Nähe', role: 'place' }, { text: 'ist.', role: 'verb' }], en: 'I know that it is nearby.', fr: 'Je sais qu’elle est tout près.' },
      ],
      contrast: {
        a: { label: 'wissen = a fact', labelFr: 'wissen = un fait', note: 'dass, wo, wie …', noteFr: 'dass, wo, wie …', examples: [g('Ich weiß, dass du kommst.', 'I know that you are coming.', 'Je sais que tu viens.'), g('Weißt du, wo der Bahnhof ist?', 'Do you know where the station is?', 'Sais-tu où est la gare ?')] },
        b: { label: 'kennen = know someone', labelFr: 'kennen = connaître', note: 'people, places', noteFr: 'personnes, lieux', examples: [g('Ich kenne Anna.', 'I know Anna.', 'Je connais Anna.'), g('Kennst du Berlin?', 'Do you know Berlin?', 'Connais-tu Berlin ?')] },
      },
      examples: [
        g('Ich weiß es nicht.', 'I don’t know.', 'Je ne sais pas.'),
        g('Weißt du, wo der Bahnhof ist?', 'Do you know where the station is?', 'Sais-tu où est la gare ?'),
        g('Wir wissen nicht genau.', 'We don’t know exactly.', 'Nous ne savons pas exactement.'),
        g('Er weiß alles.', 'He knows everything.', 'Il sait tout.'),
        g('Ich weiß, dass er in der Nähe ist.', 'I know that it is nearby.', 'Je sais qu’elle est tout près.'),
        g('Wissen Sie, wie spät es ist?', 'Do you know what time it is?', 'Savez-vous quelle heure il est ?'),
      ],
      mistakes: [
        { wrong: 'Ich wisse es nicht.', right: 'Ich weiß es nicht.', why: 'wissen is irregular: ich weiß.', whyFr: 'wissen est irrégulier : ich weiß.' },
        { wrong: 'Du weißt Anna?', right: 'Du kennst Anna?', why: 'People: kennen, not wissen.', whyFr: 'Pour les personnes : kennen, pas wissen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l7-e4', prompt: 'Ich ___ es nicht. (wissen — ich-form)', answer: 'weiß', hint: 'wissen is irregular: ich weiß', hintFr: 'wissen est irrégulier : ich weiß' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l7-e6', prompt: 'Listen. Why is Ana learning German?', promptFr: 'Écoute. Pourquoi Ana apprend-elle l’allemand ?', audio: { ttsText: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.' }, options: ['To work in Germany', 'For a holiday', 'For a friend'], optionsFr: ['Pour travailler en Allemagne', 'Pour les vacances', 'Pour un ami'], answer: 0, hint: 'Listen after "weil".', hintFr: 'Écoute après « weil ».' } },

    { kind: 'pronunciation', focus: 'The "ei" in weil is "eye", and "ß" in dass/weiß is a sharp "s"', focusFr: 'Le « ei » de weil est « aï », et « ß » dans dass/weiß est un « s » net', items: [{ id: 'a2l7-weil-pron', german: 'weil', english: 'because', french: 'parce que', gender: null, syllables: ['WEIL'], pronunciation: 'vile', example: { de: 'Weil ich müde bin.', en: 'Because I am tired.', fr: 'Parce que je suis fatigué.' } }, { id: 'a2l7-weiss-pron', german: 'weiß', english: '(I) know', french: '(je) sais', gender: null, syllables: ['WEISS'], pronunciation: 'vice', example: { de: 'Ich weiß es nicht.', en: 'I don’t know.', fr: 'Je ne sais pas.' } }] },

    { kind: 'wrapup',
      summary: 'You can now give **reasons** with **weil**, report **opinions** with **dass**, send the **verb to the end**, and use **wissen** correctly. 🎉',
      summaryFr: 'Tu sais maintenant donner des **raisons** avec **weil**, rapporter des **opinions** avec **dass**, envoyer le **verbe à la fin**, et utiliser **wissen** correctement. 🎉',
      card: { title: 'weil and dass on one page', titleFr: 'weil et dass en une page', sections: [
        { heading: 'weil / dass', headingFr: 'weil / dass', rows: [g('…, weil ich müde bin.', 'verb at the end', 'verbe à la fin'), g('…, dass er recht hat.', 'verb at the end', 'verbe à la fin'), g('Comma before weil and dass', 'always', 'toujours')] },
        { heading: 'wissen', headingFr: 'wissen', rows: [g('ich weiß · du weißt · er weiß', 'irregular singular', 'singulier irrégulier'), g('wir wissen · ihr wisst', 'regular plural', 'pluriel régulier')] },
      ] } },
  ],
};

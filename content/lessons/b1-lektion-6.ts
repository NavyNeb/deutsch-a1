import type { Lesson } from '../types';
import { g, line, word } from '../author';

// B1 lesson 6, rebuilt in the redesigned format: the four connectors are met in a dialogue, then taught
// as a contrast (verb at the end vs verb second), each with a table, a colour-coded breakdown and the usual mistakes.
// Ids of the words and exercises that existed before are kept.

export const b1lektion6: Lesson = {
  id: 'b1-l6', level: 'B1', module: 2, number: 5,
  title: { de: 'Konnektoren', en: 'Connectors', fr: 'Les connecteurs' },
  theme: 'Linking ideas: obwohl, deshalb, trotzdem, damit',
  themeFr: 'Relier les idées : obwohl, deshalb, trotzdem, damit',
  goals: ['Concede with “obwohl” (verb to the end)', 'Give consequences with “deshalb”', 'Contrast with “trotzdem”', 'Express purpose with “damit”'],
  goalsFr: ['Concéder avec « obwohl » (verbe à la fin)', 'Donner une conséquence avec « deshalb »', 'Opposer avec « trotzdem »', 'Exprimer le but avec « damit »'],
  canDo: g('Ich kann Gegensätze, Folgen und Ziele verbinden.', 'I can link contrasts, results and purposes.', 'Je sais relier des oppositions, des conséquences et des buts.'),
  steps: [
    { kind: 'intro', title: 'Ideen verbinden 🔗', titleFr: 'Relier les idées 🔗',
      scene: 'Explaining reasons, results, contrasts, and goals.', sceneFr: 'On explique des raisons, des résultats, des oppositions et des buts.',
      goals: ['Use “obwohl” for concession', 'Use “deshalb” for consequence', 'Use “trotzdem” for contrast', 'Use “damit” for purpose'],
      goalsFr: ['Utiliser « obwohl » pour la concession', 'Utiliser « deshalb » pour la conséquence', 'Utiliser « trotzdem » pour l’opposition', 'Utiliser « damit » pour le but'] },

    // ───────────── 1 · Contrast ─────────────
    { kind: 'chapter', title: 'Gegensatz: obwohl und trotzdem', titleFr: 'Opposition : obwohl et trotzdem',
      blurb: 'Same idea, two word orders.', blurbFr: 'La même idée, deux ordres des mots.' },

    { kind: 'situation', title: 'Trotz Regen', titleFr: 'Malgré la pluie',
      setting: 'Two colleagues, Lena and Tom, talk about getting to work on a rainy Monday.',
      settingFr: 'Deux collègues, Lena et Tom, parlent de leur trajet vers le travail un lundi pluvieux.',
      lines: [
        line('Lena', 'Es regnet. Trotzdem fahre ich mit dem Fahrrad.', 'It’s raining. Still, I’m going by bike.', 'Il pleut. Malgré tout, je vais à vélo.'),
        line('Tom', 'Wirklich? Obwohl es so kalt ist?', 'Really? Even though it’s so cold?', 'Vraiment ? Bien qu’il fasse si froid ?'),
        line('Lena', 'Ja. Ich spare Geld, damit ich im Sommer reisen kann.', 'Yes. I’m saving money so that I can travel in summer.', 'Oui. J’économise pour pouvoir voyager cet été.'),
        line('Tom', 'Gute Idee. Ich bin heute müde, deshalb nehme ich den Bus.', 'Good idea. I’m tired today, so I’m taking the bus.', 'Bonne idée. Je suis fatigué aujourd’hui, alors je prends le bus.'),
        line('Lena', 'Kein Problem. Bis später!', 'No problem. See you later!', 'Pas de souci. À tout à l’heure !'),
        line('Tom', 'Bis später!', 'See you later!', 'À tout à l’heure !'),
      ],
      words: [
        word('b1l6-trotzdem', 'trotzdem', null, 'nevertheless', 'malgré tout', ['TROTZ', 'dem'], 'TROTS-dem', g('Es regnet. Trotzdem gehe ich raus.', 'It’s raining. Nevertheless I go out.', 'Il pleut. Malgré tout, je sors.')),
        word('b1l6-obwohl', 'obwohl', null, 'although', 'bien que', ['ob', 'WOHL'], 'op-VOHL', g('Obwohl es regnet, gehe ich raus.', 'Although it’s raining, I go out.', 'Bien qu’il pleuve, je sors.')),
        word('b1l6-damit', 'damit', null, 'so that', 'pour que', ['da', 'MIT'], 'dah-MIT', g('Ich spare, damit ich reisen kann.', 'I save so that I can travel.', 'J’économise pour pouvoir voyager.')),
        word('b1l6-deshalb', 'deshalb', null, 'therefore', 'c’est pourquoi', ['DES', 'halb'], 'DES-halp', g('Es regnet, deshalb bleibe ich zu Hause.', 'It’s raining, therefore I stay home.', 'Il pleut, c’est pourquoi je reste à la maison.')),
        word('b1l6-sparen', 'sparen', null, 'to save (money)', 'économiser', ['SPA', 'ren'], 'SHPAH-ren', g('Ich spare für ein Auto.', 'I’m saving for a car.', 'J’économise pour une voiture.')),
        word('b1l6-müde2', 'müde', null, 'tired', 'fatigué', ['MÜ', 'de'], 'MUE-de', g('Obwohl ich müde bin, arbeite ich.', 'Although I’m tired, I work.', 'Bien que je sois fatigué, je travaille.')),
      ] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l6-e13', prompt: 'Why does Lena save money?', promptFr: 'Pourquoi Lena économise-t-elle ?', options: ['To travel in summer', 'Because it rains', 'Because she is tired'], optionsFr: ['Pour voyager cet été', 'Parce qu’il pleut', 'Parce qu’elle est fatiguée'], answer: 0, explain: 'She says: “Ich spare Geld, damit ich im Sommer reisen kann.”', explainFr: 'Elle dit : « Ich spare Geld, damit ich im Sommer reisen kann. »', hint: 'Look for the sentence with “damit”.', hintFr: 'Cherche la phrase avec « damit ».' } },

    { kind: 'grammar', note: {
      id: 'b1l6-obwohl-note', title: 'obwohl and trotzdem: two ways to contrast', titleFr: 'obwohl et trotzdem : deux façons d’opposer',
      lead: 'Both mean “in spite of that”. The meaning is the same, the word order is not.',
      leadFr: 'Les deux signifient « malgré cela ». Le sens est le même, l’ordre des mots non.',
      explanationMd: '**obwohl** (although) is a **subordinating conjunction**: it opens a subordinate clause and sends the **verb to the end**. When that clause comes first, the main clause starts with its **verb**.\n\n**trotzdem** (nevertheless) is an **adverb**: it takes **position 1** of its sentence, so the **verb is second**.',
      explanationMdFr: '**obwohl** (bien que) est une **conjonction de subordination** : elle ouvre une subordonnée et envoie le **verbe à la fin**. Quand cette proposition vient en premier, la principale commence par son **verbe**.\n\n**trotzdem** (malgré tout) est un **adverbe** : il occupe la **position 1** de sa phrase, donc le **verbe est en deuxième**.',
      tables: [{
        title: 'obwohl vs trotzdem', titleFr: 'obwohl ou trotzdem',
        headers: ['Word', 'Type', 'Verb', 'Example'], headersFr: ['Mot', 'Type', 'Verbe', 'Exemple'],
        rows: [['obwohl', 'subordinating conjunction', 'at the end', 'Obwohl es regnet, gehe ich raus.'], ['trotzdem', 'adverb (position 1)', 'second', 'Es regnet. Trotzdem gehe ich raus.']],
        rowsFr: [['obwohl', 'conjonction de subordination', 'à la fin', 'Obwohl es regnet, gehe ich raus.'], ['trotzdem', 'adverbe (position 1)', 'en deuxième', 'Es regnet. Trotzdem gehe ich raus.']],
        highlightCol: 0,
      }],
      anatomy: [
        { parts: [{ text: 'Obwohl', role: 'connector' }, { text: 'es', role: 'subject' }, { text: 'regnet,', role: 'verb' }, { text: 'gehe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'raus.', role: 'other' }], en: 'Although it rains, I go out. (the verb of the obwohl-clause is last; then the main clause starts with its verb)', fr: 'Bien qu’il pleuve, je sors. (le verbe de la subordonnée est en dernier ; la principale commence par son verbe)' },
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'regnet.', role: 'verb' }, { text: 'Trotzdem', role: 'connector' }, { text: 'gehe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'raus.', role: 'other' }], en: 'It rains. Nevertheless I go out. (trotzdem is position 1, the verb is second)', fr: 'Il pleut. Malgré tout, je sors. (trotzdem est en position 1, le verbe en deuxième)' },
      ],
      contrast: {
        a: { label: 'obwohl', labelFr: 'obwohl', note: 'verb to the END of its clause', noteFr: 'verbe à la FIN de sa proposition',
          examples: [g('Obwohl ich müde bin, lerne ich weiter.', 'Although I’m tired, I keep studying.', 'Bien que je sois fatigué, je continue d’étudier.'), g('Ich gehe spazieren, obwohl es regnet.', 'I go for a walk although it’s raining.', 'Je vais me promener bien qu’il pleuve.')] },
        b: { label: 'trotzdem', labelFr: 'trotzdem', note: 'verb stays SECOND', noteFr: 'le verbe reste EN DEUXIÈME',
          examples: [g('Ich bin müde. Trotzdem lerne ich weiter.', 'I’m tired. Nevertheless I keep studying.', 'Je suis fatigué. Malgré tout, je continue d’étudier.'), g('Es regnet. Trotzdem gehe ich spazieren.', 'It’s raining. Nevertheless I go for a walk.', 'Il pleut. Malgré tout, je vais me promener.')] },
      },
      examples: [
        g('Obwohl es regnet, gehe ich spazieren.', 'Although it’s raining, I go for a walk.', 'Bien qu’il pleuve, je vais me promener.'),
        g('Ich gehe spazieren, obwohl es regnet.', 'I go for a walk although it’s raining.', 'Je vais me promener bien qu’il pleuve.'),
        g('Obwohl ich müde bin, lerne ich weiter.', 'Although I’m tired, I keep studying.', 'Bien que je sois fatigué, je continue d’étudier.'),
        g('Er kam, obwohl er krank war.', 'He came although he was ill.', 'Il est venu bien qu’il fût malade.'),
        g('Es war teuer. Trotzdem habe ich es gekauft.', 'It was expensive. Nevertheless I bought it.', 'C’était cher. Malgré tout, je l’ai acheté.'),
        g('Ich habe keine Zeit. Trotzdem komme ich.', 'I have no time. Nevertheless I’m coming.', 'Je n’ai pas le temps. Malgré tout, je viens.'),
        g('Es regnet. Trotzdem gehe ich raus.', 'It’s raining. Nevertheless I go out.', 'Il pleut. Malgré tout, je sors.'),
      ],
      mistakes: [
        { wrong: 'Obwohl es regnet, ich gehe raus.', right: 'Obwohl es regnet, gehe ich raus.', why: 'After a clause that comes first, the main clause starts with its verb: gehe ich, not ich gehe.', whyFr: 'Après une proposition placée en tête, la principale commence par son verbe : gehe ich, pas ich gehe.' },
        { wrong: 'Trotzdem ich gehe raus.', right: 'Trotzdem gehe ich raus.', why: 'trotzdem takes position 1, so the verb must be second.', whyFr: 'trotzdem occupe la position 1, donc le verbe doit être en deuxième.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l6-e1', tokens: ['regnet', 'es', 'Obwohl'], answer: ['Obwohl', 'es', 'regnet'], hint: 'obwohl-clause: verb goes to the end.', hintFr: 'subordonnée obwohl : le verbe va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l6-e8', prompt: '___ es teuer war, habe ich es gekauft. (although)', promptFr: '___ es teuer war, habe ich es gekauft. (bien que)', answer: 'Obwohl', hint: 'concession, verb to the end', hintFr: 'concession, verbe à la fin' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l6-e6', tokens: ['ich', 'gehe', 'Trotzdem', 'raus'], answer: ['Trotzdem', 'gehe', 'ich', 'raus'], hint: '“Trotzdem” in position 1 → verb second.', hintFr: '« Trotzdem » en position 1 → verbe en deuxième.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l6-e7', prompt: 'Which connector sends the verb to the END?', promptFr: 'Quel connecteur envoie le verbe à la FIN ?', options: ['deshalb', 'trotzdem', 'obwohl'], answer: 2, explain: '“obwohl” is subordinating → verb at the end.', explainFr: '« obwohl » est subordonnant → verbe à la fin.', hint: 'The concession one is subordinating.', hintFr: 'Celui de concession est subordonnant.' } },

    // ───────────── 2 · Result and purpose ─────────────
    { kind: 'chapter', title: 'Folge und Ziel: deshalb und damit', titleFr: 'Conséquence et but : deshalb et damit',
      blurb: 'What happens because of something, and what you do it for.', blurbFr: 'Ce qui arrive à cause de quelque chose, et le but pour lequel on agit.' },

    { kind: 'wordgroup', title: 'Wörter für Gründe und Ziele', titleFr: 'Mots pour les causes et les buts',
      note: 'These nouns and the verb help you talk about why things happen.', noteFr: 'Ces noms et ce verbe t’aident à expliquer pourquoi les choses arrivent.',
      items: [
        word('b1l6-ursache', 'die Ursache', 'die', 'the cause', 'la cause', ['UR', 'sa', 'che'], 'dee OOR-zah-khe', g('Die Ursache ist unklar.', 'The cause is unclear.', 'La cause n’est pas claire.')),
        word('b1l6-ergebnis', 'das Ergebnis', 'das', 'the result', 'le résultat', ['er', 'GEB', 'nis'], 'dahs air-GAYP-nis', g('Das Ergebnis ist gut.', 'The result is good.', 'Le résultat est bon.')),
        word('b1l6-zweck', 'der Zweck', 'der', 'the purpose', 'le but', ['ZWECK'], 'dair TSVEK', g('Was ist der Zweck?', 'What is the purpose?', 'Quel est le but ?')),
        word('b1l6-erklaeren', 'erklären', null, 'to explain', 'expliquer', ['er', 'KLÄ', 'ren'], 'air-KLAY-ren', g('Kannst du das erklären?', 'Can you explain that?', 'Peux-tu expliquer cela ?')),
      ] },

    { kind: 'grammar', note: {
      id: 'b1l6-damit-note', title: 'deshalb and damit: result and purpose', titleFr: 'deshalb et damit : conséquence et but',
      lead: 'deshalb says what follows from something. damit says what you do something for.',
      leadFr: 'deshalb dit ce qui découle de quelque chose. damit dit dans quel but on fait quelque chose.',
      explanationMd: '**deshalb** (therefore) gives a **result**. Like **trotzdem** it is an adverb: **position 1, verb second**.\n\n**damit** (so that) gives a **purpose**. It is a subordinating conjunction: the **verb goes to the end**. Use **damit** when the two clauses have **different** subjects (with the same subject, B1 lesson 7 shows **um … zu**).',
      explanationMdFr: '**deshalb** (c’est pourquoi) donne une **conséquence**. Comme **trotzdem**, c’est un adverbe : **position 1, verbe en deuxième**.\n\n**damit** (pour que) donne un **but**. C’est une conjonction de subordination : le **verbe va à la fin**. Utilise **damit** quand les deux propositions ont des sujets **différents** (avec le même sujet, la leçon B1 7 montre **um … zu**).',
      tables: [{
        title: 'deshalb vs damit', titleFr: 'deshalb ou damit',
        headers: ['Word', 'Says', 'Verb', 'Example'], headersFr: ['Mot', 'Exprime', 'Verbe', 'Exemple'],
        rows: [['deshalb', 'result', 'second', 'Ich bin müde, deshalb bleibe ich zu Hause.'], ['damit', 'purpose', 'at the end', 'Ich spare Geld, damit ich reisen kann.']],
        rowsFr: [['deshalb', 'conséquence', 'en deuxième', 'Ich bin müde, deshalb bleibe ich zu Hause.'], ['damit', 'but', 'à la fin', 'Ich spare Geld, damit ich reisen kann.']],
        highlightCol: 0,
      }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'müde,', role: 'other' }, { text: 'deshalb', role: 'connector' }, { text: 'bleibe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'zu Hause.', role: 'place' }], en: 'I’m tired, therefore I stay at home. (deshalb is position 1, the verb is second)', fr: 'Je suis fatigué, c’est pourquoi je reste à la maison. (deshalb en position 1, verbe en deuxième)' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'spare', role: 'verb' }, { text: 'Geld,', role: 'accusative' }, { text: 'damit', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'reisen', role: 'other' }, { text: 'kann.', role: 'verb' }], en: 'I save money so that I can travel. (the verb kann is last)', fr: 'J’économise pour pouvoir voyager. (le verbe kann est en dernier)' },
      ],
      contrast: {
        a: { label: 'deshalb', labelFr: 'deshalb', note: 'the result comes second; verb SECOND', noteFr: 'la conséquence vient ensuite ; verbe EN DEUXIÈME',
          examples: [g('Ich habe keine Zeit, deshalb komme ich nicht.', 'I have no time, therefore I’m not coming.', 'Je n’ai pas le temps, c’est pourquoi je ne viens pas.'), g('Es regnet, deshalb bleibe ich zu Hause.', 'It’s raining, therefore I stay home.', 'Il pleut, c’est pourquoi je reste à la maison.')] },
        b: { label: 'damit', labelFr: 'damit', note: 'the purpose; verb to the END', noteFr: 'le but ; verbe à la FIN',
          examples: [g('Ich erkläre es langsam, damit du es verstehst.', 'I explain it slowly so that you understand.', 'J’explique lentement pour que tu comprennes.'), g('Sie spricht langsam, damit alle sie verstehen.', 'She speaks slowly so that everyone understands her.', 'Elle parle lentement pour que tout le monde la comprenne.')] },
      },
      examples: [
        g('Ich habe keine Zeit, deshalb komme ich nicht.', 'I have no time, therefore I’m not coming.', 'Je n’ai pas le temps, c’est pourquoi je ne viens pas.'),
        g('Es regnet, deshalb bleibe ich zu Hause.', 'It’s raining, therefore I stay home.', 'Il pleut, c’est pourquoi je reste à la maison.'),
        g('Ich spare Geld, damit ich reisen kann.', 'I save money so that I can travel.', 'J’économise pour pouvoir voyager.'),
        g('Ich erkläre es langsam, damit du es verstehst.', 'I explain it slowly so that you understand.', 'J’explique lentement pour que tu comprennes.'),
        g('Sie spricht langsam, damit alle sie verstehen.', 'She speaks slowly so that everyone understands her.', 'Elle parle lentement pour que tout le monde la comprenne.'),
        g('Ich lerne Deutsch, damit ich in Wien arbeiten kann.', 'I learn German so that I can work in Vienna.', 'J’apprends l’allemand pour pouvoir travailler à Vienne.'),
      ],
      mistakes: [
        { wrong: 'Ich spare Geld, damit ich kann reisen.', right: 'Ich spare Geld, damit ich reisen kann.', why: 'damit sends the conjugated verb to the very end of its clause.', whyFr: 'damit envoie le verbe conjugué tout à la fin de sa proposition.' },
        { wrong: 'Ich bin müde, deshalb ich bleibe zu Hause.', right: 'Ich bin müde, deshalb bleibe ich zu Hause.', why: 'deshalb takes position 1, so the verb must come right after it.', whyFr: 'deshalb occupe la position 1, donc le verbe doit venir juste après.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l6-e3', prompt: 'Ich spare, ___ ich reisen kann. (so that)', promptFr: 'Ich spare, ___ ich reisen kann. (pour que)', answer: 'damit', hint: 'purpose conjunction', hintFr: 'conjonction de but' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l6-e2', prompt: 'Which sentence has correct word order?', promptFr: 'Quelle phrase a le bon ordre des mots ?', options: ['Deshalb ich bleibe zu Hause.', 'Deshalb bleibe ich zu Hause.', 'Deshalb zu Hause ich bleibe.'], answer: 1, explain: '“deshalb” is position 1, so the verb comes second.', explainFr: '« deshalb » est en position 1, donc le verbe vient en deuxième.', hint: 'Verb second after “deshalb”.', hintFr: 'Verbe en deuxième après « deshalb ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l6-e9', tokens: ['verstehst', 'du', 'es', 'damit'], answer: ['damit', 'du', 'es', 'verstehst'], hint: 'damit-clause: verb at the end.', hintFr: 'subordonnée damit : verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l6-e5', prompt: 'Listen. Why is Ben staying home?', promptFr: 'Écoute. Pourquoi Ben reste-t-il à la maison ?', audio: { ttsText: 'Ich bin sehr müde, deshalb bleibe ich heute zu Hause.' }, options: ['Because he is tired', 'Because it rains', 'Because he has no money'], optionsFr: ['Parce qu’il est fatigué', 'Parce qu’il pleut', 'Parce qu’il n’a pas d’argent'], answer: 0, hint: 'Listen before “deshalb”.', hintFr: 'Écoute avant « deshalb ».' } },

    { kind: 'pronunciation', focus: 'Stress: obWOHL and daMIT stress the second syllable; DEShalb and TROTZdem the first', focusFr: 'Accent : obWOHL et daMIT accentuent la deuxième syllabe ; DEShalb et TROTZdem la première', items: [
      { id: 'b1l6-obwohl-pron', german: 'obwohl', english: 'although', french: 'bien que', gender: null, syllables: ['ob', 'WOHL'], pronunciation: 'op-VOHL', example: { de: 'Obwohl es spät ist.', en: 'Although it is late.', fr: 'Bien qu’il soit tard.' } },
      { id: 'b1l6-damit-pron', german: 'damit', english: 'so that', french: 'pour que', gender: null, syllables: ['da', 'MIT'], pronunciation: 'dah-MIT', example: { de: 'Damit du es weißt.', en: 'So that you know.', fr: 'Pour que tu le saches.' } },
    ] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l6-e11', prompt: 'Er ist krank. ___ geht er zur Arbeit.', promptFr: 'Er ist krank. ___ geht er zur Arbeit.', options: ['Obwohl', 'Trotzdem', 'Damit'], answer: 1, explain: 'A new sentence starts, and the verb “geht” is second: that is “trotzdem”.', explainFr: 'Une nouvelle phrase commence et le verbe « geht » est en deuxième : c’est « trotzdem ».', hint: 'The verb stands right after the gap.', hintFr: 'Le verbe se trouve juste après le blanc.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l6-e12', prompt: 'Ich lerne Deutsch, ___ ich in Wien arbeiten kann. (so that)', promptFr: 'Ich lerne Deutsch, ___ ich in Wien arbeiten kann. (pour que)', answer: 'damit', hint: 'purpose, verb to the end', hintFr: 'but, verbe à la fin' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l6-e4', pairs: [{ de: 'obwohl', en: 'although', fr: 'bien que' }, { de: 'deshalb', en: 'therefore', fr: 'c’est pourquoi' }, { de: 'damit', en: 'so that', fr: 'pour que' }], hint: 'Match each connector to its meaning.', hintFr: 'Associe chaque connecteur à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l6-e10', prompt: 'Listen. Why does Ana learn German?', promptFr: 'Écoute. Pourquoi Ana apprend-elle l’allemand ?', audio: { ttsText: 'Ich lerne Deutsch, damit ich in Deutschland studieren kann.' }, options: ['So she can study in Germany', 'Because it is easy', 'Although it is hard'], optionsFr: ['Pour pouvoir étudier en Allemagne', 'Parce que c’est facile', 'Bien que ce soit difficile'], answer: 0, hint: 'Listen after “damit”.', hintFr: 'Écoute après « damit ».' } },

    { kind: 'wrapup',
      summary: 'You can now connect ideas: **obwohl** (although) and **damit** (so that) send the verb to the **end**, while **deshalb** (therefore) and **trotzdem** (nevertheless) sit in position 1 with the verb **second**. 🎉',
      summaryFr: 'Tu sais maintenant relier les idées : **obwohl** (bien que) et **damit** (pour que) envoient le verbe à la **fin**, tandis que **deshalb** (c’est pourquoi) et **trotzdem** (malgré tout) sont en position 1 avec le verbe **en deuxième**. 🎉',
      card: { title: 'Connectors on one page', titleFr: 'Les connecteurs en une page', sections: [
        { heading: 'Verb at the END', headingFr: 'Verbe à la FIN', rows: [
          g('Obwohl es regnet, gehe ich raus.', 'Although it rains, I go out.', 'Bien qu’il pleuve, je sors.'),
          g('Ich spare, damit ich reisen kann.', 'I save so that I can travel.', 'J’économise pour pouvoir voyager.'),
        ] },
        { heading: 'Verb SECOND', headingFr: 'Verbe EN DEUXIÈME', rows: [
          g('Es regnet. Trotzdem gehe ich raus.', 'It rains. Nevertheless I go out.', 'Il pleut. Malgré tout, je sors.'),
          g('Ich bin müde, deshalb bleibe ich zu Hause.', 'I’m tired, so I stay home.', 'Je suis fatigué, alors je reste à la maison.'),
        ] },
        { heading: 'Remember', headingFr: 'À retenir', rows: [
          g('obwohl / damit → Verb ans Ende', 'obwohl / damit → verb to the end', 'obwohl / damit → verbe à la fin'),
          g('trotzdem / deshalb → Verb an Position 2', 'trotzdem / deshalb → verb in position 2', 'trotzdem / deshalb → verbe en position 2'),
        ] },
      ] } },
  ],
};

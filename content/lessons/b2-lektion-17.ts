import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion17: Lesson = {
  id: 'b2-l17', level: 'B2', module: 6, number: 17,
  title: { de: 'Medien und Gesellschaft', en: 'Media and society', fr: 'Médias et société' },
  theme: 'News, social media, fake news and critical reading: describing trends, sources, and opinions about the media', themeFr: 'Actualités, réseaux sociaux, fausses informations et lecture critique : décrire des tendances, des sources et des opinions sur les médias',
  goals: ['Talk about news, social media and sources', 'Evaluate whether information is reliable', 'Describe trends and effects of the media', 'Use "je … desto" and "immer mehr" for developments'], goalsFr: ['Parler d’actualités, de réseaux sociaux et de sources', 'Évaluer la fiabilité d’une information', 'Décrire tendances et effets des médias', 'Utiliser « je … desto » et « immer mehr » pour les évolutions'],
  canDo: g('Ich kann über Medien sprechen, Quellen kritisch bewerten und Entwicklungen mit je … desto beschreiben.', 'I can talk about the media, evaluate sources critically and describe developments with je … desto.', 'Je sais parler des médias, évaluer les sources de façon critique et décrire des évolutions avec je … desto.'),
  steps: [
    { kind: 'intro', title: 'Medien und Gesellschaft 📰', titleFr: 'Médias et société 📰',
      scene: 'A seminar on fake news: how reliable is what we read, and how are habits changing?', sceneFr: 'Un séminaire sur les fausses nouvelles : quelle est la fiabilité de ce que nous lisons, et comment les habitudes changent-elles ?',
      goals: ['Talk about news, sources and credibility', 'Question information critically', 'Describe trends with immer mehr and je … desto'],
      goalsFr: ['Parler des nouvelles, des sources et de la crédibilité', 'Remettre l’information en question de façon critique', 'Décrire des tendances avec immer mehr et je … desto'] },

    // ───────────── 1 · Sources ─────────────
    { kind: 'chapter', title: 'Quellen und Glaubwürdigkeit', titleFr: 'Sources et crédibilité', blurb: 'Is it reliable? Check the source.', blurbFr: 'Est-ce fiable ? Vérifie la source.' },

    { kind: 'situation', title: 'Im Seminar', titleFr: 'Au séminaire',
      setting: 'A media seminar at university.', settingFr: 'Un séminaire sur les médias à l’université.',
      lines: [
        line('Dozentin', 'Ich lese jeden Morgen die Nachrichten. Die Quelle der Information ist unklar. Diese Zeitung gilt als glaubwürdig.', 'I read the news every morning. The source of the information is unclear. This newspaper is considered credible.', 'Je lis les nouvelles chaque matin. La source de l’information est floue. Ce journal est considéré comme crédible.'),
        line('Student', 'Falschmeldungen verbreiten sich schnell. Die Berichterstattung war einseitig. Man sollte Informationen kritisch hinterfragen.', 'False reports spread fast. The coverage was one-sided. One should question information critically.', 'Les fausses nouvelles se propagent vite. Le traitement médiatique était partial. On devrait remettre les informations en question de façon critique.'),
        line('Dozentin', 'Man sollte jede Information kritisch hinterfragen und die Quelle prüfen.', 'One should question every piece of information critically and check the source.', 'On devrait remettre chaque information en question de façon critique et vérifier la source.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l17-e11', prompt: 'What does the lecturer recommend?', promptFr: 'Que recommande la professeure ?', options: ['Check the source', 'Share everything', 'Stop reading news'], optionsFr: ['Vérifier la source', 'Tout partager', 'Arrêter de lire les nouvelles'], answer: 0, explain: 'She says: “… und die Quelle prüfen.”', explainFr: 'Elle dit : « … und die Quelle prüfen. »', hint: 'Look for “Quelle”.', hintFr: 'Cherche « Quelle ».' } },

    { kind: 'wordgroup', title: 'Nachrichten prüfen', titleFr: 'Vérifier les nouvelles',
      items: [{ id: 'b2l17-nachrichten', german: 'die Nachrichten', english: 'the news', french: 'les actualités', gender: 'die', syllables: ['NACH', 'rich', 'ten'], pronunciation: 'dee NAKH-rikh-ten', example: { de: 'Ich lese jeden Morgen die Nachrichten.', en: 'I read the news every morning.', fr: 'Je lis les actualités chaque matin.' } }, { id: 'b2l17-quelle', german: 'die Quelle', english: 'the source', french: 'la source', gender: 'die', syllables: ['QUEL', 'le'], pronunciation: 'dee KVEL-le', example: { de: 'Die Quelle der Information ist unklar.', en: 'The source of the information is unclear.', fr: 'La source de l’information n’est pas claire.' } }, { id: 'b2l17-glaubwuerdig', german: 'glaubwürdig', english: 'credible', french: 'crédible', gender: null, syllables: ['GLAUB', 'wür', 'dig'], pronunciation: 'GLOWP-vuer-dikh', example: { de: 'Diese Zeitung gilt als glaubwürdig.', en: 'This newspaper is considered credible.', fr: 'Ce journal est considéré comme crédible.' } }, { id: 'b2l17-falschmeldung', german: 'die Falschmeldung', english: 'the false report / fake news', french: 'la fausse information', gender: 'die', syllables: ['FALSCH', 'mel', 'dung'], pronunciation: 'dee FALSH-mel-doong', example: { de: 'Falschmeldungen verbreiten sich schnell.', en: 'Fake news spreads quickly.', fr: 'Les fausses informations se répandent vite.' } }, { id: 'b2l17-hinterfragen', german: 'hinterfragen', english: 'to question critically', french: 'remettre en question', gender: null, syllables: ['hin', 'ter', 'FRA', 'gen'], pronunciation: 'hin-ter-FRAH-gen', example: { de: 'Man sollte Informationen kritisch hinterfragen.', en: 'One should critically question information.', fr: 'On devrait remettre l’information en question.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l17-e6', pairs: [{ de: 'die Quelle', en: 'source', fr: 'source' }, { de: 'verbreiten', en: 'to spread', fr: 'diffuser' }, { de: 'beeinflussen', en: 'to influence', fr: 'influencer' }, { de: 'hinterfragen', en: 'to question', fr: 'remettre en question' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l17-quellen', title: 'Evaluating information', titleFr: 'Évaluer l’information',
      lead: 'gilt als + adjective, laut + dative/genitive, angeblich, man sollte … hinterfragen, es heißt, dass … — phrases that keep distance.',
      leadFr: 'gilt als + adjectif, laut + datif/génitif, angeblich, man sollte … hinterfragen, es heißt, dass … — des tournures qui gardent la distance.',
      explanationMd: 'To **judge information** you need phrases that **keep distance**. **gelten als + Adjektiv / Nomen** — “is considered”: **Diese Zeitung gilt als glaubwürdig.** **laut** + Dativ / Genitiv — “according to”: **Laut der Quelle …** **angeblich** — “allegedly”: **Er hat angeblich nichts gewusst.** **es heißt, dass …** — “it is said that”: **Es heißt, dass die Zahlen falsch sind.** **man sollte … hinterfragen / prüfen** — advice: **Man sollte Informationen kritisch hinterfragen.** **einseitig / glaubwürdig / unklar** — adjectives to **evaluate**: **Die Berichterstattung war einseitig.**',
      explanationMdFr: 'Pour **juger l’information**, il te faut des tournures qui **gardent la distance**. **gelten als + adjectif / nom** — « est considéré comme » : **Diese Zeitung gilt als glaubwürdig.** **laut** + datif / génitif — « selon » : **Laut der Quelle …** **angeblich** — « soi-disant » : **Er hat angeblich nichts gewusst.** **es heißt, dass …** — « on dit que » : **Es heißt, dass die Zahlen falsch sind.** **man sollte … hinterfragen / prüfen** — conseil : **Man sollte Informationen kritisch hinterfragen.** **einseitig / glaubwürdig / unklar** — adjectifs pour **évaluer** : **Die Berichterstattung war einseitig.**',
      tables: [{ title: 'Critical phrases', titleFr: 'Tournures critiques', headers: ['Phrase', 'Meaning', 'Example'], headersFr: ['Tournure', 'Sens', 'Exemple'],
        rows: [['gilt als …', 'is considered', 'Diese Zeitung gilt als glaubwürdig.'], ['laut + Dat./Gen.', 'according to', 'Laut der Quelle ist es falsch.'], ['angeblich', 'allegedly', 'Er hat angeblich nichts gewusst.'], ['es heißt, dass …', 'it is said that', 'Es heißt, dass die Zahlen falsch sind.'], ['man sollte … hinterfragen', 'advice', 'Man sollte kritisch hinterfragen.']],
        rowsFr: [['gilt als …', 'est considéré comme', 'Diese Zeitung gilt als glaubwürdig.'], ['laut + dat./gén.', 'selon', 'Laut der Quelle ist es falsch.'], ['angeblich', 'soi-disant', 'Er hat angeblich nichts gewusst.'], ['es heißt, dass …', 'on dit que', 'Es heißt, dass die Zahlen falsch sind.'], ['man sollte … hinterfragen', 'conseil', 'Man sollte kritisch hinterfragen.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Diese Zeitung', role: 'subject' }, { text: 'gilt', role: 'verb' }, { text: 'als glaubwürdig.', role: 'other' }], en: 'This newspaper is considered credible.', fr: 'Ce journal est considéré comme crédible.' },
        { parts: [{ text: 'Man', role: 'subject' }, { text: 'sollte', role: 'verb' }, { text: 'Informationen', role: 'accusative' }, { text: 'kritisch', role: 'other' }, { text: 'hinterfragen.', role: 'verb' }], en: 'One should question information critically.', fr: 'On devrait remettre les informations en question.' },
      ],
      contrast: {
        a: { label: 'Claim as a fact', labelFr: 'Affirmation comme fait', note: 'no distance', noteFr: 'sans distance', examples: [g('Er hat nichts gewusst.', 'He knew nothing.', 'Il ne savait rien.'), g('Die Zahlen sind falsch.', 'The figures are wrong.', 'Les chiffres sont faux.')] },
        b: { label: 'Claim with distance', labelFr: 'Affirmation avec distance', note: 'angeblich / es heißt', noteFr: 'angeblich / es heißt', examples: [g('Er hat angeblich nichts gewusst.', 'He allegedly knew nothing.', 'Il ne savait soi-disant rien.'), g('Es heißt, dass die Zahlen falsch sind.', 'It is said that the figures are wrong.', 'On dit que les chiffres sont faux.')] },
      },
      examples: [
        g('Diese Zeitung gilt als glaubwürdig.', 'This newspaper is considered credible.', 'Ce journal est considéré comme crédible.'),
        g('Man sollte Informationen kritisch hinterfragen.', 'One should question information critically.', 'On devrait remettre les informations en question de façon critique.'),
        g('Falschmeldungen verbreiten sich schnell.', 'False reports spread fast.', 'Les fausses nouvelles se propagent vite.'),
        g('Die Berichterstattung war einseitig.', 'The coverage was one-sided.', 'Le traitement médiatique était partial.'),
        g('Die Quelle der Information ist unklar.', 'The source of the information is unclear.', 'La source de l’information est floue.'),
        g('Er hat angeblich nichts gewusst.', 'He allegedly knew nothing.', 'Il ne savait soi-disant rien.'),
      ],
      mistakes: [
        { wrong: 'Diese Zeitung gilt glaubwürdig.', right: 'Diese Zeitung gilt als glaubwürdig.', why: 'gelten needs als before the adjective.', whyFr: 'gelten demande als devant l’adjectif.' },
        { wrong: 'Laut der Quelle ist es wahr, dass.', right: 'Laut der Quelle ist es wahr.', why: 'laut introduces a noun phrase, not a dass-clause.', whyFr: 'laut introduit un groupe nominal, pas une proposition en dass.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l17-e4', prompt: 'Which word means "credible"?', promptFr: 'Quel mot signifie « crédible » ?', options: ['glaubwürdig', 'einseitig', 'abhängig'], answer: 0, explain: 'glaubwürdig = credible / trustworthy.', explainFr: 'glaubwürdig = crédible / digne de confiance.', hint: 'Glaube = belief', hintFr: 'Glaube = croyance' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l17-e8', prompt: 'Man sollte Informationen kritisch ___ . (question)', answer: 'hinterfragen', hint: 'hinterfragen', hintFr: 'hinterfragen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l17-e9', prompt: '"Die Berichterstattung war einseitig" means …', promptFr: '« Die Berichterstattung war einseitig » signifie …', options: ['The coverage was one-sided', 'The coverage was excellent', 'There was no coverage'], answer: 0, explain: 'einseitig = one-sided.', explainFr: 'einseitig = partial.', hint: 'einseitig', hintFr: 'einseitig' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l17-e10', prompt: 'Listen. What should you do?', promptFr: 'Écoute. Que faut-il faire ?', audio: { ttsText: 'Man sollte jede Information kritisch hinterfragen und die Quelle prüfen.' }, options: ['Question information and check the source', 'Believe everything', 'Delete the news app'], optionsFr: ['Remettre en question et vérifier la source', 'Tout croire', 'Supprimer l’appli'], answer: 0, hint: 'Quelle prüfen = check the source.', hintFr: 'Quelle prüfen = vérifier la source.' } },

    // ───────────── 2 · Developments ─────────────
    { kind: 'chapter', title: 'Entwicklungen beschreiben', titleFr: 'Décrire des évolutions', blurb: 'immer mehr · je … desto.', blurbFr: 'de plus en plus · plus … plus.' },

    { kind: 'situation', title: 'Der Trend', titleFr: 'La tendance',
      setting: 'The seminar looks at figures.', settingFr: 'Le séminaire examine des chiffres.',
      lines: [
        line('Dozentin', 'Es gibt immer mehr Falschmeldungen. Die Medien werden immer wichtiger. Zunehmend informieren sich Menschen online.', 'There are more and more false reports. The media are becoming more and more important. Increasingly people inform themselves online.', 'Il y a de plus en plus de fausses nouvelles. Les médias deviennent de plus en plus importants. De plus en plus de gens s’informent en ligne.'),
        line('Student', 'Je mehr man liest, desto besser versteht man die Welt. Je mehr Zeit sie online verbringen, desto weniger lesen sie Bücher. Immer mehr Menschen informieren sich über soziale Medien.', 'The more you read, the better you understand the world. The more time they spend online, the fewer books they read. More and more people get information via social media.', 'Plus on lit, mieux on comprend le monde. Plus ils passent de temps en ligne, moins ils lisent de livres. De plus en plus de gens s’informent via les réseaux sociaux.'),
        line('Dozentin', 'Medien beeinflussen unsere Meinung. Die Öffentlichkeit hat ein Recht auf Information. Die Meinungsfreiheit ist ein Grundrecht. Viele sind abhängig von ihrem Smartphone.', 'The media influence our opinion. The public has a right to information. Freedom of speech is a fundamental right. Many are dependent on their smartphone.', 'Les médias influencent notre opinion. Le public a droit à l’information. La liberté d’expression est un droit fondamental. Beaucoup dépendent de leur smartphone.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Wirkung der Medien', titleFr: 'L’effet des médias',
      items: [{ id: 'b2l17-verbreiten', german: 'verbreiten', english: 'to spread', french: 'diffuser', gender: null, syllables: ['ver', 'BREI', 'ten'], pronunciation: 'fer-BRY-ten', example: { de: 'Soziale Medien verbreiten Nachrichten sofort.', en: 'Social media spread news instantly.', fr: 'Les réseaux sociaux diffusent les nouvelles instantanément.' } }, { id: 'b2l17-beeinflussen', german: 'beeinflussen', english: 'to influence', french: 'influencer', gender: null, syllables: ['be', 'EIN', 'flus', 'sen'], pronunciation: 'be-INE-floo-sen', example: { de: 'Medien beeinflussen unsere Meinung.', en: 'Media influence our opinion.', fr: 'Les médias influencent notre opinion.' } }, { id: 'b2l17-oeffentlichkeit', german: 'die Öffentlichkeit', english: 'the public', french: 'le public', gender: 'die', syllables: ['die', 'Ö', 'ffent', 'lich', 'keit'], pronunciation: 'dee OEF-fent-likh-kite', example: { de: 'Die Öffentlichkeit hat ein Recht auf Information.', en: 'The public has a right to information.', fr: 'Le public a droit à l’information.' } }, { id: 'b2l17-meinungsfreiheit', german: 'die Meinungsfreiheit', english: 'freedom of speech', french: 'la liberté d’expression', gender: 'die', syllables: ['MEI', 'nungs', 'frei', 'heit'], pronunciation: 'dee MY-noongs-fry-hite', example: { de: 'Die Meinungsfreiheit ist ein Grundrecht.', en: 'Freedom of speech is a basic right.', fr: 'La liberté d’expression est un droit fondamental.' } }, { id: 'b2l17-abhaengig', german: 'abhängig von', english: 'dependent on', french: 'dépendant de', gender: null, syllables: ['AB', 'hän', 'gig', 'von'], pronunciation: 'AHP-hen-gikh fon', example: { de: 'Viele sind abhängig von ihrem Smartphone.', en: 'Many are dependent on their smartphone.', fr: 'Beaucoup sont dépendants de leur smartphone.' } }] },

    { kind: 'wordgroup', title: 'Mehr und mehr', titleFr: 'De plus en plus',
      items: [{ id: 'b2l17-zunehmend', german: 'zunehmend', english: 'increasingly', french: 'de plus en plus', gender: null, syllables: ['ZU', 'neh', 'mend'], pronunciation: 'TSOO-nay-ment', example: { de: 'Zunehmend informieren sich Menschen online.', en: 'Increasingly people inform themselves online.', fr: 'De plus en plus de gens s’informent en ligne.' } }, { id: 'b2l17-berichterstattung', german: 'die Berichterstattung', english: 'the coverage / reporting', french: 'la couverture médiatique', gender: 'die', syllables: ['be', 'RICHT', 'er', 'stat', 'tung'], pronunciation: 'dee be-RIKHT-er-shtah-toong', example: { de: 'Die Berichterstattung war einseitig.', en: 'The coverage was one-sided.', fr: 'La couverture était partiale.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l17-entwicklung', title: 'je … desto and immer + comparative', titleFr: 'je … desto et immer + comparatif',
      lead: 'immer + comparative = more and more. je + comparative (verb last), desto + comparative (verb 2nd) = the more …, the more ….',
      leadFr: 'immer + comparatif = de plus en plus. je + comparatif (verbe à la fin), desto + comparatif (verbe en 2e) = plus …, plus ….',
      explanationMd: '**immer + comparative** = “more and more”: **Es gibt immer mehr Falschmeldungen. Die Medien werden immer wichtiger.** **je … desto / umso + comparative** = “the more …, the more …”: **Je mehr man liest, desto besser versteht man.** The **je-clause** sends the **verb to the end**; after **desto** the **verb is in position 2**. **zunehmend / immer häufiger / immer öfter** = increasingly. **abnehmen / sinken / steigen / zunehmen** = to decrease / drop / rise / increase: **Die Zahl der Falschmeldungen nimmt zu.** Both parts need a **comparative**: **je mehr … desto weniger**.',
      explanationMdFr: '**immer + comparatif** = « de plus en plus » : **Es gibt immer mehr Falschmeldungen. Die Medien werden immer wichtiger.** **je … desto / umso + comparatif** = « plus … plus … » : **Je mehr man liest, desto besser versteht man.** La **proposition en je** envoie le **verbe à la fin** ; après **desto**, le **verbe est en position 2**. **zunehmend / immer häufiger / immer öfter** = de plus en plus. **abnehmen / sinken / steigen / zunehmen** = diminuer / baisser / monter / augmenter : **Die Zahl der Falschmeldungen nimmt zu.** Les deux parties demandent un **comparatif** : **je mehr … desto weniger**.',
      tables: [{ title: 'Developments', titleFr: 'Évolutions', headers: ['Structure', 'Example'], headersFr: ['Structure', 'Exemple'],
        rows: [['immer + comparative', 'Es gibt immer mehr Falschmeldungen.'], ['immer + comparative', 'Die Medien werden immer wichtiger.'], ['je + comp., … desto + comp.', 'Je mehr man liest, desto besser versteht man.'], ['je + comp., … desto + comp.', 'Je mehr Zeit sie online verbringen, desto weniger lesen sie Bücher.'], ['zunehmen / steigen / sinken', 'Die Zahl der Falschmeldungen nimmt zu.']],
        rowsFr: [['immer + comparatif', 'Es gibt immer mehr Falschmeldungen.'], ['immer + comparatif', 'Die Medien werden immer wichtiger.'], ['je + comp., … desto + comp.', 'Je mehr man liest, desto besser versteht man.'], ['je + comp., … desto + comp.', 'Je mehr Zeit sie online verbringen, desto weniger lesen sie Bücher.'], ['zunehmen / steigen / sinken', 'Die Zahl der Falschmeldungen nimmt zu.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Je mehr', role: 'connector' }, { text: 'man', role: 'subject' }, { text: 'liest,', role: 'verb' }, { text: 'desto besser', role: 'connector' }, { text: 'versteht', role: 'verb' }, { text: 'man', role: 'subject' }, { text: 'die Welt.', role: 'accusative' }], en: 'The more you read, the better you understand the world.', fr: 'Plus on lit, mieux on comprend le monde.' },
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'gibt', role: 'verb' }, { text: 'immer mehr', role: 'connector' }, { text: 'Falschmeldungen.', role: 'accusative' }], en: 'There are more and more false reports.', fr: 'Il y a de plus en plus de fausses nouvelles.' },
      ],
      contrast: {
        a: { label: 'immer + comparative', labelFr: 'immer + comparatif', note: 'steady increase', noteFr: 'hausse continue', examples: [g('Die Medien werden immer wichtiger.', 'The media are becoming more and more important.', 'Les médias deviennent de plus en plus importants.'), g('Immer mehr Menschen informieren sich online.', 'More and more people inform themselves online.', 'De plus en plus de gens s’informent en ligne.')] },
        b: { label: 'je … desto', labelFr: 'je … desto', note: 'two things grow together', noteFr: 'deux choses évoluent ensemble', examples: [g('Je mehr man liest, desto besser versteht man die Welt.', 'The more you read, the better you understand the world.', 'Plus on lit, mieux on comprend le monde.'), g('Je mehr Zeit sie online verbringen, desto weniger lesen sie Bücher.', 'The more time they spend online, the fewer books they read.', 'Plus ils passent de temps en ligne, moins ils lisent de livres.')] },
      },
      examples: [
        g('Je mehr man liest, desto besser versteht man die Welt.', 'The more you read, the better you understand the world.', 'Plus on lit, mieux on comprend le monde.'),
        g('Die Zahl der Falschmeldungen nimmt zu.', 'The number of false reports is rising.', 'Le nombre de fausses nouvelles augmente.'),
        g('Es gibt immer mehr Falschmeldungen.', 'There are more and more false reports.', 'Il y a de plus en plus de fausses nouvelles.'),
        g('Immer mehr Menschen informieren sich über soziale Medien.', 'More and more people get information via social media.', 'De plus en plus de gens s’informent via les réseaux sociaux.'),
        g('Zunehmend informieren sich Menschen online.', 'Increasingly people inform themselves online.', 'De plus en plus de gens s’informent en ligne.'),
        g('Je mehr Zeit sie online verbringen, desto weniger lesen sie Bücher.', 'The more time they spend online, the fewer books they read.', 'Plus ils passent de temps en ligne, moins ils lisent de livres.'),
      ],
      mistakes: [
        { wrong: 'Je mehr man liest, desto man versteht besser.', right: 'Je mehr man liest, desto besser versteht man.', why: 'After desto + comparative the verb is in position 2.', whyFr: 'Après desto + comparatif, le verbe est en position 2.' },
        { wrong: 'Je mehr liest man, desto besser versteht man.', right: 'Je mehr man liest, desto besser versteht man.', why: 'The je-clause sends the verb to the end.', whyFr: 'La proposition en je envoie le verbe à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l17-e1', prompt: 'Es gibt ___ mehr Falschmeldungen. (more and more)', answer: 'immer', hint: 'immer + comparative', hintFr: 'immer + comparatif' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l17-e2', prompt: 'Je mehr man liest, ___ besser versteht man. (the better)', answer: 'desto', hint: 'je … desto', hintFr: 'je … desto' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l17-e3', prompt: 'Where does the verb go in the "je"-clause?', promptFr: 'Où va le verbe dans la proposition en « je » ?', options: ['At the end', 'In position 2', 'In position 1'], answer: 0, explain: '"je" introduces a subordinate clause.', explainFr: '« je » introduit une subordonnée.', hint: 'subordinate clause', hintFr: 'subordonnée' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l17-e5', tokens: ['Je', 'desto', 'mehr', 'Anna', 'liest', 'besser', 'versteht', 'sie'], answer: ['Je', 'mehr', 'Anna', 'liest', 'desto', 'besser', 'versteht', 'sie'], hint: 'je-clause (verb last), desto + comparative + verb.', hintFr: 'je-proposition (verbe final), desto + comparatif + verbe.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l17-e7', prompt: 'Listen. What is the trend?', promptFr: 'Écoute. Quelle est la tendance ?', audio: { ttsText: 'Immer mehr Menschen informieren sich über soziale Medien.' }, options: ['More people use social media for news', 'Fewer people read news', 'No one uses the internet'], optionsFr: ['Plus de gens s’informent via les réseaux sociaux', 'Moins de gens lisent les actualités', 'Personne n’utilise Internet'], answer: 0, hint: 'immer mehr = more and more.', hintFr: 'immer mehr = de plus en plus.' } },

    { kind: 'pronunciation', focus: 'The ch in "glaubwürdig", "kritisch" and "Öffentlichkeit" is the soft ich-sound [ç], not the hard ach-sound', focusFr: 'Le ch de « glaubwürdig », « kritisch » et « Öffentlichkeit » est le son doux [ç] (ich), pas le son dur (ach)', items: [{ id: 'b2l17-glaubwuerdig-pron', german: 'glaubwürdig', english: 'credible', french: 'crédible', gender: null, syllables: ['GLAUB', 'wür', 'dig'], pronunciation: 'GLOWP-vuer-dikh', example: { de: 'Das klingt glaubwürdig.', en: 'That sounds credible.', fr: 'Ça paraît crédible.' } }, { id: 'b2l17-oeffentlichkeit-pron', german: 'Öffentlichkeit', english: 'the public', french: 'le public', gender: null, syllables: ['Ö', 'ffent', 'lich', 'keit'], pronunciation: 'OEF-fent-likh-kite', example: { de: 'Die Öffentlichkeit weiß es.', en: 'The public knows.', fr: 'Le public le sait.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **evaluate sources** (**gilt als, laut, angeblich, hinterfragen**) and **describe trends** with **immer mehr** and **je … desto**. 🎉',
      summaryFr: 'Tu sais maintenant **évaluer des sources** (**gilt als, laut, angeblich, hinterfragen**) et **décrire des tendances** avec **immer mehr** et **je … desto**. 🎉',
      card: { title: 'Media on one page', titleFr: 'Les médias en une page', sections: [
        { heading: 'Evaluate', headingFr: 'Évaluer', rows: [g('gilt als · laut · angeblich · es heißt', 'keep distance', 'garder la distance'), g('man sollte … hinterfragen', 'advice', 'conseil')] },
        { heading: 'Trends', headingFr: 'Tendances', rows: [g('immer + comparative', 'immer wichtiger', 'immer wichtiger'), g('je … desto', 'Je mehr …, desto besser …', 'Je mehr …, desto besser …')] },
      ] } },
  ],
};

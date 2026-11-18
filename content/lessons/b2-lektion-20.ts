import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion20: Lesson = {
  id: 'b2-l20', level: 'B2', module: 7, number: 20,
  title: { de: 'Kultur und Literatur', en: 'Culture and literature', fr: 'Culture et littérature' },
  theme: 'Reviewing books, films and exhibitions; describing impressions; "als ob / als wenn" and attitude adverbs (angeblich, offensichtlich, bedauerlicherweise)', themeFr: 'Critiquer livres, films et expositions ; décrire des impressions ; « als ob / als wenn » et adverbes d’attitude (angeblich, offensichtlich, bedauerlicherweise)',
  goals: ['Describe and review a book, film or exhibition', 'Express impressions with "als ob" + Konjunktiv II', 'Use attitude adverbs to show your stance', 'Give a balanced cultural critique'], goalsFr: ['Décrire et critiquer un livre, un film ou une exposition', 'Exprimer des impressions avec « als ob » + Konjunktiv II', 'Employer des adverbes d’attitude pour marquer ta position', 'Rédiger une critique culturelle nuancée'],
  canDo: g('Ich kann Bücher, Filme und Ausstellungen besprechen, Eindrücke mit „als ob“ beschreiben und meine Haltung mit Satzadverbien zeigen.', 'I can review books, films and exhibitions, describe impressions with “als ob” and show my stance with sentence adverbs.', 'Je sais commenter livres, films et expositions, décrire des impressions avec « als ob » et montrer mon attitude avec des adverbes de phrase.'),
  steps: [
    { kind: 'intro', title: 'Kultur und Literatur 🎭', titleFr: 'Culture et littérature 🎭',
      scene: 'You write a review of a novel and an exhibition — and show what you really think.', sceneFr: 'Tu écris la critique d’un roman et d’une exposition — et tu montres ce que tu penses vraiment.',
      goals: ['Describe plot, characters and impressions', 'Use als ob + Konjunktiv II', 'Show your stance with offensichtlich, angeblich, leider, zweifellos'],
      goalsFr: ['Décrire intrigue, personnages et impressions', 'Utiliser als ob + Konjunktiv II', 'Montrer ton attitude avec offensichtlich, angeblich, leider, zweifellos'] },

    // ───────────── 1 · als ob ─────────────
    { kind: 'chapter', title: 'Eindrücke: als ob', titleFr: 'Impressions : als ob', blurb: 'It seems as if …', blurbFr: 'On dirait que …' },

    { kind: 'situation', title: 'Die Rezension', titleFr: 'La critique',
      setting: 'A reviewer talks about a novel and a stage show.', settingFr: 'Une critique parle d’un roman et d’un spectacle.',
      lines: [
        line('Kritikerin', 'Die Handlung spielt im Berlin der Zwanzigerjahre. Die Hauptfigur ist sehr vielschichtig. Es wirkt, als ob die Figur Angst hätte. Die Figur wirkt sympathisch.', 'The plot is set in 1920s Berlin. The main character is very layered. It seems as if the character were afraid. The character seems likeable.', 'L’intrigue se déroule dans le Berlin des années vingt. Le personnage principal est très nuancé. On dirait que le personnage a peur. Le personnage semble sympathique.'),
        line('Kritikerin', 'Der Roman ist von der ersten Seite an fesselnd. Das Bühnenbild war beeindruckend. Das Ende war leider vorhersehbar. Die Ausstellung läuft bis Ende Mai.', 'The novel is gripping from the first page. The stage design was impressive. The ending was unfortunately predictable. The exhibition runs until the end of May.', 'Le roman est captivant dès la première page. Le décor était impressionnant. La fin était malheureusement prévisible. L’exposition dure jusqu’à fin mai.'),
        line('Kritikerin', 'Die Hauptfigur wirkt, als ob sie etwas verbergen würde. Er tut so, als wäre er ein Experte. Er sieht aus, als ob er nicht geschlafen hätte. Ich kann das Buch nur empfehlen.', 'The main character seems as if she were hiding something. He acts as if he were an expert. He looks as if he had not slept. I can only recommend the book.', 'Le personnage principal semble cacher quelque chose. Il fait comme s’il était un expert. Il a l’air de n’avoir pas dormi. Je ne peux que recommander le livre.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l20-e10', prompt: 'Listen. How does the character seem?', promptFr: 'Écoute. Comment le personnage paraît-il ?', audio: { ttsText: 'Die Hauptfigur wirkt, als ob sie etwas verbergen würde.' }, options: ['As if she hides something', 'Very happy', 'Very tired'], optionsFr: ['Comme si elle cachait quelque chose', 'Très heureuse', 'Très fatiguée'], answer: 0, hint: 'verbergen = to hide.', hintFr: 'verbergen = cacher.' } },

    { kind: 'wordgroup', title: 'Handlung und Figuren', titleFr: 'Intrigue et personnages',
      items: [{ id: 'b2l20-handlung', german: 'die Handlung', english: 'the plot', french: 'l’intrigue', gender: 'die', syllables: ['HAND', 'lung'], pronunciation: 'dee HAHND-loong', example: { de: 'Die Handlung spielt im Berlin der Zwanzigerjahre.', en: 'The plot is set in 1920s Berlin.', fr: 'L’intrigue se déroule dans le Berlin des années vingt.' } }, { id: 'b2l20-figur', german: 'die Figur', english: 'the character', french: 'le personnage', gender: 'die', syllables: ['fi', 'GUR'], pronunciation: 'dee fi-GOOR', example: { de: 'Die Hauptfigur ist sehr vielschichtig.', en: 'The main character is very complex.', fr: 'Le personnage principal est très complexe.' } }, { id: 'b2l20-ausstellung', german: 'die Ausstellung', english: 'the exhibition', french: 'l’exposition', gender: 'die', syllables: ['AUS', 'stel', 'lung'], pronunciation: 'dee OWS-shtel-loong', example: { de: 'Die Ausstellung läuft bis Ende Mai.', en: 'The exhibition runs until the end of May.', fr: 'L’exposition dure jusqu’à fin mai.' } }, { id: 'b2l20-rezension', german: 'die Rezension', english: 'the review', french: 'la critique', gender: 'die', syllables: ['die', 're', 'zen', 'SION'], pronunciation: 'dee re-tsen-ZYOHN', example: { de: 'Ich habe eine Rezension zum Film gelesen.', en: 'I read a review of the film.', fr: 'J’ai lu une critique du film.' } }, { id: 'b2l20-empfehlen', german: 'empfehlen', english: 'to recommend', french: 'recommander', gender: null, syllables: ['emp', 'FEH', 'len'], pronunciation: 'emp-FAY-len', example: { de: 'Ich kann das Buch nur empfehlen.', en: 'I can only recommend the book.', fr: 'Je ne peux que recommander ce livre.' } }] },

    { kind: 'wordgroup', title: 'Wie wirkt es?', titleFr: 'Quel effet ça fait ?',
      items: [{ id: 'b2l20-beeindruckend', german: 'beeindruckend', english: 'impressive', french: 'impressionnant', gender: null, syllables: ['be', 'EIN', 'dru', 'ckend'], pronunciation: 'be-INE-droo-kent', example: { de: 'Das Bühnenbild war beeindruckend.', en: 'The stage design was impressive.', fr: 'Le décor était impressionnant.' } }, { id: 'b2l20-fesselnd', german: 'fesselnd', english: 'gripping', french: 'captivant', gender: null, syllables: ['FES', 'selnd'], pronunciation: 'FES-selnt', example: { de: 'Der Roman ist von der ersten Seite an fesselnd.', en: 'The novel is gripping from the first page.', fr: 'Le roman est captivant dès la première page.' } }, { id: 'b2l20-vorhersehbar', german: 'vorhersehbar', english: 'predictable', french: 'prévisible', gender: null, syllables: ['vor', 'HER', 'seh', 'bar'], pronunciation: 'for-HAIR-zay-bar', example: { de: 'Das Ende war leider vorhersehbar.', en: 'The ending was unfortunately predictable.', fr: 'La fin était malheureusement prévisible.' } }, { id: 'b2l20-wirken', german: 'wirken', english: 'to seem / have an effect', french: 'sembler / produire un effet', gender: null, syllables: ['WIR', 'ken'], pronunciation: 'VIR-ken', example: { de: 'Die Figur wirkt sympathisch.', en: 'The character comes across as likeable.', fr: 'Le personnage paraît sympathique.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l20-e6', pairs: [{ de: 'die Handlung', en: 'plot', fr: 'intrigue' }, { de: 'die Figur', en: 'character', fr: 'personnage' }, { de: 'vorhersehbar', en: 'predictable', fr: 'prévisible' }, { de: 'empfehlen', en: 'to recommend', fr: 'recommander' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l20-alsob', title: 'als ob / als wenn + Konjunktiv II', titleFr: 'als ob / als wenn + Konjunktiv II',
      lead: 'als ob + Konjunktiv II (verb last) or als + verb in position 2 describes an impression that may not be true. Past: hätte / wäre + Partizip II.',
      leadFr: 'als ob + Konjunktiv II (verbe à la fin) ou als + verbe en 2e décrit une impression qui n’est peut-être pas vraie. Passé : hätte / wäre + participe II.',
      explanationMd: 'Describe an **impression that may not be true** with **als ob / als wenn** (verb at the **end**, **Konjunktiv II**) or **als** + verb in **position 2**: **Es wirkt, als ob die Figur Angst hätte.** **Es wirkt, als hätte die Figur Angst.** **Er tut so, als wäre nichts geschehen.** For the **past**: **als ob + hätte / wäre + Partizip II**: **Er sieht aus, als ob er nicht geschlafen hätte.** In informal speech you may hear the **indicative** after **als ob**, but **Konjunktiv II** is the standard. Typical frames: **Es wirkt / Es scheint / Er tut so / Er sieht aus, als ob …**',
      explanationMdFr: 'Décris une **impression qui n’est peut-être pas vraie** avec **als ob / als wenn** (verbe à la **fin**, **Konjunktiv II**) ou **als** + verbe en **position 2** : **Es wirkt, als ob die Figur Angst hätte.** **Es wirkt, als hätte die Figur Angst.** **Er tut so, als wäre nichts geschehen.** Pour le **passé** : **als ob + hätte / wäre + participe II** : **Er sieht aus, als ob er nicht geschlafen hätte.** À l’oral informel, on entend aussi l’**indicatif** après **als ob**, mais le **Konjunktiv II** est la norme. Cadres typiques : **Es wirkt / Es scheint / Er tut so / Er sieht aus, als ob …**',
      tables: [{ title: 'als ob patterns', titleFr: 'Schémas avec als ob', headers: ['Pattern', 'Example'], headersFr: ['Schéma', 'Exemple'],
        rows: [['als ob + Konj. II (verb last)', 'Es wirkt, als ob die Figur Angst hätte.'], ['als + Konj. II (verb 2nd)', 'Es wirkt, als hätte die Figur Angst.'], ['als ob + past Konj. II', 'Er sieht aus, als ob er nicht geschlafen hätte.'], ['tun so, als …', 'Er tut so, als wäre er ein Experte.'], ['als ob + würde + inf.', 'Sie wirkt, als ob sie etwas verbergen würde.']],
        rowsFr: [['als ob + Konj. II (verbe à la fin)', 'Es wirkt, als ob die Figur Angst hätte.'], ['als + Konj. II (verbe en 2e)', 'Es wirkt, als hätte die Figur Angst.'], ['als ob + Konj. II passé', 'Er sieht aus, als ob er nicht geschlafen hätte.'], ['tun so, als …', 'Er tut so, als wäre er ein Experte.'], ['als ob + würde + inf.', 'Sie wirkt, als ob sie etwas verbergen würde.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'wirkt,', role: 'verb' }, { text: 'als ob', role: 'connector' }, { text: 'die Figur', role: 'subject' }, { text: 'Angst', role: 'accusative' }, { text: 'hätte.', role: 'verb' }], en: 'It seems as if the character were afraid.', fr: 'On dirait que le personnage a peur.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'tut', role: 'verb' }, { text: 'so,', role: 'other' }, { text: 'als', role: 'connector' }, { text: 'wäre', role: 'verb' }, { text: 'er', role: 'subject' }, { text: 'ein Experte.', role: 'other' }], en: 'He acts as if he were an expert.', fr: 'Il fait comme s’il était un expert.' },
      ],
      contrast: {
        a: { label: 'Real', labelFr: 'Réel', note: 'indicative', noteFr: 'indicatif', examples: [g('Die Figur hat Angst.', 'The character is afraid.', 'Le personnage a peur.'), g('Er ist ein Experte.', 'He is an expert.', 'C’est un expert.')] },
        b: { label: 'Impression (not necessarily true)', labelFr: 'Impression (pas forcément vraie)', note: 'als ob + Konj. II', noteFr: 'als ob + Konj. II', examples: [g('Es wirkt, als ob die Figur Angst hätte.', 'It seems as if the character were afraid.', 'On dirait que le personnage a peur.'), g('Er tut so, als wäre er ein Experte.', 'He acts as if he were an expert.', 'Il fait comme s’il était un expert.')] },
      },
      examples: [
        g('Es wirkt, als ob die Figur Angst hätte.', 'It seems as if the character were afraid.', 'On dirait que le personnage a peur.'),
        g('Er tut so, als wäre er ein Experte.', 'He acts as if he were an expert.', 'Il fait comme s’il était un expert.'),
        g('Er sieht aus, als ob er nicht geschlafen hätte.', 'He looks as if he had not slept.', 'Il a l’air de ne pas avoir dormi.'),
        g('Es wirkt, als ob der Autor selbst dabei gewesen wäre.', 'It seems as if the author had been there himself.', 'On dirait que l’auteur y était lui-même.'),
        g('Die Hauptfigur wirkt, als ob sie etwas verbergen würde.', 'The main character seems as if she were hiding something.', 'Le personnage principal semble cacher quelque chose.'),
        g('Er tut so, als wäre nichts geschehen.', 'He acts as if nothing had happened.', 'Il fait comme si rien ne s’était passé.'),
      ],
      mistakes: [
        { wrong: 'Er tut so, als ob er ist ein Experte.', right: 'Er tut so, als wäre er ein Experte.', why: 'After als ob / als use the Konjunktiv II.', whyFr: 'Après als ob / als, utilise le Konjunktiv II.' },
        { wrong: 'Er tut so, als wäre er ein Experte ist.', right: 'Er tut so, als wäre er ein Experte.', why: 'One verb only — wäre is the finite verb.', whyFr: 'Un seul verbe — wäre est le verbe conjugué.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l20-e1', prompt: 'Es wirkt, als ob die Figur Angst ___ . (haben — Konj. II)', answer: 'hätte', hint: 'als ob + Konjunktiv II', hintFr: 'als ob + Konjunktiv II' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l20-e3', tokens: ['Er', 'als', 'so', 'tut', 'wäre', 'er', 'Experte', 'ein'], answer: ['Er', 'tut', 'so', 'als', 'wäre', 'er', 'ein', 'Experte'], hint: 'tut so, als wäre er …', hintFr: 'tut so, als wäre er …' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l20-e4', prompt: 'Complete: "Er sieht aus, als ob er nicht geschlafen ___ ."', promptFr: 'Complète : « Er sieht aus, als ob er nicht geschlafen ___ . »', options: ['hat', 'hätte', 'wäre'], answer: 1, explain: 'als ob + hätte + Partizip II.', explainFr: 'als ob + hätte + Partizip II.', hint: 'schlafen takes haben', hintFr: 'schlafen prend haben' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l20-e9', prompt: 'Which verb tense after "als ob"?', promptFr: 'Quel temps après « als ob » ?', options: ['Konjunktiv II', 'Imperativ', 'Futur II'], answer: 0, explain: 'als ob + Konjunktiv II (unreal comparison).', explainFr: 'als ob + Konjunktiv II (comparaison irréelle).', hint: 'unreal', hintFr: 'irréel' } },

    // ───────────── 2 · Attitude adverbs ─────────────
    { kind: 'chapter', title: 'Haltung zeigen', titleFr: 'Montrer son attitude', blurb: 'offensichtlich · leider · zweifellos.', blurbFr: 'offensichtlich · leider · zweifellos.' },

    { kind: 'situation', title: 'Das Urteil', titleFr: 'Le verdict',
      setting: 'The reviewer gives her verdict.', settingFr: 'La critique rend son verdict.',
      lines: [
        line('Kritikerin', 'Der Autor hat offensichtlich viel recherchiert. Er hat offensichtlich viel gelesen. Der Film ist angeblich ein Meisterwerk.', 'The author has obviously done a lot of research. He has obviously read a lot. The film is allegedly a masterpiece.', 'L’auteur a manifestement beaucoup recherché. Il a manifestement beaucoup lu. Le film est soi-disant un chef-d’œuvre.'),
        line('Kritikerin', 'Bedauerlicherweise fiel die Lesung aus. Leider war das Ende vorhersehbar. Das Buch ist zweifellos ein Meisterwerk, und ich kann es nur empfehlen.', 'Regrettably the reading was cancelled. Unfortunately the ending was predictable. The book is undoubtedly a masterpiece, and I can only recommend it.', 'Malheureusement la lecture a été annulée. Malheureusement la fin était prévisible. Le livre est sans aucun doute un chef-d’œuvre, et je ne peux que le recommander.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l20-e7', prompt: 'Listen. What is the verdict?', promptFr: 'Écoute. Quel est le verdict ?', audio: { ttsText: 'Das Buch ist zweifellos ein Meisterwerk, und ich kann es nur empfehlen.' }, options: ['Highly recommended', 'Not recommended', 'Mixed review'], optionsFr: ['Fortement recommandé', 'Pas recommandé', 'Critique mitigée'], answer: 0, hint: 'zweifellos, empfehlen', hintFr: 'zweifellos, empfehlen' } },

    { kind: 'wordgroup', title: 'Haltung', titleFr: 'Attitude',
      items: [{ id: 'b2l20-offensichtlich', german: 'offensichtlich', english: 'obviously', french: 'manifestement', gender: null, syllables: ['OF', 'fen', 'sich', 'tlich'], pronunciation: 'OF-fen-zikht-likh', example: { de: 'Der Autor hat offensichtlich viel recherchiert.', en: 'The author has obviously researched a lot.', fr: 'L’auteur a manifestement beaucoup fait de recherches.' } }, { id: 'b2l20-bedauerlicherweise', german: 'bedauerlicherweise', english: 'regrettably', french: 'malheureusement', gender: null, syllables: ['be', 'DAU', 'er', 'li', 'cher', 'wei', 'se'], pronunciation: 'be-DOW-er-li-kher-VY-ze', example: { de: 'Bedauerlicherweise fiel die Lesung aus.', en: 'Regrettably the reading was cancelled.', fr: 'Malheureusement la lecture a été annulée.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l20-satzadverbien', title: 'Attitude adverbs', titleFr: 'Adverbes d’attitude',
      lead: 'Sentence adverbs comment on the whole sentence: offensichtlich, angeblich, leider, glücklicherweise, vermutlich, zweifellos.',
      leadFr: 'Les adverbes de phrase commentent toute la phrase : offensichtlich, angeblich, leider, glücklicherweise, vermutlich, zweifellos.',
      explanationMd: 'These adverbs comment on the **whole sentence**: **offensichtlich / eindeutig** — clearly: **Er hat offensichtlich viel gelesen.** **angeblich** — allegedly: **Der Film ist angeblich ein Meisterwerk.** **leider / bedauerlicherweise** — unfortunately. **glücklicherweise / zum Glück** — fortunately. **vermutlich / vielleicht** — presumably / perhaps. **zweifellos** — undoubtedly. They usually stand in the **middle field** after the verb: **Das Ende war leider vorhersehbar.** or in **position 1**: **Leider war das Ende vorhersehbar.** Position 1 puts **extra emphasis** on your attitude.',
      explanationMdFr: 'Ces adverbes commentent **toute la phrase** : **offensichtlich / eindeutig** — manifestement : **Er hat offensichtlich viel gelesen.** **angeblich** — soi-disant : **Der Film ist angeblich ein Meisterwerk.** **leider / bedauerlicherweise** — malheureusement. **glücklicherweise / zum Glück** — heureusement. **vermutlich / vielleicht** — probablement / peut-être. **zweifellos** — sans aucun doute. Ils se placent généralement dans le **champ médian** après le verbe : **Das Ende war leider vorhersehbar.** ou en **position 1** : **Leider war das Ende vorhersehbar.** La position 1 met **plus d’emphase** sur ton attitude.',
      tables: [{ title: 'Attitude adverbs', titleFr: 'Adverbes d’attitude', headers: ['Adverb', 'Meaning', 'Example'], headersFr: ['Adverbe', 'Sens', 'Exemple'],
        rows: [['offensichtlich / eindeutig', 'clearly', 'Er hat offensichtlich viel gelesen.'], ['angeblich', 'allegedly', 'Der Film ist angeblich ein Meisterwerk.'], ['leider / bedauerlicherweise', 'unfortunately', 'Leider war das Ende vorhersehbar.'], ['glücklicherweise', 'fortunately', 'Glücklicherweise fiel nichts aus.'], ['vermutlich', 'presumably', 'Er kommt vermutlich später.'], ['zweifellos', 'undoubtedly', 'Das Buch ist zweifellos ein Meisterwerk.']],
        rowsFr: [['offensichtlich / eindeutig', 'manifestement', 'Er hat offensichtlich viel gelesen.'], ['angeblich', 'soi-disant', 'Der Film ist angeblich ein Meisterwerk.'], ['leider / bedauerlicherweise', 'malheureusement', 'Leider war das Ende vorhersehbar.'], ['glücklicherweise', 'heureusement', 'Glücklicherweise fiel nichts aus.'], ['vermutlich', 'probablement', 'Er kommt vermutlich später.'], ['zweifellos', 'sans aucun doute', 'Das Buch ist zweifellos ein Meisterwerk.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Das Ende', role: 'subject' }, { text: 'war', role: 'verb' }, { text: 'leider', role: 'other' }, { text: 'vorhersehbar.', role: 'other' }], en: 'The ending was unfortunately predictable.', fr: 'La fin était malheureusement prévisible.' },
        { parts: [{ text: 'Leider', role: 'other' }, { text: 'war', role: 'verb' }, { text: 'das Ende', role: 'subject' }, { text: 'vorhersehbar.', role: 'other' }], en: 'Unfortunately the ending was predictable.', fr: 'Malheureusement la fin était prévisible.' },
      ],
      contrast: {
        a: { label: 'Neutral', labelFr: 'Neutre', note: 'no stance', noteFr: 'sans attitude', examples: [g('Das Ende war vorhersehbar.', 'The ending was predictable.', 'La fin était prévisible.'), g('Der Autor hat viel recherchiert.', 'The author did a lot of research.', 'L’auteur a beaucoup recherché.')] },
        b: { label: 'With stance', labelFr: 'Avec attitude', note: 'sentence adverb', noteFr: 'adverbe de phrase', examples: [g('Das Ende war leider vorhersehbar.', 'The ending was unfortunately predictable.', 'La fin était malheureusement prévisible.'), g('Der Autor hat offensichtlich viel recherchiert.', 'The author has obviously done a lot of research.', 'L’auteur a manifestement beaucoup recherché.')] },
      },
      examples: [
        g('Das Buch ist zweifellos ein Meisterwerk.', 'The book is undoubtedly a masterpiece.', 'Le livre est sans aucun doute un chef-d’œuvre.'),
        g('Leider war das Ende vorhersehbar.', 'Unfortunately the ending was predictable.', 'Malheureusement la fin était prévisible.'),
        g('Bedauerlicherweise fiel die Lesung aus.', 'Regrettably the reading was cancelled.', 'Malheureusement la lecture a été annulée.'),
        g('Der Autor hat offensichtlich viel recherchiert.', 'The author has obviously done a lot of research.', 'L’auteur a manifestement beaucoup recherché.'),
        g('Der Film ist angeblich ein Meisterwerk.', 'The film is allegedly a masterpiece.', 'Le film est soi-disant un chef-d’œuvre.'),
        g('Er hat offensichtlich viel gelesen.', 'He has obviously read a lot.', 'Il a manifestement beaucoup lu.'),
      ],
      mistakes: [
        { wrong: 'Leider das Ende war vorhersehbar.', right: 'Leider war das Ende vorhersehbar.', why: 'After an adverb in position 1 the verb comes second.', whyFr: 'Après un adverbe en position 1, le verbe vient en second.' },
        { wrong: 'Das Ende war vorhersehbar leider.', right: 'Das Ende war leider vorhersehbar.', why: 'Put the sentence adverb in the middle field or in position 1.', whyFr: 'Place l’adverbe de phrase dans le champ médian ou en position 1.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l20-e2', prompt: 'Which means "allegedly"?', promptFr: 'Lequel signifie « soi-disant » ?', options: ['angeblich', 'offensichtlich', 'zweifellos'], answer: 0, explain: '"angeblich" = allegedly.', explainFr: '« angeblich » = soi-disant.', hint: 'not proven', hintFr: 'non prouvé' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l20-e5', prompt: 'Der Roman ist von der ersten Seite an ___ . (gripping)', answer: 'fesselnd', hint: 'fesselnd', hintFr: 'fesselnd' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l20-e8', prompt: '___ war das Ende vorhersehbar. (unfortunately)', answer: 'Leider', hint: 'leider', hintFr: 'leider' } },

    { kind: 'pronunciation', focus: 'Long adverbs rhythm: "bedauerlicherweise" = be-DAU-er-li-cher-WEI-se (stress on DAU, secondary on WEI)', focusFr: 'Rythme des adverbes longs : « bedauerlicherweise » = be-DAU-er-li-cher-WEI-se (accent sur DAU, secondaire sur WEI)', items: [{ id: 'b2l20-offensichtlich-pron', german: 'offensichtlich', english: 'obviously', french: 'manifestement', gender: null, syllables: ['OF', 'fen', 'sich', 'tlich'], pronunciation: 'OF-fen-zikht-likh', example: { de: 'Das ist offensichtlich.', en: 'That is obvious.', fr: 'C’est manifeste.' } }, { id: 'b2l20-fesselnd-pron', german: 'fesselnd', english: 'gripping', french: 'captivant', gender: null, syllables: ['FES', 'selnd'], pronunciation: 'FES-selnt', example: { de: 'Der Film ist fesselnd.', en: 'The film is gripping.', fr: 'Le film est captivant.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **review a book, film or exhibition**, describe impressions with **als ob + Konjunktiv II**, and show your stance with **offensichtlich, angeblich, leider, zweifellos**. 🎉',
      summaryFr: 'Tu sais maintenant **commenter un livre, un film ou une exposition**, décrire des impressions avec **als ob + Konjunktiv II**, et montrer ton attitude avec **offensichtlich, angeblich, leider, zweifellos**. 🎉',
      card: { title: 'Reviews on one page', titleFr: 'Les critiques en une page', sections: [
        { heading: 'Impression', headingFr: 'Impression', rows: [g('als ob + Konj. II', 'Es wirkt, als ob sie Angst hätte.', 'Es wirkt, als ob sie Angst hätte.'), g('als + verb 2nd', 'Es wirkt, als hätte sie Angst.', 'Es wirkt, als hätte sie Angst.')] },
        { heading: 'Stance', headingFr: 'Attitude', rows: [g('offensichtlich · angeblich · zweifellos', 'sentence adverbs', 'adverbes de phrase'), g('leider · bedauerlicherweise', 'unfortunately', 'malheureusement')] },
      ] } },
  ],
};

import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New B1 lesson: a check of the B1 level (reading, grammar map, writing a short argued e-mail) before B2.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const b1lektion28: Lesson = {
  id: 'b1-l28', level: 'B1', module: 7, number: 28,
  title: { de: 'B1 geschafft: Prüfungstraining', en: 'B1 done: exam training', fr: 'B1 terminé : entraînement à l’examen' },
  theme: 'B1 check: reading an opinion text, the B1 grammar map and writing a short argued e-mail',
  themeFr: 'Contrôle B1 : lire un texte d’opinion, la carte de la grammaire B1 et écrire un court e-mail argumenté',
  goals: ['Read an opinion text and find the arguments', 'Review the B1 grammar in one map', 'Write a short argued e-mail'],
  goalsFr: ['Lire un texte d’opinion et trouver les arguments', 'Réviser la grammaire B1 en une carte', 'Écrire un court e-mail argumenté'],
  canDo: g('Ich kann einen Meinungstext verstehen, die wichtigste B1-Grammatik anwenden und eine kurze begründete E-Mail schreiben.', 'I can understand an opinion text, apply the key B1 grammar and write a short argued e-mail.', 'Je sais comprendre un texte d’opinion, appliquer la grammaire B1 essentielle et écrire un court e-mail argumenté.'),
  steps: [
    { kind: 'intro', title: 'B1 geschafft! 🎓', titleFr: 'B1 terminé ! 🎓',
      scene: 'Lena reads a letter to the editor about working from home — and writes back with arguments.', sceneFr: 'Lena lit un courrier des lecteurs sur le télétravail — et répond avec des arguments.',
      goals: ['Read an opinion', 'The B1 grammar map', 'Write an argued reply'],
      goalsFr: ['Lire une opinion', 'La carte de la grammaire B1', 'Écrire une réponse argumentée'] },

    // ───────────── 1 · Reading ─────────────
    { kind: 'chapter', title: 'Lesen: Homeoffice – ja oder nein?', titleFr: 'Lecture : télétravail – oui ou non ?', blurb: 'Find the arguments.', blurbFr: 'Trouve les arguments.' },

    { kind: 'situation', title: 'Ein Leserbrief', titleFr: 'Un courrier des lecteurs',
      setting: 'Lena reads a letter in the newspaper.', settingFr: 'Lena lit une lettre dans le journal.',
      lines: [
        line('Leserbrief', 'Immer mehr Menschen arbeiten von zu Hause. Ich finde, dass das nicht nur Vorteile hat, sondern auch Nachteile.', 'More and more people work from home. I think it has not only advantages but also disadvantages.', 'De plus en plus de gens travaillent de chez eux. Je trouve que cela n’a pas seulement des avantages, mais aussi des inconvénients.'),
        line('Leserbrief', 'Zwar spart man Zeit, aber man sieht seine Kollegen kaum noch. Wenn man allein arbeitet, fühlt man sich schnell einsam.', 'Admittedly you save time, but you hardly see your colleagues any more. When you work alone you quickly feel lonely.', 'Certes, on gagne du temps, mais on ne voit presque plus ses collègues. Quand on travaille seul, on se sent vite isolé.'),
        line('Leserbrief', 'Wenn ich die Wahl hätte, würde ich zwei Tage zu Hause und drei Tage im Büro arbeiten. Dadurch hätte ich mehr Ruhe, ohne den Kontakt zu verlieren.', 'If I had the choice I would work two days at home and three days in the office. That way I would have more peace without losing contact.', 'Si j’avais le choix, je travaillerais deux jours à la maison et trois jours au bureau. Ainsi, j’aurais plus de calme sans perdre le contact.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l28-e1', prompt: 'What would the writer prefer?', promptFr: 'Que préférerait l’auteur ?', options: ['Two days at home, three in the office', 'Five days at home', 'Five days in the office'], optionsFr: ['Deux jours à la maison, trois au bureau', 'Cinq jours à la maison', 'Cinq jours au bureau'], answer: 0, explain: 'He writes: “…zwei Tage zu Hause und drei Tage im Büro arbeiten.”', explainFr: 'Il écrit : « …zwei Tage zu Hause und drei Tage im Büro arbeiten. »', hint: 'Look for “zwei Tage”.', hintFr: 'Cherche « zwei Tage ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l28-e2', prompt: 'What is the main disadvantage the writer mentions?', promptFr: 'Quel est le principal inconvénient mentionné par l’auteur ?', options: ['You hardly see your colleagues', 'You earn less', 'You work longer'], optionsFr: ['On ne voit presque plus ses collègues', 'On gagne moins', 'On travaille plus longtemps'], answer: 0, explain: 'He writes: “…man sieht seine Kollegen kaum noch.”', explainFr: 'Il écrit : « …man sieht seine Kollegen kaum noch. »', hint: 'Look for “zwar … aber”.', hintFr: 'Cherche « zwar … aber ».' } },

    { kind: 'wordgroup', title: 'Arbeit und Meinung', titleFr: 'Travail et opinion',
      items: [
        word('b1l28-homeoffice', 'das Homeoffice', 'das', 'working from home', 'le télétravail', ['HOME', 'of', 'fice'], 'HOHM-of-fis', g('Im Homeoffice arbeite ich ruhiger.', 'Working from home I work more calmly.', 'En télétravail, je travaille plus calmement.')),
        word('b1l28-vorteil', 'der Vorteil', 'der', 'the advantage', 'l’avantage', ['VOR', 'teil'], 'FOR-tile', g('Ein Vorteil ist die Zeitersparnis.', 'One advantage is the time saved.', 'Un avantage est le gain de temps.')),
        word('b1l28-nachteil', 'der Nachteil', 'der', 'the disadvantage', 'l’inconvénient', ['NACH', 'teil'], 'NAKH-tile', g('Ein Nachteil ist die Einsamkeit.', 'One disadvantage is loneliness.', 'Un inconvénient est la solitude.')),
        word('b1l28-kontakt', 'der Kontakt', 'der', 'the contact', 'le contact', ['kon', 'TAKT'], 'kon-TAKT', g('Ich halte Kontakt zu Kollegen.', 'I keep in touch with colleagues.', 'Je reste en contact avec mes collègues.')),
        word('b1l28-einsam', 'einsam', null, 'lonely', 'isolé / seul', ['EIN', 'sam'], 'INE-zahm', g('Man fühlt sich schnell einsam.', 'You quickly feel lonely.', 'On se sent vite seul.')),
        word('b1l28-argument', 'das Argument', 'das', 'the argument', 'l’argument', ['ar', 'gu', 'MENT'], 'ar-goo-MENT', g('Das ist ein gutes Argument.', 'That is a good argument.', 'C’est un bon argument.')),
      ] },

    // ───────────── 2 · Grammar map ─────────────
    { kind: 'chapter', title: 'Die B1-Grammatik auf einen Blick', titleFr: 'La grammaire B1 d’un coup d’œil', blurb: 'Tenses, clauses, passive, Konjunktiv II.', blurbFr: 'Temps, propositions, passif, Konjunktiv II.' },

    { kind: 'situation', title: 'Alles zusammen', titleFr: 'Tout ensemble',
      setting: 'Lena checks her notes before she writes.', settingFr: 'Lena relit ses notes avant d’écrire.',
      lines: [
        line('Lena', 'Wenn ich mehr Zeit gehabt hätte, hätte ich mehr gelernt. Nachdem ich den Text gelesen hatte, schrieb ich meine Antwort.', 'If I had had more time I would have learned more. After I had read the text I wrote my answer.', 'Si j’avais eu plus de temps, j’aurais plus appris. Après avoir lu le texte, j’ai écrit ma réponse.'),
        line('Lena', 'Die E-Mail wird noch heute geschickt. Ich arbeite so, dass ich konzentriert bleibe, indem ich Pausen mache.', 'The e-mail will be sent today. I work so that I stay concentrated, by taking breaks.', 'L’e-mail sera envoyé aujourd’hui. Je travaille de façon à rester concentrée, en faisant des pauses.'),
        line('Lena', 'Der Kollege, dem ich helfe, ist nett. Das ist das Beste, was ich je gelesen habe.', 'The colleague I help is nice. That is the best thing I have ever read.', 'Le collègue que j’aide est sympa. C’est le meilleur texte que j’aie jamais lu.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l28-grammatik', title: 'The B1 grammar map', titleFr: 'La carte de la grammaire B1',
      lead: 'Six boxes: tenses, subordinate clauses, relative clauses, passive, Konjunktiv II, nouns and adjectives.',
      leadFr: 'Six boîtes : temps, subordonnées, relatives, passif, Konjunktiv II, noms et adjectifs.',
      explanationMd: '**Tenses**: **Präteritum** for stories and writing, **Perfekt** for speech, **Plusquamperfekt** for what happened earlier (**hatte / war + participle**). **Subordinate clauses** (**verb last**): **weil, dass, wenn, als, ob, obwohl, falls, da, bevor, nachdem, während, indem, sodass, damit, um … zu**. **Relative clauses**: **der / die / das**, **den**, **dem / der / denen**, **mit dem / für den …**, **was** after **alles / nichts**. **Passive**: **wird / wurde / ist … worden** + participle, and with a **modal** (**muss … werden**). **Konjunktiv II**: **würde, hätte, wäre, könnte** (politeness, unreal conditions) and **hätte / wäre + participle** (past regrets). **Nouns and adjectives**: **genitive**, **n-declension**, **adjective endings**, **participles as adjectives**.',
      explanationMdFr: '**Temps** : **Präteritum** pour les récits et l’écrit, **Perfekt** pour l’oral, **plus-que-parfait** pour ce qui s’est passé avant (**hatte / war + participe**). **Subordonnées** (**verbe à la fin**) : **weil, dass, wenn, als, ob, obwohl, falls, da, bevor, nachdem, während, indem, sodass, damit, um … zu**. **Relatives** : **der / die / das**, **den**, **dem / der / denen**, **mit dem / für den …**, **was** après **alles / nichts**. **Passif** : **wird / wurde / ist … worden** + participe, et avec un **modal** (**muss … werden**). **Konjunktiv II** : **würde, hätte, wäre, könnte** (politesse, conditions irréelles) et **hätte / wäre + participe** (regrets passés). **Noms et adjectifs** : **génitif**, **déclinaison en -n**, **terminaisons d’adjectifs**, **participes comme adjectifs**.',
      tables: [
        { title: 'Verbs and clauses', titleFr: 'Verbes et propositions', headers: ['Topic', 'Key forms', 'Example'], headersFr: ['Sujet', 'Formes clés', 'Exemple'],
          rows: [['Tenses', 'Präteritum · Perfekt · Plusquamperfekt', 'Nachdem ich gegessen hatte, ging ich.'], ['Subordinate clauses', 'weil · dass · obwohl · falls · indem · sodass', 'Ich arbeite, indem ich Pausen mache.'], ['Relative clauses', 'der · den · dem · mit dem · was', 'Der Kollege, dem ich helfe, ist nett.'], ['Passive', 'wird · wurde · ist … worden', 'Die E-Mail wird noch heute geschickt.']],
          rowsFr: [['Temps', 'Präteritum · Perfekt · plus-que-parfait', 'Nachdem ich gegessen hatte, ging ich.'], ['Subordonnées', 'weil · dass · obwohl · falls · indem · sodass', 'Ich arbeite, indem ich Pausen mache.'], ['Relatives', 'der · den · dem · mit dem · was', 'Der Kollege, dem ich helfe, ist nett.'], ['Passif', 'wird · wurde · ist … worden', 'Die E-Mail wird noch heute geschickt.']], highlightCol: 1 },
        { title: 'Mood and nouns', titleFr: 'Mode et noms', headers: ['Topic', 'Key forms', 'Example'], headersFr: ['Sujet', 'Formes clés', 'Exemple'],
          rows: [['Konjunktiv II', 'würde · hätte · wäre · hätte gelernt', 'Wenn ich Zeit hätte, würde ich lernen.'], ['Genitive', 'des / der · wegen · trotz', 'wegen des Wetters'], ['n-declension', 'den Kollegen · dem Nachbarn', 'Ich kenne den Kollegen.'], ['Participles', 'kochend · gebucht', 'die gebuchte Reise']],
          rowsFr: [['Konjunktiv II', 'würde · hätte · wäre · hätte gelernt', 'Wenn ich Zeit hätte, würde ich lernen.'], ['Génitif', 'des / der · wegen · trotz', 'wegen des Wetters'], ['Déclinaison en -n', 'den Kollegen · dem Nachbarn', 'Ich kenne den Kollegen.'], ['Participes', 'kochend · gebucht', 'die gebuchte Reise']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'mehr Zeit', role: 'accusative' }, { text: 'gehabt hätte,', role: 'verb' }, { text: 'hätte', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'mehr', role: 'other' }, { text: 'gelernt.', role: 'verb' }], en: 'If I had had more time I would have learned more.', fr: 'Si j’avais eu plus de temps, j’aurais plus appris.' },
        { parts: [{ text: 'Die E-Mail', role: 'subject' }, { text: 'wird', role: 'verb' }, { text: 'noch heute', role: 'time' }, { text: 'geschickt.', role: 'verb' }], en: 'The e-mail will be sent today.', fr: 'L’e-mail sera envoyé aujourd’hui.' },
      ],
      contrast: {
        a: { label: 'Verb in position 2', labelFr: 'Verbe en position 2', note: 'main clause', noteFr: 'principale', examples: [g('Ich arbeite von zu Hause.', 'I work from home.', 'Je travaille de chez moi.'), g('Deshalb bin ich zufrieden.', 'That is why I am satisfied.', 'C’est pourquoi je suis satisfait.')] },
        b: { label: 'Verb at the end', labelFr: 'Verbe à la fin', note: 'subordinate clause', noteFr: 'subordonnée', examples: [g('Ich bin zufrieden, weil ich von zu Hause arbeite.', 'I am satisfied because I work from home.', 'Je suis satisfait parce que je travaille de chez moi.'), g('Ich arbeite, indem ich Pausen mache.', 'I work by taking breaks.', 'Je travaille en faisant des pauses.')] },
      },
      examples: [
        g('Wenn ich mehr Zeit gehabt hätte, hätte ich mehr gelernt.', 'If I had had more time I would have learned more.', 'Si j’avais eu plus de temps, j’aurais plus appris.'),
        g('Nachdem ich den Text gelesen hatte, schrieb ich meine Antwort.', 'After I had read the text I wrote my answer.', 'Après avoir lu le texte, j’ai écrit ma réponse.'),
        g('Die E-Mail wird noch heute geschickt.', 'The e-mail will be sent today.', 'L’e-mail sera envoyé aujourd’hui.'),
        g('Der Kollege, dem ich helfe, ist nett.', 'The colleague I help is nice.', 'Le collègue que j’aide est sympa.'),
        g('Das ist das Beste, was ich je gelesen habe.', 'That is the best thing I have ever read.', 'C’est le meilleur texte que j’aie jamais lu.'),
        g('Ich bleibe konzentriert, indem ich Pausen mache.', 'I stay concentrated by taking breaks.', 'Je reste concentrée en faisant des pauses.'),
      ],
      mistakes: [
        { wrong: 'Wenn ich Zeit gehabt hätte, würde ich lernen.', right: 'Wenn ich Zeit gehabt hätte, hätte ich gelernt.', why: 'Past unreal: hätte / wäre + participle in both parts.', whyFr: 'Irréel passé : hätte / wäre + participe dans les deux parties.' },
        { wrong: 'Der Kollege, den ich helfe, ist nett.', right: 'Der Kollege, dem ich helfe, ist nett.', why: 'helfen takes the dative: dem.', whyFr: 'helfen prend le datif : dem.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l28-e3', prompt: 'Wenn ich Zeit gehabt hätte, ___ ich gekommen. (sein)', promptFr: 'Wenn ich Zeit gehabt hätte, ___ ich gekommen. (sein)', answer: 'wäre', hint: 'past unreal: wäre + participle', hintFr: 'irréel passé : wäre + participe' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l28-e4', prompt: 'Die Kollegin, ___ ich helfe, ist neu. (f, dative)', promptFr: 'Die Kollegin, ___ ich helfe, ist neu. (f, datif)', answer: 'der', hint: 'helfen + dative: der', hintFr: 'helfen + datif : der' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l28-e5', prompt: 'Which is correct? Die E-Mail ___ gestern geschickt.', promptFr: 'Laquelle est correcte ? Die E-Mail ___ gestern geschickt.', options: ['wurde', 'wird', 'worden'], optionsFr: ['wurde', 'wird', 'worden'], answer: 0, explain: 'Past passive in writing: wurde.', explainFr: 'Passif passé à l’écrit : wurde.', hint: 'past passive: wurde + participle', hintFr: 'passif passé : wurde + participe' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l28-e6', prompt: 'Choose: Er fährt Rad, ___ mit dem Auto zu fahren.', promptFr: 'Choisis : Er fährt Rad, ___ mit dem Auto zu fahren.', options: ['anstatt', 'obwohl', 'damit'], optionsFr: ['anstatt', 'obwohl', 'damit'], answer: 0, explain: 'anstatt … zu = instead of …', explainFr: 'anstatt … zu = au lieu de …', hint: 'instead of', hintFr: 'au lieu de' } },

    // ───────────── 3 · Writing ─────────────
    { kind: 'chapter', title: 'Schreiben: eine begründete Antwort', titleFr: 'Écrire : une réponse argumentée', blurb: 'Opinion, reasons, example, suggestion.', blurbFr: 'Opinion, raisons, exemple, proposition.' },

    { kind: 'situation', title: 'Laras Antwort an die Zeitung', titleFr: 'La réponse de Lena au journal',
      setting: 'Lena writes a reply.', settingFr: 'Lena écrit une réponse.',
      lines: [
        line('Lena', 'Sehr geehrte Damen und Herren, zu Ihrem Leserbrief möchte ich Stellung nehmen. Ich bin der Meinung, dass das Homeoffice mehr Vorteile als Nachteile hat.', 'Dear Sir or Madam, I would like to comment on your letter. I am of the opinion that working from home has more advantages than disadvantages.', 'Mesdames et Messieurs, je voudrais réagir à votre courrier. Je suis d’avis que le télétravail a plus d’avantages que d’inconvénients.'),
        line('Lena', 'Zwar sieht man seine Kollegen seltener, aber man arbeitet konzentrierter. Außerdem spart man Zeit, weil man nicht pendeln muss. Trotz des Kontaktverlusts überwiegen die Vorteile.', 'Admittedly you see your colleagues less often, but you work more concentrated. In addition you save time because you don’t have to commute. Despite the loss of contact the advantages outweigh.', 'Certes, on voit moins souvent ses collègues, mais on travaille de façon plus concentrée. De plus, on gagne du temps parce qu’on n’a pas à faire la navette. Malgré la perte de contact, les avantages l’emportent.'),
        line('Lena', 'Ich würde vorschlagen, dass jeder selbst entscheiden darf. Mit freundlichen Grüßen, Lena Bauer', 'I would suggest that everyone may decide for themselves. Yours sincerely, Lena Bauer', 'Je proposerais que chacun puisse décider lui-même. Cordialement, Lena Bauer'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l28-e7', prompt: 'What is Lena’s opinion?', promptFr: 'Quelle est l’opinion de Lena ?', options: ['Working from home has more advantages', 'Working from home is bad', 'Everyone must come to the office'], optionsFr: ['Le télétravail a plus d’avantages', 'Le télétravail est mauvais', 'Tout le monde doit venir au bureau'], answer: 0, explain: 'She writes: “…dass das Homeoffice mehr Vorteile als Nachteile hat.”', explainFr: 'Elle écrit : « …dass das Homeoffice mehr Vorteile als Nachteile hat. »', hint: 'Look for “mehr Vorteile”.', hintFr: 'Cherche « mehr Vorteile ».' } },

    { kind: 'grammar', note: {
      id: 'b1l28-schreiben', title: 'The argued e-mail: opinion, reasons, example, suggestion', titleFr: 'L’e-mail argumenté : opinion, raisons, exemple, proposition',
      lead: 'Four steps: say your opinion, give reasons (weil / zwar … aber / außerdem), add a concession (trotz), end with a suggestion (Ich würde vorschlagen, …).',
      leadFr: 'Quatre étapes : donne ton opinion, des raisons (weil / zwar … aber / außerdem), une concession (trotz), termine par une proposition (Ich würde vorschlagen, …).',
      explanationMd: 'In the **B1 writing exam** (about 80–100 words) follow **four steps**: **1 · opinion**: **Ich bin der Meinung, dass … / Ich finde, dass …**; **2 · reasons**: **weil, zwar … aber, außerdem, nicht nur … sondern auch**; **3 · concession / counter-point**: **Trotz … / Obwohl …**; **4 · suggestion**: **Ich würde vorschlagen, dass … / Es wäre besser, wenn …**. Use **formal greetings**: **Sehr geehrte Damen und Herren, … Mit freundlichen Grüßen**. Check **verb position**: **position 2** in main clauses, **last** after **weil / dass / obwohl**.',
      explanationMdFr: 'À l’**examen d’écriture B1** (environ 80–100 mots), suis **quatre étapes** : **1 · opinion** : **Ich bin der Meinung, dass … / Ich finde, dass …** ; **2 · raisons** : **weil, zwar … aber, außerdem, nicht nur … sondern auch** ; **3 · concession / contre-argument** : **Trotz … / Obwohl …** ; **4 · proposition** : **Ich würde vorschlagen, dass … / Es wäre besser, wenn …**. Utilise des **salutations formelles** : **Sehr geehrte Damen und Herren, … Mit freundlichen Grüßen**. Vérifie la **position du verbe** : **position 2** dans les principales, **à la fin** après **weil / dass / obwohl**.',
      tables: [{ title: 'Four steps', titleFr: 'Quatre étapes', headers: ['Step', 'German'], headersFr: ['Étape', 'Allemand'],
        rows: [['1 · Opinion', 'Ich bin der Meinung, dass das Homeoffice mehr Vorteile hat.'], ['2 · Reasons', 'Zwar … aber … Außerdem spart man Zeit, weil man nicht pendeln muss.'], ['3 · Concession', 'Trotz des Kontaktverlusts überwiegen die Vorteile.'], ['4 · Suggestion', 'Ich würde vorschlagen, dass jeder selbst entscheiden darf.']],
        rowsFr: [['1 · Opinion', 'Ich bin der Meinung, dass das Homeoffice mehr Vorteile hat.'], ['2 · Raisons', 'Zwar … aber … Außerdem spart man Zeit, weil man nicht pendeln muss.'], ['3 · Concession', 'Trotz des Kontaktverlusts überwiegen die Vorteile.'], ['4 · Proposition', 'Ich würde vorschlagen, dass jeder selbst entscheiden darf.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'der Meinung,', role: 'other' }, { text: 'dass', role: 'connector' }, { text: 'das Homeoffice', role: 'subject' }, { text: 'mehr Vorteile', role: 'accusative' }, { text: 'hat.', role: 'verb' }], en: 'I am of the opinion that working from home has more advantages.', fr: 'Je suis d’avis que le télétravail a plus d’avantages.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'würde', role: 'verb' }, { text: 'vorschlagen,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'jeder', role: 'subject' }, { text: 'selbst', role: 'other' }, { text: 'entscheiden darf.', role: 'verb' }], en: 'I would suggest that everyone may decide for themselves.', fr: 'Je proposerais que chacun puisse décider lui-même.' },
      ],
      contrast: {
        a: { label: 'Weak', labelFr: 'Faible', note: 'opinion only', noteFr: 'opinion seule', examples: [g('Homeoffice ist gut.', 'Working from home is good.', 'Le télétravail est bien.'), g('Ich mag es.', 'I like it.', 'Je l’aime.')] },
        b: { label: 'Argued', labelFr: 'Argumenté', note: 'opinion + reasons + suggestion', noteFr: 'opinion + raisons + proposition', examples: [g('Ich bin der Meinung, dass Homeoffice mehr Vorteile hat, weil man Zeit spart.', 'I am of the opinion that working from home has more advantages because you save time.', 'Je suis d’avis que le télétravail a plus d’avantages parce qu’on gagne du temps.'), g('Ich würde vorschlagen, dass jeder selbst entscheiden darf.', 'I would suggest that everyone may decide for themselves.', 'Je proposerais que chacun puisse décider lui-même.')] },
      },
      examples: [
        g('Ich bin der Meinung, dass das Homeoffice mehr Vorteile als Nachteile hat.', 'I am of the opinion that working from home has more advantages than disadvantages.', 'Je suis d’avis que le télétravail a plus d’avantages que d’inconvénients.'),
        g('Zwar sieht man seine Kollegen seltener, aber man arbeitet konzentrierter.', 'Admittedly you see your colleagues less often, but you work more concentrated.', 'Certes, on voit moins souvent ses collègues, mais on travaille de façon plus concentrée.'),
        g('Außerdem spart man Zeit, weil man nicht pendeln muss.', 'In addition you save time because you don’t have to commute.', 'De plus, on gagne du temps parce qu’on n’a pas à faire la navette.'),
        g('Trotz des Kontaktverlusts überwiegen die Vorteile.', 'Despite the loss of contact the advantages outweigh.', 'Malgré la perte de contact, les avantages l’emportent.'),
        g('Ich würde vorschlagen, dass jeder selbst entscheiden darf.', 'I would suggest that everyone may decide for themselves.', 'Je proposerais que chacun puisse décider lui-même.'),
        g('Es wäre besser, wenn man zwei Tage im Büro wäre.', 'It would be better if one were in the office two days.', 'Ce serait mieux si l’on était au bureau deux jours.'),
      ],
      mistakes: [
        { wrong: 'Ich finde, dass Homeoffice hat Vorteile.', right: 'Ich finde, dass Homeoffice Vorteile hat.', why: 'After dass the verb goes last.', whyFr: 'Après dass, le verbe va en dernier.' },
        { wrong: 'Trotz das Kontaktverlust …', right: 'Trotz des Kontaktverlusts …', why: 'trotz takes the genitive.', whyFr: 'trotz prend le génitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l28-e8', prompt: 'Ich bin der Meinung, ___ das Homeoffice Vorteile hat.', promptFr: 'Ich bin der Meinung, ___ das Homeoffice Vorteile hat.', answer: 'dass', hint: 'that', hintFr: 'que' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l28-e9', tokens: ['vorschlagen', 'ich', 'würde', 'Ich', 'dass', 'jeder', 'entscheiden', 'darf'], answer: ['Ich', 'würde', 'vorschlagen', 'dass', 'jeder', 'entscheiden', 'darf'], hint: 'dass-clause: verb last.', hintFr: 'proposition en dass : verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l28-e10', prompt: 'Listen. What does she suggest?', promptFr: 'Écoute. Que propose-t-elle ?', audio: { ttsText: 'Ich würde vorschlagen, dass jeder selbst entscheiden darf.' }, options: ['Everyone decides for themselves', 'Nobody works from home', 'Everyone works from home'], optionsFr: ['Chacun décide lui-même', 'Personne ne travaille à la maison', 'Tout le monde travaille à la maison'], answer: 0, hint: 'Ich würde vorschlagen …', hintFr: 'Ich würde vorschlagen …' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l28-e11', prompt: 'Listen. What is the disadvantage?', promptFr: 'Écoute. Quel est l’inconvénient ?', audio: { ttsText: 'Zwar spart man Zeit, aber man sieht seine Kollegen kaum noch.' }, options: ['You hardly see your colleagues', 'You lose time', 'You earn less'], optionsFr: ['On ne voit presque plus ses collègues', 'On perd du temps', 'On gagne moins'], answer: 0, hint: 'zwar … aber', hintFr: 'zwar … aber' } },

    { kind: 'pronunciation', focus: 'The stress in Argument (last syllable), the ch in Nachteil and the ei in einsam', focusFr: 'L’accent dans Argument (dernière syllabe), le ch dans Nachteil et le ei dans einsam',
      items: [
        word('b1l28-argument-pron', 'Argument', null, 'argument', 'argument', ['ar', 'gu', 'MENT'], 'ar-goo-MENT', g('Das ist ein starkes Argument.', 'That is a strong argument.', 'C’est un argument fort.')),
        word('b1l28-nachteil-pron', 'Nachteil', null, 'disadvantage', 'inconvénient', ['NACH', 'teil'], 'NAKH-tile', g('Ein Nachteil ist die Einsamkeit.', 'A disadvantage is loneliness.', 'Un inconvénient est la solitude.')),
        word('b1l28-einsam-pron', 'einsam', null, 'lonely', 'seul', ['EIN', 'sam'], 'INE-zahm', g('Ich fühle mich nicht einsam.', 'I do not feel lonely.', 'Je ne me sens pas seul.')),
        word('b1l28-vorteil-pron', 'Vorteil', null, 'advantage', 'avantage', ['VOR', 'teil'], 'FOR-tile', g('Das ist ein großer Vorteil.', 'That is a big advantage.', 'C’est un grand avantage.')),
      ] },

    { kind: 'wrapup',
      summary: 'You have reached the **end of B1**: you can read an opinion text, use tenses, subordinate and relative clauses, the passive and the Konjunktiv II, and write an **argued e-mail**. On to B2! 🎓',
      summaryFr: 'Tu as atteint la **fin de B1** : tu sais lire un texte d’opinion, utiliser temps, subordonnées et relatives, le passif et le Konjunktiv II, et écrire un **e-mail argumenté**. En route vers B2 ! 🎓',
      card: { title: 'B1 on one page', titleFr: 'B1 en une page', sections: [
        { heading: 'Clauses', headingFr: 'Propositions', rows: [g('weil · dass · obwohl · falls · indem · sodass', 'verb at the end', 'verbe à la fin'), g('der / den / dem · mit dem · was', 'relative clauses', 'relatives')] },
        { heading: 'Tenses and mood', headingFr: 'Temps et mode', rows: [g('Präteritum · Perfekt · Plusquamperfekt', 'past tenses', 'temps du passé'), g('würde · hätte · wäre', 'Konjunktiv II', 'Konjunktiv II')] },
        { heading: 'Passive and genitive', headingFr: 'Passif et génitif', rows: [g('wird · wurde · ist … worden', 'passive', 'passif'), g('wegen · trotz · während + genitive', 'genitive prepositions', 'prépositions du génitif')] },
      ] } },
  ],
};

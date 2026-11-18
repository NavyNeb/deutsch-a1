import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion5: Lesson = {
  id: 'b1-l5', level: 'B1', module: 5, number: 18,
  title: { de: 'Das Passiv', en: 'The passive voice', fr: 'La voix passive' },
  theme: 'The present passive (werden + participle) and the agent with "von"', themeFr: 'Le passif présent (werden + participe) et l’agent avec « von »',
  goals: ['Form the passive with "werden" + participle', 'Focus on the action instead of the doer', 'Turn active sentences into passive', 'Name the doer with "von"'], goalsFr: ['Former le passif avec « werden » + participe', 'Se concentrer sur l’action plutôt que sur l’auteur', 'Transformer l’actif en passif', 'Nommer l’auteur avec « von »'],
  canDo: g('Ich kann das Passiv Präsens bilden, Aktiv in Passiv umformen und den Handelnden mit „von“ nennen.', 'I can form the present passive, turn active into passive and name the doer with “von”.', 'Je sais former le passif présent, transformer l’actif en passif et nommer l’agent avec « von ».'),
  steps: [
    { kind: 'intro', title: 'Das Passiv 🏭', titleFr: 'Le passif 🏭',
      scene: 'A visit to a car factory: what is built, tested and sold — and who does it is not important.', sceneFr: 'Visite d’une usine automobile : ce qu’on construit, teste et vend — et peu importe qui le fait.',
      goals: ['Form the passive with werden + participle', 'Turn active sentences into passive', 'Name the doer with von + dative'],
      goalsFr: ['Former le passif avec werden + participe', 'Transformer des phrases actives en phrases passives', 'Nommer l’agent avec von + datif'] },

    // ───────────── 1 · Form ─────────────
    { kind: 'chapter', title: 'werden + Partizip', titleFr: 'werden + participe', blurb: 'The action is in the focus.', blurbFr: 'L’action est au premier plan.' },

    { kind: 'situation', title: 'In der Fabrik', titleFr: 'À l’usine',
      setting: 'A guide shows visitors around the factory.', settingFr: 'Un guide fait visiter l’usine.',
      lines: [
        line('Führer', 'In dieser Fabrik werden jeden Tag hundert Autos hergestellt. Das Produkt wird getestet. Die Autos werden verkauft.', 'In this factory a hundred cars are produced every day. The product is tested. The cars are sold.', 'Dans cette usine, cent voitures sont produites chaque jour. Le produit est testé. Les voitures sont vendues.'),
        line('Besucher', 'Und hier? Hier wird ein Haus gebaut. Das Auto wird repariert. Der Computer wird oft benutzt.', 'And here? A house is being built here. The car is being repaired. The computer is often used.', 'Et ici ? Ici, on construit une maison. La voiture est réparée. L’ordinateur est souvent utilisé.'),
        line('Führer', 'Hier werden Blumen verkauft. Hier wird Deutsch gesprochen. Die Tickets werden kontrolliert.', 'Flowers are sold here. German is spoken here. The tickets are checked.', 'Ici, on vend des fleurs. Ici, on parle allemand. Les billets sont contrôlés.'),
        line('Besucher', 'Der Laden wird um neun geöffnet. Die Bank wird um fünf geschlossen.', 'The shop is opened at nine. The bank is closed at five.', 'Le magasin est ouvert à neuf heures. La banque est fermée à cinq heures.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l5-e11', prompt: 'How many cars are produced every day?', promptFr: 'Combien de voitures sont produites chaque jour ?', options: ['A hundred', 'Ten', 'A thousand'], optionsFr: ['Cent', 'Dix', 'Mille'], answer: 0, explain: 'The guide says: “…werden jeden Tag hundert Autos hergestellt.”', explainFr: 'Le guide dit : « …werden jeden Tag hundert Autos hergestellt. »', hint: 'Look for “hundert”.', hintFr: 'Cherche « hundert ».' } },

    { kind: 'wordgroup', title: 'Herstellen und bauen', titleFr: 'Fabriquer et construire',
      items: [{ id: 'b1l5-bauen', german: 'bauen', english: 'to build', french: 'construire', gender: null, syllables: ['BAU', 'en'], pronunciation: 'BOW-en', example: { de: 'Hier wird ein Haus gebaut.', en: 'A house is being built here.', fr: 'On construit une maison ici.' } }, { id: 'b1l5-herstellen', german: 'herstellen', english: 'to produce / make', french: 'produire / fabriquer', gender: null, syllables: ['HER', 'stel', 'len'], pronunciation: 'HAIR-shtel-len', example: { de: 'Autos werden in Deutschland hergestellt.', en: 'Cars are produced in Germany.', fr: 'Les voitures sont fabriquées en Allemagne.' } }, { id: 'b1l5-fabrik', german: 'die Fabrik', english: 'the factory', french: 'l’usine', gender: 'die', syllables: ['fa', 'BRIK'], pronunciation: 'dee fah-BREEK', example: { de: 'In der Fabrik werden Autos gebaut.', en: 'Cars are built in the factory.', fr: 'On construit des voitures à l’usine.' } }, { id: 'b1l5-produkt', german: 'das Produkt', english: 'the product', french: 'le produit', gender: 'das', syllables: ['pro', 'DUKT'], pronunciation: 'dahs pro-DOOKT', example: { de: 'Das Produkt wird getestet.', en: 'The product is tested.', fr: 'Le produit est testé.' } }, { id: 'b1l5-reparieren', german: 'reparieren', english: 'to repair', french: 'réparer', gender: null, syllables: ['re', 'pa', 'RIE', 'ren'], pronunciation: 're-pah-REE-ren', example: { de: 'Das Auto wird repariert.', en: 'The car is being repaired.', fr: 'La voiture est réparée.' } }, { id: 'b1l5-benutzen', german: 'benutzen', english: 'to use', french: 'utiliser', gender: null, syllables: ['be', 'NUT', 'zen'], pronunciation: 'be-NOOT-sen', example: { de: 'Der Computer wird oft benutzt.', en: 'The computer is often used.', fr: 'L’ordinateur est souvent utilisé.' } }] },

    { kind: 'wordgroup', title: 'Verkaufen und kontrollieren', titleFr: 'Vendre et contrôler',
      items: [{ id: 'b1l5-verkaufen', german: 'verkaufen', english: 'to sell', french: 'vendre', gender: null, syllables: ['ver', 'KAU', 'fen'], pronunciation: 'fair-KOW-fen', example: { de: 'Hier werden Blumen verkauft.', en: 'Flowers are sold here.', fr: 'On vend des fleurs ici.' } }, { id: 'b1l5-oeffnen', german: 'öffnen', english: 'to open', french: 'ouvrir', gender: null, syllables: ['ÖFF', 'nen'], pronunciation: 'OEF-nen', example: { de: 'Der Laden wird um neun geöffnet.', en: 'The shop is opened at nine.', fr: 'Le magasin est ouvert à neuf heures.' } }, { id: 'b1l5-schliessen', german: 'schließen', english: 'to close', french: 'fermer', gender: null, syllables: ['SCHLIE', 'ßen'], pronunciation: 'SHLEE-sen', example: { de: 'Die Bank wird um fünf geschlossen.', en: 'The bank is closed at five.', fr: 'La banque est fermée à cinq heures.' } }, { id: 'b1l5-kontrollieren', german: 'kontrollieren', english: 'to check / control', french: 'contrôler', gender: null, syllables: ['kon', 'tro', 'LLIE', 'ren'], pronunciation: 'kon-tro-LEE-ren', example: { de: 'Die Tickets werden kontrolliert.', en: 'The tickets are checked.', fr: 'Les billets sont contrôlés.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l5-passiv-form', title: 'The present passive: werden + participle', titleFr: 'Le passif présent : werden + participe',
      lead: 'werden in position 2 + participle at the end. Singular → wird, plural → werden.',
      leadFr: 'werden en position 2 + participe à la fin. Singulier → wird, pluriel → werden.',
      explanationMd: 'The **passive** focuses on the **action**, not on the doer. Form it with **werden** (position 2) + the **participle** (at the **end**): **Das Haus wird gebaut. Die Autos werden verkauft.** **Singular → wird**, **plural → werden**; the **subject** (the thing that is affected) decides: **Hier wird Deutsch gesprochen.** (no subject noun → **wird**). The **participle** is the same as in the **Perfekt**: **gebaut, repariert, verkauft, geöffnet, hergestellt**. The passive is **common for processes, rules and signs**: **Hier wird nicht geraucht.**',
      explanationMdFr: 'Le **passif** met l’**action** au premier plan, pas l’agent. Forme-le avec **werden** (position 2) + le **participe** (à la **fin**) : **Das Haus wird gebaut. Die Autos werden verkauft.** **Singulier → wird**, **pluriel → werden** ; c’est le **sujet** (la chose concernée) qui décide : **Hier wird Deutsch gesprochen.** (pas de sujet nominal → **wird**). Le **participe** est le même qu’au **Perfekt** : **gebaut, repariert, verkauft, geöffnet, hergestellt**. Le passif est **fréquent pour les processus, règles et panneaux** : **Hier wird nicht geraucht.**',
      tables: [{ title: 'werden + participle', titleFr: 'werden + participe', headers: ['Subject', 'werden', 'Example'], headersFr: ['Sujet', 'werden', 'Exemple'],
        rows: [['singular (das Haus)', 'wird', 'Das Haus wird gebaut.'], ['plural (die Autos)', 'werden', 'Die Autos werden verkauft.'], ['no subject', 'wird', 'Hier wird Deutsch gesprochen.'], ['rule / sign', 'wird', 'Hier wird nicht geraucht.']],
        rowsFr: [['singulier (das Haus)', 'wird', 'Das Haus wird gebaut.'], ['pluriel (die Autos)', 'werden', 'Die Autos werden verkauft.'], ['sans sujet', 'wird', 'Hier wird Deutsch gesprochen.'], ['règle / panneau', 'wird', 'Hier wird nicht geraucht.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das Haus', role: 'subject' }, { text: 'wird', role: 'verb' }, { text: 'gebaut.', role: 'verb' }], en: 'The house is being built.', fr: 'La maison est en construction.' },
        { parts: [{ text: 'Die Autos', role: 'subject' }, { text: 'werden', role: 'verb' }, { text: 'verkauft.', role: 'verb' }], en: 'The cars are sold.', fr: 'Les voitures sont vendues.' },
      ],
      contrast: {
        a: { label: 'Active', labelFr: 'Actif', note: 'who does it', noteFr: 'qui le fait', examples: [g('Man baut ein Haus.', 'One builds a house.', 'On construit une maison.'), g('Die Firma verkauft die Autos.', 'The company sells the cars.', 'L’entreprise vend les voitures.')] },
        b: { label: 'Passive', labelFr: 'Passif', note: 'what happens', noteFr: 'ce qui se passe', examples: [g('Ein Haus wird gebaut.', 'A house is being built.', 'Une maison est en construction.'), g('Die Autos werden verkauft.', 'The cars are sold.', 'Les voitures sont vendues.')] },
      },
      examples: [
        g('Das Haus wird gebaut.', 'The house is being built.', 'La maison est en construction.'),
        g('Die Autos werden verkauft.', 'The cars are sold.', 'Les voitures sont vendues.'),
        g('Hier wird Deutsch gesprochen.', 'German is spoken here.', 'Ici, on parle allemand.'),
        g('Die Tickets werden kontrolliert.', 'The tickets are checked.', 'Les billets sont contrôlés.'),
        g('Der Laden wird um neun geöffnet.', 'The shop is opened at nine.', 'Le magasin est ouvert à neuf heures.'),
        g('Das Produkt wird getestet.', 'The product is tested.', 'Le produit est testé.'),
      ],
      mistakes: [
        { wrong: 'Das Haus werden gebaut.', right: 'Das Haus wird gebaut.', why: 'Singular subject: wird.', whyFr: 'Sujet au singulier : wird.' },
        { wrong: 'Das Haus wird bauen.', right: 'Das Haus wird gebaut.', why: 'The passive needs the participle, not the infinitive.', whyFr: 'Le passif demande le participe, pas l’infinitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l5-e1', prompt: 'Das Haus ___ gebaut. (werden — singular)', answer: 'wird', hint: 'singular passive → wird', hintFr: 'passif singulier → wird' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l5-e2', prompt: 'Die Autos ___ verkauft. (werden — plural)', answer: 'werden', hint: 'plural passive → werden', hintFr: 'passif pluriel → werden' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l5-e4', tokens: ['repariert', 'wird', 'Das Auto'], answer: ['Das Auto', 'wird', 'repariert'], hint: 'Subject, "wird", participle at the end.', hintFr: 'Sujet, « wird », participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l5-e7', prompt: 'Der Laden wird um neun ___. (öffnen → participle)', answer: 'geöffnet', hint: 'participle of öffnen', hintFr: 'participe de öffnen' } },

    // ───────────── 2 · Active to passive ─────────────
    { kind: 'chapter', title: 'Vom Aktiv zum Passiv', titleFr: 'De l’actif au passif', blurb: 'Object becomes subject.', blurbFr: 'L’objet devient sujet.' },

    { kind: 'situation', title: 'Man baut, man öffnet', titleFr: 'On construit, on ouvre',
      setting: 'A teacher shows the transformation on the board.', settingFr: 'Un enseignant montre la transformation au tableau.',
      lines: [
        line('Lehrerin', 'Man repariert das Auto. Das Auto wird repariert. Man baut ein Haus. Ein Haus wird gebaut.', 'One repairs the car. The car is repaired. One builds a house. A house is built.', 'On répare la voiture. La voiture est réparée. On construit une maison. Une maison est construite.'),
        line('Lehrerin', 'Man öffnet den Laden. Der Laden wird geöffnet. Der Prozess ist wichtig, nicht die Person.', 'One opens the shop. The shop is opened. The process is important, not the person.', 'On ouvre le magasin. Le magasin est ouvert. Le processus est important, pas la personne.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l5-aktiv-passiv', title: 'From active to passive', titleFr: 'De l’actif au passif',
      lead: 'The accusative object of the active sentence becomes the subject of the passive; the active subject (man) disappears.',
      leadFr: 'Le complément à l’accusatif de la phrase active devient le sujet du passif ; le sujet actif (man) disparaît.',
      explanationMd: 'The **object** of the active sentence becomes the **subject** of the passive: **Active: Man repariert das Auto. → Passive: Das Auto wird repariert.** The **accusative** (**das Auto**) becomes the **nominative**: **den Laden → der Laden**: **Man öffnet den Laden. → Der Laden wird geöffnet.** The **active subject** (often **man**) simply **disappears**. The passive is **common** for **processes and rules** where the **doer is unknown or unimportant**. If a sentence has **no accusative object**, there is **no subject** in the passive — use **es** or an adverb: **Hier wird getanzt.**',
      explanationMdFr: 'Le **complément d’objet** de la phrase active devient le **sujet** du passif : **Actif : Man repariert das Auto. → Passif : Das Auto wird repariert.** L’**accusatif** (**das Auto**) devient le **nominatif** : **den Laden → der Laden** : **Man öffnet den Laden. → Der Laden wird geöffnet.** Le **sujet actif** (souvent **man**) **disparaît** simplement. Le passif est **fréquent** pour les **processus et règles** où l’**agent est inconnu ou sans importance**. Si une phrase n’a **pas de complément à l’accusatif**, le passif n’a **pas de sujet** — utilise **es** ou un adverbe : **Hier wird getanzt.**',
      tables: [{ title: 'Active → passive', titleFr: 'Actif → passif', headers: ['Active', 'Passive'], headersFr: ['Actif', 'Passif'],
        rows: [['Man repariert das Auto.', 'Das Auto wird repariert.'], ['Man baut ein Haus.', 'Ein Haus wird gebaut.'], ['Man öffnet den Laden.', 'Der Laden wird geöffnet.'], ['Man spricht Deutsch.', 'Hier wird Deutsch gesprochen.']],
        rowsFr: [['Man repariert das Auto.', 'Das Auto wird repariert.'], ['Man baut ein Haus.', 'Ein Haus wird gebaut.'], ['Man öffnet den Laden.', 'Der Laden wird geöffnet.'], ['Man spricht Deutsch.', 'Hier wird Deutsch gesprochen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Man', role: 'subject' }, { text: 'repariert', role: 'verb' }, { text: 'das Auto.', role: 'accusative' }], en: 'One repairs the car.', fr: 'On répare la voiture.' },
        { parts: [{ text: 'Das Auto', role: 'subject' }, { text: 'wird', role: 'verb' }, { text: 'repariert.', role: 'verb' }], en: 'The car is repaired.', fr: 'La voiture est réparée.' },
      ],
      contrast: {
        a: { label: 'Accusative → nominative', labelFr: 'Accusatif → nominatif', note: 'the article changes', noteFr: 'l’article change', examples: [g('Man öffnet den Laden. → Der Laden wird geöffnet.', 'One opens the shop. → The shop is opened.', 'On ouvre le magasin. → Le magasin est ouvert.'), g('Man baut ein Haus. → Ein Haus wird gebaut.', 'One builds a house. → A house is built.', 'On construit une maison. → Une maison est construite.')] },
        b: { label: 'No object', labelFr: 'Sans complément', note: 'no subject', noteFr: 'sans sujet', examples: [g('Man tanzt hier. → Hier wird getanzt.', 'One dances here. → There is dancing here.', 'On danse ici. → Ici, on danse.'), g('Man arbeitet viel. → Es wird viel gearbeitet.', 'One works a lot. → A lot of work is done.', 'On travaille beaucoup. → Il se travaille beaucoup.')] },
      },
      examples: [
        g('Man baut ein Haus. → Ein Haus wird gebaut.', 'One builds a house. → A house is built.', 'On construit une maison. → Une maison est construite.'),
        g('Man öffnet den Laden. → Der Laden wird geöffnet.', 'One opens the shop. → The shop is opened.', 'On ouvre le magasin. → Le magasin est ouvert.'),
        g('Man repariert das Auto. → Das Auto wird repariert.', 'One repairs the car. → The car is repaired.', 'On répare la voiture. → La voiture est réparée.'),
        g('Man kontrolliert die Tickets. → Die Tickets werden kontrolliert.', 'One checks the tickets. → The tickets are checked.', 'On contrôle les billets. → Les billets sont contrôlés.'),
        g('Man verkauft hier Blumen. → Hier werden Blumen verkauft.', 'One sells flowers here. → Flowers are sold here.', 'On vend des fleurs ici. → Ici, on vend des fleurs.'),
        g('Man benutzt den Computer oft. → Der Computer wird oft benutzt.', 'One uses the computer often. → The computer is often used.', 'On utilise souvent l’ordinateur. → L’ordinateur est souvent utilisé.'),
      ],
      mistakes: [
        { wrong: 'Den Laden wird geöffnet.', right: 'Der Laden wird geöffnet.', why: 'The object becomes the subject: nominative.', whyFr: 'L’objet devient le sujet : nominatif.' },
        { wrong: 'Man wird das Auto repariert.', right: 'Das Auto wird repariert.', why: 'Drop man in the passive.', whyFr: 'Supprime man au passif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l5-e3', prompt: 'Which sentence is passive?', promptFr: 'Quelle phrase est au passif ?', options: ['Man baut ein Haus.', 'Ein Haus wird gebaut.', 'Ich baue ein Haus.'], answer: 1, explain: 'Passive = werden + participle: wird gebaut.', explainFr: 'Passif = werden + participe : wird gebaut.', hint: 'Look for "wird/werden" + participle.', hintFr: 'Cherche « wird/werden » + participe.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l5-e5', pairs: [{ de: 'bauen', en: 'gebaut', fr: 'gebaut' }, { de: 'verkaufen', en: 'verkauft', fr: 'verkauft' }, { de: 'öffnen', en: 'geöffnet', fr: 'geöffnet' }], hint: 'Match each verb to its participle.', hintFr: 'Associe chaque verbe à son participe.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l5-e9', tokens: ['gesprochen', 'wird', 'Hier', 'Deutsch'], answer: ['Hier', 'wird', 'Deutsch', 'gesprochen'], hint: 'Front element, then "wird", participle last.', hintFr: 'Élément en tête, puis « wird », participe en dernier.' } },

    // ───────────── 3 · von ─────────────
    { kind: 'chapter', title: 'Wer macht es? „von“ + Dativ', titleFr: 'Qui le fait ? « von » + datif', blurb: 'Naming the doer.', blurbFr: 'Nommer l’agent.' },

    { kind: 'situation', title: 'Von der Chefin geschrieben', titleFr: 'Écrit par la cheffe',
      setting: 'The guide names who does what.', settingFr: 'Le guide nomme qui fait quoi.',
      lines: [
        line('Führer', 'Das Auto wird von dem Mechaniker repariert. Das Haus wird von der Firma gebaut.', 'The car is repaired by the mechanic. The house is built by the company.', 'La voiture est réparée par le mécanicien. La maison est construite par l’entreprise.'),
        line('Besucher', 'Der Brief wird von der Chefin geschrieben. Das Essen wird von einem Koch gekocht.', 'The letter is written by the boss. The food is cooked by a cook.', 'La lettre est écrite par la cheffe. Le repas est cuisiné par un cuisinier.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l5-von', title: 'Naming the doer: von + dative', titleFr: 'Nommer l’agent : von + datif',
      lead: 'If you name the doer, add von + dative. Often it is left out — that is the point of the passive.',
      leadFr: 'Si tu nommes l’agent, ajoute von + datif. Souvent on l’omet — c’est tout l’intérêt du passif.',
      explanationMd: 'If you do want to **name the doer**, add **von + dative**: **Das Auto wird von dem Mechaniker repariert. Das Haus wird von der Firma gebaut. Der Brief wird von der Chefin geschrieben.** **von dem → vom**: **vom Mechaniker**. Often the **doer is left out** — that is the **point** of the passive. Name it only when it is **new or important information**. For **causes or things** (not persons) German also uses **durch** (**durch den Regen beschädigt**), but at B1 **von** is the main choice.',
      explanationMdFr: 'Si tu veux **nommer l’agent**, ajoute **von + datif** : **Das Auto wird von dem Mechaniker repariert. Das Haus wird von der Firma gebaut. Der Brief wird von der Chefin geschrieben.** **von dem → vom** : **vom Mechaniker**. Souvent l’**agent est omis** — c’est l’**intérêt** du passif. Ne le nomme que s’il apporte une **information nouvelle ou importante**. Pour les **causes ou les choses** (pas les personnes), l’allemand utilise aussi **durch** (**durch den Regen beschädigt**), mais en B1 **von** est le choix principal.',
      tables: [{ title: 'von + dative', titleFr: 'von + datif', headers: ['Doer', 'von + dative', 'Example'], headersFr: ['Agent', 'von + datif', 'Exemple'],
        rows: [['der Mechaniker', 'von dem / vom Mechaniker', 'Das Auto wird vom Mechaniker repariert.'], ['die Firma', 'von der Firma', 'Das Haus wird von der Firma gebaut.'], ['die Chefin', 'von der Chefin', 'Der Brief wird von der Chefin geschrieben.'], ['ein Koch', 'von einem Koch', 'Das Essen wird von einem Koch gekocht.']],
        rowsFr: [['der Mechaniker', 'von dem / vom Mechaniker', 'Das Auto wird vom Mechaniker repariert.'], ['die Firma', 'von der Firma', 'Das Haus wird von der Firma gebaut.'], ['die Chefin', 'von der Chefin', 'Der Brief wird von der Chefin geschrieben.'], ['ein Koch', 'von einem Koch', 'Das Essen wird von einem Koch gekocht.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Brief', role: 'subject' }, { text: 'wird', role: 'verb' }, { text: 'von der Chefin', role: 'dative' }, { text: 'geschrieben.', role: 'verb' }], en: 'The letter is written by the boss.', fr: 'La lettre est écrite par la cheffe.' },
        { parts: [{ text: 'Das Essen', role: 'subject' }, { text: 'wird', role: 'verb' }, { text: 'von einem Koch', role: 'dative' }, { text: 'gekocht.', role: 'verb' }], en: 'The food is cooked by a cook.', fr: 'Le repas est cuisiné par un cuisinier.' },
      ],
      contrast: {
        a: { label: 'Without the doer', labelFr: 'Sans l’agent', note: 'process in focus', noteFr: 'le processus au premier plan', examples: [g('Der Brief wird geschrieben.', 'The letter is being written.', 'La lettre est en cours d’écriture.'), g('Das Haus wird gebaut.', 'The house is being built.', 'La maison est en construction.')] },
        b: { label: 'With the doer', labelFr: 'Avec l’agent', note: 'von + dative', noteFr: 'von + datif', examples: [g('Der Brief wird von der Chefin geschrieben.', 'The letter is written by the boss.', 'La lettre est écrite par la cheffe.'), g('Das Haus wird von der Firma gebaut.', 'The house is built by the company.', 'La maison est construite par l’entreprise.')] },
      },
      examples: [
        g('Der Brief wird von der Chefin geschrieben.', 'The letter is written by the boss.', 'La lettre est écrite par la cheffe.'),
        g('Das Essen wird von einem Koch gekocht.', 'The food is cooked by a cook.', 'Le repas est cuisiné par un cuisinier.'),
        g('Das Auto wird von dem Mechaniker repariert.', 'The car is repaired by the mechanic.', 'La voiture est réparée par le mécanicien.'),
        g('Das Haus wird von der Firma gebaut.', 'The house is built by the company.', 'La maison est construite par l’entreprise.'),
        g('Die Kinder werden von den Eltern abgeholt.', 'The children are picked up by their parents.', 'Les enfants sont récupérés par leurs parents.'),
        g('Das Buch wird von vielen Menschen gelesen.', 'The book is read by many people.', 'Le livre est lu par beaucoup de gens.'),
      ],
      mistakes: [
        { wrong: 'Der Brief wird von die Chefin geschrieben.', right: 'Der Brief wird von der Chefin geschrieben.', why: 'von takes the dative: der.', whyFr: 'von prend le datif : der.' },
        { wrong: 'Der Brief wird geschrieben von der Chefin.', right: 'Der Brief wird von der Chefin geschrieben.', why: 'The participle goes to the end.', whyFr: 'Le participe va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l5-e8', prompt: 'How do you name the doer in a passive sentence?', promptFr: 'Comment nomme-t-on l’auteur dans une phrase passive ?', options: ['mit + dative', 'von + dative', 'für + accusative'], answer: 1, explain: 'The doer is added with "von" + dative.', explainFr: 'L’auteur s’ajoute avec « von » + datif.', hint: 'Das Auto wird … dem Mechaniker repariert.', hintFr: 'Das Auto wird … dem Mechaniker repariert.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l5-e10', prompt: 'Listen. By whom is the letter written?', promptFr: 'Écoute. Par qui la lettre est-elle écrite ?', audio: { ttsText: 'Der Brief wird von der Chefin geschrieben.' }, options: ['By the boss', 'By the secretary', 'By a customer'], optionsFr: ['Par la cheffe', 'Par la secrétaire', 'Par un client'], answer: 0, hint: 'Listen after "von der".', hintFr: 'Écoute après « von der ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l5-e6', prompt: 'Listen. What happens in the factory?', promptFr: 'Écoute. Que se passe-t-il à l’usine ?', audio: { ttsText: 'In dieser Fabrik werden jeden Tag hundert Autos hergestellt.' }, options: ['Cars are produced', 'Cars are sold', 'Cars are repaired'], optionsFr: ['On fabrique des voitures', 'On vend des voitures', 'On répare des voitures'], answer: 0, hint: 'Listen for the participle at the end.', hintFr: 'Écoute le participe à la fin.' } },

    { kind: 'pronunciation', focus: 'Passive lives in "wird/werden" + a participle; the participle often starts with "ge-"', focusFr: 'Le passif vit dans « wird/werden » + un participe ; le participe commence souvent par « ge- »', items: [{ id: 'b1l5-wird-pron', german: 'wird gebaut', english: 'is built', french: 'est construit', gender: null, syllables: ['wird', 'ge', 'BAUT'], pronunciation: 'virt ge-BOWT', example: { de: 'Das Haus wird gebaut.', en: 'The house is built.', fr: 'La maison est construite.' } }, { id: 'b1l5-werden-pron', german: 'werden verkauft', english: 'are sold', french: 'sont vendus', gender: null, syllables: ['wer', 'den', 'ver', 'KAUFT'], pronunciation: 'VAIR-den fair-KOWFT', example: { de: 'Die Blumen werden verkauft.', en: 'The flowers are sold.', fr: 'Les fleurs sont vendues.' } }] },

    { kind: 'wrapup',
      summary: 'You can now form the **passive** (**werden + participle**), turn **active into passive** and name the doer with **von + dative**. 🎉',
      summaryFr: 'Tu sais maintenant former le **passif** (**werden + participe**), transformer l’**actif en passif** et nommer l’agent avec **von + datif**. 🎉',
      card: { title: 'The passive on one page', titleFr: 'Le passif en une page', sections: [
        { heading: 'Form', headingFr: 'Forme', rows: [g('wird / werden + participle', 'participle at the end', 'participe à la fin')] },
        { heading: 'Active → passive', headingFr: 'Actif → passif', rows: [g('Man repariert das Auto. → Das Auto wird repariert.', 'object → subject', 'objet → sujet')] },
        { heading: 'Doer', headingFr: 'Agent', rows: [g('von + dative', 'von der Chefin', 'von der Chefin')] },
      ] } },
  ],
};

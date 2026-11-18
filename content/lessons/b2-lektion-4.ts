import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion4: Lesson = {
  id: 'b2-l4', level: 'B2', module: 2, number: 4,
  title: { de: 'Verben mit Nomen', en: 'Noun–verb phrases', fr: 'Locutions verbe + nom' },
  theme: 'Fixed noun–verb combinations (Funktionsverbgefüge) such as in Frage stellen, zur Verfügung stehen, Rücksicht nehmen', themeFr: 'Locutions verbe + nom figées (Funktionsverbgefüge) comme in Frage stellen, zur Verfügung stehen, Rücksicht nehmen',
  goals: ['Recognise common noun–verb phrases', 'Know which preposition and article they take', 'Replace a simple verb with a phrase in formal writing', 'Use them correctly in context'], goalsFr: ['Reconnaître les locutions verbe + nom courantes', 'Connaître la préposition et l’article qu’elles demandent', 'Remplacer un verbe simple par une locution à l’écrit formel', 'Les employer correctement en contexte'],
  canDo: g('Ich kann feste Nomen-Verb-Verbindungen erkennen, mit der richtigen Präposition und dem richtigen Artikel verwenden und in formellen Texten einsetzen.', 'I can recognise fixed noun–verb phrases, use them with the right preposition and article and use them in formal texts.', 'Je sais reconnaître des locutions nom-verbe fixes, les utiliser avec la bonne préposition et le bon article et les employer dans des textes formels.'),
  steps: [
    { kind: 'intro', title: 'Nomen-Verb-Verbindungen 🧩', titleFr: 'Locutions nom-verbe 🧩',
      scene: 'A company announces a new rule. The announcement is full of fixed phrases: in Kraft treten, zur Verfügung stehen, Kritik üben.', sceneFr: 'Une entreprise annonce une nouvelle règle. L’annonce est pleine d’expressions fixes : in Kraft treten, zur Verfügung stehen, Kritik üben.',
      goals: ['Recognise common noun–verb phrases', 'Know which preposition and article they take', 'Use them in formal writing'],
      goalsFr: ['Reconnaître les locutions nom-verbe courantes', 'Savoir quelle préposition et quel article elles prennent', 'Les utiliser à l’écrit formel'] },

    // ───────────── 1 · What they are ─────────────
    { kind: 'chapter', title: 'Was sind Funktionsverbgefüge?', titleFr: 'Que sont les Funktionsverbgefüge ?', blurb: 'The noun carries the meaning.', blurbFr: 'Le nom porte le sens.' },

    { kind: 'situation', title: 'Die neue Regel', titleFr: 'La nouvelle règle',
      setting: 'The management announces a change to the staff.', settingFr: 'La direction annonce un changement au personnel.',
      lines: [
        line('Direktorin', 'Das Unternehmen trifft heute eine Entscheidung. Die neue Regel tritt im Januar in Kraft. Bitte nehmen Sie die Änderung zur Kenntnis.', 'The company makes a decision today. The new rule comes into force in January. Please take note of the change.', 'L’entreprise prend aujourd’hui une décision. La nouvelle règle entre en vigueur en janvier. Veuillez prendre connaissance de la modification.'),
        line('Mitarbeiter', 'Viele üben Kritik an der Entscheidung. Der Chef stellt den Plan in Frage. Der Preis spielt eine große Rolle.', 'Many criticise the decision. The boss questions the plan. The price plays a big role.', 'Beaucoup critiquent la décision. Le chef remet le plan en question. Le prix joue un grand rôle.'),
        line('Direktorin', 'Ein Auto steht Ihnen zur Verfügung. Sie können unsere Hilfe in Anspruch nehmen. Wir stellen Ihnen einen Raum zur Verfügung. Wir nehmen Rücksicht auf die Nachbarn. Er übernimmt die Verantwortung für das Team.', 'A car is available to you. You can make use of our help. We make a room available to you. We show consideration for the neighbours. He takes responsibility for the team.', 'Une voiture est à votre disposition. Vous pouvez recourir à notre aide. Nous mettons une salle à votre disposition. Nous tenons compte des voisins. Il assume la responsabilité de l’équipe.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l4-e11', prompt: 'When does the new rule come into force?', promptFr: 'Quand la nouvelle règle entre-t-elle en vigueur ?', options: ['In January', 'Tomorrow', 'Next year'], optionsFr: ['En janvier', 'Demain', 'L’année prochaine'], answer: 0, explain: 'The director says: “Die neue Regel tritt im Januar in Kraft.”', explainFr: 'La directrice dit : « Die neue Regel tritt im Januar in Kraft. »', hint: 'Look for “in Kraft”.', hintFr: 'Cherche « in Kraft ».' } },

    { kind: 'wordgroup', title: 'Entscheiden und verfügen', titleFr: 'Décider et mettre à disposition',
      items: [{ id: 'b2l4-entscheidung', german: 'eine Entscheidung treffen', english: 'to make a decision', french: 'prendre une décision', gender: null, syllables: ['ei', 'ne', 'ent', 'SCHEI', 'dung', 'TREF', 'fen'], pronunciation: 'eye-ne ent-SHY-doong TREF-fen', example: { de: 'Wir müssen heute eine Entscheidung treffen.', en: 'We have to make a decision today.', fr: 'Nous devons prendre une décision aujourd’hui.' } }, { id: 'b2l4-in-frage-stellen', german: 'in Frage stellen', english: 'to question / call into doubt', french: 'remettre en question', gender: null, syllables: ['in', 'FRA', 'ge', 'STEL', 'len'], pronunciation: 'in FRAH-ge SHTEL-len', example: { de: 'Der Chef stellt den Plan in Frage.', en: 'The boss questions the plan.', fr: 'Le chef remet le plan en question.' } }, { id: 'b2l4-zur-verfuegung', german: 'zur Verfügung stehen', english: 'to be available', french: 'être à disposition', gender: null, syllables: ['zur', 'ver', 'FÜ', 'gung', 'ste', 'hen'], pronunciation: 'tsoor fer-FUE-goong SHTAY-en', example: { de: 'Ein Auto steht Ihnen zur Verfügung.', en: 'A car is at your disposal.', fr: 'Une voiture est à votre disposition.' } }, { id: 'b2l4-anspruch', german: 'in Anspruch nehmen', english: 'to make use of / claim', french: 'faire valoir / recourir à', gender: null, syllables: ['in', 'AN', 'spruch', 'neh', 'men'], pronunciation: 'in AHN-shprookh NAY-men', example: { de: 'Sie können unsere Hilfe in Anspruch nehmen.', en: 'You can make use of our help.', fr: 'Vous pouvez recourir à notre aide.' } }, { id: 'b2l4-kenntnis', german: 'zur Kenntnis nehmen', english: 'to take note of', french: 'prendre connaissance de', gender: null, syllables: ['zur', 'KENNT', 'nis', 'neh', 'men'], pronunciation: 'tsoor KENT-nis NAY-men', example: { de: 'Bitte nehmen Sie die Änderung zur Kenntnis.', en: 'Please take note of the change.', fr: 'Veuillez prendre connaissance du changement.' } }] },

    { kind: 'wordgroup', title: 'Wirken und verantworten', titleFr: 'Produire un effet et assumer',
      items: [{ id: 'b2l4-kraft', german: 'in Kraft treten', english: 'to come into force', french: 'entrer en vigueur', gender: null, syllables: ['in', 'KRAFT', 'tre', 'ten'], pronunciation: 'in KRAFT TRAY-ten', example: { de: 'Das Gesetz tritt morgen in Kraft.', en: 'The law comes into force tomorrow.', fr: 'La loi entre en vigueur demain.' } }, { id: 'b2l4-kritik', german: 'Kritik üben an', english: 'to criticise', french: 'critiquer', gender: null, syllables: ['kri', 'TIK', 'Ü', 'ben', 'an'], pronunciation: 'kri-TEEK UE-ben ahn', example: { de: 'Viele üben Kritik an der Entscheidung.', en: 'Many criticise the decision.', fr: 'Beaucoup critiquent la décision.' } }, { id: 'b2l4-bedeutung', german: 'eine Rolle spielen', english: 'to play a role', french: 'jouer un rôle', gender: null, syllables: ['ei', 'ne', 'ROL', 'le', 'SPIE', 'len'], pronunciation: 'eye-ne ROL-le SHPEE-len', example: { de: 'Der Preis spielt eine große Rolle.', en: 'The price plays a big role.', fr: 'Le prix joue un grand rôle.' } }, { id: 'b2l4-verantwortung', german: 'Verantwortung übernehmen', english: 'to take responsibility', french: 'assumer la responsabilité', gender: null, syllables: ['ver', 'ANT', 'wor', 'tung', 'ü', 'ber', 'NEH', 'men'], pronunciation: 'fer-AHNT-vor-toong ue-ber-NAY-men', example: { de: 'Er übernimmt die Verantwortung für das Team.', en: 'He takes responsibility for the team.', fr: 'Il assume la responsabilité de l’équipe.' } }, { id: 'b2l4-ruecksicht', german: 'Rücksicht nehmen auf', english: 'to show consideration for', french: 'tenir compte de', gender: null, syllables: ['RÜCK', 'sicht', 'neh', 'men', 'auf'], pronunciation: 'RUEK-zikht NAY-men owf', example: { de: 'Wir nehmen Rücksicht auf die Nachbarn.', en: 'We show consideration for the neighbours.', fr: 'Nous tenons compte des voisins.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l4-fvg', title: 'The noun–verb phrase (Funktionsverbgefüge)', titleFr: 'La locution nom-verbe (Funktionsverbgefüge)',
      lead: 'A fixed combination of a noun and a verb with little meaning of its own. Learn the whole phrase with its preposition and article.',
      leadFr: 'Une combinaison fixe d’un nom et d’un verbe presque vide de sens. Apprends toute l’expression avec sa préposition et son article.',
      explanationMd: 'A **Funktionsverbgefüge** is a **fixed combination of a noun and a verb with little meaning of its own**. The **noun carries the meaning**, the verb only **conjugates**: **eine Entscheidung treffen = entscheiden**, **in Frage stellen = bezweifeln**, **zur Verfügung stehen = verfügbar sein**, **in Kraft treten = gültig werden**. The **preposition and article are fixed** — **learn the whole phrase**. Often a **passive or “can be” sense**: **zur Verfügung stehen, in Kraft treten**. The **verbs** you meet most: **stellen, treffen, nehmen, treten, stehen, üben, spielen, übernehmen, bringen, geben**.',
      explanationMdFr: 'Un **Funktionsverbgefüge** est une **combinaison fixe d’un nom et d’un verbe presque vide de sens**. Le **nom porte le sens**, le verbe ne fait que **se conjuguer** : **eine Entscheidung treffen = entscheiden**, **in Frage stellen = bezweifeln**, **zur Verfügung stehen = verfügbar sein**, **in Kraft treten = gültig werden**. La **préposition et l’article sont fixes** — **apprends toute l’expression**. Souvent un **sens passif ou « pouvoir être »** : **zur Verfügung stehen, in Kraft treten**. Les **verbes** les plus fréquents : **stellen, treffen, nehmen, treten, stehen, üben, spielen, übernehmen, bringen, geben**.',
      tables: [{ title: 'Common noun–verb phrases', titleFr: 'Locutions nom-verbe courantes', headers: ['Phrase', 'Simple verb', 'Example'], headersFr: ['Locution', 'Verbe simple', 'Exemple'],
        rows: [['eine Entscheidung treffen', 'entscheiden', 'Das Unternehmen trifft heute eine Entscheidung.'], ['in Frage stellen', 'bezweifeln', 'Der Chef stellt den Plan in Frage.'], ['zur Verfügung stehen', 'verfügbar sein', 'Ein Auto steht Ihnen zur Verfügung.'], ['in Kraft treten', 'gültig werden', 'Die neue Regel tritt im Januar in Kraft.'], ['zur Kenntnis nehmen', 'beachten', 'Bitte nehmen Sie die Änderung zur Kenntnis.'], ['Kritik üben an', 'kritisieren', 'Viele üben Kritik an der Entscheidung.']],
        rowsFr: [['eine Entscheidung treffen', 'entscheiden', 'Das Unternehmen trifft heute eine Entscheidung.'], ['in Frage stellen', 'bezweifeln', 'Der Chef stellt den Plan in Frage.'], ['zur Verfügung stehen', 'verfügbar sein', 'Ein Auto steht Ihnen zur Verfügung.'], ['in Kraft treten', 'gültig werden', 'Die neue Regel tritt im Januar in Kraft.'], ['zur Kenntnis nehmen', 'beachten', 'Bitte nehmen Sie die Änderung zur Kenntnis.'], ['Kritik üben an', 'kritisieren', 'Viele üben Kritik an der Entscheidung.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Das Unternehmen', role: 'subject' }, { text: 'trifft', role: 'verb' }, { text: 'heute', role: 'time' }, { text: 'eine Entscheidung.', role: 'accusative' }], en: 'The company makes a decision today.', fr: 'L’entreprise prend aujourd’hui une décision.' },
        { parts: [{ text: 'Die neue Regel', role: 'subject' }, { text: 'tritt', role: 'verb' }, { text: 'im Januar', role: 'time' }, { text: 'in Kraft.', role: 'other' }], en: 'The new rule comes into force in January.', fr: 'La nouvelle règle entre en vigueur en janvier.' },
      ],
      contrast: {
        a: { label: 'Simple verb', labelFr: 'Verbe simple', note: 'plain style', noteFr: 'style simple', examples: [g('Das Unternehmen entscheidet heute.', 'The company decides today.', 'L’entreprise décide aujourd’hui.'), g('Man kritisiert die Entscheidung.', 'People criticise the decision.', 'On critique la décision.')] },
        b: { label: 'Noun–verb phrase', labelFr: 'Locution nom-verbe', note: 'formal, allows adjectives', noteFr: 'formel, permet des adjectifs', examples: [g('Das Unternehmen trifft heute eine wichtige Entscheidung.', 'The company makes an important decision today.', 'L’entreprise prend aujourd’hui une décision importante.'), g('Man übt scharfe Kritik an der Entscheidung.', 'People sharply criticise the decision.', 'On critique vivement la décision.')] },
      },
      examples: [
        g('Das Unternehmen trifft heute eine Entscheidung.', 'The company makes a decision today.', 'L’entreprise prend aujourd’hui une décision.'),
        g('Die neue Regel tritt im Januar in Kraft.', 'The new rule comes into force in January.', 'La nouvelle règle entre en vigueur en janvier.'),
        g('Ein Auto steht Ihnen zur Verfügung.', 'A car is available to you.', 'Une voiture est à votre disposition.'),
        g('Der Chef stellt den Plan in Frage.', 'The boss questions the plan.', 'Le chef remet le plan en question.'),
        g('Bitte nehmen Sie die Änderung zur Kenntnis.', 'Please take note of the change.', 'Veuillez prendre connaissance de la modification.'),
        g('Der Preis spielt eine große Rolle.', 'The price plays a big role.', 'Le prix joue un grand rôle.'),
      ],
      mistakes: [
        { wrong: 'Das Gesetz tritt in der Kraft.', right: 'Das Gesetz tritt in Kraft.', why: 'The phrase has no article: in Kraft treten.', whyFr: 'L’expression n’a pas d’article : in Kraft treten.' },
        { wrong: 'Ein Auto steht Ihnen zu Verfügung.', right: 'Ein Auto steht Ihnen zur Verfügung.', why: 'zu + der = zur.', whyFr: 'zu + der = zur.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l4-e1', prompt: 'Das Gesetz tritt morgen in ___ . (force)', answer: 'Kraft', hint: 'in Kraft treten', hintFr: 'in Kraft treten' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l4-e2', prompt: 'Wir müssen heute eine Entscheidung ___ . (make)', answer: 'treffen', hint: 'eine Entscheidung treffen', hintFr: 'eine Entscheidung treffen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l4-e3', prompt: 'Which phrase means "to be available"?', promptFr: 'Quelle expression signifie « être disponible / à disposition » ?', options: ['zur Verfügung stehen', 'in Frage stellen', 'zur Kenntnis nehmen'], answer: 0, explain: '"zur Verfügung stehen" = to be available.', explainFr: '« zur Verfügung stehen » = être à disposition.', hint: 'Verfügung = disposal.', hintFr: 'Verfügung = disposition.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l4-e8', tokens: ['stellt', 'Der', 'in Frage', 'Chef', 'den Plan'], answer: ['Der', 'Chef', 'stellt', 'den Plan', 'in Frage'], hint: 'The phrase "in Frage" comes at the end.', hintFr: 'L’expression « in Frage » vient à la fin.' } },

    // ───────────── 2 · Prepositions and style ─────────────
    { kind: 'chapter', title: 'Präpositionen und Stil', titleFr: 'Prépositions et style', blurb: 'in, zu, an, auf, unter.', blurbFr: 'in, zu, an, auf, unter.' },

    { kind: 'situation', title: 'Förmlich formulieren', titleFr: 'Formuler de façon formelle',
      setting: 'An assistant helps to rewrite a letter.', settingFr: 'Une assistante aide à réécrire une lettre.',
      lines: [
        line('Assistentin', 'Wir entscheiden. → Wir treffen eine schwierige Entscheidung. Man kritisiert das. → Man übt scharfe Kritik daran.', 'We decide. → We make a difficult decision. People criticise that. → People sharply criticise it.', 'Nous décidons. → Nous prenons une décision difficile. On critique cela. → On le critique vivement.'),
        line('Chefin', 'Der Kunde übt scharfe Kritik an der Firma. Wir stellen Ihnen einen Raum zur Verfügung. Wir nehmen Rücksicht auf die Nachbarn.', 'The customer sharply criticises the company. We make a room available to you. We show consideration for the neighbours.', 'Le client critique vivement l’entreprise. Nous mettons une salle à votre disposition. Nous tenons compte des voisins.'),
        line('Assistentin', 'Beachten Sie: in Kraft, in Frage, in Anspruch; zur Verfügung, zur Kenntnis; Kritik an; Rücksicht auf.', 'Note: in Kraft, in Frage, in Anspruch; zur Verfügung, zur Kenntnis; Kritik an; Rücksicht auf.', 'Note : in Kraft, in Frage, in Anspruch ; zur Verfügung, zur Kenntnis ; Kritik an ; Rücksicht auf.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b2l4-praepositionen', title: 'Prepositions and style of noun–verb phrases', titleFr: 'Prépositions et style des locutions nom-verbe',
      lead: 'The noun can take adjectives, making the phrase more precise. Watch the prepositions: in, zur / zum, an, auf, unter.',
      leadFr: 'Le nom peut recevoir des adjectifs, ce qui précise l’expression. Surveille les prépositions : in, zur / zum, an, auf, unter.',
      explanationMd: 'They are common in **official, written and news German**. You can often swap them for a **simple verb**, but the phrase sounds **more formal** or lets you **add adjectives to the noun**: **Wir entscheiden. → Wir treffen eine schwierige Entscheidung.** **Man kritisiert das. → Man übt scharfe Kritik daran.** **Prepositions** you meet most: **in** (**Kraft, Frage, Anspruch**), **zur / zum** (**Verfügung, Kenntnis, Ausdruck**), **unter** (**Beweis stellen**), **auf** (**Rücksicht nehmen**), **an** (**Kritik üben**). **Rule**: **learn the preposition together with the noun**; the **verb** is often **stellen, nehmen, treten, üben, treffen**.',
      explanationMdFr: 'Elles sont fréquentes dans l’**allemand officiel, écrit et journalistique**. Tu peux souvent les remplacer par un **verbe simple**, mais l’expression sonne **plus formelle** ou permet d’**ajouter des adjectifs au nom** : **Wir entscheiden. → Wir treffen eine schwierige Entscheidung.** **Man kritisiert das. → Man übt scharfe Kritik daran.** **Prépositions** les plus fréquentes : **in** (**Kraft, Frage, Anspruch**), **zur / zum** (**Verfügung, Kenntnis, Ausdruck**), **unter** (**Beweis stellen**), **auf** (**Rücksicht nehmen**), **an** (**Kritik üben**). **Règle** : **apprends la préposition avec le nom** ; le **verbe** est souvent **stellen, nehmen, treten, üben, treffen**.',
      tables: [{ title: 'Prepositions', titleFr: 'Prépositions', headers: ['Preposition', 'Phrases'], headersFr: ['Préposition', 'Locutions'],
        rows: [['in', 'in Kraft treten · in Frage stellen · in Anspruch nehmen'], ['zur / zum', 'zur Verfügung stehen · zur Kenntnis nehmen · zum Ausdruck bringen'], ['an', 'Kritik üben an · Interesse zeigen an'], ['auf', 'Rücksicht nehmen auf · Einfluss nehmen auf'], ['unter', 'unter Beweis stellen · unter Druck setzen']],
        rowsFr: [['in', 'in Kraft treten · in Frage stellen · in Anspruch nehmen'], ['zur / zum', 'zur Verfügung stehen · zur Kenntnis nehmen · zum Ausdruck bringen'], ['an', 'Kritik üben an · Interesse zeigen an'], ['auf', 'Rücksicht nehmen auf · Einfluss nehmen auf'], ['unter', 'unter Beweis stellen · unter Druck setzen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Kunde', role: 'subject' }, { text: 'übt', role: 'verb' }, { text: 'scharfe Kritik', role: 'accusative' }, { text: 'an der Firma.', role: 'dative' }], en: 'The customer sharply criticises the company.', fr: 'Le client critique vivement l’entreprise.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'nehmen', role: 'verb' }, { text: 'Rücksicht', role: 'accusative' }, { text: 'auf die Nachbarn.', role: 'accusative' }], en: 'We show consideration for the neighbours.', fr: 'Nous tenons compte des voisins.' },
      ],
      contrast: {
        a: { label: 'Spoken', labelFr: 'Oral', note: 'simple verb', noteFr: 'verbe simple', examples: [g('Wir helfen Ihnen.', 'We help you.', 'Nous vous aidons.'), g('Wir kritisieren das.', 'We criticise that.', 'Nous critiquons cela.')] },
        b: { label: 'Formal writing', labelFr: 'Écrit formel', note: 'noun–verb phrase', noteFr: 'locution nom-verbe', examples: [g('Sie können unsere Hilfe in Anspruch nehmen.', 'You can make use of our help.', 'Vous pouvez recourir à notre aide.'), g('Viele üben Kritik an der Entscheidung.', 'Many criticise the decision.', 'Beaucoup critiquent la décision.')] },
      },
      examples: [
        g('Der Kunde übt scharfe Kritik an der Firma.', 'The customer sharply criticises the company.', 'Le client critique vivement l’entreprise.'),
        g('Wir stellen Ihnen einen Raum zur Verfügung.', 'We make a room available to you.', 'Nous mettons une salle à votre disposition.'),
        g('Sie können unsere Hilfe in Anspruch nehmen.', 'You can make use of our help.', 'Vous pouvez recourir à notre aide.'),
        g('Wir nehmen Rücksicht auf die Nachbarn.', 'We show consideration for the neighbours.', 'Nous tenons compte des voisins.'),
        g('Er übernimmt die Verantwortung für das Team.', 'He takes responsibility for the team.', 'Il assume la responsabilité de l’équipe.'),
        g('Wir treffen eine schwierige Entscheidung.', 'We make a difficult decision.', 'Nous prenons une décision difficile.'),
      ],
      mistakes: [
        { wrong: 'Wir nehmen Rücksicht an die Nachbarn.', right: 'Wir nehmen Rücksicht auf die Nachbarn.', why: 'Rücksicht nehmen goes with auf.', whyFr: 'Rücksicht nehmen va avec auf.' },
        { wrong: 'Viele üben Kritik für der Entscheidung.', right: 'Viele üben Kritik an der Entscheidung.', why: 'Kritik üben goes with an + dative.', whyFr: 'Kritik üben va avec an + datif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l4-e4', prompt: 'Which preposition? "Rücksicht ___ die Nachbarn nehmen"', promptFr: 'Quelle préposition ? « Rücksicht ___ die Nachbarn nehmen »', options: ['auf', 'an', 'zu'], answer: 0, explain: '"Rücksicht nehmen auf" + Akkusativ.', explainFr: '« Rücksicht nehmen auf » + accusatif.', hint: 'Rücksicht nehmen auf', hintFr: 'Rücksicht nehmen auf' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l4-e5', prompt: 'Viele üben Kritik ___ der Entscheidung. (an)', answer: 'an', hint: 'Kritik üben an + Dativ', hintFr: 'Kritik üben an + datif' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b2l4-e6', pairs: [{ de: 'in Kraft treten', en: 'to come into force', fr: 'entrer en vigueur' }, { de: 'in Frage stellen', en: 'to call into doubt', fr: 'remettre en question' }, { de: 'zur Kenntnis nehmen', en: 'to take note of', fr: 'prendre connaissance de' }, { de: 'eine Rolle spielen', en: 'to play a role', fr: 'jouer un rôle' }], hint: 'Match each phrase to its meaning.', hintFr: 'Associe chaque expression à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l4-e9', prompt: 'Which sentence is more formal?', promptFr: 'Quelle phrase est plus formelle ?', options: ['Wir entscheiden das morgen.', 'Wir treffen morgen eine Entscheidung.', 'Wir sagen es morgen.'], answer: 1, explain: 'The noun–verb phrase sounds more formal.', explainFr: 'La locution verbe + nom sonne plus formel.', hint: 'Look for the noun–verb phrase.', hintFr: 'Cherche la locution verbe + nom.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l4-e7', prompt: 'Listen. What happens tomorrow?', promptFr: 'Écoute. Que se passe-t-il demain ?', audio: { ttsText: 'Das neue Gesetz tritt morgen in Kraft.' }, options: ['A new law takes effect', 'A meeting is cancelled', 'A shop opens'], optionsFr: ['Une nouvelle loi entre en vigueur', 'Une réunion est annulée', 'Un magasin ouvre'], answer: 0, hint: 'in Kraft treten.', hintFr: 'in Kraft treten.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l4-e10', prompt: 'Listen. What does the speaker offer?', promptFr: 'Écoute. Qu’offre le locuteur ?', audio: { ttsText: 'Wir stellen Ihnen gern einen Raum zur Verfügung.' }, options: ['A room', 'A ticket', 'A discount'], optionsFr: ['Une salle', 'Un billet', 'Une réduction'], answer: 0, hint: 'zur Verfügung stellen.', hintFr: 'zur Verfügung stellen.' } },

    { kind: 'pronunciation', focus: 'In longer phrases the noun carries the main stress: "in FRAge stellen", "Rücksicht NEHmen", "in KRAFT treten"', focusFr: 'Dans les locutions, le nom porte l’accent principal : « in FRAge stellen », « Rücksicht NEHmen », « in KRAFT treten »', items: [{ id: 'b2l4-verfuegung-pron', german: 'Verfügung', english: 'disposal', french: 'disposition', gender: null, syllables: ['ver', 'FÜ', 'gung'], pronunciation: 'fer-FUE-goong', example: { de: 'Das steht zur Verfügung.', en: 'That is available.', fr: 'C’est à disposition.' } }, { id: 'b2l4-kraft-pron', german: 'Kraft', english: 'force', french: 'vigueur', gender: null, syllables: ['KRAFT'], pronunciation: 'kraft', example: { de: 'Es tritt in Kraft.', en: 'It comes into force.', fr: 'Cela entre en vigueur.' } }] },

    { kind: 'wrapup',
      summary: 'You can now recognise **noun–verb phrases** (**in Kraft treten, zur Verfügung stehen, Kritik üben**), use the **right preposition** and write in a **more formal style**. 🎉',
      summaryFr: 'Tu sais maintenant reconnaître les **locutions nom-verbe** (**in Kraft treten, zur Verfügung stehen, Kritik üben**), utiliser la **bonne préposition** et écrire dans un **style plus formel**. 🎉',
      card: { title: 'Noun–verb phrases on one page', titleFr: 'Les locutions nom-verbe en une page', sections: [
        { heading: 'Idea', headingFr: 'Idée', rows: [g('noun carries the meaning', 'verb just conjugates', 'le verbe ne fait que se conjuguer')] },
        { heading: 'Learn together', headingFr: 'Apprendre ensemble', rows: [g('in Kraft treten · zur Verfügung stehen', 'preposition + noun + verb', 'préposition + nom + verbe'), g('Kritik üben an · Rücksicht nehmen auf', 'fixed preposition', 'préposition fixe')] },
        { heading: 'Style', headingFr: 'Style', rows: [g('formal and precise', 'allows adjectives', 'permet des adjectifs')] },
      ] } },
  ],
};

import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion1: Lesson = {
  id: 'b1-l1', level: 'B1', module: 1, number: 1,
  title: { de: 'Höflich und hypothetisch', en: 'Polite and hypothetical', fr: 'Poli et hypothétique' },
  theme: 'Konjunktiv II for polite requests and wishes (würde, hätte, wäre, könnte)', themeFr: 'Le Konjunktiv II pour les demandes polies et les souhaits (würde, hätte, wäre, könnte)',
  goals: ['Make polite requests with "könnten" and "würden"', 'Express wishes with "Ich hätte gern / Ich würde gern"', 'Use "wäre" and "hätte"', 'Soften statements with the Konjunktiv II'], goalsFr: ['Faire des demandes polies avec « könnten » et « würden »', 'Exprimer des souhaits avec « Ich hätte gern / Ich würde gern »', 'Utiliser « wäre » et « hätte »', 'Adoucir des affirmations avec le Konjunktiv II'],
  canDo: g('Ich kann höflich bitten, Wünsche äußern und Hypothetisches mit „würde“, „hätte“, „wäre“ und „könnte“ ausdrücken.', 'I can ask politely, express wishes and talk about hypothetical things with “würde”, “hätte”, “wäre” and “könnte”.', 'Je sais demander poliment, exprimer des souhaits et parler de choses hypothétiques avec « würde », « hätte », « wäre » et « könnte ».'),
  steps: [
    { kind: 'intro', title: 'Höflich und hypothetisch 🎩', titleFr: 'Poli et hypothétique 🎩',
      scene: 'Lara is at the hotel desk, in a shop and on the phone — and every request needs the right tone.', sceneFr: 'Lara est à la réception d’un hôtel, dans un magasin et au téléphone — et chaque demande demande le bon ton.',
      goals: ['Make polite requests with könnten and würden', 'Use hätte, wäre, könnte instead of würde', 'Soften statements and talk about hypothetical situations'],
      goalsFr: ['Formuler des demandes polies avec könnten et würden', 'Utiliser hätte, wäre, könnte au lieu de würde', 'Adoucir des affirmations et parler de situations hypothétiques'] },

    // ───────────── 1 · würde ─────────────
    { kind: 'chapter', title: 'Konjunktiv II mit „würde“', titleFr: 'Le Konjunktiv II avec « würde »', blurb: 'The easy way to be polite.', blurbFr: 'La façon simple d’être poli.' },

    { kind: 'situation', title: 'Eine höfliche Bitte', titleFr: 'Une demande polie',
      setting: 'Lara talks to a hotel employee and to a friend.', settingFr: 'Lara parle à un employé d’hôtel et à une amie.',
      lines: [
        line('Lara', 'Guten Tag. Ich würde gern einen Termin machen. Würden Sie bitte kurz warten?', 'Good day. I would like to make an appointment. Would you please wait briefly?', 'Bonjour. Je voudrais prendre un rendez-vous. Voudriez-vous patienter un instant ?'),
        line('Mitarbeiter', 'Gern. Wann würde es Ihnen passen?', 'Gladly. When would it suit you?', 'Volontiers. Quand cela vous conviendrait-il ?'),
        line('Lara', 'Ich würde vorschlagen, wir treffen uns um acht. Ist das möglich?', 'I would suggest that we meet at eight. Is that possible?', 'Je proposerais que nous nous retrouvions à huit heures. Est-ce possible ?'),
        line('Mitarbeiter', 'Das wäre kein Problem. Haben Sie noch einen Wunsch?', 'That would be no problem. Do you have any other wish?', 'Ce ne serait pas un problème. Avez-vous un autre souhait ?'),
        line('Lara', 'Ich habe eine Bitte: Am liebsten würde ich einen ruhigen Raum nehmen.', 'I have a request: I would prefer to take a quiet room.', 'J’ai une demande : je préférerais prendre une pièce calme.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l1-e11', prompt: 'What does Lara prefer?', promptFr: 'Que préfère Lara ?', options: ['A quiet room', 'A big room', 'A cheap room'], optionsFr: ['Une pièce calme', 'Une grande pièce', 'Une pièce bon marché'], answer: 0, explain: 'She says: “Am liebsten würde ich einen ruhigen Raum nehmen.”', explainFr: 'Elle dit : « Am liebsten würde ich einen ruhigen Raum nehmen. »', hint: 'Look for “am liebsten”.', hintFr: 'Cherche « am liebsten ».' } },

    { kind: 'wordgroup', title: 'Höflich sein', titleFr: 'Être poli',
      items: [{ id: 'b1l1-wuerde', german: 'würde', english: 'would', french: 'conditionnel (je ferais)', gender: null, syllables: ['WÜR', 'de'], pronunciation: 'VUER-de', example: { de: 'Ich würde gern kommen.', en: 'I would like to come.', fr: 'Je viendrais volontiers.' } }, { id: 'b1l1-wunsch', german: 'der Wunsch', english: 'the wish', french: 'le souhait', gender: 'der', syllables: ['WUNSCH'], pronunciation: 'dair VOONSH', example: { de: 'Haben Sie einen Wunsch?', en: 'Do you have a wish/request?', fr: 'Avez-vous un souhait ?' } }, { id: 'b1l1-hoeflich', german: 'höflich', english: 'polite', french: 'poli', gender: null, syllables: ['HÖF', 'lich'], pronunciation: 'HOEF-likh', example: { de: 'Sei bitte höflich.', en: 'Please be polite.', fr: 'Sois poli, s’il te plaît.' } }, { id: 'b1l1-bitte-n', german: 'die Bitte', english: 'the request', french: 'la demande', gender: 'die', syllables: ['BIT', 'te'], pronunciation: 'dee BIT-te', example: { de: 'Ich habe eine Bitte.', en: 'I have a request.', fr: 'J’ai une demande.' } }, { id: 'b1l1-vorschlagen', german: 'vorschlagen', english: 'to suggest', french: 'proposer', gender: null, syllables: ['VOR', 'schla', 'gen'], pronunciation: 'FOR-shlah-gen', example: { de: 'Ich würde vorschlagen, wir treffen uns um acht.', en: 'I would suggest we meet at eight.', fr: 'Je proposerais qu’on se retrouve à huit heures.' } }, { id: 'b1l1-moeglich', german: 'möglich', english: 'possible', french: 'possible', gender: null, syllables: ['MÖG', 'lich'], pronunciation: 'MOEG-likh', example: { de: 'Wäre das möglich?', en: 'Would that be possible?', fr: 'Serait-ce possible ?' } }, { id: 'b1l1-lieber2', german: 'am liebsten', english: 'most of all / would prefer', french: 'de préférence', gender: null, syllables: ['am', 'LIEB', 'sten'], pronunciation: 'am LEEP-sten', example: { de: 'Am liebsten würde ich reisen.', en: 'Most of all I would like to travel.', fr: 'Je préférerais voyager.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l1-wuerde', title: 'Konjunktiv II with würde', titleFr: 'Konjunktiv II avec würde',
      lead: 'For most verbs: würde + infinitive at the end. It expresses politeness or something hypothetical.',
      leadFr: 'Pour la plupart des verbes : würde + infinitif à la fin. Il exprime la politesse ou l’hypothétique.',
      explanationMd: 'For most verbs form the **Konjunktiv II** with **würde + infinitive** (at the **end**). It expresses **politeness** (**Würden Sie bitte warten?**) or something **hypothetical** (**Ich würde gern mehr reisen.**): **ich würde, du würdest, er / sie / es würde, wir würden, ihr würdet, sie / Sie würden**. In questions **würde** is in **position 1**; in statements in **position 2**. **Am liebsten würde ich …** states your **first choice**. **Ich würde vorschlagen, …** introduces a **suggestion**.',
      explanationMdFr: 'Pour la plupart des verbes, forme le **Konjunktiv II** avec **würde + infinitif** (à la **fin**). Il exprime la **politesse** (**Würden Sie bitte warten ?**) ou l’**hypothétique** (**Ich würde gern mehr reisen.**) : **ich würde, du würdest, er / sie / es würde, wir würden, ihr würdet, sie / Sie würden**. Dans les questions, **würde** est en **position 1** ; dans les affirmations, en **position 2**. **Am liebsten würde ich …** exprime ton **premier choix**. **Ich würde vorschlagen, …** introduit une **proposition**.',
      tables: [{ title: 'würde', titleFr: 'würde', headers: ['Person', 'würde', 'Example'], headersFr: ['Personne', 'würde', 'Exemple'],
        rows: [['ich', 'würde', 'Ich würde gern kommen.'], ['du', 'würdest', 'Würdest du das machen?'], ['er / sie / es', 'würde', 'Sie würde gern mehr reisen.'], ['wir', 'würden', 'Wir würden uns treffen.'], ['ihr', 'würdet', 'Würdet ihr mitkommen?'], ['sie / Sie', 'würden', 'Würden Sie bitte warten?']],
        rowsFr: [['ich', 'würde', 'Ich würde gern kommen.'], ['du', 'würdest', 'Würdest du das machen ?'], ['er / sie / es', 'würde', 'Sie würde gern mehr reisen.'], ['wir', 'würden', 'Wir würden uns treffen.'], ['ihr', 'würdet', 'Würdet ihr mitkommen ?'], ['sie / Sie', 'würden', 'Würden Sie bitte warten ?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'würde', role: 'verb' }, { text: 'gern', role: 'other' }, { text: 'einen Termin', role: 'accusative' }, { text: 'machen.', role: 'verb' }], en: 'I would like to make an appointment.', fr: 'Je voudrais prendre un rendez-vous.' },
        { parts: [{ text: 'Würden', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'bitte', role: 'other' }, { text: 'kurz', role: 'time' }, { text: 'warten?', role: 'verb' }], en: 'Would you please wait briefly?', fr: 'Voudriez-vous patienter un instant ?' },
      ],
      contrast: {
        a: { label: 'Direct', labelFr: 'Direct', note: 'abrupt', noteFr: 'brusque', examples: [g('Warten Sie kurz!', 'Wait a moment!', 'Attendez un instant !'), g('Ich will einen Termin.', 'I want an appointment.', 'Je veux un rendez-vous.')] },
        b: { label: 'Polite (würde)', labelFr: 'Poli (würde)', note: 'softer', noteFr: 'plus doux', examples: [g('Würden Sie bitte kurz warten?', 'Would you please wait briefly?', 'Voudriez-vous patienter un instant ?'), g('Ich würde gern einen Termin machen.', 'I would like to make an appointment.', 'Je voudrais prendre un rendez-vous.')] },
      },
      examples: [
        g('Ich würde gern mehr reisen.', 'I would like to travel more.', 'Je voudrais voyager davantage.'),
        g('Würden Sie bitte warten?', 'Would you please wait?', 'Voudriez-vous patienter, s’il vous plaît ?'),
        g('Ich würde gern einen Termin machen.', 'I would like to make an appointment.', 'Je voudrais prendre un rendez-vous.'),
        g('Ich würde vorschlagen, wir treffen uns um acht.', 'I would suggest that we meet at eight.', 'Je proposerais que nous nous retrouvions à huit heures.'),
        g('Am liebsten würde ich reisen.', 'Most of all I would like to travel.', 'Ce que je préférerais, c’est voyager.'),
        g('Wann würde es Ihnen passen?', 'When would it suit you?', 'Quand cela vous conviendrait-il ?'),
      ],
      mistakes: [
        { wrong: 'Ich würde kommen gern.', right: 'Ich würde gern kommen.', why: 'The infinitive goes to the end.', whyFr: 'L’infinitif va à la fin.' },
        { wrong: 'Würde Sie bitte warten?', right: 'Würden Sie bitte warten?', why: 'Sie takes würden.', whyFr: 'Sie prend würden.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l1-e4', tokens: ['kommen', 'würde', 'gern', 'Ich'], answer: ['Ich', 'würde', 'gern', 'kommen'], hint: 'würde in position 2, infinitive at the end.', hintFr: 'würde en position 2, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l1-e9', tokens: ['Sie', 'warten', 'Würden', 'bitte'], answer: ['Würden', 'Sie', 'bitte', 'warten'], hint: 'Polite question: Würden Sie bitte …?', hintFr: 'Question polie : Würden Sie bitte … ?' } },

    // ───────────── 2 · hätte, wäre, könnte ─────────────
    { kind: 'chapter', title: 'hätte, wäre, könnte', titleFr: 'hätte, wäre, könnte', blurb: 'Haben, sein and the modals.', blurbFr: 'Haben, sein et les modaux.' },

    { kind: 'situation', title: 'Im Café', titleFr: 'Au café',
      setting: 'Lara orders and talks about what would be nice.', settingFr: 'Lara commande et parle de ce qui serait bien.',
      lines: [
        line('Lara', 'Guten Tag. Ich hätte gern einen Tee mit Zitrone.', 'Good day. I would like a tea with lemon.', 'Bonjour. Je voudrais un thé au citron.'),
        line('Kellner', 'Sehr gern. Möchten Sie auch etwas essen?', 'Gladly. Would you like something to eat too?', 'Volontiers. Voulez-vous aussi manger quelque chose ?'),
        line('Lara', 'Ich hätte eine Frage: Könnten Sie mir die Karte bringen? Das wäre toll.', 'I would have a question: could you bring me the menu? That would be great.', 'J’aurais une question : pourriez-vous m’apporter la carte ? Ce serait super.'),
        line('Kellner', 'Natürlich. Es wäre mir eine Freude.', 'Of course. It would be a pleasure.', 'Bien sûr. Ce serait un plaisir.'),
        line('Lara', 'Es wäre schön, dich bald zu sehen, sagte meine Freundin. Könntest du mir helfen?', 'It would be nice to see you soon, said my friend. Could you help me?', '« Ce serait bien de te voir bientôt », a dit mon amie. Pourrais-tu m’aider ?'),
      ],
      words: [{ id: 'b1l1-haette', german: 'hätte', english: 'would have', french: 'aurait', gender: null, syllables: ['HÄT', 'te'], pronunciation: 'HET-te', example: { de: 'Ich hätte gern einen Kaffee.', en: 'I would like a coffee.', fr: 'Je voudrais un café.' } }, { id: 'b1l1-waere', german: 'wäre', english: 'would be', french: 'serait', gender: null, syllables: ['WÄ', 're'], pronunciation: 'VAY-re', example: { de: 'Das wäre schön.', en: 'That would be nice.', fr: 'Ce serait bien.' } }, { id: 'b1l1-koennte', german: 'könnte', english: 'could', french: 'pourrait', gender: null, syllables: ['KÖNN', 'te'], pronunciation: 'KOEN-te', example: { de: 'Könntest du mir helfen?', en: 'Could you help me?', fr: 'Pourrais-tu m’aider ?' } }] },

    { kind: 'grammar', note: {
      id: 'b1l1-haette-waere', title: 'hätte, wäre, könnte', titleFr: 'hätte, wäre, könnte',
      lead: 'haben, sein and the modals use their own Konjunktiv II, not würde: hätte, wäre, könnte, möchte.',
      leadFr: 'haben, sein et les modaux ont leur propre Konjunktiv II, pas würde : hätte, wäre, könnte, möchte.',
      explanationMd: '**haben, sein** and the **modals** prefer their **own** Konjunktiv II form (not **würde**): **haben → hätte, sein → wäre, können → könnte, mögen → möchte, müssen → müsste, dürfen → dürfte, sollen → sollte, wollen → wollte**. **Ich hätte gern einen Tee. Das wäre toll. Könntest du mir helfen?** **Hätte / wäre** are also used to say **what would exist / be the case**: **Ich hätte eine Frage. Es wäre schön, dich zu sehen.** With the **umlaut** they sound **rounded / fronted** (**hätte, wäre, könnte**).',
      explanationMdFr: '**haben, sein** et les **modaux** préfèrent **leur propre** forme de Konjunktiv II (pas **würde**) : **haben → hätte, sein → wäre, können → könnte, mögen → möchte, müssen → müsste, dürfen → dürfte, sollen → sollte, wollen → wollte**. **Ich hätte gern einen Tee. Das wäre toll. Könntest du mir helfen ?** **Hätte / wäre** servent aussi à dire **ce qui existerait / serait le cas** : **Ich hätte eine Frage. Es wäre schön, dich zu sehen.** Avec le **tréma**, ils se prononcent **arrondis / antérieurs** (**hätte, wäre, könnte**).',
      tables: [{ title: 'Konjunktiv II of haben, sein, können', titleFr: 'Konjunktiv II de haben, sein, können', headers: ['Person', 'haben', 'sein', 'können'], headersFr: ['Personne', 'haben', 'sein', 'können'],
        rows: [['ich', 'hätte', 'wäre', 'könnte'], ['du', 'hättest', 'wärst', 'könntest'], ['er / sie / es', 'hätte', 'wäre', 'könnte'], ['wir', 'hätten', 'wären', 'könnten'], ['ihr', 'hättet', 'wärt', 'könntet'], ['sie / Sie', 'hätten', 'wären', 'könnten']],
        rowsFr: [['ich', 'hätte', 'wäre', 'könnte'], ['du', 'hättest', 'wärst', 'könntest'], ['er / sie / es', 'hätte', 'wäre', 'könnte'], ['wir', 'hätten', 'wären', 'könnten'], ['ihr', 'hättet', 'wärt', 'könntet'], ['sie / Sie', 'hätten', 'wären', 'könnten']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'hätte', role: 'verb' }, { text: 'gern', role: 'other' }, { text: 'einen Tee.', role: 'accusative' }], en: 'I would like a tea.', fr: 'Je voudrais un thé.' },
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'wäre', role: 'verb' }, { text: 'schön,', role: 'other' }, { text: 'dich', role: 'accusative' }, { text: 'zu sehen.', role: 'verb' }], en: 'It would be nice to see you.', fr: 'Ce serait agréable de te voir.' },
      ],
      contrast: {
        a: { label: 'Indicative', labelFr: 'Indicatif', note: 'fact', noteFr: 'fait', examples: [g('Ich habe eine Frage.', 'I have a question.', 'J’ai une question.'), g('Das ist toll.', 'That is great.', 'C’est super.')] },
        b: { label: 'Konjunktiv II', labelFr: 'Konjunktiv II', note: 'polite / hypothetical', noteFr: 'poli / hypothétique', examples: [g('Ich hätte eine Frage.', 'I would have a question.', 'J’aurais une question.'), g('Das wäre toll.', 'That would be great.', 'Ce serait super.')] },
      },
      examples: [
        g('Ich hätte gern einen Kaffee.', 'I would like a coffee.', 'Je voudrais un café.'),
        g('Das wäre toll.', 'That would be great.', 'Ce serait super.'),
        g('Könntest du mir helfen?', 'Could you help me?', 'Pourrais-tu m’aider ?'),
        g('Ich hätte eine Frage.', 'I would have a question.', 'J’aurais une question.'),
        g('Es wäre schön, dich zu sehen.', 'It would be nice to see you.', 'Ce serait agréable de te voir.'),
        g('Wäre das möglich?', 'Would that be possible?', 'Serait-ce possible ?'),
      ],
      mistakes: [
        { wrong: 'Ich würde haben gern einen Tee.', right: 'Ich hätte gern einen Tee.', why: 'haben uses hätte, not würde + haben.', whyFr: 'haben utilise hätte, pas würde + haben.' },
        { wrong: 'Das würde sein toll.', right: 'Das wäre toll.', why: 'sein uses wäre.', whyFr: 'sein utilise wäre.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l1-e1', prompt: 'Ich ___ gern einen Kaffee. (haben — Konjunktiv II)', answer: 'hätte', hint: 'haben → hätte', hintFr: 'haben → hätte' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l1-e2', prompt: '___ du mir helfen? (können — Konjunktiv II, du)', answer: 'Könntest', hint: 'können → könntest', hintFr: 'können → könntest' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l1-e7', prompt: 'Das ___ wirklich schön. (sein — Konjunktiv II)', answer: 'wäre', hint: 'sein → wäre', hintFr: 'sein → wäre' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l1-e5', pairs: [{ de: 'haben', en: 'hätte', fr: 'hätte' }, { de: 'sein', en: 'wäre', fr: 'wäre' }, { de: 'können', en: 'könnte', fr: 'könnte' }], hint: 'Match each verb to its Konjunktiv II form.', hintFr: 'Associe chaque verbe à sa forme au Konjunktiv II.' } },

    // ───────────── 3 · Softening ─────────────
    { kind: 'chapter', title: 'Abschwächen und höflich fragen', titleFr: 'Adoucir et demander poliment', blurb: 'Soften statements, request politely.', blurbFr: 'Adoucir les affirmations, demander poliment.' },

    { kind: 'situation', title: 'Im Büro', titleFr: 'Au bureau',
      setting: 'Lara asks a colleague for help and explains a problem.', settingFr: 'Lara demande de l’aide à un collègue et explique un problème.',
      lines: [
        line('Lara', 'Könnten Sie mir das erklären? Ich würde gern verstehen, wie das System funktioniert.', 'Could you explain that to me? I would like to understand how the system works.', 'Pourriez-vous me l’expliquer ? J’aimerais comprendre comment le système fonctionne.'),
        line('Kollege', 'Natürlich. Das wäre aber einfacher mit einer Zeichnung.', 'Of course. But that would be easier with a drawing.', 'Bien sûr. Mais ce serait plus simple avec un dessin.'),
        line('Lara', 'Ich hätte noch eine Bitte: Wären Sie so nett, es mir per Mail zu schicken?', 'I would have one more request: would you be so kind as to send it to me by e-mail?', 'J’aurais encore une demande : auriez-vous la gentillesse de me l’envoyer par e-mail ?'),
        line('Kollege', 'Kein Problem. Ich würde sagen, bis morgen schaffe ich das.', 'No problem. I would say I can manage that by tomorrow.', 'Pas de problème. Je dirais que je peux le faire d’ici demain.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l1-hoeflich', title: 'Softening and polite requests', titleFr: 'Adoucir et demander poliment',
      lead: 'Soften with Konjunktiv II and little words like eigentlich, vielleicht, ich würde sagen.',
      leadFr: 'Adoucis avec le Konjunktiv II et de petits mots comme eigentlich, vielleicht, ich würde sagen.',
      explanationMd: 'The **Konjunktiv II** makes requests **softer and more polite**: **Hilf mir! → Könntest du mir helfen?** and **Ich will einen Kaffee. → Ich hätte gern einen Kaffee.** Use it **in shops, offices and with people you don’t know.** You can also soften **opinions**: **Ich würde sagen, …**, **Es wäre besser, wenn …**, **Ich hätte da eine Idee.** For **very polite requests** use **Wären Sie so nett, … zu + infinitive?** or **Hätten Sie vielleicht …?** Add **bitte, vielleicht, eigentlich** to soften more.',
      explanationMdFr: 'Le **Konjunktiv II** rend les demandes **plus douces et plus polies** : **Hilf mir ! → Könntest du mir helfen ?** et **Ich will einen Kaffee. → Ich hätte gern einen Kaffee.** Utilise-le **dans les magasins, les bureaux et avec des inconnus.** Tu peux aussi adoucir les **opinions** : **Ich würde sagen, …**, **Es wäre besser, wenn …**, **Ich hätte da eine Idee.** Pour des **demandes très polies**, utilise **Wären Sie so nett, … zu + infinitif ?** ou **Hätten Sie vielleicht …?** Ajoute **bitte, vielleicht, eigentlich** pour adoucir davantage.',
      tables: [{ title: 'From direct to very polite', titleFr: 'Du direct au très poli', headers: ['Direct', 'Polite', 'Very polite'], headersFr: ['Direct', 'Poli', 'Très poli'],
        rows: [['Hilf mir!', 'Könntest du mir helfen?', 'Wärst du so nett, mir zu helfen?'], ['Ich will einen Kaffee.', 'Ich hätte gern einen Kaffee.', 'Hätten Sie vielleicht einen Kaffee für mich?'], ['Das ist besser.', 'Das wäre besser.', 'Ich würde sagen, das wäre besser.'], ['Schicken Sie es mir.', 'Könnten Sie es mir schicken?', 'Wären Sie so nett, es mir zu schicken?']],
        rowsFr: [['Hilf mir !', 'Könntest du mir helfen ?', 'Wärst du so nett, mir zu helfen ?'], ['Ich will einen Kaffee.', 'Ich hätte gern einen Kaffee.', 'Hätten Sie vielleicht einen Kaffee für mich ?'], ['Das ist besser.', 'Das wäre besser.', 'Ich würde sagen, das wäre besser.'], ['Schicken Sie es mir.', 'Könnten Sie es mir schicken ?', 'Wären Sie so nett, es mir zu schicken ?']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Wären', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'so nett,', role: 'other' }, { text: 'es', role: 'accusative' }, { text: 'mir', role: 'dative' }, { text: 'zu schicken?', role: 'verb' }], en: 'Would you be so kind as to send it to me?', fr: 'Auriez-vous la gentillesse de me l’envoyer ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'würde', role: 'verb' }, { text: 'sagen,', role: 'verb' }, { text: 'das', role: 'subject' }, { text: 'wäre', role: 'verb' }, { text: 'besser.', role: 'other' }], en: 'I would say that would be better.', fr: 'Je dirais que ce serait mieux.' },
      ],
      contrast: {
        a: { label: 'Direct', labelFr: 'Direct', note: 'sounds like an order', noteFr: 'ressemble à un ordre', examples: [g('Schicken Sie es mir.', 'Send it to me.', 'Envoyez-le-moi.'), g('Ich will das System verstehen.', 'I want to understand the system.', 'Je veux comprendre le système.')] },
        b: { label: 'Konjunktiv II', labelFr: 'Konjunktiv II', note: 'sounds courteous', noteFr: 'sonne courtois', examples: [g('Könnten Sie es mir schicken?', 'Could you send it to me?', 'Pourriez-vous me l’envoyer ?'), g('Ich würde gern das System verstehen.', 'I would like to understand the system.', 'J’aimerais comprendre le système.')] },
      },
      examples: [
        g('Könnten Sie mir das erklären?', 'Could you explain that to me?', 'Pourriez-vous me l’expliquer ?'),
        g('Ich würde gern einen Termin machen.', 'I would like to make an appointment.', 'Je voudrais prendre un rendez-vous.'),
        g('Wären Sie so nett, es mir per Mail zu schicken?', 'Would you be so kind as to send it to me by e-mail?', 'Auriez-vous la gentillesse de me l’envoyer par e-mail ?'),
        g('Hätten Sie vielleicht ein Zimmer für mich?', 'Would you perhaps have a room for me?', 'Auriez-vous peut-être une chambre pour moi ?'),
        g('Ich würde sagen, bis morgen schaffe ich das.', 'I would say I can manage that by tomorrow.', 'Je dirais que je peux le faire d’ici demain.'),
        g('Es wäre besser, wenn wir früher anfangen.', 'It would be better if we started earlier.', 'Ce serait mieux si nous commencions plus tôt.'),
      ],
      mistakes: [
        { wrong: 'Wären Sie so nett, mir helfen?', right: 'Wären Sie so nett, mir zu helfen?', why: 'After “so nett” you need zu + infinitive.', whyFr: 'Après « so nett », il faut zu + infinitif.' },
        { wrong: 'Ich wollte einen Kaffee. (polite)', right: 'Ich hätte gern einen Kaffee.', why: 'Politeness uses hätte gern.', whyFr: 'La politesse utilise hätte gern.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l1-e3', prompt: 'Which is the most polite?', promptFr: 'Quelle est la plus polie ?', options: ['Gib mir das Salz!', 'Ich will das Salz.', 'Könntest du mir bitte das Salz geben?'], answer: 2, explain: 'The Konjunktiv II ("könntest … bitte") is the most polite.', explainFr: 'Le Konjunktiv II (« könntest … bitte ») est le plus poli.', hint: 'Look for "könntest" and "bitte".', hintFr: 'Cherche « könntest » et « bitte ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l1-e6', prompt: 'Listen. What would the guest like?', promptFr: 'Écoute. Que voudrait le client ?', audio: { ttsText: 'Guten Tag. Ich hätte gern einen Tee mit Zitrone.' }, options: ['A tea with lemon', 'A coffee', 'A glass of water'], optionsFr: ['Un thé au citron', 'Un café', 'Un verre d’eau'], answer: 0, hint: 'Listen after "Ich hätte gern".', hintFr: 'Écoute après « Ich hätte gern ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l1-e8', prompt: 'Which verb usually forms Konjunktiv II WITHOUT "würde"?', promptFr: 'Quel verbe forme le Konjunktiv II SANS « würde » ?', options: ['spielen', 'haben', 'arbeiten'], answer: 1, explain: 'haben/sein/modals have their own forms (hätte, wäre, könnte).', explainFr: 'haben/sein/modaux ont leurs propres formes (hätte, wäre, könnte).', hint: 'Not a normal action verb.', hintFr: 'Pas un verbe d’action ordinaire.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l1-e10', prompt: 'Listen. What does the caller want to do?', promptFr: 'Écoute. Que veut faire la personne au téléphone ?', audio: { ttsText: 'Guten Tag, ich würde gern einen Termin machen.' }, options: ['Make an appointment', 'Cancel a meeting', 'Order food'], optionsFr: ['Prendre rendez-vous', 'Annuler une réunion', 'Commander à manger'], answer: 0, hint: 'Listen after "ich würde gern".', hintFr: 'Écoute après « ich würde gern ».' } },

    { kind: 'pronunciation', focus: 'The umlauts drive the Konjunktiv II: hätte, wäre, würde, könnte (all rounded/fronted)', focusFr: 'Les trémas marquent le Konjunktiv II : hätte, wäre, würde, könnte (arrondis/antérieurs)', items: [{ id: 'b1l1-haette-pron', german: 'hätte', english: 'would have', french: 'aurait', gender: null, syllables: ['HÄT', 'te'], pronunciation: 'HET-te', example: { de: 'Ich hätte gern Wasser.', en: 'I would like water.', fr: 'Je voudrais de l’eau.' } }, { id: 'b1l1-wuerde-pron', german: 'würde', english: 'would', french: 'ferais', gender: null, syllables: ['WÜR', 'de'], pronunciation: 'VUER-de', example: { de: 'Ich würde gern gehen.', en: 'I would like to go.', fr: 'J’aimerais partir.' } }] },

    { kind: 'wrapup',
      summary: 'You can now be **polite and hypothetical**: **würde + infinitive**, **hätte, wäre, könnte**, and polite requests like **Könnten Sie …?**, **Wären Sie so nett …?**. 🎉',
      summaryFr: 'Tu sais maintenant être **poli et hypothétique** : **würde + infinitif**, **hätte, wäre, könnte**, et des demandes polies comme **Könnten Sie …?**, **Wären Sie so nett …?**. 🎉',
      card: { title: 'Konjunktiv II on one page', titleFr: 'Le Konjunktiv II en une page', sections: [
        { heading: 'With würde', headingFr: 'Avec würde', rows: [g('würde + infinitive at the end', 'most verbs', 'la plupart des verbes')] },
        { heading: 'Own forms', headingFr: 'Formes propres', rows: [g('hätte · wäre · könnte · möchte', 'haben · sein · können · mögen', 'haben · sein · können · mögen')] },
        { heading: 'Polite requests', headingFr: 'Demandes polies', rows: [g('Könnten Sie …? · Hätten Sie …?', 'in shops and offices', 'dans les magasins et bureaux'), g('Wären Sie so nett, … zu …?', 'very polite', 'très poli')] },
      ] } },
  ],
};

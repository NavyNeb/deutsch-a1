import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion1: Lesson = {
  id: 'a2-l1', level: 'A2', module: 1, number: 1,
  title: { de: 'Mein Wochenende', en: 'My weekend', fr: 'Mon week-end' },
  theme: 'Talking about the past with the Perfekt (haben)', themeFr: 'Parler du passé avec le Perfekt (haben)',
  goals: ['Talk about what you did at the weekend', 'Form the Perfekt with "haben"', 'Build regular and irregular participles', 'Put the participle at the end of the sentence'], goalsFr: ['Parler de ce que tu as fait le week-end', 'Former le Perfekt avec « haben »', 'Construire les participes réguliers et irréguliers', 'Mettre le participe à la fin de la phrase'],
  canDo: g('Ich kann erzählen, was ich am Wochenende gemacht habe, mit regelmäßigen und unregelmäßigen Verben.', 'I can tell what I did at the weekend, with regular and irregular verbs.', 'Je sais raconter ce que j’ai fait le week-end, avec des verbes réguliers et irréguliers.'),
  steps: [
    { kind: 'intro', title: 'Mein Wochenende 🎬', titleFr: 'Mon week-end 🎬',
      scene: 'Two friends tell each other about their weekend.', sceneFr: 'Deux amis se racontent leur week-end.',
      goals: ['Build the Perfekt with haben and put the participle at the end', 'Form regular participles (ge…t) and verbs without ge-', 'Learn the common irregular participles (ge…en)'],
      goalsFr: ['Former le Perfekt avec haben et placer le participe à la fin', 'Former les participes réguliers (ge…t) et les verbes sans ge-', 'Apprendre les participes irréguliers courants (ge…en)'] },

    // ───────────── 1 · The frame ─────────────
    { kind: 'chapter', title: 'Das Perfekt: der Rahmen', titleFr: 'Le Perfekt : le cadre', blurb: 'haben in position 2, participle at the end.', blurbFr: 'haben en position 2, participe à la fin.' },

    { kind: 'situation', title: 'Was hast du am Wochenende gemacht?', titleFr: 'Qu’as-tu fait ce week-end ?',
      setting: 'Lena and Tom meet on Monday morning.', settingFr: 'Lena et Tom se retrouvent le lundi matin.',
      lines: [
        line('Tom', 'Hallo Lena! Was hast du am Wochenende gemacht?', 'Hello Lena! What did you do at the weekend?', 'Salut Lena ! Qu’as-tu fait ce week-end ?'),
        line('Lena', 'Am Samstag habe ich gekocht, und am Abend hatten wir eine Party.', 'On Saturday I cooked, and in the evening we had a party.', 'Samedi, j’ai cuisiné, et le soir nous avons fait une fête.'),
        line('Tom', 'Toll! Ich habe nicht viel gemacht. Gestern habe ich nur gearbeitet.', 'Great! I did not do much. Yesterday I only worked.', 'Super ! Je n’ai pas fait grand-chose. Hier, j’ai seulement travaillé.'),
        line('Lena', 'Und letzte Woche? Hast du dich erholt?', 'And last week? Did you rest?', 'Et la semaine dernière ? T’es-tu reposé ?'),
        line('Tom', 'Nein, letzte Woche habe ich auch viel gearbeitet.', 'No, last week I worked a lot too.', 'Non, la semaine dernière, j’ai aussi beaucoup travaillé.'),
      ],
      words: [{ id: 'a2l1-wochenende', german: 'das Wochenende', english: 'the weekend', french: 'le week-end', gender: 'das', syllables: ['WO', 'chen', 'en', 'de'], pronunciation: 'dahs VOKH-en-en-de', example: { de: 'Am Wochenende habe ich Freunde getroffen.', en: 'At the weekend I met friends.', fr: 'Le week-end, j’ai rencontré des amis.' } }, { id: 'a2l1-gestern', german: 'gestern', english: 'yesterday', french: 'hier', gender: null, syllables: ['GES', 'tern'], pronunciation: 'GES-tern', example: { de: 'Gestern habe ich gekocht.', en: 'Yesterday I cooked.', fr: 'Hier, j’ai cuisiné.' } }, { id: 'a2l1-letzte-woche', german: 'letzte Woche', english: 'last week', french: 'la semaine dernière', gender: null, syllables: ['LETZ', 'te', 'WO', 'che'], pronunciation: 'LETS-te VOKH-e', example: { de: 'Letzte Woche habe ich viel gearbeitet.', en: 'Last week I worked a lot.', fr: 'La semaine dernière, j’ai beaucoup travaillé.' } }, { id: 'a2l1-party', german: 'die Party', english: 'the party', french: 'la fête', gender: 'die', syllables: ['PAR', 'ty'], pronunciation: 'dee PAR-tee', example: { de: 'Die Party war toll.', en: 'The party was great.', fr: 'La fête était super.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l1-e11', prompt: 'What did Tom do yesterday?', promptFr: 'Qu’a fait Tom hier ?', options: ['He only worked', 'He cooked', 'He went to a party'], optionsFr: ['Il a seulement travaillé', 'Il a cuisiné', 'Il est allé à une fête'], answer: 0, explain: 'He says: “Gestern habe ich nur gearbeitet.”', explainFr: 'Il dit : « Gestern habe ich nur gearbeitet. »', hint: 'Look at Tom’s second answer.', hintFr: 'Regarde la deuxième réponse de Tom.' } },

    { kind: 'grammar', note: {
      id: 'a2l1-rahmen', title: 'The Perfekt with haben: the frame', titleFr: 'Le Perfekt avec haben : le cadre',
      lead: 'haben in position 2, participle at the very end. nicht stands just before the participle.',
      leadFr: 'haben en position 2, participe tout à la fin. nicht se place juste avant le participe.',
      explanationMd: 'To talk about the past, everyday German uses the **Perfekt**: a form of **haben** in **position 2** and the **participle** at the **end**: **Ich habe Fußball gespielt.** This is one more **Satzklammer** (a frame around the sentence, like **modal … infinitive**). In a **question** haben comes first: **Hast du gut geschlafen?** **nicht** stands **just before the participle**: **Ich habe nicht gearbeitet.** Time words can open the sentence, and the verb stays second: **Gestern habe ich gekocht.**',
      explanationMdFr: 'Pour parler du passé, l’allemand courant utilise le **Perfekt** : une forme de **haben** en **position 2** et le **participe** à la **fin** : **Ich habe Fußball gespielt.** C’est encore une **Satzklammer** (un cadre autour de la phrase, comme **modal … infinitif**). Dans une **question**, haben vient en premier : **Hast du gut geschlafen ?** **nicht** se place **juste avant le participe** : **Ich habe nicht gearbeitet.** Un mot de temps peut ouvrir la phrase, et le verbe reste en deuxième : **Gestern habe ich gekocht.**',
      tables: [{ title: 'The frame', titleFr: 'Le cadre', headers: ['Position 1', 'haben (2)', 'Middle', 'Participle (end)'], headersFr: ['Position 1', 'haben (2)', 'Milieu', 'Participe (fin)'],
        rows: [['Ich', 'habe', 'Fußball', 'gespielt.'], ['Gestern', 'habe', 'ich', 'gekocht.'], ['Hast', 'du', 'gut', 'geschlafen?'], ['Ich', 'habe', 'nicht', 'gearbeitet.']],
        rowsFr: [['Ich', 'habe', 'Fußball', 'gespielt.'], ['Gestern', 'habe', 'ich', 'gekocht.'], ['Hast', 'du', 'gut', 'geschlafen ?'], ['Ich', 'habe', 'nicht', 'gearbeitet.']], highlightCol: 3 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'Fußball', role: 'accusative' }, { text: 'gespielt.', role: 'verb' }], en: 'I played football.', fr: 'J’ai joué au football.' },
        { parts: [{ text: 'Letzte Woche', role: 'time' }, { text: 'habe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'viel', role: 'other' }, { text: 'gearbeitet.', role: 'verb' }], en: 'Last week I worked a lot.', fr: 'La semaine dernière, j’ai beaucoup travaillé.' },
      ],
      contrast: {
        a: { label: 'Present', labelFr: 'Présent', note: 'one verb: Ich koche.', noteFr: 'un verbe : Ich koche.', examples: [g('Ich koche heute.', 'I cook today.', 'Je cuisine aujourd’hui.'), g('Wir spielen Fußball.', 'We play football.', 'Nous jouons au football.')] },
        b: { label: 'Perfekt', labelFr: 'Perfekt', note: 'two parts: habe … gekocht', noteFr: 'deux parties : habe … gekocht', examples: [g('Ich habe gestern gekocht.', 'I cooked yesterday.', 'J’ai cuisiné hier.'), g('Wir haben Fußball gespielt.', 'We played football.', 'Nous avons joué au football.')] },
      },
      examples: [
        g('Ich habe gestern gekocht.', 'I cooked yesterday.', 'J’ai cuisiné hier.'),
        g('Was hast du am Wochenende gemacht?', 'What did you do at the weekend?', 'Qu’as-tu fait ce week-end ?'),
        g('Hast du gut geschlafen?', 'Did you sleep well?', 'As-tu bien dormi ?'),
        g('Ich habe nicht gearbeitet.', 'I did not work.', 'Je n’ai pas travaillé.'),
        g('Letzte Woche habe ich viel gearbeitet.', 'Last week I worked a lot.', 'La semaine dernière, j’ai beaucoup travaillé.'),
        g('Wir haben eine Party gemacht.', 'We had a party.', 'Nous avons fait une fête.'),
        g('Die Party war toll.', 'The party was great.', 'La fête était super.'),
      ],
      mistakes: [
        { wrong: 'Ich habe gekocht gestern.', right: 'Ich habe gestern gekocht.', why: 'The participle goes to the very end.', whyFr: 'Le participe va tout à la fin.' },
        { wrong: 'Ich habe gearbeitet nicht.', right: 'Ich habe nicht gearbeitet.', why: 'nicht stands before the participle.', whyFr: 'nicht se place avant le participe.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l1-e3', tokens: ['gekocht', 'habe', 'Ich', 'gestern'], answer: ['Ich', 'habe', 'gestern', 'gekocht'], hint: 'haben in position 2, participle at the end.', hintFr: 'haben en position 2, participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l1-e8', tokens: ['getroffen', 'Anna', 'habe', 'Ich'], answer: ['Ich', 'habe', 'Anna', 'getroffen'], hint: 'Subject, haben, object, then the participle.', hintFr: 'Sujet, haben, objet, puis le participe.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l1-e1', prompt: 'Ich habe Fußball ___. (spielen → participle)', answer: 'gespielt', hint: 'regular participle: ge + spiel + t', hintFr: 'participe régulier : ge + spiel + t' } },

    // ───────────── 2 · Regular participles ─────────────
    { kind: 'chapter', title: 'Regelmäßige Partizipien', titleFr: 'Participes réguliers', blurb: 'ge-…-t, and verbs without ge-.', blurbFr: 'ge-…-t, et verbes sans ge-.' },

    { kind: 'situation', title: 'Gekocht und besucht', titleFr: 'Cuisiné et visité',
      setting: 'Lena tells Tom what she did on Sunday.', settingFr: 'Lena raconte à Tom ce qu’elle a fait dimanche.',
      lines: [
        line('Lena', 'Am Sonntag habe ich meine Oma besucht. Ich habe Suppe gekocht.', 'On Sunday I visited my grandma. I cooked soup.', 'Dimanche, j’ai rendu visite à ma grand-mère. J’ai fait de la soupe.'),
        line('Tom', 'Wie schön! Hat sie viel erzählt?', 'How nice! Did she tell you a lot?', 'Comme c’est bien ! A-t-elle beaucoup raconté ?'),
        line('Lena', 'Ja, sie hat vom Urlaub erzählt. Und ich habe Fotos gemacht.', 'Yes, she told me about her holiday. And I took photos.', 'Oui, elle a parlé de ses vacances. Et j’ai pris des photos.'),
        line('Tom', 'Hast du auch gespielt?', 'Did you play too?', 'As-tu aussi joué ?'),
        line('Lena', 'Ja, wir haben Karten gespielt.', 'Yes, we played cards.', 'Oui, nous avons joué aux cartes.'),
      ],
      words: [{ id: 'a2l1-besuchen', german: 'besuchen', english: 'to visit', french: 'rendre visite', gender: null, syllables: ['be', 'SU', 'chen'], pronunciation: 'be-ZOO-khen', example: { de: 'Ich habe meine Oma besucht.', en: 'I visited my grandma.', fr: 'J’ai rendu visite à ma grand-mère.' } }, { id: 'a2l1-kochen', german: 'kochen', english: 'to cook', french: 'cuisiner', gender: null, syllables: ['KO', 'chen'], pronunciation: 'KOKH-en', example: { de: 'Ich habe Suppe gekocht.', en: 'I cooked soup.', fr: 'J’ai cuisiné de la soupe.' } }, { id: 'a2l1-erzaehlen', german: 'erzählen', english: 'to tell / recount', french: 'raconter', gender: null, syllables: ['er', 'ZÄH', 'len'], pronunciation: 'air-TSAY-len', example: { de: 'Er hat vom Urlaub erzählt.', en: 'He told about the holiday.', fr: 'Il a raconté les vacances.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l1-e12', prompt: 'Whom did Lena visit on Sunday?', promptFr: 'Chez qui Lena est-elle allée dimanche ?', options: ['Her grandma', 'Her friend Tom', 'Her teacher'], optionsFr: ['Sa grand-mère', 'Son ami Tom', 'Son enseignant'], answer: 0, explain: 'She says: “Am Sonntag habe ich meine Oma besucht.”', explainFr: 'Elle dit : « Am Sonntag habe ich meine Oma besucht. »', hint: 'Look for “besucht”.', hintFr: 'Cherche « besucht ».' } },

    { kind: 'grammar', note: {
      id: 'a2l1-regelmaessig', title: 'Regular participles: ge-…-t', titleFr: 'Participes réguliers : ge-…-t',
      lead: 'ge- + stem + -t. After d or t add -et. No ge- with be-, er-, ver- and -ieren.',
      leadFr: 'ge- + radical + -t. Après d ou t, ajoute -et. Pas de ge- avec be-, er-, ver- et -ieren.',
      explanationMd: '**Regular (weak) verbs** make the participle with **ge- + stem + -t**: **machen → gemacht**, **spielen → gespielt**. After a stem ending in **d** or **t** add **-et**: **arbeiten → gearbeitet**. **No ge-** with the **inseparable prefixes** **be-, er-, ver-** and with verbs in **-ieren**: **besuchen → besucht**, **erzählen → erzählt**, **studieren → studiert**.',
      explanationMdFr: 'Les **verbes réguliers (faibles)** forment le participe avec **ge- + radical + -t** : **machen → gemacht**, **spielen → gespielt**. Après un radical en **d** ou **t**, ajoute **-et** : **arbeiten → gearbeitet**. **Pas de ge-** avec les **préfixes inséparables** **be-, er-, ver-** et les verbes en **-ieren** : **besuchen → besucht**, **erzählen → erzählt**, **studieren → studiert**.',
      tables: [{ title: 'Regular participles', titleFr: 'Participes réguliers', headers: ['Infinitive', 'Participle', 'Rule'], headersFr: ['Infinitif', 'Participe', 'Règle'],
        rows: [['machen', 'gemacht', 'ge- + stem + -t'], ['spielen', 'gespielt', 'ge- + stem + -t'], ['kochen', 'gekocht', 'ge- + stem + -t'], ['arbeiten', 'gearbeitet', 'stem in t: -et'], ['besuchen', 'besucht', 'no ge- (be-)'], ['erzählen', 'erzählt', 'no ge- (er-)'], ['studieren', 'studiert', 'no ge- (-ieren)']],
        rowsFr: [['machen', 'gemacht', 'ge- + radical + -t'], ['spielen', 'gespielt', 'ge- + radical + -t'], ['kochen', 'gekocht', 'ge- + radical + -t'], ['arbeiten', 'gearbeitet', 'radical en t : -et'], ['besuchen', 'besucht', 'pas de ge- (be-)'], ['erzählen', 'erzählt', 'pas de ge- (er-)'], ['studieren', 'studiert', 'pas de ge- (-ieren)']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'Suppe', role: 'accusative' }, { text: 'gekocht.', role: 'verb' }], en: 'I cooked soup.', fr: 'J’ai fait de la soupe.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'meine Oma', role: 'accusative' }, { text: 'besucht.', role: 'verb' }], en: 'I visited my grandma.', fr: 'J’ai rendu visite à ma grand-mère.' },
      ],
      contrast: {
        a: { label: 'with ge-', labelFr: 'avec ge-', note: 'machen → gemacht', noteFr: 'machen → gemacht', examples: [g('Ich habe Deutsch gelernt.', 'I learned German.', 'J’ai appris l’allemand.'), g('Wir haben eine Party gemacht.', 'We had a party.', 'Nous avons fait une fête.')] },
        b: { label: 'without ge-', labelFr: 'sans ge-', note: 'be-, er-, ver-, -ieren', noteFr: 'be-, er-, ver-, -ieren', examples: [g('Ich habe meine Oma besucht.', 'I visited my grandma.', 'J’ai rendu visite à ma grand-mère.'), g('Er hat vom Urlaub erzählt.', 'He told about the holiday.', 'Il a parlé des vacances.')] },
      },
      examples: [
        g('Ich habe Deutsch gelernt.', 'I studied German.', 'J’ai appris l’allemand.'),
        g('Wir haben eine Party gemacht.', 'We had a party.', 'Nous avons fait une fête.'),
        g('Ich habe meine Oma besucht.', 'I visited my grandma.', 'J’ai rendu visite à ma grand-mère.'),
        g('Er hat vom Urlaub erzählt.', 'He told about the holiday.', 'Il a parlé des vacances.'),
        g('Letzte Woche habe ich viel gearbeitet.', 'Last week I worked a lot.', 'La semaine dernière, j’ai beaucoup travaillé.'),
        g('Sie hat Medizin studiert.', 'She studied medicine.', 'Elle a étudié la médecine.'),
        g('Wir haben Karten gespielt.', 'We played cards.', 'Nous avons joué aux cartes.'),
      ],
      mistakes: [
        { wrong: 'Ich habe gebesucht meine Oma.', right: 'Ich habe meine Oma besucht.', why: 'be- is inseparable: no ge-, and the participle goes last.', whyFr: 'be- est inséparable : pas de ge-, et le participe va à la fin.' },
        { wrong: 'Ich habe gearbeitt.', right: 'Ich habe gearbeitet.', why: 'After t add -et to keep the word pronounceable.', whyFr: 'Après t, ajoute -et pour que le mot reste prononçable.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'match', id: 'a2l1-e4', pairs: [{ de: 'machen', en: 'gemacht', fr: 'gemacht' }, { de: 'trinken', en: 'getrunken', fr: 'getrunken' }, { de: 'arbeiten', en: 'gearbeitet', fr: 'gearbeitet' }], hint: 'Match each infinitive to its participle.', hintFr: 'Associe chaque infinitif à son participe.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l1-e9', prompt: 'Letzte Woche habe ich viel ___. (arbeiten → participle)', answer: 'gearbeitet', hint: 'after t, the ending is -et: gearbeitet', hintFr: 'après t, la terminaison est -et : gearbeitet' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l1-e7', prompt: 'Which verb takes NO "ge-" in the participle?', promptFr: 'Quel verbe ne prend PAS de « ge- » au participe ?', options: ['spielen', 'besuchen', 'kochen'], answer: 1, explain: '"besuchen" has the inseparable prefix be- → besucht (no ge-).', explainFr: '« besuchen » a le préfixe inséparable be- → besucht (sans ge-).', hint: 'Look for the inseparable prefix.', hintFr: 'Cherche le préfixe inséparable.' } },

    // ───────────── 3 · Irregular participles ─────────────
    { kind: 'chapter', title: 'Unregelmäßige Partizipien', titleFr: 'Participes irréguliers', blurb: 'ge-…-en: learn them with the verb.', blurbFr: 'ge-…-en : apprends-les avec le verbe.' },

    { kind: 'situation', title: 'Gesehen und getroffen', titleFr: 'Vu et rencontré',
      setting: 'Tom tells Lena about his Sunday evening.', settingFr: 'Tom raconte à Lena sa soirée de dimanche.',
      lines: [
        line('Tom', 'Am Sonntagabend habe ich Anna getroffen. Wir haben Pizza gegessen.', 'On Sunday evening I met Anna. We ate pizza.', 'Dimanche soir, j’ai rencontré Anna. Nous avons mangé une pizza.'),
        line('Lena', 'Und dann? Habt ihr etwas getrunken?', 'And then? Did you drink something?', 'Et ensuite ? Avez-vous bu quelque chose ?'),
        line('Tom', 'Ja, wir haben Tee getrunken und einen Film gesehen.', 'Yes, we drank tea and watched a film.', 'Oui, nous avons bu du thé et vu un film.'),
        line('Lena', 'Hast du auch etwas gelesen?', 'Did you read something as well?', 'As-tu aussi lu quelque chose ?'),
        line('Tom', 'Ja, ich habe eine E-Mail geschrieben und ein Buch gelesen.', 'Yes, I wrote an e-mail and read a book.', 'Oui, j’ai écrit un e-mail et lu un livre.'),
      ],
      words: [{ id: 'a2l1-treffen', german: 'treffen', english: 'to meet', french: 'rencontrer', gender: null, syllables: ['TREF', 'fen'], pronunciation: 'TREF-fen', example: { de: 'Ich habe Anna getroffen.', en: 'I met Anna.', fr: 'J’ai rencontré Anna.' } }, { id: 'a2l1-sehen', german: 'sehen', english: 'to see / watch', french: 'voir / regarder', gender: null, syllables: ['SE', 'hen'], pronunciation: 'ZAY-en', example: { de: 'Ich habe einen Film gesehen.', en: 'I watched a film.', fr: 'J’ai regardé un film.' } }, { id: 'a2l1-partizip', german: 'das Partizip', english: 'the participle', french: 'le participe', gender: 'das', syllables: ['par', 'ti', 'ZIP'], pronunciation: 'dahs par-ti-TSEEP', example: { de: '"Gemacht" ist ein Partizip.', en: '"Gemacht" is a participle.', fr: '« Gemacht » est un participe.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l1-e13', prompt: 'What did Tom and Anna eat?', promptFr: 'Qu’ont mangé Tom et Anna ?', options: ['Pizza', 'Soup', 'Bread'], optionsFr: ['Une pizza', 'De la soupe', 'Du pain'], answer: 0, explain: 'He says: “Wir haben Pizza gegessen.”', explainFr: 'Il dit : « Wir haben Pizza gegessen. »', hint: 'Look for “gegessen”.', hintFr: 'Cherche « gegessen ».' } },

    { kind: 'grammar', note: {
      id: 'a2l1-unregelmaessig', title: 'Irregular participles: ge-…-en', titleFr: 'Participes irréguliers : ge-…-en',
      lead: 'Irregular (strong) verbs end in -en and often change their vowel. Learn the participle with the verb.',
      leadFr: 'Les verbes irréguliers (forts) finissent en -en et changent souvent de voyelle. Apprends le participe avec le verbe.',
      explanationMd: '**Irregular (strong) verbs** make the participle with **ge-** and **-en**, and **often change the stem vowel**. There is no rule: learn them in **groups**. Many everyday verbs belong here: **sehen, treffen, essen, trinken, lesen, schreiben, nehmen, geben, finden, sprechen**. Mixed verbs change vowel **and** end in **-t**: **denken → gedacht**, **bringen → gebracht**.',
      explanationMdFr: 'Les **verbes irréguliers (forts)** forment le participe avec **ge-** et **-en**, et **changent souvent la voyelle du radical**. Il n’y a pas de règle : apprends-les par **groupes**. Beaucoup de verbes courants en font partie : **sehen, treffen, essen, trinken, lesen, schreiben, nehmen, geben, finden, sprechen**. Les verbes mixtes changent de voyelle **et** finissent en **-t** : **denken → gedacht**, **bringen → gebracht**.',
      tables: [{ title: 'Common irregular participles', titleFr: 'Participes irréguliers courants', headers: ['Infinitive', 'Participle', 'Example'], headersFr: ['Infinitif', 'Participe', 'Exemple'],
        rows: [['sehen', 'gesehen', 'Ich habe einen Film gesehen.'], ['treffen', 'getroffen', 'Ich habe Anna getroffen.'], ['essen', 'gegessen', 'Wir haben Pizza gegessen.'], ['trinken', 'getrunken', 'Wir haben Tee getrunken.'], ['lesen', 'gelesen', 'Ich habe ein Buch gelesen.'], ['schreiben', 'geschrieben', 'Ich habe eine E-Mail geschrieben.'], ['nehmen', 'genommen', 'Ich habe den Bus genommen.'], ['geben', 'gegeben', 'Sie hat mir ein Buch gegeben.']],
        rowsFr: [['sehen', 'gesehen', 'Ich habe einen Film gesehen.'], ['treffen', 'getroffen', 'Ich habe Anna getroffen.'], ['essen', 'gegessen', 'Wir haben Pizza gegessen.'], ['trinken', 'getrunken', 'Wir haben Tee getrunken.'], ['lesen', 'gelesen', 'Ich habe ein Buch gelesen.'], ['schreiben', 'geschrieben', 'Ich habe eine E-Mail geschrieben.'], ['nehmen', 'genommen', 'Ich habe den Bus genommen.'], ['geben', 'gegeben', 'Sie hat mir ein Buch gegeben.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'haben', role: 'verb' }, { text: 'Pizza', role: 'accusative' }, { text: 'gegessen.', role: 'verb' }], en: 'We ate pizza.', fr: 'Nous avons mangé une pizza.' },
        { parts: [{ text: 'Hast', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'etwas', role: 'accusative' }, { text: 'gelesen?', role: 'verb' }], en: 'Did you read something?', fr: 'As-tu lu quelque chose ?' },
      ],
      contrast: {
        a: { label: 'regular: -t', labelFr: 'régulier : -t', note: 'gemacht, gekocht', noteFr: 'gemacht, gekocht', examples: [g('Ich habe Suppe gekocht.', 'I cooked soup.', 'J’ai fait de la soupe.'), g('Wir haben Karten gespielt.', 'We played cards.', 'Nous avons joué aux cartes.')] },
        b: { label: 'irregular: -en', labelFr: 'irrégulier : -en', note: 'gesehen, getrunken', noteFr: 'gesehen, getrunken', examples: [g('Wir haben Tee getrunken.', 'We drank tea.', 'Nous avons bu du thé.'), g('Ich habe einen Film gesehen.', 'I watched a film.', 'J’ai vu un film.')] },
      },
      examples: [
        g('Ich habe einen Film gesehen.', 'I watched a film.', 'J’ai vu un film.'),
        g('Ich habe Anna getroffen.', 'I met Anna.', 'J’ai rencontré Anna.'),
        g('Wir haben Pizza gegessen.', 'We ate pizza.', 'Nous avons mangé une pizza.'),
        g('Wir haben Tee getrunken.', 'We drank tea.', 'Nous avons bu du thé.'),
        g('Ich habe ein Buch gelesen.', 'I read a book.', 'J’ai lu un livre.'),
        g('Ich habe eine E-Mail geschrieben.', 'I wrote an e-mail.', 'J’ai écrit un e-mail.'),
        g('Hast du das gesehen?', 'Did you see that?', 'As-tu vu cela ?'),
      ],
      mistakes: [
        { wrong: 'Ich habe geseht einen Film.', right: 'Ich habe einen Film gesehen.', why: 'sehen is irregular: gesehen, and the participle goes last.', whyFr: 'sehen est irrégulier : gesehen, et le participe va à la fin.' },
        { wrong: 'Wir haben Pizza geesst.', right: 'Wir haben Pizza gegessen.', why: 'essen has the participle gegessen.', whyFr: 'essen a pour participe gegessen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l1-e2', prompt: 'Which is the correct participle of "sehen"?', promptFr: 'Quel est le participe correct de « sehen » ?', options: ['geseht', 'gesehen', 'geseht'], answer: 1, explain: '"sehen" is irregular: gesehen (ge…en).', explainFr: '« sehen » est irrégulier : gesehen (ge…en).', hint: 'Strong verbs end in -en.', hintFr: 'Les verbes forts se terminent en -en.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l1-e6', prompt: 'Wir haben Pizza ___. (essen → participle)', answer: 'gegessen', hint: 'irregular participle of essen', hintFr: 'participe irrégulier de essen' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l1-e5', prompt: 'Listen. What did Lena do yesterday?', promptFr: 'Écoute. Qu’a fait Lena hier ?', audio: { ttsText: 'Gestern habe ich einen Film gesehen und Pizza gegessen.' }, options: ['Watched a film and ate pizza', 'Worked and slept', 'Played football'], optionsFr: ['Regardé un film et mangé une pizza', 'Travaillé et dormi', 'Joué au football'], answer: 0, hint: 'Listen for the two participles.', hintFr: 'Écoute les deux participes.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l1-e10', prompt: 'Listen. Whom did Tom visit?', promptFr: 'Écoute. À qui Tom a-t-il rendu visite ?', audio: { ttsText: 'Am Sonntag habe ich meine Oma besucht.' }, options: ['His grandma', 'His friend', 'His teacher'], optionsFr: ['Sa grand-mère', 'Son ami', 'Son professeur'], answer: 0, hint: 'Listen after "habe ich meine …".', hintFr: 'Écoute après « habe ich meine … ».' } },

    { kind: 'pronunciation', focus: 'The participle prefix "ge-" is short and unstressed; the stress stays on the stem (geMACHT, geSEHen)', focusFr: 'Le préfixe « ge- » du participe est court et non accentué ; l’accent reste sur le radical (geMACHT, geSEHen)', items: [{ id: 'a2l1-gemacht-pron', german: 'gemacht', english: 'done / made', french: 'fait', gender: null, syllables: ['ge', 'MACHT'], pronunciation: 'ge-MAHKHT', example: { de: 'Ich habe die Hausaufgaben gemacht.', en: 'I did the homework.', fr: 'J’ai fait les devoirs.' } }, { id: 'a2l1-gesehen-pron', german: 'gesehen', english: 'seen', french: 'vu', gender: null, syllables: ['ge', 'SE', 'hen'], pronunciation: 'ge-ZAY-en', example: { de: 'Hast du das gesehen?', en: 'Did you see that?', fr: 'As-tu vu ça ?' } }] },

    { kind: 'wrapup',
      summary: 'You can now tell what you did with the **Perfekt**: **haben** in position 2, the **participle** at the end, **regular (ge…t)**, **no ge-** after **be-, er-, ver-, -ieren**, and the common **irregular (ge…en)** verbs. 🎉',
      summaryFr: 'Tu sais maintenant raconter ce que tu as fait avec le **Perfekt** : **haben** en position 2, le **participe** à la fin, **réguliers (ge…t)**, **sans ge-** après **be-, er-, ver-, -ieren**, et les verbes **irréguliers (ge…en)** courants. 🎉',
      card: { title: 'The Perfekt with haben on one page', titleFr: 'Le Perfekt avec haben en une page', sections: [
        { heading: 'The frame', headingFr: 'Le cadre', rows: [g('Ich habe gestern gekocht.', 'haben 2nd, participle last', 'haben en 2e, participe en dernier'), g('Ich habe nicht gearbeitet.', 'nicht before the participle', 'nicht avant le participe')] },
        { heading: 'Participles', headingFr: 'Participes', rows: [g('machen → gemacht · arbeiten → gearbeitet', 'ge-…-t / -et', 'ge-…-t / -et'), g('besuchen → besucht · studieren → studiert', 'no ge-', 'sans ge-'), g('sehen → gesehen · essen → gegessen · trinken → getrunken', 'ge-…-en', 'ge-…-en')] },
      ] } },
  ],
};

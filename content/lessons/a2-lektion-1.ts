import type { Lesson } from '../types';

export const a2lektion1: Lesson = {
  id: 'a2-l1', level: 'A2', module: 1, number: 1,
  title: { de: 'Mein Wochenende', en: 'My weekend', fr: 'Mon week-end' },
  theme: 'Talking about the past with the Perfekt (haben)',
  themeFr: 'Parler du passé avec le Perfekt (haben)',
  goals: ['Talk about what you did at the weekend', 'Form the Perfekt with "haben"', 'Build regular and irregular participles', 'Put the participle at the end of the sentence'],
  goalsFr: ['Parler de ce que tu as fait le week-end', 'Former le Perfekt avec « haben »', 'Construire les participes réguliers et irréguliers', 'Mettre le participe à la fin de la phrase'],
  steps: [
    { kind: 'intro', title: 'Was hast du gemacht? 📅', titleFr: 'Qu’as-tu fait ? 📅',
      scene: 'Colleagues chat on Monday about their weekend.', sceneFr: 'Des collègues discutent lundi de leur week-end.',
      goals: ['Say what you did at the weekend', 'Use "haben" + participle', 'Form regular participles (ge…t)', 'Learn common irregular participles'],
      goalsFr: ['Dire ce que tu as fait le week-end', 'Utiliser « haben » + participe', 'Former les participes réguliers (ge…t)', 'Apprendre des participes irréguliers courants'] },

    { kind: 'vocab', item: { id: 'a2l1-wochenende', german: 'das Wochenende', english: 'the weekend', french: 'le week-end', gender: 'das', syllables: ['WO', 'chen', 'en', 'de'], pronunciation: 'dahs VOKH-en-en-de', example: { de: 'Am Wochenende habe ich Freunde getroffen.', en: 'At the weekend I met friends.', fr: 'Le week-end, j’ai rencontré des amis.' } } },
    { kind: 'vocab', item: { id: 'a2l1-gestern', german: 'gestern', english: 'yesterday', french: 'hier', gender: null, syllables: ['GES', 'tern'], pronunciation: 'GES-tern', example: { de: 'Gestern habe ich gekocht.', en: 'Yesterday I cooked.', fr: 'Hier, j’ai cuisiné.' } } },
    { kind: 'vocab', item: { id: 'a2l1-letzte-woche', german: 'letzte Woche', english: 'last week', french: 'la semaine dernière', gender: null, syllables: ['LETZ', 'te', 'WO', 'che'], pronunciation: 'LETS-te VOKH-e', example: { de: 'Letzte Woche habe ich viel gearbeitet.', en: 'Last week I worked a lot.', fr: 'La semaine dernière, j’ai beaucoup travaillé.' } } },
    { kind: 'vocab', item: { id: 'a2l1-party', german: 'die Party', english: 'the party', french: 'la fête', gender: 'die', syllables: ['PAR', 'ty'], pronunciation: 'dee PAR-tee', example: { de: 'Die Party war toll.', en: 'The party was great.', fr: 'La fête était super.' } } },
    { kind: 'vocab', item: { id: 'a2l1-besuchen', german: 'besuchen', english: 'to visit', french: 'rendre visite', gender: null, syllables: ['be', 'SU', 'chen'], pronunciation: 'be-ZOO-khen', example: { de: 'Ich habe meine Oma besucht.', en: 'I visited my grandma.', fr: 'J’ai rendu visite à ma grand-mère.' } } },
    { kind: 'vocab', item: { id: 'a2l1-kochen', german: 'kochen', english: 'to cook', french: 'cuisiner', gender: null, syllables: ['KO', 'chen'], pronunciation: 'KOKH-en', example: { de: 'Ich habe Suppe gekocht.', en: 'I cooked soup.', fr: 'J’ai cuisiné de la soupe.' } } },
    { kind: 'vocab', item: { id: 'a2l1-treffen', german: 'treffen', english: 'to meet', french: 'rencontrer', gender: null, syllables: ['TREF', 'fen'], pronunciation: 'TREF-fen', example: { de: 'Ich habe Anna getroffen.', en: 'I met Anna.', fr: 'J’ai rencontré Anna.' } } },
    { kind: 'vocab', item: { id: 'a2l1-sehen', german: 'sehen', english: 'to see / watch', french: 'voir / regarder', gender: null, syllables: ['SE', 'hen'], pronunciation: 'ZAY-en', example: { de: 'Ich habe einen Film gesehen.', en: 'I watched a film.', fr: 'J’ai regardé un film.' } } },
    { kind: 'vocab', item: { id: 'a2l1-erzaehlen', german: 'erzählen', english: 'to tell / recount', french: 'raconter', gender: null, syllables: ['er', 'ZÄH', 'len'], pronunciation: 'air-TSAY-len', example: { de: 'Er hat vom Urlaub erzählt.', en: 'He told about the holiday.', fr: 'Il a raconté les vacances.' } } },
    { kind: 'vocab', item: { id: 'a2l1-partizip', german: 'das Partizip', english: 'the participle', french: 'le participe', gender: 'das', syllables: ['par', 'ti', 'ZIP'], pronunciation: 'dahs par-ti-TSEEP', example: { de: '"Gemacht" ist ein Partizip.', en: '"Gemacht" is a participle.', fr: '« Gemacht » est un participe.' } } },

    { kind: 'grammar', note: {
      id: 'a2l1-perfekt-haben', title: 'The Perfekt with "haben"', titleFr: 'Le Perfekt avec « haben »',
      explanationMd: 'To talk about the past, German mostly uses the **Perfekt**: a form of **haben** in position 2 + the **participle** at the **end**:\n\n- Ich **habe** Fußball **gespielt**. — I played football.\n- **Hast** du gut **geschlafen**? — Did you sleep well?\n\nThis frame (haben … participle) is another *Satzklammer*.',
      explanationMdFr: 'Pour parler du passé, l’allemand utilise surtout le **Perfekt** : une forme de **haben** en position 2 + le **participe** à la **fin** :\n\n- Ich **habe** Fußball **gespielt**. — J’ai joué au football.\n- **Hast** du gut **geschlafen**? — As-tu bien dormi ?\n\nCe cadre (haben … participe) est une autre *Satzklammer*.',
      examples: [
        { de: 'Ich habe gestern gekocht.', en: 'I cooked yesterday.', fr: 'J’ai cuisiné hier.' },
        { de: 'Was hast du am Wochenende gemacht?', en: 'What did you do at the weekend?', fr: 'Qu’as-tu fait le week-end ?' },
      ],
      diagram: 'satzklammer' } },

    { kind: 'grammar', note: {
      id: 'a2l1-regelmaessig', title: 'Regular participles: ge…t', titleFr: 'Participes réguliers : ge…t',
      explanationMd: 'Regular (weak) verbs build the participle with **ge + stem + t**:\n\n- machen → **gemacht** · spielen → **gespielt** · kaufen → **gekauft**\n- After d/t, add **-et**: arbeiten → **gearbeitet**\n\nVerbs with an inseparable prefix (be-, er-, ver-) or ending in **-ieren** take **no ge-**: besuchen → **besucht**, studieren → **studiert**.',
      explanationMdFr: 'Les verbes réguliers (faibles) forment le participe avec **ge + radical + t** :\n\n- machen → **gemacht** · spielen → **gespielt** · kaufen → **gekauft**\n- Après d/t, on ajoute **-et** : arbeiten → **gearbeitet**\n\nLes verbes à préfixe inséparable (be-, er-, ver-) ou en **-ieren** ne prennent **pas de ge-** : besuchen → **besucht**, studieren → **studiert**.',
      examples: [
        { de: 'Ich habe Deutsch gelernt.', en: 'I studied German.', fr: 'J’ai appris l’allemand.' },
        { de: 'Wir haben eine Party gemacht.', en: 'We had a party.', fr: 'Nous avons fait une fête.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l1-unregelmaessig', title: 'Irregular participles: ge…en', titleFr: 'Participes irréguliers : ge…en',
      explanationMd: 'Irregular (strong) verbs end in **-en** and often change their vowel. Learn them by heart:\n\n- sehen → **gesehen** · treffen → **getroffen** · essen → **gegessen**\n- trinken → **getrunken** · lesen → **gelesen** · schreiben → **geschrieben**',
      explanationMdFr: 'Les verbes irréguliers (forts) se terminent en **-en** et changent souvent de voyelle. À apprendre par cœur :\n\n- sehen → **gesehen** · treffen → **getroffen** · essen → **gegessen**\n- trinken → **getrunken** · lesen → **gelesen** · schreiben → **geschrieben**',
      examples: [
        { de: 'Ich habe einen Film gesehen.', en: 'I watched a film.', fr: 'J’ai regardé un film.' },
        { de: 'Wir haben Pizza gegessen.', en: 'We ate pizza.', fr: 'Nous avons mangé une pizza.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l1-e1', prompt: 'Ich habe Fußball ___. (spielen → participle)', answer: 'gespielt', hint: 'regular participle: ge + spiel + t', hintFr: 'participe régulier : ge + spiel + t' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l1-e2', prompt: 'Which is the correct participle of "sehen"?', promptFr: 'Quel est le participe correct de « sehen » ?', options: ['geseht', 'gesehen', 'geseht'], answer: 1, explain: '"sehen" is irregular: gesehen (ge…en).', explainFr: '« sehen » est irrégulier : gesehen (ge…en).', hint: 'Strong verbs end in -en.', hintFr: 'Les verbes forts se terminent en -en.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l1-e3', tokens: ['gekocht', 'habe', 'Ich', 'gestern'], answer: ['Ich', 'habe', 'gestern', 'gekocht'], hint: 'haben in position 2, participle at the end.', hintFr: 'haben en position 2, participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l1-e4', pairs: [ { de: 'machen', en: 'gemacht', fr: 'gemacht' }, { de: 'trinken', en: 'getrunken', fr: 'getrunken' }, { de: 'arbeiten', en: 'gearbeitet', fr: 'gearbeitet' } ], hint: 'Match each infinitive to its participle.', hintFr: 'Associe chaque infinitif à son participe.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l1-e5', prompt: 'Listen. What did Lena do yesterday?', promptFr: 'Écoute. Qu’a fait Lena hier ?', audio: { ttsText: 'Gestern habe ich einen Film gesehen und Pizza gegessen.' }, options: ['Watched a film and ate pizza', 'Worked and slept', 'Played football'], optionsFr: ['Regardé un film et mangé une pizza', 'Travaillé et dormi', 'Joué au football'], answer: 0, hint: 'Listen for the two participles.', hintFr: 'Écoute les deux participes.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l1-e6', prompt: 'Wir haben Pizza ___. (essen → participle)', answer: 'gegessen', hint: 'irregular participle of essen', hintFr: 'participe irrégulier de essen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l1-e7', prompt: 'Which verb takes NO "ge-" in the participle?', promptFr: 'Quel verbe ne prend PAS de « ge- » au participe ?', options: ['spielen', 'besuchen', 'kochen'], answer: 1, explain: '"besuchen" has the inseparable prefix be- → besucht (no ge-).', explainFr: '« besuchen » a le préfixe inséparable be- → besucht (sans ge-).', hint: 'Look for the inseparable prefix.', hintFr: 'Cherche le préfixe inséparable.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l1-e8', tokens: ['getroffen', 'Anna', 'habe', 'Ich'], answer: ['Ich', 'habe', 'Anna', 'getroffen'], hint: 'Subject, haben, object, then the participle.', hintFr: 'Sujet, haben, objet, puis le participe.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l1-e9', prompt: 'Letzte Woche habe ich viel ___. (arbeiten → participle)', answer: 'gearbeitet', hint: 'after t, the ending is -et: gearbeitet', hintFr: 'après t, la terminaison est -et : gearbeitet' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l1-e10', prompt: 'Listen. Whom did Tom visit?', promptFr: 'Écoute. À qui Tom a-t-il rendu visite ?', audio: { ttsText: 'Am Sonntag habe ich meine Oma besucht.' }, options: ['His grandma', 'His friend', 'His teacher'], optionsFr: ['Sa grand-mère', 'Son ami', 'Son professeur'], answer: 0, hint: 'Listen after "habe ich meine …".', hintFr: 'Écoute après « habe ich meine … ».' } },

    { kind: 'pronunciation', focus: 'The participle prefix "ge-" is short and unstressed; the stress stays on the stem (geMACHT, geSEHen)', focusFr: 'Le préfixe « ge- » du participe est court et non accentué ; l’accent reste sur le radical (geMACHT, geSEHen)', items: [
      { id: 'a2l1-gemacht-pron', german: 'gemacht', english: 'done / made', french: 'fait', gender: null, syllables: ['ge', 'MACHT'], pronunciation: 'ge-MAHKHT', example: { de: 'Ich habe die Hausaufgaben gemacht.', en: 'I did the homework.', fr: 'J’ai fait les devoirs.' } },
      { id: 'a2l1-gesehen-pron', german: 'gesehen', english: 'seen', french: 'vu', gender: null, syllables: ['ge', 'SE', 'hen'], pronunciation: 'ge-ZAY-en', example: { de: 'Hast du das gesehen?', en: 'Did you see that?', fr: 'As-tu vu ça ?' } },
    ] },

    { kind: 'wrapup', summary: 'You can now talk about the past with the **Perfekt**: **haben** in position 2 and the **participle** at the end. Regular verbs make **ge…t** (gemacht), irregular verbs make **ge…en** (gesehen), and be-/er-/-ieren verbs take no ge- (besucht). 🎉',
      summaryFr: 'Tu sais maintenant parler du passé avec le **Perfekt** : **haben** en position 2 et le **participe** à la fin. Les verbes réguliers font **ge…t** (gemacht), les irréguliers **ge…en** (gesehen), et les verbes be-/er-/-ieren ne prennent pas de ge- (besucht). 🎉' },
  ],
};

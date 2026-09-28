import type { Lesson } from '../types';

export const a2lektion5: Lesson = {
  id: 'a2-l5', level: 'A2', module: 2, number: 5,
  title: { de: 'Der Dativ', en: 'The dative case', fr: 'Le datif' },
  theme: 'The dative: indirect objects, dative verbs, and dative pronouns',
  themeFr: 'Le datif : compléments d’objet indirect, verbes au datif et pronoms au datif',
  goals: ['Use the dative for the indirect object', 'Use the dative articles (dem/der/dem/den)', 'Use dative verbs like helfen and gehören', 'Use dative pronouns (mir, dir, ihm …)'],
  goalsFr: ['Utiliser le datif pour le complément d’objet indirect', 'Utiliser les articles au datif (dem/der/dem/den)', 'Utiliser les verbes au datif comme helfen et gehören', 'Utiliser les pronoms au datif (mir, dir, ihm …)'],
  steps: [
    { kind: 'intro', title: 'Wem gibst du das? 🎁', titleFr: 'À qui donnes-tu ça ? 🎁',
      scene: 'Giving gifts and helping people — who receives what.', sceneFr: 'On offre des cadeaux et on aide les gens — qui reçoit quoi.',
      goals: ['Use the dative for the receiver', 'Learn the dative articles', 'Use dative verbs (helfen, danken, gehören)', 'Use dative pronouns'],
      goalsFr: ['Utiliser le datif pour celui qui reçoit', 'Apprendre les articles au datif', 'Utiliser les verbes au datif (helfen, danken, gehören)', 'Utiliser les pronoms au datif'] },

    { kind: 'vocab', item: { id: 'a2l5-geben', german: 'geben', english: 'to give', french: 'donner', gender: null, syllables: ['GE', 'ben'], pronunciation: 'GAY-ben', example: { de: 'Ich gebe dem Kind das Buch.', en: 'I give the child the book.', fr: 'Je donne le livre à l’enfant.' } } },
    { kind: 'vocab', item: { id: 'a2l5-schenken', german: 'schenken', english: 'to give (as a gift)', french: 'offrir', gender: null, syllables: ['SCHEN', 'ken'], pronunciation: 'SHENK-en', example: { de: 'Ich schenke meiner Mutter Blumen.', en: 'I give my mother flowers.', fr: 'J’offre des fleurs à ma mère.' } } },
    { kind: 'vocab', item: { id: 'a2l5-helfen', german: 'helfen', english: 'to help (+ dative)', french: 'aider (+ datif)', gender: null, syllables: ['HEL', 'fen'], pronunciation: 'HELL-fen', example: { de: 'Kannst du mir helfen?', en: 'Can you help me?', fr: 'Peux-tu m’aider ?' } } },
    { kind: 'vocab', item: { id: 'a2l5-danken', german: 'danken', english: 'to thank (+ dative)', french: 'remercier (+ datif)', gender: null, syllables: ['DAN', 'ken'], pronunciation: 'DAHNK-en', example: { de: 'Ich danke dir.', en: 'I thank you.', fr: 'Je te remercie.' } } },
    { kind: 'vocab', item: { id: 'a2l5-gehoeren', german: 'gehören', english: 'to belong to (+ dative)', french: 'appartenir à (+ datif)', gender: null, syllables: ['ge', 'HÖ', 'ren'], pronunciation: 'ge-HOE-ren', example: { de: 'Das Buch gehört mir.', en: 'The book belongs to me.', fr: 'Le livre m’appartient.' } } },
    { kind: 'vocab', item: { id: 'a2l5-zeigen', german: 'zeigen', english: 'to show', french: 'montrer', gender: null, syllables: ['ZEI', 'gen'], pronunciation: 'TSY-gen', example: { de: 'Ich zeige dir die Stadt.', en: 'I show you the city.', fr: 'Je te montre la ville.' } } },
    { kind: 'vocab', item: { id: 'a2l5-kind', german: 'das Kind', english: 'the child', french: 'l’enfant', gender: 'das', syllables: ['KIND'], pronunciation: 'dahs KINT', example: { de: 'Ich gebe dem Kind einen Apfel.', en: 'I give the child an apple.', fr: 'Je donne une pomme à l’enfant.' } } },
    { kind: 'vocab', item: { id: 'a2l5-geschenk', german: 'das Geschenk', english: 'the gift', french: 'le cadeau', gender: 'das', syllables: ['ge', 'SCHENK'], pronunciation: 'dahs ge-SHENK', example: { de: 'Das Geschenk ist für dich.', en: 'The gift is for you.', fr: 'Le cadeau est pour toi.' } } },
    { kind: 'vocab', item: { id: 'a2l5-mir', german: 'mir', english: '(to) me (dative)', french: '(à) moi (datif)', gender: null, syllables: ['MIR'], pronunciation: 'meer', example: { de: 'Gib mir das Buch.', en: 'Give me the book.', fr: 'Donne-moi le livre.' } } },
    { kind: 'vocab', item: { id: 'a2l5-dir', german: 'dir', english: '(to) you (dative)', french: '(à) toi (datif)', gender: null, syllables: ['DIR'], pronunciation: 'deer', example: { de: 'Ich helfe dir.', en: 'I help you.', fr: 'Je t’aide.' } } },

    { kind: 'grammar', note: {
      id: 'a2l5-dativ-artikel', title: 'The dative articles', titleFr: 'Les articles au datif',
      explanationMd: 'The **indirect object** (the receiver) takes the dative. The articles change:\n\n- der → **dem** · die → **der** · das → **dem** · plural die → **den** (+ -n on the noun)\n\nIch gebe **dem** Mann / **der** Frau / **dem** Kind das Buch.',
      explanationMdFr: 'Le **complément d’objet indirect** (celui qui reçoit) est au datif. Les articles changent :\n\n- der → **dem** · die → **der** · das → **dem** · pluriel die → **den** (+ -n au nom)\n\nIch gebe **dem** Mann / **der** Frau / **dem** Kind das Buch.',
      examples: [
        { de: 'Ich gebe dem Kind einen Apfel.', en: 'I give the child an apple.', fr: 'Je donne une pomme à l’enfant.' },
        { de: 'Ich schenke der Frau Blumen.', en: 'I give the woman flowers.', fr: 'J’offre des fleurs à la femme.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l5-dativ-verben', title: 'Dative verbs', titleFr: 'Les verbes au datif',
      explanationMd: 'Some verbs always take the **dative**, even for their only object:\n\n- **helfen** — Ich helfe **dir**.\n- **danken** — Ich danke **dir**.\n- **gehören** — Das Buch gehört **mir**.\n- **gefallen** — Das Bild gefällt **mir**. (I like the picture.)',
      explanationMdFr: 'Certains verbes prennent toujours le **datif**, même pour leur seul objet :\n\n- **helfen** — Ich helfe **dir**.\n- **danken** — Ich danke **dir**.\n- **gehören** — Das Buch gehört **mir**.\n- **gefallen** — Das Bild gefällt **mir**. (Le tableau me plaît.)',
      examples: [
        { de: 'Kannst du mir helfen?', en: 'Can you help me?', fr: 'Peux-tu m’aider ?' },
        { de: 'Das Auto gehört meinem Bruder.', en: 'The car belongs to my brother.', fr: 'La voiture appartient à mon frère.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l5-dativ-pronomen', title: 'Dative pronouns', titleFr: 'Les pronoms au datif',
      explanationMd: 'The personal pronouns in the dative:\n\n- ich → **mir** · du → **dir** · er → **ihm** · sie → **ihr** · es → **ihm**\n- wir → **uns** · ihr → **euch** · sie/Sie → **ihnen/Ihnen**\n\nGib **mir** bitte das Salz.',
      explanationMdFr: 'Les pronoms personnels au datif :\n\n- ich → **mir** · du → **dir** · er → **ihm** · sie → **ihr** · es → **ihm**\n- wir → **uns** · ihr → **euch** · sie/Sie → **ihnen/Ihnen**\n\nGib **mir** bitte das Salz.',
      examples: [
        { de: 'Ich gebe ihm das Buch.', en: 'I give him the book.', fr: 'Je lui donne le livre.' },
        { de: 'Wie geht es dir?', en: 'How are you? (lit. How goes it to you?)', fr: 'Comment vas-tu ?' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l5-e1', prompt: 'Ich gebe ___ Kind das Buch. (dative: das → ?)', answer: 'dem', hint: 'das → dem in the dative', hintFr: 'das → dem au datif' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l5-e2', prompt: 'Which pronoun is dative for "ich"?', promptFr: 'Quel pronom est le datif de « ich » ?', options: ['mich', 'mir', 'mein'], answer: 1, explain: 'ich → mir in the dative (mich is accusative).', explainFr: 'ich → mir au datif (mich est l’accusatif).', hint: 'Not "mich" (that is accusative).', hintFr: 'Pas « mich » (c’est l’accusatif).' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l5-e3', tokens: ['dir', 'Ich', 'helfe'], answer: ['Ich', 'helfe', 'dir'], hint: '"helfen" takes the dative pronoun.', hintFr: '« helfen » prend le pronom au datif.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l5-e4', pairs: [ { de: 'ich', en: 'mir', fr: 'mir' }, { de: 'du', en: 'dir', fr: 'dir' }, { de: 'er', en: 'ihm', fr: 'ihm' } ], hint: 'Match each pronoun to its dative form.', hintFr: 'Associe chaque pronom à sa forme au datif.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l5-e5', prompt: 'Listen. Who does the book belong to?', promptFr: 'Écoute. À qui appartient le livre ?', audio: { ttsText: 'Das ist nicht dein Buch. Das Buch gehört mir.' }, options: ['To me (the speaker)', 'To you', 'To the child'], optionsFr: ['À moi (le locuteur)', 'À toi', 'À l’enfant'], answer: 0, hint: 'Listen for "gehört mir".', hintFr: 'Écoute « gehört mir ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l5-e6', prompt: 'Kannst du ___ helfen? (to me)', answer: 'mir', hint: 'dative pronoun for "me"', hintFr: 'pronom au datif pour « moi »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l5-e7', prompt: 'Which verb always takes the dative?', promptFr: 'Quel verbe prend toujours le datif ?', options: ['kaufen', 'helfen', 'sehen'], answer: 1, explain: '"helfen" is a dative verb: helfen + dative.', explainFr: '« helfen » est un verbe au datif : helfen + datif.', hint: 'One of these means "to help".', hintFr: 'L’un d’eux signifie « aider ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l5-e8', prompt: 'Ich schenke ___ Frau Blumen. (dative: die → ?)', answer: 'der', hint: 'die → der in the dative', hintFr: 'die → der au datif' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l5-e9', tokens: ['ihm', 'das', 'gebe', 'Buch', 'Ich'], answer: ['Ich', 'gebe', 'ihm', 'das', 'Buch'], hint: 'Subject, verb, dative (receiver), then accusative (thing).', hintFr: 'Sujet, verbe, datif (celui qui reçoit), puis accusatif (la chose).' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l5-e10', prompt: 'Listen. What does Tom ask for?', promptFr: 'Écoute. Que demande Tom ?', audio: { ttsText: 'Entschuldigung, kannst du mir bitte helfen?' }, options: ['For help', 'For the time', 'For money'], optionsFr: ['De l’aide', 'L’heure', 'De l’argent'], answer: 0, hint: 'Listen for "helfen".', hintFr: 'Écoute « helfen ».' } },

    { kind: 'pronunciation', focus: 'Dative endings -m and -r are unstressed and short (dem, der, mir, ihm)', focusFr: 'Les terminaisons du datif -m et -r sont courtes et non accentuées (dem, der, mir, ihm)', items: [
      { id: 'a2l5-dem-pron', german: 'dem Kind', english: 'to the child', french: 'à l’enfant', gender: null, syllables: ['dem', 'KIND'], pronunciation: 'dem KINT', example: { de: 'Ich helfe dem Kind.', en: 'I help the child.', fr: 'J’aide l’enfant.' } },
      { id: 'a2l5-ihm-pron', german: 'ihm', english: '(to) him', french: '(à) lui', gender: null, syllables: ['IHM'], pronunciation: 'eem', example: { de: 'Ich gebe ihm das Geld.', en: 'I give him the money.', fr: 'Je lui donne l’argent.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now use the **dative** for the receiver of an action: articles become **dem / der / dem / den**, verbs like **helfen, danken, gehören** take the dative, and the pronouns are **mir, dir, ihm, ihr, uns, euch, ihnen**. 🎉',
      summaryFr: 'Tu sais maintenant utiliser le **datif** pour celui qui reçoit : les articles deviennent **dem / der / dem / den**, les verbes comme **helfen, danken, gehören** prennent le datif, et les pronoms sont **mir, dir, ihm, ihr, uns, euch, ihnen**. 🎉' },
  ],
};

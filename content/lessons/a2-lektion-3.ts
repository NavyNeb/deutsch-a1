import type { Lesson } from '../types';

export const a2lektion3: Lesson = {
  id: 'a2-l3', level: 'A2', module: 2, number: 5,
  title: { de: 'Einladungen', en: 'Invitations', fr: 'Les invitations' },
  theme: 'Making plans: "wollen", invitations, and direction vs. location',
  themeFr: 'Faire des projets : « wollen », les invitations, et direction vs. lieu',
  goals: ['Invite someone and accept or decline', 'Use the modal verb "wollen"', 'Say "ins Kino gehen" (direction)', 'Tell the difference between direction (ins) and location (im)'],
  goalsFr: ['Inviter quelqu’un et accepter ou refuser', 'Utiliser le verbe modal « wollen »', 'Dire « ins Kino gehen » (direction)', 'Distinguer la direction (ins) et le lieu (im)'],
  steps: [
    { kind: 'intro', title: 'Wollen wir …? 🎬', titleFr: 'On y va … ? 🎬',
      scene: 'Friends make plans to go out on the weekend.', sceneFr: 'Des amis font des projets pour sortir le week-end.',
      goals: ['Invite someone out', 'Accept or decline politely', 'Use "wollen" + infinitive', 'Use "ins …" for direction'],
      goalsFr: ['Inviter quelqu’un à sortir', 'Accepter ou refuser poliment', 'Utiliser « wollen » + infinitif', 'Utiliser « ins … » pour la direction'] },

    { kind: 'vocab', item: { id: 'a2l3-einladung', german: 'die Einladung', english: 'the invitation', french: 'l’invitation', gender: 'die', syllables: ['EIN', 'la', 'dung'], pronunciation: 'dee INE-lah-doong', example: { de: 'Danke für die Einladung!', en: 'Thanks for the invitation!', fr: 'Merci pour l’invitation !' } } },
    { kind: 'vocab', item: { id: 'a2l3-einladen', german: 'einladen', english: 'to invite', french: 'inviter', gender: null, syllables: ['EIN', 'la', 'den'], pronunciation: 'INE-lah-den', example: { de: 'Ich lade dich ein.', en: 'I invite you.', fr: 'Je t’invite.' } } },
    { kind: 'vocab', item: { id: 'a2l3-kino', german: 'das Kino', english: 'the cinema', french: 'le cinéma', gender: 'das', syllables: ['KI', 'no'], pronunciation: 'dahs KEE-no', example: { de: 'Wollen wir ins Kino gehen?', en: 'Shall we go to the cinema?', fr: 'On va au cinéma ?' } } },
    { kind: 'vocab', item: { id: 'a2l3-restaurant', german: 'das Restaurant', english: 'the restaurant', french: 'le restaurant', gender: 'das', syllables: ['res', 'tau', 'RANT'], pronunciation: 'dahs res-toh-RAHNG', example: { de: 'Wir essen im Restaurant.', en: 'We eat at the restaurant.', fr: 'Nous mangeons au restaurant.' } } },
    { kind: 'vocab', item: { id: 'a2l3-wollen', german: 'wollen', english: 'to want', french: 'vouloir', gender: null, syllables: ['WOL', 'len'], pronunciation: 'VOL-len', example: { de: 'Ich will heute ausgehen.', en: 'I want to go out today.', fr: 'Je veux sortir aujourd’hui.' } } },
    { kind: 'vocab', item: { id: 'a2l3-mitkommen', german: 'mitkommen', english: 'to come along', french: 'venir (avec)', gender: null, syllables: ['MIT', 'kom', 'men'], pronunciation: 'MIT-kom-men', example: { de: 'Kommst du mit?', en: 'Are you coming along?', fr: 'Tu viens avec ?' } } },
    { kind: 'vocab', item: { id: 'a2l3-lust', german: 'die Lust', english: 'the desire / mood', french: 'l’envie', gender: 'die', syllables: ['LUST'], pronunciation: 'dee LOOST', example: { de: 'Hast du Lust?', en: 'Do you feel like it?', fr: 'Tu as envie ?' } } },
    { kind: 'vocab', item: { id: 'a2l3-leider', german: 'leider', english: 'unfortunately', french: 'malheureusement', gender: null, syllables: ['LEI', 'der'], pronunciation: 'LYE-der', example: { de: 'Leider habe ich keine Zeit.', en: 'Unfortunately I have no time.', fr: 'Malheureusement, je n’ai pas le temps.' } } },
    { kind: 'vocab', item: { id: 'a2l3-vielleicht', german: 'vielleicht', english: 'maybe / perhaps', french: 'peut-être', gender: null, syllables: ['viel', 'LEICHT'], pronunciation: 'fee-LYESHT', example: { de: 'Vielleicht am Samstag.', en: 'Maybe on Saturday.', fr: 'Peut-être samedi.' } } },
    { kind: 'vocab', item: { id: 'a2l3-termin', german: 'der Termin', english: 'the appointment', french: 'le rendez-vous', gender: 'der', syllables: ['ter', 'MIN'], pronunciation: 'dair ter-MEEN', example: { de: 'Ich habe einen Termin.', en: 'I have an appointment.', fr: 'J’ai un rendez-vous.' } } },

    { kind: 'grammar', note: {
      id: 'a2l3-wollen-note', title: 'The modal verb "wollen" (to want)', titleFr: 'Le verbe modal « wollen » (vouloir)',
      explanationMd: '**wollen** says what you want to do. The infinitive goes to the **end**:\n\n- ich **will** — I want\n- du **willst** — you want\n- er/sie/es **will** — he/she/it wants\n\nIch **will** ins Kino **gehen**.',
      explanationMdFr: '**wollen** dit ce qu’on veut faire. L’infinitif va à la **fin** :\n\n- ich **will** — je veux\n- du **willst** — tu veux\n- er/sie/es **will** — il/elle/on veut\n\nIch **will** ins Kino **gehen**.',
      examples: [
        { de: 'Willst du mitkommen?', en: 'Do you want to come along?', fr: 'Tu veux venir ?' },
        { de: 'Wir wollen essen gehen.', en: 'We want to go out to eat.', fr: 'Nous voulons aller manger.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'a2l3-einladen-note', title: 'Inviting, accepting, and declining', titleFr: 'Inviter, accepter et refuser',
      explanationMd: 'Invite with **Wollen wir …?** or **Hast du Lust?**\n\n- **Wollen wir** ins Kino gehen?\n- Accept: **Ja, gern!** / Gute Idee!\n- Decline: **Nein, leider** habe ich keine Zeit.',
      explanationMdFr: 'Invite avec **Wollen wir …?** ou **Hast du Lust?**\n\n- **Wollen wir** ins Kino gehen ?\n- Accepter : **Ja, gern !** / Gute Idee !\n- Refuser : **Nein, leider** habe ich keine Zeit.',
      examples: [
        { de: 'Wollen wir am Samstag essen gehen?', en: 'Shall we go out to eat on Saturday?', fr: 'On va manger samedi ?' },
        { de: 'Ja, gern! Um wie viel Uhr?', en: 'Yes, gladly! At what time?', fr: 'Oui, volontiers ! À quelle heure ?' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l3-richtung-ort', title: 'Direction ("ins") vs. location ("im")', titleFr: 'Direction (« ins ») vs. lieu (« im »)',
      explanationMd: 'With **gehen/fahren** (movement) use **in + accusative** for the direction; with **sein** (location) use **in + dative**:\n\n- Direction: Ich gehe **ins** Kino. (in das → ins)\n- Location: Ich bin **im** Kino. (in dem → im)\n\nAsk **Wohin?** for direction, **Wo?** for location.',
      explanationMdFr: 'Avec **gehen/fahren** (mouvement) utilise **in + accusatif** pour la direction ; avec **sein** (lieu) utilise **in + datif** :\n\n- Direction : Ich gehe **ins** Kino. (in das → ins)\n- Lieu : Ich bin **im** Kino. (in dem → im)\n\nDemande **Wohin?** pour la direction, **Wo?** pour le lieu.',
      examples: [
        { de: 'Wir gehen ins Restaurant.', en: 'We are going to the restaurant.', fr: 'Nous allons au restaurant.' },
        { de: 'Wir sind im Restaurant.', en: 'We are at the restaurant.', fr: 'Nous sommes au restaurant.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l3-e1', prompt: 'Ich ___ ins Kino gehen. (wollen — ich-form)', answer: 'will', hint: 'first person singular of wollen', hintFr: 'première personne du singulier de wollen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l3-e2', prompt: 'How do you invite: "Shall we go to the cinema?"', promptFr: 'Comment inviter : « On va au cinéma ? »', options: ['Wollen wir ins Kino gehen?', 'Ich bin im Kino.', 'Ich war im Kino.'], answer: 0, explain: '"Wollen wir …?" is the invitation form.', explainFr: '« Wollen wir …? » est la forme d’invitation.', hint: 'Look for "Wollen wir …?".', hintFr: 'Cherche « Wollen wir …? ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l3-e3', prompt: 'Wir gehen ___ Kino. (direction: in das → ?)', answer: 'ins', hint: 'direction with gehen: in + das = ins', hintFr: 'direction avec gehen : in + das = ins' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l3-e4', prompt: 'Which sentence shows LOCATION (not direction)?', promptFr: 'Quelle phrase montre le LIEU (pas la direction) ?', options: ['Ich gehe ins Kino.', 'Ich bin im Kino.', 'Ich fahre ins Kino.'], answer: 1, explain: '"Ich bin im Kino" = location (sein + dative).', explainFr: '« Ich bin im Kino » = lieu (sein + datif).', hint: 'Location goes with "sein" and "im".', hintFr: 'Le lieu va avec « sein » et « im ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l3-e5', pairs: [ { de: 'Wollen wir?', en: 'Shall we?', fr: 'On y va ?' }, { de: 'Ja, gern!', en: 'Yes, gladly!', fr: 'Oui, volontiers !' }, { de: 'Leider nicht.', en: 'Unfortunately not.', fr: 'Malheureusement non.' } ], hint: 'Match each phrase to its meaning.', hintFr: 'Associe chaque expression à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l3-e6', prompt: 'Listen. What does Ben suggest?', promptFr: 'Écoute. Que propose Ben ?', audio: { ttsText: 'Hallo! Wollen wir am Samstag ins Restaurant gehen?' }, options: ['Go to a restaurant', 'Go to the cinema', 'Stay home'], optionsFr: ['Aller au restaurant', 'Aller au cinéma', 'Rester à la maison'], answer: 0, hint: 'Listen after "ins".', hintFr: 'Écoute après « ins ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l3-e7', tokens: ['gehen', 'wir', 'Kino', 'Wollen', 'ins'], answer: ['Wollen', 'wir', 'ins', 'Kino', 'gehen'], hint: 'Invitation: modal first, infinitive at the end.', hintFr: 'Invitation : modal d’abord, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l3-e8', prompt: '___ habe ich keine Zeit. (unfortunately)', answer: 'Leider', hint: 'the word for "unfortunately"', hintFr: 'le mot pour « malheureusement »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l3-e9', prompt: 'Which is a polite way to decline?', promptFr: 'Quelle est une façon polie de refuser ?', options: ['Ja, gern!', 'Nein, leider habe ich keine Zeit.', 'Gute Idee!'], answer: 1, explain: '"Nein, leider …" politely declines.', explainFr: '« Nein, leider … » refuse poliment.', hint: 'Look for "leider" (unfortunately).', hintFr: 'Cherche « leider » (malheureusement).' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l3-e10', prompt: 'Listen. Does Mia accept the invitation?', promptFr: 'Écoute. Mia accepte-t-elle l’invitation ?', audio: { ttsText: 'Ja, gern! Ich komme mit. Um wie viel Uhr?' }, options: ['Yes, she accepts', 'No, she declines', 'She is not sure'], optionsFr: ['Oui, elle accepte', 'Non, elle refuse', 'Elle n’est pas sûre'], answer: 0, hint: 'Listen for "Ja, gern!" and "Ich komme mit".', hintFr: 'Écoute « Ja, gern! » et « Ich komme mit ».' } },

    { kind: 'pronunciation', focus: 'The "ei" in Einladung is "eye", and "v" in vielleicht sounds like "f"', focusFr: 'Le « ei » de Einladung est « aï », et le « v » de vielleicht se prononce « f »', items: [
      { id: 'a2l3-einladung-pron', german: 'Einladung', english: 'invitation', french: 'invitation', gender: null, syllables: ['EIN', 'la', 'dung'], pronunciation: 'INE-lah-doong', example: { de: 'Danke für die Einladung!', en: 'Thanks for the invitation!', fr: 'Merci pour l’invitation !' } },
      { id: 'a2l3-vielleicht-pron', german: 'vielleicht', english: 'maybe', french: 'peut-être', gender: null, syllables: ['viel', 'LEICHT'], pronunciation: 'fee-LYESHT', example: { de: 'Vielleicht am Sonntag.', en: 'Maybe on Sunday.', fr: 'Peut-être dimanche.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now invite someone with **Wollen wir …?**, accept (Ja, gern!) or decline (Nein, leider …), use the modal **wollen**, and tell direction (**ins** Kino gehen) from location (**im** Kino sein). 🎉',
      summaryFr: 'Tu sais maintenant inviter quelqu’un avec **Wollen wir …?**, accepter (Ja, gern !) ou refuser (Nein, leider …), utiliser le modal **wollen**, et distinguer la direction (**ins** Kino gehen) du lieu (**im** Kino sein). 🎉' },
  ],
};

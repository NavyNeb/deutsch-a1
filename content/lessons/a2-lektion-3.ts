import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion3: Lesson = {
  id: 'a2-l3', level: 'A2', module: 2, number: 5,
  title: { de: 'Einladungen', en: 'Invitations', fr: 'Les invitations' },
  theme: 'Making plans: "wollen", invitations, and direction vs. location', themeFr: 'Faire des projets : « wollen », les invitations, et direction vs. lieu',
  goals: ['Invite someone and accept or decline', 'Use the modal verb "wollen"', 'Say "ins Kino gehen" (direction)', 'Tell the difference between direction (ins) and location (im)'], goalsFr: ['Inviter quelqu’un et accepter ou refuser', 'Utiliser le verbe modal « wollen »', 'Dire « ins Kino gehen » (direction)', 'Distinguer la direction (ins) et le lieu (im)'],
  canDo: g('Ich kann jemanden einladen, zusagen oder höflich absagen und sagen, wohin ich gehe und wo ich bin.', 'I can invite someone, accept or politely decline, and say where I am going and where I am.', 'Je sais inviter quelqu’un, accepter ou refuser poliment, et dire où je vais et où je suis.'),
  steps: [
    { kind: 'intro', title: 'Verabredungen und Einladungen 🎬', titleFr: 'Rendez-vous et invitations 🎬',
      scene: 'Ben invites Mia to the cinema, then to a restaurant. She says yes once and no once.', sceneFr: 'Ben invite Mia au cinéma, puis au restaurant. Elle dit oui une fois et non une fois.',
      goals: ['Invite, accept and decline politely', 'Use “wollen” for plans', 'Tell direction (ins) from location (im)'],
      goalsFr: ['Inviter, accepter et refuser poliment', 'Utiliser « wollen » pour les projets', 'Distinguer la direction (ins) du lieu (im)'] },

    // ───────────── 1 · Inviting ─────────────
    { kind: 'chapter', title: 'Einladen, zusagen, absagen', titleFr: 'Inviter, accepter, refuser', blurb: 'Wollen wir …? — Ja, gern! — Leider nicht.', blurbFr: 'Wollen wir …? — Ja, gern ! — Leider nicht.' },

    { kind: 'situation', title: 'Wollen wir ins Kino gehen?', titleFr: 'On va au cinéma ?',
      setting: 'Ben calls Mia on Friday.', settingFr: 'Ben appelle Mia le vendredi.',
      lines: [
        line('Ben', 'Hallo Mia! Hast du am Samstag Lust? Wollen wir ins Kino gehen?', 'Hi Mia! Do you feel like it on Saturday? Shall we go to the cinema?', 'Salut Mia ! Tu as envie samedi ? On va au cinéma ?'),
        line('Mia', 'Ja, gern! Danke für die Einladung. Um wie viel Uhr?', 'Yes, gladly! Thanks for the invitation. At what time?', 'Oui, volontiers ! Merci pour l’invitation. À quelle heure ?'),
        line('Ben', 'Um acht. Kommt Lara auch mit?', 'At eight. Is Lara coming along too?', 'À huit heures. Est-ce que Lara vient aussi ?'),
        line('Mia', 'Vielleicht. Ich frage sie. Und am Sonntag?', 'Maybe. I’ll ask her. And on Sunday?', 'Peut-être. Je lui demande. Et dimanche ?'),
        line('Ben', 'Am Sonntag lade ich dich zum Essen ein. Wollen wir ins Restaurant gehen?', 'On Sunday I’ll invite you to dinner. Shall we go to a restaurant?', 'Dimanche, je t’invite à dîner. On va au restaurant ?'),
        line('Mia', 'Leider habe ich am Sonntag einen Termin. Vielleicht am Montag?', 'Unfortunately I have an appointment on Sunday. Maybe on Monday?', 'Malheureusement, j’ai un rendez-vous dimanche. Peut-être lundi ?'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l3-e11', prompt: 'Why can Mia not go to the restaurant on Sunday?', promptFr: 'Pourquoi Mia ne peut-elle pas aller au restaurant dimanche ?', options: ['She has an appointment', 'She is ill', 'She dislikes restaurants'], optionsFr: ['Elle a un rendez-vous', 'Elle est malade', 'Elle n’aime pas les restaurants'], answer: 0, explain: 'She says: “Leider habe ich am Sonntag einen Termin.”', explainFr: 'Elle dit : « Leider habe ich am Sonntag einen Termin. »', hint: 'Look for “Termin”.', hintFr: 'Cherche « Termin ».' } },

    { kind: 'wordgroup', title: 'Verabreden', titleFr: 'Se donner rendez-vous',
      items: [{ id: 'a2l3-einladung', german: 'die Einladung', english: 'the invitation', french: 'l’invitation', gender: 'die', syllables: ['EIN', 'la', 'dung'], pronunciation: 'dee INE-lah-doong', example: { de: 'Danke für die Einladung!', en: 'Thanks for the invitation!', fr: 'Merci pour l’invitation !' } }, { id: 'a2l3-einladen', german: 'einladen', english: 'to invite', french: 'inviter', gender: null, syllables: ['EIN', 'la', 'den'], pronunciation: 'INE-lah-den', example: { de: 'Ich lade dich ein.', en: 'I invite you.', fr: 'Je t’invite.' } }, { id: 'a2l3-mitkommen', german: 'mitkommen', english: 'to come along', french: 'venir (avec)', gender: null, syllables: ['MIT', 'kom', 'men'], pronunciation: 'MIT-kom-men', example: { de: 'Kommst du mit?', en: 'Are you coming along?', fr: 'Tu viens avec ?' } }, { id: 'a2l3-lust', german: 'die Lust', english: 'the desire / mood', french: 'l’envie', gender: 'die', syllables: ['LUST'], pronunciation: 'dee LOOST', example: { de: 'Hast du Lust?', en: 'Do you feel like it?', fr: 'Tu as envie ?' } }, { id: 'a2l3-termin', german: 'der Termin', english: 'the appointment', french: 'le rendez-vous', gender: 'der', syllables: ['ter', 'MIN'], pronunciation: 'dair ter-MEEN', example: { de: 'Ich habe einen Termin.', en: 'I have an appointment.', fr: 'J’ai un rendez-vous.' } }] },

    { kind: 'wordgroup', title: 'Orte und Antworten', titleFr: 'Lieux et réponses',
      items: [{ id: 'a2l3-kino', german: 'das Kino', english: 'the cinema', french: 'le cinéma', gender: 'das', syllables: ['KI', 'no'], pronunciation: 'dahs KEE-no', example: { de: 'Wollen wir ins Kino gehen?', en: 'Shall we go to the cinema?', fr: 'On va au cinéma ?' } }, { id: 'a2l3-restaurant', german: 'das Restaurant', english: 'the restaurant', french: 'le restaurant', gender: 'das', syllables: ['res', 'tau', 'RANT'], pronunciation: 'dahs res-toh-RAHNG', example: { de: 'Wir essen im Restaurant.', en: 'We eat at the restaurant.', fr: 'Nous mangeons au restaurant.' } }, { id: 'a2l3-leider', german: 'leider', english: 'unfortunately', french: 'malheureusement', gender: null, syllables: ['LEI', 'der'], pronunciation: 'LYE-der', example: { de: 'Leider habe ich keine Zeit.', en: 'Unfortunately I have no time.', fr: 'Malheureusement, je n’ai pas le temps.' } }, { id: 'a2l3-vielleicht', german: 'vielleicht', english: 'maybe / perhaps', french: 'peut-être', gender: null, syllables: ['viel', 'LEICHT'], pronunciation: 'fee-LYESHT', example: { de: 'Vielleicht am Samstag.', en: 'Maybe on Saturday.', fr: 'Peut-être samedi.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l3-invite', title: 'Inviting, accepting, declining', titleFr: 'Inviter, accepter, refuser',
      lead: 'Invite with “Wollen wir …?” or “Hast du Lust?”. Say yes warmly, say no with “leider”.',
      leadFr: 'Invite avec « Wollen wir …? » ou « Hast du Lust ? ». Dis oui chaleureusement, dis non avec « leider ».',
      explanationMd: 'To **invite** someone use **Wollen wir …?** (Shall we …?), **Hast du Lust, … zu …?** or **Ich lade dich ein.** To **accept**: **Ja, gern! / Gute Idee! / Klar!** To **decline politely** give a short reason and start with **leider** (unfortunately): **Leider habe ich keine Zeit.** If you are not sure, say **Vielleicht** (maybe) and suggest another day.',
      explanationMdFr: 'Pour **inviter** quelqu’un, utilise **Wollen wir …?** (On …?), **Hast du Lust, … zu …?** ou **Ich lade dich ein.** Pour **accepter** : **Ja, gern ! / Gute Idee ! / Klar !** Pour **refuser poliment**, donne une courte raison et commence par **leider** (malheureusement) : **Leider habe ich keine Zeit.** Si tu n’es pas sûr, dis **Vielleicht** (peut-être) et propose un autre jour.',
      tables: [{ title: 'Invitation phrases', titleFr: 'Formules d’invitation', headers: ['Function', 'German', 'Reply'], headersFr: ['Fonction', 'Allemand', 'Réponse'],
        rows: [['Invite', 'Wollen wir ins Kino gehen?', 'Ja, gern!'], ['Invite', 'Hast du am Samstag Lust?', 'Gute Idee!'], ['Treat', 'Ich lade dich zum Essen ein.', 'Danke für die Einladung!'], ['Decline', '—', 'Leider habe ich keine Zeit.'], ['Not sure', '—', 'Vielleicht am Montag?']],
        rowsFr: [['Inviter', 'Wollen wir ins Kino gehen?', 'Ja, gern!'], ['Inviter', 'Hast du am Samstag Lust?', 'Gute Idee!'], ['Offrir', 'Ich lade dich zum Essen ein.', 'Danke für die Einladung!'], ['Refuser', '—', 'Leider habe ich keine Zeit.'], ['Incertain', '—', 'Vielleicht am Montag?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wollen', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'am Samstag', role: 'time' }, { text: 'ins Kino', role: 'place' }, { text: 'gehen?', role: 'verb' }], en: 'Shall we go to the cinema on Saturday?', fr: 'On va au cinéma samedi ?' },
        { parts: [{ text: 'Leider', role: 'other' }, { text: 'habe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'keine Zeit.', role: 'accusative' }], en: 'Unfortunately I have no time.', fr: 'Malheureusement, je n’ai pas le temps.' },
      ],
      contrast: {
        a: { label: 'Yes', labelFr: 'Oui', note: 'warm and short', noteFr: 'chaleureux et court', examples: [g('Ja, gern! Um wie viel Uhr?', 'Yes, gladly! At what time?', 'Oui, volontiers ! À quelle heure ?'), g('Gute Idee! Ich komme mit.', 'Good idea! I’ll come along.', 'Bonne idée ! Je viens avec toi.')] },
        b: { label: 'No (polite)', labelFr: 'Non (poli)', note: 'leider + reason', noteFr: 'leider + raison', examples: [g('Leider habe ich keine Zeit.', 'Unfortunately I have no time.', 'Malheureusement, je n’ai pas le temps.'), g('Leider habe ich einen Termin. Vielleicht am Montag?', 'Unfortunately I have an appointment. Maybe on Monday?', 'Malheureusement, j’ai un rendez-vous. Peut-être lundi ?')] },
      },
      examples: [
        g('Wollen wir am Samstag essen gehen?', 'Shall we go out to eat on Saturday?', 'On va manger dehors samedi ?'),
        g('Ja, gern! Um wie viel Uhr?', 'Yes, gladly! At what time?', 'Oui, volontiers ! À quelle heure ?'),
        g('Hast du Lust, mit uns zu kommen?', 'Do you feel like coming with us?', 'As-tu envie de venir avec nous ?'),
        g('Leider habe ich keine Zeit.', 'Unfortunately I have no time.', 'Malheureusement, je n’ai pas le temps.'),
        g('Danke für die Einladung!', 'Thanks for the invitation!', 'Merci pour l’invitation !'),
        g('Vielleicht am Sonntag.', 'Maybe on Sunday.', 'Peut-être dimanche.'),
      ],
      mistakes: [
        { wrong: 'Nein, ich will nicht.', right: 'Nein, leider habe ich keine Zeit.', why: '“Ich will nicht” sounds rude. Give a reason with leider.', whyFr: '« Ich will nicht » est impoli. Donne une raison avec leider.' },
        { wrong: 'Wollen wir gehen ins Kino?', right: 'Wollen wir ins Kino gehen?', why: 'The infinitive goes to the end.', whyFr: 'L’infinitif va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l3-e2', prompt: 'How do you invite: "Shall we go to the cinema?"', promptFr: 'Comment inviter : « On va au cinéma ? »', options: ['Wollen wir ins Kino gehen?', 'Ich bin im Kino.', 'Ich war im Kino.'], answer: 0, explain: '"Wollen wir …?" is the invitation form.', explainFr: '« Wollen wir …? » est la forme d’invitation.', hint: 'Look for "Wollen wir …?".', hintFr: 'Cherche « Wollen wir …? ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l3-e5', pairs: [{ de: 'Wollen wir?', en: 'Shall we?', fr: 'On y va ?' }, { de: 'Ja, gern!', en: 'Yes, gladly!', fr: 'Oui, volontiers !' }, { de: 'Leider nicht.', en: 'Unfortunately not.', fr: 'Malheureusement non.' }], hint: 'Match each phrase to its meaning.', hintFr: 'Associe chaque expression à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l3-e9', prompt: 'Which is a polite way to decline?', promptFr: 'Quelle est une façon polie de refuser ?', options: ['Ja, gern!', 'Nein, leider habe ich keine Zeit.', 'Gute Idee!'], answer: 1, explain: '"Nein, leider …" politely declines.', explainFr: '« Nein, leider … » refuse poliment.', hint: 'Look for "leider" (unfortunately).', hintFr: 'Cherche « leider » (malheureusement).' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l3-e10', prompt: 'Listen. Does Mia accept the invitation?', promptFr: 'Écoute. Mia accepte-t-elle l’invitation ?', audio: { ttsText: 'Ja, gern! Ich komme mit. Um wie viel Uhr?' }, options: ['Yes, she accepts', 'No, she declines', 'She is not sure'], optionsFr: ['Oui, elle accepte', 'Non, elle refuse', 'Elle n’est pas sûre'], answer: 0, hint: 'Listen for "Ja, gern!" and "Ich komme mit".', hintFr: 'Écoute « Ja, gern! » et « Ich komme mit ».' } },

    // ───────────── 2 · wollen ─────────────
    { kind: 'chapter', title: 'Das Modalverb „wollen“', titleFr: 'Le verbe modal « wollen »', blurb: 'What do you want to do?', blurbFr: 'Qu’as-tu envie de faire ?' },

    { kind: 'situation', title: 'Was willst du machen?', titleFr: 'Que veux-tu faire ?',
      setting: 'Ben and Mia choose a plan.', settingFr: 'Ben et Mia choisissent un programme.',
      lines: [
        line('Ben', 'Was willst du am Wochenende machen?', 'What do you want to do at the weekend?', 'Que veux-tu faire ce week-end ?'),
        line('Mia', 'Ich will heute ausgehen. Und du?', 'I want to go out today. And you?', 'Je veux sortir aujourd’hui. Et toi ?'),
        line('Ben', 'Wir wollen essen gehen. Willst du mitkommen?', 'We want to go out to eat. Do you want to come along?', 'Nous voulons aller manger. Tu veux venir ?'),
        line('Mia', 'Ja, ich will gern mitkommen!', 'Yes, I’d love to come along!', 'Oui, je veux bien venir !'),
      ],
      words: [{ id: 'a2l3-wollen', german: 'wollen', english: 'to want', french: 'vouloir', gender: null, syllables: ['WOL', 'len'], pronunciation: 'VOL-len', example: { de: 'Ich will heute ausgehen.', en: 'I want to go out today.', fr: 'Je veux sortir aujourd’hui.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l3-wollen', title: 'The modal verb “wollen”', titleFr: 'Le verbe modal « wollen »',
      lead: 'wollen in position 2, the infinitive at the very end. ich / er: no ending.',
      leadFr: 'wollen en position 2, l’infinitif tout à la fin. ich / er : pas de terminaison.',
      explanationMd: '**wollen** (to want) says what you **want to do**. It is **irregular**: **ich will**, **er will** (no ending!) and **du willst**. The second verb is an **infinitive at the end** of the sentence: **Ich will ins Kino gehen.** For a polite offer, **Wollen wir …?** is the usual form.',
      explanationMdFr: '**wollen** (vouloir) dit ce que tu **veux faire**. Il est **irrégulier** : **ich will**, **er will** (pas de terminaison !) et **du willst**. Le second verbe est un **infinitif à la fin** de la phrase : **Ich will ins Kino gehen.** Pour proposer poliment, **Wollen wir …?** est la forme habituelle.',
      tables: [{ title: 'wollen', titleFr: 'wollen', headers: ['Person', 'wollen', 'Example'], headersFr: ['Personne', 'wollen', 'Exemple'],
        rows: [['ich', 'will', 'Ich will ins Kino gehen.'], ['du', 'willst', 'Willst du mitkommen?'], ['er / sie / es', 'will', 'Er will heute ausgehen.'], ['wir', 'wollen', 'Wir wollen essen gehen.'], ['ihr', 'wollt', 'Wollt ihr mitkommen?'], ['sie / Sie', 'wollen', 'Sie wollen tanzen.']],
        rowsFr: [['ich', 'will', 'Ich will ins Kino gehen.'], ['du', 'willst', 'Willst du mitkommen?'], ['er / sie / es', 'will', 'Er will heute ausgehen.'], ['wir', 'wollen', 'Wir wollen essen gehen.'], ['ihr', 'wollt', 'Wollt ihr mitkommen?'], ['sie / Sie', 'wollen', 'Sie wollen tanzen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'will', role: 'verb' }, { text: 'heute', role: 'time' }, { text: 'ausgehen.', role: 'verb' }], en: 'I want to go out today.', fr: 'Je veux sortir aujourd’hui.' },
        { parts: [{ text: 'Willst', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'mitkommen?', role: 'verb' }], en: 'Do you want to come along?', fr: 'Tu veux venir ?' },
      ],
      contrast: {
        a: { label: 'Statement', labelFr: 'Phrase affirmative', note: 'wollen in position 2', noteFr: 'wollen en position 2', examples: [g('Ich will ins Kino gehen.', 'I want to go to the cinema.', 'Je veux aller au cinéma.'), g('Wir wollen essen gehen.', 'We want to go out to eat.', 'Nous voulons aller manger.')] },
        b: { label: 'Question', labelFr: 'Question', note: 'wollen in position 1', noteFr: 'wollen en position 1', examples: [g('Willst du mitkommen?', 'Do you want to come along?', 'Tu veux venir ?'), g('Wollen wir ins Restaurant gehen?', 'Shall we go to the restaurant?', 'On va au restaurant ?')] },
      },
      examples: [
        g('Ich will ins Kino gehen.', 'I want to go to the cinema.', 'Je veux aller au cinéma.'),
        g('Willst du mitkommen?', 'Do you want to come along?', 'Tu veux venir ?'),
        g('Wir wollen essen gehen.', 'We want to go out to eat.', 'Nous voulons aller manger.'),
        g('Er will heute ausgehen.', 'He wants to go out today.', 'Il veut sortir aujourd’hui.'),
        g('Wollt ihr am Samstag tanzen?', 'Do you want to dance on Saturday?', 'Voulez-vous danser samedi ?'),
        g('Was willst du machen?', 'What do you want to do?', 'Que veux-tu faire ?'),
      ],
      mistakes: [
        { wrong: 'Ich wolle ins Kino gehen.', right: 'Ich will ins Kino gehen.', why: 'ich and er have no ending: will.', whyFr: 'ich et er n’ont pas de terminaison : will.' },
        { wrong: 'Du will mitkommen?', right: 'Willst du mitkommen?', why: 'du takes -st: willst.', whyFr: 'du prend -st : willst.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l3-e1', prompt: 'Ich ___ ins Kino gehen. (wollen — ich-form)', answer: 'will', hint: 'first person singular of wollen', hintFr: 'première personne du singulier de wollen' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l3-e7', tokens: ['gehen', 'wir', 'Kino', 'Wollen', 'ins'], answer: ['Wollen', 'wir', 'ins', 'Kino', 'gehen'], hint: 'Invitation: modal first, infinitive at the end.', hintFr: 'Invitation : modal d’abord, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l3-e6', prompt: 'Listen. What does Ben suggest?', promptFr: 'Écoute. Que propose Ben ?', audio: { ttsText: 'Hallo! Wollen wir am Samstag ins Restaurant gehen?' }, options: ['Go to a restaurant', 'Go to the cinema', 'Stay home'], optionsFr: ['Aller au restaurant', 'Aller au cinéma', 'Rester à la maison'], answer: 0, hint: 'Listen after "ins".', hintFr: 'Écoute après « ins ».' } },

    // ───────────── 3 · direction vs location ─────────────
    { kind: 'chapter', title: 'Wohin? Wo? — ins oder im', titleFr: 'Wohin ? Wo ? — ins ou im', blurb: 'Movement or place: two cases.', blurbFr: 'Mouvement ou lieu : deux cas.' },

    { kind: 'situation', title: 'Wohin gehen wir?', titleFr: 'Où allons-nous ?',
      setting: 'Ben and Mia compare plans and where they are.', settingFr: 'Ben et Mia comparent leurs projets et leur position.',
      lines: [
        line('Ben', 'Wo bist du gerade?', 'Where are you right now?', 'Où es-tu en ce moment ?'),
        line('Mia', 'Ich bin im Kino. Und du?', 'I am at the cinema. And you?', 'Je suis au cinéma. Et toi ?'),
        line('Ben', 'Ich bin im Restaurant. Wohin gehen wir danach?', 'I am at the restaurant. Where shall we go afterwards?', 'Je suis au restaurant. Où allons-nous après ?'),
        line('Mia', 'Wir gehen ins Café. Dort sind wir um zehn.', 'We’ll go to the café. We’ll be there at ten.', 'Nous allons au café. Nous y serons à dix heures.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l3-in', title: 'Direction (ins) or location (im)?', titleFr: 'Direction (ins) ou lieu (im) ?',
      lead: 'Wohin? = movement → in + accusative (ins). Wo? = place → in + dative (im).',
      leadFr: 'Wohin ? = mouvement → in + accusatif (ins). Wo ? = lieu → in + datif (im).',
      explanationMd: 'With **in**, the question decides the case. **Wohin?** (where to) asks for **direction**, used with **gehen, fahren, kommen**: **in + accusative** — **in das → ins**. **Wo?** (where) asks for **location**, used with **sein, wohnen, bleiben**: **in + dative** — **in dem → im**. For feminine nouns: **in die Stadt** (direction) but **in der Stadt** (location).',
      explanationMdFr: 'Avec **in**, c’est la question qui décide du cas. **Wohin ?** (vers où) demande la **direction**, avec **gehen, fahren, kommen** : **in + accusatif** — **in das → ins**. **Wo ?** (où) demande le **lieu**, avec **sein, wohnen, bleiben** : **in + datif** — **in dem → im**. Pour les noms féminins : **in die Stadt** (direction) mais **in der Stadt** (lieu).',
      tables: [{ title: 'in + case', titleFr: 'in + cas', headers: ['Question', 'Case', 'm / n', 'f'], headersFr: ['Question', 'Cas', 'm / n', 'f'],
        rows: [['Wohin? (direction)', 'Accusative', 'ins Kino · in den Park', 'in die Stadt'], ['Wo? (location)', 'Dative', 'im Kino · im Park', 'in der Stadt']],
        rowsFr: [['Wohin ? (direction)', 'Accusatif', 'ins Kino · in den Park', 'in die Stadt'], ['Wo ? (lieu)', 'Datif', 'im Kino · im Park', 'in der Stadt']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'gehen', role: 'verb' }, { text: 'ins Restaurant.', role: 'accusative' }], en: 'We are going to the restaurant.', fr: 'Nous allons au restaurant.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'sind', role: 'verb' }, { text: 'im Restaurant.', role: 'dative' }], en: 'We are at the restaurant.', fr: 'Nous sommes au restaurant.' },
      ],
      contrast: {
        a: { label: 'Wohin? → ins', labelFr: 'Wohin ? → ins', note: 'movement', noteFr: 'mouvement', examples: [g('Ich gehe ins Kino.', 'I am going to the cinema.', 'Je vais au cinéma.'), g('Wir fahren in die Stadt.', 'We are driving into town.', 'Nous allons en ville.')] },
        b: { label: 'Wo? → im', labelFr: 'Wo ? → im', note: 'place', noteFr: 'lieu', examples: [g('Ich bin im Kino.', 'I am at the cinema.', 'Je suis au cinéma.'), g('Wir sind in der Stadt.', 'We are in town.', 'Nous sommes en ville.')] },
      },
      examples: [
        g('Ich gehe ins Kino.', 'I am going to the cinema.', 'Je vais au cinéma.'),
        g('Ich bin im Kino.', 'I am at the cinema.', 'Je suis au cinéma.'),
        g('Wir gehen ins Restaurant.', 'We are going to the restaurant.', 'Nous allons au restaurant.'),
        g('Wir sind im Restaurant.', 'We are at the restaurant.', 'Nous sommes au restaurant.'),
        g('Sie fahren in die Stadt.', 'They are driving into town.', 'Ils vont en ville.'),
        g('Sie wohnen in der Stadt.', 'They live in town.', 'Ils habitent en ville.'),
      ],
      mistakes: [
        { wrong: 'Ich bin ins Kino.', right: 'Ich bin im Kino.', why: 'sein is a place verb: dative im.', whyFr: 'sein est un verbe de lieu : datif im.' },
        { wrong: 'Wir gehen im Restaurant.', right: 'Wir gehen ins Restaurant.', why: 'gehen is movement: accusative ins.', whyFr: 'gehen est un mouvement : accusatif ins.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l3-e3', prompt: 'Wir gehen ___ Kino. (direction: in das → ?)', answer: 'ins', hint: 'direction with gehen: in + das = ins', hintFr: 'direction avec gehen : in + das = ins' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l3-e4', prompt: 'Which sentence shows LOCATION (not direction)?', promptFr: 'Quelle phrase montre le LIEU (pas la direction) ?', options: ['Ich gehe ins Kino.', 'Ich bin im Kino.', 'Ich fahre ins Kino.'], answer: 1, explain: '"Ich bin im Kino" = location (sein + dative).', explainFr: '« Ich bin im Kino » = lieu (sein + datif).', hint: 'Location goes with "sein" and "im".', hintFr: 'Le lieu va avec « sein » et « im ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l3-e8', prompt: '___ habe ich keine Zeit. (unfortunately)', answer: 'Leider', hint: 'the word for "unfortunately"', hintFr: 'le mot pour « malheureusement »' } },

    { kind: 'pronunciation', focus: 'The "ei" in Einladung is "eye", and "v" in vielleicht sounds like "f"', focusFr: 'Le « ei » de Einladung est « aï », et le « v » de vielleicht se prononce « f »', items: [{ id: 'a2l3-einladung-pron', german: 'Einladung', english: 'invitation', french: 'invitation', gender: null, syllables: ['EIN', 'la', 'dung'], pronunciation: 'INE-lah-doong', example: { de: 'Danke für die Einladung!', en: 'Thanks for the invitation!', fr: 'Merci pour l’invitation !' } }, { id: 'a2l3-vielleicht-pron', german: 'vielleicht', english: 'maybe', french: 'peut-être', gender: null, syllables: ['viel', 'LEICHT'], pronunciation: 'fee-LYESHT', example: { de: 'Vielleicht am Sonntag.', en: 'Maybe on Sunday.', fr: 'Peut-être dimanche.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **invite, accept and decline** politely, use **wollen** for plans, and choose between **ins** (direction) and **im** (location). 🎉',
      summaryFr: 'Tu sais maintenant **inviter, accepter et refuser** poliment, utiliser **wollen** pour les projets, et choisir entre **ins** (direction) et **im** (lieu). 🎉',
      card: { title: 'Invitations on one page', titleFr: 'Les invitations en une page', sections: [
        { heading: 'Phrases', headingFr: 'Formules', rows: [g('Wollen wir …? · Hast du Lust?', 'inviting', 'inviter'), g('Ja, gern! · Gute Idee!', 'accepting', 'accepter'), g('Leider … · Vielleicht …', 'declining', 'refuser')] },
        { heading: 'wollen', headingFr: 'wollen', rows: [g('ich will · du willst · er will', 'no ending for ich / er', 'pas de terminaison pour ich / er'), g('wir wollen · ihr wollt', 'infinitive at the end', 'infinitif à la fin')] },
        { heading: 'Wohin? Wo?', headingFr: 'Wohin ? Wo ?', rows: [g('ins Kino (Wohin?)', 'accusative', 'accusatif'), g('im Kino (Wo?)', 'dative', 'datif')] },
      ] } },
  ],
};

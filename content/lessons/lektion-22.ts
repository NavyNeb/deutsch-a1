import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A1 lesson: services and the phone (official A1 theme "Dienstleistungen": post, banks, police, telecommunication).
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const lektion22: Lesson = {
  id: 'l22', level: 'A1', module: 4, number: 17,
  title: { de: 'Telefon, Post, Bank und Notruf', en: 'The phone, post office, bank and emergencies', fr: 'Le téléphone, la poste, la banque et les urgences' },
  theme: 'Phone calls, posting a parcel, banking and getting help',
  themeFr: 'Appels téléphoniques, envoyer un colis, la banque et demander de l’aide',
  goals: ['Make and answer a simple phone call', 'Send a parcel and buy a stamp', 'Withdraw money and open an account', 'Call the emergency number and ask for help'],
  goalsFr: ['Passer et recevoir un appel simple', 'Envoyer un colis et acheter un timbre', 'Retirer de l’argent et ouvrir un compte', 'Appeler le numéro d’urgence et demander de l’aide'],
  canDo: g('Ich kann telefonieren, auf der Post und bei der Bank etwas erledigen und im Notfall Hilfe holen.', 'I can phone, run errands at the post office and bank, and get help in an emergency.', 'Je sais téléphoner, faire des démarches à la poste et à la banque, et demander de l’aide en cas d’urgence.'),
  steps: [
    { kind: 'intro', title: 'Dienstleistungen 📞', titleFr: 'Les services 📞',
      scene: 'Nicole phones, posts a parcel and gets help.', sceneFr: 'Nicole téléphone, envoie un colis et demande de l’aide.',
      goals: ['Phone phrases: Hier ist …, Kann ich bitte … sprechen?', 'At the post office and the bank: Ich möchte … + infinitive', 'The emergency numbers 112 and 110'],
      goalsFr: ['Phrases au téléphone : Hier ist …, Kann ich bitte … sprechen ?', 'À la poste et à la banque : Ich möchte … + infinitif', 'Les numéros d’urgence 112 et 110'] },

    // ───────────── 1 · The phone ─────────────
    { kind: 'chapter', title: 'Telefonieren', titleFr: 'Téléphoner', blurb: 'Answer, ask for someone, say goodbye.', blurbFr: 'Répondre, demander quelqu’un, dire au revoir.' },

    { kind: 'situation', title: 'Am Telefon', titleFr: 'Au téléphone',
      setting: 'Nicole phones the language school and wants to speak to Frau Roth.', settingFr: 'Nicole appelle l’école de langues et veut parler à Mme Roth.',
      lines: [
        line('Sekretärin', 'Sprachschule Berlin, guten Tag.', 'Berlin Language School, good day.', 'École de langues de Berlin, bonjour.'),
        line('Nicole', 'Guten Tag, hier ist Nicole Nkemba. Kann ich bitte Frau Roth sprechen?', 'Good day, this is Nicole Nkemba. Can I speak to Mrs Roth, please?', 'Bonjour, ici Nicole Nkemba. Puis-je parler à Mme Roth, s’il vous plaît ?'),
        line('Sekretärin', 'Einen Moment, bitte. … Frau Roth ist leider nicht da.', 'One moment, please. … Mrs Roth is unfortunately not here.', 'Un instant, s’il vous plaît. … Mme Roth n’est malheureusement pas là.'),
        line('Nicole', 'Dann rufe ich später noch einmal an.', 'Then I will call again later.', 'Alors je rappellerai plus tard.'),
        line('Sekretärin', 'Gern. Auf Wiederhören!', 'Gladly. Goodbye!', 'Volontiers. Au revoir !'),
        line('Nicole', 'Auf Wiederhören!', 'Goodbye!', 'Au revoir !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l22-e11', prompt: 'Why does Nicole call again later?', promptFr: 'Pourquoi Nicole rappelle-t-elle plus tard ?', options: ['Frau Roth is not there', 'The line is busy', 'She has no time'], optionsFr: ['Mme Roth n’est pas là', 'La ligne est occupée', 'Elle n’a pas le temps'], answer: 0, explain: 'The secretary says: “Frau Roth ist leider nicht da.”', explainFr: 'La secrétaire dit : « Frau Roth ist leider nicht da. »', hint: 'Look at the third line.', hintFr: 'Regarde la troisième réplique.' } },

    { kind: 'wordgroup', title: 'Am Telefon', titleFr: 'Au téléphone',
      items: [
        word('l22-anrufen', 'anrufen', null, 'to call, to phone', 'appeler, téléphoner', ['AN', 'ru', 'fen'], 'AHN-roo-fen', g('Ich rufe dich morgen an.', 'I will call you tomorrow.', 'Je t’appellerai demain.')),
        word('l22-moment', 'der Moment', 'der', 'the moment', 'l’instant', ['mo', 'MENT'], 'dair moh-MENT', g('Einen Moment, bitte.', 'One moment, please.', 'Un instant, s’il vous plaît.')),
        word('l22-nachricht', 'die Nachricht', 'die', 'the message', 'le message', ['NACH', 'richt'], 'dee NAKH-rikht', g('Ich schicke eine Nachricht.', 'I am sending a message.', 'J’envoie un message.')),
        word('l22-aufwiederhoeren', 'Auf Wiederhören!', null, 'Goodbye! (on the phone)', 'Au revoir ! (au téléphone)', ['auf', 'WIE', 'der', 'HÖ', 'ren'], 'owf VEE-der-her-ren', g('Danke, auf Wiederhören!', 'Thanks, goodbye!', 'Merci, au revoir !')),
        word('l22-hierist', 'Hier ist …', null, 'This is … (on the phone)', 'Ici … (au téléphone)', ['HIER', 'IST'], 'heer ist', g('Hier ist Nicole Nkemba.', 'This is Nicole Nkemba.', 'Ici Nicole Nkemba.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l22-telefon', title: 'On the phone: Hier ist … and Kann ich … sprechen?', titleFr: 'Au téléphone : Hier ist … et Kann ich … sprechen ?',
      lead: 'On the phone say Hier ist …, not Ich bin …. End the call with Auf Wiederhören.',
      leadFr: 'Au téléphone, dis Hier ist …, pas Ich bin …. Termine l’appel par Auf Wiederhören.',
      explanationMd: 'On the phone you introduce yourself with **Hier ist …** (“here is …”), not **Ich bin …**. You ask for a person with **Kann ich bitte … sprechen?**: **Kann** first, the infinitive **sprechen** at the end. The separable verb **anrufen** splits: **Ich rufe später an.** Say goodbye with **Auf Wiederhören!** (literally “until we hear again”).',
      explanationMdFr: 'Au téléphone, tu te présentes avec **Hier ist …** (« ici … »), pas **Ich bin …**. Tu demandes une personne avec **Kann ich bitte … sprechen ?** : **Kann** en premier, l’infinitif **sprechen** à la fin. Le verbe séparable **anrufen** se sépare : **Ich rufe später an.** Dis au revoir avec **Auf Wiederhören !** (littéralement « jusqu’à ce qu’on s’entende de nouveau »).',
      tables: [{ title: 'A phone call', titleFr: 'Un appel', headers: ['Moment', 'You say'], headersFr: ['Moment', 'Tu dis'],
        rows: [['you answer', 'Sprachschule Berlin, guten Tag. / Nkemba.'], ['you introduce yourself', 'Hier ist Nicole Nkemba.'], ['you ask for someone', 'Kann ich bitte Frau Roth sprechen?'], ['you ask to wait', 'Einen Moment, bitte.'], ['person is not there', 'Sie ist leider nicht da.'], ['you call back', 'Ich rufe später noch einmal an.'], ['you say goodbye', 'Auf Wiederhören!']],
        rowsFr: [['tu réponds', 'Sprachschule Berlin, guten Tag. / Nkemba.'], ['tu te présentes', 'Hier ist Nicole Nkemba.'], ['tu demandes quelqu’un', 'Kann ich bitte Frau Roth sprechen?'], ['tu fais patienter', 'Einen Moment, bitte.'], ['la personne est absente', 'Sie ist leider nicht da.'], ['tu rappelles', 'Ich rufe später noch einmal an.'], ['tu dis au revoir', 'Auf Wiederhören!']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Kann', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'bitte', role: 'connector' }, { text: 'Frau Roth', role: 'accusative' }, { text: 'sprechen?', role: 'verb' }], en: 'Can I speak to Mrs Roth, please?', fr: 'Puis-je parler à Mme Roth, s’il vous plaît ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'rufe', role: 'verb' }, { text: 'später', role: 'time' }, { text: 'an.', role: 'verb' }], en: 'I will call later.', fr: 'Je rappellerai plus tard.' },
      ],
      contrast: {
        a: { label: 'On the phone', labelFr: 'Au téléphone', note: 'Hier ist … / Auf Wiederhören', noteFr: 'Hier ist … / Auf Wiederhören', examples: [g('Hier ist Nicole Nkemba.', 'This is Nicole Nkemba.', 'Ici Nicole Nkemba.'), g('Danke, auf Wiederhören!', 'Thanks, goodbye!', 'Merci, au revoir !')] },
        b: { label: 'Face to face', labelFr: 'En face', note: 'Ich bin … / Auf Wiedersehen', noteFr: 'Ich bin … / Auf Wiedersehen', examples: [g('Ich bin Nicole Nkemba.', 'I am Nicole Nkemba.', 'Je suis Nicole Nkemba.'), g('Danke, auf Wiedersehen!', 'Thanks, goodbye!', 'Merci, au revoir !')] },
      },
      examples: [
        g('Hier ist Nicole Nkemba.', 'This is Nicole Nkemba.', 'Ici Nicole Nkemba.'),
        g('Kann ich bitte Frau Roth sprechen?', 'Can I speak to Mrs Roth, please?', 'Puis-je parler à Mme Roth, s’il vous plaît ?'),
        g('Einen Moment, bitte.', 'One moment, please.', 'Un instant, s’il vous plaît.'),
        g('Frau Roth ist leider nicht da.', 'Mrs Roth is unfortunately not here.', 'Mme Roth n’est malheureusement pas là.'),
        g('Ich rufe später noch einmal an.', 'I will call again later.', 'Je rappellerai plus tard.'),
        g('Ich schicke eine Nachricht.', 'I am sending a message.', 'J’envoie un message.'),
        g('Auf Wiederhören!', 'Goodbye!', 'Au revoir !'),
      ],
      mistakes: [
        { wrong: 'Ich bin Nicole Nkemba. (on the phone)', right: 'Hier ist Nicole Nkemba.', why: 'On the phone say Hier ist …', whyFr: 'Au téléphone, dis Hier ist …' },
        { wrong: 'Ich anrufe später.', right: 'Ich rufe später an.', why: 'anrufen is separable: the prefix goes to the end.', whyFr: 'anrufen est séparable : le préfixe va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l22-e1', prompt: 'You phone someone. How do you give your name?', promptFr: 'Tu téléphones. Comment dis-tu ton nom ?', options: ['Hier ist Nicole.', 'Ich bin Nicole.', 'Guten Tag, Nicole?'], answer: 0, explain: 'On the phone: “Hier ist …”.', explainFr: 'Au téléphone : « Hier ist … ».', hint: 'Not “Ich bin”.', hintFr: 'Pas « Ich bin ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l22-e2', tokens: ['ich', 'Kann', 'bitte', 'Frau Roth', 'sprechen'], answer: ['Kann', 'ich', 'bitte', 'Frau Roth', 'sprechen'], hint: 'Modal first, infinitive last.', hintFr: 'Modal en premier, infinitif en dernier.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l22-e3', prompt: 'Ich rufe später ___. (anrufen)', promptFr: 'Ich rufe später ___. (anrufen)', answer: 'an', hint: 'the prefix of anrufen', hintFr: 'le préfixe de anrufen' } },

    // ───────────── 2 · Post office and bank ─────────────
    { kind: 'chapter', title: 'Post und Bank', titleFr: 'La poste et la banque', blurb: 'Send a parcel, buy a stamp, get money.', blurbFr: 'Envoyer un colis, acheter un timbre, retirer de l’argent.' },

    { kind: 'situation', title: 'Auf der Post', titleFr: 'À la poste',
      setting: 'Nicole sends a parcel to Cameroon and buys a stamp.', settingFr: 'Nicole envoie un colis au Cameroun et achète un timbre.',
      lines: [
        line('Nicole', 'Guten Tag. Ich möchte ein Paket nach Kamerun schicken.', 'Good day. I would like to send a parcel to Cameroon.', 'Bonjour. Je voudrais envoyer un colis au Cameroun.'),
        line('Mitarbeiter', 'Wie schwer ist das Paket?', 'How heavy is the parcel?', 'Quel est le poids du colis ?'),
        line('Nicole', 'Zwei Kilo.', 'Two kilos.', 'Deux kilos.'),
        line('Mitarbeiter', 'Das kostet zwanzig Euro.', 'That costs twenty euros.', 'Cela coûte vingt euros.'),
        line('Nicole', 'Und eine Briefmarke für Deutschland, bitte.', 'And a stamp for Germany, please.', 'Et un timbre pour l’Allemagne, s’il vous plaît.'),
        line('Mitarbeiter', 'Bitte schön. Das macht dreiundzwanzig Euro.', 'Here you are. That makes twenty-three euros.', 'Voilà. Cela fait vingt-trois euros.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l22-e12', prompt: 'How much does Nicole pay in total?', promptFr: 'Combien Nicole paie-t-elle au total ?', options: ['23 euros', '20 euros', '2 euros'], answer: 0, explain: 'The clerk says: “Das macht dreiundzwanzig Euro.”', explainFr: 'L’employé dit : « Das macht dreiundzwanzig Euro. »', hint: 'The parcel plus the stamp.', hintFr: 'Le colis plus le timbre.' } },

    { kind: 'wordgroup', title: 'Post und Bank', titleFr: 'Poste et banque',
      items: [
        word('l22-paket', 'das Paket', 'das', 'the parcel', 'le colis', ['pa', 'KET'], 'dahs pah-KAYT', g('Ich schicke ein Paket.', 'I am sending a parcel.', 'J’envoie un colis.')),
        word('l22-brief', 'der Brief', 'der', 'the letter', 'la lettre', ['BRIEF'], 'dair BREEF', g('Der Brief ist für dich.', 'The letter is for you.', 'La lettre est pour toi.')),
        word('l22-briefmarke', 'die Briefmarke', 'die', 'the stamp', 'le timbre', ['BRIEF', 'mar', 'ke'], 'dee BREEF-mar-kuh', g('Eine Briefmarke, bitte.', 'A stamp, please.', 'Un timbre, s’il vous plaît.')),
        word('l22-bank', 'die Bank', 'die', 'the bank', 'la banque', ['BANK'], 'dee BAHNK', g('Die Bank ist neben der Post.', 'The bank is next to the post office.', 'La banque est à côté de la poste.')),
        word('l22-konto', 'das Konto', 'das', 'the account', 'le compte', ['KON', 'to'], 'dahs KON-toh', g('Ich möchte ein Konto eröffnen.', 'I would like to open an account.', 'Je voudrais ouvrir un compte.')),
        word('l22-geldautomat', 'der Geldautomat', 'der', 'the cash machine', 'le distributeur', ['GELD', 'au', 'to', 'MAT'], 'dair GELT-ow-toh-maht', g('Der Geldautomat ist draußen.', 'The cash machine is outside.', 'Le distributeur est dehors.')),
        word('l22-abheben', 'abheben', null, 'to withdraw', 'retirer', ['AB', 'he', 'ben'], 'AHP-hay-ben', g('Ich möchte Geld abheben.', 'I would like to withdraw money.', 'Je voudrais retirer de l’argent.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l22-post-bank', title: 'Errands: Ich möchte … + infinitive', titleFr: 'Démarches : Ich möchte … + infinitif',
      lead: 'möchte is in position 2, the action verb goes to the end. nach + place, für + accusative.',
      leadFr: 'möchte est en position 2, le verbe d’action va à la fin. nach + lieu, für + accusatif.',
      explanationMd: 'For errands use **Ich möchte …** with the action verb at the **end**: **Ich möchte ein Paket schicken. Ich möchte Geld abheben.** With countries and cities use **nach** (no article): **nach Kamerun**. For the destination of a stamp or a gift use **für** + accusative: **eine Briefmarke für Deutschland**. Separable verbs like **abheben** are used in the infinitive after **möchte**, so they stay in one piece.',
      explanationMdFr: 'Pour les démarches, utilise **Ich möchte …** avec le verbe d’action à la **fin** : **Ich möchte ein Paket schicken. Ich möchte Geld abheben.** Avec les pays et les villes, utilise **nach** (sans article) : **nach Kamerun**. Pour la destination d’un timbre ou d’un cadeau, utilise **für** + accusatif : **eine Briefmarke für Deutschland**. Les verbes séparables comme **abheben** sont à l’infinitif après **möchte** : ils restent donc en un seul morceau.',
      tables: [{ title: 'Useful errands', titleFr: 'Démarches utiles', headers: ['Where', 'You say'], headersFr: ['Où', 'Tu dis'],
        rows: [['post office', 'Ich möchte ein Paket nach Kamerun schicken.'], ['post office', 'Eine Briefmarke für Deutschland, bitte.'], ['bank', 'Ich möchte ein Konto eröffnen.'], ['bank', 'Ich möchte Geld abheben.'], ['cash machine', 'Wo ist der Geldautomat?']],
        rowsFr: [['poste', 'Ich möchte ein Paket nach Kamerun schicken.'], ['poste', 'Eine Briefmarke für Deutschland, bitte.'], ['banque', 'Ich möchte ein Konto eröffnen.'], ['banque', 'Ich möchte Geld abheben.'], ['distributeur', 'Wo ist der Geldautomat?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'möchte', role: 'verb' }, { text: 'ein Paket', role: 'accusative' }, { text: 'nach Kamerun', role: 'place' }, { text: 'schicken.', role: 'verb' }], en: 'I would like to send a parcel to Cameroon.', fr: 'Je voudrais envoyer un colis au Cameroun.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'möchte', role: 'verb' }, { text: 'Geld', role: 'accusative' }, { text: 'abheben.', role: 'verb' }], en: 'I would like to withdraw money.', fr: 'Je voudrais retirer de l’argent.' },
      ],
      contrast: {
        a: { label: 'nach + place', labelFr: 'nach + lieu', note: 'no article for countries and cities', noteFr: 'pas d’article pour les pays et villes', examples: [g('Ich schicke ein Paket nach Kamerun.', 'I send a parcel to Cameroon.', 'J’envoie un colis au Cameroun.'), g('Der Zug fährt nach Berlin.', 'The train goes to Berlin.', 'Le train va à Berlin.')] },
        b: { label: 'für + accusative', labelFr: 'für + accusatif', note: 'for someone or something', noteFr: 'pour quelqu’un ou quelque chose', examples: [g('Eine Briefmarke für Deutschland, bitte.', 'A stamp for Germany, please.', 'Un timbre pour l’Allemagne, s’il vous plaît.'), g('Das Geschenk ist für dich.', 'The present is for you.', 'Le cadeau est pour toi.')] },
      },
      examples: [
        g('Ich möchte ein Paket nach Kamerun schicken.', 'I would like to send a parcel to Cameroon.', 'Je voudrais envoyer un colis au Cameroun.'),
        g('Eine Briefmarke für Deutschland, bitte.', 'A stamp for Germany, please.', 'Un timbre pour l’Allemagne, s’il vous plaît.'),
        g('Ich möchte ein Konto eröffnen.', 'I would like to open an account.', 'Je voudrais ouvrir un compte.'),
        g('Ich möchte Geld abheben.', 'I would like to withdraw money.', 'Je voudrais retirer de l’argent.'),
        g('Wo ist der Geldautomat?', 'Where is the cash machine?', 'Où est le distributeur ?'),
        g('Wie schwer ist das Paket?', 'How heavy is the parcel?', 'Quel est le poids du colis ?'),
        g('Der Brief ist für dich.', 'The letter is for you.', 'La lettre est pour toi.'),
      ],
      mistakes: [
        { wrong: 'Ich möchte schicken ein Paket.', right: 'Ich möchte ein Paket schicken.', why: 'The action verb goes to the very end.', whyFr: 'Le verbe d’action va tout à la fin.' },
        { wrong: 'Ich schicke ein Paket zu Kamerun.', right: 'Ich schicke ein Paket nach Kamerun.', why: 'Countries and cities take nach.', whyFr: 'Les pays et villes prennent nach.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l22-e4', prompt: 'You want to take money out of your account. What do you say?', promptFr: 'Tu veux retirer de l’argent de ton compte. Que dis-tu ?', options: ['Ich möchte Geld abheben.', 'Ich möchte ein Paket schicken.', 'Ich möchte eine Briefmarke.'], answer: 0, explain: '“Geld abheben” means to withdraw money.', explainFr: '« Geld abheben » signifie retirer de l’argent.', hint: 'Look for “Geld”.', hintFr: 'Cherche « Geld ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l22-e5', tokens: ['Ich', 'ein Paket', 'möchte', 'nach Kamerun', 'schicken'], answer: ['Ich', 'möchte', 'ein Paket', 'nach Kamerun', 'schicken'], hint: 'möchte second, schicken last.', hintFr: 'möchte en deuxième, schicken en dernier.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l22-e6', prompt: 'Eine Briefmarke ___ Deutschland, bitte. (for)', promptFr: 'Eine Briefmarke ___ Deutschland, bitte. (pour)', answer: 'für', hint: 'für + accusative', hintFr: 'für + accusatif' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l22-e7', pairs: [{ de: 'das Paket', en: 'the parcel', fr: 'le colis' }, { de: 'die Briefmarke', en: 'the stamp', fr: 'le timbre' }, { de: 'das Konto', en: 'the account', fr: 'le compte' }, { de: 'abheben', en: 'to withdraw', fr: 'retirer' }], hint: 'Post words and bank words.', hintFr: 'Mots de la poste et de la banque.' } },

    // ───────────── 3 · Emergencies ─────────────
    { kind: 'chapter', title: 'Hilfe im Notfall', titleFr: 'De l’aide en cas d’urgence', blurb: 'Know the numbers and the key sentences.', blurbFr: 'Connaître les numéros et les phrases clés.' },

    { kind: 'situation', title: 'Notruf 112', titleFr: 'Urgences 112',
      setting: 'Nicole calls the emergency number because her friend has had an accident.', settingFr: 'Nicole appelle le numéro d’urgence car son ami a eu un accident.',
      lines: [
        line('Nicole', 'Hilfe! Mein Freund hat einen Unfall.', 'Help! My friend has had an accident.', 'Au secours ! Mon ami a eu un accident.'),
        line('Notruf', 'Notruf 112. Wo sind Sie?', 'Emergency 112. Where are you?', 'Urgences 112. Où êtes-vous ?'),
        line('Nicole', 'Ich bin in der Goethestraße, vor dem Bahnhof.', 'I am on Goethestraße, in front of the station.', 'Je suis dans la Goethestraße, devant la gare.'),
        line('Notruf', 'Braucht er einen Arzt?', 'Does he need a doctor?', 'A-t-il besoin d’un médecin ?'),
        line('Nicole', 'Ja, er braucht einen Arzt. Sein Bein tut weh.', 'Yes, he needs a doctor. His leg hurts.', 'Oui, il a besoin d’un médecin. Sa jambe lui fait mal.'),
        line('Notruf', 'Bleiben Sie ruhig. Wir kommen sofort.', 'Stay calm. We are coming right away.', 'Restez calme. Nous arrivons tout de suite.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l22-e13', prompt: 'Where is Nicole?', promptFr: 'Où se trouve Nicole ?', options: ['In front of the station', 'In the park', 'At home'], optionsFr: ['Devant la gare', 'Dans le parc', 'À la maison'], answer: 0, explain: 'She says: “Ich bin in der Goethestraße, vor dem Bahnhof.”', explainFr: 'Elle dit : « Ich bin in der Goethestraße, vor dem Bahnhof. »', hint: 'Look at Nicole’s second answer.', hintFr: 'Regarde la deuxième réponse de Nicole.' } },

    { kind: 'wordgroup', title: 'Notfall', titleFr: 'L’urgence',
      items: [
        word('l22-hilfe', 'die Hilfe', 'die', 'the help', 'l’aide', ['HIL', 'fe'], 'dee HIL-fuh', g('Hilfe! Ich brauche Hilfe!', 'Help! I need help!', 'Au secours ! J’ai besoin d’aide !')),
        word('l22-notruf', 'der Notruf', 'der', 'the emergency call', 'l’appel d’urgence', ['NOT', 'ruf'], 'dair NOHT-roof', g('Der Notruf ist 112.', 'The emergency number is 112.', 'Le numéro d’urgence est le 112.')),
        word('l22-polizei', 'die Polizei', 'die', 'the police', 'la police', ['po', 'li', 'ZEI'], 'dee po-lee-TSY', g('Die Polizei ist unter 110.', 'The police are on 110.', 'La police est au 110.')),
        word('l22-unfall', 'der Unfall', 'der', 'the accident', 'l’accident', ['UN', 'fall'], 'dair OON-fahl', g('Es gibt einen Unfall.', 'There is an accident.', 'Il y a un accident.')),
        word('l22-ruhig', 'ruhig', null, 'calm, quiet', 'calme, tranquille', ['RU', 'hig'], 'ROO-ikh', g('Bleiben Sie ruhig!', 'Stay calm!', 'Restez calme !')),
      ] },

    { kind: 'grammar', note: {
      id: 'l22-notfall', title: 'Emergencies: 112, 110 and key sentences', titleFr: 'Urgences : 112, 110 et phrases clés',
      lead: '112 is for doctors and fire, 110 for the police. Say where you are and what happened.',
      leadFr: '112 pour les médecins et les pompiers, 110 pour la police. Dis où tu es et ce qui s’est passé.',
      explanationMd: 'In Germany **112** is the emergency number for **ambulance and fire**; **110** is the **police**. When you call, say **who** needs help, **where** you are and **what** is wrong. The operator will use the polite command with **Sie**: **Bleiben Sie ruhig!** You already know **Ich brauche einen Arzt** (lesson 7) and **tut weh** (lesson 19).',
      explanationMdFr: 'En Allemagne, le **112** est le numéro d’urgence pour les **secours et les pompiers** ; le **110** est la **police**. Quand tu appelles, dis **qui** a besoin d’aide, **où** tu es et **ce qui** ne va pas. L’opérateur utilisera l’ordre poli avec **Sie** : **Bleiben Sie ruhig !** Tu connais déjà **Ich brauche einen Arzt** (leçon 7) et **tut weh** (leçon 19).',
      tables: [{ title: 'Emergency numbers', titleFr: 'Numéros d’urgence', headers: ['Number', 'Who answers', 'You say'], headersFr: ['Numéro', 'Qui répond', 'Tu dis'],
        rows: [['112', 'ambulance, fire brigade', 'Hilfe! Ich brauche einen Arzt.'], ['110', 'police', 'Ich möchte einen Unfall melden.']],
        rowsFr: [['112', 'ambulance, pompiers', 'Hilfe ! Ich brauche einen Arzt.'], ['110', 'police', 'Ich möchte einen Unfall melden.']], highlightCol: 0 },
        { title: 'Key sentences', titleFr: 'Phrases clés', headers: ['You want to say', 'German'], headersFr: ['Tu veux dire', 'Allemand'],
          rows: [['help', 'Hilfe!'], ['where you are', 'Ich bin in der Goethestraße.'], ['what you need', 'Ich brauche einen Arzt.'], ['it hurts', 'Mein Bein tut weh.']],
          rowsFr: [['de l’aide', 'Hilfe !'], ['où tu es', 'Ich bin in der Goethestraße.'], ['ce dont tu as besoin', 'Ich brauche einen Arzt.'], ['ça fait mal', 'Mein Bein tut weh.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'brauche', role: 'verb' }, { text: 'einen Arzt.', role: 'accusative' }], en: 'I need a doctor.', fr: 'J’ai besoin d’un médecin.' },
        { parts: [{ text: 'Bleiben', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'ruhig!', role: 'other' }], en: 'Stay calm!', fr: 'Restez calme !' },
      ],
      contrast: {
        a: { label: '112', labelFr: '112', note: 'ambulance and fire', noteFr: 'ambulance et pompiers', examples: [g('Rufen Sie die 112!', 'Call 112!', 'Appelez le 112 !'), g('Ich brauche einen Arzt.', 'I need a doctor.', 'J’ai besoin d’un médecin.')] },
        b: { label: '110', labelFr: '110', note: 'police', noteFr: 'police', examples: [g('Rufen Sie die Polizei, die 110!', 'Call the police, 110!', 'Appelez la police, le 110 !'), g('Es gibt einen Unfall.', 'There is an accident.', 'Il y a un accident.')] },
      },
      examples: [
        g('Hilfe! Mein Freund hat einen Unfall.', 'Help! My friend has had an accident.', 'Au secours ! Mon ami a eu un accident.'),
        g('Ich bin in der Goethestraße, vor dem Bahnhof.', 'I am on Goethestraße, in front of the station.', 'Je suis dans la Goethestraße, devant la gare.'),
        g('Er braucht einen Arzt.', 'He needs a doctor.', 'Il a besoin d’un médecin.'),
        g('Bleiben Sie ruhig.', 'Stay calm.', 'Restez calme.'),
        g('Rufen Sie die 112!', 'Call 112!', 'Appelez le 112 !'),
        g('Die Polizei ist unter 110.', 'The police are on 110.', 'La police est au 110.'),
        g('Wir kommen sofort.', 'We are coming right away.', 'Nous arrivons tout de suite.'),
      ],
      mistakes: [
        { wrong: 'Rufen Sie die 911!', right: 'Rufen Sie die 112!', why: 'In Germany the emergency number is 112.', whyFr: 'En Allemagne, le numéro d’urgence est le 112.' },
        { wrong: 'Ich habe einen Arzt. (I need a doctor)', right: 'Ich brauche einen Arzt.', why: 'Use brauchen for “need”.', whyFr: 'Utilise brauchen pour « avoir besoin ».' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l22-e8', prompt: 'Which number do you call for an ambulance?', promptFr: 'Quel numéro appelle-t-on pour une ambulance ?', options: ['112', '110', '115'], answer: 0, explain: '112 is the emergency number for ambulance and fire; 110 is the police.', explainFr: 'Le 112 est le numéro d’urgence pour l’ambulance et les pompiers ; le 110 est la police.', hint: 'It is the European emergency number.', hintFr: 'C’est le numéro d’urgence européen.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l22-e9', prompt: 'Ich ___ einen Arzt. (brauchen)', promptFr: 'Ich ___ einen Arzt. (brauchen)', answer: 'brauche', hint: 'ich-form of brauchen', hintFr: 'forme ich de brauchen' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l22-e10', prompt: 'Listen. What does the operator say?', promptFr: 'Écoute. Que dit l’opérateur ?', audio: { ttsText: 'Bleiben Sie ruhig. Wir kommen sofort.' }, options: ['Stay calm, we are coming right away', 'Please call again later', 'The line is busy'], optionsFr: ['Restez calme, nous arrivons tout de suite', 'Rappelez plus tard, s’il vous plaît', 'La ligne est occupée'], answer: 0, hint: 'Bleiben Sie ruhig.', hintFr: 'Bleiben Sie ruhig.' } },

    { kind: 'wrapup',
      summary: 'You can now phone with **Hier ist … / Kann ich bitte … sprechen?**, run errands with **Ich möchte … + infinitive**, and call **112** or **110** and say what you need. 🎉',
      summaryFr: 'Tu sais maintenant téléphoner avec **Hier ist … / Kann ich bitte … sprechen ?**, faire des démarches avec **Ich möchte … + infinitif**, et appeler le **112** ou le **110** et dire ce dont tu as besoin. 🎉',
      card: { title: 'Services on one page', titleFr: 'Les services en une page', sections: [
        { heading: 'Phone', headingFr: 'Téléphone', rows: [g('Hier ist Nicole Nkemba.', 'this is …', 'ici …'), g('Kann ich bitte Frau Roth sprechen?', 'can I speak to …?', 'puis-je parler à … ?'), g('Auf Wiederhören!', 'goodbye (phone)', 'au revoir (téléphone)')] },
        { heading: 'Post and bank', headingFr: 'Poste et banque', rows: [g('Ich möchte ein Paket nach Kamerun schicken.', 'send a parcel', 'envoyer un colis'), g('Eine Briefmarke für Deutschland, bitte.', 'a stamp', 'un timbre'), g('Ich möchte Geld abheben.', 'withdraw money', 'retirer de l’argent')] },
        { heading: 'Emergencies', headingFr: 'Urgences', rows: [g('112 = Arzt, Feuerwehr · 110 = Polizei', 'the numbers', 'les numéros'), g('Hilfe! Ich brauche einen Arzt.', 'help, I need a doctor', 'au secours, j’ai besoin d’un médecin'), g('Bleiben Sie ruhig!', 'stay calm', 'restez calme')] },
      ] } },
  ],
};

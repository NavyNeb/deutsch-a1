import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A2 lesson (Goethe A2 "Schreiben"): informal and formal e-mails, apologising and thanking, connectors for texts.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const a2lektion28: Lesson = {
  id: 'a2-l28', level: 'A2', module: 7, number: 28,
  title: { de: 'E-Mails und Nachrichten schreiben', en: 'Writing e-mails and messages', fr: 'Écrire des e-mails et des messages' },
  theme: 'Informal and formal e-mails, apologising and thanking, linking sentences with deshalb, außerdem, aber',
  themeFr: 'E-mails informels et formels, s’excuser et remercier, relier des phrases avec deshalb, außerdem, aber',
  goals: ['Write a friendly message to a friend', 'Write a formal e-mail with greeting and closing', 'Link sentences with deshalb, außerdem, aber'],
  goalsFr: ['Écrire un message amical à un ami', 'Écrire un e-mail formel avec salutation et formule de politesse', 'Relier des phrases avec deshalb, außerdem, aber'],
  canDo: g('Ich kann eine persönliche Nachricht und eine formelle E-Mail schreiben und meine Sätze sinnvoll verbinden.', 'I can write a personal message and a formal e-mail and link my sentences sensibly.', 'Je sais écrire un message personnel et un e-mail formel et relier mes phrases de façon cohérente.'),
  steps: [
    { kind: 'intro', title: 'E-Mails und Nachrichten ✉️', titleFr: 'E-mails et messages ✉️',
      scene: 'Lara writes to a friend about her new job — and to her landlord about a broken heater.', sceneFr: 'Lara écrit à une amie à propos de son nouveau travail — et à son propriétaire à propos d’un chauffage en panne.',
      goals: ['Informal messages', 'Formal e-mails', 'Linking words: deshalb, außerdem, aber'],
      goalsFr: ['Messages informels', 'E-mails formels', 'Mots de liaison : deshalb, außerdem, aber'] },

    // ───────────── 1 · Informal ─────────────
    { kind: 'chapter', title: 'Eine Nachricht an Freunde', titleFr: 'Un message à des amis', blurb: 'Hallo, danke, liebe Grüße.', blurbFr: 'Salut, merci, amitiés.' },

    { kind: 'situation', title: 'Hallo Sara!', titleFr: 'Salut Sara !',
      setting: 'Lara writes a message to her friend Sara.', settingFr: 'Lara écrit un message à son amie Sara.',
      lines: [
        line('Lara', 'Liebe Sara, vielen Dank für deine Nachricht! Entschuldige, dass ich so spät antworte.', 'Dear Sara, thank you very much for your message! Sorry that I’m replying so late.', 'Chère Sara, merci beaucoup pour ton message ! Excuse-moi de répondre si tard.'),
        line('Lara', 'Ich habe jetzt eine neue Stelle in einem Café. Die Arbeit gefällt mir sehr.', 'I now have a new job in a café. I like the work very much.', 'J’ai maintenant un nouveau travail dans un café. Le travail me plaît beaucoup.'),
        line('Lara', 'Hast du am Samstag Zeit? Wir könnten zusammen essen gehen. Schreib mir bitte bald!', 'Do you have time on Saturday? We could go for a meal. Please write back soon!', 'As-tu du temps samedi ? Nous pourrions aller manger ensemble. Écris-moi vite, s’il te plaît !'),
        line('Lara', 'Liebe Grüße und bis bald, deine Lara', 'Love and see you soon, your Lara', 'Amitiés et à bientôt, ta Lara'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l28-e1', prompt: 'What does Lara suggest?', promptFr: 'Que propose Lara ?', options: ['Going for a meal on Saturday', 'Going to work together', 'Moving to a new city'], optionsFr: ['Aller manger samedi', 'Aller travailler ensemble', 'Déménager dans une nouvelle ville'], answer: 0, explain: 'She writes: “Wir könnten zusammen essen gehen.”', explainFr: 'Elle écrit : « Wir könnten zusammen essen gehen. »', hint: 'Look for “am Samstag”.', hintFr: 'Cherche « am Samstag ».' } },

    { kind: 'wordgroup', title: 'Eine Nachricht schreiben', titleFr: 'Écrire un message',
      items: [
        word('a2l28-nachricht', 'die Nachricht', 'die', 'the message', 'le message', ['NACH', 'richt'], 'NAKH-rikht', g('Danke für deine Nachricht!', 'Thanks for your message!', 'Merci pour ton message !')),
        word('a2l28-antworten', 'antworten', null, 'to reply', 'répondre', ['ANT', 'wor', 'ten'], 'ANT-vor-ten', g('Ich antworte dir morgen.', 'I will reply to you tomorrow.', 'Je te répondrai demain.')),
        word('a2l28-entschuldigen', 'entschuldigen', null, 'to apologise / excuse', 'excuser', ['ent', 'SCHUL', 'di', 'gen'], 'ent-SHOOL-di-gen', g('Entschuldige die späte Antwort.', 'Sorry for the late reply.', 'Excuse ma réponse tardive.')),
        word('a2l28-gruss', 'der Gruß', 'der', 'the greeting', 'la salutation', ['GRUSS'], 'GROOS', g('Viele Grüße an deine Familie!', 'Best wishes to your family!', 'Bonnes salutations à ta famille !')),
        word('a2l28-einladung', 'die Einladung', 'die', 'the invitation', 'l’invitation', ['EIN', 'la', 'dung'], 'INE-lah-doong', g('Danke für die Einladung!', 'Thanks for the invitation!', 'Merci pour l’invitation !')),
        word('a2l28-vermissen', 'vermissen', null, 'to miss (someone)', 'manquer (à quelqu’un)', ['ver', 'MIS', 'sen'], 'fer-MIS-sen', g('Ich vermisse dich.', 'I miss you.', 'Tu me manques.')),
      ] },

    { kind: 'grammar', note: {
      id: 'a2l28-informell', title: 'The informal message', titleFr: 'Le message informel',
      lead: 'Liebe / Lieber + name, thank, give news, ask, close with Liebe Grüße. Use du and the imperative.',
      leadFr: 'Liebe / Lieber + prénom, remercier, donner des nouvelles, demander, terminer par Liebe Grüße. Utilise du et l’impératif.',
      explanationMd: 'A friendly message follows a **simple pattern**: **1 · greeting** (**Liebe Sara, / Lieber Tom, / Hallo Sara,**), **2 · thanks or reaction** (**Vielen Dank für deine Nachricht!**), **3 · news** (**Ich habe jetzt …**), **4 · question or suggestion** (**Hast du am Samstag Zeit? Wir könnten …**), **5 · closing** (**Liebe Grüße, / Bis bald, / Deine Lara**). You use **du** and the **imperative**: **Schreib mir bald! Entschuldige …** Possessives take the **ending** of the noun: **deine Nachricht, dein Brief**. After the greeting the next word starts with a **small letter** (after the comma).',
      explanationMdFr: 'Un message amical suit un **schéma simple** : **1 · salutation** (**Liebe Sara, / Lieber Tom, / Hallo Sara,**), **2 · remerciement ou réaction** (**Vielen Dank für deine Nachricht !**), **3 · nouvelles** (**Ich habe jetzt …**), **4 · question ou proposition** (**Hast du am Samstag Zeit ? Wir könnten …**), **5 · formule finale** (**Liebe Grüße, / Bis bald, / Deine Lara**). Tu utilises **du** et l’**impératif** : **Schreib mir bald ! Entschuldige …** Les possessifs prennent la **terminaison** du nom : **deine Nachricht, dein Brief**. Après la salutation, le mot suivant commence par une **minuscule** (après la virgule).',
      tables: [{ title: 'Parts of a friendly message', titleFr: 'Parties d’un message amical', headers: ['Part', 'German'], headersFr: ['Partie', 'Allemand'],
        rows: [['Greeting', 'Liebe Sara, · Hallo Tom,'], ['Thanks', 'Vielen Dank für deine Nachricht!'], ['Excuse', 'Entschuldige, dass ich so spät antworte.'], ['News', 'Ich habe jetzt eine neue Stelle.'], ['Suggestion', 'Hast du am Samstag Zeit? Wir könnten …'], ['Closing', 'Liebe Grüße · Bis bald · Deine Lara']],
        rowsFr: [['Salutation', 'Liebe Sara, · Hallo Tom,'], ['Remerciement', 'Vielen Dank für deine Nachricht !'], ['Excuse', 'Entschuldige, dass ich so spät antworte.'], ['Nouvelles', 'Ich habe jetzt eine neue Stelle.'], ['Proposition', 'Hast du am Samstag Zeit ? Wir könnten …'], ['Fin', 'Liebe Grüße · Bis bald · Deine Lara']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Entschuldige,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'so spät', role: 'time' }, { text: 'antworte.', role: 'verb' }], en: 'Sorry that I’m replying so late.', fr: 'Excuse-moi de répondre si tard.' },
        { parts: [{ text: 'Schreib', role: 'verb' }, { text: 'mir', role: 'dative' }, { text: 'bitte', role: 'other' }, { text: 'bald!', role: 'time' }], en: 'Please write to me soon!', fr: 'Écris-moi vite, s’il te plaît !' },
      ],
      contrast: {
        a: { label: 'Informal (du)', labelFr: 'Informel (du)', note: 'friends', noteFr: 'amis', examples: [g('Liebe Sara, vielen Dank für deine Nachricht!', 'Dear Sara, thank you for your message!', 'Chère Sara, merci pour ton message !'), g('Liebe Grüße, deine Lara', 'Love, your Lara', 'Amitiés, ta Lara')] },
        b: { label: 'Formal (Sie)', labelFr: 'Formel (Sie)', note: 'offices, landlords', noteFr: 'administrations, propriétaires', examples: [g('Sehr geehrte Frau Weber, vielen Dank für Ihre Nachricht.', 'Dear Ms Weber, thank you for your message.', 'Madame Weber, merci pour votre message.'), g('Mit freundlichen Grüßen, Lara Mbeki', 'Yours sincerely, Lara Mbeki', 'Cordialement, Lara Mbeki')] },
      },
      examples: [
        g('Liebe Sara, vielen Dank für deine Nachricht!', 'Dear Sara, thank you for your message!', 'Chère Sara, merci pour ton message !'),
        g('Entschuldige, dass ich so spät antworte.', 'Sorry that I’m replying so late.', 'Excuse-moi de répondre si tard.'),
        g('Ich habe jetzt eine neue Stelle in einem Café.', 'I now have a new job in a café.', 'J’ai maintenant un nouveau travail dans un café.'),
        g('Hast du am Samstag Zeit?', 'Do you have time on Saturday?', 'As-tu du temps samedi ?'),
        g('Schreib mir bitte bald!', 'Please write to me soon!', 'Écris-moi vite, s’il te plaît !'),
        g('Liebe Grüße und bis bald, deine Lara', 'Love and see you soon, your Lara', 'Amitiés et à bientôt, ta Lara'),
      ],
      mistakes: [
        { wrong: 'Liebe Sara, Danke für deine Nachricht.', right: 'Liebe Sara, danke für deine Nachricht.', why: 'After the comma of the greeting the text continues with a small letter.', whyFr: 'Après la virgule de la salutation, le texte continue par une minuscule.' },
        { wrong: 'Vielen Dank für dein Nachricht.', right: 'Vielen Dank für deine Nachricht.', why: 'die Nachricht is feminine: deine.', whyFr: 'die Nachricht est féminin : deine.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l28-e2', prompt: 'Vielen Dank ___ deine Nachricht!', promptFr: 'Vielen Dank ___ deine Nachricht !', answer: 'für', hint: 'danken für / Dank für', hintFr: 'Dank für' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l28-e3', word: 'Nachricht', answer: 'die', hint: 'Feminine: die Nachricht.', hintFr: 'Féminin : die Nachricht.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l28-e4', pairs: [{ de: 'antworten', en: 'to reply', fr: 'répondre' }, { de: 'vermissen', en: 'to miss', fr: 'manquer' }, { de: 'der Gruß', en: 'the greeting', fr: 'la salutation' }, { de: 'die Einladung', en: 'the invitation', fr: 'l’invitation' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à son sens.' } },

    // ───────────── 2 · Formal ─────────────
    { kind: 'chapter', title: 'Eine formelle E-Mail', titleFr: 'Un e-mail formel', blurb: 'Sehr geehrte … Mit freundlichen Grüßen.', blurbFr: 'Sehr geehrte … Mit freundlichen Grüßen.' },

    { kind: 'situation', title: 'An den Vermieter', titleFr: 'Au propriétaire',
      setting: 'Lara writes to her landlord about a broken heater.', settingFr: 'Lara écrit à son propriétaire à propos d’un chauffage en panne.',
      lines: [
        line('Lara', 'Betreff: Defekte Heizung in der Wohnung 12', 'Subject: Broken heating in flat 12', 'Objet : Chauffage défectueux dans l’appartement 12'),
        line('Lara', 'Sehr geehrter Herr Schmidt,', 'Dear Mr Schmidt,', 'Monsieur Schmidt,'),
        line('Lara', 'ich schreibe Ihnen, weil die Heizung seit drei Tagen kaputt ist. Könnten Sie bitte einen Techniker schicken?', 'I am writing to you because the heating has been broken for three days. Could you please send a technician?', 'Je vous écris parce que le chauffage est en panne depuis trois jours. Pourriez-vous envoyer un technicien ?'),
        line('Lara', 'Ich bin ab Montag zu Hause und rufe Sie vorher an. Vielen Dank im Voraus.', 'I am at home from Monday and will call you beforehand. Thank you in advance.', 'Je suis à la maison à partir de lundi et vous appellerai auparavant. Merci d’avance.'),
        line('Lara', 'Mit freundlichen Grüßen, Lara Mbeki', 'Yours sincerely, Lara Mbeki', 'Cordialement, Lara Mbeki'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l28-e5', prompt: 'What does Lara ask for?', promptFr: 'Que demande Lara ?', options: ['A technician to repair the heating', 'A new flat', 'A lower rent'], optionsFr: ['Un technicien pour réparer le chauffage', 'Un nouvel appartement', 'Un loyer plus bas'], answer: 0, explain: 'She writes: “Könnten Sie bitte einen Techniker schicken?”', explainFr: 'Elle écrit : « Könnten Sie bitte einen Techniker schicken ? »', hint: 'Look for “Techniker”.', hintFr: 'Cherche « Techniker ».' } },

    { kind: 'wordgroup', title: 'Formelle E-Mail', titleFr: 'E-mail formel',
      items: [
        word('a2l28-betreff', 'der Betreff', 'der', 'the subject line', 'l’objet', ['be', 'TREFF'], 'buh-TREF', g('Der Betreff ist „Defekte Heizung“.', 'The subject is “Broken heating”.', 'L’objet est « Chauffage défectueux ».')),
        word('a2l28-anrede', 'die Anrede', 'die', 'the form of address', 'la formule d’appel', ['AN', 're', 'de'], 'AHN-ray-duh', g('Die Anrede ist „Sehr geehrte Frau Weber“.', 'The salutation is “Dear Ms Weber”.', 'La formule d’appel est « Madame Weber ».')),
        word('a2l28-vermieter', 'der Vermieter', 'der', 'the landlord', 'le propriétaire', ['ver', 'MIE', 'ter'], 'fer-MEE-ter', g('Ich schreibe an den Vermieter.', 'I am writing to the landlord.', 'J’écris au propriétaire.')),
        word('a2l28-heizung', 'die Heizung', 'die', 'the heating', 'le chauffage', ['HEI', 'zung'], 'HY-tsoong', g('Die Heizung ist kaputt.', 'The heating is broken.', 'Le chauffage est en panne.')),
        word('a2l28-im-voraus', 'im Voraus', null, 'in advance', 'd’avance', ['im', 'vo', 'RAUS'], 'im fo-ROWS', g('Vielen Dank im Voraus.', 'Thank you in advance.', 'Merci d’avance.')),
        word('a2l28-techniker', 'der Techniker', 'der', 'the technician', 'le technicien', ['TECH', 'ni', 'ker'], 'TEKH-ni-ker', g('Der Techniker kommt morgen.', 'The technician comes tomorrow.', 'Le technicien vient demain.')),
      ] },

    { kind: 'grammar', note: {
      id: 'a2l28-formell', title: 'The formal e-mail', titleFr: 'L’e-mail formel',
      lead: 'Betreff, Sehr geehrte/r …, reason, request with Könnten Sie …, Mit freundlichen Grüßen. Use Sie and capital Ihnen / Ihr.',
      leadFr: 'Betreff, Sehr geehrte/r …, raison, demande avec Könnten Sie …, Mit freundlichen Grüßen. Utilise Sie et Ihnen / Ihr avec majuscule.',
      explanationMd: 'A formal e-mail has **fixed parts**: **Betreff** (subject), **Anrede** (**Sehr geehrte Frau Weber, / Sehr geehrter Herr Schmidt,** — or **Sehr geehrte Damen und Herren,** if you don’t know the name), **reason** (**ich schreibe Ihnen, weil …**), **request** (**Könnten Sie bitte …?**), **closing line** (**Vielen Dank im Voraus.**), **greeting** (**Mit freundlichen Grüßen** + name). Use **Sie** and write **Sie / Ihnen / Ihr** with a **capital letter**. After the comma the first word is **lowercase** (**ich schreibe …**). The greeting **Sehr geehrter** has the **masculine ending**, **Sehr geehrte** the **feminine**.',
      explanationMdFr: 'Un e-mail formel a des **parties fixes** : **Betreff** (objet), **Anrede** (**Sehr geehrte Frau Weber, / Sehr geehrter Herr Schmidt,** — ou **Sehr geehrte Damen und Herren,** si tu ne connais pas le nom), **raison** (**ich schreibe Ihnen, weil …**), **demande** (**Könnten Sie bitte …?**), **phrase de fin** (**Vielen Dank im Voraus.**), **salutation** (**Mit freundlichen Grüßen** + nom). Utilise **Sie** et écris **Sie / Ihnen / Ihr** avec une **majuscule**. Après la virgule, le premier mot est en **minuscule** (**ich schreibe …**). **Sehr geehrter** prend la **terminaison masculine**, **Sehr geehrte** la **féminine**.',
      tables: [{ title: 'Parts of a formal e-mail', titleFr: 'Parties d’un e-mail formel', headers: ['Part', 'German'], headersFr: ['Partie', 'Allemand'],
        rows: [['Betreff', 'Defekte Heizung in der Wohnung 12'], ['Anrede', 'Sehr geehrter Herr Schmidt,'], ['Reason', 'ich schreibe Ihnen, weil die Heizung kaputt ist.'], ['Request', 'Könnten Sie bitte einen Techniker schicken?'], ['Thanks', 'Vielen Dank im Voraus.'], ['Closing', 'Mit freundlichen Grüßen, Lara Mbeki']],
        rowsFr: [['Objet', 'Defekte Heizung in der Wohnung 12'], ['Appel', 'Sehr geehrter Herr Schmidt,'], ['Raison', 'ich schreibe Ihnen, weil die Heizung kaputt ist.'], ['Demande', 'Könnten Sie bitte einen Techniker schicken ?'], ['Remerciement', 'Vielen Dank im Voraus.'], ['Fin', 'Mit freundlichen Grüßen, Lara Mbeki']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'schreibe', role: 'verb' }, { text: 'Ihnen,', role: 'dative' }, { text: 'weil', role: 'connector' }, { text: 'die Heizung', role: 'subject' }, { text: 'seit drei Tagen', role: 'time' }, { text: 'kaputt ist.', role: 'verb' }], en: 'I am writing to you because the heating has been broken for three days.', fr: 'Je vous écris parce que le chauffage est en panne depuis trois jours.' },
        { parts: [{ text: 'Könnten', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'bitte', role: 'other' }, { text: 'einen Techniker', role: 'accusative' }, { text: 'schicken?', role: 'verb' }], en: 'Could you please send a technician?', fr: 'Pourriez-vous envoyer un technicien ?' },
      ],
      contrast: {
        a: { label: 'Friend', labelFr: 'Ami', note: 'du', noteFr: 'du', examples: [g('Hallo Sara, kannst du mir helfen?', 'Hi Sara, can you help me?', 'Salut Sara, peux-tu m’aider ?'), g('Liebe Grüße', 'Love', 'Amitiés')] },
        b: { label: 'Landlord', labelFr: 'Propriétaire', note: 'Sie', noteFr: 'Sie', examples: [g('Sehr geehrter Herr Schmidt, könnten Sie mir bitte helfen?', 'Dear Mr Schmidt, could you please help me?', 'Monsieur Schmidt, pourriez-vous m’aider, s’il vous plaît ?'), g('Mit freundlichen Grüßen', 'Yours sincerely', 'Cordialement')] },
      },
      examples: [
        g('Sehr geehrter Herr Schmidt,', 'Dear Mr Schmidt,', 'Monsieur Schmidt,'),
        g('Ich schreibe Ihnen, weil die Heizung seit drei Tagen kaputt ist.', 'I am writing to you because the heating has been broken for three days.', 'Je vous écris parce que le chauffage est en panne depuis trois jours.'),
        g('Könnten Sie bitte einen Techniker schicken?', 'Could you please send a technician?', 'Pourriez-vous envoyer un technicien ?'),
        g('Ich bin ab Montag zu Hause und rufe Sie vorher an.', 'I am at home from Monday and will call you beforehand.', 'Je suis à la maison à partir de lundi et vous appellerai auparavant.'),
        g('Vielen Dank im Voraus.', 'Thank you in advance.', 'Merci d’avance.'),
        g('Mit freundlichen Grüßen, Lara Mbeki', 'Yours sincerely, Lara Mbeki', 'Cordialement, Lara Mbeki'),
      ],
      mistakes: [
        { wrong: 'Hallo Herr Schmidt, kannst du kommen?', right: 'Sehr geehrter Herr Schmidt, könnten Sie kommen?', why: 'Formal: Sehr geehrter + Sie.', whyFr: 'Formel : Sehr geehrter + Sie.' },
        { wrong: 'Ich schreibe ihnen.', right: 'Ich schreibe Ihnen.', why: 'The formal Ihnen has a capital letter.', whyFr: 'Le Ihnen de politesse prend une majuscule.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l28-e6', prompt: 'How do you close a formal e-mail?', promptFr: 'Comment termine-t-on un e-mail formel ?', options: ['Mit freundlichen Grüßen', 'Liebe Grüße', 'Tschüs'], optionsFr: ['Mit freundlichen Grüßen', 'Liebe Grüße', 'Tschüs'], answer: 0, explain: 'Formal closing: Mit freundlichen Grüßen.', explainFr: 'Formule finale formelle : Mit freundlichen Grüßen.', hint: 'Sie-form → formal closing.', hintFr: 'Forme en Sie → formule formelle.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l28-e7', prompt: 'Sehr ___ Herr Schmidt, (geehrt, masculine)', promptFr: 'Sehr ___ Herr Schmidt, (geehrt, masculin)', answer: 'geehrter', hint: 'masculine ending: -er', hintFr: 'terminaison masculine : -er' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l28-e8', tokens: ['Techniker', 'schicken', 'Könnten', 'bitte', 'Sie', 'einen'], answer: ['Könnten', 'Sie', 'bitte', 'einen', 'Techniker', 'schicken'], hint: 'Könnten first, schicken last.', hintFr: 'Könnten en premier, schicken à la fin.' } },

    // ───────────── 3 · Linking ─────────────
    { kind: 'chapter', title: 'Sätze verbinden: deshalb, außerdem, aber', titleFr: 'Relier des phrases : deshalb, außerdem, aber', blurb: 'Good texts flow.', blurbFr: 'Un bon texte coule.' },

    { kind: 'situation', title: 'Ein längerer Text', titleFr: 'Un texte plus long',
      setting: 'Lara writes a short report about her week.', settingFr: 'Lara écrit un court compte rendu de sa semaine.',
      lines: [
        line('Lara', 'Diese Woche war stressig. Ich habe viel gearbeitet, deshalb war ich abends müde.', 'This week was stressful. I worked a lot, so I was tired in the evening.', 'Cette semaine était stressante. J’ai beaucoup travaillé, c’est pourquoi j’étais fatiguée le soir.'),
        line('Lara', 'Außerdem hatte ich einen Deutschkurs. Der Kurs war schwer, aber ich habe viel gelernt.', 'In addition I had a German course. The course was hard, but I learned a lot.', 'De plus, j’avais un cours d’allemand. Le cours était difficile, mais j’ai beaucoup appris.'),
        line('Lara', 'Am Wochenende möchte ich mich entspannen. Ich komme gern, aber ich habe wenig Zeit.', 'At the weekend I want to relax. I’d love to come, but I have little time.', 'Ce week-end, je veux me détendre. Je viendrais volontiers, mais j’ai peu de temps.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l28-konnektoren', title: 'Linking words: deshalb, außerdem, aber', titleFr: 'Mots de liaison : deshalb, außerdem, aber',
      lead: 'aber, und, oder, denn: position 0 (verb stays in place). deshalb, außerdem, trotzdem: position 1 (verb second).',
      leadFr: 'aber, und, oder, denn : position 0 (le verbe reste à sa place). deshalb, außerdem, trotzdem : position 1 (verbe en deuxième).',
      explanationMd: 'Two groups of connectors: **aber, und, oder, denn** (but, and, or, because) stand in **position 0** and **do not move the verb**: **Der Kurs war schwer, aber ich habe viel gelernt.** **deshalb, außerdem, trotzdem, dann** (therefore, in addition, nevertheless, then) take **position 1**, so the **verb comes second**: **Ich habe viel gearbeitet, deshalb war ich müde.** **Außerdem hatte ich einen Deutschkurs.** **deshalb** gives the **result**, **weil** gives the **cause** (**Ich war müde, weil ich viel gearbeitet habe.**).',
      explanationMdFr: 'Deux groupes de connecteurs : **aber, und, oder, denn** (mais, et, ou, car) se placent en **position 0** et **ne déplacent pas le verbe** : **Der Kurs war schwer, aber ich habe viel gelernt.** **deshalb, außerdem, trotzdem, dann** (c’est pourquoi, de plus, pourtant, puis) prennent la **position 1**, donc le **verbe vient en deuxième** : **Ich habe viel gearbeitet, deshalb war ich müde.** **Außerdem hatte ich einen Deutschkurs.** **deshalb** donne le **résultat**, **weil** donne la **cause** (**Ich war müde, weil ich viel gearbeitet habe.**).',
      tables: [{ title: 'Two groups', titleFr: 'Deux groupes', headers: ['Group', 'Words', 'Verb'], headersFr: ['Groupe', 'Mots', 'Verbe'],
        rows: [['Position 0', 'aber · und · oder · denn', 'stays: …, aber ich habe …'], ['Position 1', 'deshalb · außerdem · trotzdem · dann', 'second: …, deshalb war ich …']],
        rowsFr: [['Position 0', 'aber · und · oder · denn', 'reste : …, aber ich habe …'], ['Position 1', 'deshalb · außerdem · trotzdem · dann', 'en deuxième : …, deshalb war ich …']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'viel', role: 'other' }, { text: 'gearbeitet,', role: 'verb' }, { text: 'deshalb', role: 'connector' }, { text: 'war', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'müde.', role: 'other' }], en: 'I worked a lot, so I was tired.', fr: 'J’ai beaucoup travaillé, c’est pourquoi j’étais fatiguée.' },
        { parts: [{ text: 'Der Kurs', role: 'subject' }, { text: 'war', role: 'verb' }, { text: 'schwer,', role: 'other' }, { text: 'aber', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'viel', role: 'other' }, { text: 'gelernt.', role: 'verb' }], en: 'The course was hard, but I learned a lot.', fr: 'Le cours était difficile, mais j’ai beaucoup appris.' },
      ],
      contrast: {
        a: { label: 'Position 0', labelFr: 'Position 0', note: 'aber · denn', noteFr: 'aber · denn', examples: [g('Ich komme gern, aber ich habe wenig Zeit.', 'I’d love to come, but I have little time.', 'Je viendrais volontiers, mais j’ai peu de temps.'), g('Ich bleibe zu Hause, denn ich bin müde.', 'I stay at home, for I am tired.', 'Je reste à la maison, car je suis fatiguée.')] },
        b: { label: 'Position 1', labelFr: 'Position 1', note: 'deshalb · außerdem', noteFr: 'deshalb · außerdem', examples: [g('Ich bin müde, deshalb bleibe ich zu Hause.', 'I am tired, so I stay at home.', 'Je suis fatiguée, c’est pourquoi je reste à la maison.'), g('Außerdem hatte ich einen Deutschkurs.', 'In addition I had a German course.', 'De plus, j’avais un cours d’allemand.')] },
      },
      examples: [
        g('Ich habe viel gearbeitet, deshalb war ich abends müde.', 'I worked a lot, so I was tired in the evening.', 'J’ai beaucoup travaillé, c’est pourquoi j’étais fatiguée le soir.'),
        g('Außerdem hatte ich einen Deutschkurs.', 'In addition I had a German course.', 'De plus, j’avais un cours d’allemand.'),
        g('Der Kurs war schwer, aber ich habe viel gelernt.', 'The course was hard, but I learned a lot.', 'Le cours était difficile, mais j’ai beaucoup appris.'),
        g('Ich komme gern, aber ich habe wenig Zeit.', 'I’d love to come, but I have little time.', 'Je viendrais volontiers, mais j’ai peu de temps.'),
        g('Ich bleibe zu Hause, denn ich bin müde.', 'I stay at home, for I am tired.', 'Je reste à la maison, car je suis fatiguée.'),
        g('Zuerst arbeite ich, dann gehe ich zum Deutschkurs.', 'First I work, then I go to the German course.', 'D’abord je travaille, puis je vais au cours d’allemand.'),
      ],
      mistakes: [
        { wrong: 'Ich war müde, deshalb ich bin zu Hause geblieben.', right: 'Ich war müde, deshalb bin ich zu Hause geblieben.', why: 'After deshalb the verb comes second.', whyFr: 'Après deshalb, le verbe vient en deuxième.' },
        { wrong: 'Ich komme gern, aber habe ich wenig Zeit.', right: 'Ich komme gern, aber ich habe wenig Zeit.', why: 'aber does not change the word order.', whyFr: 'aber ne change pas l’ordre des mots.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l28-e9', prompt: 'Ich habe viel gearbeitet, ___ war ich müde. (therefore)', promptFr: 'Ich habe viel gearbeitet, ___ war ich müde. (c’est pourquoi)', answer: 'deshalb', hint: 'deshalb + verb second', hintFr: 'deshalb + verbe en deuxième' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l28-e10', tokens: ['Der', 'war', 'schwer', 'aber', 'Kurs', 'ich', 'habe', 'viel', 'gelernt'], answer: ['Der', 'Kurs', 'war', 'schwer', 'aber', 'ich', 'habe', 'viel', 'gelernt'], hint: 'aber does not move the verb.', hintFr: 'aber ne déplace pas le verbe.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l28-e11', prompt: 'Listen. Why was she tired?', promptFr: 'Écoute. Pourquoi était-elle fatiguée ?', audio: { ttsText: 'Ich habe viel gearbeitet, deshalb war ich abends müde.' }, options: ['She worked a lot', 'She slept badly', 'She was ill'], optionsFr: ['Elle a beaucoup travaillé', 'Elle a mal dormi', 'Elle était malade'], answer: 0, hint: 'deshalb …', hintFr: 'deshalb …' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l28-e12', prompt: 'Listen. How does the e-mail end?', promptFr: 'Écoute. Comment se termine l’e-mail ?', audio: { ttsText: 'Vielen Dank im Voraus. Mit freundlichen Grüßen, Lara Mbeki.' }, options: ['With a formal closing', 'With a joke', 'With a question'], optionsFr: ['Par une formule finale formelle', 'Par une blague', 'Par une question'], answer: 0, hint: 'Mit freundlichen Grüßen', hintFr: 'Mit freundlichen Grüßen' } },

    { kind: 'pronunciation', focus: 'The ch in Nachricht, the long ü in Grüße and the ie in Vermieter', focusFr: 'Le ch dans Nachricht, le ü long dans Grüße et le ie dans Vermieter',
      items: [
        word('a2l28-nachricht-pron', 'Nachricht', null, 'message', 'message', ['NACH', 'richt'], 'NAKH-rikht', g('Ich schreibe eine Nachricht.', 'I am writing a message.', 'J’écris un message.')),
        word('a2l28-gruesse-pron', 'Grüße', null, 'greetings', 'salutations', ['GRÜ', 'ße'], 'GRUE-suh', g('Viele Grüße!', 'Best wishes!', 'Bien cordialement !')),
        word('a2l28-vermieter-pron', 'Vermieter', null, 'landlord', 'propriétaire', ['ver', 'MIE', 'ter'], 'fer-MEE-ter', g('Der Vermieter antwortet nicht.', 'The landlord is not replying.', 'Le propriétaire ne répond pas.')),
        word('a2l28-heizung-pron', 'Heizung', null, 'heating', 'chauffage', ['HEI', 'zung'], 'HY-tsoong', g('Die Heizung funktioniert nicht.', 'The heating does not work.', 'Le chauffage ne fonctionne pas.')),
      ] },

    { kind: 'wrapup',
      summary: 'You can now write a **friendly message**, a **formal e-mail** and **link your sentences** with **aber, deshalb, außerdem**. 🎉',
      summaryFr: 'Tu sais maintenant écrire un **message amical**, un **e-mail formel** et **relier tes phrases** avec **aber, deshalb, außerdem**. 🎉',
      card: { title: 'Writing on one page', titleFr: 'Écrire en une page', sections: [
        { heading: 'Friend', headingFr: 'Ami', rows: [g('Liebe Sara, … Liebe Grüße', 'du-form', 'forme en du')] },
        { heading: 'Formal', headingFr: 'Formel', rows: [g('Sehr geehrter Herr … / Sehr geehrte Frau …', 'greeting', 'salutation'), g('Mit freundlichen Grüßen', 'closing', 'formule finale'), g('Könnten Sie bitte …?', 'request', 'demande')] },
        { heading: 'Linking', headingFr: 'Liaison', rows: [g('aber · und · oder · denn', 'position 0', 'position 0'), g('deshalb · außerdem · trotzdem', 'position 1 → verb second', 'position 1 → verbe en deuxième')] },
      ] } },
  ],
};

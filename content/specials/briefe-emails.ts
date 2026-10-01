import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const briefeEmails = defineSpecial({
  slug: 'briefe-emails',
  number: 31,
  group: 'life',
  levels: ['A2', 'B1'],
  related: ['l19', 'b1-l1', 'b1-l15'],
  title: ['Briefe und E-Mails', 'Letters and emails', 'Lettres et e-mails'],
  theme: [
    'Formal and informal letters and emails: Betreff, Anrede, requests, appointments, complaints and the right closing',
    'Lettres et e-mails formels et informels : Betreff, formule d’appel, demandes, rendez-vous, réclamations et bonne formule de politesse',
  ],
  goals: [
    'Choose between Sie and du, and the matching opening and closing',
    'Write a clear Betreff and structure an email',
    'Make polite requests and arrange appointments',
    'Write a short, firm complaint',
    'Write a friendly informal message to a friend',
  ],
  goalsFr: [
    'Choisir entre Sie et du, avec l’ouverture et la clôture qui vont avec',
    'Rédiger un Betreff clair et structurer un e-mail',
    'Formuler des demandes polies et fixer des rendez-vous',
    'Rédiger une réclamation courte et ferme',
    'Écrire un message amical informel à un ami',
  ],
  steps: [
    intro(
      'Sehr geehrte Damen und Herren', 'Mesdames, Messieurs',
      'You need to ask the landlord about a leak, write to a company about a broken delivery, and invite a friend for dinner. Three messages, three tones. German letters and emails follow clear patterns, and once you know them, writing becomes a matter of choosing the right building blocks.',
      'Tu dois écrire au propriétaire à propos d’une fuite, à une entreprise à propos d’une livraison abîmée, et inviter un ami à dîner. Trois messages, trois tons. Les lettres et e-mails allemands suivent des modèles clairs : une fois que tu les connais, écrire revient à choisir les bons éléments.',
      [
        'Pick Sie or du and the matching greeting',
        'Write a clear Betreff and structure',
        'Make requests and arrange appointments politely',
        'Complain firmly but politely',
      ],
      [
        'Choisir Sie ou du et la salutation correspondante',
        'Rédiger un Betreff clair et structurer le message',
        'Faire des demandes et fixer des rendez-vous poliment',
        'Réclamer fermement mais poliment',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Sie or du?', 'Sie ou du ?',
      'The first choice that sets the tone of everything after.', 'Le premier choix qui donne le ton à tout le reste.',
    ),
    vocab('sp-briefe-emails-brief', 'der Brief', 'the letter', 'la lettre', 'der', 'BREEF', 'dair BREEF', ['Ich schreibe einen Brief an die Firma.', 'I am writing a letter to the company.', 'J’écris une lettre à l’entreprise.']),
    vocab('sp-briefe-emails-email', 'die E-Mail', 'the email', 'l’e-mail', 'die', 'EE-mayl', 'dee EE-mayl', ['Ich schicke dir eine E-Mail.', 'I am sending you an email.', 'Je t’envoie un e-mail.']),
    vocab('sp-briefe-emails-anrede', 'die Anrede', 'the form of address, salutation', 'la formule d’appel', 'die', 'AN-ray-de', 'dee AHN-ray-duh', ['Die Anrede steht am Anfang des Briefs.', 'The salutation is at the start of the letter.', 'La formule d’appel est au début de la lettre.']),
    grammar(
      'sp-be-register',
      ['Formal or informal', 'Formel ou informel'],
      [
        '| | **Formal (Sie)** | **Informal (du)** |\n|---|---|---|\n| Who | boss, authority, company, stranger | friend, family, colleague you know well |\n| Pronoun | **Sie**, **Ihnen**, **Ihr** (always capital) | **du**, **dir**, **dein** (lowercase today) |\n| Opening | **Sehr geehrte Frau Müller,** · **Sehr geehrter Herr Schmidt,** · **Sehr geehrte Damen und Herren,** | **Liebe Anna,** · **Lieber Tom,** · **Hallo Anna,** |\n| Closing | **Mit freundlichen Grüßen** | **Viele Grüße** · **Liebe Grüße** · **Bis bald!** |\n\n**Tip:** after the comma of the opening, the first word of the text is written in **lowercase** (unless it is a noun or *Sie*): *Sehr geehrte Frau Müller, ich schreibe Ihnen wegen …*\n\n**Rule:** pick one register and stay in it. Never mix *Sie* and *du* in the same message.',
        '| | **Formel (Sie)** | **Informel (du)** |\n|---|---|---|\n| Qui | chef, administration, entreprise, inconnu | ami, famille, collègue qu’on connaît bien |\n| Pronom | **Sie**, **Ihnen**, **Ihr** (toujours majuscule) | **du**, **dir**, **dein** (minuscule aujourd’hui) |\n| Ouverture | **Sehr geehrte Frau Müller,** · **Sehr geehrter Herr Schmidt,** · **Sehr geehrte Damen und Herren,** | **Liebe Anna,** · **Lieber Tom,** · **Hallo Anna,** |\n| Clôture | **Mit freundlichen Grüßen** | **Viele Grüße** · **Liebe Grüße** · **Bis bald !** |\n\n**Astuce :** après la virgule de l’ouverture, le premier mot du texte s’écrit en **minuscule** (sauf nom ou *Sie*) : *Sehr geehrte Frau Müller, ich schreibe Ihnen wegen …*\n\n**Règle :** choisis un registre et garde-le. Ne mélange jamais *Sie* et *du* dans le même message.',
      ],
      [
        ['Sehr geehrte Frau Müller, ich schreibe Ihnen wegen meiner Bestellung.', 'Dear Ms Müller, I am writing to you about my order.', 'Madame Müller, je vous écris au sujet de ma commande.'],
        ['Liebe Anna, ich hoffe, es geht dir gut.', 'Dear Anna, I hope you are well.', 'Chère Anna, j’espère que tu vas bien.'],
      ],
    ),
    mc(
      'sp-be-e1',
      ['You write to a company you do not know. Which opening fits?', 'Tu écris à une entreprise que tu ne connais pas. Quelle ouverture convient ?'],
      ['Sehr geehrte Damen und Herren,', 'Hallo Leute,', 'Liebe Grüße,'],
      ['Sehr geehrte Damen und Herren,', 'Hallo Leute,', 'Liebe Grüße,'], 0,
      ['Unknown recipients = formal opening.', 'Destinataires inconnus = ouverture formelle.'],
    ),
    mc(
      'sp-be-e2',
      ['Which closing is formal?', 'Quelle clôture est formelle ?'],
      ['Mit freundlichen Grüßen', 'Bis bald!', 'Liebe Grüße'],
      ['Mit freundlichen Grüßen', 'Bis bald !', 'Liebe Grüße'], 0,
      ['Mit freundlichen Grüßen is the standard formal closing.', 'Mit freundlichen Grüßen est la clôture formelle standard.'],
    ),
    wo(
      'sp-be-e3',
      ['Frau', 'geehrte', 'Müller,', 'Sehr'],
      ['Sehr', 'geehrte', 'Frau', 'Müller,'],
      ['Sehr geehrte is the start of the formal opening.', 'Sehr geehrte ouvre la formule formelle.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Betreff and structure', 'Betreff et structure',
      'A short subject line and a clear order of parts.', 'Un objet court et un ordre clair des parties.',
    ),
    vocab('sp-briefe-emails-betreff', 'der Betreff', 'the subject line', 'l’objet', 'der', 'be-TREFF', 'dair buh-TREF', ['Im Betreff steht: „Anfrage zum Kurs“.', 'The subject says: “Enquiry about the course”.', 'L’objet indique : « Demande sur le cours ».']),
    vocab('sp-briefe-emails-anlage', 'die Anlage', 'the enclosure, attachment (letter)', 'la pièce jointe (lettre)', 'die', 'AN-la-ge', 'dee AHN-lah-guh', ['Als Anlage sende ich Ihnen mein Zeugnis.', 'I am enclosing my certificate.', 'Je joins mon certificat.']),
    vocab('sp-briefe-emails-anhang', 'der Anhang', 'the attachment (email)', 'la pièce jointe (e-mail)', 'der', 'AN-hang', 'dair AHN-hahng', ['Im Anhang finden Sie die Rechnung.', 'The invoice is attached.', 'La facture est en pièce jointe.']),
    vocab('sp-briefe-emails-anfrage', 'die Anfrage', 'the enquiry', 'la demande de renseignements', 'die', 'AN-fra-ge', 'dee AHN-frah-guh', ['Ich habe eine Anfrage zum Sprachkurs.', 'I have an enquiry about the language course.', 'J’ai une demande de renseignements sur le cours de langue.']),
    grammar(
      'sp-be-structure',
      ['Structure of a formal email', 'Structure d’un e-mail formel'],
      [
        '1. **Betreff**: 3–6 words, no verb needed: *Anfrage zum Deutschkurs*, *Beschwerde: Bestellung Nr. 4711*.\n2. **Anrede**: *Sehr geehrte Frau Müller,*\n3. **Einleitung**: why you write: *ich schreibe Ihnen wegen …* / *ich interessiere mich für …*\n4. **Hauptteil**: facts, request, dates.\n5. **Schluss**: thanks and next step: *Vielen Dank im Voraus.* / *Ich freue mich auf Ihre Antwort.*\n6. **Gruß**: *Mit freundlichen Grüßen* + your full name.\n\nIn a paper letter add place and date at the top right: *Berlin, 12. Mai 2026*.',
        '1. **Betreff** : 3 à 6 mots, pas forcément de verbe : *Anfrage zum Deutschkurs*, *Beschwerde : Bestellung Nr. 4711*.\n2. **Anrede** : *Sehr geehrte Frau Müller,*\n3. **Einleitung** : pourquoi tu écris : *ich schreibe Ihnen wegen …* / *ich interessiere mich für …*\n4. **Hauptteil** : faits, demande, dates.\n5. **Schluss** : remerciements et suite : *Vielen Dank im Voraus.* / *Ich freue mich auf Ihre Antwort.*\n6. **Gruß** : *Mit freundlichen Grüßen* + ton nom complet.\n\nDans une lettre papier, ajoute le lieu et la date en haut à droite : *Berlin, 12. Mai 2026*.',
      ],
      [
        ['Betreff: Anfrage zum Deutschkurs', 'Subject: Enquiry about the German course', 'Objet : Demande sur le cours d’allemand'],
        ['Ich freue mich auf Ihre Antwort.', 'I look forward to your reply.', 'J’attends votre réponse avec plaisir.'],
        ['Vielen Dank im Voraus.', 'Thank you in advance.', 'Merci d’avance.'],
      ],
    ),
    mc(
      'sp-be-e4',
      ['What is a good Betreff?', 'Quel est un bon Betreff ?'],
      ['Anfrage zum Deutschkurs', 'Sehr geehrte Damen und Herren', 'Ich möchte wissen, ob Sie vielleicht einen Kurs haben, den ich buchen könnte'],
      ['Anfrage zum Deutschkurs', 'Sehr geehrte Damen und Herren', 'Ich möchte wissen, ob Sie vielleicht einen Kurs haben, den ich buchen könnte'], 0,
      ['Short and specific, no full sentence needed.', 'Court et précis, pas besoin de phrase complète.'],
    ),
    match(
      'sp-be-e5',
      [
        ['der Betreff', 'subject line', 'objet'],
        ['die Anrede', 'salutation', 'formule d’appel'],
        ['der Anhang', 'attachment (email)', 'pièce jointe (e-mail)'],
        ['die Anfrage', 'enquiry', 'demande de renseignements'],
      ],
      ['Match each word with its meaning.', 'Associe chaque mot à son sens.'],
    ),
    ap('sp-be-e6', 'Anlage', 'die', ['Words ending in -e are mostly feminine.', 'Les mots en -e sont surtout féminins.']),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Requests and appointments', 'Demandes et rendez-vous',
      'Polite requests with Könnten Sie … and arranging a Termin.', 'Demandes polies avec Könnten Sie … et prise de rendez-vous.',
    ),
    vocab('sp-briefe-emails-termin', 'der Termin', 'the appointment', 'le rendez-vous', 'der', 'ter-MEEN', 'dair ter-MEEN', ['Ich möchte einen Termin vereinbaren.', 'I would like to arrange an appointment.', 'Je voudrais fixer un rendez-vous.']),
    vocab('sp-briefe-emails-vereinbaren', 'vereinbaren', 'to arrange, to agree on', 'convenir de, fixer', null, 'fer-EIN-ba-ren', 'fair-INE-bah-ren', ['Können wir einen Termin vereinbaren?', 'Can we arrange an appointment?', 'Pouvons-nous convenir d’un rendez-vous ?']),
    vocab('sp-briefe-emails-schicken', 'schicken', 'to send', 'envoyer', null, 'SHIK-ken', 'SHIK-en', ['Könnten Sie mir die Unterlagen schicken?', 'Could you send me the documents?', 'Pourriez-vous m’envoyer les documents ?']),
    vocab('sp-briefe-emails-antwort', 'die Antwort', 'the reply', 'la réponse', 'die', 'ANT-vort', 'dee AHNT-vort', ['Ich warte auf Ihre Antwort.', 'I am waiting for your reply.', 'J’attends votre réponse.']),
    grammar(
      'sp-be-requests',
      ['Polite requests', 'Demandes polies'],
      [
        'In formal German, requests use **Konjunktiv II** (*könnten*, *würden*) or **ich möchte / ich würde gern**:\n\n- **Könnten Sie** mir bitte die Preise **schicken**?\n- **Würden Sie** mir bitte **mitteilen**, ob der Kurs noch frei ist?\n- **Ich möchte** gern einen Termin **vereinbaren**.\n- **Ich bitte um** eine Bestätigung. (*bitten um* + Akkusativ)\n\nFor appointments: *Hätten Sie am Dienstag um 10 Uhr Zeit?* · *Der Termin passt mir leider nicht.* · *Ich bestätige den Termin am …*\n\n**Always end with thanks:** *Vielen Dank im Voraus.* / *Vielen Dank für Ihre Mühe.*\n\nInformal: *Kannst du mir bitte … schicken?* · *Hast du am Samstag Zeit?*',
        'En allemand formel, on fait des demandes avec le **Konjunktiv II** (*könnten*, *würden*) ou **ich möchte / ich würde gern** :\n\n- **Könnten Sie** mir bitte die Preise **schicken** ?\n- **Würden Sie** mir bitte **mitteilen**, ob der Kurs noch frei ist ?\n- **Ich möchte** gern einen Termin **vereinbaren**.\n- **Ich bitte um** eine Bestätigung. (*bitten um* + accusatif)\n\nPour les rendez-vous : *Hätten Sie am Dienstag um 10 Uhr Zeit ?* · *Der Termin passt mir leider nicht.* · *Ich bestätige den Termin am …*\n\n**Termine toujours par un remerciement :** *Vielen Dank im Voraus.* / *Vielen Dank für Ihre Mühe.*\n\nInformel : *Kannst du mir bitte … schicken ?* · *Hast du am Samstag Zeit ?*',
      ],
      [
        ['Könnten Sie mir bitte die Preise schicken?', 'Could you please send me the prices?', 'Pourriez-vous m’envoyer les prix, s’il vous plaît ?'],
        ['Hätten Sie am Dienstag um 10 Uhr Zeit?', 'Would you have time on Tuesday at 10?', 'Auriez-vous le temps mardi à 10 heures ?'],
        ['Ich bitte um eine Bestätigung.', 'I ask for a confirmation.', 'Je vous prie de me confirmer.'],
        ['Hast du am Samstag Zeit?', 'Do you have time on Saturday?', 'As-tu le temps samedi ?'],
      ],
    ),
    fb(
      'sp-be-e7',
      ['___ Sie mir bitte die Preise schicken? (polite "could")', '___ Sie mir bitte die Preise schicken ? (« pourriez- » poli)'],
      'Könnten',
      ['Konjunktiv II of können, Sie form.', 'Konjunktiv II de können, forme Sie.'],
    ),
    mc(
      'sp-be-e8',
      ['"Ich möchte einen Termin ___." (arrange)', '« Ich möchte einen Termin ___. » (fixer)'],
      ['vereinbaren', 'absagen', 'vergessen'],
      ['vereinbaren', 'absagen', 'vergessen'], 0,
      ['vereinbaren = to arrange/agree on.', 'vereinbaren = convenir de, fixer.'],
    ),
    wo(
      'sp-be-e9',
      ['Sie', 'mir', 'Könnten', 'schicken?', 'die', 'Unterlagen'],
      ['Könnten', 'Sie', 'mir', 'die', 'Unterlagen', 'schicken?'],
      ['Verb first in a question, infinitive at the end.', 'Verbe en premier dans la question, infinitif à la fin.'],
    ),
    lc(
      'sp-be-e10',
      ['Listen. What does she want?', 'Écoute. Que veut-elle ?'],
      'Ich möchte einen Termin vereinbaren.',
      ['To arrange an appointment', 'To cancel a course', 'To pay an invoice'],
      ['Fixer un rendez-vous', 'Annuler un cours', 'Payer une facture'], 0,
      ['Listen for Termin vereinbaren.', 'Écoute Termin vereinbaren.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Complaints', 'Réclamations',
      'Say what is wrong, what you expect, and by when, politely.', 'Dire ce qui ne va pas, ce que tu attends, et pour quand, poliment.',
    ),
    vocab('sp-briefe-emails-bestellung', 'die Bestellung', 'the order', 'la commande', 'die', 'be-SHTEL-ung', 'dee buh-SHTEL-oong', ['Meine Bestellung ist noch nicht angekommen.', 'My order has not arrived yet.', 'Ma commande n’est pas encore arrivée.']),
    vocab('sp-briefe-emails-beschwerde', 'die Beschwerde', 'the complaint', 'la réclamation', 'die', 'be-SHVAIR-de', 'dee buh-SHVAIR-duh', ['Ich möchte eine Beschwerde einreichen.', 'I would like to file a complaint.', 'Je voudrais déposer une réclamation.']),
    vocab('sp-briefe-emails-beschaedigt', 'beschädigt', 'damaged', 'endommagé', null, 'be-SHAY-digt', 'buh-SHAY-dikht', ['Das Paket war beschädigt.', 'The parcel was damaged.', 'Le colis était endommagé.']),
    vocab('sp-briefe-emails-erwarten', 'erwarten', 'to expect', 'attendre, s’attendre à', null, 'er-VAR-ten', 'air-VAR-ten', ['Ich erwarte eine schnelle Antwort.', 'I expect a quick reply.', 'J’attends une réponse rapide.']),
    grammar(
      'sp-be-complaint',
      ['Writing a complaint', 'Rédiger une réclamation'],
      [
        'A good complaint is **short, factual and polite**. Three parts:\n\n1. **The facts:** *Ich habe am 3. Mai ein Sofa bestellt. Die Lieferung war beschädigt.*\n2. **What you want:** *Ich bitte Sie, mir ein neues Sofa zu schicken.* / *Ich erwarte eine Rückerstattung.*\n3. **A deadline:** *Bitte antworten Sie bis zum 20. Mai.*\n\nUseful phrases: **leider** (unfortunately), **Ich bin mit … nicht zufrieden.**, **Ich möchte mich über … beschweren.**\n\nStay polite: *Sie* forms and no insults. A calm, precise letter gets better results than an angry one.',
        'Une bonne réclamation est **courte, factuelle et polie**. Trois parties :\n\n1. **Les faits :** *Ich habe am 3. Mai ein Sofa bestellt. Die Lieferung war beschädigt.*\n2. **Ce que tu veux :** *Ich bitte Sie, mir ein neues Sofa zu schicken.* / *Ich erwarte eine Rückerstattung.*\n3. **Un délai :** *Bitte antworten Sie bis zum 20. Mai.*\n\nPhrases utiles : **leider** (malheureusement), **Ich bin mit … nicht zufrieden.**, **Ich möchte mich über … beschweren.**\n\nReste poli : formes *Sie* et pas d’insultes. Une lettre calme et précise obtient de meilleurs résultats qu’une lettre en colère.',
      ],
      [
        ['Leider war die Lieferung beschädigt.', 'Unfortunately the delivery was damaged.', 'Malheureusement, la livraison était endommagée.'],
        ['Ich möchte mich über die Lieferung beschweren.', 'I would like to complain about the delivery.', 'Je voudrais me plaindre de la livraison.'],
        ['Bitte antworten Sie bis zum 20. Mai.', 'Please reply by 20 May.', 'Veuillez répondre avant le 20 mai.'],
      ],
    ),
    mc(
      'sp-be-e11',
      ['Which sentence is the polite complaint?', 'Quelle phrase est la réclamation polie ?'],
      ['Leider war die Lieferung beschädigt.', 'Ihr Service ist der letzte Dreck!', 'Gib mir sofort mein Geld!'],
      ['Leider war die Lieferung beschädigt.', 'Ihr Service ist der letzte Dreck !', 'Gib mir sofort mein Geld !'], 0,
      ['Polite: leider + facts, Sie form.', 'Poli : leider + faits, forme Sie.'],
    ),
    fb(
      'sp-be-e12',
      ['Ich ___ eine schnelle Antwort. (I expect)', 'Ich ___ eine schnelle Antwort. (j’attends)'],
      'erwarte',
      ['erwarten, ich form.', 'erwarten, forme ich.'],
    ),
    wo(
      'sp-be-e13',
      ['beschädigt', 'war', 'Das', 'Paket'],
      ['Das', 'Paket', 'war', 'beschädigt'],
      ['Subject, verb, adjective.', 'Sujet, verbe, adjectif.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Friendly messages', 'Messages amicaux',
      'Informal invitations and thanks to friends.', 'Invitations et remerciements informels à des amis.',
    ),
    vocab('sp-briefe-emails-einladung', 'die Einladung', 'the invitation', 'l’invitation', 'die', 'EIN-la-dung', 'dee INE-lah-doong', ['Danke für die Einladung!', 'Thanks for the invitation!', 'Merci pour l’invitation !']),
    vocab('sp-briefe-emails-gruss', 'der Gruß', 'the greeting', 'le salut', 'der', 'GROOSS', 'dair GROOSS', ['Viele Grüße an deine Familie!', 'Best wishes to your family!', 'Bien des choses à ta famille !']),
    vocab('sp-briefe-emails-freuen', 'sich freuen auf', 'to look forward to', 'se réjouir de (à venir)', null, 'zikh FROY-en owf', 'zikh FROY-en owf', ['Ich freue mich auf Samstag!', 'I am looking forward to Saturday!', 'Je me réjouis de samedi !']),
    grammar(
      'sp-be-informal',
      ['Informal messages', 'Messages informels'],
      [
        'Friendly messages are short and warm. Typical building blocks:\n\n- Opening: **Liebe Anna,** · **Lieber Tom,** · **Hallo Anna,**\n- Warm-up: **Wie geht’s dir?** · **Danke für deine Nachricht.**\n- Invitation: **Hast du Lust, am Samstag zu kommen?** · **Wir laden dich zum Essen ein.**\n- Looking ahead: **Ich freue mich auf dich!** (*sich freuen auf* + Akkusativ)\n- Closing: **Viele Grüße** · **Liebe Grüße** · **Bis bald!** + first name.\n\nEmojis are fine in chats, but not in a letter to a company.',
        'Les messages amicaux sont courts et chaleureux. Éléments typiques :\n\n- Ouverture : **Liebe Anna,** · **Lieber Tom,** · **Hallo Anna,**\n- Entrée en matière : **Wie geht’s dir ?** · **Danke für deine Nachricht.**\n- Invitation : **Hast du Lust, am Samstag zu kommen ?** · **Wir laden dich zum Essen ein.**\n- Se projeter : **Ich freue mich auf dich !** (*sich freuen auf* + accusatif)\n- Clôture : **Viele Grüße** · **Liebe Grüße** · **Bis bald !** + prénom.\n\nLes émojis passent dans un chat, mais pas dans une lettre à une entreprise.',
      ],
      [
        ['Liebe Anna, danke für deine Einladung!', 'Dear Anna, thanks for your invitation!', 'Chère Anna, merci pour ton invitation !'],
        ['Ich freue mich auf Samstag. Bis bald!', 'I am looking forward to Saturday. See you soon!', 'Je me réjouis de samedi. À bientôt !'],
      ],
    ),
    mc(
      'sp-be-e14',
      ['Which closing suits a message to a close friend?', 'Quelle clôture convient à un message à un ami proche ?'],
      ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Hochachtungsvoll'],
      ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Hochachtungsvoll'], 0,
      ['Informal closing for friends.', 'Clôture informelle pour amis.'],
    ),
    ap('sp-be-e15', 'Einladung', 'die', ['-ung nouns are feminine.', 'Les noms en -ung sont féminins.']),

    wrapup(
      '**Register:** Sie (capital Sie/Ihnen/Ihr) with *Sehr geehrte Frau …, / Sehr geehrter Herr …, / Sehr geehrte Damen und Herren,* and *Mit freundlichen Grüßen*. Informal: du with *Liebe Anna, / Lieber Tom,* and *Viele Grüße / Bis bald!*\n\n**Structure:** Betreff (3–6 words) → Anrede → Einleitung → Hauptteil → Schluss with thanks → Gruß + name. After the opening comma the text begins in lowercase.\n\n**Requests:** *Könnten Sie …?*, *Würden Sie …?*, *Ich möchte …*, *Ich bitte um …*, then *Vielen Dank im Voraus.*\n\n**Complaints:** facts, request, deadline. Stay polite.\n\n**Friends:** short and warm: *Danke für deine Einladung! Ich freue mich auf Samstag.*',
      '**Registre :** Sie (majuscule Sie/Ihnen/Ihr) avec *Sehr geehrte Frau …, / Sehr geehrter Herr …, / Sehr geehrte Damen und Herren,* et *Mit freundlichen Grüßen*. Informel : du avec *Liebe Anna, / Lieber Tom,* et *Viele Grüße / Bis bald !*\n\n**Structure :** Betreff (3 à 6 mots) → Anrede → Einleitung → Hauptteil → Schluss avec remerciement → Gruß + nom. Après la virgule de l’ouverture, le texte commence en minuscule.\n\n**Demandes :** *Könnten Sie …?*, *Würden Sie …?*, *Ich möchte …*, *Ich bitte um …*, puis *Vielen Dank im Voraus.*\n\n**Réclamations :** faits, demande, délai. Reste poli.\n\n**Amis :** court et chaleureux : *Danke für deine Einladung ! Ich freue mich auf Samstag.*',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Letters and emails', 'Quiz final : lettres et e-mails'),
    mc(
      'sp-be-q1',
      ['You write to your boss, whom you address as "Sie". Which closing?', 'Tu écris à ton chef, que tu vouvoies. Quelle clôture ?'],
      ['Mit freundlichen Grüßen', 'Bis bald!', 'Küsschen'],
      ['Mit freundlichen Grüßen', 'Bis bald !', 'Küsschen'], 0,
      ['Sie = formal closing.', 'Sie = clôture formelle.'],
    ),
    mc(
      'sp-be-q2',
      ['Which opening is right for a formal letter to Ms Schneider, whom you have never met?', 'Quelle ouverture convient à une lettre formelle à Mme Schneider, que tu n’as jamais rencontrée ?'],
      ['Sehr geehrte Frau Schneider,', 'Liebe Frau Schneider,', 'Hey Schneider,'],
      ['Sehr geehrte Frau Schneider,', 'Liebe Frau Schneider,', 'Hey Schneider,'], 0,
      ['Sehr geehrte is the standard formal opening; Liebe Frau … is only for people you already know.', 'Sehr geehrte est l’ouverture formelle standard ; Liebe Frau … convient seulement à des personnes que tu connais déjà.'],
    ),
    match(
      'sp-be-q3',
      [
        ['der Betreff', 'subject line', 'objet'],
        ['der Termin', 'appointment', 'rendez-vous'],
        ['die Beschwerde', 'complaint', 'réclamation'],
        ['die Anlage', 'attachment', 'pièce jointe'],
        ['die Einladung', 'invitation', 'invitation'],
      ],
      ['Match each word with its meaning.', 'Associe chaque mot à son sens.'],
    ),
    fb(
      'sp-be-q4',
      ['___ Sie mir bitte eine Bestätigung schicken? (could)', '___ Sie mir bitte eine Bestätigung schicken ? (pourriez-)'],
      'Könnten',
      ['Konjunktiv II, Sie form.', 'Konjunktiv II, forme Sie.'],
    ),
    fb(
      'sp-be-q5',
      ['Ich möchte einen Termin ___. (arrange)', 'Ich möchte einen Termin ___. (fixer)'],
      'vereinbaren',
      ['Verb for arranging an appointment.', 'Verbe pour fixer un rendez-vous.'],
    ),
    fb(
      'sp-be-q6',
      ['Vielen Dank im ___. (thank you in advance)', 'Vielen Dank im ___. (merci d’avance)'],
      'Voraus',
      ['Fixed phrase: im Voraus.', 'Expression figée : im Voraus.'],
    ),
    mc(
      'sp-be-q7',
      ['What belongs in a Betreff?', 'Qu’y a-t-il dans un Betreff ?'],
      ['A short title of your topic', 'A full-length story', 'Only your name'],
      ['Un titre court du sujet', 'Toute l’histoire', 'Seulement ton nom'], 0,
      ['Short and specific.', 'Court et précis.'],
    ),
    mc(
      'sp-be-q8',
      ['Which sentence is a polite complaint?', 'Quelle phrase est une réclamation polie ?'],
      ['Leider war die Lieferung beschädigt.', 'Das ist eine Frechheit!', 'Ich hasse Ihre Firma.'],
      ['Leider war die Lieferung beschädigt.', 'Das ist eine Frechheit !', 'Ich hasse Ihre Firma.'], 0,
      ['State the facts calmly.', 'Expose les faits calmement.'],
    ),
    wo(
      'sp-be-q9',
      ['Mit', 'Grüßen', 'freundlichen'],
      ['Mit', 'freundlichen', 'Grüßen'],
      ['The standard formal closing.', 'La clôture formelle standard.'],
    ),
    wo(
      'sp-be-q10',
      ['freue', 'auf', 'Ich', 'mich', 'Samstag.'],
      ['Ich', 'freue', 'mich', 'auf', 'Samstag.'],
      ['Reflexive: mich after the verb.', 'Réfléchi : mich après le verbe.'],
    ),
    wo(
      'sp-be-q11',
      ['bis', 'antworten', 'Bitte', 'Sie', 'Mai.', 'zum', '20.'],
      ['Bitte', 'antworten', 'Sie', 'bis', 'zum', '20.', 'Mai.'],
      ['Imperative: verb, then Sie.', 'Impératif : verbe, puis Sie.'],
    ),
    ap('sp-be-q12', 'Beschwerde', 'die', ['Words ending in -e are mostly feminine.', 'Les mots en -e sont surtout féminins.']),
    lc(
      'sp-be-q13',
      ['Listen. What is the writer doing?', 'Écoute. Que fait la personne ?'],
      'Ich möchte mich über die Lieferung beschweren.',
      ['Complaining about a delivery', 'Inviting a friend', 'Booking a hotel'],
      ['Se plaindre d’une livraison', 'Inviter un ami', 'Réserver un hôtel'], 0,
      ['Listen for beschweren.', 'Écoute beschweren.'],
    ),
    lc(
      'sp-be-q14',
      ['Listen. What is the message?', 'Écoute. Quel est le message ?'],
      'Danke für deine Einladung!',
      ['Thanks for your invitation', 'I want to cancel', 'Where is the station?'],
      ['Merci pour ton invitation', 'Je veux annuler', 'Où est la gare ?'], 0,
      ['Einladung = invitation.', 'Einladung = invitation.'],
    ),
  ],
});

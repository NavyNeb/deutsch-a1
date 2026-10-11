import type { ExamSetInput } from '../types';

const tr = (en: string, fr: string) => ({ en, fr });

// Shared answer options for the "Anzeige a oder b" part.
const AB = {
  options: ['Anzeige a', 'Anzeige b'],
  optionsTr: [tr('Ad a', 'Annonce a'), tr('Ad b', 'Annonce b')],
};

// Original practice material modelled on the telc Deutsch A1 format. Not an official paper.
export const TELC_A1_9_10: ExamSetInput[] = [
  // ───────────────────────── Set 9: Familie, Kinder, Handy, Internet ─────────────────────────
  {
    id: 'telc-a1-9',
    board: 'telc',
    level: 'A1',
    number: 9,
    lesen: [
      { id: 'telc-a1-9-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Liebe Oma,\nam Sonntag hat Paul Geburtstag. Er wird acht. Kommst du um drei Uhr zum Kaffee? Mama backt einen Schokoladenkuchen.\nDeine Lena', tr: tr('Dear Granny,\nOn Sunday it is Paul’s birthday. He is turning eight. Will you come for coffee at three o’clock? Mum is baking a chocolate cake.\nYour Lena', 'Chère mamie,\ndimanche, c’est l’anniversaire de Paul. Il a huit ans. Viens-tu prendre le café à trois heures ? Maman fait un gâteau au chocolat.\nTa Lena') },
          { id: 'm2', de: 'Liebe Eltern,\nam Freitag machen wir einen Ausflug in den Zoo. Der Bus fährt um 8 Uhr ab. Die Kinder bringen bitte etwas zu essen und zu trinken mit. Geld brauchen sie nicht.\nFrau Berger', tr: tr('Dear parents,\nOn Friday we are going on a trip to the zoo. The bus leaves at 8 a.m. Please let the children bring something to eat and drink. They do not need money.\nMrs Berger', 'Chers parents,\nvendredi, nous faisons une sortie au zoo. Le bus part à 8 h. Les enfants apportent quelque chose à manger et à boire, s’il vous plaît. Ils n’ont pas besoin d’argent.\nMadame Berger') },
          { id: 'm3', de: 'Hallo Nina,\nmein Handy ist kaputt. Ich schreibe dir vom Computer. Bitte ruf mich heute nicht an, sondern schreib mir eine E-Mail. Am Abend kaufe ich ein neues Handy.\nKarim', tr: tr('Hi Nina,\nMy mobile phone is broken. I am writing to you from the computer. Please do not call me today, but write me an e-mail. This evening I will buy a new mobile phone.\nKarim', 'Salut Nina,\nmon portable est cassé. Je t’écris depuis l’ordinateur. Ne m’appelle pas aujourd’hui, mais écris-moi un e-mail. Ce soir, j’achète un nouveau portable.\nKarim') },
          { id: 'm4', de: 'Sehr geehrte Frau Weiß,\nIhr Sohn Max war heute nicht in der Schule. Bitte rufen Sie das Sekretariat an: 030 / 55 66 77.\nGrundschule am Park', tr: tr('Dear Mrs Weiß,\nYour son Max was not at school today. Please call the school office: 030 / 55 66 77.\nPark primary school', 'Chère Madame Weiß,\nvotre fils Max n’était pas à l’école aujourd’hui. Veuillez appeler le secrétariat : 030 / 55 66 77.\nÉcole primaire am Park') },
          { id: 'm5', de: 'Hallo Papa,\ndas Internet geht nicht. Ich kann meine Hausaufgaben nicht machen. Kannst du bitte nach der Arbeit helfen?\nDanke! Jule', tr: tr('Hi Dad,\nThe internet is not working. I cannot do my homework. Can you please help after work?\nThanks! Jule', 'Salut papa,\nInternet ne marche pas. Je ne peux pas faire mes devoirs. Peux-tu m’aider après le travail, s’il te plaît ?\nMerci ! Jule') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Paul wird am Sonntag neun Jahre alt.', qTr: tr('Paul is turning nine on Sunday.', 'Paul a neuf ans dimanche.'), answer: false, explain: tr('"Er wird acht" – he is turning eight, not nine.', '« Er wird acht » – il a huit ans, pas neuf.') },
          { id: 'q2', textId: 'm2', q: 'Die Kinder nehmen etwas zu essen mit.', qTr: tr('The children take something to eat with them.', 'Les enfants emportent quelque chose à manger.'), answer: true, explain: tr('"Die Kinder bringen bitte etwas zu essen und zu trinken mit."', '« Die Kinder bringen bitte etwas zu essen und zu trinken mit. »') },
          { id: 'q3', textId: 'm3', q: 'Karim hat schon ein neues Handy.', qTr: tr('Karim already has a new mobile phone.', 'Karim a déjà un nouveau portable.'), answer: false, explain: tr('His phone is broken; he will buy a new one in the evening ("kaufe ich").', 'Son portable est cassé ; il en achètera un nouveau le soir (« kaufe ich »).') },
          { id: 'q4', textId: 'm4', q: 'Frau Weiß soll im Sekretariat anrufen.', qTr: tr('Mrs Weiß should call the school office.', 'Madame Weiß doit appeler le secrétariat.'), answer: true, explain: tr('"Bitte rufen Sie das Sekretariat an."', '« Bitte rufen Sie das Sekretariat an. »') },
          { id: 'q5', textId: 'm5', q: 'Jule möchte, dass ihr Vater nach der Arbeit hilft.', qTr: tr('Jule wants her father to help after work.', 'Jule voudrait que son père l’aide après le travail.'), answer: true, explain: tr('She writes to "Papa": "Kannst du bitte nach der Arbeit helfen?"', 'Elle écrit à « Papa » : « Kannst du bitte nach der Arbeit helfen ? »') },
        ] },
      { id: 'telc-a1-9-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l’annonce a ou l’annonce b.'), texts: [
          { id: 'a1', de: 'a) Babysitter-Service Kunterbunt\nKinder von 1 bis 10 Jahren\nAbends und am Wochenende\n8 Euro pro Stunde\n\nb) Nachhilfe für Schüler\nMathematik und Englisch\nMo–Fr nachmittags\n10 Euro pro Stunde', tr: tr('a) Kunterbunt babysitting service\nChildren from 1 to 10 years\nEvenings and weekends\n8 euros per hour\n\nb) Tutoring for pupils\nMaths and English\nMon–Fri afternoons\n10 euros per hour', 'a) Service de baby-sitting Kunterbunt\nEnfants de 1 à 10 ans\nLe soir et le week-end\n8 euros de l’heure\n\nb) Cours de soutien pour élèves\nMaths et anglais\nLun–ven l’après-midi\n10 euros de l’heure') },
          { id: 'a2', de: 'a) Handy-Doktor\nReparatur in einer Stunde\nDisplay und Akku\nMo–Sa 10–18 Uhr\n\nb) Handyshop Mega\nNeue Handys ab 99 Euro\nMit Vertrag oder ohne', tr: tr('a) Phone Doctor\nRepair within one hour\nScreen and battery\nMon–Sat 10 a.m.–6 p.m.\n\nb) Mega phone shop\nNew mobile phones from 99 euros\nWith or without a contract', 'a) Docteur Portable\nRéparation en une heure\nÉcran et batterie\nLun–sam 10 h–18 h\n\nb) Boutique de portables Mega\nNouveaux portables à partir de 99 euros\nAvec ou sans abonnement') },
          { id: 'a3', de: 'a) Programmierkurs für Jugendliche\nAb 14 Jahren\nFreitag 16–18 Uhr\n\nb) Computerkurs für Senioren\nE-Mail und Internet\nDienstag 10–11.30 Uhr\nStadtbibliothek, 15 Euro', tr: tr('a) Programming course for teenagers\nFrom 14 years\nFriday 4–6 p.m.\n\nb) Computer course for senior citizens\nE-mail and internet\nTuesday 10–11.30 a.m.\nCity library, 15 euros', 'a) Cours de programmation pour adolescents\nÀ partir de 14 ans\nVendredi 16 h–18 h\n\nb) Cours d’informatique pour seniors\nE-mail et Internet\nMardi 10 h–11 h 30\nBibliothèque municipale, 15 euros') },
          { id: 'a4', de: 'a) Bistro Mittag\nMittagsmenü Mo–Fr\n12–14 Uhr, 7,50 Euro\n\nb) Café Pinguin\nFamilienfrühstück sonntags 9–13 Uhr\nSpielecke für Kinder\nKinder bis 10 Jahre: 3 Euro', tr: tr('a) Bistro Mittag\nLunch menu Mon–Fri\n12 noon–2 p.m., 7.50 euros\n\nb) Café Pinguin\nFamily breakfast on Sundays 9 a.m.–1 p.m.\nPlay corner for children\nChildren up to 10 years: 3 euros', 'a) Bistro Mittag\nMenu du midi lun–ven\n12 h–14 h, 7,50 euros\n\nb) Café Pinguin\nPetit-déjeuner en famille le dimanche 9 h–13 h\nCoin jeux pour les enfants\nEnfants jusqu’à 10 ans : 3 euros') },
          { id: 'a5', de: 'a) Telefon Welt\nHandykarte 5 Euro\nAnrufe ins Ausland ab 1 Cent pro Minute\n\nb) Telefon Deutschland\nAnrufe in Deutschland gratis\nAnrufe ins Ausland 29 Cent pro Minute', tr: tr('a) Telefon Welt\nPhone card 5 euros\nCalls abroad from 1 cent per minute\n\nb) Telefon Deutschland\nCalls within Germany free\nCalls abroad 29 cents per minute', 'a) Telefon Welt\nCarte téléphonique 5 euros\nAppels vers l’étranger à partir de 1 centime la minute\n\nb) Telefon Deutschland\nAppels en Allemagne gratuits\nAppels vers l’étranger 29 centimes la minute') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Sie gehen am Samstagabend aus. Sie suchen jemanden für Ihre Tochter (3 Jahre).', qTr: tr('You are going out on Saturday evening. You are looking for someone to look after your daughter (3 years).', 'Vous sortez samedi soir. Vous cherchez quelqu’un pour votre fille (3 ans).'), ...AB, answer: 0, explain: tr('Ad a offers babysitting for children from 1 to 10 in the evening and at weekends.', 'L’annonce a propose du baby-sitting pour les enfants de 1 à 10 ans le soir et le week-end.') },
          { id: 'q7', textId: 'a2', q: 'Das Display von Ihrem Handy ist kaputt. Sie möchten es reparieren lassen.', qTr: tr('The screen of your mobile phone is broken. You want to have it repaired.', 'L’écran de votre portable est cassé. Vous voulez le faire réparer.'), ...AB, answer: 0, explain: tr('Ad a repairs screens and batteries in one hour.', 'L’annonce a répare les écrans et les batteries en une heure.') },
          { id: 'q8', textId: 'a3', q: 'Sie sind 70 Jahre alt und möchten lernen, E-Mails zu schreiben.', qTr: tr('You are 70 years old and want to learn how to write e-mails.', 'Vous avez 70 ans et voulez apprendre à écrire des e-mails.'), ...AB, answer: 1, explain: tr('Ad b is a computer course for senior citizens about e-mail and internet.', 'L’annonce b est un cours d’informatique pour seniors sur l’e-mail et Internet.') },
          { id: 'q9', textId: 'a4', q: 'Sie möchten am Sonntagvormittag mit Ihren Kindern (4 und 6 Jahre) frühstücken.', qTr: tr('You want to have breakfast with your children (4 and 6 years) on Sunday morning.', 'Vous voulez prendre le petit-déjeuner avec vos enfants (4 et 6 ans) dimanche matin.'), ...AB, answer: 1, explain: tr('Café Pinguin has a family breakfast on Sundays with a play corner.', 'Le Café Pinguin propose un petit-déjeuner en famille le dimanche avec un coin jeux.') },
          { id: 'q10', textId: 'a5', q: 'Sie möchten oft mit Ihrer Familie im Ausland telefonieren und wenig bezahlen.', qTr: tr('You want to phone your family abroad often and pay little.', 'Vous voulez souvent téléphoner à votre famille à l’étranger et payer peu.'), ...AB, answer: 0, explain: tr('Calls abroad cost only from 1 cent per minute in ad a (29 cents in ad b).', 'Les appels vers l’étranger coûtent à partir de 1 centime la minute dans l’annonce a (29 centimes dans l’annonce b).') },
        ] },
      { id: 'telc-a1-9-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Schwimmbad\nKinder unter 12 Jahren\nnur mit Erwachsenen!', tr: tr('Swimming pool\nChildren under 12\nonly with adults!', 'Piscine\nEnfants de moins de 12 ans\nseulement avec des adultes !') },
          { id: 's2', de: 'Bitte Handy leise stellen!\nTelefonieren nur im Flur.', tr: tr('Please put your mobile phone on silent!\nPhone calls only in the corridor.', 'Veuillez mettre votre portable en silencieux !\nTéléphoner seulement dans le couloir.') },
          { id: 's3', de: 'Café Lila\nKostenloses WLAN für Gäste\nPasswort an der Kasse', tr: tr('Café Lila\nFree Wi-Fi for guests\nPassword at the till', 'Café Lila\nWi-Fi gratuit pour les clients\nMot de passe à la caisse') },
          { id: 's4', de: 'Spielplatz\nFür Kinder von 2 bis 10 Jahren\nHunde verboten!', tr: tr('Playground\nFor children from 2 to 10 years\nNo dogs!', 'Aire de jeux\nPour les enfants de 2 à 10 ans\nChiens interdits !') },
          { id: 's5', de: 'Kinderarzt Dr. Braun\nSprechstunde: Mo, Di, Do 8–12 Uhr\nMi und Fr 15–18 Uhr\nBitte Termin vereinbaren: 0221 / 77 88 99', tr: tr('Paediatrician Dr Braun\nConsulting hours: Mon, Tue, Thu 8 a.m.–12 noon\nWed and Fri 3–6 p.m.\nPlease make an appointment: 0221 / 77 88 99', 'Pédiatre Dr Braun\nConsultations : lun, mar, jeu 8 h–12 h\nmer et ven 15 h–18 h\nVeuillez prendre rendez-vous : 0221 / 77 88 99') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Ein Kind (10 Jahre) darf allein ins Schwimmbad gehen.', qTr: tr('A child (10 years) may go to the swimming pool alone.', 'Un enfant (10 ans) peut aller seul à la piscine.'), answer: false, explain: tr('Children under 12 are only allowed with adults.', 'Les enfants de moins de 12 ans ne sont admis qu’avec des adultes.') },
          { id: 'q12', textId: 's2', q: 'In diesem Raum darf man nicht telefonieren.', qTr: tr('You may not make phone calls in this room.', 'On ne doit pas téléphoner dans cette salle.'), answer: true, explain: tr('Calls are allowed only in the corridor ("nur im Flur").', 'On ne peut téléphoner que dans le couloir (« nur im Flur »).') },
          { id: 'q13', textId: 's3', q: 'Gäste bekommen das Passwort für das WLAN an der Kasse.', qTr: tr('Guests get the Wi-Fi password at the till.', 'Les clients reçoivent le mot de passe du Wi-Fi à la caisse.'), answer: true, explain: tr('"Passwort an der Kasse."', '« Passwort an der Kasse. »') },
          { id: 'q14', textId: 's4', q: 'Auf dem Spielplatz sind Hunde erlaubt.', qTr: tr('Dogs are allowed on the playground.', 'Les chiens sont autorisés sur l’aire de jeux.'), answer: false, explain: tr('"Hunde verboten" means dogs are forbidden.', '« Hunde verboten » signifie que les chiens sont interdits.') },
          { id: 'q15', textId: 's5', q: 'Am Freitagnachmittag ist die Praxis geöffnet.', qTr: tr('The practice is open on Friday afternoon.', 'Le cabinet est ouvert le vendredi après-midi.'), answer: true, explain: tr('Wed and Fri: 15–18 Uhr, i.e. in the afternoon.', 'Mer et ven : 15 h–18 h, donc l’après-midi.') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-9-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten einen Handyvertrag abschließen. Ihr Bruder liest Ihre Daten vor. Füllen Sie das Formular aus.',
        instructionTr: tr(
          'You want to take out a mobile phone contract. Your brother reads out your details. Fill in the form.',
          'Vous voulez souscrire un abonnement de téléphone portable. Votre frère lit vos informations. Remplissez le formulaire.',
        ),
        source: {
          id: 'info',
          de: 'Mein Name ist Amina Diallo. Ich bin am 12. März 1995 geboren. Meine E-Mail-Adresse ist amina.diallo@mail.de. Ich möchte den Tarif „Basic“. Der Tarif kostet 9 Euro im Monat.',
          tr: tr(
            'My name is Amina Diallo. I was born on 12 March 1995. My e-mail address is amina.diallo@mail.de. I would like the "Basic" plan. The plan costs 9 euros a month.',
            'Je m’appelle Amina Diallo. Je suis née le 12 mars 1995. Mon adresse e-mail est amina.diallo@mail.de. Je voudrais le forfait « Basic ». Le forfait coûte 9 euros par mois.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Diallo'] },
          { id: 'f2', label: 'Vorname', labelTr: tr('First name', 'Prénom'), accept: ['Amina'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: tr('Date of birth', 'Date de naissance'), accept: ['12.03.1995', '12.3.1995', '12. März 1995', '12 März 1995', '12.März 1995', '12/03/1995', '12-03-1995', '12 Marz 1995'] },
          { id: 'f4', label: 'E-Mail', labelTr: tr('E-mail', 'E-mail'), accept: ['amina.diallo@mail.de'] },
          { id: 'f5', label: 'Tarif', labelTr: tr('Plan', 'Forfait'), accept: ['Basic', 'Tarif Basic', '"Basic"', '„Basic“'] },
        ],
      },
      {
        id: 'telc-a1-9-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Ihre Freundin Mia lädt Sie und Ihre Kinder am Sonntag zum Geburtstag ihrer Tochter Lea ein. Schreiben Sie ihr eine Nachricht (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'Your friend Mia invites you and your children to the birthday of her daughter Lea on Sunday. Write her a message (about 30 words). Write about all three points.',
          'Votre amie Mia vous invite, vous et vos enfants, à l’anniversaire de sa fille Lea dimanche. Écrivez-lui un message (environ 30 mots). Traitez les trois points.',
        ),
        points: [
          { id: 'p1', de: 'Danke für die Einladung und Zusage', tr: tr('Thank her for the invitation and accept', 'Remercier pour l’invitation et accepter'), keywords: ['danke', 'einladung', 'gern'] },
          { id: 'p2', de: 'Frage: Wann beginnt die Feier?', tr: tr('Question: when does the party start?', 'Question : à quelle heure commence la fête ?'), keywords: ['wann', 'beginnt', 'fängt', 'uhr'] },
          { id: 'p3', de: 'Frage: Geschenk oder etwas mitbringen', tr: tr('Question: present or something to bring', 'Question : cadeau ou quelque chose à apporter'), keywords: ['mitbring', 'geschenk', 'kuchen'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Liebe Mia,\n\nvielen Dank für die Einladung. Wir kommen gern zum Geburtstag von Lea. Wann beginnt die Feier? Und was soll ich mitbringen? Hat Lea einen Wunsch für ein Geschenk?\n\nLiebe Grüße\nAnna',
          tr: tr(
            'Dear Mia,\n\nThank you very much for the invitation. We will gladly come to Lea’s birthday. When does the party start? And what should I bring? Does Lea have a wish for a present?\n\nBest wishes\nAnna',
            'Chère Mia,\n\nmerci beaucoup pour l’invitation. Nous venons volontiers à l’anniversaire de Lea. À quelle heure commence la fête ? Et que dois-je apporter ? Lea a-t-elle une idée de cadeau ?\n\nAmitiés\nAnna',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-9-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, country, town, languages, job, hobby.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, pays, ville, langues, profession, loisir.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Mein Name ist Amira Haddad. Das schreibt man H-A-D-D-A-D.', sampleTr: tr('My name is Amira Haddad. That is spelled H-A-D-D-A-D.', 'Je m’appelle Amira Haddad. Ça s’écrit H-A-D-D-A-D.') },
          { id: 'p1b', cue: 'Land', cueTr: tr('Country', 'Pays'), sample: 'Ich komme aus Marokko, aus der Stadt Casablanca.', sampleTr: tr('I come from Morocco, from the city of Casablanca.', 'Je viens du Maroc, de la ville de Casablanca.') },
          { id: 'p1c', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Ich wohne jetzt in Köln. Meine Adresse ist Lindenstraße 8.', sampleTr: tr('I now live in Cologne. My address is Lindenstraße 8.', 'J’habite maintenant à Cologne. Mon adresse est Lindenstraße 8.') },
          { id: 'p1d', cue: 'Sprachen', cueTr: tr('Languages', 'Langues'), sample: 'Ich spreche Arabisch, Französisch und ein bisschen Deutsch.', sampleTr: tr('I speak Arabic, French and a little German.', 'Je parle arabe, français et un peu allemand.') },
          { id: 'p1e', cue: 'Beruf', cueTr: tr('Job', 'Profession'), sample: 'Ich bin Krankenschwester. Ich arbeite in einem Krankenhaus.', sampleTr: tr('I am a nurse. I work in a hospital.', 'Je suis infirmière. Je travaille dans un hôpital.') },
          { id: 'p1f', cue: 'Hobby', cueTr: tr('Hobby', 'Loisir'), sample: 'Mein Hobby ist Kochen. Ich koche gern mit meinen zwei Kindern.', sampleTr: tr('My hobby is cooking. I like cooking with my two children.', 'Mon loisir est la cuisine. J’aime cuisiner avec mes deux enfants.') },
        ],
      },
      {
        id: 'telc-a1-9-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Familie und Handy. Sie ziehen eine Wortkarte. Stellen Sie Ihrem Partner eine Frage. Er antwortet. Dann tauschen Sie.',
        instructionTr: tr('Topic: family and mobile phone. You draw a word card. Ask your partner a question. They answer. Then you swap.', 'Thème : famille et téléphone portable. Vous tirez une carte-mot. Posez une question à votre partenaire. Il répond. Puis vous échangez.'),
        prompts: [
          { id: 'p2a', cue: 'Geschwister', cueTr: tr('Siblings', 'Frères et sœurs'), sample: 'Hast du Geschwister? – Ja, ich habe einen Bruder und eine Schwester.', sampleTr: tr('Do you have siblings? – Yes, I have a brother and a sister.', 'As-tu des frères et sœurs ? – Oui, j’ai un frère et une sœur.'), tip: tr('"Hast du …?" starts with the verb; answer "Ja, ich habe …".', '« Hast du …? » commence par le verbe ; réponse « Ja, ich habe … ».') },
          { id: 'p2b', cue: 'Kinder', cueTr: tr('Children', 'Enfants'), sample: 'Wie alt sind deine Kinder? – Mein Sohn ist fünf und meine Tochter ist acht.', sampleTr: tr('How old are your children? – My son is five and my daughter is eight.', 'Quel âge ont tes enfants ? – Mon fils a cinq ans et ma fille a huit ans.') },
          { id: 'p2c', cue: 'Eltern', cueTr: tr('Parents', 'Parents'), sample: 'Wo wohnen deine Eltern? – Sie wohnen in Frankreich, in Lyon.', sampleTr: tr('Where do your parents live? – They live in France, in Lyon.', 'Où habitent tes parents ? – Ils habitent en France, à Lyon.') },
          { id: 'p2d', cue: 'Geburtstag', cueTr: tr('Birthday', 'Anniversaire'), sample: 'Wann hast du Geburtstag? – Am 14. Mai.', sampleTr: tr('When is your birthday? – On 14 May.', 'Quand est ton anniversaire ? – Le 14 mai.') },
          { id: 'p2e', cue: 'Haustier', cueTr: tr('Pet', 'Animal de compagnie'), sample: 'Hast du ein Haustier? – Ja, ich habe eine Katze. Sie heißt Mimi.', sampleTr: tr('Do you have a pet? – Yes, I have a cat. Her name is Mimi.', 'As-tu un animal de compagnie ? – Oui, j’ai un chat. Elle s’appelle Mimi.') },
          { id: 'p2f', cue: 'Handy', cueTr: tr('Mobile phone', 'Téléphone portable'), sample: 'Wie oft telefonierst du mit deiner Familie? – Jeden Sonntag.', sampleTr: tr('How often do you phone your family? – Every Sunday.', 'À quelle fréquence téléphones-tu à ta famille ? – Tous les dimanches.') },
          { id: 'p2g', cue: 'Internet', cueTr: tr('Internet', 'Internet'), sample: 'Was machst du im Internet? – Ich lese Nachrichten und schreibe E-Mails.', sampleTr: tr('What do you do on the internet? – I read the news and write e-mails.', 'Que fais-tu sur Internet ? – Je lis les nouvelles et j’écris des e-mails.') },
        ],
      },
      {
        id: 'telc-a1-9-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. Your partner reacts.', 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: ein Baby schläft, das Radio ist laut', cueTr: tr('Picture: a baby is sleeping, the radio is loud', 'Image : un bébé dort, la radio est forte'), sample: 'Können Sie bitte das Radio leiser machen? – Ja, natürlich. Entschuldigung.', sampleTr: tr('Could you turn the radio down, please? – Yes, of course. Sorry.', 'Pouvez-vous baisser la radio, s’il vous plaît ? – Oui, bien sûr. Excusez-moi.'), tip: tr('"leiser" = quieter, "lauter" = louder.', '« leiser » = plus bas, « lauter » = plus fort.') },
          { id: 'p3b', cue: 'Bild: ein Handy mit leerem Akku', cueTr: tr('Picture: a mobile phone with an empty battery', 'Image : un portable avec une batterie vide'), sample: 'Haben Sie ein Ladekabel für mich? Mein Handy ist leer. – Ja, hier bitte.', sampleTr: tr('Do you have a charger for me? My phone is dead. – Yes, here you are.', 'Avez-vous un chargeur pour moi ? Mon portable est vide. – Oui, voilà.') },
          { id: 'p3c', cue: 'Bild: ein Laptop, kein WLAN', cueTr: tr('Picture: a laptop, no Wi-Fi', 'Image : un ordinateur portable, pas de Wi-Fi'), sample: 'Können Sie mir bitte das Passwort für das WLAN geben? – Gern, es steht hier.', sampleTr: tr('Could you give me the Wi-Fi password, please? – Gladly, it is written here.', 'Pouvez-vous me donner le mot de passe du Wi-Fi, s’il vous plaît ? – Volontiers, il est écrit ici.') },
          { id: 'p3d', cue: 'Bild: eine Frau mit Kinderwagen vor einer Treppe', cueTr: tr('Picture: a woman with a pushchair in front of stairs', 'Image : une femme avec une poussette devant un escalier'), sample: 'Können Sie mir bitte helfen? Der Kinderwagen ist schwer. – Ja, gern.', sampleTr: tr('Can you help me, please? The pushchair is heavy. – Yes, gladly.', 'Pouvez-vous m’aider, s’il vous plaît ? La poussette est lourde. – Oui, volontiers.') },
          { id: 'p3e', cue: 'Bild: eine Familie vor dem Zoo', cueTr: tr('Picture: a family in front of the zoo', 'Image : une famille devant le zoo'), sample: 'Entschuldigung, können Sie bitte ein Foto von uns machen? – Ja, gern. Bitte lächeln!', sampleTr: tr('Excuse me, could you take a photo of us, please? – Yes, gladly. Smile, please!', 'Excusez-moi, pouvez-vous nous prendre en photo, s’il vous plaît ? – Oui, volontiers. Souriez !') },
          { id: 'p3f', cue: 'Bild: eine Frau am Telefon, sie spricht sehr schnell', cueTr: tr('Picture: a woman on the phone, speaking very fast', 'Image : une femme au téléphone, elle parle très vite'), sample: 'Sprechen Sie bitte langsamer. Ich verstehe Sie nicht gut. – Ja, kein Problem.', sampleTr: tr('Please speak more slowly. I do not understand you well. – Yes, no problem.', 'Parlez plus lentement, s’il vous plaît. Je ne vous comprends pas bien. – Oui, pas de problème.') },
          { id: 'p3g', cue: 'Bild: eine Geburtstagstorte', cueTr: tr('Picture: a birthday cake', 'Image : un gâteau d’anniversaire'), sample: 'Können Sie mir bitte ein Messer geben? – Hier, bitte schön.', sampleTr: tr('Could you give me a knife, please? – Here you are.', 'Pouvez-vous me donner un couteau, s’il vous plaît ? – Voilà.') },
        ],
      },
    ],
  },

  // ───────────────────────── Set 10: Wetter, Ausflug, Bibliothek, Post, Bank ─────────────────────────
  {
    id: 'telc-a1-10',
    board: 'telc',
    level: 'A1',
    number: 10,
    lesen: [
      { id: 'telc-a1-10-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Hallo Tom,\nam Sonntag fahren wir an den See. Das Wetter soll schön werden, 24 Grad. Bring bitte Badehose und Sonnencreme mit. Wir treffen uns um 9 Uhr am Bahnhof.\nMax', tr: tr('Hi Tom,\nOn Sunday we are going to the lake. The weather is supposed to be nice, 24 degrees. Please bring swimming trunks and sun cream. We are meeting at the station at 9 a.m.\nMax', 'Salut Tom,\ndimanche, nous allons au lac. Il doit faire beau, 24 degrés. Apporte ton maillot de bain et de la crème solaire, s’il te plaît. On se retrouve à la gare à 9 h.\nMax') },
          { id: 'm2', de: 'Liebe Frau Peters,\nder Ausflug am Samstag fällt aus. Es regnet den ganzen Tag. Wir fahren am nächsten Samstag. Bitte kommen Sie wieder um 8 Uhr zum Parkplatz.\nHerr Lang', tr: tr('Dear Mrs Peters,\nThe trip on Saturday is cancelled. It is raining all day. We will go next Saturday. Please come to the car park again at 8 a.m.\nMr Lang', 'Chère Madame Peters,\nla sortie de samedi est annulée. Il pleut toute la journée. Nous partons samedi prochain. Venez de nouveau au parking à 8 h, s’il vous plaît.\nMonsieur Lang') },
          { id: 'm3', de: 'Hallo Karla,\nich bin in der Bibliothek und lerne für die Prüfung. Die Bibliothek schließt heute um 20 Uhr. Komm doch auch! Ich habe dein Buch dabei.\nIna', tr: tr('Hi Karla,\nI am at the library studying for the exam. The library closes at 8 p.m. today. Why don’t you come too! I have your book with me.\nIna', 'Salut Karla,\nje suis à la bibliothèque et je révise pour l’examen. La bibliothèque ferme à 20 h aujourd’hui. Viens aussi ! J’ai ton livre avec moi.\nIna') },
          { id: 'm4', de: 'Sehr geehrter Herr Yilmaz,\nIhr Paket liegt in der Postfiliale in der Marktstraße. Sie können es von Montag bis Freitag zwischen 9 und 17 Uhr abholen. Bitte bringen Sie Ihren Ausweis mit.\nIhre Post', tr: tr('Dear Mr Yilmaz,\nYour parcel is at the post office in Marktstraße. You can collect it Monday to Friday between 9 a.m. and 5 p.m. Please bring your ID.\nYour post office', 'Cher Monsieur Yilmaz,\nvotre colis est au bureau de poste de la Marktstraße. Vous pouvez le retirer du lundi au vendredi entre 9 h et 17 h. Apportez votre pièce d’identité, s’il vous plaît.\nVotre poste') },
          { id: 'm5', de: 'Hallo Papa,\nich war bei der Bank. Mein Konto ist jetzt offen. Die Karte kommt in einer Woche mit der Post. Das Konto kostet nichts. Ich rufe dich heute Abend an.\nSofia', tr: tr('Hi Dad,\nI was at the bank. My account is open now. The card will arrive by post in a week. The account costs nothing. I will call you this evening.\nSofia', 'Salut papa,\nj’étais à la banque. Mon compte est ouvert maintenant. La carte arrive par la poste dans une semaine. Le compte ne coûte rien. Je t’appelle ce soir.\nSofia') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Max und Tom treffen sich um 9 Uhr am Bahnhof.', qTr: tr('Max and Tom meet at the station at 9 a.m.', 'Max et Tom se retrouvent à la gare à 9 h.'), answer: true, explain: tr('"Wir treffen uns um 9 Uhr am Bahnhof."', '« Wir treffen uns um 9 Uhr am Bahnhof. »') },
          { id: 'q2', textId: 'm2', q: 'Der Ausflug findet am Samstag statt.', qTr: tr('The trip takes place on Saturday.', 'La sortie a lieu samedi.'), answer: false, explain: tr('"Der Ausflug am Samstag fällt aus" – it is cancelled because of the rain.', '« Der Ausflug am Samstag fällt aus » – elle est annulée à cause de la pluie.') },
          { id: 'q3', textId: 'm3', q: 'Die Bibliothek schließt heute um 18 Uhr.', qTr: tr('The library closes at 6 p.m. today.', 'La bibliothèque ferme à 18 h aujourd’hui.'), answer: false, explain: tr('"Die Bibliothek schließt heute um 20 Uhr."', '« Die Bibliothek schließt heute um 20 Uhr. »') },
          { id: 'q4', textId: 'm4', q: 'Herr Yilmaz muss seinen Ausweis mitbringen.', qTr: tr('Mr Yilmaz has to bring his ID.', 'Monsieur Yilmaz doit apporter sa pièce d’identité.'), answer: true, explain: tr('"Bitte bringen Sie Ihren Ausweis mit."', '« Bitte bringen Sie Ihren Ausweis mit. »') },
          { id: 'q5', textId: 'm5', q: 'Sofia hat ihre Bankkarte schon.', qTr: tr('Sofia already has her bank card.', 'Sofia a déjà sa carte bancaire.'), answer: false, explain: tr('The card arrives by post in a week ("kommt in einer Woche").', 'La carte arrive par la poste dans une semaine (« kommt in einer Woche »).') },
        ] },
      { id: 'telc-a1-10-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l’annonce a ou l’annonce b.'), texts: [
          { id: 'a1', de: 'a) Naturpark Grünwald\nWandertag am Samstag\nTreffpunkt 10 Uhr\nBitte feste Schuhe!\n\nb) Kindermuseum\nSpielen und Experimente\nSa und So 10–17 Uhr\nKinder 4 Euro', tr: tr('a) Grünwald nature park\nHiking day on Saturday\nMeeting point 10 a.m.\nPlease wear sturdy shoes!\n\nb) Children’s museum\nPlaying and experiments\nSat and Sun 10 a.m.–5 p.m.\nChildren 4 euros', 'a) Parc naturel Grünwald\nJournée de randonnée samedi\nRendez-vous à 10 h\nChaussures solides, s’il vous plaît !\n\nb) Musée des enfants\nJeux et expériences\nSam et dim 10 h–17 h\nEnfants 4 euros') },
          { id: 'a2', de: 'a) Stadtbibliothek\nBücher, Filme und Zeitschriften ausleihen\nBücher in leichter Sprache\nJahreskarte 10 Euro\n\nb) Buchhandlung Lesezeit\nNeue Bücher kaufen\nRomane und Krimis\nMo–Sa 9–19 Uhr', tr: tr('a) City library\nBorrow books, films and magazines\nBooks in easy language\nAnnual card 10 euros\n\nb) Lesezeit bookshop\nBuy new books\nNovels and thrillers\nMon–Sat 9 a.m.–7 p.m.', 'a) Bibliothèque municipale\nEmprunter des livres, des films et des magazines\nLivres en langage simple\nCarte annuelle 10 euros\n\nb) Librairie Lesezeit\nAcheter des livres neufs\nRomans et polars\nLun–sam 9 h–19 h') },
          { id: 'a3', de: 'a) Schreibwaren Krämer\nBriefmarken, Postkarten\nStifte und Hefte\n\nb) Paketshop Weltweit\nPakete nach Frankreich, Italien und Spanien\nab 9 Euro\nMo–Fr 9–18 Uhr', tr: tr('a) Krämer stationery shop\nStamps, postcards\nPens and exercise books\n\nb) Weltweit parcel shop\nParcels to France, Italy and Spain\nfrom 9 euros\nMon–Fri 9 a.m.–6 p.m.', 'a) Papeterie Krämer\nTimbres, cartes postales\nStylos et cahiers\n\nb) Weltweit, point colis\nColis pour la France, l’Italie et l’Espagne\nà partir de 9 euros\nLun–ven 9 h–18 h') },
          { id: 'a4', de: 'a) Sparkasse Mitte\nGirokonto gratis für Studenten\nund Auszubildende\nBeratung Mo–Fr\n\nb) Euro-Bank\nGirokonto 8 Euro im Monat\nMit Kreditkarte', tr: tr('a) Sparkasse Mitte\nFree current account for students\nand trainees\nAdvice Mon–Fri\n\nb) Euro-Bank\nCurrent account 8 euros a month\nWith credit card', 'a) Sparkasse Mitte\nCompte courant gratuit pour les étudiants\net les apprentis\nConseil lun–ven\n\nb) Euro-Bank\nCompte courant 8 euros par mois\nAvec carte de crédit') },
          { id: 'a5', de: 'a) Autovermietung Schnell\nKleinwagen ab 29 Euro pro Tag\nAuch am Sonntag\n\nb) Fahrradverleih am Fluss\nFahrräder und Kinderräder\n8 Euro pro Tag\nTäglich 9–18 Uhr', tr: tr('a) Schnell car rental\nSmall cars from 29 euros per day\nAlso on Sundays\n\nb) Bike hire by the river\nBikes and children’s bikes\n8 euros per day\nDaily 9 a.m.–6 p.m.', 'a) Location de voitures Schnell\nPetites voitures à partir de 29 euros par jour\nAussi le dimanche\n\nb) Location de vélos au bord de la rivière\nVélos et vélos pour enfants\n8 euros par jour\nTous les jours 9 h–18 h') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Es regnet am Samstag. Sie möchten mit Ihren Kindern drinnen etwas machen.', qTr: tr('It is raining on Saturday. You want to do something indoors with your children.', 'Il pleut samedi. Vous voulez faire quelque chose à l’intérieur avec vos enfants.'), ...AB, answer: 1, explain: tr('The children’s museum is indoors; ad a is a hike outdoors.', 'Le musée des enfants est à l’intérieur ; l’annonce a est une randonnée en plein air.') },
          { id: 'q7', textId: 'a2', q: 'Sie möchten ein Buch auf Deutsch für Anfänger ausleihen.', qTr: tr('You want to borrow a book in German for beginners.', 'Vous voulez emprunter un livre en allemand pour débutants.'), ...AB, answer: 0, explain: tr('The library lends books in easy language; the bookshop only sells.', 'La bibliothèque prête des livres en langage simple ; la librairie ne fait que vendre.') },
          { id: 'q8', textId: 'a3', q: 'Sie möchten ein Paket nach Frankreich schicken.', qTr: tr('You want to send a parcel to France.', 'Vous voulez envoyer un colis en France.'), ...AB, answer: 1, explain: tr('Ad b sends parcels to France.', 'L’annonce b envoie des colis en France.') },
          { id: 'q9', textId: 'a4', q: 'Sie sind Student und möchten ein Konto. Sie wollen nichts bezahlen.', qTr: tr('You are a student and want an account. You do not want to pay anything.', 'Vous êtes étudiant et voulez un compte. Vous ne voulez rien payer.'), ...AB, answer: 0, explain: tr('The current account in ad a is free for students.', 'Le compte courant de l’annonce a est gratuit pour les étudiants.') },
          { id: 'q10', textId: 'a5', q: 'Sie möchten am Sonntag mit der Familie Rad fahren. Sie brauchen Fahrräder.', qTr: tr('You want to go cycling with your family on Sunday. You need bikes.', 'Vous voulez faire du vélo en famille dimanche. Vous avez besoin de vélos.'), ...AB, answer: 1, explain: tr('Ad b hires out bikes and children’s bikes every day.', 'L’annonce b loue des vélos et des vélos pour enfants tous les jours.') },
        ] },
      { id: 'telc-a1-10-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Stadtbibliothek\nBücher bitte nach 4 Wochen zurückgeben.\nRückgabe auch am Wochenende im Briefkasten.', tr: tr('City library\nPlease return books after 4 weeks.\nReturns also at the weekend in the letterbox.', 'Bibliothèque municipale\nVeuillez rendre les livres après 4 semaines.\nRetour aussi le week-end dans la boîte aux lettres.') },
          { id: 's2', de: 'Wetter\nHeute: Vormittag Regen, nachmittags Sonne, 18 Grad.\nMorgen: Sonne, 22 Grad.', tr: tr('Weather\nToday: rain in the morning, sun in the afternoon, 18 degrees.\nTomorrow: sun, 22 degrees.', 'Météo\nAujourd’hui : pluie le matin, soleil l’après-midi, 18 degrés.\nDemain : soleil, 22 degrés.') },
          { id: 's3', de: 'Postfiliale\nPakete nur bis 16 Uhr\nBriefmarken am Automaten rund um die Uhr', tr: tr('Post office\nParcels only until 4 p.m.\nStamps from the machine around the clock', 'Bureau de poste\nColis seulement jusqu’à 16 h\nTimbres au distributeur 24 h sur 24') },
          { id: 's4', de: 'Achtung!\nGeldautomat außer Betrieb.\nBitte benutzen Sie den Automaten im Bahnhof.', tr: tr('Attention!\nCash machine out of order.\nPlease use the machine at the station.', 'Attention !\nDistributeur de billets hors service.\nVeuillez utiliser le distributeur de la gare.') },
          { id: 's5', de: 'Naturpark\nPicknick erlaubt\nFeuer verboten\nMüll bitte mitnehmen', tr: tr('Nature park\nPicnics allowed\nNo fires\nPlease take your rubbish with you', 'Parc naturel\nPique-nique autorisé\nFeu interdit\nEmportez vos déchets, s’il vous plaît') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Man darf die Bücher sechs Wochen behalten.', qTr: tr('You may keep the books for six weeks.', 'On peut garder les livres six semaines.'), answer: false, explain: tr('Books must be returned after 4 weeks.', 'Les livres doivent être rendus après 4 semaines.') },
          { id: 'q12', textId: 's2', q: 'Morgen regnet es.', qTr: tr('It will rain tomorrow.', 'Il pleuvra demain.'), answer: false, explain: tr('Rain is only today in the morning; tomorrow there will be sun.', 'La pluie est seulement pour ce matin ; demain, il y aura du soleil.') },
          { id: 'q13', textId: 's3', q: 'Man kann Briefmarken auch am Abend kaufen.', qTr: tr('You can also buy stamps in the evening.', 'On peut aussi acheter des timbres le soir.'), answer: true, explain: tr('Stamps are available at the machine "rund um die Uhr" (around the clock).', 'Les timbres sont disponibles au distributeur « rund um die Uhr » (24 h sur 24).') },
          { id: 'q14', textId: 's4', q: 'Der Geldautomat funktioniert nicht.', qTr: tr('The cash machine is not working.', 'Le distributeur de billets ne fonctionne pas.'), answer: true, explain: tr('"Außer Betrieb" means out of order.', '« Außer Betrieb » signifie hors service.') },
          { id: 'q15', textId: 's5', q: 'Man soll den Müll mitnehmen.', qTr: tr('You should take your rubbish with you.', 'Il faut emporter ses déchets.'), answer: true, explain: tr('"Müll bitte mitnehmen."', '« Müll bitte mitnehmen. »') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-10-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten bei der Bank ein Konto eröffnen. Ihr Freund liest Ihre Daten vor. Füllen Sie das Formular aus.',
        instructionTr: tr(
          'You want to open an account at the bank. Your friend reads out your details. Fill in the form.',
          'Vous voulez ouvrir un compte à la banque. Votre ami lit vos informations. Remplissez le formulaire.',
        ),
        source: {
          id: 'info',
          de: 'Ich heiße Pavel Horak. Ich bin am 5. Juni 1988 geboren. Ich wohne in Dresden, in der Gartenstraße 12. Ich arbeite als Koch.',
          tr: tr(
            'My name is Pavel Horak. I was born on 5 June 1988. I live in Dresden, at Gartenstraße 12. I work as a cook.',
            'Je m’appelle Pavel Horak. Je suis né le 5 juin 1988. J’habite à Dresde, au 12 Gartenstraße. Je travaille comme cuisinier.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Horak'] },
          { id: 'f2', label: 'Vorname', labelTr: tr('First name', 'Prénom'), accept: ['Pavel'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: tr('Date of birth', 'Date de naissance'), accept: ['05.06.1988', '5.6.1988', '5.06.1988', '05.6.1988', '5. Juni 1988', '5 Juni 1988', '05. Juni 1988', '5.Juni 1988', '05/06/1988', '05-06-1988'] },
          { id: 'f4', label: 'Straße und Hausnummer', labelTr: tr('Street and house number', 'Rue et numéro'), accept: ['Gartenstraße 12', 'Gartenstrasse 12', 'Gartenstr. 12', 'Gartenstr 12', 'Gartenstraße, 12', 'Gartenstraße12'] },
          { id: 'f5', label: 'Beruf', labelTr: tr('Occupation', 'Profession'), accept: ['Koch'] },
        ],
      },
      {
        id: 'telc-a1-10-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie haben Ihren Bibliotheksausweis verloren. Schreiben Sie eine E-Mail an die Stadtbibliothek (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'You have lost your library card. Write an e-mail to the city library (about 30 words). Write about all three points.',
          'Vous avez perdu votre carte de bibliothèque. Écrivez un e-mail à la bibliothèque municipale (environ 30 mots). Traitez les trois points.',
        ),
        points: [
          { id: 'p1', de: 'Was ist passiert? (Ausweis verloren)', tr: tr('What happened? (card lost)', 'Que s’est-il passé ? (carte perdue)'), keywords: ['verloren', 'weg', 'ausweis'] },
          { id: 'p2', de: 'Wunsch: neuer Ausweis', tr: tr('Request: new card', 'Demande : nouvelle carte'), keywords: ['neu', 'möchte', 'brauche', 'bitte'] },
          { id: 'p3', de: 'Frage: Preis oder Öffnungszeit', tr: tr('Question: price or opening hours', 'Question : prix ou horaires'), keywords: ['kostet', 'euro', 'wann', 'geöffnet', 'öffnungszeit'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Sehr geehrte Damen und Herren,\n\nich habe meinen Bibliotheksausweis verloren. Ich möchte gern einen neuen Ausweis haben. Was kostet er? Und wann ist die Bibliothek am Samstag geöffnet?\n\nVielen Dank und freundliche Grüße\nPavel Horak',
          tr: tr(
            'Dear Sir or Madam,\n\nI have lost my library card. I would like to have a new card. How much does it cost? And when is the library open on Saturday?\n\nThank you very much and kind regards\nPavel Horak',
            'Mesdames, Messieurs,\n\nj’ai perdu ma carte de bibliothèque. Je voudrais avoir une nouvelle carte. Combien coûte-t-elle ? Et quand la bibliothèque est-elle ouverte le samedi ?\n\nMerci beaucoup et cordialement\nPavel Horak',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-10-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, country, town, languages, job, hobby.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, pays, ville, langues, profession, loisir.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Ich heiße Marek Nowak. Das schreibt man N-O-W-A-K.', sampleTr: tr('My name is Marek Nowak. That is spelled N-O-W-A-K.', 'Je m’appelle Marek Nowak. Ça s’écrit N-O-W-A-K.') },
          { id: 'p1b', cue: 'Land', cueTr: tr('Country', 'Pays'), sample: 'Ich komme aus Polen. Meine Heimatstadt ist Krakau.', sampleTr: tr('I come from Poland. My home town is Kraków.', 'Je viens de Pologne. Ma ville natale est Cracovie.') },
          { id: 'p1c', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Ich wohne seit einem Jahr in Dresden.', sampleTr: tr('I have been living in Dresden for a year.', 'J’habite à Dresde depuis un an.') },
          { id: 'p1d', cue: 'Sprachen', cueTr: tr('Languages', 'Langues'), sample: 'Ich spreche Polnisch, Englisch und ein wenig Deutsch.', sampleTr: tr('I speak Polish, English and a little German.', 'Je parle polonais, anglais et un peu allemand.') },
          { id: 'p1e', cue: 'Beruf', cueTr: tr('Job', 'Profession'), sample: 'Ich bin Elektriker. Ich arbeite bei einer kleinen Firma.', sampleTr: tr('I am an electrician. I work for a small company.', 'Je suis électricien. Je travaille dans une petite entreprise.') },
          { id: 'p1f', cue: 'Hobby', cueTr: tr('Hobby', 'Loisir'), sample: 'Am Wochenende wandere ich gern in den Bergen.', sampleTr: tr('At the weekend I like hiking in the mountains.', 'Le week-end, j’aime faire de la randonnée en montagne.') },
        ],
      },
      {
        id: 'telc-a1-10-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Wetter, Ausflug und Dienstleistungen. Sie ziehen eine Wortkarte. Stellen Sie Ihrem Partner eine Frage. Er antwortet. Dann tauschen Sie.',
        instructionTr: tr('Topic: weather, trips and services. You draw a word card. Ask your partner a question. They answer. Then you swap.', 'Thème : météo, sorties et services. Vous tirez une carte-mot. Posez une question à votre partenaire. Il répond. Puis vous échangez.'),
        prompts: [
          { id: 'p2a', cue: 'Wetter', cueTr: tr('Weather', 'Météo'), sample: 'Wie ist das Wetter in deiner Heimat? – Im Sommer ist es sehr heiß, im Winter regnet es oft.', sampleTr: tr('What is the weather like in your home country? – In summer it is very hot, in winter it often rains.', 'Quel temps fait-il dans ton pays ? – En été, il fait très chaud, en hiver, il pleut souvent.'), tip: tr('"Wie ist das Wetter?" – "Es ist warm / kalt / sonnig."', '« Wie ist das Wetter ? » – « Es ist warm / kalt / sonnig. »') },
          { id: 'p2b', cue: 'Jahreszeit', cueTr: tr('Season', 'Saison'), sample: 'Welche Jahreszeit magst du am liebsten? – Den Herbst, weil es nicht zu heiß ist.', sampleTr: tr('Which season do you like best? – Autumn, because it is not too hot.', 'Quelle saison préfères-tu ? – L’automne, parce qu’il ne fait pas trop chaud.') },
          { id: 'p2c', cue: 'Ausflug', cueTr: tr('Trip', 'Sortie'), sample: 'Wohin machst du am Sonntag einen Ausflug? – Ich fahre mit dem Fahrrad an den See.', sampleTr: tr('Where are you going on a trip on Sunday? – I am cycling to the lake.', 'Où fais-tu une sortie dimanche ? – Je vais au lac à vélo.') },
          { id: 'p2d', cue: 'Bibliothek', cueTr: tr('Library', 'Bibliothèque'), sample: 'Gehst du oft in die Bibliothek? – Ja, einmal pro Woche. Ich leihe deutsche Bücher aus.', sampleTr: tr('Do you often go to the library? – Yes, once a week. I borrow German books.', 'Vas-tu souvent à la bibliothèque ? – Oui, une fois par semaine. J’emprunte des livres en allemand.') },
          { id: 'p2e', cue: 'Post', cueTr: tr('Post office', 'Poste'), sample: 'Wann ist die Post geöffnet? – Von 9 bis 18 Uhr, am Samstag bis 12 Uhr.', sampleTr: tr('When is the post office open? – From 9 to 6, on Saturday until 12.', 'Quand la poste est-elle ouverte ? – De 9 h à 18 h, le samedi jusqu’à 12 h.') },
          { id: 'p2f', cue: 'Bank', cueTr: tr('Bank', 'Banque'), sample: 'Hast du ein Konto bei einer deutschen Bank? – Ja, bei der Sparkasse.', sampleTr: tr('Do you have an account at a German bank? – Yes, at the Sparkasse.', 'As-tu un compte dans une banque allemande ? – Oui, à la Sparkasse.') },
          { id: 'p2g', cue: 'Urlaub', cueTr: tr('Holiday', 'Vacances'), sample: 'Wo machst du im Sommer Urlaub? – Ich fahre mit meiner Familie nach Italien.', sampleTr: tr('Where are you going on holiday in summer? – I am going to Italy with my family.', 'Où pars-tu en vacances cet été ? – Je vais en Italie avec ma famille.') },
        ],
      },
      {
        id: 'telc-a1-10-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. Your partner reacts.', 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: ein Postschalter, ein Brief', cueTr: tr('Picture: a post office counter, a letter', 'Image : un guichet de poste, une lettre'), sample: 'Können Sie mir bitte zwei Briefmarken geben? – Ja, bitte. Das macht 1,60 Euro.', sampleTr: tr('Could you give me two stamps, please? – Yes, here you are. That is 1.60 euros.', 'Pouvez-vous me donner deux timbres, s’il vous plaît ? – Oui, voilà. Ça fait 1,60 euro.'), tip: tr('Polite request: "Können Sie mir bitte … geben?"', 'Demande polie : « Können Sie mir bitte … geben ? »') },
          { id: 'p3b', cue: 'Bild: Bücher in der Bibliothek', cueTr: tr('Picture: books in the library', 'Image : des livres à la bibliothèque'), sample: 'Können Sie mir bitte ein Buch für Anfänger zeigen? – Gern, dort links.', sampleTr: tr('Could you show me a book for beginners, please? – Gladly, over there on the left.', 'Pouvez-vous me montrer un livre pour débutants, s’il vous plaît ? – Volontiers, là-bas à gauche.') },
          { id: 'p3c', cue: 'Bild: ein Geldautomat', cueTr: tr('Picture: a cash machine', 'Image : un distributeur de billets'), sample: 'Entschuldigung, können Sie mir helfen? Wo ist der Geldautomat? – Dort, neben dem Eingang.', sampleTr: tr('Excuse me, can you help me? Where is the cash machine? – Over there, next to the entrance.', 'Excusez-moi, pouvez-vous m’aider ? Où est le distributeur de billets ? – Là-bas, à côté de l’entrée.') },
          { id: 'p3d', cue: 'Bild: Regen, ein Mann ohne Schirm', cueTr: tr('Picture: rain, a man without an umbrella', 'Image : de la pluie, un homme sans parapluie'), sample: 'Kannst du mir bitte deinen Regenschirm leihen? – Ja, hier. Aber bring ihn morgen zurück.', sampleTr: tr('Can you lend me your umbrella, please? – Yes, here. But bring it back tomorrow.', 'Peux-tu me prêter ton parapluie, s’il te plaît ? – Oui, voilà. Mais rends-le demain.') },
          { id: 'p3e', cue: 'Bild: ein Bankschalter, Geld', cueTr: tr('Picture: a bank counter, money', 'Image : un guichet de banque, de l’argent'), sample: 'Ich möchte bitte Geld wechseln. Können Sie mir helfen? – Ja, gern. Wie viel Euro möchten Sie?', sampleTr: tr('I would like to change some money, please. Can you help me? – Yes, gladly. How many euros would you like?', 'Je voudrais changer de l’argent, s’il vous plaît. Pouvez-vous m’aider ? – Oui, volontiers. Combien d’euros voulez-vous ?') },
          { id: 'p3f', cue: 'Bild: eine Bushaltestelle, ein See', cueTr: tr('Picture: a bus stop, a lake', 'Image : un arrêt de bus, un lac'), sample: 'Können Sie mir bitte sagen, wo der Bus zum See abfährt? – Ja, an Haltestelle 3.', sampleTr: tr('Could you tell me where the bus to the lake leaves from, please? – Yes, from stop 3.', 'Pouvez-vous me dire d’où part le bus pour le lac, s’il vous plaît ? – Oui, de l’arrêt 3.') },
          { id: 'p3g', cue: 'Bild: ein Rucksack für den Ausflug', cueTr: tr('Picture: a backpack for the trip', 'Image : un sac à dos pour la sortie'), sample: 'Kannst du bitte Wasser und Obst mitbringen? – Ja, klar. Kein Problem.', sampleTr: tr('Can you bring water and fruit, please? – Yes, sure. No problem.', 'Peux-tu apporter de l’eau et des fruits, s’il te plaît ? – Oui, bien sûr. Pas de problème.') },
        ],
      },
    ],
  },
];

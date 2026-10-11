import type { ExamSetInput } from '../types';

// Original practice material modelled on the Goethe-Zertifikat A1 format. Not an official paper.
export const GOETHE_A1: ExamSetInput[] = [
  {
    id: 'goethe-a1-1',
    board: 'goethe',
    level: 'A1',
    number: 1,
    lesen: [
      {
        id: 'goethe-a1-1-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Meine neue Wohnung',
          de: 'Hallo Tom,\n\nich habe jetzt eine neue Wohnung! Sie ist in der Gartenstraße 12, im zweiten Stock. Die Wohnung hat zwei Zimmer, eine Küche und einen Balkon. Leider gibt es keinen Aufzug, aber das ist kein Problem für mich.\n\nAm Samstag um 18 Uhr mache ich eine kleine Party. Kommst du auch? Bring bitte einen Salat mit. Getränke und Pizza habe ich schon.\n\nSchreib mir bitte bis Donnerstag, ob du kommen kannst.\n\nLiebe Grüße\nLena',
          tr: {
            en: 'Subject: My new flat\n\nHi Tom,\n\nI have a new flat now! It is at Gartenstraße 12, on the second floor. The flat has two rooms, a kitchen and a balcony. Unfortunately there is no lift, but that is not a problem for me.\n\nOn Saturday at 6 p.m. I am having a small party. Are you coming too? Please bring a salad. I already have drinks and pizza.\n\nPlease write to me by Thursday to say whether you can come.\n\nBest wishes\nLena',
            fr: "Objet : Mon nouvel appartement\n\nSalut Tom,\n\nj'ai maintenant un nouvel appartement ! Il est au 12 Gartenstraße, au deuxième étage. L'appartement a deux pièces, une cuisine et un balcon. Malheureusement, il n'y a pas d'ascenseur, mais ce n'est pas un problème pour moi.\n\nSamedi à 18 h, je fais une petite fête. Tu viens aussi ? Apporte une salade, s'il te plaît. J'ai déjà des boissons et de la pizza.\n\nÉcris-moi avant jeudi pour me dire si tu peux venir.\n\nBises\nLena",
          },
        }],
        items: [
          { id: 'q1', q: 'Lena wohnt jetzt im zweiten Stock.', qTr: { en: 'Lena now lives on the second floor.', fr: "Lena habite maintenant au deuxième étage." }, answer: true, explain: { en: '"Sie ist … im zweiten Stock."', fr: '« Sie ist … im zweiten Stock. »' } },
          { id: 'q2', q: 'Die Wohnung hat drei Zimmer.', qTr: { en: 'The flat has three rooms.', fr: "L'appartement a trois pièces." }, answer: false, explain: { en: 'It has two rooms plus a kitchen.', fr: 'Il a deux pièces plus une cuisine.' } },
          { id: 'q3', q: 'Es gibt einen Aufzug im Haus.', qTr: { en: 'There is a lift in the building.', fr: "Il y a un ascenseur dans l'immeuble." }, answer: false, explain: { en: '"Leider gibt es keinen Aufzug."', fr: '« Leider gibt es keinen Aufzug. »' } },
          { id: 'q4', q: 'Die Party beginnt am Samstag um 18 Uhr.', qTr: { en: 'The party starts on Saturday at 6 p.m.', fr: 'La fête commence samedi à 18 h.' }, answer: true, explain: { en: '"Am Samstag um 18 Uhr mache ich eine kleine Party."', fr: '« Am Samstag um 18 Uhr mache ich eine kleine Party. »' } },
          { id: 'q5', q: 'Tom soll Pizza mitbringen.', qTr: { en: 'Tom should bring pizza.', fr: 'Tom doit apporter de la pizza.' }, answer: false, explain: { en: 'Lena has the pizza; Tom brings a salad.', fr: 'Lena a la pizza ; Tom apporte une salade.' } },
        ],
      },
      {
        id: 'goethe-a1-1-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: "p1", title: "Anzeigen 1", de: "Anzeige a\nDeutschkurs für Anfänger\nMo und Mi, 18–20 Uhr\nVolkshochschule\n\nAnzeige b\nSprachkurs Deutsch\nMo–Fr, 9–12 Uhr\nSprachschule Lingua", tr: { en: "Ad a\nGerman course for beginners\nMon and Wed, 6–8 p.m.\nAdult education centre\n\nAd b\nGerman language course\nMon–Fri, 9 a.m.–12 noon\nLingua language school", fr: "Annonce a\nCours d'allemand pour débutants\nLun et mer, 18 h–20 h\nUniversité populaire\n\nAnnonce b\nCours d'allemand\nLun–ven, 9 h–12 h\nÉcole de langues Lingua" } },
          { id: "p2", title: "Anzeigen 2", de: "Anzeige a\nFahrradgeschäft Speiche\nNeue Fahrräder ab 450 Euro\n\nAnzeige b\nFahrrad zu verkaufen\n2 Jahre alt, 80 Euro\nTel. 0171 / 555 01 23", tr: { en: "Ad a\nSpeiche bicycle shop\nNew bicycles from 450 euros\n\nAd b\nBicycle for sale\n2 years old, 80 euros\nTel. 0171 / 555 01 23", fr: "Annonce a\nMagasin de vélos Speiche\nVélos neufs à partir de 450 euros\n\nAnnonce b\nVélo à vendre\n2 ans, 80 euros\nTél. 0171 / 555 01 23" } },
          { id: "p3", title: "Anzeigen 3", de: "Anzeige a\nBäckerei Korn sucht Verkäuferin\nMo–Fr, 6–12 Uhr\n\nAnzeige b\nCafé Sonne sucht Kellner/in\nSa und So, 10–16 Uhr", tr: { en: "Ad a\nKorn bakery is looking for a sales assistant\nMon–Fri, 6 a.m.–12 noon\n\nAd b\nCafé Sonne is looking for a waiter/waitress\nSat and Sun, 10 a.m.–4 p.m.", fr: "Annonce a\nLa boulangerie Korn cherche une vendeuse\nLun–ven, 6 h–12 h\n\nAnnonce b\nLe café Sonne cherche un serveur / une serveuse\nSam et dim, 10 h–16 h" } },
          { id: "p4", title: "Anzeigen 4", de: "Anzeige a\nZimmer frei!\nNette WG, 320 Euro\nNähe U-Bahn\n\nAnzeige b\nZimmer frei!\nRuhiges Haus, 280 Euro\nNur mit dem Auto gut erreichbar", tr: { en: "Ad a\nRoom available!\nNice shared flat, 320 euros\nNear the underground\n\nAd b\nRoom available!\nQuiet house, 280 euros\nOnly easy to reach by car", fr: "Annonce a\nChambre libre !\nColocation sympa, 320 euros\nPrès du métro\n\nAnnonce b\nChambre libre !\nMaison calme, 280 euros\nAccessible facilement uniquement en voiture" } },
          { id: "p5", title: "Anzeigen 5", de: "Anzeige a\nKochkurs: Indisch\nSamstag, 15 Uhr\n\nAnzeige b\nKochkurs: Italienisch\nFreitag, 19 Uhr", tr: { en: "Ad a\nCooking course: Indian\nSaturday, 3 p.m.\n\nAd b\nCooking course: Italian\nFriday, 7 p.m.", fr: "Annonce a\nCours de cuisine : indienne\nSamedi, 15 h\n\nAnnonce b\nCours de cuisine : italienne\nVendredi, 19 h" } },
        ],
        items: [
          { id: "q6", textId: "p1", q: "Sie möchten abends Deutsch lernen. Wo finden Sie die Information?", qTr: { en: "You want to learn German in the evenings. Where do you find the information?", fr: "Vous voulez apprendre l'allemand le soir. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a is in the evening (6–8 p.m.); ad b is in the morning.", fr: "L'annonce a est le soir (18 h–20 h) ; l'annonce b est le matin." } },
          { id: "q7", textId: "p2", q: "Sie suchen ein billiges Fahrrad. Wo finden Sie die Information?", qTr: { en: "You are looking for a cheap bicycle. Where do you find the information?", fr: "Vous cherchez un vélo bon marché. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b: a used bike for 80 euros. Ad a is much more expensive.", fr: "Annonce b : un vélo d'occasion à 80 euros. L'annonce a est beaucoup plus chère." } },
          { id: "q8", textId: "p3", q: "Sie möchten am Wochenende arbeiten. Wo finden Sie die Information?", qTr: { en: "You want to work at the weekend. Where do you find the information?", fr: "Vous voulez travailler le week-end. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b is for Saturday and Sunday.", fr: "L'annonce b est pour le samedi et le dimanche." } },
          { id: "q9", textId: "p4", q: "Sie haben kein Auto und suchen ein Zimmer. Wo finden Sie die Information?", qTr: { en: "You have no car and are looking for a room. Where do you find the information?", fr: "Vous n'avez pas de voiture et cherchez une chambre. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a is near the underground, so no car is needed.", fr: "L'annonce a est près du métro, donc pas besoin de voiture." } },
          { id: "q10", textId: "p5", q: "Sie möchten am Freitag italienisch kochen lernen. Wo finden Sie die Information?", qTr: { en: "You want to learn Italian cooking on Friday. Where do you find the information?", fr: "Vous voulez apprendre la cuisine italienne vendredi. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b is Italian and on Friday.", fr: "L'annonce b est italienne et a lieu vendredi." } },
        ],
      },
      {
        id: 'goethe-a1-1-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: "s1", de: "Bibliothek\nMo–Fr 9–18 Uhr\nSa 10–14 Uhr\nSonntag geschlossen", tr: { en: "Library\nMon–Fri 9 a.m.–6 p.m.\nSat 10 a.m.–2 p.m.\nClosed on Sunday", fr: "Bibliothèque\nLun–ven 9 h–18 h\nSam 10 h–14 h\nFermé le dimanche" } },
          { id: "s2", de: "Bitte Handy ausschalten!", tr: { en: "Please switch off your mobile phone!", fr: "Veuillez éteindre votre portable !" } },
          { id: "s3", de: "Achtung!\nNasser Boden", tr: { en: "Caution!\nWet floor", fr: "Attention !\nSol mouillé" } },
          { id: "s4", de: "Hunde bitte an die Leine!", tr: { en: "Dogs must be kept on a lead, please!", fr: "Les chiens doivent être tenus en laisse !" } },
          { id: "s5", de: "Geöffnet bis 20 Uhr.\nKasse 5: nur mit Karte.", tr: { en: "Open until 8 p.m.\nCheckout 5: card only.", fr: "Ouvert jusqu'à 20 h.\nCaisse 5 : paiement par carte uniquement." } },
        ],
        items: [
          { id: "q11", textId: "s1", q: "Die Bibliothek ist am Sonntag geschlossen.", qTr: { en: "The library is closed on Sunday.", fr: "La bibliothèque est fermée le dimanche." }, answer: true, explain: { en: "\"Sonntag geschlossen.\"", fr: "« Sonntag geschlossen. »" } },
          { id: "q12", textId: "s2", q: "Hier darf man telefonieren.", qTr: { en: "You may make phone calls here.", fr: "Ici, on peut téléphoner." }, answer: false, explain: { en: "\"ausschalten\" means to switch off.", fr: "« ausschalten » signifie éteindre." } },
          { id: "q13", textId: "s3", q: "Man muss hier vorsichtig gehen.", qTr: { en: "You have to walk carefully here.", fr: "Il faut marcher prudemment ici." }, answer: true, explain: { en: "A wet floor is slippery.", fr: "Un sol mouillé est glissant." } },
          { id: "q14", textId: "s4", q: "Hunde dürfen hier frei laufen.", qTr: { en: "Dogs may run free here.", fr: "Les chiens peuvent courir librement ici." }, answer: false, explain: { en: "\"an die Leine\" = on the lead.", fr: "« an die Leine » = en laisse." } },
          { id: "q15", textId: "s5", q: "An Kasse 5 kann man mit Bargeld bezahlen.", qTr: { en: "At checkout 5 you can pay with cash.", fr: "À la caisse 5, on peut payer en espèces." }, answer: false, explain: { en: "\"nur mit Karte\" = card only.", fr: "« nur mit Karte » = carte uniquement." } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-1-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten einen Deutschkurs besuchen. Ihr Freund hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to take a German course. Your friend helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez suivre un cours d'allemand. Votre ami vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Mein Name ist Karim Benali. Ich bin am 14. März 1998 geboren. Ich wohne in Köln, in der Rosenstraße 7. Meine Telefonnummer ist 0221 / 98 76 54. Ich komme aus Marokko. Ich möchte den Kurs am Abend besuchen.',
          tr: {
            en: 'My name is Karim Benali. I was born on 14 March 1998. I live in Cologne, at Rosenstraße 7. My telephone number is 0221 / 98 76 54. I come from Morocco. I would like to attend the course in the evening.',
            fr: "Je m'appelle Karim Benali. Je suis né le 14 mars 1998. J'habite à Cologne, au 7 Rosenstraße. Mon numéro de téléphone est le 0221 / 98 76 54. Je viens du Maroc. Je voudrais suivre le cours le soir.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Benali'] },
          { id: 'f2', label: 'Vorname', labelTr: { en: 'First name', fr: 'Prénom' }, accept: ['Karim'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['14.03.1998', '14.3.1998', '14. März 1998', '14 März 1998'] },
          { id: 'f4', label: 'Wohnort', labelTr: { en: 'Town', fr: 'Ville' }, accept: ['Köln'] },
          { id: 'f5', label: 'Kurszeit (Vormittag / Abend)', labelTr: { en: 'Course time (morning / evening)', fr: 'Horaire du cours (matin / soir)' }, accept: ['Abend', 'am Abend'] },
        ],
      },
      {
        id: 'goethe-a1-1-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Ihre Freundin Julia hat Sie zu einem Kochabend eingeladen. Sie können nicht kommen. Schreiben Sie ihr eine Nachricht (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: {
          en: 'Your friend Julia invited you to a cooking evening. You cannot come. Write her a message (about 30 words). Write about all three points.',
          fr: "Votre amie Julia vous a invité(e) à une soirée cuisine. Vous ne pouvez pas venir. Écrivez-lui un message (environ 30 mots). Traitez les trois points.",
        },
        points: [
          { id: 'p1', de: 'Entschuldigung', tr: { en: 'Apology', fr: 'Excuses' }, keywords: ['leid', 'entschuldig', 'schade'] },
          { id: 'p2', de: 'Grund', tr: { en: 'Reason', fr: 'Raison' }, keywords: ['arbeit', 'krank', 'muss', 'habe', 'besuch', 'termin'] },
          { id: 'p3', de: 'Neuer Termin', tr: { en: 'New date', fr: 'Nouvelle date' }, keywords: ['nächste', 'wann', 'treffen', 'wochenende', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Liebe Julia,\n\nvielen Dank für die Einladung. Leider kann ich am Freitag nicht kommen, es tut mir sehr leid. Ich muss arbeiten. Können wir uns am Samstag treffen?\n\nViele Grüße\nAnna',
          tr: {
            en: 'Dear Julia,\n\nThank you very much for the invitation. Unfortunately I cannot come on Friday, I am very sorry. I have to work. Can we meet on Saturday?\n\nBest wishes\nAnna',
            fr: "Chère Julia,\n\nMerci beaucoup pour l'invitation. Malheureusement, je ne peux pas venir vendredi, je suis vraiment désolée. Je dois travailler. Peut-on se voir samedi ?\n\nAmicalement\nAnna",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-1-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, languages, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, langues, profession, loisir.' },
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Mein Name ist Anna Weber. Ich buchstabiere: W-E-B-E-R.', sampleTr: { en: 'My name is Anna Weber. I spell it: W-E-B-E-R.', fr: "Je m'appelle Anna Weber. J'épelle : W-E-B-E-R." } },
          { id: 'p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 26 Jahre alt.', sampleTr: { en: 'I am 26 years old.', fr: "J'ai 26 ans." } },
          { id: 'p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus Kamerun, aus Yaoundé.', sampleTr: { en: 'I come from Cameroon, from Yaoundé.', fr: 'Je viens du Cameroun, de Yaoundé.' } },
          { id: 'p1d', cue: 'Wohnort', cueTr: { en: 'Town', fr: 'Ville' }, sample: 'Ich wohne in Hamburg, in der Hafenstraße.', sampleTr: { en: 'I live in Hamburg, in Hafenstraße.', fr: "J'habite à Hambourg, dans la Hafenstraße." } },
          { id: 'p1e', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Französisch, Englisch und ein bisschen Deutsch.', sampleTr: { en: 'I speak French, English and a little German.', fr: 'Je parle français, anglais et un peu allemand.' } },
          { id: 'p1f', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Mein Hobby ist Fußball. Ich spiele jeden Samstag.', sampleTr: { en: 'My hobby is football. I play every Saturday.', fr: 'Mon loisir est le football. Je joue tous les samedis.' } },
        ],
      },
      {
        id: 'goethe-a1-1-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Essen und Trinken. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: food and drink. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : manger et boire. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'p2a', cue: 'Frühstück', cueTr: { en: 'Breakfast', fr: 'Petit-déjeuner' }, sample: 'Was isst du zum Frühstück? – Ich esse Brot mit Käse.', sampleTr: { en: 'What do you eat for breakfast? – I eat bread with cheese.', fr: 'Que manges-tu au petit-déjeuner ? – Je mange du pain avec du fromage.' }, tip: { en: 'Question word first: Was …? Wann …? Wo …?', fr: 'Le mot interrogatif en premier : Was …? Wann …? Wo …?' } },
          { id: 'p2b', cue: 'Getränk', cueTr: { en: 'Drink', fr: 'Boisson' }, sample: 'Trinkst du gern Kaffee? – Nein, ich trinke lieber Tee.', sampleTr: { en: 'Do you like drinking coffee? – No, I prefer tea.', fr: 'Aimes-tu boire du café ? – Non, je préfère le thé.' } },
          { id: 'p2c', cue: 'Restaurant', cueTr: { en: 'Restaurant', fr: 'Restaurant' }, sample: 'Gehst du oft ins Restaurant? – Nein, nur am Wochenende.', sampleTr: { en: 'Do you often go to a restaurant? – No, only at the weekend.', fr: 'Vas-tu souvent au restaurant ? – Non, seulement le week-end.' } },
          { id: 'p2d', cue: 'Obst', cueTr: { en: 'Fruit', fr: 'Fruits' }, sample: 'Welches Obst magst du? – Ich mag Äpfel und Bananen.', sampleTr: { en: 'Which fruit do you like? – I like apples and bananas.', fr: 'Quels fruits aimes-tu ? – J\'aime les pommes et les bananes.' } },
          { id: 'p2e', cue: 'Kochen', cueTr: { en: 'Cooking', fr: 'Cuisiner' }, sample: 'Kochst du gern? – Ja, ich koche jeden Abend.', sampleTr: { en: 'Do you like cooking? – Yes, I cook every evening.', fr: 'Aimes-tu cuisiner ? – Oui, je cuisine tous les soirs.' } },
        ],
      },
      {
        id: 'goethe-a1-1-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'p3a', cue: 'Bild: ein offenes Fenster, es ist kalt', cueTr: { en: 'Picture: an open window, it is cold', fr: 'Image : une fenêtre ouverte, il fait froid' }, sample: 'Machen Sie bitte das Fenster zu. – Ja, gern.', sampleTr: { en: 'Please close the window. – Yes, gladly.', fr: 'Fermez la fenêtre, s\'il vous plaît. – Oui, avec plaisir.' }, tip: { en: 'Polite request: "Machen Sie bitte … zu / auf."', fr: 'Demande polie : « Machen Sie bitte … zu / auf. »' } },
          { id: 'p3b', cue: 'Bild: ein Stift', cueTr: { en: 'Picture: a pen', fr: 'Image : un stylo' }, sample: 'Kann ich bitte Ihren Stift haben? – Natürlich, hier bitte.', sampleTr: { en: 'May I have your pen, please? – Of course, here you are.', fr: 'Puis-je avoir votre stylo, s\'il vous plaît ? – Bien sûr, voilà.' } },
          { id: 'p3c', cue: 'Bild: eine Uhr', cueTr: { en: 'Picture: a clock', fr: 'Image : une horloge' }, sample: 'Wie spät ist es, bitte? – Es ist halb drei.', sampleTr: { en: 'What time is it, please? – It is half past two.', fr: 'Quelle heure est-il, s\'il vous plaît ? – Il est deux heures et demie.' } },
          { id: 'p3d', cue: 'Bild: ein Wörterbuch', cueTr: { en: 'Picture: a dictionary', fr: 'Image : un dictionnaire' }, sample: 'Können Sie mir bitte das Wörterbuch geben? – Ja, bitte schön.', sampleTr: { en: 'Can you give me the dictionary, please? – Yes, here you are.', fr: 'Pouvez-vous me donner le dictionnaire, s\'il vous plaît ? – Oui, voilà.' } },
          { id: 'p3e', cue: 'Bild: ein Glas Wasser', cueTr: { en: 'Picture: a glass of water', fr: "Image : un verre d'eau" }, sample: 'Ich möchte bitte ein Glas Wasser. – Ja, sofort.', sampleTr: { en: 'I would like a glass of water, please. – Yes, right away.', fr: "Je voudrais un verre d'eau, s'il vous plaît. – Oui, tout de suite." } },
        ],
      },
    ],
  },
  {
    id: 'goethe-a1-2',
    board: 'goethe',
    level: 'A1',
    number: 2,
    lesen: [
      {
        id: 'goethe-a1-2-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Ihr Termin in unserer Praxis',
          de: 'Sehr geehrter Herr Petrov,\n\nIhr Termin bei Dr. Maier ist am Dienstag um 9.30 Uhr. Unsere Praxis ist in der Bahnhofstraße 5, im ersten Stock. Bitte bringen Sie Ihre Versichertenkarte mit.\n\nSie können nicht kommen? Dann rufen Sie uns bitte an: 030 / 456 78 90. Die Praxis ist von Montag bis Freitag von 8 bis 12 Uhr geöffnet.\n\nMit freundlichen Grüßen\nPraxis Dr. Maier',
          tr: {
            en: 'Subject: Your appointment at our practice\n\nDear Mr Petrov,\n\nYour appointment with Dr Maier is on Tuesday at 9.30 a.m. Our practice is at Bahnhofstraße 5, on the first floor. Please bring your health insurance card.\n\nYou cannot come? Then please call us: 030 / 456 78 90. The practice is open from Monday to Friday from 8 a.m. to 12 noon.\n\nYours sincerely\nDr Maier\'s practice',
            fr: "Objet : Votre rendez-vous dans notre cabinet\n\nMonsieur Petrov,\n\nVotre rendez-vous chez le Dr Maier est mardi à 9 h 30. Notre cabinet se trouve au 5 Bahnhofstraße, au premier étage. Veuillez apporter votre carte d'assuré.\n\nVous ne pouvez pas venir ? Alors appelez-nous, s'il vous plaît : 030 / 456 78 90. Le cabinet est ouvert du lundi au vendredi de 8 h à 12 h.\n\nCordialement\nCabinet du Dr Maier",
          },
        }],
        items: [
          { id: 'q101', q: 'Herr Petrov hat am Dienstag einen Termin.', qTr: { en: 'Mr Petrov has an appointment on Tuesday.', fr: 'M. Petrov a un rendez-vous mardi.' }, answer: true, explain: { en: '"Ihr Termin … ist am Dienstag."', fr: '« Ihr Termin … ist am Dienstag. »' } },
          { id: 'q102', q: 'Der Termin ist um 10.30 Uhr.', qTr: { en: 'The appointment is at 10.30 a.m.', fr: 'Le rendez-vous est à 10 h 30.' }, answer: false, explain: { en: 'The appointment is at 9.30.', fr: 'Le rendez-vous est à 9 h 30.' } },
          { id: 'q103', q: 'Herr Petrov soll seine Versichertenkarte mitbringen.', qTr: { en: 'Mr Petrov should bring his health insurance card.', fr: 'M. Petrov doit apporter sa carte d\'assuré.' }, answer: true, explain: { en: '"Bitte bringen Sie Ihre Versichertenkarte mit."', fr: '« Bitte bringen Sie Ihre Versichertenkarte mit. »' } },
          { id: 'q104', q: 'Die Praxis ist im Erdgeschoss.', qTr: { en: 'The practice is on the ground floor.', fr: 'Le cabinet est au rez-de-chaussée.' }, answer: false, explain: { en: 'It is on the first floor ("im ersten Stock").', fr: 'Il est au premier étage (« im ersten Stock »).' } },
          { id: 'q105', q: 'Wenn Herr Petrov nicht kommen kann, soll er anrufen.', qTr: { en: 'If Mr Petrov cannot come, he should phone.', fr: 'Si M. Petrov ne peut pas venir, il doit téléphoner.' }, answer: true, explain: { en: '"Dann rufen Sie uns bitte an."', fr: '« Dann rufen Sie uns bitte an. »' } },
        ],
      },
      {
        id: 'goethe-a1-2-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: "p1", title: "Anzeigen 1", de: "Anzeige a\nDr. Meier – Hausarzt\nMo–Fr 8–12 Uhr\n\nAnzeige b\nDr. Braun – Zahnarzt\nMo–Fr 9–17 Uhr\nAuch Notfälle", tr: { en: "Ad a\nDr Meier – family doctor\nMon–Fri 8 a.m.–12 noon\n\nAd b\nDr Braun – dentist\nMon–Fri 9 a.m.–5 p.m.\nEmergencies too", fr: "Annonce a\nDr Meier – médecin généraliste\nLun–ven 8 h–12 h\n\nAnnonce b\nDr Braun – dentiste\nLun–ven 9 h–17 h\nUrgences aussi" } },
          { id: "p2", title: "Anzeigen 2", de: "Anzeige a\nSchwimmkurs für Erwachsene\nDienstag, 19 Uhr\nHallenbad Nord\n\nAnzeige b\nTenniskurs für Erwachsene\nDienstag, 19 Uhr\nSportplatz Süd", tr: { en: "Ad a\nSwimming course for adults\nTuesday, 7 p.m.\nNorth indoor pool\n\nAd b\nTennis course for adults\nTuesday, 7 p.m.\nSouth sports ground", fr: "Annonce a\nCours de natation pour adultes\nMardi, 19 h\nPiscine couverte Nord\n\nAnnonce b\nCours de tennis pour adultes\nMardi, 19 h\nTerrain de sport Sud" } },
          { id: "p3", title: "Anzeigen 3", de: "Anzeige a\nBäckerei Weiß sucht Mitarbeiter/in\nFrüh, ab 5 Uhr\n\nAnzeige b\nMetzgerei Weiß sucht Mitarbeiter/in\nVormittags", tr: { en: "Ad a\nWeiß bakery is looking for an employee\nEarly, from 5 a.m.\n\nAd b\nWeiß butcher's is looking for an employee\nMornings", fr: "Annonce a\nLa boulangerie Weiß cherche un(e) employé(e)\nTôt le matin, dès 5 h\n\nAnnonce b\nLa boucherie Weiß cherche un(e) employé(e)\nLe matin" } },
          { id: "p4", title: "Anzeigen 4", de: "Anzeige a\nBücher-Markt\nSamstag, 9–14 Uhr\nBücher ab 1 Euro\n\nAnzeige b\nBücher-Flohmarkt\nSonntag, 10–16 Uhr\nBücher ab 1 Euro", tr: { en: "Ad a\nBook market\nSaturday, 9 a.m.–2 p.m.\nBooks from 1 euro\n\nAd b\nBook flea market\nSunday, 10 a.m.–4 p.m.\nBooks from 1 euro", fr: "Annonce a\nMarché aux livres\nSamedi, 9 h–14 h\nLivres à partir de 1 euro\n\nAnnonce b\nMarché aux puces de livres\nDimanche, 10 h–16 h\nLivres à partir de 1 euro" } },
          { id: "p5", title: "Anzeigen 5", de: "Anzeige a\nHandy zu verkaufen\nGebraucht, 60 Euro\nTel. 0152 / 444 22 11\n\nAnzeige b\nHandy-Shop Telefon-Welt\nNeue Handys ab 199 Euro", tr: { en: "Ad a\nMobile phone for sale\nSecond-hand, 60 euros\nTel. 0152 / 444 22 11\n\nAd b\nPhone shop Telefon-Welt\nNew phones from 199 euros", fr: "Annonce a\nPortable à vendre\nD'occasion, 60 euros\nTél. 0152 / 444 22 11\n\nAnnonce b\nBoutique Telefon-Welt\nPortables neufs à partir de 199 euros" } },
        ],
        items: [
          { id: "q106", textId: "p1", q: "Sie haben Zahnschmerzen. Wo finden Sie die Information?", qTr: { en: "You have toothache. Where do you find the information?", fr: "Vous avez mal aux dents. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "A dentist (Zahnarzt) treats toothache: ad b.", fr: "Un dentiste (Zahnarzt) soigne les maux de dents : annonce b." } },
          { id: "q107", textId: "p2", q: "Sie möchten schwimmen lernen. Wo finden Sie die Information?", qTr: { en: "You want to learn to swim. Where do you find the information?", fr: "Vous voulez apprendre à nager. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a is a swimming course.", fr: "L'annonce a est un cours de natation." } },
          { id: "q108", textId: "p3", q: "Sie suchen Arbeit in einer Bäckerei. Wo finden Sie die Information?", qTr: { en: "You are looking for work in a bakery. Where do you find the information?", fr: "Vous cherchez du travail dans une boulangerie. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Bäckerei = bakery (ad a); Metzgerei = butcher's.", fr: "Bäckerei = boulangerie (annonce a) ; Metzgerei = boucherie." } },
          { id: "q109", textId: "p4", q: "Sie möchten am Sonntag billige Bücher kaufen. Wo finden Sie die Information?", qTr: { en: "You want to buy cheap books on Sunday. Where do you find the information?", fr: "Vous voulez acheter des livres bon marché dimanche. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b takes place on Sunday.", fr: "L'annonce b a lieu le dimanche." } },
          { id: "q110", textId: "p5", q: "Sie brauchen ein gebrauchtes Handy. Wo finden Sie die Information?", qTr: { en: "You need a second-hand mobile phone. Where do you find the information?", fr: "Vous avez besoin d'un téléphone portable d'occasion. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "\"Gebraucht\" = second-hand: ad a.", fr: "« Gebraucht » = d'occasion : annonce a." } },
        ],
      },
      {
        id: 'goethe-a1-2-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: "s1", de: "Zug nach Hamburg\nAbfahrt: 14.35 Uhr\nGleis 7", tr: { en: "Train to Hamburg\nDeparture: 2.35 p.m.\nPlatform 7", fr: "Train pour Hambourg\nDépart : 14 h 35\nVoie 7" } },
          { id: "s2", de: "Rauchen verboten!", tr: { en: "No smoking!", fr: "Interdiction de fumer !" } },
          { id: "s3", de: "Mittagspause\nvon 13 bis 14 Uhr\nBitte kommen Sie später wieder.", tr: { en: "Lunch break\nfrom 1 to 2 p.m.\nPlease come back later.", fr: "Pause déjeuner\nde 13 h à 14 h\nVeuillez revenir plus tard." } },
          { id: "s4", de: "Sonderangebot: Äpfel\n1 kg nur 1,50 Euro\nNur bis Samstag!", tr: { en: "Special offer: apples\n1 kg only 1.50 euros\nOnly until Saturday!", fr: "Offre spéciale : pommes\n1 kg seulement 1,50 euro\nSeulement jusqu'à samedi !" } },
          { id: "s5", de: "Frühstück im Hotel\n7–10 Uhr\nRestaurant, 1. Stock", tr: { en: "Breakfast in the hotel\n7–10 a.m.\nRestaurant, 1st floor", fr: "Petit-déjeuner à l'hôtel\n7 h–10 h\nRestaurant, 1er étage" } },
        ],
        items: [
          { id: "q111", textId: "s1", q: "Der Zug fährt von Gleis 7 ab.", qTr: { en: "The train leaves from platform 7.", fr: "Le train part de la voie 7." }, answer: true, explain: { en: "\"Gleis 7\" = platform 7.", fr: "« Gleis 7 » = voie 7." } },
          { id: "q112", textId: "s2", q: "Man darf hier rauchen.", qTr: { en: "You may smoke here.", fr: "On peut fumer ici." }, answer: false, explain: { en: "\"verboten\" = forbidden.", fr: "« verboten » = interdit." } },
          { id: "q113", textId: "s3", q: "Um 13.30 Uhr ist das Geschäft geöffnet.", qTr: { en: "The shop is open at 1.30 p.m.", fr: "Le magasin est ouvert à 13 h 30." }, answer: false, explain: { en: "13.30 is in the lunch break, so it is closed.", fr: "13 h 30 est pendant la pause, donc c'est fermé." } },
          { id: "q114", textId: "s4", q: "Das Angebot gilt auch am Sonntag.", qTr: { en: "The offer is also valid on Sunday.", fr: "L'offre est aussi valable le dimanche." }, answer: false, explain: { en: "\"Nur bis Samstag\" = only until Saturday.", fr: "« Nur bis Samstag » = seulement jusqu'à samedi." } },
          { id: "q115", textId: "s5", q: "Das Frühstück gibt es im ersten Stock.", qTr: { en: "Breakfast is served on the first floor.", fr: "Le petit-déjeuner est servi au premier étage." }, answer: true, explain: { en: "\"Restaurant, 1. Stock\" = first floor.", fr: "« Restaurant, 1. Stock » = premier étage." } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-2-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten im Sportverein schwimmen. Ihre Freundin hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to swim at the sports club. Your friend helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez nager au club de sport. Votre amie vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Ich heiße Maria Kowalski. Ich bin am 5. Oktober 1990 geboren. Ich wohne in Berlin, im Lindenweg 3. Meine Handynummer ist 0176 / 123 45 67. Ich möchte im Verein Schwimmen lernen.',
          tr: {
            en: 'My name is Maria Kowalski. I was born on 5 October 1990. I live in Berlin, at Lindenweg 3. My mobile number is 0176 / 123 45 67. I would like to learn to swim at the club.',
            fr: "Je m'appelle Maria Kowalski. Je suis née le 5 octobre 1990. J'habite à Berlin, au 3 Lindenweg. Mon numéro de portable est le 0176 / 123 45 67. Je voudrais apprendre à nager au club.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Kowalski'] },
          { id: 'f2', label: 'Vorname', labelTr: { en: 'First name', fr: 'Prénom' }, accept: ['Maria'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['05.10.1990', '5.10.1990', '5. Oktober 1990', '5 Oktober 1990'] },
          { id: 'f4', label: 'Handynummer', labelTr: { en: 'Mobile number', fr: 'Numéro de portable' }, accept: ['0176 / 123 45 67', '0176 123 45 67', '0176/1234567', '01761234567'] },
          { id: 'f5', label: 'Sportart', labelTr: { en: 'Sport', fr: 'Sport' }, accept: ['Schwimmen'] },
        ],
      },
      {
        id: 'goethe-a1-2-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie sind krank und können heute nicht zum Deutschkurs kommen. Schreiben Sie an Ihre Lehrerin, Frau Becker (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: {
          en: 'You are ill and cannot come to the German course today. Write to your teacher, Mrs Becker (about 30 words). Write about all three points.',
          fr: "Vous êtes malade et ne pouvez pas venir au cours d'allemand aujourd'hui. Écrivez à votre professeure, Mme Becker (environ 30 mots). Traitez les trois points.",
        },
        points: [
          { id: 'p1', de: 'Grund', tr: { en: 'Reason', fr: 'Raison' }, keywords: ['krank', 'fieber', 'grippe', 'erkältet', 'arzt', 'kopfschmerz'] },
          { id: 'p2', de: 'Entschuldigung', tr: { en: 'Apology', fr: 'Excuses' }, keywords: ['leid', 'entschuldig', 'schade'] },
          { id: 'p3', de: 'Wann wieder im Kurs?', tr: { en: 'When back in class?', fr: 'Quand de retour au cours ?' }, keywords: ['wieder', 'nächste', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'morgen'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Sehr geehrte Frau Becker,\n\nich bin leider krank und kann heute nicht zum Kurs kommen. Es tut mir leid. Ich komme am Donnerstag wieder.\n\nMit freundlichen Grüßen\nPeter Novak',
          tr: {
            en: 'Dear Mrs Becker,\n\nI am unfortunately ill and cannot come to the course today. I am sorry. I will be back on Thursday.\n\nYours sincerely\nPeter Novak',
            fr: "Madame Becker,\n\nje suis malheureusement malade et ne peux pas venir au cours aujourd'hui. Je suis désolé. Je reviens jeudi.\n\nCordialement\nPeter Novak",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-2-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, languages, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, langues, profession, loisir.' },
        prompts: [
          { id: 'g2p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Ich heiße Peter Novak. Mein Vorname ist Peter, mein Familienname ist Novak.', sampleTr: { en: 'My name is Peter Novak. My first name is Peter, my surname is Novak.', fr: "Je m'appelle Peter Novak. Mon prénom est Peter, mon nom de famille est Novak." } },
          { id: 'g2p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 34 Jahre alt. Mein Geburtstag ist im Mai.', sampleTr: { en: 'I am 34 years old. My birthday is in May.', fr: "J'ai 34 ans. Mon anniversaire est en mai." } },
          { id: 'g2p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus der Ukraine, aus Lwiw.', sampleTr: { en: 'I come from Ukraine, from Lviv.', fr: "Je viens d'Ukraine, de Lviv." } },
          { id: 'g2p1d', cue: 'Wohnort', cueTr: { en: 'Town', fr: 'Ville' }, sample: 'Ich wohne jetzt in München. Meine Wohnung ist nah am Bahnhof.', sampleTr: { en: 'I now live in Munich. My flat is close to the station.', fr: "J'habite maintenant à Munich. Mon appartement est près de la gare." } },
          { id: 'g2p1e', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich bin Elektriker. Ich arbeite bei einer kleinen Firma.', sampleTr: { en: 'I am an electrician. I work for a small company.', fr: 'Je suis électricien. Je travaille dans une petite entreprise.' } },
          { id: 'g2p1f', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Ich schwimme gern und ich höre Musik.', sampleTr: { en: 'I like swimming and I listen to music.', fr: "J'aime nager et j'écoute de la musique." } },
        ],
      },
      {
        id: 'goethe-a1-2-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Wohnen. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: living. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : habiter. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'g2p2a', cue: 'Zimmer', cueTr: { en: 'Rooms', fr: 'Pièces' }, sample: 'Wie viele Zimmer hat deine Wohnung? – Sie hat drei Zimmer.', sampleTr: { en: 'How many rooms does your flat have? – It has three rooms.', fr: 'Combien de pièces a ton appartement ? – Il a trois pièces.' }, tip: { en: 'Ask with "Wie viele …?" for a number.', fr: 'Demandez avec « Wie viele …? » pour un nombre.' } },
          { id: 'g2p2b', cue: 'Miete', cueTr: { en: 'Rent', fr: 'Loyer' }, sample: 'Wie viel kostet deine Wohnung? – 650 Euro im Monat.', sampleTr: { en: 'How much does your flat cost? – 650 euros a month.', fr: 'Combien coûte ton appartement ? – 650 euros par mois.' } },
          { id: 'g2p2c', cue: 'Küche', cueTr: { en: 'Kitchen', fr: 'Cuisine' }, sample: 'Hast du eine große Küche? – Nein, sie ist klein.', sampleTr: { en: 'Do you have a big kitchen? – No, it is small.', fr: 'As-tu une grande cuisine ? – Non, elle est petite.' } },
          { id: 'g2p2d', cue: 'Nachbarn', cueTr: { en: 'Neighbours', fr: 'Voisins' }, sample: 'Sind deine Nachbarn nett? – Ja, sie sind sehr freundlich.', sampleTr: { en: 'Are your neighbours nice? – Yes, they are very friendly.', fr: 'Tes voisins sont-ils sympas ? – Oui, ils sont très aimables.' } },
          { id: 'g2p2e', cue: 'Stadt', cueTr: { en: 'City', fr: 'Ville' }, sample: 'Wohnst du gern in der Stadt? – Ja, hier gibt es viele Geschäfte.', sampleTr: { en: 'Do you like living in the city? – Yes, there are many shops here.', fr: 'Aimes-tu habiter en ville ? – Oui, il y a beaucoup de magasins ici.' } },
        ],
      },
      {
        id: 'goethe-a1-2-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'g2p3a', cue: 'Bild: eine Tür', cueTr: { en: 'Picture: a door', fr: 'Image : une porte' }, sample: 'Können Sie bitte die Tür öffnen? – Ja, natürlich.', sampleTr: { en: 'Can you open the door, please? – Yes, of course.', fr: 'Pouvez-vous ouvrir la porte, s\'il vous plaît ? – Oui, bien sûr.' }, tip: { en: 'Polite request: "Können Sie bitte …?"', fr: 'Demande polie : « Können Sie bitte …? »' } },
          { id: 'g2p3b', cue: 'Bild: Zucker', cueTr: { en: 'Picture: sugar', fr: 'Image : du sucre' }, sample: 'Geben Sie mir bitte den Zucker. – Hier, bitte.', sampleTr: { en: 'Please pass me the sugar. – Here you are.', fr: 'Passez-moi le sucre, s\'il vous plaît. – Voilà.' } },
          { id: 'g2p3c', cue: 'Bild: ein Telefon', cueTr: { en: 'Picture: a telephone', fr: 'Image : un téléphone' }, sample: 'Darf ich Ihr Telefon benutzen? – Ja, bitte.', sampleTr: { en: 'May I use your phone? – Yes, please.', fr: 'Puis-je utiliser votre téléphone ? – Oui, je vous en prie.' } },
          { id: 'g2p3d', cue: 'Bild: eine Fahrkarte', cueTr: { en: 'Picture: a ticket', fr: 'Image : un billet' }, sample: 'Eine Fahrkarte nach Köln, bitte. – Das macht 12 Euro.', sampleTr: { en: 'One ticket to Cologne, please. – That is 12 euros.', fr: 'Un billet pour Cologne, s\'il vous plaît. – Cela fait 12 euros.' } },
          { id: 'g2p3e', cue: 'Bild: ein Buch', cueTr: { en: 'Picture: a book', fr: 'Image : un livre' }, sample: 'Können Sie mir das Buch zeigen? – Ja, hier ist es.', sampleTr: { en: 'Can you show me the book? – Yes, here it is.', fr: 'Pouvez-vous me montrer le livre ? – Oui, le voici.' } },
        ],
      },
    ],
  },
  {
    id: 'goethe-a1-3',
    board: 'goethe',
    level: 'A1',
    number: 3,
    lesen: [
      {
        id: 'goethe-a1-3-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Grüße vom Bodensee',
          de: 'Liebe Sofia,\n\nviele Grüße vom Bodensee! Jan und ich sind seit Montag hier. Das Hotel ist klein, aber sehr schön, und das Frühstück ist super. Das Wetter ist leider nicht so gut: Es regnet fast jeden Tag.\n\nMorgen scheint die Sonne. Dann machen wir eine Schifffahrt. Am Samstag fahren wir mit dem Zug nach Hause. Kommst du am Sonntag zum Kaffee?\n\nLiebe Grüße\nMarta',
          tr: {
            en: 'Subject: Greetings from Lake Constance\n\nDear Sofia,\n\nBest wishes from Lake Constance! Jan and I have been here since Monday. The hotel is small but very nice, and the breakfast is great. Unfortunately the weather is not so good: it rains almost every day.\n\nTomorrow the sun is shining. Then we are going on a boat trip. On Saturday we take the train home. Will you come for coffee on Sunday?\n\nBest wishes\nMarta',
            fr: "Objet : Salutations du lac de Constance\n\nChère Sofia,\n\nBeaucoup de bonjours du lac de Constance ! Jan et moi sommes ici depuis lundi. L'hôtel est petit mais très joli, et le petit-déjeuner est super. Malheureusement, le temps n'est pas très bon : il pleut presque tous les jours.\n\nDemain, il y a du soleil. Nous ferons alors une excursion en bateau. Samedi, nous rentrons en train. Viens-tu prendre un café dimanche ?\n\nBises\nMarta",
          },
        }],
        items: [
          { id: 'q201', q: 'Marta und Jan sind im Urlaub am Bodensee.', qTr: { en: 'Marta and Jan are on holiday at Lake Constance.', fr: 'Marta et Jan sont en vacances au lac de Constance.' }, answer: true, explain: { en: '"Viele Grüße vom Bodensee! Jan und ich sind … hier."', fr: '« Viele Grüße vom Bodensee! Jan und ich sind … hier. »' } },
          { id: 'q202', q: 'Das Hotel ist groß.', qTr: { en: 'The hotel is big.', fr: "L'hôtel est grand." }, answer: false, explain: { en: '"Das Hotel ist klein, aber sehr schön."', fr: '« Das Hotel ist klein, aber sehr schön. »' } },
          { id: 'q203', q: 'Das Wetter ist jeden Tag schön.', qTr: { en: 'The weather is nice every day.', fr: 'Il fait beau tous les jours.' }, answer: false, explain: { en: '"Es regnet fast jeden Tag."', fr: '« Es regnet fast jeden Tag. »' } },
          { id: 'q204', q: 'Morgen machen Marta und Jan eine Schifffahrt.', qTr: { en: 'Tomorrow Marta and Jan are going on a boat trip.', fr: 'Demain, Marta et Jan font une excursion en bateau.' }, answer: true, explain: { en: '"Morgen scheint die Sonne. Dann machen wir eine Schifffahrt."', fr: '« Morgen scheint die Sonne. Dann machen wir eine Schifffahrt. »' } },
          { id: 'q205', q: 'Sie fahren am Sonntag nach Hause.', qTr: { en: 'They are going home on Sunday.', fr: 'Ils rentrent dimanche.' }, answer: false, explain: { en: 'They go home on Saturday; Sunday is the coffee invitation.', fr: "Ils rentrent samedi ; dimanche, c'est l'invitation à prendre un café." } },
        ],
      },
      {
        id: 'goethe-a1-3-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: "p1", title: "Anzeigen 1", de: "Anzeige a\nEnglisch-Stammtisch\nJeden Mittwoch, 19 Uhr\nCafé Central\n\nAnzeige b\nDeutsch-Treff für alle\nJeden Mittwoch, 19 Uhr\nCafé Central", tr: { en: "Ad a\nEnglish conversation group\nEvery Wednesday, 7 p.m.\nCafé Central\n\nAd b\nGerman meet-up for everyone\nEvery Wednesday, 7 p.m.\nCafé Central", fr: "Annonce a\nGroupe de conversation anglaise\nChaque mercredi, 19 h\nCafé Central\n\nAnnonce b\nRencontre en allemand pour tous\nChaque mercredi, 19 h\nCafé Central" } },
          { id: "p2", title: "Anzeigen 2", de: "Anzeige a\nZeitungen austragen\n2 Stunden am Morgen\n8 Euro pro Stunde\n\nAnzeige b\nLagerarbeiter gesucht\nVollzeit, 40 Stunden pro Woche", tr: { en: "Ad a\nDelivering newspapers\n2 hours in the morning\n8 euros per hour\n\nAd b\nWarehouse worker wanted\nFull-time, 40 hours a week", fr: "Annonce a\nDistribution de journaux\n2 heures le matin\n8 euros de l'heure\n\nAnnonce b\nOuvrier d'entrepôt recherché\nTemps plein, 40 heures par semaine" } },
          { id: "p3", title: "Anzeigen 3", de: "Anzeige a\nBäckerei Hell\nBrot frisch ab 6 Uhr\nGeöffnet bis 12 Uhr\n\nAnzeige b\nBäckerei Hell\nBrot vom Tag nur 1 Euro\nAb 18 Uhr", tr: { en: "Ad a\nHell bakery\nFresh bread from 6 a.m.\nOpen until 12 noon\n\nAd b\nHell bakery\nDay-old bread only 1 euro\nFrom 6 p.m.", fr: "Annonce a\nBoulangerie Hell\nPain frais dès 6 h\nOuvert jusqu'à 12 h\n\nAnnonce b\nBoulangerie Hell\nPain de la veille seulement 1 euro\nDès 18 h" } },
          { id: "p4", title: "Anzeigen 4", de: "Anzeige a\nStadtführung am Sonntag\nTreffpunkt: Rathaus, 10 Uhr\n\nAnzeige b\nWanderung im Wald\nSonntag, 9 Uhr\nTreffpunkt: Parkplatz Nord", tr: { en: "Ad a\nCity tour on Sunday\nMeeting point: town hall, 10 a.m.\n\nAd b\nHike in the forest\nSunday, 9 a.m.\nMeeting point: north car park", fr: "Annonce a\nVisite guidée de la ville dimanche\nRendez-vous : mairie, 10 h\n\nAnnonce b\nRandonnée en forêt\nDimanche, 9 h\nRendez-vous : parking Nord" } },
          { id: "p5", title: "Anzeigen 5", de: "Anzeige a\nComputer-Reparatur\nSchnell und günstig\nMo–Fr 10–18 Uhr\n\nAnzeige b\nComputer-Kurs für Senioren\nMo–Fr 10–12 Uhr", tr: { en: "Ad a\nComputer repair\nFast and cheap\nMon–Fri 10 a.m.–6 p.m.\n\nAd b\nComputer course for seniors\nMon–Fri 10 a.m.–12 noon", fr: "Annonce a\nRéparation d'ordinateurs\nRapide et pas cher\nLun–ven 10 h–18 h\n\nAnnonce b\nCours d'informatique pour seniors\nLun–ven 10 h–12 h" } },
        ],
        items: [
          { id: "q206", textId: "p1", q: "Sie möchten Deutsch üben und neue Leute treffen. Wo finden Sie die Information?", qTr: { en: "You want to practise German and meet new people. Where do you find the information?", fr: "Vous voulez pratiquer l'allemand et rencontrer des gens. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b is a German meet-up.", fr: "L'annonce b est une rencontre en allemand." } },
          { id: "q207", textId: "p2", q: "Sie suchen einen kleinen Job mit wenig Stunden. Wo finden Sie die Information?", qTr: { en: "You are looking for a small job with few hours. Where do you find the information?", fr: "Vous cherchez un petit emploi avec peu d'heures. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a is only 2 hours; ad b is full-time.", fr: "L'annonce a ne demande que 2 heures ; l'annonce b est à temps plein." } },
          { id: "q208", textId: "p3", q: "Sie möchten am Abend günstig Brot kaufen. Wo finden Sie die Information?", qTr: { en: "You want to buy cheap bread in the evening. Where do you find the information?", fr: "Vous voulez acheter du pain pas cher le soir. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b: cheap bread from 6 p.m.", fr: "Annonce b : pain bon marché dès 18 h." } },
          { id: "q209", textId: "p4", q: "Sie möchten am Sonntag in der Natur wandern. Wo finden Sie die Information?", qTr: { en: "You want to go hiking in nature on Sunday. Where do you find the information?", fr: "Vous voulez faire une randonnée dans la nature dimanche. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b is a hike in the forest.", fr: "L'annonce b est une randonnée en forêt." } },
          { id: "q210", textId: "p5", q: "Ihr Computer funktioniert nicht mehr. Wo finden Sie die Information?", qTr: { en: "Your computer no longer works. Where do you find the information?", fr: "Votre ordinateur ne fonctionne plus. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a repairs computers.", fr: "L'annonce a répare les ordinateurs." } },
        ],
      },
      {
        id: 'goethe-a1-3-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: "s1", de: "Stadt-Archiv\nGeöffnet bis 16 Uhr\nFreitag geschlossen", tr: { en: "City archive\nOpen until 4 p.m.\nClosed on Friday", fr: "Archives municipales\nOuvert jusqu'à 16 h\nFermé le vendredi" } },
          { id: "s2", de: "Zutritt für Kinder unter 12 Jahren\nnur mit Eltern", tr: { en: "Admission for children under 12\nonly with parents", fr: "Accès pour les enfants de moins de 12 ans\nuniquement avec les parents" } },
          { id: "s3", de: "Heute: Straße gesperrt\nBitte nehmen Sie die Umleitung.", tr: { en: "Today: road closed\nPlease take the diversion.", fr: "Aujourd'hui : route fermée\nVeuillez prendre la déviation." } },
          { id: "s4", de: "Bitte Schuhe ausziehen!", tr: { en: "Please take off your shoes!", fr: "Veuillez enlever vos chaussures !" } },
          { id: "s5", de: "Fundbüro\nMo–Do 8–15 Uhr", tr: { en: "Lost-property office\nMon–Thu 8 a.m.–3 p.m.", fr: "Bureau des objets trouvés\nLun–jeu 8 h–15 h" } },
        ],
        items: [
          { id: "q211", textId: "s1", q: "Am Freitag ist das Stadt-Archiv geschlossen.", qTr: { en: "The city archive is closed on Friday.", fr: "Les archives municipales sont fermées le vendredi." }, answer: true, explain: { en: "\"Freitag geschlossen.\"", fr: "« Freitag geschlossen. »" } },
          { id: "q212", textId: "s2", q: "Kinder unter 12 Jahren dürfen allein hineingehen.", qTr: { en: "Children under 12 may go in alone.", fr: "Les enfants de moins de 12 ans peuvent entrer seuls." }, answer: false, explain: { en: "\"nur mit Eltern\" = only with parents.", fr: "« nur mit Eltern » = uniquement avec les parents." } },
          { id: "q213", textId: "s3", q: "Man soll heute die Umleitung nehmen.", qTr: { en: "Today you should take the diversion.", fr: "Aujourd'hui, il faut prendre la déviation." }, answer: true, explain: { en: "\"Straße gesperrt\" = road closed, so take the diversion.", fr: "« Straße gesperrt » = route fermée, donc déviation." } },
          { id: "q214", textId: "s4", q: "Man soll die Schuhe anlassen.", qTr: { en: "You should keep your shoes on.", fr: "Il faut garder ses chaussures." }, answer: false, explain: { en: "\"ausziehen\" = take off.", fr: "« ausziehen » = enlever." } },
          { id: "q215", textId: "s5", q: "Das Fundbüro ist am Mittwoch geöffnet.", qTr: { en: "The lost-property office is open on Wednesday.", fr: "Le bureau des objets trouvés est ouvert le mercredi." }, answer: true, explain: { en: "Mon–Thu includes Wednesday.", fr: "Lun–jeu inclut le mercredi." } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-3-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten ein Hotelzimmer buchen. Ihr Freund hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to book a hotel room. Your friend helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez réserver une chambre d'hôtel. Votre ami vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Ich heiße Elena Petrova. Ich bin am 21. Juli 1985 geboren. Ich komme aus Bulgarien. Ich möchte am 3. August kommen und drei Nächte bleiben. Ich brauche ein Einzelzimmer.',
          tr: {
            en: 'My name is Elena Petrova. I was born on 21 July 1985. I come from Bulgaria. I would like to arrive on 3 August and stay three nights. I need a single room.',
            fr: "Je m'appelle Elena Petrova. Je suis née le 21 juillet 1985. Je viens de Bulgarie. Je voudrais arriver le 3 août et rester trois nuits. J'ai besoin d'une chambre simple.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Petrova'] },
          { id: 'f2', label: 'Vorname', labelTr: { en: 'First name', fr: 'Prénom' }, accept: ['Elena'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['21.07.1985', '21.7.1985', '21. Juli 1985', '21 Juli 1985'] },
          { id: 'f4', label: 'Anreise (Datum)', labelTr: { en: 'Arrival (date)', fr: "Arrivée (date)" }, accept: ['3. August', '3 August', '03.08.', '3.8.', '03.08', '3.8', 'am 3. August'] },
          { id: 'f5', label: 'Zimmer (Einzelzimmer / Doppelzimmer)', labelTr: { en: 'Room (single / double)', fr: 'Chambre (simple / double)' }, accept: ['Einzelzimmer', 'ein Einzelzimmer'] },
        ],
      },
      {
        id: 'goethe-a1-3-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Sie feiern Ihren Geburtstag. Schreiben Sie eine Einladung an Ihren Freund Felix (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: {
          en: 'You are celebrating your birthday. Write an invitation to your friend Felix (about 30 words). Write about all three points.',
          fr: "Vous fêtez votre anniversaire. Écrivez une invitation à votre ami Felix (environ 30 mots). Traitez les trois points.",
        },
        points: [
          { id: 'p1', de: 'Wann?', tr: { en: 'When?', fr: 'Quand ?' }, keywords: ['uhr', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag', 'abend', 'heute', 'morgen'] },
          { id: 'p2', de: 'Wo?', tr: { en: 'Where?', fr: 'Où ?' }, keywords: ['bei mir', 'zu hause', 'café', 'restaurant', 'park', 'wohnung', 'garten', 'straße'] },
          { id: 'p3', de: 'Was soll Felix mitbringen?', tr: { en: 'What should Felix bring?', fr: 'Que doit apporter Felix ?' }, keywords: ['bring', 'kuchen', 'getränk', 'salat', 'musik'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Lieber Felix,\n\nich feiere am Samstag um 19 Uhr meinen Geburtstag. Die Party ist bei mir zu Hause. Bring bitte einen Kuchen mit. Kommst du?\n\nLiebe Grüße\nDavid',
          tr: {
            en: 'Dear Felix,\n\nI am celebrating my birthday on Saturday at 7 p.m. The party is at my place. Please bring a cake. Are you coming?\n\nBest wishes\nDavid',
            fr: "Cher Felix,\n\nje fête mon anniversaire samedi à 19 h. La fête a lieu chez moi. Apporte un gâteau, s'il te plaît. Tu viens ?\n\nBises\nDavid",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-3-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, languages, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, langues, profession, loisir.' },
        prompts: [
          { id: 'g3p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Guten Tag. Ich bin Elena Petrova. Das schreibt man P-E-T-R-O-V-A.', sampleTr: { en: 'Good day. I am Elena Petrova. You spell it P-E-T-R-O-V-A.', fr: 'Bonjour. Je suis Elena Petrova. Ça s\'écrit P-E-T-R-O-V-A.' } },
          { id: 'g3p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 39 Jahre alt und verheiratet.', sampleTr: { en: 'I am 39 years old and married.', fr: "J'ai 39 ans et je suis mariée." } },
          { id: 'g3p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus Bulgarien. Meine Stadt heißt Plowdiw.', sampleTr: { en: 'I come from Bulgaria. My town is called Plovdiv.', fr: 'Je viens de Bulgarie. Ma ville s\'appelle Plovdiv.' } },
          { id: 'g3p1d', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Bulgarisch, Russisch und ein bisschen Deutsch.', sampleTr: { en: 'I speak Bulgarian, Russian and a little German.', fr: 'Je parle bulgare, russe et un peu allemand.' } },
          { id: 'g3p1e', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich bin Krankenschwester und arbeite im Krankenhaus.', sampleTr: { en: 'I am a nurse and I work in a hospital.', fr: "Je suis infirmière et je travaille à l'hôpital." } },
          { id: 'g3p1f', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Ich wandere gern und ich lese viel.', sampleTr: { en: 'I like hiking and I read a lot.', fr: "J'aime la randonnée et je lis beaucoup." } },
        ],
      },
      {
        id: 'goethe-a1-3-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Einkaufen. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: shopping. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : faire les courses. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'g3p2a', cue: 'Supermarkt', cueTr: { en: 'Supermarket', fr: 'Supermarché' }, sample: 'Wo kaufst du ein? – Ich kaufe im Supermarkt in der Nähe ein.', sampleTr: { en: 'Where do you shop? – I shop at the supermarket nearby.', fr: 'Où fais-tu tes courses ? – Je fais mes courses au supermarché du coin.' }, tip: { en: 'Separable verb: "einkaufen" → "Ich kaufe … ein."', fr: 'Verbe à particule séparable : « einkaufen » → « Ich kaufe … ein. »' } },
          { id: 'g3p2b', cue: 'Geld', cueTr: { en: 'Money', fr: 'Argent' }, sample: 'Bezahlst du mit Karte oder bar? – Meistens mit Karte.', sampleTr: { en: 'Do you pay by card or in cash? – Mostly by card.', fr: 'Paies-tu par carte ou en espèces ? – Le plus souvent par carte.' } },
          { id: 'g3p2c', cue: 'Kleidung', cueTr: { en: 'Clothes', fr: 'Vêtements' }, sample: 'Wann kaufst du Kleidung? – Im Sommer und im Winter.', sampleTr: { en: 'When do you buy clothes? – In summer and in winter.', fr: 'Quand achètes-tu des vêtements ? – En été et en hiver.' } },
          { id: 'g3p2d', cue: 'Markt', cueTr: { en: 'Market', fr: 'Marché' }, sample: 'Gehst du gern auf den Markt? – Ja, dort ist das Gemüse frisch.', sampleTr: { en: 'Do you like going to the market? – Yes, the vegetables are fresh there.', fr: 'Aimes-tu aller au marché ? – Oui, les légumes y sont frais.' } },
          { id: 'g3p2e', cue: 'Einkaufsliste', cueTr: { en: 'Shopping list', fr: 'Liste de courses' }, sample: 'Was steht auf deiner Einkaufsliste? – Milch, Brot und Eier.', sampleTr: { en: 'What is on your shopping list? – Milk, bread and eggs.', fr: "Qu'y a-t-il sur ta liste de courses ? – Du lait, du pain et des œufs." } },
        ],
      },
      {
        id: 'goethe-a1-3-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'g3p3a', cue: 'Bild: eine Speisekarte', cueTr: { en: 'Picture: a menu', fr: 'Image : une carte de restaurant' }, sample: 'Bringen Sie mir bitte die Speisekarte. – Ja, sofort.', sampleTr: { en: 'Please bring me the menu. – Yes, right away.', fr: 'Apportez-moi la carte, s\'il vous plaît. – Oui, tout de suite.' }, tip: { en: 'Use "bitte" and "Sie" with strangers.', fr: 'Utilisez « bitte » et « Sie » avec des inconnus.' } },
          { id: 'g3p3b', cue: 'Bild: ein Stadtplan', cueTr: { en: 'Picture: a city map', fr: 'Image : un plan de la ville' }, sample: 'Können Sie mir bitte den Weg zeigen? – Gehen Sie geradeaus.', sampleTr: { en: 'Can you show me the way, please? – Go straight ahead.', fr: 'Pouvez-vous m\'indiquer le chemin, s\'il vous plaît ? – Allez tout droit.' } },
          { id: 'g3p3c', cue: 'Bild: ein Regenschirm', cueTr: { en: 'Picture: an umbrella', fr: 'Image : un parapluie' }, sample: 'Leihen Sie mir bitte Ihren Regenschirm? – Ja, gern.', sampleTr: { en: 'Could you lend me your umbrella, please? – Yes, gladly.', fr: 'Pourriez-vous me prêter votre parapluie, s\'il vous plaît ? – Oui, avec plaisir.' } },
          { id: 'g3p3d', cue: 'Bild: ein Taxi', cueTr: { en: 'Picture: a taxi', fr: 'Image : un taxi' }, sample: 'Rufen Sie bitte ein Taxi. – Natürlich, einen Moment.', sampleTr: { en: 'Please call a taxi. – Of course, one moment.', fr: 'Appelez un taxi, s\'il vous plaît. – Bien sûr, un instant.' } },
          { id: 'g3p3e', cue: 'Bild: eine Tasche', cueTr: { en: 'Picture: a bag', fr: 'Image : un sac' }, sample: 'Können Sie mir bitte helfen? Die Tasche ist schwer. – Ja, kein Problem.', sampleTr: { en: 'Can you help me, please? The bag is heavy. – Yes, no problem.', fr: 'Pouvez-vous m\'aider, s\'il vous plaît ? Le sac est lourd. – Oui, pas de problème.' } },
        ],
      },
    ],
  },
];

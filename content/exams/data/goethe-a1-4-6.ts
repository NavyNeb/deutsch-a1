import type { ExamSetInput } from '../types';

// Original practice material modelled on the Goethe-Zertifikat A1 format. Not an official paper.
export const GOETHE_A1_4_6: ExamSetInput[] = [
  {
    id: 'goethe-a1-4',
    board: 'goethe',
    level: 'A1',
    number: 4,
    lesen: [
      {
        id: 'goethe-a1-4-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Ihre Reservierung im Hotel Seeblick',
          de: "Sehr geehrter Herr Okafor,\n\nvielen Dank für Ihre Reservierung. Wir haben für Sie ein Doppelzimmer vom 12. bis 15. August. Das Zimmer ist im dritten Stock und hat einen Balkon. Eine Nacht kostet 85 Euro. Das Frühstück ist im Preis dabei.\n\nSie kommen mit dem Auto? Der Parkplatz hinter dem Hotel kostet 5 Euro pro Tag. Das Zimmer ist ab 15 Uhr frei.\n\nMit freundlichen Grüßen\nHotel Seeblick",
          tr: {
            en: "Subject: Your reservation at Hotel Seeblick\n\nDear Mr Okafor,\n\nthank you very much for your reservation. We have a double room for you from 12 to 15 August. The room is on the third floor and has a balcony. One night costs 85 euros. Breakfast is included in the price.\n\nAre you coming by car? The car park behind the hotel costs 5 euros per day. The room is available from 3 p.m.\n\nYours sincerely\nHotel Seeblick",
            fr: "Objet : Votre réservation à l'hôtel Seeblick\n\nMonsieur Okafor,\n\nmerci beaucoup pour votre réservation. Nous avons pour vous une chambre double du 12 au 15 août. La chambre est au troisième étage et a un balcon. Une nuit coûte 85 euros. Le petit-déjeuner est compris dans le prix.\n\nVous venez en voiture ? Le parking derrière l'hôtel coûte 5 euros par jour. La chambre est disponible à partir de 15 h.\n\nCordialement\nHôtel Seeblick",
          },
        }],
        items: [
          { id: 'q1', q: 'Herr Okafor hat ein Doppelzimmer reserviert.', qTr: { en: 'Mr Okafor has reserved a double room.', fr: 'M. Okafor a réservé une chambre double.' }, answer: true, explain: { en: '“Wir haben für Sie ein Doppelzimmer.”', fr: '« Wir haben für Sie ein Doppelzimmer. »' } },
          { id: 'q2', q: 'Herr Okafor bleibt eine Woche im Hotel.', qTr: { en: 'Mr Okafor is staying at the hotel for a week.', fr: "M. Okafor reste une semaine à l'hôtel." }, answer: false, explain: { en: 'The room is booked from 12 to 15 August, so only three nights.', fr: 'La chambre est réservée du 12 au 15 août, donc seulement trois nuits.' } },
          { id: 'q3', q: 'Das Frühstück kostet extra.', qTr: { en: 'Breakfast costs extra.', fr: 'Le petit-déjeuner est en supplément.' }, answer: false, explain: { en: '“Das Frühstück ist im Preis dabei” = breakfast is included.', fr: '« Das Frühstück ist im Preis dabei » = le petit-déjeuner est compris.' } },
          { id: 'q4', q: 'Am Anreisetag kann Herr Okafor ab 15 Uhr ins Zimmer.', qTr: { en: 'On the day of arrival Mr Okafor can go to the room from 3 p.m.', fr: "Le jour de l'arrivée, M. Okafor peut aller dans la chambre à partir de 15 h." }, answer: true, explain: { en: '“Das Zimmer ist ab 15 Uhr frei.”', fr: '« Das Zimmer ist ab 15 Uhr frei. »' } },
          { id: 'q5', q: 'Das Zimmer ist im ersten Stock.', qTr: { en: 'The room is on the first floor.', fr: 'La chambre est au premier étage.' }, answer: false, explain: { en: 'It is “im dritten Stock” (third floor).', fr: 'Elle est « im dritten Stock » (troisième étage).' } },
        ],
      },
      {
        id: 'goethe-a1-4-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: "p1", title: "Anzeigen 1", de: "Anzeige a\nHotel Seeblick\nDoppelzimmer ab 85 Euro\nmit Frühstück\n\nAnzeige b\nJugendherberge Altstadt\nBett ab 22 Euro\nFrühstück 4 Euro extra", tr: { en: "Ad a\nHotel Seeblick\nDouble room from 85 euros\nwith breakfast\n\nAd b\nOld Town youth hostel\nBed from 22 euros\nBreakfast 4 euros extra", fr: "Annonce a\nHôtel Seeblick\nChambre double à partir de 85 euros\navec petit-déjeuner\n\nAnnonce b\nAuberge de jeunesse Altstadt\nLit à partir de 22 euros\nPetit-déjeuner 4 euros en supplément" } },
          { id: "p2", title: "Anzeigen 2", de: "Anzeige a\nSupermarkt Frisch\nObst, Gemüse, Brot\nMo–Sa 8–20 Uhr\n\nAnzeige b\nBiomarkt Grünhof\nObst und Gemüse aus der Region\nMo–Fr 9–18 Uhr, Sa 8–13 Uhr", tr: { en: "Ad a\nFrisch supermarket\nFruit, vegetables, bread\nMon–Sat 8 a.m.–8 p.m.\n\nAd b\nGrünhof organic market\nFruit and vegetables from the region\nMon–Fri 9 a.m.–6 p.m., Sat 8 a.m.–1 p.m.", fr: "Annonce a\nSupermarché Frisch\nFruits, légumes, pain\nLun–sam 8 h–20 h\n\nAnnonce b\nMagasin bio Grünhof\nFruits et légumes de la région\nLun–ven 9 h–18 h, sam 8 h–13 h" } },
          { id: "p3", title: "Anzeigen 3", de: "Anzeige a\nStädtereise Berlin\n2 Tage, 120 Euro\n\nAnzeige b\nStädtereise Wien\n3 Tage, 190 Euro", tr: { en: "Ad a\nCity trip to Berlin\n2 days, 120 euros\n\nAd b\nCity trip to Vienna\n3 days, 190 euros", fr: "Annonce a\nVoyage à Berlin\n2 jours, 120 euros\n\nAnnonce b\nVoyage à Vienne\n3 jours, 190 euros" } },
          { id: "p4", title: "Anzeigen 4", de: "Anzeige a\nSupermarkt Billig\nJeden Tag Sonderangebote!\nKeine Lieferung\n\nAnzeige b\nSupermarkt Frisch\nLieferservice:\nWir bringen Ihre Einkäufe nach Hause.\nBestellung im Internet", tr: { en: "Ad a\nBillig supermarket\nSpecial offers every day!\nNo delivery\n\nAd b\nFrisch supermarket\nDelivery service:\nWe bring your shopping to your home.\nOrder on the internet", fr: "Annonce a\nSupermarché Billig\nOffres spéciales tous les jours !\nPas de livraison\n\nAnnonce b\nSupermarché Frisch\nService de livraison :\nNous apportons vos courses chez vous.\nCommande sur Internet" } },
          { id: "p5", title: "Anzeigen 5", de: "Anzeige a\nAutovermietung Mobil\nKleinwagen ab 35 Euro pro Tag\n\nAnzeige b\nFahrradverleih am See\nFahrrad 10 Euro pro Tag", tr: { en: "Ad a\nMobil car rental\nSmall car from 35 euros per day\n\nAd b\nLakeside bicycle hire\nBicycle 10 euros per day", fr: "Annonce a\nLocation de voitures Mobil\nPetite voiture à partir de 35 euros par jour\n\nAnnonce b\nLocation de vélos au bord du lac\nVélo 10 euros par jour" } },
        ],
        items: [
          { id: "q6", textId: "p1", q: "Sie sind Student und suchen eine billige Übernachtung. Wo finden Sie die Information?", qTr: { en: "You are a student and are looking for cheap accommodation. Where do you find the information?", fr: "Vous êtes étudiant et cherchez un hébergement bon marché. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b: a bed from 22 euros. A double room costs from 85 euros in ad a.", fr: "Annonce b : un lit à partir de 22 euros. Dans l'annonce a, la chambre double coûte à partir de 85 euros." } },
          { id: "q7", textId: "p2", q: "Sie möchten am Samstag um 19 Uhr einkaufen. Wo finden Sie die Information?", qTr: { en: "You want to go shopping on Saturday at 7 p.m. Where do you find the information?", fr: "Vous voulez faire vos courses samedi à 19 h. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a is open on Saturday until 8 p.m. Ad b closes at 1 p.m. on Saturday.", fr: "L'annonce a est ouverte le samedi jusqu'à 20 h. L'annonce b ferme à 13 h le samedi." } },
          { id: "q8", textId: "p3", q: "Sie möchten drei Tage nach Wien reisen. Wo finden Sie die Information?", qTr: { en: "You want to travel to Vienna for three days. Where do you find the information?", fr: "Vous voulez voyager trois jours à Vienne. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b is a trip to Vienna for 3 days. Ad a goes to Berlin.", fr: "L'annonce b est un voyage à Vienne de 3 jours. L'annonce a va à Berlin." } },
          { id: "q9", textId: "p4", q: "Sie haben keine Zeit zum Einkaufen. Sie möchten Lebensmittel nach Hause bestellen. Wo finden Sie die Information?", qTr: { en: "You have no time to go shopping. You want to order groceries to your home. Where do you find the information?", fr: "Vous n'avez pas le temps de faire les courses. Vous voulez commander des produits alimentaires à domicile. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b offers a delivery service (“Lieferservice”). Ad a says “Keine Lieferung”.", fr: "L'annonce b propose un service de livraison (« Lieferservice »). L'annonce a indique « Keine Lieferung »." } },
          { id: "q10", textId: "p5", q: "Sie möchten im Urlaub ein Auto mieten. Wo finden Sie die Information?", qTr: { en: "You want to rent a car on holiday. Where do you find the information?", fr: "Vous voulez louer une voiture pendant les vacances. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a is a car rental (“Autovermietung”). Ad b rents bicycles.", fr: "L'annonce a est une location de voitures (« Autovermietung »). L'annonce b loue des vélos." } },
        ],
      },
      {
        id: 'goethe-a1-4-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: "s1", de: "Hotel Seeblick\nFrühstück\nMo–Fr 7–10 Uhr\nSa und So 7–11 Uhr", tr: { en: "Hotel Seeblick\nBreakfast\nMon–Fri 7–10 a.m.\nSat and Sun 7–11 a.m.", fr: "Hôtel Seeblick\nPetit-déjeuner\nLun–ven 7 h–10 h\nSam et dim 7 h–11 h" } },
          { id: "s2", de: "Zimmerschlüssel bitte\nan der Rezeption abgeben.", tr: { en: "Please hand in your room key\nat reception.", fr: "Veuillez rendre la clé de votre chambre\nà la réception." } },
          { id: "s3", de: "Kasse 3 geschlossen.\nBitte gehen Sie zu Kasse 1 oder 2.", tr: { en: "Checkout 3 closed.\nPlease go to checkout 1 or 2.", fr: "Caisse 3 fermée.\nVeuillez aller à la caisse 1 ou 2." } },
          { id: "s4", de: "Eier\n10 Stück nur 2,29 Euro\nNur heute!", tr: { en: "Eggs\n10 for only 2.29 euros\nToday only!", fr: "Œufs\nles 10 pour seulement 2,29 euros\nAujourd'hui seulement !" } },
          { id: "s5", de: "Hotel-Pool\nGeöffnet von 8 bis 20 Uhr\nKinder nur mit Eltern!", tr: { en: "Hotel pool\nOpen from 8 a.m. to 8 p.m.\nChildren only with parents!", fr: "Piscine de l'hôtel\nOuverte de 8 h à 20 h\nEnfants uniquement accompagnés de leurs parents !" } },
        ],
        items: [
          { id: "q11", textId: "s1", q: "Am Sonntag gibt es bis 11 Uhr Frühstück.", qTr: { en: "On Sunday breakfast is served until 11 a.m.", fr: "Le dimanche, le petit-déjeuner est servi jusqu'à 11 h." }, answer: true, explain: { en: "“Sa und So 7–11 Uhr.”", fr: '« Sa und So 7–11 Uhr. »' } },
          { id: "q12", textId: "s2", q: "Man gibt den Schlüssel im Zimmer ab.", qTr: { en: "You hand in the key in the room.", fr: "On rend la clé dans la chambre." }, answer: false, explain: { en: "The key goes “an der Rezeption” (at reception).", fr: 'La clé se rend « an der Rezeption » (à la réception).' } },
          { id: "q13", textId: "s3", q: "Man kann an Kasse 3 bezahlen.", qTr: { en: "You can pay at checkout 3.", fr: "On peut payer à la caisse 3." }, answer: false, explain: { en: "“Kasse 3 geschlossen” = checkout 3 is closed.", fr: '« Kasse 3 geschlossen » = la caisse 3 est fermée.' } },
          { id: "q14", textId: "s4", q: "Das Angebot gilt nur heute.", qTr: { en: "The offer is valid today only.", fr: "L'offre n'est valable qu'aujourd'hui." }, answer: true, explain: { en: "“Nur heute!” = today only.", fr: '« Nur heute ! » = aujourd\'hui seulement.' } },
          { id: "q15", textId: "s5", q: "Kinder dürfen nur mit Eltern in den Pool.", qTr: { en: "Children may only go into the pool with their parents.", fr: "Les enfants ne peuvent aller à la piscine qu'avec leurs parents." }, answer: true, explain: { en: "“Kinder nur mit Eltern!”", fr: '« Kinder nur mit Eltern ! »' } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-4-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten ein Hotelzimmer reservieren. Ihre Freundin hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to reserve a hotel room. Your friend helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez réserver une chambre d'hôtel. Votre amie vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Ich heiße Elena Horvat. Ich bin am 23. Juli 1995 geboren. Meine Handynummer ist 0151 / 234 56 78. Ich möchte vom 3. bis zum 6. September ein Einzelzimmer.',
          tr: {
            en: 'My name is Elena Horvat. I was born on 23 July 1995. My mobile number is 0151 / 234 56 78. I would like a single room from 3 to 6 September.',
            fr: "Je m'appelle Elena Horvat. Je suis née le 23 juillet 1995. Mon numéro de portable est le 0151 / 234 56 78. Je voudrais une chambre simple du 3 au 6 septembre.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Horvat'] },
          { id: 'f2', label: 'Vorname', labelTr: { en: 'First name', fr: 'Prénom' }, accept: ['Elena'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['23.07.1995', '23.7.1995', '23. Juli 1995', '23 Juli 1995'] },
          { id: 'f4', label: 'Handynummer', labelTr: { en: 'Mobile number', fr: 'Numéro de portable' }, accept: ['0151 / 234 56 78', '0151 234 56 78', '0151/2345678', '01512345678', '0151 2345678'] },
          { id: 'f5', label: 'Zimmer (Einzelzimmer / Doppelzimmer)', labelTr: { en: 'Room (single / double)', fr: 'Chambre (simple / double)' }, accept: ['Einzelzimmer', 'ein Einzelzimmer', 'Einzel'] },
        ],
      },
      {
        id: 'goethe-a1-4-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Ihr Freund Paul geht heute in den Supermarkt. Sie brauchen noch etwas. Schreiben Sie ihm eine Nachricht (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: {
          en: 'Your friend Paul is going to the supermarket today. You still need something. Write him a message (about 30 words). Write about all three points.',
          fr: "Votre ami Paul va aujourd'hui au supermarché. Vous avez encore besoin de quelque chose. Écrivez-lui un message (environ 30 mots). Traitez les trois points.",
        },
        points: [
          { id: 'p1', de: 'Was brauchen Sie?', tr: { en: 'What do you need?', fr: 'De quoi avez-vous besoin ?' }, keywords: ['milch', 'brot', 'käse', 'eier', 'obst', 'wasser', 'apfel', 'äpfel', 'gemüse', 'butter'] },
          { id: 'p2', de: 'Wie viel?', tr: { en: 'How much?', fr: 'Quelle quantité ?' }, keywords: ['kilo', 'liter', 'stück', 'packung', 'flasche', 'zwei', 'drei', 'vier'] },
          { id: 'p3', de: 'Wann kommt Paul vorbei?', tr: { en: 'When does Paul come round?', fr: 'Quand Paul passe-t-il ?' }, keywords: ['abend', 'heute', 'uhr', 'morgen', 'wann', 'nachmittag'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Hallo Paul,\n\nkannst du bitte im Supermarkt für mich einkaufen? Ich brauche ein Kilo Äpfel, zwei Liter Milch und Brot. Kommst du heute Abend um 18 Uhr bei mir vorbei? Dann bezahle ich alles. Danke!\n\nLiebe Grüße\nSofia',
          tr: {
            en: 'Hi Paul,\n\ncan you please do some shopping at the supermarket for me? I need a kilo of apples, two litres of milk and bread. Will you come round to my place this evening at 6 p.m.? Then I will pay for everything. Thanks!\n\nBest wishes\nSofia',
            fr: "Salut Paul,\n\npeux-tu faire des courses pour moi au supermarché, s'il te plaît ? J'ai besoin d'un kilo de pommes, de deux litres de lait et de pain. Tu passes chez moi ce soir à 18 h ? Alors je paie tout. Merci !\n\nBises\nSofia",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-4-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, languages, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, langues, profession, loisir.' },
        prompts: [
          { id: 'g4p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Guten Tag. Mein Name ist Daniel Mbarga. Das schreibt man M-B-A-R-G-A.', sampleTr: { en: 'Good day. My name is Daniel Mbarga. You spell it M-B-A-R-G-A.', fr: "Bonjour. Je m'appelle Daniel Mbarga. Ça s'écrit M-B-A-R-G-A." } },
          { id: 'g4p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 29 Jahre alt. Mein Geburtstag ist im Oktober.', sampleTr: { en: 'I am 29 years old. My birthday is in October.', fr: "J'ai 29 ans. Mon anniversaire est en octobre." } },
          { id: 'g4p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus Kamerun, aus der Stadt Douala.', sampleTr: { en: 'I come from Cameroon, from the city of Douala.', fr: "Je viens du Cameroun, de la ville de Douala." } },
          { id: 'g4p1d', cue: 'Wohnort', cueTr: { en: 'Town', fr: 'Ville' }, sample: 'Ich wohne seit einem Jahr in Leipzig. Die Stadt gefällt mir sehr.', sampleTr: { en: 'I have lived in Leipzig for a year. I like the city a lot.', fr: "J'habite à Leipzig depuis un an. La ville me plaît beaucoup." } },
          { id: 'g4p1e', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Französisch, Englisch und Deutsch. Deutsch lerne ich seit sechs Monaten.', sampleTr: { en: 'I speak French, English and German. I have been learning German for six months.', fr: "Je parle français, anglais et allemand. J'apprends l'allemand depuis six mois." } },
          { id: 'g4p1f', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich bin Koch und arbeite in einem Hotel. Das macht mir Spaß.', sampleTr: { en: 'I am a cook and work in a hotel. I enjoy it.', fr: "Je suis cuisinier et je travaille dans un hôtel. Ça me plaît." } },
        ],
      },
      {
        id: 'goethe-a1-4-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Urlaub. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: holiday. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : vacances. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'g4p2a', cue: 'Hotel', cueTr: { en: 'Hotel', fr: 'Hôtel' }, sample: 'Wohnst du im Urlaub im Hotel? – Ja, aber ich mag auch Ferienwohnungen.', sampleTr: { en: 'Do you stay in a hotel on holiday? – Yes, but I also like holiday flats.', fr: "Logeras-tu à l'hôtel pendant les vacances ? – Oui, mais j'aime aussi les appartements de vacances." }, tip: { en: 'A yes/no question starts with the verb: “Wohnst du …?”', fr: 'Une question fermée commence par le verbe : « Wohnst du …? »' } },
          { id: 'g4p2b', cue: 'Reise', cueTr: { en: 'Trip', fr: 'Voyage' }, sample: 'Wohin fährst du im Sommer? – Ich fahre nach Italien.', sampleTr: { en: 'Where are you going in summer? – I am going to Italy.', fr: "Où pars-tu en été ? – Je vais en Italie." } },
          { id: 'g4p2c', cue: 'Wetter', cueTr: { en: 'Weather', fr: 'Météo' }, sample: 'Wie ist das Wetter im Urlaub? – Es ist warm und sonnig.', sampleTr: { en: 'What is the weather like on holiday? – It is warm and sunny.', fr: "Quel temps fait-il en vacances ? – Il fait chaud et il y a du soleil." } },
          { id: 'g4p2d', cue: 'Strand', cueTr: { en: 'Beach', fr: 'Plage' }, sample: 'Gehst du gern an den Strand? – Ja, ich schwimme sehr gern.', sampleTr: { en: 'Do you like going to the beach? – Yes, I like swimming a lot.', fr: "Aimes-tu aller à la plage ? – Oui, j'aime beaucoup nager." } },
          { id: 'g4p2e', cue: 'Koffer', cueTr: { en: 'Suitcase', fr: 'Valise' }, sample: 'Was packst du in den Koffer? – Kleidung, Schuhe und ein Buch.', sampleTr: { en: 'What do you pack in your suitcase? – Clothes, shoes and a book.', fr: "Que mets-tu dans ta valise ? – Des vêtements, des chaussures et un livre." } },
          { id: 'g4p2f', cue: 'Zug', cueTr: { en: 'Train', fr: 'Train' }, sample: 'Fährst du mit dem Zug oder mit dem Auto? – Mit dem Zug, das ist bequem.', sampleTr: { en: 'Do you go by train or by car? – By train, it is comfortable.', fr: "Pars-tu en train ou en voiture ? – En train, c'est confortable." } },
          { id: 'g4p2g', cue: 'Fotos', cueTr: { en: 'Photos', fr: 'Photos' }, sample: 'Machst du viele Fotos? – Ja, ich schicke sie dann meiner Familie.', sampleTr: { en: 'Do you take many photos? – Yes, then I send them to my family.', fr: "Prends-tu beaucoup de photos ? – Oui, je les envoie ensuite à ma famille." } },
          { id: 'g4p2h', cue: 'Mitbringsel', cueTr: { en: 'Souvenir', fr: 'Souvenir' }, sample: 'Was bringst du aus dem Urlaub mit? – Ich bringe Schokolade für meine Freunde mit.', sampleTr: { en: 'What do you bring back from holiday? – I bring chocolate for my friends.', fr: "Que rapportes-tu des vacances ? – Je rapporte du chocolat pour mes amis." }, tip: { en: 'Separable verb: “mitbringen” → “Ich bringe … mit.”', fr: 'Verbe à particule séparable : « mitbringen » → « Ich bringe … mit. »' } },
        ],
      },
      {
        id: 'goethe-a1-4-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'g4p3a', cue: 'Bild: ein Zimmerschlüssel', cueTr: { en: 'Picture: a room key', fr: 'Image : une clé de chambre' }, sample: 'Geben Sie mir bitte den Schlüssel für Zimmer 12. – Ja, hier bitte.', sampleTr: { en: 'Please give me the key for room 12. – Yes, here you are.', fr: "Donnez-moi la clé de la chambre 12, s'il vous plaît. – Oui, voilà." }, tip: { en: 'Polite request: “Geben Sie mir bitte …”', fr: 'Demande polie : « Geben Sie mir bitte … »' } },
          { id: 'g4p3b', cue: 'Bild: ein Frühstückstisch', cueTr: { en: 'Picture: a breakfast table', fr: 'Image : une table de petit-déjeuner' }, sample: 'Können Sie mir bitte noch einen Kaffee bringen? – Ja, sofort.', sampleTr: { en: 'Could you bring me another coffee, please? – Yes, right away.', fr: "Pouvez-vous m'apporter encore un café, s'il vous plaît ? – Oui, tout de suite." } },
          { id: 'g4p3c', cue: 'Bild: ein schwerer Koffer', cueTr: { en: 'Picture: a heavy suitcase', fr: 'Image : une valise lourde' }, sample: 'Können Sie mir bitte mit dem Koffer helfen? – Natürlich, kein Problem.', sampleTr: { en: 'Can you help me with the suitcase, please? – Of course, no problem.', fr: "Pouvez-vous m'aider avec la valise, s'il vous plaît ? – Bien sûr, pas de problème." } },
          { id: 'g4p3d', cue: 'Bild: eine Plastiktüte', cueTr: { en: 'Picture: a plastic bag', fr: 'Image : un sac plastique' }, sample: 'Ich brauche bitte eine Tüte. – Ja, die kostet 20 Cent.', sampleTr: { en: 'I need a bag, please. – Yes, it costs 20 cents.', fr: "J'ai besoin d'un sac, s'il vous plaît. – Oui, il coûte 20 centimes." } },
          { id: 'g4p3e', cue: 'Bild: eine Kasse', cueTr: { en: 'Picture: a till', fr: 'Image : une caisse' }, sample: 'Kann ich bitte mit Karte bezahlen? – Ja, das geht.', sampleTr: { en: 'Can I pay by card, please? – Yes, that is possible.', fr: "Puis-je payer par carte, s'il vous plaît ? – Oui, c'est possible." } },
          { id: 'g4p3f', cue: 'Bild: ein Handtuch', cueTr: { en: 'Picture: a towel', fr: 'Image : une serviette' }, sample: 'Ich brauche bitte noch ein Handtuch. – Ja, ich bringe es gleich.', sampleTr: { en: 'I need another towel, please. – Yes, I will bring it right away.', fr: "J'ai besoin d'une serviette de plus, s'il vous plaît. – Oui, je vous l'apporte tout de suite." } },
          { id: 'g4p3g', cue: 'Bild: eine Wasserflasche', cueTr: { en: 'Picture: a water bottle', fr: "Image : une bouteille d'eau" }, sample: 'Können Sie mir bitte eine Flasche Wasser geben? – Natürlich, still oder mit Gas?', sampleTr: { en: 'Could you give me a bottle of water, please? – Of course, still or sparkling?', fr: "Pouvez-vous me donner une bouteille d'eau, s'il vous plaît ? – Bien sûr, plate ou gazeuse ?" } },
        ],
      },
    ],
  },
  {
    id: 'goethe-a1-5',
    board: 'goethe',
    level: 'A1',
    number: 5,
    lesen: [
      {
        id: 'goethe-a1-5-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Informationen für morgen',
          de: "Hallo Jonas,\n\nschade, du warst gestern nicht im Kurs. Ich schreibe dir die wichtigen Informationen.\n\nAm Mittwoch haben wir einen Test über Lektion 5. Die Hausaufgabe ist Seite 42, Übung 3 und 4. Der Kurs beginnt morgen schon um 8.30 Uhr und nicht um 9 Uhr, denn Frau Lehmann hat später einen Termin. Bring bitte dein Wörterbuch mit.\n\nGute Besserung!\nAmina",
          tr: {
            en: "Subject: Information for tomorrow\n\nHi Jonas,\n\nit's a pity you were not in class yesterday. I am writing the important information for you.\n\nOn Wednesday we have a test on lesson 5. The homework is page 42, exercises 3 and 4. The class starts at 8.30 tomorrow, not at 9, because Mrs Lehmann has an appointment later. Please bring your dictionary.\n\nGet well soon!\nAmina",
            fr: "Objet : Informations pour demain\n\nSalut Jonas,\n\ndommage, tu n'étais pas au cours hier. Je t'écris les informations importantes.\n\nMercredi, nous avons un contrôle sur la leçon 5. Le devoir, c'est la page 42, exercices 3 et 4. Le cours commence demain déjà à 8 h 30 et pas à 9 h, parce que Mme Lehmann a un rendez-vous plus tard. Apporte ton dictionnaire, s'il te plaît.\n\nRétablis-toi vite !\nAmina",
          },
        }],
        items: [
          { id: 'q1', q: 'Jonas war gestern nicht im Kurs.', qTr: { en: 'Jonas was not in class yesterday.', fr: "Jonas n'était pas au cours hier." }, answer: true, explain: { en: '“Schade, du warst gestern nicht im Kurs.”', fr: '« Schade, du warst gestern nicht im Kurs. »' } },
          { id: 'q2', q: 'Der Test ist am Freitag.', qTr: { en: 'The test is on Friday.', fr: 'Le contrôle est vendredi.' }, answer: false, explain: { en: 'The test is on Wednesday (“Am Mittwoch”).', fr: 'Le contrôle est mercredi (« Am Mittwoch »).' } },
          { id: 'q3', q: 'Der Kurs beginnt morgen um 9 Uhr.', qTr: { en: 'The class starts at 9 a.m. tomorrow.', fr: 'Le cours commence demain à 9 h.' }, answer: false, explain: { en: 'It starts at 8.30, “nicht um 9 Uhr”.', fr: 'Il commence à 8 h 30, « nicht um 9 Uhr ».' } },
          { id: 'q4', q: 'Die Hausaufgabe ist auf Seite 42.', qTr: { en: 'The homework is on page 42.', fr: 'Le devoir est à la page 42.' }, answer: true, explain: { en: '“Die Hausaufgabe ist Seite 42, Übung 3 und 4.”', fr: '« Die Hausaufgabe ist Seite 42, Übung 3 und 4. »' } },
          { id: 'q5', q: 'Jonas soll sein Wörterbuch mitbringen.', qTr: { en: 'Jonas should bring his dictionary.', fr: 'Jonas doit apporter son dictionnaire.' }, answer: true, explain: { en: '“Bring bitte dein Wörterbuch mit.”', fr: '« Bring bitte dein Wörterbuch mit. »' } },
        ],
      },
      {
        id: 'goethe-a1-5-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: "p1", title: "Anzeigen 1", de: "Anzeige a\nSprachschule Babel\nWochenendkurs Deutsch\nSamstag, 9–13 Uhr\n\nAnzeige b\nSprachschule Babel\nIntensivkurs Deutsch\nMo–Fr, 9–13 Uhr", tr: { en: "Ad a\nBabel language school\nWeekend German course\nSaturday, 9 a.m.–1 p.m.\n\nAd b\nBabel language school\nIntensive German course\nMon–Fri, 9 a.m.–1 p.m.", fr: "Annonce a\nÉcole de langues Babel\nCours d'allemand du week-end\nSamedi, 9 h–13 h\n\nAnnonce b\nÉcole de langues Babel\nCours d'allemand intensif\nLun–ven, 9 h–13 h" } },
          { id: "p2", title: "Anzeigen 2", de: "Anzeige a\nNachhilfe Mathematik\nfür Schüler der Klassen 8–10\n\nAnzeige b\nHausaufgabenhilfe\nfür Kinder der Klassen 1–4\nMo–Do, 14–16 Uhr", tr: { en: "Ad a\nMaths tutoring\nfor pupils in years 8–10\n\nAd b\nHomework help\nfor children in years 1–4\nMon–Thu, 2–4 p.m.", fr: "Annonce a\nSoutien en mathématiques\npour les élèves des classes 8 à 10\n\nAnnonce b\nAide aux devoirs\npour les enfants des classes 1 à 4\nLun–jeu, 14 h–16 h" } },
          { id: "p3", title: "Anzeigen 3", de: "Anzeige a\nDr. Lenz – Kinderarzt\nMo–Fr 8–12 Uhr\n\nAnzeige b\nDr. Yilmaz – Hausarzt\nMo–Fr 8–12 Uhr\nMo, Di, Do auch 15–18 Uhr", tr: { en: "Ad a\nDr Lenz – paediatrician\nMon–Fri 8 a.m.–12 noon\n\nAd b\nDr Yilmaz – family doctor\nMon–Fri 8 a.m.–12 noon\nMon, Tue, Thu also 3–6 p.m.", fr: "Annonce a\nDr Lenz – pédiatre\nLun–ven 8 h–12 h\n\nAnnonce b\nDr Yilmaz – médecin généraliste\nLun–ven 8 h–12 h\nLun, mar, jeu aussi 15 h–18 h" } },
          { id: "p4", title: "Anzeigen 4", de: "Anzeige a\nApotheke am Markt\nMo–Sa 8–19 Uhr\n\nAnzeige b\nApotheke Stern\nMo–So 8–20 Uhr\nAuch sonntags geöffnet", tr: { en: "Ad a\nMarket pharmacy\nMon–Sat 8 a.m.–7 p.m.\n\nAd b\nStar pharmacy\nMon–Sun 8 a.m.–8 p.m.\nOpen on Sundays too", fr: "Annonce a\nPharmacie du Marché\nLun–sam 8 h–19 h\n\nAnnonce b\nPharmacie Stern\nLun–dim 8 h–20 h\nAussi ouverte le dimanche" } },
          { id: "p5", title: "Anzeigen 5", de: "Anzeige a\nComputerkurs für Anfänger\nMittwoch, 18–20 Uhr\nVolkshochschule\n\nAnzeige b\nComputerkurs: Programmieren\nSamstag, 10–14 Uhr\nNur mit Vorkenntnissen", tr: { en: "Ad a\nComputer course for beginners\nWednesday, 6–8 p.m.\nAdult education centre\n\nAd b\nComputer course: programming\nSaturday, 10 a.m.–2 p.m.\nOnly with previous knowledge", fr: "Annonce a\nCours d'informatique pour débutants\nMercredi, 18 h–20 h\nUniversité populaire\n\nAnnonce b\nCours d'informatique : programmation\nSamedi, 10 h–14 h\nUniquement avec des connaissances préalables" } },
        ],
        items: [
          { id: "q6", textId: "p1", q: "Sie arbeiten von Montag bis Freitag. Sie möchten am Wochenende Deutsch lernen. Wo finden Sie die Information?", qTr: { en: "You work from Monday to Friday. You want to learn German at the weekend. Where do you find the information?", fr: "Vous travaillez du lundi au vendredi. Vous voulez apprendre l'allemand le week-end. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a is a weekend course on Saturday. Ad b is Monday to Friday.", fr: "L'annonce a est un cours du week-end, le samedi. L'annonce b a lieu du lundi au vendredi." } },
          { id: "q7", textId: "p2", q: "Ihre Tochter ist sieben Jahre alt. Sie braucht Hilfe bei den Hausaufgaben. Wo finden Sie die Information?", qTr: { en: "Your daughter is seven years old. She needs help with her homework. Where do you find the information?", fr: "Votre fille a sept ans. Elle a besoin d'aide pour ses devoirs. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b is homework help for children in years 1–4. Ad a is for much older pupils.", fr: "L'annonce b propose de l'aide aux devoirs pour les classes 1 à 4. L'annonce a s'adresse à des élèves bien plus âgés." } },
          { id: "q8", textId: "p3", q: "Ihr Sohn ist fünf Jahre alt und hat Fieber. Wo finden Sie die Information?", qTr: { en: "Your son is five years old and has a fever. Where do you find the information?", fr: "Votre fils a cinq ans et a de la fièvre. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a is a paediatrician (“Kinderarzt”), a doctor for children.", fr: "L'annonce a est un pédiatre (« Kinderarzt »), un médecin pour enfants." } },
          { id: "q9", textId: "p4", q: "Sie brauchen am Sonntag Medikamente. Wo finden Sie die Information?", qTr: { en: "You need medicine on Sunday. Where do you find the information?", fr: "Vous avez besoin de médicaments dimanche. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b is “auch sonntags geöffnet” (also open on Sundays).", fr: "L'annonce b est « auch sonntags geöffnet » (aussi ouverte le dimanche)." } },
          { id: "q10", textId: "p5", q: "Sie haben noch nie mit einem Computer gearbeitet. Sie suchen einen Kurs. Wo finden Sie die Information?", qTr: { en: "You have never worked with a computer. You are looking for a course. Where do you find the information?", fr: "Vous n'avez jamais travaillé avec un ordinateur. Vous cherchez un cours. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a is for beginners (“Anfänger”). Ad b needs previous knowledge.", fr: "L'annonce a s'adresse aux débutants (« Anfänger »). L'annonce b demande des connaissances préalables." } },
        ],
      },
      {
        id: 'goethe-a1-5-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: "s1", de: "Praxis Dr. Yilmaz\nSprechzeiten\nMo, Di, Do 8–12 und 15–18 Uhr\nMi und Fr 8–12 Uhr", tr: { en: "Dr Yilmaz's practice\nConsultation hours\nMon, Tue, Thu 8 a.m.–12 noon and 3–6 p.m.\nWed and Fri 8 a.m.–12 noon", fr: "Cabinet du Dr Yilmaz\nHoraires de consultation\nLun, mar, jeu 8 h–12 h et 15 h–18 h\nMer et ven 8 h–12 h" } },
          { id: "s2", de: "Wartezimmer\nBitte nehmen Sie Platz.\nSie werden aufgerufen.", tr: { en: "Waiting room\nPlease take a seat.\nYou will be called.", fr: "Salle d'attente\nVeuillez vous asseoir.\nOn vous appellera." } },
          { id: "s3", de: "Heute kein Unterricht in Raum 204!\nDer Deutschkurs A1 ist in Raum 112.", tr: { en: "No lessons in room 204 today!\nThe German course A1 is in room 112.", fr: "Pas de cours dans la salle 204 aujourd'hui !\nLe cours d'allemand A1 a lieu dans la salle 112." } },
          { id: "s4", de: "Hustensaft\n3-mal täglich einen Löffel\nNach dem Essen", tr: { en: "Cough syrup\n1 spoonful 3 times a day\nAfter meals", fr: "Sirop contre la toux\n1 cuillère 3 fois par jour\nAprès les repas" } },
          { id: "s5", de: "Schulfest am Samstag\n10–15 Uhr\nEintritt frei!\nKuchen und Getränke zu verkaufen", tr: { en: "School fête on Saturday\n10 a.m.–3 p.m.\nFree entry!\nCake and drinks for sale", fr: "Fête de l'école samedi\n10 h–15 h\nEntrée gratuite !\nGâteaux et boissons en vente" } },
        ],
        items: [
          { id: "q11", textId: "s1", q: "Am Mittwochnachmittag ist die Praxis geöffnet.", qTr: { en: "The practice is open on Wednesday afternoon.", fr: "Le cabinet est ouvert le mercredi après-midi." }, answer: false, explain: { en: "On Wednesday the practice is only open 8–12.", fr: "Le mercredi, le cabinet n'est ouvert que de 8 h à 12 h." } },
          { id: "q12", textId: "s2", q: "Im Wartezimmer soll man warten.", qTr: { en: "In the waiting room you should wait.", fr: "Dans la salle d'attente, on doit attendre." }, answer: true, explain: { en: "“Bitte nehmen Sie Platz. Sie werden aufgerufen.”", fr: '« Bitte nehmen Sie Platz. Sie werden aufgerufen. »' } },
          { id: "q13", textId: "s3", q: "Der Deutschkurs ist heute in Raum 112.", qTr: { en: "The German course is in room 112 today.", fr: "Le cours d'allemand a lieu aujourd'hui dans la salle 112." }, answer: true, explain: { en: "“Der Deutschkurs A1 ist in Raum 112.”", fr: '« Der Deutschkurs A1 ist in Raum 112. »' } },
          { id: "q14", textId: "s4", q: "Man nimmt den Hustensaft nur einmal am Tag.", qTr: { en: "You take the cough syrup only once a day.", fr: "On prend le sirop contre la toux une seule fois par jour." }, answer: false, explain: { en: "“3-mal täglich” = three times a day.", fr: '« 3-mal täglich » = trois fois par jour.' } },
          { id: "q15", textId: "s5", q: "Man muss beim Schulfest Eintritt bezahlen.", qTr: { en: "You have to pay an entrance fee at the school fête.", fr: "Il faut payer l'entrée à la fête de l'école." }, answer: false, explain: { en: "“Eintritt frei” = free entry.", fr: '« Eintritt frei » = entrée gratuite.' } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-5-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie brauchen einen Termin beim Arzt. Ihr Freund hilft Ihnen und liest die Informationen vor. Füllen Sie das Anmeldeformular der Praxis aus.',
        instructionTr: {
          en: "You need an appointment with the doctor. Your friend helps you and reads out your details. Fill in the practice's registration form.",
          fr: "Vous avez besoin d'un rendez-vous chez le médecin. Votre ami vous aide et lit vos informations. Remplissez le formulaire d'inscription du cabinet.",
        },
        source: {
          id: 'info',
          de: 'Mein Name ist Tarek Haddad. Ich bin am 9. Februar 1988 geboren. Ich wohne in Dortmund, in der Bergstraße 9. Ich habe seit drei Tagen Kopfschmerzen. Ich möchte einen Termin am Montag.',
          tr: {
            en: 'My name is Tarek Haddad. I was born on 9 February 1988. I live in Dortmund, at Bergstraße 9. I have had a headache for three days. I would like an appointment on Monday.',
            fr: "Je m'appelle Tarek Haddad. Je suis né le 9 février 1988. J'habite à Dortmund, au 9 Bergstraße. J'ai mal à la tête depuis trois jours. Je voudrais un rendez-vous lundi.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Haddad'] },
          { id: 'f2', label: 'Vorname', labelTr: { en: 'First name', fr: 'Prénom' }, accept: ['Tarek'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['09.02.1988', '9.2.1988', '9.02.1988', '9. Februar 1988', '9 Februar 1988'] },
          { id: 'f4', label: 'Wohnort', labelTr: { en: 'Town', fr: 'Ville' }, accept: ['Dortmund'] },
          { id: 'f5', label: 'Beschwerden', labelTr: { en: 'Complaint', fr: 'Symptôme' }, accept: ['Kopfschmerzen', 'Kopfschmerz', 'Kopfweh'] },
        ],
      },
      {
        id: 'goethe-a1-5-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie möchten einen Deutschkurs am Abend besuchen. Schreiben Sie an die Sprachschule (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: {
          en: 'You want to attend a German course in the evening. Write to the language school (about 30 words). Write about all three points.',
          fr: "Vous voulez suivre un cours d'allemand le soir. Écrivez à l'école de langues (environ 30 mots). Traitez les trois points.",
        },
        points: [
          { id: 'p1', de: 'Anmeldung für den Kurs', tr: { en: 'Registration for the course', fr: 'Inscription au cours' }, keywords: ['anmeld', 'kurs', 'teilnehm'] },
          { id: 'p2', de: 'Frage zum Preis', tr: { en: 'Question about the price', fr: 'Question sur le prix' }, keywords: ['kost', 'preis', 'euro', 'bezahl'] },
          { id: 'p3', de: 'Frage zum Kursbeginn', tr: { en: 'Question about the start date', fr: 'Question sur le début du cours' }, keywords: ['beginn', 'wann', 'anfang', 'start'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Sehr geehrte Damen und Herren,\n\nich möchte mich für den Deutschkurs am Abend anmelden. Was kostet der Kurs? Wann beginnt er? Ich warte auf Ihre Antwort.\n\nMit freundlichen Grüßen\nOmar Said',
          tr: {
            en: 'Dear Sir or Madam,\n\nI would like to register for the German course in the evening. How much does the course cost? When does it start? I am waiting for your reply.\n\nYours sincerely\nOmar Said',
            fr: "Mesdames, Messieurs,\n\nje voudrais m'inscrire au cours d'allemand du soir. Combien coûte le cours ? Quand commence-t-il ? J'attends votre réponse.\n\nCordialement\nOmar Said",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-5-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, languages, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, langues, profession, loisir.' },
        prompts: [
          { id: 'g5p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Mein Name ist Fatima Diallo. Mein Vorname ist Fatima und mein Familienname ist Diallo.', sampleTr: { en: 'My name is Fatima Diallo. My first name is Fatima and my surname is Diallo.', fr: "Je m'appelle Fatima Diallo. Mon prénom est Fatima et mon nom de famille est Diallo." } },
          { id: 'g5p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 31 Jahre alt. Ich bin verheiratet und habe zwei Kinder.', sampleTr: { en: 'I am 31 years old. I am married and have two children.', fr: "J'ai 31 ans. Je suis mariée et j'ai deux enfants." } },
          { id: 'g5p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus dem Senegal, aus Dakar.', sampleTr: { en: 'I come from Senegal, from Dakar.', fr: 'Je viens du Sénégal, de Dakar.' } },
          { id: 'g5p1d', cue: 'Wohnort', cueTr: { en: 'Town', fr: 'Ville' }, sample: 'Ich wohne in Stuttgart. Meine Wohnung ist in der Nähe von der Schule.', sampleTr: { en: 'I live in Stuttgart. My flat is near the school.', fr: "J'habite à Stuttgart. Mon appartement est près de l'école." } },
          { id: 'g5p1e', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Französisch und Wolof. Ich lerne jetzt Deutsch.', sampleTr: { en: 'I speak French and Wolof. I am learning German now.', fr: "Je parle français et wolof. J'apprends maintenant l'allemand." } },
          { id: 'g5p1f', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Ich koche gern und ich tanze am Wochenende.', sampleTr: { en: 'I like cooking and I dance at the weekend.', fr: "J'aime cuisiner et je danse le week-end." } },
        ],
      },
      {
        id: 'goethe-a1-5-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Lernen und Schule. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: learning and school. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : apprendre et école. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'g5p2a', cue: 'Lehrer', cueTr: { en: 'Teacher', fr: 'Professeur' }, sample: 'Wie ist dein Lehrer? – Er ist sehr nett und erklärt gut.', sampleTr: { en: 'What is your teacher like? – He is very nice and explains well.', fr: 'Comment est ton professeur ? – Il est très gentil et il explique bien.' }, tip: { en: 'Ask about a person with “Wie ist …?”', fr: 'Pour demander comment est une personne : « Wie ist …? »' } },
          { id: 'g5p2b', cue: 'Hausaufgaben', cueTr: { en: 'Homework', fr: 'Devoirs' }, sample: 'Wann machst du die Hausaufgaben? – Am Abend, nach dem Essen.', sampleTr: { en: 'When do you do your homework? – In the evening, after dinner.', fr: 'Quand fais-tu tes devoirs ? – Le soir, après le repas.' } },
          { id: 'g5p2c', cue: 'Deutschkurs', cueTr: { en: 'German course', fr: "Cours d'allemand" }, sample: 'Wie oft hast du Deutschkurs? – Dreimal pro Woche, am Vormittag.', sampleTr: { en: 'How often do you have German class? – Three times a week, in the morning.', fr: "Combien de fois par semaine as-tu cours d'allemand ? – Trois fois par semaine, le matin." } },
          { id: 'g5p2d', cue: 'Wörterbuch', cueTr: { en: 'Dictionary', fr: 'Dictionnaire' }, sample: 'Hast du ein Wörterbuch? – Ja, ich habe eins auf dem Handy.', sampleTr: { en: 'Do you have a dictionary? – Yes, I have one on my phone.', fr: "As-tu un dictionnaire ? – Oui, j'en ai un sur mon portable." } },
          { id: 'g5p2e', cue: 'Prüfung', cueTr: { en: 'Exam', fr: 'Examen' }, sample: 'Wann ist deine Prüfung? – Im Juni. Ich lerne jeden Tag.', sampleTr: { en: 'When is your exam? – In June. I study every day.', fr: 'Quand est ton examen ? – En juin. Je révise tous les jours.' } },
          { id: 'g5p2f', cue: 'Pause', cueTr: { en: 'Break', fr: 'Pause' }, sample: 'Was machst du in der Pause? – Ich trinke Kaffee und spreche mit Freunden.', sampleTr: { en: 'What do you do during the break? – I drink coffee and talk with friends.', fr: 'Que fais-tu pendant la pause ? – Je bois du café et je parle avec des amis.' } },
          { id: 'g5p2g', cue: 'Mitschüler', cueTr: { en: 'Classmates', fr: 'Camarades de classe' }, sample: 'Wie viele Leute sind in deinem Kurs? – Es sind zwölf Personen.', sampleTr: { en: 'How many people are in your course? – There are twelve people.', fr: 'Combien de personnes y a-t-il dans ton cours ? – Il y a douze personnes.' } },
          { id: 'g5p2h', cue: 'Stundenplan', cueTr: { en: 'Timetable', fr: 'Emploi du temps' }, sample: 'Wann beginnt dein Kurs? – Um 9 Uhr, und um 12.30 Uhr ist er zu Ende.', sampleTr: { en: 'When does your course start? – At 9 o’clock, and it ends at 12.30.', fr: 'Quand commence ton cours ? – À 9 h, et il se termine à 12 h 30.' } },
        ],
      },
      {
        id: 'goethe-a1-5-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'g5p3a', cue: 'Bild: ein Telefon in der Arztpraxis', cueTr: { en: 'Picture: a telephone in a doctor’s practice', fr: 'Image : un téléphone dans un cabinet médical' }, sample: 'Ich möchte bitte einen Termin für Montag. – Ja, um 10 Uhr ist noch frei.', sampleTr: { en: 'I would like an appointment for Monday, please. – Yes, 10 o’clock is still free.', fr: "Je voudrais un rendez-vous pour lundi, s'il vous plaît. – Oui, à 10 h, il y a encore de la place." }, tip: { en: 'Polite wish: “Ich möchte bitte …”', fr: 'Souhait poli : « Ich möchte bitte … »' } },
          { id: 'g5p3b', cue: 'Bild: ein Kalender', cueTr: { en: 'Picture: a calendar', fr: 'Image : un calendrier' }, sample: 'Können wir den Termin bitte verschieben? – Ja, geht es am Donnerstag?', sampleTr: { en: 'Can we move the appointment, please? – Yes, would Thursday work?', fr: "Pouvons-nous déplacer le rendez-vous, s'il vous plaît ? – Oui, est-ce que jeudi vous convient ?" } },
          { id: 'g5p3c', cue: 'Bild: ein Lehrer an der Tafel', cueTr: { en: 'Picture: a teacher at the board', fr: 'Image : un professeur au tableau' }, sample: 'Können Sie das bitte noch einmal sagen? – Gern, ich spreche langsamer.', sampleTr: { en: 'Could you say that once more, please? – Gladly, I will speak more slowly.', fr: "Pouvez-vous répéter cela encore une fois, s'il vous plaît ? – Volontiers, je parle plus lentement." } },
          { id: 'g5p3d', cue: 'Bild: ein leeres Blatt', cueTr: { en: 'Picture: an empty sheet of paper', fr: 'Image : une feuille vide' }, sample: 'Kann ich bitte ein Blatt Papier haben? – Ja, hier bitte.', sampleTr: { en: 'May I have a sheet of paper, please? – Yes, here you are.', fr: "Puis-je avoir une feuille de papier, s'il vous plaît ? – Oui, voilà." } },
          { id: 'g5p3e', cue: 'Bild: ein Rezept', cueTr: { en: 'Picture: a prescription', fr: 'Image : une ordonnance' }, sample: 'Ich brauche bitte diese Tabletten. – Moment, ich schaue nach.', sampleTr: { en: 'I need these tablets, please. – One moment, I will check.', fr: "J'ai besoin de ces comprimés, s'il vous plaît. – Un instant, je vais voir." } },
          { id: 'g5p3f', cue: 'Bild: ein Formular', cueTr: { en: 'Picture: a form', fr: 'Image : un formulaire' }, sample: 'Können Sie mir bitte beim Formular helfen? – Ja, natürlich.', sampleTr: { en: 'Can you help me with the form, please? – Yes, of course.', fr: "Pouvez-vous m'aider avec le formulaire, s'il vous plaît ? – Oui, bien sûr." } },
          { id: 'g5p3g', cue: 'Bild: ein Glas Wasser im Wartezimmer', cueTr: { en: 'Picture: a glass of water in the waiting room', fr: "Image : un verre d'eau dans la salle d'attente" }, sample: 'Bekomme ich bitte ein Glas Wasser? – Ja, dort steht eine Flasche.', sampleTr: { en: 'Could I have a glass of water, please? – Yes, there is a bottle over there.', fr: "Puis-je avoir un verre d'eau, s'il vous plaît ? – Oui, il y a une bouteille là-bas." } },
        ],
      },
    ],
  },
  {
    id: 'goethe-a1-6',
    board: 'goethe',
    level: 'A1',
    number: 6,
    lesen: [
      {
        id: 'goethe-a1-6-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Einladung zu meinem Geburtstag',
          de: "Hallo Marco,\n\nam Samstag habe ich Geburtstag und ich feiere mit Freunden im Restaurant Roma. Das Restaurant ist in der Hauptstraße 8, direkt an der U-Bahn-Station Rathaus. Wir treffen uns um 19 Uhr. Es gibt Pizza, Pasta und Salat. Ein Geschenk brauchst du nicht mitzubringen. Ich freue mich auf dich!\n\nSchreib mir bitte bis Mittwoch, ob du kommst.\n\nLiebe Grüße\nNina",
          tr: {
            en: "Subject: Invitation to my birthday\n\nHi Marco,\n\non Saturday it is my birthday and I am celebrating with friends at the Roma restaurant. The restaurant is at Hauptstraße 8, right at the Rathaus underground station. We are meeting at 7 p.m. There will be pizza, pasta and salad. You do not need to bring a present. I am looking forward to seeing you!\n\nPlease write to me by Wednesday to say whether you are coming.\n\nBest wishes\nNina",
            fr: "Objet : Invitation à mon anniversaire\n\nSalut Marco,\n\nsamedi, c'est mon anniversaire et je le fête avec des amis au restaurant Roma. Le restaurant est au 8 Hauptstraße, juste à côté de la station de métro Rathaus. Nous nous retrouvons à 19 h. Il y a de la pizza, des pâtes et de la salade. Tu n'as pas besoin d'apporter de cadeau. Je me réjouis de te voir !\n\nÉcris-moi avant mercredi pour me dire si tu viens.\n\nBises\nNina",
          },
        }],
        items: [
          { id: 'q1', q: 'Nina hat am Samstag Geburtstag.', qTr: { en: 'It is Nina’s birthday on Saturday.', fr: "C'est l'anniversaire de Nina samedi." }, answer: true, explain: { en: '“Am Samstag habe ich Geburtstag.”', fr: '« Am Samstag habe ich Geburtstag. »' } },
          { id: 'q2', q: 'Nina feiert zu Hause.', qTr: { en: 'Nina is celebrating at home.', fr: 'Nina fête chez elle.' }, answer: false, explain: { en: 'She celebrates “im Restaurant Roma”.', fr: 'Elle fête « im Restaurant Roma ».' } },
          { id: 'q3', q: 'Die Feier beginnt um 19 Uhr.', qTr: { en: 'The party starts at 7 p.m.', fr: 'La fête commence à 19 h.' }, answer: true, explain: { en: '“Wir treffen uns um 19 Uhr.”', fr: '« Wir treffen uns um 19 Uhr. »' } },
          { id: 'q4', q: 'Marco soll bis Freitag antworten.', qTr: { en: 'Marco should reply by Friday.', fr: 'Marco doit répondre avant vendredi.' }, answer: false, explain: { en: 'Nina asks for an answer “bis Mittwoch” (by Wednesday).', fr: 'Nina demande une réponse « bis Mittwoch » (avant mercredi).' } },
          { id: 'q5', q: 'Das Restaurant ist bei der U-Bahn-Station Rathaus.', qTr: { en: 'The restaurant is at the Rathaus underground station.', fr: 'Le restaurant est près de la station de métro Rathaus.' }, answer: true, explain: { en: '“Direkt an der U-Bahn-Station Rathaus.”', fr: '« Direkt an der U-Bahn-Station Rathaus. »' } },
        ],
      },
      {
        id: 'goethe-a1-6-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: "p1", title: "Anzeigen 1", de: "Anzeige a\nCafé Lotte\nFrühstücksbuffet\nSa und So, 9–13 Uhr\n12 Euro\n\nAnzeige b\nBistro Eck\nFrühstück\nMo–Fr, 7–11 Uhr\nab 6 Euro", tr: { en: "Ad a\nCafé Lotte\nBreakfast buffet\nSat and Sun, 9 a.m.–1 p.m.\n12 euros\n\nAd b\nBistro Eck\nBreakfast\nMon–Fri, 7–11 a.m.\nfrom 6 euros", fr: "Annonce a\nCafé Lotte\nBuffet de petit-déjeuner\nSam et dim, 9 h–13 h\n12 euros\n\nAnnonce b\nBistro Eck\nPetit-déjeuner\nLun–ven, 7 h–11 h\nà partir de 6 euros" } },
          { id: "p2", title: "Anzeigen 2", de: "Anzeige a\nRestaurant Zum Hirsch\nFleisch und Fisch\nRegionale Küche\n\nAnzeige b\nRestaurant Grünblatt\nNur vegetarisch und vegan\nJeden Tag ab 11 Uhr", tr: { en: "Ad a\nZum Hirsch restaurant\nMeat and fish\nRegional cuisine\n\nAd b\nGrünblatt restaurant\nVegetarian and vegan only\nEvery day from 11 a.m.", fr: "Annonce a\nRestaurant Zum Hirsch\nViande et poisson\nCuisine régionale\n\nAnnonce b\nRestaurant Grünblatt\nUniquement végétarien et végétalien\nTous les jours dès 11 h" } },
          { id: "p3", title: "Anzeigen 3", de: "Anzeige a\nGasthaus Linde\nSaal für Feiern\nbis 30 Personen\n\nAnzeige b\nImbiss Schnell\nCurrywurst und Pommes\nNur zum Mitnehmen", tr: { en: "Ad a\nLinde inn\nHall for parties\nup to 30 people\n\nAd b\nSchnell snack bar\nCurry sausage and chips\nTakeaway only", fr: "Annonce a\nAuberge Linde\nSalle pour fêtes\njusqu'à 30 personnes\n\nAnnonce b\nSnack Schnell\nCurrywurst et frites\nÀ emporter uniquement" } },
          { id: "p4", title: "Anzeigen 4", de: "Anzeige a\nBlumenladen Rosa\nBlumen zum Geburtstag\nLieferung nach Hause\n\nAnzeige b\nBäckerei Sommer\nTorten nach Wunsch\nBitte zwei Tage vorher bestellen", tr: { en: "Ad a\nRosa flower shop\nFlowers for birthdays\nHome delivery\n\nAd b\nSommer bakery\nCakes made to order\nPlease order two days in advance", fr: "Annonce a\nFleuriste Rosa\nFleurs pour anniversaires\nLivraison à domicile\n\nAnnonce b\nBoulangerie Sommer\nGâteaux sur commande\nMerci de commander deux jours à l'avance" } },
          { id: "p5", title: "Anzeigen 5", de: "Anzeige a\nPizza-Express\nLieferung bis 23 Uhr\nPizza ab 8 Euro\n\nAnzeige b\nPizzeria Napoli\nMo–So, 11–22 Uhr\nNur im Restaurant", tr: { en: "Ad a\nPizza-Express\nDelivery until 11 p.m.\nPizza from 8 euros\n\nAd b\nNapoli pizzeria\nMon–Sun, 11 a.m.–10 p.m.\nDine-in only", fr: "Annonce a\nPizza-Express\nLivraison jusqu'à 23 h\nPizza à partir de 8 euros\n\nAnnonce b\nPizzeria Napoli\nLun–dim, 11 h–22 h\nUniquement sur place" } },
        ],
        items: [
          { id: "q6", textId: "p1", q: "Sie möchten am Sonntag frühstücken gehen. Wo finden Sie die Information?", qTr: { en: "You want to go out for breakfast on Sunday. Where do you find the information?", fr: "Vous voulez aller prendre le petit-déjeuner dimanche. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a serves breakfast on Saturday and Sunday. Ad b only Monday to Friday.", fr: "L'annonce a sert le petit-déjeuner le samedi et le dimanche. L'annonce b seulement du lundi au vendredi." } },
          { id: "q7", textId: "p2", q: "Sie essen kein Fleisch und keinen Fisch. Wo finden Sie die Information?", qTr: { en: "You eat no meat and no fish. Where do you find the information?", fr: "Vous ne mangez ni viande ni poisson. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b is “nur vegetarisch und vegan” (vegetarian and vegan only).", fr: "L'annonce b est « nur vegetarisch und vegan » (uniquement végétarien et végétalien)." } },
          { id: "q8", textId: "p3", q: "Sie möchten Ihren Geburtstag mit 20 Gästen feiern. Wo finden Sie die Information?", qTr: { en: "You want to celebrate your birthday with 20 guests. Where do you find the information?", fr: "Vous voulez fêter votre anniversaire avec 20 invités. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a has a hall for parties for up to 30 people. Ad b is takeaway only.", fr: "L'annonce a propose une salle pour fêtes jusqu'à 30 personnes. L'annonce b est uniquement à emporter." } },
          { id: "q9", textId: "p4", q: "Sie brauchen eine Torte für den Geburtstag Ihrer Tochter. Wo finden Sie die Information?", qTr: { en: "You need a cake for your daughter’s birthday. Where do you find the information?", fr: "Vous avez besoin d'un gâteau pour l'anniversaire de votre fille. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 1, explain: { en: "Ad b is a bakery that makes cakes to order (“Torten nach Wunsch”).", fr: "L'annonce b est une boulangerie qui fait des gâteaux sur commande (« Torten nach Wunsch »)." } },
          { id: "q10", textId: "p5", q: "Sie möchten heute Abend Pizza nach Hause bestellen. Wo finden Sie die Information?", qTr: { en: "You want to order pizza to your home this evening. Where do you find the information?", fr: "Vous voulez commander une pizza à domicile ce soir. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: "Ad a", fr: "Annonce a" }, { en: "Ad b", fr: "Annonce b" }], answer: 0, explain: { en: "Ad a offers delivery (“Lieferung”). Ad b is “nur im Restaurant”.", fr: "L'annonce a propose la livraison (« Lieferung »). L'annonce b est « nur im Restaurant »." } },
        ],
      },
      {
        id: 'goethe-a1-6-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: "s1", de: "Restaurant Roma\nMontag geschlossen\nDi–So 11–23 Uhr", tr: { en: "Roma restaurant\nClosed on Monday\nTue–Sun 11 a.m.–11 p.m.", fr: "Restaurant Roma\nFermé le lundi\nMar–dim 11 h–23 h" } },
          { id: "s2", de: "Bitte warten Sie hier.\nWir bringen Sie zu einem Tisch.", tr: { en: "Please wait here.\nWe will take you to a table.", fr: "Veuillez attendre ici.\nNous vous conduirons à une table." } },
          { id: "s3", de: "Geburtstag?\nDas Dessert ist gratis!\nBitte zeigen Sie Ihren Ausweis.", tr: { en: "Birthday?\nThe dessert is free!\nPlease show your ID.", fr: "Anniversaire ?\nLe dessert est gratuit !\nVeuillez présenter votre pièce d'identité." } },
          { id: "s4", de: "Café Lotte\nWLAN kostet 2 Euro pro Stunde.\nFragen Sie an der Theke.", tr: { en: "Café Lotte\nWi-Fi costs 2 euros per hour.\nAsk at the counter.", fr: "Café Lotte\nLe Wi-Fi coûte 2 euros par heure.\nDemandez au comptoir." } },
          { id: "s5", de: "Kuchen von gestern\nheute zum halben Preis!", tr: { en: "Yesterday’s cake\nhalf price today!", fr: "Gâteaux d'hier\nà moitié prix aujourd'hui !" } },
        ],
        items: [
          { id: "q11", textId: "s1", q: "Das Restaurant ist am Montag geöffnet.", qTr: { en: "The restaurant is open on Monday.", fr: "Le restaurant est ouvert le lundi." }, answer: false, explain: { en: "“Montag geschlossen” = closed on Monday.", fr: '« Montag geschlossen » = fermé le lundi.' } },
          { id: "q12", textId: "s2", q: "Man soll am Eingang warten.", qTr: { en: "You should wait at the entrance.", fr: "On doit attendre à l'entrée." }, answer: true, explain: { en: "“Bitte warten Sie hier. Wir bringen Sie zu einem Tisch.”", fr: '« Bitte warten Sie hier. Wir bringen Sie zu einem Tisch. »' } },
          { id: "q13", textId: "s3", q: "Geburtstagskinder bekommen ein Dessert gratis.", qTr: { en: "Birthday guests get a free dessert.", fr: "Les personnes dont c'est l'anniversaire reçoivent un dessert gratuit." }, answer: true, explain: { en: "“Das Dessert ist gratis!” = the dessert is free.", fr: '« Das Dessert ist gratis ! » = le dessert est gratuit.' } },
          { id: "q14", textId: "s4", q: "Das WLAN im Café ist kostenlos.", qTr: { en: "The Wi-Fi in the café is free.", fr: "Le Wi-Fi du café est gratuit." }, answer: false, explain: { en: "“WLAN kostet 2 Euro pro Stunde.”", fr: '« WLAN kostet 2 Euro pro Stunde. »' } },
          { id: "q15", textId: "s5", q: "Der Kuchen ist heute billiger.", qTr: { en: "The cake is cheaper today.", fr: "Le gâteau est moins cher aujourd'hui." }, answer: true, explain: { en: "“Zum halben Preis” = at half price.", fr: '« Zum halben Preis » = à moitié prix.' } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-6-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten in einem Restaurant einen Tisch für Ihren Geburtstag reservieren. Ihr Freund hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to reserve a table in a restaurant for your birthday. Your friend helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez réserver une table dans un restaurant pour votre anniversaire. Votre ami vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Ich heiße Lukas Brandt. Ich möchte für meinen Geburtstag einen Tisch reservieren. Wir sind sechs Personen. Wir kommen am 20. Juni um 19 Uhr. Meine Telefonnummer ist 0170 / 987 65 43.',
          tr: {
            en: 'My name is Lukas Brandt. I would like to reserve a table for my birthday. There are six of us. We are coming on 20 June at 7 p.m. My telephone number is 0170 / 987 65 43.',
            fr: "Je m'appelle Lukas Brandt. Je voudrais réserver une table pour mon anniversaire. Nous sommes six personnes. Nous venons le 20 juin à 19 h. Mon numéro de téléphone est le 0170 / 987 65 43.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Brandt'] },
          { id: 'f2', label: 'Vorname', labelTr: { en: 'First name', fr: 'Prénom' }, accept: ['Lukas'] },
          { id: 'f3', label: 'Anzahl der Personen', labelTr: { en: 'Number of people', fr: 'Nombre de personnes' }, accept: ['6', 'sechs', '6 Personen', 'sechs Personen'] },
          { id: 'f4', label: 'Datum', labelTr: { en: 'Date', fr: 'Date' }, accept: ['20.06.', '20.6.', '20.06', '20.6', '20. Juni', '20 Juni', '20.06.2025', '20.6.2025'] },
          { id: 'f5', label: 'Uhrzeit', labelTr: { en: 'Time', fr: 'Heure' }, accept: ['19 Uhr', '19.00 Uhr', '19:00 Uhr', '19.00', '19:00', '19'] },
        ],
      },
      {
        id: 'goethe-a1-6-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Sie haben bald Geburtstag und möchten Ihre Freundin Lisa einladen. Schreiben Sie ihr eine Nachricht (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: {
          en: 'It is your birthday soon and you want to invite your friend Lisa. Write her a message (about 30 words). Write about all three points.',
          fr: "C'est bientôt votre anniversaire et vous voulez inviter votre amie Lisa. Écrivez-lui un message (environ 30 mots). Traitez les trois points.",
        },
        points: [
          { id: 'p1', de: 'Einladung zum Geburtstag', tr: { en: 'Invitation to the birthday', fr: "Invitation à l'anniversaire" }, keywords: ['einlad', 'geburtstag', 'feier', 'party', 'komm'] },
          { id: 'p2', de: 'Wann und wo?', tr: { en: 'When and where?', fr: 'Quand et où ?' }, keywords: ['samstag', 'sonntag', 'freitag', 'uhr', 'restaurant', 'café', 'zu hause', 'bei mir'] },
          { id: 'p3', de: 'Was soll Lisa mitbringen?', tr: { en: 'What should Lisa bring?', fr: 'Que doit apporter Lisa ?' }, keywords: ['mitbring', 'kuchen', 'salat', 'getränk', 'nichts', 'geschenk'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Liebe Lisa,\n\nam Samstag habe ich Geburtstag. Ich lade dich herzlich ein! Wir feiern um 18 Uhr bei mir zu Hause. Kannst du bitte einen Kuchen mitbringen? Ich freue mich auf dich.\n\nLiebe Grüße\nTim',
          tr: {
            en: 'Dear Lisa,\n\nIt is my birthday on Saturday. I warmly invite you! We are celebrating at 6 p.m. at my place. Can you please bring a cake? I am looking forward to seeing you.\n\nBest wishes\nTim',
            fr: "Chère Lisa,\n\nsamedi, c'est mon anniversaire. Je t'invite de tout cœur ! Nous fêtons à 18 h chez moi. Peux-tu apporter un gâteau, s'il te plaît ? Je me réjouis de te voir.\n\nBises\nTim",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-6-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, languages, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, langues, profession, loisir.' },
        prompts: [
          { id: 'g6p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Hallo, ich bin Ivan Kovač. Man schreibt das K-O-V-A-C mit Hatschek.', sampleTr: { en: 'Hello, I am Ivan Kovač. It is spelled K-O-V-A-C with a háček.', fr: "Bonjour, je suis Ivan Kovač. Ça s'écrit K-O-V-A-C avec un hatchek." } },
          { id: 'g6p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 42 Jahre alt. Ich habe einen Sohn und eine Tochter.', sampleTr: { en: 'I am 42 years old. I have a son and a daughter.', fr: "J'ai 42 ans. J'ai un fils et une fille." } },
          { id: 'g6p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus Kroatien, aus Zagreb.', sampleTr: { en: 'I come from Croatia, from Zagreb.', fr: 'Je viens de Croatie, de Zagreb.' } },
          { id: 'g6p1d', cue: 'Wohnort', cueTr: { en: 'Town', fr: 'Ville' }, sample: 'Ich wohne in Nürnberg, in einem Haus mit Garten.', sampleTr: { en: 'I live in Nuremberg, in a house with a garden.', fr: "J'habite à Nuremberg, dans une maison avec jardin." } },
          { id: 'g6p1e', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich bin Busfahrer. Ich arbeite früh am Morgen.', sampleTr: { en: 'I am a bus driver. I work early in the morning.', fr: 'Je suis chauffeur de bus. Je travaille tôt le matin.' } },
          { id: 'g6p1f', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Ich angle gern und ich spiele mit meinen Kindern Fußball.', sampleTr: { en: 'I like fishing and I play football with my children.', fr: "J'aime pêcher et je joue au football avec mes enfants." } },
        ],
      },
      {
        id: 'goethe-a1-6-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Feste und Essen gehen. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: celebrations and eating out. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : fêtes et sortir manger. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'g6p2a', cue: 'Geburtstag', cueTr: { en: 'Birthday', fr: 'Anniversaire' }, sample: 'Wann hast du Geburtstag? – Am 3. März.', sampleTr: { en: 'When is your birthday? – On 3 March.', fr: "Quand est ton anniversaire ? – Le 3 mars." }, tip: { en: 'Dates use ordinal numbers: “am dritten März” (written: am 3. März).', fr: 'Les dates utilisent des nombres ordinaux : « am dritten März » (écrit : am 3. März).' } },
          { id: 'g6p2b', cue: 'Geschenk', cueTr: { en: 'Present', fr: 'Cadeau' }, sample: 'Was schenkst du deinem Freund? – Ein Buch und Schokolade.', sampleTr: { en: 'What are you giving your friend? – A book and chocolate.', fr: 'Que offres-tu à ton ami ? – Un livre et du chocolat.' } },
          { id: 'g6p2c', cue: 'Café', cueTr: { en: 'Café', fr: 'Café' }, sample: 'Gehst du gern ins Café? – Ja, am Sonntag trinke ich dort Kaffee.', sampleTr: { en: 'Do you like going to a café? – Yes, on Sunday I drink coffee there.', fr: "Aimes-tu aller au café ? – Oui, le dimanche j'y bois un café." } },
          { id: 'g6p2d', cue: 'Torte', cueTr: { en: 'Cake', fr: 'Gâteau' }, sample: 'Welche Torte magst du? – Ich mag Schokoladentorte.', sampleTr: { en: 'Which cake do you like? – I like chocolate cake.', fr: "Quel gâteau aimes-tu ? – J'aime le gâteau au chocolat." } },
          { id: 'g6p2e', cue: 'Einladung', cueTr: { en: 'Invitation', fr: 'Invitation' }, sample: 'Kommst du zu meiner Party? – Ja, gern. Wann fängt sie an?', sampleTr: { en: 'Are you coming to my party? – Yes, gladly. When does it start?', fr: 'Viens-tu à ma fête ? – Oui, avec plaisir. Quand commence-t-elle ?' } },
          { id: 'g6p2f', cue: 'Musik', cueTr: { en: 'Music', fr: 'Musique' }, sample: 'Welche Musik hörst du gern? – Ich höre gern Pop und Jazz.', sampleTr: { en: 'What music do you like listening to? – I like listening to pop and jazz.', fr: "Quelle musique aimes-tu écouter ? – J'aime écouter de la pop et du jazz." } },
          { id: 'g6p2g', cue: 'Kellner', cueTr: { en: 'Waiter', fr: 'Serveur' }, sample: 'Wie ist der Kellner im Restaurant? – Er ist sehr freundlich.', sampleTr: { en: 'What is the waiter like at the restaurant? – He is very friendly.', fr: 'Comment est le serveur au restaurant ? – Il est très aimable.' } },
          { id: 'g6p2h', cue: 'Essen gehen', cueTr: { en: 'Eating out', fr: 'Sortir manger' }, sample: 'Mit wem gehst du essen? – Mit meiner Familie, am Samstagabend.', sampleTr: { en: 'Who do you go out to eat with? – With my family, on Saturday evening.', fr: 'Avec qui sors-tu manger ? – Avec ma famille, le samedi soir.' } },
        ],
      },
      {
        id: 'goethe-a1-6-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'g6p3a', cue: 'Bild: eine Rechnung', cueTr: { en: 'Picture: a bill', fr: 'Image : une addition' }, sample: 'Die Rechnung, bitte. – Zusammen oder getrennt?', sampleTr: { en: 'The bill, please. – Together or separately?', fr: "L'addition, s'il vous plaît. – Ensemble ou séparément ?" }, tip: { en: 'In restaurants you can simply say: “Die Rechnung, bitte” or “Zahlen, bitte”.', fr: 'Au restaurant, on peut simplement dire : « Die Rechnung, bitte » ou « Zahlen, bitte ».' } },
          { id: 'g6p3b', cue: 'Bild: ein Tisch am Fenster', cueTr: { en: 'Picture: a table by the window', fr: 'Image : une table près de la fenêtre' }, sample: 'Haben Sie bitte einen Tisch am Fenster? – Ja, kommen Sie bitte mit.', sampleTr: { en: 'Do you have a table by the window, please? – Yes, please come with me.', fr: "Avez-vous une table près de la fenêtre, s'il vous plaît ? – Oui, suivez-moi, s'il vous plaît." } },
          { id: 'g6p3c', cue: 'Bild: ein Salzstreuer', cueTr: { en: 'Picture: a salt shaker', fr: 'Image : une salière' }, sample: 'Können Sie mir bitte das Salz geben? – Ja, bitte schön.', sampleTr: { en: 'Can you pass me the salt, please? – Yes, here you are.', fr: "Pouvez-vous me passer le sel, s'il vous plaît ? – Oui, voilà." } },
          { id: 'g6p3d', cue: 'Bild: ein Lautsprecher', cueTr: { en: 'Picture: a loudspeaker', fr: 'Image : un haut-parleur' }, sample: 'Können Sie die Musik bitte leiser machen? – Ja, gern.', sampleTr: { en: 'Could you turn the music down, please? – Yes, gladly.', fr: "Pouvez-vous baisser la musique, s'il vous plaît ? – Oui, avec plaisir." } },
          { id: 'g6p3e', cue: 'Bild: eine Tasse Kaffee mit Milch', cueTr: { en: 'Picture: a cup of coffee with milk', fr: 'Image : une tasse de café au lait' }, sample: 'Ich möchte bitte einen Kaffee mit Milch. – Gern, kommt sofort.', sampleTr: { en: 'I would like a coffee with milk, please. – Gladly, coming right up.', fr: "Je voudrais un café avec du lait, s'il vous plaît. – Volontiers, c'est pour tout de suite." } },
          { id: 'g6p3f', cue: 'Bild: eine Kamera', cueTr: { en: 'Picture: a camera', fr: 'Image : un appareil photo' }, sample: 'Können Sie bitte ein Foto von uns machen? – Ja, natürlich.', sampleTr: { en: 'Could you take a photo of us, please? – Yes, of course.', fr: "Pouvez-vous prendre une photo de nous, s'il vous plaît ? – Oui, bien sûr." } },
          { id: 'g6p3g', cue: 'Bild: ein freier Stuhl', cueTr: { en: 'Picture: a free chair', fr: 'Image : une chaise libre' }, sample: 'Ist dieser Stuhl noch frei? – Ja, nehmen Sie ihn gern.', sampleTr: { en: 'Is this chair still free? – Yes, please take it.', fr: "Cette chaise est-elle encore libre ? – Oui, prenez-la volontiers." } },
        ],
      },
    ],
  },
];

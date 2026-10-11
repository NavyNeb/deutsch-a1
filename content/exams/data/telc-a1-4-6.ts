import type { ExamSetInput } from '../types';

const tr = (en: string, fr: string) => ({ en, fr });

// Original practice material modelled on the telc Deutsch A1 format. Not an official paper.
export const TELC_A1_4_6: ExamSetInput[] = [
  // ───────────────────────── Set 4: Hotel, Urlaub, Supermarkt ─────────────────────────
  {
    id: 'telc-a1-4',
    board: 'telc',
    level: 'A1',
    number: 4,
    lesen: [
      { id: 'telc-a1-4-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Betreff: Ihre Reservierung\n\nSehr geehrte Frau Demir,\nwir haben für Sie ein Doppelzimmer vom 12. bis 15. Juli reserviert. Das Frühstück gibt es von 7 bis 10 Uhr.\nMit freundlichen Grüßen\nHotel Seeblick', tr: tr('Subject: Your reservation\n\nDear Mrs Demir,\nwe have reserved a double room for you from 12 to 15 July. Breakfast is served from 7 to 10 a.m.\nYours sincerely\nHotel Seeblick', 'Objet : Votre réservation\n\nChère Madame Demir,\nnous avons réservé pour vous une chambre double du 12 au 15 juillet. Le petit-déjeuner est servi de 7 h à 10 h.\nCordialement\nHôtel Seeblick') },
          { id: 'm2', de: 'Hallo Nina,\nich bin im Supermarkt. Wir haben kein Brot und keine Eier mehr. Ich kaufe auch Äpfel. Brauchst du noch etwas?\nJonas', tr: tr('Hi Nina,\nI am at the supermarket. We have no more bread and no more eggs. I am also buying apples. Do you need anything else?\nJonas', 'Salut Nina,\nje suis au supermarché. Nous n’avons plus de pain ni d’œufs. J’achète aussi des pommes. As-tu besoin d’autre chose ?\nJonas') },
          { id: 'm3', de: 'Liebe Oma,\nviele Grüße aus Italien! Das Wetter ist schlecht, es regnet jeden Tag. Aber das Hotel ist sehr schön. Am Samstag fahren wir nach Hause.\nDein Max', tr: tr('Dear Granny,\nmany greetings from Italy! The weather is bad, it rains every day. But the hotel is very nice. On Saturday we are going home.\nYour Max', 'Chère mamie,\nbeaucoup de salutations d’Italie ! Il fait mauvais, il pleut tous les jours. Mais l’hôtel est très joli. Samedi, nous rentrons à la maison.\nTon Max') },
          { id: 'm4', de: 'Hallo Eva,\nim Supermarkt in der Bahnhofstraße gibt es heute Angebote. Die Milch kostet nur 89 Cent. Ab 18 Uhr ist das Brot billiger. Gehen wir zusammen hin?\nMia', tr: tr('Hi Eva,\nthere are special offers at the supermarket in Bahnhofstraße today. The milk costs only 89 cents. From 6 p.m. the bread is cheaper. Shall we go together?\nMia', 'Salut Eva,\nil y a des promotions aujourd’hui au supermarché de la Bahnhofstraße. Le lait ne coûte que 89 centimes. À partir de 18 h, le pain est moins cher. On y va ensemble ?\nMia') },
          { id: 'm5', de: 'Liebe Gäste,\nam Donnerstag ist das Schwimmbad im Hotel geschlossen. Die Sauna ist geöffnet.\nIhr Hotel Sonnenhof', tr: tr('Dear guests,\non Thursday the hotel swimming pool is closed. The sauna is open.\nYour Hotel Sonnenhof', 'Chers clients,\njeudi, la piscine de l’hôtel est fermée. Le sauna est ouvert.\nVotre hôtel Sonnenhof') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Frau Demir hat ein Einzelzimmer im Hotel Seeblick.', qTr: tr('Mrs Demir has a single room at the Hotel Seeblick.', 'Madame Demir a une chambre simple à l’hôtel Seeblick.'), answer: false, explain: tr('The hotel has reserved a "Doppelzimmer" (double room), not a single room.', 'L’hôtel a réservé une « Doppelzimmer » (chambre double), pas une chambre simple.') },
          { id: 'q2', textId: 'm2', q: 'Jonas kauft Äpfel.', qTr: tr('Jonas is buying apples.', 'Jonas achète des pommes.'), answer: true, explain: tr('"Ich kaufe auch Äpfel."', '« Ich kaufe auch Äpfel. »') },
          { id: 'q3', textId: 'm3', q: 'Das Wetter in Italien ist gut.', qTr: tr('The weather in Italy is good.', 'Le temps en Italie est beau.'), answer: false, explain: tr('"Das Wetter ist schlecht, es regnet jeden Tag."', '« Das Wetter ist schlecht, es regnet jeden Tag. »') },
          { id: 'q4', textId: 'm4', q: 'Mia möchte mit Eva zusammen einkaufen gehen.', qTr: tr('Mia would like to go shopping with Eva.', 'Mia voudrait aller faire les courses avec Eva.'), answer: true, explain: tr('She asks: "Gehen wir zusammen hin?" (Shall we go together?)', 'Elle demande : « Gehen wir zusammen hin ? » (On y va ensemble ?)') },
          { id: 'q5', textId: 'm5', q: 'Am Donnerstag ist die Sauna im Hotel geschlossen.', qTr: tr('On Thursday the sauna in the hotel is closed.', 'Jeudi, le sauna de l’hôtel est fermé.'), answer: false, explain: tr('Only the swimming pool is closed; "Die Sauna ist geöffnet."', 'Seule la piscine est fermée ; « Die Sauna ist geöffnet. »') },
        ] },
      { id: 'telc-a1-4-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l’annonce a ou l’annonce b.'), texts: [
          { id: 'a1', de: 'a) Hotel Krone\nDoppelzimmer 118 Euro\nFrühstück 12 Euro extra\n\nb) Pension Sonne\nDoppelzimmer mit Frühstück\n68 Euro', tr: tr('a) Krone hotel\nDouble room 118 euros\nBreakfast 12 euros extra\n\nb) Sonne guesthouse\nDouble room with breakfast\n68 euros', 'a) Hôtel Krone\nChambre double 118 euros\nPetit-déjeuner 12 euros en plus\n\nb) Pension Sonne\nChambre double avec petit-déjeuner\n68 euros') },
          { id: 'a2', de: 'a) Ferienwohnung am Meer\n3 Zimmer, Küche, Balkon\n75 Euro pro Nacht\n\nb) Hotel Meerblick\nZimmer mit Halbpension\nab 140 Euro pro Nacht', tr: tr('a) Holiday flat by the sea\n3 rooms, kitchen, balcony\n75 euros per night\n\nb) Meerblick hotel\nRoom with half board\nfrom 140 euros per night', 'a) Appartement de vacances près de la mer\n3 pièces, cuisine, balcon\n75 euros la nuit\n\nb) Hôtel Meerblick\nChambre en demi-pension\nà partir de 140 euros la nuit') },
          { id: 'a3', de: 'a) Supermarkt Preiswert\nMo–Sa 8–21 Uhr\nSonntag geschlossen\n\nb) Laden am Bahnhof\nTäglich 6–22 Uhr\nBrot, Milch, Zeitungen', tr: tr('a) Preiswert supermarket\nMon–Sat 8 a.m.–9 p.m.\nClosed on Sunday\n\nb) Shop at the station\nDaily 6 a.m.–10 p.m.\nBread, milk, newspapers', 'a) Supermarché Preiswert\nLun–sam 8 h–21 h\nFermé le dimanche\n\nb) Magasin de la gare\nTous les jours 6 h–22 h\nPain, lait, journaux') },
          { id: 'a4', de: 'a) Hofladen Meier\nObst und Gemüse frisch vom Feld\nFr und Sa 8–13 Uhr\n\nb) Supermarkt Nord\nTiefkühlkost und Getränke\nMo–Sa 8–20 Uhr', tr: tr('a) Meier farm shop\nFruit and vegetables fresh from the field\nFri and Sat 8 a.m.–1 p.m.\n\nb) Nord supermarket\nFrozen food and drinks\nMon–Sat 8 a.m.–8 p.m.', 'a) Ferme Meier (vente directe)\nFruits et légumes frais du champ\nVen et sam 8 h–13 h\n\nb) Supermarché Nord\nSurgelés et boissons\nLun–sam 8 h–20 h') },
          { id: 'a5', de: 'a) Bergbahn Adlerhorn\nTageskarte 49 Euro\n9–16 Uhr\n\nb) Schifffahrt auf dem See\nRundfahrt 1 Stunde\n12 Euro, täglich 10–17 Uhr', tr: tr('a) Adlerhorn mountain railway\nDay ticket 49 euros\n9 a.m.–4 p.m.\n\nb) Boat trip on the lake\nTour of 1 hour\n12 euros, daily 10 a.m.–5 p.m.', 'a) Remontée mécanique Adlerhorn\nCarte à la journée 49 euros\n9 h–16 h\n\nb) Promenade en bateau sur le lac\nTour d’une heure\n12 euros, tous les jours 10 h–17 h') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Sie suchen für zwei Personen ein günstiges Zimmer mit Frühstück.', qTr: tr('You are looking for a cheap room with breakfast for two people.', 'Vous cherchez une chambre pas chère avec petit-déjeuner pour deux personnes.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('Ad b: double room with breakfast for 68 euros. In ad a, breakfast costs extra (118 + 12 euros).', 'Annonce b : chambre double avec petit-déjeuner pour 68 euros. Dans l’annonce a, le petit-déjeuner est en plus (118 + 12 euros).') },
          { id: 'q7', textId: 'a2', q: 'Sie fahren mit Ihrer Familie ans Meer. Sie möchten selbst kochen.', qTr: tr('You are going to the seaside with your family. You want to cook for yourselves.', 'Vous partez à la mer avec votre famille. Vous voulez cuisiner vous-mêmes.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The holiday flat has a kitchen ("Küche"); the hotel offers half board.', 'L’appartement de vacances a une cuisine (« Küche ») ; l’hôtel propose la demi-pension.') },
          { id: 'q8', textId: 'a3', q: 'Sie möchten am Sonntag Brot und Milch kaufen.', qTr: tr('You want to buy bread and milk on Sunday.', 'Vous voulez acheter du pain et du lait dimanche.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('The shop at the station is open daily; the supermarket is closed on Sunday.', 'Le magasin de la gare est ouvert tous les jours ; le supermarché est fermé le dimanche.') },
          { id: 'q9', textId: 'a4', q: 'Sie möchten am Samstagvormittag frisches Gemüse kaufen.', qTr: tr('You want to buy fresh vegetables on Saturday morning.', 'Vous voulez acheter des légumes frais samedi matin.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The farm shop sells fresh vegetables on Saturday from 8 to 13; the supermarket sells frozen food and drinks.', 'La ferme vend des légumes frais le samedi de 8 h à 13 h ; le supermarché vend des surgelés et des boissons.') },
          { id: 'q10', textId: 'a5', q: 'Sie möchten im Urlaub eine kurze Fahrt auf dem Wasser machen. Es soll nicht teuer sein.', qTr: tr('On holiday you want to take a short trip on the water. It should not be expensive.', 'En vacances, vous voulez faire une courte promenade sur l’eau. Cela ne doit pas être cher.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('The boat trip on the lake lasts 1 hour and costs 12 euros; ad a is a mountain railway.', 'La promenade en bateau sur le lac dure 1 heure et coûte 12 euros ; l’annonce a concerne une remontée mécanique.') },
        ] },
      { id: 'telc-a1-4-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Hotel Sonnenhof\nFrühstück: täglich 7–10 Uhr\nAbreise bis 11 Uhr', tr: tr('Sonnenhof hotel\nBreakfast: daily 7–10 a.m.\nCheck-out by 11 a.m.', 'Hôtel Sonnenhof\nPetit-déjeuner : tous les jours 7 h–10 h\nDépart avant 11 h') },
          { id: 's2', de: 'Supermarkt Preiswert\nLeere Flaschen bitte\nhier abgeben!', tr: tr('Preiswert supermarket\nPlease return empty bottles\nhere!', 'Supermarché Preiswert\nMerci de rapporter\nles bouteilles vides ici !') },
          { id: 's3', de: 'Strand\nHunde verboten!\nBaden nur von 9 bis 18 Uhr', tr: tr('Beach\nNo dogs!\nSwimming only from 9 a.m. to 6 p.m.', 'Plage\nChiens interdits !\nBaignade seulement de 9 h à 18 h') },
          { id: 's4', de: 'Schnellkasse\nnur bis 10 Artikel', tr: tr('Express checkout\nup to 10 items only', 'Caisse rapide\nmaximum 10 articles') },
          { id: 's5', de: 'Zimmerservice\nFrühstück auf dem Zimmer\n5 Euro extra\nTelefon 9', tr: tr('Room service\nBreakfast in your room\n5 euros extra\nTelephone 9', 'Service en chambre\nPetit-déjeuner dans la chambre\n5 euros en plus\nTéléphone 9') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Um 10.30 Uhr gibt es im Hotel noch Frühstück.', qTr: tr('At 10.30 a.m. breakfast is still served in the hotel.', 'À 10 h 30, il y a encore le petit-déjeuner à l’hôtel.'), answer: false, explain: tr('Breakfast is only served from 7 to 10.', 'Le petit-déjeuner n’est servi que de 7 h à 10 h.') },
          { id: 'q12', textId: 's2', q: 'Man kann hier leere Flaschen zurückgeben.', qTr: tr('You can return empty bottles here.', 'On peut rapporter ici les bouteilles vides.'), answer: true, explain: tr('"Leere Flaschen bitte hier abgeben!"', '« Leere Flaschen bitte hier abgeben ! »') },
          { id: 'q13', textId: 's3', q: 'Hunde dürfen nicht an den Strand.', qTr: tr('Dogs are not allowed on the beach.', 'Les chiens n’ont pas le droit d’aller sur la plage.'), answer: true, explain: tr('"Hunde verboten!" means dogs are forbidden.', '« Hunde verboten ! » signifie que les chiens sont interdits.') },
          { id: 'q14', textId: 's4', q: 'An der Schnellkasse darf man 20 Artikel kaufen.', qTr: tr('At the express checkout you may buy 20 items.', 'À la caisse rapide, on peut acheter 20 articles.'), answer: false, explain: tr('Only up to 10 items are allowed.', 'Seuls 10 articles au maximum sont autorisés.') },
          { id: 'q15', textId: 's5', q: 'Frühstück auf dem Zimmer kostet extra.', qTr: tr('Breakfast in the room costs extra.', 'Le petit-déjeuner dans la chambre coûte un supplément.'), answer: true, explain: tr('"5 Euro extra."', '« 5 Euro extra. »') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-4-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten ein Hotelzimmer reservieren. Ihre Freundin liest Ihre Daten vor. Füllen Sie das Reservierungsformular aus.',
        instructionTr: tr(
          'You want to book a hotel room. Your friend reads out your details. Fill in the reservation form.',
          'Vous voulez réserver une chambre d’hôtel. Votre amie lit vos informations. Remplissez le formulaire de réservation.',
        ),
        source: {
          id: 'info',
          de: 'Ich heiße Marta Costa. Ich möchte ein Doppelzimmer mit Balkon. Ich komme am 5. August und bleibe drei Nächte. Meine Telefonnummer ist 0171 / 55 66 77.',
          tr: tr(
            'My name is Marta Costa. I would like a double room with a balcony. I arrive on 5 August and stay three nights. My telephone number is 0171 / 55 66 77.',
            'Je m’appelle Marta Costa. Je voudrais une chambre double avec balcon. J’arrive le 5 août et je reste trois nuits. Mon numéro de téléphone est le 0171 / 55 66 77.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Costa'] },
          { id: 'f2', label: 'Vorname', labelTr: tr('First name', 'Prénom'), accept: ['Marta'] },
          { id: 'f3', label: 'Zimmer', labelTr: tr('Room', 'Chambre'), accept: ['Doppelzimmer', 'Doppelzimmer mit Balkon', 'ein Doppelzimmer'] },
          { id: 'f4', label: 'Anreise', labelTr: tr('Arrival', 'Arrivée'), accept: ['5. August', '5 August', 'am 5. August', '05.08.', '5.8.', '5.08.', '05. August'] },
          { id: 'f5', label: 'Telefon', labelTr: tr('Telephone', 'Téléphone'), accept: ['0171 / 55 66 77', '0171/556677', '0171 55 66 77', '0171 556677', '0171-556677'] },
        ],
      },
      {
        id: 'telc-a1-4-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Sie sind im Urlaub. Schreiben Sie Ihrem Freund Paul eine Postkarte (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'You are on holiday. Write a postcard to your friend Paul (about 30 words). Write about all three points.',
          'Vous êtes en vacances. Écrivez une carte postale à votre ami Paul (environ 30 mots). Traitez les trois points.',
        ),
        points: [
          { id: 'p1', de: 'Wo Sie sind', tr: tr('Where you are', 'Où vous êtes'), keywords: ['urlaub', 'hotel', 'bin in', 'ferien'] },
          { id: 'p2', de: 'Wetter', tr: tr('Weather', 'Météo'), keywords: ['wetter', 'sonne', 'regen', 'warm'] },
          { id: 'p3', de: 'Frage: Treffen nach dem Urlaub', tr: tr('Question: meeting after the holiday', 'Question : se voir après les vacances'), keywords: ['treffen', 'zeit', 'sehen', 'besuch'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Lieber Paul,\n\nviele Grüße aus Spanien! Ich bin im Urlaub und das Hotel ist schön. Das Wetter ist super. Hast du am Sonntag Zeit? Wir können uns dann treffen.\n\nBis bald\nAnna',
          tr: tr(
            'Dear Paul,\n\nMany greetings from Spain! I am on holiday and the hotel is nice. The weather is great. Do you have time on Sunday? We can meet then.\n\nSee you soon\nAnna',
            'Cher Paul,\n\nbeaucoup de salutations d’Espagne ! Je suis en vacances et l’hôtel est joli. Il fait un temps superbe. As-tu le temps dimanche ? On pourrait alors se voir.\n\nÀ bientôt\nAnna',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-4-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Land, Wohnort, Alter, Beruf, Hobby.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, country, town, age, job, hobby.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, pays, ville, âge, profession, loisir.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Ich heiße Mariam Diallo. Das schreibt man D-I-A-L-L-O.', sampleTr: tr('My name is Mariam Diallo. That is spelled D-I-A-L-L-O.', 'Je m’appelle Mariam Diallo. Ça s’écrit D-I-A-L-L-O.') },
          { id: 'p1b', cue: 'Land', cueTr: tr('Country', 'Pays'), sample: 'Ich komme aus dem Senegal. Die Hauptstadt ist Dakar.', sampleTr: tr('I come from Senegal. The capital is Dakar.', 'Je viens du Sénégal. La capitale est Dakar.') },
          { id: 'p1c', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Ich wohne in Hamburg, in der Gartenstraße 8.', sampleTr: tr('I live in Hamburg, at Gartenstraße 8.', 'J’habite à Hambourg, au 8 Gartenstraße.') },
          { id: 'p1d', cue: 'Alter', cueTr: tr('Age', 'Âge'), sample: 'Ich bin 27 Jahre alt. Mein Geburtstag ist im Mai.', sampleTr: tr('I am 27 years old. My birthday is in May.', 'J’ai 27 ans. Mon anniversaire est en mai.'), tip: tr('Say "Ich bin … Jahre alt", not "Ich habe … Jahre".', 'Dites « Ich bin … Jahre alt », pas « Ich habe … Jahre ».') },
          { id: 'p1e', cue: 'Beruf', cueTr: tr('Job', 'Profession'), sample: 'Ich arbeite als Krankenschwester in einem Krankenhaus.', sampleTr: tr('I work as a nurse in a hospital.', 'Je travaille comme infirmière dans un hôpital.') },
          { id: 'p1f', cue: 'Hobby', cueTr: tr('Hobby', 'Loisir'), sample: 'Ich lese gern und ich gehe oft spazieren.', sampleTr: tr('I like reading and I often go for walks.', 'J’aime lire et je me promène souvent.') },
        ],
      },
      {
        id: 'telc-a1-4-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Urlaub und Einkaufen. Sie ziehen eine Wortkarte und stellen dem Prüfer eine Frage zu dem Wort. Er antwortet. Dann stellt er Ihnen eine Frage.',
        instructionTr: tr('Topic: holiday and shopping. You draw a word card and ask the examiner a question about the word. They answer. Then they ask you a question.', 'Thème : vacances et courses. Vous tirez une carte-mot et posez à l’examinateur une question sur ce mot. Il répond. Puis il vous pose une question.'),
        prompts: [
          { id: 'p2a', cue: 'Urlaub', cueTr: tr('Holiday', 'Vacances'), sample: 'Wohin fahren Sie im Urlaub gern? – Ich fahre gern ans Meer.', sampleTr: tr('Where do you like to go on holiday? – I like going to the seaside.', 'Où aimez-vous partir en vacances ? – J’aime aller à la mer.'), tip: tr('"Wohin" asks about a direction; the answer often starts with "ans" or "in".', '« Wohin » demande une direction ; la réponse commence souvent par « ans » ou « in ».') },
          { id: 'p2b', cue: 'Hotel', cueTr: tr('Hotel', 'Hôtel'), sample: 'Wohnen Sie im Urlaub im Hotel? – Nein, ich wohne bei Freunden.', sampleTr: tr('Do you stay in a hotel on holiday? – No, I stay with friends.', 'Logez-vous à l’hôtel en vacances ? – Non, je loge chez des amis.') },
          { id: 'p2c', cue: 'Supermarkt', cueTr: tr('Supermarket', 'Supermarché'), sample: 'Wo kaufen Sie ein? – Ich kaufe im Supermarkt in meiner Straße ein.', sampleTr: tr('Where do you shop? – I shop at the supermarket on my street.', 'Où faites-vous vos courses ? – Je fais mes courses au supermarché de ma rue.') },
          { id: 'p2d', cue: 'Obst', cueTr: tr('Fruit', 'Fruits'), sample: 'Essen Sie gern Obst? – Ja, ich esse jeden Tag einen Apfel.', sampleTr: tr('Do you like eating fruit? – Yes, I eat an apple every day.', 'Aimez-vous manger des fruits ? – Oui, je mange une pomme tous les jours.') },
          { id: 'p2e', cue: 'Wetter', cueTr: tr('Weather', 'Météo'), sample: 'Wie ist das Wetter heute? – Es ist sonnig und warm.', sampleTr: tr('What is the weather like today? – It is sunny and warm.', 'Quel temps fait-il aujourd’hui ? – Il fait soleil et chaud.') },
          { id: 'p2f', cue: 'Zug', cueTr: tr('Train', 'Train'), sample: 'Fahren Sie gern mit dem Zug? – Ja, aber der Zug ist oft zu spät.', sampleTr: tr('Do you like travelling by train? – Yes, but the train is often late.', 'Aimez-vous voyager en train ? – Oui, mais le train est souvent en retard.') },
          { id: 'p2g', cue: 'Geld', cueTr: tr('Money', 'Argent'), sample: 'Wie viel kostet ein Hotelzimmer? – Ein Zimmer kostet ungefähr 80 Euro.', sampleTr: tr('How much does a hotel room cost? – A room costs about 80 euros.', 'Combien coûte une chambre d’hôtel ? – Une chambre coûte environ 80 euros.') },
        ],
      },
      {
        id: 'telc-a1-4-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Der Prüfer reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. The examiner reacts.', 'Vous tirez une carte-image. Formulez une demande. L’examinateur réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: Im Hotelbad fehlt ein Handtuch', cueTr: tr('Picture: a towel is missing in the hotel bathroom', 'Image : il manque une serviette dans la salle de bains de l’hôtel'), sample: 'Entschuldigung, ich brauche noch ein Handtuch. – Ja, ich bringe Ihnen gleich eins.', sampleTr: tr('Excuse me, I need another towel. – Yes, I will bring you one right away.', 'Excusez-moi, j’ai encore besoin d’une serviette. – Oui, je vous en apporte une tout de suite.'), tip: tr('Start with "Entschuldigung" to get attention politely.', 'Commencez par « Entschuldigung » pour attirer poliment l’attention.') },
          { id: 'p3b', cue: 'Bild: ein Schlüssel an der Rezeption', cueTr: tr('Picture: a key at the reception desk', 'Image : une clé à la réception'), sample: 'Kann ich bitte meinen Schlüssel haben? Zimmer 14. – Hier, bitte.', sampleTr: tr('Can I have my key, please? Room 14. – Here you are.', 'Puis-je avoir ma clé, s’il vous plaît ? Chambre 14. – Voilà.') },
          { id: 'p3c', cue: 'Bild: ein Handy und ein WLAN-Zeichen', cueTr: tr('Picture: a mobile phone and a Wi-Fi sign', 'Image : un téléphone portable et un symbole Wi-Fi'), sample: 'Können Sie mir bitte das WLAN-Passwort sagen? – Ja, es steht auf der Karte.', sampleTr: tr('Can you tell me the Wi-Fi password, please? – Yes, it is on the card.', 'Pouvez-vous me donner le mot de passe du Wi-Fi, s’il vous plaît ? – Oui, il est sur la carte.') },
          { id: 'p3d', cue: 'Bild: eine Kundin mit schweren Taschen an der Kasse', cueTr: tr('Picture: a customer with heavy bags at the checkout', 'Image : une cliente avec des sacs lourds à la caisse'), sample: 'Haben Sie bitte eine Tüte für mich? – Ja, eine Tüte kostet 10 Cent.', sampleTr: tr('Do you have a bag for me, please? – Yes, a bag costs 10 cents.', 'Avez-vous un sac pour moi, s’il vous plaît ? – Oui, un sac coûte 10 centimes.') },
          { id: 'p3e', cue: 'Bild: ein Regal im Supermarkt, Sie suchen die Milch', cueTr: tr('Picture: a supermarket shelf, you are looking for the milk', 'Image : un rayon de supermarché, vous cherchez le lait'), sample: 'Entschuldigung, wo finde ich die Milch? – Dort hinten, links.', sampleTr: tr('Excuse me, where can I find the milk? – Over there at the back, on the left.', 'Excusez-moi, où trouve-t-on le lait ? – Là-bas au fond, à gauche.') },
          { id: 'p3f', cue: 'Bild: eine Flasche Wasser ohne Preisschild', cueTr: tr('Picture: a bottle of water without a price tag', 'Image : une bouteille d’eau sans étiquette de prix'), sample: 'Wie viel kostet das Wasser, bitte? – Das kostet 1,20 Euro.', sampleTr: tr('How much does the water cost, please? – It costs 1.20 euros.', 'Combien coûte l’eau, s’il vous plaît ? – Elle coûte 1,20 euro.') },
          { id: 'p3g', cue: 'Bild: zwei Touristen am Strand mit einer Kamera', cueTr: tr('Picture: two tourists on the beach with a camera', 'Image : deux touristes sur la plage avec un appareil photo'), sample: 'Können Sie bitte ein Foto von uns machen? – Gern. Bitte lächeln!', sampleTr: tr('Can you take a photo of us, please? – Gladly. Please smile!', 'Pouvez-vous nous prendre en photo, s’il vous plaît ? – Volontiers. Souriez !') },
        ],
      },
    ],
  },

  // ───────────────────────── Set 5: Sprachkurs, Arzttermin ─────────────────────────
  {
    id: 'telc-a1-5',
    board: 'telc',
    level: 'A1',
    number: 5,
    lesen: [
      { id: 'telc-a1-5-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Liebe Kursteilnehmer,\nder Deutschkurs beginnt am Montag, den 6. Oktober, um 9 Uhr in Raum 12. Bitte bringen Sie einen Stift und ein Heft mit.\nIhre Lehrerin\nFrau Weber', tr: tr('Dear course participants,\nthe German course starts on Monday, 6 October, at 9 a.m. in room 12. Please bring a pen and an exercise book.\nYour teacher\nMrs Weber', 'Chers participants,\nle cours d’allemand commence le lundi 6 octobre à 9 h dans la salle 12. Apportez un stylo et un cahier, s’il vous plaît.\nVotre enseignante\nMadame Weber') },
          { id: 'm2', de: 'Praxis Dr. Lang\n\nSehr geehrter Herr Kaya,\nIhr Termin am Mittwoch um 8.15 Uhr muss leider ausfallen. Bitte rufen Sie uns an: 030 / 44 55 66.', tr: tr('Dr Lang’s practice\n\nDear Mr Kaya,\nunfortunately your appointment on Wednesday at 8.15 a.m. has to be cancelled. Please call us: 030 / 44 55 66.', 'Cabinet du Dr Lang\n\nCher Monsieur Kaya,\nmalheureusement, votre rendez-vous de mercredi à 8 h 15 doit être annulé. Appelez-nous, s’il vous plaît : 030 / 44 55 66.') },
          { id: 'm3', de: 'Hallo Karim,\nich habe morgen um 14.30 Uhr einen Termin beim Hausarzt. Kannst du bitte nach dem Deutschkurs die Kinder abholen? Danke!\nAmina', tr: tr('Hi Karim,\ntomorrow at 2.30 p.m. I have an appointment with the family doctor. Could you please pick up the children after the German course? Thanks!\nAmina', 'Salut Karim,\ndemain à 14 h 30, j’ai rendez-vous chez le médecin de famille. Peux-tu aller chercher les enfants après le cours d’allemand, s’il te plaît ? Merci !\nAmina') },
          { id: 'm4', de: 'Hallo Paula,\nich habe die Hausaufgabe für Dienstag nicht verstanden. Wir sollen Seite 24 lesen und fünf Fragen beantworten, oder? Kannst du mich anrufen?\nTom', tr: tr('Hi Paula,\nI did not understand the homework for Tuesday. We are supposed to read page 24 and answer five questions, right? Can you call me?\nTom', 'Salut Paula,\nje n’ai pas compris les devoirs pour mardi. Nous devons lire la page 24 et répondre à cinq questions, c’est ça ? Peux-tu m’appeler ?\nTom') },
          { id: 'm5', de: 'Sprachschule Lingua\n\nLiebe Teilnehmer,\nder Kurs am Freitag fällt aus, denn der Lehrer ist krank. Der nächste Unterricht ist am Montag.', tr: tr('Lingua language school\n\nDear participants,\nFriday’s course is cancelled because the teacher is ill. The next lesson is on Monday.', 'École de langues Lingua\n\nChers participants,\nle cours de vendredi est annulé, car l’enseignant est malade. Le prochain cours a lieu lundi.') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Der Deutschkurs beginnt im Oktober.', qTr: tr('The German course starts in October.', 'Le cours d’allemand commence en octobre.'), answer: true, explain: tr('"… beginnt am Montag, den 6. Oktober."', '« … beginnt am Montag, den 6. Oktober. »') },
          { id: 'q2', textId: 'm2', q: 'Herr Kaya hat am Mittwoch einen Termin bei Dr. Lang.', qTr: tr('Mr Kaya has an appointment with Dr Lang on Wednesday.', 'Monsieur Kaya a rendez-vous avec le Dr Lang mercredi.'), answer: false, explain: tr('The appointment "muss leider ausfallen" (has to be cancelled), so it does not take place.', 'Le rendez-vous « muss leider ausfallen » (doit être annulé) ; il n’a donc pas lieu.') },
          { id: 'q3', textId: 'm3', q: 'Amina geht morgen zum Arzt.', qTr: tr('Amina is going to the doctor tomorrow.', 'Amina va chez le médecin demain.'), answer: true, explain: tr('"Ich habe morgen um 14.30 Uhr einen Termin beim Hausarzt."', '« Ich habe morgen um 14.30 Uhr einen Termin beim Hausarzt. »') },
          { id: 'q4', textId: 'm4', q: 'Tom hat eine Frage zur Hausaufgabe.', qTr: tr('Tom has a question about the homework.', 'Tom a une question sur les devoirs.'), answer: true, explain: tr('He did not understand the homework and asks Paula to call him.', 'Il n’a pas compris les devoirs et demande à Paula de l’appeler.') },
          { id: 'q5', textId: 'm5', q: 'Am Freitag ist Unterricht in der Sprachschule.', qTr: tr('There is a lesson at the language school on Friday.', 'Il y a cours à l’école de langues vendredi.'), answer: false, explain: tr('"Der Kurs am Freitag fällt aus" – the next lesson is on Monday.', '« Der Kurs am Freitag fällt aus » – le prochain cours est lundi.') },
        ] },
      { id: 'telc-a1-5-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l’annonce a ou l’annonce b.'), texts: [
          { id: 'a1', de: 'a) Intensivkurs Deutsch\nMo–Fr 9–13 Uhr\n4 Wochen\n\nb) Deutsch im Park\nSamstag 10–12 Uhr\nim Sommer', tr: tr('a) Intensive German course\nMon–Fri 9 a.m.–1 p.m.\n4 weeks\n\nb) German in the park\nSaturday 10 a.m.–12 noon\nin summer', 'a) Cours intensif d’allemand\nLun–ven 9 h–13 h\n4 semaines\n\nb) L’allemand au parc\nSamedi 10 h–12 h\nen été') },
          { id: 'a2', de: 'a) Online-Deutschkurs\nLernen Sie zu Hause am Computer\n20 Euro im Monat\n\nb) Deutsch für Mütter und Väter\nDi und Do 9–11 Uhr\nMit Kinderbetreuung', tr: tr('a) Online German course\nLearn at home on the computer\n20 euros a month\n\nb) German for mothers and fathers\nTue and Thu 9–11 a.m.\nWith childcare', 'a) Cours d’allemand en ligne\nApprenez chez vous sur l’ordinateur\n20 euros par mois\n\nb) Allemand pour mamans et papas\nMar et jeu 9 h–11 h\nAvec garde d’enfants') },
          { id: 'a3', de: 'a) Zahnarztpraxis Dr. Fuchs\nTermine nur nach Anruf\nFreie Termine ab nächster Woche\n\nb) Zahnärztlicher Notdienst\nHeute 10–20 Uhr\nohne Termin', tr: tr('a) Dr Fuchs’s dental practice\nAppointments by phone only\nFree appointments from next week\n\nb) Emergency dental service\nToday 10 a.m.–8 p.m.\nno appointment needed', 'a) Cabinet dentaire du Dr Fuchs\nRendez-vous uniquement par téléphone\nCréneaux libres à partir de la semaine prochaine\n\nb) Urgences dentaires\nAujourd’hui 10 h–20 h\nsans rendez-vous') },
          { id: 'a4', de: 'a) Apotheke am Markt\nSonntag: Notdienst 9–18 Uhr\n\nb) Apotheke Stern\nMo–Fr 8–18.30 Uhr\nSa 8–13 Uhr', tr: tr('a) Pharmacy at the market\nSunday: emergency service 9 a.m.–6 p.m.\n\nb) Stern pharmacy\nMon–Fri 8 a.m.–6.30 p.m.\nSat 8 a.m.–1 p.m.', 'a) Pharmacie du marché\nDimanche : service de garde 9 h–18 h\n\nb) Pharmacie Stern\nLun–ven 8 h–18 h 30\nSam 8 h–13 h') },
          { id: 'a5', de: 'a) Sprachcafé\nJeden Mittwoch um 17 Uhr\nKaffee und Gespräche auf Deutsch\nGratis!\n\nb) Lehrbuch „Deutsch einfach“\nÜbungen zur Grammatik\n18,50 Euro', tr: tr('a) Language café\nEvery Wednesday at 5 p.m.\nCoffee and conversations in German\nFree!\n\nb) Textbook “Deutsch einfach”\nGrammar exercises\n18.50 euros', 'a) Café des langues\nChaque mercredi à 17 h\nCafé et conversations en allemand\nGratuit !\n\nb) Manuel « Deutsch einfach »\nExercices de grammaire\n18,50 euros') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Sie möchten in den nächsten Wochen jeden Vormittag Deutsch lernen.', qTr: tr('You want to learn German every morning in the coming weeks.', 'Vous voulez apprendre l’allemand tous les matins ces prochaines semaines.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The intensive course runs Monday to Friday from 9 to 13; ad b is only on Saturdays.', 'Le cours intensif a lieu du lundi au vendredi de 9 h à 13 h ; l’annonce b n’a lieu que le samedi.') },
          { id: 'q7', textId: 'a2', q: 'Sie möchten Deutsch lernen. Ihre Tochter (3 Jahre) ist den ganzen Tag bei Ihnen.', qTr: tr('You want to learn German. Your daughter (3 years) is with you all day.', 'Vous voulez apprendre l’allemand. Votre fille (3 ans) est avec vous toute la journée.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('Ad b offers childcare ("Mit Kinderbetreuung") during the course.', 'L’annonce b propose une garde d’enfants (« Mit Kinderbetreuung ») pendant le cours.') },
          { id: 'q8', textId: 'a3', q: 'Sie haben Zahnschmerzen und müssen heute zum Zahnarzt.', qTr: tr('You have toothache and must see a dentist today.', 'Vous avez mal aux dents et devez aller chez le dentiste aujourd’hui.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('The emergency service is open today without an appointment; Dr Fuchs has free slots only from next week.', 'Le service d’urgence est ouvert aujourd’hui sans rendez-vous ; le Dr Fuchs n’a des créneaux libres qu’à partir de la semaine prochaine.') },
          { id: 'q9', textId: 'a4', q: 'Sie brauchen am Sonntag dringend Medikamente.', qTr: tr('You urgently need medicine on Sunday.', 'Vous avez urgemment besoin de médicaments dimanche.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('Only the pharmacy at the market has an emergency service on Sunday.', 'Seule la pharmacie du marché assure un service de garde le dimanche.') },
          { id: 'q10', textId: 'a5', q: 'Sie möchten Deutsch sprechen und andere Menschen kennenlernen. Es soll nichts kosten.', qTr: tr('You want to speak German and meet other people. It should be free.', 'Vous voulez parler allemand et rencontrer d’autres personnes. Cela ne doit rien coûter.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The language café is free and offers conversations in German; ad b is a book that costs 18.50 euros.', 'Le café des langues est gratuit et propose des conversations en allemand ; l’annonce b est un livre à 18,50 euros.') },
        ] },
      { id: 'telc-a1-5-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Praxis Dr. Lang\nSprechzeiten:\nMo, Di, Do 8–12 und 15–18 Uhr\nMi und Fr 8–12 Uhr', tr: tr('Dr Lang’s practice\nConsulting hours:\nMon, Tue, Thu 8 a.m.–12 noon and 3–6 p.m.\nWed and Fri 8 a.m.–12 noon', 'Cabinet du Dr Lang\nHoraires de consultation :\nLun, mar, jeu 8 h–12 h et 15 h–18 h\nMer et ven 8 h–12 h') },
          { id: 's2', de: 'Wartezimmer\nHandy bitte ausschalten!', tr: tr('Waiting room\nPlease switch off your mobile phone!', 'Salle d’attente\nVeuillez éteindre votre téléphone portable !') },
          { id: 's3', de: 'Sprachschule Lingua\nKursbeginn: 1. Oktober\nAnmeldung im Büro, Zimmer 3', tr: tr('Lingua language school\nCourse start: 1 October\nRegistration at the office, room 3', 'École de langues Lingua\nDébut des cours : 1er octobre\nInscription au secrétariat, salle 3') },
          { id: 's4', de: 'Cafeteria\nEssen und Trinken\nnur hier!', tr: tr('Cafeteria\nEating and drinking\nonly here!', 'Cafétéria\nManger et boire\nuniquement ici !') },
          { id: 's5', de: 'Apotheke\nRezept bitte hier abgeben', tr: tr('Pharmacy\nPlease hand in your prescription here', 'Pharmacie\nMerci de remettre l’ordonnance ici') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Am Freitagnachmittag ist die Praxis geöffnet.', qTr: tr('The practice is open on Friday afternoon.', 'Le cabinet est ouvert vendredi après-midi.'), answer: false, explain: tr('On Friday the practice is only open from 8 to 12.', 'Le vendredi, le cabinet n’est ouvert que de 8 h à 12 h.') },
          { id: 'q12', textId: 's2', q: 'Im Wartezimmer soll man das Handy ausschalten.', qTr: tr('In the waiting room you should switch off your mobile phone.', 'Dans la salle d’attente, il faut éteindre son téléphone portable.'), answer: true, explain: tr('"Handy bitte ausschalten!"', '« Handy bitte ausschalten ! »') },
          { id: 'q13', textId: 's3', q: 'Man kann sich im Büro für den Kurs anmelden.', qTr: tr('You can register for the course at the office.', 'On peut s’inscrire au cours au secrétariat.'), answer: true, explain: tr('"Anmeldung im Büro, Zimmer 3."', '« Anmeldung im Büro, Zimmer 3. »') },
          { id: 'q14', textId: 's4', q: 'Man darf im Klassenzimmer essen.', qTr: tr('You may eat in the classroom.', 'On a le droit de manger dans la salle de classe.'), answer: false, explain: tr('Eating and drinking is allowed "nur hier" (only here, in the cafeteria).', 'On ne peut manger et boire que « nur hier » (seulement ici, à la cafétéria).') },
          { id: 'q15', textId: 's5', q: 'Hier gibt man das Rezept ab.', qTr: tr('You hand in the prescription here.', 'C’est ici qu’on remet l’ordonnance.'), answer: true, explain: tr('"Rezept bitte hier abgeben."', '« Rezept bitte hier abgeben. »') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-5-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten einen Deutschkurs besuchen. Ihr Freund liest Ihre Daten vor. Füllen Sie das Anmeldeformular aus.',
        instructionTr: tr(
          'You want to attend a German course. Your friend reads out your details. Fill in the registration form.',
          'Vous voulez suivre un cours d’allemand. Votre ami lit vos informations. Remplissez le formulaire d’inscription.',
        ),
        source: {
          id: 'info',
          de: 'Ich heiße Tarek Mansour. Ich komme aus Ägypten. Ich bin am 12. Mai 1994 geboren. Ich arbeite am Tag, deshalb möchte ich den Abendkurs besuchen.',
          tr: tr(
            'My name is Tarek Mansour. I come from Egypt. I was born on 12 May 1994. I work during the day, so I would like to attend the evening course.',
            'Je m’appelle Tarek Mansour. Je viens d’Égypte. Je suis né le 12 mai 1994. Je travaille la journée, c’est pourquoi je voudrais suivre le cours du soir.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Mansour'] },
          { id: 'f2', label: 'Vorname', labelTr: tr('First name', 'Prénom'), accept: ['Tarek'] },
          { id: 'f3', label: 'Herkunftsland', labelTr: tr('Country of origin', 'Pays d’origine'), accept: ['Ägypten', 'Aegypten', 'Agypten'] },
          { id: 'f4', label: 'Geburtsdatum', labelTr: tr('Date of birth', 'Date de naissance'), accept: ['12.05.1994', '12.5.1994', '12. Mai 1994', '12 Mai 1994'] },
          { id: 'f5', label: 'Kurs', labelTr: tr('Course', 'Cours'), accept: ['Abendkurs', 'der Abendkurs', 'den Abendkurs', 'Abend', 'Abendkurs Deutsch'] },
        ],
      },
      {
        id: 'telc-a1-5-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie haben morgen einen Termin bei Dr. Lang, aber Sie können nicht kommen. Schreiben Sie der Praxis eine E-Mail (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'You have an appointment with Dr Lang tomorrow, but you cannot come. Write an e-mail to the practice (about 30 words). Write about all three points.',
          'Vous avez demain rendez-vous chez le Dr Lang, mais vous ne pouvez pas venir. Écrivez un e-mail au cabinet (environ 30 mots). Traitez les trois points.',
        ),
        points: [
          { id: 'p1', de: 'Absage mit Grund', tr: tr('Cancel, with a reason', 'Annulation avec une raison'), keywords: ['nicht kommen', 'kann leider', 'arbeit'] },
          { id: 'p2', de: 'Wunsch: neuer Termin', tr: tr('Request: a new appointment', 'Demande : un nouveau rendez-vous'), keywords: ['neuen termin', 'neuer termin', 'anderen termin'] },
          { id: 'p3', de: 'Frage: Ist ein Termin am Nachmittag frei?', tr: tr('Question: is an appointment free in the afternoon?', 'Question : un rendez-vous est-il libre l’après-midi ?'), keywords: ['nachmittag', 'frei', 'möglich', 'geht'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Sehr geehrte Damen und Herren,\n\nich habe morgen um 9 Uhr einen Termin, aber ich kann leider nicht kommen. Ich muss arbeiten. Ich möchte einen neuen Termin. Ist am Donnerstagnachmittag ein Termin frei?\n\nMit freundlichen Grüßen\nSamir Haddad',
          tr: tr(
            'Dear Sir or Madam,\n\nI have an appointment tomorrow at 9 a.m., but unfortunately I cannot come. I have to work. I would like a new appointment. Is an appointment free on Thursday afternoon?\n\nYours sincerely\nSamir Haddad',
            'Madame, Monsieur,\n\nj’ai demain à 9 h un rendez-vous, mais malheureusement je ne peux pas venir. Je dois travailler. Je voudrais un nouveau rendez-vous. Y a-t-il un rendez-vous libre jeudi après-midi ?\n\nCordialement\nSamir Haddad',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-5-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Herkunft, Wohnort, Sprachen, Familie, Hobby.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, origin, town, languages, family, hobby.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, origine, ville, langues, famille, loisir.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Mein Familienname ist Kaya, K-A-Y-A. Mein Vorname ist Yusuf.', sampleTr: tr('My surname is Kaya, K-A-Y-A. My first name is Yusuf.', 'Mon nom de famille est Kaya, K-A-Y-A. Mon prénom est Yusuf.') },
          { id: 'p1b', cue: 'Herkunft', cueTr: tr('Origin', 'Origine'), sample: 'Ich komme aus der Türkei, aus Izmir.', sampleTr: tr('I come from Turkey, from Izmir.', 'Je viens de Turquie, d’Izmir.') },
          { id: 'p1c', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Ich wohne in Köln, in der Nähe vom Dom.', sampleTr: tr('I live in Cologne, near the cathedral.', 'J’habite à Cologne, près de la cathédrale.') },
          { id: 'p1d', cue: 'Sprachen', cueTr: tr('Languages', 'Langues'), sample: 'Ich spreche Türkisch und ein bisschen Englisch. Jetzt lerne ich Deutsch.', sampleTr: tr('I speak Turkish and a little English. Now I am learning German.', 'Je parle turc et un peu d’anglais. Maintenant j’apprends l’allemand.') },
          { id: 'p1e', cue: 'Familie', cueTr: tr('Family', 'Famille'), sample: 'Ich bin verheiratet. Meine Frau und ich haben eine Tochter.', sampleTr: tr('I am married. My wife and I have a daughter.', 'Je suis marié. Ma femme et moi avons une fille.') },
          { id: 'p1f', cue: 'Hobby', cueTr: tr('Hobby', 'Loisir'), sample: 'Mein Hobby ist Fußball. Am Wochenende spiele ich mit Freunden.', sampleTr: tr('My hobby is football. At the weekend I play with friends.', 'Mon loisir est le football. Le week-end, je joue avec des amis.') },
        ],
      },
      {
        id: 'telc-a1-5-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Sprachkurs und Gesundheit. Sie ziehen eine Wortkarte und stellen dem Prüfer eine Frage zu dem Wort. Er antwortet. Dann stellt er Ihnen eine Frage.',
        instructionTr: tr('Topic: language course and health. You draw a word card and ask the examiner a question about the word. They answer. Then they ask you a question.', 'Thème : cours de langue et santé. Vous tirez une carte-mot et posez à l’examinateur une question sur ce mot. Il répond. Puis il vous pose une question.'),
        prompts: [
          { id: 'p2a', cue: 'Deutschkurs', cueTr: tr('German course', 'Cours d’allemand'), sample: 'Wann ist Ihr Deutschkurs? – Montag und Mittwoch am Abend.', sampleTr: tr('When is your German course? – Monday and Wednesday evening.', 'Quand a lieu votre cours d’allemand ? – Le lundi et le mercredi soir.'), tip: tr('"Wann" asks for a time or day.', '« Wann » demande un moment ou un jour.') },
          { id: 'p2b', cue: 'Hausaufgabe', cueTr: tr('Homework', 'Devoirs'), sample: 'Machen Sie die Hausaufgabe gern? – Ja, aber sie ist manchmal schwer.', sampleTr: tr('Do you like doing your homework? – Yes, but it is sometimes difficult.', 'Aimez-vous faire vos devoirs ? – Oui, mais ils sont parfois difficiles.') },
          { id: 'p2c', cue: 'Lehrerin', cueTr: tr('Teacher (female)', 'Enseignante'), sample: 'Wie heißt Ihre Lehrerin? – Sie heißt Frau Weber.', sampleTr: tr('What is your teacher called? – She is called Mrs Weber.', 'Comment s’appelle votre enseignante ? – Elle s’appelle Madame Weber.') },
          { id: 'p2d', cue: 'Arzt', cueTr: tr('Doctor', 'Médecin'), sample: 'Wann gehen Sie zum Arzt? – Wenn ich Fieber habe.', sampleTr: tr('When do you go to the doctor? – When I have a fever.', 'Quand allez-vous chez le médecin ? – Quand j’ai de la fièvre.') },
          { id: 'p2e', cue: 'Kopfschmerzen', cueTr: tr('Headache', 'Mal de tête'), sample: 'Haben Sie oft Kopfschmerzen? – Nein, nur selten.', sampleTr: tr('Do you often have headaches? – No, only rarely.', 'Avez-vous souvent mal à la tête ? – Non, seulement rarement.') },
          { id: 'p2f', cue: 'Termin', cueTr: tr('Appointment', 'Rendez-vous'), sample: 'Haben Sie diese Woche noch einen Termin? – Ja, am Freitag um 10 Uhr.', sampleTr: tr('Do you still have an appointment this week? – Yes, on Friday at 10 a.m.', 'Avez-vous encore un rendez-vous cette semaine ? – Oui, vendredi à 10 h.') },
          { id: 'p2g', cue: 'Apotheke', cueTr: tr('Pharmacy', 'Pharmacie'), sample: 'Wo ist die nächste Apotheke? – Gleich neben dem Bahnhof.', sampleTr: tr('Where is the nearest pharmacy? – Right next to the station.', 'Où est la pharmacie la plus proche ? – Juste à côté de la gare.') },
        ],
      },
      {
        id: 'telc-a1-5-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Der Prüfer reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. The examiner reacts.', 'Vous tirez une carte-image. Formulez une demande. L’examinateur réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: Sie sind in der Arztpraxis an der Anmeldung', cueTr: tr('Picture: you are at the registration desk of a doctor’s practice', 'Image : vous êtes à l’accueil d’un cabinet médical'), sample: 'Ich möchte bitte einen Termin. – Ja, kommen Sie morgen um 9 Uhr.', sampleTr: tr('I would like an appointment, please. – Yes, come tomorrow at 9 a.m.', 'Je voudrais un rendez-vous, s’il vous plaît. – Oui, venez demain à 9 h.'), tip: tr('"Ich möchte bitte …" is polite and simple.', '« Ich möchte bitte … » est poli et simple.') },
          { id: 'p3b', cue: 'Bild: ein unbekanntes Wort an der Tafel', cueTr: tr('Picture: an unknown word on the board', 'Image : un mot inconnu au tableau'), sample: 'Entschuldigung, was bedeutet das Wort? – Das bedeutet „krank“.', sampleTr: tr('Excuse me, what does the word mean? – It means “ill”.', 'Excusez-moi, que signifie ce mot ? – Il signifie « malade ».') },
          { id: 'p3c', cue: 'Bild: Sie kommen zu spät in den Kurs', cueTr: tr('Picture: you arrive late for the course', 'Image : vous arrivez en retard au cours'), sample: 'Entschuldigung, darf ich hereinkommen? – Ja, bitte setzen Sie sich.', sampleTr: tr('Excuse me, may I come in? – Yes, please sit down.', 'Excusez-moi, puis-je entrer ? – Oui, asseyez-vous, s’il vous plaît.') },
          { id: 'p3d', cue: 'Bild: Sie haben Kopfschmerzen und stehen in der Apotheke', cueTr: tr('Picture: you have a headache and are standing in the pharmacy', 'Image : vous avez mal à la tête et vous êtes à la pharmacie'), sample: 'Ich brauche bitte Tabletten gegen Kopfschmerzen. – Hier, zweimal am Tag eine.', sampleTr: tr('I need tablets for a headache, please. – Here, one twice a day.', 'Il me faut des comprimés contre le mal de tête, s’il vous plaît. – Voilà, un deux fois par jour.') },
          { id: 'p3e', cue: 'Bild: Der Arzt spricht sehr schnell', cueTr: tr('Picture: the doctor is speaking very fast', 'Image : le médecin parle très vite'), sample: 'Können Sie bitte langsamer sprechen? – Ja, natürlich.', sampleTr: tr('Can you speak more slowly, please? – Yes, of course.', 'Pouvez-vous parler plus lentement, s’il vous plaît ? – Oui, bien sûr.') },
          { id: 'p3f', cue: 'Bild: Das Wörterbuch Ihrer Nachbarin liegt auf dem Tisch', cueTr: tr('Picture: your neighbour’s dictionary is on the table', 'Image : le dictionnaire de votre voisine est sur la table'), sample: 'Darf ich bitte Ihr Wörterbuch benutzen? – Ja, bitte schön.', sampleTr: tr('May I use your dictionary, please? – Yes, here you are.', 'Puis-je utiliser votre dictionnaire, s’il vous plaît ? – Oui, je vous en prie.') },
          { id: 'p3g', cue: 'Bild: ein offenes Fenster, im Raum ist es kalt', cueTr: tr('Picture: an open window, it is cold in the room', 'Image : une fenêtre ouverte, il fait froid dans la pièce'), sample: 'Können Sie bitte das Fenster zumachen? Mir ist kalt. – Ja, gern.', sampleTr: tr('Can you close the window, please? I am cold. – Yes, gladly.', 'Pouvez-vous fermer la fenêtre, s’il vous plaît ? J’ai froid. – Oui, volontiers.') },
        ],
      },
    ],
  },

  // ───────────────────────── Set 6: Café, Restaurant, Geburtstag ─────────────────────────
  {
    id: 'telc-a1-6',
    board: 'telc',
    level: 'A1',
    number: 6,
    lesen: [
      { id: 'telc-a1-6-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Betreff: Tischreservierung\n\nLiebe Frau Novak,\nIhr Tisch für 6 Personen ist am Freitag um 19.30 Uhr reserviert. Bitte sagen Sie ab, wenn Sie nicht kommen können.\nRestaurant Zur Linde', tr: tr('Subject: Table reservation\n\nDear Mrs Novak,\nyour table for 6 people is reserved for Friday at 7.30 p.m. Please cancel if you cannot come.\nZur Linde restaurant', 'Objet : Réservation de table\n\nChère Madame Novak,\nvotre table pour 6 personnes est réservée vendredi à 19 h 30. Merci d’annuler si vous ne pouvez pas venir.\nRestaurant Zur Linde') },
          { id: 'm2', de: 'Liebe Sophie,\nich werde am 20. November 30 Jahre alt! Ich feiere im Café Mozart. Wir treffen uns um 15 Uhr zu Kaffee und Kuchen. Kommst du?\nLiebe Grüße\nJulia', tr: tr('Dear Sophie,\nI will be 30 years old on 20 November! I am celebrating at the Café Mozart. We meet at 3 p.m. for coffee and cake. Are you coming?\nBest wishes\nJulia', 'Chère Sophie,\nj’aurai 30 ans le 20 novembre ! Je fête ça au Café Mozart. Nous nous retrouvons à 15 h pour un café et un gâteau. Tu viens ?\nAffectueusement\nJulia') },
          { id: 'm3', de: 'Hallo Ben,\nich bin schon im Café Central und warte auf dich. Ich trinke Kaffee. Du findest mich am Fenster. Kommst du bald?\nLea', tr: tr('Hi Ben,\nI am already at the Café Central and waiting for you. I am drinking coffee. You will find me by the window. Are you coming soon?\nLea', 'Salut Ben,\nje suis déjà au Café Central et je t’attends. Je bois un café. Tu me trouveras près de la fenêtre. Tu viens bientôt ?\nLea') },
          { id: 'm4', de: 'Lieber Onkel Paul,\nvielen Dank für die Geburtstagskarte und das Geld! Ich kaufe mir eine Jacke. Wir sehen uns bald.\nDein Felix', tr: tr('Dear Uncle Paul,\nthank you very much for the birthday card and the money! I will buy myself a jacket. We will see each other soon.\nYour Felix', 'Cher oncle Paul,\nmerci beaucoup pour la carte d’anniversaire et l’argent ! Je vais m’acheter une veste. À bientôt.\nTon Felix') },
          { id: 'm5', de: 'Liebe Gäste,\nunser Restaurant ist am Montag und Dienstag geschlossen. Ab Mittwoch gibt es eine neue Speisekarte mit Fisch.\nFamilie Berger', tr: tr('Dear guests,\nour restaurant is closed on Monday and Tuesday. From Wednesday there is a new menu with fish.\nThe Berger family', 'Chers clients,\nnotre restaurant est fermé le lundi et le mardi. À partir de mercredi, il y a une nouvelle carte avec du poisson.\nLa famille Berger') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Der Tisch ist für sechs Personen.', qTr: tr('The table is for six people.', 'La table est pour six personnes.'), answer: true, explain: tr('"Ihr Tisch für 6 Personen."', '« Ihr Tisch für 6 Personen. »') },
          { id: 'q2', textId: 'm2', q: 'Julia feiert ihren Geburtstag zu Hause.', qTr: tr('Julia is celebrating her birthday at home.', 'Julia fête son anniversaire chez elle.'), answer: false, explain: tr('"Ich feiere im Café Mozart."', '« Ich feiere im Café Mozart. »') },
          { id: 'q3', textId: 'm3', q: 'Lea trinkt Tee.', qTr: tr('Lea is drinking tea.', 'Lea boit du thé.'), answer: false, explain: tr('"Ich trinke Kaffee."', '« Ich trinke Kaffee. »') },
          { id: 'q4', textId: 'm4', q: 'Felix bekommt von seinem Onkel Geld.', qTr: tr('Felix gets money from his uncle.', 'Felix reçoit de l’argent de son oncle.'), answer: true, explain: tr('He thanks his uncle for "die Geburtstagskarte und das Geld".', 'Il remercie son oncle pour « die Geburtstagskarte und das Geld » (la carte et l’argent).') },
          { id: 'q5', textId: 'm5', q: 'Am Dienstag kann man im Restaurant essen.', qTr: tr('On Tuesday you can eat at the restaurant.', 'Mardi, on peut manger au restaurant.'), answer: false, explain: tr('The restaurant is closed on Monday and Tuesday.', 'Le restaurant est fermé le lundi et le mardi.') },
        ] },
      { id: 'telc-a1-6-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l’annonce a ou l’annonce b.'), texts: [
          { id: 'a1', de: 'a) Café Sonnenschein\nKaffee und hausgemachter Kuchen\nTäglich 14–18 Uhr\n\nb) Restaurant Zum Hirsch\nMittagstisch 11.30–14 Uhr\nSchnitzel, Suppe', tr: tr('a) Sonnenschein café\nCoffee and home-made cake\nDaily 2–6 p.m.\n\nb) Zum Hirsch restaurant\nLunch menu 11.30 a.m.–2 p.m.\nSchnitzel, soup', 'a) Café Sonnenschein\nCafé et gâteau maison\nTous les jours 14 h–18 h\n\nb) Restaurant Zum Hirsch\nMenu du midi 11 h 30–14 h\nEscalope, soupe') },
          { id: 'a2', de: 'a) Spielwaren Bunt\nPuzzles, Brettspiele, Puppen\nMo–Sa 9–18 Uhr\n\nb) Buchhandlung Lesezeit\nRomane, Krimis, Reiseführer\nMo–Sa 9–19 Uhr', tr: tr('a) Bunt toy shop\nPuzzles, board games, dolls\nMon–Sat 9 a.m.–6 p.m.\n\nb) Lesezeit bookshop\nNovels, crime novels, travel guides\nMon–Sat 9 a.m.–7 p.m.', 'a) Jouets Bunt\nPuzzles, jeux de société, poupées\nLun–sam 9 h–18 h\n\nb) Librairie Lesezeit\nRomans, polars, guides de voyage\nLun–sam 9 h–19 h') },
          { id: 'a3', de: 'a) Restaurant Lindenhof\nAbendessen ab 18 Uhr\nBitte reservieren: 0711 / 12 34 56\n\nb) Imbiss Blitz\nCurrywurst und Pommes\nNur zum Mitnehmen', tr: tr('a) Lindenhof restaurant\nDinner from 6 p.m.\nPlease book: 0711 / 12 34 56\n\nb) Blitz snack bar\nCurry sausage and chips\nTake-away only', 'a) Restaurant Lindenhof\nDîner à partir de 18 h\nMerci de réserver : 0711 / 12 34 56\n\nb) Snack Blitz\nCurrywurst et frites\nÀ emporter uniquement') },
          { id: 'a4', de: 'a) Party-Shop Bunt\nLuftballons, Kerzen, Girlanden\nMo–Sa 9–18 Uhr\n\nb) Möbelhaus Wohnen\nSofas, Betten, Tische\nMo–Sa 10–19 Uhr', tr: tr('a) Bunt party shop\nBalloons, candles, garlands\nMon–Sat 9 a.m.–6 p.m.\n\nb) Wohnen furniture store\nSofas, beds, tables\nMon–Sat 10 a.m.–7 p.m.', 'a) Party-Shop Bunt\nBallons, bougies, guirlandes\nLun–sam 9 h–18 h\n\nb) Magasin de meubles Wohnen\nCanapés, lits, tables\nLun–sam 10 h–19 h') },
          { id: 'a5', de: 'a) Café Central\nFrühstück ab 10 Uhr\nBrötchen, Marmelade, Tee\n\nb) Café am Park\nFrühstück ab 7 Uhr\nBrötchen, Eier, Kaffee', tr: tr('a) Café Central\nBreakfast from 10 a.m.\nRolls, jam, tea\n\nb) Café am Park\nBreakfast from 7 a.m.\nRolls, eggs, coffee', 'a) Café Central\nPetit-déjeuner à partir de 10 h\nPetits pains, confiture, thé\n\nb) Café am Park\nPetit-déjeuner à partir de 7 h\nPetits pains, œufs, café') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Sie möchten am Nachmittag Kaffee trinken und Kuchen essen.', qTr: tr('You want to drink coffee and eat cake in the afternoon.', 'Vous voulez boire un café et manger un gâteau l’après-midi.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The café serves coffee and cake daily from 14 to 18; the restaurant only has a lunch menu until 14.', 'Le café sert café et gâteau tous les jours de 14 h à 18 h ; le restaurant n’a qu’un menu du midi jusqu’à 14 h.') },
          { id: 'q7', textId: 'a2', q: 'Sie suchen ein Geschenk für Ihren Bruder. Er liest gern Krimis.', qTr: tr('You are looking for a present for your brother. He likes reading crime novels.', 'Vous cherchez un cadeau pour votre frère. Il aime lire des polars.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('The bookshop sells "Krimis" (crime novels).', 'La librairie vend des « Krimis » (polars).') },
          { id: 'q8', textId: 'a3', q: 'Sie möchten am Abend mit Ihren Eltern in Ruhe essen.', qTr: tr('You want to have a quiet evening meal with your parents.', 'Vous voulez dîner tranquillement avec vos parents.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The Lindenhof restaurant serves dinner from 6 p.m.; the snack bar is take-away only.', 'Le restaurant Lindenhof sert le dîner dès 18 h ; le snack est uniquement à emporter.') },
          { id: 'q9', textId: 'a4', q: 'Sie brauchen Luftballons und Kerzen für eine Geburtstagsparty.', qTr: tr('You need balloons and candles for a birthday party.', 'Il vous faut des ballons et des bougies pour une fête d’anniversaire.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The party shop sells balloons and candles; ad b sells furniture.', 'Le Party-Shop vend des ballons et des bougies ; l’annonce b vend des meubles.') },
          { id: 'q10', textId: 'a5', q: 'Sie möchten morgens um 8 Uhr frühstücken.', qTr: tr('You want to have breakfast at 8 a.m.', 'Vous voulez prendre le petit-déjeuner à 8 h du matin.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('Café am Park serves breakfast from 7; at Café Central it starts only at 10.', 'Le Café am Park sert le petit-déjeuner dès 7 h ; au Café Central, il ne commence qu’à 10 h.') },
        ] },
      { id: 'telc-a1-6-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Café Central\nKuchen zum Mitnehmen\nauch sonntags', tr: tr('Café Central\nCake to take away\nalso on Sundays', 'Café Central\nGâteau à emporter\négalement le dimanche') },
          { id: 's2', de: 'Bitte warten Sie hier.\nWir zeigen Ihnen Ihren Tisch.', tr: tr('Please wait here.\nWe will show you to your table.', 'Veuillez patienter ici.\nNous vous conduirons à votre table.') },
          { id: 's3', de: 'Mittagstisch\nSuppe + Hauptgericht\n8,50 Euro\nMo–Fr 11.30–14 Uhr', tr: tr('Lunch menu\nSoup + main course\n8.50 euros\nMon–Fri 11.30 a.m.–2 p.m.', 'Menu du midi\nSoupe + plat principal\n8,50 euros\nLun–ven 11 h 30–14 h') },
          { id: 's4', de: 'Geburtstagskinder\nbekommen bei uns\nein Eis gratis!', tr: tr('Birthday boys and girls\nget a free ice cream\nwith us!', 'Les personnes qui fêtent leur anniversaire\nreçoivent chez nous\nune glace gratuite !') },
          { id: 's5', de: 'Sonderangebot\nHeute: Pizza und Getränk\nnur 7 Euro\nbis 15 Uhr', tr: tr('Special offer\nToday: pizza and a drink\nonly 7 euros\nuntil 3 p.m.', 'Offre spéciale\nAujourd’hui : pizza et boisson\nseulement 7 euros\njusqu’à 15 h') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Man kann im Café Kuchen mitnehmen.', qTr: tr('You can take cake away from the café.', 'On peut emporter du gâteau du café.'), answer: true, explain: tr('"Kuchen zum Mitnehmen" – even on Sundays.', '« Kuchen zum Mitnehmen » – même le dimanche.') },
          { id: 'q12', textId: 's2', q: 'Man darf sich selbst einen Tisch aussuchen.', qTr: tr('You may choose a table yourself.', 'On peut choisir soi-même une table.'), answer: false, explain: tr('You should wait; the staff will show you your table.', 'Il faut attendre ; le personnel vous montre votre table.') },
          { id: 'q13', textId: 's3', q: 'Der Mittagstisch kostet 8,50 Euro.', qTr: tr('The lunch menu costs 8.50 euros.', 'Le menu du midi coûte 8,50 euros.'), answer: true, explain: tr('Soup and main course together cost 8.50 euros.', 'La soupe et le plat principal coûtent ensemble 8,50 euros.') },
          { id: 'q14', textId: 's4', q: 'Geburtstagskinder bekommen ein Eis gratis.', qTr: tr('Birthday boys and girls get a free ice cream.', 'Les personnes qui fêtent leur anniversaire reçoivent une glace gratuite.'), answer: true, explain: tr('"… ein Eis gratis!" (gratis = free)', '« … ein Eis gratis ! » (gratis = gratuit)') },
          { id: 'q15', textId: 's5', q: 'Das Angebot gilt auch am Abend.', qTr: tr('The offer is also valid in the evening.', 'L’offre est aussi valable le soir.'), answer: false, explain: tr('The offer is only valid until 15 Uhr.', 'L’offre n’est valable que jusqu’à 15 h.') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-6-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten in einem Restaurant einen Tisch reservieren. Ihr Freund liest Ihre Daten vor. Füllen Sie das Reservierungsformular aus.',
        instructionTr: tr(
          'You want to reserve a table in a restaurant. Your friend reads out your details. Fill in the reservation form.',
          'Vous voulez réserver une table dans un restaurant. Votre ami lit vos informations. Remplissez le formulaire de réservation.',
        ),
        source: {
          id: 'info',
          de: 'Ich heiße Daniel Fischer. Ich möchte einen Tisch für fünf Personen reservieren, am 18. Oktober um 19 Uhr. Wir feiern einen Geburtstag.',
          tr: tr(
            'My name is Daniel Fischer. I would like to reserve a table for five people on 18 October at 7 p.m. We are celebrating a birthday.',
            'Je m’appelle Daniel Fischer. Je voudrais réserver une table pour cinq personnes le 18 octobre à 19 h. Nous fêtons un anniversaire.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Fischer'] },
          { id: 'f2', label: 'Datum', labelTr: tr('Date', 'Date'), accept: ['18. Oktober', '18 Oktober', 'am 18. Oktober', '18.10.', '18.10.2025'] },
          { id: 'f3', label: 'Uhrzeit', labelTr: tr('Time', 'Heure'), accept: ['19 Uhr', '19.00 Uhr', '19:00 Uhr', '19:00', '19.00', '19'] },
          { id: 'f4', label: 'Anzahl der Personen', labelTr: tr('Number of people', 'Nombre de personnes'), accept: ['5', 'fünf', '5 Personen', 'fünf Personen', 'funf'] },
          { id: 'f5', label: 'Anlass', labelTr: tr('Occasion', 'Occasion'), accept: ['Geburtstag', 'ein Geburtstag', 'Geburtstagsfeier', 'Geburtstag feiern'] },
        ],
      },
      {
        id: 'telc-a1-6-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Sie haben nächste Woche Geburtstag. Schreiben Sie Ihrer Freundin Lisa eine E-Mail (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'Your birthday is next week. Write an e-mail to your friend Lisa (about 30 words). Write about all three points.',
          'Votre anniversaire est la semaine prochaine. Écrivez un e-mail à votre amie Lisa (environ 30 mots). Traitez les trois points.',
        ),
        points: [
          { id: 'p1', de: 'Einladung zum Geburtstag', tr: tr('Invitation to your birthday', 'Invitation à votre anniversaire'), keywords: ['geburtstag', 'einlad', 'lade dich'] },
          { id: 'p2', de: 'Ort und Uhrzeit', tr: tr('Place and time', 'Lieu et heure'), keywords: ['uhr', 'café', 'restaurant', 'bei mir', 'feiern'] },
          { id: 'p3', de: 'Frage: Kommst du?', tr: tr('Question: are you coming?', 'Question : tu viens ?'), keywords: ['kommst', 'zeit', 'antwort', 'zusag'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Liebe Lisa,\n\nam Samstag habe ich Geburtstag und ich lade dich ein. Wir feiern um 15 Uhr im Café Central. Kommst du? Bitte schreib mir bis Donnerstag.\n\nLiebe Grüße\nAnna',
          tr: tr(
            'Dear Lisa,\n\nMy birthday is on Saturday and I am inviting you. We are celebrating at 3 p.m. at the Café Central. Are you coming? Please write to me by Thursday.\n\nBest wishes\nAnna',
            'Chère Lisa,\n\nmon anniversaire est samedi et je t’invite. Nous le fêtons à 15 h au Café Central. Tu viens ? Écris-moi avant jeudi, s’il te plaît.\n\nAffectueusement\nAnna',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-6-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Land, Wohnort, Geburtstag, Beruf, Hobby.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, country, town, birthday, job, hobby.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, pays, ville, anniversaire, profession, loisir.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Ich heiße Elena Petrova. Mein Vorname ist Elena, mein Familienname ist Petrova.', sampleTr: tr('My name is Elena Petrova. My first name is Elena, my surname is Petrova.', 'Je m’appelle Elena Petrova. Mon prénom est Elena, mon nom de famille est Petrova.') },
          { id: 'p1b', cue: 'Land', cueTr: tr('Country', 'Pays'), sample: 'Ich komme aus Bulgarien. Meine Stadt heißt Plowdiw.', sampleTr: tr('I come from Bulgaria. My town is called Plovdiv.', 'Je viens de Bulgarie. Ma ville s’appelle Plovdiv.') },
          { id: 'p1c', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Ich wohne jetzt in Dresden, in einer Wohnung mit meiner Schwester.', sampleTr: tr('I now live in Dresden, in a flat with my sister.', 'J’habite maintenant à Dresde, dans un appartement avec ma sœur.') },
          { id: 'p1d', cue: 'Geburtstag', cueTr: tr('Birthday', 'Anniversaire'), sample: 'Mein Geburtstag ist am 9. März. Ich bin 31 Jahre alt.', sampleTr: tr('My birthday is on 9 March. I am 31 years old.', 'Mon anniversaire est le 9 mars. J’ai 31 ans.'), tip: tr('Dates: "am" + ordinal number + month.', 'Dates : « am » + nombre ordinal + mois.') },
          { id: 'p1e', cue: 'Beruf', cueTr: tr('Job', 'Profession'), sample: 'Ich arbeite in einem Café. Ich bin Kellnerin.', sampleTr: tr('I work in a café. I am a waitress.', 'Je travaille dans un café. Je suis serveuse.') },
          { id: 'p1f', cue: 'Hobby', cueTr: tr('Hobby', 'Loisir'), sample: 'Ich tanze gern und ich koche gern für meine Freunde.', sampleTr: tr('I like dancing and I like cooking for my friends.', 'J’aime danser et j’aime cuisiner pour mes amis.') },
        ],
      },
      {
        id: 'telc-a1-6-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Essen, Trinken und Feiern. Sie ziehen eine Wortkarte und stellen dem Prüfer eine Frage zu dem Wort. Er antwortet. Dann stellt er Ihnen eine Frage.',
        instructionTr: tr('Topic: eating, drinking and celebrating. You draw a word card and ask the examiner a question about the word. They answer. Then they ask you a question.', 'Thème : manger, boire et faire la fête. Vous tirez une carte-mot et posez à l’examinateur une question sur ce mot. Il répond. Puis il vous pose une question.'),
        prompts: [
          { id: 'p2a', cue: 'Café', cueTr: tr('Café', 'Café'), sample: 'Gehen Sie oft ins Café? – Ja, am Samstag mit Freunden.', sampleTr: tr('Do you often go to a café? – Yes, on Saturdays with friends.', 'Allez-vous souvent au café ? – Oui, le samedi avec des amis.'), tip: tr('"Oft" = often; put it after the verb.', '« Oft » = souvent ; placez-le après le verbe.') },
          { id: 'p2b', cue: 'Restaurant', cueTr: tr('Restaurant', 'Restaurant'), sample: 'Essen Sie gern im Restaurant? – Ja, aber es ist teuer.', sampleTr: tr('Do you like eating in restaurants? – Yes, but it is expensive.', 'Aimez-vous manger au restaurant ? – Oui, mais c’est cher.') },
          { id: 'p2c', cue: 'Geburtstag', cueTr: tr('Birthday', 'Anniversaire'), sample: 'Wie feiern Sie Ihren Geburtstag? – Ich lade meine Familie und Freunde ein.', sampleTr: tr('How do you celebrate your birthday? – I invite my family and friends.', 'Comment fêtez-vous votre anniversaire ? – J’invite ma famille et mes amis.') },
          { id: 'p2d', cue: 'Kuchen', cueTr: tr('Cake', 'Gâteau'), sample: 'Welchen Kuchen mögen Sie? – Ich mag Apfelkuchen.', sampleTr: tr('Which cake do you like? – I like apple cake.', 'Quel gâteau aimez-vous ? – J’aime la tarte aux pommes.') },
          { id: 'p2e', cue: 'Getränk', cueTr: tr('Drink', 'Boisson'), sample: 'Was trinken Sie am liebsten? – Tee, aber am Morgen auch Kaffee.', sampleTr: tr('What do you like drinking best? – Tea, but coffee in the morning too.', 'Que préférez-vous boire ? – Du thé, mais aussi du café le matin.') },
          { id: 'p2f', cue: 'Geschenk', cueTr: tr('Present', 'Cadeau'), sample: 'Was schenken Sie gern zum Geburtstag? – Blumen oder ein Buch.', sampleTr: tr('What do you like to give for a birthday? – Flowers or a book.', 'Que aimez-vous offrir pour un anniversaire ? – Des fleurs ou un livre.') },
          { id: 'p2g', cue: 'Einladung', cueTr: tr('Invitation', 'Invitation'), sample: 'Laden Sie oft Gäste ein? – Ja, einmal im Monat.', sampleTr: tr('Do you often invite guests? – Yes, once a month.', 'Invitez-vous souvent des invités ? – Oui, une fois par mois.') },
        ],
      },
      {
        id: 'telc-a1-6-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Der Prüfer reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. The examiner reacts.', 'Vous tirez une carte-image. Formulez une demande. L’examinateur réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: Sie sitzen im Restaurant und haben Durst', cueTr: tr('Picture: you are sitting in a restaurant and are thirsty', 'Image : vous êtes au restaurant et vous avez soif'), sample: 'Ein Wasser, bitte. – Gern, sofort.', sampleTr: tr('A water, please. – Gladly, right away.', 'Une eau, s’il vous plaît. – Volontiers, tout de suite.'), tip: tr('A short form is fine: "…, bitte."', 'Une forme courte suffit : « …, bitte. »') },
          { id: 'p3b', cue: 'Bild: Sie möchten einen Tisch für vier Personen', cueTr: tr('Picture: you would like a table for four people', 'Image : vous voulez une table pour quatre personnes'), sample: 'Haben Sie einen Tisch für vier Personen? – Ja, dort am Fenster.', sampleTr: tr('Do you have a table for four people? – Yes, over there by the window.', 'Avez-vous une table pour quatre personnes ? – Oui, là-bas près de la fenêtre.') },
          { id: 'p3c', cue: 'Bild: Die Suppe ist kalt', cueTr: tr('Picture: the soup is cold', 'Image : la soupe est froide'), sample: 'Entschuldigung, können Sie die Suppe bitte warm machen? – Natürlich, einen Moment.', sampleTr: tr('Excuse me, can you heat up the soup, please? – Of course, one moment.', 'Excusez-moi, pouvez-vous réchauffer la soupe, s’il vous plaît ? – Bien sûr, un instant.') },
          { id: 'p3d', cue: 'Bild: Sie möchten mit Karte bezahlen', cueTr: tr('Picture: you want to pay by card', 'Image : vous voulez payer par carte'), sample: 'Kann ich mit Karte zahlen? – Ja, natürlich.', sampleTr: tr('Can I pay by card? – Yes, of course.', 'Puis-je payer par carte ? – Oui, bien sûr.') },
          { id: 'p3e', cue: 'Bild: ein Geburtstagskuchen mit Kerzen', cueTr: tr('Picture: a birthday cake with candles', 'Image : un gâteau d’anniversaire avec des bougies'), sample: 'Haben Sie bitte ein Feuerzeug für die Kerzen? – Ja, hier bitte.', sampleTr: tr('Do you have a lighter for the candles, please? – Yes, here you are.', 'Avez-vous un briquet pour les bougies, s’il vous plaît ? – Oui, voilà.') },
          { id: 'p3f', cue: 'Bild: Sie suchen ein Blumengeschäft für einen Geburtstagsstrauß', cueTr: tr('Picture: you are looking for a flower shop for a birthday bouquet', 'Image : vous cherchez un fleuriste pour un bouquet d’anniversaire'), sample: 'Entschuldigung, wo ist das Blumengeschäft? – Gehen Sie geradeaus, dann rechts.', sampleTr: tr('Excuse me, where is the flower shop? – Go straight ahead, then right.', 'Excusez-moi, où est le fleuriste ? – Allez tout droit, puis à droite.') },
          { id: 'p3g', cue: 'Bild: Die Musik im Café ist sehr laut', cueTr: tr('Picture: the music in the café is very loud', 'Image : la musique est très forte dans le café'), sample: 'Können Sie die Musik bitte leiser machen? – Ja, gern.', sampleTr: tr('Can you turn the music down, please? – Yes, gladly.', 'Pouvez-vous baisser la musique, s’il vous plaît ? – Oui, volontiers.') },
        ],
      },
    ],
  },
];

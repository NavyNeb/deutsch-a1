import type { ExamSetInput } from '../types';

// Original practice material modelled on the telc Deutsch A2 format. Not an official paper.
export const TELC_A2: ExamSetInput[] = [
  {
    id: 'telc-a2-1',
    board: 'telc',
    level: 'A2',
    number: 1,
    lesen: [
      {
        id: 'telc-a2-1-l1', teil: 1, kind: 'multipleChoice',
        title: 'Teil 1',
        instruction: 'Lesen Sie die Hinweise und Schilder. Was ist richtig? Kreuzen Sie a, b oder c an.',
        instructionTr: {
          en: 'Read the notices and signs. What is correct? Tick a, b or c.',
          fr: 'Lisez les avis et les panneaux. Quelle est la bonne réponse ? Cochez a, b ou c.',
        },
        texts: [
          { id: 's1', de: 'Stadtbibliothek\nBücher bitte nur am Schalter 2 zurückgeben.\nDie Bücherbox am Eingang ist wegen einer Reparatur geschlossen.', tr: { en: 'City library\nPlease return books at counter 2 only.\nThe book drop at the entrance is closed because of a repair.', fr: "Bibliothèque municipale\nVeuillez rapporter les livres uniquement au guichet 2.\nLa boîte de retour à l'entrée est fermée pour cause de réparation." } },
          { id: 's2', de: 'Notdienst heute Nacht:\nApotheke am Markt, Hauptstraße 5.\nBitte klingeln Sie.', tr: { en: 'Emergency service tonight:\nApotheke am Markt, Hauptstraße 5.\nPlease ring the bell.', fr: "Service de garde cette nuit :\nPharmacie am Markt, Hauptstraße 5.\nVeuillez sonner." } },
          { id: 's3', de: 'Hallenbad vom 3. bis 5. Mai wegen Reinigung geschlossen.\nDas Freibad ist wie immer geöffnet.', tr: { en: 'Indoor pool closed from 3 to 5 May for cleaning.\nThe outdoor pool is open as usual.', fr: "Piscine couverte fermée du 3 au 5 mai pour nettoyage.\nLa piscine en plein air est ouverte comme d'habitude." } },
          { id: 's4', de: 'Achtung, Fahrgäste!\nAb Montag fährt die Linie 12 wegen einer Baustelle nicht bis zum Bahnhof. Bitte steigen Sie an der Haltestelle Rathaus in die Linie 7 um.', tr: { en: 'Attention, passengers!\nFrom Monday, line 12 will not go to the station because of roadworks. Please change to line 7 at the Rathaus stop.', fr: "Attention, voyageurs !\nÀ partir de lundi, la ligne 12 ne va plus jusqu'à la gare à cause de travaux. Veuillez prendre la ligne 7 à l'arrêt Rathaus." } },
          { id: 's5', de: 'Sprachschule Lingua\nDer Kurs am Dienstag fällt leider aus, weil die Lehrerin krank ist.\nDie Stunde holen wir am Freitag um 17 Uhr nach.', tr: { en: 'Lingua language school\nUnfortunately the Tuesday class is cancelled because the teacher is ill.\nWe will make up the lesson on Friday at 5 p.m.', fr: "École de langues Lingua\nLe cours de mardi est malheureusement annulé parce que la professeure est malade.\nNous rattraperons la leçon vendredi à 17 h." } },
        ],
        items: [
          { id: 'q1', textId: 's1', q: 'Wo kann man Bücher zurückgeben?', qTr: { en: 'Where can you return books?', fr: 'Où peut-on rapporter des livres ?' }, options: ['In der Bücherbox am Eingang.', 'Am Schalter 2.', 'Im Lesesaal.'], optionsTr: [{ en: 'In the book drop at the entrance.', fr: "Dans la boîte de retour à l'entrée." }, { en: 'At counter 2.', fr: 'Au guichet 2.' }, { en: 'In the reading room.', fr: 'Dans la salle de lecture.' }], answer: 1, explain: { en: 'The book drop is closed; books go to counter 2.', fr: 'La boîte de retour est fermée ; les livres vont au guichet 2.' } },
          { id: 'q2', textId: 's2', q: 'Was kann man heute Nacht tun, wenn man Medikamente braucht?', qTr: { en: 'What can you do tonight if you need medicine?', fr: "Que peut-on faire cette nuit si l'on a besoin de médicaments ?" }, options: ['Zur Apotheke am Markt gehen.', 'Bis morgen früh warten.', 'Zum Hallenbad gehen.'], optionsTr: [{ en: 'Go to the Apotheke am Markt.', fr: 'Aller à la pharmacie am Markt.' }, { en: 'Wait until tomorrow morning.', fr: "Attendre jusqu'à demain matin." }, { en: 'Go to the indoor pool.', fr: 'Aller à la piscine couverte.' }], answer: 0, explain: { en: '"Notdienst" = emergency service; ring the bell.', fr: '« Notdienst » = service de garde ; il faut sonner.' } },
          { id: 'q3', textId: 's3', q: 'Was ist richtig?', qTr: { en: 'What is correct?', fr: 'Quelle est la bonne réponse ?' }, options: ['Das Freibad ist geschlossen.', 'Das Hallenbad ist drei Tage zu.', 'Beide Bäder sind geschlossen.'], optionsTr: [{ en: 'The outdoor pool is closed.', fr: 'La piscine en plein air est fermée.' }, { en: 'The indoor pool is closed for three days.', fr: 'La piscine couverte est fermée pendant trois jours.' }, { en: 'Both pools are closed.', fr: 'Les deux piscines sont fermées.' }], answer: 1, explain: { en: '3 to 5 May is three days; the Freibad stays open.', fr: 'Du 3 au 5 mai, cela fait trois jours ; le Freibad reste ouvert.' } },
          { id: 'q4', textId: 's4', q: 'Wer zum Bahnhof fahren will, muss …', qTr: { en: 'Anyone who wants to go to the station must …', fr: 'Quiconque veut aller à la gare doit …' }, options: ['mit der Linie 12 fahren.', 'am Rathaus in die Linie 7 umsteigen.', 'zu Fuß gehen.'], optionsTr: [{ en: 'take line 12.', fr: 'prendre la ligne 12.' }, { en: 'change to line 7 at the Rathaus.', fr: 'prendre la ligne 7 à Rathaus.' }, { en: 'walk.', fr: 'y aller à pied.' }], answer: 1, explain: { en: '"umsteigen" = to change (trains/buses).', fr: '« umsteigen » = changer (de bus/train).' } },
          { id: 'q5', textId: 's5', q: 'Wann findet die nächste Stunde statt?', qTr: { en: 'When is the next lesson?', fr: 'Quand a lieu la prochaine leçon ?' }, options: ['Am Dienstag wie immer.', 'Am Freitag um 17 Uhr.', 'Gar nicht, der Kurs fällt aus.'], optionsTr: [{ en: 'On Tuesday as usual.', fr: "Mardi comme d'habitude." }, { en: 'On Friday at 5 p.m.', fr: 'Vendredi à 17 h.' }, { en: 'Not at all, the course is cancelled.', fr: "Pas du tout, le cours est annulé." }], answer: 1, explain: { en: '"nachholen" = to make up a missed lesson.', fr: '« nachholen » = rattraper une leçon manquée.' } },
        ],
      },
      {
        id: 'telc-a2-1-l2', teil: 2, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 2',
        instruction: 'Lesen Sie den Text. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the text. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez le texte. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Mein Deutschkurs in Leipzig',
          de: 'Liebe Nora,\n\njetzt bin ich schon seit vier Wochen in Leipzig und besuche einen Deutschkurs. Der Kurs ist jeden Morgen von 9 bis 12 Uhr. Wir sind 14 Leute und kommen aus zehn Ländern. Das finde ich toll, weil wir im Kurs nur Deutsch sprechen können. Unsere Lehrerin heißt Frau Köhler. Sie ist sehr nett und erklärt alles langsam.\n\nGestern sind wir ins Museum für Stadtgeschichte gegangen. Das war interessant, aber ich habe nicht alles verstanden. Nachmittags mache ich meistens Hausaufgaben, und abends koche ich mit meiner Mitbewohnerin. Sie kommt aus Spanien. Leider ist mein Zimmer ziemlich klein und die Miete ist hoch. Deshalb suche ich eine neue Wohnung.\n\nKommst du vielleicht im Juni zu Besuch? Dann zeige ich dir die Stadt.\n\nViele Grüße\nAmira',
          tr: {
            en: 'Subject: My German course in Leipzig\n\nDear Nora,\n\nI have been in Leipzig for four weeks now and I am taking a German course. The course is every morning from 9 to 12. There are 14 of us and we come from ten countries. I think that is great because in class we can only speak German. Our teacher is called Ms Köhler. She is very nice and explains everything slowly.\n\nYesterday we went to the Museum of City History. It was interesting, but I did not understand everything. In the afternoon I mostly do homework, and in the evening I cook with my flatmate. She comes from Spain. Unfortunately my room is quite small and the rent is high. That is why I am looking for a new flat.\n\nWill you perhaps come and visit in June? Then I will show you the city.\n\nBest wishes\nAmira',
            fr: "Objet : Mon cours d'allemand à Leipzig\n\nChère Nora,\n\nCela fait déjà quatre semaines que je suis à Leipzig et que je suis un cours d'allemand. Le cours a lieu tous les matins de 9 h à 12 h. Nous sommes 14 et nous venons de dix pays. Je trouve ça génial, parce qu'en cours nous ne pouvons parler qu'allemand. Notre professeure s'appelle Mme Köhler. Elle est très gentille et explique tout lentement.\n\nHier, nous sommes allés au musée d'histoire de la ville. C'était intéressant, mais je n'ai pas tout compris. L'après-midi, je fais surtout mes devoirs, et le soir je cuisine avec ma colocataire. Elle vient d'Espagne. Malheureusement, ma chambre est assez petite et le loyer est élevé. C'est pourquoi je cherche un nouvel appartement.\n\nViendras-tu peut-être me rendre visite en juin ? Je te montrerai alors la ville.\n\nAmicalement\nAmira",
          },
        }],
        items: [
          { id: 'q6', q: 'Amira lernt seit vier Wochen in Leipzig Deutsch.', qTr: { en: 'Amira has been learning German in Leipzig for four weeks.', fr: "Amira apprend l'allemand à Leipzig depuis quatre semaines." }, answer: true, explain: { en: '"seit vier Wochen in Leipzig … Deutschkurs".', fr: '« seit vier Wochen in Leipzig … Deutschkurs ».' } },
          { id: 'q7', q: 'Der Kurs beginnt um 10 Uhr.', qTr: { en: 'The course starts at 10 a.m.', fr: 'Le cours commence à 10 h.' }, answer: false, explain: { en: 'It runs from 9 to 12.', fr: 'Il a lieu de 9 h à 12 h.' } },
          { id: 'q8', q: 'Im Kurs sind Leute aus zehn Ländern.', qTr: { en: 'The class has people from ten countries.', fr: 'Il y a des gens de dix pays dans le cours.' }, answer: true, explain: { en: '"Wir sind 14 Leute und kommen aus zehn Ländern."', fr: '« Wir sind 14 Leute und kommen aus zehn Ländern. »' } },
          { id: 'q9', q: 'Gestern ist die Gruppe ins Theater gegangen.', qTr: { en: 'Yesterday the group went to the theatre.', fr: "Hier, le groupe est allé au théâtre." }, answer: false, explain: { en: 'They went to the museum.', fr: 'Ils sont allés au musée.' } },
          { id: 'q10', q: 'Amira lädt Nora für den Juni ein.', qTr: { en: 'Amira is inviting Nora for June.', fr: 'Amira invite Nora pour juin.' }, answer: true, explain: { en: '"Kommst du vielleicht im Juni zu Besuch?"', fr: '« Kommst du vielleicht im Juni zu Besuch? »' } },
        ],
      },
      {
        id: 'telc-a2-1-l3', teil: 3, kind: 'matching', allowNone: true,
        title: 'Teil 3',
        instruction: 'Lesen Sie die Situationen und die Anzeigen a bis h. Welche Anzeige passt zu welcher Situation? Jede Anzeige passt nur einmal. Wenn keine Anzeige passt, schreiben Sie x.',
        instructionTr: {
          en: 'Read the situations and the ads a to h. Which ad fits which situation? Each ad fits only once. If no ad fits, write x.',
          fr: "Lisez les situations et les annonces a à h. Quelle annonce correspond à quelle situation ? Chaque annonce ne convient qu'une fois. Si aucune annonce ne convient, écrivez x.",
        },
        texts: [
          { id: 'a', label: 'a', de: 'TSV Nord\nFußball für Kinder von 6 bis 10 Jahren\nMittwoch, 16 Uhr\nAnmeldung direkt am Sportplatz', tr: { en: 'TSV Nord\nFootball for children aged 6 to 10\nWednesday, 4 p.m.\nRegistration directly at the sports ground', fr: "TSV Nord\nFootball pour enfants de 6 à 10 ans\nMercredi, 16 h\nInscription directement sur le terrain de sport" } },
          { id: 'b', label: 'b', de: 'Fahrradwerkstatt Kurz\nReparatur in einem Tag\nMontag Ruhetag\nTel. 0351 / 22 33 44', tr: { en: 'Kurz bicycle workshop\nRepair within one day\nClosed on Mondays\nTel. 0351 / 22 33 44', fr: "Atelier de vélos Kurz\nRéparation en une journée\nFermé le lundi\nTél. 0351 / 22 33 44" } },
          { id: 'c', label: 'c', de: 'Zahnarztpraxis Dr. Brandt\nTermine nur nach Anmeldung\nMo–Fr 8–13 Uhr', tr: { en: 'Dr Brandt dental practice\nAppointments by registration only\nMon–Fri 8 a.m.–1 p.m.', fr: "Cabinet dentaire du Dr Brandt\nRendez-vous uniquement sur inscription\nLun–ven 8 h–13 h" } },
          { id: 'd', label: 'd', de: 'Flohmarkt am Hafen\nJeden Sonntag, 9–16 Uhr\nStandgebühr: 5 Euro\nAnmeldung nicht nötig', tr: { en: 'Flea market at the harbour\nEvery Sunday, 9 a.m.–4 p.m.\nStall fee: 5 euros\nNo registration needed', fr: "Marché aux puces du port\nTous les dimanches, 9 h–16 h\nEmplacement : 5 euros\nInscription inutile" } },
          { id: 'e', label: 'e', de: 'Computerkurs für Senioren\nDienstag, 10–12 Uhr\nVolkshochschule, Raum 7\nBitte Laptop mitbringen oder leihen', tr: { en: 'Computer course for seniors\nTuesday, 10 a.m.–12 noon\nAdult education centre, room 7\nPlease bring a laptop or borrow one', fr: "Cours d'informatique pour seniors\nMardi, 10 h–12 h\nUniversité populaire, salle 7\nApportez un ordinateur portable ou empruntez-en un" } },
          { id: 'f', label: 'f', de: 'Tanzschule Rhythmus\nSalsa für Anfänger\nFreitag, 20 Uhr\nSchnupperstunde gratis', tr: { en: 'Rhythmus dance school\nSalsa for beginners\nFriday, 8 p.m.\nFree trial lesson', fr: "École de danse Rhythmus\nSalsa pour débutants\nVendredi, 20 h\nCours d'essai gratuit" } },
          { id: 'g', label: 'g', de: 'Umzug leicht gemacht\nTransporter mit Fahrer und Helfer\nab 40 Euro pro Stunde\nAuch am Wochenende', tr: { en: 'Moving made easy\nVan with driver and helper\nfrom 40 euros per hour\nAlso at weekends', fr: "Déménagement facile\nCamionnette avec chauffeur et aide\nà partir de 40 euros de l'heure\nAussi le week-end" } },
          { id: 'h', label: 'h', de: 'Café Bohne\nFrühstücksbuffet am Sonntag\n9–13 Uhr, 12,50 Euro\nBitte reservieren', tr: { en: 'Café Bohne\nBreakfast buffet on Sunday\n9 a.m.–1 p.m., 12.50 euros\nPlease reserve', fr: "Café Bohne\nBuffet de petit-déjeuner le dimanche\n9 h–13 h, 12,50 euros\nVeuillez réserver" } },
        ],
        items: [
          { id: 'q11', q: 'Sie möchten am Wochenende gebrauchte Sachen verkaufen.', qTr: { en: 'You want to sell used things at the weekend.', fr: "Vous voulez vendre des objets d'occasion le week-end." }, answer: 'd', explain: { en: 'A flea market with stalls every Sunday.', fr: 'Un marché aux puces avec des stands chaque dimanche.' } },
          { id: 'q12', q: 'Sie ziehen um und brauchen Hilfe mit den Möbeln.', qTr: { en: 'You are moving and need help with the furniture.', fr: "Vous déménagez et avez besoin d'aide pour les meubles." }, answer: 'g', explain: { en: 'Ad g offers a van with a driver and a helper.', fr: "L'annonce g propose une camionnette avec chauffeur et aide." } },
          { id: 'q13', q: 'Ihr Sohn ist acht Jahre alt und möchte Fußball spielen.', qTr: { en: 'Your son is eight years old and wants to play football.', fr: 'Votre fils a huit ans et veut jouer au football.' }, answer: 'a', explain: { en: 'Football for children from 6 to 10.', fr: 'Football pour les enfants de 6 à 10 ans.' } },
          { id: 'q14', q: 'Ihre Großmutter möchte lernen, wie man einen Computer benutzt.', qTr: { en: 'Your grandmother wants to learn how to use a computer.', fr: 'Votre grand-mère veut apprendre à utiliser un ordinateur.' }, answer: 'e', explain: { en: 'A computer course for seniors.', fr: "Un cours d'informatique pour seniors." } },
          { id: 'q15', q: 'Sie suchen einen Deutschkurs für Anfänger am Abend.', qTr: { en: 'You are looking for a German course for beginners in the evening.', fr: "Vous cherchez un cours d'allemand pour débutants le soir." }, answer: 'x', explain: { en: 'No ad offers a German course, so the answer is x. Ads b, c, f and h are not needed for any situation.', fr: "Aucune annonce ne propose un cours d'allemand, la réponse est donc x. Les annonces b, c, f et h ne servent à aucune situation." } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'telc-a2-1-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten einen Bibliotheksausweis bekommen. Ihre Freundin hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to get a library card. Your friend helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez obtenir une carte de bibliothèque. Votre amie vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Ich heiße Marco Rossi. Ich bin am 5. Oktober 1995 in Mailand geboren, aber jetzt wohne ich in Dresden, in der Lindenallee 18. Ich arbeite als Koch in einem Restaurant. Meine E-Mail-Adresse ist marco.rossi@mail.de.',
          tr: {
            en: 'My name is Marco Rossi. I was born in Milan on 5 October 1995, but now I live in Dresden, at Lindenallee 18. I work as a cook in a restaurant. My e-mail address is marco.rossi@mail.de.',
            fr: "Je m'appelle Marco Rossi. Je suis né à Milan le 5 octobre 1995, mais j'habite maintenant à Dresde, au 18 Lindenallee. Je travaille comme cuisinier dans un restaurant. Mon adresse e-mail est marco.rossi@mail.de.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Rossi'] },
          { id: 'f2', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['05.10.1995', '5.10.1995', '5. Oktober 1995', '5 Oktober 1995'] },
          { id: 'f3', label: 'Wohnort', labelTr: { en: 'Town', fr: 'Ville' }, accept: ['Dresden'] },
          { id: 'f4', label: 'Beruf', labelTr: { en: 'Job', fr: 'Profession' }, accept: ['Koch'] },
          { id: 'f5', label: 'E-Mail', labelTr: { en: 'E-mail', fr: 'E-mail' }, accept: ['marco.rossi@mail.de'] },
        ],
      },
      {
        id: 'telc-a2-1-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Sie möchten mit Ihrem Freund Max am Wochenende einen Ausflug an den See machen. Schreiben Sie ihm eine E-Mail (ca. 40 Wörter). Vier Punkte stehen zur Auswahl: Schreiben Sie zu drei Punkten.',
        instructionTr: {
          en: 'You want to go on a trip to the lake with your friend Max at the weekend. Write him an e-mail (about 40 words). Four points are given: write about three of them.',
          fr: "Vous voulez faire une excursion au lac avec votre ami Max ce week-end. Écrivez-lui un e-mail (environ 40 mots). Quatre points sont proposés : traitez-en trois.",
        },
        points: [
          { id: 'p1', de: 'Wann und wo treffen Sie sich?', tr: { en: 'When and where do you meet?', fr: 'Quand et où vous retrouvez-vous ?' }, keywords: ['treffen', 'uhr', 'bahnhof', 'samstag', 'sonntag'] },
          { id: 'p2', de: 'Essen und Getränke', tr: { en: 'Food and drinks', fr: 'Nourriture et boissons' }, keywords: ['bringe', 'mitbring', 'mitnehm', 'brot', 'getränk', 'essen'] },
          { id: 'p3', de: 'Wie fahren Sie zum See?', tr: { en: 'How do you get to the lake?', fr: 'Comment allez-vous au lac ?' }, keywords: ['zug', 'bus', 'auto', 'fahrrad', 'fahren'] },
          { id: 'p4', de: 'Was machen Sie, wenn es regnet?', tr: { en: 'What do you do if it rains?', fr: "Que faites-vous s'il pleut ?" }, keywords: ['regn', 'wetter', 'museum', 'schlecht'] },
        ],
        minWords: 35, maxWords: 55,
        model: {
          de: 'Lieber Max,\n\nich freue mich auf unseren Ausflug! Wir treffen uns am Samstag um 9 Uhr am Bahnhof. Ich bringe Brot und Getränke mit. Hast du auch etwas zu essen? Wir fahren mit dem Zug zum See. Wenn es regnet, gehen wir ins Museum.\n\nBis bald\nSara',
          tr: {
            en: 'Dear Max,\n\nI am looking forward to our trip! We will meet on Saturday at 9 a.m. at the station. I will bring bread and drinks. Do you have something to eat as well? We will take the train to the lake. If it rains, we will go to the museum.\n\nSee you soon\nSara',
            fr: "Cher Max,\n\nJe me réjouis de notre excursion ! Nous nous retrouvons samedi à 9 h à la gare. J'apporte du pain et des boissons. As-tu aussi quelque chose à manger ? Nous allons au lac en train. S'il pleut, nous irons au musée.\n\nÀ bientôt\nSara",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a2-1-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Herkunft, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, origin, place of residence, languages, job, hobby.', fr: "Présentez-vous. Les mots-clés vous aident : nom, origine, lieu de résidence, langues, profession, loisir." },
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Guten Tag, mein Name ist Daniel Mensah. Ich buchstabiere: M-E-N-S-A-H.', sampleTr: { en: 'Good day, my name is Daniel Mensah. I spell it: M-E-N-S-A-H.', fr: "Bonjour, je m'appelle Daniel Mensah. J'épelle : M-E-N-S-A-H." } },
          { id: 'p1b', cue: 'Herkunft', cueTr: { en: 'Origin', fr: 'Origine' }, sample: 'Ich komme aus Ghana, aus der Hauptstadt Accra.', sampleTr: { en: 'I come from Ghana, from the capital Accra.', fr: "Je viens du Ghana, de la capitale Accra." } },
          { id: 'p1c', cue: 'Wohnort', cueTr: { en: 'Where you live', fr: 'Lieu de résidence' }, sample: 'Seit zwei Jahren wohne ich in Hannover. Ich wohne in einer kleinen Wohnung mit meiner Frau.', sampleTr: { en: 'I have lived in Hanover for two years. I live in a small flat with my wife.', fr: "J'habite à Hanovre depuis deux ans. Je vis dans un petit appartement avec ma femme." } },
          { id: 'p1d', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Englisch und Twi. Deutsch lerne ich seit einem Jahr.', sampleTr: { en: 'I speak English and Twi. I have been learning German for a year.', fr: "Je parle anglais et twi. J'apprends l'allemand depuis un an." } },
          { id: 'p1e', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich arbeite als Elektriker. Die Arbeit gefällt mir, weil sie abwechslungsreich ist.', sampleTr: { en: 'I work as an electrician. I like the work because it is varied.', fr: "Je travaille comme électricien. J'aime mon travail parce qu'il est varié." } },
          { id: 'p1f', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'In meiner Freizeit spiele ich gern Fußball und höre Musik.', sampleTr: { en: 'In my free time I like to play football and listen to music.', fr: "Pendant mon temps libre, j'aime jouer au football et écouter de la musique." } },
        ],
      },
      {
        id: 'telc-a2-1-p2', teil: 2, title: 'Teil 2: Ein Alltagsgespräch führen', minutes: 4,
        instruction: 'Führen Sie mit Ihrem Partner / Ihrer Partnerin ein Alltagsgespräch zu einem Thema. Erzählen Sie von sich und stellen Sie eine Frage.',
        instructionTr: { en: "Have an everyday conversation with your partner about a topic. Tell about yourself and ask a question.", fr: "Menez avec votre partenaire une conversation du quotidien sur un thème. Parlez de vous et posez une question." },
        prompts: [
          { id: 'p2a', cue: 'Thema: Essen und Trinken – Was essen Sie gern?', cueTr: { en: 'Topic: Food and drink – What do you like to eat?', fr: "Thème : Manger et boire – Qu'aimez-vous manger ?" }, sample: 'Ich esse sehr gern Reis mit Hühnchen, weil das bei uns zu Hause oft gekocht wird. Zum Frühstück trinke ich Tee und esse Brot. Und was isst du gern?', sampleTr: { en: 'I really like rice with chicken because it is often cooked at home. For breakfast I drink tea and eat bread. And what do you like to eat?', fr: "J'aime beaucoup le riz au poulet, parce qu'on le prépare souvent à la maison. Au petit-déjeuner, je bois du thé et je mange du pain. Et toi, qu'aimes-tu manger ?" } },
          { id: 'p2b', cue: 'Thema: Freizeit – Was machen Sie am Wochenende?', cueTr: { en: 'Topic: Free time – What do you do at the weekend?', fr: 'Thème : Loisirs – Que faites-vous le week-end ?' }, sample: 'Am Samstag schlafe ich lange und gehe dann einkaufen. Am Sonntag besuche ich oft Freunde oder wir machen einen Spaziergang im Park. Was machst du am Wochenende?', sampleTr: { en: "On Saturday I sleep late and then go shopping. On Sunday I often visit friends or we go for a walk in the park. What do you do at the weekend?", fr: "Le samedi, je dors tard puis je fais les courses. Le dimanche, je rends souvent visite à des amis ou nous nous promenons dans le parc. Et toi, que fais-tu le week-end ?" } },
          { id: 'p2c', cue: 'Thema: Einkaufen – Wo kaufen Sie ein?', cueTr: { en: 'Topic: Shopping – Where do you shop?', fr: 'Thème : Achats – Où faites-vous vos courses ?' }, sample: 'Lebensmittel kaufe ich im Supermarkt, weil dort alles billiger ist. Kleidung kaufe ich lieber im Internet. Kaufst du auch online ein?', sampleTr: { en: "I buy groceries at the supermarket because everything is cheaper there. I prefer to buy clothes on the internet. Do you shop online too?", fr: "J'achète mes courses au supermarché, parce que tout y est moins cher. J'aime mieux acheter mes vêtements sur Internet. Est-ce que tu achètes aussi en ligne ?" } },
          { id: 'p2d', cue: 'Thema: Verkehr – Wie kommen Sie zur Arbeit oder zum Kurs?', cueTr: { en: 'Topic: Transport – How do you get to work or to class?', fr: 'Thème : Transports – Comment venez-vous au travail ou au cours ?' }, sample: 'Ich fahre jeden Tag mit dem Bus, denn ein Auto habe ich nicht. Die Fahrt dauert etwa 20 Minuten. Wie kommst du zum Kurs?', sampleTr: { en: "I take the bus every day because I do not have a car. The journey takes about 20 minutes. How do you get to class?", fr: "Je prends le bus tous les jours, car je n'ai pas de voiture. Le trajet dure environ 20 minutes. Comment viens-tu au cours ?" } },
        ],
      },
      {
        id: 'telc-a2-1-p3', teil: 3, title: 'Teil 3: Etwas aushandeln', minutes: 4,
        instruction: 'Sie möchten mit Ihrem Partner / Ihrer Partnerin eine Geburtstagsfeier für einen Freund planen. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge, handeln Sie die Details aus und einigen Sie sich.',
        instructionTr: { en: 'You want to plan a birthday party for a friend with your partner. Make suggestions, react to the suggestions, negotiate the details and agree.', fr: "Vous voulez organiser avec votre partenaire une fête d'anniversaire pour un ami. Faites des propositions, réagissez-y, négociez les détails et mettez-vous d'accord." },
        prompts: [
          { id: 'p3a', cue: 'Wann und wo feiern Sie?', cueTr: { en: 'When and where do you celebrate?', fr: 'Quand et où faites-vous la fête ?' }, sample: 'Ich schlage vor, dass wir am Samstagabend feiern. Wo wollen wir feiern? Vielleicht bei mir zu Hause, ich habe einen großen Garten. – Gute Idee, dann müssen wir kein Restaurant bezahlen.', sampleTr: { en: "I suggest that we celebrate on Saturday evening. Where shall we celebrate? Maybe at my place, I have a big garden. – Good idea, then we do not have to pay for a restaurant.", fr: "Je propose que nous fêtions ça samedi soir. Où veut-on fêter ? Peut-être chez moi, j'ai un grand jardin. – Bonne idée, comme ça nous n'avons pas à payer un restaurant." } },
          { id: 'p3b', cue: 'Essen und Trinken', cueTr: { en: 'Food and drink', fr: 'Nourriture et boissons' }, sample: 'Was sollen wir zu essen machen? Ich kann einen Salat und einen Kuchen mitbringen. – Dann kaufe ich die Getränke und mache Nudeln. Passt das?', sampleTr: { en: "What shall we make to eat? I can bring a salad and a cake. – Then I will buy the drinks and make pasta. Is that OK?", fr: "Que préparons-nous à manger ? Je peux apporter une salade et un gâteau. – Alors j'achète les boissons et je fais des pâtes. Ça te va ?" } },
          { id: 'p3c', cue: 'Geschenk und Programm', cueTr: { en: 'Present and programme', fr: 'Cadeau et programme' }, sample: 'Wir könnten zusammen ein Geschenk kaufen, zum Beispiel ein Buch. Und wir machen Musik an und tanzen. – Das finde ich super. Ich lade noch die Nachbarn ein, einverstanden?', sampleTr: { en: "We could buy a present together, for example a book. And we put on music and dance. – I think that is great. I will also invite the neighbours, agreed?", fr: "Nous pourrions acheter un cadeau ensemble, par exemple un livre. Et nous mettons de la musique et nous dansons. – Je trouve ça super. J'invite aussi les voisins, d'accord ?" } },
        ],
      },
    ],
  },
  {
    id: 'telc-a2-2',
    board: 'telc',
    level: 'A2',
    number: 2,
    lesen: [
      {
        id: 'telc-a2-2-l1', teil: 1, kind: 'multipleChoice',
        title: 'Teil 1',
        instruction: 'Lesen Sie die Hinweise und Schilder. Was ist richtig? Kreuzen Sie a, b oder c an.',
        instructionTr: {
          en: 'Read the notices and signs. What is correct? Tick a, b or c.',
          fr: 'Lisez les avis et les panneaux. Quelle est la bonne réponse ? Cochez a, b ou c.',
        },
        texts: [
          { id: 's1', de: 'Arztpraxis Dr. Meier\nUrlaub vom 5. bis 16. Juli.\nVertretung: Dr. Schulz, Bahnhofstraße 3.', tr: { en: 'Dr Meier surgery\nOn holiday from 5 to 16 July.\nCover: Dr Schulz, Bahnhofstraße 3.', fr: "Cabinet du Dr Meier\nEn vacances du 5 au 16 juillet.\nRemplaçant : Dr Schulz, Bahnhofstraße 3." } },
          { id: 's2', de: 'Heute im Angebot!\nÄpfel, 1 kg nur 1,49 Euro.\nAb 18 Uhr: Obst und Gemüse 30 % billiger.', tr: { en: 'On offer today!\nApples, 1 kg only 1.49 euros.\nFrom 6 p.m.: fruit and vegetables 30% cheaper.', fr: "En promotion aujourd'hui !\nPommes, 1 kg seulement 1,49 euro.\nÀ partir de 18 h : fruits et légumes 30 % moins chers." } },
          { id: 's3', de: 'Information für Reisende\nDer Zug nach München fährt heute von Gleis 7, nicht von Gleis 4.\nAbfahrt wie immer um 14.22 Uhr.', tr: { en: 'Information for travellers\nThe train to Munich leaves from platform 7 today, not from platform 4.\nDeparture as usual at 2.22 p.m.', fr: "Information aux voyageurs\nLe train pour Munich part aujourd'hui de la voie 7, et non de la voie 4.\nDépart comme d'habitude à 14 h 22." } },
          { id: 's4', de: 'Kino Capitol\nJeden Dienstag Kinotag: alle Filme nur 6 Euro.\nKinder unter 12 Jahren zahlen immer die Hälfte.', tr: { en: 'Capitol cinema\nEvery Tuesday is cinema day: all films only 6 euros.\nChildren under 12 always pay half.', fr: "Cinéma Capitol\nChaque mardi, jour du cinéma : tous les films à 6 euros seulement.\nLes enfants de moins de 12 ans paient toujours moitié prix." } },
          { id: 's5', de: 'Liebe Mieter,\nam Freitag wird das Wasser von 9 bis 12 Uhr abgestellt.\nBitte füllen Sie vorher Wasser in Flaschen.', tr: { en: 'Dear tenants,\non Friday the water will be switched off from 9 a.m. to 12 noon.\nPlease fill bottles with water beforehand.', fr: "Chers locataires,\nvendredi, l'eau sera coupée de 9 h à 12 h.\nVeuillez remplir des bouteilles d'eau au préalable." } },
        ],
        items: [
          { id: 'q101', textId: 's1', q: 'Wohin sollen Patienten im Juli gehen?', qTr: { en: 'Where should patients go in July?', fr: 'Où les patients doivent-ils aller en juillet ?' }, options: ['Zu Dr. Meier.', 'Zu Dr. Schulz.', 'In die Apotheke.'], optionsTr: [{ en: 'To Dr Meier.', fr: 'Chez le Dr Meier.' }, { en: 'To Dr Schulz.', fr: 'Chez le Dr Schulz.' }, { en: 'To the pharmacy.', fr: 'À la pharmacie.' }], answer: 1, explain: { en: '"Vertretung" = the doctor who covers during the holiday.', fr: '« Vertretung » = le médecin qui remplace pendant les vacances.' } },
          { id: 'q102', textId: 's2', q: 'Wann ist Obst besonders billig?', qTr: { en: 'When is fruit especially cheap?', fr: 'Quand les fruits sont-ils particulièrement bon marché ?' }, options: ['Den ganzen Tag.', 'Ab 18 Uhr.', 'Nur am Wochenende.'], optionsTr: [{ en: 'All day.', fr: 'Toute la journée.' }, { en: 'From 6 p.m.', fr: 'À partir de 18 h.' }, { en: 'Only at the weekend.', fr: 'Seulement le week-end.' }], answer: 1, explain: { en: '"Ab 18 Uhr: Obst und Gemüse 30 % billiger."', fr: '« Ab 18 Uhr : Obst und Gemüse 30 % billiger. »' } },
          { id: 'q103', textId: 's3', q: 'Was ist heute anders?', qTr: { en: 'What is different today?', fr: "Qu'est-ce qui est différent aujourd'hui ?" }, options: ['Die Abfahrtszeit.', 'Das Gleis.', 'Das Ziel.'], optionsTr: [{ en: 'The departure time.', fr: "L'heure de départ." }, { en: 'The platform.', fr: 'La voie.' }, { en: 'The destination.', fr: 'La destination.' }], answer: 1, explain: { en: 'Platform 7 instead of 4; the time is "wie immer".', fr: "Voie 7 au lieu de 4 ; l'heure est « wie immer »." } },
          { id: 'q104', textId: 's4', q: 'Was ist richtig?', qTr: { en: 'What is correct?', fr: 'Quelle est la bonne réponse ?' }, options: ['Am Dienstag kosten alle Filme 6 Euro.', 'Kinder zahlen nur am Dienstag weniger.', 'Erwachsene zahlen immer die Hälfte.'], optionsTr: [{ en: 'On Tuesday all films cost 6 euros.', fr: 'Le mardi, tous les films coûtent 6 euros.' }, { en: 'Children only pay less on Tuesdays.', fr: 'Les enfants ne paient moins que le mardi.' }, { en: 'Adults always pay half.', fr: 'Les adultes paient toujours moitié prix.' }], answer: 0, explain: { en: 'Children under 12 always pay half, on every day.', fr: 'Les enfants de moins de 12 ans paient toujours moitié prix, tous les jours.' } },
          { id: 'q105', textId: 's5', q: 'Was sollen die Mieter tun?', qTr: { en: 'What should the tenants do?', fr: 'Que doivent faire les locataires ?' }, options: ['Am Freitag zu Hause bleiben.', 'Vorher Wasser in Flaschen füllen.', 'Den Hausmeister anrufen.'], optionsTr: [{ en: 'Stay at home on Friday.', fr: 'Rester à la maison vendredi.' }, { en: 'Fill bottles with water beforehand.', fr: "Remplir des bouteilles d'eau avant." }, { en: 'Call the caretaker.', fr: 'Appeler le concierge.' }], answer: 1, explain: { en: '"Bitte füllen Sie vorher Wasser in Flaschen."', fr: '« Bitte füllen Sie vorher Wasser in Flaschen. »' } },
        ],
      },
      {
        id: 'telc-a2-2-l2', teil: 2, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 2',
        instruction: 'Lesen Sie den Text. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the text. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez le texte. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Ich habe eine Wohnung!',
          de: 'Hallo Jana,\n\nwie geht es dir? Ich habe endlich eine Wohnung gefunden! Zwei Wochen lang habe ich im Internet gesucht und viele Anzeigen gelesen. Vier Wohnungen habe ich angeschaut. Die ersten drei waren zu teuer oder zu weit weg vom Zentrum. Die vierte ist perfekt: Sie liegt im dritten Stock, hat zwei Zimmer und einen kleinen Balkon. Die Miete beträgt 540 Euro, das ist für mich in Ordnung.\n\nDie U-Bahn-Station ist nur fünf Minuten entfernt, deshalb muss ich nicht mehr mit dem Auto zur Arbeit fahren. Einen Nachteil gibt es: Es gibt keine Waschmaschine. Ich ziehe am 1. September um, und mein Bruder hilft mir mit den Möbeln.\n\nHast du am Samstag Zeit? Dann können wir zusammen Kisten packen. Ich koche auch etwas für dich!\n\nBis bald\nTarek',
          tr: {
            en: 'Subject: I have a flat!\n\nHi Jana,\n\nHow are you? I have finally found a flat! For two weeks I searched on the internet and read lots of ads. I looked at four flats. The first three were too expensive or too far from the centre. The fourth is perfect: it is on the third floor, has two rooms and a small balcony. The rent is 540 euros, which is fine for me.\n\nThe underground station is only five minutes away, so I no longer have to drive to work. There is one disadvantage: there is no washing machine. I am moving on 1 September, and my brother is helping me with the furniture.\n\nDo you have time on Saturday? Then we can pack boxes together. I will cook something for you too!\n\nSee you soon\nTarek',
            fr: "Objet : J'ai un appartement !\n\nSalut Jana,\n\nComment vas-tu ? J'ai enfin trouvé un appartement ! Pendant deux semaines, j'ai cherché sur Internet et lu beaucoup d'annonces. J'ai visité quatre appartements. Les trois premiers étaient trop chers ou trop loin du centre. Le quatrième est parfait : il est au troisième étage, a deux pièces et un petit balcon. Le loyer est de 540 euros, ça me convient.\n\nLa station de métro n'est qu'à cinq minutes, donc je n'ai plus besoin d'aller au travail en voiture. Il y a un inconvénient : il n'y a pas de machine à laver. Je déménage le 1er septembre, et mon frère m'aide avec les meubles.\n\nAs-tu du temps samedi ? Nous pourrions alors faire des cartons ensemble. Je cuisinerai aussi quelque chose pour toi !\n\nÀ bientôt\nTarek",
          },
        }],
        items: [
          { id: 'q106', q: 'Tarek hat zwei Wochen lang eine Wohnung gesucht.', qTr: { en: 'Tarek searched for a flat for two weeks.', fr: 'Tarek a cherché un appartement pendant deux semaines.' }, answer: true, explain: { en: '"Zwei Wochen lang habe ich … gesucht."', fr: '« Zwei Wochen lang habe ich … gesucht. »' } },
          { id: 'q107', q: 'Tarek hat nur eine Wohnung angeschaut.', qTr: { en: 'Tarek looked at only one flat.', fr: "Tarek n'a visité qu'un seul appartement." }, answer: false, explain: { en: 'He looked at four flats.', fr: 'Il a visité quatre appartements.' } },
          { id: 'q108', q: 'Die neue Wohnung liegt im zweiten Stock.', qTr: { en: 'The new flat is on the second floor.', fr: "Le nouvel appartement est au deuxième étage." }, answer: false, explain: { en: 'It is on the third floor.', fr: 'Il est au troisième étage.' } },
          { id: 'q109', q: 'Die Miete kostet 540 Euro im Monat.', qTr: { en: 'The rent is 540 euros a month.', fr: 'Le loyer est de 540 euros par mois.' }, answer: true, explain: { en: '"Die Miete beträgt 540 Euro."', fr: '« Die Miete beträgt 540 Euro. »' } },
          { id: 'q110', q: 'Tarek fährt weiter mit dem Auto zur Arbeit.', qTr: { en: 'Tarek will keep driving to work.', fr: 'Tarek continuera à aller au travail en voiture.' }, answer: false, explain: { en: 'The underground is five minutes away, so he no longer needs the car.', fr: "Le métro est à cinq minutes, il n'a donc plus besoin de la voiture." } },
        ],
      },
      {
        id: 'telc-a2-2-l3', teil: 3, kind: 'matching', allowNone: true,
        title: 'Teil 3',
        instruction: 'Lesen Sie die Situationen und die Anzeigen a bis h. Welche Anzeige passt zu welcher Situation? Jede Anzeige passt nur einmal. Wenn keine Anzeige passt, schreiben Sie x.',
        instructionTr: {
          en: 'Read the situations and the ads a to h. Which ad fits which situation? Each ad fits only once. If no ad fits, write x.',
          fr: "Lisez les situations et les annonces a à h. Quelle annonce correspond à quelle situation ? Chaque annonce ne convient qu'une fois. Si aucune annonce ne convient, écrivez x.",
        },
        texts: [
          { id: 'a', label: 'a', de: 'Hotel am See\nDoppelzimmer ab 59 Euro\nFrühstück inklusive\nHunde sind willkommen', tr: { en: 'Hotel am See\nDouble room from 59 euros\nBreakfast included\nDogs welcome', fr: "Hôtel am See\nChambre double à partir de 59 euros\nPetit-déjeuner compris\nLes chiens sont bienvenus" } },
          { id: 'b', label: 'b', de: 'Physiotherapie Lang\nBehandlung bei Rückenschmerzen\nTermine auch abends: Mo–Do 17–20 Uhr', tr: { en: 'Lang physiotherapy\nTreatment for back pain\nAppointments also in the evening: Mon–Thu 5–8 p.m.', fr: "Kinésithérapie Lang\nTraitement des douleurs de dos\nRendez-vous aussi le soir : lun–jeu 17 h–20 h" } },
          { id: 'c', label: 'c', de: 'Nachhilfe Mathematik\nStudentin gibt Unterricht\n12 Euro pro Stunde\nTel. 0176 / 123 45 67', tr: { en: 'Maths tutoring\nStudent gives lessons\n12 euros per hour\nTel. 0176 / 123 45 67', fr: "Cours particuliers de maths\nUne étudiante donne des cours\n12 euros de l'heure\nTél. 0176 / 123 45 67" } },
          { id: 'd', label: 'd', de: 'Stadtführung für Gäste\nSamstag, 11 Uhr\nTreffpunkt: Rathaus\n2 Stunden, 8 Euro', tr: { en: 'City tour for visitors\nSaturday, 11 a.m.\nMeeting point: town hall\n2 hours, 8 euros', fr: "Visite guidée de la ville\nSamedi, 11 h\nPoint de rencontre : hôtel de ville\n2 heures, 8 euros" } },
          { id: 'e', label: 'e', de: 'Ferien-Camp für Kinder\n10 bis 12 Jahre\nEine Woche Sport, Spiele und Basteln\n90 Euro', tr: { en: 'Holiday camp for children\nAges 10 to 12\nOne week of sport, games and crafts\n90 euros', fr: "Camp de vacances pour enfants\n10 à 12 ans\nUne semaine de sport, de jeux et de bricolage\n90 euros" } },
          { id: 'f', label: 'f', de: 'Autowerkstatt Schnell\nReifenwechsel 25 Euro\nOhne Termin, Mo–Sa', tr: { en: 'Schnell car garage\nTyre change 25 euros\nNo appointment needed, Mon–Sat', fr: "Garage Schnell\nChangement de pneus 25 euros\nSans rendez-vous, lun–sam" } },
          { id: 'g', label: 'g', de: 'Sprachcafé im Café Welt\nJeden Donnerstag, 19 Uhr\nDeutsch sprechen und neue Leute treffen\nEintritt frei', tr: { en: 'Language café at Café Welt\nEvery Thursday, 7 p.m.\nSpeak German and meet new people\nFree entry', fr: "Café-langues au Café Welt\nChaque jeudi, 19 h\nParler allemand et rencontrer de nouvelles personnes\nEntrée gratuite" } },
          { id: 'h', label: 'h', de: 'Yoga im Park\nMontag und Mittwoch, 7 Uhr\nBitte Matte mitbringen', tr: { en: 'Yoga in the park\nMonday and Wednesday, 7 a.m.\nPlease bring a mat', fr: "Yoga dans le parc\nLundi et mercredi, 7 h\nApportez un tapis" } },
        ],
        items: [
          { id: 'q111', q: 'Sie haben Rückenschmerzen und können nur am Abend zum Arzt gehen.', qTr: { en: 'You have back pain and can only go in the evening.', fr: 'Vous avez mal au dos et ne pouvez consulter que le soir.' }, answer: 'b', explain: { en: 'Back-pain treatment with evening appointments.', fr: 'Traitement du mal de dos avec des rendez-vous le soir.' } },
          { id: 'q112', q: 'Ihre Tochter ist zehn Jahre alt und soll in den Ferien Spaß haben.', qTr: { en: 'Your daughter is ten years old and should have fun in the holidays.', fr: 'Votre fille a dix ans et doit bien s\'amuser pendant les vacances.' }, answer: 'e', explain: { en: 'A holiday camp for ages 10 to 12.', fr: 'Un camp de vacances pour les 10–12 ans.' } },
          { id: 'q113', q: 'Sie sind neu in der Stadt und möchten sie kennenlernen.', qTr: { en: 'You are new in the city and want to get to know it.', fr: 'Vous êtes nouveau dans la ville et voulez la découvrir.' }, answer: 'd', explain: { en: 'A city tour starting at the town hall.', fr: "Une visite guidée au départ de l'hôtel de ville." } },
          { id: 'q114', q: 'Ihr Freund möchte mit seinem Hund Urlaub am Wasser machen.', qTr: { en: 'Your friend wants to take a holiday by the water with his dog.', fr: 'Votre ami veut partir en vacances au bord de l\'eau avec son chien.' }, answer: 'a', explain: { en: '"Hunde sind willkommen" at a hotel by the lake.', fr: '« Hunde sind willkommen » dans un hôtel au bord du lac.' } },
          { id: 'q115', q: 'Sie möchten am Samstag einen Kuchen für eine Feier bestellen.', qTr: { en: 'You want to order a cake for a party on Saturday.', fr: "Vous voulez commander un gâteau pour une fête samedi." }, answer: 'x', explain: { en: 'No ad is from a bakery, so the answer is x. Ads c, f, g and h are not needed for any situation.', fr: "Aucune annonce ne vient d'une boulangerie, la réponse est donc x. Les annonces c, f, g et h ne servent à aucune situation." } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'telc-a2-2-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten ein Hotelzimmer reservieren. Ihr Kollege hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to reserve a hotel room. Your colleague helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez réserver une chambre d'hôtel. Votre collègue vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Mein Name ist Selma Yilmaz. Wir sind zwei Personen und möchten ein Doppelzimmer. Wir kommen am 12. August an und bleiben vier Nächte. Meine Telefonnummer ist 0171 / 234 56 78.',
          tr: {
            en: 'My name is Selma Yilmaz. There are two of us and we would like a double room. We arrive on 12 August and stay four nights. My telephone number is 0171 / 234 56 78.',
            fr: "Je m'appelle Selma Yilmaz. Nous sommes deux personnes et nous voudrions une chambre double. Nous arrivons le 12 août et restons quatre nuits. Mon numéro de téléphone est le 0171 / 234 56 78.",
          },
        },
        fields: [
          { id: 'f1', label: 'Nachname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Yilmaz'] },
          { id: 'f2', label: 'Zimmerart', labelTr: { en: 'Type of room', fr: 'Type de chambre' }, accept: ['Doppelzimmer', 'ein Doppelzimmer'] },
          { id: 'f3', label: 'Anreise', labelTr: { en: 'Arrival date', fr: "Date d'arrivée" }, accept: ['12.08.', '12.8.', '12. August', '12 August'] },
          { id: 'f4', label: 'Anzahl der Nächte', labelTr: { en: 'Number of nights', fr: 'Nombre de nuits' }, accept: ['4', 'vier', '4 Nächte', 'vier Nächte'] },
          { id: 'f5', label: 'Telefon', labelTr: { en: 'Telephone', fr: 'Téléphone' }, accept: ['0171 234 56 78', '0171/2345678', '01712345678', '0171 / 234 56 78'] },
        ],
      },
      {
        id: 'telc-a2-2-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie machen am Samstag ein Fest im Hof. Schreiben Sie Ihrer Nachbarin, Frau Keller, eine Nachricht (ca. 40 Wörter). Vier Punkte stehen zur Auswahl: Schreiben Sie zu drei Punkten.',
        instructionTr: {
          en: 'You are having a party in the courtyard on Saturday. Write a message to your neighbour, Ms Keller (about 40 words). Four points are given: write about three of them.',
          fr: "Vous faites une fête dans la cour samedi. Écrivez un message à votre voisine, Mme Keller (environ 40 mots). Quatre points sont proposés : traitez-en trois.",
        },
        points: [
          { id: 'p1', de: 'Einladung: wann und wo?', tr: { en: 'Invitation: when and where?', fr: 'Invitation : quand et où ?' }, keywords: ['einlad', 'samstag', 'uhr', 'hof', 'fest'] },
          { id: 'p2', de: 'Entschuldigung für den Lärm', tr: { en: 'Apology for the noise', fr: 'Excuses pour le bruit' }, keywords: ['laut', 'lärm', 'musik', 'entschuldig', 'leid'] },
          { id: 'p3', de: 'Was soll Frau Keller mitbringen?', tr: { en: 'What should Ms Keller bring?', fr: 'Que doit apporter Mme Keller ?' }, keywords: ['mitbring', 'bringen sie', 'kuchen', 'salat', 'getränk'] },
          { id: 'p4', de: 'Bitte um eine Antwort', tr: { en: 'Request for a reply', fr: 'Demande de réponse' }, keywords: ['antwort', 'schreiben sie', 'sagen sie', 'rufen sie', 'bescheid', 'kommen sie'] },
        ],
        minWords: 35, maxWords: 55,
        model: {
          de: 'Sehr geehrte Frau Keller,\n\nich möchte Sie zu meinem Fest am Samstag um 18 Uhr im Hof einladen. Es tut mir leid, es wird sicher laut. Bitte bringen Sie einen Kuchen oder einen Salat mit. Sagen Sie mir bitte bis Donnerstag Bescheid.\n\nMit freundlichen Grüßen\nIhr Nachbar\nOmar Haddad',
          tr: {
            en: 'Dear Ms Keller,\n\nI would like to invite you to my party on Saturday at 6 p.m. in the courtyard. I am sorry, it will certainly be loud. Please bring a cake or a salad. Please let me know by Thursday.\n\nKind regards\nYour neighbour\nOmar Haddad',
            fr: "Madame Keller,\n\nJe voudrais vous inviter à ma fête samedi à 18 h dans la cour. Je suis désolé, ce sera sûrement bruyant. Apportez, s'il vous plaît, un gâteau ou une salade. Dites-le-moi, s'il vous plaît, d'ici jeudi.\n\nCordialement\nVotre voisin\nOmar Haddad",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a2-2-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Wohnort, Familie, Beruf oder Schule, Freizeit, Sprachen.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, place of residence, family, job or school, free time, languages.', fr: "Présentez-vous. Les mots-clés vous aident : nom, lieu de résidence, famille, profession ou école, loisirs, langues." },
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Mein Name ist Leila Haddad. Ich schreibe das so: H-A-D-D-A-D.', sampleTr: { en: 'My name is Leila Haddad. I write it like this: H-A-D-D-A-D.', fr: "Je m'appelle Leila Haddad. Ça s'écrit : H-A-D-D-A-D." } },
          { id: 'p1b', cue: 'Wohnort', cueTr: { en: 'Where you live', fr: 'Lieu de résidence' }, sample: 'Ich wohne in Stuttgart, in der Nähe vom Zentrum. Die Wohnung ist hell und hat einen Balkon.', sampleTr: { en: 'I live in Stuttgart, near the centre. The flat is bright and has a balcony.', fr: "J'habite à Stuttgart, près du centre. L'appartement est lumineux et a un balcon." } },
          { id: 'p1c', cue: 'Familie', cueTr: { en: 'Family', fr: 'Famille' }, sample: 'Ich bin verheiratet und habe zwei Kinder. Mein Sohn ist fünf und meine Tochter ist acht Jahre alt.', sampleTr: { en: 'I am married and have two children. My son is five and my daughter is eight years old.', fr: "Je suis mariée et j'ai deux enfants. Mon fils a cinq ans et ma fille a huit ans." } },
          { id: 'p1d', cue: 'Beruf oder Schule', cueTr: { en: 'Job or school', fr: 'Profession ou école' }, sample: 'Ich bin Krankenschwester und arbeite im Krankenhaus. Ich muss oft nachts arbeiten.', sampleTr: { en: 'I am a nurse and work in a hospital. I often have to work at night.', fr: "Je suis infirmière et je travaille à l'hôpital. Je dois souvent travailler la nuit." } },
          { id: 'p1e', cue: 'Freizeit', cueTr: { en: 'Free time', fr: 'Loisirs' }, sample: 'Am Wochenende gehe ich gern mit meinen Kindern schwimmen. Manchmal lese ich auch ein Buch.', sampleTr: { en: 'At the weekend I like to go swimming with my children. Sometimes I also read a book.', fr: "Le week-end, j'aime aller nager avec mes enfants. Parfois, je lis aussi un livre." } },
          { id: 'p1f', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Arabisch, Französisch und ein bisschen Deutsch. Ich besuche einen Deutschkurs am Abend.', sampleTr: { en: 'I speak Arabic, French and a little German. I attend a German course in the evening.', fr: "Je parle arabe, français et un peu allemand. Je suis un cours d'allemand le soir." } },
        ],
      },
      {
        id: 'telc-a2-2-p2', teil: 2, title: 'Teil 2: Ein Alltagsgespräch führen', minutes: 4,
        instruction: 'Führen Sie mit Ihrem Partner / Ihrer Partnerin ein Alltagsgespräch zu einem Thema. Erzählen Sie von sich und stellen Sie eine Frage.',
        instructionTr: { en: 'Have an everyday conversation with your partner about a topic. Tell about yourself and ask a question.', fr: "Menez avec votre partenaire une conversation du quotidien sur un thème. Parlez de vous et posez une question." },
        prompts: [
          { id: 'p2a', cue: 'Thema: Urlaub – Wohin fahren Sie gern in den Ferien?', cueTr: { en: 'Topic: Holiday – Where do you like to go in the holidays?', fr: 'Thème : Vacances – Où aimez-vous aller pendant les vacances ?' }, sample: 'Im Sommer fahre ich gern ans Meer, weil ich gern schwimme. Letztes Jahr war ich in Spanien und habe viele Fotos gemacht. Wohin fährst du gern?', sampleTr: { en: "In summer I like to go to the sea because I like swimming. Last year I was in Spain and took lots of photos. Where do you like to go?", fr: "En été, j'aime aller à la mer, parce que j'aime nager. L'année dernière, j'étais en Espagne et j'ai pris beaucoup de photos. Où aimes-tu aller ?" } },
          { id: 'p2b', cue: 'Thema: Wohnen – Wie wohnen Sie?', cueTr: { en: 'Topic: Living – How do you live?', fr: 'Thème : Habitat – Comment habitez-vous ?' }, sample: 'Ich wohne in einer Wohnung mit drei Zimmern im vierten Stock. Die Küche ist klein, aber das Wohnzimmer ist groß. Wohnst du in einem Haus oder in einer Wohnung?', sampleTr: { en: "I live in a three-room flat on the fourth floor. The kitchen is small, but the living room is big. Do you live in a house or a flat?", fr: "J'habite dans un appartement de trois pièces au quatrième étage. La cuisine est petite, mais le salon est grand. Habites-tu dans une maison ou dans un appartement ?" } },
          { id: 'p2c', cue: 'Thema: Gesundheit – Was tun Sie, wenn Sie krank sind?', cueTr: { en: 'Topic: Health – What do you do when you are ill?', fr: 'Thème : Santé – Que faites-vous quand vous êtes malade ?' }, sample: 'Wenn ich Fieber habe, bleibe ich im Bett und trinke viel Tee. Wenn es nicht besser wird, gehe ich zum Arzt. Gehst du auch gleich zum Arzt?', sampleTr: { en: "When I have a fever I stay in bed and drink lots of tea. If it does not get better I go to the doctor. Do you also go to the doctor straight away?", fr: "Quand j'ai de la fièvre, je reste au lit et je bois beaucoup de thé. Si ça ne va pas mieux, je vais chez le médecin. Et toi, tu vas tout de suite chez le médecin ?" } },
          { id: 'p2d', cue: 'Thema: Sport – Machen Sie Sport?', cueTr: { en: 'Topic: Sport – Do you do sport?', fr: 'Thème : Sport – Faites-vous du sport ?' }, sample: 'Ja, ich spiele einmal pro Woche Volleyball im Verein. Das macht mir Spaß, weil ich dort nette Leute treffe. Machst du auch Sport?', sampleTr: { en: "Yes, I play volleyball once a week at a club. I enjoy it because I meet nice people there. Do you do sport too?", fr: "Oui, je joue au volley une fois par semaine dans un club. J'aime ça parce que j'y rencontre des gens sympathiques. Et toi, tu fais du sport ?" } },
        ],
      },
      {
        id: 'telc-a2-2-p3', teil: 3, title: 'Teil 3: Etwas aushandeln', minutes: 4,
        instruction: 'Sie möchten mit Ihrem Partner / Ihrer Partnerin ein Fest für die Nachbarn im Haus planen. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge, handeln Sie die Details aus und einigen Sie sich.',
        instructionTr: { en: 'You want to plan a party for the neighbours in your building with your partner. Make suggestions, react to the suggestions, negotiate the details and agree.', fr: "Vous voulez organiser avec votre partenaire une fête pour les voisins de l'immeuble. Faites des propositions, réagissez-y, négociez les détails et mettez-vous d'accord." },
        prompts: [
          { id: 'p3a', cue: 'Wann und wo findet das Fest statt?', cueTr: { en: 'When and where does the party take place?', fr: 'Quand et où a lieu la fête ?' }, sample: 'Wir könnten das Fest im Sommer im Hof machen. Wie wäre es mit dem ersten Samstag im Juli? – Das passt mir gut. Aber was machen wir, wenn es regnet?', sampleTr: { en: "We could hold the party in the courtyard in summer. How about the first Saturday in July? – That suits me well. But what do we do if it rains?", fr: "Nous pourrions faire la fête dans la cour en été. Que dirais-tu du premier samedi de juillet ? – Ça me convient bien. Mais que fait-on s'il pleut ?" } },
          { id: 'p3b', cue: 'Einladung der Nachbarn', cueTr: { en: 'Inviting the neighbours', fr: 'Invitation des voisins' }, sample: 'Wir sollten einen Zettel in den Hausflur hängen. Ich kann ihn schreiben. – Gut, und ich spreche mit den Nachbarn im ersten Stock persönlich.', sampleTr: { en: "We should put a note up in the hallway. I can write it. – Good, and I will talk to the neighbours on the first floor in person.", fr: "Nous devrions accrocher un papier dans le couloir de l'immeuble. Je peux l'écrire. – Bien, et moi, je parle aux voisins du premier étage en personne." } },
          { id: 'p3c', cue: 'Essen, Getränke und Musik', cueTr: { en: 'Food, drinks and music', fr: 'Nourriture, boissons et musique' }, sample: 'Jeder bringt etwas zu essen mit, dann haben wir ein großes Buffet. Ich kümmere mich um die Getränke. – Und ich bringe Lautsprecher für die Musik mit, aber nicht zu laut.', sampleTr: { en: "Everyone brings something to eat, then we will have a big buffet. I will take care of the drinks. – And I will bring speakers for the music, but not too loud.", fr: "Chacun apporte quelque chose à manger, comme ça nous aurons un grand buffet. Je m'occupe des boissons. – Et moi, j'apporte des enceintes pour la musique, mais pas trop fort." } },
        ],
      },
    ],
  },
];

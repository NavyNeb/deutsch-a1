import type { ExamSetInput } from '../types';

export const GOETHE_A1_9_10: ExamSetInput[] = [
  {
    id: 'goethe-a1-9',
    board: 'goethe',
    level: 'A1',
    number: 9,
    lesen: [
      {
        id: 'goethe-a1-9-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Spielplatz am Sonntag',
          de: 'Hallo Marta,\n\nam Sonntag gehe ich mit meinen Kindern auf den Spielplatz im Stadtpark. Emre ist vier Jahre alt und Lale ist sieben. Wir treffen uns um 15 Uhr am Eingang. Kommt dein Sohn Leo auch mit?\n\nIch bringe Kuchen und Apfelsaft mit. Du musst nichts mitbringen. Rufst du mich bis Freitag an?\n\nLiebe Grüße\nAyşe',
          tr: {
            en: 'Subject: Playground on Sunday\n\nHi Marta,\n\nOn Sunday I am going to the playground in the city park with my children. Emre is four years old and Lale is seven. We are meeting at 3 p.m. at the entrance. Is your son Leo coming too?\n\nI will bring cake and apple juice. You do not have to bring anything. Will you call me by Friday?\n\nBest wishes\nAyşe',
            fr: "Objet : Aire de jeux dimanche\n\nSalut Marta,\n\ndimanche, je vais avec mes enfants à l'aire de jeux du parc municipal. Emre a quatre ans et Lale en a sept. Nous nous retrouvons à 15 h à l'entrée. Ton fils Leo vient aussi ?\n\nJ'apporte du gâteau et du jus de pomme. Tu n'as rien à apporter. Tu m'appelles avant vendredi ?\n\nBises\nAyşe",
          },
        }],
        items: [
          { id: 'q901', q: 'Ayşe hat zwei Kinder.', qTr: { en: 'Ayşe has two children.', fr: 'Ayşe a deux enfants.' }, answer: true, explain: { en: 'She mentions two children: Emre and Lale.', fr: 'Elle parle de deux enfants : Emre et Lale.' } },
          { id: 'q902', q: 'Lale ist vier Jahre alt.', qTr: { en: 'Lale is four years old.', fr: 'Lale a quatre ans.' }, answer: false, explain: { en: 'Emre is four; Lale is seven.', fr: 'Emre a quatre ans ; Lale en a sept.' } },
          { id: 'q903', q: 'Sie treffen sich um 15 Uhr am Eingang.', qTr: { en: 'They meet at 3 p.m. at the entrance.', fr: 'Ils se retrouvent à 15 h à l’entrée.' }, answer: true, explain: { en: '“Wir treffen uns um 15 Uhr am Eingang.”', fr: '« Wir treffen uns um 15 Uhr am Eingang. »' } },
          { id: 'q904', q: 'Marta soll Kuchen mitbringen.', qTr: { en: 'Marta should bring cake.', fr: 'Marta doit apporter du gâteau.' }, answer: false, explain: { en: 'Ayşe brings the cake; Marta does not have to bring anything.', fr: 'C’est Ayşe qui apporte le gâteau ; Marta n’a rien à apporter.' } },
          { id: 'q905', q: 'Marta soll Ayşe am Sonntag anrufen.', qTr: { en: 'Marta should call Ayşe on Sunday.', fr: 'Marta doit appeler Ayşe dimanche.' }, answer: false, explain: { en: 'Marta should call “bis Freitag” (by Friday), not on Sunday.', fr: 'Marta doit appeler « bis Freitag » (avant vendredi), pas dimanche.' } },
        ],
      },
      {
        id: 'goethe-a1-9-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: 'p1', title: 'Anzeigen 1', de: 'Anzeige a\nHandy-Reparatur Blitz\nDisplay kaputt? Fertig in 1 Stunde!\nab 49 Euro\n\nAnzeige b\nHandy-Shop Nova\nNeue Handys und Verträge\nab 9 Euro im Monat', tr: { en: 'Ad a\nBlitz phone repair\nBroken screen? Done in 1 hour!\nfrom 49 euros\n\nAd b\nNova phone shop\nNew phones and contracts\nfrom 9 euros a month', fr: 'Annonce a\nRéparation de portables Blitz\nÉcran cassé ? Prêt en 1 heure !\nà partir de 49 euros\n\nAnnonce b\nBoutique Nova\nPortables et forfaits neufs\nà partir de 9 euros par mois' } },
          { id: 'p2', title: 'Anzeigen 2', de: 'Anzeige a\nComputerkurs für Kinder\n8–12 Jahre\nSamstag, 10–12 Uhr\n\nAnzeige b\nInternet für Senioren\nKurs für Anfänger\nDienstag, 10 Uhr, Volkshochschule', tr: { en: 'Ad a\nComputer course for children\nAges 8–12\nSaturday, 10 a.m.–12 noon\n\nAd b\nInternet for senior citizens\nCourse for beginners\nTuesday, 10 a.m., adult education centre', fr: "Annonce a\nCours d'informatique pour enfants\n8–12 ans\nSamedi, 10 h–12 h\n\nAnnonce b\nInternet pour seniors\nCours pour débutants\nMardi, 10 h, université populaire" } },
          { id: 'p3', title: 'Anzeigen 3', de: 'Anzeige a\nKinderbetreuung Villa Kunterbunt\nfür Kinder von 3 bis 6 Jahren\nMo–Fr, 12–18 Uhr\n\nAnzeige b\nKindergarten Sonnenschein\nfür Kinder von 3 bis 6 Jahren\nMo–Fr, 7–13 Uhr', tr: { en: 'Ad a\nVilla Kunterbunt childcare\nfor children aged 3 to 6\nMon–Fri, 12 noon–6 p.m.\n\nAd b\nSonnenschein kindergarten\nfor children aged 3 to 6\nMon–Fri, 7 a.m.–1 p.m.', fr: "Annonce a\nGarde d'enfants Villa Kunterbunt\npour les enfants de 3 à 6 ans\nLun–ven, 12 h–18 h\n\nAnnonce b\nJardin d'enfants Sonnenschein\npour les enfants de 3 à 6 ans\nLun–ven, 7 h–13 h" } },
          { id: 'p4', title: 'Anzeigen 4', de: 'Anzeige a\nBasteln für Kinder\nab 6 Jahren\nSamstag, 10 Uhr\n\nAnzeige b\nBasteln mit den Eltern\nfür Kinder von 2 bis 4 Jahren\nSamstag, 10 Uhr', tr: { en: 'Ad a\nCrafts for children\nfrom age 6\nSaturday, 10 a.m.\n\nAd b\nCrafts with parents\nfor children aged 2 to 4\nSaturday, 10 a.m.', fr: 'Annonce a\nBricolage pour enfants\ndès 6 ans\nSamedi, 10 h\n\nAnnonce b\nBricolage avec les parents\npour les enfants de 2 à 4 ans\nSamedi, 10 h' } },
          { id: 'p5', title: 'Anzeigen 5', de: 'Anzeige a\nWLAN für Zuhause\nInternet ohne Limit\n19 Euro im Monat\n\nAnzeige b\nPrepaid-Karte für Ihr Handy\n5 GB Internet\n10 Euro, kein Vertrag', tr: { en: 'Ad a\nWi-Fi for home\nUnlimited internet\n19 euros a month\n\nAd b\nPrepaid card for your mobile\n5 GB of internet\n10 euros, no contract', fr: "Annonce a\nWi-Fi pour la maison\nInternet illimité\n19 euros par mois\n\nAnnonce b\nCarte prépayée pour votre portable\n5 Go d'internet\n10 euros, sans contrat" } },
        ],
        items: [
          { id: 'q906', textId: 'p1', q: 'Das Display von Ihrem Handy ist kaputt. Wo finden Sie die Information?', qTr: { en: 'The screen of your mobile phone is broken. Where do you find the information?', fr: "L'écran de votre portable est cassé. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'Ad a repairs broken screens (“Display kaputt?”). Ad b only sells new phones.', fr: "L'annonce a répare les écrans cassés (« Display kaputt ? »). L'annonce b vend seulement des portables neufs." } },
          { id: 'q907', textId: 'p2', q: 'Ihre Großmutter möchte das Internet lernen. Wo finden Sie die Information?', qTr: { en: 'Your grandmother wants to learn how to use the internet. Where do you find the information?', fr: "Votre grand-mère veut apprendre à utiliser Internet. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b is an internet course for senior citizens (“Senioren”). Ad a is for children.', fr: "L'annonce b est un cours d'Internet pour seniors (« Senioren »). L'annonce a est pour les enfants." } },
          { id: 'q908', textId: 'p3', q: 'Sie suchen am Nachmittag eine Betreuung für Ihre Tochter (4 Jahre). Wo finden Sie die Information?', qTr: { en: 'You are looking for afternoon care for your daughter (4 years old). Where do you find the information?', fr: "Vous cherchez une garde l'après-midi pour votre fille (4 ans). Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'Ad a is open from 12 to 6 p.m. (afternoon). Ad b closes at 1 p.m.', fr: "L'annonce a est ouverte de 12 h à 18 h (après-midi). L'annonce b ferme à 13 h." } },
          { id: 'q909', textId: 'p4', q: 'Sie möchten am Samstag mit Ihrem Sohn (3 Jahre) basteln. Wo finden Sie die Information?', qTr: { en: 'You want to do crafts with your son (3 years old) on Saturday. Where do you find the information?', fr: "Vous voulez bricoler samedi avec votre fils (3 ans). Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b is for children aged 2 to 4 together with their parents. Ad a starts at age 6.', fr: "L'annonce b s'adresse aux enfants de 2 à 4 ans avec leurs parents. L'annonce a commence à 6 ans." } },
          { id: 'q910', textId: 'p5', q: 'Sie möchten eine Prepaid-Karte für Ihr Handy kaufen. Wo finden Sie die Information?', qTr: { en: 'You want to buy a prepaid card for your mobile phone. Where do you find the information?', fr: "Vous voulez acheter une carte prépayée pour votre portable. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b offers a “Prepaid-Karte” for your mobile. Ad a is internet for the home.', fr: "L'annonce b propose une « Prepaid-Karte » pour le portable. L'annonce a est un accès Internet pour la maison." } },
        ],
      },
      {
        id: 'goethe-a1-9-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: 's1', de: 'Spielplatz\nKinder unter 6 Jahren nur mit Eltern!\nGeöffnet von 8 bis 20 Uhr', tr: { en: 'Playground\nChildren under 6 only with their parents!\nOpen from 8 a.m. to 8 p.m.', fr: "Aire de jeux\nEnfants de moins de 6 ans uniquement avec leurs parents !\nOuvert de 8 h à 20 h" } },
          { id: 's2', de: 'Café Lilie\nWLAN für Gäste: kostenlos\nPasswort an der Kasse', tr: { en: 'Café Lilie\nWi-Fi for guests: free\nPassword at the till', fr: 'Café Lilie\nWi-Fi pour les clients : gratuit\nMot de passe à la caisse' } },
          { id: 's3', de: 'Handy-Reparatur Blitz\nHeute geschlossen\nMorgen ab 10 Uhr wieder für Sie da!', tr: { en: 'Blitz phone repair\nClosed today\nBack for you tomorrow from 10 a.m.!', fr: 'Réparation de portables Blitz\nFermé aujourd’hui\nDe nouveau à votre service demain dès 10 h !' } },
          { id: 's4', de: 'Achtung!\nKinder spielen auf der Straße.\nBitte langsam fahren!', tr: { en: 'Caution!\nChildren are playing in the street.\nPlease drive slowly!', fr: 'Attention !\nDes enfants jouent dans la rue.\nRoulez lentement, s’il vous plaît !' } },
          { id: 's5', de: 'Internet-Café\n1 Stunde: 2 Euro\nKinder unter 14 Jahren nur bis 18 Uhr', tr: { en: 'Internet café\n1 hour: 2 euros\nChildren under 14 only until 6 p.m.', fr: 'Cybercafé\n1 heure : 2 euros\nEnfants de moins de 14 ans seulement jusqu’à 18 h' } },
        ],
        items: [
          { id: 'q911', textId: 's1', q: 'Kinder unter 6 Jahren dürfen hier nur mit ihren Eltern spielen.', qTr: { en: 'Children under 6 may only play here with their parents.', fr: 'Les enfants de moins de 6 ans ne peuvent jouer ici qu’avec leurs parents.' }, answer: true, explain: { en: '“Kinder unter 6 Jahren nur mit Eltern.”', fr: '« Kinder unter 6 Jahren nur mit Eltern. »' } },
          { id: 'q912', textId: 's2', q: 'Das WLAN im Café kostet Geld.', qTr: { en: 'The Wi-Fi in the café costs money.', fr: 'Le Wi-Fi du café est payant.' }, answer: false, explain: { en: '“kostenlos” means free of charge.', fr: '« kostenlos » signifie gratuit.' } },
          { id: 'q913', textId: 's3', q: 'Der Laden öffnet morgen um 10 Uhr wieder.', qTr: { en: 'The shop opens again tomorrow at 10 a.m.', fr: 'Le magasin rouvre demain à 10 h.' }, answer: true, explain: { en: '“Morgen ab 10 Uhr wieder für Sie da.”', fr: '« Morgen ab 10 Uhr wieder für Sie da. »' } },
          { id: 'q914', textId: 's4', q: 'Autos dürfen hier schnell fahren.', qTr: { en: 'Cars may drive fast here.', fr: 'Les voitures peuvent rouler vite ici.' }, answer: false, explain: { en: 'Children play in the street, so “langsam fahren” (drive slowly).', fr: 'Des enfants jouent dans la rue, donc « langsam fahren » (rouler lentement).' } },
          { id: 'q915', textId: 's5', q: 'Kinder unter 14 Jahren dürfen nach 18 Uhr im Internet-Café bleiben.', qTr: { en: 'Children under 14 may stay in the internet café after 6 p.m.', fr: 'Les enfants de moins de 14 ans peuvent rester au cybercafé après 18 h.' }, answer: false, explain: { en: 'Children under 14 may only stay “bis 18 Uhr” (until 6 p.m.).', fr: 'Les enfants de moins de 14 ans ne peuvent rester que « bis 18 Uhr » (jusqu’à 18 h).' } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-9-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten Ihren Sohn zum Kinderturnen anmelden. Ihre Freundin hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to register your son for children’s gymnastics. Your friend helps you and reads out the details. Fill in the form.',
          fr: 'Vous voulez inscrire votre fils à la gymnastique pour enfants. Votre amie vous aide et lit les informations. Remplissez le formulaire.',
        },
        source: {
          id: 'info',
          de: 'Ich heiße Nadia Haddad. Mein Sohn heißt Samir. Er ist sechs Jahre alt. Wir wohnen in Dresden. Meine Handynummer ist 0151 / 234 56 78. Samir möchte am Mittwoch zum Kinderturnen kommen.',
          tr: {
            en: 'My name is Nadia Haddad. My son’s name is Samir. He is six years old. We live in Dresden. My mobile number is 0151 / 234 56 78. Samir would like to come to children’s gymnastics on Wednesday.',
            fr: 'Je m’appelle Nadia Haddad. Mon fils s’appelle Samir. Il a six ans. Nous habitons à Dresde. Mon numéro de portable est le 0151 / 234 56 78. Samir voudrait venir à la gymnastique pour enfants le mercredi.',
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Haddad'] },
          { id: 'f2', label: 'Vorname des Kindes', labelTr: { en: 'Child’s first name', fr: 'Prénom de l’enfant' }, accept: ['Samir'] },
          { id: 'f3', label: 'Alter des Kindes', labelTr: { en: 'Child’s age', fr: 'Âge de l’enfant' }, accept: ['6', 'sechs', '6 Jahre', 'sechs Jahre', '6 Jahre alt', 'sechs Jahre alt'] },
          { id: 'f4', label: 'Handynummer', labelTr: { en: 'Mobile number', fr: 'Numéro de portable' }, accept: ['0151 / 234 56 78', '0151 234 56 78', '0151/2345678', '01512345678', '0151 2345678'] },
          { id: 'f5', label: 'Kurstag', labelTr: { en: 'Day of the course', fr: 'Jour du cours' }, accept: ['Mittwoch', 'am Mittwoch'] },
        ],
      },
      {
        id: 'goethe-a1-9-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Ihr Handy ist kaputt. Ihre Freundin Eva hat Sie nicht erreicht. Schreiben Sie ihr eine E-Mail (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten: Problem – wann neues Handy – Vorschlag für ein Treffen.',
        instructionTr: {
          en: 'Your mobile phone is broken. Your friend Eva could not reach you. Write her an e-mail (about 30 words). Write about all three points: the problem – when you get a new phone – a suggestion to meet.',
          fr: 'Votre portable est cassé. Votre amie Eva n’a pas pu vous joindre. Écrivez-lui un e-mail (environ 30 mots). Traitez les trois points : le problème – quand vous aurez un nouveau portable – une proposition de rencontre.',
        },
        points: [
          { id: 'p1', de: 'Problem: Handy kaputt', tr: { en: 'Problem: phone broken', fr: 'Problème : portable cassé' }, keywords: ['kaputt', 'defekt', 'funktioniert nicht'] },
          { id: 'p2', de: 'Wann neues Handy', tr: { en: 'When you get a new phone', fr: 'Quand vous aurez un nouveau portable' }, keywords: ['neue', 'repar', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'morgen', 'nächste woche'] },
          { id: 'p3', de: 'Vorschlag für ein Treffen', tr: { en: 'Suggestion to meet', fr: 'Proposition de rencontre' }, keywords: ['treffen', 'besuch', 'samstag', 'sonntag', 'wochenende', 'kaffee', 'kino'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Liebe Eva,\n\nmein Handy ist leider kaputt. Ich kann dich nicht anrufen. Am Montag bekomme ich ein neues Handy. Möchtest du mich am Samstag besuchen? Dann können wir zusammen Kaffee trinken.\n\nLiebe Grüße\nMarco',
          tr: {
            en: 'Dear Eva,\n\nMy phone is unfortunately broken. I cannot call you. On Monday I will get a new phone. Would you like to visit me on Saturday? Then we can have coffee together.\n\nBest wishes\nMarco',
            fr: 'Chère Eva,\n\nmon portable est malheureusement cassé. Je ne peux pas t’appeler. Lundi, j’aurai un nouveau portable. Veux-tu me rendre visite samedi ? Nous pourrons alors boire un café ensemble.\n\nAmitiés\nMarco',
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-9-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Familie, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, family, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, famille, profession, loisir.' },
        prompts: [
          { id: 'g9p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Mein Name ist Lara Hoffmann. Das schreibt man: H-O-F-F-M-A-N-N.', sampleTr: { en: 'My name is Lara Hoffmann. It is spelled: H-O-F-F-M-A-N-N.', fr: 'Je m’appelle Lara Hoffmann. Ça s’écrit : H-O-F-F-M-A-N-N.' }, tip: { en: 'Practise spelling your name with the German letter names.', fr: 'Entraînez-vous à épeler votre nom avec les noms allemands des lettres.' } },
          { id: 'g9p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 29 Jahre alt. Mein Geburtstag ist am 3. Juli.', sampleTr: { en: 'I am 29 years old. My birthday is on 3 July.', fr: 'J’ai 29 ans. Mon anniversaire est le 3 juillet.' } },
          { id: 'g9p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus Syrien, aus Aleppo. Jetzt lebe ich in Deutschland.', sampleTr: { en: 'I come from Syria, from Aleppo. Now I live in Germany.', fr: 'Je viens de Syrie, d’Alep. Maintenant, je vis en Allemagne.' } },
          { id: 'g9p1d', cue: 'Wohnort', cueTr: { en: 'Town', fr: 'Ville' }, sample: 'Ich wohne in Dresden, in der Bergstraße. Die Wohnung ist klein, aber schön.', sampleTr: { en: 'I live in Dresden, in Bergstraße. The flat is small but nice.', fr: 'J’habite à Dresde, dans la Bergstraße. L’appartement est petit, mais joli.' } },
          { id: 'g9p1e', cue: 'Familie', cueTr: { en: 'Family', fr: 'Famille' }, sample: 'Ich bin verheiratet und habe zwei Kinder. Mein Sohn ist vier und meine Tochter ist sieben Jahre alt.', sampleTr: { en: 'I am married and have two children. My son is four and my daughter is seven years old.', fr: 'Je suis mariée et j’ai deux enfants. Mon fils a quatre ans et ma fille a sept ans.' } },
          { id: 'g9p1f', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich bin Krankenschwester. Ich arbeite im Krankenhaus.', sampleTr: { en: 'I am a nurse. I work in the hospital.', fr: 'Je suis infirmière. Je travaille à l’hôpital.' } },
          { id: 'g9p1g', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Mein Hobby ist Fotografieren. Am Wochenende gehe ich mit den Kindern in den Park.', sampleTr: { en: 'My hobby is photography. At the weekend I go to the park with the children.', fr: 'Mon loisir est la photographie. Le week-end, je vais au parc avec les enfants.' } },
        ],
      },
      {
        id: 'goethe-a1-9-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Familie und Kinder. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: family and children. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : famille et enfants. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'g9p2a', cue: 'Geschwister', cueTr: { en: 'Brothers and sisters', fr: 'Frères et sœurs' }, sample: 'Hast du Geschwister? – Ja, ich habe eine Schwester und einen Bruder.', sampleTr: { en: 'Do you have brothers or sisters? – Yes, I have a sister and a brother.', fr: 'As-tu des frères et sœurs ? – Oui, j’ai une sœur et un frère.' }, tip: { en: 'Yes/no questions start with the verb: Hast du …? Bist du …?', fr: 'Les questions fermées commencent par le verbe : Hast du …? Bist du …?' } },
          { id: 'g9p2b', cue: 'Kinder', cueTr: { en: 'Children', fr: 'Enfants' }, sample: 'Hast du Kinder? – Ja, ich habe einen Sohn. Er ist fünf Jahre alt.', sampleTr: { en: 'Do you have children? – Yes, I have a son. He is five years old.', fr: 'As-tu des enfants ? – Oui, j’ai un fils. Il a cinq ans.' } },
          { id: 'g9p2c', cue: 'Eltern', cueTr: { en: 'Parents', fr: 'Parents' }, sample: 'Wo wohnen deine Eltern? – Sie wohnen in Hannover.', sampleTr: { en: 'Where do your parents live? – They live in Hanover.', fr: 'Où habitent tes parents ? – Ils habitent à Hanovre.' } },
          { id: 'g9p2d', cue: 'Großeltern', cueTr: { en: 'Grandparents', fr: 'Grands-parents' }, sample: 'Siehst du deine Großeltern oft? – Nein, sie wohnen weit weg. Ich telefoniere jeden Sonntag mit ihnen.', sampleTr: { en: 'Do you see your grandparents often? – No, they live far away. I phone them every Sunday.', fr: 'Vois-tu souvent tes grands-parents ? – Non, ils habitent loin. Je leur téléphone tous les dimanches.' } },
          { id: 'g9p2e', cue: 'Spielplatz', cueTr: { en: 'Playground', fr: 'Aire de jeux' }, sample: 'Gehst du oft mit den Kindern auf den Spielplatz? – Ja, fast jeden Nachmittag.', sampleTr: { en: 'Do you often go to the playground with the children? – Yes, almost every afternoon.', fr: 'Vas-tu souvent à l’aire de jeux avec les enfants ? – Oui, presque tous les après-midi.' } },
          { id: 'g9p2f', cue: 'Haustier', cueTr: { en: 'Pet', fr: 'Animal de compagnie' }, sample: 'Hast du ein Haustier? – Ja, wir haben einen Hund. Er heißt Rex.', sampleTr: { en: 'Do you have a pet? – Yes, we have a dog. His name is Rex.', fr: 'As-tu un animal de compagnie ? – Oui, nous avons un chien. Il s’appelle Rex.' } },
          { id: 'g9p2g', cue: 'Familienfest', cueTr: { en: 'Family party', fr: 'Fête de famille' }, sample: 'Feiert ihr Familienfeste? – Ja, im Sommer machen wir ein großes Fest.', sampleTr: { en: 'Do you celebrate family parties? – Yes, in summer we have a big party.', fr: 'Faites-vous des fêtes de famille ? – Oui, en été, nous faisons une grande fête.' } },
          { id: 'g9p2h', cue: 'Handy', cueTr: { en: 'Mobile phone', fr: 'Portable' }, sample: 'Telefonierst du oft mit deiner Familie? – Ja, jeden Tag mit meiner Mutter.', sampleTr: { en: 'Do you often phone your family? – Yes, every day with my mother.', fr: 'Téléphones-tu souvent à ta famille ? – Oui, tous les jours à ma mère.' } },
        ],
      },
      {
        id: 'goethe-a1-9-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'g9p3a', cue: 'Bild: ein Handy mit leerem Akku', cueTr: { en: 'Picture: a mobile phone with an empty battery', fr: 'Image : un portable avec la batterie vide' }, sample: 'Kann ich bitte Ihr Ladekabel benutzen? – Ja, natürlich.', sampleTr: { en: 'May I use your charging cable, please? – Yes, of course.', fr: 'Puis-je utiliser votre câble de chargement, s’il vous plaît ? – Oui, bien sûr.' }, tip: { en: 'Polite request: “Kann ich bitte …?” + infinitive at the end.', fr: 'Demande polie : « Kann ich bitte …? » + infinitif à la fin.' } },
          { id: 'g9p3b', cue: 'Bild: das WLAN-Zeichen', cueTr: { en: 'Picture: the Wi-Fi symbol', fr: 'Image : le symbole Wi-Fi' }, sample: 'Wie ist das WLAN-Passwort, bitte? – Das steht auf der Karte.', sampleTr: { en: 'What is the Wi-Fi password, please? – It is on the card.', fr: 'Quel est le mot de passe du Wi-Fi, s’il vous plaît ? – Il est sur la carte.' } },
          { id: 'g9p3c', cue: 'Bild: eine Kamera', cueTr: { en: 'Picture: a camera', fr: 'Image : un appareil photo' }, sample: 'Können Sie bitte ein Foto von uns machen? – Gern. Bitte lächeln!', sampleTr: { en: 'Can you take a photo of us, please? – Gladly. Smile, please!', fr: 'Pouvez-vous nous prendre en photo, s’il vous plaît ? – Avec plaisir. Souriez !' } },
          { id: 'g9p3d', cue: 'Bild: ein Kind im Restaurant', cueTr: { en: 'Picture: a child in a restaurant', fr: 'Image : un enfant au restaurant' }, sample: 'Haben Sie bitte einen Kinderstuhl? – Ja, einen Moment bitte.', sampleTr: { en: 'Do you have a high chair, please? – Yes, one moment please.', fr: 'Avez-vous une chaise haute, s’il vous plaît ? – Oui, un instant, s’il vous plaît.' } },
          { id: 'g9p3e', cue: 'Bild: ein Ball auf dem Spielplatz', cueTr: { en: 'Picture: a ball on the playground', fr: 'Image : un ballon sur l’aire de jeux' }, sample: 'Kannst du mir bitte den Ball geben? – Ja, hier.', sampleTr: { en: 'Can you give me the ball, please? – Yes, here.', fr: 'Peux-tu me donner le ballon, s’il te plaît ? – Oui, voilà.' } },
          { id: 'g9p3f', cue: 'Bild: ein Telefon, schlechte Verbindung', cueTr: { en: 'Picture: a telephone, bad connection', fr: 'Image : un téléphone, mauvaise connexion' }, sample: 'Sprechen Sie bitte langsamer. – Natürlich, kein Problem.', sampleTr: { en: 'Please speak more slowly. – Of course, no problem.', fr: 'Parlez plus lentement, s’il vous plaît. – Bien sûr, pas de problème.' } },
          { id: 'g9p3g', cue: 'Bild: ein Computer im Internet-Café', cueTr: { en: 'Picture: a computer in an internet café', fr: 'Image : un ordinateur dans un cybercafé' }, sample: 'Kann ich bitte eine Stunde den Computer benutzen? – Ja, das kostet zwei Euro.', sampleTr: { en: 'May I use the computer for an hour, please? – Yes, that costs two euros.', fr: 'Puis-je utiliser l’ordinateur pendant une heure, s’il vous plaît ? – Oui, ça coûte deux euros.' } },
        ],
      },
    ],
  },
  {
    id: 'goethe-a1-10',
    board: 'goethe',
    level: 'A1',
    number: 10,
    lesen: [
      {
        id: 'goethe-a1-10-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Ausflug zum Bergsee',
          de: 'Hallo Mia,\n\nam Samstag machen wir einen Ausflug zum Bergsee. Das Wetter soll schön sein: Sonne und 24 Grad. Am Sonntag regnet es. Wir fahren um 8 Uhr mit dem Bus ab Bahnhof. Die Fahrt kostet 6 Euro.\n\nBring bitte Sonnencreme und etwas zu trinken mit. Essen haben wir: Wir grillen am See. Kommst du mit?\n\nViele Grüße\nJonas',
          tr: {
            en: 'Subject: Trip to the mountain lake\n\nHi Mia,\n\nOn Saturday we are going on a trip to the mountain lake. The weather is supposed to be nice: sun and 24 degrees. On Sunday it will rain. We leave at 8 a.m. by bus from the station. The trip costs 6 euros.\n\nPlease bring sun cream and something to drink. We have food: we are having a barbecue by the lake. Are you coming?\n\nBest wishes\nJonas',
            fr: "Objet : Excursion au lac de montagne\n\nSalut Mia,\n\nsamedi, nous faisons une excursion au lac de montagne. Il doit faire beau : du soleil et 24 degrés. Dimanche, il pleut. Nous partons à 8 h en bus depuis la gare. Le trajet coûte 6 euros.\n\nApporte de la crème solaire et quelque chose à boire, s'il te plaît. Pour manger, nous avons ce qu'il faut : nous faisons un barbecue au bord du lac. Tu viens avec nous ?\n\nAmitiés\nJonas",
          },
        }],
        items: [
          { id: 'q1001', q: 'Der Ausflug ist am Sonntag.', qTr: { en: 'The trip is on Sunday.', fr: "L'excursion a lieu dimanche." }, answer: false, explain: { en: 'The trip is on Saturday (“am Samstag”). On Sunday it rains.', fr: "L'excursion a lieu samedi (« am Samstag »). Dimanche, il pleut." } },
          { id: 'q1002', q: 'Am Samstag soll das Wetter schön sein.', qTr: { en: 'The weather is supposed to be nice on Saturday.', fr: 'Il doit faire beau samedi.' }, answer: true, explain: { en: '“Das Wetter soll schön sein: Sonne und 24 Grad.”', fr: '« Das Wetter soll schön sein : Sonne und 24 Grad. »' } },
          { id: 'q1003', q: 'Der Bus fährt um 9 Uhr ab.', qTr: { en: 'The bus leaves at 9 a.m.', fr: 'Le bus part à 9 h.' }, answer: false, explain: { en: 'The bus leaves at 8 a.m. (“um 8 Uhr”).', fr: 'Le bus part à 8 h (« um 8 Uhr »).' } },
          { id: 'q1004', q: 'Mia soll etwas zu trinken mitbringen.', qTr: { en: 'Mia should bring something to drink.', fr: 'Mia doit apporter quelque chose à boire.' }, answer: true, explain: { en: '“Bring bitte Sonnencreme und etwas zu trinken mit.”', fr: '« Bring bitte Sonnencreme und etwas zu trinken mit. »' } },
          { id: 'q1005', q: 'Die Gruppe grillt am See.', qTr: { en: 'The group has a barbecue at the lake.', fr: 'Le groupe fait un barbecue au bord du lac.' }, answer: true, explain: { en: '“Wir grillen am See.”', fr: '« Wir grillen am See. »' } },
        ],
      },
      {
        id: 'goethe-a1-10-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: 'p1', title: 'Anzeigen 1', de: 'Anzeige a\nStadtsparkasse\nKonto eröffnen – jetzt auch am Samstag\n9–13 Uhr\n\nAnzeige b\nReisebüro Sonne\nUrlaub in Spanien und Italien\nMo–Fr 10–18 Uhr', tr: { en: 'Ad a\nCity savings bank\nOpen an account – now also on Saturday\n9 a.m.–1 p.m.\n\nAd b\nSonne travel agency\nHolidays in Spain and Italy\nMon–Fri 10 a.m.–6 p.m.', fr: "Annonce a\nCaisse d'épargne municipale\nOuvrir un compte – maintenant aussi le samedi\n9 h–13 h\n\nAnnonce b\nAgence de voyages Sonne\nVacances en Espagne et en Italie\nLun–ven 10 h–18 h" } },
          { id: 'p2', title: 'Anzeigen 2', de: 'Anzeige a\nSchreibwaren Brandt\nBriefumschläge, Papier und Hefte\nMo–Fr 9–18 Uhr\n\nAnzeige b\nPostfiliale Zentrum\nPakete und Briefe – national und international\nMo–Fr 8–18 Uhr, Sa 8–12 Uhr', tr: { en: 'Ad a\nBrandt stationery\nEnvelopes, paper and exercise books\nMon–Fri 9 a.m.–6 p.m.\n\nAd b\nCentral post office branch\nParcels and letters – domestic and international\nMon–Fri 8 a.m.–6 p.m., Sat 8 a.m.–12 noon', fr: "Annonce a\nPapeterie Brandt\nEnveloppes, papier et cahiers\nLun–ven 9 h–18 h\n\nAnnonce b\nBureau de poste du centre\nColis et lettres – en Allemagne et à l'étranger\nLun–ven 8 h–18 h, sam 8 h–12 h" } },
          { id: 'p3', title: 'Anzeigen 3', de: 'Anzeige a\nStadtbibliothek\nBücher für Kinder und Erwachsene\nKinder: Ausweis kostenlos\n\nAnzeige b\nBuchhandlung Seitenweise\nNeue Bücher\nab 8 Euro', tr: { en: 'Ad a\nCity library\nBooks for children and adults\nChildren: library card free of charge\n\nAd b\nSeitenweise bookshop\nNew books\nfrom 8 euros', fr: 'Annonce a\nBibliothèque municipale\nLivres pour enfants et adultes\nEnfants : carte gratuite\n\nAnnonce b\nLibrairie Seitenweise\nLivres neufs\nà partir de 8 euros' } },
          { id: 'p4', title: 'Anzeigen 4', de: 'Anzeige a\nRadio Nord\nNachrichten und Verkehr\njede halbe Stunde\n\nAnzeige b\nWetterbericht\nSamstag: sonnig, 22 Grad\nSonntag: Regen, 15 Grad', tr: { en: 'Ad a\nRadio Nord\nNews and traffic\nevery half hour\n\nAd b\nWeather forecast\nSaturday: sunny, 22 degrees\nSunday: rain, 15 degrees', fr: 'Annonce a\nRadio Nord\nInfos et circulation\ntoutes les demi-heures\n\nAnnonce b\nPrévisions météo\nSamedi : ensoleillé, 22 degrés\nDimanche : pluie, 15 degrés' } },
          { id: 'p5', title: 'Anzeigen 5', de: 'Anzeige a\nWanderung zum Bergsee\nSamstag, 9 Uhr\nTreffpunkt: Bahnhof\n\nAnzeige b\nRadtour am Fluss\nSonntag, 10 Uhr\nTreffpunkt: Marktplatz', tr: { en: 'Ad a\nHike to the mountain lake\nSaturday, 9 a.m.\nMeeting point: station\n\nAd b\nCycling tour along the river\nSunday, 10 a.m.\nMeeting point: market square', fr: 'Annonce a\nRandonnée au lac de montagne\nSamedi, 9 h\nPoint de rendez-vous : gare\n\nAnnonce b\nSortie à vélo le long de la rivière\nDimanche, 10 h\nPoint de rendez-vous : place du marché' } },
        ],
        items: [
          { id: 'q1006', textId: 'p1', q: 'Sie möchten ein Konto eröffnen. Wo finden Sie die Information?', qTr: { en: 'You want to open a bank account. Where do you find the information?', fr: "Vous voulez ouvrir un compte bancaire. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'Ad a is a bank: “Konto eröffnen”. Ad b is a travel agency.', fr: "L'annonce a est une banque : « Konto eröffnen ». L'annonce b est une agence de voyages." } },
          { id: 'q1007', textId: 'p2', q: 'Sie möchten ein Paket nach Frankreich schicken. Wo finden Sie die Information?', qTr: { en: 'You want to send a parcel to France. Where do you find the information?', fr: "Vous voulez envoyer un colis en France. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b is the post office: parcels, also “international”. Ad a only sells envelopes and paper.', fr: "L'annonce b est la poste : colis, aussi « international ». L'annonce a ne vend que des enveloppes et du papier." } },
          { id: 'q1008', textId: 'p3', q: 'Sie möchten Kinderbücher kostenlos leihen. Wo finden Sie die Information?', qTr: { en: 'You want to borrow children’s books free of charge. Where do you find the information?', fr: "Vous voulez emprunter gratuitement des livres pour enfants. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'Ad a is a library, and the card is free for children. Ad b sells books from 8 euros.', fr: "L'annonce a est une bibliothèque, et la carte est gratuite pour les enfants. L'annonce b vend des livres à partir de 8 euros." } },
          { id: 'q1009', textId: 'p4', q: 'Sie möchten wissen: Wie wird das Wetter am Wochenende? Wo finden Sie die Information?', qTr: { en: 'You want to know what the weather will be like at the weekend. Where do you find the information?', fr: "Vous voulez savoir quel temps il fera ce week-end. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b is the weather forecast (Saturday and Sunday). Ad a is only news and traffic.', fr: "L'annonce b est la météo (samedi et dimanche). L'annonce a ne donne que les infos et la circulation." } },
          { id: 'q1010', textId: 'p5', q: 'Sie möchten am Samstag wandern gehen. Wo finden Sie die Information?', qTr: { en: 'You want to go hiking on Saturday. Where do you find the information?', fr: "Vous voulez faire une randonnée samedi. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'Ad a is a hike (“Wanderung”) on Saturday. Ad b is a cycling tour on Sunday.', fr: "L'annonce a est une randonnée (« Wanderung ») samedi. L'annonce b est une sortie à vélo dimanche." } },
        ],
      },
      {
        id: 'goethe-a1-10-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: 's1', de: 'Stadtbibliothek\nBücher leihen: 4 Wochen\nDanach: 50 Cent pro Woche', tr: { en: 'City library\nBorrow books: 4 weeks\nAfter that: 50 cents per week', fr: 'Bibliothèque municipale\nEmprunt des livres : 4 semaines\nEnsuite : 50 centimes par semaine' } },
          { id: 's2', de: 'Geldautomat\nHeute kaputt.\nBitte gehen Sie zum Schalter.', tr: { en: 'Cash machine\nOut of order today.\nPlease go to the counter.', fr: 'Distributeur de billets\nEn panne aujourd’hui.\nVeuillez vous adresser au guichet.' } },
          { id: 's3', de: 'Post\nBriefmarken: Automat rechts\nPakete: nur Schalter 2', tr: { en: 'Post office\nStamps: machine on the right\nParcels: counter 2 only', fr: 'Poste\nTimbres : distributeur à droite\nColis : guichet 2 uniquement' } },
          { id: 's4', de: 'Kletterwald\nTäglich 10–18 Uhr\nBei Regen geschlossen', tr: { en: 'Climbing forest\nDaily 10 a.m.–6 p.m.\nClosed when it rains', fr: 'Parc d’accrobranche\nTous les jours 10 h–18 h\nFermé en cas de pluie' } },
          { id: 's5', de: 'Wanderparkplatz\nParken: 3 Euro pro Tag\nAutomat links', tr: { en: 'Hikers’ car park\nParking: 3 euros per day\nMachine on the left', fr: 'Parking de randonnée\nStationnement : 3 euros par jour\nDistributeur à gauche' } },
        ],
        items: [
          { id: 'q1011', textId: 's1', q: 'Man kann Bücher vier Wochen leihen.', qTr: { en: 'You can borrow books for four weeks.', fr: 'On peut emprunter les livres pendant quatre semaines.' }, answer: true, explain: { en: '“Bücher leihen: 4 Wochen.”', fr: '« Bücher leihen : 4 Wochen. »' } },
          { id: 'q1012', textId: 's2', q: 'Man kann heute am Automaten Geld holen.', qTr: { en: 'You can get money from the machine today.', fr: 'On peut retirer de l’argent au distributeur aujourd’hui.' }, answer: false, explain: { en: '“Heute kaputt” means the machine is out of order.', fr: '« Heute kaputt » signifie que le distributeur est en panne.' } },
          { id: 'q1013', textId: 's3', q: 'Pakete gibt man an Schalter 2 ab.', qTr: { en: 'You hand in parcels at counter 2.', fr: 'On dépose les colis au guichet 2.' }, answer: true, explain: { en: '“Pakete: nur Schalter 2.”', fr: '« Pakete : nur Schalter 2. »' } },
          { id: 'q1014', textId: 's4', q: 'Bei Regen ist der Kletterwald geöffnet.', qTr: { en: 'The climbing forest is open when it rains.', fr: 'Le parc d’accrobranche est ouvert quand il pleut.' }, answer: false, explain: { en: '“Bei Regen geschlossen” means closed when it rains.', fr: '« Bei Regen geschlossen » signifie fermé en cas de pluie.' } },
          { id: 'q1015', textId: 's5', q: 'Der Parkplatz ist kostenlos.', qTr: { en: 'The car park is free.', fr: 'Le parking est gratuit.' }, answer: false, explain: { en: 'Parking costs 3 euros per day.', fr: 'Le stationnement coûte 3 euros par jour.' } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-10-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten einen Bibliotheksausweis. Ihr Freund hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want a library card. Your friend helps you and reads out your details. Fill in the form.',
          fr: 'Vous voulez une carte de bibliothèque. Votre ami vous aide et lit vos informations. Remplissez le formulaire.',
        },
        source: {
          id: 'info',
          de: 'Mein Name ist Ivan Petrović. Ich bin am 23. August 1985 geboren. Ich wohne in Leipzig, in der Marktstraße 18. Ich möchte Bücher auf Deutsch leihen.',
          tr: {
            en: 'My name is Ivan Petrović. I was born on 23 August 1985. I live in Leipzig, at Marktstraße 18. I would like to borrow books in German.',
            fr: 'Je m’appelle Ivan Petrović. Je suis né le 23 août 1985. J’habite à Leipzig, au 18 Marktstraße. Je voudrais emprunter des livres en allemand.',
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Petrović', 'Petrovic'] },
          { id: 'f2', label: 'Vorname', labelTr: { en: 'First name', fr: 'Prénom' }, accept: ['Ivan'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['23.08.1985', '23.8.1985', '23. August 1985', '23 August 1985'] },
          { id: 'f4', label: 'Straße und Hausnummer', labelTr: { en: 'Street and house number', fr: 'Rue et numéro' }, accept: ['Marktstraße 18', 'Marktstrasse 18', 'Marktstr. 18', 'Marktstr 18'] },
          { id: 'f5', label: 'Wohnort', labelTr: { en: 'Town', fr: 'Ville' }, accept: ['Leipzig'] },
        ],
      },
      {
        id: 'goethe-a1-10-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie möchten bei der Stadtsparkasse ein Konto eröffnen. Schreiben Sie an Frau Keller (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten: Ihr Wunsch – Wann haben Sie Zeit? – Was müssen Sie mitbringen?',
        instructionTr: {
          en: 'You want to open an account at the city savings bank. Write to Mrs Keller (about 30 words). Write about all three points: what you want – when you have time – what you have to bring.',
          fr: 'Vous voulez ouvrir un compte à la caisse d’épargne municipale. Écrivez à Mme Keller (environ 30 mots). Traitez les trois points : votre souhait – quand vous avez le temps – ce que vous devez apporter.',
        },
        points: [
          { id: 'p1', de: 'Wunsch: Konto eröffnen', tr: { en: 'Wish: open an account', fr: 'Souhait : ouvrir un compte' }, keywords: ['konto', 'eröffn'] },
          { id: 'p2', de: 'Wann haben Sie Zeit?', tr: { en: 'When do you have time?', fr: 'Quand avez-vous le temps ?' }, keywords: ['montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'zeit', 'termin', 'vormittag', 'nachmittag'] },
          { id: 'p3', de: 'Was mitbringen?', tr: { en: 'What to bring?', fr: 'Que faut-il apporter ?' }, keywords: ['mitbring', 'papier', 'dokument', 'ausweis', 'brauche'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Sehr geehrte Frau Keller,\n\nich möchte bei Ihrer Bank ein Konto eröffnen. Ich habe am Dienstag nachmittags Zeit. Welche Papiere muss ich mitbringen?\n\nMit freundlichen Grüßen\nIvan Petrović',
          tr: {
            en: 'Dear Mrs Keller,\n\nI would like to open an account at your bank. I have time on Tuesday afternoons. Which documents do I have to bring?\n\nYours sincerely\nIvan Petrović',
            fr: 'Madame Keller,\n\nje voudrais ouvrir un compte dans votre banque. J’ai du temps le mardi après-midi. Quels documents dois-je apporter ?\n\nCordialement\nIvan Petrović',
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-10-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, languages, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, langues, profession, loisir.' },
        prompts: [
          { id: 'g10p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Ich heiße Daniel Okafor. Mein Vorname ist Daniel, mein Familienname ist Okafor.', sampleTr: { en: 'My name is Daniel Okafor. My first name is Daniel, my surname is Okafor.', fr: 'Je m’appelle Daniel Okafor. Mon prénom est Daniel, mon nom de famille est Okafor.' } },
          { id: 'g10p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 41 Jahre alt. Ich habe im Februar Geburtstag.', sampleTr: { en: 'I am 41 years old. My birthday is in February.', fr: 'J’ai 41 ans. Mon anniversaire est en février.' } },
          { id: 'g10p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus Nigeria, aus Lagos.', sampleTr: { en: 'I come from Nigeria, from Lagos.', fr: 'Je viens du Nigeria, de Lagos.' } },
          { id: 'g10p1d', cue: 'Wohnort', cueTr: { en: 'Town', fr: 'Ville' }, sample: 'Ich wohne seit zwei Jahren in Frankfurt. Meine Wohnung ist im dritten Stock.', sampleTr: { en: 'I have lived in Frankfurt for two years. My flat is on the third floor.', fr: 'J’habite à Francfort depuis deux ans. Mon appartement est au troisième étage.' } },
          { id: 'g10p1e', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Englisch, Igbo und ein bisschen Deutsch. Ich lerne jeden Tag Deutsch.', sampleTr: { en: 'I speak English, Igbo and a little German. I learn German every day.', fr: 'Je parle anglais, igbo et un peu allemand. J’apprends l’allemand tous les jours.' } },
          { id: 'g10p1f', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich bin Busfahrer. Ich arbeite von Montag bis Freitag.', sampleTr: { en: 'I am a bus driver. I work from Monday to Friday.', fr: 'Je suis chauffeur de bus. Je travaille du lundi au vendredi.' } },
          { id: 'g10p1g', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Ich wandere gern. Am Sonntag gehe ich oft in den Wald.', sampleTr: { en: 'I like hiking. On Sunday I often go to the forest.', fr: 'J’aime la randonnée. Le dimanche, je vais souvent en forêt.' } },
        ],
      },
      {
        id: 'goethe-a1-10-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Wetter und Ausflug. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: weather and trips. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : météo et excursions. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'g10p2a', cue: 'Wetter', cueTr: { en: 'Weather', fr: 'Météo' }, sample: 'Wie ist das Wetter heute? – Es ist sonnig und warm.', sampleTr: { en: 'What is the weather like today? – It is sunny and warm.', fr: 'Quel temps fait-il aujourd’hui ? – Il fait beau et chaud.' }, tip: { en: 'Ask with “Wie ist …?” for descriptions.', fr: 'Demandez avec « Wie ist …? » pour une description.' } },
          { id: 'g10p2b', cue: 'Jahreszeit', cueTr: { en: 'Season', fr: 'Saison' }, sample: 'Welche Jahreszeit magst du am liebsten? – Ich mag den Herbst. Er ist bunt.', sampleTr: { en: 'Which season do you like best? – I like autumn. It is colourful.', fr: 'Quelle saison préfères-tu ? – J’aime l’automne. Il est coloré.' } },
          { id: 'g10p2c', cue: 'Regen', cueTr: { en: 'Rain', fr: 'Pluie' }, sample: 'Was machst du bei Regen? – Ich bleibe zu Hause und lese ein Buch.', sampleTr: { en: 'What do you do when it rains? – I stay at home and read a book.', fr: 'Que fais-tu quand il pleut ? – Je reste à la maison et je lis un livre.' } },
          { id: 'g10p2d', cue: 'Sommer', cueTr: { en: 'Summer', fr: 'Été' }, sample: 'Wie warm ist es im Sommer bei dir? – Oft 30 Grad.', sampleTr: { en: 'How warm is it in summer where you live? – Often 30 degrees.', fr: 'Quelle température fait-il l’été chez toi ? – Souvent 30 degrés.' } },
          { id: 'g10p2e', cue: 'Winter', cueTr: { en: 'Winter', fr: 'Hiver' }, sample: 'Gibt es bei dir im Winter Schnee? – Ja, im Januar liegt viel Schnee.', sampleTr: { en: 'Is there snow where you live in winter? – Yes, in January there is a lot of snow.', fr: 'Y a-t-il de la neige chez toi en hiver ? – Oui, en janvier, il y a beaucoup de neige.' } },
          { id: 'g10p2f', cue: 'Ausflug', cueTr: { en: 'Trip', fr: 'Excursion' }, sample: 'Wohin machst du am Wochenende einen Ausflug? – Wir fahren zum See.', sampleTr: { en: 'Where are you going on a trip at the weekend? – We are going to the lake.', fr: 'Où fais-tu une excursion ce week-end ? – Nous allons au lac.' } },
          { id: 'g10p2g', cue: 'Urlaub', cueTr: { en: 'Holiday', fr: 'Vacances' }, sample: 'Wann hast du Urlaub? – Im August. Ich fahre ans Meer.', sampleTr: { en: 'When do you have a holiday? – In August. I am going to the seaside.', fr: 'Quand as-tu des vacances ? – En août. Je vais à la mer.' } },
          { id: 'g10p2h', cue: 'Picknick', cueTr: { en: 'Picnic', fr: 'Pique-nique' }, sample: 'Was nimmst du zum Picknick mit? – Brot, Obst und Wasser.', sampleTr: { en: 'What do you take to a picnic? – Bread, fruit and water.', fr: 'Qu’emportes-tu pour un pique-nique ? – Du pain, des fruits et de l’eau.' } },
        ],
      },
      {
        id: 'goethe-a1-10-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'g10p3a', cue: 'Bild: eine Briefmarke', cueTr: { en: 'Picture: a stamp', fr: 'Image : un timbre' }, sample: 'Ich möchte bitte eine Briefmarke für einen Brief nach Frankreich. – Das kostet 1,70 Euro.', sampleTr: { en: 'I would like a stamp for a letter to France, please. – That costs 1.70 euros.', fr: 'Je voudrais un timbre pour une lettre pour la France, s’il vous plaît. – Ça coûte 1,70 euro.' }, tip: { en: '“Ich möchte bitte …” is a polite way to order or ask for something.', fr: '« Ich möchte bitte … » est une façon polie de demander quelque chose.' } },
          { id: 'g10p3b', cue: 'Bild: ein Paket', cueTr: { en: 'Picture: a parcel', fr: 'Image : un colis' }, sample: 'Kann ich bitte dieses Paket nach Spanien schicken? – Ja, füllen Sie bitte dieses Formular aus.', sampleTr: { en: 'Can I send this parcel to Spain, please? – Yes, please fill in this form.', fr: 'Puis-je envoyer ce colis en Espagne, s’il vous plaît ? – Oui, remplissez ce formulaire, s’il vous plaît.' } },
          { id: 'g10p3c', cue: 'Bild: ein Geldautomat', cueTr: { en: 'Picture: a cash machine', fr: 'Image : un distributeur de billets' }, sample: 'Können Sie mir bitte zeigen, wie der Automat funktioniert? – Ja, drücken Sie hier.', sampleTr: { en: 'Can you show me how the machine works, please? – Yes, press here.', fr: 'Pouvez-vous me montrer comment fonctionne le distributeur, s’il vous plaît ? – Oui, appuyez ici.' } },
          { id: 'g10p3d', cue: 'Bild: ein Zwanzig-Euro-Schein', cueTr: { en: 'Picture: a twenty-euro note', fr: 'Image : un billet de vingt euros' }, sample: 'Können Sie mir bitte 20 Euro wechseln? – Ja, gern. Hier sind zwei Zehner.', sampleTr: { en: 'Can you change 20 euros for me, please? – Yes, gladly. Here are two tens.', fr: 'Pouvez-vous me faire la monnaie de 20 euros, s’il vous plaît ? – Oui, volontiers. Voici deux billets de dix.' } },
          { id: 'g10p3e', cue: 'Bild: ein Buch in der Bibliothek', cueTr: { en: 'Picture: a book in the library', fr: 'Image : un livre à la bibliothèque' }, sample: 'Kann ich das Buch bitte noch zwei Wochen behalten? – Ja, bis zum 15. Mai.', sampleTr: { en: 'Can I keep the book for two more weeks, please? – Yes, until 15 May.', fr: 'Puis-je garder le livre deux semaines de plus, s’il vous plaît ? – Oui, jusqu’au 15 mai.' } },
          { id: 'g10p3f', cue: 'Bild: ein Regenschirm', cueTr: { en: 'Picture: an umbrella', fr: 'Image : un parapluie' }, sample: 'Kann ich bitte Ihren Regenschirm leihen? – Ja, gern. Bringen Sie ihn morgen zurück.', sampleTr: { en: 'May I borrow your umbrella, please? – Yes, gladly. Bring it back tomorrow.', fr: 'Puis-je emprunter votre parapluie, s’il vous plaît ? – Oui, volontiers. Rapportez-le demain.' } },
          { id: 'g10p3g', cue: 'Bild: eine Wanderkarte', cueTr: { en: 'Picture: a hiking map', fr: 'Image : une carte de randonnée' }, sample: 'Können Sie mir bitte den Weg zum Bergsee zeigen? – Ja, gehen Sie hier geradeaus.', sampleTr: { en: 'Can you show me the way to the mountain lake, please? – Yes, go straight ahead here.', fr: 'Pouvez-vous me montrer le chemin du lac de montagne, s’il vous plaît ? – Oui, allez tout droit ici.' } },
        ],
      },
    ],
  },
];

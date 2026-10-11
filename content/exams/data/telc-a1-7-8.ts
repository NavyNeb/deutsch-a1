import type { ExamSetInput } from '../types';

const tr = (en: string, fr: string) => ({ en, fr });

// Original practice material modelled on the telc Deutsch A1 format. Not an official paper.
export const TELC_A1_7_8: ExamSetInput[] = [
  // ───────────────────────── Set 7: Sport, Fitness, Nebenjob ─────────────────────────
  {
    id: 'telc-a1-7',
    board: 'telc',
    level: 'A1',
    number: 7,
    lesen: [
      { id: 'telc-a1-7-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Betreff: Joggen\n\nHallo Kai,\nich gehe heute Abend joggen, im Stadtpark. Kommst du mit? Wir laufen um 19 Uhr los.\nBis später\nTim', tr: tr('Subject: Jogging\n\nHi Kai,\nI am going jogging in the city park this evening. Are you coming? We set off at 7 p.m.\nSee you later\nTim', 'Objet : Jogging\n\nSalut Kai,\nje vais courir ce soir au parc municipal. Tu viens ? On part à 19 h.\nÀ tout à l’heure\nTim') },
          { id: 'm2', de: 'Liebe Frau Brandt,\nIhr Yogakurs beginnt am 4. März, nicht am 11. März. Bitte bringen Sie eine Matte mit.\nViele Grüße\nSportstudio Fit & Fun', tr: tr('Dear Mrs Brandt,\nyour yoga course starts on 4 March, not on 11 March. Please bring a mat.\nBest wishes\nFit & Fun sports studio', 'Chère Madame Brandt,\nvotre cours de yoga commence le 4 mars, et non le 11 mars. Veuillez apporter un tapis.\nCordialement\nStudio de sport Fit & Fun') },
          { id: 'm3', de: 'Hallo Nora,\nich habe einen Nebenjob! Ich arbeite jetzt samstags in einer Bäckerei, von 6 bis 12 Uhr. Das ist früh, aber ich verdiene 11 Euro pro Stunde.\nLiebe Grüße\nDavid', tr: tr('Hi Nora,\nI have a part-time job! I now work on Saturdays in a bakery, from 6 a.m. to 12 noon. That is early, but I earn 11 euros an hour.\nBest wishes\nDavid', 'Salut Nora,\nj’ai un petit boulot ! Je travaille maintenant le samedi dans une boulangerie, de 6 h à 12 h. C’est tôt, mais je gagne 11 euros de l’heure.\nAmitiés\nDavid') },
          { id: 'm4', de: 'Sehr geehrter Herr Yilmaz,\nvielen Dank für Ihre Bewerbung. Bitte kommen Sie am Mittwoch um 15 Uhr in unser Café Lindenhof. Bringen Sie Ihren Lebenslauf mit.\nMit freundlichen Grüßen\nAnna Pohl', tr: tr('Dear Mr Yilmaz,\nthank you very much for your application. Please come to our Café Lindenhof on Wednesday at 3 p.m. Bring your CV.\nYours sincerely\nAnna Pohl', 'Cher Monsieur Yilmaz,\nmerci beaucoup pour votre candidature. Venez mercredi à 15 h dans notre Café Lindenhof. Apportez votre CV.\nCordialement\nAnna Pohl') },
          { id: 'm5', de: 'Lieber Paul,\nam Sonntag ist der Fußballplatz gesperrt. Das Spiel ist deshalb schon am Samstag um 14 Uhr. Bitte sag es auch Jonas.\nMarkus', tr: tr('Dear Paul,\nthe football pitch is closed on Sunday. The match is therefore already on Saturday at 2 p.m. Please tell Jonas too.\nMarkus', 'Cher Paul,\ndimanche, le terrain de football est fermé. Le match a donc lieu dès samedi à 14 h. Dis-le aussi à Jonas, s’il te plaît.\nMarkus') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Tim möchte am Morgen joggen.', qTr: tr('Tim wants to jog in the morning.', 'Tim veut courir le matin.'), answer: false, explain: tr('He goes jogging "heute Abend" (this evening), at 19 Uhr.', 'Il court « heute Abend » (ce soir), à 19 h.') },
          { id: 'q2', textId: 'm2', q: 'Der Yogakurs beginnt am 4. März.', qTr: tr('The yoga course starts on 4 March.', 'Le cours de yoga commence le 4 mars.'), answer: true, explain: tr('"Ihr Yogakurs beginnt am 4. März, nicht am 11. März."', '« Ihr Yogakurs beginnt am 4. März, nicht am 11. März. »') },
          { id: 'q3', textId: 'm3', q: 'David arbeitet samstags am Nachmittag.', qTr: tr('David works on Saturday afternoons.', 'David travaille le samedi après-midi.'), answer: false, explain: tr('He works from 6 to 12 Uhr, so in the morning.', 'Il travaille de 6 h à 12 h, donc le matin.') },
          { id: 'q4', textId: 'm4', q: 'Herr Yilmaz soll seinen Lebenslauf mitbringen.', qTr: tr('Mr Yilmaz should bring his CV.', 'Monsieur Yilmaz doit apporter son CV.'), answer: true, explain: tr('"Bringen Sie Ihren Lebenslauf mit."', '« Bringen Sie Ihren Lebenslauf mit. »') },
          { id: 'q5', textId: 'm5', q: 'Paul soll mit Jonas sprechen.', qTr: tr('Paul should talk to Jonas.', 'Paul doit parler à Jonas.'), answer: true, explain: tr('"Bitte sag es auch Jonas." (tell Jonas too)', '« Bitte sag es auch Jonas. » (dis-le aussi à Jonas)') },
        ] },
      { id: 'telc-a1-7-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l’annonce a ou l’annonce b.'), texts: [
          { id: 'a1', de: 'a) Fitnessstudio Power\nMo–Fr 6–22 Uhr\nGeräte, Sauna\n29 Euro im Monat\n\nb) Sportverein TSV Nord\nFußball, Volleyball, Tischtennis\nMitglied: 10 Euro im Monat', tr: tr('a) Power gym\nMon–Fri 6 a.m.–10 p.m.\nMachines, sauna\n29 euros a month\n\nb) TSV Nord sports club\nFootball, volleyball, table tennis\nMembership: 10 euros a month', 'a) Salle de sport Power\nLun–ven 6 h–22 h\nAppareils, sauna\n29 euros par mois\n\nb) Club de sport TSV Nord\nFootball, volley-ball, tennis de table\nAdhésion : 10 euros par mois') },
          { id: 'a2', de: 'a) Kellner/in gesucht\nRestaurant Rose\nMi–So, 18–23 Uhr\n11 Euro pro Stunde\n\nb) Aushilfe im Supermarkt\nMo–Fr, 8–12 Uhr\n10 Euro pro Stunde', tr: tr('a) Waiter/waitress wanted\nRose restaurant\nWed–Sun, 6–11 p.m.\n11 euros an hour\n\nb) Temporary help in a supermarket\nMon–Fri, 8 a.m.–12 noon\n10 euros an hour', 'a) Serveur/serveuse recherché(e)\nRestaurant Rose\nMer–dim, 18 h–23 h\n11 euros de l’heure\n\nb) Aide temporaire au supermarché\nLun–ven, 8 h–12 h\n10 euros de l’heure') },
          { id: 'a3', de: 'a) Schwimmkurs für Kinder\nSamstag 10–11 Uhr\nHallenbad Süd\n\nb) Schwimmkurs für Erwachsene\nDi und Do 19–20 Uhr\nHallenbad Süd', tr: tr('a) Swimming course for children\nSaturday 10–11 a.m.\nSouth indoor pool\n\nb) Swimming course for adults\nTue and Thu 7–8 p.m.\nSouth indoor pool', 'a) Cours de natation pour enfants\nSamedi 10 h–11 h\nPiscine couverte Sud\n\nb) Cours de natation pour adultes\nMar et jeu 19 h–20 h\nPiscine couverte Sud') },
          { id: 'a4', de: 'a) Fahrradverleih am Fluss\nFahrrad 10 Euro pro Tag\nHelm gratis\n\nb) Skateshop City\nSkateboards ab 60 Euro\nHelme und Schutz', tr: tr('a) Bicycle hire by the river\nBicycle 10 euros a day\nHelmet free\n\nb) City skate shop\nSkateboards from 60 euros\nHelmets and protective gear', 'a) Location de vélos au bord de la rivière\nVélo 10 euros par jour\nCasque gratuit\n\nb) Skate shop City\nSkateboards à partir de 60 euros\nCasques et protections') },
          { id: 'a5', de: 'a) Laufgruppe im Stadtpark\njeden Mittwoch um 18 Uhr\nkostenlos, alle willkommen\n\nb) Marathon-Kurs\n8 Wochen, Sa 9 Uhr\n60 Euro', tr: tr('a) Running group in the city park\nevery Wednesday at 6 p.m.\nfree, everyone welcome\n\nb) Marathon course\n8 weeks, Sat 9 a.m.\n60 euros', 'a) Groupe de course au parc municipal\ntous les mercredis à 18 h\ngratuit, tout le monde est bienvenu\n\nb) Cours de marathon\n8 semaines, sam 9 h\n60 euros') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Sie möchten Volleyball spielen und wenig Geld bezahlen.', qTr: tr('You want to play volleyball and pay little money.', 'Vous voulez jouer au volley-ball et payer peu d’argent.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('The TSV Nord club offers volleyball for 10 euros a month; the gym has no volleyball and costs 29.', 'Le club TSV Nord propose du volley-ball pour 10 euros par mois ; la salle de sport n’en propose pas et coûte 29 euros.') },
          { id: 'q7', textId: 'a2', q: 'Sie suchen einen Nebenjob. Sie haben nur am Abend Zeit.', qTr: tr('You are looking for a part-time job. You only have time in the evening.', 'Vous cherchez un petit boulot. Vous n’avez du temps que le soir.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The restaurant job is 18–23 Uhr (evening); the supermarket job is 8–12 Uhr (morning).', 'Le travail au restaurant a lieu de 18 h à 23 h (soir) ; celui du supermarché de 8 h à 12 h (matin).') },
          { id: 'q8', textId: 'a3', q: 'Ihre Tochter (7 Jahre) möchte schwimmen lernen.', qTr: tr('Your daughter (7 years old) wants to learn to swim.', 'Votre fille (7 ans) veut apprendre à nager.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('Ad a is a swimming course "für Kinder"; ad b is for adults.', 'L’annonce a est un cours de natation « für Kinder » ; l’annonce b est pour les adultes.') },
          { id: 'q9', textId: 'a4', q: 'Sie möchten ein Skateboard kaufen.', qTr: tr('You want to buy a skateboard.', 'Vous voulez acheter un skateboard.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('The skate shop sells skateboards from 60 euros; ad a only hires out bicycles.', 'Le skate shop vend des skateboards à partir de 60 euros ; l’annonce a loue seulement des vélos.') },
          { id: 'q10', textId: 'a5', q: 'Sie möchten mit anderen Leuten laufen und nichts bezahlen.', qTr: tr('You want to run with other people and pay nothing.', 'Vous voulez courir avec d’autres personnes et ne rien payer.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The running group is "kostenlos" (free); the marathon course costs 60 euros.', 'Le groupe de course est « kostenlos » (gratuit) ; le cours de marathon coûte 60 euros.') },
        ] },
      { id: 'telc-a1-7-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Schwimmhalle\nBitte vor dem Schwimmen duschen!', tr: tr('Swimming pool\nPlease shower before swimming!', 'Piscine\nVeuillez vous doucher avant de nager !') },
          { id: 's2', de: 'Fitnessstudio Power\nTraining nur mit Handtuch!', tr: tr('Power gym\nTraining only with a towel!', 'Salle de sport Power\nEntraînement uniquement avec une serviette !') },
          { id: 's3', de: 'Sporthalle\nBitte nur saubere Turnschuhe tragen!', tr: tr('Sports hall\nPlease wear only clean trainers!', 'Gymnase\nVeuillez porter uniquement des baskets propres !') },
          { id: 's4', de: 'Mitarbeiter gesucht!\nSupermarkt Frisch\nSamstag 8–14 Uhr\nBewerbung im Büro', tr: tr('Staff wanted!\nFrisch supermarket\nSaturday 8 a.m.–2 p.m.\nApply at the office', 'Employés recherchés !\nSupermarché Frisch\nSamedi 8 h–14 h\nCandidature au bureau') },
          { id: 's5', de: 'Tennisplatz 2\nBis 15 Uhr gesperrt!\nBitte Platz 3 benutzen.', tr: tr('Tennis court 2\nClosed until 3 p.m.!\nPlease use court 3.', 'Court de tennis 2\nFermé jusqu’à 15 h !\nVeuillez utiliser le court 3.') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Man soll vor dem Schwimmen duschen.', qTr: tr('You should shower before swimming.', 'Il faut se doucher avant de nager.'), answer: true, explain: tr('"Bitte vor dem Schwimmen duschen!"', '« Bitte vor dem Schwimmen duschen ! »') },
          { id: 'q12', textId: 's2', q: 'Man kann ohne Handtuch trainieren.', qTr: tr('You can train without a towel.', 'On peut s’entraîner sans serviette.'), answer: false, explain: tr('"Training nur mit Handtuch" means a towel is required.', '« Training nur mit Handtuch » signifie qu’une serviette est obligatoire.') },
          { id: 'q13', textId: 's3', q: 'In der Sporthalle braucht man saubere Turnschuhe.', qTr: tr('In the sports hall you need clean trainers.', 'Dans le gymnase, il faut des baskets propres.'), answer: true, explain: tr('"Bitte nur saubere Turnschuhe tragen!"', '« Bitte nur saubere Turnschuhe tragen ! »') },
          { id: 'q14', textId: 's4', q: 'Der Supermarkt sucht Mitarbeiter für Sonntag.', qTr: tr('The supermarket is looking for staff for Sunday.', 'Le supermarché cherche des employés pour le dimanche.'), answer: false, explain: tr('The job is on Saturday (8–14 Uhr), not Sunday.', 'Le travail est le samedi (8 h–14 h), pas le dimanche.') },
          { id: 'q15', textId: 's5', q: 'Man kann jetzt auf Platz 2 spielen.', qTr: tr('You can play on court 2 now.', 'On peut jouer sur le court 2 maintenant.'), answer: false, explain: tr('Court 2 is "gesperrt" (closed) until 15 Uhr; use court 3.', 'Le court 2 est « gesperrt » (fermé) jusqu’à 15 h ; utilisez le court 3.') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-7-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten einen Nebenjob in einer Eisdiele. Ihre Freundin liest Ihre Daten vor. Füllen Sie das Bewerbungsformular aus.',
        instructionTr: tr(
          'You want a part-time job in an ice-cream parlour. Your friend reads out your details. Fill in the application form.',
          'Vous voulez un petit boulot dans un glacier. Votre amie lit vos informations. Remplissez le formulaire de candidature.',
        ),
        source: {
          id: 'info',
          de: 'Ich heiße Karim Benali. Ich bin 19 Jahre alt. Meine E-Mail-Adresse ist karim.benali@mail.de. Ich kann am Wochenende arbeiten.',
          tr: tr(
            'My name is Karim Benali. I am 19 years old. My e-mail address is karim.benali@mail.de. I can work at the weekend.',
            'Je m’appelle Karim Benali. J’ai 19 ans. Mon adresse e-mail est karim.benali@mail.de. Je peux travailler le week-end.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Benali'] },
          { id: 'f2', label: 'Vorname', labelTr: tr('First name', 'Prénom'), accept: ['Karim'] },
          { id: 'f3', label: 'Alter', labelTr: tr('Age', 'Âge'), accept: ['19', '19 Jahre', '19 Jahre alt', 'neunzehn'] },
          { id: 'f4', label: 'E-Mail', labelTr: tr('E-mail', 'E-mail'), accept: ['karim.benali@mail.de'] },
          { id: 'f5', label: 'Ich kann arbeiten:', labelTr: tr('I can work:', 'Je peux travailler :'), accept: ['am Wochenende', 'Wochenende', 'Samstag und Sonntag', 'Sa und So', 'Samstag, Sonntag'] },
        ],
      },
      {
        id: 'telc-a1-7-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Ihre Freundin Julia schreibt: „Hallo! Spielen wir am Samstag um 10 Uhr Tennis? Julia“. Schreiben Sie ihr eine Nachricht (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'Your friend Julia writes: “Hi! Shall we play tennis on Saturday at 10 a.m.? Julia”. Write her a message (about 30 words). Write about all three points.',
          'Votre amie Julia écrit : « Salut ! On joue au tennis samedi à 10 h ? Julia ». Écrivez-lui un message (environ 30 mots). Traitez les trois points.',
        ),
        source: {
          id: 'src',
          de: 'Hallo!\nSpielen wir am Samstag um 10 Uhr Tennis?\nJulia',
          tr: tr('Hi!\nShall we play tennis on Saturday at 10 a.m.?\nJulia', 'Salut !\nOn joue au tennis samedi à 10 h ?\nJulia'),
        },
        points: [
          { id: 'p1', de: 'Absage mit Grund (Nebenjob)', tr: tr('Say no and give a reason (part-time job)', 'Refuser en donnant la raison (petit boulot)'), keywords: ['leider', 'kann nicht', 'arbeite', 'nebenjob'] },
          { id: 'p2', de: 'Vorschlag: Sonntag', tr: tr('Suggestion: Sunday', 'Proposition : dimanche'), keywords: ['sonntag', 'vorschlag', 'vielleicht'] },
          { id: 'p3', de: 'Frage: Uhrzeit', tr: tr('Question: time', 'Question : heure'), keywords: ['uhr', 'wann', 'um wie viel'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Liebe Julia,\n\nvielen Dank für die Nachricht. Leider kann ich am Samstag nicht Tennis spielen, denn ich arbeite in meinem Nebenjob. Geht es am Sonntag? Um wie viel Uhr treffen wir uns?\n\nLiebe Grüße\nSara',
          tr: tr(
            'Dear Julia,\n\nThank you for your message. Unfortunately I cannot play tennis on Saturday because I am working in my part-time job. Does Sunday work? What time shall we meet?\n\nBest wishes\nSara',
            'Chère Julia,\n\nmerci pour ton message. Malheureusement, je ne peux pas jouer au tennis samedi, car je travaille dans mon petit boulot. Est-ce que dimanche te convient ? À quelle heure se retrouve-t-on ?\n\nGrosses bises\nSara',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-7-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Alter, Land, Wohnort, Beruf, Hobby.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, age, country, town, job, hobby.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, âge, pays, ville, profession, loisir.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Mein Name ist Ahmed Hassan. Hassan schreibt man H-A-S-S-A-N.', sampleTr: tr('My name is Ahmed Hassan. Hassan is spelled H-A-S-S-A-N.', 'Je m’appelle Ahmed Hassan. Hassan s’écrit H-A-S-S-A-N.') },
          { id: 'p1b', cue: 'Alter', cueTr: tr('Age', 'Âge'), sample: 'Ich bin 27 Jahre alt. Mein Geburtstag ist im Oktober.', sampleTr: tr('I am 27 years old. My birthday is in October.', 'J’ai 27 ans. Mon anniversaire est en octobre.') },
          { id: 'p1c', cue: 'Land', cueTr: tr('Country', 'Pays'), sample: 'Ich komme aus Ägypten, aus Kairo.', sampleTr: tr('I come from Egypt, from Cairo.', 'Je viens d’Égypte, du Caire.') },
          { id: 'p1d', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Ich wohne in Dortmund, in der Hansastraße 8.', sampleTr: tr('I live in Dortmund, at Hansastraße 8.', 'J’habite à Dortmund, au 8 Hansastraße.') },
          { id: 'p1e', cue: 'Beruf', cueTr: tr('Job', 'Profession'), sample: 'Ich arbeite als Mechaniker in einer Autowerkstatt.', sampleTr: tr('I work as a mechanic in a car workshop.', 'Je travaille comme mécanicien dans un garage.') },
          { id: 'p1f', cue: 'Hobby', cueTr: tr('Hobby', 'Loisir'), sample: 'Mein Hobby ist Fußball. Ich spiele jeden Samstag mit Freunden.', sampleTr: tr('My hobby is football. I play with friends every Saturday.', 'Mon loisir, c’est le football. Je joue avec des amis tous les samedis.') },
        ],
      },
      {
        id: 'telc-a1-7-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Sport und Arbeit. Sie ziehen eine Wortkarte. Stellen Sie Ihrem Partner eine Frage. Er antwortet. Dann tauschen Sie.',
        instructionTr: tr('Topic: sport and work. You draw a word card. Ask your partner a question. They answer. Then you swap.', 'Thème : sport et travail. Vous tirez une carte-mot. Posez une question à votre partenaire. Il répond. Puis vous échangez.'),
        prompts: [
          { id: 'p2a', cue: 'Fußball', cueTr: tr('Football', 'Football'), sample: 'Spielst du gern Fußball? – Ja, jeden Samstag im Park.', sampleTr: tr('Do you like playing football? – Yes, every Saturday in the park.', 'Aimes-tu jouer au football ? – Oui, tous les samedis dans le parc.'), tip: tr('Yes/no questions start with the verb.', 'Les questions fermées commencent par le verbe.') },
          { id: 'p2b', cue: 'Fitnessstudio', cueTr: tr('Gym', 'Salle de sport'), sample: 'Gehst du ins Fitnessstudio? – Nein, ich laufe lieber draußen.', sampleTr: tr('Do you go to the gym? – No, I prefer running outside.', 'Vas-tu à la salle de sport ? – Non, je préfère courir dehors.') },
          { id: 'p2c', cue: 'Fahrrad', cueTr: tr('Bicycle', 'Vélo'), sample: 'Fährst du oft Fahrrad? – Ja, ich fahre jeden Tag zur Arbeit.', sampleTr: tr('Do you often ride a bike? – Yes, I ride to work every day.', 'Fais-tu souvent du vélo ? – Oui, je vais au travail à vélo tous les jours.') },
          { id: 'p2d', cue: 'Nebenjob', cueTr: tr('Part-time job', 'Petit boulot'), sample: 'Hast du einen Nebenjob? – Ja, ich arbeite am Wochenende in einem Restaurant.', sampleTr: tr('Do you have a part-time job? – Yes, I work in a restaurant at the weekend.', 'As-tu un petit boulot ? – Oui, je travaille le week-end dans un restaurant.') },
          { id: 'p2e', cue: 'Arbeit', cueTr: tr('Work', 'Travail'), sample: 'Wann beginnt deine Arbeit? – Um acht Uhr.', sampleTr: tr('When does your work start? – At eight o’clock.', 'Quand commence ton travail ? – À huit heures.'), tip: tr('"Wann?" asks about time.', '« Wann ? » interroge sur l’heure.') },
          { id: 'p2f', cue: 'Geld', cueTr: tr('Money', 'Argent'), sample: 'Wie viel verdienst du pro Stunde? – Ich verdiene 12 Euro.', sampleTr: tr('How much do you earn per hour? – I earn 12 euros.', 'Combien gagnes-tu de l’heure ? – Je gagne 12 euros.') },
          { id: 'p2g', cue: 'Gesundheit', cueTr: tr('Health', 'Santé'), sample: 'Was machst du für deine Gesundheit? – Ich esse viel Obst und schlafe acht Stunden.', sampleTr: tr('What do you do for your health? – I eat a lot of fruit and sleep eight hours.', 'Que fais-tu pour ta santé ? – Je mange beaucoup de fruits et je dors huit heures.') },
        ],
      },
      {
        id: 'telc-a1-7-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. Your partner reacts.', 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: eine schwere Sporttasche', cueTr: tr('Picture: a heavy sports bag', 'Image : un sac de sport lourd'), sample: 'Können Sie mir bitte helfen? Die Tasche ist schwer. – Ja, gern.', sampleTr: tr('Can you help me, please? The bag is heavy. – Yes, gladly.', 'Pouvez-vous m’aider, s’il vous plaît ? Le sac est lourd. – Oui, avec plaisir.'), tip: tr('"Können Sie bitte …?" is a polite request.', '« Können Sie bitte …? » est une demande polie.') },
          { id: 'p3b', cue: 'Bild: ein Fenster im Fitnessraum, es ist heiß', cueTr: tr('Picture: a window in the gym, it is hot', 'Image : une fenêtre dans la salle de sport, il fait chaud'), sample: 'Können wir bitte das Fenster öffnen? Es ist sehr warm. – Ja, kein Problem.', sampleTr: tr('Can we open the window, please? It is very warm. – Yes, no problem.', 'Pouvons-nous ouvrir la fenêtre, s’il vous plaît ? Il fait très chaud. – Oui, pas de problème.') },
          { id: 'p3c', cue: 'Bild: ein Chef und ein Kalender', cueTr: tr('Picture: a boss and a calendar', 'Image : un chef et un calendrier'), sample: 'Ich habe am Freitag einen Arzttermin. Kann ich bitte frei haben? – Ja, das geht.', sampleTr: tr('I have a doctor’s appointment on Friday. Can I have the day off, please? – Yes, that is fine.', 'J’ai un rendez-vous chez le médecin vendredi. Puis-je avoir congé, s’il vous plaît ? – Oui, c’est possible.') },
          { id: 'p3d', cue: 'Bild: ein Ball auf dem Boden', cueTr: tr('Picture: a ball on the floor', 'Image : un ballon par terre'), sample: 'Können Sie mir bitte den Ball geben? – Natürlich, hier bitte.', sampleTr: tr('Can you give me the ball, please? – Of course, here you are.', 'Pouvez-vous me donner le ballon, s’il vous plaît ? – Bien sûr, voilà.') },
          { id: 'p3e', cue: 'Bild: eine leere Wasserflasche', cueTr: tr('Picture: an empty water bottle', 'Image : une bouteille d’eau vide'), sample: 'Haben Sie bitte Wasser? Ich habe Durst. – Ja, hier an der Kasse.', sampleTr: tr('Do you have water, please? I am thirsty. – Yes, here at the till.', 'Avez-vous de l’eau, s’il vous plaît ? J’ai soif. – Oui, ici à la caisse.') },
          { id: 'p3f', cue: 'Bild: eine Uhr', cueTr: tr('Picture: a clock', 'Image : une horloge'), sample: 'Entschuldigung, wie spät ist es? – Es ist Viertel nach drei.', sampleTr: tr('Excuse me, what time is it? – It is a quarter past three.', 'Excusez-moi, quelle heure est-il ? – Il est trois heures et quart.') },
          { id: 'p3g', cue: 'Bild: ein Trainer zeigt eine Übung', cueTr: tr('Picture: a trainer shows an exercise', 'Image : un entraîneur montre un exercice'), sample: 'Können Sie das bitte noch einmal erklären? – Ja, gern. Schauen Sie hier.', sampleTr: tr('Can you explain that once more, please? – Yes, gladly. Look here.', 'Pouvez-vous réexpliquer cela, s’il vous plaît ? – Oui, avec plaisir. Regardez ici.') },
        ],
      },
    ],
  },

  // ───────────────────────── Set 8: Wohnungssuche, Bus und Bahn ─────────────────────────
  {
    id: 'telc-a1-8',
    board: 'telc',
    level: 'A1',
    number: 8,
    lesen: [
      { id: 'telc-a1-8-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Betreff: Wohnung in der Gartenstraße\n\nSehr geehrte Frau Meier,\nich interessiere mich für Ihre Wohnung. Kann ich sie am Donnerstag um 17 Uhr besichtigen?\nMit freundlichen Grüßen\nOmar Haddad', tr: tr('Subject: Flat in Gartenstraße\n\nDear Mrs Meier,\nI am interested in your flat. Can I view it on Thursday at 5 p.m.?\nYours sincerely\nOmar Haddad', 'Objet : Appartement Gartenstraße\n\nChère Madame Meier,\nje suis intéressé par votre appartement. Puis-je le visiter jeudi à 17 h ?\nCordialement\nOmar Haddad') },
          { id: 'm2', de: 'Hallo Lena,\nich habe eine neue Wohnung! Sie hat zwei Zimmer und einen Balkon. Die Miete ist 520 Euro. Am Samstag ziehe ich um. Hast du Zeit?\nBen', tr: tr('Hi Lena,\nI have a new flat! It has two rooms and a balcony. The rent is 520 euros. I am moving on Saturday. Do you have time?\nBen', 'Salut Lena,\nj’ai un nouvel appartement ! Il a deux pièces et un balcon. Le loyer est de 520 euros. Je déménage samedi. As-tu le temps ?\nBen') },
          { id: 'm3', de: 'Sehr geehrter Herr Koch,\ndie Heizung in unserer Wohnung ist kaputt. Es ist sehr kalt. Können Sie bitte schnell einen Handwerker schicken?\nFamilie Demir', tr: tr('Dear Mr Koch,\nthe heating in our flat is broken. It is very cold. Could you please send a tradesman quickly?\nThe Demir family', 'Cher Monsieur Koch,\nle chauffage de notre appartement est en panne. Il fait très froid. Pouvez-vous envoyer rapidement un artisan, s’il vous plaît ?\nLa famille Demir') },
          { id: 'm4', de: 'Hallo Tom,\nich komme morgen mit der U-Bahn zu dir. Die U2 fährt bis zum Marktplatz. Dann gehe ich zu Fuß. Ich bin um 10 Uhr da.\nSven', tr: tr('Hi Tom,\nI am coming to your place by underground tomorrow. The U2 goes to the market square. Then I walk. I will be there at 10 a.m.\nSven', 'Salut Tom,\nje viens chez toi demain en métro. Le U2 va jusqu’à la place du marché. Ensuite, je marche. Je serai là à 10 h.\nSven') },
          { id: 'm5', de: 'Liebe Eltern,\nich nehme heute den Bus um 7.15 Uhr zur Schule. Die Fahrkarte kostet 2,50 Euro. Ich habe schon Geld.\nEure Mia', tr: tr('Dear Mum and Dad,\ntoday I am taking the 7.15 a.m. bus to school. The ticket costs 2.50 euros. I already have money.\nYour Mia', 'Chers parents,\naujourd’hui, je prends le bus de 7 h 15 pour aller à l’école. Le billet coûte 2,50 euros. J’ai déjà de l’argent.\nVotre Mia') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Herr Haddad möchte die Wohnung am Donnerstag sehen.', qTr: tr('Mr Haddad would like to see the flat on Thursday.', 'Monsieur Haddad aimerait voir l’appartement jeudi.'), answer: true, explain: tr('"Besichtigen" means to view; he asks for Thursday at 17 Uhr.', '« Besichtigen » signifie visiter ; il demande jeudi à 17 h.') },
          { id: 'q2', textId: 'm2', q: 'Bens Wohnung hat drei Zimmer.', qTr: tr('Ben’s flat has three rooms.', 'L’appartement de Ben a trois pièces.'), answer: false, explain: tr('"Sie hat zwei Zimmer und einen Balkon."', '« Sie hat zwei Zimmer und einen Balkon. »') },
          { id: 'q3', textId: 'm3', q: 'Die Heizung funktioniert nicht.', qTr: tr('The heating does not work.', 'Le chauffage ne fonctionne pas.'), answer: true, explain: tr('"Die Heizung ist kaputt" = it is broken.', '« Die Heizung ist kaputt » = elle est en panne.') },
          { id: 'q4', textId: 'm4', q: 'Sven fährt mit dem Bus.', qTr: tr('Sven is travelling by bus.', 'Sven voyage en bus.'), answer: false, explain: tr('He takes the underground ("mit der U-Bahn"), then walks.', 'Il prend le métro (« mit der U-Bahn »), puis il marche.') },
          { id: 'q5', textId: 'm5', q: 'Mia fährt mit dem Bus zur Schule.', qTr: tr('Mia goes to school by bus.', 'Mia va à l’école en bus.'), answer: true, explain: tr('"Ich nehme heute den Bus um 7.15 Uhr zur Schule."', '« Ich nehme heute den Bus um 7.15 Uhr zur Schule. »') },
        ] },
      { id: 'telc-a1-8-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l’annonce a ou l’annonce b.'), texts: [
          { id: 'a1', de: 'a) 1-Zimmer-Wohnung\nZentrum, mit Küche\n380 Euro warm\n\nb) 3-Zimmer-Wohnung\nam Stadtrand, mit Garten\n750 Euro warm', tr: tr('a) 1-room flat\ncity centre, with kitchen\n380 euros all-in\n\nb) 3-room flat\non the outskirts, with garden\n750 euros all-in', 'a) Appartement 1 pièce\ncentre-ville, avec cuisine\n380 euros charges comprises\n\nb) Appartement 3 pièces\nen périphérie, avec jardin\n750 euros charges comprises') },
          { id: 'a2', de: 'a) Zimmer in WG frei\n290 Euro\nnur für Frauen\n\nb) Zimmer in WG frei\n320 Euro\nfür Frauen und Männer', tr: tr('a) Room in a shared flat available\n290 euros\nfor women only\n\nb) Room in a shared flat available\n320 euros\nfor women and men', 'a) Chambre en colocation libre\n290 euros\nuniquement pour femmes\n\nb) Chambre en colocation libre\n320 euros\npour femmes et hommes') },
          { id: 'a3', de: 'a) Möbelhaus Nord\nNeue Küchen und Sofas\nLieferung gratis\n\nb) Gebrauchtmarkt\nTisch 20 Euro, Regal 10 Euro\nSelbst abholen', tr: tr('a) Nord furniture store\nNew kitchens and sofas\nFree delivery\n\nb) Second-hand market\nTable 20 euros, shelf 10 euros\nCollect yourself', 'a) Magasin de meubles Nord\nCuisines et canapés neufs\nLivraison gratuite\n\nb) Marché de l’occasion\nTable 20 euros, étagère 10 euros\nÀ venir chercher soi-même') },
          { id: 'a4', de: 'a) Monatskarte Bus und Bahn\n49 Euro\ngültig in der ganzen Stadt\n\nb) Einzelfahrkarte\n2,80 Euro\ngültig 90 Minuten', tr: tr('a) Monthly pass for bus and train\n49 euros\nvalid in the whole city\n\nb) Single ticket\n2.80 euros\nvalid for 90 minutes', 'a) Carte mensuelle bus et train\n49 euros\nvalable dans toute la ville\n\nb) Billet à l’unité\n2,80 euros\nvalable 90 minutes') },
          { id: 'a5', de: 'a) Umzugsfirma Schnell\nWir tragen und fahren Ihre Möbel!\nab 150 Euro\n\nb) Autovermietung Rot\nTransporter 40 Euro pro Tag\nSie fahren selbst', tr: tr('a) Schnell removal company\nWe carry and drive your furniture!\nfrom 150 euros\n\nb) Rot car rental\nVan 40 euros a day\nYou drive yourself', 'a) Entreprise de déménagement Schnell\nNous portons et transportons vos meubles !\nà partir de 150 euros\n\nb) Location de voitures Rot\nCamionnette 40 euros par jour\nVous conduisez vous-même') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Sie sind Studentin und suchen eine kleine, billige Wohnung.', qTr: tr('You are a student and are looking for a small, cheap flat.', 'Vous êtes étudiante et cherchez un petit appartement bon marché.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('Ad a: one room, 380 euros. Ad b is large and costs 750 euros.', 'Annonce a : une pièce, 380 euros. L’annonce b est grande et coûte 750 euros.') },
          { id: 'q7', textId: 'a2', q: 'Sie sind ein Mann und suchen ein Zimmer in einer WG.', qTr: tr('You are a man and are looking for a room in a shared flat.', 'Vous êtes un homme et cherchez une chambre en colocation.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('Ad a is "nur für Frauen"; ad b is for women and men.', 'L’annonce a est « nur für Frauen » ; l’annonce b est pour femmes et hommes.') },
          { id: 'q8', textId: 'a3', q: 'Sie möchten ein neues Sofa kaufen. Das Möbelhaus soll es zu Ihnen bringen.', qTr: tr('You want to buy a new sofa. The shop should bring it to your home.', 'Vous voulez acheter un canapé neuf. Le magasin doit vous le livrer.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The furniture store sells new sofas and delivers for free; the second-hand market sells used items you collect yourself.', 'Le magasin de meubles vend des canapés neufs et livre gratuitement ; le marché de l’occasion vend des objets d’occasion à venir chercher soi-même.') },
          { id: 'q9', textId: 'a4', q: 'Sie fahren nur einmal in die Stadt und möchten wenig bezahlen.', qTr: tr('You are only going into the city once and want to pay little.', 'Vous n’allez qu’une fois en ville et voulez payer peu.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('A single ticket costs 2.80 euros; a monthly pass for 49 euros is not worth it for one trip.', 'Un billet à l’unité coûte 2,80 euros ; une carte mensuelle à 49 euros n’est pas rentable pour un seul trajet.') },
          { id: 'q10', textId: 'a5', q: 'Sie ziehen um. Sie möchten selbst keine Möbel tragen.', qTr: tr('You are moving house. You do not want to carry furniture yourself.', 'Vous déménagez. Vous ne voulez pas porter vous-même les meubles.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The removal company says "Wir tragen und fahren Ihre Möbel"; with the van you do everything yourself.', 'L’entreprise de déménagement dit « Wir tragen und fahren Ihre Möbel » ; avec la camionnette, vous faites tout vous-même.') },
        ] },
      { id: 'telc-a1-8-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Haltestelle Rathaus\nBus 12\nMo–Fr: alle 10 Minuten\nSa und So: alle 20 Minuten', tr: tr('Town hall stop\nBus 12\nMon–Fri: every 10 minutes\nSat and Sun: every 20 minutes', 'Arrêt Rathaus\nBus 12\nLun–ven : toutes les 10 minutes\nSam et dim : toutes les 20 minutes') },
          { id: 's2', de: 'Fahrräder bitte nur\nin Wagen 5!', tr: tr('Bicycles please only\nin carriage 5!', 'Vélos uniquement\ndans la voiture 5, s’il vous plaît !') },
          { id: 's3', de: 'Zimmer frei ab 1. Mai\n280 Euro, Internet inklusive\nBesichtigung nach Termin', tr: tr('Room available from 1 May\n280 euros, internet included\nViewing by appointment', 'Chambre libre à partir du 1er mai\n280 euros, internet inclus\nVisite sur rendez-vous') },
          { id: 's4', de: 'Hausordnung\nVon 22 bis 6 Uhr bitte leise sein!', tr: tr('House rules\nPlease be quiet from 10 p.m. to 6 a.m.!', 'Règlement intérieur\nVeuillez rester silencieux de 22 h à 6 h !') },
          { id: 's5', de: 'Fahrkartenautomat defekt\nBitte Fahrkarten beim Busfahrer kaufen.', tr: tr('Ticket machine out of order\nPlease buy tickets from the bus driver.', 'Distributeur de billets en panne\nVeuillez acheter vos billets auprès du chauffeur de bus.') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Am Sonntag fährt der Bus 12 alle 10 Minuten.', qTr: tr('On Sunday, bus 12 runs every 10 minutes.', 'Le dimanche, le bus 12 passe toutes les 10 minutes.'), answer: false, explain: tr('Every 10 minutes is Mon–Fri; on Sunday it is every 20 minutes.', 'Toutes les 10 minutes, c’est du lundi au vendredi ; le dimanche, c’est toutes les 20 minutes.') },
          { id: 'q12', textId: 's2', q: 'Fahrräder darf man nur in Wagen 5 mitnehmen.', qTr: tr('Bicycles may only be taken in carriage 5.', 'Les vélos ne sont autorisés que dans la voiture 5.'), answer: true, explain: tr('"Fahrräder bitte nur in Wagen 5!"', '« Fahrräder bitte nur in Wagen 5 ! »') },
          { id: 'q13', textId: 's3', q: 'Das Internet kostet extra.', qTr: tr('The internet costs extra.', 'Internet est en supplément.'), answer: false, explain: tr('"Internet inklusive" = included in the 280 euros.', '« Internet inklusive » = compris dans les 280 euros.') },
          { id: 'q14', textId: 's4', q: 'Nachts soll man leise sein.', qTr: tr('You should be quiet at night.', 'Il faut être silencieux la nuit.'), answer: true, explain: tr('Quiet from 22 to 6 Uhr, i.e. at night.', 'Silence de 22 h à 6 h, donc la nuit.') },
          { id: 'q15', textId: 's5', q: 'Man kann hier Fahrkarten am Automaten kaufen.', qTr: tr('You can buy tickets from the machine here.', 'On peut acheter des billets au distributeur ici.'), answer: false, explain: tr('The machine is "defekt"; tickets are sold by the bus driver.', 'Le distributeur est « defekt » (en panne) ; les billets sont vendus par le chauffeur.') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-8-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie suchen eine Wohnung und rufen bei der Hausverwaltung an. Der Mitarbeiter notiert Ihre Wünsche. Füllen Sie das Formular aus.',
        instructionTr: tr(
          'You are looking for a flat and call the property management. The employee notes down your wishes. Fill in the form.',
          'Vous cherchez un appartement et appelez la gestion immobilière. L’employé note vos souhaits. Remplissez le formulaire.',
        ),
        source: {
          id: 'info',
          de: 'Mein Name ist Amina Traoré. Ich suche eine Wohnung mit zwei Zimmern. Ich möchte nicht mehr als 550 Euro bezahlen. Ich kann ab dem 1. September einziehen.',
          tr: tr(
            'My name is Amina Traoré. I am looking for a flat with two rooms. I do not want to pay more than 550 euros. I can move in from 1 September.',
            'Je m’appelle Amina Traoré. Je cherche un appartement de deux pièces. Je ne veux pas payer plus de 550 euros. Je peux emménager à partir du 1er septembre.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Traoré', 'Traore'] },
          { id: 'f2', label: 'Vorname', labelTr: tr('First name', 'Prénom'), accept: ['Amina'] },
          { id: 'f3', label: 'Zimmer', labelTr: tr('Rooms', 'Pièces'), accept: ['2', 'zwei', '2 Zimmer', 'zwei Zimmer'] },
          { id: 'f4', label: 'Miete (maximal)', labelTr: tr('Rent (maximum)', 'Loyer (maximum)'), accept: ['550 Euro', '550', '550 €', '550€', 'maximal 550 Euro', 'höchstens 550 Euro', '550 Euro warm'] },
          { id: 'f5', label: 'Einzug ab', labelTr: tr('Move-in from', 'Emménagement à partir du'), accept: ['1. September', '1.9.', '01.09.', '1.9', '01.09', '1. Sept.', 'ab 1. September', '1 September', '1.September'] },
        ],
      },
      {
        id: 'telc-a1-8-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie lesen eine Wohnungsanzeige. Schreiben Sie Herrn Krause eine E-Mail (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'You read a flat advertisement. Write an e-mail to Mr Krause (about 30 words). Write about all three points.',
          'Vous lisez une annonce d’appartement. Écrivez un e-mail à Monsieur Krause (environ 30 mots). Traitez les trois points.',
        ),
        source: {
          id: 'src',
          title: 'Wohnung zu vermieten',
          de: 'Wohnung zu vermieten\nLindenstraße 14, 2 Zimmer, Balkon\n540 Euro\nE-Mail: h.krause@wohnung-nord.de',
          tr: tr(
            'Flat to let\nLindenstraße 14, 2 rooms, balcony\n540 euros\nE-mail: h.krause@wohnung-nord.de',
            'Appartement à louer\nLindenstraße 14, 2 pièces, balcon\n540 euros\nE-mail : h.krause@wohnung-nord.de',
          ),
        },
        points: [
          { id: 'p1', de: 'Interesse an der Wohnung', tr: tr('Your interest in the flat', 'Votre intérêt pour l’appartement'), keywords: ['interess', 'wohnung'] },
          { id: 'p2', de: 'Besichtigung am Samstag', tr: tr('Viewing on Saturday', 'Visite samedi'), keywords: ['besichtig', 'termin', 'samstag'] },
          { id: 'p3', de: 'Frage: Heizung in der Miete?', tr: tr('Question: is heating included in the rent?', 'Question : le chauffage est-il compris dans le loyer ?'), keywords: ['heizung', 'inklusive', 'nebenkosten', 'miete'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Sehr geehrter Herr Krause,\n\nich interessiere mich für Ihre Wohnung in der Lindenstraße. Kann ich die Wohnung am Samstag um 11 Uhr besichtigen? Ist die Heizung in der Miete inklusive?\n\nMit freundlichen Grüßen\nAmina Traoré',
          tr: tr(
            'Dear Mr Krause,\n\nI am interested in your flat in Lindenstraße. Can I view the flat on Saturday at 11 a.m.? Is the heating included in the rent?\n\nYours sincerely\nAmina Traoré',
            'Cher Monsieur Krause,\n\nje suis intéressée par votre appartement de la Lindenstraße. Puis-je visiter l’appartement samedi à 11 h ? Le chauffage est-il compris dans le loyer ?\n\nCordialement\nAmina Traoré',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-8-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Land, Wohnort, Familie, Sprachen, Beruf.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, country, town, family, languages, job.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, pays, ville, famille, langues, profession.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Guten Tag, ich heiße Nadia Petrenko. Petrenko schreibt man P-E-T-R-E-N-K-O.', sampleTr: tr('Hello, my name is Nadia Petrenko. Petrenko is spelled P-E-T-R-E-N-K-O.', 'Bonjour, je m’appelle Nadia Petrenko. Petrenko s’écrit P-E-T-R-E-N-K-O.') },
          { id: 'p1b', cue: 'Land', cueTr: tr('Country', 'Pays'), sample: 'Ich komme aus der Ukraine, aus der Stadt Lwiw.', sampleTr: tr('I come from Ukraine, from the city of Lviv.', 'Je viens d’Ukraine, de la ville de Lviv.') },
          { id: 'p1c', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Seit drei Monaten wohne ich in Köln. Ich suche noch eine größere Wohnung.', sampleTr: tr('I have been living in Cologne for three months. I am still looking for a bigger flat.', 'J’habite à Cologne depuis trois mois. Je cherche encore un appartement plus grand.') },
          { id: 'p1d', cue: 'Familie', cueTr: tr('Family', 'Famille'), sample: 'Ich habe einen Sohn. Er ist fünf Jahre alt und geht in den Kindergarten.', sampleTr: tr('I have a son. He is five years old and goes to nursery school.', 'J’ai un fils. Il a cinq ans et va à la maternelle.') },
          { id: 'p1e', cue: 'Sprachen', cueTr: tr('Languages', 'Langues'), sample: 'Ich spreche Ukrainisch, Russisch und ein bisschen Deutsch.', sampleTr: tr('I speak Ukrainian, Russian and a little German.', 'Je parle ukrainien, russe et un peu allemand.') },
          { id: 'p1f', cue: 'Beruf', cueTr: tr('Job', 'Profession'), sample: 'Ich bin Verkäuferin von Beruf. Jetzt suche ich eine Arbeit im Supermarkt.', sampleTr: tr('I am a sales assistant by profession. Now I am looking for a job in a supermarket.', 'Je suis vendeuse de profession. Maintenant, je cherche un travail dans un supermarché.') },
        ],
      },
      {
        id: 'telc-a1-8-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Wohnen und Verkehr. Sie ziehen eine Wortkarte. Stellen Sie Ihrem Partner eine Frage. Er antwortet. Dann tauschen Sie.',
        instructionTr: tr('Topic: housing and transport. You draw a word card. Ask your partner a question. They answer. Then you swap.', 'Thème : logement et transports. Vous tirez une carte-mot. Posez une question à votre partenaire. Il répond. Puis vous échangez.'),
        prompts: [
          { id: 'p2a', cue: 'Wohnung', cueTr: tr('Flat', 'Appartement'), sample: 'Wie viele Zimmer hat deine Wohnung? – Sie hat drei Zimmer und einen Balkon.', sampleTr: tr('How many rooms does your flat have? – It has three rooms and a balcony.', 'Combien de pièces a ton appartement ? – Il a trois pièces et un balcon.'), tip: tr('"Wie viele …?" asks about a number.', '« Wie viele …? » interroge sur un nombre.') },
          { id: 'p2b', cue: 'Miete', cueTr: tr('Rent', 'Loyer'), sample: 'Wie viel bezahlst du für die Miete? – 600 Euro im Monat.', sampleTr: tr('How much do you pay for rent? – 600 euros a month.', 'Combien payes-tu de loyer ? – 600 euros par mois.') },
          { id: 'p2c', cue: 'Nachbarn', cueTr: tr('Neighbours', 'Voisins'), sample: 'Wie sind deine Nachbarn? – Sie sind sehr nett und leise.', sampleTr: tr('What are your neighbours like? – They are very nice and quiet.', 'Comment sont tes voisins ? – Ils sont très gentils et calmes.') },
          { id: 'p2d', cue: 'Bus', cueTr: tr('Bus', 'Bus'), sample: 'Fährst du oft mit dem Bus? – Ja, jeden Tag zur Arbeit.', sampleTr: tr('Do you often take the bus? – Yes, every day to work.', 'Prends-tu souvent le bus ? – Oui, tous les jours pour aller au travail.') },
          { id: 'p2e', cue: 'Fahrkarte', cueTr: tr('Ticket', 'Billet'), sample: 'Wo kaufst du deine Fahrkarte? – Am Automaten an der Haltestelle.', sampleTr: tr('Where do you buy your ticket? – From the machine at the stop.', 'Où achètes-tu ton billet ? – Au distributeur à l’arrêt.') },
          { id: 'p2f', cue: 'Zug', cueTr: tr('Train', 'Train'), sample: 'Wann fährt dein Zug? – Um 7.42 Uhr von Gleis 4.', sampleTr: tr('When does your train leave? – At 7.42 a.m. from platform 4.', 'Quand part ton train ? – À 7 h 42 de la voie 4.') },
          { id: 'p2g', cue: 'Stadt', cueTr: tr('City', 'Ville'), sample: 'Wohnst du gern in der Stadt? – Ja, hier gibt es viele Geschäfte.', sampleTr: tr('Do you like living in the city? – Yes, there are many shops here.', 'Aimes-tu vivre en ville ? – Oui, il y a beaucoup de magasins ici.') },
        ],
      },
      {
        id: 'telc-a1-8-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. Your partner reacts.', 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: eine Haltestelle mit einem Fahrplan', cueTr: tr('Picture: a stop with a timetable', 'Image : un arrêt avec un horaire'), sample: 'Können Sie mir bitte sagen, wann der nächste Bus fährt? – In zehn Minuten.', sampleTr: tr('Can you tell me when the next bus leaves, please? – In ten minutes.', 'Pouvez-vous me dire quand part le prochain bus, s’il vous plaît ? – Dans dix minutes.'), tip: tr('"Können Sie mir bitte sagen, …?" is a polite way to ask.', '« Können Sie mir bitte sagen, …? » est une façon polie de demander.') },
          { id: 'p3b', cue: 'Bild: ein voller Bus, ein freier Sitzplatz', cueTr: tr('Picture: a full bus, a free seat', 'Image : un bus plein, une place libre'), sample: 'Entschuldigung, ist hier noch frei? Darf ich mich setzen? – Ja, bitte.', sampleTr: tr('Excuse me, is this seat free? May I sit down? – Yes, please.', 'Excusez-moi, est-ce que cette place est libre ? Puis-je m’asseoir ? – Oui, je vous en prie.') },
          { id: 'p3c', cue: 'Bild: ein Fahrkartenschalter', cueTr: tr('Picture: a ticket counter', 'Image : un guichet de billets'), sample: 'Eine Fahrkarte nach Hamburg, bitte. – Einfach oder hin und zurück?', sampleTr: tr('One ticket to Hamburg, please. – Single or return?', 'Un billet pour Hambourg, s’il vous plaît. – Aller simple ou aller-retour ?') },
          { id: 'p3d', cue: 'Bild: ein Umzugskarton', cueTr: tr('Picture: a moving box', 'Image : un carton de déménagement'), sample: 'Können Sie mir bitte beim Umzug helfen? – Ja, gern. Wann denn?', sampleTr: tr('Can you help me with the move, please? – Yes, gladly. When?', 'Pouvez-vous m’aider pour le déménagement, s’il vous plaît ? – Oui, avec plaisir. Quand ?') },
          { id: 'p3e', cue: 'Bild: laute Musik im Nachbarhaus', cueTr: tr('Picture: loud music next door', 'Image : musique forte chez les voisins'), sample: 'Können Sie bitte die Musik leiser machen? – Entschuldigung, natürlich.', sampleTr: tr('Can you turn the music down, please? – Sorry, of course.', 'Pouvez-vous baisser la musique, s’il vous plaît ? – Désolé, bien sûr.') },
          { id: 'p3f', cue: 'Bild: eine Wohnungstür und ein Schlüssel', cueTr: tr('Picture: a flat door and a key', 'Image : une porte d’appartement et une clé'), sample: 'Kann ich bitte noch einen Schlüssel haben? – Ja, ich gebe Ihnen einen.', sampleTr: tr('Can I have another key, please? – Yes, I will give you one.', 'Puis-je avoir une autre clé, s’il vous plaît ? – Oui, je vous en donne une.') },
          { id: 'p3g', cue: 'Bild: ein Stadtplan', cueTr: tr('Picture: a city map', 'Image : un plan de la ville'), sample: 'Können Sie mir bitte den Weg zum Bahnhof zeigen? – Gehen Sie geradeaus, dann links.', sampleTr: tr('Can you show me the way to the station, please? – Go straight on, then left.', 'Pouvez-vous m’indiquer le chemin de la gare, s’il vous plaît ? – Allez tout droit, puis à gauche.') },
        ],
      },
    ],
  },
];

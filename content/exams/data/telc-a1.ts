import type { ExamSetInput } from '../types';

const tr = (en: string, fr: string) => ({ en, fr });

// Original practice material modelled on the telc Deutsch A1 format. Not an official paper.
export const TELC_A1: ExamSetInput[] = [
  // ───────────────────────── Set 1: Freizeit, Einkaufen, Nachbarn ─────────────────────────
  {
    id: 'telc-a1-1',
    board: 'telc',
    level: 'A1',
    number: 1,
    lesen: [
      { id: 'telc-a1-1-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Betreff: Blumen\n\nLiebe Frau Klein,\nich bin im August im Urlaub. Können Sie bitte meine Blumen gießen? Der Schlüssel liegt bei Frau Roth. Vielen Dank!\nTina', tr: tr('Subject: Flowers\n\nDear Mrs Klein,\nI am on holiday in August. Could you please water my flowers? The key is with Mrs Roth. Thank you very much!\nTina', 'Objet : Fleurs\n\nChère Madame Klein,\nje suis en vacances en août. Pourriez-vous arroser mes fleurs, s\'il vous plaît ? La clé est chez Madame Roth. Merci beaucoup !\nTina') },
          { id: 'm2', de: 'Hallo Jan,\nder Trainer ist krank. Das Training am Dienstag fällt aus. Wir spielen am Donnerstag um 18 Uhr.\nGruß\nPaul', tr: tr('Hi Jan,\nthe coach is ill. Tuesday\'s training is cancelled. We play on Thursday at 6 p.m.\nBest\nPaul', 'Salut Jan,\nl\'entraîneur est malade. L\'entraînement de mardi est annulé. On joue jeudi à 18 h.\nSalut\nPaul') },
          { id: 'm3', de: 'Hallo Mama,\nich komme heute später nach Hause. Der Bus fährt nicht. Ich kaufe noch Brot und Milch.\nKuss, Lisa', tr: tr('Hi Mum,\nI am coming home later today. The bus is not running. I will still buy bread and milk.\nKiss, Lisa', 'Salut maman,\nje rentre plus tard aujourd\'hui. Le bus ne circule pas. Je vais encore acheter du pain et du lait.\nBisous, Lisa') },
          { id: 'm4', de: 'Lieber Herr Wolf,\ndas Paket für Sie liegt bei Familie Berg, Nr. 3. Bitte holen Sie es nach 17 Uhr ab.\nViele Grüße\nFrau Hahn', tr: tr('Dear Mr Wolf,\nthe parcel for you is at the Bergs\' flat, no. 3. Please pick it up after 5 p.m.\nBest wishes\nMrs Hahn', 'Cher Monsieur Wolf,\nle colis pour vous est chez la famille Berg, n° 3. Venez le chercher après 17 h, s\'il vous plaît.\nCordialement\nMadame Hahn') },
          { id: 'm5', de: 'Hallo Sara,\ndanke für die Einladung! Ich komme gern zu deiner Party am Samstag und bringe einen Kuchen mit. Wann fängt die Party an?\nOmar', tr: tr('Hi Sara,\nthanks for the invitation! I will gladly come to your party on Saturday and bring a cake. When does the party start?\nOmar', 'Salut Sara,\nmerci pour l\'invitation ! Je viens avec plaisir à ta fête samedi et j\'apporte un gâteau. À quelle heure commence la fête ?\nOmar') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Tina fährt im August in den Urlaub.', qTr: tr('Tina is going on holiday in August.', 'Tina part en vacances en août.'), answer: true, explain: tr('"Ich bin im August im Urlaub."', '« Ich bin im August im Urlaub. »') },
          { id: 'q2', textId: 'm2', q: 'Das Training ist am Dienstag.', qTr: tr('The training is on Tuesday.', 'L\'entraînement a lieu mardi.'), answer: false, explain: tr('Tuesday\'s training is cancelled ("fällt aus"); they play on Thursday.', 'L\'entraînement de mardi est annulé (« fällt aus ») ; ils jouent jeudi.') },
          { id: 'q3', textId: 'm3', q: 'Lisa kauft Brot und Milch.', qTr: tr('Lisa buys bread and milk.', 'Lisa achète du pain et du lait.'), answer: true, explain: tr('"Ich kaufe noch Brot und Milch."', '« Ich kaufe noch Brot und Milch. »') },
          { id: 'q4', textId: 'm4', q: 'Das Paket ist bei Frau Hahn.', qTr: tr('The parcel is with Mrs Hahn.', 'Le colis est chez Madame Hahn.'), answer: false, explain: tr('The parcel is at the Bergs\' flat; Mrs Hahn only wrote the note.', 'Le colis est chez les Berg ; Madame Hahn a seulement écrit la note.') },
          { id: 'q5', textId: 'm5', q: 'Omar möchte wissen, wann die Party beginnt.', qTr: tr('Omar wants to know when the party starts.', 'Omar veut savoir quand la fête commence.'), answer: true, explain: tr('"Wann fängt die Party an?"', '« Wann fängt die Party an ? »') },
        ] },
      { id: 'telc-a1-1-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l\'annonce a ou l\'annonce b.'), texts: [
          { id: 'a1', de: 'a) Flohmarkt auf dem Marktplatz\nSamstag 9–15 Uhr\nKleidung, Bücher, Spielzeug\n\nb) Kaufhaus Stern\nNeue Mode für den Herbst\nMo–Sa 9–19 Uhr', tr: tr('a) Flea market on the market square\nSaturday 9 a.m.–3 p.m.\nClothes, books, toys\n\nb) Stern department store\nNew autumn fashion\nMon–Sat 9 a.m.–7 p.m.', 'a) Marché aux puces sur la place du marché\nSamedi 9 h–15 h\nVêtements, livres, jouets\n\nb) Grand magasin Stern\nNouvelle mode d\'automne\nLun–sam 9 h–19 h') },
          { id: 'a2', de: 'a) Erlebnisbad Aqua\nErwachsene 12 Euro\nKinder 8 Euro\n\nb) Hallenbad Nord\nErwachsene 4 Euro\nKinder bis 6 Jahre: frei', tr: tr('a) Aqua leisure pool\nAdults 12 euros\nChildren 8 euros\n\nb) Indoor pool North\nAdults 4 euros\nChildren up to 6 years: free', 'a) Parc aquatique Aqua\nAdultes 12 euros\nEnfants 8 euros\n\nb) Piscine couverte Nord\nAdultes 4 euros\nEnfants jusqu\'à 6 ans : gratuit') },
          { id: 'a3', de: 'a) Große Wohnung zu vermieten\n3 Zimmer, Balkon\n650 Euro warm\n\nb) Wohnung zu vermieten\n2 Zimmer, Küche, Bad\n480 Euro warm', tr: tr('a) Large flat to let\n3 rooms, balcony\n650 euros all-in\n\nb) Flat to let\n2 rooms, kitchen, bathroom\n480 euros all-in', 'a) Grand appartement à louer\n3 pièces, balcon\n650 euros charges comprises\n\nb) Appartement à louer\n2 pièces, cuisine, salle de bains\n480 euros charges comprises') },
          { id: 'a4', de: 'a) Deutsch für Anfänger\nMo–Fr 9–12.30 Uhr\nVolkshochschule\n\nb) Deutsch für Anfänger\nMo und Mi 18.30–20 Uhr\nVolkshochschule', tr: tr('a) German for beginners\nMon–Fri 9 a.m.–12.30 p.m.\nAdult education centre\n\nb) German for beginners\nMon and Wed 6.30–8 p.m.\nAdult education centre', 'a) Allemand pour débutants\nLun–ven 9 h–12 h 30\nUniversité populaire\n\nb) Allemand pour débutants\nLun et mer 18 h 30–20 h\nUniversité populaire') },
          { id: 'a5', de: 'a) Café Grün\nSuppen, Salate, Kuchen\nAlles vegetarisch\n\nb) Pizzeria Roma\nPizza mit Salami und Schinken\nab 6,50 Euro', tr: tr('a) Café Grün\nSoups, salads, cakes\nAll vegetarian\n\nb) Pizzeria Roma\nPizza with salami and ham\nfrom 6.50 euros', 'a) Café Grün\nSoupes, salades, gâteaux\nTout est végétarien\n\nb) Pizzeria Roma\nPizza au salami et au jambon\nà partir de 6,50 euros') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Sie möchten am Samstag Kleidung und Bücher für wenig Geld kaufen.', qTr: tr('You want to buy clothes and books cheaply on Saturday.', 'Vous voulez acheter des vêtements et des livres pas chers samedi.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The flea market sells clothes and books on Saturday.', 'Le marché aux puces vend des vêtements et des livres le samedi.') },
          { id: 'q7', textId: 'a2', q: 'Sie gehen mit Ihrem Kind (5 Jahre) schwimmen und möchten wenig bezahlen.', qTr: tr('You are going swimming with your child (5 years) and want to pay little.', 'Vous allez nager avec votre enfant (5 ans) et voulez payer peu.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('At the indoor pool North, children up to 6 are free.', 'À la piscine Nord, les enfants jusqu\'à 6 ans sont gratuits.') },
          { id: 'q8', textId: 'a3', q: 'Sie suchen eine Wohnung mit zwei Zimmern. Sie wollen nicht mehr als 500 Euro bezahlen.', qTr: tr('You are looking for a two-room flat. You do not want to pay more than 500 euros.', 'Vous cherchez un appartement de deux pièces. Vous ne voulez pas payer plus de 500 euros.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('Ad b: 2 rooms, 480 euros.', 'Annonce b : 2 pièces, 480 euros.') },
          { id: 'q9', textId: 'a4', q: 'Sie möchten am Abend Deutsch lernen.', qTr: tr('You want to learn German in the evening.', 'Vous voulez apprendre l\'allemand le soir.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('Ad b is an evening course (18.30–20 Uhr).', 'L\'annonce b est un cours du soir (18 h 30–20 h).') },
          { id: 'q10', textId: 'a5', q: 'Sie haben Hunger, aber Sie essen kein Fleisch.', qTr: tr('You are hungry, but you do not eat meat.', 'Vous avez faim, mais vous ne mangez pas de viande.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('Café Grün is all vegetarian.', 'Le Café Grün est entièrement végétarien.') },
        ] },
      { id: 'telc-a1-1-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Bäckerei Hoffmann\nMo–Fr 6–18 Uhr\nSa 6–12 Uhr\nSonntag geschlossen', tr: tr('Hoffmann bakery\nMon–Fri 6 a.m.–6 p.m.\nSat 6 a.m.–12 noon\nClosed on Sunday', 'Boulangerie Hoffmann\nLun–ven 6 h–18 h\nSam 6 h–12 h\nFermé le dimanche') },
          { id: 's2', de: 'Bitte Schuhe ausziehen!', tr: tr('Please take off your shoes!', 'Veuillez enlever vos chaussures !') },
          { id: 's3', de: 'Eintritt frei\nfür Kinder unter 6 Jahren', tr: tr('Free admission\nfor children under 6', 'Entrée gratuite\npour les enfants de moins de 6 ans') },
          { id: 's4', de: 'Restaurant Adler\nHeute Ruhetag!\nAb morgen sind wir wieder für Sie da.', tr: tr('Adler restaurant\nClosed today!\nFrom tomorrow we are here for you again.', 'Restaurant Adler\nAujourd\'hui jour de fermeture !\nÀ partir de demain, nous sommes de nouveau là pour vous.') },
          { id: 's5', de: 'Achtung!\nAufzug defekt.\nBitte benutzen Sie die Treppe.', tr: tr('Attention!\nLift out of order.\nPlease use the stairs.', 'Attention !\nAscenseur en panne.\nVeuillez utiliser l\'escalier.') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Am Samstagnachmittag ist die Bäckerei geöffnet.', qTr: tr('The bakery is open on Saturday afternoon.', 'La boulangerie est ouverte le samedi après-midi.'), answer: false, explain: tr('On Saturday it closes at 12.', 'Le samedi, elle ferme à 12 h.') },
          { id: 'q12', textId: 's2', q: 'Man muss die Schuhe ausziehen.', qTr: tr('You have to take off your shoes.', 'Il faut enlever ses chaussures.'), answer: true, explain: tr('"Bitte Schuhe ausziehen!"', '« Bitte Schuhe ausziehen ! »') },
          { id: 'q13', textId: 's3', q: 'Ein Kind (4 Jahre) bezahlt keinen Eintritt.', qTr: tr('A child (4 years) pays no admission.', 'Un enfant (4 ans) ne paie pas d\'entrée.'), answer: true, explain: tr('Children under 6 are free.', 'Les enfants de moins de 6 ans sont gratuits.') },
          { id: 'q14', textId: 's4', q: 'Das Restaurant ist heute geöffnet.', qTr: tr('The restaurant is open today.', 'Le restaurant est ouvert aujourd\'hui.'), answer: false, explain: tr('"Ruhetag" = closed day.', '« Ruhetag » = jour de fermeture.') },
          { id: 'q15', textId: 's5', q: 'Man soll die Treppe nehmen.', qTr: tr('You should take the stairs.', 'Il faut prendre l\'escalier.'), answer: true, explain: tr('The lift is out of order.', 'L\'ascenseur est en panne.') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-1-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten im Fitnessstudio Mitglied werden. Ihre Freundin liest Ihre Daten vor. Füllen Sie das Formular aus.',
        instructionTr: tr(
          'You want to join a gym. Your friend reads out your details. Fill in the form.',
          'Vous voulez vous inscrire dans une salle de sport. Votre amie lit vos informations. Remplissez le formulaire.',
        ),
        source: {
          id: 'info',
          de: 'Ich heiße Elena Novak. Ich wohne in Leipzig. Meine Telefonnummer ist 0341 / 22 33 44. Ich bin Lehrerin. Ich möchte am Dienstag und am Donnerstag trainieren.',
          tr: tr(
            'My name is Elena Novak. I live in Leipzig. My telephone number is 0341 / 22 33 44. I am a teacher. I would like to train on Tuesday and Thursday.',
            'Je m\'appelle Elena Novak. J\'habite à Leipzig. Mon numéro de téléphone est le 0341 / 22 33 44. Je suis enseignante. Je voudrais m\'entraîner le mardi et le jeudi.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Novak'] },
          { id: 'f2', label: 'Vorname', labelTr: tr('First name', 'Prénom'), accept: ['Elena'] },
          { id: 'f3', label: 'Wohnort', labelTr: tr('Town', 'Ville'), accept: ['Leipzig'] },
          { id: 'f4', label: 'Telefon', labelTr: tr('Telephone', 'Téléphone'), accept: ['0341 / 22 33 44', '0341/223344', '0341 22 33 44', '0341 223344', '0341-223344'] },
          { id: 'f5', label: 'Trainingstage', labelTr: tr('Training days', 'Jours d\'entraînement'), accept: ['Dienstag und Donnerstag', 'Di und Do', 'Dienstag, Donnerstag', 'Dienstag/Donnerstag'] },
        ],
      },
      {
        id: 'telc-a1-1-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Ihr Freund Marco möchte am Samstag mit Ihnen schwimmen gehen. Schreiben Sie ihm eine Nachricht (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'Your friend Marco would like to go swimming with you on Saturday. Write him a message (about 30 words). Write about all three points.',
          'Votre ami Marco voudrait aller nager avec vous samedi. Écrivez-lui un message (environ 30 mots). Traitez les trois points.',
        ),
        points: [
          { id: 'p1', de: 'Zusage', tr: tr('Say yes', 'Accepter'), keywords: ['gern', 'gehe', 'komme', 'super'] },
          { id: 'p2', de: 'Treffpunkt und Uhrzeit', tr: tr('Meeting place and time', 'Lieu et heure de rendez-vous'), keywords: ['treffen', 'uhr', 'vor dem', 'bei'] },
          { id: 'p3', de: 'Frage: Handtuch', tr: tr('Question: towel', 'Question : serviette'), keywords: ['handtuch', 'mitbring', 'brauch'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Lieber Marco,\n\nvielen Dank für deine Nachricht. Ich gehe gern mit dir schwimmen. Wir treffen uns um 10 Uhr vor dem Hallenbad. Hast du ein Handtuch für mich?\n\nBis Samstag\nLena',
          tr: tr(
            'Dear Marco,\n\nThank you very much for your message. I would love to go swimming with you. We meet at 10 a.m. in front of the pool. Do you have a towel for me?\n\nSee you Saturday\nLena',
            'Cher Marco,\n\nmerci beaucoup pour ton message. Je vais volontiers nager avec toi. On se retrouve à 10 h devant la piscine. Est-ce que tu as une serviette pour moi ?\n\nÀ samedi\nLena',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-1-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, country, town, languages, job, hobby.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, pays, ville, langues, profession, loisir.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Ich heiße Daniel Kamga. Das schreibt man K-A-M-G-A.', sampleTr: tr('My name is Daniel Kamga. That is spelled K-A-M-G-A.', 'Je m\'appelle Daniel Kamga. Ça s\'écrit K-A-M-G-A.') },
          { id: 'p1b', cue: 'Land', cueTr: tr('Country', 'Pays'), sample: 'Ich komme aus Kamerun. Das ist in Afrika.', sampleTr: tr('I come from Cameroon. That is in Africa.', 'Je viens du Cameroun. C\'est en Afrique.') },
          { id: 'p1c', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Jetzt wohne ich in Stuttgart, in der Bahnhofstraße 15.', sampleTr: tr('Now I live in Stuttgart, at Bahnhofstraße 15.', 'Maintenant j\'habite à Stuttgart, au 15 Bahnhofstraße.') },
          { id: 'p1d', cue: 'Sprachen', cueTr: tr('Languages', 'Langues'), sample: 'Ich spreche Französisch und Englisch. Deutsch lerne ich seit sechs Monaten.', sampleTr: tr('I speak French and English. I have been learning German for six months.', 'Je parle français et anglais. J\'apprends l\'allemand depuis six mois.') },
          { id: 'p1e', cue: 'Beruf', cueTr: tr('Job', 'Profession'), sample: 'Ich bin Student. Ich studiere Informatik.', sampleTr: tr('I am a student. I study computer science.', 'Je suis étudiant. J\'étudie l\'informatique.') },
          { id: 'p1f', cue: 'Hobby', cueTr: tr('Hobby', 'Loisir'), sample: 'In meiner Freizeit höre ich gern Musik und gehe schwimmen.', sampleTr: tr('In my free time I like listening to music and going swimming.', 'Pendant mon temps libre, j\'aime écouter de la musique et aller nager.') },
        ],
      },
      {
        id: 'telc-a1-1-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Freizeit. Sie ziehen eine Wortkarte. Stellen Sie Ihrem Partner eine Frage. Er antwortet. Dann tauschen Sie.',
        instructionTr: tr('Topic: free time. You draw a word card. Ask your partner a question. They answer. Then you swap.', 'Thème : loisirs. Vous tirez une carte-mot. Posez une question à votre partenaire. Il répond. Puis vous échangez.'),
        prompts: [
          { id: 'p2a', cue: 'Sport', cueTr: tr('Sport', 'Sport'), sample: 'Machst du Sport? – Ja, ich spiele zweimal pro Woche Basketball.', sampleTr: tr('Do you do sport? – Yes, I play basketball twice a week.', 'Fais-tu du sport ? – Oui, je joue au basket deux fois par semaine.'), tip: tr('Yes/no questions start with the verb.', 'Les questions fermées commencent par le verbe.') },
          { id: 'p2b', cue: 'Musik', cueTr: tr('Music', 'Musique'), sample: 'Welche Musik hörst du gern? – Ich höre gern Pop und Jazz.', sampleTr: tr('Which music do you like listening to? – I like pop and jazz.', 'Quelle musique aimes-tu écouter ? – J\'aime le pop et le jazz.') },
          { id: 'p2c', cue: 'Wochenende', cueTr: tr('Weekend', 'Week-end'), sample: 'Was machst du am Wochenende? – Ich besuche meine Freunde.', sampleTr: tr('What are you doing at the weekend? – I am visiting my friends.', 'Que fais-tu le week-end ? – Je rends visite à mes amis.') },
          { id: 'p2d', cue: 'Freunde', cueTr: tr('Friends', 'Amis'), sample: 'Wann triffst du deine Freunde? – Am Freitagabend.', sampleTr: tr('When do you meet your friends? – On Friday evening.', 'Quand retrouves-tu tes amis ? – Le vendredi soir.') },
          { id: 'p2e', cue: 'Kino', cueTr: tr('Cinema', 'Cinéma'), sample: 'Gehst du oft ins Kino? – Nein, nur einmal im Monat.', sampleTr: tr('Do you often go to the cinema? – No, only once a month.', 'Vas-tu souvent au cinéma ? – Non, seulement une fois par mois.') },
        ],
      },
      {
        id: 'telc-a1-1-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. Your partner reacts.', 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: eine offene Tür, es ist laut', cueTr: tr('Picture: an open door, it is noisy', 'Image : une porte ouverte, il y a du bruit'), sample: 'Können Sie bitte die Tür zumachen? – Ja, natürlich.', sampleTr: tr('Can you close the door, please? – Yes, of course.', 'Pouvez-vous fermer la porte, s\'il vous plaît ? – Oui, bien sûr.'), tip: tr('"Können Sie bitte …?" is a polite request.', '« Können Sie bitte …? » est une demande polie.') },
          { id: 'p3b', cue: 'Bild: Salz auf dem Tisch', cueTr: tr('Picture: salt on the table', 'Image : du sel sur la table'), sample: 'Geben Sie mir bitte das Salz. – Bitte schön.', sampleTr: tr('Please pass me the salt. – Here you are.', 'Passez-moi le sel, s\'il vous plaît. – Voilà.') },
          { id: 'p3c', cue: 'Bild: ein Fahrkartenautomat', cueTr: tr('Picture: a ticket machine', 'Image : un distributeur de billets'), sample: 'Können Sie mir bitte helfen? Ich verstehe den Automaten nicht. – Gern.', sampleTr: tr('Can you help me, please? I do not understand the machine. – Gladly.', 'Pouvez-vous m\'aider, s\'il vous plaît ? Je ne comprends pas le distributeur. – Avec plaisir.') },
          { id: 'p3d', cue: 'Bild: ein freier Stuhl', cueTr: tr('Picture: a free chair', 'Image : une chaise libre'), sample: 'Darf ich hier sitzen? – Ja, der Platz ist frei.', sampleTr: tr('May I sit here? – Yes, the seat is free.', 'Puis-je m\'asseoir ici ? – Oui, la place est libre.') },
          { id: 'p3e', cue: 'Bild: ein Telefon', cueTr: tr('Picture: a telephone', 'Image : un téléphone'), sample: 'Kann ich bitte Ihr Telefon benutzen? – Ja, hier bitte.', sampleTr: tr('May I use your telephone, please? – Yes, here you are.', 'Puis-je utiliser votre téléphone, s\'il vous plaît ? – Oui, voilà.') },
        ],
      },
    ],
  },

  // ───────────────────────── Set 2: Reisen, Hotel, Bahnhof ─────────────────────────
  {
    id: 'telc-a1-2',
    board: 'telc',
    level: 'A1',
    number: 2,
    lesen: [
      { id: 'telc-a1-2-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Liebe Anna,\nich komme am Freitag mit dem Zug. Er kommt um 16.45 Uhr in Hamburg an. Kannst du mich abholen?\nViele Grüße\nJonas', tr: tr('Dear Anna,\nI am coming on Friday by train. It arrives in Hamburg at 4.45 p.m. Can you pick me up?\nBest wishes\nJonas', 'Chère Anna,\nje viens vendredi en train. Il arrive à Hambourg à 16 h 45. Peux-tu venir me chercher ?\nAmitiés\nJonas') },
          { id: 'm2', de: 'Guten Tag Herr Ali,\nIhr Zimmer ist ab 14 Uhr bereit. Das Frühstück gibt es von 7 bis 10 Uhr.\nMit freundlichen Grüßen\nHotel Seeblick', tr: tr('Hello Mr Ali,\nyour room is ready from 2 p.m. Breakfast is served from 7 to 10 a.m.\nKind regards\nHotel Seeblick', 'Bonjour Monsieur Ali,\nvotre chambre est prête à partir de 14 h. Le petit-déjeuner est servi de 7 h à 10 h.\nCordialement\nHôtel Seeblick') },
          { id: 'm3', de: 'Hallo Mia,\nwir sind seit Montag in Wien. Das Wetter ist schön und das Essen ist super. Morgen besuchen wir ein Museum.\nLiebe Grüße\nEva und Tom', tr: tr('Hi Mia,\nwe have been in Vienna since Monday. The weather is nice and the food is great. Tomorrow we are visiting a museum.\nLove\nEva and Tom', 'Salut Mia,\nnous sommes à Vienne depuis lundi. Il fait beau et la cuisine est super. Demain, nous visitons un musée.\nGrosses bises\nEva et Tom') },
          { id: 'm4', de: 'Lieber Max,\nich bin schon im Café am Bahnhof. Der Zug hat 20 Minuten Verspätung. Warte bitte dort. Bis gleich!\nNina', tr: tr('Dear Max,\nI am already in the café at the station. The train is 20 minutes late. Please wait there. See you soon!\nNina', 'Cher Max,\nje suis déjà au café de la gare. Le train a 20 minutes de retard. Attends là-bas, s\'il te plaît. À tout de suite !\nNina') },
          { id: 'm5', de: 'Sehr geehrte Frau Weiß,\nleider ist Ihr Flug am Sonntag gestrichen. Sie können am Montag um 9.30 Uhr fliegen. Rufen Sie uns bitte an.\nReisebüro Sonne', tr: tr('Dear Mrs Weiß,\nunfortunately your flight on Sunday is cancelled. You can fly on Monday at 9.30 a.m. Please call us.\nSonne travel agency', 'Chère Madame Weiß,\nmalheureusement votre vol de dimanche est annulé. Vous pouvez voler lundi à 9 h 30. Appelez-nous, s\'il vous plaît.\nAgence de voyages Sonne') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Jonas fährt mit dem Auto.', qTr: tr('Jonas is travelling by car.', 'Jonas voyage en voiture.'), answer: false, explain: tr('He comes "mit dem Zug".', 'Il vient « mit dem Zug » (en train).') },
          { id: 'q2', textId: 'm2', q: 'Das Frühstück ist am Morgen.', qTr: tr('Breakfast is in the morning.', 'Le petit-déjeuner a lieu le matin.'), answer: true, explain: tr('7–10 Uhr is morning.', '7 h–10 h, c\'est le matin.') },
          { id: 'q3', textId: 'm3', q: 'Eva und Tom besuchen morgen ein Museum.', qTr: tr('Eva and Tom are visiting a museum tomorrow.', 'Eva et Tom visitent un musée demain.'), answer: true, explain: tr('"Morgen besuchen wir ein Museum."', '« Morgen besuchen wir ein Museum. »') },
          { id: 'q4', textId: 'm4', q: 'Der Zug kommt pünktlich.', qTr: tr('The train is on time.', 'Le train est à l\'heure.'), answer: false, explain: tr('"20 Minuten Verspätung" = 20 minutes late.', '« 20 Minuten Verspätung » = 20 minutes de retard.') },
          { id: 'q5', textId: 'm5', q: 'Frau Weiß soll das Reisebüro anrufen.', qTr: tr('Mrs Weiß should call the travel agency.', 'Madame Weiß doit appeler l\'agence de voyages.'), answer: true, explain: tr('"Rufen Sie uns bitte an."', '« Rufen Sie uns bitte an. »') },
        ] },
      { id: 'telc-a1-2-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l\'annonce a ou l\'annonce b.'), texts: [
          { id: 'a1', de: 'a) Fernbus nach Berlin\ntäglich\nnur 19 Euro\n\nb) ICE nach Berlin\nschnell und bequem\nab 39 Euro', tr: tr('a) Coach to Berlin\ndaily\nonly 19 euros\n\nb) ICE train to Berlin\nfast and comfortable\nfrom 39 euros', 'a) Autocar pour Berlin\ntous les jours\nseulement 19 euros\n\nb) ICE pour Berlin\nrapide et confortable\nà partir de 39 euros') },
          { id: 'a2', de: 'a) Pension Rose\nZimmer 55 Euro\nFrühstück 8 Euro extra\n\nb) Hotel Linde\nZimmer 65 Euro\nFrühstück inklusive', tr: tr('a) Pension Rose\nRoom 55 euros\nBreakfast 8 euros extra\n\nb) Hotel Linde\nRoom 65 euros\nBreakfast included', 'a) Pension Rose\nChambre 55 euros\nPetit-déjeuner 8 euros en plus\n\nb) Hôtel Linde\nChambre 65 euros\nPetit-déjeuner inclus') },
          { id: 'a3', de: 'a) Stadtführung\nMo–Sa um 10 Uhr\nTreffpunkt: Hauptbahnhof\n\nb) Stadtführung\njeden Sonntag um 11 Uhr\nTreffpunkt: Rathaus', tr: tr('a) City tour\nMon–Sat at 10 a.m.\nMeeting point: main station\n\nb) City tour\nevery Sunday at 11 a.m.\nMeeting point: town hall', 'a) Visite de la ville\nLun–sam à 10 h\nRendez-vous : gare centrale\n\nb) Visite de la ville\ntous les dimanches à 11 h\nRendez-vous : mairie') },
          { id: 'a4', de: 'a) Ferienhaus am See\n4 Personen\nHunde willkommen!\n\nb) Hotel Krone\nZentrum, Restaurant\nHaustiere leider nicht erlaubt', tr: tr('a) Holiday home by the lake\n4 people\nDogs welcome!\n\nb) Hotel Krone\ncity centre, restaurant\nunfortunately no pets allowed', 'a) Maison de vacances au bord du lac\n4 personnes\nChiens bienvenus !\n\nb) Hôtel Krone\ncentre-ville, restaurant\nmalheureusement animaux interdits') },
          { id: 'a5', de: 'a) Skikurse Alpenblick\nDezember bis März\nAnfänger willkommen\n\nb) Radtour am Bodensee\nApril bis Oktober\n7 Tage', tr: tr('a) Alpenblick ski courses\nDecember to March\nBeginners welcome\n\nb) Cycling tour at Lake Constance\nApril to October\n7 days', 'a) Cours de ski Alpenblick\nde décembre à mars\nDébutants bienvenus\n\nb) Randonnée à vélo au lac de Constance\nd\'avril à octobre\n7 jours') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Sie möchten nach Berlin fahren und wenig Geld ausgeben.', qTr: tr('You want to travel to Berlin and spend little money.', 'Vous voulez aller à Berlin et dépenser peu d\'argent.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The coach costs only 19 euros.', 'Le car ne coûte que 19 euros.') },
          { id: 'q7', textId: 'a2', q: 'Sie suchen ein Hotelzimmer. Das Frühstück soll im Preis inklusive sein.', qTr: tr('You are looking for a hotel room. Breakfast should be included in the price.', 'Vous cherchez une chambre d\'hôtel. Le petit-déjeuner doit être compris dans le prix.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('Hotel Linde: "Frühstück inklusive".', 'Hôtel Linde : « Frühstück inklusive ».') },
          { id: 'q8', textId: 'a3', q: 'Sie möchten am Sonntag eine Stadtführung machen.', qTr: tr('You want to take a city tour on Sunday.', 'Vous voulez faire une visite guidée de la ville dimanche.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('Ad b runs every Sunday.', 'L\'annonce b a lieu tous les dimanches.') },
          { id: 'q9', textId: 'a4', q: 'Sie reisen mit Ihrem Hund.', qTr: tr('You are travelling with your dog.', 'Vous voyagez avec votre chien.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('Dogs are welcome in the holiday home.', 'Les chiens sont les bienvenus dans la maison de vacances.') },
          { id: 'q10', textId: 'a5', q: 'Sie möchten im Winter Ski fahren lernen.', qTr: tr('You want to learn to ski in winter.', 'Vous voulez apprendre à skier en hiver.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('Ski courses, December to March, beginners welcome.', 'Cours de ski, de décembre à mars, débutants bienvenus.') },
        ] },
      { id: 'telc-a1-2-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Fahrkarten bitte\nvor der Fahrt entwerten!', tr: tr('Please validate\ntickets before the journey!', 'Veuillez composter\nvos billets avant le départ !') },
          { id: 's2', de: 'Gleis 3\nZug nach München\nAbfahrt 14.20 Uhr\n+ 15 Minuten', tr: tr('Platform 3\nTrain to Munich\nDeparture 2.20 p.m.\n+ 15 minutes', 'Voie 3\nTrain pour Munich\nDépart 14 h 20\n+ 15 minutes') },
          { id: 's3', de: 'Rezeption\nrund um die Uhr geöffnet', tr: tr('Reception\nopen around the clock', 'Réception\nouverte 24 h sur 24') },
          { id: 's4', de: 'Frühstücksraum\n7–10 Uhr', tr: tr('Breakfast room\n7–10 a.m.', 'Salle du petit-déjeuner\n7 h–10 h') },
          { id: 's5', de: 'WLAN gratis für Hotelgäste\nPasswort an der Rezeption', tr: tr('Free Wi-Fi for hotel guests\nPassword at reception', 'Wi-Fi gratuit pour les clients de l\'hôtel\nMot de passe à la réception') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Man muss die Fahrkarte vor der Fahrt stempeln.', qTr: tr('You have to stamp your ticket before the journey.', 'Il faut composter son billet avant le départ.'), answer: true, explain: tr('"entwerten" = validate/stamp.', '« entwerten » = composter.') },
          { id: 'q12', textId: 's2', q: 'Der Zug nach München fährt pünktlich ab.', qTr: tr('The train to Munich leaves on time.', 'Le train pour Munich part à l\'heure.'), answer: false, explain: tr('"+ 15 Minuten" means a 15-minute delay.', '« + 15 Minuten » signifie 15 minutes de retard.') },
          { id: 'q13', textId: 's3', q: 'Die Rezeption ist nachts geschlossen.', qTr: tr('Reception is closed at night.', 'La réception est fermée la nuit.'), answer: false, explain: tr('"rund um die Uhr" = 24 hours.', '« rund um die Uhr » = 24 heures sur 24.') },
          { id: 'q14', textId: 's4', q: 'Man kann um 9 Uhr frühstücken.', qTr: tr('You can have breakfast at 9 a.m.', 'On peut prendre le petit-déjeuner à 9 h.'), answer: true, explain: tr('9 is between 7 and 10.', '9 h est entre 7 h et 10 h.') },
          { id: 'q15', textId: 's5', q: 'Das Passwort bekommt man an der Rezeption.', qTr: tr('You get the password at reception.', 'On obtient le mot de passe à la réception.'), answer: true, explain: tr('"Passwort an der Rezeption".', '« Passwort an der Rezeption ».') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-2-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten ein Hotelzimmer buchen. Ihr Freund liest Ihre Daten vor. Füllen Sie das Anmeldeformular aus.',
        instructionTr: tr(
          'You want to book a hotel room. Your friend reads out your details. Fill in the registration form.',
          'Vous voulez réserver une chambre d\'hôtel. Votre ami lit vos informations. Remplissez le formulaire d\'inscription.',
        ),
        source: {
          id: 'info',
          de: 'Mein Name ist Mariam Diallo. Ich möchte am 12. Juli kommen und drei Nächte bleiben. Ich brauche ein Einzelzimmer. Ich komme mit dem Zug.',
          tr: tr(
            'My name is Mariam Diallo. I would like to arrive on 12 July and stay three nights. I need a single room. I am coming by train.',
            'Je m\'appelle Mariam Diallo. Je voudrais arriver le 12 juillet et rester trois nuits. J\'ai besoin d\'une chambre simple. Je viens en train.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Diallo'] },
          { id: 'f2', label: 'Vorname', labelTr: tr('First name', 'Prénom'), accept: ['Mariam'] },
          { id: 'f3', label: 'Anreise (Datum)', labelTr: tr('Arrival (date)', 'Arrivée (date)'), accept: ['12.07.', '12.7.', '12.07', '12. Juli', '12 Juli', '12.Juli'] },
          { id: 'f4', label: 'Anzahl der Nächte', labelTr: tr('Number of nights', 'Nombre de nuits'), accept: ['3', 'drei', '3 Nächte', 'drei Nächte'] },
          { id: 'f5', label: 'Zimmer', labelTr: tr('Room', 'Chambre'), accept: ['Einzelzimmer', 'ein Einzelzimmer'] },
        ],
      },
      {
        id: 'telc-a1-2-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie haben im Hotel Sonnenblick ein Zimmer gebucht. Schreiben Sie dem Hotel eine E-Mail (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'You have booked a room at Hotel Sonnenblick. Write the hotel an e-mail (about 30 words). Write about all three points.',
          'Vous avez réservé une chambre à l\'hôtel Sonnenblick. Écrivez un e-mail à l\'hôtel (environ 30 mots). Traitez les trois points.',
        ),
        points: [
          { id: 'p1', de: 'Buchung', tr: tr('Your booking', 'Votre réservation'), keywords: ['gebucht', 'reserv', 'zimmer'] },
          { id: 'p2', de: 'Späte Ankunft', tr: tr('Late arrival', 'Arrivée tardive'), keywords: ['spät', 'erst', 'uhr', 'ankunft', 'komme'] },
          { id: 'p3', de: 'Frage: Parkplatz', tr: tr('Question: car park', 'Question : parking'), keywords: ['parkplatz', 'parken', 'garage'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Sehr geehrte Damen und Herren,\n\nich habe ein Zimmer für den 12. Juli gebucht. Ich komme leider erst um 22 Uhr an. Gibt es einen Parkplatz am Hotel?\n\nMit freundlichen Grüßen\nMariam Diallo',
          tr: tr(
            'Dear Sir or Madam,\n\nI have booked a room for 12 July. Unfortunately I will only arrive at 10 p.m. Is there a car park at the hotel?\n\nYours faithfully\nMariam Diallo',
            'Mesdames, Messieurs,\n\nj\'ai réservé une chambre pour le 12 juillet. Malheureusement, je n\'arriverai qu\'à 22 h. Y a-t-il un parking à l\'hôtel ?\n\nCordialement\nMariam Diallo',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-2-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Alter, Land, Wohnort, Familie, Beruf.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, age, country, town, family, job.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, âge, pays, ville, famille, profession.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Guten Tag, ich bin Fatou Sow. Sow schreibt man S-O-W.', sampleTr: tr('Hello, I am Fatou Sow. Sow is spelled S-O-W.', 'Bonjour, je suis Fatou Sow. Sow s\'écrit S-O-W.') },
          { id: 'p1b', cue: 'Alter', cueTr: tr('Age', 'Âge'), sample: 'Ich bin 31 Jahre alt. Mein Geburtstag ist im Mai.', sampleTr: tr('I am 31 years old. My birthday is in May.', 'J\'ai 31 ans. Mon anniversaire est en mai.') },
          { id: 'p1c', cue: 'Land', cueTr: tr('Country', 'Pays'), sample: 'Ich komme aus dem Senegal. Meine Stadt heißt Dakar.', sampleTr: tr('I come from Senegal. My city is called Dakar.', 'Je viens du Sénégal. Ma ville s\'appelle Dakar.') },
          { id: 'p1d', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Seit einem Jahr wohne ich in Berlin. Die Stadt gefällt mir.', sampleTr: tr('I have been living in Berlin for a year. I like the city.', 'J\'habite à Berlin depuis un an. La ville me plaît.') },
          { id: 'p1e', cue: 'Familie', cueTr: tr('Family', 'Famille'), sample: 'Ich bin verheiratet und habe zwei Kinder. Sie gehen noch zur Schule.', sampleTr: tr('I am married and have two children. They still go to school.', 'Je suis mariée et j\'ai deux enfants. Ils vont encore à l\'école.') },
          { id: 'p1f', cue: 'Beruf', cueTr: tr('Job', 'Profession'), sample: 'Ich arbeite als Krankenschwester in einem Krankenhaus.', sampleTr: tr('I work as a nurse in a hospital.', 'Je travaille comme infirmière dans un hôpital.') },
        ],
      },
      {
        id: 'telc-a1-2-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Reisen. Sie ziehen eine Wortkarte. Stellen Sie Ihrem Partner eine Frage. Er antwortet. Dann tauschen Sie.',
        instructionTr: tr('Topic: travel. You draw a word card. Ask your partner a question. They answer. Then you swap.', 'Thème : voyages. Vous tirez une carte-mot. Posez une question à votre partenaire. Il répond. Puis vous échangez.'),
        prompts: [
          { id: 'p2a', cue: 'Urlaub', cueTr: tr('Holiday', 'Vacances'), sample: 'Wohin fährst du im Urlaub? – Ich fahre nach Italien.', sampleTr: tr('Where are you going on holiday? – I am going to Italy.', 'Où pars-tu en vacances ? – Je vais en Italie.'), tip: tr('Wohin? asks about a direction.', 'Wohin ? interroge sur la direction.') },
          { id: 'p2b', cue: 'Zug', cueTr: tr('Train', 'Train'), sample: 'Fährst du gern mit dem Zug? – Ja, das ist bequem.', sampleTr: tr('Do you like travelling by train? – Yes, it is comfortable.', 'Aimes-tu voyager en train ? – Oui, c\'est confortable.') },
          { id: 'p2c', cue: 'Hotel', cueTr: tr('Hotel', 'Hôtel'), sample: 'Wie viel kostet dein Hotel? – Ein Zimmer kostet 60 Euro pro Nacht.', sampleTr: tr('How much does your hotel cost? – A room costs 60 euros a night.', 'Combien coûte ton hôtel ? – Une chambre coûte 60 euros la nuit.') },
          { id: 'p2d', cue: 'Wetter', cueTr: tr('Weather', 'Météo'), sample: 'Wie ist das Wetter im Sommer? – Es ist heiß und trocken.', sampleTr: tr('What is the weather like in summer? – It is hot and dry.', 'Quel temps fait-il en été ? – Il fait chaud et sec.') },
          { id: 'p2e', cue: 'Koffer', cueTr: tr('Suitcase', 'Valise'), sample: 'Was nimmst du im Koffer mit? – Kleidung, Schuhe und ein Buch.', sampleTr: tr('What are you taking in your suitcase? – Clothes, shoes and a book.', 'Qu\'emportes-tu dans ta valise ? – Des vêtements, des chaussures et un livre.') },
        ],
      },
      {
        id: 'telc-a1-2-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. Your partner reacts.', 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: ein schwerer Koffer', cueTr: tr('Picture: a heavy suitcase', 'Image : une valise lourde'), sample: 'Können Sie mir bitte mit dem Koffer helfen? – Ja, gerne.', sampleTr: tr('Can you help me with the suitcase, please? – Yes, gladly.', 'Pouvez-vous m\'aider avec la valise, s\'il vous plaît ? – Oui, volontiers.'), tip: tr('"helfen" takes the dative: mir.', '« helfen » se construit avec le datif : mir.') },
          { id: 'p3b', cue: 'Bild: ein Stadtplan', cueTr: tr('Picture: a city map', 'Image : un plan de la ville'), sample: 'Haben Sie bitte einen Stadtplan für mich? – Ja, hier.', sampleTr: tr('Do you have a city map for me, please? – Yes, here.', 'Avez-vous un plan de la ville pour moi, s\'il vous plaît ? – Oui, voilà.') },
          { id: 'p3c', cue: 'Bild: ein geschlossenes Fenster im heißen Zimmer', cueTr: tr('Picture: a closed window in a hot room', 'Image : une fenêtre fermée dans une pièce chaude'), sample: 'Kann ich bitte das Fenster aufmachen? – Ja, kein Problem.', sampleTr: tr('May I open the window, please? – Yes, no problem.', 'Puis-je ouvrir la fenêtre, s\'il vous plaît ? – Oui, pas de problème.') },
          { id: 'p3d', cue: 'Bild: eine Fahrkarte nach Hamburg', cueTr: tr('Picture: a ticket to Hamburg', 'Image : un billet pour Hambourg'), sample: 'Eine Fahrkarte nach Hamburg, bitte. – Das macht 35 Euro.', sampleTr: tr('A ticket to Hamburg, please. – That is 35 euros.', 'Un billet pour Hambourg, s\'il vous plaît. – Ça fait 35 euros.') },
          { id: 'p3e', cue: 'Bild: ein Schlüssel', cueTr: tr('Picture: a key', 'Image : une clé'), sample: 'Ich brauche bitte den Schlüssel für Zimmer 12. – Hier, bitte schön.', sampleTr: tr('I need the key for room 12, please. – Here you are.', 'J\'ai besoin de la clé de la chambre 12, s\'il vous plaît. – Voilà.') },
        ],
      },
    ],
  },

  // ───────────────────────── Set 3: Kurs, Arzt, Geburtstag ─────────────────────────
  {
    id: 'telc-a1-3',
    board: 'telc',
    level: 'A1',
    number: 3,
    lesen: [
      { id: 'telc-a1-3-l1', teil: 1, kind: 'trueFalse', labels: 'rf', title: 'Teil 1', instruction: 'Lesen Sie die kurzen E-Mails und Notizen. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the short e-mails and notes. Are the sentences true or false? Tick the answer.', 'Lisez les courts e-mails et notes. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 'm1', de: 'Lieber Herr Schulz,\nIhr Termin beim Zahnarzt ist am Dienstag um 10.30 Uhr. Bitte bringen Sie Ihre Versichertenkarte mit.\nPraxis Dr. Kern', tr: tr('Dear Mr Schulz,\nyour dentist appointment is on Tuesday at 10.30 a.m. Please bring your health insurance card.\nDr Kern\'s practice', 'Cher Monsieur Schulz,\nvotre rendez-vous chez le dentiste est mardi à 10 h 30. Apportez votre carte d\'assurance maladie, s\'il vous plaît.\nCabinet du Dr Kern') },
          { id: 'm2', de: 'Hallo Lena,\nich habe am Samstag Geburtstag und möchte mit dir feiern. Die Party beginnt um 19 Uhr bei mir. Sag bitte bis Mittwoch zu oder ab.\nKarim', tr: tr('Hi Lena,\nit is my birthday on Saturday and I would like to celebrate with you. The party starts at 7 p.m. at my place. Please say yes or no by Wednesday.\nKarim', 'Salut Lena,\nc\'est mon anniversaire samedi et je voudrais le fêter avec toi. La fête commence à 19 h chez moi. Dis-moi oui ou non avant mercredi.\nKarim') },
          { id: 'm3', de: 'Liebe Eltern,\nam Mittwoch gibt es keinen Unterricht, denn die Lehrer haben eine Konferenz. Die Kinder bleiben zu Hause.\nDie Schulleitung', tr: tr('Dear parents,\nthere are no lessons on Wednesday because the teachers have a conference. The children stay at home.\nThe school management', 'Chers parents,\nil n\'y a pas de cours mercredi, car les enseignants ont une conférence. Les enfants restent à la maison.\nLa direction') },
          { id: 'm4', de: 'Hallo Sofia,\nder Deutschkurs beginnt am 3. Oktober. Er ist jeden Montag und Mittwoch von 18 bis 19.30 Uhr. Das Buch kostet 24 Euro.\nBis bald\nMarta', tr: tr('Hi Sofia,\nthe German course starts on 3 October. It is every Monday and Wednesday from 6 to 7.30 p.m. The book costs 24 euros.\nSee you soon\nMarta', 'Salut Sofia,\nle cours d\'allemand commence le 3 octobre. Il a lieu chaque lundi et mercredi de 18 h à 19 h 30. Le livre coûte 24 euros.\nÀ bientôt\nMarta') },
          { id: 'm5', de: 'Hallo Tim,\nich bin beim Arzt. Ich habe Fieber. Ich komme morgen nicht zur Arbeit.\nGruß\nPia', tr: tr('Hi Tim,\nI am at the doctor\'s. I have a fever. I am not coming to work tomorrow.\nBest\nPia', 'Salut Tim,\nje suis chez le médecin. J\'ai de la fièvre. Je ne viens pas travailler demain.\nSalut\nPia') },
        ], items: [
          { id: 'q1', textId: 'm1', q: 'Herr Schulz hat am Dienstag einen Termin.', qTr: tr('Mr Schulz has an appointment on Tuesday.', 'Monsieur Schulz a un rendez-vous mardi.'), answer: true, explain: tr('"Ihr Termin … ist am Dienstag um 10.30 Uhr."', '« Ihr Termin … ist am Dienstag um 10.30 Uhr. »') },
          { id: 'q2', textId: 'm2', q: 'Die Party ist am Sonntag.', qTr: tr('The party is on Sunday.', 'La fête a lieu dimanche.'), answer: false, explain: tr('Karim\'s birthday is on Saturday.', 'L\'anniversaire de Karim est samedi.') },
          { id: 'q3', textId: 'm3', q: 'Die Kinder haben am Mittwoch keine Schule.', qTr: tr('The children have no school on Wednesday.', 'Les enfants n\'ont pas école mercredi.'), answer: true, explain: tr('"Am Mittwoch gibt es keinen Unterricht."', '« Am Mittwoch gibt es keinen Unterricht. »') },
          { id: 'q4', textId: 'm4', q: 'Der Kurs ist zweimal pro Woche.', qTr: tr('The course is twice a week.', 'Le cours a lieu deux fois par semaine.'), answer: true, explain: tr('Monday and Wednesday.', 'Lundi et mercredi.') },
          { id: 'q5', textId: 'm5', q: 'Pia arbeitet morgen.', qTr: tr('Pia is working tomorrow.', 'Pia travaille demain.'), answer: false, explain: tr('"Ich komme morgen nicht zur Arbeit."', '« Ich komme morgen nicht zur Arbeit. »') },
        ] },
      { id: 'telc-a1-3-l2', teil: 2, kind: 'multipleChoice', title: 'Teil 2', instruction: 'Welche Anzeige ist interessant für Sie? Lesen Sie die Situationen und die Anzeigen a und b. Kreuzen Sie an: Anzeige a oder Anzeige b.', instructionTr: tr('Which ad is interesting for you? Read the situations and the ads a and b. Tick ad a or ad b.', 'Quelle annonce est intéressante pour vous ? Lisez les situations et les annonces a et b. Cochez l\'annonce a ou l\'annonce b.'), texts: [
          { id: 'a1', de: 'a) Praxis Dr. Berg\nSprechstunde Mo–Fr 8–12 Uhr\nHeute Nachmittag geschlossen\n\nb) Praxis Dr. Wolf\nHeute 15–18 Uhr\noffene Sprechstunde', tr: tr('a) Dr Berg\'s practice\nConsulting hours Mon–Fri 8 a.m.–12 noon\nClosed this afternoon\n\nb) Dr Wolf\'s practice\nToday 3–6 p.m.\nwalk-in consultation', 'a) Cabinet du Dr Berg\nConsultations lun–ven 8 h–12 h\nFermé cet après-midi\n\nb) Cabinet du Dr Wolf\nAujourd\'hui 15 h–18 h\nconsultation sans rendez-vous') },
          { id: 'a2', de: 'a) Blumenhaus Rosa\nSträuße ab 5 Euro\nauch Geschenke\n\nb) Elektro Meyer\nWaschmaschinen\nKühlschränke', tr: tr('a) Rosa flower shop\nBouquets from 5 euros\nalso gifts\n\nb) Meyer electrics\nWashing machines\nFridges', 'a) Fleuriste Rosa\nBouquets à partir de 5 euros\négalement des cadeaux\n\nb) Électro Meyer\nMachines à laver\nRéfrigérateurs') },
          { id: 'a3', de: 'a) Restaurant Zur Post\nTische für Gruppen\nbis 8 Personen\n\nb) Gasthaus Adler\nFeiersaal\nfür 10 bis 40 Personen', tr: tr('a) Zur Post restaurant\nTables for groups\nup to 8 people\n\nb) Adler inn\nParty room\nfor 10 to 40 people', 'a) Restaurant Zur Post\nTables pour groupes\njusqu\'à 8 personnes\n\nb) Auberge Adler\nSalle des fêtes\npour 10 à 40 personnes') },
          { id: 'a4', de: 'a) Musikschule\nGitarre für Kinder\nMo–Fr nachmittags\n\nb) Gitarrenkurs für Erwachsene\nSamstag 10–12 Uhr\nVolkshochschule', tr: tr('a) Music school\nGuitar for children\nMon–Fri afternoons\n\nb) Guitar course for adults\nSaturday 10 a.m.–12 noon\nAdult education centre', 'a) École de musique\nGuitare pour enfants\nlun–ven l\'après-midi\n\nb) Cours de guitare pour adultes\nSamedi 10 h–12 h\nUniversité populaire') },
          { id: 'a5', de: 'a) Kinderfahrrad, gebraucht\nfür Kinder ab 7 Jahren\n40 Euro\n\nb) Rennrad, neu\nsehr schnell\n900 Euro', tr: tr('a) Child\'s bike, second-hand\nfor children from 7 years\n40 euros\n\nb) Racing bike, new\nvery fast\n900 euros', 'a) Vélo d\'enfant d\'occasion\npour enfants à partir de 7 ans\n40 euros\n\nb) Vélo de course neuf\ntrès rapide\n900 euros') },
        ], items: [
          { id: 'q6', textId: 'a1', q: 'Sie haben Kopfschmerzen und möchten heute noch zum Arzt.', qTr: tr('You have a headache and want to see a doctor today.', 'Vous avez mal à la tête et voulez encore aller chez le médecin aujourd\'hui.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('Dr Wolf has a walk-in consultation this afternoon.', 'Le Dr Wolf reçoit sans rendez-vous cet après-midi.') },
          { id: 'q7', textId: 'a2', q: 'Sie möchten ein Geschenk für eine Freundin kaufen.', qTr: tr('You want to buy a present for a friend.', 'Vous voulez acheter un cadeau pour une amie.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The flower shop sells bouquets and gifts.', 'Le fleuriste vend des bouquets et des cadeaux.') },
          { id: 'q8', textId: 'a3', q: 'Sie möchten Ihren Geburtstag mit 10 Gästen feiern.', qTr: tr('You want to celebrate your birthday with 10 guests.', 'Vous voulez fêter votre anniversaire avec 10 invités.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('The party room is for 10 to 40 people.', 'La salle des fêtes accueille de 10 à 40 personnes.') },
          { id: 'q9', textId: 'a4', q: 'Sie möchten am Wochenende Gitarre lernen.', qTr: tr('You want to learn guitar at the weekend.', 'Vous voulez apprendre la guitare le week-end.'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 1, explain: tr('The course is on Saturday.', 'Le cours a lieu le samedi.') },
          { id: 'q10', textId: 'a5', q: 'Sie suchen ein günstiges Fahrrad für Ihr Kind (8 Jahre).', qTr: tr('You are looking for a cheap bike for your child (8 years).', 'Vous cherchez un vélo bon marché pour votre enfant (8 ans).'), options: [
              'Anzeige a',
              'Anzeige b',
            ], optionsTr: [
              tr('Ad a', 'Annonce a'),
              tr('Ad b', 'Annonce b'),
            ], answer: 0, explain: tr('The child\'s bike is for ages 7+ and costs 40 euros.', 'Le vélo d\'enfant convient dès 7 ans et coûte 40 euros.') },
        ] },
      { id: 'telc-a1-3-l3', teil: 3, kind: 'trueFalse', labels: 'rf', title: 'Teil 3', instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.', instructionTr: tr('Read the signs and notices. Are the sentences true or false? Tick the answer.', 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.'), texts: [
          { id: 's1', de: 'Praxis Dr. Kern\nBitte im Wartezimmer\nPlatz nehmen.', tr: tr('Dr Kern\'s practice\nPlease take a seat\nin the waiting room.', 'Cabinet du Dr Kern\nVeuillez vous asseoir\ndans la salle d\'attente.') },
          { id: 's2', de: 'Bitte leise sein!\nHier wird gelernt.', tr: tr('Please be quiet!\nPeople are studying here.', 'Silence, s\'il vous plaît !\nOn étudie ici.') },
          { id: 's3', de: 'Apotheke Mitte\nMo–Fr 8–18.30 Uhr\nNachts: Notdienst in der Apotheke Süd', tr: tr('Mitte pharmacy\nMon–Fri 8 a.m.–6.30 p.m.\nAt night: emergency service at Süd pharmacy', 'Pharmacie Mitte\nLun–ven 8 h–18 h 30\nLa nuit : service de garde à la pharmacie Süd') },
          { id: 's4', de: 'VHS-Kurse\nAnmeldung nur\nbis 20. September', tr: tr('Adult education courses\nRegistration only\nuntil 20 September', 'Cours de l\'université populaire\nInscription seulement\njusqu\'au 20 septembre') },
          { id: 's5', de: 'Geburtstagstorte\nbitte zwei Tage vorher bestellen!', tr: tr('Birthday cake\nplease order two days in advance!', 'Gâteau d\'anniversaire\nà commander deux jours à l\'avance !') },
        ], items: [
          { id: 'q11', textId: 's1', q: 'Man soll im Wartezimmer warten.', qTr: tr('You should wait in the waiting room.', 'Il faut attendre dans la salle d\'attente.'), answer: true, explain: tr('"Bitte im Wartezimmer Platz nehmen."', '« Bitte im Wartezimmer Platz nehmen. »') },
          { id: 'q12', textId: 's2', q: 'Hier muss man leise sein.', qTr: tr('You have to be quiet here.', 'Il faut être silencieux ici.'), answer: true, explain: tr('"Bitte leise sein!"', '« Bitte leise sein ! »') },
          { id: 'q13', textId: 's3', q: 'Nachts gibt es einen Notdienst.', qTr: tr('There is an emergency service at night.', 'La nuit, il y a un service de garde.'), answer: true, explain: tr('"Nachts: Notdienst".', '« Nachts : Notdienst ».') },
          { id: 'q14', textId: 's4', q: 'Im Oktober kann man sich noch anmelden.', qTr: tr('You can still register in October.', 'On peut encore s\'inscrire en octobre.'), answer: false, explain: tr('Registration ends on 20 September.', 'L\'inscription se termine le 20 septembre.') },
          { id: 'q15', textId: 's5', q: 'Man kann die Torte am gleichen Tag bestellen.', qTr: tr('You can order the cake on the same day.', 'On peut commander le gâteau le jour même.'), answer: false, explain: tr('It must be ordered two days in advance.', 'Il faut la commander deux jours à l\'avance.') },
        ] },
    ],
    schreiben: [
      {
        id: 'telc-a1-3-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie sind zum ersten Mal in einer Arztpraxis. Ihre Freundin liest Ihre Daten vor. Füllen Sie das Patientenformular aus.',
        instructionTr: tr(
          'It is your first time at a doctor\'s practice. Your friend reads out your details. Fill in the patient form.',
          'Vous êtes pour la première fois dans un cabinet médical. Votre amie lit vos informations. Remplissez la fiche patient.',
        ),
        source: {
          id: 'info',
          de: 'Ich heiße Ivan Petrov. Ich bin am 3. September 1985 geboren. Ich wohne im Lindenweg 4. Seit gestern habe ich Kopfschmerzen.',
          tr: tr(
            'My name is Ivan Petrov. I was born on 3 September 1985. I live at Lindenweg 4. Since yesterday I have had a headache.',
            'Je m\'appelle Ivan Petrov. Je suis né le 3 septembre 1985. J\'habite au 4 Lindenweg. Depuis hier, j\'ai mal à la tête.',
          ),
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: tr('Surname', 'Nom de famille'), accept: ['Petrov'] },
          { id: 'f2', label: 'Vorname', labelTr: tr('First name', 'Prénom'), accept: ['Ivan'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: tr('Date of birth', 'Date de naissance'), accept: ['03.09.1985', '3.9.1985', '3. September 1985', '3 September 1985'] },
          { id: 'f4', label: 'Straße und Hausnummer', labelTr: tr('Street and house number', 'Rue et numéro'), accept: ['Lindenweg 4', 'Lindenweg4', 'im Lindenweg 4'] },
          { id: 'f5', label: 'Beschwerden', labelTr: tr('Symptoms', 'Symptômes'), accept: ['Kopfschmerzen', 'Kopfschmerz'] },
        ],
      },
      {
        id: 'telc-a1-3-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie sind krank und können heute nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Lehrerin, Frau Schmidt, eine E-Mail (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: tr(
          'You are ill and cannot come to the German course today. Write an e-mail to your teacher, Mrs Schmidt (about 30 words). Write about all three points.',
          'Vous êtes malade et ne pouvez pas venir au cours d\'allemand aujourd\'hui. Écrivez un e-mail à votre enseignante, Mme Schmidt (environ 30 mots). Traitez les trois points.',
        ),
        points: [
          { id: 'p1', de: 'Grund: krank', tr: tr('Reason: ill', 'Raison : malade'), keywords: ['krank', 'leid', 'arzt'] },
          { id: 'p2', de: 'Wie lange', tr: tr('For how long', 'Pendant combien de temps'), keywords: ['bis', 'tage', 'woche', 'bleibe', 'wieder'] },
          { id: 'p3', de: 'Frage: Hausaufgabe', tr: tr('Question: homework', 'Question : devoirs'), keywords: ['hausaufgabe', 'aufgabe'] },
        ],
        minWords: 25, maxWords: 40,
        model: {
          de: 'Sehr geehrte Frau Schmidt,\n\nich bin leider krank und kann heute nicht zum Kurs kommen. Ich bleibe bis Freitag zu Hause. Was ist die Hausaufgabe?\n\nMit freundlichen Grüßen\nIvan Petrov',
          tr: tr(
            'Dear Mrs Schmidt,\n\nI am unfortunately ill and cannot come to the course today. I will stay at home until Friday. What is the homework?\n\nYours sincerely\nIvan Petrov',
            'Chère Madame Schmidt,\n\nje suis malheureusement malade et ne peux pas venir au cours aujourd\'hui. Je reste à la maison jusqu\'à vendredi. Quels sont les devoirs ?\n\nCordialement\nIvan Petrov',
          ),
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a1-3-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwortkarten helfen Ihnen: Name, Herkunft, Wohnort, Familie, Arbeit oder Schule, Hobby.',
        instructionTr: tr('Introduce yourself. The keyword cards help you: name, origin, town, family, work or school, hobby.', 'Présentez-vous. Les cartes-mots-clés vous aident : nom, origine, ville, famille, travail ou école, loisir.'),
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: tr('Name', 'Nom'), sample: 'Mein Name ist Ahmed Haddad. Ich buchstabiere: H-A-D-D-A-D.', sampleTr: tr('My name is Ahmed Haddad. I spell it: H-A-D-D-A-D.', 'Je m\'appelle Ahmed Haddad. J\'épelle : H-A-D-D-A-D.') },
          { id: 'p1b', cue: 'Herkunft', cueTr: tr('Origin', 'Origine'), sample: 'Ich bin in Algerien geboren, in Oran.', sampleTr: tr('I was born in Algeria, in Oran.', 'Je suis né en Algérie, à Oran.') },
          { id: 'p1c', cue: 'Wohnort', cueTr: tr('Town', 'Ville'), sample: 'Ich wohne in München in einer kleinen Wohnung mit meinem Bruder.', sampleTr: tr('I live in Munich in a small flat with my brother.', 'J\'habite à Munich dans un petit appartement avec mon frère.') },
          { id: 'p1d', cue: 'Familie', cueTr: tr('Family', 'Famille'), sample: 'Meine Eltern leben in Algerien. Ich habe zwei Brüder und eine Schwester.', sampleTr: tr('My parents live in Algeria. I have two brothers and one sister.', 'Mes parents vivent en Algérie. J\'ai deux frères et une sœur.') },
          { id: 'p1e', cue: 'Arbeit oder Schule', cueTr: tr('Work or school', 'Travail ou école'), sample: 'Ich arbeite in einem Restaurant und besuche abends einen Deutschkurs.', sampleTr: tr('I work in a restaurant and attend a German course in the evening.', 'Je travaille dans un restaurant et je suis un cours d\'allemand le soir.') },
          { id: 'p1f', cue: 'Hobby', cueTr: tr('Hobby', 'Loisir'), sample: 'Mein Hobby ist Kochen. Ich koche gern für meine Freunde.', sampleTr: tr('My hobby is cooking. I like cooking for my friends.', 'Mon loisir est la cuisine. J\'aime cuisiner pour mes amis.') },
        ],
      },
      {
        id: 'telc-a1-3-p2', teil: 2, title: 'Teil 2: Um Informationen bitten und Informationen geben', minutes: 4,
        instruction: 'Thema: Familie und Alltag. Sie ziehen eine Wortkarte. Stellen Sie Ihrem Partner eine Frage. Er antwortet. Dann tauschen Sie.',
        instructionTr: tr('Topic: family and daily life. You draw a word card. Ask your partner a question. They answer. Then you swap.', 'Thème : famille et vie quotidienne. Vous tirez une carte-mot. Posez une question à votre partenaire. Il répond. Puis vous échangez.'),
        prompts: [
          { id: 'p2a', cue: 'Geburtstag', cueTr: tr('Birthday', 'Anniversaire'), sample: 'Wann hast du Geburtstag? – Am 14. April.', sampleTr: tr('When is your birthday? – On 14 April.', 'Quand est ton anniversaire ? – Le 14 avril.'), tip: tr('Dates: "am" + ordinal number + month.', 'Dates : « am » + nombre ordinal + mois.') },
          { id: 'p2b', cue: 'Familie', cueTr: tr('Family', 'Famille'), sample: 'Hast du Geschwister? – Ja, ich habe einen Bruder.', sampleTr: tr('Do you have siblings? – Yes, I have a brother.', 'As-tu des frères et sœurs ? – Oui, j\'ai un frère.') },
          { id: 'p2c', cue: 'Schule', cueTr: tr('School', 'École'), sample: 'Wo lernst du Deutsch? – In der Sprachschule im Zentrum.', sampleTr: tr('Where do you learn German? – At the language school in the centre.', 'Où apprends-tu l\'allemand ? – À l\'école de langues du centre.') },
          { id: 'p2d', cue: 'Arzt', cueTr: tr('Doctor', 'Médecin'), sample: 'Wann geht man zum Arzt? – Wenn man krank ist.', sampleTr: tr('When do you go to the doctor? – When you are ill.', 'Quand va-t-on chez le médecin ? – Quand on est malade.') },
          { id: 'p2e', cue: 'Haustier', cueTr: tr('Pet', 'Animal de compagnie'), sample: 'Hast du ein Haustier? – Ja, eine Katze. Sie heißt Mimi.', sampleTr: tr('Do you have a pet? – Yes, a cat. She is called Mimi.', 'As-tu un animal ? – Oui, un chat. Elle s\'appelle Mimi.') },
        ],
      },
      {
        id: 'telc-a1-3-p3', teil: 3, title: 'Teil 3: Bitten formulieren und darauf reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: tr('You draw a picture card. Make a request. Your partner reacts.', 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.'),
        prompts: [
          { id: 'p3a', cue: 'Bild: eine Speisekarte', cueTr: tr('Picture: a menu', 'Image : une carte de restaurant'), sample: 'Die Speisekarte, bitte. – Sofort, einen Moment.', sampleTr: tr('The menu, please. – Right away, one moment.', 'La carte, s\'il vous plaît. – Tout de suite, un instant.'), tip: tr('A short form is fine: "…, bitte."', 'Une forme courte suffit : « …, bitte. »') },
          { id: 'p3b', cue: 'Bild: Sie verstehen den Lehrer nicht', cueTr: tr('Picture: you do not understand the teacher', 'Image : vous ne comprenez pas l\'enseignant'), sample: 'Können Sie das bitte wiederholen? – Ja, gern. Noch einmal.', sampleTr: tr('Can you repeat that, please? – Yes, gladly. Once more.', 'Pouvez-vous répéter, s\'il vous plaît ? – Oui, volontiers. Encore une fois.') },
          { id: 'p3c', cue: 'Bild: Sie wollen bezahlen', cueTr: tr('Picture: you want to pay', 'Image : vous voulez payer'), sample: 'Die Rechnung, bitte. – Das macht 18 Euro.', sampleTr: tr('The bill, please. – That is 18 euros.', 'L\'addition, s\'il vous plaît. – Ça fait 18 euros.') },
          { id: 'p3d', cue: 'Bild: ein Stift und ein Blatt Papier', cueTr: tr('Picture: a pen and a sheet of paper', 'Image : un stylo et une feuille de papier'), sample: 'Haben Sie bitte einen Stift und Papier für mich? – Ja, hier.', sampleTr: tr('Do you have a pen and paper for me, please? – Yes, here.', 'Avez-vous un stylo et du papier pour moi, s\'il vous plaît ? – Oui, voilà.') },
          { id: 'p3e', cue: 'Bild: Jemand spricht sehr leise', cueTr: tr('Picture: someone is speaking very quietly', 'Image : quelqu\'un parle très doucement'), sample: 'Sprechen Sie bitte lauter. Ich höre Sie nicht gut. – Entschuldigung, ja.', sampleTr: tr('Please speak louder. I cannot hear you well. – Sorry, yes.', 'Parlez plus fort, s\'il vous plaît. Je ne vous entends pas bien. – Excusez-moi, oui.') },
        ],
      },
    ],
  },
];

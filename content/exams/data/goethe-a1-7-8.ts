import type { ExamSetInput } from '../types';

// Original practice material modelled on the Goethe-Zertifikat A1 format. Not an official paper.
export const GOETHE_A1_7_8: ExamSetInput[] = [
  {
    id: 'goethe-a1-7',
    board: 'goethe',
    level: 'A1',
    number: 7,
    lesen: [
      {
        id: 'goethe-a1-7-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Ich mache Sport!',
          de: "Hallo Sara,\n\nich habe eine gute Nachricht: Ich mache jetzt Sport! Jeden Dienstag und Donnerstag gehe ich um 18 Uhr ins Fitnessstudio „Power“. Es ist nicht weit, nur zehn Minuten zu Fuß. Die Mitgliedschaft kostet 35 Euro im Monat.\n\nAm Samstag spiele ich mit Freunden Volleyball im Stadtpark. Möchtest du mitspielen? Wir treffen uns um 15 Uhr am Brunnen. Bring bitte etwas zu trinken mit.\n\nViele Grüße\nPaul",
          tr: {
            en: "Subject: I'm doing sport!\n\nHi Sara,\n\nI have good news: I am doing sport now! Every Tuesday and Thursday I go to the “Power” gym at 6 p.m. It is not far, only ten minutes on foot. The membership costs 35 euros a month.\n\nOn Saturday I am playing volleyball with friends in the city park. Would you like to join in? We are meeting at 3 p.m. at the fountain. Please bring something to drink.\n\nBest wishes\nPaul",
            fr: "Objet : Je fais du sport !\n\nSalut Sara,\n\nj'ai une bonne nouvelle : je fais du sport maintenant ! Tous les mardis et jeudis, je vais à 18 h à la salle de sport « Power ». Ce n'est pas loin, seulement dix minutes à pied. L'abonnement coûte 35 euros par mois.\n\nSamedi, je joue au volley avec des amis dans le parc de la ville. Tu veux jouer avec nous ? On se retrouve à 15 h près de la fontaine. Apporte quelque chose à boire, s'il te plaît.\n\nAmitiés\nPaul",
          },
        }],
        items: [
          { id: 'q1', q: 'Paul geht zweimal in der Woche ins Fitnessstudio.', qTr: { en: 'Paul goes to the gym twice a week.', fr: "Paul va à la salle de sport deux fois par semaine." }, answer: true, explain: { en: '"Jeden Dienstag und Donnerstag" = two days a week.', fr: '« Jeden Dienstag und Donnerstag » = deux jours par semaine.' } },
          { id: 'q2', q: 'Das Fitnessstudio ist weit weg.', qTr: { en: 'The gym is far away.', fr: 'La salle de sport est loin.' }, answer: false, explain: { en: '"Es ist nicht weit, nur zehn Minuten zu Fuß."', fr: '« Es ist nicht weit, nur zehn Minuten zu Fuß. »' } },
          { id: 'q3', q: 'Paul spielt am Samstag Volleyball.', qTr: { en: 'Paul plays volleyball on Saturday.', fr: 'Paul joue au volley samedi.' }, answer: true, explain: { en: '"Am Samstag spiele ich mit Freunden Volleyball."', fr: '« Am Samstag spiele ich mit Freunden Volleyball. »' } },
          { id: 'q4', q: 'Sara soll einen Ball mitbringen.', qTr: { en: 'Sara should bring a ball.', fr: 'Sara doit apporter un ballon.' }, answer: false, explain: { en: 'Sara should bring something to drink ("etwas zu trinken"), not a ball.', fr: "Sara doit apporter quelque chose à boire (« etwas zu trinken »), pas un ballon." } },
          { id: 'q5', q: 'Sara und Paul treffen sich um 15 Uhr am Brunnen.', qTr: { en: 'Sara and Paul meet at 3 p.m. at the fountain.', fr: 'Sara et Paul se retrouvent à 15 h près de la fontaine.' }, answer: true, explain: { en: '"Wir treffen uns um 15 Uhr am Brunnen."', fr: '« Wir treffen uns um 15 Uhr am Brunnen. »' } },
        ],
      },
      {
        id: 'goethe-a1-7-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: 'p1', title: 'Anzeigen 1', de: "Anzeige a\nSchwimmkurs für Kinder\nSamstag, 10–12 Uhr\nHallenbad Aqua\n\nAnzeige b\nFrühschwimmen\nMo–Fr, 6–8 Uhr\nHallenbad Aqua, nur 3 Euro", tr: { en: "Ad a\nSwimming course for children\nSaturday, 10 a.m.–12 noon\nAqua indoor pool\n\nAd b\nEarly-morning swimming\nMon–Fri, 6–8 a.m.\nAqua indoor pool, only 3 euros", fr: "Annonce a\nCours de natation pour enfants\nSamedi, 10 h–12 h\nPiscine couverte Aqua\n\nAnnonce b\nNatation du petit matin\nLun–ven, 6 h–8 h\nPiscine couverte Aqua, seulement 3 euros" } },
          { id: 'p2', title: 'Anzeigen 2', de: "Anzeige a\nNachhilfe in Mathe gesucht\n2-mal pro Woche, 12 Euro pro Stunde\n\nAnzeige b\nPizzabote gesucht\nAbends, 18–22 Uhr\nBitte mit eigenem Fahrrad", tr: { en: "Ad a\nMaths tutor wanted\nTwice a week, 12 euros per hour\n\nAd b\nPizza delivery person wanted\nEvenings, 6–10 p.m.\nWith your own bicycle, please", fr: "Annonce a\nProfesseur de maths recherché\n2 fois par semaine, 12 euros de l'heure\n\nAnnonce b\nLivreur de pizzas recherché\nLe soir, 18 h–22 h\nAvec son propre vélo, s'il vous plaît" } },
          { id: 'p3', title: 'Anzeigen 3', de: "Anzeige a\nYoga für Fortgeschrittene\nMittwoch, 19 Uhr\n8 Abende, 40 Euro\n\nAnzeige b\nYoga für Anfänger\nMittwoch, 19 Uhr\n8 Abende, 40 Euro", tr: { en: "Ad a\nYoga for advanced students\nWednesday, 7 p.m.\n8 evenings, 40 euros\n\nAd b\nYoga for beginners\nWednesday, 7 p.m.\n8 evenings, 40 euros", fr: "Annonce a\nYoga pour avancés\nMercredi, 19 h\n8 soirées, 40 euros\n\nAnnonce b\nYoga pour débutants\nMercredi, 19 h\n8 soirées, 40 euros" } },
          { id: 'p4', title: 'Anzeigen 4', de: "Anzeige a\nSportgeschäft Tempo\nLaufschuhe heute nur 40 Euro!\n\nAnzeige b\nSportgeschäft Tempo\nNeue Laufschuhe ab 90 Euro\nGroße Auswahl", tr: { en: "Ad a\nTempo sports shop\nRunning shoes only 40 euros today!\n\nAd b\nTempo sports shop\nNew running shoes from 90 euros\nWide choice", fr: "Annonce a\nMagasin de sport Tempo\nChaussures de course aujourd'hui seulement 40 euros !\n\nAnnonce b\nMagasin de sport Tempo\nChaussures de course neuves à partir de 90 euros\nGrand choix" } },
          { id: 'p5', title: 'Anzeigen 5', de: "Anzeige a\nFC Nord sucht Spieler\nTraining: Mo und Mi, 18 Uhr\nSportplatz Nord\n\nAnzeige b\nFußballspiel: FC Nord – FC Süd\nSamstag, 15 Uhr\nEintritt 5 Euro", tr: { en: "Ad a\nFC Nord is looking for players\nTraining: Mon and Wed, 6 p.m.\nNorth sports ground\n\nAd b\nFootball match: FC Nord – FC Süd\nSaturday, 3 p.m.\nAdmission 5 euros", fr: "Annonce a\nLe FC Nord cherche des joueurs\nEntraînement : lun et mer, 18 h\nTerrain de sport Nord\n\nAnnonce b\nMatch de football : FC Nord – FC Süd\nSamedi, 15 h\nEntrée 5 euros" } },
        ],
        items: [
          { id: 'q6', textId: 'p1', q: 'Sie möchten vor der Arbeit schwimmen gehen. Wo finden Sie die Information?', qTr: { en: 'You want to go swimming before work. Where do you find the information?', fr: "Vous voulez aller nager avant le travail. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b: swimming from 6 to 8 in the morning, Monday to Friday. Ad a is a Saturday course for children.', fr: "Annonce b : natation de 6 h à 8 h du lundi au vendredi. L'annonce a est un cours pour enfants le samedi." } },
          { id: 'q7', textId: 'p2', q: 'Sie sind gut in Mathe und möchten damit Geld verdienen. Wo finden Sie die Information?', qTr: { en: 'You are good at maths and want to earn money with it. Where do you find the information?', fr: "Vous êtes bon en maths et voulez gagner de l'argent avec ça. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'Ad a: a maths tutor is wanted, 12 euros per hour.', fr: "Annonce a : on cherche un professeur de maths, 12 euros de l'heure." } },
          { id: 'q8', textId: 'p3', q: 'Sie haben noch nie Yoga gemacht. Wo finden Sie die Information?', qTr: { en: 'You have never done yoga. Where do you find the information?', fr: "Vous n'avez jamais fait de yoga. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b is for beginners ("Anfänger"); ad a is for advanced students.', fr: "L'annonce b est pour les débutants (« Anfänger ») ; l'annonce a est pour les avancés." } },
          { id: 'q9', textId: 'p4', q: 'Sie möchten heute billige Laufschuhe kaufen. Wo finden Sie die Information?', qTr: { en: 'You want to buy cheap running shoes today. Where do you find the information?', fr: "Vous voulez acheter aujourd'hui des chaussures de course bon marché. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'Ad a: running shoes today for only 40 euros. Ad b starts at 90 euros.', fr: "Annonce a : chaussures de course aujourd'hui pour seulement 40 euros. L'annonce b commence à 90 euros." } },
          { id: 'q10', textId: 'p5', q: 'Sie möchten am Samstag ein Fußballspiel sehen. Wo finden Sie die Information?', qTr: { en: 'You want to watch a football match on Saturday. Where do you find the information?', fr: "Vous voulez regarder un match de football samedi. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b is a match on Saturday at 3 p.m. Ad a is about training for players.', fr: "L'annonce b est un match samedi à 15 h. L'annonce a concerne l'entraînement des joueurs." } },
        ],
      },
      {
        id: 'goethe-a1-7-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: 's1', de: "Fitnessstudio Power\nMo–Fr 7–22 Uhr\nSa und So 9–18 Uhr\nBitte Handtuch mitbringen!", tr: { en: "Power gym\nMon–Fri 7 a.m.–10 p.m.\nSat and Sun 9 a.m.–6 p.m.\nPlease bring a towel!", fr: "Salle de sport Power\nLun–ven 7 h–22 h\nSam et dim 9 h–18 h\nApportez une serviette, s'il vous plaît !" } },
          { id: 's2', de: "Bitte duschen Sie vor dem Schwimmen!", tr: { en: "Please shower before swimming!", fr: "Veuillez prendre une douche avant de nager !" } },
          { id: 's3', de: "Tennisplatz 2 ist heute gesperrt.\nBitte spielen Sie auf Platz 1 oder 3.", tr: { en: "Tennis court 2 is closed today.\nPlease play on court 1 or 3.", fr: "Le court de tennis 2 est fermé aujourd'hui.\nVeuillez jouer sur le court 1 ou 3." } },
          { id: 's4', de: "Sporthalle\nNur mit Sportschuhen!", tr: { en: "Sports hall\nSports shoes only!", fr: "Salle de sport\nUniquement avec des chaussures de sport !" } },
          { id: 's5', de: "Aushilfe gesucht!\nSamstag, 9–15 Uhr\nInfo an der Kasse", tr: { en: "Part-time helper wanted!\nSaturday, 9 a.m.–3 p.m.\nInformation at the till", fr: "Aide recherché(e) !\nSamedi, 9 h–15 h\nRenseignements à la caisse" } },
        ],
        items: [
          { id: 'q11', textId: 's1', q: 'Am Sonntag ist das Fitnessstudio bis 20 Uhr geöffnet.', qTr: { en: 'On Sunday the gym is open until 8 p.m.', fr: "Le dimanche, la salle de sport est ouverte jusqu'à 20 h." }, answer: false, explain: { en: 'On Saturday and Sunday it closes at 6 p.m. (18 Uhr).', fr: 'Le samedi et le dimanche, elle ferme à 18 h.' } },
          { id: 'q12', textId: 's2', q: 'Man muss vor dem Schwimmen duschen.', qTr: { en: 'You must shower before swimming.', fr: 'Il faut se doucher avant de nager.' }, answer: true, explain: { en: '"Bitte duschen Sie vor dem Schwimmen!"', fr: '« Bitte duschen Sie vor dem Schwimmen ! »' } },
          { id: 'q13', textId: 's3', q: 'Heute kann man auf Platz 2 spielen.', qTr: { en: 'Today you can play on court 2.', fr: "Aujourd'hui, on peut jouer sur le court 2." }, answer: false, explain: { en: '"gesperrt" means closed; players should use court 1 or 3.', fr: '« gesperrt » signifie fermé ; il faut utiliser le court 1 ou 3.' } },
          { id: 'q14', textId: 's4', q: 'In der Sporthalle braucht man Sportschuhe.', qTr: { en: 'You need sports shoes in the sports hall.', fr: 'Dans la salle de sport, il faut des chaussures de sport.' }, answer: true, explain: { en: '"Nur mit Sportschuhen" = only with sports shoes.', fr: '« Nur mit Sportschuhen » = uniquement avec des chaussures de sport.' } },
          { id: 'q15', textId: 's5', q: 'Die Aushilfe arbeitet am Samstag.', qTr: { en: 'The helper works on Saturday.', fr: "L'aide travaille le samedi." }, answer: true, explain: { en: 'The notice says "Samstag, 9–15 Uhr".', fr: "L'avis indique « Samstag, 9–15 Uhr »." } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-7-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten im Sportverein Schwimmen lernen. Ihre Freundin hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to learn to swim at the sports club. Your friend helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez apprendre à nager au club de sport. Votre amie vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Ich heiße Lucia Moreno. Ich bin am 5. November 1995 geboren. Ich wohne in Stuttgart, in der Bergstraße 18. Meine E-Mail-Adresse ist lucia.moreno@mail.de. Ich möchte schwimmen lernen.',
          tr: {
            en: 'My name is Lucia Moreno. I was born on 5 November 1995. I live in Stuttgart, at Bergstraße 18. My e-mail address is lucia.moreno@mail.de. I would like to learn to swim.',
            fr: "Je m'appelle Lucia Moreno. Je suis née le 5 novembre 1995. J'habite à Stuttgart, au 18 Bergstraße. Mon adresse e-mail est lucia.moreno@mail.de. Je voudrais apprendre à nager.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Moreno'] },
          { id: 'f2', label: 'Vorname', labelTr: { en: 'First name', fr: 'Prénom' }, accept: ['Lucia'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['05.11.1995', '5.11.1995', '5. November 1995', '5 November 1995', '05. November 1995'] },
          { id: 'f4', label: 'Straße und Hausnummer', labelTr: { en: 'Street and house number', fr: 'Rue et numéro' }, accept: ['Bergstraße 18', 'Bergstrasse 18', 'Bergstraße18', 'Bergstr. 18'] },
          { id: 'f5', label: 'E-Mail-Adresse', labelTr: { en: 'E-mail address', fr: 'Adresse e-mail' }, accept: ['lucia.moreno@mail.de'] },
        ],
      },
      {
        id: 'goethe-a1-7-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Ihr Freund Ben arbeitet in einem Café. Er schreibt: „Kannst du am Samstag im Café helfen?“ Schreiben Sie ihm eine Nachricht (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: {
          en: 'Your friend Ben works in a café. He writes: “Can you help in the café on Saturday?” Write him a message (about 30 words). Write about all three points.',
          fr: "Votre ami Ben travaille dans un café. Il écrit : « Peux-tu aider au café samedi ? » Écrivez-lui un message (environ 30 mots). Traitez les trois points.",
        },
        points: [
          { id: 'p1', de: 'Zusage: Sie haben Zeit und helfen gern', tr: { en: 'Agree: you have time and are happy to help', fr: "Accord : vous avez le temps et aidez volontiers" }, keywords: ['zeit', 'gern', 'ja', 'kann', 'helfe', 'komme'] },
          { id: 'p2', de: 'Uhrzeit: Wann kommen Sie?', tr: { en: 'Time: when will you come?', fr: 'Heure : quand venez-vous ?' }, keywords: ['uhr', 'um', 'ab ', 'früh', 'morgens', 'vormittag'] },
          { id: 'p3', de: 'Frage: Bezahlung', tr: { en: 'Question: payment', fr: 'Question : rémunération' }, keywords: ['bezahl', 'geld', 'stunde', 'euro', 'verdien', 'bekomme'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Lieber Ben,\n\nvielen Dank für deine Nachricht. Ja, ich habe am Samstag Zeit und helfe gern im Café. Ich komme um 9 Uhr. Wie viel Geld bekomme ich pro Stunde?\n\nLiebe Grüße\nTom',
          tr: {
            en: 'Dear Ben,\n\nThank you very much for your message. Yes, I have time on Saturday and I am happy to help in the café. I will come at 9 o\'clock. How much money do I get per hour?\n\nBest wishes\nTom',
            fr: "Cher Ben,\n\nMerci beaucoup pour ton message. Oui, j'ai le temps samedi et j'aide volontiers au café. Je viens à 9 h. Combien d'argent est-ce que je reçois de l'heure ?\n\nAmitiés\nTom",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-7-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, languages, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, langues, profession, loisir.' },
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Ich heiße Daniel Okafor. Das schreibt man: O-K-A-F-O-R.', sampleTr: { en: 'My name is Daniel Okafor. You write it: O-K-A-F-O-R.', fr: "Je m'appelle Daniel Okafor. Ça s'écrit : O-K-A-F-O-R." } },
          { id: 'p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 31 Jahre alt.', sampleTr: { en: 'I am 31 years old.', fr: "J'ai 31 ans." } },
          { id: 'p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus Nigeria, aus Lagos.', sampleTr: { en: 'I come from Nigeria, from Lagos.', fr: 'Je viens du Nigeria, de Lagos.' } },
          { id: 'p1d', cue: 'Wohnort', cueTr: { en: 'Town', fr: 'Ville' }, sample: 'Ich wohne in Dresden, in der Elbstraße.', sampleTr: { en: 'I live in Dresden, in Elbstraße.', fr: "J'habite à Dresde, dans la Elbstraße." } },
          { id: 'p1e', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Englisch, Igbo und ein bisschen Deutsch.', sampleTr: { en: 'I speak English, Igbo and a little German.', fr: 'Je parle anglais, igbo et un peu allemand.' } },
          { id: 'p1f', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich bin Elektriker. Ich arbeite in einer Firma.', sampleTr: { en: 'I am an electrician. I work in a company.', fr: "Je suis électricien. Je travaille dans une entreprise." } },
          { id: 'p1g', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Mein Hobby ist Basketball. Ich spiele jeden Mittwoch.', sampleTr: { en: 'My hobby is basketball. I play every Wednesday.', fr: 'Mon loisir est le basket. Je joue tous les mercredis.' } },
        ],
      },
      {
        id: 'goethe-a1-7-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Sport und Freizeit. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: sport and free time. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : sport et loisirs. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'p2a', cue: 'Fußball', cueTr: { en: 'Football', fr: 'Football' }, sample: 'Spielst du gern Fußball? – Ja, jeden Samstag mit Freunden.', sampleTr: { en: 'Do you like playing football? – Yes, every Saturday with friends.', fr: 'Aimes-tu jouer au football ? – Oui, tous les samedis avec des amis.' }, tip: { en: 'A yes/no question starts with the verb: "Spielst du …?"', fr: 'Une question fermée commence par le verbe : « Spielst du …? »' } },
          { id: 'p2b', cue: 'Schwimmen', cueTr: { en: 'Swimming', fr: 'Natation' }, sample: 'Gehst du oft schwimmen? – Nein, nur im Sommer.', sampleTr: { en: 'Do you often go swimming? – No, only in summer.', fr: "Vas-tu souvent nager ? – Non, seulement l'été." } },
          { id: 'p2c', cue: 'Fahrrad', cueTr: { en: 'Bicycle', fr: 'Vélo' }, sample: 'Fährst du jeden Tag Fahrrad? – Ja, ich fahre mit dem Rad zur Arbeit.', sampleTr: { en: 'Do you ride a bicycle every day? – Yes, I cycle to work.', fr: 'Fais-tu du vélo tous les jours ? – Oui, je vais au travail à vélo.' } },
          { id: 'p2d', cue: 'Fitnessstudio', cueTr: { en: 'Gym', fr: 'Salle de sport' }, sample: 'Wann gehst du ins Fitnessstudio? – Am Dienstag und am Donnerstag.', sampleTr: { en: 'When do you go to the gym? – On Tuesday and Thursday.', fr: 'Quand vas-tu à la salle de sport ? – Le mardi et le jeudi.' } },
          { id: 'p2e', cue: 'Lieblingssport', cueTr: { en: 'Favourite sport', fr: 'Sport préféré' }, sample: 'Was ist dein Lieblingssport? – Tennis. Ich spiele schon fünf Jahre.', sampleTr: { en: 'What is your favourite sport? – Tennis. I have been playing for five years.', fr: 'Quel est ton sport préféré ? – Le tennis. Je joue depuis cinq ans.' } },
          { id: 'p2f', cue: 'Wochenende', cueTr: { en: 'Weekend', fr: 'Week-end' }, sample: 'Was machst du am Wochenende? – Ich spiele Volleyball im Park.', sampleTr: { en: 'What do you do at the weekend? – I play volleyball in the park.', fr: 'Que fais-tu le week-end ? – Je joue au volley dans le parc.' } },
          { id: 'p2g', cue: 'Joggen', cueTr: { en: 'Jogging', fr: 'Jogging' }, sample: 'Wo gehst du joggen? – Im Stadtpark, am Morgen.', sampleTr: { en: 'Where do you go jogging? – In the city park, in the morning.', fr: 'Où vas-tu courir ? – Dans le parc de la ville, le matin.' } },
        ],
      },
      {
        id: 'goethe-a1-7-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'p3a', cue: 'Bild: ein Ball', cueTr: { en: 'Picture: a ball', fr: 'Image : un ballon' }, sample: 'Können Sie mir bitte den Ball geben? – Ja, natürlich.', sampleTr: { en: 'Can you give me the ball, please? – Yes, of course.', fr: 'Pouvez-vous me donner le ballon, s\'il vous plaît ? – Oui, bien sûr.' }, tip: { en: 'Polite request: "Können Sie mir bitte … geben?"', fr: 'Demande polie : « Können Sie mir bitte … geben ? »' } },
          { id: 'p3b', cue: 'Bild: ein Handtuch', cueTr: { en: 'Picture: a towel', fr: 'Image : une serviette' }, sample: 'Haben Sie ein Handtuch für mich? – Ja, hier ist eins.', sampleTr: { en: 'Do you have a towel for me? – Yes, here is one.', fr: 'Avez-vous une serviette pour moi ? – Oui, en voici une.' } },
          { id: 'p3c', cue: 'Bild: eine Flasche Wasser', cueTr: { en: 'Picture: a bottle of water', fr: "Image : une bouteille d'eau" }, sample: 'Ich habe Durst. Haben Sie bitte ein Wasser? – Ja, sofort.', sampleTr: { en: 'I am thirsty. Do you have some water, please? – Yes, right away.', fr: "J'ai soif. Avez-vous de l'eau, s'il vous plaît ? – Oui, tout de suite." } },
          { id: 'p3d', cue: 'Bild: ein dunkler Raum', cueTr: { en: 'Picture: a dark room', fr: 'Image : une pièce sombre' }, sample: 'Machen Sie bitte das Licht an. – Ja, gern.', sampleTr: { en: 'Please turn on the light. – Yes, gladly.', fr: "Allumez la lumière, s'il vous plaît. – Oui, avec plaisir." } },
          { id: 'p3e', cue: 'Bild: ein Kalender', cueTr: { en: 'Picture: a calendar', fr: 'Image : un calendrier' }, sample: 'Kann ich am Freitag frei haben, bitte? – Ja, das ist kein Problem.', sampleTr: { en: 'Can I have Friday off, please? – Yes, that is no problem.', fr: "Puis-je avoir congé vendredi, s'il vous plaît ? – Oui, ce n'est pas un problème." } },
          { id: 'p3f', cue: 'Bild: laute Musik', cueTr: { en: 'Picture: loud music', fr: 'Image : musique forte' }, sample: 'Können Sie bitte die Musik leiser machen? – Ja, Entschuldigung.', sampleTr: { en: 'Can you turn the music down, please? – Yes, sorry.', fr: "Pouvez-vous baisser la musique, s'il vous plaît ? – Oui, désolé." } },
          { id: 'p3g', cue: 'Bild: ein Stuhl', cueTr: { en: 'Picture: a chair', fr: 'Image : une chaise' }, sample: 'Kann ich bitte einen Stuhl haben? – Ja, hier bitte.', sampleTr: { en: 'Can I have a chair, please? – Yes, here you are.', fr: "Puis-je avoir une chaise, s'il vous plaît ? – Oui, voilà." } },
        ],
      },
    ],
  },
  {
    id: 'goethe-a1-8',
    board: 'goethe',
    level: 'A1',
    number: 8,
    lesen: [
      {
        id: 'goethe-a1-8-l1', teil: 1, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 1',
        instruction: 'Lesen Sie die E-Mail. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the e-mail. Are the sentences true or false? Tick the answer.',
          fr: "Lisez l'e-mail. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.",
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Wohnungssuche',
          de: "Hallo Elif,\n\nich suche eine Wohnung und habe morgen einen Besichtigungstermin. Die Wohnung ist in der Lindenstraße, direkt an der Straßenbahn-Haltestelle. Sie hat zwei Zimmer und kostet 540 Euro im Monat. Leider gibt es keine Küche. Ich muss selbst eine Küche kaufen.\n\nDer Termin ist morgen um 17.30 Uhr. Ich möchte nicht allein hingehen. Hast du Zeit? Ruf mich bitte heute Abend an.\n\nLiebe Grüße\nNora",
          tr: {
            en: "Subject: Looking for a flat\n\nHi Elif,\n\nI am looking for a flat and have a viewing tomorrow. The flat is in Lindenstraße, right next to the tram stop. It has two rooms and costs 540 euros a month. Unfortunately there is no kitchen. I have to buy a kitchen myself.\n\nThe appointment is tomorrow at 5.30 p.m. I don't want to go alone. Do you have time? Please call me this evening.\n\nBest wishes\nNora",
            fr: "Objet : Recherche d'appartement\n\nSalut Elif,\n\nje cherche un appartement et j'ai une visite demain. L'appartement est dans la Lindenstraße, juste à l'arrêt de tram. Il a deux pièces et coûte 540 euros par mois. Malheureusement, il n'y a pas de cuisine. Je dois acheter une cuisine moi-même.\n\nLe rendez-vous est demain à 17 h 30. Je ne veux pas y aller seule. Tu as le temps ? Appelle-moi ce soir, s'il te plaît.\n\nBises\nNora",
          },
        }],
        items: [
          { id: 'q1', q: 'Nora sucht eine Wohnung.', qTr: { en: 'Nora is looking for a flat.', fr: 'Nora cherche un appartement.' }, answer: true, explain: { en: '"Ich suche eine Wohnung."', fr: '« Ich suche eine Wohnung. »' } },
          { id: 'q2', q: 'Der Besichtigungstermin ist heute.', qTr: { en: 'The viewing is today.', fr: "La visite a lieu aujourd'hui." }, answer: false, explain: { en: 'The appointment is tomorrow ("morgen") at 5.30 p.m.', fr: 'Le rendez-vous est demain (« morgen ») à 17 h 30.' } },
          { id: 'q3', q: 'Die Wohnung kostet 540 Euro im Monat.', qTr: { en: 'The flat costs 540 euros a month.', fr: "L'appartement coûte 540 euros par mois." }, answer: true, explain: { en: '"… kostet 540 Euro im Monat."', fr: '« … kostet 540 Euro im Monat. »' } },
          { id: 'q4', q: 'Die Wohnung liegt in der Nähe von einer Haltestelle.', qTr: { en: 'The flat is near a stop.', fr: "L'appartement est près d'un arrêt." }, answer: true, explain: { en: '"direkt an der Straßenbahn-Haltestelle" = right at the tram stop.', fr: "« direkt an der Straßenbahn-Haltestelle » = juste à l'arrêt de tram." } },
          { id: 'q5', q: 'Nora möchte allein zur Besichtigung gehen.', qTr: { en: 'Nora wants to go to the viewing alone.', fr: 'Nora veut aller seule à la visite.' }, answer: false, explain: { en: '"Ich möchte nicht allein hingehen." She asks Elif to come.', fr: "« Ich möchte nicht allein hingehen. » Elle demande à Elif de venir." } },
        ],
      },
      {
        id: 'goethe-a1-8-l2', teil: 2, kind: 'multipleChoice',
        title: 'Teil 2',
        instruction: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Kreuzen Sie a oder b an.',
        instructionTr: {
          en: 'Read the situations and the ads. Where do you find the information? Tick a or b.',
          fr: "Lisez les situations et les annonces. Où trouvez-vous l'information ? Cochez a ou b.",
        },
        texts: [
          { id: 'p1', title: 'Anzeigen 1', de: "Anzeige a\n2-Zimmer-Wohnung\nMit Balkon, 590 Euro\nFrei ab 1. Mai\n\nAnzeige b\n3-Zimmer-Wohnung\nMit Garten, 750 Euro\nFrei ab 1. Juni", tr: { en: "Ad a\n2-room flat\nWith balcony, 590 euros\nAvailable from 1 May\n\nAd b\n3-room flat\nWith garden, 750 euros\nAvailable from 1 June", fr: "Annonce a\nAppartement 2 pièces\nAvec balcon, 590 euros\nLibre dès le 1er mai\n\nAnnonce b\nAppartement 3 pièces\nAvec jardin, 750 euros\nLibre dès le 1er juin" } },
          { id: 'p2', title: 'Anzeigen 2', de: "Anzeige a\nMöbelhaus Lux\nSofa ab 899 Euro\nLieferung gratis\n\nAnzeige b\nMöbel-Flohmarkt\nSamstag, 8–13 Uhr\nSofa 50 Euro, Tisch 20 Euro", tr: { en: "Ad a\nLux furniture store\nSofa from 899 euros\nFree delivery\n\nAd b\nFurniture flea market\nSaturday, 8 a.m.–1 p.m.\nSofa 50 euros, table 20 euros", fr: "Annonce a\nMaison de meubles Lux\nCanapé à partir de 899 euros\nLivraison gratuite\n\nAnnonce b\nMarché aux puces de meubles\nSamedi, 8 h–13 h\nCanapé 50 euros, table 20 euros" } },
          { id: 'p3', title: 'Anzeigen 3', de: "Anzeige a\nZug nach München\nAbfahrt 7.15 Uhr\nAnkunft 11.30 Uhr\n\nAnzeige b\nBus nach München\nAbfahrt 7.15 Uhr\nAnkunft 13.40 Uhr, nur 19 Euro", tr: { en: "Ad a\nTrain to Munich\nDeparture 7.15 a.m.\nArrival 11.30 a.m.\n\nAd b\nBus to Munich\nDeparture 7.15 a.m.\nArrival 1.40 p.m., only 19 euros", fr: "Annonce a\nTrain pour Munich\nDépart 7 h 15\nArrivée 11 h 30\n\nAnnonce b\nBus pour Munich\nDépart 7 h 15\nArrivée 13 h 40, seulement 19 euros" } },
          { id: 'p4', title: 'Anzeigen 4', de: "Anzeige a\nHotel Seeblick\nZimmer ab 120 Euro\nFrühstück inklusive\n\nAnzeige b\nJugendherberge Seeblick\nBett ab 25 Euro\nFrühstück 5 Euro extra", tr: { en: "Ad a\nSeeblick Hotel\nRooms from 120 euros\nBreakfast included\n\nAd b\nSeeblick youth hostel\nBed from 25 euros\nBreakfast 5 euros extra", fr: "Annonce a\nHôtel Seeblick\nChambres à partir de 120 euros\nPetit-déjeuner inclus\n\nAnnonce b\nAuberge de jeunesse Seeblick\nLit à partir de 25 euros\nPetit-déjeuner 5 euros en plus" } },
          { id: 'p5', title: 'Anzeigen 5', de: "Anzeige a\nMonatskarte Bus und Bahn\n49 Euro\nGültig für die ganze Stadt\n\nAnzeige b\nTageskarte Bus und Bahn\n5 Euro\nGültig bis 3 Uhr nachts", tr: { en: "Ad a\nMonthly pass for bus and train\n49 euros\nValid throughout the city\n\nAd b\nDay ticket for bus and train\n5 euros\nValid until 3 a.m.", fr: "Annonce a\nCarte mensuelle bus et train\n49 euros\nValable dans toute la ville\n\nAnnonce b\nTicket journée bus et train\n5 euros\nValable jusqu'à 3 h du matin" } },
        ],
        items: [
          { id: 'q6', textId: 'p1', q: 'Sie suchen eine Wohnung mit Balkon. Wo finden Sie die Information?', qTr: { en: 'You are looking for a flat with a balcony. Where do you find the information?', fr: "Vous cherchez un appartement avec balcon. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'Ad a has a balcony ("Mit Balkon"); ad b has a garden.', fr: "L'annonce a a un balcon (« Mit Balkon ») ; l'annonce b a un jardin." } },
          { id: 'q7', textId: 'p2', q: 'Sie brauchen billige Möbel für Ihre neue Wohnung. Wo finden Sie die Information?', qTr: { en: 'You need cheap furniture for your new flat. Where do you find the information?', fr: "Vous avez besoin de meubles bon marché pour votre nouvel appartement. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b: a sofa for 50 euros and a table for 20 euros at the flea market.', fr: "Annonce b : un canapé à 50 euros et une table à 20 euros au marché aux puces." } },
          { id: 'q8', textId: 'p3', q: 'Sie möchten schnell nach München fahren. Wo finden Sie die Information?', qTr: { en: 'You want to get to Munich quickly. Where do you find the information?', fr: "Vous voulez aller vite à Munich. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'The train arrives at 11.30, the bus only at 13.40, so the train is faster.', fr: "Le train arrive à 11 h 30, le bus seulement à 13 h 40 : le train est plus rapide." } },
          { id: 'q9', textId: 'p4', q: 'Sie reisen mit wenig Geld und brauchen ein Bett. Wo finden Sie die Information?', qTr: { en: 'You are travelling with little money and need a bed. Where do you find the information?', fr: "Vous voyagez avec peu d'argent et avez besoin d'un lit. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 1, explain: { en: 'Ad b: a bed from only 25 euros. The hotel in ad a starts at 120 euros.', fr: "Annonce b : un lit à partir de 25 euros seulement. L'hôtel de l'annonce a commence à 120 euros." } },
          { id: 'q10', textId: 'p5', q: 'Sie fahren jeden Tag mit Bus und Bahn zur Arbeit. Wo finden Sie die Information?', qTr: { en: 'You take the bus and train to work every day. Where do you find the information?', fr: "Vous allez au travail chaque jour en bus et en train. Où trouvez-vous l'information ?" }, options: ['Anzeige a', 'Anzeige b'], optionsTr: [{ en: 'Ad a', fr: 'Annonce a' }, { en: 'Ad b', fr: 'Annonce b' }], answer: 0, explain: { en: 'Ad a: a monthly pass is the right ticket for daily travel. Ad b is only for one day.', fr: "Annonce a : une carte mensuelle convient pour des trajets quotidiens. L'annonce b est valable un seul jour." } },
        ],
      },
      {
        id: 'goethe-a1-8-l3', teil: 3, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 3',
        instruction: 'Lesen Sie die Schilder und Hinweise. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the signs and notices. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez les panneaux et les avis. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [
          { id: 's1', de: "Buslinie 12\nMo–Fr: alle 10 Minuten\nSa und So: alle 20 Minuten", tr: { en: "Bus route 12\nMon–Fri: every 10 minutes\nSat and Sun: every 20 minutes", fr: "Ligne de bus 12\nLun–ven : toutes les 10 minutes\nSam et dim : toutes les 20 minutes" } },
          { id: 's2', de: "Gleis 4\nZug nach Hamburg\nHeute 10 Minuten später", tr: { en: "Platform 4\nTrain to Hamburg\nToday 10 minutes late", fr: "Voie 4\nTrain pour Hambourg\nAujourd'hui avec 10 minutes de retard" } },
          { id: 's3', de: "Hausordnung\nRuhezeit: 13–15 Uhr\nund ab 22 Uhr", tr: { en: "House rules\nQuiet hours: 1–3 p.m.\nand from 10 p.m.", fr: "Règlement de l'immeuble\nHeures de silence : 13 h–15 h\net à partir de 22 h" } },
          { id: 's4', de: "Fahrräder bitte nur im letzten Wagen!", tr: { en: "Bicycles in the last carriage only, please!", fr: "Vélos uniquement dans la dernière voiture, s'il vous plaît !" } },
          { id: 's5', de: "Reisebüro Sonne\nMo–Fr 10–18 Uhr\nSamstag geschlossen", tr: { en: "Sonne travel agency\nMon–Fri 10 a.m.–6 p.m.\nClosed on Saturday", fr: "Agence de voyages Sonne\nLun–ven 10 h–18 h\nFermé le samedi" } },
        ],
        items: [
          { id: 'q11', textId: 's1', q: 'Am Sonntag fährt der Bus alle 10 Minuten.', qTr: { en: 'On Sunday the bus runs every 10 minutes.', fr: 'Le dimanche, le bus passe toutes les 10 minutes.' }, answer: false, explain: { en: 'On Sat and Sun the bus runs only every 20 minutes.', fr: 'Le samedi et le dimanche, le bus passe seulement toutes les 20 minutes.' } },
          { id: 'q12', textId: 's2', q: 'Der Zug nach Hamburg kommt heute später.', qTr: { en: 'The train to Hamburg arrives later today.', fr: "Le train pour Hambourg arrive plus tard aujourd'hui." }, answer: true, explain: { en: '"Heute 10 Minuten später" = 10 minutes late today.', fr: '« Heute 10 Minuten später » = 10 minutes de retard aujourd\'hui.' } },
          { id: 'q13', textId: 's3', q: 'Um 14 Uhr muss man im Haus leise sein.', qTr: { en: 'At 2 p.m. you have to be quiet in the building.', fr: "À 14 h, il faut être silencieux dans l'immeuble." }, answer: true, explain: { en: 'Quiet hours are 13–15 Uhr, and 14 Uhr is in between.', fr: 'Les heures de silence vont de 13 h à 15 h, et 14 h est entre les deux.' } },
          { id: 'q14', textId: 's4', q: 'Fahrräder dürfen in jedem Wagen mitfahren.', qTr: { en: 'Bicycles may travel in any carriage.', fr: "Les vélos peuvent voyager dans n'importe quelle voiture." }, answer: false, explain: { en: '"nur im letzten Wagen" = only in the last carriage.', fr: '« nur im letzten Wagen » = uniquement dans la dernière voiture.' } },
          { id: 'q15', textId: 's5', q: 'Das Reisebüro öffnet um 10 Uhr.', qTr: { en: 'The travel agency opens at 10 a.m.', fr: "L'agence de voyages ouvre à 10 h." }, answer: true, explain: { en: '"Mo–Fr 10–18 Uhr" = from 10 a.m. to 6 p.m.', fr: '« Mo–Fr 10–18 Uhr » = de 10 h à 18 h.' } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'goethe-a1-8-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten eine Monatskarte für Bus und Bahn. Ihr Freund hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want a monthly pass for bus and train. Your friend helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez une carte mensuelle bus et train. Votre ami vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Mein Name ist Ivan Petrov. Ich bin am 23. August 1990 geboren. Ich wohne in Leipzig, in der Marktstraße 9. Meine Telefonnummer ist 0341 / 55 66 77. Ich brauche die Karte ab dem 1. Februar.',
          tr: {
            en: 'My name is Ivan Petrov. I was born on 23 August 1990. I live in Leipzig, at Marktstraße 9. My telephone number is 0341 / 55 66 77. I need the pass from 1 February.',
            fr: "Je m'appelle Ivan Petrov. Je suis né le 23 août 1990. J'habite à Leipzig, au 9 Marktstraße. Mon numéro de téléphone est le 0341 / 55 66 77. J'ai besoin de la carte à partir du 1er février.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Petrov'] },
          { id: 'f2', label: 'Vorname', labelTr: { en: 'First name', fr: 'Prénom' }, accept: ['Ivan'] },
          { id: 'f3', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['23.08.1990', '23.8.1990', '23. August 1990', '23 August 1990'] },
          { id: 'f4', label: 'Telefonnummer', labelTr: { en: 'Telephone number', fr: 'Numéro de téléphone' }, accept: ['0341 / 55 66 77', '0341/556677', '0341 556677', '0341 55 66 77', '0341/55 66 77', '0341 / 556677'] },
          { id: 'f5', label: 'Gültig ab', labelTr: { en: 'Valid from', fr: 'Valable à partir du' }, accept: ['1. Februar', '1 Februar', '1.Februar', '01.02.', '1.2.', '01.02', '1.2', 'ab 1. Februar', 'ab dem 1. Februar'] },
        ],
      },
      {
        id: 'goethe-a1-8-s2', teil: 2, kind: 'message', register: 'formal',
        title: 'Teil 2',
        instruction: 'Sie suchen eine Wohnung und haben eine Anzeige gelesen. Schreiben Sie an die Vermieterin, Frau Keller (ca. 30 Wörter). Schreiben Sie zu allen drei Punkten.',
        instructionTr: {
          en: 'You are looking for a flat and have read an ad. Write to the landlady, Mrs Keller (about 30 words). Write about all three points.',
          fr: "Vous cherchez un appartement et avez lu une annonce. Écrivez à la propriétaire, Mme Keller (environ 30 mots). Traitez les trois points.",
        },
        points: [
          { id: 'p1', de: 'Interesse an der Wohnung', tr: { en: 'Interest in the flat', fr: "Intérêt pour l'appartement" }, keywords: ['interess', 'anzeige', 'suche', 'gefällt', 'gefaellt'] },
          { id: 'p2', de: 'Besichtigungstermin vorschlagen', tr: { en: 'Suggest a viewing date', fr: 'Proposer un rendez-vous de visite' }, keywords: ['besichtig', 'ansehen', 'anschauen', 'termin'] },
          { id: 'p3', de: 'Frage: Miete', tr: { en: 'Question: rent', fr: 'Question : loyer' }, keywords: ['miete', 'kostet', 'euro', 'nebenkosten', 'preis'] },
        ],
        minWords: 25, maxWords: 50,
        model: {
          de: 'Sehr geehrte Frau Keller,\n\nich habe Ihre Anzeige gelesen und interessiere mich für die Wohnung. Kann ich die Wohnung am Samstag um 11 Uhr besichtigen? Wie hoch ist die Miete mit Nebenkosten?\n\nMit freundlichen Grüßen\nIvan Petrov',
          tr: {
            en: 'Dear Mrs Keller,\n\nI have read your ad and I am interested in the flat. Can I view the flat on Saturday at 11 o\'clock? How high is the rent including running costs?\n\nYours sincerely\nIvan Petrov',
            fr: "Madame Keller,\n\nj'ai lu votre annonce et je m'intéresse à l'appartement. Puis-je visiter l'appartement samedi à 11 h ? À combien s'élève le loyer, charges comprises ?\n\nCordialement\nIvan Petrov",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'goethe-a1-8-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, age, country, town, languages, job, hobby.', fr: 'Présentez-vous. Les mots-clés vous aident : nom, âge, pays, ville, langues, profession, loisir.' },
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Mein Name ist Fatima Haddad. Ich buchstabiere: H-A-D-D-A-D.', sampleTr: { en: 'My name is Fatima Haddad. I spell it: H-A-D-D-A-D.', fr: "Je m'appelle Fatima Haddad. J'épelle : H-A-D-D-A-D." } },
          { id: 'p1b', cue: 'Alter', cueTr: { en: 'Age', fr: 'Âge' }, sample: 'Ich bin 24 Jahre alt.', sampleTr: { en: 'I am 24 years old.', fr: "J'ai 24 ans." } },
          { id: 'p1c', cue: 'Land', cueTr: { en: 'Country', fr: 'Pays' }, sample: 'Ich komme aus Algerien, aus Oran.', sampleTr: { en: 'I come from Algeria, from Oran.', fr: "Je viens d'Algérie, d'Oran." } },
          { id: 'p1d', cue: 'Wohnort', cueTr: { en: 'Town', fr: 'Ville' }, sample: 'Ich wohne in Bremen, in der Weserstraße.', sampleTr: { en: 'I live in Bremen, in Weserstraße.', fr: "J'habite à Brême, dans la Weserstraße." } },
          { id: 'p1e', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Arabisch und Französisch. Deutsch lerne ich seit sechs Monaten.', sampleTr: { en: 'I speak Arabic and French. I have been learning German for six months.', fr: "Je parle arabe et français. J'apprends l'allemand depuis six mois." } },
          { id: 'p1f', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich bin Studentin. Ich studiere Informatik.', sampleTr: { en: 'I am a student. I study computer science.', fr: "Je suis étudiante. J'étudie l'informatique." } },
          { id: 'p1g', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Ich lese gern und ich reise gern.', sampleTr: { en: 'I like reading and I like travelling.', fr: "J'aime lire et j'aime voyager." } },
        ],
      },
      {
        id: 'goethe-a1-8-p2', teil: 2, title: 'Teil 2: Fragen und Antworten', minutes: 4,
        instruction: 'Thema: Reisen und Verkehr. Sie ziehen eine Karte mit einem Stichwort. Stellen Sie eine Frage dazu. Ihr Partner antwortet. Dann tauschen Sie.',
        instructionTr: { en: 'Topic: travel and transport. You draw a card with a keyword. Ask a question about it. Your partner answers. Then you swap.', fr: 'Thème : voyages et transports. Vous tirez une carte avec un mot-clé. Posez une question dessus. Votre partenaire répond. Puis vous échangez.' },
        prompts: [
          { id: 'p2a', cue: 'Bus', cueTr: { en: 'Bus', fr: 'Bus' }, sample: 'Fährst du oft mit dem Bus? – Ja, jeden Tag zur Uni.', sampleTr: { en: 'Do you often take the bus? – Yes, every day to university.', fr: "Prends-tu souvent le bus ? – Oui, tous les jours pour aller à l'université." }, tip: { en: 'Question words: Wann …? Wohin …? Wie …? Wie viel …?', fr: 'Mots interrogatifs : Wann …? Wohin …? Wie …? Wie viel …?' } },
          { id: 'p2b', cue: 'Zug', cueTr: { en: 'Train', fr: 'Train' }, sample: 'Wann fährt der Zug nach Berlin? – Um 9.45 Uhr.', sampleTr: { en: 'When does the train to Berlin leave? – At 9.45.', fr: 'Quand part le train pour Berlin ? – À 9 h 45.' } },
          { id: 'p2c', cue: 'Urlaub', cueTr: { en: 'Holiday', fr: 'Vacances' }, sample: 'Wohin fährst du im Urlaub? – Nach Spanien, ans Meer.', sampleTr: { en: 'Where are you going on holiday? – To Spain, to the sea.', fr: 'Où pars-tu en vacances ? – En Espagne, à la mer.' } },
          { id: 'p2d', cue: 'Fahrkarte', cueTr: { en: 'Ticket', fr: 'Billet' }, sample: 'Wo kaufe ich eine Fahrkarte? – Dort am Automaten.', sampleTr: { en: 'Where do I buy a ticket? – There at the machine.', fr: 'Où puis-je acheter un billet ? – Là-bas au distributeur.' } },
          { id: 'p2e', cue: 'Auto', cueTr: { en: 'Car', fr: 'Voiture' }, sample: 'Hast du ein Auto? – Nein, ich fahre mit dem Rad.', sampleTr: { en: 'Do you have a car? – No, I go by bike.', fr: 'As-tu une voiture ? – Non, je me déplace à vélo.' } },
          { id: 'p2f', cue: 'Flughafen', cueTr: { en: 'Airport', fr: 'Aéroport' }, sample: 'Wie komme ich zum Flughafen? – Mit der S-Bahn, Linie 3.', sampleTr: { en: 'How do I get to the airport? – By S-Bahn, line 3.', fr: "Comment aller à l'aéroport ? – En S-Bahn, ligne 3." } },
          { id: 'p2g', cue: 'Hotel', cueTr: { en: 'Hotel', fr: 'Hôtel' }, sample: 'Wie viel kostet das Hotel? – 70 Euro pro Nacht.', sampleTr: { en: 'How much does the hotel cost? – 70 euros per night.', fr: "Combien coûte l'hôtel ? – 70 euros la nuit." } },
        ],
      },
      {
        id: 'goethe-a1-8-p3', teil: 3, title: 'Teil 3: Bitten und Reagieren', minutes: 4,
        instruction: 'Sie ziehen eine Bildkarte. Formulieren Sie eine Bitte. Ihr Partner reagiert.',
        instructionTr: { en: 'You draw a picture card. Make a request. Your partner reacts.', fr: 'Vous tirez une carte-image. Formulez une demande. Votre partenaire réagit.' },
        prompts: [
          { id: 'p3a', cue: 'Bild: ein Schlüssel', cueTr: { en: 'Picture: a key', fr: 'Image : une clé' }, sample: 'Können Sie mir bitte den Schlüssel geben? – Ja, hier ist er.', sampleTr: { en: 'Can you give me the key, please? – Yes, here it is.', fr: "Pouvez-vous me donner la clé, s'il vous plaît ? – Oui, la voici." }, tip: { en: 'Polite request: "Können Sie mir bitte … geben / zeigen?"', fr: 'Demande polie : « Können Sie mir bitte … geben / zeigen ? »' } },
          { id: 'p3b', cue: 'Bild: ein Fahrplan', cueTr: { en: 'Picture: a timetable', fr: 'Image : un horaire' }, sample: 'Entschuldigung, können Sie mir bitte den Fahrplan zeigen? – Ja, gern.', sampleTr: { en: 'Excuse me, can you show me the timetable, please? – Yes, gladly.', fr: "Excusez-moi, pouvez-vous me montrer l'horaire, s'il vous plaît ? – Oui, avec plaisir." } },
          { id: 'p3c', cue: 'Bild: ein schwerer Koffer', cueTr: { en: 'Picture: a heavy suitcase', fr: 'Image : une valise lourde' }, sample: 'Können Sie mir bitte helfen? Der Koffer ist schwer. – Ja, natürlich.', sampleTr: { en: 'Can you help me, please? The suitcase is heavy. – Yes, of course.', fr: "Pouvez-vous m'aider, s'il vous plaît ? La valise est lourde. – Oui, bien sûr." } },
          { id: 'p3d', cue: 'Bild: ein Stadtplan', cueTr: { en: 'Picture: a city map', fr: 'Image : un plan de la ville' }, sample: 'Haben Sie bitte einen Stadtplan? – Ja, hier.', sampleTr: { en: 'Do you have a city map, please? – Yes, here.', fr: "Avez-vous un plan de la ville, s'il vous plaît ? – Oui, tenez." } },
          { id: 'p3e', cue: 'Bild: ein Taxi', cueTr: { en: 'Picture: a taxi', fr: 'Image : un taxi' }, sample: 'Bitte rufen Sie ein Taxi. – Ja, sofort.', sampleTr: { en: 'Please call a taxi. – Yes, right away.', fr: "Appelez un taxi, s'il vous plaît. – Oui, tout de suite." } },
          { id: 'p3f', cue: 'Bild: ein voller Bus, ein freier Platz', cueTr: { en: 'Picture: a full bus, one free seat', fr: 'Image : un bus plein, une place libre' }, sample: 'Entschuldigung, ist hier noch frei? – Ja, bitte.', sampleTr: { en: 'Excuse me, is this seat free? – Yes, please.', fr: "Excusez-moi, cette place est-elle libre ? – Oui, je vous en prie." } },
          { id: 'p3g', cue: 'Bild: eine kaputte Lampe', cueTr: { en: 'Picture: a broken lamp', fr: 'Image : une lampe cassée' }, sample: 'Die Lampe ist kaputt. Können Sie mir bitte helfen? – Ja, ich komme morgen.', sampleTr: { en: 'The lamp is broken. Can you help me, please? – Yes, I will come tomorrow.', fr: "La lampe est cassée. Pouvez-vous m'aider, s'il vous plaît ? – Oui, je viens demain." } },
        ],
      },
    ],
  },
];

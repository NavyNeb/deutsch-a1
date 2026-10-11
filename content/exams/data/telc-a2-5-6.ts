import type { ExamSetInput } from '../types';

// Original practice material modelled on the telc Deutsch A2 format. Not an official paper.
export const TELC_A2_5_6: ExamSetInput[] = [
  {
    id: 'telc-a2-5',
    board: 'telc',
    level: 'A2',
    number: 5,
    lesen: [
      {
        id: 'telc-a2-5-l1', teil: 1, kind: 'multipleChoice',
        title: 'Teil 1',
        instruction: 'Lesen Sie die Hinweise und Schilder. Was ist richtig? Kreuzen Sie a, b oder c an.',
        instructionTr: {
          en: 'Read the notices and signs. What is correct? Tick a, b or c.',
          fr: 'Lisez les avis et les panneaux. Quelle est la bonne réponse ? Cochez a, b ou c.',
        },
        texts: [
          { id: 's1', de: 'Hausarztpraxis Dr. Winter\nNeue Sprechzeiten ab Montag:\nMo, Di, Do: 8–12 Uhr und 15–18 Uhr\nMi, Fr: nur 8–12 Uhr\nTermine bitte telefonisch vereinbaren.', tr: { en: 'Dr Winter family practice\nNew consulting hours from Monday:\nMon, Tue, Thu: 8 a.m.–12 noon and 3–6 p.m.\nWed, Fri: 8 a.m.–12 noon only\nPlease make appointments by phone.', fr: "Cabinet du Dr Winter, médecin généraliste\nNouveaux horaires de consultation à partir de lundi :\nlun, mar, jeu : 8 h–12 h et 15 h–18 h\nmer, ven : 8 h–12 h seulement\nVeuillez prendre rendez-vous par téléphone." } },
          { id: 's2', de: 'Fitnessstudio FitPlus\nWegen eines Umbaus ist der Saunabereich bis zum 30. April geschlossen.\nDas Training an den Geräten und die Kurse finden wie immer statt.', tr: { en: 'FitPlus gym\nBecause of building work the sauna area is closed until 30 April.\nTraining on the machines and the classes take place as usual.', fr: "Salle de sport FitPlus\nEn raison de travaux, l'espace sauna est fermé jusqu'au 30 avril.\nL'entraînement sur les appareils et les cours ont lieu comme d'habitude." } },
          { id: 's3', de: 'Hallenbad Nord\nKinder unter 8 Jahren dürfen nur mit einem Erwachsenen ins Wasser.\nBesucher mit langen Haaren müssen eine Badekappe tragen.', tr: { en: 'Nord indoor pool\nChildren under 8 may only go into the water with an adult.\nVisitors with long hair must wear a swimming cap.', fr: "Piscine couverte Nord\nLes enfants de moins de 8 ans ne peuvent aller dans l'eau qu'accompagnés d'un adulte.\nLes visiteurs aux cheveux longs doivent porter un bonnet de bain." } },
          { id: 's4', de: 'Hinweis vom Apotheker:\nBitte nehmen Sie die Tabletten dreimal am Tag nach dem Essen.\nTrinken Sie dazu keinen Alkohol.\nWenn es Ihnen nach drei Tagen nicht besser geht, gehen Sie bitte noch einmal zum Arzt.', tr: { en: 'Note from the pharmacist:\nPlease take the tablets three times a day after meals.\nDo not drink alcohol with them.\nIf you do not feel better after three days, please go to the doctor again.', fr: "Remarque du pharmacien :\nVeuillez prendre les comprimés trois fois par jour après les repas.\nNe buvez pas d'alcool avec.\nSi vous n'allez pas mieux après trois jours, retournez voir le médecin." } },
          { id: 's5', de: 'Lauftreff Stadtpark\nBei Regen fällt der Lauftreff am Donnerstag aus. Wir laufen dann am Samstag um 10 Uhr.\nFragen? Rufen Sie Herrn Baum an: 0152 / 98 76 54.', tr: { en: 'Stadtpark running group\nIf it rains, the Thursday run is cancelled. We then run on Saturday at 10 a.m.\nQuestions? Call Mr Baum: 0152 / 98 76 54.', fr: "Groupe de course du Stadtpark\nS'il pleut, la course du jeudi n'a pas lieu. Nous courons alors le samedi à 10 h.\nDes questions ? Appelez M. Baum : 0152 / 98 76 54." } },
        ],
        items: [
          { id: 'q1', textId: 's1', q: 'Wann kann man nachmittags zum Arzt gehen?', qTr: { en: 'When can you see the doctor in the afternoon?', fr: 'Quand peut-on aller chez le médecin l’après-midi ?' }, options: ['Jeden Werktag.', 'Am Mittwoch und am Freitag.', 'Am Montag, Dienstag und Donnerstag.'], optionsTr: [{ en: 'Every weekday.', fr: 'Chaque jour ouvrable.' }, { en: 'On Wednesday and Friday.', fr: 'Le mercredi et le vendredi.' }, { en: 'On Monday, Tuesday and Thursday.', fr: 'Le lundi, le mardi et le jeudi.' }], answer: 2, explain: { en: 'Only Mon, Tue and Thu list 3–6 p.m.; Wednesday and Friday are mornings only.', fr: 'Seuls lun, mar et jeu indiquent 15 h–18 h ; mercredi et vendredi sont uniquement le matin.' } },
          { id: 'q2', textId: 's2', q: 'Was ist im April nicht möglich?', qTr: { en: 'What is not possible in April?', fr: 'Qu’est-ce qui n’est pas possible en avril ?' }, options: ['Die Sauna benutzen.', 'An den Geräten trainieren.', 'An einem Kurs teilnehmen.'], optionsTr: [{ en: 'Using the sauna.', fr: 'Utiliser le sauna.' }, { en: 'Training on the machines.', fr: 'S’entraîner sur les appareils.' }, { en: 'Taking part in a class.', fr: 'Participer à un cours.' }], answer: 0, explain: { en: 'The sauna area is closed until 30 April; machines and classes continue "wie immer".', fr: 'Le sauna est fermé jusqu’au 30 avril ; appareils et cours continuent « wie immer ».' } },
          { id: 'q3', textId: 's3', q: 'Was müssen Besucher mit langen Haaren tun?', qTr: { en: 'What must visitors with long hair do?', fr: 'Que doivent faire les visiteurs aux cheveux longs ?' }, options: ['Die Haare vorher föhnen.', 'Eine Badekappe tragen.', 'Draußen warten.'], optionsTr: [{ en: 'Dry their hair beforehand.', fr: 'Se sécher les cheveux avant.' }, { en: 'Wear a swimming cap.', fr: 'Porter un bonnet de bain.' }, { en: 'Wait outside.', fr: 'Attendre dehors.' }], answer: 1, explain: { en: '"müssen eine Badekappe tragen" = must wear a swimming cap.', fr: '« müssen eine Badekappe tragen » = doivent porter un bonnet de bain.' } },
          { id: 'q4', textId: 's4', q: 'Was soll man tun, wenn es nach drei Tagen nicht besser ist?', qTr: { en: 'What should you do if you are not better after three days?', fr: 'Que faut-il faire si cela ne va pas mieux après trois jours ?' }, options: ['Mehr Tabletten nehmen.', 'Die Tabletten nur noch abends nehmen.', 'Noch einmal zum Arzt gehen.'], optionsTr: [{ en: 'Take more tablets.', fr: 'Prendre plus de comprimés.' }, { en: 'Take the tablets only in the evening.', fr: 'Ne prendre les comprimés que le soir.' }, { en: 'Go to the doctor again.', fr: 'Retourner chez le médecin.' }], answer: 2, explain: { en: '"gehen Sie bitte noch einmal zum Arzt".', fr: '« gehen Sie bitte noch einmal zum Arzt ».' } },
          { id: 'q5', textId: 's5', q: 'Wann läuft die Gruppe, wenn es am Donnerstag regnet?', qTr: { en: 'When does the group run if it rains on Thursday?', fr: 'Quand le groupe court-il s’il pleut jeudi ?' }, options: ['Am Samstag um 10 Uhr.', 'Am Donnerstag in der Halle.', 'Gar nicht mehr in dieser Woche.'], optionsTr: [{ en: 'On Saturday at 10 a.m.', fr: 'Le samedi à 10 h.' }, { en: 'On Thursday in the hall.', fr: 'Le jeudi dans la salle.' }, { en: 'Not at all this week.', fr: 'Pas du tout cette semaine.' }], answer: 0, explain: { en: '"fällt aus … Wir laufen dann am Samstag um 10 Uhr."', fr: '« fällt aus … Wir laufen dann am Samstag um 10 Uhr. »' } },
        ],
      },
      {
        id: 'telc-a2-5-l2', teil: 2, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 2',
        instruction: 'Lesen Sie den Text. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the text. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez le texte. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Ich mache jetzt Sport!',
          de: 'Liebe Emma,\n\nwie geht es dir? Ich muss dir etwas erzählen: Vor drei Monaten war ich beim Arzt, weil mein Rücken oft wehgetan hat. Der Arzt hat gesagt: „Sie sitzen den ganzen Tag im Büro und bewegen sich zu wenig. Machen Sie mehr Sport!“ Zuerst wollte ich nicht, aber dann habe ich mich im Hallenbad angemeldet. Jetzt schwimme ich jeden Montag und Donnerstag nach der Arbeit. Eine Zehnerkarte kostet nur 25 Euro. Am Samstag fahre ich oft mit meiner Schwester Rad. Letzte Woche sind wir 30 Kilometer gefahren!\n\nAußerdem esse ich weniger Süßigkeiten. Ich habe schon fünf Kilo abgenommen und schlafe viel besser. Nur mein Rücken tut manchmal noch ein bisschen weh, aber das wird besser.\n\nHast du Lust, am nächsten Sonntag mit uns eine Radtour zu machen? Wir fahren um 10 Uhr los und machen ein Picknick am Fluss.\n\nLiebe Grüße\nLukas',
          tr: {
            en: 'Subject: I do sport now!\n\nDear Emma,\n\nHow are you? I have to tell you something: three months ago I went to the doctor because my back often hurt. The doctor said: "You sit in the office all day and do not move enough. Do more sport!" At first I did not want to, but then I signed up at the indoor pool. Now I swim every Monday and Thursday after work. A ten-visit card costs only 25 euros. On Saturday I often go cycling with my sister. Last week we cycled 30 kilometres!\n\nI also eat fewer sweets. I have already lost five kilos and sleep much better. Only my back still hurts a little sometimes, but it is getting better.\n\nWould you like to come on a bike tour with us next Sunday? We set off at 10 a.m. and have a picnic by the river.\n\nBest wishes\nLukas',
            fr: "Objet : Je fais du sport maintenant !\n\nChère Emma,\n\nComment vas-tu ? Je dois te raconter quelque chose : il y a trois mois, je suis allé chez le médecin parce que mon dos me faisait souvent mal. Le médecin a dit : « Vous êtes assis au bureau toute la journée et vous bougez trop peu. Faites plus de sport ! » Au début, je ne voulais pas, mais ensuite je me suis inscrit à la piscine couverte. Maintenant, je nage chaque lundi et jeudi après le travail. Une carte de dix entrées ne coûte que 25 euros. Le samedi, je fais souvent du vélo avec ma sœur. La semaine dernière, nous avons roulé 30 kilomètres !\n\nEn plus, je mange moins de sucreries. J'ai déjà perdu cinq kilos et je dors beaucoup mieux. Seul mon dos me fait encore un peu mal de temps en temps, mais ça s'améliore.\n\nAs-tu envie de faire une balade à vélo avec nous dimanche prochain ? Nous partons à 10 h et faisons un pique-nique au bord de la rivière.\n\nAffectueusement\nLukas",
          },
        }],
        items: [
          { id: 'q6', q: 'Der Arzt hat Lukas geraten, mehr Sport zu machen.', qTr: { en: 'The doctor advised Lukas to do more sport.', fr: 'Le médecin a conseillé à Lukas de faire plus de sport.' }, answer: true, explain: { en: '"Machen Sie mehr Sport!"', fr: '« Machen Sie mehr Sport ! »' } },
          { id: 'q7', q: 'Lukas schwimmt dreimal pro Woche.', qTr: { en: 'Lukas swims three times a week.', fr: 'Lukas nage trois fois par semaine.' }, answer: false, explain: { en: 'He swims on Monday and Thursday, so twice a week.', fr: 'Il nage le lundi et le jeudi, donc deux fois par semaine.' } },
          { id: 'q8', q: 'Am Samstag fährt Lukas oft mit seiner Schwester Rad.', qTr: { en: 'On Saturdays Lukas often cycles with his sister.', fr: 'Le samedi, Lukas fait souvent du vélo avec sa sœur.' }, answer: true, explain: { en: '"Am Samstag fahre ich oft mit meiner Schwester Rad."', fr: '« Am Samstag fahre ich oft mit meiner Schwester Rad. »' } },
          { id: 'q9', q: 'Lukas schläft jetzt besser als früher.', qTr: { en: 'Lukas sleeps better now than before.', fr: 'Lukas dort mieux qu’avant.' }, answer: true, explain: { en: '"… schlafe viel besser."', fr: '« … schlafe viel besser. »' } },
          { id: 'q10', q: 'Emma soll am Samstag mit Lukas ins Hallenbad gehen.', qTr: { en: 'Emma is supposed to go to the indoor pool with Lukas on Saturday.', fr: 'Emma doit aller à la piscine avec Lukas samedi.' }, answer: false, explain: { en: 'Lukas invites her on a bike tour next Sunday, not to the pool.', fr: 'Lukas l’invite à une balade à vélo dimanche prochain, pas à la piscine.' } },
        ],
      },
      {
        id: 'telc-a2-5-l3', teil: 3, kind: 'matching', allowNone: true,
        title: 'Teil 3',
        instruction: 'Lesen Sie die Situationen und die Anzeigen a bis h. Welche Anzeige passt zu welcher Situation? Jede Anzeige passt nur einmal. Wenn keine Anzeige passt, schreiben Sie x.',
        instructionTr: {
          en: 'Read the situations and the ads a to h. Which ad fits which situation? Each ad fits only once. If no ad fits, write x.',
          fr: "Lisez les situations et les annonces a à h. Quelle annonce correspond à quelle situation ? Chaque annonce ne convient qu'une fois. Si aucune annonce ne convient, écrivez x.",
        },
        texts: [
          { id: 'a', label: 'a', de: 'Hausarztpraxis Dr. Weiß\nSprechstunde auch samstags 9–12 Uhr\nOhne Termin\nBitte Versichertenkarte mitbringen', tr: { en: 'Dr Weiß family practice\nConsulting hours also on Saturdays 9 a.m.–12 noon\nNo appointment needed\nPlease bring your insurance card', fr: "Cabinet du Dr Weiß, médecin généraliste\nConsultation aussi le samedi de 9 h à 12 h\nSans rendez-vous\nVeuillez apporter votre carte d'assuré" } },
          { id: 'b', label: 'b', de: 'Schwimmkurs für Erwachsene\nFür Nichtschwimmer\nDienstag, 19 Uhr, Hallenbad Nord\n8 Abende, 64 Euro', tr: { en: 'Swimming course for adults\nFor non-swimmers\nTuesday, 7 p.m., Nord indoor pool\n8 evenings, 64 euros', fr: "Cours de natation pour adultes\nPour non-nageurs\nMardi, 19 h, piscine couverte Nord\n8 soirées, 64 euros" } },
          { id: 'c', label: 'c', de: 'Laufgruppe Parkrunners\nJeden Samstag um 8 Uhr\nTreffpunkt: Eingang Stadtpark\nKostenlos, alle sind willkommen', tr: { en: 'Parkrunners running group\nEvery Saturday at 8 a.m.\nMeeting point: Stadtpark entrance\nFree, everyone welcome', fr: "Groupe de course Parkrunners\nChaque samedi à 8 h\nPoint de rencontre : entrée du Stadtpark\nGratuit, tout le monde est bienvenu" } },
          { id: 'd', label: 'd', de: 'Reformhaus Natur\nVitamine, Kräuter und Tee\nBeratung gratis\nMo–Sa 9–18 Uhr', tr: { en: 'Natur health food shop\nVitamins, herbs and tea\nFree advice\nMon–Sat 9 a.m.–6 p.m.', fr: "Magasin diététique Natur\nVitamines, plantes et thé\nConseils gratuits\nlun–sam 9 h–18 h" } },
          { id: 'e', label: 'e', de: 'Fitnessstudio FitPlus\nEine Woche Probetraining gratis\nDanach ab 19 Euro im Monat\nKeine lange Vertragszeit', tr: { en: 'FitPlus gym\nOne week of free trial training\nThen from 19 euros a month\nNo long contract', fr: "Salle de sport FitPlus\nUne semaine d'essai gratuite\nEnsuite à partir de 19 euros par mois\nPas de long engagement" } },
          { id: 'f', label: 'f', de: 'Rückenschule\nVolkshochschule, Raum 4\nMittwoch, 18 Uhr, 10 Abende\nDie Krankenkasse zahlt einen Teil', tr: { en: 'Back school\nAdult education centre, room 4\nWednesday, 6 p.m., 10 evenings\nThe health insurance pays part of the cost', fr: "École du dos\nUniversité populaire, salle 4\nMercredi, 18 h, 10 soirées\nL'assurance maladie prend en charge une partie" } },
          { id: 'g', label: 'g', de: 'Tennisclub Grün-Weiß\nPlätze online buchen\nSchläger leihen: 3 Euro\nTäglich 8–21 Uhr', tr: { en: 'Grün-Weiß tennis club\nBook courts online\nRacket hire: 3 euros\nDaily 8 a.m.–9 p.m.', fr: "Tennis-club Grün-Weiß\nRéservation des courts en ligne\nLocation de raquette : 3 euros\nTous les jours de 8 h à 21 h" } },
          { id: 'h', label: 'h', de: 'Wanderverein Bergfreunde\nJeden ersten Sonntag im Monat\nTreffpunkt: Busbahnhof, 9 Uhr\nGäste zahlen 5 Euro', tr: { en: 'Bergfreunde hiking club\nEvery first Sunday of the month\nMeeting point: bus station, 9 a.m.\nGuests pay 5 euros', fr: "Club de randonnée Bergfreunde\nChaque premier dimanche du mois\nPoint de rencontre : gare routière, 9 h\nLes invités paient 5 euros" } },
        ],
        items: [
          { id: 'q11', q: 'Sie haben Rückenschmerzen und möchten einen Kurs besuchen. Die Krankenkasse soll etwas bezahlen.', qTr: { en: 'You have back pain and would like to take a course. Your health insurance should pay something.', fr: "Vous avez mal au dos et voulez suivre un cours. L'assurance maladie doit payer une partie." }, answer: 'f', explain: { en: 'The back school lists "Die Krankenkasse zahlt einen Teil".', fr: "L'école du dos indique « Die Krankenkasse zahlt einen Teil »." } },
          { id: 'q12', q: 'Sie können nicht schwimmen und möchten es abends lernen.', qTr: { en: 'You cannot swim and want to learn in the evening.', fr: 'Vous ne savez pas nager et voulez apprendre le soir.' }, answer: 'b', explain: { en: 'A swimming course for non-swimmers on Tuesday at 7 p.m.', fr: 'Un cours de natation pour non-nageurs le mardi à 19 h.' } },
          { id: 'q13', q: 'Sie möchten ein neues Fahrrad kaufen.', qTr: { en: 'You want to buy a new bicycle.', fr: 'Vous voulez acheter un nouveau vélo.' }, answer: 'x', explain: { en: 'No ad sells bicycles, so the answer is x. Ads a, d, g and h are not needed for any situation.', fr: "Aucune annonce ne vend de vélos, la réponse est donc x. Les annonces a, d, g et h ne servent à aucune situation." } },
          { id: 'q14', q: 'Sie möchten am Samstagmorgen mit anderen joggen. Es soll nichts kosten.', qTr: { en: 'You want to jog with other people on Saturday morning. It should be free.', fr: 'Vous voulez courir avec d’autres personnes le samedi matin. Cela doit être gratuit.' }, answer: 'c', explain: { en: 'The running group meets every Saturday at 8 a.m. and is free.', fr: 'Le groupe de course se retrouve chaque samedi à 8 h et c’est gratuit.' } },
          { id: 'q15', q: 'Sie möchten ein Fitnessstudio testen, bevor Sie viel Geld bezahlen.', qTr: { en: 'You want to try out a gym before paying a lot of money.', fr: 'Vous voulez essayer une salle de sport avant de payer beaucoup d’argent.' }, answer: 'e', explain: { en: '"Eine Woche Probetraining gratis" = a free trial week.', fr: '« Eine Woche Probetraining gratis » = une semaine d’essai gratuite.' } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'telc-a2-5-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten sich für einen Yogakurs anmelden. Ihre Freundin hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to sign up for a yoga course. Your friend helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez vous inscrire à un cours de yoga. Votre amie vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Ich heiße Katarina Novak. Ich bin am 23. März 1990 in Prag geboren und wohne jetzt in Bremen. Ich möchte gern Yoga machen. Meine Handynummer ist 0162 / 445 67 89.',
          tr: {
            en: 'My name is Katarina Novak. I was born in Prague on 23 March 1990 and now live in Bremen. I would like to do yoga. My mobile number is 0162 / 445 67 89.',
            fr: "Je m'appelle Katarina Novak. Je suis née à Prague le 23 mars 1990 et j'habite maintenant à Brême. Je voudrais faire du yoga. Mon numéro de portable est le 0162 / 445 67 89.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Novak'] },
          { id: 'f2', label: 'Geburtsdatum', labelTr: { en: 'Date of birth', fr: 'Date de naissance' }, accept: ['23.03.1990', '23.3.1990', '23. März 1990', '23 März 1990', '23 Maerz 1990', '23. Maerz 1990'] },
          { id: 'f3', label: 'Wohnort', labelTr: { en: 'Town', fr: 'Ville' }, accept: ['Bremen'] },
          { id: 'f4', label: 'Kurs', labelTr: { en: 'Course', fr: 'Cours' }, accept: ['Yoga'] },
          { id: 'f5', label: 'Handynummer', labelTr: { en: 'Mobile number', fr: 'Numéro de portable' }, accept: ['0162 / 445 67 89', '0162 445 67 89', '0162/4456789', '0162 4456789', '01624456789'] },
        ],
      },
      {
        id: 'telc-a2-5-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Sie möchten am Wochenende mit Ihrer Freundin Mia zum Schwimmen gehen. Schreiben Sie ihr eine E-Mail (ca. 40 Wörter). Vier Punkte stehen zur Auswahl: Schreiben Sie zu drei Punkten.',
        instructionTr: {
          en: 'You want to go swimming with your friend Mia at the weekend. Write her an e-mail (about 40 words). Four points are given: write about three of them.',
          fr: "Vous voulez aller nager avec votre amie Mia ce week-end. Écrivez-lui un e-mail (environ 40 mots). Quatre points sont proposés : traitez-en trois.",
        },
        points: [
          { id: 'p1', de: 'Wann und wo treffen Sie sich?', tr: { en: 'When and where do you meet?', fr: 'Quand et où vous retrouvez-vous ?' }, keywords: ['treffen', 'uhr', 'samstag', 'sonntag', 'hallenbad'] },
          { id: 'p2', de: 'Was soll Mia mitbringen?', tr: { en: 'What should Mia bring?', fr: 'Que doit apporter Mia ?' }, keywords: ['handtuch', 'badeanzug', 'badehose', 'badekappe', 'mitbring', 'bring'] },
          { id: 'p3', de: 'Was machen Sie nach dem Schwimmen?', tr: { en: 'What do you do after swimming?', fr: 'Que faites-vous après la natation ?' }, keywords: ['danach', 'café', 'eis', 'pizza', 'essen'] },
          { id: 'p4', de: 'Warum möchten Sie mehr Sport machen?', tr: { en: 'Why do you want to do more sport?', fr: 'Pourquoi voulez-vous faire plus de sport ?' }, keywords: ['gesund', 'fit', 'rücken', 'bewegung', 'abnehm'] },
        ],
        minWords: 35, maxWords: 55,
        model: {
          de: 'Liebe Mia,\n\nhast du am Samstag Lust auf Schwimmen? Wir treffen uns um 10 Uhr vor dem Hallenbad. Bring bitte ein Handtuch und eine Badekappe mit. Danach können wir im Café ein Eis essen. Ich möchte mehr Sport machen, weil das gesund ist und ich fitter werden will.\n\nBis bald\nJulia',
          tr: {
            en: 'Dear Mia,\n\nDo you feel like swimming on Saturday? We will meet at 10 a.m. in front of the indoor pool. Please bring a towel and a swimming cap. Afterwards we can have an ice cream in a café. I want to do more sport because it is healthy and I want to get fitter.\n\nSee you soon\nJulia',
            fr: "Chère Mia,\n\nAs-tu envie d'aller nager samedi ? Nous nous retrouvons à 10 h devant la piscine couverte. Apporte s'il te plaît une serviette et un bonnet de bain. Ensuite, nous pourrons manger une glace dans un café. Je veux faire plus de sport parce que c'est bon pour la santé et que je veux être en meilleure forme.\n\nÀ bientôt\nJulia",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a2-5-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Herkunft, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, origin, place of residence, languages, job, hobby.', fr: "Présentez-vous. Les mots-clés vous aident : nom, origine, lieu de résidence, langues, profession, loisir." },
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Guten Tag, ich heiße Aylin Demir. Das schreibt man D-E-M-I-R.', sampleTr: { en: 'Good day, my name is Aylin Demir. You write it D-E-M-I-R.', fr: "Bonjour, je m'appelle Aylin Demir. Cela s'écrit D-E-M-I-R." } },
          { id: 'p1b', cue: 'Herkunft', cueTr: { en: 'Origin', fr: 'Origine' }, sample: 'Ich komme aus der Türkei, aus Izmir. Das ist eine Stadt am Meer.', sampleTr: { en: 'I come from Turkey, from Izmir. It is a city by the sea.', fr: "Je viens de Turquie, d'Izmir. C'est une ville au bord de la mer." } },
          { id: 'p1c', cue: 'Wohnort', cueTr: { en: 'Where you live', fr: 'Lieu de résidence' }, sample: 'Ich wohne seit einem Jahr in Köln. Meine Wohnung ist nicht weit vom Rhein entfernt.', sampleTr: { en: 'I have lived in Cologne for a year. My flat is not far from the Rhine.', fr: "J'habite à Cologne depuis un an. Mon appartement n'est pas loin du Rhin." } },
          { id: 'p1d', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Meine Muttersprache ist Türkisch. Ich spreche auch ein bisschen Englisch und lerne jetzt Deutsch.', sampleTr: { en: 'My mother tongue is Turkish. I also speak a little English and I am now learning German.', fr: "Ma langue maternelle est le turc. Je parle aussi un peu anglais et j'apprends maintenant l'allemand." } },
          { id: 'p1e', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich bin Krankenschwester von Beruf. Im Moment arbeite ich noch nicht, weil ich zuerst Deutsch lernen möchte.', sampleTr: { en: 'I am a nurse by profession. At the moment I am not working yet because I first want to learn German.', fr: "Je suis infirmière de profession. Pour le moment, je ne travaille pas encore, parce que je veux d'abord apprendre l'allemand." } },
          { id: 'p1f', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'In meiner Freizeit gehe ich gern schwimmen und koche mit Freundinnen.', sampleTr: { en: 'In my free time I like to go swimming and cook with friends.', fr: "Pendant mon temps libre, j'aime aller nager et cuisiner avec des amies." } },
        ],
      },
      {
        id: 'telc-a2-5-p2', teil: 2, title: 'Teil 2: Ein Alltagsgespräch führen', minutes: 4,
        instruction: 'Führen Sie mit Ihrem Partner / Ihrer Partnerin ein Alltagsgespräch zu einem Thema. Erzählen Sie von sich und stellen Sie eine Frage.',
        instructionTr: { en: "Have an everyday conversation with your partner about a topic. Tell about yourself and ask a question.", fr: "Menez avec votre partenaire une conversation du quotidien sur un thème. Parlez de vous et posez une question." },
        prompts: [
          { id: 'p2a', cue: 'Thema: Fitness – Wie bleiben Sie fit?', cueTr: { en: 'Topic: Fitness – How do you stay fit?', fr: 'Thème : Forme – Comment restez-vous en forme ?' }, sample: 'Ich gehe zweimal pro Woche schwimmen und fahre mit dem Rad zur Arbeit. Das macht mir Spaß, und danach fühle ich mich besser. Was machst du, um fit zu bleiben?', sampleTr: { en: 'I go swimming twice a week and cycle to work. I enjoy it, and afterwards I feel better. What do you do to stay fit?', fr: "Je vais nager deux fois par semaine et je vais au travail à vélo. Ça me plaît, et après je me sens mieux. Et toi, que fais-tu pour rester en forme ?" } },
          { id: 'p2b', cue: 'Thema: Lieblingssport – Welchen Sport mögen Sie und mit wem machen Sie ihn?', cueTr: { en: 'Topic: Favourite sport – Which sport do you like and who do you do it with?', fr: 'Thème : Sport préféré – Quel sport aimez-vous et avec qui le pratiquez-vous ?' }, sample: 'Ich spiele am liebsten Volleyball. Jeden Mittwoch trainiere ich mit meinen Kollegen in der Turnhalle. Wir haben viel Spaß zusammen. Welchen Sport machst du gern?', sampleTr: { en: 'My favourite is playing volleyball. Every Wednesday I train with my colleagues in the gym. We have a lot of fun together. Which sport do you like to do?', fr: "Ce que je préfère, c'est jouer au volley. Chaque mercredi, je m'entraîne avec mes collègues dans le gymnase. Nous nous amusons beaucoup ensemble. Quel sport aimes-tu pratiquer ?" } },
          { id: 'p2c', cue: 'Thema: Arztbesuch – Wann waren Sie zuletzt beim Arzt?', cueTr: { en: 'Topic: Doctor visit – When were you last at the doctor?', fr: 'Thème : Chez le médecin – Quand avez-vous consulté pour la dernière fois ?' }, sample: 'Ich war vor zwei Monaten beim Arzt, weil ich eine starke Erkältung hatte. Ich habe Tabletten bekommen und bin eine Woche zu Hause geblieben. Und du, gehst du oft zum Arzt?', sampleTr: { en: 'I was at the doctor two months ago because I had a bad cold. I got tablets and stayed at home for a week. And you, do you go to the doctor often?', fr: "J'étais chez le médecin il y a deux mois, parce que j'avais un gros rhume. J'ai reçu des comprimés et je suis resté une semaine à la maison. Et toi, vas-tu souvent chez le médecin ?" } },
          { id: 'p2d', cue: 'Thema: Ernährung – Was essen Sie an einem normalen Tag?', cueTr: { en: 'Topic: Diet – What do you eat on a normal day?', fr: 'Thème : Alimentation – Que mangez-vous un jour normal ?' }, sample: 'Zum Frühstück esse ich Brot mit Käse und trinke Tee. Mittags esse ich in der Kantine, meistens Gemüse mit Reis. Abends koche ich zu Hause. Isst du auch gern Gemüse?', sampleTr: { en: 'For breakfast I eat bread with cheese and drink tea. At lunch I eat in the canteen, mostly vegetables with rice. In the evening I cook at home. Do you like vegetables too?', fr: "Au petit-déjeuner, je mange du pain avec du fromage et je bois du thé. À midi, je mange à la cantine, surtout des légumes avec du riz. Le soir, je cuisine à la maison. Aimes-tu aussi les légumes ?" } },
          { id: 'p2e', cue: 'Thema: Schlaf und Stress – Was hilft Ihnen gegen Stress?', cueTr: { en: 'Topic: Sleep and stress – What helps you against stress?', fr: 'Thème : Sommeil et stress – Qu’est-ce qui vous aide contre le stress ?' }, sample: 'Wenn ich Stress habe, gehe ich spazieren oder höre Musik. Ich versuche auch, vor 23 Uhr ins Bett zu gehen, denn sonst bin ich am Morgen müde. Wie schläfst du?', sampleTr: { en: 'When I am stressed I go for a walk or listen to music. I also try to go to bed before 11 p.m., because otherwise I am tired in the morning. How do you sleep?', fr: "Quand je suis stressé, je me promène ou j'écoute de la musique. J'essaie aussi d'aller au lit avant 23 h, sinon je suis fatigué le matin. Et toi, comment dors-tu ?" } },
          { id: 'p2f', cue: 'Thema: Kindheit – Welchen Sport haben Sie als Kind gemacht?', cueTr: { en: 'Topic: Childhood – Which sport did you do as a child?', fr: 'Thème : Enfance – Quel sport avez-vous pratiqué enfant ?' }, sample: 'Als Kind habe ich jeden Nachmittag Fußball gespielt, meistens auf der Straße. Später bin ich in einen Verein gegangen. Hast du als Kind auch Sport gemacht?', sampleTr: { en: 'As a child I played football every afternoon, mostly in the street. Later I joined a club. Did you do sport as a child too?', fr: "Enfant, je jouais au football tous les après-midis, surtout dans la rue. Plus tard, je suis entré dans un club. Toi aussi, tu faisais du sport enfant ?" } },
        ],
      },
      {
        id: 'telc-a2-5-p3', teil: 3, title: 'Teil 3: Etwas aushandeln', minutes: 4,
        instruction: 'Sie möchten mit Ihrem Partner / Ihrer Partnerin einen Sporttag für Freunde und Kollegen planen. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge, handeln Sie die Details aus und einigen Sie sich.',
        instructionTr: { en: 'You want to plan a sports day for friends and colleagues with your partner. Make suggestions, react to the suggestions, negotiate the details and agree.', fr: "Vous voulez organiser avec votre partenaire une journée sportive pour des amis et des collègues. Faites des propositions, réagissez-y, négociez les détails et mettez-vous d'accord." },
        prompts: [
          { id: 'p3a', cue: 'Wann und wo findet der Sporttag statt?', cueTr: { en: 'When and where does the sports day take place?', fr: 'Quand et où a lieu la journée sportive ?' }, sample: 'Ich schlage den Sonntag in drei Wochen vor. Wo sollen wir den Sporttag machen? Vielleicht im Stadtpark, da gibt es eine große Wiese. – Gute Idee, aber dann brauchen wir gutes Wetter.', sampleTr: { en: "I suggest the Sunday in three weeks. Where shall we hold the sports day? Maybe in the Stadtpark, there is a big meadow. – Good idea, but then we need good weather.", fr: "Je propose le dimanche dans trois semaines. Où faisons-nous la journée sportive ? Peut-être au Stadtpark, il y a une grande pelouse. – Bonne idée, mais il nous faut alors du beau temps." } },
          { id: 'p3b', cue: 'Welche Sportarten und Spiele?', cueTr: { en: 'Which sports and games?', fr: 'Quels sports et quels jeux ?' }, sample: 'Wir könnten Fußball und Volleyball spielen. Für Kinder machen wir ein Spiel mit einem Ball. – Ich finde Federball auch gut, weil jeder mitmachen kann. Passt das?', sampleTr: { en: "We could play football and volleyball. For children we do a game with a ball. – I also like badminton because everyone can join in. Is that OK?", fr: "Nous pourrions jouer au football et au volley. Pour les enfants, nous faisons un jeu avec un ballon. – J'aime aussi le badminton, parce que tout le monde peut participer. Ça te va ?" } },
          { id: 'p3c', cue: 'Wer wird eingeladen und wie sagen wir es?', cueTr: { en: 'Who is invited and how do we tell them?', fr: 'Qui est invité et comment le leur dire ?' }, sample: 'Wir laden Freunde, Kollegen und ihre Familien ein. Ich schreibe eine Nachricht in unsere Gruppe. – Das ist einfach. Ich rufe noch die Nachbarn an, einverstanden?', sampleTr: { en: "We invite friends, colleagues and their families. I will write a message in our group. – That is easy. I will also phone the neighbours, agreed?", fr: "Nous invitons des amis, des collègues et leurs familles. J'écris un message dans notre groupe. – C'est simple. J'appelle aussi les voisins, d'accord ?" } },
          { id: 'p3d', cue: 'Essen und Getränke', cueTr: { en: 'Food and drinks', fr: 'Nourriture et boissons' }, sample: 'Nach dem Sport haben alle Hunger. Ich kann Obst und Brötchen mitbringen. – Dann kaufe ich viel Wasser und Saft. Können wir auch grillen?', sampleTr: { en: "After sport everyone is hungry. I can bring fruit and rolls. – Then I will buy lots of water and juice. Can we also have a barbecue?", fr: "Après le sport, tout le monde a faim. Je peux apporter des fruits et des petits pains. – Alors j'achète beaucoup d'eau et de jus. Pouvons-nous aussi faire un barbecue ?" } },
          { id: 'p3e', cue: 'Was müssen alle mitbringen?', cueTr: { en: 'What does everyone have to bring?', fr: 'Que doivent apporter tous les participants ?' }, sample: 'Alle sollen Sportschuhe und eine Wasserflasche mitbringen. Ich bringe auch Pflaster mit, falls sich jemand verletzt. – Gut. Und eine Sonnencreme ist wichtig, wenn die Sonne scheint.', sampleTr: { en: "Everyone should bring sports shoes and a water bottle. I will also bring plasters in case someone gets hurt. – Good. And sun cream is important if the sun is shining.", fr: "Tout le monde doit apporter des chaussures de sport et une bouteille d'eau. J'apporte aussi des pansements au cas où quelqu'un se blesserait. – Bien. Et la crème solaire est importante s'il y a du soleil." } },
          { id: 'p3f', cue: 'Was machen wir, wenn es regnet?', cueTr: { en: 'What do we do if it rains?', fr: 'Que faisons-nous s’il pleut ?' }, sample: 'Wenn es regnet, könnten wir in die Turnhalle gehen. – Gute Idee. Ich frage morgen die Schule, ob wir die Halle mieten dürfen. Dann ist der Termin sicher.', sampleTr: { en: "If it rains we could go to the gym. – Good idea. Tomorrow I will ask the school whether we may rent the hall. Then the date is safe.", fr: "S'il pleut, nous pourrions aller au gymnase. – Bonne idée. Demain, je demande à l'école si nous pouvons louer la salle. Alors la date est sûre." } },
        ],
      },
    ],
  },
  {
    id: 'telc-a2-6',
    board: 'telc',
    level: 'A2',
    number: 6,
    lesen: [
      {
        id: 'telc-a2-6-l1', teil: 1, kind: 'multipleChoice',
        title: 'Teil 1',
        instruction: 'Lesen Sie die Hinweise und Schilder. Was ist richtig? Kreuzen Sie a, b oder c an.',
        instructionTr: {
          en: 'Read the notices and signs. What is correct? Tick a, b or c.',
          fr: 'Lisez les avis et les panneaux. Quelle est la bonne réponse ? Cochez a, b ou c.',
        },
        texts: [
          { id: 's1', de: 'Information der Bahn\nWegen Bauarbeiten fahren am Wochenende zwischen Hannover und Celle keine Züge.\nEin Ersatzbus fährt vor dem Bahnhof ab. Bitte rechnen Sie mit 30 Minuten mehr Fahrzeit.', tr: { en: 'Railway information\nBecause of construction work no trains run between Hannover and Celle at the weekend.\nA replacement bus leaves from in front of the station. Please allow 30 minutes extra travel time.', fr: "Information de la compagnie ferroviaire\nEn raison de travaux, aucun train ne circule entre Hanovre et Celle le week-end.\nUn bus de remplacement part devant la gare. Prévoyez 30 minutes de trajet en plus." } },
          { id: 's2', de: 'Flughafen Nordstadt – Sicherheitskontrolle\nFlüssigkeiten im Handgepäck nur in kleinen Behältern bis 100 ml.\nBitte legen Sie Laptops und Tablets in eine extra Box.', tr: { en: 'Nordstadt airport – security check\nLiquids in hand luggage only in small containers of up to 100 ml.\nPlease put laptops and tablets in a separate tray.', fr: "Aéroport de Nordstadt – contrôle de sécurité\nLiquides dans le bagage à main uniquement dans de petits récipients jusqu'à 100 ml.\nVeuillez placer ordinateurs portables et tablettes dans un bac séparé." } },
          { id: 's3', de: 'Parkhaus Zentrum\nDie ersten 30 Minuten sind kostenlos. Danach kostet jede Stunde 2 Euro.\nBitte zahlen Sie am Automaten, bevor Sie zu Ihrem Auto gehen.', tr: { en: 'Zentrum car park\nThe first 30 minutes are free. After that every hour costs 2 euros.\nPlease pay at the machine before you go to your car.', fr: "Parking Zentrum\nLes 30 premières minutes sont gratuites. Ensuite, chaque heure coûte 2 euros.\nVeuillez payer à l'horodateur avant de rejoindre votre voiture." } },
          { id: 's4', de: 'Neuer Fahrplan ab 1. März\nBus 5 fährt montags bis freitags alle 10 Minuten, samstags und sonntags nur alle 30 Minuten.\nFahrkarten gibt es auch beim Fahrer.', tr: { en: 'New timetable from 1 March\nBus 5 runs every 10 minutes from Monday to Friday, on Saturdays and Sundays only every 30 minutes.\nTickets are also available from the driver.', fr: "Nouvel horaire à partir du 1er mars\nLe bus 5 circule toutes les 10 minutes du lundi au vendredi, le samedi et le dimanche seulement toutes les 30 minutes.\nLes billets sont aussi en vente auprès du conducteur." } },
          { id: 's5', de: 'Fahrradverleih am Fluss\nLeihgebühr: 8 Euro pro Tag.\nHelme gibt es kostenlos dazu.\nBitte bringen Sie bei der Abholung Ihren Ausweis mit.', tr: { en: 'Bicycle hire by the river\nHire fee: 8 euros per day.\nHelmets are included free of charge.\nPlease bring your ID when you collect the bike.', fr: "Location de vélos au bord de la rivière\nTarif : 8 euros par jour.\nLes casques sont fournis gratuitement.\nVeuillez apporter votre pièce d'identité lors du retrait." } },
        ],
        items: [
          { id: 'q1', textId: 's1', q: 'Wie kommt man am Wochenende von Hannover nach Celle?', qTr: { en: 'How do you get from Hannover to Celle at the weekend?', fr: 'Comment aller de Hanovre à Celle le week-end ?' }, options: ['Mit dem Zug.', 'Mit dem Ersatzbus.', 'Das ist nicht möglich.'], optionsTr: [{ en: 'By train.', fr: 'En train.' }, { en: 'By replacement bus.', fr: 'En bus de remplacement.' }, { en: 'That is not possible.', fr: 'Ce n’est pas possible.' }], answer: 1, explain: { en: 'No trains run, but a replacement bus leaves in front of the station (and takes 30 minutes longer).', fr: 'Aucun train ne circule, mais un bus de remplacement part devant la gare (et met 30 minutes de plus).' } },
          { id: 'q2', textId: 's2', q: 'Was gilt für Flüssigkeiten im Handgepäck?', qTr: { en: 'What applies to liquids in hand luggage?', fr: 'Que prévoit la règle pour les liquides dans le bagage à main ?' }, options: ['Alle Flaschen sind erlaubt.', 'Sie müssen im Koffer sein.', 'Die Behälter dürfen höchstens 100 ml haben.'], optionsTr: [{ en: 'All bottles are allowed.', fr: 'Toutes les bouteilles sont autorisées.' }, { en: 'They must be in the suitcase.', fr: 'Ils doivent être dans la valise.' }, { en: 'The containers may hold 100 ml at most.', fr: 'Les récipients ne doivent pas dépasser 100 ml.' }], answer: 2, explain: { en: '"nur in kleinen Behältern bis 100 ml" = only in containers of up to 100 ml.', fr: '« nur in kleinen Behältern bis 100 ml » = uniquement dans des récipients jusqu’à 100 ml.' } },
          { id: 'q3', textId: 's3', q: 'Wie viel kostet es, wenn man 30 Minuten parkt?', qTr: { en: 'How much does it cost to park for 30 minutes?', fr: 'Combien coûte un stationnement de 30 minutes ?' }, options: ['Nichts.', '1 Euro.', '2 Euro.'], optionsTr: [{ en: 'Nothing.', fr: 'Rien.' }, { en: '1 euro.', fr: '1 euro.' }, { en: '2 euros.', fr: '2 euros.' }], answer: 0, explain: { en: '"Die ersten 30 Minuten sind kostenlos."', fr: '« Die ersten 30 Minuten sind kostenlos. »' } },
          { id: 'q4', textId: 's4', q: 'Wie oft fährt Bus 5 am Sonntag?', qTr: { en: 'How often does bus 5 run on Sunday?', fr: 'À quelle fréquence le bus 5 circule-t-il le dimanche ?' }, options: ['Alle 10 Minuten.', 'Alle 30 Minuten.', 'Gar nicht.'], optionsTr: [{ en: 'Every 10 minutes.', fr: 'Toutes les 10 minutes.' }, { en: 'Every 30 minutes.', fr: 'Toutes les 30 minutes.' }, { en: 'Not at all.', fr: 'Pas du tout.' }], answer: 1, explain: { en: 'Saturdays and Sundays: "nur alle 30 Minuten".', fr: 'Samedi et dimanche : « nur alle 30 Minuten ».' } },
          { id: 'q5', textId: 's5', q: 'Was bekommt man beim Fahrradverleih gratis?', qTr: { en: 'What do you get free of charge at the bicycle hire?', fr: 'Que reçoit-on gratuitement à la location de vélos ?' }, options: ['Das Fahrrad.', 'Eine Stadtkarte.', 'Einen Helm.'], optionsTr: [{ en: 'The bicycle.', fr: 'Le vélo.' }, { en: 'A city map.', fr: 'Un plan de la ville.' }, { en: 'A helmet.', fr: 'Un casque.' }], answer: 2, explain: { en: '"Helme gibt es kostenlos dazu."', fr: '« Helme gibt es kostenlos dazu. »' } },
        ],
      },
      {
        id: 'telc-a2-6-l2', teil: 2, kind: 'trueFalse', labels: 'rf',
        title: 'Teil 2',
        instruction: 'Lesen Sie den Text. Sind die Sätze richtig oder falsch? Kreuzen Sie an.',
        instructionTr: {
          en: 'Read the text. Are the sentences true or false? Tick the answer.',
          fr: 'Lisez le texte. Les phrases sont-elles vraies ou fausses ? Cochez la réponse.',
        },
        texts: [{
          id: 't1',
          title: 'Betreff: Viele Grüße aus Wien',
          de: 'Liebe Mama,\n\nwir sind gut in Wien angekommen! Am Freitagmorgen sind Ana und ich um 6 Uhr in München in den Zug gestiegen. Die Fahrt hat fast fünf Stunden gedauert, aber das war nicht langweilig, denn wir haben viel gelesen und Kaffee getrunken. Unser Hotel liegt direkt neben dem Hauptbahnhof. Das Zimmer ist klein, aber sauber, und das Frühstück ist sehr gut.\n\nAm Samstag hat es leider den ganzen Tag geregnet. Deshalb sind wir in ein Museum gegangen und danach in ein Café. Heute scheint die Sonne, und wir besuchen das Schloss Schönbrunn. Wir haben eine Dreitageskarte für Bus und U-Bahn gekauft. Sie kostet 17 Euro, und damit kommen wir überall hin.\n\nAm Montag fahren wir um 18.40 Uhr zurück. Ich rufe dich am Abend an!\n\nLiebe Grüße\nElif',
          tr: {
            en: 'Subject: Many greetings from Vienna\n\nDear Mum,\n\nWe have arrived safely in Vienna! On Friday morning Ana and I got on the train in Munich at 6 o’clock. The journey took almost five hours, but it was not boring because we read a lot and drank coffee. Our hotel is right next to the main station. The room is small but clean, and the breakfast is very good.\n\nUnfortunately it rained all day on Saturday. So we went to a museum and afterwards to a café. Today the sun is shining and we are visiting Schönbrunn Palace. We bought a three-day ticket for bus and underground. It costs 17 euros and with it we can get everywhere.\n\nOn Monday we travel back at 6.40 p.m. I will call you in the evening!\n\nLots of love\nElif',
            fr: "Objet : Bonjour de Vienne\n\nChère maman,\n\nNous sommes bien arrivées à Vienne ! Vendredi matin, Ana et moi sommes montées dans le train à Munich à 6 h. Le trajet a duré presque cinq heures, mais ce n'était pas ennuyeux, car nous avons beaucoup lu et bu du café. Notre hôtel est juste à côté de la gare centrale. La chambre est petite mais propre, et le petit-déjeuner est très bon.\n\nSamedi, il a malheureusement plu toute la journée. Nous sommes donc allées dans un musée, puis dans un café. Aujourd'hui, il y a du soleil et nous visitons le château de Schönbrunn. Nous avons acheté un forfait de trois jours pour le bus et le métro. Il coûte 17 euros et avec lui nous pouvons aller partout.\n\nLundi, nous repartons à 18 h 40. Je t'appelle ce soir !\n\nGrosses bises\nElif",
          },
        }],
        items: [
          { id: 'q6', q: 'Elif und Ana sind mit dem Zug nach Wien gefahren.', qTr: { en: 'Elif and Ana travelled to Vienna by train.', fr: 'Elif et Ana sont allées à Vienne en train.' }, answer: true, explain: { en: '"… in München in den Zug gestiegen."', fr: '« … in München in den Zug gestiegen. »' } },
          { id: 'q7', q: 'Die Zugfahrt hat zehn Stunden gedauert.', qTr: { en: 'The train journey took ten hours.', fr: 'Le trajet en train a duré dix heures.' }, answer: false, explain: { en: 'It took almost five hours.', fr: 'Il a duré presque cinq heures.' } },
          { id: 'q8', q: 'Das Hotel ist weit vom Hauptbahnhof entfernt.', qTr: { en: 'The hotel is far from the main station.', fr: 'L’hôtel est loin de la gare centrale.' }, answer: false, explain: { en: 'It is "direkt neben dem Hauptbahnhof".', fr: 'Il est « direkt neben dem Hauptbahnhof ».' } },
          { id: 'q9', q: 'Am Samstag sind die Freundinnen wegen des Regens ins Museum gegangen.', qTr: { en: 'On Saturday the friends went to the museum because of the rain.', fr: 'Samedi, les amies sont allées au musée à cause de la pluie.' }, answer: true, explain: { en: '"Am Samstag hat es … geregnet. Deshalb sind wir in ein Museum gegangen."', fr: '« Am Samstag hat es … geregnet. Deshalb sind wir in ein Museum gegangen. »' } },
          { id: 'q10', q: 'Die Rückfahrt ist am Dienstag.', qTr: { en: 'The journey back is on Tuesday.', fr: 'Le retour est mardi.' }, answer: false, explain: { en: 'They travel back on Monday at 6.40 p.m.', fr: 'Elles repartent lundi à 18 h 40.' } },
        ],
      },
      {
        id: 'telc-a2-6-l3', teil: 3, kind: 'matching', allowNone: true,
        title: 'Teil 3',
        instruction: 'Lesen Sie die Situationen und die Anzeigen a bis h. Welche Anzeige passt zu welcher Situation? Jede Anzeige passt nur einmal. Wenn keine Anzeige passt, schreiben Sie x.',
        instructionTr: {
          en: 'Read the situations and the ads a to h. Which ad fits which situation? Each ad fits only once. If no ad fits, write x.',
          fr: "Lisez les situations et les annonces a à h. Quelle annonce correspond à quelle situation ? Chaque annonce ne convient qu'une fois. Si aucune annonce ne convient, écrivez x.",
        },
        texts: [
          { id: 'a', label: 'a', de: 'Busreisen Klein\nTagesfahrt zum Bodensee\nSamstag, Abfahrt 7 Uhr am Busbahnhof\n35 Euro, Mittagessen inklusive', tr: { en: 'Klein coach trips\nDay trip to Lake Constance\nSaturday, departure 7 a.m. at the bus station\n35 euros, lunch included', fr: "Voyages en car Klein\nExcursion d'une journée au lac de Constance\nSamedi, départ à 7 h à la gare routière\n35 euros, déjeuner compris" } },
          { id: 'b', label: 'b', de: 'Mietwagen Schnell\nKleinwagen ab 29 Euro pro Tag\nAbholung am Bahnhof\nFührerschein nötig, ab 21 Jahren', tr: { en: 'Schnell car hire\nSmall cars from 29 euros per day\nCollection at the station\nDriving licence required, from age 21', fr: "Location de voitures Schnell\nPetites voitures à partir de 29 euros par jour\nRetrait à la gare\nPermis de conduire obligatoire, à partir de 21 ans" } },
          { id: 'c', label: 'c', de: 'Hostel Zentral\nBett im Mehrbettzimmer 18 Euro\nGemeinschaftsküche für alle Gäste\nRezeption rund um die Uhr', tr: { en: 'Hostel Zentral\nBed in a shared dormitory 18 euros\nShared kitchen for all guests\nReception open around the clock', fr: "Auberge de jeunesse Zentral\nLit en dortoir 18 euros\nCuisine commune pour tous les clients\nRéception ouverte jour et nuit" } },
          { id: 'd', label: 'd', de: 'Reisebüro Weitblick\nLast-Minute-Flüge nach Spanien und Italien\nBeratung Mo–Sa 10–18 Uhr', tr: { en: 'Weitblick travel agency\nLast-minute flights to Spain and Italy\nAdvice Mon–Sat 10 a.m.–6 p.m.', fr: "Agence de voyages Weitblick\nVols de dernière minute pour l'Espagne et l'Italie\nConseils lun–sam 10 h–18 h" } },
          { id: 'e', label: 'e', de: 'Mitfahrgelegenheit nach Hamburg\nFreitag, 15 Uhr ab Hauptbahnhof\n2 Plätze frei, 20 Euro pro Person\nTel. 0176 / 555 01 23', tr: { en: 'Car share to Hamburg\nFriday, 3 p.m. from the main station\n2 seats free, 20 euros per person\nTel. 0176 / 555 01 23', fr: "Covoiturage pour Hambourg\nVendredi, 15 h depuis la gare centrale\n2 places libres, 20 euros par personne\nTél. 0176 / 555 01 23" } },
          { id: 'f', label: 'f', de: 'Gepäckaufbewahrung im Hauptbahnhof\nKoffer 4 Euro pro Tag\nTäglich 6–22 Uhr geöffnet', tr: { en: 'Left luggage at the main station\nSuitcase 4 euros per day\nOpen daily 6 a.m.–10 p.m.', fr: "Consigne à bagages de la gare centrale\nValise 4 euros par jour\nOuverte tous les jours de 6 h à 22 h" } },
          { id: 'g', label: 'g', de: 'Ferienwohnung am Meer\n2 Schlafzimmer, Küche, Balkon\nPlatz für 4 Personen\n70 Euro pro Nacht, ab 7 Nächten', tr: { en: 'Holiday flat by the sea\n2 bedrooms, kitchen, balcony\nSpace for 4 people\n70 euros per night, from 7 nights', fr: "Appartement de vacances au bord de la mer\n2 chambres, cuisine, balcon\nPlace pour 4 personnes\n70 euros la nuit, à partir de 7 nuits" } },
          { id: 'h', label: 'h', de: 'Wanderurlaub in den Alpen\n7 Tage mit Bergführer\nGepäcktransport inklusive\nAb 480 Euro', tr: { en: 'Hiking holiday in the Alps\n7 days with mountain guide\nLuggage transport included\nFrom 480 euros', fr: "Vacances de randonnée dans les Alpes\n7 jours avec guide de montagne\nTransport des bagages inclus\nÀ partir de 480 euros" } },
        ],
        items: [
          { id: 'q11', q: 'Sie sind mit dem Zug angekommen und möchten die Stadt ohne Ihren schweren Koffer ansehen.', qTr: { en: 'You have arrived by train and want to see the city without your heavy suitcase.', fr: 'Vous êtes arrivé en train et voulez visiter la ville sans votre lourde valise.' }, answer: 'f', explain: { en: 'Left luggage at the main station keeps your suitcase for 4 euros a day.', fr: 'La consigne de la gare garde votre valise pour 4 euros par jour.' } },
          { id: 'q12', q: 'Sie möchten eine Zugfahrkarte nach Köln kaufen.', qTr: { en: 'You want to buy a train ticket to Cologne.', fr: 'Vous voulez acheter un billet de train pour Cologne.' }, answer: 'x', explain: { en: 'No ad sells train tickets, so the answer is x. Ads a, b, d and h are not needed for any situation.', fr: "Aucune annonce ne vend de billets de train, la réponse est donc x. Les annonces a, b, d et h ne servent à aucune situation." } },
          { id: 'q13', q: 'Sie möchten am Freitagnachmittag günstig nach Hamburg fahren, haben aber kein Auto.', qTr: { en: 'You want to travel to Hamburg cheaply on Friday afternoon but you have no car.', fr: 'Vous voulez aller à Hambourg pas cher vendredi après-midi, mais vous n’avez pas de voiture.' }, answer: 'e', explain: { en: 'A car share to Hamburg on Friday at 3 p.m. for 20 euros.', fr: 'Un covoiturage pour Hambourg vendredi à 15 h pour 20 euros.' } },
          { id: 'q14', q: 'Sie suchen für eine Woche am Meer eine Unterkunft für vier Personen. Sie möchten selbst kochen.', qTr: { en: 'You are looking for accommodation by the sea for a week for four people. You want to cook for yourselves.', fr: 'Vous cherchez un logement au bord de la mer pour une semaine pour quatre personnes. Vous voulez cuisiner vous-mêmes.' }, answer: 'g', explain: { en: 'The holiday flat has a kitchen and space for 4, from 7 nights.', fr: 'L’appartement de vacances a une cuisine et de la place pour 4, à partir de 7 nuits.' } },
          { id: 'q15', q: 'Sie sind Student und suchen für ein Wochenende in der Stadt ein billiges Bett.', qTr: { en: 'You are a student and are looking for a cheap bed in the city for a weekend.', fr: 'Vous êtes étudiant et cherchez un lit bon marché en ville pour un week-end.' }, answer: 'c', explain: { en: 'A bed in the hostel dormitory costs only 18 euros.', fr: 'Un lit en dortoir à l’auberge ne coûte que 18 euros.' } },
        ],
      },
    ],
    schreiben: [
      {
        id: 'telc-a2-6-s1', teil: 1, kind: 'form',
        title: 'Teil 1',
        instruction: 'Sie möchten ein Auto mieten. Ihr Kollege hilft Ihnen und liest die Informationen vor. Füllen Sie das Formular aus.',
        instructionTr: {
          en: 'You want to hire a car. Your colleague helps you and reads out your details. Fill in the form.',
          fr: "Vous voulez louer une voiture. Votre collègue vous aide et lit vos informations. Remplissez le formulaire.",
        },
        source: {
          id: 'info',
          de: 'Mein Name ist Rui Pereira. Ich möchte am 20. Juli einen Kleinwagen mieten. Ich hole das Auto am Hauptbahnhof in Ulm ab und brauche es für drei Tage.',
          tr: {
            en: 'My name is Rui Pereira. I would like to hire a small car on 20 July. I will collect the car at the main station in Ulm and need it for three days.',
            fr: "Je m'appelle Rui Pereira. Je voudrais louer une petite voiture le 20 juillet. Je retire la voiture à la gare centrale d'Ulm et j'en ai besoin pour trois jours.",
          },
        },
        fields: [
          { id: 'f1', label: 'Familienname', labelTr: { en: 'Surname', fr: 'Nom de famille' }, accept: ['Pereira'] },
          { id: 'f2', label: 'Datum der Abholung', labelTr: { en: 'Collection date', fr: 'Date de retrait' }, accept: ['20. Juli', '20 Juli', '20.07.', '20.07', '20.7.', '20.7'] },
          { id: 'f3', label: 'Abholort', labelTr: { en: 'Collection point', fr: 'Lieu de retrait' }, accept: ['Hauptbahnhof Ulm', 'Hauptbahnhof', 'Ulm Hauptbahnhof', 'Bahnhof Ulm', 'Ulm Hbf', 'Hbf Ulm', 'Hauptbahnhof in Ulm'] },
          { id: 'f4', label: 'Anzahl der Tage', labelTr: { en: 'Number of days', fr: 'Nombre de jours' }, accept: ['3', 'drei', '3 Tage', 'drei Tage'] },
          { id: 'f5', label: 'Autotyp', labelTr: { en: 'Type of car', fr: 'Type de voiture' }, accept: ['Kleinwagen', 'ein Kleinwagen'] },
        ],
      },
      {
        id: 'telc-a2-6-s2', teil: 2, kind: 'message', register: 'informal',
        title: 'Teil 2',
        instruction: 'Ihre Freundin Lena besucht Sie am Wochenende mit dem Zug. Schreiben Sie ihr eine E-Mail (ca. 40 Wörter). Vier Punkte stehen zur Auswahl: Schreiben Sie zu drei Punkten.',
        instructionTr: {
          en: 'Your friend Lena is visiting you at the weekend by train. Write her an e-mail (about 40 words). Four points are given: write about three of them.',
          fr: "Votre amie Lena vient vous rendre visite ce week-end en train. Écrivez-lui un e-mail (environ 40 mots). Quatre points sont proposés : traitez-en trois.",
        },
        points: [
          { id: 'p1', de: 'Wann und wo holen Sie Lena ab?', tr: { en: 'When and where do you pick Lena up?', fr: 'Quand et où allez-vous chercher Lena ?' }, keywords: ['abhol', 'hole', 'warte', 'bahnhof', 'uhr'] },
          { id: 'p2', de: 'Wie fahren Sie zu Ihrer Wohnung?', tr: { en: 'How do you get to your flat?', fr: 'Comment allez-vous jusqu’à votre appartement ?' }, keywords: ['bus', 'straßenbahn', 'u-bahn', 'taxi', 'linie', 'zu fuß'] },
          { id: 'p3', de: 'Was machen Sie am Wochenende?', tr: { en: 'What do you do at the weekend?', fr: 'Que faites-vous pendant le week-end ?' }, keywords: ['ausflug', 'museum', 'kino', 'wandern', 'machen wir', 'besuchen'] },
          { id: 'p4', de: 'Was soll Lena mitbringen?', tr: { en: 'What should Lena bring?', fr: 'Que doit apporter Lena ?' }, keywords: ['mitbring', 'bring', 'jacke', 'warm', 'regenschirm', 'schuhe'] },
        ],
        minWords: 35, maxWords: 55,
        model: {
          de: 'Liebe Lena,\n\nich freue mich auf deinen Besuch! Ich hole dich um 15 Uhr am Hauptbahnhof ab. Dann fahren wir mit der Straßenbahn zu mir. Am Samstag machen wir einen Ausflug an den Fluss, wenn das Wetter schön ist. Bitte bring eine warme Jacke mit.\n\nBis Freitag\nNora',
          tr: {
            en: 'Dear Lena,\n\nI am looking forward to your visit! I will pick you up at the main station at 3 p.m. Then we will take the tram to my place. On Saturday we will go on a trip to the river if the weather is nice. Please bring a warm jacket.\n\nSee you on Friday\nNora',
            fr: "Chère Lena,\n\nJe me réjouis de ta visite ! Je viens te chercher à 15 h à la gare centrale. Ensuite, nous prenons le tramway jusque chez moi. Samedi, nous ferons une excursion au bord de la rivière s'il fait beau. Apporte s'il te plaît une veste chaude.\n\nÀ vendredi\nNora",
          },
        },
      },
    ],
    sprechen: [
      {
        id: 'telc-a2-6-p1', teil: 1, title: 'Teil 1: Sich vorstellen', minutes: 3,
        instruction: 'Stellen Sie sich vor. Die Stichwörter helfen Ihnen: Name, Herkunft, Wohnort, Sprachen, Beruf, Hobby.',
        instructionTr: { en: 'Introduce yourself. The keywords help you: name, origin, place of residence, languages, job, hobby.', fr: "Présentez-vous. Les mots-clés vous aident : nom, origine, lieu de résidence, langues, profession, loisir." },
        prompts: [
          { id: 'p1a', cue: 'Name', cueTr: { en: 'Name', fr: 'Nom' }, sample: 'Guten Tag, mein Name ist Elena Petrova. Ich buchstabiere: P-E-T-R-O-V-A.', sampleTr: { en: 'Good day, my name is Elena Petrova. I spell it: P-E-T-R-O-V-A.', fr: "Bonjour, je m'appelle Elena Petrova. J'épelle : P-E-T-R-O-V-A." } },
          { id: 'p1b', cue: 'Herkunft', cueTr: { en: 'Origin', fr: 'Origine' }, sample: 'Ich komme aus Bulgarien, aus der Stadt Plowdiw. Dort ist meine Familie noch.', sampleTr: { en: 'I come from Bulgaria, from the city of Plovdiv. My family is still there.', fr: "Je viens de Bulgarie, de la ville de Plovdiv. Ma famille y habite encore." } },
          { id: 'p1c', cue: 'Wohnort', cueTr: { en: 'Where you live', fr: 'Lieu de résidence' }, sample: 'Jetzt wohne ich in Leipzig. Ich wohne seit sechs Monaten in einer Wohngemeinschaft mit zwei Studenten.', sampleTr: { en: 'Now I live in Leipzig. For six months I have lived in a shared flat with two students.', fr: "Maintenant, j'habite à Leipzig. Depuis six mois, je vis en colocation avec deux étudiants." } },
          { id: 'p1d', cue: 'Sprachen', cueTr: { en: 'Languages', fr: 'Langues' }, sample: 'Ich spreche Bulgarisch, Russisch und ein bisschen Englisch. Deutsch ist meine vierte Sprache.', sampleTr: { en: 'I speak Bulgarian, Russian and a little English. German is my fourth language.', fr: "Je parle bulgare, russe et un peu d'anglais. L'allemand est ma quatrième langue." } },
          { id: 'p1e', cue: 'Beruf', cueTr: { en: 'Job', fr: 'Profession' }, sample: 'Ich arbeite in einem Reisebüro. Ich berate Kunden und buche Flüge und Hotels für sie.', sampleTr: { en: 'I work in a travel agency. I advise customers and book flights and hotels for them.', fr: "Je travaille dans une agence de voyages. Je conseille les clients et je réserve des vols et des hôtels pour eux." } },
          { id: 'p1f', cue: 'Hobby', cueTr: { en: 'Hobby', fr: 'Loisir' }, sample: 'Ich reise sehr gern und fotografiere dabei. Am Wochenende mache ich oft kleine Ausflüge mit dem Zug.', sampleTr: { en: 'I love travelling and taking photos while I do. At weekends I often make small trips by train.', fr: "J'aime beaucoup voyager et je prends des photos. Le week-end, je fais souvent de petites excursions en train." } },
        ],
      },
      {
        id: 'telc-a2-6-p2', teil: 2, title: 'Teil 2: Ein Alltagsgespräch führen', minutes: 4,
        instruction: 'Führen Sie mit Ihrem Partner / Ihrer Partnerin ein Alltagsgespräch zu einem Thema. Erzählen Sie von sich und stellen Sie eine Frage.',
        instructionTr: { en: "Have an everyday conversation with your partner about a topic. Tell about yourself and ask a question.", fr: "Menez avec votre partenaire une conversation du quotidien sur un thème. Parlez de vous et posez une question." },
        prompts: [
          { id: 'p2a', cue: 'Thema: Verkehrsmittel – Fahren Sie lieber Zug, Bus oder Auto?', cueTr: { en: 'Topic: Means of transport – Do you prefer to take the train, the bus or the car?', fr: 'Thème : Moyens de transport – Préférez-vous le train, le bus ou la voiture ?' }, sample: 'Ich fahre am liebsten mit dem Zug, weil ich dort lesen oder aus dem Fenster schauen kann. Mit dem Auto muss ich immer im Stau stehen. Was fährst du lieber?', sampleTr: { en: 'I prefer to take the train because I can read or look out of the window there. With the car I always have to sit in traffic jams. What do you prefer?', fr: "Je préfère prendre le train, parce que je peux y lire ou regarder par la fenêtre. En voiture, je dois toujours rester dans les embouteillages. Et toi, que préfères-tu ?" } },
          { id: 'p2b', cue: 'Thema: Eine Reise – Wohin sind Sie zuletzt gereist?', cueTr: { en: 'Topic: A trip – Where did you travel most recently?', fr: 'Thème : Un voyage – Où avez-vous voyagé dernièrement ?' }, sample: 'Im Sommer bin ich mit meiner Schwester nach Italien gefahren. Wir haben eine Woche am Meer verbracht und viel gebadet. Wohin bist du zuletzt gereist?', sampleTr: { en: 'In the summer I travelled to Italy with my sister. We spent a week by the sea and swam a lot. Where did you travel most recently?', fr: "En été, je suis allé en Italie avec ma sœur. Nous avons passé une semaine au bord de la mer et nous nous sommes beaucoup baignés. Et toi, où as-tu voyagé dernièrement ?" } },
          { id: 'p2c', cue: 'Thema: Unterkunft – Wo übernachten Sie gern im Urlaub?', cueTr: { en: 'Topic: Accommodation – Where do you like to stay overnight on holiday?', fr: 'Thème : Hébergement – Où aimez-vous dormir en vacances ?' }, sample: 'Ich übernachte gern in einer kleinen Pension, weil es dort ein gutes Frühstück gibt. Ein Hotel ist mir oft zu teuer. Zelten finde ich auch schön, aber nur bei gutem Wetter. Und du?', sampleTr: { en: 'I like to stay in a small guesthouse because there is a good breakfast there. A hotel is often too expensive for me. I also like camping, but only in good weather. And you?', fr: "J'aime dormir dans une petite pension, parce qu'il y a un bon petit-déjeuner. Un hôtel est souvent trop cher pour moi. J'aime aussi camper, mais seulement par beau temps. Et toi ?" } },
          { id: 'p2d', cue: 'Thema: Gepäck – Was nehmen Sie immer mit, wenn Sie verreisen?', cueTr: { en: 'Topic: Luggage – What do you always take with you when you travel?', fr: 'Thème : Bagages – Qu’emportez-vous toujours quand vous voyagez ?' }, sample: 'Ich nehme immer nur einen kleinen Rucksack mit: ein paar Kleidungsstücke, meine Kamera und ein Buch. Zu viel Gepäck ist anstrengend. Packst du auch so wenig?', sampleTr: { en: 'I always take only a small backpack: a few clothes, my camera and a book. Too much luggage is tiring. Do you pack as little as that too?', fr: "J'emporte toujours seulement un petit sac à dos : quelques vêtements, mon appareil photo et un livre. Trop de bagages, c'est fatigant. Est-ce que toi aussi tu emportes si peu ?" } },
          { id: 'p2e', cue: 'Thema: Heimatstadt – Wie kommt man in Ihrer Heimatstadt von A nach B?', cueTr: { en: 'Topic: Home town – How do you get around in your home town?', fr: 'Thème : Ville natale – Comment se déplace-t-on dans votre ville natale ?' }, sample: 'In meiner Heimatstadt fahren viele Leute mit dem Bus oder mit dem Motorrad. Es gibt keine U-Bahn, aber die Busse sind billig. In Deutschland fahre ich lieber mit dem Fahrrad. Wie ist das bei dir?', sampleTr: { en: 'In my home town many people take the bus or ride motorbikes. There is no underground, but the buses are cheap. In Germany I prefer to cycle. What is it like where you are from?', fr: "Dans ma ville natale, beaucoup de gens prennent le bus ou la moto. Il n'y a pas de métro, mais les bus sont bon marché. En Allemagne, je préfère le vélo. Et chez toi, comment est-ce ?" } },
          { id: 'p2f', cue: 'Thema: Verspätung – Was machen Sie, wenn der Zug Verspätung hat?', cueTr: { en: 'Topic: Delays – What do you do when the train is late?', fr: 'Thème : Retard – Que faites-vous quand le train a du retard ?' }, sample: 'Wenn der Zug Verspätung hat, schaue ich zuerst in der App nach, wann der nächste fährt. Dann rufe ich meine Freunde an und sage, dass ich später komme. Manchmal trinke ich einfach einen Kaffee. Und du?', sampleTr: { en: 'When the train is late I first check in the app when the next one leaves. Then I call my friends and say that I will be later. Sometimes I simply have a coffee. And you?', fr: "Quand le train a du retard, je regarde d'abord dans l'appli quand part le suivant. Ensuite, j'appelle mes amis et je dis que je serai en retard. Parfois, je bois simplement un café. Et toi ?" } },
        ],
      },
      {
        id: 'telc-a2-6-p3', teil: 3, title: 'Teil 3: Etwas aushandeln', minutes: 4,
        instruction: 'Sie möchten mit Ihrem Partner / Ihrer Partnerin einen Wochenendausflug in eine andere Stadt planen. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge, handeln Sie die Details aus und einigen Sie sich.',
        instructionTr: { en: 'You want to plan a weekend trip to another city with your partner. Make suggestions, react to the suggestions, negotiate the details and agree.', fr: "Vous voulez organiser avec votre partenaire une excursion de week-end dans une autre ville. Faites des propositions, réagissez-y, négociez les détails et mettez-vous d'accord." },
        prompts: [
          { id: 'p3a', cue: 'Wohin fahren Sie?', cueTr: { en: 'Where are you going?', fr: 'Où allez-vous ?' }, sample: 'Ich schlage vor, dass wir nach Berlin fahren. Dort gibt es viele Museen und Parks. – Ich war schon einmal dort. Wie wäre es mit Hamburg? Ich möchte gern den Hafen sehen.', sampleTr: { en: "I suggest that we go to Berlin. There are lots of museums and parks there. – I have been there once already. How about Hamburg? I would like to see the harbour.", fr: "Je propose que nous allions à Berlin. Il y a beaucoup de musées et de parcs. – J'y suis déjà allé une fois. Et si nous allions à Hambourg ? J'aimerais voir le port." } },
          { id: 'p3b', cue: 'Wie fahren Sie hin?', cueTr: { en: 'How do you get there?', fr: 'Comment y allez-vous ?' }, sample: 'Wir können mit dem Zug fahren, das ist bequem. Aber ein Ticket ist ziemlich teuer. – Dann nehmen wir doch den Bus. Er braucht länger, aber er kostet nur die Hälfte.', sampleTr: { en: "We can go by train, it is comfortable. But a ticket is quite expensive. – Then let us take the bus. It takes longer but it costs only half.", fr: "Nous pouvons y aller en train, c'est confortable. Mais un billet est assez cher. – Alors prenons plutôt le bus. Il met plus de temps, mais il ne coûte que la moitié." } },
          { id: 'p3c', cue: 'Wann fahren Sie los und wann kommen Sie zurück?', cueTr: { en: 'When do you leave and when do you come back?', fr: 'Quand partez-vous et quand revenez-vous ?' }, sample: 'Wir fahren am Freitagabend los und kommen am Sonntag zurück. – Freitagabend passt mir nicht, ich arbeite bis 18 Uhr. Können wir am Samstagmorgen um 7 Uhr fahren?', sampleTr: { en: "We leave on Friday evening and come back on Sunday. – Friday evening does not suit me, I work until 6 p.m. Can we leave on Saturday morning at 7 a.m.?", fr: "Nous partons vendredi soir et revenons dimanche. – Le vendredi soir ne me convient pas, je travaille jusqu'à 18 h. Pouvons-nous partir samedi matin à 7 h ?" } },
          { id: 'p3d', cue: 'Wo übernachten Sie?', cueTr: { en: 'Where do you stay overnight?', fr: 'Où dormez-vous ?' }, sample: 'Wir könnten in einem Hostel schlafen. Das kostet nicht viel. – Das finde ich gut, aber ich möchte ein eigenes Zimmer. Ich suche im Internet nach einer günstigen Pension.', sampleTr: { en: "We could sleep in a hostel. It does not cost much. – I like that, but I want my own room. I will look for a cheap guesthouse on the internet.", fr: "Nous pourrions dormir dans une auberge de jeunesse. Ça ne coûte pas cher. – Ça me plaît, mais je voudrais une chambre pour moi. Je cherche une pension bon marché sur Internet." } },
          { id: 'p3e', cue: 'Was machen Sie dort?', cueTr: { en: 'What do you do there?', fr: 'Que faites-vous là-bas ?' }, sample: 'Am Samstag besuchen wir ein Museum und machen eine Stadtführung. Abends können wir in einem Restaurant essen. – Ich möchte auch gern eine Bootsfahrt machen, wenn das Wetter schön ist.', sampleTr: { en: "On Saturday we visit a museum and take a city tour. In the evening we can eat in a restaurant. – I would also like to take a boat trip if the weather is nice.", fr: "Samedi, nous visitons un musée et nous faisons une visite guidée. Le soir, nous pouvons manger au restaurant. – J'aimerais aussi faire une promenade en bateau s'il fait beau." } },
          { id: 'p3f', cue: 'Wie viel Geld haben Sie und wer bucht?', cueTr: { en: 'How much money do you have and who books?', fr: 'De combien d’argent disposez-vous et qui réserve ?' }, sample: 'Ich kann ungefähr 150 Euro ausgeben. Ist das genug? – Ja, wenn wir den Bus nehmen. Ich buche die Fahrkarten und du suchst die Unterkunft, einverstanden?', sampleTr: { en: "I can spend about 150 euros. Is that enough? – Yes, if we take the bus. I will book the tickets and you look for the accommodation, agreed?", fr: "Je peux dépenser environ 150 euros. Est-ce suffisant ? – Oui, si nous prenons le bus. Je réserve les billets et toi tu cherches l'hébergement, d'accord ?" } },
        ],
      },
    ],
  },
];

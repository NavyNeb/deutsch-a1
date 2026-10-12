import type { ExamSetInput } from '../types';
import { txt, tf, mc, mt, lesenTF, lesenMC, lesenMatch, message, speak } from './b2-kit';

// Original practice material modelled on the Goethe-Zertifikat B2 format. Not an official paper.

export const goetheB2s4: ExamSetInput = {
  id: 'goethe-b2-4',
  board: 'goethe',
  level: 'B2',
  number: 4,
  lesen: [
    lesenMC('goethe-b2-4-l1', 1, 'Teil 1', [
      'Lesen Sie den Blogbeitrag und die Aufgaben 1 bis 6 dazu. Wählen Sie die richtige Lösung a, b oder c.',
      'Read the blog post and tasks 1 to 6. Choose the correct answer a, b or c.',
      'Lisez le billet de blog et les exercices 1 à 6. Choisissez la bonne réponse a, b ou c.',
    ], [
      txt('t1', 'Blog: Mein Alltag mit einem Sprachassistenten',
        'Vor einem halben Jahr habe ich mir einen Sprachassistenten gekauft, eigentlich nur aus Neugier. Mein Mann nannte ihn ein „teures Spielzeug“. Heute bin ich überrascht, wie selbstverständlich er in unserem Alltag geworden ist. Morgens frage ich nach dem Wetter, beim Kochen stelle ich Timer, und abends lasse ich ihn Nachrichten vorlesen.\n\nBesonders praktisch finde ich ihn für meinen Vater, der nicht mehr gut sehen kann. Er ruft jetzt einfach „Ruf meine Tochter an“, und das Telefon wählt von allein. Früher musste er ständig um Hilfe bitten, jetzt fühlt er sich wieder unabhängiger.\n\nDennoch bin ich nicht unkritisch. Mir ist unwohl bei dem Gedanken, dass das Gerät ständig zuhört. Zwar versichert der Hersteller, dass nichts gespeichert wird, solange man das Wort nicht ausspricht, aber ganz überzeugt bin ich nicht. Deshalb habe ich das Gerät nicht im Schlafzimmer aufgestellt und das Mikrofon in den Einstellungen so eingeschränkt, wie es geht.\n\nMein Fazit: Technik kann das Leben erleichtern, aber man sollte sie bewusst und mit Verstand nutzen.',
        'Blog: My everyday life with a voice assistant\n\nHalf a year ago I bought a voice assistant, really only out of curiosity. My husband called it an “expensive toy”. Today I am surprised how naturally it has become part of our everyday life. In the morning I ask about the weather, when cooking I set timers, and in the evening I have it read out the news.\n\nI find it especially practical for my father, who can no longer see well. He now simply calls “Call my daughter” and the phone dials by itself. Before, he had to ask for help constantly, now he feels more independent again.\n\nStill I am not uncritical. I feel uneasy at the thought that the device is constantly listening. The manufacturer does assure that nothing is stored as long as the word is not spoken, but I am not entirely convinced. That is why I did not put the device in the bedroom and restricted the microphone in the settings as far as possible.\n\nMy conclusion: technology can make life easier, but one should use it consciously and sensibly.',
        'Blog : Mon quotidien avec un assistant vocal\n\nIl y a six mois, j’ai acheté un assistant vocal, en fait seulement par curiosité. Mon mari l’a appelé un « jouet cher ». Aujourd’hui, je suis surprise de voir à quel point il est devenu naturel dans notre quotidien. Le matin, je demande la météo, en cuisinant je règle des minuteurs et le soir je me fais lire les nouvelles.\n\nJe le trouve particulièrement pratique pour mon père, qui ne voit plus bien. Il dit maintenant simplement « Appelle ma fille » et le téléphone compose tout seul. Avant, il devait constamment demander de l’aide, maintenant il se sent de nouveau plus indépendant.\n\nPourtant, je ne suis pas sans esprit critique. Je me sens mal à l’aise à l’idée que l’appareil écoute en permanence. Le fabricant assure certes que rien n’est enregistré tant que le mot n’est pas prononcé, mais je ne suis pas tout à fait convaincue. C’est pourquoi je n’ai pas installé l’appareil dans la chambre et j’ai limité le microphone dans les paramètres autant que possible.\n\nMa conclusion : la technique peut faciliter la vie, mais il faut l’utiliser de façon consciente et raisonnable.'),
    ], [
      mc('q1', 'Warum hat die Autorin den Sprachassistenten gekauft?', 'Why did the author buy the voice assistant?', 'Pourquoi l’auteure a-t-elle acheté l’assistant vocal ?', [
        ['Aus Neugier.', 'Out of curiosity.', 'Par curiosité.'],
        ['Weil ihr Mann es wollte.', 'Because her husband wanted it.', 'Parce que son mari le voulait.'],
        ['Weil er billig war.', 'Because it was cheap.', 'Parce qu’il était bon marché.'],
      ], 0, ['"eigentlich nur aus Neugier".', '« eigentlich nur aus Neugier ».']),
      mc('q2', 'Wofür nutzt sie ihn zum Beispiel morgens?', 'What does she use it for in the morning, for example?', 'À quoi l’utilise-t-elle par exemple le matin ?', [
        ['Um nach dem Wetter zu fragen.', 'To ask about the weather.', 'Pour demander la météo.'],
        ['Um Musik zu machen.', 'To make music.', 'Pour faire de la musique.'],
        ['Um Einkäufe zu bestellen.', 'To order shopping.', 'Pour commander des courses.'],
      ], 0, ['Weather in the morning.', 'La météo le matin.']),
      mc('q3', 'Was ist für ihren Vater besonders nützlich?', 'What is particularly useful for her father?', 'Qu’est-ce qui est particulièrement utile pour son père ?', [
        ['Dass er per Sprache telefonieren kann.', 'That he can phone by voice.', 'Qu’il peut téléphoner par la voix.'],
        ['Dass er Filme sehen kann.', 'That he can watch films.', 'Qu’il peut regarder des films.'],
        ['Dass er Spiele spielen kann.', 'That he can play games.', 'Qu’il peut jouer.'],
      ], 0, ['"Ruf meine Tochter an".', '« Ruf meine Tochter an ».']),
      mc('q4', 'Was beunruhigt die Autorin?', 'What worries the author?', 'Qu’est-ce qui inquiète l’auteure ?', [
        ['Dass das Gerät ständig zuhört.', 'That the device is constantly listening.', 'Que l’appareil écoute en permanence.'],
        ['Dass es zu laut ist.', 'That it is too loud.', 'Qu’il est trop bruyant.'],
        ['Dass es oft kaputtgeht.', 'That it often breaks.', 'Qu’il tombe souvent en panne.'],
      ], 0, ['Unease about listening.', 'Malaise à l’idée qu’il écoute.']),
      mc('q5', 'Was hat sie aus Sicherheitsgründen getan?', 'What did she do for security reasons?', 'Qu’a-t-elle fait pour des raisons de sécurité ?', [
        ['Das Gerät nicht im Schlafzimmer aufgestellt und das Mikrofon eingeschränkt.', 'Did not put the device in the bedroom and restricted the microphone.', 'N’a pas installé l’appareil dans la chambre et a limité le microphone.'],
        ['Das Gerät wieder verkauft.', 'Sold the device again.', 'A revendu l’appareil.'],
        ['Das Passwort geändert.', 'Changed the password.', 'A changé le mot de passe.'],
      ], 0, ['Bedroom and microphone.', 'Chambre et microphone.']),
      mc('q6', 'Welche Haltung hat die Autorin am Ende?', 'What attitude does the author have at the end?', 'Quelle attitude l’auteure a-t-elle à la fin ?', [
        ['Technik ist nützlich, sollte aber bewusst genutzt werden.', 'Technology is useful but should be used consciously.', 'La technique est utile mais doit être utilisée consciemment.'],
        ['Technik ist gefährlich.', 'Technology is dangerous.', 'La technique est dangereuse.'],
        ['Technik ist überflüssig.', 'Technology is superfluous.', 'La technique est superflue.'],
      ], 0, ['Conclusion.', 'Conclusion.']),
    ]),

    lesenMC('goethe-b2-4-l2', 2, 'Teil 2', [
      'Lesen Sie den Zeitungsartikel und die Aufgaben 7 bis 12 dazu. Wählen Sie die richtige Lösung a, b oder c.',
      'Read the newspaper article and tasks 7 to 12. Choose the correct answer a, b or c.',
      'Lisez l’article de journal et les exercices 7 à 12. Choisissez la bonne réponse a, b ou c.',
    ], [
      txt('t2', 'Künstliche Intelligenz im Klassenzimmer: Hilfe oder Hindernis?',
        'An der Realschule Nordstadt dürfen Schülerinnen und Schüler seit diesem Schuljahr ausdrücklich Programme mit künstlicher Intelligenz benutzen – allerdings nur nach festen Regeln. „Wer ein Programm einen Aufsatz schreiben lässt, hat nichts gelernt“, erklärt Lehrerin Petra Hahn. „Wer es dagegen nutzt, um Fehler zu finden oder Ideen zu sammeln, kann viel davon profitieren.“\n\nDie Regeln der Schule sehen vor, dass jede Hausaufgabe angeben muss, wofür das Programm genutzt wurde. Bei Klassenarbeiten sind alle Geräte verboten. Um die Selbstständigkeit zu fördern, schreiben die Schüler zudem häufiger Texte von Hand.\n\nNicht alle Eltern sind einverstanden. Manche befürchten, dass ihre Kinder das Denken verlernen. Der Bildungsforscher Prof. Felix Arndt hält diese Sorge für verständlich, aber übertrieben: „Schon der Taschenrechner hat das Rechnen nicht abgeschafft. Entscheidend ist, dass Lehrkräfte lernen, die neuen Werkzeuge sinnvoll zu verwenden.“ Die Schule will die Regeln nach einem Jahr überprüfen.',
        'Artificial intelligence in the classroom: help or obstacle?\n\nAt the Nordstadt secondary school pupils have been expressly allowed to use programs with artificial intelligence since this school year – but only under fixed rules. “Anyone who lets a program write an essay has learnt nothing,” explains teacher Petra Hahn. “Anyone who instead uses it to find mistakes or collect ideas can benefit greatly.”\n\nThe school’s rules provide that every homework must state what the program was used for. In class tests all devices are forbidden. To promote independence the pupils also write texts by hand more often.\n\nNot all parents agree. Some fear that their children will unlearn thinking. Education researcher Prof. Felix Arndt considers this worry understandable but exaggerated: “Even the calculator did not abolish arithmetic. What is crucial is that teachers learn to use the new tools sensibly.” The school wants to review the rules after a year.',
        'L’intelligence artificielle en classe : aide ou obstacle ?\n\nÀ la Realschule Nordstadt, les élèves ont expressément le droit d’utiliser des programmes d’intelligence artificielle depuis cette année scolaire – mais seulement selon des règles précises. « Celui qui laisse un programme écrire une rédaction n’a rien appris, explique l’enseignante Petra Hahn. Celui qui l’utilise en revanche pour trouver des erreurs ou rassembler des idées peut en tirer beaucoup. »\n\nLes règles de l’école prévoient que chaque devoir doit indiquer à quoi le programme a servi. Pendant les contrôles, tous les appareils sont interdits. Pour encourager l’autonomie, les élèves écrivent en outre plus souvent des textes à la main.\n\nTous les parents ne sont pas d’accord. Certains craignent que leurs enfants désapprennent à penser. Le chercheur en éducation Prof. Felix Arndt juge cette inquiétude compréhensible, mais exagérée : « Même la calculatrice n’a pas supprimé le calcul. Ce qui compte, c’est que les enseignants apprennent à utiliser les nouveaux outils de façon judicieuse. » L’école veut réexaminer les règles après un an.'),
    ], [
      mc('q7', 'Was ist an der Realschule Nordstadt erlaubt?', 'What is allowed at Nordstadt school?', 'Qu’est-ce qui est autorisé à la Realschule Nordstadt ?', [
        ['Die Nutzung von KI-Programmen nach festen Regeln.', 'The use of AI programs under fixed rules.', 'L’utilisation de programmes d’IA selon des règles précises.'],
        ['Jede Art von Technik in Klassenarbeiten.', 'Any kind of technology in tests.', 'Toute technique pendant les contrôles.'],
        ['Gar keine Technik.', 'No technology at all.', 'Aucune technique.'],
      ], 0, ['Allowed, but only with rules.', 'Autorisé, mais avec règles.']),
      mc('q8', 'Wie sieht Petra Hahn die Nutzung von KI?', 'How does Petra Hahn see the use of AI?', 'Comment Petra Hahn voit-elle l’usage de l’IA ?', [
        ['Sinnvoll, wenn man damit Fehler findet oder Ideen sammelt.', 'Sensible when used to find mistakes or collect ideas.', 'Judicieux si on s’en sert pour trouver des erreurs ou rassembler des idées.'],
        ['Immer schädlich.', 'Always harmful.', 'Toujours néfaste.'],
        ['Unwichtig.', 'Unimportant.', 'Sans importance.'],
      ], 0, ['Quote.', 'Citation.']),
      mc('q9', 'Welche Regel gilt für Hausaufgaben?', 'Which rule applies to homework?', 'Quelle règle s’applique aux devoirs ?', [
        ['Man muss angeben, wofür man das Programm genutzt hat.', 'You must state what you used the program for.', 'Il faut indiquer à quoi l’on a utilisé le programme.'],
        ['Man darf das Programm nicht nutzen.', 'You may not use the program.', 'On ne peut pas utiliser le programme.'],
        ['Man muss alles von Hand schreiben.', 'You must write everything by hand.', 'Il faut tout écrire à la main.'],
      ], 0, ['State the use.', 'Indiquer l’utilisation.']),
      mc('q10', 'Wovor haben manche Eltern Angst?', 'What are some parents afraid of?', 'De quoi certains parents ont-ils peur ?', [
        ['Dass ihre Kinder das Denken verlernen.', 'That their children will unlearn thinking.', 'Que leurs enfants désapprennent à penser.'],
        ['Dass die Schule zu teuer wird.', 'That the school gets too expensive.', 'Que l’école devienne trop chère.'],
        ['Dass die Lehrer streiken.', 'That the teachers strike.', 'Que les enseignants fassent grève.'],
      ], 0, ['Fear of unlearning thinking.', 'Peur de désapprendre à penser.']),
      mc('q11', 'Wie bewertet Prof. Arndt diese Sorge?', 'How does Prof. Arndt assess this worry?', 'Comment le Prof. Arndt juge-t-il cette inquiétude ?', [
        ['Verständlich, aber übertrieben.', 'Understandable but exaggerated.', 'Compréhensible, mais exagérée.'],
        ['Völlig berechtigt.', 'Entirely justified.', 'Tout à fait justifiée.'],
        ['Unverständlich.', 'Incomprehensible.', 'Incompréhensible.'],
      ], 0, ['"verständlich, aber übertrieben".', '« verständlich, aber übertrieben ».']),
      mc('q12', 'Was plant die Schule?', 'What does the school plan?', 'Que prévoit l’école ?', [
        ['Die Regeln nach einem Jahr zu überprüfen.', 'To review the rules after a year.', 'Réexaminer les règles après un an.'],
        ['KI wieder zu verbieten.', 'To ban AI again.', 'Interdire à nouveau l’IA.'],
        ['Die Klassenarbeiten abzuschaffen.', 'To abolish class tests.', 'Supprimer les contrôles.'],
      ], 0, ['Last sentence.', 'Dernière phrase.']),
    ]),

    lesenTF('goethe-b2-4-l3', 3, 'Teil 3', [
      'Lesen Sie die Beiträge aus einem Internetforum zum Thema „Selbstfahrende Autos“ und die Aufgaben 13 bis 18. Wer begrüßt selbstfahrende Autos? Antworten Sie mit Ja oder Nein.',
      'Read the forum posts on “Self-driving cars” and tasks 13 to 18. Who welcomes self-driving cars? Answer Yes or No.',
      'Lisez les messages d’un forum sur le thème « Voitures autonomes » et les exercices 13 à 18. Qui accueille favorablement les voitures autonomes ? Répondez par Oui ou Non.',
    ], 'jn', [
      txt('p1', 'Anna_R', 'Ich fahre nicht gern Auto, besonders nachts. Ein selbstfahrendes Auto würde mir viel Stress ersparen. Außerdem könnte ich im Auto arbeiten oder lesen. Ich finde die Idee sehr gut und würde sofort eins nutzen.', 'I do not like driving, especially at night. A self-driving car would save me a lot of stress. Besides, I could work or read in the car. I think the idea is very good and would use one immediately.', 'Je n’aime pas conduire, surtout la nuit. Une voiture autonome m’épargnerait beaucoup de stress. De plus, je pourrais travailler ou lire dans la voiture. Je trouve l’idée très bonne et en utiliserais une tout de suite.'),
      txt('p2', 'Stefan K.', 'Menschen machen Fehler, Computer meistens nicht. Wenn selbstfahrende Autos wirklich sicherer sind, sollten wir sie so schnell wie möglich einführen. Jedes Jahr sterben so viele Menschen im Verkehr – das wäre eine große Chance.', 'People make mistakes, computers mostly do not. If self-driving cars really are safer we should introduce them as quickly as possible. Every year so many people die in traffic – that would be a great opportunity.', 'Les humains font des erreurs, les ordinateurs la plupart du temps pas. Si les voitures autonomes sont vraiment plus sûres, nous devrions les introduire le plus vite possible. Chaque année tant de gens meurent dans la circulation – ce serait une grande chance.'),
      txt('p3', 'Margit Lang', 'Ich halte nichts davon. Wer haftet, wenn das Auto einen Unfall verursacht? Und was passiert, wenn das System von Hackern gesteuert wird? Solange diese Fragen nicht geklärt sind, lehne ich selbstfahrende Autos entschieden ab.', 'I think nothing of it. Who is liable if the car causes an accident? And what happens if the system is controlled by hackers? As long as these questions are not clarified I firmly reject self-driving cars.', 'Je n’y crois pas. Qui est responsable si la voiture provoque un accident ? Et que se passe-t-il si le système est piloté par des pirates ? Tant que ces questions ne sont pas réglées, je rejette fermement les voitures autonomes.'),
      txt('p4', 'Herbert_M', 'Ich bin Taxifahrer und mache mir Sorgen um meinen Beruf. Wenn Autos allein fahren, wozu braucht man dann noch Fahrer? Für viele Menschen würden Arbeitsplätze verloren gehen. Ich bin deshalb sehr skeptisch.', 'I am a taxi driver and worry about my profession. If cars drive by themselves, what do you need drivers for? For many people jobs would be lost. I am therefore very sceptical.', 'Je suis chauffeur de taxi et je m’inquiète pour mon métier. Si les voitures roulent toutes seules, à quoi servent encore les chauffeurs ? Pour beaucoup de gens, des emplois seraient perdus. Je suis donc très sceptique.'),
      txt('p5', 'Nadine Voigt', 'Mein Vater ist 80 und darf nicht mehr fahren. Für ihn wäre ein selbstfahrendes Auto ein Stück Freiheit. Ich sehe vor allem für ältere und behinderte Menschen große Vorteile und begrüße die Entwicklung ausdrücklich.', 'My father is 80 and is no longer allowed to drive. For him a self-driving car would be a piece of freedom. I see great advantages above all for older and disabled people and expressly welcome the development.', 'Mon père a 80 ans et n’a plus le droit de conduire. Pour lui, une voiture autonome serait un morceau de liberté. Je vois surtout de grands avantages pour les personnes âgées et handicapées et j’accueille expressément cette évolution.'),
      txt('p6', 'Joachim Sauer', 'Autofahren macht mir Spaß. Ich möchte selbst lenken und nicht wie ein Fahrgast im eigenen Auto sitzen. Für mich ist das keine Verbesserung, sondern ein Verlust. Ich hoffe, dass ich nie gezwungen werde, so ein Auto zu benutzen.', 'I enjoy driving. I want to steer myself and not sit like a passenger in my own car. For me this is not an improvement but a loss. I hope I will never be forced to use such a car.', 'J’aime conduire. Je veux conduire moi-même et ne pas être assis comme un passager dans ma propre voiture. Pour moi, ce n’est pas une amélioration mais une perte. J’espère ne jamais être obligé d’utiliser une telle voiture.'),
    ], [
      tf('q13', 'Anna_R würde ein selbstfahrendes Auto nutzen.', 'Anna_R would use a self-driving car.', 'Anna_R utiliserait une voiture autonome.', true, ['Would use one immediately.', 'En utiliserait une tout de suite.'], 'p1'),
      tf('q14', 'Stefan K. sieht in selbstfahrenden Autos eine Chance für mehr Sicherheit.', 'Stefan K. sees an opportunity for more safety in self-driving cars.', 'Stefan K. voit dans les voitures autonomes une chance pour plus de sécurité.', true, ['Great opportunity.', 'Grande chance.'], 'p2'),
      tf('q15', 'Margit Lang befürwortet selbstfahrende Autos.', 'Margit Lang supports self-driving cars.', 'Margit Lang soutient les voitures autonomes.', false, ['"entschieden ab".', '« entschieden ab ».'], 'p3'),
      tf('q16', 'Herbert_M ist von der Entwicklung begeistert.', 'Herbert_M is enthusiastic about the development.', 'Herbert_M est enthousiaste de cette évolution.', false, ['"sehr skeptisch".', '« sehr skeptisch ».'], 'p4'),
      tf('q17', 'Nadine Voigt begrüßt die Entwicklung ausdrücklich.', 'Nadine Voigt expressly welcomes the development.', 'Nadine Voigt accueille expressément cette évolution.', true, ['"begrüße die Entwicklung ausdrücklich".', '« begrüße die Entwicklung ausdrücklich ».'], 'p5'),
      tf('q18', 'Joachim Sauer möchte selbstfahrende Autos nutzen.', 'Joachim Sauer wants to use self-driving cars.', 'Joachim Sauer veut utiliser des voitures autonomes.', false, ['He wants to steer himself.', 'Il veut conduire lui-même.'], 'p6'),
    ]),

    lesenMatch('goethe-b2-4-l4', 4, 'Teil 4', [
      'Lesen Sie die Aussagen 19 bis 24 und die Texte a bis h. Welcher Text passt zu welcher Aussage? Zu einer Aussage passt kein Text. Markieren Sie dann „x“.',
      'Read statements 19 to 24 and texts a to h. Which text fits which statement? One statement has no matching text. Mark “x”.',
      'Lisez les affirmations 19 à 24 et les textes a à h. Quel texte correspond à quelle affirmation ? Pour une affirmation, aucun texte ne convient. Marquez « x ».',
    ], true, [
      txt('a', undefined, 'Laptop-Reparatur Blitz: Wir reparieren Displays, Akkus und Tastaturen – meist noch am selben Tag. Kostenvoranschlag gratis. Auch Datenrettung bei defekten Festplatten.', 'Laptop repair Blitz: we repair displays, batteries and keyboards – usually on the same day. Cost estimate free. Also data recovery for defective hard drives.', 'Réparation d’ordinateurs portables Blitz : nous réparons écrans, batteries et claviers – le plus souvent le jour même. Devis gratuit. Aussi récupération de données sur disques durs défectueux.', 'a'),
      txt('b', undefined, 'Programmierkurs für Einsteiger: In acht Wochen lernen Sie die Grundlagen von Python. Abends online, Gruppen bis 12 Personen. Keine Vorkenntnisse nötig.', 'Programming course for beginners: in eight weeks you learn the basics of Python. Evenings online, groups of up to 12 people. No prior knowledge necessary.', 'Cours de programmation pour débutants : en huit semaines, vous apprenez les bases de Python. Le soir en ligne, groupes jusqu’à 12 personnes. Aucune connaissance préalable nécessaire.', 'b'),
      txt('c', undefined, 'Datenschutz-Vortrag: Wie schütze ich meine Daten im Internet? Eine Expertin erklärt sichere Passwörter, Verschlüsselung und den Umgang mit sozialen Netzwerken. Eintritt frei.', 'Data protection talk: how do I protect my data on the internet? An expert explains secure passwords, encryption and dealing with social networks. Free admission.', 'Conférence sur la protection des données : comment protéger mes données sur Internet ? Une experte explique mots de passe sûrs, chiffrement et usage des réseaux sociaux. Entrée libre.', 'c'),
      txt('d', undefined, 'Smarthome-Beratung: Wir zeigen Ihnen, wie Sie Heizung, Licht und Rollläden per App steuern und dabei Energie sparen. Kostenlose Erstberatung bei Ihnen zu Hause.', 'Smart home consultation: we show you how to control heating, lighting and shutters by app and save energy in the process. Free initial consultation at your home.', 'Conseil domotique : nous vous montrons comment commander chauffage, éclairage et volets roulants par appli tout en économisant de l’énergie. Premier conseil gratuit chez vous.', 'd'),
      txt('e', undefined, 'IT-Fachkraft (m/w/d) gesucht: Für unser Rechenzentrum suchen wir Verstärkung. Sie betreuen Server, lösen Störungen und arbeiten teilweise im Schichtdienst. Berufserfahrung erwünscht.', 'IT specialist (m/f/d) wanted: we are looking for reinforcement for our data centre. You look after servers, solve faults and work partly in shifts. Work experience desired.', 'Spécialiste informatique (h/f/d) recherché : pour notre centre de données, nous cherchons du renfort. Vous gérez des serveurs, résolvez des pannes et travaillez en partie par équipes. Expérience professionnelle souhaitée.', 'e'),
      txt('f', undefined, 'Roboter-Workshop für Kinder: Samstags bauen Kinder von 8 bis 12 Jahren kleine Roboter und lernen, sie zu programmieren. Material wird gestellt. Gebühr: 15 Euro pro Termin.', 'Robot workshop for children: on Saturdays children aged 8 to 12 build small robots and learn to programme them. Material provided. Fee: 15 euros per session.', 'Atelier robots pour enfants : le samedi, des enfants de 8 à 12 ans construisent de petits robots et apprennent à les programmer. Matériel fourni. Tarif : 15 euros par séance.', 'f'),
      txt('g', undefined, 'Tablet-Kurs für Seniorinnen und Senioren: In kleinen Gruppen lernen Sie, wie Sie Fotos verschicken, Videoanrufe machen und Fahrkarten online kaufen. Dienstags, 10 Uhr, Volkshochschule.', 'Tablet course for senior citizens: in small groups you learn how to send photos, make video calls and buy tickets online. Tuesdays, 10 a.m., adult education centre.', 'Cours de tablette pour seniors : en petits groupes, vous apprenez à envoyer des photos, à faire des appels vidéo et à acheter des billets en ligne. Le mardi à 10 h, centre de formation pour adultes.', 'g'),
      txt('h', undefined, 'Online-Shop für gebrauchte Smartphones: Geprüft, mit zwölf Monaten Garantie und bis zu 60 % günstiger als neu. Kostenloser Versand, 14 Tage Rückgaberecht.', 'Online shop for used smartphones: checked, with twelve months’ warranty and up to 60% cheaper than new. Free shipping, 14-day right of return.', 'Boutique en ligne de smartphones d’occasion : vérifiés, avec douze mois de garantie et jusqu’à 60 % moins chers que le neuf. Livraison gratuite, 14 jours de droit de retour.', 'h'),
    ], [
      mt('q19', 'Der Bildschirm von Franks Laptop ist gesprungen. Er braucht ihn aber dringend für die Arbeit.', 'The screen of Frank’s laptop has cracked. But he urgently needs it for work.', 'L’écran de l’ordinateur de Frank est fissuré. Mais il en a urgemment besoin pour son travail.', 'a', ['Ad a: repair on the same day.', 'Annonce a : réparation le jour même.']),
      mt('q20', 'Frau Weiß möchte ihre Heizung per App steuern, weiß aber nicht, wie das geht.', 'Mrs Weiß wants to control her heating by app but does not know how.', 'Mme Weiß veut commander son chauffage par appli mais ne sait pas comment faire.', 'd', ['Ad d: smart home consultation.', 'Annonce d : conseil domotique.']),
      mt('q21', 'Der 10-jährige Leon interessiert sich für Technik und würde gern etwas bauen.', 'Ten-year-old Leon is interested in technology and would like to build something.', 'Léon, 10 ans, s’intéresse à la technique et aimerait construire quelque chose.', 'f', ['Ad f: robot workshop.', 'Annonce f : atelier robots.']),
      mt('q22', 'Herr Albrecht ist 75 und möchte lernen, mit seinen Enkeln Videoanrufe zu führen.', 'Mr Albrecht is 75 and wants to learn how to make video calls with his grandchildren.', 'M. Albrecht a 75 ans et veut apprendre à faire des appels vidéo avec ses petits-enfants.', 'g', ['Ad g: tablet course for seniors.', 'Annonce g : cours de tablette pour seniors.']),
      mt('q23', 'Lena studiert Geschichte und möchte nebenbei programmieren lernen, ohne viel Geld auszugeben.', 'Lena studies history and wants to learn programming on the side without spending much money.', 'Léna étudie l’histoire et veut apprendre à programmer à côté sans dépenser beaucoup d’argent.', 'b', ['Ad b: beginners’ programming course.', 'Annonce b : cours de programmation pour débutants.']),
      mt('q24', 'Ein Ehepaar sucht eine Firma, die ihnen eine Solaranlage aufs Dach baut.', 'A couple is looking for a company that builds a solar system on their roof.', 'Un couple cherche une entreprise qui leur installe une installation solaire sur le toit.', 'x', ['No ad offers solar installation.', 'Aucune annonce ne propose d’installation solaire.']),
    ]),

    lesenMC('goethe-b2-4-l5', 5, 'Teil 5', [
      'Lesen Sie den Text und die Aufgaben 25 bis 30 dazu. Wählen Sie die richtige Lösung a, b oder c.',
      'Read the text and tasks 25 to 30. Choose the correct answer a, b or c.',
      'Lisez le texte et les exercices 25 à 30. Choisissez la bonne réponse a, b ou c.',
    ], [
      txt('t5', 'Bedienungsanleitung Staubsaugerroboter „CleanBot“ (Auszug)',
        'Inbetriebnahme: Laden Sie den Roboter vor dem ersten Einsatz mindestens vier Stunden. Stellen Sie die Ladestation an eine Wand, mit mindestens 50 Zentimetern Platz auf beiden Seiten. Verbinden Sie den Roboter anschließend mit Ihrem WLAN über die App.\n\nBetrieb: Entfernen Sie vor dem Start Kabel, Socken und kleine Gegenstände vom Boden, da der Roboter sich sonst verfangen kann. Der Roboter erkennt Treppen, sollte aber bei sehr dunklen Böden unter Aufsicht genutzt werden. Bei Fehlermeldungen starten Sie das Gerät neu.\n\nWartung: Leeren Sie den Staubbehälter nach jeder Nutzung. Die Bürsten sollten einmal pro Woche von Haaren befreit werden. Der Filter muss alle drei Monate ersetzt werden. Waschen Sie den Filter nicht mit Wasser.\n\nGarantie: Die Garantie von zwei Jahren erlischt, wenn das Gerät geöffnet oder repariert wurde, ohne dass der Hersteller zugestimmt hat.',
        'Operating instructions robot vacuum cleaner “CleanBot” (extract)\n\nStart-up: charge the robot for at least four hours before first use. Place the charging station against a wall with at least 50 centimetres of space on both sides. Then connect the robot to your Wi-Fi via the app.\n\nOperation: before starting remove cables, socks and small objects from the floor as the robot may otherwise get caught. The robot recognises stairs but should be used under supervision on very dark floors. In case of error messages restart the device.\n\nMaintenance: empty the dust container after every use. The brushes should be cleared of hair once a week. The filter must be replaced every three months. Do not wash the filter with water.\n\nWarranty: the two-year warranty expires if the device has been opened or repaired without the manufacturer’s consent.',
        'Mode d’emploi aspirateur robot « CleanBot » (extrait)\n\nMise en service : chargez le robot au moins quatre heures avant la première utilisation. Placez la station de charge contre un mur avec au moins 50 centimètres d’espace de chaque côté. Connectez ensuite le robot à votre Wi-Fi via l’appli.\n\nFonctionnement : avant le démarrage, retirez du sol câbles, chaussettes et petits objets, car le robot pourrait sinon se coincer. Le robot reconnaît les escaliers, mais devrait être utilisé sous surveillance sur des sols très sombres. En cas de message d’erreur, redémarrez l’appareil.\n\nEntretien : videz le bac à poussière après chaque utilisation. Les brosses doivent être débarrassées des cheveux une fois par semaine. Le filtre doit être remplacé tous les trois mois. Ne lavez pas le filtre à l’eau.\n\nGarantie : la garantie de deux ans expire si l’appareil a été ouvert ou réparé sans l’accord du fabricant.'),
    ], [
      mc('q25', 'Wie lange muss der Roboter vor dem ersten Einsatz geladen werden?', 'How long must the robot be charged before first use?', 'Combien de temps faut-il charger le robot avant la première utilisation ?', [
        ['Mindestens vier Stunden.', 'At least four hours.', 'Au moins quatre heures.'],
        ['Eine Stunde.', 'One hour.', 'Une heure.'],
        ['Zwölf Stunden.', 'Twelve hours.', 'Douze heures.'],
      ], 0, ['At least four hours.', 'Au moins quatre heures.']),
      mc('q26', 'Wohin soll die Ladestation gestellt werden?', 'Where should the charging station be placed?', 'Où faut-il placer la station de charge ?', [
        ['An eine Wand, mit Platz auf beiden Seiten.', 'Against a wall, with space on both sides.', 'Contre un mur, avec de la place de chaque côté.'],
        ['Mitten in den Raum.', 'In the middle of the room.', 'Au milieu de la pièce.'],
        ['Auf die Treppe.', 'On the stairs.', 'Sur l’escalier.'],
      ], 0, ['Wall, 50 cm each side.', 'Mur, 50 cm de chaque côté.']),
      mc('q27', 'Was sollte man vor dem Start tun?', 'What should you do before starting?', 'Que faut-il faire avant le démarrage ?', [
        ['Kabel und kleine Gegenstände vom Boden entfernen.', 'Remove cables and small objects from the floor.', 'Retirer câbles et petits objets du sol.'],
        ['Das Gerät öffnen.', 'Open the device.', 'Ouvrir l’appareil.'],
        ['Den Filter waschen.', 'Wash the filter.', 'Laver le filtre.'],
      ], 0, ['Cables, socks, objects.', 'Câbles, chaussettes, objets.']),
      mc('q28', 'Wann ist Vorsicht nötig?', 'When is caution needed?', 'Quand faut-il être prudent ?', [
        ['Bei sehr dunklen Böden sollte man das Gerät beaufsichtigen.', 'On very dark floors you should supervise the device.', 'Sur des sols très sombres, il faut surveiller l’appareil.'],
        ['Immer nachts.', 'Always at night.', 'Toujours la nuit.'],
        ['Nur im Winter.', 'Only in winter.', 'Seulement en hiver.'],
      ], 0, ['Dark floors.', 'Sols sombres.']),
      mc('q29', 'Was gilt für den Filter?', 'What applies to the filter?', 'Que prévoit-on pour le filtre ?', [
        ['Er muss alle drei Monate ersetzt und darf nicht mit Wasser gewaschen werden.', 'It must be replaced every three months and may not be washed with water.', 'Il doit être remplacé tous les trois mois et ne doit pas être lavé à l’eau.'],
        ['Er muss jeden Tag gewaschen werden.', 'It must be washed every day.', 'Il doit être lavé chaque jour.'],
        ['Er muss nie gewechselt werden.', 'It never needs to be changed.', 'Il ne doit jamais être changé.'],
      ], 0, ['Replace every 3 months, not with water.', 'Remplacer tous les 3 mois, pas à l’eau.']),
      mc('q30', 'Wann erlischt die Garantie?', 'When does the warranty expire?', 'Quand la garantie expire-t-elle ?', [
        ['Wenn das Gerät ohne Zustimmung des Herstellers geöffnet oder repariert wird.', 'If the device is opened or repaired without the manufacturer’s consent.', 'Si l’appareil est ouvert ou réparé sans l’accord du fabricant.'],
        ['Nach einem Jahr.', 'After one year.', 'Après un an.'],
        ['Wenn man die App nutzt.', 'If you use the app.', 'Si l’on utilise l’appli.'],
      ], 0, ['Last paragraph.', 'Dernier paragraphe.']),
    ]),
  ],

  schreiben: [
    message('goethe-b2-4-s1', 1, 'informal', 'Teil 1', [
      'In einem Internetforum diskutieren Leserinnen und Leser über das Thema „Sollten Kinder unter 14 Jahren ein eigenes Smartphone haben?“. Schreiben Sie einen Forumsbeitrag (ca. 150 Wörter). Nehmen Sie Stellung, begründen Sie Ihre Meinung mit zwei Argumenten, nennen Sie ein Gegenargument und schließen Sie mit einer Empfehlung.',
      'In an internet forum readers discuss “Should children under 14 have their own smartphone?”. Write a forum post (about 150 words). Take a position, justify your opinion with two arguments, name a counter-argument and finish with a recommendation.',
      'Dans un forum, des lecteurs discutent de « Les enfants de moins de 14 ans devraient-ils avoir leur propre smartphone ? ». Écrivez un message de forum (environ 150 mots). Prenez position, justifiez votre opinion avec deux arguments, citez un contre-argument et terminez par une recommandation.',
    ], txt('forum', 'Forum: Handy ab wann?',
      'Claudia_P: Meine Tochter (11) wünscht sich zum Geburtstag ein Smartphone. Alle Freundinnen haben schon eins. Was würdet ihr tun?',
      'Claudia_P: My daughter (11) wants a smartphone for her birthday. All her friends already have one. What would you do?',
      'Claudia_P : Ma fille (11 ans) souhaite un smartphone pour son anniversaire. Toutes ses amies en ont déjà un. Que feriez-vous ?'), [
      { id: 'p1', de: 'Eigene Meinung', en: 'Your opinion', fr: 'Votre opinion', keywords: ['meinung', 'finde', 'der ansicht', 'denke'] },
      { id: 'p2', de: 'Zwei Argumente', en: 'Two arguments', fr: 'Deux arguments', keywords: ['dafür spricht', 'erstens', 'außerdem', 'zum beispiel'] },
      { id: 'p3', de: 'Gegenargument', en: 'A counter-argument', fr: 'Un contre-argument', keywords: ['einwenden', 'andererseits', 'dagegen', 'nachteil'] },
      { id: 'p4', de: 'Empfehlung', en: 'A recommendation', fr: 'Une recommandation', keywords: ['empfehle', 'empfehlung', 'sollte', 'vorschlag'] },
    ], [130, 190], {
      de: 'Hallo Claudia,\n\nmeiner Meinung nach sollte ein Kind mit elf Jahren noch kein unbegrenztes Smartphone haben. Dafür spricht erstens, dass Kinder in diesem Alter noch nicht einschätzen können, welche Inhalte im Netz gefährlich sind. Außerdem verbringen viele Kinder, zum Beispiel in der Klasse meines Sohnes, mehrere Stunden täglich am Bildschirm und schlafen dadurch schlechter.\n\nAndererseits kann man einwenden, dass Kinder ohne Handy leicht ausgeschlossen werden, weil sich die Klassengruppe nur dort unterhält. Das ist ein ernst zu nehmender Nachteil.\n\nDeshalb empfehle ich einen Kompromiss: ein einfaches Handy mit festen Regeln, zum Beispiel Zeitlimit und keine sozialen Netzwerke. Später kann man die Regeln gemeinsam lockern, wenn das Kind Verantwortung zeigt.\n\nViele Grüße\nMartin',
      en: 'Hello Claudia,\n\nIn my opinion an eleven-year-old child should not yet have an unrestricted smartphone. In favour of this speaks first that children at this age cannot yet judge which content on the net is dangerous. In addition many children, for example in my son’s class, spend several hours a day at the screen and consequently sleep worse.\n\nOn the other hand one can object that children without a phone are easily excluded because the class group only chats there. That is a serious disadvantage.\n\nI therefore recommend a compromise: a simple phone with fixed rules, for example a time limit and no social networks. Later the rules can be relaxed together if the child shows responsibility.\n\nBest wishes\nMartin',
      fr: 'Bonjour Claudia,\n\nÀ mon avis, un enfant de onze ans ne devrait pas encore avoir un smartphone sans restriction. Ce qui plaide pour cela, c’est premièrement que les enfants de cet âge ne peuvent pas encore évaluer quels contenus sont dangereux sur le net. De plus, beaucoup d’enfants, par exemple dans la classe de mon fils, passent plusieurs heures par jour devant l’écran et dorment donc moins bien.\n\nD’un autre côté, on peut objecter que les enfants sans téléphone sont facilement exclus, car le groupe de la classe ne discute que là. C’est un inconvénient sérieux.\n\nJe recommande donc un compromis : un téléphone simple avec des règles fixes, par exemple une limite de temps et pas de réseaux sociaux. Plus tard, on pourra assouplir les règles ensemble si l’enfant fait preuve de responsabilité.\n\nCordialement\nMartin',
    }),

    message('goethe-b2-4-s2', 2, 'formal', 'Teil 2', [
      'Sie haben ein Smartphone online bestellt. Es ist beschädigt angekommen. Schreiben Sie eine formelle E-Mail an den Online-Shop (ca. 100 Wörter). Beschreiben Sie das Problem, sagen Sie, was Sie bereits getan haben, und fordern Sie Ersatz bis zu einem bestimmten Datum.',
      'You ordered a smartphone online. It arrived damaged. Write a formal e-mail to the online shop (about 100 words). Describe the problem, say what you have already done and demand a replacement by a certain date.',
      'Vous avez commandé un smartphone en ligne. Il est arrivé endommagé. Écrivez un e-mail formel à la boutique en ligne (environ 100 mots). Décrivez le problème, dites ce que vous avez déjà fait et exigez un remplacement avant une date précise.',
    ], undefined, [
      { id: 'p1', de: 'Problem beschreiben', en: 'Describe the problem', fr: 'Décrire le problème', keywords: ['beschädigt', 'display', 'risse', 'defekt', 'smartphone'] },
      { id: 'p2', de: 'Bisherige Schritte', en: 'Steps taken so far', fr: 'Démarches déjà faites', keywords: ['fotos', 'foto', 'hotline', 'angerufen', 'bereits'] },
      { id: 'p3', de: 'Ersatz bis zu einem Datum', en: 'Replacement by a date', fr: 'Remplacement avant une date', keywords: ['ersatz', 'austausch', 'bis zum', 'frist', 'fordere'] },
    ], [80, 130], {
      de: 'Sehr geehrte Damen und Herren,\n\nich habe am 2. März bei Ihnen ein Smartphone (Bestellnummer 70215) bestellt. Leider muss ich feststellen, dass das Gerät beschädigt angekommen ist: Das Display hat mehrere Risse, und die Verpackung war ebenfalls beschädigt.\n\nIch habe bereits Fotos gemacht und mehrmals Ihre Hotline angerufen, ohne eine Lösung zu erhalten. Ich fordere Sie daher auf, mir bis zum 20. März ein neues Gerät zuzusenden. Andernfalls trete ich vom Kaufvertrag zurück und erwarte die Erstattung des Kaufpreises.\n\nIch freue mich auf Ihre Rückmeldung.\n\nMit freundlichen Grüßen\nMarkus Brandt',
      en: 'Dear Sir or Madam,\n\nOn 2 March I ordered a smartphone (order number 70215) from you. Unfortunately I must note that the device arrived damaged: the display has several cracks and the packaging was also damaged.\n\nI have already taken photos and called your hotline several times without receiving a solution. I therefore request that you send me a new device by 20 March. Otherwise I will withdraw from the purchase contract and expect a refund of the purchase price.\n\nI look forward to your reply.\n\nYours sincerely\nMarkus Brandt',
      fr: 'Mesdames et Messieurs,\n\nLe 2 mars, j’ai commandé chez vous un smartphone (numéro de commande 70215). Je dois malheureusement constater que l’appareil est arrivé endommagé : l’écran présente plusieurs fissures et l’emballage était également endommagé.\n\nJ’ai déjà pris des photos et appelé plusieurs fois votre hotline sans obtenir de solution. Je vous demande donc de m’envoyer un nouvel appareil d’ici le 20 mars. Sinon, je me rétracterai du contrat de vente et attendrai le remboursement du prix d’achat.\n\nJ’attends votre retour.\n\nCordialement\nMarkus Brandt',
    }),
  ],

  sprechen: [
    speak('goethe-b2-4-p1', 1, 'Teil 1: Ein Thema präsentieren', 5, [
      'Sie ziehen eine Themenkarte und halten einen kurzen Vortrag (ca. 4 Minuten). 1. Einleitung: Nennen Sie das Thema. 2. Berichten Sie von Ihren Erfahrungen. 3. Sprechen Sie über die Situation in Ihrem Heimatland. 4. Nennen Sie Vor- und Nachteile, äußern Sie Ihre Meinung und bedanken Sie sich.',
      'You draw a topic card and give a short talk (about 4 minutes). 1. Introduction: name the topic. 2. Report on your experiences. 3. Talk about the situation in your home country. 4. Name advantages and disadvantages, give your opinion and say thank you.',
      'Vous tirez une carte de thème et faites un court exposé (environ 4 minutes). 1. Introduction : annoncez le thème. 2. Parlez de vos expériences. 3. Parlez de la situation dans votre pays d’origine. 4. Citez avantages et inconvénients, donnez votre opinion et remerciez.',
    ], [
      { id: 'b2-4-p1a', cue: 'Thema: Künstliche Intelligenz im Alltag', cueEn: 'Topic: artificial intelligence in everyday life', cueFr: 'Thème : l’intelligence artificielle au quotidien',
        sample: 'Guten Tag, mein Thema ist „Künstliche Intelligenz im Alltag“. Ich nutze sie täglich, zum Beispiel für Übersetzungen und Navigation. In meinem Heimatland wird KI zunehmend in Banken und Krankenhäusern eingesetzt. Ein Vorteil ist, dass Routineaufgaben schneller erledigt werden und man Zeit spart. Ein Nachteil ist, dass manche Arbeitsplätze verschwinden und der Datenschutz nicht immer gesichert ist. Meiner Meinung nach sollten wir KI nutzen, aber klare Regeln dafür festlegen. Vielen Dank.',
        sampleEn: 'Good day, my topic is “Artificial intelligence in everyday life”. I use it daily, for example for translations and navigation. In my home country AI is increasingly used in banks and hospitals. An advantage is that routine tasks are done faster and you save time. A disadvantage is that some jobs disappear and data protection is not always secure. In my opinion we should use AI but set clear rules for it. Thank you very much.',
        sampleFr: 'Bonjour, mon thème est « L’intelligence artificielle au quotidien ». Je l’utilise tous les jours, par exemple pour les traductions et la navigation. Dans mon pays d’origine, l’IA est de plus en plus utilisée dans les banques et les hôpitaux. Un avantage est que les tâches routinières sont faites plus vite et que l’on gagne du temps. Un inconvénient est que certains emplois disparaissent et que la protection des données n’est pas toujours garantie. À mon avis, nous devrions utiliser l’IA mais fixer des règles claires. Merci beaucoup.' },
      { id: 'b2-4-p1b', cue: 'Thema: Online-Shopping', cueEn: 'Topic: online shopping', cueFr: 'Thème : les achats en ligne',
        sample: 'Mein Thema ist „Online-Shopping“. Ich bestelle etwa einmal pro Woche etwas im Internet, meistens Bücher und Kleidung. In meinem Heimatland ist Online-Shopping noch nicht so verbreitet, weil viele Menschen lieber auf dem Markt kaufen. Ein Vorteil ist, dass man Preise schnell vergleichen kann. Ein Nachteil ist, dass die kleinen Läden in der Innenstadt darunter leiden. Ich bin der Ansicht, dass man regional einkaufen sollte, wenn es möglich ist. Danke fürs Zuhören.',
        sampleEn: 'My topic is “Online shopping”. I order something online about once a week, mostly books and clothes. In my home country online shopping is not yet so widespread because many people prefer to buy at the market. An advantage is that you can compare prices quickly. A disadvantage is that the small shops in the city centre suffer. I am of the opinion that one should shop locally if possible. Thank you for listening.',
        sampleFr: 'Mon thème est « Les achats en ligne ». Je commande quelque chose sur Internet environ une fois par semaine, surtout des livres et des vêtements. Dans mon pays d’origine, les achats en ligne ne sont pas encore aussi répandus, car beaucoup de gens préfèrent acheter au marché. Un avantage est que l’on peut comparer rapidement les prix. Un inconvénient est que les petits commerces du centre-ville en souffrent. Je suis d’avis qu’il faut acheter local quand c’est possible. Merci de m’avoir écouté.' },
      { id: 'b2-4-p1c', cue: 'Thema: Lernen mit digitalen Medien', cueEn: 'Topic: learning with digital media', cueFr: 'Thème : apprendre avec les médias numériques',
        sample: 'Ich spreche heute über „Lernen mit digitalen Medien“. Ich benutze Apps und Videos, um Deutsch zu lernen, und finde das sehr praktisch. In meinem Heimatland haben viele Schulen noch kein schnelles Internet, deshalb lernt man oft mit Büchern. Ein Vorteil ist, dass man flexibel lernen kann. Ein Nachteil ist, dass man leicht abgelenkt wird. Ich bin überzeugt, dass eine Mischung aus Büchern und digitalen Medien am besten funktioniert. Vielen Dank.',
        sampleEn: 'Today I am talking about “Learning with digital media”. I use apps and videos to learn German and find that very practical. In my home country many schools still do not have fast internet, so people often learn with books. An advantage is that you can learn flexibly. A disadvantage is that you are easily distracted. I am convinced that a mix of books and digital media works best. Thank you very much.',
        sampleFr: 'Aujourd’hui je parle de « Apprendre avec les médias numériques ». J’utilise des applis et des vidéos pour apprendre l’allemand et je trouve cela très pratique. Dans mon pays d’origine, beaucoup d’écoles n’ont pas encore d’Internet rapide, on apprend donc souvent avec des livres. Un avantage est que l’on peut apprendre de façon flexible. Un inconvénient est que l’on se laisse facilement distraire. Je suis convaincu qu’un mélange de livres et de médias numériques fonctionne le mieux. Merci beaucoup.' },
    ]),
    speak('goethe-b2-4-p2', 2, 'Teil 2: Diskutieren und eine Lösung finden', 5, [
      'Diskutieren Sie mit Ihrem Partner / Ihrer Partnerin zum Thema „Sollten Roboter in der Pflege eingesetzt werden?“. Tauschen Sie Argumente aus, reagieren Sie auf die Meinung Ihres Partners und versuchen Sie, einen Kompromiss zu finden.',
      'Discuss with your partner the topic “Should robots be used in care?”. Exchange arguments, react to your partner’s opinion and try to find a compromise.',
      'Discutez avec votre partenaire du thème « Les robots devraient-ils être utilisés dans les soins ? ». Échangez des arguments, réagissez à l’avis de votre partenaire et essayez de trouver un compromis.',
    ], [
      { id: 'b2-4-p2a', cue: 'Eigene Position nennen und begründen', cueEn: 'State and justify your position', cueFr: 'Énoncer et justifier sa position',
        sample: 'Ich finde, dass Roboter in der Pflege hilfreich sein können, zum Beispiel beim Heben oder bei Routineaufgaben. Dadurch hätten die Pflegekräfte mehr Zeit für persönliche Gespräche.',
        sampleEn: 'I think robots can be helpful in care, for example for lifting or routine tasks. That way the carers would have more time for personal conversations.',
        sampleFr: 'Je trouve que les robots peuvent être utiles dans les soins, par exemple pour soulever ou pour des tâches routinières. Ainsi, le personnel soignant aurait plus de temps pour des conversations personnelles.' },
      { id: 'b2-4-p2b', cue: 'Auf ein Gegenargument reagieren', cueEn: 'React to a counter-argument', cueFr: 'Réagir à un contre-argument',
        sample: 'Da stimme ich dir zum Teil zu: Menschliche Nähe kann kein Roboter ersetzen. Aber ich meine, dass er die Pfleger unterstützen und nicht ersetzen soll.',
        sampleEn: 'I partly agree with you there: no robot can replace human closeness. But I think it should support the carers and not replace them.',
        sampleFr: 'Là, je suis en partie d’accord avec toi : aucun robot ne peut remplacer la proximité humaine. Mais je pense qu’il devrait soutenir les soignants et non les remplacer.' },
      { id: 'b2-4-p2c', cue: 'Einen Kompromiss vorschlagen', cueEn: 'Suggest a compromise', cueFr: 'Proposer un compromis',
        sample: 'Wie wäre es, wenn Roboter nur für körperlich schwere Aufgaben eingesetzt werden und alle Gespräche und Entscheidungen bei den Pflegekräften bleiben? So wären beide Seiten zufrieden.',
        sampleEn: 'How about robots only being used for physically heavy tasks and all conversations and decisions staying with the carers? That way both sides would be satisfied.',
        sampleFr: 'Et si les robots n’étaient utilisés que pour les tâches physiquement lourdes et que toutes les conversations et décisions restaient aux soignants ? Ainsi les deux parties seraient satisfaites.' },
    ]),
  ],
};

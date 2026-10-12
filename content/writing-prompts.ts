import type { Level } from './types';

export type WritingPrompt = {
  id: string;
  level: Level;
  title: string;
  titleFr: string;
  task: string;
  taskFr: string;
  minWords: number;
  hints: string[]; // German phrases worth trying
};

export const WRITING_PROMPTS: WritingPrompt[] = [
  {
    id: 'wr-a1-intro', level: 'A1', minWords: 25,
    title: 'Introduce yourself', titleFr: 'Présente-toi',
    task: 'Write a short text about yourself: your name, age, where you are from, the languages you speak and one hobby.',
    taskFr: "Écris un court texte sur toi : ton nom, ton âge, d'où tu viens, les langues que tu parles et un loisir.",
    hints: ['Ich heiße …', 'Ich bin … Jahre alt.', 'Ich komme aus …', 'Ich spreche …', 'Mein Hobby ist …'],
  },
  {
    id: 'wr-a1-family', level: 'A1', minWords: 25,
    title: 'Describe your family', titleFr: 'Décris ta famille',
    task: 'Say who is in your family, how old they are and what they do.',
    taskFr: "Dis qui fait partie de ta famille, quel âge ils ont et ce qu'ils font.",
    hints: ['Ich habe …', 'Mein Vater ist …', 'Meine Schwester heißt …', 'Sie arbeitet als …'],
  },
  {
    id: 'wr-a1-cafe', level: 'A1', minWords: 20,
    title: 'Order in a café', titleFr: 'Commander au café',
    task: 'Write a short dialogue: you order a drink and something to eat, then ask for the bill.',
    taskFr: "Écris un court dialogue : tu commandes une boisson et quelque chose à manger, puis tu demandes l'addition.",
    hints: ['Ich möchte …', 'Ich hätte gern …', 'Was kostet …?', 'Die Rechnung, bitte.'],
  },
  {
    id: 'wr-a1-day', level: 'A1', minWords: 30,
    title: 'Your daily routine', titleFr: 'Ta journée type',
    task: 'Describe a normal day: when you get up, what you eat, where you go and when you go to bed.',
    taskFr: "Décris une journée normale : quand tu te lèves, ce que tu manges, où tu vas et quand tu te couches.",
    hints: ['Ich stehe um … Uhr auf.', 'Dann frühstücke ich.', 'Am Nachmittag …', 'Abends gehe ich ins Bett.'],
  },
  {
    id: 'wr-a1-home', level: 'A1', minWords: 25,
    title: 'Your home', titleFr: 'Ton logement',
    task: 'Describe where you live: the town, the rooms and your favourite place at home.',
    taskFr: 'Décris où tu habites : la ville, les pièces et ton endroit préféré chez toi.',
    hints: ['Ich wohne in …', 'Es gibt … Zimmer.', 'Mein Lieblingsplatz ist …', 'Die Küche ist …'],
  },
  {
    id: 'wr-a2-weekend', level: 'A2', minWords: 40,
    title: 'Last weekend', titleFr: 'Le week-end dernier',
    task: 'Tell a friend what you did last weekend. Use the Perfekt (ich habe … gemacht, ich bin … gegangen).',
    taskFr: "Raconte à un ami ce que tu as fait le week-end dernier. Utilise le Perfekt (ich habe … gemacht, ich bin … gegangen).",
    hints: ['Am Samstag habe ich …', 'Dann bin ich … gegangen.', 'Es hat mir gut gefallen.', 'Am Sonntag war ich …'],
  },
  {
    id: 'wr-a2-invite', level: 'A2', minWords: 40,
    title: 'Invite a friend', titleFr: 'Invite un ami',
    task: 'Write a message inviting a friend to your birthday party: when, where, what to bring.',
    taskFr: "Écris un message pour inviter un ami à ta fête d'anniversaire : quand, où, quoi apporter.",
    hints: ['Liebe/r …,', 'Ich möchte dich zu meiner Party einladen.', 'Sie beginnt um … Uhr.', 'Kannst du kommen?', 'Bring bitte … mit.'],
  },
  {
    id: 'wr-a2-landlord', level: 'A2', minWords: 45,
    title: 'Message to your landlord', titleFr: 'Message au propriétaire',
    task: 'Your heating does not work. Write a polite message to the landlord and ask for a repair.',
    taskFr: "Ton chauffage ne fonctionne pas. Écris un message poli au propriétaire et demande une réparation.",
    hints: ['Sehr geehrte Damen und Herren,', 'Die Heizung funktioniert nicht.', 'Könnten Sie bitte …?', 'Vielen Dank im Voraus.', 'Mit freundlichen Grüßen'],
  },
  {
    id: 'wr-b1-cars', level: 'B1', minWords: 70,
    title: 'Cars in the city centre', titleFr: 'Voitures en centre-ville',
    task: 'Should cities ban cars from the centre? Give your opinion with reasons for and against.',
    taskFr: "Les villes devraient-elles interdire les voitures dans le centre ? Donne ton avis avec des arguments pour et contre.",
    hints: ['Meiner Meinung nach …', 'Einerseits …, andererseits …', 'Ein Vorteil ist, dass …', 'Obwohl …', 'Deshalb finde ich, dass …'],
  },
  {
    id: 'wr-b1-application', level: 'B1', minWords: 70,
    title: 'Motivation letter', titleFr: 'Lettre de motivation',
    task: 'Write why you want to join a German course or apply for a job, and what you can offer.',
    taskFr: "Écris pourquoi tu veux suivre un cours d'allemand ou postuler à un emploi, et ce que tu peux apporter.",
    hints: ['Hiermit bewerbe ich mich um …', 'Ich interessiere mich für …, weil …', 'Ich habe Erfahrung in …', 'Ich würde mich freuen, wenn …'],
  },
  {
    id: 'wr-b1-trip', level: 'B1', minWords: 70,
    title: 'A memorable trip', titleFr: 'Un voyage mémorable',
    task: 'Describe a trip you will never forget: where, with whom, what happened and why it stayed with you.',
    taskFr: "Décris un voyage inoubliable : où, avec qui, ce qui s'est passé et pourquoi il t'est resté en mémoire.",
    hints: ['Vor … Jahren bin ich nach … gereist.', 'Nachdem wir angekommen waren, …', 'Besonders beeindruckt hat mich …', 'Ich werde nie vergessen, wie …'],
  },
  {
    id: 'wr-b2-forum', level: 'B2', minWords: 150,
    title: 'Forum post: home office', titleFr: 'Message de forum : télétravail',
    task: 'In a forum people discuss whether working from home should become the norm. Write a post of about 150 words: give your opinion, justify it with two arguments, and mention one counter-argument.',
    taskFr: 'Dans un forum, on discute pour savoir si le télétravail doit devenir la norme. Écris un message d’environ 150 mots : donne ton opinion, justifie-la avec deux arguments et mentionne un contre-argument.',
    hints: ['Meiner Meinung nach …', 'Dafür spricht, dass …', 'Zwar …, aber …', 'Man könnte einwenden, dass …', 'Zusammenfassend lässt sich sagen, dass …'],
  },
  {
    id: 'wr-b2-complaint', level: 'B2', minWords: 120,
    title: 'Formal complaint', titleFr: 'Réclamation formelle',
    task: 'Your heating has been broken for three weeks. Write a formal email to your landlord: describe the problem, state what you expect and set a deadline.',
    taskFr: 'Ton chauffage est en panne depuis trois semaines. Écris un e-mail formel à ton propriétaire : décris le problème, dis ce que tu attends et fixe un délai.',
    hints: ['Sehr geehrte Damen und Herren,', 'Leider muss ich feststellen, dass …', 'Ich fordere Sie auf, … zu …', 'Ich setze Ihnen eine Frist bis …', 'Mit freundlichen Grüßen'],
  },
  {
    id: 'wr-b2-summary', level: 'B2', minWords: 100,
    title: 'Summarise a chart', titleFr: 'Résumer un graphique',
    task: 'A survey shows that online shopping has grown from 20 % to 45 % in ten years while shopping in town centres has fallen. Describe the chart and draw a conclusion.',
    taskFr: 'Un sondage montre que les achats en ligne sont passés de 20 % à 45 % en dix ans alors que les achats en centre-ville ont baissé. Décris le graphique et tire une conclusion.',
    hints: ['Die Grafik zeigt, …', 'Der Anteil ist von … auf … gestiegen.', 'Es ist ein deutlicher Rückgang zu beobachten.', 'Daraus lässt sich schließen, dass …'],
  },
  {
    id: 'wr-b2-application', level: 'B2', minWords: 120,
    title: 'Cover letter', titleFr: 'Lettre de motivation',
    task: 'You apply for a job as project assistant. Write the main part of your cover letter: your qualifications, your experience and why you fit the company.',
    taskFr: 'Tu postules pour un poste d’assistant de projet. Rédige le corps de ta lettre de motivation : tes qualifications, ton expérience et pourquoi tu correspondes à l’entreprise.',
    hints: ['Ich bewerbe mich als …', 'Ich verfüge über …', 'Meine größte Stärke ist …', 'Ich würde gern Verantwortung übernehmen.', 'Ich freue mich auf Ihre Rückmeldung.'],
  },
  {
    id: 'wr-b2-review', level: 'B2', minWords: 120,
    title: 'Review a book or film', titleFr: 'Critique d’un livre ou d’un film',
    task: 'Write a review of a book or film you know: plot, characters, what you liked and what not, and whether you recommend it.',
    taskFr: 'Rédige la critique d’un livre ou d’un film que tu connais : intrigue, personnages, ce que tu as aimé ou non, et si tu le recommandes.',
    hints: ['Im Mittelpunkt steht …', 'Die Handlung ist fesselnd / vorhersehbar.', 'Es wirkt, als ob …', 'Leider …', 'Ich kann das Buch nur empfehlen.'],
  },
  {
    id: 'wr-b2-reported', level: 'B2', minWords: 100,
    title: 'Report a statement', titleFr: 'Rapporter une déclaration',
    task: 'Your colleague said in a meeting: “Ich habe das Projekt gestern abgeschlossen. Morgen präsentiere ich die Ergebnisse. Kommen Sie bitte um zehn Uhr.” Report what he said in a short email to your boss, using reported speech.',
    taskFr: 'Ton collègue a dit en réunion : « Ich habe das Projekt gestern abgeschlossen. Morgen präsentiere ich die Ergebnisse. Kommen Sie bitte um zehn Uhr. » Rapporte ses propos dans un court e-mail à ton chef, en utilisant le discours indirect.',
    hints: ['Herr Müller sagte, er habe das Projekt abgeschlossen.', 'Er werde die Ergebnisse präsentieren.', 'Er bat uns, um zehn Uhr zu kommen.', 'Laut Herrn Müller …'],
  },
];

export const FREE_WRITE_ID = 'wr-free';

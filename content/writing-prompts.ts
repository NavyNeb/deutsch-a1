import type { Level } from './types';

export type WritingPrompt = {
  id: string;
  level: Exclude<Level, 'B2'>;
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
];

export const FREE_WRITE_ID = 'wr-free';

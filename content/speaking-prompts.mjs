// Authored sentences for the Speak studio. Plain .mjs so scripts/prepare-audio.mjs
// can import it to generate the reference audio.
// level: 'A1' | 'A2' | 'B1'
export const SPEAKING_PROMPTS = [
  // A1
  { id: 'sp-a1-01', level: 'A1', topic: 'greetings', de: 'Guten Morgen! Wie geht es Ihnen?', en: 'Good morning! How are you?', fr: 'Bonjour ! Comment allez-vous ?' },
  { id: 'sp-a1-02', level: 'A1', topic: 'introduce', de: 'Ich heiße Anna und ich komme aus Kamerun.', en: 'My name is Anna and I come from Cameroon.', fr: "Je m'appelle Anna et je viens du Cameroun." },
  { id: 'sp-a1-03', level: 'A1', topic: 'introduce', de: 'Wie alt bist du?', en: 'How old are you?', fr: 'Quel âge as-tu ?' },
  { id: 'sp-a1-04', level: 'A1', topic: 'home', de: 'Ich wohne in einer kleinen Wohnung in Berlin.', en: 'I live in a small apartment in Berlin.', fr: "J'habite dans un petit appartement à Berlin." },
  { id: 'sp-a1-05', level: 'A1', topic: 'food', de: 'Kann ich bitte die Speisekarte haben?', en: 'Can I have the menu, please?', fr: 'Puis-je avoir la carte, s’il vous plaît ?' },
  { id: 'sp-a1-06', level: 'A1', topic: 'food', de: 'Ich möchte einen Kaffee und ein Brötchen, bitte.', en: "I'd like a coffee and a bread roll, please.", fr: 'Je voudrais un café et un petit pain, s’il vous plaît.' },
  { id: 'sp-a1-07', level: 'A1', topic: 'shopping', de: 'Was kostet das?', en: 'How much does that cost?', fr: 'Combien ça coûte ?' },
  { id: 'sp-a1-08', level: 'A1', topic: 'directions', de: 'Entschuldigung, wo ist der Bahnhof?', en: 'Excuse me, where is the train station?', fr: 'Excusez-moi, où est la gare ?' },
  { id: 'sp-a1-09', level: 'A1', topic: 'family', de: 'Ich habe zwei Brüder und eine Schwester.', en: 'I have two brothers and one sister.', fr: "J'ai deux frères et une sœur." },
  { id: 'sp-a1-10', level: 'A1', topic: 'free time', de: 'Am Wochenende gehe ich mit Freunden ins Kino.', en: 'At the weekend I go to the cinema with friends.', fr: 'Le week-end, je vais au cinéma avec des amis.' },
  { id: 'sp-a1-11', level: 'A1', topic: 'help', de: 'Ich spreche ein bisschen Deutsch.', en: 'I speak a little German.', fr: 'Je parle un peu allemand.' },
  { id: 'sp-a1-12', level: 'A1', topic: 'help', de: 'Können Sie das bitte wiederholen?', en: 'Could you repeat that, please?', fr: 'Pourriez-vous répéter, s’il vous plaît ?' },
  { id: 'sp-a1-13', level: 'A1', topic: 'learning', de: 'Ich lerne jeden Tag eine Stunde Deutsch.', en: 'I learn German for an hour every day.', fr: "J'apprends l'allemand une heure chaque jour." },
  // A2
  { id: 'sp-a2-01', level: 'A2', topic: 'past', de: 'Gestern bin ich mit dem Bus zur Arbeit gefahren.', en: 'Yesterday I went to work by bus.', fr: "Hier, je suis allé au travail en bus." },
  { id: 'sp-a2-02', level: 'A2', topic: 'restaurant', de: 'Ich würde gern einen Tisch für zwei Personen reservieren.', en: "I'd like to reserve a table for two people.", fr: 'Je voudrais réserver une table pour deux personnes.' },
  { id: 'sp-a2-03', level: 'A2', topic: 'past', de: 'Letzte Woche habe ich meine Großeltern besucht.', en: 'Last week I visited my grandparents.', fr: "La semaine dernière, j'ai rendu visite à mes grands-parents." },
  { id: 'sp-a2-04', level: 'A2', topic: 'reasons', de: 'Weil es geregnet hat, sind wir zu Hause geblieben.', en: 'Because it rained, we stayed at home.', fr: 'Comme il a plu, nous sommes restés à la maison.' },
  { id: 'sp-a2-05', level: 'A2', topic: 'reasons', de: 'Ich muss morgen früh aufstehen, denn mein Zug fährt um sechs Uhr.', en: 'I have to get up early tomorrow because my train leaves at six.', fr: 'Je dois me lever tôt demain, car mon train part à six heures.' },
  { id: 'sp-a2-06', level: 'A2', topic: 'directions', de: 'Könnten Sie mir bitte sagen, wie ich zum Markt komme?', en: 'Could you tell me how to get to the market, please?', fr: 'Pourriez-vous me dire comment aller au marché ?' },
  { id: 'sp-a2-07', level: 'A2', topic: 'hobbies', de: 'Ich interessiere mich für Musik und spiele Gitarre.', en: "I'm interested in music and play the guitar.", fr: "Je m'intéresse à la musique et je joue de la guitare." },
  { id: 'sp-a2-08', level: 'A2', topic: 'health', de: 'Der Arzt hat gesagt, dass ich viel Wasser trinken soll.', en: 'The doctor said that I should drink a lot of water.', fr: "Le médecin a dit que je devais boire beaucoup d'eau." },
  { id: 'sp-a2-09', level: 'A2', topic: 'compare', de: 'Meine Wohnung ist größer als die von meinem Bruder.', en: "My apartment is bigger than my brother's.", fr: "Mon appartement est plus grand que celui de mon frère." },
  { id: 'sp-a2-10', level: 'A2', topic: 'plans', de: 'Ich freue mich auf den Urlaub am Meer.', en: "I'm looking forward to the holiday by the sea.", fr: 'Je me réjouis des vacances au bord de la mer.' },
  // B1
  { id: 'sp-b1-01', level: 'B1', topic: 'hypothetical', de: 'Wenn ich mehr Zeit hätte, würde ich eine zweite Sprache lernen.', en: 'If I had more time, I would learn a second language.', fr: "Si j'avais plus de temps, j'apprendrais une deuxième langue." },
  { id: 'sp-b1-02', level: 'B1', topic: 'work', de: 'Ich habe mich beworben, weil die Stelle gut zu meiner Ausbildung passt.', en: 'I applied because the position suits my training well.', fr: "J'ai postulé parce que le poste correspond bien à ma formation." },
  { id: 'sp-b1-03', level: 'B1', topic: 'contrast', de: 'Obwohl das Wetter schlecht war, haben wir einen langen Spaziergang gemacht.', en: 'Although the weather was bad, we went for a long walk.', fr: 'Bien que le temps ait été mauvais, nous avons fait une longue promenade.' },
  { id: 'sp-b1-04', level: 'B1', topic: 'opinion', de: 'Meiner Meinung nach sollte man weniger Plastik benutzen.', en: 'In my opinion, people should use less plastic.', fr: "À mon avis, on devrait utiliser moins de plastique." },
  { id: 'sp-b1-05', level: 'B1', topic: 'polite', de: 'Ich wollte fragen, ob Sie mir bei diesem Formular helfen könnten.', en: 'I wanted to ask whether you could help me with this form.', fr: "Je voulais demander si vous pourriez m'aider avec ce formulaire." },
  { id: 'sp-b1-06', level: 'B1', topic: 'past', de: 'Nachdem ich das Studium beendet hatte, bin ich in eine andere Stadt gezogen.', en: 'After I had finished my studies, I moved to another city.', fr: "Après avoir terminé mes études, j'ai déménagé dans une autre ville." },
  { id: 'sp-b1-07', level: 'B1', topic: 'opinion', de: 'Es ist wichtig, dass jeder Mensch die Möglichkeit hat, eine Ausbildung zu machen.', en: 'It is important that everyone has the opportunity to get an education.', fr: "Il est important que chacun ait la possibilité de faire une formation." },
  { id: 'sp-b1-08', level: 'B1', topic: 'relative clauses', de: 'Das Buch, das du mir empfohlen hast, hat mir sehr gut gefallen.', en: 'I really liked the book that you recommended to me.', fr: "Le livre que tu m'as recommandé m'a beaucoup plu." },
];

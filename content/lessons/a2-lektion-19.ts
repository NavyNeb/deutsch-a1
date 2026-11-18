import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion19: Lesson = {
  id: 'a2-l19', level: 'A2', module: 5, number: 20,
  title: { de: 'Wenn-Sätze im Alltag', en: 'Everyday "wenn" clauses', fr: 'Les phrases en « wenn » au quotidien' },
  theme: 'Habits and routines with "wenn" clauses: food, weather, seasons, and traditions', themeFr: 'Habitudes et routines avec les phrases en « wenn » : nourriture, météo, saisons et traditions',
  goals: ['Describe habits with "wenn" (when / whenever)', 'Put the verb at the end of the wenn-clause', 'Start the sentence with the wenn-clause (verb jumps to position 1)', 'Talk about eating habits and express surprise'], goalsFr: ['Décrire des habitudes avec « wenn » (quand / chaque fois que)', 'Mettre le verbe à la fin de la subordonnée en wenn', 'Commencer la phrase par la subordonnée (le verbe passe en position 1)', 'Parler des habitudes alimentaires et exprimer la surprise'],
  canDo: g('Ich kann Gewohnheiten mit „wenn“ beschreiben, den Nebensatz an den Anfang stellen und Überraschung ausdrücken.', 'I can describe habits with “wenn”, put the subordinate clause first and express surprise.', 'Je sais décrire des habitudes avec « wenn », placer la subordonnée en premier et exprimer la surprise.'),
  steps: [
    { kind: 'intro', title: 'Gewohnheiten mit „wenn“ ☕', titleFr: 'Les habitudes avec « wenn » ☕',
      scene: 'Lara and Tim compare eating habits in summer and winter — and are surprised by each other’s traditions.', sceneFr: 'Lara et Tim comparent leurs habitudes alimentaires en été et en hiver — et s’étonnent des traditions de l’autre.',
      goals: ['Describe habits with wenn (when / whenever)', 'Put the verb at the end of the wenn-clause and start with the wenn-clause', 'Use frequency words and express surprise with dass'],
      goalsFr: ['Décrire des habitudes avec wenn (quand / chaque fois que)', 'Placer le verbe à la fin de la proposition en wenn et commencer par elle', 'Utiliser les adverbes de fréquence et exprimer la surprise avec dass'] },

    // ───────────── 1 · wenn ─────────────
    { kind: 'chapter', title: '„wenn“ schickt das Verb ans Ende', titleFr: '« wenn » envoie le verbe à la fin', blurb: 'Ich esse Salat, wenn es warm ist.', blurbFr: 'Ich esse Salat, wenn es warm ist.' },

    { kind: 'situation', title: 'Was isst du, wenn …?', titleFr: 'Que manges-tu quand … ?',
      setting: 'Lara and Tim at the kitchen table.', settingFr: 'Lara et Tim à la table de la cuisine.',
      lines: [
        line('Lara', 'Wenn es warm ist, essen wir Salat. Im Sommer esse ich viel Salat.', 'When it is warm, we eat salad. In summer I eat a lot of salad.', 'Quand il fait chaud, nous mangeons de la salade. En été, j’en mange beaucoup.'),
        line('Tim', 'Und wenn es kalt ist, essen wir Suppe. Wenn ich Durst habe, trinke ich Mineralwasser.', 'And when it is cold, we eat soup. When I am thirsty, I drink mineral water.', 'Et quand il fait froid, nous mangeons de la soupe. Quand j’ai soif, je bois de l’eau minérale.'),
        line('Lara', 'Zum Frühstück gibt es Brot mit Wurst. Die Kinder trinken gern Limonade.', 'For breakfast there is bread with sausage. The children like drinking lemonade.', 'Au petit-déjeuner, il y a du pain avec de la saucisse. Les enfants aiment boire de la limonade.'),
        line('Tim', 'Zum Nachtisch gibt es Obst. Kaffee am Morgen ist meine Gewohnheit.', 'For dessert there is fruit. Coffee in the morning is my habit.', 'Au dessert, il y a des fruits. Le café du matin est mon habitude.'),
      ],
      words: [{ id: 'a2l19-wenn', german: 'wenn', english: 'when / whenever / if', french: 'quand / chaque fois que / si', gender: null, syllables: ['WENN'], pronunciation: 'venn', example: { de: 'Wenn es warm ist, essen wir Salat.', en: 'When it is warm, we eat salad.', fr: 'Quand il fait chaud, nous mangeons de la salade.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l19-e13', prompt: 'What do they eat when it is cold?', promptFr: 'Que mangent-ils quand il fait froid ?', options: ['Soup', 'Salad', 'Fruit'], optionsFr: ['De la soupe', 'De la salade', 'Des fruits'], answer: 0, explain: 'Tim says: “Wenn es kalt ist, essen wir Suppe.”', explainFr: 'Tim dit : « Wenn es kalt ist, essen wir Suppe. »', hint: 'Look for “kalt”.', hintFr: 'Cherche « kalt ».' } },

    { kind: 'wordgroup', title: 'Essen und Trinken', titleFr: 'Manger et boire',
      items: [{ id: 'a2l19-salat', german: 'der Salat', english: 'the salad', french: 'la salade', gender: 'der', syllables: ['sa', 'LAT'], pronunciation: 'dair zah-LAHT', example: { de: 'Im Sommer esse ich viel Salat.', en: 'In summer I eat a lot of salad.', fr: 'En été, je mange beaucoup de salade.' } }, { id: 'a2l19-wurst', german: 'die Wurst', english: 'the sausage', french: 'la saucisse', gender: 'die', syllables: ['WURST'], pronunciation: 'dee voorst', example: { de: 'Zum Frühstück gibt es Brot mit Wurst.', en: 'For breakfast there is bread with sausage.', fr: 'Au petit-déjeuner, il y a du pain avec de la charcuterie.' } }, { id: 'a2l19-limonade', german: 'die Limonade', english: 'the lemonade / soft drink', french: 'la limonade / la boisson gazeuse', gender: 'die', syllables: ['li', 'mo', 'NA', 'de'], pronunciation: 'dee lee-moh-NAH-deh', example: { de: 'Die Kinder trinken gern Limonade.', en: 'The children like drinking lemonade.', fr: 'Les enfants aiment boire de la limonade.' } }, { id: 'a2l19-mineralwasser', german: 'das Mineralwasser', english: 'the mineral water', french: 'l’eau minérale', gender: 'das', syllables: ['mi', 'ne', 'RAL', 'was', 'ser'], pronunciation: 'dahs mi-neh-RAHL-vahs-ser', example: { de: 'Ein Mineralwasser, bitte.', en: 'A mineral water, please.', fr: 'Une eau minérale, s’il vous plaît.' } }, { id: 'a2l19-obst', german: 'das Obst', english: 'the fruit (in general)', french: 'les fruits', gender: 'das', syllables: ['OBST'], pronunciation: 'dahs ohpst', example: { de: 'Zum Nachtisch gibt es Obst.', en: 'For dessert there is fruit.', fr: 'Au dessert, il y a des fruits.' } }, { id: 'a2l19-durst', german: 'der Durst', english: 'the thirst', french: 'la soif', gender: 'der', syllables: ['DURST'], pronunciation: 'dair doorst', example: { de: 'Wenn ich Durst habe, trinke ich Wasser.', en: 'When I am thirsty, I drink water.', fr: 'Quand j’ai soif, je bois de l’eau.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l19-wenn', title: '“wenn” sends the verb to the end', titleFr: '« wenn » envoie le verbe à la fin',
      lead: 'wenn = when / whenever (habits). Like weil and dass: the conjugated verb goes to the very end, with a comma.',
      leadFr: 'wenn = quand / chaque fois que (habitudes). Comme weil et dass : le verbe conjugué va tout à la fin, avec une virgule.',
      explanationMd: '**wenn** means **when / whenever** for habits and things that happen **again and again**. Like **weil** and **dass**, it starts a **subordinate clause**: the **conjugated verb goes to the very end** and a **comma** separates the two clauses: **Ich esse Salat, wenn es warm ist.** **Separable verbs** join up again at the end (**wenn ich früh aufstehe**). With the **Perfekt** the participle comes first and the auxiliary last: **wenn ich gekocht habe**.',
      explanationMdFr: '**wenn** signifie **quand / chaque fois que** pour les habitudes et les choses qui se **répètent**. Comme **weil** et **dass**, il introduit une **proposition subordonnée** : le **verbe conjugué va tout à la fin** et une **virgule** sépare les deux propositions : **Ich esse Salat, wenn es warm ist.** Les **verbes séparables** se réunissent à la fin (**wenn ich früh aufstehe**). Au **parfait**, le participe vient d’abord et l’auxiliaire à la fin : **wenn ich gekocht habe**.',
      tables: [{ title: 'Main clause + wenn clause', titleFr: 'Principale + subordonnée en wenn', headers: ['Main clause', 'wenn-clause (verb last)'], headersFr: ['Principale', 'Subordonnée en wenn (verbe à la fin)'],
        rows: [['Ich esse Salat,', 'wenn es warm ist.'], ['Wir trinken Tee,', 'wenn wir Besuch haben.'], ['Ich trinke Mineralwasser,', 'wenn ich Durst habe.'], ['Ich frühstücke nicht,', 'wenn ich spät aufstehe.']],
        rowsFr: [['Ich esse Salat,', 'wenn es warm ist.'], ['Wir trinken Tee,', 'wenn wir Besuch haben.'], ['Ich trinke Mineralwasser,', 'wenn ich Durst habe.'], ['Ich frühstücke nicht,', 'wenn ich spät aufstehe.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'esse', role: 'verb' }, { text: 'Salat,', role: 'accusative' }, { text: 'wenn', role: 'connector' }, { text: 'es', role: 'subject' }, { text: 'warm', role: 'other' }, { text: 'ist.', role: 'verb' }], en: 'I eat salad when it is warm.', fr: 'Je mange de la salade quand il fait chaud.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'trinke', role: 'verb' }, { text: 'Mineralwasser,', role: 'accusative' }, { text: 'wenn', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'Durst', role: 'accusative' }, { text: 'habe.', role: 'verb' }], en: 'I drink mineral water when I am thirsty.', fr: 'Je bois de l’eau minérale quand j’ai soif.' },
      ],
      contrast: {
        a: { label: 'wenn = habit', labelFr: 'wenn = habitude', note: 'again and again', noteFr: 'régulièrement', examples: [g('Wenn es kalt ist, essen wir Suppe.', 'When it is cold, we eat soup.', 'Quand il fait froid, nous mangeons de la soupe.'), g('Wenn ich Durst habe, trinke ich Wasser.', 'When I am thirsty I drink water.', 'Quand j’ai soif, je bois de l’eau.')] },
        b: { label: 'als = one past time', labelFr: 'als = une fois dans le passé', note: 'a single event', noteFr: 'un événement unique', examples: [g('Als ich klein war, wohnten wir in Wien.', 'When I was small we lived in Vienna.', 'Quand j’étais petit, nous habitions à Vienne.'), g('Als er kam, regnete es.', 'When he came, it was raining.', 'Quand il est arrivé, il pleuvait.')] },
      },
      examples: [
        g('Ich trinke Mineralwasser, wenn ich Durst habe.', 'I drink mineral water when I am thirsty.', 'Je bois de l’eau minérale quand j’ai soif.'),
        g('Wir essen Suppe, wenn es kalt ist.', 'We eat soup when it is cold.', 'Nous mangeons de la soupe quand il fait froid.'),
        g('Ich frühstücke nicht, wenn ich spät aufstehe.', 'I don’t have breakfast when I get up late.', 'Je ne prends pas de petit-déjeuner quand je me lève tard.'),
        g('Wir trinken Tee, wenn wir Besuch haben.', 'We drink tea when we have visitors.', 'Nous buvons du thé quand nous avons des invités.'),
        g('Ich esse Salat, wenn es warm ist.', 'I eat salad when it is warm.', 'Je mange de la salade quand il fait chaud.'),
        g('Ich gehe schlafen, wenn ich müde bin.', 'I go to sleep when I am tired.', 'Je vais dormir quand je suis fatigué.'),
      ],
      mistakes: [
        { wrong: 'Ich esse Salat, wenn es ist warm.', right: 'Ich esse Salat, wenn es warm ist.', why: 'In a wenn-clause the verb goes last.', whyFr: 'Dans une subordonnée en wenn, le verbe va en dernier.' },
        { wrong: 'Ich frühstücke nicht, wenn ich stehe spät auf.', right: 'Ich frühstücke nicht, wenn ich spät aufstehe.', why: 'A separable verb joins up again at the end.', whyFr: 'Un verbe séparable se réunit à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l19-e1', prompt: 'Ich esse Salat, wenn es heiß ___. (sein)', promptFr: 'Ich esse Salat, wenn es heiß ___. (sein)', answer: 'ist', hint: 'The verb goes to the end of the wenn-clause.', hintFr: 'Le verbe va à la fin de la subordonnée en wenn.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l19-e2', prompt: 'Where does the conjugated verb go in a wenn-clause?', promptFr: 'Où va le verbe conjugué dans une subordonnée en wenn ?', options: ['Position 2', 'At the end', 'Position 1'], optionsFr: ['Position 2', 'À la fin', 'Position 1'], answer: 1, explain: 'wenn, weil and dass all send the conjugated verb to the end.', explainFr: 'wenn, weil et dass envoient tous le verbe conjugué à la fin.', hint: 'Same rule as weil and dass.', hintFr: 'Même règle que weil et dass.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l19-e6', prompt: 'Wenn ich Durst ___, trinke ich Mineralwasser. (haben)', promptFr: 'Wenn ich Durst ___, trinke ich Mineralwasser. (haben)', answer: 'habe', hint: 'ich-form of haben.', hintFr: 'Forme « ich » de haben.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l19-e8', tokens: ['trinke', 'Ich', 'Mineralwasser', 'wenn', 'ich', 'habe', 'Durst'], answer: ['Ich', 'trinke', 'Mineralwasser', 'wenn', 'ich', 'Durst', 'habe'], hint: 'Main clause first, then "wenn" with the verb last.', hintFr: 'D’abord la principale, puis « wenn » avec le verbe à la fin.' } },

    // ───────────── 2 · wenn-clause first ─────────────
    { kind: 'chapter', title: 'Der wenn-Satz zuerst', titleFr: 'La proposition en wenn d’abord', blurb: 'Wenn es regnet, bleiben wir zu Hause.', blurbFr: 'Wenn es regnet, bleiben wir zu Hause.' },

    { kind: 'situation', title: 'Wenn es regnet …', titleFr: 'Quand il pleut …',
      setting: 'Lara tells Tim what they do when the weather changes.', settingFr: 'Lara dit à Tim ce qu’ils font quand le temps change.',
      lines: [
        line('Lara', 'Wenn die Sonne scheint, trinke ich Limonade, und wenn es regnet, trinke ich Tee.', 'When the sun shines I drink lemonade, and when it rains I drink tea.', 'Quand le soleil brille, je bois de la limonade, et quand il pleut, je bois du thé.'),
        line('Tim', 'Wenn es regnet, bleiben wir zu Hause. Wenn ich wenig Zeit habe, koche ich nicht.', 'When it rains, we stay at home. When I have little time, I don’t cook.', 'Quand il pleut, nous restons à la maison. Quand j’ai peu de temps, je ne cuisine pas.'),
        line('Lara', 'Wenn wir Gäste haben, gibt es immer Fisch. Das ist in meiner Familie Tradition.', 'When we have guests, there is always fish. In my family that is tradition.', 'Quand nous avons des invités, il y a toujours du poisson. C’est une tradition dans ma famille.'),
      ],
      words: [{ id: 'a2l19-tradition', german: 'die Tradition', english: 'the tradition', french: 'la tradition', gender: 'die', syllables: ['tra', 'di', 'ZION'], pronunciation: 'dee trah-dee-TSYOHN', example: { de: 'In meiner Familie ist das Tradition.', en: 'In my family that is a tradition.', fr: 'Dans ma famille, c’est une tradition.' } }, { id: 'a2l19-gewohnheit', german: 'die Gewohnheit', english: 'the habit', french: 'l’habitude', gender: 'die', syllables: ['ge', 'WOHN', 'heit'], pronunciation: 'dee ge-VOHN-hite', example: { de: 'Kaffee am Morgen ist meine Gewohnheit.', en: 'Coffee in the morning is my habit.', fr: 'Le café du matin est mon habitude.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l19-wenn-zuerst', title: 'The wenn-clause first: verb in position 1', titleFr: 'La proposition en wenn d’abord : verbe en position 1',
      lead: 'The whole wenn-clause counts as position 1. The verb of the main clause comes right after the comma.',
      leadFr: 'Toute la proposition en wenn compte comme la position 1. Le verbe de la principale vient juste après la virgule.',
      explanationMd: 'You can start the sentence with the **wenn-clause**. The **whole clause counts as position 1**, so the **verb of the main clause comes right after the comma** (it is still **position 2** of the whole sentence): **Wenn es warm ist, esse ich Salat.** The main clause therefore has the **verb first, then the subject**. You may add **dann**; it does not change anything: **Wenn es kalt ist, dann essen wir Suppe.**',
      explanationMdFr: 'Tu peux commencer la phrase par la **proposition en wenn**. **Toute la proposition compte comme la position 1**, donc le **verbe de la principale vient juste après la virgule** (c’est toujours la **position 2** de l’ensemble) : **Wenn es warm ist, esse ich Salat.** La principale a donc le **verbe d’abord, puis le sujet**. Tu peux ajouter **dann** ; cela ne change rien : **Wenn es kalt ist, dann essen wir Suppe.**',
      tables: [{ title: 'Two orders, same meaning', titleFr: 'Deux ordres, même sens', headers: ['Main clause first', 'wenn-clause first'], headersFr: ['Principale d’abord', 'Proposition en wenn d’abord'],
        rows: [['Ich esse Salat, wenn es warm ist.', 'Wenn es warm ist, esse ich Salat.'], ['Wir bleiben zu Hause, wenn es regnet.', 'Wenn es regnet, bleiben wir zu Hause.'], ['Ich koche nicht, wenn ich wenig Zeit habe.', 'Wenn ich wenig Zeit habe, koche ich nicht.'], ['Es gibt Fisch, wenn wir Gäste haben.', 'Wenn wir Gäste haben, gibt es Fisch.']],
        rowsFr: [['Ich esse Salat, wenn es warm ist.', 'Wenn es warm ist, esse ich Salat.'], ['Wir bleiben zu Hause, wenn es regnet.', 'Wenn es regnet, bleiben wir zu Hause.'], ['Ich koche nicht, wenn ich wenig Zeit habe.', 'Wenn ich wenig Zeit habe, koche ich nicht.'], ['Es gibt Fisch, wenn wir Gäste haben.', 'Wenn wir Gäste haben, gibt es Fisch.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'es', role: 'subject' }, { text: 'regnet,', role: 'verb' }, { text: 'bleiben', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'zu Hause.', role: 'place' }], en: 'When it rains, we stay at home.', fr: 'Quand il pleut, nous restons à la maison.' },
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'wir', role: 'subject' }, { text: 'Gäste', role: 'accusative' }, { text: 'haben,', role: 'verb' }, { text: 'gibt', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'immer Fisch.', role: 'accusative' }], en: 'When we have guests, there is always fish.', fr: 'Quand nous avons des invités, il y a toujours du poisson.' },
      ],
      contrast: {
        a: { label: 'Main clause first', labelFr: 'Principale d’abord', note: 'subject, verb …', noteFr: 'sujet, verbe …', examples: [g('Wir bleiben zu Hause, wenn es regnet.', 'We stay at home when it rains.', 'Nous restons à la maison quand il pleut.'), g('Ich koche nicht, wenn ich wenig Zeit habe.', 'I don’t cook when I have little time.', 'Je ne cuisine pas quand j’ai peu de temps.')] },
        b: { label: 'wenn-clause first', labelFr: 'Proposition en wenn d’abord', note: 'verb, subject …', noteFr: 'verbe, sujet …', examples: [g('Wenn es regnet, bleiben wir zu Hause.', 'When it rains, we stay at home.', 'Quand il pleut, nous restons à la maison.'), g('Wenn ich wenig Zeit habe, koche ich nicht.', 'When I have little time, I don’t cook.', 'Quand j’ai peu de temps, je ne cuisine pas.')] },
      },
      examples: [
        g('Wenn es regnet, bleiben wir zu Hause.', 'When it rains, we stay at home.', 'Quand il pleut, nous restons à la maison.'),
        g('Wenn ich wenig Zeit habe, koche ich nicht.', 'When I have little time, I don’t cook.', 'Quand j’ai peu de temps, je ne cuisine pas.'),
        g('Wenn wir Gäste haben, gibt es immer Fisch.', 'When we have guests, there is always fish.', 'Quand nous avons des invités, il y a toujours du poisson.'),
        g('Wenn es kalt ist, dann essen wir Suppe.', 'When it is cold, then we eat soup.', 'Quand il fait froid, nous mangeons de la soupe.'),
        g('Wenn die Sonne scheint, trinke ich Limonade.', 'When the sun shines I drink lemonade.', 'Quand le soleil brille, je bois de la limonade.'),
        g('Wenn ich müde bin, gehe ich früh ins Bett.', 'When I am tired I go to bed early.', 'Quand je suis fatigué, je me couche tôt.'),
      ],
      mistakes: [
        { wrong: 'Wenn es regnet, wir bleiben zu Hause.', right: 'Wenn es regnet, bleiben wir zu Hause.', why: 'The wenn-clause is position 1: the verb comes next.', whyFr: 'La proposition en wenn occupe la position 1 : le verbe vient ensuite.' },
        { wrong: 'Wenn ich wenig Zeit habe ich koche nicht.', right: 'Wenn ich wenig Zeit habe, koche ich nicht.', why: 'Put a comma after the wenn-clause.', whyFr: 'Mets une virgule après la proposition en wenn.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l19-e3', tokens: ['essen', 'Wenn', 'es', 'wir', 'ist', 'Suppe', 'kalt'], answer: ['Wenn', 'es', 'kalt', 'ist', 'essen', 'wir', 'Suppe'], hint: 'wenn-clause first (verb last), then the verb, then the subject.', hintFr: 'D’abord la subordonnée en wenn (verbe à la fin), puis le verbe, puis le sujet.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l19-e7', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Wenn es regnet, wir bleiben zu Hause.', 'Wenn es regnet, bleiben wir zu Hause.', 'Wenn es regnet, wir zu Hause bleiben.'], optionsFr: ['Wenn es regnet, wir bleiben zu Hause.', 'Wenn es regnet, bleiben wir zu Hause.', 'Wenn es regnet, wir zu Hause bleiben.'], answer: 1, explain: 'After a wenn-clause, the main clause starts with its verb.', explainFr: 'Après une subordonnée en wenn, la principale commence par son verbe.', hint: 'The main clause starts with the verb.', hintFr: 'La principale commence par le verbe.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l19-e5', prompt: 'Listen. What does she drink when it rains?', promptFr: 'Écoute. Que boit-elle quand il pleut ?', audio: { ttsText: 'Wenn die Sonne scheint, trinke ich Limonade, und wenn es regnet, trinke ich Tee.' }, options: ['Tea', 'Lemonade', 'Mineral water'], optionsFr: ['Du thé', 'De la limonade', 'De l’eau minérale'], answer: 0, hint: 'Listen to the second wenn-clause.', hintFr: 'Écoute la deuxième subordonnée en wenn.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l19-e11', prompt: 'Listen. What does she eat when she has little time?', promptFr: 'Écoute. Que mange-t-elle quand elle a peu de temps ?', audio: { ttsText: 'Meistens esse ich abends warm, aber wenn ich wenig Zeit habe, esse ich nur ein Brot.' }, options: ['Only a piece of bread', 'A hot dinner', 'A big salad'], optionsFr: ['Seulement un morceau de pain', 'Un dîner chaud', 'Une grande salade'], answer: 0, hint: 'Listen after "wenn ich wenig Zeit habe".', hintFr: 'Écoute après « wenn ich wenig Zeit habe ».' } },

    // ───────────── 3 · frequency and surprise ─────────────
    { kind: 'chapter', title: 'Wie oft? Und Überraschung', titleFr: 'À quelle fréquence ? Et la surprise', blurb: 'immer … nie · Es überrascht mich, dass …', blurbFr: 'immer … nie · Es überrascht mich, dass …' },

    { kind: 'situation', title: 'Das überrascht mich!', titleFr: 'Cela me surprend !',
      setting: 'Lara learns about a German breakfast tradition.', settingFr: 'Lara découvre une tradition de petit-déjeuner allemande.',
      lines: [
        line('Lara', 'Meistens trinke ich Tee, manchmal Kaffee. Selten trinke ich Limonade.', 'I mostly drink tea, sometimes coffee. I rarely drink lemonade.', 'Je bois surtout du thé, parfois du café. Je bois rarement de la limonade.'),
        line('Tim', 'Meistens esse ich um eins. Manchmal koche ich für Freunde.', 'I mostly eat at one. Sometimes I cook for friends.', 'Je mange surtout à treize heures. Parfois je cuisine pour des amis.'),
        line('Lara', 'Es überrascht mich, dass ihr so spät esst. Wirklich?', 'It surprises me that you eat so late. Really?', 'Cela me surprend que vous mangiez si tard. Vraiment ?'),
        line('Tim', 'Ja! Ich finde es überraschend, dass man hier Kuchen zum Frühstück isst. Das wusste ich nicht!', 'Yes! I find it surprising that cake is eaten for breakfast here. I didn’t know that!', 'Oui ! Je trouve surprenant qu’on mange du gâteau au petit-déjeuner ici. Je ne le savais pas !'),
      ],
      words: [{ id: 'a2l19-meistens', german: 'meistens', english: 'mostly / usually', french: 'la plupart du temps', gender: null, syllables: ['MEIS', 'tens'], pronunciation: 'MICE-tens', example: { de: 'Meistens esse ich um eins.', en: 'I usually eat at one o’clock.', fr: 'Je mange la plupart du temps à treize heures.' } }, { id: 'a2l19-manchmal', german: 'manchmal', english: 'sometimes', french: 'parfois', gender: null, syllables: ['MANCH', 'mal'], pronunciation: 'MAHNKH-mahl', example: { de: 'Manchmal koche ich für Freunde.', en: 'Sometimes I cook for friends.', fr: 'Parfois, je cuisine pour des amis.' } }, { id: 'a2l19-selten', german: 'selten', english: 'rarely', french: 'rarement', gender: null, syllables: ['SEL', 'ten'], pronunciation: 'ZEL-ten', example: { de: 'Ich trinke selten Limonade.', en: 'I rarely drink lemonade.', fr: 'Je bois rarement de la limonade.' } }, { id: 'a2l19-ueberraschen', german: 'überraschen', english: 'to surprise', french: 'surprendre', gender: null, syllables: ['ü', 'ber', 'RA', 'schen'], pronunciation: 'ue-ber-RASH-en', example: { de: 'Das überrascht mich.', en: 'That surprises me.', fr: 'Cela me surprend.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l19-haeufigkeit', title: 'How often? and expressing surprise', titleFr: 'À quelle fréquence ? et exprimer la surprise',
      lead: 'immer → meistens → oft → manchmal → selten → nie. Surprise: Es überrascht mich, dass … (verb last).',
      leadFr: 'immer → meistens → oft → manchmal → selten → nie. Surprise : Es überrascht mich, dass … (verbe à la fin).',
      explanationMd: 'Habits go with **frequency words**: **immer** (always) → **meistens** (mostly) → **oft** (often) → **manchmal** (sometimes) → **selten** (rarely) → **nie** (never). To react with **surprise**, use **dass** again (**verb at the end!**): **Es überrascht mich, dass ihr so spät esst.** **Ich finde es überraschend, dass man hier Kuchen zum Frühstück isst.** Short reactions: **Wirklich?**, **Das wusste ich nicht!**, **Das ist ja interessant!**',
      explanationMdFr: 'Les habitudes vont avec des **adverbes de fréquence** : **immer** (toujours) → **meistens** (le plus souvent) → **oft** (souvent) → **manchmal** (parfois) → **selten** (rarement) → **nie** (jamais). Pour réagir avec de la **surprise**, utilise encore **dass** (**verbe à la fin !**) : **Es überrascht mich, dass ihr so spät esst.** **Ich finde es überraschend, dass man hier Kuchen zum Frühstück isst.** Réactions courtes : **Wirklich ?**, **Das wusste ich nicht !**, **Das ist ja interessant !**',
      tables: [{ title: 'Frequency scale', titleFr: 'Échelle de fréquence', headers: ['Word', 'Meaning', 'Example'], headersFr: ['Mot', 'Sens', 'Exemple'],
        rows: [['immer', '100 %', 'Ich trinke immer Kaffee.'], ['meistens', 'mostly', 'Meistens esse ich um eins.'], ['oft', 'often', 'Wir essen oft Suppe.'], ['manchmal', 'sometimes', 'Manchmal koche ich für Freunde.'], ['selten', 'rarely', 'Ich trinke selten Limonade.'], ['nie', '0 %', 'Er trinkt nie Alkohol.']],
        rowsFr: [['immer', '100 %', 'Ich trinke immer Kaffee.'], ['meistens', 'le plus souvent', 'Meistens esse ich um eins.'], ['oft', 'souvent', 'Wir essen oft Suppe.'], ['manchmal', 'parfois', 'Manchmal koche ich für Freunde.'], ['selten', 'rarement', 'Ich trinke selten Limonade.'], ['nie', '0 %', 'Er trinkt nie Alkohol.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'überrascht', role: 'verb' }, { text: 'mich,', role: 'accusative' }, { text: 'dass', role: 'connector' }, { text: 'ihr', role: 'subject' }, { text: 'so spät', role: 'time' }, { text: 'esst.', role: 'verb' }], en: 'It surprises me that you eat so late.', fr: 'Cela me surprend que vous mangiez si tard.' },
        { parts: [{ text: 'Meistens', role: 'time' }, { text: 'trinke', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'Tee.', role: 'accusative' }], en: 'I mostly drink tea.', fr: 'Je bois surtout du thé.' },
      ],
      contrast: {
        a: { label: 'Frequency', labelFr: 'Fréquence', note: 'immer … nie', noteFr: 'immer … nie', examples: [g('Meistens trinke ich Tee, manchmal Kaffee.', 'I mostly drink tea, sometimes coffee.', 'Je bois surtout du thé, parfois du café.'), g('Ich trinke selten Limonade.', 'I rarely drink lemonade.', 'Je bois rarement de la limonade.')] },
        b: { label: 'Surprise', labelFr: 'Surprise', note: 'dass + verb last', noteFr: 'dass + verbe à la fin', examples: [g('Es überrascht mich, dass ihr so spät esst.', 'It surprises me that you eat so late.', 'Cela me surprend que vous mangiez si tard.'), g('Ich finde es überraschend, dass man hier Kuchen zum Frühstück isst.', 'I find it surprising that cake is eaten for breakfast here.', 'Je trouve surprenant qu’on mange du gâteau au petit-déjeuner ici.')] },
      },
      examples: [
        g('Meistens trinke ich Tee, manchmal Kaffee.', 'I mostly drink tea, sometimes coffee.', 'Je bois surtout du thé, parfois du café.'),
        g('Es überrascht mich, dass ihr so spät esst.', 'It surprises me that you eat so late.', 'Cela me surprend que vous mangiez si tard.'),
        g('Ich finde es überraschend, dass man hier Kuchen zum Frühstück isst.', 'I find it surprising that cake is eaten for breakfast here.', 'Je trouve surprenant qu’on mange du gâteau au petit-déjeuner ici.'),
        g('Ich trinke selten Limonade.', 'I rarely drink lemonade.', 'Je bois rarement de la limonade.'),
        g('Manchmal koche ich für Freunde.', 'Sometimes I cook for friends.', 'Parfois je cuisine pour des amis.'),
        g('Das wusste ich nicht! — Wirklich?', 'I didn’t know that! — Really?', 'Je ne le savais pas ! — Vraiment ?'),
      ],
      mistakes: [
        { wrong: 'Es überrascht mich, dass ihr esst so spät.', right: 'Es überrascht mich, dass ihr so spät esst.', why: 'After dass the verb goes last.', whyFr: 'Après dass, le verbe va en dernier.' },
        { wrong: 'Ich trinke nie nicht Alkohol.', right: 'Ich trinke nie Alkohol.', why: 'nie already means “not ever”: no extra nicht.', whyFr: 'nie signifie déjà « jamais » : pas de nicht en plus.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'match', id: 'a2l19-e4', pairs: [{ de: 'immer', en: 'always', fr: 'toujours' }, { de: 'meistens', en: 'mostly', fr: 'la plupart du temps' }, { de: 'manchmal', en: 'sometimes', fr: 'parfois' }, { de: 'selten', en: 'rarely', fr: 'rarement' }], hint: 'These words tell you how often something happens.', hintFr: 'Ces mots disent à quelle fréquence quelque chose arrive.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l19-e12', prompt: 'Es überrascht mich, ___ ihr so spät esst.', promptFr: 'Es überrascht mich, ___ ihr so spät esst.', answer: 'dass', hint: 'The conjunction "that" — the verb "esst" is at the end.', hintFr: 'La conjonction « que » — le verbe « esst » est à la fin.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l19-e9', word: 'Wurst', answer: 'die', hint: 'Feminine: die Wurst, die Würste.', hintFr: 'Féminin : die Wurst, die Würste.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l19-e10', word: 'Salat', answer: 'der', hint: 'Masculine: der Salat.', hintFr: 'Masculin : der Salat.' } },

    { kind: 'pronunciation', focus: 'ü in überraschen, the sch sound, and the long o in Gewohnheit', focusFr: 'Le ü de überraschen, le son sch et le o long de Gewohnheit', items: [{ id: 'a2l19-ueberraschen-pron', german: 'überraschen', english: 'to surprise', french: 'surprendre', gender: null, syllables: ['ü', 'ber', 'RA', 'schen'], pronunciation: 'ue-ber-RASH-en', example: { de: 'Das überrascht mich sehr.', en: 'That surprises me a lot.', fr: 'Cela me surprend beaucoup.' } }, { id: 'a2l19-gewohnheit-pron', german: 'die Gewohnheit', english: 'the habit', french: 'l’habitude', gender: 'die', syllables: ['ge', 'WOHN', 'heit'], pronunciation: 'dee ge-VOHN-hite', example: { de: 'Das ist eine gute Gewohnheit.', en: 'That is a good habit.', fr: 'C’est une bonne habitude.' } }, { id: 'a2l19-wurst-pron', german: 'die Wurst', english: 'the sausage', french: 'la saucisse', gender: 'die', syllables: ['WURST'], pronunciation: 'dee voorst', example: { de: 'Die Wurst schmeckt gut.', en: 'The sausage tastes good.', fr: 'La saucisse est bonne.' } }, { id: 'a2l19-mineralwasser-pron', german: 'das Mineralwasser', english: 'the mineral water', french: 'l’eau minérale', gender: 'das', syllables: ['mi', 'ne', 'RAL', 'was', 'ser'], pronunciation: 'dahs mi-neh-RAHL-vahs-ser', example: { de: 'Ich möchte ein Mineralwasser.', en: 'I would like a mineral water.', fr: 'Je voudrais une eau minérale.' } }] },

    { kind: 'wrapup',
      summary: 'You can now describe **habits with wenn**, start with the **wenn-clause**, use **frequency words** and express **surprise with dass**. 🎉',
      summaryFr: 'Tu sais maintenant décrire des **habitudes avec wenn**, commencer par la **proposition en wenn**, utiliser les **adverbes de fréquence** et exprimer la **surprise avec dass**. 🎉',
      card: { title: 'wenn on one page', titleFr: 'wenn en une page', sections: [
        { heading: 'wenn', headingFr: 'wenn', rows: [g('…, wenn es warm ist.', 'verb at the end', 'verbe à la fin'), g('Wenn es warm ist, esse ich …', 'wenn-clause first: verb next', 'wenn d’abord : verbe ensuite')] },
        { heading: 'How often', headingFr: 'Fréquence', rows: [g('immer → meistens → oft', '100 % … often', '100 % … souvent'), g('manchmal → selten → nie', 'sometimes … never', 'parfois … jamais')] },
        { heading: 'Surprise', headingFr: 'Surprise', rows: [g('Es überrascht mich, dass …', 'verb last', 'verbe à la fin'), g('Wirklich? · Das wusste ich nicht!', 'short reactions', 'réactions courtes')] },
      ] } },
  ],
};

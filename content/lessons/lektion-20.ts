import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A1 lesson: the sounds of German. A beginner needs these before reading and speaking much more.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const lektion20: Lesson = {
  id: 'l20', level: 'A1', module: 1, number: 2,
  title: { de: 'Die Laute des Deutschen', en: 'The sounds of German', fr: 'Les sons de l’allemand' },
  theme: 'Vowels, umlauts, key consonants and word stress',
  themeFr: 'Voyelles, trémas, consonnes clés et accent de mot',
  goals: ['Tell long and short vowels apart', 'Say ä, ö and ü', 'Read ch, sch, sp, st, z, w, v, ß, ei, ie and eu correctly', 'Put the stress on the right syllable'],
  goalsFr: ['Distinguer voyelles longues et brèves', 'Dire ä, ö et ü', 'Lire correctement ch, sch, sp, st, z, w, v, ß, ei, ie et eu', 'Placer l’accent sur la bonne syllabe'],
  canDo: g('Ich kann deutsche Wörter richtig lesen und aussprechen.', 'I can read and pronounce German words correctly.', 'Je sais lire et prononcer correctement des mots allemands.'),
  steps: [
    { kind: 'intro', title: 'Wie spricht man das? 🔊', titleFr: 'Comment ça se prononce ? 🔊',
      scene: 'A pronunciation class: the teacher says a word, the students repeat.', sceneFr: 'Un cours de prononciation : la professeure dit un mot, les élèves répètent.',
      goals: ['Long and short vowels, and ä, ö, ü', 'ch, sch, sp, st, z, w, v, ß and the vowel pairs ei, ie, eu', 'Word stress and the melody of a sentence'],
      goalsFr: ['Voyelles longues et brèves, et ä, ö, ü', 'ch, sch, sp, st, z, w, v, ß et les paires de voyelles ei, ie, eu', 'L’accent de mot et la mélodie de la phrase'] },

    // ───────────── 1 · Vowels and umlauts ─────────────
    { kind: 'chapter', title: 'Vokale und Umlaute', titleFr: 'Voyelles et trémas', blurb: 'Long, short, and the three umlauts.', blurbFr: 'Longues, brèves, et les trois trémas.' },

    { kind: 'situation', title: 'Im Aussprachekurs', titleFr: 'Au cours de prononciation',
      setting: 'Frau Roth says German words with umlauts and the class repeats them.', settingFr: 'Mme Roth dit des mots allemands avec des trémas et la classe les répète.',
      lines: [
        line('Frau Roth', 'Heute üben wir die Aussprache. Sprecht nach: Tür, Käse, schön.', 'Today we practise pronunciation. Repeat: door, cheese, beautiful.', 'Aujourd’hui nous travaillons la prononciation. Répétez : porte, fromage, beau.'),
        line('Ben', 'Tür, Käse, schön.', 'Door, cheese, beautiful.', 'Porte, fromage, beau.'),
        line('Frau Roth', 'Sehr gut! Bei ü sind die Lippen rund, wie bei u, aber sagt i.', 'Very good! For ü the lips are round, like for u, but say i.', 'Très bien ! Pour ü, les lèvres sont arrondies, comme pour u, mais dites i.'),
        line('Nicole', 'Ü, ü, Tür. Das ist schwer!', 'Ü, ü, door. That is hard!', 'Ü, ü, porte. C’est difficile !'),
        line('Frau Roth', 'Nicht schwer, nur neu. Noch einmal, bitte!', 'Not hard, just new. Once more, please!', 'Pas difficile, juste nouveau. Encore une fois, s’il vous plaît !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l20-e1', prompt: 'How do you make the sound ü?', promptFr: 'Comment fait-on le son ü ?', options: ['Round your lips and say i', 'Open your mouth wide and say a', 'Say u with spread lips'], optionsFr: ['Arrondir les lèvres et dire i', 'Ouvrir grand la bouche et dire a', 'Dire u avec les lèvres étirées'], answer: 0, explain: 'ü = the sound i, but with rounded lips.', explainFr: 'ü = le son i, mais avec les lèvres arrondies.', hint: 'Frau Roth explains it in the dialogue.', hintFr: 'Mme Roth l’explique dans le dialogue.' } },

    { kind: 'wordgroup', title: 'Wörter mit Umlaut', titleFr: 'Mots avec tréma',
      note: 'Say each word aloud after the audio. Umlaut words are the best practice.', noteFr: 'Dis chaque mot à voix haute après l’audio. Les mots à tréma sont le meilleur entraînement.',
      items: [
        word('l20-tuer', 'die Tür', 'die', 'the door', 'la porte', ['TÜR'], 'dee TUER', g('Die Tür ist grün.', 'The door is green.', 'La porte est verte.')),
        word('l20-kaese', 'der Käse', 'der', 'the cheese', 'le fromage', ['KÄ', 'se'], 'dair KAY-zuh', g('Ich esse gern Käse.', 'I like eating cheese.', 'J’aime manger du fromage.')),
        word('l20-schoen', 'schön', null, 'beautiful, nice', 'beau, joli', ['SCHÖN'], 'shern', g('Das Wetter ist schön.', 'The weather is nice.', 'Il fait beau.')),
        word('l20-oel', 'das Öl', 'das', 'the oil', 'l’huile', ['ÖL'], 'dahs url', g('Das Öl ist teuer.', 'The oil is expensive.', 'L’huile est chère.')),
        word('l20-brueder', 'die Brüder', 'die', 'the brothers', 'les frères', ['BRÜ', 'der'], 'dee BRUE-der', g('Die Brüder kommen aus Köln.', 'The brothers come from Cologne.', 'Les frères viennent de Cologne.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l20-vokale', title: 'Long and short vowels, and the umlauts', titleFr: 'Voyelles longues et brèves, et les trémas',
      lead: 'One consonant after the vowel: long (Bahn). Two consonants: short (Mann). The dots on ä, ö, ü change the sound.',
      leadFr: 'Une consonne après la voyelle : longue (Bahn). Deux consonnes : brève (Mann). Les points sur ä, ö, ü changent le son.',
      explanationMd: 'A German vowel is **long** before **one consonant** or an **h** (**Bahn, gut, Tür**) and **short** before **two consonants** (**Mann, Mutter, Bett**). The three **umlauts** are separate sounds: **ä** is like the “e” in *bed*, **ö** is **e** said with **round lips**, **ü** is **i** said with **round lips**. Never skip the dots: **schön** (beautiful) and **schon** (already) are different words.',
      explanationMdFr: 'Une voyelle allemande est **longue** devant **une consonne** ou un **h** (**Bahn, gut, Tür**) et **brève** devant **deux consonnes** (**Mann, Mutter, Bett**). Les trois **trémas** sont des sons à part : **ä** est comme le « è » de *père*, **ö** est un **e** dit avec les **lèvres arrondies**, **ü** est un **i** dit avec les **lèvres arrondies**. N’oublie jamais les points : **schön** (beau) et **schon** (déjà) sont des mots différents.',
      tables: [{ title: 'The vowels', titleFr: 'Les voyelles', headers: ['Letter', 'Sound', 'Example'], headersFr: ['Lettre', 'Son', 'Exemple'],
        rows: [['a', 'ah (long) / short a', 'Bahn – Mann'], ['ä', 'eh, like in “bed”', 'Käse, Bär'], ['e', 'ay (long) / short eh', 'Weg – Bett'], ['i', 'ee (long) / short i', 'Wiese – Tisch'], ['o', 'oh (long) / short o', 'Brot – Post'], ['ö', 'e with round lips', 'schön, Öl'], ['u', 'oo (long) / short u', 'gut – Mutter'], ['ü', 'i with round lips', 'Tür, fünf']],
        rowsFr: [['a', 'a long / a bref', 'Bahn – Mann'], ['ä', 'è, comme dans « père »', 'Käse, Bär'], ['e', 'é (long) / è bref', 'Weg – Bett'], ['i', 'i long / i bref', 'Wiese – Tisch'], ['o', 'o long / o bref', 'Brot – Post'], ['ö', 'e avec les lèvres arrondies', 'schön, Öl'], ['u', 'ou long / ou bref', 'gut – Mutter'], ['ü', 'i avec les lèvres arrondies', 'Tür, fünf']], highlightCol: 2 }],
      contrast: {
        a: { label: 'Long vowel', labelFr: 'Voyelle longue', note: 'one consonant or h after it', noteFr: 'une consonne ou h après', examples: [g('Der Zug fährt nach Bonn.', 'The train goes to Bonn.', 'Le train va à Bonn.'), g('Das ist gut.', 'That is good.', 'C’est bien.')] },
        b: { label: 'Short vowel', labelFr: 'Voyelle brève', note: 'two consonants after it', noteFr: 'deux consonnes après', examples: [g('Der Mann kommt am Mittag.', 'The man comes at noon.', 'L’homme vient à midi.'), g('Das Bett ist neu.', 'The bed is new.', 'Le lit est neuf.')] },
      },
      examples: [
        g('Die Tür ist grün.', 'The door is green.', 'La porte est verte.'),
        g('Das Wetter ist schön.', 'The weather is nice.', 'Il fait beau.'),
        g('Die Brüder kommen aus Köln.', 'The brothers come from Cologne.', 'Les frères viennent de Cologne.'),
        g('Ich möchte Käse.', 'I would like cheese.', 'Je voudrais du fromage.'),
        g('Der Mann sagt: „Das ist gut.“', 'The man says: “That is good.”', 'L’homme dit : « C’est bien. »'),
        g('Ich habe fünf Brüder.', 'I have five brothers.', 'J’ai cinq frères.'),
        g('Sie hat schon eine Tür.', 'She already has a door.', 'Elle a déjà une porte.'),
      ],
      mistakes: [
        { wrong: 'Das Wetter ist schon.', right: 'Das Wetter ist schön.', why: 'Without the dots the word means “already”.', whyFr: 'Sans les points, le mot signifie « déjà ».' },
        { wrong: 'Ich habe funf Brüder.', right: 'Ich habe fünf Brüder.', why: 'Always write and say the ü in fünf.', whyFr: 'Écris et dis toujours le ü de fünf.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l20-e2', prompt: 'Listen. Which word do you hear?', promptFr: 'Écoute. Quel mot entends-tu ?', audio: { ttsText: 'schön' }, options: ['schön', 'schon', 'Sohn'], answer: 0, hint: 'ö has round lips.', hintFr: 'ö a les lèvres arrondies.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l20-e3', prompt: 'Listen. Which word do you hear?', promptFr: 'Écoute. Quel mot entends-tu ?', audio: { ttsText: 'Tür' }, options: ['Tür', 'Tour', 'Tier'], answer: 0, hint: 'ü: round your lips and say i.', hintFr: 'ü : arrondis les lèvres et dis i.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l20-e4', pairs: [{ de: 'Tür', en: 'door', fr: 'porte' }, { de: 'Käse', en: 'cheese', fr: 'fromage' }, { de: 'Öl', en: 'oil', fr: 'huile' }, { de: 'Brüder', en: 'brothers', fr: 'frères' }], hint: 'Say each word aloud before you match.', hintFr: 'Dis chaque mot à voix haute avant d’associer.' } },

    // ───────────── 2 · Consonants and vowel pairs ─────────────
    { kind: 'chapter', title: 'Konsonanten und Vokalpaare', titleFr: 'Consonnes et paires de voyelles', blurb: 'ch, sch, sp, st, z, w, v, ß, ei, ie, eu.', blurbFr: 'ch, sch, sp, st, z, w, v, ß, ei, ie, eu.' },

    { kind: 'situation', title: 'Sprecht nach!', titleFr: 'Répétez !',
      setting: 'Frau Roth practises the trickiest spellings.', settingFr: 'Mme Roth travaille les graphies les plus difficiles.',
      lines: [
        line('Frau Roth', 'Sprecht nach: Schule, Sport, Zeit, Wasser.', 'Repeat: school, sport, time, water.', 'Répétez : école, sport, temps, eau.'),
        line('Ben', 'Schule, Sport, Zeit, Wasser.', 'School, sport, time, water.', 'École, sport, temps, eau.'),
        line('Frau Roth', 'Perfekt! Und jetzt: ich, Buch, Vater.', 'Perfect! And now: I, book, father.', 'Parfait ! Et maintenant : je, livre, père.'),
        line('Nicole', 'Ich, Buch, Vater. Das „ch“ ist zweimal anders!', 'I, book, father. The “ch” is different both times!', 'Ich, Buch, Vater. Le « ch » est différent les deux fois !'),
        line('Frau Roth', 'Genau! Nach i klingt es weich, nach u hart.', 'Exactly! After i it sounds soft, after u hard.', 'Exactement ! Après i, il sonne doux, après u dur.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Wörter zum Üben', titleFr: 'Mots pour s’entraîner',
      items: [
        word('l20-schule', 'die Schule', 'die', 'the school', 'l’école', ['SCHU', 'le'], 'dee SHOO-luh', g('Die Schule beginnt um acht.', 'School starts at eight.', 'L’école commence à huit heures.')),
        word('l20-sport', 'der Sport', 'der', 'the sport', 'le sport', ['SPORT'], 'dair SHPORT', g('Ich mache gern Sport.', 'I like doing sport.', 'J’aime faire du sport.')),
        word('l20-zeit', 'die Zeit', 'die', 'the time', 'le temps', ['ZEIT'], 'dee TSITE', g('Ich habe keine Zeit.', 'I have no time.', 'Je n’ai pas le temps.')),
        word('l20-wasser', 'das Wasser', 'das', 'the water', 'l’eau', ['WAS', 'ser'], 'dahs VAH-ser', g('Das Wasser ist kalt.', 'The water is cold.', 'L’eau est froide.')),
        word('l20-ich', 'ich', null, 'I', 'je', ['ICH'], 'ikh', g('Ich komme aus Kamerun.', 'I come from Cameroon.', 'Je viens du Cameroun.')),
        word('l20-buch', 'das Buch', 'das', 'the book', 'le livre', ['BUCH'], 'dahs BOOKH', g('Das Buch ist neu.', 'The book is new.', 'Le livre est neuf.')),
        word('l20-vater', 'der Vater', 'der', 'the father', 'le père', ['VA', 'ter'], 'dair FAH-ter', g('Mein Vater ist Lehrer.', 'My father is a teacher.', 'Mon père est enseignant.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l20-konsonanten', title: 'Spelling and sound: ch, sch, sp, st, z, w, v, ß, ei, ie, eu', titleFr: 'Graphie et son : ch, sch, sp, st, z, w, v, ß, ei, ie, eu',
      lead: 'German spelling is regular: learn these twelve patterns and you can read almost any word.',
      leadFr: 'L’orthographe allemande est régulière : apprends ces douze modèles et tu pourras lire presque tous les mots.',
      explanationMd: 'German spelling follows rules. The **ch** sound has **two** versions: **soft** after **i, e, ä, ö, ü, ei, eu** (**ich, Milch**) and **hard** after **a, o, u, au** (**Buch, Nacht**). **sch** = “sh”, **sp/st** at the start = “shp / sht” (**Sport, Stadt**), **z** = “ts”, **w** = “v”, **v** = “f” in German words, **ß** = “ss”, **ei** = “eye”, **ie** = “ee”, **eu** = “oy”.',
      explanationMdFr: 'L’orthographe allemande suit des règles. Le son **ch** a **deux** versions : **doux** après **i, e, ä, ö, ü, ei, eu** (**ich, Milch**) et **dur** après **a, o, u, au** (**Buch, Nacht**). **sch** = « ch » français, **sp/st** au début = « chp / cht » (**Sport, Stadt**), **z** = « ts », **w** = « v », **v** = « f » dans les mots allemands, **ß** = « ss », **ei** = « aïe », **ie** = « i long », **eu** = « oï ».',
      tables: [
        { title: 'Consonants', titleFr: 'Consonnes', headers: ['Spelling', 'Sound', 'Example'], headersFr: ['Graphie', 'Son', 'Exemple'],
          rows: [['ch after i, e, ä, ö, ü', 'soft, like a hiss', 'ich, Milch, Küche'], ['ch after a, o, u, au', 'hard, from the throat', 'Buch, Nacht, doch'], ['sch', 'sh', 'Schule, Fisch'], ['sp- / st- at the start', 'shp / sht', 'Sport, Stadt'], ['z', 'ts', 'Zeit, zwei'], ['w', 'v', 'Wasser, Woche'], ['v', 'f (in German words)', 'Vater, vier'], ['s before a vowel', 'z', 'Sonne, sieben'], ['ß', 'ss', 'Straße, heißen']],
          rowsFr: [['ch après i, e, ä, ö, ü', 'doux, comme un sifflement', 'ich, Milch, Küche'], ['ch après a, o, u, au', 'dur, venant de la gorge', 'Buch, Nacht, doch'], ['sch', 'ch français', 'Schule, Fisch'], ['sp- / st- au début', 'chp / cht', 'Sport, Stadt'], ['z', 'ts', 'Zeit, zwei'], ['w', 'v', 'Wasser, Woche'], ['v', 'f (dans les mots allemands)', 'Vater, vier'], ['s devant une voyelle', 'z', 'Sonne, sieben'], ['ß', 'ss', 'Straße, heißen']], highlightCol: 1 },
        { title: 'Vowel pairs', titleFr: 'Paires de voyelles', headers: ['Spelling', 'Sound', 'Example'], headersFr: ['Graphie', 'Son', 'Exemple'],
          rows: [['ei', 'eye', 'Zeit, nein, drei'], ['ie', 'long ee', 'Liebe, Bier, vier'], ['eu / äu', 'oy', 'Euro, neu, Häuser'], ['au', 'ow', 'Auto, Haus']],
          rowsFr: [['ei', 'aïe', 'Zeit, nein, drei'], ['ie', 'i long', 'Liebe, Bier, vier'], ['eu / äu', 'oï', 'Euro, neu, Häuser'], ['au', 'aou', 'Auto, Haus']], highlightCol: 1 },
      ],
      contrast: {
        a: { label: 'ei ≠ ie', labelFr: 'ei ≠ ie', note: 'the second letter gives the sound', noteFr: 'la deuxième lettre donne le son', examples: [g('Ich trinke ein Bier.', 'I drink a beer.', 'Je bois une bière.'), g('Nein, ich habe drei Zeit.', 'No, I have three time.', 'Non, j’ai trois temps.')] },
        b: { label: 'w ≠ v', labelFr: 'w ≠ v', note: 'w sounds like English v, v sounds like f', noteFr: 'w se prononce comme v, v comme f', examples: [g('Der Vater trinkt Wasser.', 'The father drinks water.', 'Le père boit de l’eau.'), g('Wir haben vier Wochen Ferien.', 'We have four weeks of holiday.', 'Nous avons quatre semaines de vacances.')] },
      },
      examples: [
        g('Ich habe keine Zeit.', 'I have no time.', 'Je n’ai pas le temps.'),
        g('Das Buch ist neu.', 'The book is new.', 'Le livre est neuf.'),
        g('Die Schule beginnt um acht Uhr.', 'School starts at eight o’clock.', 'L’école commence à huit heures.'),
        g('Mein Vater macht Sport.', 'My father does sport.', 'Mon père fait du sport.'),
        g('Das Wasser in der Straße ist kalt.', 'The water in the street is cold.', 'L’eau dans la rue est froide.'),
        g('Wir haben vier Wochen Ferien.', 'We have four weeks of holiday.', 'Nous avons quatre semaines de vacances.'),
        g('Der Euro ist neu.', 'The euro is new.', 'L’euro est nouveau.'),
      ],
      mistakes: [
        { wrong: 'Ich spreche „Vater“ mit w: Water.', right: 'Ich spreche „Vater“ mit f: Fater.', why: 'v is read f in German words; w is read v.', whyFr: 'v se lit f dans les mots allemands ; w se lit v.' },
        { wrong: 'Ich trinke ein Bier. (read “Beer-eye”)', right: 'Ich trinke ein Bier. (read “Beer”)', why: 'ie is a long “ee”; ei is “eye”. Do not swap them.', whyFr: 'ie est un « i » long ; ei est « aïe ». Ne les inverse pas.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l20-e5', prompt: 'Listen. Which word do you hear?', promptFr: 'Écoute. Quel mot entends-tu ?', audio: { ttsText: 'Zeit' }, options: ['Zeit', 'Zeug', 'Seit'], answer: 0, hint: 'z = ts, ei = eye.', hintFr: 'z = ts, ei = aïe.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l20-e6', prompt: 'How do you say “Vater”?', promptFr: 'Comment dit-on « Vater » ?', options: ['FAH-ter', 'VAH-ter', 'WAH-ter'], answer: 0, explain: 'v is read like f in German words: Vater = “Fater”.', explainFr: 'v se lit comme f dans les mots allemands : Vater = « Fater ».', hint: 'v = f.', hintFr: 'v = f.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l20-e7', prompt: 'Which “ch” is soft?', promptFr: 'Quel « ch » est doux ?', options: ['ich', 'Buch', 'Nacht'], answer: 0, explain: 'After i the ch is soft; after u and a it is hard.', explainFr: 'Après i, le ch est doux ; après u et a, il est dur.', hint: 'Look at the vowel before ch.', hintFr: 'Regarde la voyelle avant ch.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l20-e8', prompt: 'The sound “sh” is written ___. (3 letters)', promptFr: 'Le son « ch » (français) s’écrit ___. (3 lettres)', answer: 'sch', hint: 'Schule, Fisch', hintFr: 'Schule, Fisch' } },

    // ───────────── 3 · Word stress and melody ─────────────
    { kind: 'chapter', title: 'Betonung und Satzmelodie', titleFr: 'Accent et mélodie de la phrase', blurb: 'Where to put the stress, and how a sentence goes up and down.', blurbFr: 'Où placer l’accent, et comment la phrase monte et descend.' },

    { kind: 'situation', title: 'Betonung', titleFr: 'L’accent',
      setting: 'The class practises stressing the right syllable.', settingFr: 'La classe s’exerce à accentuer la bonne syllabe.',
      lines: [
        line('Frau Roth', 'Welches Wort ist richtig: AUFstehen oder aufSTEhen?', 'Which word is right: AUFstehen or aufSTEhen?', 'Quel mot est correct : AUFstehen ou aufSTEhen ?'),
        line('Ben', 'AUFstehen. Die Vorsilbe „auf“ ist betont.', 'AUFstehen. The prefix “auf” is stressed.', 'AUFstehen. Le préfixe « auf » est accentué.'),
        line('Frau Roth', 'Richtig! Und bei „verstehen“?', 'Right! And with “verstehen”?', 'Exact ! Et avec « verstehen » ?'),
        line('Nicole', 'verSTEhen. Die Vorsilbe „ver“ ist nicht betont.', 'verSTEhen. The prefix “ver” is not stressed.', 'verSTEhen. Le préfixe « ver » n’est pas accentué.'),
        line('Frau Roth', 'Sehr gut! Und der Kaffee?', 'Very good! And the coffee?', 'Très bien ! Et le café ?'),
        line('Ben', 'Kafe — FEE. Fremdwörter sind oft hinten betont.', 'Kaf — FEE. Foreign words are often stressed at the back.', 'Kaf — FÉ. Les mots étrangers sont souvent accentués à la fin.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Wörter und ihre Betonung', titleFr: 'Mots et leur accent',
      note: 'The stressed syllable is written in capitals.', noteFr: 'La syllabe accentuée est écrite en majuscules.',
      items: [
        word('l20-aufstehen', 'aufstehen', null, 'to get up', 'se lever', ['AUF', 'ste', 'hen'], 'OWF-shtay-en', g('Ich stehe um sechs Uhr auf.', 'I get up at six.', 'Je me lève à six heures.')),
        word('l20-verstehen', 'verstehen', null, 'to understand', 'comprendre', ['ver', 'STE', 'hen'], 'fair-SHTAY-en', g('Ich verstehe dich nicht.', 'I don’t understand you.', 'Je ne te comprends pas.')),
        word('l20-bezahlen', 'bezahlen', null, 'to pay', 'payer', ['be', 'ZAH', 'len'], 'buh-TSAH-len', g('Ich bezahle mit Karte.', 'I pay by card.', 'Je paie par carte.')),
        word('l20-kaffee', 'der Kaffee', 'der', 'the coffee', 'le café', ['kaf', 'FEE'], 'dair kah-FAY', g('Ein Kaffee, bitte.', 'A coffee, please.', 'Un café, s’il vous plaît.')),
        word('l20-telefon', 'das Telefon', 'das', 'the telephone', 'le téléphone', ['te', 'le', 'FON'], 'dahs tay-lay-FOHN', g('Das Telefon klingelt.', 'The telephone is ringing.', 'Le téléphone sonne.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l20-betonung', title: 'Word stress and sentence melody', titleFr: 'Accent de mot et mélodie de la phrase',
      lead: 'Most German words are stressed on the first syllable. Separable prefixes are stressed, inseparable ones are not.',
      leadFr: 'La plupart des mots allemands sont accentués sur la première syllabe. Les préfixes séparables sont accentués, les inséparables non.',
      explanationMd: 'In most German words the **first syllable** is stressed: **AR-beit, FA-mi-lie**. **Separable prefixes** (auf-, an-, mit-, ein-) are stressed: **AUF-stehen**. **Inseparable prefixes** (be-, ge-, ver-, er-) are **not**: **ver-STE-hen**. **Foreign words** are often stressed on the **last** syllable: **Kaf-FEE, Te-le-FON**.\n\nThe **melody** also matters: **statements** and **W-questions** fall at the end, **yes/no questions** rise.',
      explanationMdFr: 'Dans la plupart des mots allemands, la **première syllabe** est accentuée : **AR-beit, FA-mi-lie**. Les **préfixes séparables** (auf-, an-, mit-, ein-) sont accentués : **AUF-stehen**. Les **préfixes inséparables** (be-, ge-, ver-, er-) **ne le sont pas** : **ver-STE-hen**. Les **mots étrangers** sont souvent accentués sur la **dernière** syllabe : **Kaf-FEE, Te-le-FON**.\n\nLa **mélodie** compte aussi : les **affirmations** et les **questions en W** descendent à la fin, les **questions fermées** montent.',
      tables: [{ title: 'Where is the stress?', titleFr: 'Où est l’accent ?', headers: ['Type', 'Stress', 'Example'], headersFr: ['Type', 'Accent', 'Exemple'],
        rows: [['most words', 'first syllable', 'ARbeit, FAmilie'], ['separable prefix', 'on the prefix', 'AUFstehen, MITkommen'], ['inseparable prefix', 'after the prefix', 'verSTEhen, beZAHlen'], ['foreign words', 'often the last syllable', 'KafFEE, TeleFON']],
        rowsFr: [['la plupart des mots', 'première syllabe', 'ARbeit, FAmilie'], ['préfixe séparable', 'sur le préfixe', 'AUFstehen, MITkommen'], ['préfixe inséparable', 'après le préfixe', 'verSTEhen, beZAHlen'], ['mots étrangers', 'souvent la dernière syllabe', 'KafFEE, TeleFON']], highlightCol: 1 },
        { title: 'Sentence melody', titleFr: 'Mélodie de la phrase', headers: ['Sentence type', 'Melody', 'Example'], headersFr: ['Type de phrase', 'Mélodie', 'Exemple'],
          rows: [['statement', 'falls ↘', 'Ich komme aus Kamerun.'], ['W-question', 'falls ↘', 'Woher kommst du?'], ['yes/no question', 'rises ↗', 'Kommst du aus Kamerun?']],
          rowsFr: [['affirmation', 'descend ↘', 'Ich komme aus Kamerun.'], ['question en W', 'descend ↘', 'Woher kommst du?'], ['question fermée', 'monte ↗', 'Kommst du aus Kamerun?']], highlightCol: 1 },
      ],
      contrast: {
        a: { label: 'separable: stressed prefix', labelFr: 'séparable : préfixe accentué', note: 'AUF-stehen, AN-fangen', noteFr: 'AUF-stehen, AN-fangen', examples: [g('Ich stehe um sieben Uhr auf.', 'I get up at seven.', 'Je me lève à sept heures.'), g('Der Kurs fängt um neun an.', 'The course starts at nine.', 'Le cours commence à neuf heures.')] },
        b: { label: 'inseparable: unstressed prefix', labelFr: 'inséparable : préfixe non accentué', note: 'ver-STE-hen, be-ZAH-len', noteFr: 'ver-STE-hen, be-ZAH-len', examples: [g('Ich verstehe dich nicht.', 'I don’t understand you.', 'Je ne te comprends pas.'), g('Ich bezahle mit Karte.', 'I pay by card.', 'Je paie par carte.')] },
      },
      examples: [
        g('Ich stehe um sieben Uhr auf.', 'I get up at seven.', 'Je me lève à sept heures.'),
        g('Ich verstehe dich nicht.', 'I don’t understand you.', 'Je ne te comprends pas.'),
        g('Ich bezahle mit Karte.', 'I pay by card.', 'Je paie par carte.'),
        g('Ein Kaffee, bitte.', 'A coffee, please.', 'Un café, s’il vous plaît.'),
        g('Das Telefon klingelt.', 'The telephone is ringing.', 'Le téléphone sonne.'),
        g('Woher kommst du?', 'Where are you from?', 'D’où viens-tu ?'),
        g('Kommst du aus Kamerun?', 'Are you from Cameroon?', 'Viens-tu du Cameroun ?'),
      ],
      mistakes: [
        { wrong: 'Ich aufSTEhe um sieben Uhr.', right: 'Ich AUFstehe um sieben Uhr.', why: 'Separable prefixes carry the stress.', whyFr: 'Les préfixes séparables portent l’accent.' },
        { wrong: 'Ich VERstehe dich nicht.', right: 'Ich verSTEhe dich nicht.', why: 'Inseparable prefixes are never stressed.', whyFr: 'Les préfixes inséparables ne sont jamais accentués.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l20-e9', prompt: 'Which syllable is stressed in “verstehen”?', promptFr: 'Quelle syllabe est accentuée dans « verstehen » ?', options: ['STE (the second)', 'ver (the first)', 'hen (the last)'], optionsFr: ['STE (la deuxième)', 'ver (la première)', 'hen (la dernière)'], answer: 0, explain: 'ver- is an inseparable prefix, so the stress comes after it: ver-STE-hen.', explainFr: 'ver- est un préfixe inséparable, l’accent vient donc après : ver-STE-hen.', hint: 'Inseparable prefixes are not stressed.', hintFr: 'Les préfixes inséparables ne sont pas accentués.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l20-e10', prompt: 'Which melody goes with “Kommst du aus Kamerun?”', promptFr: 'Quelle mélodie va avec « Kommst du aus Kamerun ? »', options: ['It rises at the end', 'It falls at the end', 'It stays flat'], optionsFr: ['Elle monte à la fin', 'Elle descend à la fin', 'Elle reste plate'], answer: 0, explain: 'Yes/no questions rise.', explainFr: 'Les questions fermées montent.', hint: 'There is no question word.', hintFr: 'Il n’y a pas de mot interrogatif.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l20-e11', prompt: 'Listen. Is it a statement or a question?', promptFr: 'Écoute. Est-ce une affirmation ou une question ?', audio: { ttsText: 'Kommst du aus Kamerun?' }, options: ['A yes/no question', 'A statement', 'A W-question'], optionsFr: ['Une question fermée', 'Une affirmation', 'Une question en W'], answer: 0, hint: 'The verb comes first.', hintFr: 'Le verbe vient en premier.' } },

    { kind: 'wrapup',
      summary: 'You can now tell **long and short vowels** apart, say **ä, ö, ü**, read **ch, sch, sp, st, z, w, v, ß, ei, ie, eu**, and put the **stress** on the right syllable. 🎉',
      summaryFr: 'Tu sais maintenant distinguer les **voyelles longues et brèves**, dire **ä, ö, ü**, lire **ch, sch, sp, st, z, w, v, ß, ei, ie, eu**, et placer l’**accent** sur la bonne syllabe. 🎉',
      card: { title: 'Sounds of German on one page', titleFr: 'Les sons de l’allemand en une page', sections: [
        { heading: 'Vowels', headingFr: 'Voyelles', rows: [g('one consonant after → long: Bahn, gut', 'long vowel', 'voyelle longue'), g('two consonants after → short: Mann, Bett', 'short vowel', 'voyelle brève'), g('ä è · ö e rond · ü i rond', 'umlauts', 'trémas')] },
        { heading: 'Spelling and sound', headingFr: 'Graphie et son', rows: [g('ch soft: ich · hard: Buch', 'two versions', 'deux versions'), g('sch = sh · z = ts · w = v · v = f', 'consonants', 'consonnes'), g('ei = eye · ie = ee · eu = oy', 'vowel pairs', 'paires de voyelles')] },
        { heading: 'Stress and melody', headingFr: 'Accent et mélodie', rows: [g('AUFstehen · verSTEhen · KafFEE', 'where the stress goes', 'où va l’accent'), g('Woher kommst du? ↘ · Kommst du? ↗', 'falls / rises', 'descend / monte')] },
      ] } },
  ],
};

import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion4: Lesson = {
  id: 'b1-l4', level: 'B1', module: 4, number: 15,
  title: { de: 'Der Genitiv', en: 'The genitive case', fr: 'Le génitif' },
  theme: 'Possession and genitive prepositions (wegen, während, trotz)', themeFr: 'La possession et les prépositions au génitif (wegen, während, trotz)',
  goals: ['Show possession with the genitive (des/der)', 'Add -(e)s to masculine/neuter nouns', 'Use names in the genitive (Annas Buch)', 'Use wegen, während and trotz'], goalsFr: ['Exprimer la possession avec le génitif (des/der)', 'Ajouter -(e)s aux noms masculins/neutres', 'Utiliser les noms propres au génitif (Annas Buch)', 'Utiliser wegen, während et trotz'],
  canDo: g('Ich kann Besitz und Zugehörigkeit mit dem Genitiv ausdrücken und „wegen“, „während“, „trotz“ richtig benutzen.', 'I can express possession and belonging with the genitive and use “wegen”, “während”, “trotz” correctly.', 'Je sais exprimer la possession et l’appartenance avec le génitif et utiliser correctement « wegen », « während », « trotz ».'),
  steps: [
    { kind: 'intro', title: 'Der Genitiv 📚', titleFr: 'Le génitif 📚',
      scene: 'Anna and Peter describe a film, a flat and a boss — everything belongs to someone or something.', sceneFr: 'Anna et Peter décrivent un film, un appartement et un chef — tout appartient à quelqu’un ou à quelque chose.',
      goals: ['Show possession with the genitive (des / der)', 'Add -(e)s to masculine and neuter nouns; use names with -s', 'Use wegen, während, trotz'],
      goalsFr: ['Montrer la possession avec le génitif (des / der)', 'Ajouter -(e)s aux noms masculins et neutres ; utiliser les prénoms avec -s', 'Utiliser wegen, während, trotz'] },

    // ───────────── 1 · Genitive articles ─────────────
    { kind: 'chapter', title: 'Genitiv: des und der', titleFr: 'Génitif : des et der', blurb: 'the title of the book.', blurbFr: 'le titre du livre.' },

    { kind: 'situation', title: 'Das Ende des Films', titleFr: 'La fin du film',
      setting: 'Anna and Peter discuss a film and a book.', settingFr: 'Anna et Peter discutent d’un film et d’un livre.',
      lines: [
        line('Anna', 'Der Titel des Buches ist interessant. Das Ende des Films ist traurig. Am Anfang des Jahres habe ich es gelesen.', 'The title of the book is interesting. The end of the film is sad. I read it at the beginning of the year.', 'Le titre du livre est intéressant. La fin du film est triste. Je l’ai lu au début de l’année.'),
        line('Peter', 'Die Farbe des Autos ist rot. Das Haus meiner Eltern ist groß. Die Meinung der Leute ist wichtig.', 'The colour of the car is red. My parents’ house is big. The opinion of the people matters.', 'La couleur de la voiture est rouge. La maison de mes parents est grande. L’avis des gens est important.'),
        line('Anna', 'Das Datum der Prüfung steht fest. Das Büro des Chefs liegt im ersten Stock. Das Auto des Mannes ist neu.', 'The date of the exam is fixed. The boss’s office is on the first floor. The man’s car is new.', 'La date de l’examen est fixée. Le bureau du chef est au premier étage. La voiture de l’homme est neuve.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l4-e11', prompt: 'What colour is the car?', promptFr: 'De quelle couleur est la voiture ?', options: ['Red', 'Blue', 'Black'], optionsFr: ['Rouge', 'Bleue', 'Noire'], answer: 0, explain: 'Peter says: “Die Farbe des Autos ist rot.”', explainFr: 'Peter dit : « Die Farbe des Autos ist rot. »', hint: 'Look for “Farbe des Autos”.', hintFr: 'Cherche « Farbe des Autos ».' } },

    { kind: 'wordgroup', title: 'Dinge und ihre Teile', titleFr: 'Choses et leurs parties',
      items: [{ id: 'b1l4-titel', german: 'der Titel', english: 'the title', french: 'le titre', gender: 'der', syllables: ['TI', 'tel'], pronunciation: 'dair TEE-tel', example: { de: 'der Titel des Buches', en: 'the title of the book', fr: 'le titre du livre' } }, { id: 'b1l4-ende', german: 'das Ende', english: 'the end', french: 'la fin', gender: 'das', syllables: ['EN', 'de'], pronunciation: 'dahs EN-de', example: { de: 'das Ende des Films', en: 'the end of the film', fr: 'la fin du film' } }, { id: 'b1l4-anfang', german: 'der Anfang', english: 'the beginning', french: 'le début', gender: 'der', syllables: ['AN', 'fang'], pronunciation: 'dair AHN-fahng', example: { de: 'am Anfang des Jahres', en: 'at the beginning of the year', fr: 'au début de l’année' } }, { id: 'b1l4-chef', german: 'der Chef', english: 'the boss', french: 'le chef / patron', gender: 'der', syllables: ['CHEF'], pronunciation: 'dair SHEF', example: { de: 'das Büro des Chefs', en: 'the boss’s office', fr: 'le bureau du chef' } }, { id: 'b1l4-meinung', german: 'die Meinung', english: 'the opinion', french: 'l’avis / opinion', gender: 'die', syllables: ['MEI', 'nung'], pronunciation: 'dee MY-noong', example: { de: 'die Meinung der Leute', en: 'the opinion of the people', fr: 'l’avis des gens' } }, { id: 'b1l4-datum', german: 'das Datum', english: 'the date', french: 'la date', gender: 'das', syllables: ['DA', 'tum'], pronunciation: 'dahs DAH-toom', example: { de: 'das Datum der Prüfung', en: 'the date of the exam', fr: 'la date de l’examen' } }, { id: 'b1l4-farbe2', german: 'die Farbe', english: 'the colour', french: 'la couleur', gender: 'die', syllables: ['FAR', 'be'], pronunciation: 'dee FAR-be', example: { de: 'die Farbe des Autos', en: 'the colour of the car', fr: 'la couleur de la voiture' } }] },

    { kind: 'grammar', note: {
      id: 'b1l4-genitiv', title: 'The genitive articles', titleFr: 'Les articles au génitif',
      lead: 'masculine and neuter: des + noun -(e)s. feminine and plural: der, noun unchanged.',
      leadFr: 'masculin et neutre : des + nom -(e)s. féminin et pluriel : der, nom inchangé.',
      explanationMd: 'The **genitive** shows **possession** (“of the …”): **masculine / neuter → des + noun -(e)s**: **das Auto des Mannes, der Titel des Buches**; **feminine / plural → der** (noun unchanged): **die Farbe der Blume, die Meinung der Leute**. **Short** masculine / neuter nouns often take **-es** (**des Mannes, des Buches**), **longer** ones just **-s** (**des Chefs, des Autos**). The genitive noun **follows** the noun it belongs to: **das Büro des Chefs**. In **everyday speech** many people say **von + dative** (**das Büro von dem Chef**), but in **writing and exams** the genitive is expected.',
      explanationMdFr: 'Le **génitif** exprime la **possession** (« de … ») : **masculin / neutre → des + nom -(e)s** : **das Auto des Mannes, der Titel des Buches** ; **féminin / pluriel → der** (nom inchangé) : **die Farbe der Blume, die Meinung der Leute**. Les noms masculins / neutres **courts** prennent souvent **-es** (**des Mannes, des Buches**), les **plus longs** simplement **-s** (**des Chefs, des Autos**). Le nom au génitif **suit** le nom auquel il appartient : **das Büro des Chefs**. Dans la **langue courante**, beaucoup disent **von + datif** (**das Büro von dem Chef**), mais à l’**écrit et aux examens**, le génitif est attendu.',
      tables: [{ title: 'Genitive', titleFr: 'Génitif', headers: ['Gender', 'Article', 'Example'], headersFr: ['Genre', 'Article', 'Exemple'],
        rows: [['m', 'des + -(e)s', 'das Auto des Mannes'], ['n', 'des + -(e)s', 'der Titel des Buches'], ['f', 'der', 'die Farbe der Blume'], ['plural', 'der', 'die Meinung der Leute']],
        rowsFr: [['m', 'des + -(e)s', 'das Auto des Mannes'], ['n', 'des + -(e)s', 'der Titel des Buches'], ['f', 'der', 'die Farbe der Blume'], ['pluriel', 'der', 'die Meinung der Leute']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Titel', role: 'subject' }, { text: 'des Buches', role: 'other' }, { text: 'ist', role: 'verb' }, { text: 'interessant.', role: 'other' }], en: 'The title of the book is interesting.', fr: 'Le titre du livre est intéressant.' },
        { parts: [{ text: 'Das Haus', role: 'subject' }, { text: 'meiner Eltern', role: 'other' }, { text: 'ist', role: 'verb' }, { text: 'groß.', role: 'other' }], en: 'My parents’ house is big.', fr: 'La maison de mes parents est grande.' },
      ],
      contrast: {
        a: { label: 'Genitive (written)', labelFr: 'Génitif (écrit)', note: 'des Chefs', noteFr: 'des Chefs', examples: [g('Das Büro des Chefs liegt im ersten Stock.', 'The boss’s office is on the first floor.', 'Le bureau du chef est au premier étage.'), g('Die Farbe des Autos ist rot.', 'The colour of the car is red.', 'La couleur de la voiture est rouge.')] },
        b: { label: 'von + dative (spoken)', labelFr: 'von + datif (oral)', note: 'von dem Chef', noteFr: 'von dem Chef', examples: [g('Das Büro von dem Chef liegt im ersten Stock.', 'The boss’s office is on the first floor.', 'Le bureau du chef est au premier étage.'), g('Die Farbe von dem Auto ist rot.', 'The colour of the car is red.', 'La couleur de la voiture est rouge.')] },
      },
      examples: [
        g('Das Auto des Mannes ist neu.', 'The man’s car is new.', 'La voiture de l’homme est neuve.'),
        g('Der Titel des Buches ist interessant.', 'The title of the book is interesting.', 'Le titre du livre est intéressant.'),
        g('Die Farbe der Blume ist gelb.', 'The colour of the flower is yellow.', 'La couleur de la fleur est jaune.'),
        g('Das ist das Haus meiner Eltern.', 'That is my parents’ house.', 'C’est la maison de mes parents.'),
        g('Die Meinung der Leute ist wichtig.', 'The opinion of the people is important.', 'L’avis des gens est important.'),
        g('Das Büro des Chefs liegt im ersten Stock.', 'The boss’s office is on the first floor.', 'Le bureau du chef est au premier étage.'),
      ],
      mistakes: [
        { wrong: 'Das Auto der Mann ist neu.', right: 'Das Auto des Mannes ist neu.', why: 'Masculine genitive: des + -(e)s.', whyFr: 'Génitif masculin : des + -(e)s.' },
        { wrong: 'Die Farbe des Blume ist gelb.', right: 'Die Farbe der Blume ist gelb.', why: 'Feminine genitive: der, no ending on the noun.', whyFr: 'Génitif féminin : der, pas de terminaison sur le nom.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l4-e1', prompt: 'das Auto ___ Mannes (genitive: der → ?)', answer: 'des', hint: 'masculine genitive article → des', hintFr: 'article génitif masculin → des' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l4-e2', prompt: 'die Farbe ___ Blume (genitive: die → ?)', answer: 'der', hint: 'feminine genitive article → der', hintFr: 'article génitif féminin → der' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l4-e3', prompt: 'Which is correct?', promptFr: 'Quelle forme est correcte ?', options: ['der Titel des Buch', 'der Titel des Buches', 'der Titel der Buch'], answer: 1, explain: 'Neuter genitive: des + Buch + es → des Buches.', explainFr: 'Génitif neutre : des + Buch + es → des Buches.', hint: 'Add -es to the noun.', hintFr: 'Ajoute -es au nom.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l4-e9', tokens: ['des', 'ist', 'Das Ende', 'traurig', 'Films'], answer: ['Das Ende', 'des', 'Films', 'ist', 'traurig'], hint: 'Genitive phrase "des Films", then verb + adjective.', hintFr: 'Groupe au génitif « des Films », puis verbe + adjectif.' } },

    // ───────────── 2 · Names ─────────────
    { kind: 'chapter', title: 'Namen im Genitiv: Annas Auto', titleFr: 'Les prénoms au génitif : Annas Auto', blurb: 'The most common genitive.', blurbFr: 'Le génitif le plus fréquent.' },

    { kind: 'situation', title: 'Wessen Auto ist das?', titleFr: 'À qui est cette voiture ?',
      setting: 'Peter asks whose things are whose.', settingFr: 'Peter demande à qui sont les choses.',
      lines: [
        line('Peter', 'Wessen Auto ist das? — Das ist Annas Auto. Das ist Peters Fahrrad.', 'Whose car is that? — That is Anna’s car. That is Peter’s bike.', 'À qui est cette voiture ? — C’est la voiture d’Anna. C’est le vélo de Peter.'),
        line('Anna', 'Marias Wohnung ist wirklich groß und hell. Toms Idee war gut. Das ist Julias Schlüssel.', 'Maria’s flat is really big and bright. Tom’s idea was good. That is Julia’s key.', 'L’appartement de Maria est vraiment grand et lumineux. L’idée de Tom était bonne. C’est la clé de Julia.'),
        line('Peter', 'Und wessen Buch ist das? Das Buch meiner Schwester.', 'And whose book is that? My sister’s book.', 'Et à qui est ce livre ? Le livre de ma sœur.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l4-namen', title: 'Names in the genitive', titleFr: 'Les prénoms au génitif',
      lead: 'Add -s (no apostrophe) and put the name before the noun: Annas Auto. After s, x, z use an apostrophe: Max’ Auto.',
      leadFr: 'Ajoute -s (sans apostrophe) et place le prénom avant le nom : Annas Auto. Après s, x, z, utilise une apostrophe : Max’ Auto.',
      explanationMd: 'With **names**, add **-s** (**no apostrophe** in standard German) and put the name **before** the noun — like English “’s”: **Annas Auto, Toms Idee, Marias Wohnung**. After a name ending in **-s, -ß, -x, -z** use an **apostrophe**: **Max’ Auto**. The question is **Wessen …?** (whose): **Wessen Auto ist das?** This is the **most common genitive in everyday speech**. For **family and common nouns**, put the **genitive after** the noun: **das Buch meiner Schwester** (not **meiner Schwester Buch**, which sounds old).',
      explanationMdFr: 'Avec les **prénoms**, ajoute **-s** (**sans apostrophe** en allemand standard) et place le prénom **avant** le nom — comme le « ’s » anglais : **Annas Auto, Toms Idee, Marias Wohnung**. Après un prénom en **-s, -ß, -x, -z**, utilise une **apostrophe** : **Max’ Auto**. La question est **Wessen …?** (à qui) : **Wessen Auto ist das ?** C’est le **génitif le plus courant dans la vie quotidienne**. Pour les **noms de famille et noms communs**, place le **génitif après** le nom : **das Buch meiner Schwester** (pas **meiner Schwester Buch**, qui sonne vieilli).',
      tables: [{ title: 'Names and nouns', titleFr: 'Prénoms et noms', headers: ['Owner', 'Pattern', 'Example'], headersFr: ['Possesseur', 'Schéma', 'Exemple'],
        rows: [['name', 'name + -s + noun', 'Annas Auto'], ['name ending in s / x / z', 'name + ’ + noun', 'Max’ Auto'], ['family / common noun', 'noun + genitive', 'das Buch meiner Schwester'], ['question', 'Wessen + noun?', 'Wessen Auto ist das?']],
        rowsFr: [['prénom', 'prénom + -s + nom', 'Annas Auto'], ['prénom en s / x / z', 'prénom + ’ + nom', 'Max’ Auto'], ['famille / nom commun', 'nom + génitif', 'das Buch meiner Schwester'], ['question', 'Wessen + nom ?', 'Wessen Auto ist das ?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'Annas Auto.', role: 'other' }], en: 'That is Anna’s car.', fr: 'C’est la voiture d’Anna.' },
        { parts: [{ text: 'Marias Wohnung', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'groß', role: 'other' }, { text: 'und hell.', role: 'other' }], en: 'Maria’s flat is big and bright.', fr: 'L’appartement de Maria est grand et lumineux.' },
      ],
      contrast: {
        a: { label: 'Name + -s', labelFr: 'Prénom + -s', note: 'before the noun', noteFr: 'avant le nom', examples: [g('Das ist Peters Fahrrad.', 'That is Peter’s bike.', 'C’est le vélo de Peter.'), g('Toms Idee war gut.', 'Tom’s idea was good.', 'L’idée de Tom était bonne.')] },
        b: { label: 'Noun + genitive', labelFr: 'Nom + génitif', note: 'after the noun', noteFr: 'après le nom', examples: [g('Das ist das Fahrrad meines Bruders.', 'That is my brother’s bike.', 'C’est le vélo de mon frère.'), g('Das Buch meiner Schwester ist neu.', 'My sister’s book is new.', 'Le livre de ma sœur est neuf.')] },
      },
      examples: [
        g('Das ist Annas Auto.', 'That is Anna’s car.', 'C’est la voiture d’Anna.'),
        g('Das ist Peters Fahrrad.', 'That is Peter’s bike.', 'C’est le vélo de Peter.'),
        g('Marias Wohnung ist groß und hell.', 'Maria’s flat is big and bright.', 'L’appartement de Maria est grand et lumineux.'),
        g('Toms Idee war gut.', 'Tom’s idea was good.', 'L’idée de Tom était bonne.'),
        g('Wessen Buch ist das? — Das Buch meiner Schwester.', 'Whose book is that? — My sister’s book.', 'À qui est ce livre ? — Le livre de ma sœur.'),
        g('Das ist Max’ Schlüssel.', 'That is Max’s key.', 'C’est la clé de Max.'),
      ],
      mistakes: [
        { wrong: 'Das ist die Auto von Anna.', right: 'Das ist Annas Auto.', why: 'With names put -s on the name, before the noun.', whyFr: 'Avec les prénoms, ajoute -s au prénom, avant le nom.' },
        { wrong: 'Das ist Anna’s Auto.', right: 'Das ist Annas Auto.', why: 'No apostrophe in standard German.', whyFr: 'Pas d’apostrophe en allemand standard.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l4-e4', prompt: '___ Auto ist neu. (Anna, genitive with a name)', answer: 'Annas', hint: 'add -s to the name', hintFr: 'ajoute -s au nom propre' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l4-e10', prompt: 'Listen. Whose flat is big?', promptFr: 'Écoute. L’appartement de qui est grand ?', audio: { ttsText: 'Marias Wohnung ist wirklich groß und hell.' }, options: ['Maria’s', 'Peter’s', 'The boss’s'], optionsFr: ['De Maria', 'De Peter', 'Du chef'], answer: 0, hint: 'Listen for the name + s.', hintFr: 'Écoute le nom propre + s.' } },

    // ───────────── 3 · Genitive prepositions ─────────────
    { kind: 'chapter', title: 'Genitiv-Präpositionen', titleFr: 'Prépositions du génitif', blurb: 'wegen, während, trotz.', blurbFr: 'wegen, während, trotz.' },

    { kind: 'situation', title: 'Wegen des Streiks', titleFr: 'À cause de la grève',
      setting: 'The news on the radio.', settingFr: 'Les nouvelles à la radio.',
      lines: [
        line('Radio', 'Wegen des Streiks fährt heute kein Bus. Wegen der Arbeit kommt er später. Während der Woche ist es ruhig.', 'Because of the strike no bus is running today. Because of work he’ll come later. During the week it is quiet.', 'À cause de la grève, aucun bus ne circule aujourd’hui. À cause du travail, il arrive plus tard. Pendant la semaine, c’est calme.'),
        line('Anna', 'Trotz des Regens gehen wir spazieren. Während des Tages arbeite ich, wegen des Wetters bleibe ich drinnen.', 'Despite the rain we are going for a walk. During the day I work, because of the weather I stay inside.', 'Malgré la pluie, nous allons nous promener. Pendant la journée, je travaille, à cause du temps je reste à l’intérieur.'),
      ],
      words: [{ id: 'b1l4-wegen', german: 'wegen', english: 'because of', french: 'à cause de', gender: null, syllables: ['WE', 'gen'], pronunciation: 'VAY-gen', example: { de: 'wegen des Wetters', en: 'because of the weather', fr: 'à cause du temps' } }, { id: 'b1l4-waehrend', german: 'während', english: 'during', french: 'pendant', gender: null, syllables: ['WÄH', 'rend'], pronunciation: 'VAY-rent', example: { de: 'während der Woche', en: 'during the week', fr: 'pendant la semaine' } }, { id: 'b1l4-trotz', german: 'trotz', english: 'despite', french: 'malgré', gender: null, syllables: ['TROTZ'], pronunciation: 'trots', example: { de: 'trotz des Regens', en: 'despite the rain', fr: 'malgré la pluie' } }] },

    { kind: 'grammar', note: {
      id: 'b1l4-genitiv-praep', title: 'Genitive prepositions: wegen, während, trotz', titleFr: 'Prépositions du génitif : wegen, während, trotz',
      lead: 'wegen = because of, während = during, trotz = despite. They take the genitive: des / der.',
      leadFr: 'wegen = à cause de, während = pendant, trotz = malgré. Elles prennent le génitif : des / der.',
      explanationMd: 'A few common prepositions take the **genitive**: **wegen** (because of) — **wegen des Wetters**; **während** (during) — **während der Woche**; **trotz** (despite) — **trotz des Regens**. The **articles** are the **genitive** ones: **des + -(e)s** for masculine / neuter, **der** for feminine and plural. In **speech** the **dative** is common (**wegen dem Wetter**), but in **writing** use the **genitive**. **Careful:** **während** is also a **conjunction** (**Während ich koche, …**) — with a **noun** it is a **preposition** with the genitive.',
      explanationMdFr: 'Quelques prépositions courantes prennent le **génitif** : **wegen** (à cause de) — **wegen des Wetters** ; **während** (pendant) — **während der Woche** ; **trotz** (malgré) — **trotz des Regens**. Les **articles** sont ceux du **génitif** : **des + -(e)s** pour le masculin / neutre, **der** pour le féminin et le pluriel. À l’**oral**, le **datif** est courant (**wegen dem Wetter**), mais à l’**écrit**, utilise le **génitif**. **Attention :** **während** est aussi une **conjonction** (**Während ich koche, …**) — avec un **nom**, c’est une **préposition** avec le génitif.',
      tables: [{ title: 'Genitive prepositions', titleFr: 'Prépositions du génitif', headers: ['Preposition', 'Meaning', 'Example'], headersFr: ['Préposition', 'Sens', 'Exemple'],
        rows: [['wegen', 'because of', 'Wegen des Streiks fährt kein Bus.'], ['während', 'during', 'Während der Woche ist es ruhig.'], ['trotz', 'despite', 'Trotz des Regens gehen wir spazieren.']],
        rowsFr: [['wegen', 'à cause de', 'Wegen des Streiks fährt kein Bus.'], ['während', 'pendant', 'Während der Woche ist es ruhig.'], ['trotz', 'malgré', 'Trotz des Regens gehen wir spazieren.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Wegen des Streiks', role: 'other' }, { text: 'fährt', role: 'verb' }, { text: 'heute', role: 'time' }, { text: 'kein Bus.', role: 'subject' }], en: 'Because of the strike no bus is running today.', fr: 'À cause de la grève, aucun bus ne circule aujourd’hui.' },
        { parts: [{ text: 'Trotz des Regens', role: 'other' }, { text: 'gehen', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'spazieren.', role: 'verb' }], en: 'Despite the rain we go for a walk.', fr: 'Malgré la pluie, nous allons nous promener.' },
      ],
      contrast: {
        a: { label: 'Preposition + noun', labelFr: 'Préposition + nom', note: 'genitive', noteFr: 'génitif', examples: [g('Wegen des Streiks fährt kein Bus.', 'Because of the strike no bus is running.', 'À cause de la grève, aucun bus ne circule.'), g('Während der Woche ist es ruhig.', 'During the week it is quiet.', 'Pendant la semaine, c’est calme.')] },
        b: { label: 'Conjunction + clause', labelFr: 'Conjonction + proposition', note: 'verb at the end', noteFr: 'verbe à la fin', examples: [g('Weil es streikt, fährt kein Bus.', 'Because there is a strike no bus is running.', 'Parce qu’il y a grève, aucun bus ne circule.'), g('Während ich arbeite, ist es ruhig.', 'While I work it is quiet.', 'Pendant que je travaille, c’est calme.')] },
      },
      examples: [
        g('Wegen des Streiks fährt heute kein Bus.', 'Because of the strike no bus is running today.', 'À cause de la grève, aucun bus ne circule aujourd’hui.'),
        g('Trotz des Regens gehen wir spazieren.', 'Despite the rain we go for a walk.', 'Malgré la pluie, nous allons nous promener.'),
        g('Während der Woche ist es ruhig.', 'During the week it is quiet.', 'Pendant la semaine, c’est calme.'),
        g('Wegen der Arbeit kommt er später.', 'Because of work he’ll come later.', 'À cause du travail, il arrive plus tard.'),
        g('Während des Tages arbeite ich.', 'During the day I work.', 'Pendant la journée, je travaille.'),
        g('Wegen des Wetters bleibe ich drinnen.', 'Because of the weather I stay inside.', 'À cause du temps, je reste à l’intérieur.'),
      ],
      mistakes: [
        { wrong: 'Wegen der Wetter bleibe ich drinnen.', right: 'Wegen des Wetters bleibe ich drinnen.', why: 'Neuter genitive: des + -s.', whyFr: 'Génitif neutre : des + -s.' },
        { wrong: 'Trotz dem Regen gehen wir spazieren. (written)', right: 'Trotz des Regens gehen wir spazieren.', why: 'In writing use the genitive.', whyFr: 'À l’écrit, utilise le génitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l4-e7', prompt: 'während ___ Woche (genitive: die → ?)', answer: 'der', hint: 'feminine genitive → der', hintFr: 'génitif féminin → der' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l4-e8', prompt: 'What does "trotz des Regens" mean?', promptFr: 'Que signifie « trotz des Regens » ?', options: ['because of the rain', 'despite the rain', 'during the rain'], optionsFr: ['à cause de la pluie', 'malgré la pluie', 'pendant la pluie'], answer: 1, explain: '"trotz" = despite.', explainFr: '« trotz » = malgré.', hint: 'Concession, not cause.', hintFr: 'Concession, pas cause.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l4-e5', pairs: [{ de: 'wegen', en: 'because of', fr: 'à cause de' }, { de: 'während', en: 'during', fr: 'pendant' }, { de: 'trotz', en: 'despite', fr: 'malgré' }], hint: 'Match each genitive preposition to its meaning.', hintFr: 'Associe chaque préposition au génitif à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l4-e6', prompt: 'Listen. Why is no bus running?', promptFr: 'Écoute. Pourquoi aucun bus ne circule ?', audio: { ttsText: 'Wegen des Streiks fährt heute kein Bus.' }, options: ['Because of a strike', 'Because of the weather', 'Because of a holiday'], optionsFr: ['À cause d’une grève', 'À cause du temps', 'À cause d’un jour férié'], answer: 0, hint: 'Listen after "wegen des".', hintFr: 'Écoute après « wegen des ».' } },

    { kind: 'pronunciation', focus: 'The genitive -s/-es is a light ending; "während" has a long ä ("VAY-rent")', focusFr: 'Le -s/-es du génitif est une terminaison légère ; « während » a un ä long (« VAY-rent »)', items: [{ id: 'b1l4-waehrend-pron', german: 'während', english: 'during', french: 'pendant', gender: null, syllables: ['WÄH', 'rend'], pronunciation: 'VAY-rent', example: { de: 'während des Tages', en: 'during the day', fr: 'pendant la journée' } }, { id: 'b1l4-wegen-pron', german: 'wegen', english: 'because of', french: 'à cause de', gender: null, syllables: ['WE', 'gen'], pronunciation: 'VAY-gen', example: { de: 'wegen der Arbeit', en: 'because of work', fr: 'à cause du travail' } }] },

    { kind: 'wrapup',
      summary: 'You can now use the **genitive**: **des / der**, names with **-s**, and the prepositions **wegen, während, trotz**. 🎉',
      summaryFr: 'Tu sais maintenant utiliser le **génitif** : **des / der**, les prénoms avec **-s**, et les prépositions **wegen, während, trotz**. 🎉',
      card: { title: 'The genitive on one page', titleFr: 'Le génitif en une page', sections: [
        { heading: 'Articles', headingFr: 'Articles', rows: [g('m / n: des + -(e)s', 'des Mannes · des Buches', 'des Mannes · des Buches'), g('f / plural: der', 'der Blume · der Leute', 'der Blume · der Leute')] },
        { heading: 'Names', headingFr: 'Prénoms', rows: [g('Annas Auto · Max’ Auto', 'name + -s before the noun', 'prénom + -s avant le nom')] },
        { heading: 'Prepositions', headingFr: 'Prépositions', rows: [g('wegen · während · trotz + genitive', 'wegen des Wetters', 'wegen des Wetters')] },
      ] } },
  ],
};

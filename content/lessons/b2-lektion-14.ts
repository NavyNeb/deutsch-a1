import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion14: Lesson = {
  id: 'b2-l14', level: 'B2', module: 5, number: 14,
  title: { de: 'Der Genitiv im Detail', en: 'The genitive in detail', fr: 'Le génitif en détail' },
  theme: 'Genitive attributes, genitive prepositions (anhand, hinsichtlich, bezüglich, innerhalb, außerhalb, oberhalb, unterhalb) and the n-declension', themeFr: 'Compléments au génitif, prépositions à génitif (anhand, hinsichtlich, bezüglich, innerhalb, außerhalb, oberhalb, unterhalb) et déclinaison en -n',
  goals: ['Use the genitive for possession and description', 'Use formal genitive prepositions', 'Decline n-nouns (der Student → des Studenten)', 'Use "von + Dativ" when there is no article'], goalsFr: ['Utiliser le génitif pour la possession et la description', 'Utiliser les prépositions formelles à génitif', 'Décliner les noms en -n (der Student → des Studenten)', 'Utiliser « von + datif » quand il n’y a pas d’article'],
  canDo: g('Ich kann den Genitiv, die n-Deklination und formelle Genitivpräpositionen sicher verwenden.', 'I can use the genitive, the n-declension and formal genitive prepositions confidently.', 'Je sais utiliser avec assurance le génitif, la déclinaison en -n et les prépositions formelles au génitif.'),
  steps: [
    { kind: 'intro', title: 'Der Genitiv im Detail 📚', titleFr: 'Le génitif en détail 📚',
      scene: 'A survey report, an office tour and a formal letter — all full of genitives.', sceneFr: 'Un rapport d’enquête, une visite de bureau et une lettre formelle — tout plein de génitifs.',
      goals: ['Form the genitive with des / der and -(e)s', 'Decline n-nouns (der Student → des Studenten)', 'Use anhand, hinsichtlich, bezüglich, innerhalb, außerhalb, oberhalb, unterhalb'],
      goalsFr: ['Former le génitif avec des / der et -(e)s', 'Décliner les noms en -n (der Student → des Studenten)', 'Utiliser anhand, hinsichtlich, bezüglich, innerhalb, außerhalb, oberhalb, unterhalb'] },

    // ───────────── 1 · Genitive forms ─────────────
    { kind: 'chapter', title: 'Genitiv und n-Deklination', titleFr: 'Génitif et déclinaison en -n', blurb: 'des Lehrers · der Frau · des Studenten.', blurbFr: 'des Lehrers · der Frau · des Studenten.' },

    { kind: 'situation', title: 'Im Büro', titleFr: 'Au bureau',
      setting: 'A tour of the office.', settingFr: 'Une visite du bureau.',
      lines: [
        line('Chefin', 'Das Auto des Lehrers ist neu. Die Meinung der Frau ist wichtig. Der Preis des Hauses ist hoch. Die Rechte der Kinder sind klar.', 'The teacher’s car is new. The woman’s opinion is important. The price of the house is high. The children’s rights are clear.', 'La voiture du professeur est neuve. L’avis de la femme est important. Le prix de la maison est élevé. Les droits des enfants sont clairs.'),
        line('Chefin', 'Die Meinung des Studenten ist wichtig. Das Büro des Kollegen ist groß. Das Ergebnis der Umfrage überrascht alle. Das Auto von meinem Bruder steht draußen.', 'The student’s opinion is important. The colleague’s office is big. The result of the survey surprises everyone. My brother’s car is outside.', 'L’avis de l’étudiant est important. Le bureau du collègue est grand. Le résultat du sondage surprend tout le monde. La voiture de mon frère est dehors.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l14-e11', prompt: 'What surprises everyone?', promptFr: 'Qu’est-ce qui surprend tout le monde ?', options: ['The result of the survey', 'The price of the house', 'The colleague’s office'], optionsFr: ['Le résultat du sondage', 'Le prix de la maison', 'Le bureau du collègue'], answer: 0, explain: 'The text says: “Das Ergebnis der Umfrage überrascht alle.”', explainFr: 'Le texte dit : « Das Ergebnis der Umfrage überrascht alle. »', hint: 'Look for “Umfrage”.', hintFr: 'Cherche « Umfrage ».' } },

    { kind: 'wordgroup', title: 'Genitiv-Nomen', titleFr: 'Noms au génitif',
      items: [{ id: 'b2l14-student', german: 'der Student', english: 'the student (n-declension)', french: 'l’étudiant', gender: 'der', syllables: ['der', 'stu', 'DENT'], pronunciation: 'dair shtoo-DENT', example: { de: 'Die Meinung des Studenten ist wichtig.', en: 'The student’s opinion is important.', fr: 'L’avis de l’étudiant est important.' } }, { id: 'b2l14-kollege', german: 'der Kollege', english: 'the colleague (n-declension)', french: 'le collègue', gender: 'der', syllables: ['der', 'kol', 'LE', 'ge'], pronunciation: 'dair ko-LAY-ge', example: { de: 'Das Büro des Kollegen ist groß.', en: 'The colleague’s office is big.', fr: 'Le bureau du collègue est grand.' } }, { id: 'b2l14-ergebnis', german: 'das Ergebnis', english: 'the result', french: 'le résultat', gender: 'das', syllables: ['das', 'er', 'GEB', 'nis'], pronunciation: 'das er-GAYP-nis', example: { de: 'Das Ergebnis der Umfrage überrascht.', en: 'The result of the survey is surprising.', fr: 'Le résultat du sondage surprend.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l14-genitiv', title: 'The genitive and the n-declension', titleFr: 'Le génitif et la déclinaison en -n',
      lead: 'der/das → des + -(e)s; die → der; plural → der. n-nouns take -(e)n in every case except the nominative. Speech: von + dative.',
      leadFr: 'der/das → des + -(e)s ; die → der ; pluriel → der. Les noms en -n prennent -(e)n à tous les cas sauf au nominatif. À l’oral : von + datif.',
      explanationMd: 'The genitive shows **possession / belonging** and is common in **written** German: **der → des** (+ **-s / -es** on masculine / neuter noun): **das Auto des Lehrers**. **die → der**: **die Meinung der Frau**. **das → des** (+ -s / -es): **der Preis des Hauses**. **plural → der**: **die Rechte der Kinder**. **n-declension** (masculine nouns, add **-(e)n** in every case except nominative): **der Student → den / dem / des Studenten**; **der Kollege → des Kollegen**; **der Mensch → des Menschen**. In **speech**, **von + Dativ** often replaces the genitive: **das Auto von meinem Bruder**.',
      explanationMdFr: 'Le génitif exprime la **possession / l’appartenance** et est courant à l’**écrit** : **der → des** (+ **-s / -es** sur le nom masculin / neutre) : **das Auto des Lehrers**. **die → der** : **die Meinung der Frau**. **das → des** (+ -s / -es) : **der Preis des Hauses**. **pluriel → der** : **die Rechte der Kinder**. **Déclinaison en -n** (noms masculins, ajoute **-(e)n** à tous les cas sauf au nominatif) : **der Student → den / dem / des Studenten** ; **der Kollege → des Kollegen** ; **der Mensch → des Menschen**. À l’**oral**, **von + datif** remplace souvent le génitif : **das Auto von meinem Bruder**.',
      tables: [{ title: 'Genitive articles', titleFr: 'Articles au génitif', headers: ['Gender', 'Genitive', 'Example'], headersFr: ['Genre', 'Génitif', 'Exemple'],
        rows: [['masculine', 'des + -(e)s', 'das Auto des Lehrers'], ['feminine', 'der', 'die Meinung der Frau'], ['neuter', 'des + -(e)s', 'der Preis des Hauses'], ['plural', 'der', 'die Rechte der Kinder'], ['n-noun (masc.)', 'des + -(e)n', 'die Meinung des Studenten']],
        rowsFr: [['masculin', 'des + -(e)s', 'das Auto des Lehrers'], ['féminin', 'der', 'die Meinung der Frau'], ['neutre', 'des + -(e)s', 'der Preis des Hauses'], ['pluriel', 'der', 'die Rechte der Kinder'], ['nom en -n (masc.)', 'des + -(e)n', 'die Meinung des Studenten']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das Büro', role: 'subject' }, { text: 'des Kollegen', role: 'other' }, { text: 'ist', role: 'verb' }, { text: 'groß.', role: 'other' }], en: 'The colleague’s office is big.', fr: 'Le bureau du collègue est grand.' },
        { parts: [{ text: 'Das Ergebnis', role: 'subject' }, { text: 'der Umfrage', role: 'other' }, { text: 'überrascht', role: 'verb' }, { text: 'alle.', role: 'accusative' }], en: 'The result of the survey surprises everyone.', fr: 'Le résultat du sondage surprend tout le monde.' },
      ],
      contrast: {
        a: { label: 'Genitive (written)', labelFr: 'Génitif (écrit)', note: 'des / der', noteFr: 'des / der', examples: [g('Die Meinung des Kollegen ist wichtig.', 'The colleague’s opinion is important.', 'L’avis du collègue est important.'), g('Das Ergebnis der Umfrage überrascht alle.', 'The result of the survey surprises everyone.', 'Le résultat du sondage surprend tout le monde.')] },
        b: { label: 'von + dative (spoken)', labelFr: 'von + datif (oral)', note: 'everyday', noteFr: 'courant', examples: [g('Das Auto von meinem Bruder steht draußen.', 'My brother’s car is outside.', 'La voiture de mon frère est dehors.'), g('Die Meinung von dem Kollegen ist wichtig.', 'The colleague’s opinion is important.', 'L’avis du collègue est important.')] },
      },
      examples: [
        g('Die Meinung des Kollegen ist wichtig.', 'The colleague’s opinion is important.', 'L’avis du collègue est important.'),
        g('Das Ergebnis der Umfrage überrascht alle.', 'The result of the survey surprises everyone.', 'Le résultat du sondage surprend tout le monde.'),
        g('Das Auto des Lehrers ist neu.', 'The teacher’s car is new.', 'La voiture du professeur est neuve.'),
        g('Der Preis des Hauses ist hoch.', 'The price of the house is high.', 'Le prix de la maison est élevé.'),
        g('Die Rechte der Kinder sind klar.', 'The children’s rights are clear.', 'Les droits des enfants sont clairs.'),
        g('Die Meinung des Studenten ist wichtig.', 'The student’s opinion is important.', 'L’avis de l’étudiant est important.'),
      ],
      mistakes: [
        { wrong: 'die Meinung des Student', right: 'die Meinung des Studenten', why: 'n-declension: -en in the genitive.', whyFr: 'Déclinaison en -n : -en au génitif.' },
        { wrong: 'das Auto des Lehrer', right: 'das Auto des Lehrers', why: 'Masculine genitive adds -s.', whyFr: 'Le génitif masculin prend -s.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l14-e1', prompt: 'Das Auto ___ Lehrers ist neu. (the)', answer: 'des', hint: 'masculine genitive: des … -s', hintFr: 'génitif masculin : des … -s' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l14-e2', prompt: 'Die Meinung des ___ ist wichtig. (Student)', answer: 'Studenten', hint: 'n-declension: + en', hintFr: 'déclinaison en -n : + en' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l14-e8', prompt: 'Das Büro des ___ ist groß. (Kollege)', answer: 'Kollegen', hint: 'n-declension', hintFr: 'déclinaison en -n' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l14-e9', prompt: 'Which noun does NOT follow the n-declension?', promptFr: 'Quel nom ne suit PAS la déclinaison en -n ?', options: ['der Mensch', 'der Kollege', 'der Lehrer'], answer: 2, explain: 'der Lehrer → des Lehrers (normal -s).', explainFr: 'der Lehrer → des Lehrers (-s normal).', hint: 'Lehrer takes -s', hintFr: 'Lehrer prend -s' } },

    // ───────────── 2 · Genitive prepositions ─────────────
    { kind: 'chapter', title: 'Genitivpräpositionen', titleFr: 'Prépositions au génitif', blurb: 'anhand · hinsichtlich · innerhalb · oberhalb.', blurbFr: 'anhand · hinsichtlich · innerhalb · oberhalb.' },

    { kind: 'situation', title: 'Ein formeller Brief', titleFr: 'Une lettre formelle',
      setting: 'A letter and a walking description.', settingFr: 'Une lettre et une description de randonnée.',
      lines: [
        line('Brief', 'Bezüglich Ihrer Anfrage melde ich mich morgen. Hinsichtlich der Kosten gibt es Fragen. Seitens der Firma gibt es keine Einwände.', 'Regarding your enquiry I will get in touch tomorrow. With regard to the costs there are questions. On the part of the company there are no objections.', 'Concernant votre demande, je vous contacte demain. En ce qui concerne les coûts, il y a des questions. De la part de l’entreprise, il n’y a pas d’objections.'),
        line('Wanderer', 'Außerhalb der Stadt ist es sehr ruhig. Oberhalb des Dorfes steht eine Kirche. Unterhalb der Brücke fließt der Fluss. Innerhalb der Frist ist alles erledigt.', 'Outside the city it is very quiet. Above the village there is a church. Below the bridge flows the river. Within the deadline everything is done.', 'En dehors de la ville, c’est très calme. Au-dessus du village se trouve une église. En dessous du pont coule la rivière. Dans le délai, tout est réglé.'),
        line('Brief', 'Anhand der Daten sehen wir einen Trend. Anhand von Beispielen erklärt sie die Regel.', 'On the basis of the data we see a trend. She explains the rule using examples.', 'À partir des données, nous voyons une tendance. Elle explique la règle à l’aide d’exemples.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Wo? Worüber? Woraufhin?', titleFr: 'Où ? À propos de quoi ?',
      items: [{ id: 'b2l14-anhand', german: 'anhand', english: 'on the basis of', french: 'à l’aide de', gender: null, syllables: ['AN', 'hand'], pronunciation: 'AHN-hahnt', example: { de: 'Anhand der Daten sehen wir einen Trend.', en: 'On the basis of the data we see a trend.', fr: 'À l’aide des données, nous voyons une tendance.' } }, { id: 'b2l14-hinsichtlich', german: 'hinsichtlich', english: 'with regard to', french: 'en ce qui concerne', gender: null, syllables: ['HIN', 'sicht', 'lich'], pronunciation: 'HIN-zikht-likh', example: { de: 'Hinsichtlich der Kosten gibt es Fragen.', en: 'With regard to the costs there are questions.', fr: 'En ce qui concerne les coûts, il y a des questions.' } }, { id: 'b2l14-bezueglich', german: 'bezüglich', english: 'concerning', french: 'concernant', gender: null, syllables: ['be', 'ZÜG', 'lich'], pronunciation: 'be-TSUEK-likh', example: { de: 'Bezüglich Ihrer Anfrage melde ich mich.', en: 'Concerning your enquiry I will get in touch.', fr: 'Concernant votre demande, je vous contacte.' } }, { id: 'b2l14-seitens', german: 'seitens', english: 'on the part of', french: 'de la part de', gender: null, syllables: ['SEI', 'tens'], pronunciation: 'ZY-tens', example: { de: 'Seitens der Firma gibt es keine Einwände.', en: 'On the part of the company there are no objections.', fr: 'De la part de l’entreprise, il n’y a pas d’objections.' } }, { id: 'b2l14-ausserhalb', german: 'außerhalb', english: 'outside of', french: 'en dehors de', gender: null, syllables: ['AU', 'ßer', 'halb'], pronunciation: 'OW-ser-halp', example: { de: 'Außerhalb der Stadt ist es ruhig.', en: 'Outside the city it is quiet.', fr: 'En dehors de la ville, c’est calme.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l14-e6', pairs: [{ de: 'oberhalb', en: 'above', fr: 'au-dessus de' }, { de: 'unterhalb', en: 'below', fr: 'en dessous de' }, { de: 'außerhalb', en: 'outside of', fr: 'en dehors de' }, { de: 'hinsichtlich', en: 'with regard to', fr: 'en ce qui concerne' }], hint: 'Match each preposition to its meaning.', hintFr: 'Associe chaque préposition à sa signification.' } },

    { kind: 'wordgroup', title: 'Oben und unten', titleFr: 'En haut et en bas',
      items: [{ id: 'b2l14-oberhalb', german: 'oberhalb', english: 'above', french: 'au-dessus de', gender: null, syllables: ['O', 'ber', 'halb'], pronunciation: 'OH-ber-halp', example: { de: 'Oberhalb des Dorfes steht eine Kirche.', en: 'Above the village stands a church.', fr: 'Au-dessus du village se trouve une église.' } }, { id: 'b2l14-unterhalb', german: 'unterhalb', english: 'below', french: 'en dessous de', gender: null, syllables: ['UN', 'ter', 'halb'], pronunciation: 'OON-ter-halp', example: { de: 'Unterhalb der Brücke fließt der Fluss.', en: 'Below the bridge flows the river.', fr: 'Sous le pont coule la rivière.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l14-praepositionen', title: 'Genitive prepositions in formal style', titleFr: 'Prépositions au génitif en style formel',
      lead: 'anhand, hinsichtlich, bezüglich, innerhalb, außerhalb, oberhalb, unterhalb, seitens + genitive. Without an article: von + dative.',
      leadFr: 'anhand, hinsichtlich, bezüglich, innerhalb, außerhalb, oberhalb, unterhalb, seitens + génitif. Sans article : von + datif.',
      explanationMd: '**anhand** — on the basis of: **anhand der Zahlen** (also **anhand von** + Dativ). **hinsichtlich / bezüglich** — regarding: **hinsichtlich der Kosten**. **innerhalb / außerhalb** — within / outside: **innerhalb der Frist**. **oberhalb / unterhalb** — above / below: **unterhalb der Grenze**. **seitens** — on the part of: **seitens der Behörde**. Earlier: **aufgrund / wegen / trotz / während / statt**. If a noun has **no article** and cannot show the genitive, use **von + Dativ**: **anhand von Beispielen**, **innerhalb von zwei Tagen**.',
      explanationMdFr: '**anhand** — à partir de : **anhand der Zahlen** (aussi **anhand von** + datif). **hinsichtlich / bezüglich** — concernant : **hinsichtlich der Kosten**. **innerhalb / außerhalb** — dans / hors de : **innerhalb der Frist**. **oberhalb / unterhalb** — au-dessus / en dessous : **unterhalb der Grenze**. **seitens** — de la part de : **seitens der Behörde**. Déjà vues : **aufgrund / wegen / trotz / während / statt**. Si un nom est **sans article** et ne montre pas le génitif, utilise **von + datif** : **anhand von Beispielen**, **innerhalb von zwei Tagen**.',
      tables: [{ title: 'Formal genitive prepositions', titleFr: 'Prépositions formelles au génitif', headers: ['Preposition', 'Meaning', 'Example'], headersFr: ['Préposition', 'Sens', 'Exemple'],
        rows: [['anhand', 'on the basis of', 'anhand der Daten'], ['hinsichtlich / bezüglich', 'regarding', 'bezüglich Ihrer Anfrage'], ['innerhalb / außerhalb', 'within / outside', 'außerhalb der Stadt'], ['oberhalb / unterhalb', 'above / below', 'oberhalb des Dorfes'], ['seitens', 'on the part of', 'seitens der Firma']],
        rowsFr: [['anhand', 'à partir de', 'anhand der Daten'], ['hinsichtlich / bezüglich', 'concernant', 'bezüglich Ihrer Anfrage'], ['innerhalb / außerhalb', 'dans / hors de', 'außerhalb der Stadt'], ['oberhalb / unterhalb', 'au-dessus / en dessous', 'oberhalb des Dorfes'], ['seitens', 'de la part de', 'seitens der Firma']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Bezüglich', role: 'connector' }, { text: 'Ihrer Anfrage', role: 'other' }, { text: 'melde', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'mich', role: 'accusative' }, { text: 'morgen.', role: 'time' }], en: 'Regarding your enquiry I will get in touch tomorrow.', fr: 'Concernant votre demande, je vous contacte demain.' },
        { parts: [{ text: 'Oberhalb', role: 'connector' }, { text: 'des Dorfes', role: 'place' }, { text: 'steht', role: 'verb' }, { text: 'eine Kirche.', role: 'subject' }], en: 'Above the village stands a church.', fr: 'Au-dessus du village se trouve une église.' },
      ],
      contrast: {
        a: { label: 'With article', labelFr: 'Avec article', note: 'genitive', noteFr: 'génitif', examples: [g('Anhand der Daten sehen wir einen Trend.', 'On the basis of the data we see a trend.', 'À partir des données, nous voyons une tendance.'), g('Innerhalb der Frist ist alles erledigt.', 'Within the deadline everything is done.', 'Dans le délai, tout est réglé.')] },
        b: { label: 'Without article', labelFr: 'Sans article', note: 'von + dative', noteFr: 'von + datif', examples: [g('Anhand von Beispielen erklärt sie die Regel.', 'She explains the rule using examples.', 'Elle explique la règle à l’aide d’exemples.'), g('Innerhalb von zwei Tagen ist alles erledigt.', 'Within two days everything is done.', 'En deux jours, tout est réglé.')] },
      },
      examples: [
        g('Anhand von Beispielen erklärt sie die Regel.', 'She explains the rule using examples.', 'Elle explique la règle à l’aide d’exemples.'),
        g('Bezüglich Ihrer Anfrage melde ich mich morgen.', 'Regarding your enquiry I will get in touch tomorrow.', 'Concernant votre demande, je vous contacte demain.'),
        g('Außerhalb der Stadt ist es sehr ruhig.', 'Outside the city it is very quiet.', 'En dehors de la ville, c’est très calme.'),
        g('Oberhalb des Dorfes steht eine Kirche.', 'Above the village stands a church.', 'Au-dessus du village se trouve une église.'),
        g('Unterhalb der Brücke fließt der Fluss.', 'Below the bridge flows the river.', 'En dessous du pont coule la rivière.'),
        g('Hinsichtlich der Kosten gibt es Fragen.', 'With regard to the costs there are questions.', 'En ce qui concerne les coûts, il y a des questions.'),
      ],
      mistakes: [
        { wrong: 'anhand Beispielen', right: 'anhand von Beispielen', why: 'Without an article add von + dative.', whyFr: 'Sans article, ajoute von + datif.' },
        { wrong: 'außerhalb die Stadt', right: 'außerhalb der Stadt', why: 'außerhalb takes the genitive.', whyFr: 'außerhalb prend le génitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l14-e3', prompt: 'Which preposition means "on the basis of"?', promptFr: 'Quelle préposition signifie « à l’aide de » ?', options: ['anhand', 'seitens', 'oberhalb'], answer: 0, explain: '"anhand" = on the basis of.', explainFr: '« anhand » = à l’aide de.', hint: 'based on figures', hintFr: 'sur la base de chiffres' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l14-e4', prompt: 'No article: "Anhand ___ Beispielen"', promptFr: 'Sans article : « Anhand ___ Beispielen »', options: ['von', 'des', 'der'], answer: 0, explain: 'No genitive possible → von + Dativ.', explainFr: 'Génitif impossible → von + datif.', hint: 'von + Dativ', hintFr: 'von + datif' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l14-e5', tokens: ['Das', 'der', 'Umfrage', 'Ergebnis', 'überrascht'], answer: ['Das', 'Ergebnis', 'der', 'Umfrage', 'überrascht'], hint: 'Noun + genitive attribute (der Umfrage).', hintFr: 'Nom + complément au génitif (der Umfrage).' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l14-e7', prompt: 'Listen. What does she use to explain?', promptFr: 'Écoute. Que utilise-t-elle pour expliquer ?', audio: { ttsText: 'Anhand von Beispielen erklärt sie die Regel.' }, options: ['Examples', 'A video', 'A song'], optionsFr: ['Des exemples', 'Une vidéo', 'Une chanson'], answer: 0, hint: 'anhand von = on the basis of.', hintFr: 'anhand von = à l’aide de.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l14-e10', prompt: 'Listen. Where is it quiet?', promptFr: 'Écoute. Où est-ce calme ?', audio: { ttsText: 'Außerhalb der Stadt ist es sehr ruhig.' }, options: ['Outside the city', 'In the centre', 'At the station'], optionsFr: ['En dehors de la ville', 'Au centre', 'À la gare'], answer: 0, hint: 'außerhalb = outside.', hintFr: 'außerhalb = en dehors.' } },

    { kind: 'pronunciation', focus: 'Genitive prepositions end in unstressed -halb / -lich: stress the first syllable "INnerhalb", "AUßerhalb", "HINsichtlich"', focusFr: 'Les prépositions à génitif finissent en -halb / -lich atone : accent sur la 1re syllabe « INnerhalb », « AUßerhalb », « HINsichtlich »', items: [{ id: 'b2l14-innerhalb-pron', german: 'innerhalb', english: 'within', french: 'dans / au sein de', gender: null, syllables: ['IN', 'ner', 'halb'], pronunciation: 'IN-ner-halp', example: { de: 'Innerhalb der Frist.', en: 'Within the deadline.', fr: 'Dans le délai.' } }, { id: 'b2l14-hinsichtlich-pron', german: 'hinsichtlich', english: 'with regard to', french: 'concernant', gender: null, syllables: ['HIN', 'sicht', 'lich'], pronunciation: 'HIN-zikht-likh', example: { de: 'Hinsichtlich der Kosten.', en: 'With regard to costs.', fr: 'Concernant les coûts.' } }] },

    { kind: 'wrapup',
      summary: 'You can now use the **genitive** (**des Lehrers, der Frau**), the **n-declension** (**des Studenten**) and formal prepositions like **anhand, hinsichtlich, bezüglich, innerhalb, oberhalb**. 🎉',
      summaryFr: 'Tu sais maintenant utiliser le **génitif** (**des Lehrers, der Frau**), la **déclinaison en -n** (**des Studenten**) et les prépositions formelles comme **anhand, hinsichtlich, bezüglich, innerhalb, oberhalb**. 🎉',
      card: { title: 'The genitive on one page', titleFr: 'Le génitif en une page', sections: [
        { heading: 'Forms', headingFr: 'Formes', rows: [g('des + -(e)s · der · des + -(e)s · der', 'masc · fem · neut · plural', 'masc · fém · neutre · pluriel'), g('n-nouns: des Studenten', 'Student, Kollege, Mensch', 'Student, Kollege, Mensch')] },
        { heading: 'Prepositions', headingFr: 'Prépositions', rows: [g('anhand · hinsichtlich · bezüglich', 'basis / regarding', 'base / concernant'), g('innerhalb · außerhalb · oberhalb · unterhalb', 'place and time', 'lieu et temps')] },
        { heading: 'No article', headingFr: 'Sans article', rows: [g('von + Dativ', 'anhand von Beispielen', 'anhand von Beispielen')] },
      ] } },
  ],
};

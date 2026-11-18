import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion24: Lesson = {
  id: 'b2-l24', level: 'B2', module: 8, number: 24,
  title: { de: 'Zusammenfassen und Berichten', en: 'Summarising and reporting', fr: 'Résumer et rendre compte' },
  theme: 'Summarising texts, describing charts and statistics, and reporting results in a structured way', themeFr: 'Résumer des textes, décrire des graphiques et des statistiques, et rendre compte de résultats de façon structurée',
  goals: ['Summarise a text in your own words', 'Describe a chart or statistic', 'Structure a report (introduction, main part, conclusion)', 'Use neutral, precise language'], goalsFr: ['Résumer un texte avec tes propres mots', 'Décrire un graphique ou une statistique', 'Structurer un compte rendu (introduction, développement, conclusion)', 'Employer un langage neutre et précis'],
  canDo: g('Ich kann Grafiken beschreiben und Texte neutral und strukturiert zusammenfassen.', 'I can describe charts and summarise texts neutrally and in a structured way.', 'Je sais décrire des graphiques et résumer des textes de façon neutre et structurée.'),
  steps: [
    { kind: 'intro', title: 'Zusammenfassen und berichten 📊', titleFr: 'Résumer et rapporter 📊',
      scene: 'A survey on saving habits: you describe the chart and summarise an article for your team.', sceneFr: 'Une enquête sur les habitudes d’épargne : tu décris le graphique et résumes un article pour ton équipe.',
      goals: ['Describe a chart with a clear frame', 'Name trends: Anstieg, Rückgang, zunehmen, abnehmen', 'Summarise a text neutrally in your own words'],
      goalsFr: ['Décrire un graphique avec un cadre clair', 'Nommer des tendances : Anstieg, Rückgang, zunehmen, abnehmen', 'Résumer un texte de façon neutre avec tes propres mots'] },

    // ───────────── 1 · Charts ─────────────
    { kind: 'chapter', title: 'Grafiken beschreiben', titleFr: 'Décrire des graphiques', blurb: 'Introduce, give figures, name the trend.', blurbFr: 'Introduire, donner des chiffres, nommer la tendance.' },

    { kind: 'situation', title: 'Die Umfrage', titleFr: 'L’enquête',
      setting: 'A presentation at the end of a project.', settingFr: 'Une présentation en fin de projet.',
      lines: [
        line('Referentin', 'Die Grafik zeigt die Entwicklung der Preise. Das Diagramm stellt die Verteilung dar. Laut einer Umfrage sparen viele Menschen.', 'The chart shows the development of prices. The diagram represents the distribution. According to a survey many people save.', 'Le graphique montre l’évolution des prix. Le diagramme représente la répartition. Selon une enquête, beaucoup de gens épargnent.'),
        line('Referentin', 'Insgesamt wurden eintausend Personen zu ihren Gewohnheiten befragt. Die Befragten nennen hauptsächlich Kosten als Grund. Der Anteil liegt bei 40 Prozent.', 'In total one thousand people were asked about their habits. Respondents mainly name costs as the reason. The share is at 40 percent.', 'Au total, mille personnes ont été interrogées sur leurs habitudes. Les personnes interrogées citent principalement les coûts comme raison. La part est de 40 pour cent.'),
        line('Referentin', 'Die Zahl der Nutzer nimmt zu. Der Anteil nimmt seit Jahren ab. Es gab einen Rückgang von zehn Prozent. Der Anstieg war deutlich. Es ist ein deutlicher Rückgang der Verkaufszahlen zu beobachten.', 'The number of users is increasing. The share has been decreasing for years. There was a decline of ten percent. The rise was clear. A clear decline in sales figures can be observed.', 'Le nombre d’utilisateurs augmente. La part diminue depuis des années. Il y a eu un recul de dix pour cent. La hausse était nette. On observe un net recul des chiffres de vente.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l24-e11', prompt: 'How many people were surveyed?', promptFr: 'Combien de personnes ont été interrogées ?', options: ['1,000', '100', '10,000'], optionsFr: ['1 000', '100', '10 000'], answer: 0, explain: 'She says: “Insgesamt wurden eintausend Personen … befragt.”', explainFr: 'Elle dit : « Insgesamt wurden eintausend Personen … befragt. »', hint: 'Look for “eintausend”.', hintFr: 'Cherche « eintausend ».' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l24-e7', prompt: 'Listen. How many people were surveyed?', promptFr: 'Écoute. Combien de personnes ont été interrogées ?', audio: { ttsText: 'Insgesamt wurden eintausend Personen zu ihren Gewohnheiten befragt.' }, options: ['1,000', '100', '10,000'], optionsFr: ['1 000', '100', '10 000'], answer: 0, hint: 'eintausend = 1000', hintFr: 'eintausend = 1000' } },

    { kind: 'wordgroup', title: 'Die Grafik', titleFr: 'Le graphique',
      items: [{ id: 'b2l24-grafik', german: 'die Grafik', english: 'the chart / graphic', french: 'le graphique', gender: 'die', syllables: ['die', 'GRA', 'fik'], pronunciation: 'dee GRAH-fik', example: { de: 'Die Grafik zeigt die Entwicklung der Preise.', en: 'The chart shows the development of prices.', fr: 'Le graphique montre l’évolution des prix.' } }, { id: 'b2l24-umfrage', german: 'die Umfrage', english: 'the survey', french: 'le sondage', gender: 'die', syllables: ['die', 'UM', 'fra', 'ge'], pronunciation: 'dee OOM-frah-ge', example: { de: 'Laut einer Umfrage sparen viele Menschen.', en: 'According to a survey many people save.', fr: 'Selon un sondage, beaucoup de gens épargnent.' } }, { id: 'b2l24-zeigen', german: 'darstellen', english: 'to depict / represent', french: 'représenter', gender: null, syllables: ['DAR', 'stel', 'len'], pronunciation: 'DAR-shtel-len', example: { de: 'Das Diagramm stellt die Verteilung dar.', en: 'The diagram depicts the distribution.', fr: 'Le diagramme représente la répartition.' } }, { id: 'b2l24-insgesamt', german: 'insgesamt', english: 'overall', french: 'au total', gender: null, syllables: ['INS', 'ge', 'samt'], pronunciation: 'INS-ge-zahmt', example: { de: 'Insgesamt wurden 1000 Personen befragt.', en: 'Altogether 1,000 people were surveyed.', fr: 'Au total, 1000 personnes ont été interrogées.' } }] },

    { kind: 'wordgroup', title: 'Trends', titleFr: 'Tendances',
      items: [{ id: 'b2l24-zunehmen', german: 'zunehmen', english: 'to increase', french: 'augmenter', gender: null, syllables: ['ZU', 'neh', 'men'], pronunciation: 'TSOO-nay-men', example: { de: 'Die Zahl der Nutzer nimmt zu.', en: 'The number of users is increasing.', fr: 'Le nombre d’utilisateurs augmente.' } }, { id: 'b2l24-abnehmen', german: 'abnehmen', english: 'to decrease', french: 'diminuer', gender: null, syllables: ['AB', 'neh', 'men'], pronunciation: 'AHP-nay-men', example: { de: 'Der Anteil nimmt seit Jahren ab.', en: 'The share has been decreasing for years.', fr: 'La part diminue depuis des années.' } }, { id: 'b2l24-rueckgang', german: 'der Rückgang', english: 'the decline', french: 'le recul', gender: 'der', syllables: ['der', 'RÜCK', 'gang'], pronunciation: 'dair RUEK-gahng', example: { de: 'Es gab einen Rückgang von zehn Prozent.', en: 'There was a decline of ten percent.', fr: 'Il y a eu un recul de dix pour cent.' } }, { id: 'b2l24-anstieg', german: 'der Anstieg', english: 'the rise', french: 'la hausse', gender: 'der', syllables: ['der', 'AN', 'stieg'], pronunciation: 'dair AHN-shteek', example: { de: 'Der Anstieg war deutlich.', en: 'The rise was marked.', fr: 'La hausse était nette.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l24-e6', pairs: [{ de: 'die Umfrage', en: 'survey', fr: 'sondage' }, { de: 'insgesamt', en: 'overall', fr: 'au total' }, { de: 'hauptsächlich', en: 'mainly', fr: 'principalement' }, { de: 'das Fazit', en: 'conclusion', fr: 'bilan' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l24-grafik', title: 'Describing a chart: a useful frame', titleFr: 'Décrire un graphique : un cadre utile',
      lead: 'Introduction → source and figures → main points → trend → conclusion. Keep it neutral: man / es, passive.',
      leadFr: 'Introduction → source et chiffres → points principaux → tendance → conclusion. Reste neutre : man / es, passif.',
      explanationMd: '1. **Introduction:** **Die Grafik zeigt / stellt dar, …** / **Das Diagramm gibt Auskunft über …** / **Thema der Grafik ist …** 2. **Source & figures:** **Laut einer Umfrage von … wurden insgesamt 1000 Personen befragt.** 3. **Main points:** **An erster Stelle steht …, gefolgt von …** · **Der Anteil liegt bei 40 %.** · **Die Zahl ist von … auf … gestiegen / gesunken.** 4. **Trend:** **Es ist ein deutlicher Anstieg / Rückgang zu beobachten.** 5. **Interpretation / conclusion:** **Daraus lässt sich schließen, dass …** · **Zusammenfassend lässt sich sagen …** · **Das Fazit lautet …** Keep the language **neutral** — no “I think”, use **man / es** and the **passive**.',
      explanationMdFr: '1. **Introduction :** **Die Grafik zeigt / stellt dar, …** / **Das Diagramm gibt Auskunft über …** / **Thema der Grafik ist …** 2. **Source et chiffres :** **Laut einer Umfrage von … wurden insgesamt 1000 Personen befragt.** 3. **Points principaux :** **An erster Stelle steht …, gefolgt von …** · **Der Anteil liegt bei 40 %.** · **Die Zahl ist von … auf … gestiegen / gesunken.** 4. **Tendance :** **Es ist ein deutlicher Anstieg / Rückgang zu beobachten.** 5. **Interprétation / conclusion :** **Daraus lässt sich schließen, dass …** · **Zusammenfassend lässt sich sagen …** · **Das Fazit lautet …** Garde un langage **neutre** — pas de « je pense », utilise **man / es** et le **passif**.',
      tables: [{ title: 'Chart frame', titleFr: 'Cadre du graphique', headers: ['Step', 'Phrase'], headersFr: ['Étape', 'Phrase'],
        rows: [['1 Introduce', 'Die Grafik zeigt die Entwicklung der Preise.'], ['2 Source', 'Laut einer Umfrage wurden insgesamt 1000 Personen befragt.'], ['3 Figures', 'Der Anteil liegt bei 40 Prozent.'], ['4 Trend', 'Es ist ein deutlicher Rückgang zu beobachten.'], ['5 Conclusion', 'Daraus lässt sich schließen, dass das Interesse wächst.']],
        rowsFr: [['1 Introduire', 'Die Grafik zeigt die Entwicklung der Preise.'], ['2 Source', 'Laut einer Umfrage wurden insgesamt 1000 Personen befragt.'], ['3 Chiffres', 'Der Anteil liegt bei 40 Prozent.'], ['4 Tendance', 'Es ist ein deutlicher Rückgang zu beobachten.'], ['5 Conclusion', 'Daraus lässt sich schließen, dass das Interesse wächst.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Die Grafik', role: 'subject' }, { text: 'zeigt,', role: 'verb' }, { text: 'wie', role: 'connector' }, { text: 'sich der Anteil', role: 'subject' }, { text: 'entwickelt hat.', role: 'verb' }], en: 'The chart shows how the share has developed.', fr: 'Le graphique montre comment la part a évolué.' },
        { parts: [{ text: 'Der Anteil', role: 'subject' }, { text: 'liegt', role: 'verb' }, { text: 'bei 40 Prozent.', role: 'other' }], en: 'The share is at 40 percent.', fr: 'La part est de 40 pour cent.' },
      ],
      contrast: {
        a: { label: 'Personal', labelFr: 'Personnel', note: 'avoid', noteFr: 'à éviter', examples: [g('Ich finde, die Zahl ist hoch.', 'I think the number is high.', 'Je trouve que le chiffre est élevé.'), g('Meiner Meinung nach steigen die Preise.', 'In my opinion prices are rising.', 'À mon avis, les prix augmentent.')] },
        b: { label: 'Neutral', labelFr: 'Neutre', note: 'man / es / passive', noteFr: 'man / es / passif', examples: [g('Es ist ein deutlicher Anstieg zu beobachten.', 'A clear rise can be observed.', 'On observe une nette hausse.'), g('Es wurden insgesamt 1000 Personen befragt.', 'In total 1000 people were asked.', 'Au total, 1000 personnes ont été interrogées.')] },
      },
      examples: [
        g('Die Grafik zeigt, wie sich der Anteil der Online-Käufe entwickelt hat.', 'The chart shows how the share of online purchases has developed.', 'Le graphique montre comment la part des achats en ligne a évolué.'),
        g('Daraus lässt sich schließen, dass das Interesse wächst.', 'From this we can conclude that interest is growing.', 'On peut en conclure que l’intérêt grandit.'),
        g('Der Anteil liegt bei 40 Prozent.', 'The share is at 40 percent.', 'La part est de 40 pour cent.'),
        g('Die Zahl der Nutzer nimmt zu.', 'The number of users is increasing.', 'Le nombre d’utilisateurs augmente.'),
        g('Es gab einen Rückgang von zehn Prozent.', 'There was a decline of ten percent.', 'Il y a eu un recul de dix pour cent.'),
        g('Das Fazit ist eindeutig.', 'The conclusion is clear.', 'La conclusion est claire.'),
      ],
      mistakes: [
        { wrong: 'Die Grafik zeigt dass die Preise steigen.', right: 'Die Grafik zeigt, dass die Preise steigen.', why: 'Always a comma before dass.', whyFr: 'Toujours une virgule devant dass.' },
        { wrong: 'Der Anteil ist 40 Prozent.', right: 'Der Anteil liegt bei 40 Prozent.', why: 'For figures use liegt bei.', whyFr: 'Pour les chiffres, utilise liegt bei.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l24-e1', prompt: 'Die Grafik ___, wie sich die Preise entwickelt haben. (shows)', answer: 'zeigt', hint: 'zeigen', hintFr: 'zeigen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l24-e3', prompt: 'Der Anteil ___ bei 40 Prozent. (is at)', answer: 'liegt', hint: 'liegen bei', hintFr: 'liegen bei' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l24-e4', prompt: 'Which means "decline"?', promptFr: 'Lequel signifie « recul » ?', options: ['der Anstieg', 'der Rückgang', 'der Anteil'], answer: 1, explain: 'Rückgang = decline.', explainFr: 'Rückgang = recul.', hint: 'zurückgehen', hintFr: 'zurückgehen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l24-e8', prompt: 'Die Zahl der Nutzer ___ zu. (increases)', answer: 'nimmt', hint: 'zunehmen → nimmt zu', hintFr: 'zunehmen → nimmt zu' } },

    // ───────────── 2 · Summarising ─────────────
    { kind: 'chapter', title: 'Texte zusammenfassen', titleFr: 'Résumer des textes', blurb: 'Short, neutral, in your own words.', blurbFr: 'Court, neutre, avec tes propres mots.' },

    { kind: 'situation', title: 'Die Zusammenfassung', titleFr: 'Le résumé',
      setting: 'A student summarises an article about digitalisation.', settingFr: 'Une étudiante résume un article sur la numérisation.',
      lines: [
        line('Studentin', 'Ich fasse den Text kurz zusammen. Im Text geht es um die Folgen der Digitalisierung. Der Autor weist darauf hin, dass viele Jobs verschwinden.', 'I summarise the text briefly. The text is about the consequences of digitalisation. The author points out that many jobs are disappearing.', 'Je résume brièvement le texte. Le texte traite des conséquences de la numérisation. L’auteur souligne que beaucoup d’emplois disparaissent.'),
        line('Studentin', 'Außerdem betont er, dass neue Berufe entstehen. Jedoch bleibt offen, wer davon profitiert. Insgesamt lässt sich sagen, dass die Entwicklung Chancen und Risiken bietet. Das Fazit ist eindeutig.', 'Moreover he stresses that new professions emerge. However it remains open who benefits. Overall one can say that the development offers opportunities and risks. The conclusion is clear.', 'En outre, il souligne que de nouveaux métiers apparaissent. Cependant, la question de savoir qui en profite reste ouverte. Dans l’ensemble, on peut dire que l’évolution offre des opportunités et des risques. La conclusion est claire.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l24-e10', prompt: 'Listen. What is the trend?', promptFr: 'Écoute. Quelle est la tendance ?', audio: { ttsText: 'Es ist ein deutlicher Rückgang der Verkaufszahlen zu beobachten.' }, options: ['Sales are falling', 'Sales are rising', 'Sales are stable'], optionsFr: ['Les ventes baissent', 'Les ventes augmentent', 'Les ventes sont stables'], answer: 0, hint: 'Rückgang = decline.', hintFr: 'Rückgang = recul.' } },

    { kind: 'wordgroup', title: 'Fassen wir zusammen', titleFr: 'Résumons',
      items: [{ id: 'b2l24-zusammenfassen', german: 'zusammenfassen', english: 'to summarise', french: 'résumer', gender: null, syllables: ['zu', 'SAM', 'men', 'fas', 'sen'], pronunciation: 'tsoo-ZAM-men-fas-sen', example: { de: 'Ich fasse den Text kurz zusammen.', en: 'I will briefly summarise the text.', fr: 'Je résume brièvement le texte.' } }, { id: 'b2l24-hauptsaechlich', german: 'hauptsächlich', english: 'mainly', french: 'principalement', gender: null, syllables: ['HAUPT', 'säch', 'lich'], pronunciation: 'HOWPT-zekh-likh', example: { de: 'Die Befragten nennen hauptsächlich Kosten als Grund.', en: 'Respondents mainly name costs as a reason.', fr: 'Les personnes interrogées citent principalement les coûts.' } }, { id: 'b2l24-fazit', german: 'das Fazit', english: 'the conclusion / bottom line', french: 'le bilan', gender: 'das', syllables: ['das', 'FA', 'zit'], pronunciation: 'das FAH-tsit', example: { de: 'Das Fazit ist eindeutig.', en: 'The conclusion is clear.', fr: 'Le bilan est clair.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l24-zusammenfassen', title: 'Summarising a text', titleFr: 'Résumer un texte',
      lead: 'Short, neutral, in your own words: present tense, no opinion, connectors and reporting verbs, end with the main message.',
      leadFr: 'Court, neutre, avec tes propres mots : présent, pas d’opinion, connecteurs et verbes de rapport, termine par le message principal.',
      explanationMd: 'A good summary is **short, neutral and in your own words**: **Present tense**, no quotations, no personal opinion. Start with: **Der Text handelt von … / Im Text geht es um … / Der Autor beschäftigt sich mit …** Link ideas with **connectors**: **außerdem, jedoch, darüber hinaus, folglich**. Use **reporting verbs**: **behaupten, betonen, kritisieren, darauf hinweisen, dass …** End with the **main message**: **Insgesamt lässt sich sagen, dass …** Reduce a paragraph to **1–2 sentences**. Use **Nominalstil** to compress: **Die Zunahme der Nutzer führt zu …**',
      explanationMdFr: 'Un bon résumé est **court, neutre et avec tes propres mots** : **présent**, pas de citations, pas d’opinion personnelle. Commence par : **Der Text handelt von … / Im Text geht es um … / Der Autor beschäftigt sich mit …** Relie les idées avec des **connecteurs** : **außerdem, jedoch, darüber hinaus, folglich**. Utilise des **verbes de rapport** : **behaupten, betonen, kritisieren, darauf hinweisen, dass …** Termine par le **message principal** : **Insgesamt lässt sich sagen, dass …** Réduis un paragraphe à **1–2 phrases**. Utilise le **style nominal** pour condenser : **Die Zunahme der Nutzer führt zu …**',
      tables: [{ title: 'Summary toolkit', titleFr: 'Boîte à outils du résumé', headers: ['Function', 'Phrase'], headersFr: ['Fonction', 'Phrase'],
        rows: [['open', 'Im Text geht es um die Folgen der Digitalisierung.'], ['report', 'Der Autor weist darauf hin, dass viele Jobs verschwinden.'], ['add', 'Außerdem betont er, dass neue Berufe entstehen.'], ['contrast', 'Jedoch bleibt offen, wer davon profitiert.'], ['close', 'Insgesamt lässt sich sagen, dass die Entwicklung Chancen und Risiken bietet.']],
        rowsFr: [['ouvrir', 'Im Text geht es um die Folgen der Digitalisierung.'], ['rapporter', 'Der Autor weist darauf hin, dass viele Jobs verschwinden.'], ['ajouter', 'Außerdem betont er, dass neue Berufe entstehen.'], ['opposer', 'Jedoch bleibt offen, wer davon profitiert.'], ['conclure', 'Insgesamt lässt sich sagen, dass die Entwicklung Chancen und Risiken bietet.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Im Text', role: 'place' }, { text: 'geht', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'um die Folgen der Digitalisierung.', role: 'other' }], en: 'The text is about the consequences of digitalisation.', fr: 'Le texte traite des conséquences de la numérisation.' },
        { parts: [{ text: 'Der Autor', role: 'subject' }, { text: 'weist', role: 'verb' }, { text: 'darauf', role: 'other' }, { text: 'hin,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'viele Jobs', role: 'subject' }, { text: 'verschwinden.', role: 'verb' }], en: 'The author points out that many jobs are disappearing.', fr: 'L’auteur souligne que beaucoup d’emplois disparaissent.' },
      ],
      contrast: {
        a: { label: 'Not a summary', labelFr: 'Pas un résumé', note: 'opinion + quotation', noteFr: 'opinion + citation', examples: [g('Meiner Meinung nach ist der Text schlecht.', 'In my opinion the text is bad.', 'À mon avis, le texte est mauvais.'), g('„Viele Jobs werden verschwinden“, schreibt er.', '“Many jobs will disappear,” he writes.', '« Beaucoup d’emplois vont disparaître », écrit-il.')] },
        b: { label: 'Summary', labelFr: 'Résumé', note: 'neutral, own words', noteFr: 'neutre, propres mots', examples: [g('Im Text geht es um die Folgen der Digitalisierung.', 'The text is about the consequences of digitalisation.', 'Le texte traite des conséquences de la numérisation.'), g('Der Autor weist darauf hin, dass viele Jobs verschwinden.', 'The author points out that many jobs are disappearing.', 'L’auteur souligne que beaucoup d’emplois disparaissent.')] },
      },
      examples: [
        g('Im Text geht es um die Folgen der Digitalisierung.', 'The text is about the consequences of digitalisation.', 'Le texte traite des conséquences de la numérisation.'),
        g('Der Autor weist darauf hin, dass viele Jobs verschwinden.', 'The author points out that many jobs are disappearing.', 'L’auteur souligne que beaucoup d’emplois disparaissent.'),
        g('Außerdem betont er, dass neue Berufe entstehen.', 'Moreover he stresses that new professions emerge.', 'En outre, il souligne que de nouveaux métiers apparaissent.'),
        g('Jedoch bleibt offen, wer davon profitiert.', 'However it remains open who benefits.', 'Cependant, la question de savoir qui en profite reste ouverte.'),
        g('Insgesamt lässt sich sagen, dass die Entwicklung Chancen und Risiken bietet.', 'Overall one can say that the development offers opportunities and risks.', 'Dans l’ensemble, on peut dire que l’évolution offre des opportunités et des risques.'),
        g('Die Zunahme der Nutzer führt zu mehr Daten.', 'The increase in users leads to more data.', 'L’augmentation du nombre d’utilisateurs conduit à plus de données.'),
      ],
      mistakes: [
        { wrong: 'Der Autor wies darauf hin, dass viele Jobs verschwanden. (summary)', right: 'Der Autor weist darauf hin, dass viele Jobs verschwinden.', why: 'A summary uses the present tense.', whyFr: 'Un résumé utilise le présent.' },
        { wrong: 'Ich denke, der Autor hat recht.', right: 'Der Autor argumentiert, dass …', why: 'No personal opinion in a summary.', whyFr: 'Pas d’opinion personnelle dans un résumé.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l24-e2', prompt: 'Which opens a summary?', promptFr: 'Laquelle ouvre un résumé ?', options: ['Im Text geht es um …', 'Ich finde, dass …', 'Mir gefällt …'], answer: 0, explain: 'Neutral and impersonal.', explainFr: 'Neutre et impersonnel.', hint: 'no "ich"', hintFr: 'pas de « ich »' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l24-e5', tokens: ['Es', 'geht', 'Im Text', 'um', 'Digitalisierung', 'die'], answer: ['Im Text', 'geht', 'es', 'um', 'die', 'Digitalisierung'], hint: 'Im Text geht es um …', hintFr: 'Im Text geht es um …' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l24-e9', prompt: 'Which is NOT appropriate in a summary?', promptFr: 'Laquelle ne convient PAS dans un résumé ?', options: ['Der Autor betont, dass …', 'Meiner Meinung nach ist der Text schlecht.', 'Im Text wird erklärt, dass …'], answer: 1, explain: 'A summary contains no personal opinion.', explainFr: 'Un résumé ne contient pas d’opinion personnelle.', hint: 'neutral', hintFr: 'neutre' } },

    { kind: 'pronunciation', focus: 'Numbers and long words: stress the key figure; say "Prozent" with a clear [ts] — "viERzig ProZENT"', focusFr: 'Chiffres et mots longs : accentue le chiffre clé ; dis « Prozent » avec un net [ts] — « viERzig ProZENT »', items: [{ id: 'b2l24-zusammenfassen-pron', german: 'zusammenfassen', english: 'to summarise', french: 'résumer', gender: null, syllables: ['zu', 'SAM', 'men', 'fas', 'sen'], pronunciation: 'tsoo-ZAM-men-fas-sen', example: { de: 'Ich fasse zusammen.', en: 'I summarise.', fr: 'Je résume.' } }, { id: 'b2l24-hauptsaechlich-pron', german: 'hauptsächlich', english: 'mainly', french: 'principalement', gender: null, syllables: ['HAUPT', 'säch', 'lich'], pronunciation: 'HOWPT-zekh-likh', example: { de: 'Das gilt hauptsächlich für Städte.', en: 'This mainly applies to cities.', fr: 'Cela vaut surtout pour les villes.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **describe charts** with a clear frame (**zeigt, liegt bei, Anstieg, Rückgang**) and **summarise texts** neutrally (**Im Text geht es um …, Insgesamt lässt sich sagen …**). 🎉',
      summaryFr: 'Tu sais maintenant **décrire des graphiques** avec un cadre clair (**zeigt, liegt bei, Anstieg, Rückgang**) et **résumer des textes** de façon neutre (**Im Text geht es um …, Insgesamt lässt sich sagen …**). 🎉',
      card: { title: 'Summaries on one page', titleFr: 'Les résumés en une page', sections: [
        { heading: 'Chart', headingFr: 'Graphique', rows: [g('zeigt · liegt bei · gestiegen auf', 'introduce · figure · change', 'introduire · chiffre · évolution'), g('Anstieg · Rückgang', 'rise · decline', 'hausse · recul')] },
        { heading: 'Summary', headingFr: 'Résumé', rows: [g('Im Text geht es um …', 'open', 'ouvrir'), g('außerdem · jedoch · insgesamt', 'link and close', 'relier et conclure')] },
        { heading: 'Style', headingFr: 'Style', rows: [g('present · neutral · no opinion', 'own words', 'propres mots')] },
      ] } },
  ],
};

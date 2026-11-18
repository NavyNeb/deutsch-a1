import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New B2 lesson: a check of the B2 level (reading an argumentative text, the B2 grammar map, writing a statement).
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const b2lektion27: Lesson = {
  id: 'b2-l27', level: 'B2', module: 9, number: 27,
  title: { de: 'B2 geschafft: Prüfungstraining', en: 'B2 done: exam training', fr: 'B2 terminé : entraînement à l’examen' },
  theme: 'B2 check: reading an argumentative text, the B2 grammar map and writing a structured statement',
  themeFr: 'Contrôle B2 : lire un texte argumentatif, la carte de la grammaire B2 et écrire une prise de position structurée',
  goals: ['Read an argumentative text and find pro and contra', 'Review the B2 grammar in one map', 'Write a structured statement (Stellungnahme)'],
  goalsFr: ['Lire un texte argumentatif et trouver pour et contre', 'Réviser la grammaire B2 en une carte', 'Écrire une prise de position structurée'],
  canDo: g('Ich kann einen argumentativen Text verstehen, die wichtigste B2-Grammatik anwenden und eine strukturierte Stellungnahme schreiben.', 'I can understand an argumentative text, apply the key B2 grammar and write a structured statement.', 'Je sais comprendre un texte argumentatif, appliquer la grammaire B2 essentielle et écrire une prise de position structurée.'),
  steps: [
    { kind: 'intro', title: 'B2 geschafft! 🎓', titleFr: 'B2 terminé ! 🎓',
      scene: 'A newspaper commentary asks: should companies introduce the four-day week? You read, review the grammar and write your own statement.', sceneFr: 'Un commentaire de presse demande : les entreprises devraient-elles introduire la semaine de quatre jours ? Tu lis, révises la grammaire et écris ta propre prise de position.',
      goals: ['Read an argumentative text', 'The B2 grammar map', 'Write a structured statement'],
      goalsFr: ['Lire un texte argumentatif', 'La carte de la grammaire B2', 'Écrire une prise de position structurée'] },

    // ───────────── 1 · Reading ─────────────
    { kind: 'chapter', title: 'Lesen: Viertagewoche – ja oder nein?', titleFr: 'Lecture : semaine de quatre jours – oui ou non ?', blurb: 'Find the arguments.', blurbFr: 'Trouve les arguments.' },

    { kind: 'situation', title: 'Ein Zeitungskommentar', titleFr: 'Un commentaire de presse',
      setting: 'A commentary in a weekly newspaper.', settingFr: 'Un commentaire dans un hebdomadaire.',
      lines: [
        line('Kommentar', 'Immer mehr Unternehmen testen die Viertagewoche. Befürworter argumentieren, die Mitarbeiter seien zufriedener und produktiver. Kritiker bestreiten, dass sich das Modell für jede Branche eigne.', 'More and more companies are testing the four-day week. Supporters argue that employees are more satisfied and productive. Critics deny that the model suits every industry.', 'De plus en plus d’entreprises testent la semaine de quatre jours. Les partisans soutiennent que les employés sont plus satisfaits et plus productifs. Les critiques contestent que le modèle convienne à toutes les branches.'),
        line('Kommentar', 'Laut einer Studie sei die Zahl der Krankmeldungen um 20 Prozent gesunken. Je weniger man arbeitet, desto konzentrierter arbeitet man angeblich. Die Frage ist, ob sich die Einführung langfristig lohnt.', 'According to a study the number of sick notes fell by 20 percent. The less you work, the more concentrated you supposedly work. The question is whether the introduction pays off in the long run.', 'Selon une étude, le nombre d’arrêts maladie a baissé de 20 pour cent. Moins on travaille, plus on travaille soi-disant de façon concentrée. La question est de savoir si l’introduction est rentable à long terme.'),
        line('Kommentar', 'Trotz der Vorteile bleibt die Umsetzung schwierig. Der Plan ließe sich nur realisieren, wenn die Arbeit besser organisiert würde. Einerseits wäre das ein Gewinn für die Gesundheit, andererseits drohen höhere Kosten.', 'Despite the advantages the implementation remains difficult. The plan could only be realised if the work were better organised. On the one hand it would be a gain for health, on the other higher costs threaten.', 'Malgré les avantages, la mise en œuvre reste difficile. Le plan ne pourrait être réalisé que si le travail était mieux organisé. D’un côté ce serait un gain pour la santé, de l’autre des coûts plus élevés menacent.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l27-e1', prompt: 'What do critics deny?', promptFr: 'Que contestent les critiques ?', options: ['That the model suits every industry', 'That employees are tired', 'That companies exist'], optionsFr: ['Que le modèle convienne à toutes les branches', 'Que les employés soient fatigués', 'Que des entreprises existent'], answer: 0, explain: 'The text says: “Kritiker bestreiten, dass sich das Modell für jede Branche eigne.”', explainFr: 'Le texte dit : « Kritiker bestreiten, dass sich das Modell für jede Branche eigne. »', hint: 'Look for “bestreiten”.', hintFr: 'Cherche « bestreiten ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l27-e2', prompt: 'What does the study report?', promptFr: 'Que rapporte l’étude ?', options: ['Fewer sick notes', 'More sick notes', 'No change at all'], optionsFr: ['Moins d’arrêts maladie', 'Plus d’arrêts maladie', 'Aucun changement'], answer: 0, explain: 'The text says: “… die Zahl der Krankmeldungen sei um 20 Prozent gesunken.”', explainFr: 'Le texte dit : « … die Zahl der Krankmeldungen sei um 20 Prozent gesunken. »', hint: 'Look for “gesunken”.', hintFr: 'Cherche « gesunken ».' } },

    { kind: 'wordgroup', title: 'Arbeitsmodelle', titleFr: 'Modèles de travail',
      items: [
        word('b2l27-viertagewoche', 'die Viertagewoche', 'die', 'the four-day week', 'la semaine de quatre jours', ['VIER', 'ta', 'ge', 'wo', 'che'], 'FEER-tah-geh-VOKH-eh', g('Die Viertagewoche wird getestet.', 'The four-day week is being tested.', 'La semaine de quatre jours est testée.')),
        word('b2l27-befuerworter', 'der Befürworter', 'der', 'the supporter', 'le partisan', ['be', 'FÜR', 'wor', 'ter'], 'beh-FUER-vor-ter', g('Die Befürworter nennen höhere Zufriedenheit.', 'The supporters cite higher satisfaction.', 'Les partisans citent une plus grande satisfaction.')),
        word('b2l27-kritiker', 'der Kritiker', 'der', 'the critic', 'le critique', ['KRI', 'ti', 'ker'], 'KREE-tee-ker', g('Die Kritiker bezweifeln den Nutzen.', 'The critics doubt the benefit.', 'Les critiques doutent de l’utilité.')),
        word('b2l27-branche', 'die Branche', 'die', 'the industry / sector', 'la branche', ['BRAN', 'sche'], 'BRAHN-sheh', g('In jeder Branche ist es anders.', 'It is different in every industry.', 'C’est différent dans chaque branche.')),
      ] },

    { kind: 'wordgroup', title: 'Pro und Contra', titleFr: 'Pour et contre',
      items: [
        word('b2l27-einfuehrung', 'die Einführung', 'die', 'the introduction', 'l’introduction', ['EIN', 'füh', 'rung'], 'INE-fue-roong', g('Die Einführung braucht Zeit.', 'The introduction takes time.', 'L’introduction demande du temps.')),
        word('b2l27-umsetzung', 'die Umsetzung', 'die', 'the implementation', 'la mise en œuvre', ['UM', 'set', 'zung'], 'OOM-zet-soong', g('Die Umsetzung ist schwierig.', 'The implementation is difficult.', 'La mise en œuvre est difficile.')),
        word('b2l27-langfristig', 'langfristig', null, 'in the long run', 'à long terme', ['LANG', 'fris', 'tig'], 'LANG-fris-tikh', g('Langfristig lohnt sich das Modell.', 'In the long run the model pays off.', 'À long terme, le modèle est rentable.')),
        word('b2l27-produktiv', 'produktiv', null, 'productive', 'productif', ['pro', 'duk', 'TIV'], 'pro-dook-TEEF', g('Mitarbeiter sind produktiver.', 'Employees are more productive.', 'Les employés sont plus productifs.')),
      ] },

    // ───────────── 2 · Grammar map ─────────────
    { kind: 'chapter', title: 'Die B2-Grammatik auf einen Blick', titleFr: 'La grammaire B2 d’un coup d’œil', blurb: 'Nominal style, Konjunktiv I, participles, passive alternatives.', blurbFr: 'Style nominal, Konjunktiv I, participes, équivalents du passif.' },

    { kind: 'situation', title: 'Alles zusammen', titleFr: 'Tout ensemble',
      setting: 'The author sums up the argument.', settingFr: 'L’auteur résume l’argumentation.',
      lines: [
        line('Autorin', 'Nach der Einführung der Viertagewoche stieg die Zufriedenheit. Der Chef sagte, die Mitarbeiter seien produktiver geworden.', 'After the introduction of the four-day week satisfaction rose. The boss said the employees had become more productive.', 'Après l’introduction de la semaine de quatre jours, la satisfaction a augmenté. Le chef a dit que les employés étaient devenus plus productifs.'),
        line('Autorin', 'Die getestete Viertagewoche überzeugt viele Firmen. Das Modell lässt sich nicht überall umsetzen. Trotz der Vorteile bleibt die Umsetzung schwierig.', 'The tested four-day week convinces many firms. The model cannot be implemented everywhere. Despite the advantages the implementation remains difficult.', 'La semaine de quatre jours testée convainc beaucoup d’entreprises. Le modèle ne peut pas être appliqué partout. Malgré les avantages, la mise en œuvre reste difficile.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b2l27-grammatik', title: 'The B2 grammar map', titleFr: 'La carte de la grammaire B2',
      lead: 'Six boxes: nominal style, Konjunktiv I, participles, passive alternatives, concession and developments.',
      leadFr: 'Six boîtes : style nominal, Konjunktiv I, participes, équivalents du passif, concession et évolutions.',
      explanationMd: '**Nominal style** compresses clauses: **Nachdem die Firma die Viertagewoche eingeführt hatte** → **Nach der Einführung der Viertagewoche**. **Konjunktiv I** reports neutrally: **Er sagt, er sei zufrieden.** (switch to Konjunktiv II if the form equals the indicative). **Participle phrases** pack information before the noun: **die getestete Viertagewoche**. **Passive alternatives**: **Das lässt sich lösen. · Das ist zu lösen. · lösbar**. **Concession**: **obwohl / trotz + Genitiv / dennoch / selbst wenn**. **Developments**: **immer + comparative · je … desto**. **Assumptions**: **muss / dürfte / könnte** + infinitive. **Unreal conditions** without **wenn**: **Wäre er hier, würde er helfen.**',
      explanationMdFr: 'Le **style nominal** condense les propositions : **Nachdem die Firma die Viertagewoche eingeführt hatte** → **Nach der Einführung der Viertagewoche**. Le **Konjunktiv I** rapporte de façon neutre : **Er sagt, er sei zufrieden.** (passe au Konjunktiv II si la forme est identique à l’indicatif). Les **groupes participiaux** condensent l’information avant le nom : **die getestete Viertagewoche**. **Équivalents du passif** : **Das lässt sich lösen. · Das ist zu lösen. · lösbar**. **Concession** : **obwohl / trotz + génitif / dennoch / selbst wenn**. **Évolutions** : **immer + comparatif · je … desto**. **Suppositions** : **muss / dürfte / könnte** + infinitif. **Irréels** sans **wenn** : **Wäre er hier, würde er helfen.**',
      tables: [
        { title: 'Compressing and reporting', titleFr: 'Condenser et rapporter', headers: ['Topic', 'Key forms', 'Example'], headersFr: ['Sujet', 'Formes clés', 'Exemple'],
          rows: [['Nominal style', 'nach / wegen / trotz + noun', 'Nach der Einführung der Viertagewoche stieg die Zufriedenheit.'], ['Konjunktiv I', 'er sei · sie habe · es gebe', 'Er sagt, er sei zufrieden.'], ['Participles', 'getestet · steigend · zu lösend', 'die getestete Viertagewoche'], ['Passive alternatives', 'lässt sich · ist zu · -bar', 'Das Modell lässt sich nicht überall umsetzen.']],
          rowsFr: [['Style nominal', 'nach / wegen / trotz + nom', 'Nach der Einführung der Viertagewoche stieg die Zufriedenheit.'], ['Konjunktiv I', 'er sei · sie habe · es gebe', 'Er sagt, er sei zufrieden.'], ['Participes', 'getestet · steigend · zu lösend', 'die getestete Viertagewoche'], ['Équivalents du passif', 'lässt sich · ist zu · -bar', 'Das Modell lässt sich nicht überall umsetzen.']], highlightCol: 1 },
        { title: 'Contrast and degree', titleFr: 'Contraste et degré', headers: ['Topic', 'Key forms', 'Example'], headersFr: ['Sujet', 'Formes clés', 'Exemple'],
          rows: [['Concession', 'obwohl · trotz + Gen. · dennoch · selbst wenn', 'Trotz der Vorteile bleibt die Umsetzung schwierig.'], ['Developments', 'immer + comp. · je … desto', 'Je weniger man arbeitet, desto konzentrierter arbeitet man.'], ['Assumptions', 'muss · dürfte · könnte + inf.', 'Das dürfte stimmen.'], ['Unreal condition', 'Wäre / Hätte … , würde …', 'Wäre er hier, würde er helfen.']],
          rowsFr: [['Concession', 'obwohl · trotz + gén. · dennoch · selbst wenn', 'Trotz der Vorteile bleibt die Umsetzung schwierig.'], ['Évolutions', 'immer + comp. · je … desto', 'Je weniger man arbeitet, desto konzentrierter arbeitet man.'], ['Suppositions', 'muss · dürfte · könnte + inf.', 'Das dürfte stimmen.'], ['Irréel', 'Wäre / Hätte … , würde …', 'Wäre er hier, würde er helfen.']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Nach', role: 'connector' }, { text: 'der Einführung', role: 'other' }, { text: 'der Viertagewoche', role: 'other' }, { text: 'stieg', role: 'verb' }, { text: 'die Zufriedenheit.', role: 'subject' }], en: 'After the introduction of the four-day week satisfaction rose.', fr: 'Après l’introduction de la semaine de quatre jours, la satisfaction a augmenté.' },
        { parts: [{ text: 'Der Chef', role: 'subject' }, { text: 'sagte,', role: 'verb' }, { text: 'die Mitarbeiter', role: 'subject' }, { text: 'seien', role: 'verb' }, { text: 'produktiver geworden.', role: 'other' }], en: 'The boss said the employees had become more productive.', fr: 'Le chef a dit que les employés étaient devenus plus productifs.' },
      ],
      contrast: {
        a: { label: 'Clause', labelFr: 'Proposition', note: 'everyday', noteFr: 'courant', examples: [g('Nachdem die Firma die Viertagewoche eingeführt hatte, stieg die Zufriedenheit.', 'After the firm had introduced the four-day week satisfaction rose.', 'Après que l’entreprise a introduit la semaine de quatre jours, la satisfaction a augmenté.'), g('Weil es regnete, blieben wir zu Hause.', 'Because it rained we stayed at home.', 'Comme il pleuvait, nous sommes restés à la maison.')] },
        b: { label: 'Nominal style', labelFr: 'Style nominal', note: 'formal writing', noteFr: 'écrit formel', examples: [g('Nach der Einführung der Viertagewoche stieg die Zufriedenheit.', 'After the introduction of the four-day week satisfaction rose.', 'Après l’introduction de la semaine de quatre jours, la satisfaction a augmenté.'), g('Wegen des Regens blieben wir zu Hause.', 'Because of the rain we stayed at home.', 'À cause de la pluie, nous sommes restés à la maison.')] },
      },
      examples: [
        g('Nach der Einführung der Viertagewoche stieg die Zufriedenheit.', 'After the introduction of the four-day week satisfaction rose.', 'Après l’introduction de la semaine de quatre jours, la satisfaction a augmenté.'),
        g('Der Chef sagte, die Mitarbeiter seien produktiver geworden.', 'The boss said the employees had become more productive.', 'Le chef a dit que les employés étaient devenus plus productifs.'),
        g('Die getestete Viertagewoche überzeugt viele Firmen.', 'The tested four-day week convinces many firms.', 'La semaine de quatre jours testée convainc beaucoup d’entreprises.'),
        g('Das Modell lässt sich nicht überall umsetzen.', 'The model cannot be implemented everywhere.', 'Le modèle ne peut pas être appliqué partout.'),
        g('Trotz der Vorteile bleibt die Umsetzung schwierig.', 'Despite the advantages the implementation remains difficult.', 'Malgré les avantages, la mise en œuvre reste difficile.'),
        g('Je weniger man arbeitet, desto konzentrierter arbeitet man.', 'The less you work, the more concentrated you work.', 'Moins on travaille, plus on travaille de façon concentrée.'),
      ],
      mistakes: [
        { wrong: 'Nach die Einführung der Viertagewoche …', right: 'Nach der Einführung der Viertagewoche …', why: 'nach takes the dative: der Einführung.', whyFr: 'nach prend le datif : der Einführung.' },
        { wrong: 'Der Chef sagte, die Mitarbeiter sind produktiver. (formal report)', right: 'Der Chef sagte, die Mitarbeiter seien produktiver.', why: 'Formal reports use the Konjunktiv I.', whyFr: 'Les comptes rendus formels utilisent le Konjunktiv I.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l27-e3', prompt: 'Er sagt, er ___ zufrieden. (sein — Konjunktiv I)', promptFr: 'Er sagt, er ___ zufrieden. (sein — Konjunktiv I)', answer: 'sei', hint: 'Konjunktiv I of sein', hintFr: 'Konjunktiv I de sein' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l27-e4', prompt: 'Trotz ___ Vorteile bleibt die Umsetzung schwierig. (genitive plural)', promptFr: 'Trotz ___ Vorteile bleibt die Umsetzung schwierig. (génitif pluriel)', answer: 'der', hint: 'trotz + genitive plural: der', hintFr: 'trotz + génitif pluriel : der' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l27-e5', prompt: 'Nominal style of “Nachdem die Firma die Viertagewoche eingeführt hatte, …”', promptFr: 'Style nominal de « Nachdem die Firma die Viertagewoche eingeführt hatte, … »', options: ['Nach der Einführung der Viertagewoche, …', 'Nach die Einführung der Viertagewoche, …', 'Nachdem der Einführung, …'], optionsFr: ['Nach der Einführung der Viertagewoche, …', 'Nach die Einführung der Viertagewoche, …', 'Nachdem der Einführung, …'], answer: 0, explain: 'nach + dative noun: nach der Einführung.', explainFr: 'nach + nom au datif : nach der Einführung.', hint: 'nach takes the dative', hintFr: 'nach prend le datif' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l27-e6', prompt: 'Je weniger man arbeitet, ___ konzentrierter arbeitet man.', promptFr: 'Je weniger man arbeitet, ___ konzentrierter arbeitet man.', answer: 'desto', hint: 'je … desto', hintFr: 'je … desto' } },

    // ───────────── 3 · Writing ─────────────
    { kind: 'chapter', title: 'Schreiben: die Stellungnahme', titleFr: 'Écrire : la prise de position', blurb: 'Introduction, pro, contra, conclusion.', blurbFr: 'Introduction, pour, contre, conclusion.' },

    { kind: 'situation', title: 'Meine Stellungnahme', titleFr: 'Ma prise de position',
      setting: 'A reader answers the commentary.', settingFr: 'Un lecteur répond au commentaire.',
      lines: [
        line('Leserin', 'Die Frage, ob die Viertagewoche eingeführt werden soll, ist aktuell. Einerseits spricht für das Modell, dass die Mitarbeiter zufriedener sind. Andererseits ist die Umsetzung nicht in jeder Branche möglich.', 'The question whether the four-day week should be introduced is topical. On the one hand it speaks for the model that employees are more satisfied. On the other hand the implementation is not possible in every industry.', 'La question de savoir si la semaine de quatre jours doit être introduite est d’actualité. D’un côté, il est en faveur du modèle que les employés soient plus satisfaits. De l’autre, la mise en œuvre n’est pas possible dans toutes les branches.'),
        line('Leserin', 'Dagegen spricht außerdem, dass die Kosten steigen könnten. Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen. Ich würde daher einen Testlauf in jeder Firma empfehlen.', 'Against it speaks, moreover, that costs could rise. In summary one can say that the advantages outweigh. I would therefore recommend a trial run in every firm.', 'Contre cela plaide en outre que les coûts pourraient augmenter. En résumé, on peut dire que les avantages l’emportent. Je recommanderais donc une phase de test dans chaque entreprise.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l27-e7', prompt: 'What does the reader recommend?', promptFr: 'Que recommande la lectrice ?', options: ['A trial run in every firm', 'Banning the four-day week', 'Working six days'], optionsFr: ['Une phase de test dans chaque entreprise', 'Interdire la semaine de quatre jours', 'Travailler six jours'], answer: 0, explain: 'She writes: “Ich würde daher einen Testlauf in jeder Firma empfehlen.”', explainFr: 'Elle écrit : « Ich würde daher einen Testlauf in jeder Firma empfehlen. »', hint: 'Look for “empfehlen”.', hintFr: 'Cherche « empfehlen ».' } },

    { kind: 'grammar', note: {
      id: 'b2l27-stellungnahme', title: 'The structured statement (Stellungnahme)', titleFr: 'La prise de position structurée',
      lead: 'Four parts: introduce the topic, give pro arguments, give contra arguments, conclude with your recommendation.',
      leadFr: 'Quatre parties : introduire le sujet, donner les arguments pour, les arguments contre, conclure avec ta recommandation.',
      explanationMd: 'In the **B2 writing exam** build the text in **four parts**: **1 · Introduction**: **Die Frage, ob … , ist aktuell.** / **Das Thema … wird kontrovers diskutiert.** **2 · Pro**: **Einerseits spricht für …, dass …** / **Ein Vorteil ist …** **3 · Contra**: **Andererseits / Dagegen spricht, dass …** / **Zu bedenken ist außerdem, dass …** **4 · Conclusion**: **Zusammenfassend lässt sich sagen, dass …** / **Ich würde daher … empfehlen.** Use **connectors** (**außerdem, jedoch, daher, dennoch**), **nominal style** and the **Konjunktiv II** for polite recommendations. Keep the tone **neutral and formal**.',
      explanationMdFr: 'À l’**examen d’écriture B2**, construis le texte en **quatre parties** : **1 · Introduction** : **Die Frage, ob … , ist aktuell.** / **Das Thema … wird kontrovers diskutiert.** **2 · Pour** : **Einerseits spricht für …, dass …** / **Ein Vorteil ist …** **3 · Contre** : **Andererseits / Dagegen spricht, dass …** / **Zu bedenken ist außerdem, dass …** **4 · Conclusion** : **Zusammenfassend lässt sich sagen, dass …** / **Ich würde daher … empfehlen.** Utilise des **connecteurs** (**außerdem, jedoch, daher, dennoch**), le **style nominal** et le **Konjunktiv II** pour des recommandations polies. Garde un ton **neutre et formel**.',
      tables: [{ title: 'Four parts', titleFr: 'Quatre parties', headers: ['Part', 'German'], headersFr: ['Partie', 'Allemand'],
        rows: [['1 · Introduction', 'Die Frage, ob die Viertagewoche eingeführt werden soll, ist aktuell.'], ['2 · Pro', 'Einerseits spricht für das Modell, dass die Mitarbeiter zufriedener sind.'], ['3 · Contra', 'Dagegen spricht außerdem, dass die Kosten steigen könnten.'], ['4 · Conclusion', 'Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.']],
        rowsFr: [['1 · Introduction', 'Die Frage, ob die Viertagewoche eingeführt werden soll, ist aktuell.'], ['2 · Pour', 'Einerseits spricht für das Modell, dass die Mitarbeiter zufriedener sind.'], ['3 · Contre', 'Dagegen spricht außerdem, dass die Kosten steigen könnten.'], ['4 · Conclusion', 'Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Einerseits', role: 'connector' }, { text: 'spricht', role: 'verb' }, { text: 'für das Modell,', role: 'other' }, { text: 'dass', role: 'connector' }, { text: 'die Mitarbeiter', role: 'subject' }, { text: 'zufriedener sind.', role: 'verb' }], en: 'On the one hand it speaks for the model that employees are more satisfied.', fr: 'D’un côté, il est en faveur du modèle que les employés soient plus satisfaits.' },
        { parts: [{ text: 'Zusammenfassend', role: 'connector' }, { text: 'lässt', role: 'verb' }, { text: 'sich', role: 'accusative' }, { text: 'sagen,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'die Vorteile', role: 'subject' }, { text: 'überwiegen.', role: 'verb' }], en: 'In summary one can say that the advantages outweigh.', fr: 'En résumé, on peut dire que les avantages l’emportent.' },
      ],
      contrast: {
        a: { label: 'Weak', labelFr: 'Faible', note: 'opinion only', noteFr: 'opinion seule', examples: [g('Ich finde die Viertagewoche gut.', 'I think the four-day week is good.', 'Je trouve la semaine de quatre jours bien.'), g('Das ist toll.', 'That is great.', 'C’est génial.')] },
        b: { label: 'Structured', labelFr: 'Structuré', note: 'pro, contra, conclusion', noteFr: 'pour, contre, conclusion', examples: [g('Einerseits spricht für das Modell, dass die Mitarbeiter zufriedener sind.', 'On the one hand it speaks for the model that employees are more satisfied.', 'D’un côté, il est en faveur du modèle que les employés soient plus satisfaits.'), g('Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.', 'In summary one can say that the advantages outweigh.', 'En résumé, on peut dire que les avantages l’emportent.')] },
      },
      examples: [
        g('Die Frage, ob die Viertagewoche eingeführt werden soll, ist aktuell.', 'The question whether the four-day week should be introduced is topical.', 'La question de savoir si la semaine de quatre jours doit être introduite est d’actualité.'),
        g('Einerseits spricht für das Modell, dass die Mitarbeiter zufriedener sind.', 'On the one hand it speaks for the model that employees are more satisfied.', 'D’un côté, il est en faveur du modèle que les employés soient plus satisfaits.'),
        g('Andererseits ist die Umsetzung nicht in jeder Branche möglich.', 'On the other hand the implementation is not possible in every industry.', 'De l’autre, la mise en œuvre n’est pas possible dans toutes les branches.'),
        g('Dagegen spricht außerdem, dass die Kosten steigen könnten.', 'Against it speaks, moreover, that costs could rise.', 'Contre cela plaide en outre que les coûts pourraient augmenter.'),
        g('Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.', 'In summary one can say that the advantages outweigh.', 'En résumé, on peut dire que les avantages l’emportent.'),
        g('Ich würde daher einen Testlauf in jeder Firma empfehlen.', 'I would therefore recommend a trial run in every firm.', 'Je recommanderais donc une phase de test dans chaque entreprise.'),
      ],
      mistakes: [
        { wrong: 'Ich denke, dass Viertagewoche gut ist, weil gut.', right: 'Einerseits spricht für das Modell, dass die Mitarbeiter zufriedener sind.', why: 'Give a concrete reason, not a circle.', whyFr: 'Donne une raison concrète, pas un cercle.' },
        { wrong: 'Zusammenfassend lässt sich sagen die Vorteile überwiegen.', right: 'Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.', why: 'Comma and dass-clause with the verb last.', whyFr: 'Virgule et proposition en dass avec le verbe à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l27-e8', tokens: ['überwiegen', 'Zusammenfassend', 'lässt', 'die Vorteile', 'sagen', 'dass', 'sich'], answer: ['Zusammenfassend', 'lässt', 'sich', 'sagen', 'dass', 'die Vorteile', 'überwiegen'], hint: 'dass-clause: verb last.', hintFr: 'proposition en dass : verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l27-e9', prompt: 'Listen. What does the speaker conclude?', promptFr: 'Écoute. Quelle est la conclusion du locuteur ?', audio: { ttsText: 'Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.' }, options: ['The advantages outweigh', 'The disadvantages outweigh', 'It is a tie'], optionsFr: ['Les avantages l’emportent', 'Les inconvénients l’emportent', 'C’est égal'], answer: 0, hint: 'Zusammenfassend …', hintFr: 'Zusammenfassend …' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l27-e10', prompt: 'Listen. What does the study say?', promptFr: 'Écoute. Que dit l’étude ?', audio: { ttsText: 'Laut einer Studie sei die Zahl der Krankmeldungen deutlich gesunken.' }, options: ['Sick notes fell clearly', 'Sick notes rose', 'Nothing changed'], optionsFr: ['Les arrêts maladie ont nettement baissé', 'Les arrêts maladie ont augmenté', 'Rien n’a changé'], answer: 0, hint: 'gesunken = fell', hintFr: 'gesunken = a baissé' } },

    { kind: 'pronunciation', focus: 'The stress in Befürworter and zusammenfassend, the long ü and the ch in langfristig', focusFr: 'L’accent dans Befürworter et zusammenfassend, le ü long et le ch dans langfristig',
      items: [
        word('b2l27-befuerworter-pron', 'Befürworter', null, 'supporter', 'partisan', ['be', 'FÜR', 'wor', 'ter'], 'beh-FUER-vor-ter', g('Die Befürworter sind in der Mehrheit.', 'The supporters are in the majority.', 'Les partisans sont majoritaires.')),
        word('b2l27-zusammenfassend-pron', 'zusammenfassend', null, 'in summary', 'en résumé', ['zu', 'SAM', 'men', 'fas', 'send'], 'tsoo-ZAM-men-fas-sent', g('Zusammenfassend lässt sich sagen …', 'In summary one can say …', 'En résumé, on peut dire …')),
        word('b2l27-langfristig-pron', 'langfristig', null, 'in the long run', 'à long terme', ['LANG', 'fris', 'tig'], 'LANG-fris-tikh', g('Langfristig lohnt es sich.', 'In the long run it pays off.', 'À long terme, c’est rentable.')),
        word('b2l27-umsetzung-pron', 'Umsetzung', null, 'implementation', 'mise en œuvre', ['UM', 'set', 'zung'], 'OOM-zet-soong', g('Die Umsetzung braucht Zeit.', 'The implementation takes time.', 'La mise en œuvre prend du temps.')),
      ] },

    { kind: 'wrapup',
      summary: 'You have reached the **end of B2**: you can read an argumentative text, use nominal style, Konjunktiv I, participles, passive alternatives and concessions, and write a **structured statement**. Congratulations! 🎓',
      summaryFr: 'Tu as atteint la **fin de B2** : tu sais lire un texte argumentatif, utiliser le style nominal, le Konjunktiv I, les participes, les équivalents du passif et les concessions, et écrire une **prise de position structurée**. Félicitations ! 🎓',
      card: { title: 'B2 on one page', titleFr: 'B2 en une page', sections: [
        { heading: 'Compress', headingFr: 'Condenser', rows: [g('nach / wegen / trotz + noun', 'nominal style', 'style nominal'), g('getestet · steigend · zu lösend', 'participle phrases', 'groupes participiaux')] },
        { heading: 'Report and assume', headingFr: 'Rapporter et supposer', rows: [g('er sei · sie habe · es gebe', 'Konjunktiv I', 'Konjunktiv I'), g('muss · dürfte · könnte', 'degrees of certainty', 'degrés de certitude')] },
        { heading: 'Argue', headingFr: 'Argumenter', rows: [g('einerseits … andererseits · dagegen spricht', 'pro and contra', 'pour et contre'), g('Zusammenfassend lässt sich sagen …', 'conclusion', 'conclusion')] },
      ] } },
  ],
};

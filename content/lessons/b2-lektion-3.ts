import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion3: Lesson = {
  id: 'b2-l3', level: 'B2', module: 1, number: 3,
  title: { de: 'Nominalisierung', en: 'Nominalisation', fr: 'La nominalisation' },
  theme: 'Turning verbs and adjectives into nouns (-ung, -heit, -keit, das + infinitive) and the nominal style of formal texts', themeFr: 'Transformer verbes et adjectifs en noms (-ung, -heit, -keit, das + infinitif) et le style nominal des textes formels',
  goals: ['Form nouns with -ung, -heit/-keit and the infinitive', 'Know the gender of derived nouns', 'Recognise nominal style in news and official texts', 'Rewrite a clause as a noun phrase'], goalsFr: ['Former des noms avec -ung, -heit/-keit et l’infinitif', 'Connaître le genre des noms dérivés', 'Reconnaître le style nominal dans les articles et textes officiels', 'Réécrire une proposition sous forme de groupe nominal'],
  canDo: g('Ich kann Nomen mit -ung, -heit, -keit und dem Infinitiv bilden, ihr Genus erkennen und Nebensätze in Nominalgruppen umformen.', 'I can build nouns with -ung, -heit, -keit and the infinitive, recognise their gender and turn clauses into noun phrases.', 'Je sais former des noms avec -ung, -heit, -keit et l’infinitif, reconnaître leur genre et transformer des propositions en groupes nominaux.'),
  steps: [
    { kind: 'intro', title: 'Nominalisierung 📰', titleFr: 'Nominalisation 📰',
      scene: 'A newspaper article on rising rents: the same news told with verbs and in formal nominal style.', sceneFr: 'Un article de presse sur la hausse des loyers : la même nouvelle racontée avec des verbes et dans le style nominal formel.',
      goals: ['Form nouns with -ung, -heit/-keit and the infinitive', 'Know the gender of derived nouns', 'Rewrite a clause as a noun phrase'],
      goalsFr: ['Former des noms avec -ung, -heit/-keit et l’infinitif', 'Connaître le genre des noms dérivés', 'Réécrire une proposition sous forme de groupe nominal'] },

    // ───────────── 1 · Building nouns ─────────────
    { kind: 'chapter', title: 'Nomen bilden', titleFr: 'Former des noms', blurb: 'The ending tells you the gender.', blurbFr: 'La terminaison indique le genre.' },

    { kind: 'situation', title: 'Die Entwicklung der Preise', titleFr: 'L’évolution des prix',
      setting: 'A news reader describes the situation.', settingFr: 'Un présentateur décrit la situation.',
      lines: [
        line('Sprecher', 'Die Entwicklung der Preise ist besorgniserregend. Die Erhöhung der Mieten ärgert viele. Es gibt mehrere Möglichkeiten.', 'The development of prices is worrying. The increase in rents annoys many. There are several possibilities.', 'L’évolution des prix est préoccupante. La hausse des loyers agace beaucoup de gens. Il existe plusieurs possibilités.'),
        line('Sprecher', 'Wir wünschen eine Verbesserung der Lage. Die Veränderung kam schnell. Wir haben Schwierigkeiten mit dem Projekt.', 'We wish for an improvement of the situation. The change came quickly. We have difficulties with the project.', 'Nous souhaitons une amélioration de la situation. Le changement a été rapide. Nous avons des difficultés avec le projet.'),
        line('Sprecher', 'Gesundheit ist wichtiger als Geld. Nach der Ankunft rufe ich an. Beim Lesen vergesse ich die Zeit. Die Begrüßung war herzlich.', 'Health is more important than money. After the arrival I call. When reading I forget the time. The greeting was warm.', 'La santé est plus importante que l’argent. Après l’arrivée, j’appelle. En lisant, j’oublie le temps. L’accueil était chaleureux.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l3-e11', prompt: 'What annoys many people?', promptFr: 'Qu’est-ce qui agace beaucoup de gens ?', options: ['The increase in rents', 'The weather', 'The traffic'], optionsFr: ['La hausse des loyers', 'Le temps', 'La circulation'], answer: 0, explain: 'The reader says: “Die Erhöhung der Mieten ärgert viele.”', explainFr: 'Le présentateur dit : « Die Erhöhung der Mieten ärgert viele. »', hint: 'Look for “Erhöhung”.', hintFr: 'Cherche « Erhöhung ».' } },

    { kind: 'wordgroup', title: 'Nomen auf -ung', titleFr: 'Noms en -ung',
      items: [{ id: 'b2l3-entwicklung', german: 'die Entwicklung', english: 'the development', french: 'le développement', gender: 'die', syllables: ['ent', 'WICK', 'lung'], pronunciation: 'dee ent-VIK-loong', example: { de: 'Die Entwicklung der Preise ist besorgniserregend.', en: 'The development of prices is worrying.', fr: 'L’évolution des prix est inquiétante.' } }, { id: 'b2l3-veraenderung', german: 'die Veränderung', english: 'the change', french: 'le changement', gender: 'die', syllables: ['ver', 'ÄN', 'de', 'rung'], pronunciation: 'dee fer-EN-de-roong', example: { de: 'Die Veränderung kam schnell.', en: 'The change came quickly.', fr: 'Le changement est venu vite.' } }, { id: 'b2l3-erhoehung', german: 'die Erhöhung', english: 'the increase', french: 'l’augmentation', gender: 'die', syllables: ['er', 'HÖ', 'hung'], pronunciation: 'dee er-HOE-oong', example: { de: 'Die Erhöhung der Mieten ärgert viele.', en: 'The rent increase annoys many.', fr: 'L’augmentation des loyers énerve beaucoup de gens.' } }, { id: 'b2l3-verbesserung', german: 'die Verbesserung', english: 'the improvement', french: 'l’amélioration', gender: 'die', syllables: ['ver', 'BES', 'se', 'rung'], pronunciation: 'dee fer-BES-se-roong', example: { de: 'Wir wünschen eine Verbesserung der Lage.', en: 'We wish for an improvement of the situation.', fr: 'Nous souhaitons une amélioration de la situation.' } }, { id: 'b2l3-begruessung', german: 'die Begrüßung', english: 'the greeting', french: 'l’accueil', gender: 'die', syllables: ['be', 'GRÜ', 'ßung'], pronunciation: 'dee be-GRUE-soong', example: { de: 'Die Begrüßung war herzlich.', en: 'The greeting was warm.', fr: 'L’accueil était chaleureux.' } }, { id: 'b2l3-ankunft', german: 'die Ankunft', english: 'the arrival', french: 'l’arrivée', gender: 'die', syllables: ['AN', 'kunft'], pronunciation: 'dee AHN-koonft', example: { de: 'Nach der Ankunft rufe ich an.', en: 'After arrival I will call.', fr: 'Après l’arrivée, j’appellerai.' } }] },

    { kind: 'wordgroup', title: 'Nomen auf -heit / -keit und mehr', titleFr: 'Noms en -heit / -keit et plus',
      items: [{ id: 'b2l3-moeglichkeit', german: 'die Möglichkeit', english: 'the possibility', french: 'la possibilité', gender: 'die', syllables: ['MÖG', 'lich', 'keit'], pronunciation: 'dee MOEG-likh-kite', example: { de: 'Es gibt mehrere Möglichkeiten.', en: 'There are several possibilities.', fr: 'Il y a plusieurs possibilités.' } }, { id: 'b2l3-schwierigkeit', german: 'die Schwierigkeit', english: 'the difficulty', french: 'la difficulté', gender: 'die', syllables: ['SCHWIE', 'rig', 'keit'], pronunciation: 'dee SHVEE-rikh-kite', example: { de: 'Wir haben Schwierigkeiten mit dem Projekt.', en: 'We have difficulties with the project.', fr: 'Nous avons des difficultés avec le projet.' } }, { id: 'b2l3-gesundheit', german: 'die Gesundheit', english: 'health', french: 'la santé', gender: 'die', syllables: ['ge', 'SUND', 'heit'], pronunciation: 'dee ge-ZOONT-hite', example: { de: 'Gesundheit ist wichtiger als Geld.', en: 'Health is more important than money.', fr: 'La santé est plus importante que l’argent.' } }, { id: 'b2l3-das-lesen', german: 'das Lesen', english: 'reading', french: 'la lecture', gender: 'das', syllables: ['das', 'LE', 'sen'], pronunciation: 'das LAY-zen', example: { de: 'Beim Lesen vergesse ich die Zeit.', en: 'While reading I forget the time.', fr: 'En lisant, j’oublie le temps.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l3-nomen-bilden', title: 'Building nouns: -ung, -heit/-keit, infinitive', titleFr: 'Former des noms : -ung, -heit/-keit, infinitif',
      lead: '-ung, -heit, -keit nouns are feminine (die). The infinitive as a noun is neuter (das).',
      leadFr: 'Les noms en -ung, -heit, -keit sont féminins (die). L’infinitif substantivé est neutre (das).',
      explanationMd: 'Common patterns: **verb stem + -ung → die**: **entwickeln → die Entwicklung, ändern → die Änderung, verbessern → die Verbesserung**. **adjective + -heit / -keit → die**: **gesund → die Gesundheit, möglich → die Möglichkeit, schwierig → die Schwierigkeit** (**-keit** after **-ig, -lich, -bar**, **-heit** elsewhere). **Other stem nouns** (often **die**, learn as they come): **ankommen → die Ankunft, abfahren → die Abfahrt**. **infinitive → noun → das**: **lesen → das Lesen** (often after **beim, zum**). **Almost all -ung, -heit, -keit nouns are feminine**: you can **read the gender from the ending**.',
      explanationMdFr: 'Schémas courants : **radical du verbe + -ung → die** : **entwickeln → die Entwicklung, ändern → die Änderung, verbessern → die Verbesserung**. **adjectif + -heit / -keit → die** : **gesund → die Gesundheit, möglich → die Möglichkeit, schwierig → die Schwierigkeit** (**-keit** après **-ig, -lich, -bar**, **-heit** ailleurs). **Autres noms de radical** (souvent **die**, à apprendre au fur et à mesure) : **ankommen → die Ankunft, abfahren → die Abfahrt**. **infinitif → nom → das** : **lesen → das Lesen** (souvent après **beim, zum**). **Presque tous les noms en -ung, -heit, -keit sont féminins** : tu peux **lire le genre sur la terminaison**.',
      tables: [{ title: 'Noun-building patterns', titleFr: 'Schémas de formation de noms', headers: ['Pattern', 'Base', 'Noun', 'Gender'], headersFr: ['Schéma', 'Base', 'Nom', 'Genre'],
        rows: [['verb + -ung', 'entwickeln', 'die Entwicklung', 'f'], ['adjective + -heit', 'gesund', 'die Gesundheit', 'f'], ['adjective + -keit', 'möglich', 'die Möglichkeit', 'f'], ['stem noun', 'ankommen', 'die Ankunft', 'f'], ['infinitive', 'lesen', 'das Lesen', 'n']],
        rowsFr: [['verbe + -ung', 'entwickeln', 'die Entwicklung', 'f'], ['adjectif + -heit', 'gesund', 'die Gesundheit', 'f'], ['adjectif + -keit', 'möglich', 'die Möglichkeit', 'f'], ['nom de radical', 'ankommen', 'die Ankunft', 'f'], ['infinitif', 'lesen', 'das Lesen', 'n']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Die Entwicklung', role: 'subject' }, { text: 'der Preise', role: 'other' }, { text: 'ist', role: 'verb' }, { text: 'besorgniserregend.', role: 'other' }], en: 'The development of prices is worrying.', fr: 'L’évolution des prix est préoccupante.' },
        { parts: [{ text: 'Beim Lesen', role: 'time' }, { text: 'vergesse', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'die Zeit.', role: 'accusative' }], en: 'When reading I forget the time.', fr: 'En lisant, j’oublie le temps.' },
      ],
      contrast: {
        a: { label: 'Verb', labelFr: 'Verbe', note: 'spoken style', noteFr: 'style oral', examples: [g('Die Preise entwickeln sich.', 'Prices develop.', 'Les prix évoluent.'), g('Wir wünschen, dass es besser wird.', 'We wish that it gets better.', 'Nous souhaitons que cela s’améliore.')] },
        b: { label: 'Noun', labelFr: 'Nom', note: 'formal style', noteFr: 'style formel', examples: [g('Die Entwicklung der Preise ist besorgniserregend.', 'The development of prices is worrying.', 'L’évolution des prix est préoccupante.'), g('Wir wünschen eine Verbesserung der Lage.', 'We wish for an improvement of the situation.', 'Nous souhaitons une amélioration de la situation.')] },
      },
      examples: [
        g('Die Entwicklung der Preise ist besorgniserregend.', 'The development of prices is worrying.', 'L’évolution des prix est préoccupante.'),
        g('Die Erhöhung der Mieten ärgert viele.', 'The increase in rents annoys many.', 'La hausse des loyers agace beaucoup de gens.'),
        g('Gesundheit ist wichtiger als Geld.', 'Health is more important than money.', 'La santé est plus importante que l’argent.'),
        g('Es gibt mehrere Möglichkeiten.', 'There are several possibilities.', 'Il existe plusieurs possibilités.'),
        g('Beim Lesen vergesse ich die Zeit.', 'When reading I forget the time.', 'En lisant, j’oublie le temps.'),
        g('Wir wünschen eine Verbesserung der Lage.', 'We wish for an improvement of the situation.', 'Nous souhaitons une amélioration de la situation.'),
      ],
      mistakes: [
        { wrong: 'das Entwicklung', right: 'die Entwicklung', why: '-ung nouns are feminine.', whyFr: 'Les noms en -ung sont féminins.' },
        { wrong: 'die Lesen', right: 'das Lesen', why: 'An infinitive used as a noun is neuter.', whyFr: 'Un infinitif substantivé est neutre.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b2l3-e1', word: 'Entwicklung', answer: 'die', hint: '-ung → die', hintFr: '-ung → die' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b2l3-e2', word: 'Möglichkeit', answer: 'die', hint: '-keit → die', hintFr: '-keit → die' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b2l3-e3', word: 'Lesen (reading)', answer: 'das', hint: 'infinitive as noun → das', hintFr: 'infinitif substantivé → das' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l3-e4', prompt: 'gesund → die ___ (health)', answer: 'Gesundheit', hint: 'adjective + -heit', hintFr: 'adjectif + -heit' } },

    // ───────────── 2 · Nominal style ─────────────
    { kind: 'chapter', title: 'Nominalstil: vom Satz zur Nominalgruppe', titleFr: 'Style nominal : de la phrase au groupe nominal', blurb: 'Clause → noun phrase.', blurbFr: 'Proposition → groupe nominal.' },

    { kind: 'situation', title: 'Wegen der Erhöhung …', titleFr: 'À cause de la hausse …',
      setting: 'The same news in plain and in formal style.', settingFr: 'La même nouvelle en style simple et en style formel.',
      lines: [
        line('Sprecher', 'Weil die Preise steigen, protestieren viele. → Wegen der Preissteigerung protestieren viele.', 'Because prices are rising many protest. → Because of the price increase many protest.', 'Parce que les prix montent, beaucoup protestent. → À cause de la hausse des prix, beaucoup protestent.'),
        line('Sprecher', 'Nachdem er angekommen war, rief er sofort an. → Nach seiner Ankunft rief er sofort an. Wenn man das Gesetz ändert, … → Bei einer Änderung des Gesetzes …', 'After he had arrived he called immediately. → After his arrival he called immediately. If the law is changed … → In the event of a change to the law …', 'Après son arrivée, il a immédiatement appelé. Si l’on modifie la loi, … → En cas de modification de la loi …'),
        line('Sprecher', 'Wegen der Erhöhung der Mieten protestieren viele. Nach seiner Ankunft rief er an.', 'Because of the increase in rents many protest. After his arrival he called.', 'À cause de la hausse des loyers, beaucoup protestent. Après son arrivée, il a appelé.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b2l3-nominalstil', title: 'Nominal style: clause → noun phrase', titleFr: 'Style nominal : proposition → groupe nominal',
      lead: 'Formal texts replace clauses with noun phrases: weil → wegen, nachdem → nach, wenn → bei. The subject goes into the genitive.',
      leadFr: 'Les textes formels remplacent les propositions par des groupes nominaux : weil → wegen, nachdem → nach, wenn → bei. Le sujet passe au génitif.',
      explanationMd: 'Formal texts replace **clauses** with **noun phrases** — the **subject goes into the genitive** (or after **von**): **Weil die Preise steigen, … → Wegen der Preissteigerung …** **Nachdem er angekommen war, … → Nach seiner Ankunft …** **Wenn man das Gesetz ändert, … → Bei einer Änderung des Gesetzes …** The **conjunction** becomes a **preposition**: **weil → wegen / aufgrund + genitive, nachdem → nach + dative, wenn → bei + dative, während → während + genitive, obwohl → trotz + genitive**. **Nominal style is compact**; spoken German prefers **verbs**. Learn to **read** it at B2 and **use** it in formal writing.',
      explanationMdFr: 'Les textes formels remplacent les **propositions** par des **groupes nominaux** — le **sujet passe au génitif** (ou après **von**) : **Weil die Preise steigen, … → Wegen der Preissteigerung …** **Nachdem er angekommen war, … → Nach seiner Ankunft …** **Wenn man das Gesetz ändert, … → Bei einer Änderung des Gesetzes …** La **conjonction** devient une **préposition** : **weil → wegen / aufgrund + génitif, nachdem → nach + datif, wenn → bei + datif, während → während + génitif, obwohl → trotz + génitif**. **Le style nominal est compact** ; l’allemand parlé préfère les **verbes**. Apprends à le **lire** au B2 et à l’**utiliser** dans l’écrit formel.',
      tables: [{ title: 'Clause → noun phrase', titleFr: 'Proposition → groupe nominal', headers: ['Clause (spoken)', 'Noun phrase (formal)'], headersFr: ['Proposition (oral)', 'Groupe nominal (formel)'],
        rows: [['Weil die Preise steigen, …', 'Wegen der Preissteigerung …'], ['Nachdem er angekommen war, …', 'Nach seiner Ankunft …'], ['Wenn man das Gesetz ändert, …', 'Bei einer Änderung des Gesetzes …'], ['Obwohl es regnet, …', 'Trotz des Regens …'], ['Während er arbeitet, …', 'Während der Arbeit …']],
        rowsFr: [['Weil die Preise steigen, …', 'Wegen der Preissteigerung …'], ['Nachdem er angekommen war, …', 'Nach seiner Ankunft …'], ['Wenn man das Gesetz ändert, …', 'Bei einer Änderung des Gesetzes …'], ['Obwohl es regnet, …', 'Trotz des Regens …'], ['Während er arbeitet, …', 'Während der Arbeit …']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Nach seiner Ankunft', role: 'time' }, { text: 'rief', role: 'verb' }, { text: 'er', role: 'subject' }, { text: 'sofort', role: 'time' }, { text: 'an.', role: 'verb' }], en: 'After his arrival he called immediately.', fr: 'Après son arrivée, il a immédiatement appelé.' },
        { parts: [{ text: 'Wegen der Erhöhung der Mieten', role: 'other' }, { text: 'protestieren', role: 'verb' }, { text: 'viele.', role: 'subject' }], en: 'Because of the increase in rents many protest.', fr: 'À cause de la hausse des loyers, beaucoup protestent.' },
      ],
      contrast: {
        a: { label: 'Clause', labelFr: 'Proposition', note: 'verb', noteFr: 'verbe', examples: [g('Nachdem er angekommen war, rief er an.', 'After he had arrived he called.', 'Après être arrivé, il a appelé.'), g('Weil die Preise steigen, protestieren viele.', 'Because prices are rising many protest.', 'Parce que les prix montent, beaucoup protestent.')] },
        b: { label: 'Noun phrase', labelFr: 'Groupe nominal', note: 'noun + genitive', noteFr: 'nom + génitif', examples: [g('Nach seiner Ankunft rief er an.', 'After his arrival he called.', 'Après son arrivée, il a appelé.'), g('Wegen der Preissteigerung protestieren viele.', 'Because of the price increase many protest.', 'À cause de la hausse des prix, beaucoup protestent.')] },
      },
      examples: [
        g('Weil die Preise steigen, protestieren viele. → Wegen der Preissteigerung protestieren viele.', 'Because prices are rising many protest. → Because of the price increase many protest.', 'Parce que les prix montent, beaucoup protestent. → À cause de la hausse des prix, beaucoup protestent.'),
        g('Nach seiner Ankunft rief er sofort an.', 'After his arrival he called immediately.', 'Après son arrivée, il a immédiatement appelé.'),
        g('Bei einer Änderung des Gesetzes gelten neue Regeln.', 'In the event of a change to the law new rules apply.', 'En cas de modification de la loi, de nouvelles règles s’appliquent.'),
        g('Wegen der Erhöhung der Mieten protestieren viele.', 'Because of the increase in rents many protest.', 'À cause de la hausse des loyers, beaucoup protestent.'),
        g('Trotz des Regens fand das Fest statt.', 'Despite the rain the festival took place.', 'Malgré la pluie, la fête a eu lieu.'),
        g('Während der Arbeit trinkt er Tee.', 'During work he drinks tea.', 'Pendant le travail, il boit du thé.'),
      ],
      mistakes: [
        { wrong: 'Nach er Ankunft rief er an.', right: 'Nach seiner Ankunft rief er an.', why: 'The subject becomes a possessive + noun.', whyFr: 'Le sujet devient un possessif + nom.' },
        { wrong: 'Wegen die Erhöhung der Mieten …', right: 'Wegen der Erhöhung der Mieten …', why: 'wegen takes the genitive.', whyFr: 'wegen prend le génitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l3-e5', prompt: 'Rewrite as a noun phrase: "Nachdem er angekommen war, …"', promptFr: 'Réécris en groupe nominal : « Nachdem er angekommen war, … »', options: ['Nach seiner Ankunft …', 'Wegen seiner Ankunft …', 'Bei seiner Ankunft sein …'], answer: 0, explain: '"nachdem" → "nach" + noun (Ankunft).', explainFr: '« nachdem » → « nach » + nom (Ankunft).', hint: 'nachdem → nach', hintFr: 'nachdem → nach' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l3-e6', prompt: 'ändern → die ___ (change)', answer: 'Änderung', hint: 'stem + -ung', hintFr: 'radical + -ung' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l3-e9', tokens: ['rief', 'Nach', 'seiner', 'Ankunft', 'er', 'an'], answer: ['Nach', 'seiner', 'Ankunft', 'rief', 'er', 'an'], hint: 'Noun phrase first, then verb in position 2.', hintFr: 'Groupe nominal d’abord, puis verbe en 2e position.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l3-e10', prompt: 'Which noun is NOT feminine?', promptFr: 'Quel nom n’est PAS féminin ?', options: ['die Schwierigkeit', 'das Lesen', 'die Begrüßung'], answer: 1, explain: 'Infinitives used as nouns are neuter (das).', explainFr: 'Les infinitifs substantivés sont neutres (das).', hint: '-keit and -ung are feminine.', hintFr: '-keit et -ung sont féminins.' } },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l3-e7', pairs: [{ de: 'die Entwicklung', en: 'development', fr: 'développement' }, { de: 'die Erhöhung', en: 'increase', fr: 'augmentation' }, { de: 'die Verbesserung', en: 'improvement', fr: 'amélioration' }, { de: 'die Begrüßung', en: 'greeting', fr: 'accueil' }], hint: 'Match each noun to its meaning.', hintFr: 'Associe chaque nom à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l3-e8', prompt: 'Listen. What does the sentence say?', promptFr: 'Écoute. Que dit la phrase ?', audio: { ttsText: 'Wegen der Erhöhung der Mieten protestieren viele Menschen.' }, options: ['People protest because rents are going up', 'Rents are going down', 'People are moving'], optionsFr: ['Les gens protestent car les loyers montent', 'Les loyers baissent', 'Les gens déménagent'], answer: 0, hint: 'Erhöhung = increase.', hintFr: 'Erhöhung = augmentation.' } },

    { kind: 'pronunciation', focus: 'The endings -ung, -heit, -keit are unstressed; stress the stem: "EntWICKlung", "GeSUNDheit", "MÖGlichkeit"', focusFr: 'Les terminaisons -ung, -heit, -keit sont atones ; accentue le radical : « EntWICKlung », « GeSUNDheit », « MÖGlichkeit »', items: [{ id: 'b2l3-entwicklung-pron', german: 'Entwicklung', english: 'development', french: 'développement', gender: null, syllables: ['ent', 'WICK', 'lung'], pronunciation: 'ent-VIK-loong', example: { de: 'Die Entwicklung ist positiv.', en: 'The development is positive.', fr: 'Le développement est positif.' } }, { id: 'b2l3-moeglichkeit-pron', german: 'Möglichkeit', english: 'possibility', french: 'possibilité', gender: null, syllables: ['MÖG', 'lich', 'keit'], pronunciation: 'MOEG-likh-kite', example: { de: 'Das ist eine Möglichkeit.', en: 'That is one possibility.', fr: 'C’est une possibilité.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **form nouns** with **-ung, -heit, -keit** and the infinitive, **know their gender**, and **rewrite clauses as noun phrases** in formal style. 🎉',
      summaryFr: 'Tu sais maintenant **former des noms** avec **-ung, -heit, -keit** et l’infinitif, **connaître leur genre**, et **réécrire des propositions en groupes nominaux** dans un style formel. 🎉',
      card: { title: 'Nominalisation on one page', titleFr: 'La nominalisation en une page', sections: [
        { heading: 'Endings', headingFr: 'Terminaisons', rows: [g('-ung · -heit · -keit = die', 'feminine', 'féminin'), g('das Lesen = das', 'infinitive as noun', 'infinitif substantivé')] },
        { heading: 'Clause → noun phrase', headingFr: 'Proposition → groupe nominal', rows: [g('weil → wegen · nachdem → nach · wenn → bei', 'subject → genitive / possessive', 'sujet → génitif / possessif')] },
      ] } },
  ],
};

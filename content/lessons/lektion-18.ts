import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion18: Lesson = {
  id: 'l18', level: 'A1', module: 5, number: 21,
  title: { de: 'Feste, Ferien und „denn“', en: 'Holidays, events and "denn"', fr: 'Fêtes, vacances et « denn »' },
  theme: 'Holidays, festivals and giving reasons with "denn"', themeFr: 'Vacances, fêtes et raisons avec « denn »',
  goals: ['Talk about when with vor / nach / in + dative', 'Talk about how long with für + accusative', 'Give a reason with "denn"', 'Describe a holiday with war / hatte', 'Name seasons, holidays and holiday things'], goalsFr: ['Dire quand avec vor / nach / in + datif', 'Dire combien de temps avec für + accusatif', 'Donner une raison avec « denn »', 'Décrire des vacances avec war / hatte', 'Nommer les saisons, les fêtes et les objets de vacances'],
  canDo: g('Ich kann über Ferien sprechen, Zeitangaben machen, einen Grund mit denn nennen und von einem Urlaub erzählen.', 'I can talk about holidays, give time expressions, give a reason with denn and tell about a holiday.', 'Je sais parler des vacances, donner des repères de temps, donner une raison avec denn et raconter des vacances.'),
  steps: [
    { kind: 'intro', title: 'Feste, Ferien und „denn“ 🏖️', titleFr: 'Fêtes, vacances et « denn » 🏖️',
      scene: 'Two friends talk about the coming holidays and a past trip.', sceneFr: 'Deux amis parlent des vacances à venir et d’un voyage passé.',
      goals: ['Say when with vor, nach, in and für', 'Give a reason with denn', 'Tell about a holiday with war and hatte', 'Name seasons and holiday things'],
      goalsFr: ['Dire quand avec vor, nach, in et für', 'Donner une raison avec denn', 'Raconter des vacances avec war et hatte', 'Nommer les saisons et les choses des vacances'] },

    // ───────────── 1 · Time ─────────────
    { kind: 'chapter', title: 'Wann und wie lange?', titleFr: 'Quand et combien de temps ?', blurb: 'vor, nach, in and für.', blurbFr: 'vor, nach, in et für.' },

    { kind: 'situation', title: 'Vor den Ferien', titleFr: 'Avant les vacances',
      setting: 'Mara and Ben talk about the coming holidays.', settingFr: 'Mara et Ben parlent des vacances à venir.',
      lines: [
        line('Ben', 'Wann beginnen die Ferien, Mara?', 'When do the holidays start, Mara?', 'Quand commencent les vacances, Mara ?'),
        line('Mara', 'In einer Woche! Wir fahren für zwei Wochen ans Meer.', 'In a week! We’re going to the sea for two weeks.', 'Dans une semaine ! Nous allons à la mer pour deux semaines.'),
        line('Ben', 'Toll! Vor der Reise packe ich meinen Koffer.', 'Great! Before the trip I’ll pack my suitcase.', 'Super ! Avant le voyage, je ferai ma valise.'),
        line('Mara', 'Nach dem Urlaub bin ich bestimmt müde.', 'After the holiday I’ll certainly be tired.', 'Après les vacances, je serai sûrement fatiguée.'),
        line('Ben', 'Am Strand ist es sonnig, aber am Meer ist es oft windig.', 'At the beach it’s sunny, but by the sea it’s often windy.', 'À la plage il fait beau, mais au bord de la mer il y a souvent du vent.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l18-e13', prompt: 'When do the holidays begin?', promptFr: 'Quand commencent les vacances ?', options: ['In a week', 'Today', 'In a month'], optionsFr: ['Dans une semaine', 'Aujourd’hui', 'Dans un mois'], answer: 0, explain: 'Mara says: “In einer Woche!”', explainFr: 'Mara dit : « In einer Woche ! »', hint: 'Look at Mara’s first answer.', hintFr: 'Regarde la première réponse de Mara.' } },

    { kind: 'wordgroup', title: 'Ferien und Feste', titleFr: 'Vacances et fêtes',
      items: [{ id: 'l18-ferien', german: 'die Ferien (Pl.)', english: 'the holidays / school break', french: 'les vacances', gender: 'die', syllables: ['FE', 'ri', 'en'], pronunciation: 'dee FAY-ree-en', example: { de: 'Die Ferien beginnen bald.', en: 'The holidays start soon.', fr: 'Les vacances commencent bientôt.' } }, { id: 'l18-urlaub', german: 'der Urlaub', english: 'the vacation (from work)', french: 'les congés / le séjour de vacances', gender: 'der', syllables: ['UR', 'laub'], pronunciation: 'dair OOR-lowp', example: { de: 'Mein Urlaub ist kurz.', en: 'My vacation is short.', fr: 'Mes congés sont courts.' } }, { id: 'l18-fest', german: 'das Fest', english: 'the party / festival', french: 'la fête', gender: 'das', syllables: ['FEST'], pronunciation: 'dahs fest', example: { de: 'Das Fest ist am Samstag.', en: 'The party is on Saturday.', fr: 'La fête a lieu samedi.' } }, { id: 'l18-feiertag', german: 'der Feiertag', english: 'the public holiday', french: 'le jour férié', gender: 'der', syllables: ['FEI', 'er', 'tag'], pronunciation: 'dair FY-er-tahk', example: { de: 'Montag ist ein Feiertag.', en: 'Monday is a public holiday.', fr: 'Lundi est un jour férié.' } }, { id: 'l18-weihnachten', german: 'Weihnachten', english: 'Christmas', french: 'Noël', gender: null, syllables: ['WEIH', 'nach', 'ten'], pronunciation: 'VY-nakh-ten', example: { de: 'Zu Weihnachten kochen wir viel.', en: 'At Christmas we cook a lot.', fr: 'À Noël, nous cuisinons beaucoup.' } }] },

    { kind: 'wordgroup', title: 'Am Meer', titleFr: 'Au bord de la mer',
      items: [{ id: 'l18-strand', german: 'der Strand', english: 'the beach', french: 'la plage', gender: 'der', syllables: ['STRAND'], pronunciation: 'dair shtrahnt', example: { de: 'Der Strand ist sehr schön.', en: 'The beach is very beautiful.', fr: 'La plage est très belle.' } }, { id: 'l18-meer', german: 'das Meer', english: 'the sea', french: 'la mer', gender: 'das', syllables: ['MEER'], pronunciation: 'dahs mair', example: { de: 'Das Meer ist heute warm.', en: 'The sea is warm today.', fr: 'La mer est chaude aujourd’hui.' } }, { id: 'l18-koffer', german: 'der Koffer', english: 'the suitcase', french: 'la valise', gender: 'der', syllables: ['KOF', 'fer'], pronunciation: 'dair KOF-fer', example: { de: 'Mein Koffer ist schwer.', en: 'My suitcase is heavy.', fr: 'Ma valise est lourde.' } }, { id: 'l18-sonnig', german: 'sonnig', english: 'sunny', french: 'ensoleillé', gender: null, syllables: ['SON', 'nig'], pronunciation: 'ZON-nikh', example: { de: 'Heute ist es sonnig.', en: 'Today it is sunny.', fr: 'Aujourd’hui, il fait soleil.' } }, { id: 'l18-windig', german: 'windig', english: 'windy', french: 'venteux', gender: null, syllables: ['WIN', 'dig'], pronunciation: 'VIN-dikh', example: { de: 'Am Meer ist es oft windig.', en: 'By the sea it is often windy.', fr: 'Au bord de la mer, il y a souvent du vent.' } }] },

    { kind: 'wordgroup', title: 'Jahreszeiten und Woche', titleFr: 'Les saisons et la semaine',
      items: [{ id: 'l18-fruehling', german: 'der Frühling', english: 'spring', french: 'le printemps', gender: 'der', syllables: ['FRÜH', 'ling'], pronunciation: 'dair FREW-ling', example: { de: 'Im Frühling ist es schön.', en: 'In spring it is lovely.', fr: 'Au printemps, c’est beau.' } }, { id: 'l18-herbst', german: 'der Herbst', english: 'autumn / fall', french: 'l’automne', gender: 'der', syllables: ['HERBST'], pronunciation: 'dair hairpst', example: { de: 'Im Herbst regnet es oft.', en: 'In autumn it often rains.', fr: 'En automne, il pleut souvent.' } }, { id: 'l18-woche', german: 'die Woche', english: 'the week', french: 'la semaine', gender: 'die', syllables: ['WO', 'che'], pronunciation: 'dee VOKH-eh', example: { de: 'Eine Woche hat sieben Tage.', en: 'A week has seven days.', fr: 'Une semaine a sept jours.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'l18-e5', pairs: [{ de: 'in einer Woche', en: 'in a week (future)', fr: 'dans une semaine' }, { de: 'vor einer Woche', en: 'a week ago', fr: 'il y a une semaine' }, { de: 'für eine Woche', en: 'for one week', fr: 'pour une semaine' }, { de: 'nach einer Woche', en: 'after one week', fr: 'après une semaine' }], hint: 'Match each time phrase with its meaning.', hintFr: 'Associe chaque expression de temps à son sens.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l18-e12', word: 'Meer', answer: 'das', hint: 'Words ending in -er can be any gender — learn it with its article!', hintFr: 'Les mots en -er peuvent avoir n’importe quel genre — apprends-le avec son article !' } },

    { kind: 'grammar', note: {
      id: 'l18-zeit', title: 'vor, nach, in and für: when and how long', titleFr: 'vor, nach, in et für : quand et combien de temps',
      lead: 'vor = ago, nach = after, in = in (from now), all with the dative. für = for (a length of time) with the accusative.',
      leadFr: 'vor = il y a, nach = après, in = dans (à partir de maintenant), tous avec le datif. für = pendant (une durée) avec l’accusatif.',
      explanationMd: 'Four little words answer **When?** and **How long?**: **vor** + dative = before / **ago**; **nach** + dative = **after**; **in** + dative = **in** (from now); **für** + accusative = **for** (a planned length of time). Dative articles: **dem** (der / das), **der** (die); plural nouns add **-n**: vor drei Tage**n**.',
      explanationMdFr: 'Quatre petits mots répondent à **Quand ?** et **Combien de temps ?** : **vor** + datif = avant / **il y a** ; **nach** + datif = **après** ; **in** + datif = **dans** (à partir de maintenant) ; **für** + accusatif = **pendant** (une durée prévue). Articles au datif : **dem** (der / das), **der** (die) ; les noms au pluriel ajoutent **-n** : vor drei Tage**n**.',
      tables: [{ title: 'Four time words', titleFr: 'Quatre mots de temps', headers: ['Word', 'Meaning', 'Case', 'Example'], headersFr: ['Mot', 'Sens', 'Cas', 'Exemple'],
        rows: [['vor', 'ago / before', 'dative', 'vor drei Tagen, vor dem Fest'], ['nach', 'after', 'dative', 'nach dem Urlaub'], ['in', 'in (from now)', 'dative', 'in einer Woche'], ['für', 'for (duration)', 'accusative', 'für zwei Wochen']],
        rowsFr: [['vor', 'il y a / avant', 'datif', 'vor drei Tagen, vor dem Fest'], ['nach', 'après', 'datif', 'nach dem Urlaub'], ['in', 'dans', 'datif', 'in einer Woche'], ['für', 'pendant', 'accusatif', 'für zwei Wochen']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Die Ferien', role: 'subject' }, { text: 'beginnen', role: 'verb' }, { text: 'in einer Woche.', role: 'time' }], en: 'The holidays start in a week.', fr: 'Les vacances commencent dans une semaine.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'bleiben', role: 'verb' }, { text: 'für zwei Wochen', role: 'time' }, { text: 'in Italien.', role: 'place' }], en: 'We are staying in Italy for two weeks.', fr: 'Nous restons en Italie pendant deux semaines.' },
      ],
      contrast: {
        a: { label: 'in = from now', labelFr: 'in = à partir de maintenant', note: 'future', noteFr: 'futur', examples: [g('Die Ferien beginnen in einer Woche.', 'The holidays start in a week.', 'Les vacances commencent dans une semaine.'), g('In einem Monat fahre ich.', 'In a month I am leaving.', 'Dans un mois, je pars.')] },
        b: { label: 'vor = ago', labelFr: 'vor = il y a', note: 'past', noteFr: 'passé', examples: [g('Vor drei Tagen war das Wetter schön.', 'Three days ago the weather was nice.', 'Il y a trois jours, il faisait beau.'), g('Vor einer Woche war ich hier.', 'A week ago I was here.', 'Il y a une semaine, j’étais ici.')] },
      },
      examples: [
        g('Die Ferien beginnen in einer Woche.', 'The holidays start in a week.', 'Les vacances commencent dans une semaine.'),
        g('Vor drei Tagen war das Wetter schön.', 'Three days ago the weather was nice.', 'Il y a trois jours, il faisait beau.'),
        g('Wir bleiben für zwei Wochen in Italien.', 'We are staying in Italy for two weeks.', 'Nous restons en Italie pendant deux semaines.'),
        g('Nach dem Urlaub bin ich müde.', 'After the holiday I am tired.', 'Après les vacances, je suis fatigué.'),
        g('Vor dem Fest kaufen wir ein.', 'Before the party we go shopping.', 'Avant la fête, nous faisons les courses.'),
        g('In einem Monat ist Weihnachten.', 'Christmas is in a month.', 'Noël, c’est dans un mois.'),
      ],
      mistakes: [
        { wrong: 'Vor drei Tage war das Wetter schön.', right: 'Vor drei Tagen war das Wetter schön.', why: 'After vor, a plural noun takes -n: Tagen.', whyFr: 'Après vor, un nom au pluriel prend -n : Tagen.' },
        { wrong: 'Wir bleiben in zwei Wochen in Italien. (meaning: for two weeks)', right: 'Wir bleiben für zwei Wochen in Italien.', why: 'A length of time is für, not in.', whyFr: 'Une durée se dit für, pas in.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l18-e1', prompt: 'How do you say "three days ago"?', promptFr: 'Comment dit-on « il y a trois jours » ?', options: ['in drei Tagen', 'vor drei Tagen', 'für drei Tage'], answer: 1, explain: '"vor" + dative looks back in time: vor drei Tagen.', explainFr: '« vor » + datif regarde en arrière : vor drei Tagen.', hint: 'You are looking back, not forward.', hintFr: 'Tu regardes en arrière, pas vers l’avenir.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l18-e2', prompt: 'Die Ferien beginnen ___ einer Woche. (in a week)', promptFr: 'Die Ferien beginnen ___ einer Woche. (dans une semaine)', answer: 'in', hint: 'Time from now: in + dative', hintFr: 'Temps à partir de maintenant : in + datif' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l18-e3', prompt: 'Wir bleiben ___ zwei Wochen in Italien. (for two weeks)', promptFr: 'Wir bleiben ___ zwei Wochen in Italien. (pendant deux semaines)', answer: 'für', hint: 'A planned duration takes "für".', hintFr: 'Une durée prévue s’exprime avec « für ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l18-e4', prompt: 'Complete: "Nach ___ Urlaub bin ich müde."', promptFr: 'Complète : « Nach ___ Urlaub bin ich müde. »', options: ['dem', 'den', 'der'], answer: 0, explain: '"der Urlaub" is masculine, so nach + dative gives "dem".', explainFr: '« der Urlaub » est masculin ; nach + datif donne « dem ».', hint: 'Dative of der-words: dem.', hintFr: 'Datif des mots en der : dem.' } },

    // ───────────── 2 · denn ─────────────
    { kind: 'chapter', title: 'Gründe mit denn', titleFr: 'Les raisons avec denn', blurb: 'denn does not change the word order.', blurbFr: 'denn ne change pas l’ordre des mots.' },

    { kind: 'situation', title: 'Warum bleibst du?', titleFr: 'Pourquoi restes-tu ?',
      setting: 'Mara and Ben decide what to do.', settingFr: 'Mara et Ben décident quoi faire.',
      lines: [
        line('Mara', 'Gehen wir an den Strand?', 'Shall we go to the beach?', 'On va à la plage ?'),
        line('Ben', 'Nein, ich bleibe im Hotel, denn es ist windig und kalt.', 'No, I’m staying in the hotel, because it’s windy and cold.', 'Non, je reste à l’hôtel, car il y a du vent et il fait froid.'),
        line('Mara', 'Schade. Ich mag den Sommer, denn die Sonne scheint lange.', 'Pity. I like summer, because the sun shines for a long time.', 'Dommage. J’aime l’été, car le soleil brille longtemps.'),
        line('Ben', 'Ich packe jetzt den Koffer, denn morgen fahren wir.', 'I’m packing the suitcase now, because we leave tomorrow.', 'Je fais la valise maintenant, car nous partons demain.'),
      ],
      words: [{ id: 'l18-denn', german: 'denn', english: 'because / for (gives a reason)', french: 'car / parce que', gender: null, syllables: ['DENN'], pronunciation: 'den', example: { de: 'Ich bleibe hier, denn ich bin müde.', en: 'I am staying here, because I am tired.', fr: 'Je reste ici, car je suis fatigué.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l18-e14', prompt: 'Why does Ben stay in the hotel?', promptFr: 'Pourquoi Ben reste-t-il à l’hôtel ?', options: ['It is windy and cold', 'He is tired', 'He has no money'], optionsFr: ['Il y a du vent et il fait froid', 'Il est fatigué', 'Il n’a pas d’argent'], answer: 0, explain: 'He says: “denn es ist windig und kalt.”', explainFr: 'Il dit : « denn es ist windig und kalt. »', hint: 'Look for “denn”.', hintFr: 'Cherche « denn ».' } },

    { kind: 'grammar', note: {
      id: 'l18-denn-note', title: 'denn: giving a reason', titleFr: 'denn : donner une raison',
      lead: 'denn does not change the word order: after it, the verb stays second. Put a comma before it.',
      leadFr: 'denn ne change pas l’ordre des mots : après lui, le verbe reste en deuxième. Mets une virgule avant.',
      explanationMd: '**denn** (because, for) joins two **main clauses** and gives the **reason**. The good news: **denn does not change the word order**. After **denn** the clause is a normal sentence, with the **verb second**: **Ich bleibe zu Hause, denn es regnet.** Put a **comma** before **denn**. **und, oder, aber, denn** all work the same way.',
      explanationMdFr: '**denn** (car) relie deux **propositions principales** et donne la **raison**. Bonne nouvelle : **denn ne change pas l’ordre des mots**. Après **denn**, la proposition est une phrase normale, avec le **verbe en deuxième** : **Ich bleibe zu Hause, denn es regnet.** Mets une **virgule** avant **denn**. **und, oder, aber, denn** fonctionnent tous de la même façon.',
      tables: [{ title: 'Joining two main clauses', titleFr: 'Relier deux principales', headers: ['Word', 'Meaning', 'Example'], headersFr: ['Mot', 'Sens', 'Exemple'],
        rows: [['und', 'and', 'Ich packe, und er kocht.'], ['oder', 'or', 'Gehen wir ans Meer, oder bleiben wir hier?'], ['aber', 'but', 'Es ist sonnig, aber es ist windig.'], ['denn', 'because', 'Ich bleibe hier, denn ich bin müde.']],
        rowsFr: [['und', 'et', 'Ich packe, und er kocht.'], ['oder', 'ou', 'Gehen wir ans Meer, oder bleiben wir hier?'], ['aber', 'mais', 'Es ist sonnig, aber es ist windig.'], ['denn', 'car', 'Ich bleibe hier, denn ich bin müde.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bleibe', role: 'verb' }, { text: 'zu Hause,', role: 'place' }, { text: 'denn', role: 'connector' }, { text: 'es', role: 'subject' }, { text: 'regnet.', role: 'verb' }], en: 'I stay at home because it is raining.', fr: 'Je reste à la maison car il pleut.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'packe', role: 'verb' }, { text: 'den Koffer,', role: 'accusative' }, { text: 'denn', role: 'connector' }, { text: 'morgen', role: 'time' }, { text: 'fahren', role: 'verb' }, { text: 'wir.', role: 'subject' }], en: 'I am packing the suitcase because we leave tomorrow.', fr: 'Je fais la valise car nous partons demain.' },
      ],
      contrast: {
        a: { label: 'denn (reason)', labelFr: 'denn (raison)', note: 'the reason follows', noteFr: 'la raison suit', examples: [g('Ich bleibe zu Hause, denn es regnet.', 'I stay at home because it is raining.', 'Je reste à la maison car il pleut.'), g('Ich mag den Sommer, denn die Sonne scheint lange.', 'I like summer because the sun shines for a long time.', 'J’aime l’été car le soleil brille longtemps.')] },
        b: { label: 'aber (contrast)', labelFr: 'aber (opposition)', note: 'the opposite follows', noteFr: 'l’opposé suit', examples: [g('Es ist sonnig, aber es ist windig.', 'It is sunny, but it is windy.', 'Il fait beau, mais il y a du vent.'), g('Ich bin müde, aber ich komme.', 'I am tired, but I am coming.', 'Je suis fatigué, mais je viens.')] },
      },
      examples: [
        g('Ich mag den Sommer, denn die Sonne scheint lange.', 'I like summer because the sun shines for a long time.', 'J’aime l’été car le soleil brille longtemps.'),
        g('Wir bleiben im Hotel, denn es ist windig und kalt.', 'We are staying in the hotel because it is windy and cold.', 'Nous restons à l’hôtel car il y a du vent et il fait froid.'),
        g('Ich packe den Koffer, denn morgen fahren wir.', 'I am packing the suitcase because we leave tomorrow.', 'Je fais la valise car nous partons demain.'),
        g('Ich bleibe zu Hause, denn es regnet.', 'I stay at home because it is raining.', 'Je reste à la maison car il pleut.'),
        g('Ich bleibe hier, denn ich bin müde.', 'I am staying here because I am tired.', 'Je reste ici car je suis fatigué.'),
        g('Heute bleibe ich zu Hause, denn ich habe Fieber.', 'Today I stay at home because I have a fever.', 'Aujourd’hui je reste à la maison car j’ai de la fièvre.'),
      ],
      mistakes: [
        { wrong: 'Ich bleibe hier denn ich bin müde.', right: 'Ich bleibe hier, denn ich bin müde.', why: 'Put a comma before denn.', whyFr: 'Mets une virgule avant denn.' },
        { wrong: 'Ich bleibe hier, denn ich müde bin.', right: 'Ich bleibe hier, denn ich bin müde.', why: 'After denn the verb stays second (not at the end).', whyFr: 'Après denn, le verbe reste en deuxième (pas à la fin).' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l18-e6', tokens: ['denn', 'es', 'regnet', 'Ich', 'bleibe', 'zu', 'Hause,'], answer: ['Ich', 'bleibe', 'zu', 'Hause,', 'denn', 'es', 'regnet'], hint: 'Main clause first, then "denn" with a normal sentence.', hintFr: 'D’abord la proposition principale, puis « denn » avec une phrase normale.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l18-e7', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Ich bleibe hier, denn ich bin müde.', 'Ich bleibe hier, denn ich müde bin.', 'Ich bleibe hier, denn bin ich müde.'], answer: 0, explain: 'After "denn" the word order does not change: ich bin müde.', explainFr: 'Après « denn », l’ordre des mots ne change pas : ich bin müde.', hint: 'The verb stays in second position.', hintFr: 'Le verbe reste en deuxième position.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l18-e10', prompt: 'Listen. Why were they at the beach?', promptFr: 'Écoute. Pourquoi étaient-ils à la plage ?', audio: { ttsText: 'Vor drei Tagen waren wir am Strand, denn es war sonnig.' }, options: ['It was sunny', 'It was windy', 'It was a holiday'], optionsFr: ['Il faisait soleil', 'Il y avait du vent', 'C’était un jour férié'], answer: 0, hint: 'Listen for the word after "denn".', hintFr: 'Écoute le mot après « denn ».' } },

    // ───────────── 3 · Telling about a holiday ─────────────
    { kind: 'chapter', title: 'Vom Urlaub erzählen: war und hatte', titleFr: 'Raconter ses vacances : war et hatte', blurb: 'The past of sein and haben.', blurbFr: 'Le passé de sein et haben.' },

    { kind: 'situation', title: 'Wie war der Urlaub?', titleFr: 'Comment étaient les vacances ?',
      setting: 'Ben asks Mara about her holiday.', settingFr: 'Ben interroge Mara sur ses vacances.',
      lines: [
        line('Ben', 'Wie war dein Urlaub, Mara?', 'How was your holiday, Mara?', 'Comment étaient tes vacances, Mara ?'),
        line('Mara', 'Der Urlaub war schön, aber das Wetter war schlecht.', 'The holiday was nice, but the weather was bad.', 'Les vacances étaient belles, mais le temps était mauvais.'),
        line('Ben', 'Wo wart ihr?', 'Where were you?', 'Où étiez-vous ?'),
        line('Mara', 'Wir waren zwei Wochen am Meer. Im Hotel hatten wir ein großes Zimmer.', 'We were at the sea for two weeks. In the hotel we had a big room.', 'Nous étions deux semaines à la mer. À l’hôtel, nous avions une grande chambre.'),
        line('Ben', 'Und das Essen?', 'And the food?', 'Et la nourriture ?'),
        line('Mara', 'Es war sehr lecker!', 'It was very tasty!', 'C’était très bon !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l18-e15', prompt: 'How was the weather on Mara’s holiday?', promptFr: 'Comment était le temps pendant les vacances de Mara ?', options: ['Bad', 'Great', 'Windy and warm'], optionsFr: ['Mauvais', 'Superbe', 'Venteux et chaud'], answer: 0, explain: 'She says: “Das Wetter war schlecht.”', explainFr: 'Elle dit : « Das Wetter war schlecht. »', hint: 'Look for “Wetter”.', hintFr: 'Cherche « Wetter ».' } },

    { kind: 'grammar', note: {
      id: 'l18-war-hatte', title: 'war and hatte: telling about the past', titleFr: 'war et hatte : raconter le passé',
      lead: 'war = was, hatte = had. ich and er/sie/es share the same form.',
      leadFr: 'war = était, hatte = avait. ich et er/sie/es ont la même forme.',
      explanationMd: 'To tell about a holiday that is over, use the past forms of **sein** and **haben**: **war** and **hatte**. They are perfect for **weather, places and feelings**: **Es war sonnig. Wir hatten Glück.** Note that **ich** and **er/sie/es** have the **same form**.',
      explanationMdFr: 'Pour raconter des vacances terminées, utilise les formes du passé de **sein** et **haben** : **war** et **hatte**. Elles conviennent parfaitement au **temps, aux lieux et aux sentiments** : **Es war sonnig. Wir hatten Glück.** Note que **ich** et **er/sie/es** ont la **même forme**.',
      tables: [
        { title: 'war (was)', titleFr: 'war (était)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['war', 'warst', 'war', 'waren', 'wart', 'waren']], rowsFr: [['war', 'warst', 'war', 'waren', 'wart', 'waren']], highlightCol: 0 },
        { title: 'hatte (had)', titleFr: 'hatte (avait)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten']], rowsFr: [['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten']], highlightCol: 0 },
      ],
      anatomy: [
        { parts: [{ text: 'Der Urlaub', role: 'subject' }, { text: 'war', role: 'verb' }, { text: 'schön.', role: 'other' }], en: 'The holiday was nice.', fr: 'Les vacances étaient belles.' },
        { parts: [{ text: 'Im Hotel', role: 'place' }, { text: 'hatten', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'ein großes Zimmer.', role: 'accusative' }], en: 'In the hotel we had a big room.', fr: 'À l’hôtel, nous avions une grande chambre.' },
      ],
      contrast: {
        a: { label: 'war (sein)', labelFr: 'war (sein)', note: 'was / were: place, weather, state', noteFr: 'était : lieu, temps, état', examples: [g('Wir waren zwei Wochen am Meer.', 'We were at the sea for two weeks.', 'Nous étions deux semaines à la mer.'), g('Es war sonnig.', 'It was sunny.', 'Il faisait beau.')] },
        b: { label: 'hatte (haben)', labelFr: 'hatte (haben)', note: 'had: things, luck, time', noteFr: 'avait : choses, chance, temps', examples: [g('Im Hotel hatten wir ein großes Zimmer.', 'In the hotel we had a big room.', 'À l’hôtel, nous avions une grande chambre.'), g('Wir hatten Glück.', 'We were lucky.', 'Nous avons eu de la chance.')] },
      },
      examples: [
        g('Der Urlaub war schön, aber das Wetter war schlecht.', 'The holiday was nice, but the weather was bad.', 'Les vacances étaient belles, mais le temps était mauvais.'),
        g('Wir waren zwei Wochen am Meer.', 'We were at the sea for two weeks.', 'Nous étions deux semaines à la mer.'),
        g('Im Hotel hatten wir ein großes Zimmer.', 'In the hotel we had a big room.', 'À l’hôtel, nous avions une grande chambre.'),
        g('Es war sehr lecker!', 'It was very tasty!', 'C’était très bon !'),
        g('Ich hatte Glück.', 'I was lucky.', 'J’ai eu de la chance.'),
        g('Wo wart ihr?', 'Where were you?', 'Où étiez-vous ?'),
        g('Gestern war ich müde.', 'Yesterday I was tired.', 'Hier, j’étais fatigué.'),
      ],
      mistakes: [
        { wrong: 'Ich warst am Meer.', right: 'Ich war am Meer.', why: 'ich takes war, without -st.', whyFr: 'ich prend war, sans -st.' },
        { wrong: 'Wir waren Glück.', right: 'Wir hatten Glück.', why: 'Glück haben: use hatte, not war.', whyFr: 'Glück haben : utilise hatte, pas war.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l18-e8', prompt: 'Der Urlaub ___ schön, aber das Wetter war schlecht. (sein, past)', promptFr: 'Der Urlaub ___ schön, aber das Wetter war schlecht. (sein, passé)', answer: 'war', hint: 'er/sie/es → war', hintFr: 'er/sie/es → war' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l18-e9', prompt: 'Im Hotel ___ wir ein großes Zimmer. (haben, past)', promptFr: 'Im Hotel ___ wir ein großes Zimmer. (haben, passé)', answer: 'hatten', hint: 'wir → hatten', hintFr: 'wir → hatten' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l18-e11', prompt: 'Listen. When do they leave?', promptFr: 'Écoute. Quand partent-ils ?', audio: { ttsText: 'Wir fahren in einer Woche in die Ferien.' }, options: ['In a week', 'A week ago', 'For a week'], optionsFr: ['Dans une semaine', 'Il y a une semaine', 'Pour une semaine'], answer: 0, hint: 'Listen for "in einer Woche".', hintFr: 'Écoute « in einer Woche ».' } },

    { kind: 'pronunciation', focus: 'v sounds like "f" in "vor", w sounds like English "v" in "Woche"', focusFr: 'v se prononce « f » dans « vor », w se prononce « v » dans « Woche »', items: [{ id: 'l18-vor-pron', german: 'vor', english: 'before / ago', french: 'avant / il y a', gender: null, syllables: ['VOR'], pronunciation: 'fohr', example: { de: 'Vor einer Woche war ich hier.', en: 'A week ago I was here.', fr: 'Il y a une semaine, j’étais ici.' } }, { id: 'l18-woche-pron', german: 'die Woche', english: 'the week', french: 'la semaine', gender: 'die', syllables: ['WO', 'che'], pronunciation: 'dee VOKH-eh', example: { de: 'Diese Woche bin ich hier.', en: 'This week I am here.', fr: 'Cette semaine, je suis ici.' } }, { id: 'l18-ferien-pron', german: 'die Ferien', english: 'the holidays', french: 'les vacances', gender: 'die', syllables: ['FE', 'ri', 'en'], pronunciation: 'dee FAY-ree-en', example: { de: 'Wir haben drei Wochen Ferien.', en: 'We have three weeks of holidays.', fr: 'Nous avons trois semaines de vacances.' } }, { id: 'l18-fruehling-pron', german: 'der Frühling', english: 'spring', french: 'le printemps', gender: 'der', syllables: ['FRÜH', 'ling'], pronunciation: 'dair FREW-ling', example: { de: 'Im Frühling ist es warm.', en: 'In spring it is warm.', fr: 'Au printemps, il fait doux.' } }, { id: 'l18-weihnachten-pron', german: 'Weihnachten', english: 'Christmas', french: 'Noël', gender: null, syllables: ['WEIH', 'nach', 'ten'], pronunciation: 'VY-nakh-ten', example: { de: 'Frohe Weihnachten!', en: 'Merry Christmas!', fr: 'Joyeux Noël !' } }] },

    { kind: 'wrapup',
      summary: 'You can now say **when** and **how long** with **vor, nach, in, für**, give a reason with **denn** (verb stays second), and tell about a holiday with **war** and **hatte**. 🎉',
      summaryFr: 'Tu sais maintenant dire **quand** et **combien de temps** avec **vor, nach, in, für**, donner une raison avec **denn** (le verbe reste en deuxième), et raconter des vacances avec **war** et **hatte**. 🎉',
      card: { title: 'Lesson 21 on one page', titleFr: 'La leçon 21 en une page', sections: [
        { heading: 'Time', headingFr: 'Le temps', rows: [g('vor drei Tagen', 'three days ago', 'il y a trois jours'), g('in einer Woche', 'in a week', 'dans une semaine'), g('nach dem Urlaub', 'after the holiday', 'après les vacances'), g('für zwei Wochen', 'for two weeks', 'pendant deux semaines')] },
        { heading: 'denn', headingFr: 'denn', rows: [g('Ich bleibe hier, denn ich bin müde.', 'comma, verb stays second', 'virgule, verbe en deuxième')] },
        { heading: 'war and hatte', headingFr: 'war et hatte', rows: [g('ich war, du warst, wir waren', 'was / were', 'étais / étions'), g('ich hatte, du hattest, wir hatten', 'had', 'avais / avions')] },
      ] } },
  ],
};

import type { Lesson } from '../types';

export const a2lektion4: Lesson = {
  id: 'a2-l4', level: 'A2', module: 2, number: 4,
  title: { de: 'Vergleiche', en: 'Comparisons', fr: 'Les comparaisons' },
  theme: 'Comparing things with the comparative and superlative',
  themeFr: 'Comparer avec le comparatif et le superlatif',
  goals: ['Compare two things with "…-er als"', 'Say the most with "am …-sten"', 'Use irregular forms gut/besser/am besten', 'Say "just as … as" with "genauso … wie"'],
  goalsFr: ['Comparer deux choses avec « …-er als »', 'Dire le plus avec « am …-sten »', 'Utiliser les formes irrégulières gut/besser/am besten', 'Dire « aussi … que » avec « genauso … wie »'],
  steps: [
    { kind: 'intro', title: 'Größer, schneller, besser 📈', titleFr: 'Plus grand, plus rapide, meilleur 📈',
      scene: 'Comparing cities, prices, and preferences.', sceneFr: 'On compare des villes, des prix et des préférences.',
      goals: ['Form the comparative (…-er als)', 'Form the superlative (am …-sten)', 'Use gut/besser/am besten and gern/lieber/am liebsten', 'Compare equals with "genauso … wie"'],
      goalsFr: ['Former le comparatif (…-er als)', 'Former le superlatif (am …-sten)', 'Utiliser gut/besser/am besten et gern/lieber/am liebsten', 'Comparer des égaux avec « genauso … wie »'] },

    { kind: 'vocab', item: { id: 'a2l4-vergleich', german: 'der Vergleich', english: 'the comparison', french: 'la comparaison', gender: 'der', syllables: ['ver', 'GLEICH'], pronunciation: 'dair fair-GLYESH', example: { de: 'Ein Vergleich hilft.', en: 'A comparison helps.', fr: 'Une comparaison aide.' } } },
    { kind: 'vocab', item: { id: 'a2l4-gross', german: 'groß', english: 'big / tall', french: 'grand', gender: null, syllables: ['GROSS'], pronunciation: 'grohss', example: { de: 'Berlin ist groß.', en: 'Berlin is big.', fr: 'Berlin est grande.' } } },
    { kind: 'vocab', item: { id: 'a2l4-klein', german: 'klein', english: 'small', french: 'petit', gender: null, syllables: ['KLEIN'], pronunciation: 'kline', example: { de: 'Mein Dorf ist klein.', en: 'My village is small.', fr: 'Mon village est petit.' } } },
    { kind: 'vocab', item: { id: 'a2l4-schnell', german: 'schnell', english: 'fast', french: 'rapide', gender: null, syllables: ['SCHNELL'], pronunciation: 'shnell', example: { de: 'Der Zug ist schnell.', en: 'The train is fast.', fr: 'Le train est rapide.' } } },
    { kind: 'vocab', item: { id: 'a2l4-langsam', german: 'langsam', english: 'slow', french: 'lent', gender: null, syllables: ['LANG', 'sam'], pronunciation: 'LAHNG-zahm', example: { de: 'Der Bus ist langsam.', en: 'The bus is slow.', fr: 'Le bus est lent.' } } },
    { kind: 'vocab', item: { id: 'a2l4-teuer', german: 'teuer', english: 'expensive', french: 'cher', gender: null, syllables: ['TEU', 'er'], pronunciation: 'TOY-er', example: { de: 'Das Auto ist teuer.', en: 'The car is expensive.', fr: 'La voiture est chère.' } } },
    { kind: 'vocab', item: { id: 'a2l4-gut', german: 'gut', english: 'good', french: 'bon / bien', gender: null, syllables: ['GUT'], pronunciation: 'goot', example: { de: 'Das Essen ist gut.', en: 'The food is good.', fr: 'Le repas est bon.' } } },
    { kind: 'vocab', item: { id: 'a2l4-lieber', german: 'lieber', english: 'rather / prefer', french: 'plutôt / préférer', gender: null, syllables: ['LIE', 'ber'], pronunciation: 'LEE-ber', example: { de: 'Ich trinke lieber Tee.', en: 'I prefer to drink tea.', fr: 'Je préfère boire du thé.' } } },
    { kind: 'vocab', item: { id: 'a2l4-als', german: 'als', english: 'than (in comparisons)', french: 'que (comparaison)', gender: null, syllables: ['ALS'], pronunciation: 'ahls', example: { de: 'Anna ist größer als Tom.', en: 'Anna is taller than Tom.', fr: 'Anna est plus grande que Tom.' } } },
    { kind: 'vocab', item: { id: 'a2l4-genauso', german: 'genauso … wie', english: 'just as … as', french: 'aussi … que', gender: null, syllables: ['ge', 'NAU', 'so'], pronunciation: 'ge-NOW-zo vee', example: { de: 'Er ist genauso alt wie ich.', en: 'He is just as old as me.', fr: 'Il a exactement le même âge que moi.' } } },

    { kind: 'grammar', note: {
      id: 'a2l4-komparativ', title: 'The comparative: …-er als', titleFr: 'Le comparatif : …-er als',
      explanationMd: 'Add **-er** to the adjective and use **als** for "than":\n\n- schnell → **schneller als** — faster than\n- klein → **kleiner als** — smaller than\n\nMany short adjectives add an **umlaut**: groß → **größer**, alt → **älter**, jung → **jünger**, lang → **länger**.',
      explanationMdFr: 'Ajoute **-er** à l’adjectif et utilise **als** pour « que » :\n\n- schnell → **schneller als** — plus rapide que\n- klein → **kleiner als** — plus petit que\n\nBeaucoup d’adjectifs courts prennent un **tréma** : groß → **größer**, alt → **älter**, jung → **jünger**, lang → **länger**.',
      examples: [
        { de: 'Der Zug ist schneller als der Bus.', en: 'The train is faster than the bus.', fr: 'Le train est plus rapide que le bus.' },
        { de: 'Berlin ist größer als Bonn.', en: 'Berlin is bigger than Bonn.', fr: 'Berlin est plus grande que Bonn.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l4-superlativ', title: 'The superlative: am …-sten', titleFr: 'Le superlatif : am …-sten',
      explanationMd: 'For "the most", use **am** + adjective + **-sten**:\n\n- schnell → **am schnellsten** — the fastest\n- groß → **am größten** — the biggest\n\nAfter d/t/s/z, add **-esten**: alt → **am ältesten**.',
      explanationMdFr: 'Pour « le plus », utilise **am** + adjectif + **-sten** :\n\n- schnell → **am schnellsten** — le plus rapide\n- groß → **am größten** — le plus grand\n\nAprès d/t/s/z, on ajoute **-esten** : alt → **am ältesten**.',
      examples: [
        { de: 'Der ICE ist am schnellsten.', en: 'The ICE is the fastest.', fr: 'L’ICE est le plus rapide.' },
        { de: 'Dieses Haus ist am größten.', en: 'This house is the biggest.', fr: 'Cette maison est la plus grande.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l4-unregelmaessig', title: 'Irregular comparisons', titleFr: 'Comparaisons irrégulières',
      explanationMd: 'Learn these by heart:\n\n- gut → **besser** → am **besten**\n- viel → **mehr** → am **meisten**\n- gern → **lieber** → am **liebsten**\n\nFor equals, use **genauso … wie**: Er ist **genauso** groß **wie** ich.',
      explanationMdFr: 'À apprendre par cœur :\n\n- gut → **besser** → am **besten**\n- viel → **mehr** → am **meisten**\n- gern → **lieber** → am **liebsten**\n\nPour l’égalité, utilise **genauso … wie** : Er ist **genauso** groß **wie** ich.',
      examples: [
        { de: 'Ich trinke gern Kaffee, aber lieber Tee.', en: 'I like coffee, but prefer tea.', fr: 'J’aime le café, mais je préfère le thé.' },
        { de: 'Sie kocht am besten.', en: 'She cooks the best.', fr: 'C’est elle qui cuisine le mieux.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l4-e1', prompt: 'Der Zug ist ___ als der Bus. (schnell → comparative)', answer: 'schneller', hint: 'add -er to schnell', hintFr: 'ajoute -er à schnell' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l4-e2', prompt: 'What is the comparative of "gut"?', promptFr: 'Quel est le comparatif de « gut » ?', options: ['guter', 'besser', 'am besten'], answer: 1, explain: '"gut" is irregular: gut → besser.', explainFr: '« gut » est irrégulier : gut → besser.', hint: 'It does not just add -er.', hintFr: 'Il n’ajoute pas simplement -er.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l4-e3', tokens: ['größer', 'ist', 'als', 'Berlin', 'Bonn'], answer: ['Berlin', 'ist', 'größer', 'als', 'Bonn'], hint: 'Subject, verb, comparative, "als", second thing.', hintFr: 'Sujet, verbe, comparatif, « als », deuxième élément.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l4-e4', pairs: [ { de: 'gut', en: 'besser', fr: 'besser' }, { de: 'gern', en: 'lieber', fr: 'lieber' }, { de: 'viel', en: 'mehr', fr: 'mehr' } ], hint: 'Match each word to its irregular comparative.', hintFr: 'Associe chaque mot à son comparatif irrégulier.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l4-e5', prompt: 'Listen. Which does Lea prefer?', promptFr: 'Écoute. Que préfère Lea ?', audio: { ttsText: 'Ich trinke gern Kaffee, aber ich trinke lieber Tee.' }, options: ['Tea', 'Coffee', 'Water'], optionsFr: ['Le thé', 'Le café', 'L’eau'], answer: 0, hint: 'Listen for what comes after "lieber".', hintFr: 'Écoute ce qui vient après « lieber ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l4-e6', prompt: 'Der ICE ist am ___. (schnell → superlative)', answer: 'schnellsten', hint: 'am + schnell + sten', hintFr: 'am + schnell + sten' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l4-e7', prompt: 'How do you say "just as old as me"?', promptFr: 'Comment dit-on « aussi âgé que moi » ?', options: ['älter als ich', 'genauso alt wie ich', 'am ältesten'], answer: 1, explain: 'Equality uses "genauso … wie".', explainFr: 'L’égalité utilise « genauso … wie ».', hint: 'Equality, not "more" — use "wie", not "als".', hintFr: 'Égalité, pas « plus » — utilise « wie », pas « als ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l4-e8', prompt: 'Anna ist ___ als Tom. (groß → comparative, with umlaut)', answer: 'größer', hint: 'groß takes an umlaut: größer', hintFr: 'groß prend un tréma : größer' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l4-e9', tokens: ['am', 'Sie', 'besten', 'kocht'], answer: ['Sie', 'kocht', 'am', 'besten'], hint: 'Subject, verb, then the superlative "am besten".', hintFr: 'Sujet, verbe, puis le superlatif « am besten ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l4-e10', prompt: 'Listen. Which city is the biggest?', promptFr: 'Écoute. Quelle ville est la plus grande ?', audio: { ttsText: 'München ist groß, aber Berlin ist am größten.' }, options: ['Berlin', 'München', 'Bonn'], optionsFr: ['Berlin', 'Munich', 'Bonn'], answer: 0, hint: 'Listen for the city before "am größten".', hintFr: 'Écoute la ville avant « am größten ».' } },

    { kind: 'pronunciation', focus: 'The umlaut changes the vowel: groß → größer, alt → älter (rounded/fronted vowels)', focusFr: 'Le tréma change la voyelle : groß → größer, alt → älter (voyelles arrondies/antérieures)', items: [
      { id: 'a2l4-groesser-pron', german: 'größer', english: 'bigger', french: 'plus grand', gender: null, syllables: ['GRÖS', 'ser'], pronunciation: 'GROESS-er', example: { de: 'Berlin ist größer.', en: 'Berlin is bigger.', fr: 'Berlin est plus grande.' } },
      { id: 'a2l4-aelter-pron', german: 'älter', english: 'older', french: 'plus âgé', gender: null, syllables: ['ÄL', 'ter'], pronunciation: 'ELL-ter', example: { de: 'Mein Bruder ist älter.', en: 'My brother is older.', fr: 'Mon frère est plus âgé.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now compare things: the comparative adds **-er … als** (schneller als), the superlative uses **am …-sten** (am schnellsten), and the key irregulars are **gut/besser/am besten** and **gern/lieber/am liebsten**. Use **genauso … wie** for equals. 🎉',
      summaryFr: 'Tu sais maintenant comparer : le comparatif ajoute **-er … als** (schneller als), le superlatif utilise **am …-sten** (am schnellsten), et les irréguliers clés sont **gut/besser/am besten** et **gern/lieber/am liebsten**. Utilise **genauso … wie** pour l’égalité. 🎉' },
  ],
};

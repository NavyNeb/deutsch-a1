import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion4: Lesson = {
  id: 'a2-l4', level: 'A2', module: 5, number: 17,
  title: { de: 'Vergleiche', en: 'Comparisons', fr: 'Les comparaisons' },
  theme: 'Comparing things with the comparative and superlative', themeFr: 'Comparer avec le comparatif et le superlatif',
  goals: ['Compare two things with "…-er als"', 'Say the most with "am …-sten"', 'Use irregular forms gut/besser/am besten', 'Say "just as … as" with "genauso … wie"'], goalsFr: ['Comparer deux choses avec « …-er als »', 'Dire le plus avec « am …-sten »', 'Utiliser les formes irrégulières gut/besser/am besten', 'Dire « aussi … que » avec « genauso … wie »'],
  canDo: g('Ich kann Dinge und Personen vergleichen: größer als, am schnellsten, genauso … wie, besser, lieber.', 'I can compare things and people: bigger than, the fastest, just as … as, better, rather.', 'Je sais comparer des choses et des personnes : plus grand que, le plus rapide, aussi … que, mieux, plutôt.'),
  steps: [
    { kind: 'intro', title: 'Vergleichen 🚄', titleFr: 'Comparer 🚄',
      scene: 'Lara and Tim argue about which way to travel — and which city is the best.', sceneFr: 'Lara et Tim se disputent pour savoir quel moyen de transport choisir — et quelle ville est la meilleure.',
      goals: ['Compare two things with …-er als', 'Say the most with am …-sten', 'Use the irregular forms gut / besser / am besten and say “just as … as”'],
      goalsFr: ['Comparer deux choses avec …-er als', 'Dire le plus avec am …-sten', 'Utiliser les formes irrégulières gut / besser / am besten et dire « aussi … que »'] },

    // ───────────── 1 · Comparative ─────────────
    { kind: 'chapter', title: 'Der Komparativ: …-er als', titleFr: 'Le comparatif : …-er als', blurb: 'faster than, bigger than.', blurbFr: 'plus rapide que, plus grand que.' },

    { kind: 'situation', title: 'Zug oder Bus?', titleFr: 'Train ou bus ?',
      setting: 'Lara and Tim plan their trip.', settingFr: 'Lara et Tim planifient leur voyage.',
      lines: [
        line('Lara', 'Ein Vergleich hilft. Der Zug ist schneller als der Bus.', 'A comparison helps. The train is faster than the bus.', 'Une comparaison aide. Le train est plus rapide que le bus.'),
        line('Tim', 'Aber der Bus ist langsam und billig. Das Auto ist teuer.', 'But the bus is slow and cheap. The car is expensive.', 'Mais le bus est lent et bon marché. La voiture est chère.'),
        line('Lara', 'Berlin ist größer als Bonn. Mein Dorf ist klein.', 'Berlin is bigger than Bonn. My village is small.', 'Berlin est plus grand que Bonn. Mon village est petit.'),
        line('Tim', 'Mein Bruder ist älter als ich. Er ist genauso groß wie ich.', 'My brother is older than me. He is just as tall as me.', 'Mon frère est plus âgé que moi. Il est aussi grand que moi.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l4-e11', prompt: 'Which is faster, the train or the bus?', promptFr: 'Qui est le plus rapide, le train ou le bus ?', options: ['The train', 'The bus', 'The car'], optionsFr: ['Le train', 'Le bus', 'La voiture'], answer: 0, explain: 'Lara says: “Der Zug ist schneller als der Bus.”', explainFr: 'Lara dit : « Der Zug ist schneller als der Bus. »', hint: 'Look for “schneller”.', hintFr: 'Cherche « schneller ».' } },

    { kind: 'wordgroup', title: 'Eigenschaften', titleFr: 'Qualités',
      items: [{ id: 'a2l4-gross', german: 'groß', english: 'big / tall', french: 'grand', gender: null, syllables: ['GROSS'], pronunciation: 'grohss', example: { de: 'Berlin ist groß.', en: 'Berlin is big.', fr: 'Berlin est grande.' } }, { id: 'a2l4-klein', german: 'klein', english: 'small', french: 'petit', gender: null, syllables: ['KLEIN'], pronunciation: 'kline', example: { de: 'Mein Dorf ist klein.', en: 'My village is small.', fr: 'Mon village est petit.' } }, { id: 'a2l4-schnell', german: 'schnell', english: 'fast', french: 'rapide', gender: null, syllables: ['SCHNELL'], pronunciation: 'shnell', example: { de: 'Der Zug ist schnell.', en: 'The train is fast.', fr: 'Le train est rapide.' } }, { id: 'a2l4-langsam', german: 'langsam', english: 'slow', french: 'lent', gender: null, syllables: ['LANG', 'sam'], pronunciation: 'LAHNG-zahm', example: { de: 'Der Bus ist langsam.', en: 'The bus is slow.', fr: 'Le bus est lent.' } }, { id: 'a2l4-teuer', german: 'teuer', english: 'expensive', french: 'cher', gender: null, syllables: ['TEU', 'er'], pronunciation: 'TOY-er', example: { de: 'Das Auto ist teuer.', en: 'The car is expensive.', fr: 'La voiture est chère.' } }, { id: 'a2l4-gut', german: 'gut', english: 'good', french: 'bon / bien', gender: null, syllables: ['GUT'], pronunciation: 'goot', example: { de: 'Das Essen ist gut.', en: 'The food is good.', fr: 'Le repas est bon.' } }] },

    { kind: 'wordgroup', title: 'Vergleichswörter', titleFr: 'Mots de comparaison',
      items: [{ id: 'a2l4-vergleich', german: 'der Vergleich', english: 'the comparison', french: 'la comparaison', gender: 'der', syllables: ['ver', 'GLEICH'], pronunciation: 'dair fair-GLYESH', example: { de: 'Ein Vergleich hilft.', en: 'A comparison helps.', fr: 'Une comparaison aide.' } }, { id: 'a2l4-als', german: 'als', english: 'than (in comparisons)', french: 'que (comparaison)', gender: null, syllables: ['ALS'], pronunciation: 'ahls', example: { de: 'Anna ist größer als Tom.', en: 'Anna is taller than Tom.', fr: 'Anna est plus grande que Tom.' } }, { id: 'a2l4-lieber', german: 'lieber', english: 'rather / prefer', french: 'plutôt / préférer', gender: null, syllables: ['LIE', 'ber'], pronunciation: 'LEE-ber', example: { de: 'Ich trinke lieber Tee.', en: 'I prefer to drink tea.', fr: 'Je préfère boire du thé.' } }, { id: 'a2l4-genauso', german: 'genauso … wie', english: 'just as … as', french: 'aussi … que', gender: null, syllables: ['ge', 'NAU', 'so'], pronunciation: 'ge-NOW-zo vee', example: { de: 'Er ist genauso alt wie ich.', en: 'He is just as old as me.', fr: 'Il a exactement le même âge que moi.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l4-komparativ', title: 'The comparative: …-er als', titleFr: 'Le comparatif : …-er als',
      lead: 'Add -er to the adjective and use als for “than”. Short adjectives often add an umlaut.',
      leadFr: 'Ajoute -er à l’adjectif et utilise als pour « que ». Les adjectifs courts prennent souvent un tréma.',
      explanationMd: 'Add **-er** to the adjective and use **als** for **“than”**: **schnell → schneller als**, **klein → kleiner als**. Many short adjectives add an **umlaut**: **groß → größer, alt → älter, jung → jünger, lang → länger**. For **equals** use **genauso … wie** (just as … as): **Er ist genauso groß wie ich.** Careful: **als** is for different things, **wie** is for equal things.',
      explanationMdFr: 'Ajoute **-er** à l’adjectif et utilise **als** pour **« que »** : **schnell → schneller als**, **klein → kleiner als**. Beaucoup d’adjectifs courts prennent un **tréma** : **groß → größer, alt → älter, jung → jünger, lang → länger**. Pour l’**égalité**, utilise **genauso … wie** (aussi … que) : **Er ist genauso groß wie ich.** Attention : **als** pour des choses différentes, **wie** pour des choses égales.',
      tables: [{ title: 'Comparative', titleFr: 'Comparatif', headers: ['Adjective', 'Comparative', 'Example'], headersFr: ['Adjectif', 'Comparatif', 'Exemple'],
        rows: [['schnell', 'schneller als', 'Der Zug ist schneller als der Bus.'], ['klein', 'kleiner als', 'Mein Dorf ist kleiner als Bonn.'], ['groß', 'größer als', 'Berlin ist größer als Bonn.'], ['alt', 'älter als', 'Mein Bruder ist älter als ich.'], ['(equal)', 'genauso … wie', 'Er ist genauso groß wie ich.']],
        rowsFr: [['schnell', 'schneller als', 'Der Zug ist schneller als der Bus.'], ['klein', 'kleiner als', 'Mein Dorf ist kleiner als Bonn.'], ['groß', 'größer als', 'Berlin ist größer als Bonn.'], ['alt', 'älter als', 'Mein Bruder ist älter als ich.'], ['(égalité)', 'genauso … wie', 'Er ist genauso groß wie ich.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Zug', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'schneller', role: 'other' }, { text: 'als der Bus.', role: 'other' }], en: 'The train is faster than the bus.', fr: 'Le train est plus rapide que le bus.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'genauso groß', role: 'other' }, { text: 'wie ich.', role: 'other' }], en: 'He is just as tall as me.', fr: 'Il est aussi grand que moi.' },
      ],
      contrast: {
        a: { label: 'als = different', labelFr: 'als = différent', note: 'schneller als', noteFr: 'schneller als', examples: [g('Berlin ist größer als Bonn.', 'Berlin is bigger than Bonn.', 'Berlin est plus grand que Bonn.'), g('Der Zug ist schneller als der Bus.', 'The train is faster than the bus.', 'Le train est plus rapide que le bus.')] },
        b: { label: 'wie = equal', labelFr: 'wie = égal', note: 'genauso … wie', noteFr: 'genauso … wie', examples: [g('Er ist genauso alt wie ich.', 'He is just as old as me.', 'Il a le même âge que moi.'), g('Der Bus ist genauso langsam wie das Fahrrad.', 'The bus is just as slow as the bike.', 'Le bus est aussi lent que le vélo.')] },
      },
      examples: [
        g('Der Zug ist schneller als der Bus.', 'The train is faster than the bus.', 'Le train est plus rapide que le bus.'),
        g('Berlin ist größer als Bonn.', 'Berlin is bigger than Bonn.', 'Berlin est plus grand que Bonn.'),
        g('Mein Bruder ist älter als ich.', 'My brother is older than me.', 'Mon frère est plus âgé que moi.'),
        g('Das Auto ist teurer als das Fahrrad.', 'The car is more expensive than the bike.', 'La voiture est plus chère que le vélo.'),
        g('Er ist genauso alt wie ich.', 'He is just as old as me.', 'Il a le même âge que moi.'),
        g('Mein Dorf ist kleiner als Bonn.', 'My village is smaller than Bonn.', 'Mon village est plus petit que Bonn.'),
      ],
      mistakes: [
        { wrong: 'Berlin ist größer wie Bonn.', right: 'Berlin ist größer als Bonn.', why: 'Different things: als, not wie.', whyFr: 'Choses différentes : als, pas wie.' },
        { wrong: 'Anna ist grösser als Tom.', right: 'Anna ist größer als Tom.', why: 'Keep the ß: größer.', whyFr: 'Garde le ß : größer.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l4-e1', prompt: 'Der Zug ist ___ als der Bus. (schnell → comparative)', answer: 'schneller', hint: 'add -er to schnell', hintFr: 'ajoute -er à schnell' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l4-e8', prompt: 'Anna ist ___ als Tom. (groß → comparative, with umlaut)', answer: 'größer', hint: 'groß takes an umlaut: größer', hintFr: 'groß prend un tréma : größer' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l4-e3', tokens: ['größer', 'ist', 'als', 'Berlin', 'Bonn'], answer: ['Berlin', 'ist', 'größer', 'als', 'Bonn'], hint: 'Subject, verb, comparative, "als", second thing.', hintFr: 'Sujet, verbe, comparatif, « als », deuxième élément.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l4-e7', prompt: 'How do you say "just as old as me"?', promptFr: 'Comment dit-on « aussi âgé que moi » ?', options: ['älter als ich', 'genauso alt wie ich', 'am ältesten'], answer: 1, explain: 'Equality uses "genauso … wie".', explainFr: 'L’égalité utilise « genauso … wie ».', hint: 'Equality, not "more" — use "wie", not "als".', hintFr: 'Égalité, pas « plus » — utilise « wie », pas « als ».' } },

    // ───────────── 2 · Superlative ─────────────
    { kind: 'chapter', title: 'Der Superlativ: am …-sten', titleFr: 'Le superlatif : am …-sten', blurb: 'the fastest, the biggest.', blurbFr: 'le plus rapide, le plus grand.' },

    { kind: 'situation', title: 'Wer ist am schnellsten?', titleFr: 'Qui est le plus rapide ?',
      setting: 'They compare trains and cities.', settingFr: 'Ils comparent trains et villes.',
      lines: [
        line('Tim', 'Der ICE ist am schnellsten. Dieses Haus ist am größten.', 'The ICE is the fastest. This house is the biggest.', 'L’ICE est le plus rapide. Cette maison est la plus grande.'),
        line('Lara', 'München ist groß, aber Berlin ist am größten.', 'Munich is big, but Berlin is the biggest.', 'Munich est grande, mais Berlin est la plus grande.'),
        line('Tim', 'Und mein Opa ist am ältesten in unserer Familie.', 'And my grandpa is the oldest in our family.', 'Et mon grand-père est le plus âgé de notre famille.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l4-superlativ', title: 'The superlative: am …-sten', titleFr: 'Le superlatif : am …-sten',
      lead: 'am + adjective + -sten. After d / t / s / z / ß: -esten.',
      leadFr: 'am + adjectif + -sten. Après d / t / s / z / ß : -esten.',
      explanationMd: 'For “**the most**” use **am** + adjective + **-sten**: **schnell → am schnellsten**, **groß → am größten**. After **d / t / s / z / ß** add **-esten** (easier to say): **alt → am ältesten**, **heiß → am heißesten**. Short adjectives keep the **umlaut** from the comparative: **am größten, am ältesten, am jüngsten**.',
      explanationMdFr: 'Pour « **le plus** », utilise **am** + adjectif + **-sten** : **schnell → am schnellsten**, **groß → am größten**. Après **d / t / s / z / ß**, ajoute **-esten** (plus facile à prononcer) : **alt → am ältesten**, **heiß → am heißesten**. Les adjectifs courts gardent le **tréma** du comparatif : **am größten, am ältesten, am jüngsten**.',
      tables: [{ title: 'Three forms', titleFr: 'Trois formes', headers: ['Basic', 'Comparative', 'Superlative'], headersFr: ['Base', 'Comparatif', 'Superlatif'],
        rows: [['schnell', 'schneller', 'am schnellsten'], ['groß', 'größer', 'am größten'], ['alt', 'älter', 'am ältesten'], ['klein', 'kleiner', 'am kleinsten'], ['teuer', 'teurer', 'am teuersten']],
        rowsFr: [['schnell', 'schneller', 'am schnellsten'], ['groß', 'größer', 'am größten'], ['alt', 'älter', 'am ältesten'], ['klein', 'kleiner', 'am kleinsten'], ['teuer', 'teurer', 'am teuersten']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Der ICE', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'am schnellsten.', role: 'other' }], en: 'The ICE is the fastest.', fr: 'L’ICE est le plus rapide.' },
        { parts: [{ text: 'Dieses Haus', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'am größten.', role: 'other' }], en: 'This house is the biggest.', fr: 'Cette maison est la plus grande.' },
      ],
      contrast: {
        a: { label: 'Comparative', labelFr: 'Comparatif', note: 'two things', noteFr: 'deux choses', examples: [g('Berlin ist größer als München.', 'Berlin is bigger than Munich.', 'Berlin est plus grand que Munich.'), g('Der Zug ist schneller als der Bus.', 'The train is faster than the bus.', 'Le train est plus rapide que le bus.')] },
        b: { label: 'Superlative', labelFr: 'Superlatif', note: 'three or more', noteFr: 'trois ou plus', examples: [g('Berlin ist am größten.', 'Berlin is the biggest.', 'Berlin est la plus grande.'), g('Der ICE ist am schnellsten.', 'The ICE is the fastest.', 'L’ICE est le plus rapide.')] },
      },
      examples: [
        g('Der ICE ist am schnellsten.', 'The ICE is the fastest.', 'L’ICE est le plus rapide.'),
        g('Dieses Haus ist am größten.', 'This house is the biggest.', 'Cette maison est la plus grande.'),
        g('München ist groß, aber Berlin ist am größten.', 'Munich is big, but Berlin is the biggest.', 'Munich est grande, mais Berlin est la plus grande.'),
        g('Mein Opa ist am ältesten.', 'My grandpa is the oldest.', 'Mon grand-père est le plus âgé.'),
        g('Dieser Mantel ist am teuersten.', 'This coat is the most expensive.', 'Ce manteau est le plus cher.'),
        g('Im August ist es am heißesten.', 'In August it is the hottest.', 'En août, il fait le plus chaud.'),
      ],
      mistakes: [
        { wrong: 'Der ICE ist am schnellst.', right: 'Der ICE ist am schnellsten.', why: 'am + adjective + -sten.', whyFr: 'am + adjectif + -sten.' },
        { wrong: 'Mein Opa ist am altsten.', right: 'Mein Opa ist am ältesten.', why: 'After t add -esten and keep the umlaut.', whyFr: 'Après t, ajoute -esten et garde le tréma.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l4-e6', prompt: 'Der ICE ist am ___. (schnell → superlative)', answer: 'schnellsten', hint: 'am + schnell + sten', hintFr: 'am + schnell + sten' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l4-e10', prompt: 'Listen. Which city is the biggest?', promptFr: 'Écoute. Quelle ville est la plus grande ?', audio: { ttsText: 'München ist groß, aber Berlin ist am größten.' }, options: ['Berlin', 'München', 'Bonn'], optionsFr: ['Berlin', 'Munich', 'Bonn'], answer: 0, hint: 'Listen for the city before "am größten".', hintFr: 'Écoute la ville avant « am größten ».' } },

    // ───────────── 3 · Irregular ─────────────
    { kind: 'chapter', title: 'Unregelmäßig: gut, viel, gern', titleFr: 'Irrégulier : gut, viel, gern', blurb: 'besser, mehr, lieber.', blurbFr: 'besser, mehr, lieber.' },

    { kind: 'situation', title: 'Ich trinke lieber Tee', titleFr: 'Je préfère le thé',
      setting: 'Lea and a friend choose a drink.', settingFr: 'Lea et une amie choisissent une boisson.',
      lines: [
        line('Freundin', 'Trinkst du gern Kaffee?', 'Do you like drinking coffee?', 'Aimes-tu boire du café ?'),
        line('Lea', 'Ich trinke gern Kaffee, aber ich trinke lieber Tee. Am liebsten trinke ich Wasser.', 'I like coffee, but I prefer tea. Most of all I like water.', 'J’aime le café, mais je préfère le thé. Ce que je préfère, c’est l’eau.'),
        line('Freundin', 'Sie kocht am besten. Ihre Suppe ist besser als meine.', 'She cooks best. Her soup is better than mine.', 'Elle cuisine le mieux. Sa soupe est meilleure que la mienne.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l4-unregelmaessig', title: 'Irregular comparisons', titleFr: 'Comparatifs irréguliers',
      lead: 'gut → besser → am besten. viel → mehr → am meisten. gern → lieber → am liebsten.',
      leadFr: 'gut → besser → am besten. viel → mehr → am meisten. gern → lieber → am liebsten.',
      explanationMd: 'Three comparisons are **irregular** — learn them by heart: **gut → besser → am besten**, **viel → mehr → am meisten**, **gern → lieber → am liebsten**. **gern / lieber / am liebsten** is the pattern for **preferences**: **Ich trinke gern Kaffee, lieber Tee, am liebsten Wasser.** **gut / besser / am besten** describes **quality**: **Sie kocht am besten.**',
      explanationMdFr: 'Trois comparatifs sont **irréguliers** — apprends-les par cœur : **gut → besser → am besten**, **viel → mehr → am meisten**, **gern → lieber → am liebsten**. **gern / lieber / am liebsten** sert aux **préférences** : **Ich trinke gern Kaffee, lieber Tee, am liebsten Wasser.** **gut / besser / am besten** décrit la **qualité** : **Sie kocht am besten.**',
      tables: [{ title: 'Irregular forms', titleFr: 'Formes irrégulières', headers: ['Basic', 'Comparative', 'Superlative'], headersFr: ['Base', 'Comparatif', 'Superlatif'],
        rows: [['gut', 'besser', 'am besten'], ['viel', 'mehr', 'am meisten'], ['gern', 'lieber', 'am liebsten']],
        rowsFr: [['gut', 'besser', 'am besten'], ['viel', 'mehr', 'am meisten'], ['gern', 'lieber', 'am liebsten']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'trinke', role: 'verb' }, { text: 'lieber', role: 'other' }, { text: 'Tee.', role: 'accusative' }], en: 'I prefer to drink tea.', fr: 'Je préfère boire du thé.' },
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'kocht', role: 'verb' }, { text: 'am besten.', role: 'other' }], en: 'She cooks best.', fr: 'Elle cuisine le mieux.' },
      ],
      contrast: {
        a: { label: 'gern → lieber → am liebsten', labelFr: 'gern → lieber → am liebsten', note: 'preferences', noteFr: 'préférences', examples: [g('Ich trinke gern Kaffee, aber lieber Tee.', 'I like coffee, but prefer tea.', 'J’aime le café, mais je préfère le thé.'), g('Am liebsten trinke ich Wasser.', 'Most of all I like water.', 'Ce que je préfère, c’est l’eau.')] },
        b: { label: 'gut → besser → am besten', labelFr: 'gut → besser → am besten', note: 'quality', noteFr: 'qualité', examples: [g('Ihre Suppe ist besser als meine.', 'Her soup is better than mine.', 'Sa soupe est meilleure que la mienne.'), g('Sie kocht am besten.', 'She cooks best.', 'Elle cuisine le mieux.')] },
      },
      examples: [
        g('Ich trinke gern Kaffee, aber lieber Tee.', 'I like coffee, but prefer tea.', 'J’aime le café, mais je préfère le thé.'),
        g('Sie kocht am besten.', 'She cooks best.', 'Elle cuisine le mieux.'),
        g('Ihre Suppe ist besser als meine.', 'Her soup is better than mine.', 'Sa soupe est meilleure que la mienne.'),
        g('Am liebsten trinke ich Wasser.', 'Most of all I like water.', 'Ce que je préfère, c’est l’eau.'),
        g('Er hat mehr Zeit als ich.', 'He has more time than I do.', 'Il a plus de temps que moi.'),
        g('Wer isst am meisten?', 'Who eats the most?', 'Qui mange le plus ?'),
      ],
      mistakes: [
        { wrong: 'Ihre Suppe ist guter als meine.', right: 'Ihre Suppe ist besser als meine.', why: 'gut is irregular: besser.', whyFr: 'gut est irrégulier : besser.' },
        { wrong: 'Ich trinke mehr gern Tee.', right: 'Ich trinke lieber Tee.', why: 'gern → lieber, not “mehr gern”.', whyFr: 'gern → lieber, pas « mehr gern ».' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l4-e2', prompt: 'What is the comparative of "gut"?', promptFr: 'Quel est le comparatif de « gut » ?', options: ['guter', 'besser', 'am besten'], answer: 1, explain: '"gut" is irregular: gut → besser.', explainFr: '« gut » est irrégulier : gut → besser.', hint: 'It does not just add -er.', hintFr: 'Il n’ajoute pas simplement -er.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l4-e4', pairs: [{ de: 'gut', en: 'besser', fr: 'besser' }, { de: 'gern', en: 'lieber', fr: 'lieber' }, { de: 'viel', en: 'mehr', fr: 'mehr' }], hint: 'Match each word to its irregular comparative.', hintFr: 'Associe chaque mot à son comparatif irrégulier.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l4-e9', tokens: ['am', 'Sie', 'besten', 'kocht'], answer: ['Sie', 'kocht', 'am', 'besten'], hint: 'Subject, verb, then the superlative "am besten".', hintFr: 'Sujet, verbe, puis le superlatif « am besten ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l4-e5', prompt: 'Listen. Which does Lea prefer?', promptFr: 'Écoute. Que préfère Lea ?', audio: { ttsText: 'Ich trinke gern Kaffee, aber ich trinke lieber Tee.' }, options: ['Tea', 'Coffee', 'Water'], optionsFr: ['Le thé', 'Le café', 'L’eau'], answer: 0, hint: 'Listen for what comes after "lieber".', hintFr: 'Écoute ce qui vient après « lieber ».' } },

    { kind: 'pronunciation', focus: 'The umlaut changes the vowel: groß → größer, alt → älter (rounded/fronted vowels)', focusFr: 'Le tréma change la voyelle : groß → größer, alt → älter (voyelles arrondies/antérieures)', items: [{ id: 'a2l4-groesser-pron', german: 'größer', english: 'bigger', french: 'plus grand', gender: null, syllables: ['GRÖS', 'ser'], pronunciation: 'GROESS-er', example: { de: 'Berlin ist größer.', en: 'Berlin is bigger.', fr: 'Berlin est plus grande.' } }, { id: 'a2l4-aelter-pron', german: 'älter', english: 'older', french: 'plus âgé', gender: null, syllables: ['ÄL', 'ter'], pronunciation: 'ELL-ter', example: { de: 'Mein Bruder ist älter.', en: 'My brother is older.', fr: 'Mon frère est plus âgé.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **compare**: **…-er als**, **am …-sten**, **genauso … wie**, and the irregular **gut – besser – am besten**, **gern – lieber – am liebsten**. 🎉',
      summaryFr: 'Tu sais maintenant **comparer** : **…-er als**, **am …-sten**, **genauso … wie**, et les irréguliers **gut – besser – am besten**, **gern – lieber – am liebsten**. 🎉',
      card: { title: 'Comparing on one page', titleFr: 'Comparer en une page', sections: [
        { heading: 'Regular', headingFr: 'Régulier', rows: [g('schnell → schneller als → am schnellsten', 'fast', 'rapide'), g('groß → größer → am größten', 'umlaut', 'tréma')] },
        { heading: 'Irregular', headingFr: 'Irrégulier', rows: [g('gut → besser → am besten', 'good', 'bon'), g('viel → mehr → am meisten', 'much', 'beaucoup'), g('gern → lieber → am liebsten', 'like', 'aimer')] },
        { heading: 'Equal', headingFr: 'Égal', rows: [g('genauso … wie', 'just as … as', 'aussi … que')] },
      ] } },
  ],
};

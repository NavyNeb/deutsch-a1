import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion16: Lesson = {
  id: 'a2-l16', level: 'A2', module: 4, number: 15,
  title: { de: 'Adjektive nach dem bestimmten Artikel', en: 'Adjectives after the definite article', fr: 'Adjectifs après l’article défini' },
  theme: 'Sightseeing: adjective endings after der/die/das and dieser (nominative, accusative, dative)', themeFr: 'Visiter une ville : terminaisons des adjectifs après der/die/das et dieser (nominatif, accusatif, datif)',
  goals: ['Use -e and -en after der/die/das in the nominative, accusative and dative', 'Point things out with dieser/diese/dieses', 'Give opinions about buildings and places', 'Compare the three adjective patterns in one overview'], goalsFr: ['Utiliser -e et -en après der/die/das au nominatif, à l’accusatif et au datif', 'Désigner des choses avec dieser/diese/dieses', 'Donner son avis sur des bâtiments et des lieux', 'Comparer les trois schémas d’adjectifs en un aperçu'],
  canDo: g('Ich kann Sehenswürdigkeiten beschreiben, meine Meinung dazu sagen und die Adjektivendungen nach der / die / das und dieser benutzen.', 'I can describe sights, give my opinion about them and use adjective endings after der / die / das and dieser.', 'Je sais décrire des monuments, donner mon avis et utiliser les terminaisons d’adjectifs après der / die / das et dieser.'),
  steps: [
    { kind: 'intro', title: 'Sehenswürdigkeiten 🏰', titleFr: 'Sites touristiques 🏰',
      scene: 'Lara and Tim take a guided tour of the old town and share their opinions.', sceneFr: 'Lara et Tim font une visite guidée de la vieille ville et partagent leur avis.',
      goals: ['Use -e and -en after der / die / das in all three cases', 'Point things out with dieser / diese / dieses', 'Compare the three adjective patterns in one overview'],
      goalsFr: ['Utiliser -e et -en après der / die / das aux trois cas', 'Montrer des choses avec dieser / diese / dieses', 'Comparer les trois schémas d’adjectifs en un aperçu'] },

    // ───────────── 1 · The tour ─────────────
    { kind: 'chapter', title: 'Eine Stadtführung', titleFr: 'Une visite guidée', blurb: 'Dom, Turm, Brücke, Schloss.', blurbFr: 'Cathédrale, tour, pont, château.' },

    { kind: 'situation', title: 'Die Altstadt', titleFr: 'La vieille ville',
      setting: 'The guide opens the tour on the market square.', settingFr: 'La guide ouvre la visite sur la place du marché.',
      lines: [
        line('Führerin', 'Willkommen in der Altstadt! Die Führung beginnt um zehn Uhr. Schauen Sie, der schöne Dom!', 'Welcome to the old town! The tour begins at ten. Look, the beautiful cathedral!', 'Bienvenue dans la vieille ville ! La visite commence à dix heures. Regardez, la belle cathédrale !'),
        line('Tim', 'Und was ist die wichtigste Sehenswürdigkeit?', 'And what is the most important sight?', 'Et quel est le monument le plus important ?'),
        line('Führerin', 'Das berühmte Schloss auf dem Hügel. Vom Turm sehen wir die ganze Stadt.', 'The famous castle on the hill. From the tower we see the whole town.', 'Le célèbre château sur la colline. De la tour, nous voyons toute la ville.'),
        line('Lara', 'Wir gehen über die alte Brücke, oder?', 'We’ll cross the old bridge, right?', 'Nous traversons le vieux pont, n’est-ce pas ?'),
        line('Führerin', 'Ja, die malerische Brücke. Leider ist der Turm heute geschlossen.', 'Yes, the picturesque bridge. Unfortunately the tower is closed today.', 'Oui, le pont pittoresque. Malheureusement, la tour est fermée aujourd’hui.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l16-e12', prompt: 'What is closed today?', promptFr: 'Qu’est-ce qui est fermé aujourd’hui ?', options: ['The tower', 'The cathedral', 'The bridge'], optionsFr: ['La tour', 'La cathédrale', 'Le pont'], answer: 0, explain: 'The guide says: “Leider ist der Turm heute geschlossen.”', explainFr: 'La guide dit : « Leider ist der Turm heute geschlossen. »', hint: 'Look for “geschlossen”.', hintFr: 'Cherche « geschlossen ».' } },

    { kind: 'wordgroup', title: 'Orte in der Stadt', titleFr: 'Lieux en ville',
      items: [{ id: 'a2l16-dom', german: 'der Dom', english: 'the cathedral', french: 'la cathédrale', gender: 'der', syllables: ['DOM'], pronunciation: 'dair dohm', example: { de: 'Der Dom ist von weitem zu sehen.', en: 'The cathedral can be seen from far away.', fr: 'On voit la cathédrale de loin.' } }, { id: 'a2l16-turm', german: 'der Turm', english: 'the tower', french: 'la tour', gender: 'der', syllables: ['TURM'], pronunciation: 'dair toorm', example: { de: 'Vom Turm sehen wir die ganze Stadt.', en: 'From the tower we can see the whole city.', fr: 'Depuis la tour, nous voyons toute la ville.' } }, { id: 'a2l16-bruecke', german: 'die Brücke', english: 'the bridge', french: 'le pont', gender: 'die', syllables: ['BRÜ', 'cke'], pronunciation: 'dee BRUE-ke', example: { de: 'Wir gehen über die Brücke.', en: 'We walk across the bridge.', fr: 'Nous traversons le pont.' } }, { id: 'a2l16-schloss', german: 'das Schloss', english: 'the castle / palace', french: 'le château', gender: 'das', syllables: ['SCHLOSS'], pronunciation: 'dahs shloss', example: { de: 'Das Schloss liegt auf einem Hügel.', en: 'The castle stands on a hill.', fr: 'Le château se trouve sur une colline.' } }, { id: 'a2l16-altstadt', german: 'die Altstadt', english: 'the old town', french: 'la vieille ville', gender: 'die', syllables: ['ALT', 'stadt'], pronunciation: 'dee AHLT-shtaht', example: { de: 'In der Altstadt gibt es viele kleine Cafés.', en: 'There are many little cafés in the old town.', fr: 'Dans la vieille ville, il y a beaucoup de petits cafés.' } }, { id: 'a2l16-sehenswuerdigkeit', german: 'die Sehenswürdigkeit', english: 'the sight / attraction', french: 'la curiosité touristique', gender: 'die', syllables: ['SE', 'hens', 'wür', 'dig', 'keit'], pronunciation: 'dee ZAY-ens-vuer-dikh-kite', example: { de: 'Was ist die wichtigste Sehenswürdigkeit der Stadt?', en: 'What is the most important sight in the city?', fr: 'Quelle est la curiosité la plus importante de la ville ?' } }, { id: 'a2l16-fuehrung', german: 'die Führung', english: 'the guided tour', french: 'la visite guidée', gender: 'die', syllables: ['FÜH', 'rung'], pronunciation: 'dee FUE-roong', example: { de: 'Die Führung beginnt um zehn Uhr.', en: 'The guided tour starts at ten o’clock.', fr: 'La visite guidée commence à dix heures.' } }] },

    { kind: 'wordgroup', title: 'Meinung und Ablauf', titleFr: 'Avis et déroulement',
      items: [{ id: 'a2l16-beruehmt', german: 'berühmt', english: 'famous', french: 'célèbre', gender: null, syllables: ['be', 'RÜHMT'], pronunciation: 'be-RUEMT', example: { de: 'Das berühmte Schloss ist heute offen.', en: 'The famous castle is open today.', fr: 'Le célèbre château est ouvert aujourd’hui.' } }, { id: 'a2l16-beeindruckend', german: 'beeindruckend', english: 'impressive', french: 'impressionnant', gender: null, syllables: ['be', 'EIN', 'dru', 'ckend'], pronunciation: 'be-INE-droo-kent', example: { de: 'Der Turm ist wirklich beeindruckend.', en: 'The tower is really impressive.', fr: 'La tour est vraiment impressionnante.' } }, { id: 'a2l16-geschlossen', german: 'geschlossen', english: 'closed', french: 'fermé', gender: null, syllables: ['ge', 'SCHLOS', 'sen'], pronunciation: 'ge-SHLOSS-en', example: { de: 'Montags ist das Museum geschlossen.', en: 'On Mondays the museum is closed.', fr: 'Le lundi, le musée est fermé.' } }, { id: 'a2l16-malerisch', german: 'malerisch', english: 'picturesque', french: 'pittoresque', gender: null, syllables: ['MA', 'le', 'risch'], pronunciation: 'MAH-le-rish', example: { de: 'Die malerische Altstadt ist voller Touristen.', en: 'The picturesque old town is full of tourists.', fr: 'La vieille ville pittoresque est pleine de touristes.' } }, { id: 'a2l16-historisch', german: 'historisch', english: 'historic', french: 'historique', gender: null, syllables: ['his', 'TO', 'risch'], pronunciation: 'his-TOH-rish', example: { de: 'Das historische Rathaus ist 500 Jahre alt.', en: 'The historic town hall is 500 years old.', fr: 'L’hôtel de ville historique a 500 ans.' } }, { id: 'a2l16-zuerst', german: 'zuerst … danach', english: 'first … afterwards', french: 'd’abord … ensuite', gender: null, syllables: ['zu', 'ERST', 'da', 'NACH'], pronunciation: 'tsoo-AIRST dah-NAHKH', example: { de: 'Zuerst besichtigen wir den Dom, danach essen wir etwas.', en: 'First we visit the cathedral, afterwards we eat something.', fr: 'D’abord nous visitons la cathédrale, ensuite nous mangeons quelque chose.' } }] },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l16-e11', word: 'Sehenswürdigkeit', answer: 'die', hint: 'Nouns ending in -keit are feminine.', hintFr: 'Les noms en -keit sont féminins.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l16-e6', pairs: [{ de: 'berühmt', en: 'famous', fr: 'célèbre' }, { de: 'geschlossen', en: 'closed', fr: 'fermé' }, { de: 'beeindruckend', en: 'impressive', fr: 'impressionnant' }, { de: 'malerisch', en: 'picturesque', fr: 'pittoresque' }], hint: 'Match each adjective to its meaning.', hintFr: 'Associe chaque adjectif à sa signification.' } },

    // ───────────── 2 · After der / die / das ─────────────
    { kind: 'chapter', title: 'Nach der, die, das: -e oder -en', titleFr: 'Après der, die, das : -e ou -en', blurb: 'Two endings only.', blurbFr: 'Seulement deux terminaisons.' },

    { kind: 'situation', title: 'Schau mal, der schöne Dom!', titleFr: 'Regarde, la belle cathédrale !',
      setting: 'Lara and Tim walk through the old town.', settingFr: 'Lara et Tim traversent la vieille ville.',
      lines: [
        line('Lara', 'Schau mal, der schöne Dom! Und wir besichtigen den alten Turm.', 'Look, the beautiful cathedral! And we’re visiting the old tower.', 'Regarde, la belle cathédrale ! Et nous visitons la vieille tour.'),
        line('Tim', 'Wir sehen die alte Brücke und das berühmte Schloss.', 'We see the old bridge and the famous castle.', 'Nous voyons le vieux pont et le célèbre château.'),
        line('Lara', 'Die Touristen stehen vor dem berühmten Schloss. Wir sind in der alten Altstadt.', 'The tourists stand in front of the famous castle. We’re in the old town.', 'Les touristes sont devant le célèbre château. Nous sommes dans la vieille ville.'),
        line('Tim', 'Wir gehen mit der netten Stadtführerin durch die Altstadt.', 'We go through the old town with the nice tour guide.', 'Nous traversons la vieille ville avec la sympathique guide.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l16-nach-der', title: 'Adjective endings after der / die / das', titleFr: 'Terminaisons des adjectifs après der / die / das',
      lead: 'After the definite article only two endings: -e or -en. -e in the nominative and in feminine / neuter accusative — -en everywhere else.',
      leadFr: 'Après l’article défini, seulement deux terminaisons : -e ou -en. -e au nominatif et à l’accusatif féminin / neutre — -en partout ailleurs.',
      explanationMd: 'After **der / die / das** the adjective has only **two** endings: **-e** or **-en**. **Nominative**: **-e** (**der schöne Dom, die alte Brücke, das berühmte Schloss**). **Accusative**: only the **masculine** changes: **den schönen Dom**; feminine and neuter keep **-e**. **Dative**: always **-en** (**dem schönen Dom, der alten Brücke, dem berühmten Schloss**). **Plural**: always **-en** (**die schönen Türme**, **mit den schönen Türmen**). Rule of thumb: **-e** in the nominative and the feminine/neuter accusative — **-en** everywhere else.',
      explanationMdFr: 'Après **der / die / das**, l’adjectif n’a que **deux** terminaisons : **-e** ou **-en**. **Nominatif** : **-e** (**der schöne Dom, die alte Brücke, das berühmte Schloss**). **Accusatif** : seul le **masculin** change : **den schönen Dom** ; le féminin et le neutre gardent **-e**. **Datif** : toujours **-en** (**dem schönen Dom, der alten Brücke, dem berühmten Schloss**). **Pluriel** : toujours **-en** (**die schönen Türme**, **mit den schönen Türmen**). Règle simple : **-e** au nominatif et à l’accusatif féminin/neutre — **-en** partout ailleurs.',
      tables: [{ title: 'After der / die / das', titleFr: 'Après der / die / das', headers: ['Case', 'm', 'f', 'n', 'plural'], headersFr: ['Cas', 'm', 'f', 'n', 'pluriel'],
        rows: [['Nominative', 'der schöne Dom', 'die alte Brücke', 'das berühmte Schloss', 'die schönen Türme'], ['Accusative', 'den schönen Dom', 'die alte Brücke', 'das berühmte Schloss', 'die schönen Türme'], ['Dative', 'dem schönen Dom', 'der alten Brücke', 'dem berühmten Schloss', 'den schönen Türmen']],
        rowsFr: [['Nominatif', 'der schöne Dom', 'die alte Brücke', 'das berühmte Schloss', 'die schönen Türme'], ['Accusatif', 'den schönen Dom', 'die alte Brücke', 'das berühmte Schloss', 'die schönen Türme'], ['Datif', 'dem schönen Dom', 'der alten Brücke', 'dem berühmten Schloss', 'den schönen Türmen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'besichtigen', role: 'verb' }, { text: 'den alten Turm.', role: 'accusative' }], en: 'We are visiting the old tower.', fr: 'Nous visitons la vieille tour.' },
        { parts: [{ text: 'Die Touristen', role: 'subject' }, { text: 'stehen', role: 'verb' }, { text: 'vor dem berühmten Schloss.', role: 'dative' }], en: 'The tourists are standing in front of the famous castle.', fr: 'Les touristes sont devant le célèbre château.' },
      ],
      contrast: {
        a: { label: '-e: nominative, f / n accusative', labelFr: '-e : nominatif, accusatif f / n', note: 'der schöne Dom · die alte Brücke', noteFr: 'der schöne Dom · die alte Brücke', examples: [g('Schaut mal, der schöne Dom!', 'Look, the beautiful cathedral!', 'Regardez, la belle cathédrale !'), g('Wir sehen die alte Brücke.', 'We see the old bridge.', 'Nous voyons le vieux pont.')] },
        b: { label: '-en: everywhere else', labelFr: '-en : partout ailleurs', note: 'den schönen Dom · dem alten Turm', noteFr: 'den schönen Dom · dem alten Turm', examples: [g('Wir besichtigen den alten Turm.', 'We are visiting the old tower.', 'Nous visitons la vieille tour.'), g('Wir stehen vor dem berühmten Schloss.', 'We stand in front of the famous castle.', 'Nous sommes devant le célèbre château.')] },
      },
      examples: [
        g('Schaut mal, der schöne Dom!', 'Look, the beautiful cathedral!', 'Regardez, la belle cathédrale !'),
        g('Wir besichtigen den alten Turm.', 'We are visiting the old tower.', 'Nous visitons la vieille tour.'),
        g('Die Touristen stehen vor dem berühmten Schloss.', 'The tourists are standing in front of the famous castle.', 'Les touristes sont devant le célèbre château.'),
        g('Wir sind in der alten Altstadt.', 'We are in the old town.', 'Nous sommes dans la vieille ville.'),
        g('Wir gehen mit der netten Stadtführerin durch die Altstadt.', 'We walk through the old town with the nice tour guide.', 'Nous traversons la vieille ville avec la sympathique guide.'),
        g('Von den hohen Türmen sieht man die ganze Stadt.', 'From the tall towers you can see the whole town.', 'Des hautes tours, on voit toute la ville.'),
      ],
      mistakes: [
        { wrong: 'Wir besichtigen den alte Turm.', right: 'Wir besichtigen den alten Turm.', why: 'Masculine accusative: -en.', whyFr: 'Masculin accusatif : -en.' },
        { wrong: 'Wir stehen vor dem berühmte Schloss.', right: 'Wir stehen vor dem berühmten Schloss.', why: 'Dative: always -en.', whyFr: 'Datif : toujours -en.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l16-e1', prompt: 'Schaut mal, der schön__ Dom! (nominative, masculine)', promptFr: 'Schaut mal, der schön__ Dom ! (nominatif, masculin)', answer: 'e', hint: 'after der (nom) → -e', hintFr: 'après der (nom) → -e' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l16-e2', prompt: 'Wir besichtigen den alt__ Turm. (accusative, masculine)', promptFr: 'Wir besichtigen den alt__ Turm. (accusatif, masculin)', answer: 'en', hint: 'den + masculine accusative → -en', hintFr: 'den + accusatif masculin → -en' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l16-e4', prompt: 'Die Touristen stehen vor dem berühmt__ Schloss. (dative)', promptFr: 'Die Touristen stehen vor dem berühmt__ Schloss. (datif)', answer: 'en', hint: 'dative → -en', hintFr: 'datif → -en' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l16-e10', prompt: 'Wir sehen die alt__ Brücke. (accusative, feminine)', promptFr: 'Wir sehen die alt__ Brücke. (accusatif, féminin)', answer: 'e', hint: 'feminine accusative looks like the nominative → -e', hintFr: 'l’accusatif féminin ressemble au nominatif → -e' } },

    // ───────────── 3 · dieser and the overview ─────────────
    { kind: 'chapter', title: 'dieser und der Überblick', titleFr: 'dieser et l’aperçu', blurb: 'this one — and all three patterns.', blurbFr: 'celui-ci — et les trois schémas.' },

    { kind: 'situation', title: 'Diese alte Brücke', titleFr: 'Ce vieux pont',
      setting: 'Lara and Tim give their opinion on everything.', settingFr: 'Lara et Tim donnent leur avis sur tout.',
      lines: [
        line('Lara', 'Ich finde diese alte Brücke sehr malerisch.', 'I find this old bridge very picturesque.', 'Je trouve ce vieux pont très pittoresque.'),
        line('Tim', 'Dieser Turm ist am höchsten. Ich finde den Turm beeindruckend.', 'This tower is the tallest. I find the tower impressive.', 'Cette tour est la plus haute. Je trouve la tour impressionnante.'),
        line('Lara', 'Zuerst besuchen wir den alten Dom, danach gehen wir über die neue Brücke.', 'First we visit the old cathedral, then we cross the new bridge.', 'D’abord nous visitons la vieille cathédrale, puis nous traversons le nouveau pont.'),
        line('Tim', 'In diesem kleinen Café gibt es tollen Kuchen. Das historische Rathaus ist 500 Jahre alt.', 'In this little café they have great cake. The historic town hall is 500 years old.', 'Dans ce petit café, il y a un super gâteau. L’hôtel de ville historique a 500 ans.'),
      ],
      words: [{ id: 'a2l16-dieser', german: 'dieser / diese / dieses', english: 'this (masc / fem / neut)', french: 'ce, cet / cette / ce', gender: null, syllables: ['DIE', 'ser'], pronunciation: 'DEE-zer', example: { de: 'Dieses Schloss gefällt mir am besten.', en: 'I like this castle best.', fr: 'C’est ce château que je préfère.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l16-dieser-ueberblick', title: 'dieser / diese / dieses and the three patterns', titleFr: 'dieser / diese / dieses et les trois schémas',
      lead: 'dieser declines like der. After it the adjective is -e / -en. The case and gender must be visible once.',
      leadFr: 'dieser se décline comme der. Après lui, l’adjectif est -e / -en. Le cas et le genre doivent être visibles une fois.',
      explanationMd: '**dieser / diese / dieses** (“this”) declines like **der / die / das** — and so do the adjectives after it: **dieser schöne Dom, ich mag diese alte Brücke, in diesem kleinen Café**. Give opinions with **finden**: **Ich finde den Turm beeindruckend.** (After **finden** the adjective has **no ending**.) **The idea behind all three patterns:** the **case and gender must be visible once**. If the article already shows it (**der, dem**), the adjective relaxes to **-e / -en**. If the article is missing or shows nothing (**ein**), the adjective shows it.',
      explanationMdFr: '**dieser / diese / dieses** (« ce / cette ») se décline comme **der / die / das** — et les adjectifs qui le suivent aussi : **dieser schöne Dom, ich mag diese alte Brücke, in diesem kleinen Café**. Donne ton avis avec **finden** : **Ich finde den Turm beeindruckend.** (Après **finden**, l’adjectif est **sans terminaison**.) **L’idée des trois schémas :** le **cas et le genre doivent être visibles une fois**. Si l’article les montre déjà (**der, dem**), l’adjectif se détend en **-e / -en**. Si l’article manque ou ne montre rien (**ein**), c’est l’adjectif qui les montre.',
      tables: [{ title: 'The three patterns (m · f · n · plural)', titleFr: 'Les trois schémas (m · f · n · pluriel)', headers: ['Pattern', 'Nominative', 'Accusative', 'Dative'], headersFr: ['Schéma', 'Nominatif', 'Accusatif', 'Datif'],
        rows: [['After der / dieser', '-e · -e · -e · -en', '-en · -e · -e · -en', '-en · -en · -en · -en'], ['After ein / kein / mein', '-er · -e · -es · -en', '-en · -e · -es · -en', '-en · -en · -en · -en'], ['No article', '-er · -e · -es · -e', '-en · -e · -es · -e', '-em · -er · -em · -en']],
        rowsFr: [['Après der / dieser', '-e · -e · -e · -en', '-en · -e · -e · -en', '-en · -en · -en · -en'], ['Après ein / kein / mein', '-er · -e · -es · -en', '-en · -e · -es · -en', '-en · -en · -en · -en'], ['Sans article', '-er · -e · -es · -e', '-en · -e · -es · -e', '-em · -er · -em · -en']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'finde', role: 'verb' }, { text: 'diese alte Brücke', role: 'accusative' }, { text: 'sehr malerisch.', role: 'other' }], en: 'I find this old bridge very picturesque.', fr: 'Je trouve ce vieux pont très pittoresque.' },
        { parts: [{ text: 'In diesem kleinen Café', role: 'dative' }, { text: 'gibt', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'tollen Kuchen.', role: 'accusative' }], en: 'In this little café they have great cake.', fr: 'Dans ce petit café, il y a un super gâteau.' },
      ],
      contrast: {
        a: { label: 'Before the noun', labelFr: 'Devant le nom', note: 'with an ending', noteFr: 'avec une terminaison', examples: [g('Dieser schöne Dom ist berühmt.', 'This beautiful cathedral is famous.', 'Cette belle cathédrale est célèbre.'), g('Ich mag diese alte Brücke.', 'I like this old bridge.', 'J’aime ce vieux pont.')] },
        b: { label: 'After finden / sein', labelFr: 'Après finden / sein', note: 'no ending', noteFr: 'sans terminaison', examples: [g('Ich finde den Turm beeindruckend.', 'I find the tower impressive.', 'Je trouve la tour impressionnante.'), g('Der Dom ist berühmt.', 'The cathedral is famous.', 'La cathédrale est célèbre.')] },
      },
      examples: [
        g('Dieser Turm ist am höchsten.', 'This tower is the tallest.', 'Cette tour est la plus haute.'),
        g('Ich finde diese alte Brücke sehr malerisch.', 'I find this old bridge very picturesque.', 'Je trouve ce vieux pont très pittoresque.'),
        g('In diesem kleinen Café gibt es tollen Kuchen.', 'In this little café they have great cake.', 'Dans ce petit café, il y a un super gâteau.'),
        g('Zuerst besuchen wir den alten Dom, danach gehen wir über die neue Brücke.', 'First we visit the old cathedral, then we cross the new bridge.', 'D’abord nous visitons la vieille cathédrale, puis nous traversons le nouveau pont.'),
        g('Das ist ein alter Dom. — Ja, der alte Dom ist berühmt.', 'That is an old cathedral. — Yes, the old cathedral is famous.', 'C’est une vieille cathédrale. — Oui, la vieille cathédrale est célèbre.'),
        g('Das historische Rathaus ist 500 Jahre alt.', 'The historic town hall is 500 years old.', 'L’hôtel de ville historique a 500 ans.'),
      ],
      mistakes: [
        { wrong: 'Ich finde die Brücke malerische.', right: 'Ich finde die Brücke malerisch.', why: 'After finden / sein the adjective has no ending.', whyFr: 'Après finden / sein, l’adjectif n’a pas de terminaison.' },
        { wrong: 'In diesem kleine Café gibt es Kuchen.', right: 'In diesem kleinen Café gibt es Kuchen.', why: 'Dative: -en after diesem.', whyFr: 'Datif : -en après diesem.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l16-e5', prompt: 'Ich finde ___ Brücke malerisch.', promptFr: 'Ich finde ___ Brücke malerisch.', options: ['dieser', 'diese', 'dieses'], answer: 1, explain: 'Brücke is feminine; accusative feminine = diese.', explainFr: 'Brücke est féminin ; accusatif féminin = diese.', hint: 'die Brücke → diese Brücke.', hintFr: 'die Brücke → diese Brücke.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l16-e7', tokens: ['alten', 'Turm', 'Ich', 'den', 'finde', 'beeindruckend'], answer: ['Ich', 'finde', 'den', 'alten', 'Turm', 'beeindruckend'], hint: 'Ich finde + object (den alten Turm) + opinion adjective without ending.', hintFr: 'Ich finde + complément (den alten Turm) + adjectif d’opinion sans terminaison.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l16-e9', prompt: 'Wir gehen mit der ___ Stadtführerin durch die Altstadt.', promptFr: 'Wir gehen mit der ___ Stadtführerin durch die Altstadt.', options: ['netten', 'nette', 'netter'], answer: 0, explain: '"mit" + dative feminine: der netten Stadtführerin.', explainFr: '« mit » + datif féminin : der netten Stadtführerin.', hint: 'After "mit der" the adjective ends in -en.', hintFr: 'Après « mit der », l’adjectif se termine en -en.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l16-e3', prompt: 'Wir sind in der ___ Altstadt.', promptFr: 'Wir sind in der ___ Altstadt.', options: ['alte', 'alten', 'altes'], answer: 1, explain: 'Dative feminine ("in der"): the adjective ends in -en.', explainFr: 'Datif féminin (« in der ») : l’adjectif se termine en -en.', hint: '"in" + location = dative → -en.', hintFr: '« in » + lieu = datif → -en.' } },

    { kind: 'pronunciation', focus: 'The umlaut ü (round your lips for "oo", say "ee") in Brücke, Führung, berühmt, Sehenswürdigkeit', focusFr: 'Le tréma ü (arrondis les lèvres comme pour « ou », dis « i ») dans Brücke, Führung, berühmt, Sehenswürdigkeit', items: [{ id: 'a2l16-bruecke-pron', german: 'die Brücke', english: 'the bridge', french: 'le pont', gender: 'die', syllables: ['BRÜ', 'cke'], pronunciation: 'dee BRUE-ke', example: { de: 'Die Brücke ist sehr alt.', en: 'The bridge is very old.', fr: 'Le pont est très ancien.' } }, { id: 'a2l16-fuehrung-pron', german: 'die Führung', english: 'the guided tour', french: 'la visite guidée', gender: 'die', syllables: ['FÜH', 'rung'], pronunciation: 'dee FUE-roong', example: { de: 'Die Führung ist kostenlos.', en: 'The guided tour is free.', fr: 'La visite guidée est gratuite.' } }, { id: 'a2l16-beruehmt-pron', german: 'berühmt', english: 'famous', french: 'célèbre', gender: null, syllables: ['be', 'RÜHMT'], pronunciation: 'be-RUEMT', example: { de: 'Der Dom ist weltberühmt.', en: 'The cathedral is world-famous.', fr: 'La cathédrale est mondialement célèbre.' } }, { id: 'a2l16-schloss-pron', german: 'das Schloss', english: 'the castle', french: 'le château', gender: 'das', syllables: ['SCHLOSS'], pronunciation: 'dahs shloss', example: { de: 'Das Schloss ist geschlossen.', en: 'The castle is closed.', fr: 'Le château est fermé.' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l16-e8', prompt: 'Listen. What is closed today?', promptFr: 'Écoute. Qu’est-ce qui est fermé aujourd’hui ?', audio: { ttsText: 'Schaut mal, der schöne Dom! Leider ist der Turm heute geschlossen.' }, options: ['The tower', 'The cathedral', 'The bridge'], optionsFr: ['La tour', 'La cathédrale', 'Le pont'], answer: 0, hint: 'Listen for the word before "geschlossen".', hintFr: 'Écoute le mot avant « geschlossen ».' } },

    { kind: 'wrapup',
      summary: 'You can now describe sights: **-e / -en after der**, **dieser + adjective**, opinions with **finden** — and you have the **three adjective patterns** in one overview. 🎉',
      summaryFr: 'Tu sais maintenant décrire des sites : **-e / -en après der**, **dieser + adjectif**, avis avec **finden** — et tu as les **trois schémas d’adjectifs** en un aperçu. 🎉',
      card: { title: 'Adjective endings on one page', titleFr: 'Les terminaisons d’adjectifs en une page', sections: [
        { heading: 'After der / dieser', headingFr: 'Après der / dieser', rows: [g('Nom: -e · -e · -e · -en', 'm · f · n · plural', 'm · f · n · pluriel'), g('Akk: -en · -e · -e · -en', 'only m changes', 'seul le m change'), g('Dat: -en everywhere', 'always -en', 'toujours -en')] },
        { heading: 'After ein / no article', headingFr: 'Après ein / sans article', rows: [g('ein: -er · -e · -es', 'nominative', 'nominatif'), g('no article: -er · -e · -es · -e', 'nominative', 'nominatif')] },
        { heading: 'Opinion', headingFr: 'Avis', rows: [g('Ich finde den Turm beeindruckend.', 'no ending after finden', 'sans terminaison après finden')] },
      ] } },
  ],
};

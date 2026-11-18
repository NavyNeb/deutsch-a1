import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion11: Lesson = {
  id: 'l11', level: 'A1', module: 4, number: 16,
  title: { de: 'Verkehr und Wege', en: 'Transport and directions', fr: 'Les transports et le chemin' },
  theme: 'Getting around: transport, directions, and mit + dative', themeFr: 'Se déplacer : transports, directions, et mit + datif',
  goals: ['Name means of transport', 'Say how you travel with "mit dem …"', 'Ask for and give directions', 'Use the irregular verb "fahren"'], goalsFr: ['Nommer les moyens de transport', 'Dire comment tu voyages avec « mit dem … »', 'Demander et indiquer le chemin', 'Utiliser le verbe irrégulier « fahren »'],
  canDo: g('Ich kann sagen, wie ich reise, nach dem Weg fragen und eine Wegbeschreibung verstehen.', 'I can say how I travel, ask the way and understand directions.', 'Je sais dire comment je voyage, demander mon chemin et comprendre un itinéraire.'),
  steps: [
    { kind: 'intro', title: 'Verkehr und Wege 🚆', titleFr: 'Transports et chemins 🚆',
      scene: 'A visitor asks for the way to the station.', sceneFr: 'Un visiteur demande le chemin de la gare.',
      goals: ['Name means of transport and say how you travel with mit dem', 'Use the verb fahren', 'Ask for the way and understand directions'],
      goalsFr: ['Nommer des moyens de transport et dire comment tu voyages avec mit dem', 'Utiliser le verbe fahren', 'Demander ton chemin et comprendre un itinéraire'] },

    // ───────────── 1 · Transport ─────────────
    { kind: 'chapter', title: 'Verkehrsmittel', titleFr: 'Les moyens de transport', blurb: 'How do you get there?', blurbFr: 'Comment y vas-tu ?' },

    { kind: 'situation', title: 'Wie fährst du?', titleFr: 'Comment y vas-tu ?',
      setting: 'Paul and Lena talk about how they travel.', settingFr: 'Paul et Lena parlent de leurs déplacements.',
      lines: [
        line('Lena', 'Wie fährst du nach Berlin, Paul?', 'How are you travelling to Berlin, Paul?', 'Comment vas-tu à Berlin, Paul ?'),
        line('Paul', 'Ich fahre mit dem Zug. Der Zug fährt um acht Uhr.', 'I’m taking the train. The train leaves at eight.', 'Je prends le train. Le train part à huit heures.'),
        line('Lena', 'Ich fahre mit dem Fahrrad zur Arbeit.', 'I cycle to work.', 'Je vais au travail à vélo.'),
        line('Paul', 'Und dein Bruder? Fährt er mit dem Auto?', 'And your brother? Does he go by car?', 'Et ton frère ? Y va-t-il en voiture ?'),
        line('Lena', 'Nein, er fährt mit dem Bus.', 'No, he goes by bus.', 'Non, il y va en bus.'),
      ],
      words: [{ id: 'l11-fahren', german: 'fahren', english: 'to go (by vehicle) / to drive', french: 'aller (en véhicule) / conduire', gender: null, syllables: ['FAH', 'ren'], pronunciation: 'FAA-ren', example: { de: 'Ich fahre nach Berlin.', en: 'I travel to Berlin.', fr: 'Je vais à Berlin.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l11-e11', prompt: 'How does Paul travel to Berlin?', promptFr: 'Comment Paul va-t-il à Berlin ?', options: ['By train', 'By bus', 'By bicycle'], optionsFr: ['En train', 'En bus', 'À vélo'], answer: 0, explain: 'He says: “Ich fahre mit dem Zug.”', explainFr: 'Il dit : « Ich fahre mit dem Zug. »', hint: 'Look for “mit dem”.', hintFr: 'Cherche « mit dem ».' } },

    { kind: 'wordgroup', title: 'Verkehrsmittel und Orte', titleFr: 'Moyens de transport et lieux',
      items: [{ id: 'l11-bus', german: 'der Bus', english: 'the bus', french: 'le bus', gender: 'der', syllables: ['BUS'], pronunciation: 'dair BOOSS', example: { de: 'Ich fahre mit dem Bus.', en: 'I go by bus.', fr: 'Je prends le bus.' } }, { id: 'l11-zug', german: 'der Zug', english: 'the train', french: 'le train', gender: 'der', syllables: ['ZUG'], pronunciation: 'dair TSOOK', example: { de: 'Der Zug fährt um acht Uhr.', en: 'The train leaves at eight o’clock.', fr: 'Le train part à huit heures.' } }, { id: 'l11-auto', german: 'das Auto', english: 'the car', french: 'la voiture', gender: 'das', syllables: ['AU', 'to'], pronunciation: 'dahs OW-toh', example: { de: 'Wir fahren mit dem Auto.', en: 'We go by car.', fr: 'Nous y allons en voiture.' } }, { id: 'l11-fahrrad', german: 'das Fahrrad', english: 'the bicycle', french: 'le vélo', gender: 'das', syllables: ['FAHR', 'rad'], pronunciation: 'dahs FAAR-raht', example: { de: 'Ich fahre Fahrrad.', en: 'I ride a bike.', fr: 'Je fais du vélo.' } }, { id: 'l11-bahnhof', german: 'der Bahnhof', english: 'the train station', french: 'la gare', gender: 'der', syllables: ['BAHN', 'hof'], pronunciation: 'dair BAAN-hohf', example: { de: 'Wo ist der Bahnhof?', en: 'Where is the train station?', fr: 'Où est la gare ?' } }, { id: 'l11-strasse', german: 'die Straße', english: 'the street', french: 'la rue', gender: 'die', syllables: ['STRA', 'ße'], pronunciation: 'dee SHTRAH-ssuh', example: { de: 'Gehen Sie die Straße geradeaus.', en: 'Go straight along the street.', fr: 'Continuez tout droit dans la rue.' } }] },

    { kind: 'grammar', note: {
      id: 'l11-mit-dativ', title: 'mit + dative: by bus, by train', titleFr: 'mit + datif : en bus, en train',
      lead: 'mit always takes the dative: der → dem, die → der, das → dem.',
      leadFr: 'mit prend toujours le datif : der → dem, die → der, das → dem.',
      explanationMd: 'To say **how** you travel use **mit** + a **means of transport**. **mit** always takes the **dative** article: **der → dem**, **die → der**, **das → dem**. Say **Ich fahre mit dem Bus.** For walking say **zu Fuß**.',
      explanationMdFr: 'Pour dire **comment** tu voyages, utilise **mit** + un **moyen de transport**. **mit** prend toujours l’article au **datif** : **der → dem**, **die → der**, **das → dem**. Dis **Ich fahre mit dem Bus.** Pour la marche, dis **zu Fuß**.',
      tables: [{ title: 'mit + dative', titleFr: 'mit + datif', headers: ['Gender', 'Noun', 'mit …'], headersFr: ['Genre', 'Nom', 'mit …'],
        rows: [['der', 'der Bus, der Zug', 'mit dem Bus, mit dem Zug'], ['das', 'das Auto, das Fahrrad', 'mit dem Auto, mit dem Fahrrad'], ['die', 'die Bahn, die U-Bahn', 'mit der Bahn, mit der U-Bahn']],
        rowsFr: [['der', 'der Bus, der Zug', 'mit dem Bus, mit dem Zug'], ['das', 'das Auto, das Fahrrad', 'mit dem Auto, mit dem Fahrrad'], ['die', 'die Bahn, die U-Bahn', 'mit der Bahn, mit der U-Bahn']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'fahre', role: 'verb' }, { text: 'mit dem Bus', role: 'dative' }, { text: 'nach Berlin.', role: 'place' }], en: 'I go to Berlin by bus.', fr: 'Je vais à Berlin en bus.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'fahren', role: 'verb' }, { text: 'mit dem Auto.', role: 'dative' }], en: 'We go by car.', fr: 'Nous y allons en voiture.' },
      ],
      contrast: {
        a: { label: 'mit + vehicle', labelFr: 'mit + véhicule', note: 'dem / der', noteFr: 'dem / der', examples: [g('Ich fahre mit dem Bus.', 'I go by bus.', 'Je vais en bus.'), g('Sie fährt mit der Bahn.', 'She goes by train.', 'Elle va en train.')] },
        b: { label: 'zu Fuß (on foot)', labelFr: 'zu Fuß (à pied)', note: 'a fixed phrase', noteFr: 'une expression figée', examples: [g('Ich gehe zu Fuß.', 'I walk.', 'Je vais à pied.'), g('Gehst du zu Fuß zur Arbeit?', 'Do you walk to work?', 'Vas-tu au travail à pied ?')] },
      },
      examples: [
        g('Ich fahre mit dem Bus.', 'I go by bus.', 'Je vais en bus.'),
        g('Wir fahren mit dem Auto.', 'We go by car.', 'Nous y allons en voiture.'),
        g('Ich fahre mit dem Zug nach Berlin.', 'I go to Berlin by train.', 'Je vais à Berlin en train.'),
        g('Er fährt mit dem Fahrrad zur Arbeit.', 'He cycles to work.', 'Il va au travail à vélo.'),
        g('Sie fährt mit der Bahn.', 'She goes by train.', 'Elle va en train.'),
        g('Ich gehe zu Fuß.', 'I walk.', 'Je vais à pied.'),
      ],
      mistakes: [
        { wrong: 'Ich fahre mit der Bus.', right: 'Ich fahre mit dem Bus.', why: 'Bus is der, so the dative is dem.', whyFr: 'Bus est der : le datif est dem.' },
        { wrong: 'Ich fahre mit den Zug.', right: 'Ich fahre mit dem Zug.', why: 'mit never takes the accusative (den).', whyFr: 'mit ne prend jamais l’accusatif (den).' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l11-e1', prompt: 'Ich fahre mit ___ Bus. (dative: der → ?)', answer: 'dem', hint: 'der → dem after "mit"', hintFr: 'der → dem après « mit »' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l11-e6', word: 'Straße', answer: 'die', hint: '"Straße" (street) is feminine.', hintFr: '« Straße » (rue) est féminin.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l11-e7', tokens: ['dem', 'fahre', 'mit', 'Bus', 'Ich'], answer: ['Ich', 'fahre', 'mit', 'dem', 'Bus'], hint: 'Subject, verb, then "mit dem …".', hintFr: 'Sujet, verbe, puis « mit dem … ».' } },

    { kind: 'grammar', note: {
      id: 'l11-fahren-note', title: 'fahren: a changing vowel', titleFr: 'fahren : une voyelle qui change',
      lead: 'fahren changes a to ä in du and er/sie/es.',
      leadFr: 'fahren change a en ä à du et er/sie/es.',
      explanationMd: '**fahren** (to go by vehicle, to drive) changes its vowel from **a** to **ä** in **du** and **er/sie/es**, like **sprechen** changes e to i (lesson 6). All other persons are regular.',
      explanationMdFr: '**fahren** (aller en véhicule, conduire) change sa voyelle de **a** en **ä** à **du** et **er/sie/es**, comme **sprechen** change e en i (leçon 6). Les autres personnes sont régulières.',
      tables: [{ title: 'fahren (to go, to drive)', titleFr: 'fahren (aller, conduire)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren']], rowsFr: [['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'fährst', role: 'verb' }, { text: 'mit dem Fahrrad.', role: 'dative' }], en: 'You ride a bike.', fr: 'Tu vas à vélo.' },
        { parts: [{ text: 'Der Zug', role: 'subject' }, { text: 'fährt', role: 'verb' }, { text: 'um neun Uhr.', role: 'time' }], en: 'The train leaves at nine.', fr: 'Le train part à neuf heures.' },
      ],
      contrast: {
        a: { label: 'with the change', labelFr: 'avec le changement', note: 'du fährst, er fährt', noteFr: 'du fährst, er fährt', examples: [g('Du fährst mit dem Fahrrad.', 'You ride a bike.', 'Tu vas à vélo.'), g('Er fährt nach Berlin.', 'He goes to Berlin.', 'Il va à Berlin.')] },
        b: { label: 'without the change', labelFr: 'sans le changement', note: 'ich, wir, ihr, sie', noteFr: 'ich, wir, ihr, sie', examples: [g('Ich fahre nach Berlin.', 'I go to Berlin.', 'Je vais à Berlin.'), g('Wir fahren mit dem Auto.', 'We go by car.', 'Nous y allons en voiture.')] },
      },
      examples: [
        g('Du fährst mit dem Fahrrad.', 'You ride a bike.', 'Tu vas à vélo.'),
        g('Der Zug fährt um neun Uhr.', 'The train leaves at nine.', 'Le train part à neuf heures.'),
        g('Ich fahre nach Berlin.', 'I go to Berlin.', 'Je vais à Berlin.'),
        g('Wir fahren mit dem Auto.', 'We go by car.', 'Nous y allons en voiture.'),
        g('Fährst du heute mit dem Bus?', 'Are you taking the bus today?', 'Prends-tu le bus aujourd’hui ?'),
        g('Ihr fahrt nach Hause.', 'You (pl.) go home.', 'Vous rentrez à la maison.'),
      ],
      mistakes: [
        { wrong: 'Du fahrst mit dem Bus.', right: 'Du fährst mit dem Bus.', why: 'With du the vowel becomes ä.', whyFr: 'Avec du, la voyelle devient ä.' },
        { wrong: 'Ich fähre nach Berlin.', right: 'Ich fahre nach Berlin.', why: 'With ich no change: fahre.', whyFr: 'Avec ich, pas de changement : fahre.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l11-e3', prompt: 'Du ___ mit dem Fahrrad. (fahren)', answer: 'fährst', hint: 'du-form of fahren has an umlaut: a → ä', hintFr: 'la forme « du » de fahren a un tréma : a → ä' } },

    // ───────────── 2 · Directions ─────────────
    { kind: 'chapter', title: 'Nach dem Weg fragen', titleFr: 'Demander son chemin', blurb: 'Ask for the way and follow directions.', blurbFr: 'Demander le chemin et suivre un itinéraire.' },

    { kind: 'situation', title: 'Wie komme ich zum Bahnhof?', titleFr: 'Comment aller à la gare ?',
      setting: 'A visitor asks a passer-by for the way to the station.', settingFr: 'Un visiteur demande à un passant le chemin de la gare.',
      lines: [
        line('Besucher', 'Entschuldigung, wie komme ich zum Bahnhof?', 'Excuse me, how do I get to the station?', 'Excusez-moi, comment aller à la gare ?'),
        line('Passantin', 'Gehen Sie die Straße geradeaus.', 'Go straight ahead along the street.', 'Allez tout droit dans la rue.'),
        line('Besucher', 'Und dann?', 'And then?', 'Et ensuite ?'),
        line('Passantin', 'Dann gehen Sie links. Die Post ist rechts, und der Bahnhof ist dort.', 'Then go left. The post office is on the right, and the station is there.', 'Ensuite, allez à gauche. La poste est à droite, et la gare est là.'),
        line('Besucher', 'Vielen Dank!', 'Thank you very much!', 'Merci beaucoup !'),
      ],
      words: [{ id: 'l11-links', german: 'links', english: 'left', french: 'à gauche', gender: null, syllables: ['LINKS'], pronunciation: 'links', example: { de: 'Gehen Sie links.', en: 'Go left.', fr: 'Allez à gauche.' } }, { id: 'l11-rechts', german: 'rechts', english: 'right', french: 'à droite', gender: null, syllables: ['RECHTS'], pronunciation: 'rekhts', example: { de: 'Die Post ist rechts.', en: 'The post office is on the right.', fr: 'La poste est à droite.' } }, { id: 'l11-geradeaus', german: 'geradeaus', english: 'straight ahead', french: 'tout droit', gender: null, syllables: ['ge', 'ra', 'de', 'AUS'], pronunciation: 'ge-RAH-de-owss', example: { de: 'Gehen Sie geradeaus.', en: 'Go straight ahead.', fr: 'Allez tout droit.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l11-e12', prompt: 'Where is the post office?', promptFr: 'Où est la poste ?', options: ['On the right', 'On the left', 'Straight ahead'], optionsFr: ['À droite', 'À gauche', 'Tout droit'], answer: 0, explain: 'She says: “Die Post ist rechts.”', explainFr: 'Elle dit : « Die Post ist rechts. »', hint: 'Look for the word “Post”.', hintFr: 'Cherche le mot « Post ».' } },

    { kind: 'grammar', note: {
      id: 'l11-weg', title: 'Asking the way and following directions', titleFr: 'Demander son chemin et suivre un itinéraire',
      lead: 'Ask Wie komme ich zu …? You will hear the polite command Gehen Sie …',
      leadFr: 'Demande Wie komme ich zu … ? Tu entendras l’ordre poli Gehen Sie …',
      explanationMd: 'Ask **Wie komme ich zum Bahnhof?** (**zu + dem = zum**, **zu + der = zur**). Directions use the **polite command with Sie**: the verb comes **first**, then **Sie**: **Gehen Sie geradeaus.** You will study commands in lesson 17; for now learn to **understand** them.',
      explanationMdFr: 'Demande **Wie komme ich zum Bahnhof ?** (**zu + dem = zum**, **zu + der = zur**). Les indications utilisent l’**ordre poli avec Sie** : le verbe vient **en premier**, puis **Sie** : **Gehen Sie geradeaus.** Tu étudieras les ordres à la leçon 17 ; pour l’instant, apprends à les **comprendre**.',
      tables: [{ title: 'Directions', titleFr: 'Les directions', headers: ['German', 'Meaning'], headersFr: ['Allemand', 'Sens'],
        rows: [['geradeaus', 'straight ahead'], ['links', 'left'], ['rechts', 'right'], ['Wie komme ich zum Bahnhof?', 'How do I get to the station?'], ['zum / zur', 'to the (der, das / die)']],
        rowsFr: [['geradeaus', 'tout droit'], ['links', 'à gauche'], ['rechts', 'à droite'], ['Wie komme ich zum Bahnhof?', 'Comment aller à la gare ?'], ['zum / zur', 'à la / au (der, das / die)']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Gehen', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'geradeaus.', role: 'place' }], en: 'Go straight ahead.', fr: 'Allez tout droit.' },
        { parts: [{ text: 'Wie', role: 'other' }, { text: 'komme', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'zum Bahnhof?', role: 'place' }], en: 'How do I get to the station?', fr: 'Comment aller à la gare ?' },
      ],
      contrast: {
        a: { label: 'zum', labelFr: 'zum', note: 'zu + dem: der and das words', noteFr: 'zu + dem : mots en der et das', examples: [g('Wie komme ich zum Bahnhof?', 'How do I get to the station?', 'Comment aller à la gare ?'), g('Wie komme ich zum Museum?', 'How do I get to the museum?', 'Comment aller au musée ?')] },
        b: { label: 'zur', labelFr: 'zur', note: 'zu + der: die words', noteFr: 'zu + der : mots en die', examples: [g('Wie komme ich zur Post?', 'How do I get to the post office?', 'Comment aller à la poste ?'), g('Wie komme ich zur Schule?', 'How do I get to the school?', 'Comment aller à l’école ?')] },
      },
      examples: [
        g('Wie komme ich zum Bahnhof?', 'How do I get to the station?', 'Comment aller à la gare ?'),
        g('Gehen Sie geradeaus, dann rechts.', 'Go straight ahead, then right.', 'Allez tout droit, puis à droite.'),
        g('Die Post ist rechts.', 'The post office is on the right.', 'La poste est à droite.'),
        g('Gehen Sie links.', 'Go left.', 'Allez à gauche.'),
        g('Wo ist der Bahnhof?', 'Where is the station?', 'Où est la gare ?'),
        g('Gehen Sie die Straße geradeaus.', 'Go straight ahead along the street.', 'Allez tout droit dans la rue.'),
        g('Der Bahnhof ist dort.', 'The station is there.', 'La gare est là-bas.'),
      ],
      mistakes: [
        { wrong: 'Wie komme ich zu der Post?', right: 'Wie komme ich zur Post?', why: 'zu + der shrinks to zur.', whyFr: 'zu + der se contracte en zur.' },
        { wrong: 'Sie gehen geradeaus. (as a command)', right: 'Gehen Sie geradeaus.', why: 'In a command the verb comes first.', whyFr: 'Dans un ordre, le verbe vient en premier.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l11-e2', prompt: 'What does "geradeaus" mean?', promptFr: 'Que signifie « geradeaus » ?', options: ['left', 'right', 'straight ahead'], optionsFr: ['à gauche', 'à droite', 'tout droit'], answer: 2, explain: '"geradeaus" = straight ahead.', explainFr: '« geradeaus » = tout droit.', hint: 'It is the direction that is neither left nor right.', hintFr: 'C’est la direction qui n’est ni à gauche ni à droite.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l11-e4', pairs: [{ de: 'links', en: 'left', fr: 'à gauche' }, { de: 'rechts', en: 'right', fr: 'à droite' }, { de: 'geradeaus', en: 'straight ahead', fr: 'tout droit' }], hint: 'Match each direction word to its meaning.', hintFr: 'Associe chaque mot de direction à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l11-e8', prompt: 'How do you ask the way to the station?', promptFr: 'Comment demande-t-on le chemin de la gare ?', options: ['Wo fährt der Bus?', 'Wie komme ich zum Bahnhof?', 'Was kostet der Zug?'], answer: 1, explain: '"Wie komme ich zum …?" asks for directions.', explainFr: '« Wie komme ich zum …? » demande le chemin.', hint: 'Look for "Wie komme ich …".', hintFr: 'Cherche « Wie komme ich … ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l11-e9', prompt: 'Die Post ist ___. (on the right)', answer: 'rechts', hint: 'the opposite of "links"', hintFr: 'le contraire de « links »' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l11-e10', prompt: 'Listen. Which way should you go first?', promptFr: 'Écoute. Dans quelle direction faut-il aller d’abord ?', audio: { ttsText: 'Gehen Sie geradeaus, dann links. Der Bahnhof ist rechts.' }, options: ['Straight ahead', 'Right', 'Back'], optionsFr: ['Tout droit', 'À droite', 'En arrière'], answer: 0, hint: 'Listen for the first direction word.', hintFr: 'Écoute le premier mot de direction.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l11-e5', prompt: 'Listen. How does Paul travel to Berlin?', promptFr: 'Écoute. Comment Paul va-t-il à Berlin ?', audio: { ttsText: 'Ich heiße Paul. Ich fahre mit dem Zug nach Berlin.' }, options: ['By train', 'By car', 'By bike'], optionsFr: ['En train', 'En voiture', 'À vélo'], answer: 0, hint: 'Listen after "mit dem".', hintFr: 'Écoute après « mit dem ».' } },

    { kind: 'pronunciation', focus: 'Long "a" in fahren/Bahnhof, and "ß" is a sharp "s" in Straße', focusFr: 'Le « a » long dans fahren/Bahnhof, et « ß » est un « s » net dans Straße', items: [{ id: 'l11-bahnhof-pron', german: 'Bahnhof', english: 'station', french: 'gare', gender: null, syllables: ['BAHN', 'hof'], pronunciation: 'BAAN-hohf', example: { de: 'Der Bahnhof ist groß.', en: 'The station is big.', fr: 'La gare est grande.' } }, { id: 'l11-strasse-pron', german: 'Straße', english: 'street', french: 'rue', gender: null, syllables: ['STRA', 'ße'], pronunciation: 'SHTRAH-ssuh', example: { de: 'Die Straße ist lang.', en: 'The street is long.', fr: 'La rue est longue.' } }] },

    { kind: 'wrapup',
      summary: 'You can now say how you travel with **mit dem / mit der**, use **fahren** (du **fährst**), and ask for and understand directions. 🎉',
      summaryFr: 'Tu sais maintenant dire comment tu voyages avec **mit dem / mit der**, utiliser **fahren** (du **fährst**), et demander et comprendre un itinéraire. 🎉',
      card: { title: 'Lesson 16 on one page', titleFr: 'La leçon 16 en une page', sections: [
        { heading: 'Transport', headingFr: 'Transport', rows: [g('mit dem Bus / Zug / Auto / Fahrrad', 'der and das words: dem', 'mots en der et das : dem'), g('mit der Bahn', 'die words: der', 'mots en die : der'), g('zu Fuß', 'on foot', 'à pied')] },
        { heading: 'fahren', headingFr: 'fahren', rows: [g('ich fahre, du fährst, er fährt', 'a → ä', 'a → ä')] },
        { heading: 'Directions', headingFr: 'Directions', rows: [g('Wie komme ich zum Bahnhof?', 'asking the way', 'demander le chemin'), g('Gehen Sie geradeaus, dann links / rechts.', 'go straight, then left / right', 'allez tout droit, puis à gauche / droite')] },
      ] } },
  ],
};

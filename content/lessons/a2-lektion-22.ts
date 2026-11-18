import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion22: Lesson = {
  id: 'a2-l22', level: 'A2', module: 3, number: 9,
  title: { de: 'Woher, wo, wohin?', en: 'Where from, where, where to?', fr: 'D’où, où, vers où ?' },
  theme: 'Places, people, cities and countries: aus / in / nach, von / bei / zu', themeFr: 'Lieux, personnes, villes et pays : aus / in / nach, von / bei / zu',
  goals: ['Ask and answer Woher? Wo? Wohin?', 'Use aus dem / im / ins for places', 'Use vom / beim / zum for people and errands', 'Use nach, in die and aus with cities and countries'], goalsFr: ['Poser et répondre à Woher ? Wo ? Wohin ?', 'Utiliser aus dem / im / ins pour les lieux', 'Utiliser vom / beim / zum pour les personnes et les courses', 'Utiliser nach, in die et aus avec les villes et les pays'],
  canDo: g('Ich kann fragen und sagen, woher ich komme, wo ich bin und wohin ich gehe — bei Orten, Personen, Städten und Ländern.', 'I can ask and say where I come from, where I am and where I am going — with places, people, cities and countries.', 'Je sais demander et dire d’où je viens, où je suis et où je vais — avec des lieux, des personnes, des villes et des pays.'),
  steps: [
    { kind: 'intro', title: 'Woher? Wo? Wohin? 🧭', titleFr: 'Woher ? Wo ? Wohin ? 🧭',
      scene: 'Lara, Tim and Lina meet on the street and tell each other where they are coming from and going to.', sceneFr: 'Lara, Tim et Lina se croisent dans la rue et se disent d’où ils viennent et où ils vont.',
      goals: ['Ask and answer Woher? Wo? Wohin?', 'Use aus / in / ins for places and vom / beim / zum for people', 'Use nach, in die and aus with cities and countries'],
      goalsFr: ['Demander et répondre à Woher ? Wo ? Wohin ?', 'Utiliser aus / in / ins pour les lieux et vom / beim / zum pour les personnes', 'Utiliser nach, in die et aus avec les villes et les pays'] },

    // ───────────── 1 · Places ─────────────
    { kind: 'chapter', title: 'Orte: aus, in, ins', titleFr: 'Les lieux : aus, in, ins', blurb: 'Buildings, rooms, shops.', blurbFr: 'Bâtiments, pièces, magasins.' },

    { kind: 'situation', title: 'Woher kommst du gerade?', titleFr: 'D’où viens-tu à l’instant ?',
      setting: 'Lara meets Tim in front of the pharmacy.', settingFr: 'Lara retrouve Tim devant la pharmacie.',
      lines: [
        line('Lara', 'Hallo Tim! Woher kommst du gerade?', 'Hi Tim! Where are you coming from?', 'Salut Tim ! D’où viens-tu ?'),
        line('Tim', 'Ich komme aus der Apotheke. Und du? Wohin gehst du?', 'I’m coming out of the pharmacy. And you? Where are you going?', 'Je sors de la pharmacie. Et toi ? Où vas-tu ?'),
        line('Lara', 'Ich gehe zur Post und hole ein Paket ab.', 'I’m going to the post office to pick up a parcel.', 'Je vais à la poste chercher un colis.'),
        line('Tim', 'Heute Abend gehen wir ins Konzert. Kommst du mit?', 'This evening we’re going to a concert. Are you coming?', 'Ce soir, nous allons au concert. Tu viens ?'),
        line('Lara', 'Gern! Wo ist das Konzert?', 'Gladly! Where is the concert?', 'Volontiers ! Où a lieu le concert ?'),
        line('Tim', 'Im Park, hinter dem Bahnhof.', 'In the park behind the station.', 'Dans le parc, derrière la gare.'),
      ],
      words: [{ id: 'a2l22-woher', german: 'woher', english: 'where from', french: 'd’où', gender: null, syllables: ['wo', 'HER'], pronunciation: 'voh-HAIR', example: { de: 'Woher kommst du?', en: 'Where are you from?', fr: 'D’où viens-tu ?' } }, { id: 'a2l22-wohin', german: 'wohin', english: 'where to', french: 'où (direction) / vers où', gender: null, syllables: ['wo', 'HIN'], pronunciation: 'voh-HIN', example: { de: 'Wohin gehst du heute?', en: 'Where are you going today?', fr: 'Où vas-tu aujourd’hui ?' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l22-e13', prompt: 'Where does Tim come from?', promptFr: 'D’où vient Tim ?', options: ['From the pharmacy', 'From the post office', 'From the concert'], optionsFr: ['De la pharmacie', 'De la poste', 'Du concert'], answer: 0, explain: 'He says: “Ich komme aus der Apotheke.”', explainFr: 'Il dit : « Ich komme aus der Apotheke. »', hint: 'Look for “aus”.', hintFr: 'Cherche « aus ».' } },

    { kind: 'wordgroup', title: 'Orte', titleFr: 'Lieux',
      items: [{ id: 'a2l22-apotheke', german: 'die Apotheke', english: 'the pharmacy', french: 'la pharmacie', gender: 'die', syllables: ['A', 'po', 'THE', 'ke'], pronunciation: 'dee ah-poh-TAY-keh', example: { de: 'Sie kommt aus der Apotheke.', en: 'She is coming out of the pharmacy.', fr: 'Elle sort de la pharmacie.' } }, { id: 'a2l22-post', german: 'die Post', english: 'the post office', french: 'la poste', gender: 'die', syllables: ['POST'], pronunciation: 'dee POST', example: { de: 'Ich gehe zur Post und hole ein Paket ab.', en: 'I’m going to the post office to pick up a parcel.', fr: 'Je vais à la poste chercher un colis.' } }, { id: 'a2l22-konzert', german: 'das Konzert', english: 'the concert', french: 'le concert', gender: 'das', syllables: ['kon', 'ZERT'], pronunciation: 'dahs kon-TSAIRT', example: { de: 'Wir gehen heute Abend ins Konzert.', en: 'We’re going to a concert this evening.', fr: 'Nous allons au concert ce soir.' } }, { id: 'a2l22-ausland', german: 'das Ausland', english: 'abroad / foreign countries', french: 'l’étranger', gender: 'das', syllables: ['AUS', 'land'], pronunciation: 'dahs OWSS-lahnt', example: { de: 'Mein Bruder lebt im Ausland.', en: 'My brother lives abroad.', fr: 'Mon frère vit à l’étranger.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l22-orte', title: 'Places: aus / in / in', titleFr: 'Les lieux : aus / in / in',
      lead: 'Woher? → aus + dative. Wo? → in + dative. Wohin? → in + accusative. For stations and the post office use zu.',
      leadFr: 'Woher ? → aus + datif. Wo ? → in + datif. Wohin ? → in + accusatif. Pour la gare et la poste, utilise zu.',
      explanationMd: 'For places you can go **into** (a building, a room, a shop): **Woher?** → **aus + dative** (aus **dem** Kino, aus **der** Apotheke); **Wo?** → **in + dative** (**im** Kino = in dem, in **der** Apotheke); **Wohin?** → **in + accusative** (**ins** Kino = in das, in **die** Apotheke). For places you go **to** rather than enter, use **zu**: **zum** Bahnhof, **zur** Post, **zum** Flughafen (**zum** = zu dem, **zur** = zu der).',
      explanationMdFr: 'Pour les lieux où tu peux **entrer** (un bâtiment, une pièce, un magasin) : **Woher ?** → **aus + datif** (aus **dem** Kino, aus **der** Apotheke) ; **Wo ?** → **in + datif** (**im** Kino = in dem, in **der** Apotheke) ; **Wohin ?** → **in + accusatif** (**ins** Kino = in das, in **die** Apotheke). Pour les lieux où tu vas **vers** sans y entrer, utilise **zu** : **zum** Bahnhof, **zur** Post, **zum** Flughafen (**zum** = zu dem, **zur** = zu der).',
      tables: [{ title: 'Places', titleFr: 'Les lieux', headers: ['Question', 'Preposition', 'Example'], headersFr: ['Question', 'Préposition', 'Exemple'],
        rows: [['Woher?', 'aus + dative', 'Sie kommt aus der Apotheke.'], ['Wo?', 'in + dative', 'Wir sind im Kino.'], ['Wohin?', 'in + accusative', 'Wir gehen ins Kino.'], ['Wohin? (not entering)', 'zu + dative', 'Ich fahre zum Bahnhof und zur Post.']],
        rowsFr: [['Woher ?', 'aus + datif', 'Sie kommt aus der Apotheke.'], ['Wo ?', 'in + datif', 'Wir sind im Kino.'], ['Wohin ?', 'in + accusatif', 'Wir gehen ins Kino.'], ['Wohin ? (sans entrer)', 'zu + datif', 'Ich fahre zum Bahnhof und zur Post.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'kommt', role: 'verb' }, { text: 'aus der Apotheke.', role: 'dative' }], en: 'She comes out of the pharmacy.', fr: 'Elle sort de la pharmacie.' },
        { parts: [{ text: 'Morgen', role: 'time' }, { text: 'gehen', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'ins Konzert.', role: 'accusative' }], en: 'Tomorrow we are going to a concert.', fr: 'Demain, nous allons à un concert.' },
      ],
      contrast: {
        a: { label: 'in = into the place', labelFr: 'in = entrer dans le lieu', note: 'ins Kino, in die Apotheke', noteFr: 'ins Kino, in die Apotheke', examples: [g('Wir gehen ins Kino.', 'We are going to the cinema.', 'Nous allons au cinéma.'), g('Sie geht in die Apotheke.', 'She goes into the pharmacy.', 'Elle entre dans la pharmacie.')] },
        b: { label: 'zu = toward the place', labelFr: 'zu = vers le lieu', note: 'zum Bahnhof, zur Post', noteFr: 'zum Bahnhof, zur Post', examples: [g('Ich fahre zum Bahnhof.', 'I am going to the station.', 'Je vais à la gare.'), g('Ich gehe zur Post.', 'I am going to the post office.', 'Je vais à la poste.')] },
      },
      examples: [
        g('Sie kommt aus der Apotheke.', 'She comes out of the pharmacy.', 'Elle sort de la pharmacie.'),
        g('Wir sind im Kino. Morgen gehen wir ins Konzert.', 'We are at the cinema. Tomorrow we go to a concert.', 'Nous sommes au cinéma. Demain, nous allons à un concert.'),
        g('Ich fahre zum Bahnhof und dann zur Post.', 'I’m going to the station and then to the post office.', 'Je vais à la gare, puis à la poste.'),
        g('Er kommt aus dem Supermarkt.', 'He comes out of the supermarket.', 'Il sort du supermarché.'),
        g('Die Kinder sind im Garten.', 'The children are in the garden.', 'Les enfants sont dans le jardin.'),
        g('Gehst du heute in die Stadt?', 'Are you going into town today?', 'Vas-tu en ville aujourd’hui ?'),
      ],
      mistakes: [
        { wrong: 'Sie kommt von der Apotheke.', right: 'Sie kommt aus der Apotheke.', why: 'For a building you go into, use aus.', whyFr: 'Pour un bâtiment dans lequel on entre, utilise aus.' },
        { wrong: 'Ich gehe in den Bahnhof.', right: 'Ich gehe zum Bahnhof.', why: 'For places you go to (not into), use zu.', whyFr: 'Pour les lieux où l’on va (sans y entrer), utilise zu.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l22-e10', prompt: 'Wohin geht ihr heute Abend? — ___ Konzert! (in + das)', promptFr: 'Où allez-vous ce soir ? — ___ Konzert ! (in + das)', answer: 'ins', hint: 'Direction + das → ins (in + das)', hintFr: 'Direction + das → ins (in + das)' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l22-e5', prompt: 'Listen. Where is she going now?', promptFr: 'Écoute. Où va-t-elle maintenant ?', audio: { ttsText: 'Ich komme gerade vom Arzt und gehe jetzt zur Apotheke.' }, options: ['To the pharmacy', 'To the doctor', 'To the post office'], optionsFr: ['À la pharmacie', 'Chez le médecin', 'À la poste'], answer: 0, hint: '"vom" = from (where she was). "zur" = to (where she is going).', hintFr: '« vom » = d’où elle vient. « zur » = où elle va.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l22-e12', word: 'Türkei', answer: 'die', hint: 'Words ending in -ei are feminine.', hintFr: 'Les mots en -ei sont féminins.' } },

    // ───────────── 2 · People ─────────────
    { kind: 'chapter', title: 'Personen: von, bei, zu', titleFr: 'Les personnes : von, bei, zu', blurb: 'vom Arzt, beim Bäcker, zum Friseur.', blurbFr: 'vom Arzt, beim Bäcker, zum Friseur.' },

    { kind: 'situation', title: 'Beim Bäcker, beim Friseur', titleFr: 'Chez le boulanger, chez le coiffeur',
      setting: 'Three people meet and compare errands.', settingFr: 'Trois personnes se croisent et comparent leurs courses.',
      lines: [
        line('Lara', 'Wo ist Lina? Ich suche sie.', 'Where is Lina? I am looking for her.', 'Où est Lina ? Je la cherche.'),
        line('Tim', 'Sie kommt gerade vom Friseur. Und ich bin gerade beim Bäcker.', 'She is just coming from the hairdresser’s. And I’m at the baker’s right now.', 'Elle sort du coiffeur. Et moi, je suis chez le boulanger.'),
        line('Lina', 'Morgen gehe ich zum Zahnarzt. Am Sonntag fahren wir zu meiner Oma.', 'Tomorrow I’m going to the dentist. On Sunday we’re driving to my grandma’s.', 'Demain, je vais chez le dentiste. Dimanche, nous allons chez ma grand-mère.'),
        line('Lara', 'Und am Samstag bin ich bei meiner Oma. Sie wohnt in Wien.', 'And on Saturday I’m at my grandma’s. She lives in Vienna.', 'Et samedi, je suis chez ma grand-mère. Elle habite à Vienne.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Personen und Dienste', titleFr: 'Personnes et services',
      items: [{ id: 'a2l22-zahnarzt', german: 'der Zahnarzt', english: 'the dentist', french: 'le dentiste', gender: 'der', syllables: ['ZAHN', 'arzt'], pronunciation: 'dair TSAHN-artst', example: { de: 'Ich gehe morgen zum Zahnarzt.', en: 'I’m going to the dentist tomorrow.', fr: 'Je vais chez le dentiste demain.' } }, { id: 'a2l22-baecker', german: 'der Bäcker', english: 'the baker', french: 'le boulanger', gender: 'der', syllables: ['BÄ', 'cker'], pronunciation: 'dair BECK-er', example: { de: 'Ich bin gerade beim Bäcker.', en: 'I’m at the baker’s right now.', fr: 'Je suis en ce moment chez le boulanger.' } }, { id: 'a2l22-friseur', german: 'der Friseur', english: 'the hairdresser', french: 'le coiffeur', gender: 'der', syllables: ['fri', 'SEUR'], pronunciation: 'dair free-ZOER', example: { de: 'Lina kommt gerade vom Friseur.', en: 'Lina is just back from the hairdresser’s.', fr: 'Lina revient tout juste de chez le coiffeur.' } }, { id: 'a2l22-oma', german: 'die Oma', english: 'grandma', french: 'la grand-mère (mamie)', gender: 'die', syllables: ['O', 'ma'], pronunciation: 'dee OH-mah', example: { de: 'Am Sonntag sind wir bei meiner Oma.', en: 'On Sunday we’re at my grandma’s.', fr: 'Dimanche, nous sommes chez ma grand-mère.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l22-personen', title: 'People and errands: von / bei / zu', titleFr: 'Personnes et courses : von / bei / zu',
      lead: 'For people and professionals: von, bei, zu — always with the dative. Never “in den Arzt”.',
      leadFr: 'Pour les personnes et les professionnels : von, bei, zu — toujours avec le datif. Jamais « in den Arzt ».',
      explanationMd: 'For **people** (and the professionals you visit) use **von / bei / zu**, always with the **dative**: **Woher?** → **von** (**vom** Arzt, von Anna); **Wo?** → **bei** (**beim** Bäcker, bei meiner Oma); **Wohin?** → **zu** (**zum** Friseur, zu Anna, **zur** Ärztin). Contractions: **von + dem = vom**, **bei + dem = beim**, **zu + dem = zum**, **zu + der = zur**. In English you say “at the baker’s” — in German **beim Bäcker**.',
      explanationMdFr: 'Pour les **personnes** (et les professionnels que tu vas voir), utilise **von / bei / zu**, toujours avec le **datif** : **Woher ?** → **von** (**vom** Arzt, von Anna) ; **Wo ?** → **bei** (**beim** Bäcker, bei meiner Oma) ; **Wohin ?** → **zu** (**zum** Friseur, zu Anna, **zur** Ärztin). Contractions : **von + dem = vom**, **bei + dem = beim**, **zu + dem = zum**, **zu + der = zur**. En français on dit « chez le boulanger » — en allemand **beim Bäcker**.',
      tables: [{ title: 'People', titleFr: 'Les personnes', headers: ['Question', 'Preposition', 'Example'], headersFr: ['Question', 'Préposition', 'Exemple'],
        rows: [['Woher?', 'von + dative', 'Lina kommt gerade vom Friseur.'], ['Wo?', 'bei + dative', 'Tom ist beim Zahnarzt.'], ['Wohin?', 'zu + dative', 'Am Sonntag fahren wir zu meiner Oma.']],
        rowsFr: [['Woher ?', 'von + datif', 'Lina kommt gerade vom Friseur.'], ['Wo ?', 'bei + datif', 'Tom ist beim Zahnarzt.'], ['Wohin ?', 'zu + datif', 'Am Sonntag fahren wir zu meiner Oma.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Lina', role: 'subject' }, { text: 'kommt', role: 'verb' }, { text: 'gerade', role: 'time' }, { text: 'vom Friseur.', role: 'dative' }], en: 'Lina is just coming from the hairdresser’s.', fr: 'Lina sort du coiffeur.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'fahren', role: 'verb' }, { text: 'zu meiner Oma.', role: 'dative' }], en: 'We are driving to my grandma’s.', fr: 'Nous allons chez ma grand-mère.' },
      ],
      contrast: {
        a: { label: 'People: von, bei, zu', labelFr: 'Personnes : von, bei, zu', note: 'always dative', noteFr: 'toujours le datif', examples: [g('Tom ist beim Zahnarzt.', 'Tom is at the dentist’s.', 'Tom est chez le dentiste.'), g('Ich gehe zum Friseur.', 'I am going to the hairdresser’s.', 'Je vais chez le coiffeur.')] },
        b: { label: 'Places: aus, in, ins', labelFr: 'Lieux : aus, in, ins', note: 'dative / accusative', noteFr: 'datif / accusatif', examples: [g('Wir sind im Kino.', 'We are at the cinema.', 'Nous sommes au cinéma.'), g('Wir gehen ins Kino.', 'We are going to the cinema.', 'Nous allons au cinéma.')] },
      },
      examples: [
        g('Lina kommt gerade vom Friseur.', 'Lina is just coming from the hairdresser’s.', 'Lina sort du coiffeur.'),
        g('Tom ist beim Zahnarzt.', 'Tom is at the dentist’s.', 'Tom est chez le dentiste.'),
        g('Am Sonntag fahren wir zu meiner Oma.', 'On Sunday we’re driving to my grandma’s.', 'Dimanche, nous allons chez ma grand-mère.'),
        g('Ich bin beim Bäcker.', 'I am at the baker’s.', 'Je suis chez le boulanger.'),
        g('Wann kommst du vom Arzt zurück?', 'When are you back from the doctor’s?', 'Quand reviens-tu de chez le médecin ?'),
        g('Sie geht heute zur Ärztin.', 'She is going to the doctor’s today.', 'Elle va chez la médecin aujourd’hui.'),
      ],
      mistakes: [
        { wrong: 'Ich gehe in den Zahnarzt.', right: 'Ich gehe zum Zahnarzt.', why: 'For a person, “Wohin?” is zu + dative.', whyFr: 'Pour une personne, « Wohin ? » = zu + datif.' },
        { wrong: 'Er ist bei den Bäcker.', right: 'Er ist beim Bäcker.', why: 'bei + dem = beim.', whyFr: 'bei + dem = beim.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l22-e1', prompt: 'Ich gehe ___ Zahnarzt. (zu + dem)', promptFr: 'Ich gehe ___ Zahnarzt. (zu + dem) — « Je vais chez le dentiste. »', answer: 'zum', hint: 'A person → zu; zu + dem = zum', hintFr: 'Une personne → zu ; zu + dem = zum' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l22-e2', prompt: 'Mia ist gerade ___ Bäcker. (bei + dem)', promptFr: 'Mia ist gerade ___ Bäcker. (bei + dem) — « Mia est chez le boulanger. »', answer: 'beim', hint: 'Wo? + a person → bei; bei + dem = beim', hintFr: 'Wo ? + une personne → bei ; bei + dem = beim' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l22-e4', pairs: [{ de: 'beim Bäcker', en: 'at the baker’s', fr: 'chez le boulanger' }, { de: 'vom Arzt', en: 'from the doctor’s', fr: 'de chez le médecin' }, { de: 'zum Friseur', en: 'to the hairdresser’s', fr: 'aller chez le coiffeur' }], hint: 'bei = at, von = from, zu = to.', hintFr: 'bei = chez (lieu), von = de chez, zu = vers / chez (direction).' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l22-e8', prompt: 'Am Samstag bin ich ___ meiner Oma.', promptFr: 'Am Samstag bin ich ___ meiner Oma. (samedi, je suis chez ma grand-mère)', options: ['zu', 'bei', 'in'], answer: 1, explain: 'Location with a person: bei + dative (Wo?). "zu" would be the direction.', explainFr: 'Lieu avec une personne : bei + datif (Wo ?). « zu » exprimerait la direction.', hint: 'You are already there: Wo? → bei.', hintFr: 'Tu y es déjà : Wo ? → bei.' } },

    // ───────────── 3 · Cities and countries ─────────────
    { kind: 'chapter', title: 'Städte und Länder: nach, in, aus', titleFr: 'Villes et pays : nach, in, aus', blurb: 'nach Spanien, in die Schweiz.', blurbFr: 'nach Spanien, in die Schweiz.' },

    { kind: 'situation', title: 'Wohin fliegen wir?', titleFr: 'Où partons-nous ?',
      setting: 'Lara and Tim plan their holiday.', settingFr: 'Lara et Tim planifient leurs vacances.',
      lines: [
        line('Lara', 'Zuerst fahren wir nach Spanien, dann fliegen wir in die Türkei.', 'First we go to Spain, then we fly to Turkey.', 'D’abord nous allons en Espagne, puis nous prenons l’avion pour la Turquie.'),
        line('Tim', 'Meine Kollegin kommt aus der Türkei. Und mein Bruder lebt im Ausland, in der Schweiz.', 'My colleague comes from Turkey. And my brother lives abroad, in Switzerland.', 'Ma collègue vient de Turquie. Et mon frère vit à l’étranger, en Suisse.'),
        line('Lara', 'Im Winter fahren wir in die Schweiz. Ein Freund fliegt im Mai in den Iran.', 'In winter we’re going to Switzerland. A friend is flying to Iran in May.', 'En hiver, nous allons en Suisse. Un ami s’envole pour l’Iran en mai.'),
        line('Tim', 'Und woher kommt Jan? — Er kommt aus der Schweiz.', 'And where does Jan come from? — He comes from Switzerland.', 'Et d’où vient Jan ? — Il vient de Suisse.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l22-e14', prompt: 'Where do they fly after Spain?', promptFr: 'Où prennent-ils l’avion après l’Espagne ?', options: ['To Turkey', 'To Switzerland', 'To Iran'], optionsFr: ['En Turquie', 'En Suisse', 'En Iran'], answer: 0, explain: 'Lara says: “…dann fliegen wir in die Türkei.”', explainFr: 'Lara dit : « …dann fliegen wir in die Türkei. »', hint: 'Look for “dann”.', hintFr: 'Cherche « dann ».' } },

    { kind: 'wordgroup', title: 'Länder', titleFr: 'Les pays',
      items: [{ id: 'a2l22-schweiz', german: 'die Schweiz', english: 'Switzerland', french: 'la Suisse', gender: 'die', syllables: ['SCHWEIZ'], pronunciation: 'dee shvites', example: { de: 'Im Winter fahren wir in die Schweiz.', en: 'In winter we go to Switzerland.', fr: 'En hiver, nous allons en Suisse.' } }, { id: 'a2l22-tuerkei', german: 'die Türkei', english: 'Turkey', french: 'la Turquie', gender: 'die', syllables: ['Tür', 'KEI'], pronunciation: 'dee tuer-KYE', example: { de: 'Meine Kollegin kommt aus der Türkei.', en: 'My colleague comes from Turkey.', fr: 'Ma collègue vient de Turquie.' } }, { id: 'a2l22-iran', german: 'der Iran', english: 'Iran', french: 'l’Iran', gender: 'der', syllables: ['i', 'RAN'], pronunciation: 'dair ee-RAHN', example: { de: 'Er fliegt im Mai in den Iran.', en: 'He flies to Iran in May.', fr: 'Il prend l’avion pour l’Iran en mai.' } }, { id: 'a2l22-spanien', german: 'Spanien', english: 'Spain', french: 'l’Espagne', gender: null, syllables: ['SPA', 'ni', 'en'], pronunciation: 'SHPAH-nee-en', example: { de: 'Im Sommer fahren wir nach Spanien.', en: 'In summer we’re going to Spain.', fr: 'En été, nous allons en Espagne.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l22-laender', title: 'Cities and countries: nach / in / aus', titleFr: 'Villes et pays : nach / in / aus',
      lead: 'Cities and most countries have no article: aus, in, nach. Countries with an article are normal places: aus der, in der, in die.',
      leadFr: 'Les villes et la plupart des pays n’ont pas d’article : aus, in, nach. Les pays avec article sont des lieux normaux : aus der, in der, in die.',
      explanationMd: '**Cities and most countries have no article.** Then: **Woher?** → **aus** (aus Berlin, aus Spanien); **Wo?** → **in** (in Berlin, in Spanien); **Wohin?** → **nach** (nach Berlin, nach Spanien). **Countries with an article** (**die** Schweiz, **die** Türkei, **der** Iran, **die** USA) behave like ordinary places — **no “nach”**: **in die** Schweiz, **in der** Schweiz, **aus der** Schweiz; **in den** Iran, **im** Iran, **aus dem** Iran.',
      explanationMdFr: '**Les villes et la plupart des pays n’ont pas d’article.** Alors : **Woher ?** → **aus** (aus Berlin, aus Spanien) ; **Wo ?** → **in** (in Berlin, in Spanien) ; **Wohin ?** → **nach** (nach Berlin, nach Spanien). **Les pays avec article** (**die** Schweiz, **die** Türkei, **der** Iran, **die** USA) se comportent comme de simples lieux — **pas de « nach »** : **in die** Schweiz, **in der** Schweiz, **aus der** Schweiz ; **in den** Iran, **im** Iran, **aus dem** Iran.',
      tables: [{ title: 'Countries and cities', titleFr: 'Pays et villes', headers: ['', 'Woher?', 'Wo?', 'Wohin?'], headersFr: ['', 'Woher ?', 'Wo ?', 'Wohin ?'],
        rows: [['no article', 'aus Spanien', 'in Spanien', 'nach Spanien'], ['die Schweiz', 'aus der Schweiz', 'in der Schweiz', 'in die Schweiz'], ['die Türkei', 'aus der Türkei', 'in der Türkei', 'in die Türkei'], ['der Iran', 'aus dem Iran', 'im Iran', 'in den Iran']],
        rowsFr: [['sans article', 'aus Spanien', 'in Spanien', 'nach Spanien'], ['die Schweiz', 'aus der Schweiz', 'in der Schweiz', 'in die Schweiz'], ['die Türkei', 'aus der Türkei', 'in der Türkei', 'in die Türkei'], ['der Iran', 'aus dem Iran', 'im Iran', 'in den Iran']], highlightCol: 3 }],
      anatomy: [
        { parts: [{ text: 'Im Sommer', role: 'time' }, { text: 'fliegen', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'nach Spanien.', role: 'place' }], en: 'In summer we fly to Spain.', fr: 'En été, nous prenons l’avion pour l’Espagne.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'fliegen', role: 'verb' }, { text: 'in die Türkei.', role: 'accusative' }], en: 'We fly to Turkey.', fr: 'Nous prenons l’avion pour la Turquie.' },
      ],
      contrast: {
        a: { label: 'No article → nach', labelFr: 'Sans article → nach', note: 'nach Spanien, nach Berlin', noteFr: 'nach Spanien, nach Berlin', examples: [g('Im Sommer fliegen wir nach Spanien.', 'In summer we fly to Spain.', 'En été, nous prenons l’avion pour l’Espagne.'), g('Sie kommt aus Kamerun und wohnt jetzt in Hamburg.', 'She comes from Cameroon and now lives in Hamburg.', 'Elle vient du Cameroun et habite maintenant à Hambourg.')] },
        b: { label: 'With article → in die / den', labelFr: 'Avec article → in die / den', note: 'in die Schweiz, in den Iran', noteFr: 'in die Schweiz, in den Iran', examples: [g('Nächste Woche fahre ich in die Schweiz.', 'Next week I am going to Switzerland.', 'La semaine prochaine, je vais en Suisse.'), g('Er fliegt im Mai in den Iran.', 'He is flying to Iran in May.', 'Il s’envole pour l’Iran en mai.')] },
      },
      examples: [
        g('Sie kommt aus Kamerun und wohnt jetzt in Hamburg.', 'She comes from Cameroon and now lives in Hamburg.', 'Elle vient du Cameroun et habite maintenant à Hambourg.'),
        g('Im Sommer fliegen wir nach Spanien.', 'In summer we fly to Spain.', 'En été, nous prenons l’avion pour l’Espagne.'),
        g('Meine Tante lebt in der Schweiz.', 'My aunt lives in Switzerland.', 'Ma tante vit en Suisse.'),
        g('Nächste Woche fahre ich in die Schweiz.', 'Next week I am going to Switzerland.', 'La semaine prochaine, je vais en Suisse.'),
        g('Meine Kollegin kommt aus der Türkei.', 'My colleague comes from Turkey.', 'Ma collègue vient de Turquie.'),
        g('Er fliegt im Mai in den Iran.', 'He is flying to Iran in May.', 'Il s’envole pour l’Iran en mai.'),
      ],
      mistakes: [
        { wrong: 'Wir fahren nach die Schweiz.', right: 'Wir fahren in die Schweiz.', why: 'Countries with an article take in, not nach.', whyFr: 'Les pays avec article prennent in, pas nach.' },
        { wrong: 'Er kommt von Spanien.', right: 'Er kommt aus Spanien.', why: 'For origin (country, city) use aus.', whyFr: 'Pour l’origine (pays, ville), utilise aus.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l22-e3', prompt: 'Wir fliegen ___ Schweiz.', promptFr: 'Wir fliegen ___ Schweiz. (nous prenons l’avion pour la Suisse)', options: ['nach der', 'in die', 'in der'], answer: 1, explain: '"die Schweiz" has an article, so the direction is "in die". "nach" is only for places without an article.', explainFr: '« die Schweiz » a un article : la direction est donc « in die ». « nach » ne s’emploie que sans article.', hint: 'Countries with an article take in + accusative.', hintFr: 'Les pays avec article se construisent avec in + accusatif.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l22-e7', prompt: 'Woher kommt Jan? — Er kommt aus ___ Schweiz. (die Schweiz, dative)', promptFr: 'D’où vient Jan ? — Er kommt aus ___ Schweiz. (die Schweiz, datif)', answer: 'der', hint: 'aus + dative: die → der', hintFr: 'aus + datif : die → der' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l22-e6', tokens: ['in', 'Ich', 'die', 'fahre', 'Türkei', 'im', 'Sommer'], answer: ['Ich', 'fahre', 'im', 'Sommer', 'in', 'die', 'Türkei'], hint: 'Start with "Ich fahre", then the time, then the place.', hintFr: 'Commence par « Ich fahre », puis le moment, puis le lieu.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l22-e9', prompt: 'Listen. Where do they go second?', promptFr: 'Écoute. Où vont-ils en deuxième ?', audio: { ttsText: 'Zuerst fahren wir nach Spanien, dann fliegen wir in die Türkei.' }, options: ['Turkey', 'Switzerland', 'Iran'], optionsFr: ['La Turquie', 'La Suisse', 'L’Iran'], answer: 0, hint: 'Listen after "dann".', hintFr: 'Écoute après « dann ».' } },

    { kind: 'pronunciation', focus: 'Contractions are said as one word (zum, beim, vom), and the ü in Türkei is a rounded "ee"', focusFr: 'Les contractions se prononcent d’un seul mot (zum, beim, vom), et le ü de Türkei est un « i » arrondi', items: [{ id: 'a2l22-zum-pron', german: 'zum', english: 'to the (zu + dem)', french: 'vers le / chez le (zu + dem)', gender: null, syllables: ['ZUM'], pronunciation: 'tsoom', example: { de: 'Ich gehe zum Friseur.', en: 'I’m going to the hairdresser’s.', fr: 'Je vais chez le coiffeur.' } }, { id: 'a2l22-beim-pron', german: 'beim', english: 'at the (bei + dem)', french: 'chez le (bei + dem)', gender: null, syllables: ['BEIM'], pronunciation: 'bime', example: { de: 'Er ist beim Bäcker.', en: 'He is at the baker’s.', fr: 'Il est chez le boulanger.' } }, { id: 'a2l22-tuerkei-pron', german: 'die Türkei', english: 'Turkey', french: 'la Turquie', gender: 'die', syllables: ['Tür', 'KEI'], pronunciation: 'dee tuer-KYE', example: { de: 'Wir fliegen in die Türkei.', en: 'We fly to Turkey.', fr: 'Nous prenons l’avion pour la Turquie.' } }, { id: 'a2l22-schweiz-pron', german: 'die Schweiz', english: 'Switzerland', french: 'la Suisse', gender: 'die', syllables: ['SCHWEIZ'], pronunciation: 'dee shvites', example: { de: 'Sie wohnt in der Schweiz.', en: 'She lives in Switzerland.', fr: 'Elle habite en Suisse.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l22-e11', prompt: 'Lina kommt gerade ___ Friseur.', promptFr: 'Lina kommt gerade ___ Friseur. (elle arrive de chez le coiffeur)', options: ['zum', 'beim', 'vom'], answer: 2, explain: 'Woher? + a person → von + dem = vom.', explainFr: 'Woher ? + une personne → von + dem = vom.', hint: '"Coming from" = von.', hintFr: '« Venir de » = von.' } },

    { kind: 'wrapup',
      summary: 'You can now answer **Woher? Wo? Wohin?** for places, people, cities and countries: **aus / in / ins**, **von / bei / zu**, **nach / in die**. 🎉',
      summaryFr: 'Tu sais maintenant répondre à **Woher ? Wo ? Wohin ?** pour les lieux, les personnes, les villes et les pays : **aus / in / ins**, **von / bei / zu**, **nach / in die**. 🎉',
      card: { title: 'Woher? Wo? Wohin? on one page', titleFr: 'Woher ? Wo ? Wohin ? en une page', sections: [
        { heading: 'Places', headingFr: 'Lieux', rows: [g('aus der Apotheke · im Kino · ins Kino', 'woher · wo · wohin', 'woher · wo · wohin'), g('zum Bahnhof · zur Post', 'go to (not into)', 'aller vers (sans entrer)')] },
        { heading: 'People', headingFr: 'Personnes', rows: [g('vom Arzt · beim Bäcker · zum Friseur', 'always dative', 'toujours datif'), g('zu meiner Oma', 'to someone’s place', 'chez quelqu’un')] },
        { heading: 'Countries', headingFr: 'Pays', rows: [g('aus / in / nach Spanien', 'no article', 'sans article'), g('aus der / in der / in die Schweiz', 'with article', 'avec article')] },
      ] } },
  ],
};

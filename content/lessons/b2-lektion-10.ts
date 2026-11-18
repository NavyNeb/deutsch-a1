import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion10: Lesson = {
  id: 'b2-l10', level: 'B2', module: 4, number: 10,
  title: { de: 'Konzessive Sätze', en: 'Concessive clauses', fr: 'Les concessives' },
  theme: 'Expressing contrast and concession: obwohl, obgleich, wenn auch, selbst wenn, trotz + Genitiv, ungeachtet', themeFr: 'Exprimer contraste et concession : obwohl, obgleich, wenn auch, selbst wenn, trotz + génitif, ungeachtet',
  goals: ['Use a wide range of concessive connectors', 'Distinguish "obwohl" from "selbst wenn"', 'Use "trotz" + genitive (and dative in speech)', 'Vary between clause and noun-phrase constructions'], goalsFr: ['Employer un large éventail de connecteurs concessifs', 'Distinguer « obwohl » de « selbst wenn »', 'Utiliser « trotz » + génitif (et datif à l’oral)', 'Varier entre propositions et groupes nominaux'],
  canDo: g('Ich kann Gegensätze und Einräumungen mit verschiedenen Konnektoren ausdrücken und zwischen Nebensatz und Nominalgruppe wechseln.', 'I can express contrast and concession with different connectors and switch between a clause and a noun phrase.', 'Je sais exprimer l’opposition et la concession avec différents connecteurs et passer d’une subordonnée à un groupe nominal.'),
  steps: [
    { kind: 'intro', title: 'Trotzdem! Einräumungen 💪', titleFr: 'Malgré tout ! Les concessions 💪',
      scene: 'A marathon runner explains how she kept going despite rain, injury and doubt.', sceneFr: 'Une marathonienne explique comment elle a continué malgré la pluie, la blessure et le doute.',
      goals: ['Use obwohl, obgleich, selbst wenn, wenn auch', 'Tell a real fact (obwohl) from a hypothetical (selbst wenn)', 'Use trotz + genitive and the adverbs dennoch / gleichwohl'],
      goalsFr: ['Utiliser obwohl, obgleich, selbst wenn, wenn auch', 'Distinguer un fait réel (obwohl) d’une hypothèse (selbst wenn)', 'Utiliser trotz + génitif et les adverbes dennoch / gleichwohl'] },

    // ───────────── 1 · Connectors ─────────────
    { kind: 'chapter', title: 'Konnektoren der Einräumung', titleFr: 'Les connecteurs de concession', blurb: 'obwohl · selbst wenn · dennoch.', blurbFr: 'obwohl · selbst wenn · dennoch.' },

    { kind: 'situation', title: 'Der Marathon', titleFr: 'Le marathon',
      setting: 'A radio interview after the race.', settingFr: 'Une interview radio après la course.',
      lines: [
        line('Reporter', 'Obgleich Sie verletzt waren, sind Sie gelaufen. Wie ging das?', 'Although you were injured, you ran. How was that possible?', 'Bien que vous ayez été blessée, vous avez couru. Comment était-ce possible ?'),
        line('Läuferin', 'Es war schwer, dennoch gab ich nicht auf. Obwohl es regnete, lief ich weiter. Selbst wenn es morgen regnet, werde ich laufen. Der Plan ist riskant, gleichwohl lohnt er sich.', 'It was hard, nevertheless I did not give up. Although it was raining, I kept running. Even if it rains tomorrow, I will run. The plan is risky, all the same it is worth it.', 'C’était dur, pourtant je n’ai pas abandonné. Bien qu’il ait plu, j’ai continué à courir. Même s’il pleut demain, je courrai. Le plan est risqué, il en vaut cependant la peine.'),
        line('Läuferin', 'Obschon es spät war, trainierte ich. Es ist, wenn auch schwer, machbar. Ungeachtet der Kritik machte ich weiter. Wir müssen noch zwei Wochen durchhalten. Trotz aller Hindernisse kam ich an.', 'Although it was late, I trained. It is doable, even if hard. Regardless of the criticism I carried on. We have to hold out two more weeks. Despite all obstacles I arrived.', 'Même s’il était tard, je m’entraînais. C’est faisable, même si c’est dur. Malgré les critiques, j’ai continué. Nous devons tenir encore deux semaines. Malgré tous les obstacles, je suis arrivée.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l10-e11', prompt: 'What does she say about tomorrow?', promptFr: 'Que dit-elle à propos de demain ?', options: ['She will run even if it rains', 'She will stay home', 'She will stop running'], optionsFr: ['Elle courra même s’il pleut', 'Elle restera chez elle', 'Elle arrêtera de courir'], answer: 0, explain: 'She says: “Selbst wenn es morgen regnet, werde ich laufen.”', explainFr: 'Elle dit : « Selbst wenn es morgen regnet, werde ich laufen. »', hint: 'Look for “selbst wenn”.', hintFr: 'Cherche « selbst wenn ».' } },

    { kind: 'wordgroup', title: 'Konnektoren', titleFr: 'Connecteurs',
      items: [{ id: 'b2l10-obgleich', german: 'obgleich', english: 'although (formal)', french: 'quoique', gender: null, syllables: ['ob', 'GLEICH'], pronunciation: 'op-GLYKH', example: { de: 'Obgleich er müde war, arbeitete er weiter.', en: 'Although he was tired, he kept working.', fr: 'Quoiqu’il fût fatigué, il a continué à travailler.' } }, { id: 'b2l10-obschon', german: 'obschon', english: 'although (literary)', french: 'bien que (littéraire)', gender: null, syllables: ['ob', 'SCHON'], pronunciation: 'op-SHOHN', example: { de: 'Obschon es regnete, gingen wir hinaus.', en: 'Although it rained, we went out.', fr: 'Bien qu’il pleuve, nous sommes sortis.' } }, { id: 'b2l10-selbst-wenn', german: 'selbst wenn', english: 'even if', french: 'même si', gender: null, syllables: ['SELBST', 'WENN'], pronunciation: 'ZELPST ven', example: { de: 'Selbst wenn es teuer ist, kaufe ich es.', en: 'Even if it is expensive, I will buy it.', fr: 'Même si c’est cher, je l’achète.' } }, { id: 'b2l10-wenn-auch', german: 'wenn auch', english: 'even though', french: 'même si (concessif)', gender: null, syllables: ['WENN', 'AUCH'], pronunciation: 'ven owkh', example: { de: 'Es ist, wenn auch schwer, machbar.', en: 'It is feasible, if difficult.', fr: 'C’est faisable, même si difficile.' } }, { id: 'b2l10-dennoch', german: 'dennoch', english: 'nevertheless', french: 'néanmoins', gender: null, syllables: ['DEN', 'noch'], pronunciation: 'DEN-nokh', example: { de: 'Es war schwer, dennoch gaben wir nicht auf.', en: 'It was hard, nevertheless we didn’t give up.', fr: 'C’était dur, néanmoins nous n’avons pas abandonné.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l10-konnektoren', title: 'Concessive connectors compared', titleFr: 'Les connecteurs concessifs comparés',
      lead: 'Subordinating: obwohl, obgleich, obschon, wenn auch (verb last). Adverbs: dennoch, trotzdem, gleichwohl (verb 2nd). selbst wenn = hypothetical.',
      leadFr: 'Subordonnants : obwohl, obgleich, obschon, wenn auch (verbe à la fin). Adverbes : dennoch, trotzdem, gleichwohl (verbe en 2e). selbst wenn = hypothétique.',
      explanationMd: '**Subordinating** (verb at the **end**): **obwohl**, **obgleich**, **obschon** (more formal), **wenn auch**: **Obwohl es regnet, gehen wir.** **Main-clause adverbs** (verb in **position 2** after them): **trotzdem**, **dennoch**, **gleichwohl**, **nichtsdestotrotz**: **Es regnet. Dennoch gehen wir.** **selbst wenn / auch wenn** = **even if** (a **hypothetical**, not a real fact): **Selbst wenn es regnet, gehe ich.** Compare **obwohl** = a **real fact**: **Obwohl es regnet, …** The **position** matters: the clause can come **first** (then the main clause starts with the verb) or **second**.',
      explanationMdFr: '**Subordonnants** (verbe à la **fin**) : **obwohl**, **obgleich**, **obschon** (plus soutenu), **wenn auch** : **Obwohl es regnet, gehen wir.** **Adverbes de proposition principale** (verbe en **position 2** après eux) : **trotzdem**, **dennoch**, **gleichwohl**, **nichtsdestotrotz** : **Es regnet. Dennoch gehen wir.** **selbst wenn / auch wenn** = **même si** (une **hypothèse**, pas un fait réel) : **Selbst wenn es regnet, gehe ich.** Compare **obwohl** = un **fait réel** : **Obwohl es regnet, …** La **position** compte : la subordonnée peut venir **en premier** (la principale commence alors par le verbe) ou **en second**.',
      tables: [{ title: 'Concessive connectors', titleFr: 'Connecteurs concessifs', headers: ['Connector', 'Type', 'Example'], headersFr: ['Connecteur', 'Type', 'Exemple'],
        rows: [['obwohl / obgleich / obschon', 'subordinating, real fact', 'Obgleich er müde war, arbeitete er.'], ['wenn auch', 'subordinating, concession', 'Es ist, wenn auch schwer, machbar.'], ['selbst wenn / auch wenn', 'subordinating, hypothetical', 'Selbst wenn es regnet, laufe ich.'], ['dennoch / trotzdem / gleichwohl', 'adverb, verb 2nd', 'Es war schwer, dennoch gaben wir nicht auf.']],
        rowsFr: [['obwohl / obgleich / obschon', 'subordonnant, fait réel', 'Obgleich er müde war, arbeitete er.'], ['wenn auch', 'subordonnant, concession', 'Es ist, wenn auch schwer, machbar.'], ['selbst wenn / auch wenn', 'subordonnant, hypothétique', 'Selbst wenn es regnet, laufe ich.'], ['dennoch / trotzdem / gleichwohl', 'adverbe, verbe en 2e', 'Es war schwer, dennoch gaben wir nicht auf.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Obwohl', role: 'connector' }, { text: 'es', role: 'subject' }, { text: 'regnet,', role: 'verb' }, { text: 'gehen', role: 'verb' }, { text: 'wir.', role: 'subject' }], en: 'Although it is raining, we go.', fr: 'Bien qu’il pleuve, nous y allons.' },
        { parts: [{ text: 'Es war schwer,', role: 'other' }, { text: 'dennoch', role: 'connector' }, { text: 'gaben', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'nicht auf.', role: 'other' }], en: 'It was hard, nevertheless we did not give up.', fr: 'C’était dur, pourtant nous n’avons pas abandonné.' },
      ],
      contrast: {
        a: { label: 'obwohl (real fact)', labelFr: 'obwohl (fait réel)', note: 'it is raining', noteFr: 'il pleut vraiment', examples: [g('Obwohl es regnet, gehen wir.', 'Although it is raining, we go.', 'Bien qu’il pleuve, nous y allons.'), g('Obgleich er jung ist, hat er viel erreicht.', 'Although he is young, he has achieved a lot.', 'Bien qu’il soit jeune, il a beaucoup accompli.')] },
        b: { label: 'selbst wenn (hypothetical)', labelFr: 'selbst wenn (hypothétique)', note: 'it might rain', noteFr: 'il pourrait pleuvoir', examples: [g('Selbst wenn es regnet, gehe ich.', 'Even if it rains, I go.', 'Même s’il pleut, j’y vais.'), g('Selbst wenn du recht hast, bleibe ich bei meiner Meinung.', 'Even if you are right, I stick to my opinion.', 'Même si tu as raison, je reste sur mon avis.')] },
      },
      examples: [
        g('Obgleich er jung ist, hat er viel erreicht.', 'Although he is young, he has achieved a lot.', 'Bien qu’il soit jeune, il a beaucoup accompli.'),
        g('Selbst wenn du recht hast, bleibe ich bei meiner Meinung.', 'Even if you are right, I stick to my opinion.', 'Même si tu as raison, je reste sur mon avis.'),
        g('Obwohl es regnet, gehen wir spazieren.', 'Although it is raining, we go for a walk.', 'Bien qu’il pleuve, nous allons nous promener.'),
        g('Es war schwer, dennoch gaben wir nicht auf.', 'It was hard, nevertheless we did not give up.', 'C’était dur, pourtant nous n’avons pas abandonné.'),
        g('Der Plan ist riskant, gleichwohl lohnt er sich.', 'The plan is risky, all the same it is worth it.', 'Le plan est risqué, il en vaut cependant la peine.'),
        g('Obschon es regnete, gingen wir hinaus.', 'Although it was raining, we went out.', 'Bien qu’il pleuve, nous sommes sortis.'),
      ],
      mistakes: [
        { wrong: 'Obwohl es regnet, wir gehen.', right: 'Obwohl es regnet, gehen wir.', why: 'After a subordinate clause the main clause starts with the verb.', whyFr: 'Après une subordonnée, la principale commence par le verbe.' },
        { wrong: 'Dennoch wir gaben nicht auf.', right: 'Dennoch gaben wir nicht auf.', why: 'dennoch is an adverb: the verb stays in position 2.', whyFr: 'dennoch est un adverbe : le verbe reste en position 2.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l10-e1', prompt: '___ es regnet, gehen wir spazieren. (although)', answer: 'Obwohl', hint: 'subordinating → verb at the end', hintFr: 'subordonnant → verbe à la fin' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l10-e2', prompt: 'Which means "even if" (hypothetical)?', promptFr: 'Lequel signifie « même si » (hypothétique) ?', options: ['obwohl', 'selbst wenn', 'trotzdem'], answer: 1, explain: '"selbst wenn" = even if.', explainFr: '« selbst wenn » = même si.', hint: 'hypothetical', hintFr: 'hypothétique' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l10-e8', prompt: 'Es war schwer, ___ gaben wir nicht auf. (nevertheless)', answer: 'dennoch', hint: 'main-clause adverb', hintFr: 'adverbe de principale' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l10-e9', prompt: 'Which sentence is grammatically correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Obwohl es regnet, wir gehen.', 'Obwohl es regnet, gehen wir.', 'Obwohl es regnet, wir gehen nicht.'], answer: 1, explain: 'After a subordinate clause the main verb comes first.', explainFr: 'Après une subordonnée, le verbe principal vient en premier.', hint: 'Verb right after the comma.', hintFr: 'Verbe juste après la virgule.' } },

    // ───────────── 2 · trotz + genitive ─────────────
    { kind: 'chapter', title: 'trotz + Genitiv', titleFr: 'trotz + génitif', blurb: 'From clause to noun phrase.', blurbFr: 'De la subordonnée au groupe nominal.' },

    { kind: 'situation', title: 'Trotz aller Hindernisse', titleFr: 'Malgré tous les obstacles',
      setting: 'The runner’s report in a newspaper.', settingFr: 'Le compte rendu de la coureuse dans un journal.',
      lines: [
        line('Reporter', 'Trotz des Regens gingen wir spazieren. Trotz der Kälte gingen wir schwimmen. Trotz seiner Krankheit arbeitet er weiter.', 'Despite the rain we went for a walk. Despite the cold we went swimming. Despite his illness he keeps working.', 'Malgré la pluie, nous sommes allés nous promener. Malgré le froid, nous sommes allés nager. Malgré sa maladie, il continue de travailler.'),
        line('Reporter', 'Ungeachtet der Warnung lief sie los. Obwohl es regnete → Trotz des Regens. Trotz dem Regen? — das hört man in der Umgangssprache.', 'Regardless of the warning she set off. Although it rained → despite the rain. Despite the rain (dative)? — you hear that in everyday speech.', 'Malgré l’avertissement, elle est partie. Bien qu’il ait plu → malgré la pluie. Trotz dem Regen (datif) ? — on l’entend dans la langue courante.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Trotz und Hindernisse', titleFr: 'Malgré et obstacles',
      items: [{ id: 'b2l10-gleichwohl', german: 'gleichwohl', english: 'all the same', french: 'quand même', gender: null, syllables: ['GLEICH', 'wohl'], pronunciation: 'GLYKH-vohl', example: { de: 'Der Plan ist riskant, gleichwohl lohnt er sich.', en: 'The plan is risky, all the same it pays off.', fr: 'Le plan est risqué, il en vaut quand même la peine.' } }, { id: 'b2l10-trotz', german: 'trotz', english: 'despite', french: 'malgré', gender: null, syllables: ['TROTZ'], pronunciation: 'trots', example: { de: 'Trotz des Regens gehen wir spazieren.', en: 'Despite the rain we go for a walk.', fr: 'Malgré la pluie, nous allons nous promener.' } }, { id: 'b2l10-ungeachtet', german: 'ungeachtet', english: 'regardless of', french: 'indépendamment de', gender: null, syllables: ['UN', 'ge', 'ach', 'tet'], pronunciation: 'OON-ge-akh-tet', example: { de: 'Ungeachtet der Kritik machte er weiter.', en: 'Regardless of the criticism he carried on.', fr: 'Indépendamment des critiques, il a continué.' } }, { id: 'b2l10-hindernis', german: 'das Hindernis', english: 'the obstacle', french: 'l’obstacle', gender: 'das', syllables: ['HIN', 'der', 'nis'], pronunciation: 'das HIN-der-nis', example: { de: 'Trotz aller Hindernisse kam sie an.', en: 'Despite all obstacles she arrived.', fr: 'Malgré tous les obstacles, elle est arrivée.' } }, { id: 'b2l10-durchhalten', german: 'durchhalten', english: 'to persevere', french: 'tenir bon', gender: null, syllables: ['DURCH', 'hal', 'ten'], pronunciation: 'DOORKH-hal-ten', example: { de: 'Wir müssen noch zwei Wochen durchhalten.', en: 'We must hold out two more weeks.', fr: 'Nous devons tenir encore deux semaines.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l10-e6', pairs: [{ de: 'obgleich', en: 'although (formal)', fr: 'quoique' }, { de: 'selbst wenn', en: 'even if', fr: 'même si' }, { de: 'ungeachtet', en: 'regardless of', fr: 'indépendamment de' }, { de: 'durchhalten', en: 'to persevere', fr: 'tenir bon' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l10-trotz', title: 'trotz + genitive', titleFr: 'trotz + génitif',
      lead: 'trotz takes the genitive in writing (trotz des Regens); the dative is common in speech. An obwohl-clause becomes a noun phrase.',
      leadFr: 'trotz se construit avec le génitif à l’écrit (trotz des Regens) ; le datif est courant à l’oral. Une subordonnée en obwohl devient un groupe nominal.',
      explanationMd: '**trotz** takes the **genitive** in standard written German: **trotz des Regens, trotz der Kälte, trotz seiner Krankheit.** In **speech**, the **dative** is common: **trotz dem Regen.** Prefer the **genitive** in writing and exams. Similar: **ungeachtet** + Genitiv (**ungeachtet der Warnung**). A clause with **obwohl** can be **shortened** to a noun phrase with **trotz**: **Obwohl es regnete** → **Trotz des Regens**. Masculine and neuter nouns get **-(e)s** in the genitive: **des Regens, des Kindes**.',
      explanationMdFr: '**trotz** se construit avec le **génitif** dans l’allemand écrit standard : **trotz des Regens, trotz der Kälte, trotz seiner Krankheit.** À l’**oral**, le **datif** est courant : **trotz dem Regen.** Préfère le **génitif** à l’écrit et aux examens. Proche : **ungeachtet** + génitif (**ungeachtet der Warnung**). Une proposition en **obwohl** peut être **raccourcie** en groupe nominal avec **trotz** : **Obwohl es regnete** → **Trotz des Regens**. Les noms masculins et neutres prennent **-(e)s** au génitif : **des Regens, des Kindes**.',
      tables: [{ title: 'Clause → noun phrase', titleFr: 'Subordonnée → groupe nominal', headers: ['obwohl-clause', 'trotz + genitive'], headersFr: ['Proposition en obwohl', 'trotz + génitif'],
        rows: [['Obwohl es regnete', 'Trotz des Regens'], ['Obwohl es kalt war', 'Trotz der Kälte'], ['Obwohl er krank ist', 'Trotz seiner Krankheit'], ['Obwohl es Hindernisse gab', 'Trotz aller Hindernisse']],
        rowsFr: [['Obwohl es regnete', 'Trotz des Regens'], ['Obwohl es kalt war', 'Trotz der Kälte'], ['Obwohl er krank ist', 'Trotz seiner Krankheit'], ['Obwohl es Hindernisse gab', 'Trotz aller Hindernisse']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Trotz', role: 'connector' }, { text: 'des Regens', role: 'other' }, { text: 'gehen', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'spazieren.', role: 'other' }], en: 'Despite the rain we go for a walk.', fr: 'Malgré la pluie, nous allons nous promener.' },
        { parts: [{ text: 'Trotz', role: 'connector' }, { text: 'seiner Krankheit', role: 'other' }, { text: 'arbeitet', role: 'verb' }, { text: 'er', role: 'subject' }, { text: 'weiter.', role: 'other' }], en: 'Despite his illness he keeps working.', fr: 'Malgré sa maladie, il continue de travailler.' },
      ],
      contrast: {
        a: { label: 'Clause', labelFr: 'Subordonnée', note: 'verb at the end', noteFr: 'verbe à la fin', examples: [g('Obwohl es regnete, gingen wir.', 'Although it rained, we went.', 'Bien qu’il ait plu, nous y sommes allés.'), g('Obwohl er krank ist, arbeitet er weiter.', 'Although he is ill, he keeps working.', 'Bien qu’il soit malade, il continue de travailler.')] },
        b: { label: 'Noun phrase', labelFr: 'Groupe nominal', note: 'trotz + genitive', noteFr: 'trotz + génitif', examples: [g('Trotz des Regens gingen wir.', 'Despite the rain we went.', 'Malgré la pluie, nous y sommes allés.'), g('Trotz seiner Krankheit arbeitet er weiter.', 'Despite his illness he keeps working.', 'Malgré sa maladie, il continue de travailler.')] },
      },
      examples: [
        g('Trotz der Kälte gingen wir schwimmen.', 'Despite the cold we went swimming.', 'Malgré le froid, nous sommes allés nager.'),
        g('Trotz seiner Krankheit arbeitet er weiter.', 'Despite his illness he keeps working.', 'Malgré sa maladie, il continue de travailler.'),
        g('Trotz des Regens gehen wir spazieren.', 'Despite the rain we go for a walk.', 'Malgré la pluie, nous allons nous promener.'),
        g('Ungeachtet der Kritik machte er weiter.', 'Regardless of the criticism he carried on.', 'Malgré les critiques, il a continué.'),
        g('Trotz aller Hindernisse kam sie an.', 'Despite all obstacles she arrived.', 'Malgré tous les obstacles, elle est arrivée.'),
        g('Ungeachtet der Warnung lief sie los.', 'Regardless of the warning she set off.', 'Malgré l’avertissement, elle est partie.'),
      ],
      mistakes: [
        { wrong: 'Trotz der Regen gehen wir.', right: 'Trotz des Regens gehen wir.', why: 'trotz + genitive: des Regens (-s ending).', whyFr: 'trotz + génitif : des Regens (terminaison -s).' },
        { wrong: 'Trotz es regnet, gehen wir.', right: 'Obwohl es regnet, gehen wir.', why: 'trotz takes a noun; a clause needs obwohl.', whyFr: 'trotz prend un nom ; une proposition demande obwohl.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l10-e3', prompt: 'Trotz ___ Regens gehen wir. (der Regen — genitive)', answer: 'des', hint: 'masculine genitive: des … -s', hintFr: 'génitif masculin : des … -s' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l10-e4', tokens: ['gehen', 'Dennoch', 'wir', 'schwimmen'], answer: ['Dennoch', 'gehen', 'wir', 'schwimmen'], hint: 'dennoch takes position 1; verb next.', hintFr: 'dennoch est en position 1 ; verbe ensuite.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l10-e5', prompt: 'Shorten: "Obwohl er krank war, …"', promptFr: 'Raccourcis : « Obwohl er krank war, … »', options: ['Trotz seiner Krankheit …', 'Wegen seiner Krankheit …', 'Trotz er krank …'], answer: 0, explain: 'trotz + genitive noun.', explainFr: 'trotz + nom au génitif.', hint: 'obwohl → trotz', hintFr: 'obwohl → trotz' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l10-e7', prompt: 'Listen. What does the speaker do?', promptFr: 'Écoute. Que fait le locuteur ?', audio: { ttsText: 'Selbst wenn es morgen regnet, werde ich laufen.' }, options: ['Will run even if it rains', 'Will stay home', 'Will cancel the run'], optionsFr: ['Courra même s’il pleut', 'Restera à la maison', 'Annulera la course'], answer: 0, hint: 'selbst wenn = even if.', hintFr: 'selbst wenn = même si.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l10-e10', prompt: 'Listen. What did she do?', promptFr: 'Écoute. Qu’a-t-elle fait ?', audio: { ttsText: 'Trotz aller Hindernisse kam sie pünktlich an.' }, options: ['Arrived on time', 'Gave up', 'Stayed home'], optionsFr: ['Est arrivée à l’heure', 'A abandonné', 'Est restée chez elle'], answer: 0, hint: 'trotz = despite.', hintFr: 'trotz = malgré.' } },

    { kind: 'pronunciation', focus: 'Stress the second syllable of obwohl/obgleich and the first of dennoch/trotzdem: "obWOHL", "obGLEICH", "DENNoch", "TROTZdem"', focusFr: 'Accentue la 2e syllabe de obwohl/obgleich et la 1re de dennoch/trotzdem : « obWOHL », « obGLEICH », « DENNoch », « TROTZdem »', items: [{ id: 'b2l10-obgleich-pron', german: 'obgleich', english: 'although', french: 'quoique', gender: null, syllables: ['ob', 'GLEICH'], pronunciation: 'op-GLYKH', example: { de: 'Obgleich es spät ist, bleibe ich.', en: 'Although it is late, I stay.', fr: 'Quoiqu’il soit tard, je reste.' } }, { id: 'b2l10-hindernis-pron', german: 'Hindernis', english: 'obstacle', french: 'obstacle', gender: null, syllables: ['HIN', 'der', 'nis'], pronunciation: 'HIN-der-nis', example: { de: 'Das ist ein Hindernis.', en: 'That is an obstacle.', fr: 'C’est un obstacle.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **express concession** with **obwohl / obgleich / selbst wenn**, **dennoch / gleichwohl**, and shorten clauses with **trotz + Genitiv**. 🎉',
      summaryFr: 'Tu sais maintenant **exprimer la concession** avec **obwohl / obgleich / selbst wenn**, **dennoch / gleichwohl**, et raccourcir les propositions avec **trotz + génitif**. 🎉',
      card: { title: 'Concession on one page', titleFr: 'La concession en une page', sections: [
        { heading: 'Clauses', headingFr: 'Subordonnées', rows: [g('obwohl / obgleich / obschon + verb last', 'real fact', 'fait réel'), g('selbst wenn / auch wenn', 'hypothetical', 'hypothétique')] },
        { heading: 'Adverbs', headingFr: 'Adverbes', rows: [g('dennoch · trotzdem · gleichwohl', 'verb in position 2', 'verbe en position 2')] },
        { heading: 'Noun phrase', headingFr: 'Groupe nominal', rows: [g('trotz + Genitiv', 'trotz des Regens', 'trotz des Regens'), g('ungeachtet + Genitiv', 'ungeachtet der Kritik', 'ungeachtet der Kritik')] },
      ] } },
  ],
};

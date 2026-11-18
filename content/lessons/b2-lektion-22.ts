import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion22: Lesson = {
  id: 'b2-l22', level: 'B2', module: 8, number: 22,
  title: { de: 'Wirtschaft und Konsum', en: 'Economy and consumption', fr: 'Économie et consommation' },
  theme: 'Markets, prices, advertising and consumer choices; comparing and quantifying (so … wie, doppelt so viel wie, Prozent, Anteil)', themeFr: 'Marchés, prix, publicité et choix de consommation ; comparer et quantifier (so … wie, doppelt so viel wie, Prozent, Anteil)',
  goals: ['Talk about economy, prices and consumer behaviour', 'Compare and quantify with percentages and multiples', 'Evaluate advertising critically', 'Describe supply, demand and trends'], goalsFr: ['Parler d’économie, de prix et de comportement de consommation', 'Comparer et quantifier avec pourcentages et multiples', 'Évaluer la publicité de façon critique', 'Décrire offre, demande et tendances'],
  canDo: g('Ich kann über Wirtschaft, Preise und Konsum sprechen und Vergleiche, Veränderungen und Anteile genau beschreiben.', 'I can talk about economy, prices and consumption and describe comparisons, changes and shares precisely.', 'Je sais parler d’économie, de prix et de consommation et décrire précisément comparaisons, évolutions et parts.'),
  steps: [
    { kind: 'intro', title: 'Wirtschaft und Konsum 💶', titleFr: 'Économie et consommation 💶',
      scene: 'A news feature on rising prices: what consumers compare, spend and save.', sceneFr: 'Un reportage sur la hausse des prix : ce que les consommateurs comparent, dépensent et économisent.',
      goals: ['Talk about supply, demand, inflation and advertising', 'Compare with so … wie, als, doppelt so viel wie', 'Describe changes with um / auf and shares with Anteil'],
      goalsFr: ['Parler d’offre, de demande, d’inflation et de publicité', 'Comparer avec so … wie, als, doppelt so viel wie', 'Décrire des évolutions avec um / auf et des parts avec Anteil'] },

    // ───────────── 1 · Comparing ─────────────
    { kind: 'chapter', title: 'Preise vergleichen', titleFr: 'Comparer les prix', blurb: 'so … wie · teurer als · doppelt so viel wie.', blurbFr: 'so … wie · teurer als · doppelt so viel wie.' },

    { kind: 'situation', title: 'Preise im Radio', titleFr: 'Les prix à la radio',
      setting: 'A radio report about the economy.', settingFr: 'Un reportage radio sur l’économie.',
      lines: [
        line('Reporter', 'Die Wirtschaft wächst langsam. Die Nachfrage nach Elektroautos steigt. Das Angebot ist größer als die Nachfrage.', 'The economy is growing slowly. The demand for electric cars is rising. The supply is bigger than the demand.', 'L’économie croît lentement. La demande de voitures électriques augmente. L’offre est supérieure à la demande.'),
        line('Reporter', 'Die Preiserhöhung trifft vor allem Familien. Die Inflation liegt bei zwei Prozent. Das kostet doppelt so viel wie letztes Jahr. Das ist teurer als früher.', 'The price increase hits mainly families. Inflation stands at two percent. That costs twice as much as last year. That is more expensive than before.', 'La hausse des prix touche surtout les familles. L’inflation s’élève à deux pour cent. Cela coûte deux fois plus que l’an dernier. C’est plus cher qu’avant.'),
        line('Reporter', 'Die Werbung beeinflusst unsere Entscheidungen. Immer mehr Verbraucher vergleichen die Preise im Internet, bevor sie kaufen. Das Auto ist so teuer wie das Haus.', 'Advertising influences our decisions. More and more consumers compare prices online before they buy. The car is as expensive as the house.', 'La publicité influence nos décisions. De plus en plus de consommateurs comparent les prix sur Internet avant d’acheter. La voiture est aussi chère que la maison.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l22-e11', prompt: 'What do more and more consumers do before buying?', promptFr: 'Que font de plus en plus de consommateurs avant d’acheter ?', options: ['Compare prices online', 'Ask friends only', 'Wait a year'], optionsFr: ['Comparer les prix en ligne', 'Demander seulement à des amis', 'Attendre un an'], answer: 0, explain: 'The reporter says: “… vergleichen die Preise im Internet, bevor sie kaufen.”', explainFr: 'Le reporter dit : « … vergleichen die Preise im Internet, bevor sie kaufen. »', hint: 'Look for “vergleichen”.', hintFr: 'Cherche « vergleichen ».' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l22-e10', prompt: 'Listen. What do consumers do?', promptFr: 'Écoute. Que font les consommateurs ?', audio: { ttsText: 'Immer mehr Verbraucher vergleichen die Preise im Internet, bevor sie kaufen.' }, options: ['Compare prices online', 'Stop shopping', 'Only buy in shops'], optionsFr: ['Comparent les prix en ligne', 'Arrêtent d’acheter', 'N’achètent qu’en magasin'], answer: 0, hint: 'vergleichen', hintFr: 'vergleichen' } },

    { kind: 'wordgroup', title: 'Markt und Preise', titleFr: 'Marché et prix',
      items: [{ id: 'b2l22-wirtschaft', german: 'die Wirtschaft', english: 'the economy', french: 'l’économie', gender: 'die', syllables: ['die', 'WIRT', 'schaft'], pronunciation: 'dee VIRT-shahft', example: { de: 'Die Wirtschaft wächst langsam.', en: 'The economy is growing slowly.', fr: 'L’économie croît lentement.' } }, { id: 'b2l22-nachfrage', german: 'die Nachfrage', english: 'the demand', french: 'la demande', gender: 'die', syllables: ['die', 'NACH', 'fra', 'ge'], pronunciation: 'dee NAKH-frah-ge', example: { de: 'Die Nachfrage nach Elektroautos steigt.', en: 'Demand for electric cars is rising.', fr: 'La demande de voitures électriques augmente.' } }, { id: 'b2l22-angebot', german: 'das Angebot', english: 'the supply / offer', french: 'l’offre', gender: 'das', syllables: ['das', 'AN', 'ge', 'bot'], pronunciation: 'das AHN-ge-boht', example: { de: 'Das Angebot ist größer als die Nachfrage.', en: 'The supply is larger than the demand.', fr: 'L’offre est plus grande que la demande.' } }, { id: 'b2l22-preiserhoehung', german: 'die Preiserhöhung', english: 'the price increase', french: 'la hausse des prix', gender: 'die', syllables: ['die', 'PREIS', 'er', 'hö', 'hung'], pronunciation: 'dee PRICE-er-hoe-oong', example: { de: 'Die Preiserhöhung trifft vor allem Familien.', en: 'The price increase mainly hits families.', fr: 'La hausse des prix touche surtout les familles.' } }, { id: 'b2l22-inflation', german: 'die Inflation', english: 'the inflation', french: 'l’inflation', gender: 'die', syllables: ['die', 'in', 'fla', 'TION'], pronunciation: 'dee in-flah-TSYOHN', example: { de: 'Die Inflation liegt bei zwei Prozent.', en: 'Inflation is at two percent.', fr: 'L’inflation est à deux pour cent.' } }] },

    { kind: 'wordgroup', title: 'Kaufen und vergleichen', titleFr: 'Acheter et comparer',
      items: [{ id: 'b2l22-verbraucher', german: 'der Verbraucher', english: 'the consumer', french: 'le consommateur', gender: 'der', syllables: ['der', 'ver', 'BRAU', 'cher'], pronunciation: 'dair fer-BROW-kher', example: { de: 'Verbraucher vergleichen Preise im Internet.', en: 'Consumers compare prices online.', fr: 'Les consommateurs comparent les prix en ligne.' } }, { id: 'b2l22-werbung', german: 'die Werbung', english: 'the advertising', french: 'la publicité', gender: 'die', syllables: ['die', 'WER', 'bung'], pronunciation: 'dee VER-boong', example: { de: 'Die Werbung beeinflusst unsere Entscheidungen.', en: 'Advertising influences our decisions.', fr: 'La publicité influence nos décisions.' } }, { id: 'b2l22-vergleichen', german: 'vergleichen', english: 'to compare', french: 'comparer', gender: null, syllables: ['ver', 'GLEI', 'chen'], pronunciation: 'fer-GLY-khen', example: { de: 'Wir vergleichen die Angebote.', en: 'We compare the offers.', fr: 'Nous comparons les offres.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l22-e6', pairs: [{ de: 'die Werbung', en: 'advertising', fr: 'publicité' }, { de: 'der Verbraucher', en: 'consumer', fr: 'consommateur' }, { de: 'sparen', en: 'to save', fr: 'économiser' }, { de: 'der Anteil', en: 'share', fr: 'part' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l22-vergleiche', title: 'Comparing and multiplying', titleFr: 'Comparer et multiplier',
      lead: 'so … wie = equal; comparative + als = more/less; doppelt so viel wie / dreimal so teuer wie = multiples.',
      leadFr: 'so … wie = égalité ; comparatif + als = plus/moins ; doppelt so viel wie / dreimal so teuer wie = multiples.',
      explanationMd: '**so … wie** (equal): **Das Auto ist so teuer wie das Haus.** **comparative … als** (more / less): **Das ist teurer als früher.** **doppelt so viel wie / dreimal so teuer wie** (multiples): **Das kostet doppelt so viel wie letztes Jahr.** **nicht so … wie** (less): **Das ist nicht so teuer wie früher.** **Supply and demand** compare naturally: **Das Angebot ist größer als die Nachfrage.** After **als / wie** the **case** stays the same as the first noun: **Er verdient mehr als ich.** (Nominative)',
      explanationMdFr: '**so … wie** (égalité) : **Das Auto ist so teuer wie das Haus.** **comparatif … als** (plus / moins) : **Das ist teurer als früher.** **doppelt so viel wie / dreimal so teuer wie** (multiples) : **Das kostet doppelt so viel wie letztes Jahr.** **nicht so … wie** (moins) : **Das ist nicht so teuer wie früher.** **L’offre et la demande** se comparent naturellement : **Das Angebot ist größer als die Nachfrage.** Après **als / wie**, le **cas** reste celui du premier nom : **Er verdient mehr als ich.** (nominatif)',
      tables: [{ title: 'Ways to compare', titleFr: 'Façons de comparer', headers: ['Type', 'Pattern', 'Example'], headersFr: ['Type', 'Schéma', 'Exemple'],
        rows: [['equal', 'so + adj. + wie', 'Das Auto ist so teuer wie das Haus.'], ['more / less', 'comparative + als', 'Das ist teurer als früher.'], ['multiple', 'doppelt / dreimal so … wie', 'Das kostet doppelt so viel wie letztes Jahr.'], ['not equal', 'nicht so … wie', 'Das ist nicht so teuer wie früher.']],
        rowsFr: [['égalité', 'so + adj. + wie', 'Das Auto ist so teuer wie das Haus.'], ['plus / moins', 'comparatif + als', 'Das ist teurer als früher.'], ['multiple', 'doppelt / dreimal so … wie', 'Das kostet doppelt so viel wie letztes Jahr.'], ['inégalité', 'nicht so … wie', 'Das ist nicht so teuer wie früher.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'kostet', role: 'verb' }, { text: 'doppelt so viel wie', role: 'connector' }, { text: 'letztes Jahr.', role: 'time' }], en: 'That costs twice as much as last year.', fr: 'Cela coûte deux fois plus que l’an dernier.' },
        { parts: [{ text: 'Das Angebot', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'größer als', role: 'connector' }, { text: 'die Nachfrage.', role: 'other' }], en: 'The supply is bigger than the demand.', fr: 'L’offre est supérieure à la demande.' },
      ],
      contrast: {
        a: { label: 'als (difference)', labelFr: 'als (différence)', note: 'comparative', noteFr: 'comparatif', examples: [g('Das ist teurer als früher.', 'That is more expensive than before.', 'C’est plus cher qu’avant.'), g('Das Angebot ist größer als die Nachfrage.', 'The supply is bigger than the demand.', 'L’offre est supérieure à la demande.')] },
        b: { label: 'wie (equality / multiple)', labelFr: 'wie (égalité / multiple)', note: 'so … wie', noteFr: 'so … wie', examples: [g('Das Auto ist so teuer wie das Haus.', 'The car is as expensive as the house.', 'La voiture est aussi chère que la maison.'), g('Das kostet doppelt so viel wie letztes Jahr.', 'That costs twice as much as last year.', 'Cela coûte deux fois plus que l’an dernier.')] },
      },
      examples: [
        g('Das kostet doppelt so viel wie letztes Jahr.', 'That costs twice as much as last year.', 'Cela coûte deux fois plus que l’an dernier.'),
        g('Das Auto ist so teuer wie das Haus.', 'The car is as expensive as the house.', 'La voiture est aussi chère que la maison.'),
        g('Das ist teurer als früher.', 'That is more expensive than before.', 'C’est plus cher qu’avant.'),
        g('Das Angebot ist größer als die Nachfrage.', 'The supply is bigger than the demand.', 'L’offre est supérieure à la demande.'),
        g('Strom ist dreimal so teuer wie vor zehn Jahren.', 'Electricity is three times as expensive as ten years ago.', 'L’électricité est trois fois plus chère qu’il y a dix ans.'),
        g('Das ist nicht so teuer wie früher.', 'That is not as expensive as before.', 'Ce n’est pas aussi cher qu’avant.'),
      ],
      mistakes: [
        { wrong: 'Das ist teurer wie früher.', right: 'Das ist teurer als früher.', why: 'After a comparative use als, not wie.', whyFr: 'Après un comparatif, utilise als, pas wie.' },
        { wrong: 'Das ist so teuer als das Haus.', right: 'Das ist so teuer wie das Haus.', why: 'Equality uses so … wie.', whyFr: 'L’égalité utilise so … wie.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l22-e1', prompt: 'Das Auto ist so teuer ___ das Haus. (as)', answer: 'wie', hint: 'so … wie', hintFr: 'so … wie' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l22-e4', prompt: 'Which is the OPPOSITE of "die Nachfrage"?', promptFr: 'Quel est le CONTRAIRE de « die Nachfrage » ?', options: ['das Angebot', 'die Werbung', 'der Anteil'], answer: 0, explain: 'supply vs. demand.', explainFr: 'offre / demande.', hint: 'supply', hintFr: 'offre' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l22-e5', tokens: ['kostet', 'Das', 'viel', 'doppelt', 'so', 'wie', 'früher'], answer: ['Das', 'kostet', 'doppelt', 'so', 'viel', 'wie', 'früher'], hint: 'doppelt so viel wie …', hintFr: 'doppelt so viel wie …' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l22-e8', prompt: 'Die Nachfrage ___ Elektroautos steigt. (for — nach)', answer: 'nach', hint: 'die Nachfrage nach', hintFr: 'die Nachfrage nach' } },

    // ───────────── 2 · Changes and shares ─────────────
    { kind: 'chapter', title: 'Veränderungen und Anteile', titleFr: 'Évolutions et parts', blurb: 'um … Prozent · auf … · Anteil.', blurbFr: 'um … pour cent · auf … · part.' },

    { kind: 'situation', title: 'Zahlen und Anteile', titleFr: 'Chiffres et parts',
      setting: 'The report continues with statistics.', settingFr: 'Le reportage continue avec des statistiques.',
      lines: [
        line('Reporter', 'Der Preis ist um fünf Prozent gestiegen. Die Preise für Energie sind in diesem Jahr um zehn Prozent gestiegen. Der Preis stieg auf 110 Euro. Der Preis hat sich verdoppelt.', 'The price rose by five percent. Energy prices rose by ten percent this year. The price rose to 110 euros. The price has doubled.', 'Le prix a augmenté de cinq pour cent. Les prix de l’énergie ont augmenté de dix pour cent cette année. Le prix est monté à 110 euros. Le prix a doublé.'),
        line('Reporter', 'Der Anteil der Online-Käufe steigt. Die Ausgaben für Energie sind gestiegen. Viele versuchen, Geld zu sparen. Der Anteil der Online-Käufe an den Gesamtkäufen liegt bei 30 %.', 'The share of online purchases is rising. Spending on energy has risen. Many try to save money. The share of online purchases in total purchases is 30 %.', 'La part des achats en ligne augmente. Les dépenses d’énergie ont augmenté. Beaucoup essaient d’économiser de l’argent. La part des achats en ligne dans l’ensemble des achats est de 30 %.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l22-e7', prompt: 'Listen. What happened to prices?', promptFr: 'Écoute. Qu’est-il arrivé aux prix ?', audio: { ttsText: 'Die Preise für Energie sind in diesem Jahr um zehn Prozent gestiegen.' }, options: ['Energy prices rose by 10 %', 'Prices fell by 10 %', 'Prices stayed stable'], optionsFr: ['Les prix de l’énergie ont augmenté de 10 %', 'Les prix ont baissé de 10 %', 'Les prix sont restés stables'], answer: 0, hint: 'um zehn Prozent gestiegen', hintFr: 'um zehn Prozent gestiegen' } },

    { kind: 'wordgroup', title: 'Zahlen und Geld', titleFr: 'Chiffres et argent',
      items: [{ id: 'b2l22-anteil', german: 'der Anteil', english: 'the share / proportion', french: 'la part', gender: 'der', syllables: ['der', 'AN', 'teil'], pronunciation: 'dair AHN-tile', example: { de: 'Der Anteil der Online-Käufe steigt.', en: 'The share of online purchases is rising.', fr: 'La part des achats en ligne augmente.' } }, { id: 'b2l22-ausgaben', german: 'die Ausgaben', english: 'the expenses', french: 'les dépenses', gender: 'die', syllables: ['die', 'AUS', 'ga', 'ben'], pronunciation: 'dee OWS-gah-ben', example: { de: 'Die Ausgaben für Energie sind gestiegen.', en: 'Spending on energy has risen.', fr: 'Les dépenses d’énergie ont augmenté.' } }, { id: 'b2l22-sparen', german: 'sparen', english: 'to save', french: 'économiser', gender: null, syllables: ['SPA', 'ren'], pronunciation: 'SHPAH-ren', example: { de: 'Viele versuchen, Geld zu sparen.', en: 'Many try to save money.', fr: 'Beaucoup essaient d’économiser de l’argent.' } }, { id: 'b2l22-verdoppeln', german: 'sich verdoppeln', english: 'to double', french: 'doubler', gender: null, syllables: ['sich', 'ver', 'DOP', 'peln'], pronunciation: 'zikh fer-DOP-peln', example: { de: 'Der Preis hat sich verdoppelt.', en: 'The price has doubled.', fr: 'Le prix a doublé.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l22-aenderung', title: 'Describing changes and shares', titleFr: 'Décrire évolutions et parts',
      lead: 'um = by how much; auf = to which level; der Anteil von … an …; sich verdoppeln / verdreifachen / halbieren.',
      leadFr: 'um = de combien ; auf = jusqu’à quel niveau ; der Anteil von … an … ; sich verdoppeln / verdreifachen / halbieren.',
      explanationMd: '**um … Prozent steigen / sinken**: **Der Preis ist um 5 Prozent gestiegen.** **auf … steigen** (to a level): **auf 2 Euro**. **der Anteil von … an …**: **Der Anteil der Online-Käufe an den Gesamtkäufen liegt bei 30 %.** **sich verdoppeln / verdreifachen / halbieren**: the price **doubles / triples / halves**. Use **um** for the **difference**, **auf** for the **end point**: **um 10 % auf 110 Euro**. **von … auf …** gives start and end: **von 100 auf 110 Euro**. **nach** shows what is demanded: **Die Nachfrage nach Elektroautos steigt.**',
      explanationMdFr: '**um … Prozent steigen / sinken** : **Der Preis ist um 5 Prozent gestiegen.** **auf … steigen** (jusqu’à un niveau) : **auf 2 Euro**. **der Anteil von … an …** : **Der Anteil der Online-Käufe an den Gesamtkäufen liegt bei 30 %.** **sich verdoppeln / verdreifachen / halbieren** : le prix **double / triple / est divisé par deux**. Utilise **um** pour la **différence**, **auf** pour le **point d’arrivée** : **um 10 % auf 110 Euro**. **von … auf …** donne départ et arrivée : **von 100 auf 110 Euro**. **nach** indique ce qui est demandé : **Die Nachfrage nach Elektroautos steigt.**',
      tables: [{ title: 'Changes', titleFr: 'Évolutions', headers: ['Pattern', 'Meaning', 'Example'], headersFr: ['Schéma', 'Sens', 'Exemple'],
        rows: [['um + Betrag', 'by', 'Der Preis ist um fünf Prozent gestiegen.'], ['auf + Wert', 'to', 'Der Preis stieg auf 110 Euro.'], ['von … auf …', 'from … to …', 'Der Preis stieg von 100 auf 110 Euro.'], ['sich verdoppeln', 'double', 'Der Preis hat sich verdoppelt.'], ['Anteil von … an …', 'share', 'Der Anteil der Online-Käufe an den Gesamtkäufen liegt bei 30 %.']],
        rowsFr: [['um + montant', 'de', 'Der Preis ist um fünf Prozent gestiegen.'], ['auf + valeur', 'jusqu’à', 'Der Preis stieg auf 110 Euro.'], ['von … auf …', 'de … à …', 'Der Preis stieg von 100 auf 110 Euro.'], ['sich verdoppeln', 'doubler', 'Der Preis hat sich verdoppelt.'], ['Anteil von … an …', 'part', 'Der Anteil der Online-Käufe an den Gesamtkäufen liegt bei 30 %.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Der Preis', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'um fünf Prozent', role: 'other' }, { text: 'gestiegen.', role: 'verb' }], en: 'The price rose by five percent.', fr: 'Le prix a augmenté de cinq pour cent.' },
        { parts: [{ text: 'Der Preis', role: 'subject' }, { text: 'stieg', role: 'verb' }, { text: 'auf 110 Euro.', role: 'other' }], en: 'The price rose to 110 euros.', fr: 'Le prix est monté à 110 euros.' },
      ],
      contrast: {
        a: { label: 'um (how much)', labelFr: 'um (de combien)', note: 'difference', noteFr: 'différence', examples: [g('Der Preis ist um fünf Prozent gestiegen.', 'The price rose by five percent.', 'Le prix a augmenté de cinq pour cent.'), g('Die Preise sind um zehn Prozent gestiegen.', 'Prices rose by ten percent.', 'Les prix ont augmenté de dix pour cent.')] },
        b: { label: 'auf (to what level)', labelFr: 'auf (jusqu’à quel niveau)', note: 'end point', noteFr: 'point d’arrivée', examples: [g('Der Preis stieg auf 110 Euro.', 'The price rose to 110 euros.', 'Le prix est monté à 110 euros.'), g('Die Inflation stieg auf zwei Prozent.', 'Inflation rose to two percent.', 'L’inflation est montée à deux pour cent.')] },
      },
      examples: [
        g('Der Preis ist um fünf Prozent gestiegen.', 'The price rose by five percent.', 'Le prix a augmenté de cinq pour cent.'),
        g('Der Preis hat sich verdoppelt.', 'The price has doubled.', 'Le prix a doublé.'),
        g('Der Preis stieg auf 110 Euro.', 'The price rose to 110 euros.', 'Le prix est monté à 110 euros.'),
        g('Der Anteil der Online-Käufe steigt.', 'The share of online purchases is rising.', 'La part des achats en ligne augmente.'),
        g('Die Ausgaben für Energie sind gestiegen.', 'Spending on energy has risen.', 'Les dépenses d’énergie ont augmenté.'),
        g('Die Nachfrage nach Elektroautos steigt.', 'The demand for electric cars is rising.', 'La demande de voitures électriques augmente.'),
      ],
      mistakes: [
        { wrong: 'Der Preis ist auf fünf Prozent gestiegen. (difference)', right: 'Der Preis ist um fünf Prozent gestiegen.', why: 'um = by how much; auf = to what level.', whyFr: 'um = de combien ; auf = jusqu’à quel niveau.' },
        { wrong: 'Die Nachfrage für Elektroautos', right: 'Die Nachfrage nach Elektroautos', why: 'Nachfrage takes nach.', whyFr: 'Nachfrage prend nach.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l22-e2', prompt: 'Der Preis ist ___ fünf Prozent gestiegen. (by)', answer: 'um', hint: 'um = difference', hintFr: 'um = différence' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l22-e3', prompt: '"Der Preis hat sich verdoppelt" means …', promptFr: '« Der Preis hat sich verdoppelt » signifie …', options: ['The price halved', 'The price doubled', 'The price stayed the same'], answer: 1, explain: 'verdoppeln = to double.', explainFr: 'verdoppeln = doubler.', hint: 'doppelt = double', hintFr: 'doppelt = double' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l22-e9', prompt: 'Complete: "Der Preis stieg ___ 110 Euro."', promptFr: 'Complète : « Der Preis stieg ___ 110 Euro. »', options: ['um', 'auf', 'bei'], answer: 1, explain: 'auf = new level reached.', explainFr: 'auf = niveau atteint.', hint: 'end point', hintFr: 'point d’arrivée' } },

    { kind: 'pronunciation', focus: 'Numbers and percentages: say them clearly — "zwei Prozent", "um fünf Prozent", "doppelt so viel" — and stress the number', focusFr: 'Chiffres et pourcentages : prononce-les clairement — « zwei Prozent », « um fünf Prozent », « doppelt so viel » — accent sur le chiffre', items: [{ id: 'b2l22-inflation-pron', german: 'Inflation', english: 'inflation', french: 'inflation', gender: null, syllables: ['in', 'fla', 'TION'], pronunciation: 'in-flah-TSYOHN', example: { de: 'Die Inflation sinkt.', en: 'Inflation is falling.', fr: 'L’inflation baisse.' } }, { id: 'b2l22-verbraucher-pron', german: 'Verbraucher', english: 'consumer', french: 'consommateur', gender: null, syllables: ['ver', 'BRAU', 'cher'], pronunciation: 'fer-BROW-kher', example: { de: 'Der Verbraucher entscheidet.', en: 'The consumer decides.', fr: 'Le consommateur décide.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **compare** (**so … wie, als, doppelt so viel wie**) and **describe changes** (**um … Prozent, auf …, sich verdoppeln**) and shares (**Anteil**). 🎉',
      summaryFr: 'Tu sais maintenant **comparer** (**so … wie, als, doppelt so viel wie**) et **décrire des évolutions** (**um … Prozent, auf …, sich verdoppeln**) et des parts (**Anteil**). 🎉',
      card: { title: 'Economy on one page', titleFr: 'L’économie en une page', sections: [
        { heading: 'Compare', headingFr: 'Comparer', rows: [g('so … wie · comparative + als', 'equal · more/less', 'égal · plus/moins'), g('doppelt so viel wie', 'multiples', 'multiples')] },
        { heading: 'Change', headingFr: 'Évolution', rows: [g('um + amount · auf + level', 'um 5 % auf 110 Euro', 'um 5 % auf 110 Euro'), g('sich verdoppeln', 'double', 'doubler')] },
        { heading: 'Share', headingFr: 'Part', rows: [g('der Anteil von … an …', 'share', 'part')] },
      ] } },
  ],
};

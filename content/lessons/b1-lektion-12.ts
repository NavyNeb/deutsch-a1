import type { Lesson } from '../types';

export const b1lektion12: Lesson = {
  id: 'b1-l12', level: 'B1', module: 7, number: 26,
  title: { de: 'Zweiteilige Konnektoren', en: 'Two-part connectors', fr: 'Les connecteurs doubles' },
  theme: 'Pairs like entweder…oder, nicht nur…sondern auch, and je…desto',
  themeFr: 'Les paires comme entweder…oder, nicht nur…sondern auch, et je…desto',
  goals: ['Use "entweder … oder" and "weder … noch"', 'Use "nicht nur … sondern auch" and "sowohl … als auch"', 'Use "je … desto" with comparatives', 'Add nuance to your sentences'],
  goalsFr: ['Utiliser « entweder … oder » et « weder … noch »', 'Utiliser « nicht nur … sondern auch » et « sowohl … als auch »', 'Utiliser « je … desto » avec les comparatifs', 'Nuancer tes phrases'],
  steps: [
    { kind: 'intro', title: 'Je mehr, desto besser 📊', titleFr: 'Plus, mieux c’est 📊',
      scene: 'Weighing options and linking two ideas elegantly.', sceneFr: 'On pèse des options et on relie deux idées avec élégance.',
      goals: ['Offer alternatives (entweder … oder)', 'Exclude both (weder … noch)', 'Add (nicht nur … sondern auch)', 'Correlate with je … desto'],
      goalsFr: ['Proposer des alternatives (entweder … oder)', 'Exclure les deux (weder … noch)', 'Ajouter (nicht nur … sondern auch)', 'Corréler avec je … desto'] },

    { kind: 'vocab', item: { id: 'b1l12-entweder-oder', german: 'entweder … oder', english: 'either … or', french: 'soit … soit', gender: null, syllables: ['ent', 'WE', 'der', 'o', 'der'], pronunciation: 'ent-VAY-der … OH-der', example: { de: 'Entweder Tee oder Kaffee.', en: 'Either tea or coffee.', fr: 'Soit du thé, soit du café.' } } },
    { kind: 'vocab', item: { id: 'b1l12-weder-noch', german: 'weder … noch', english: 'neither … nor', french: 'ni … ni', gender: null, syllables: ['WE', 'der', 'noch'], pronunciation: 'VAY-der … nokh', example: { de: 'Weder Fisch noch Fleisch.', en: 'Neither fish nor meat.', fr: 'Ni poisson ni viande.' } } },
    { kind: 'vocab', item: { id: 'b1l12-nicht-nur', german: 'nicht nur … sondern auch', english: 'not only … but also', french: 'non seulement … mais aussi', gender: null, syllables: ['nicht', 'nur'], pronunciation: 'nikht noor … ZON-dern owkh', example: { de: 'Nicht nur billig, sondern auch gut.', en: 'Not only cheap, but also good.', fr: 'Non seulement bon marché, mais aussi bon.' } } },
    { kind: 'vocab', item: { id: 'b1l12-sowohl', german: 'sowohl … als auch', english: 'both … and', french: 'à la fois … et', gender: null, syllables: ['so', 'WOHL', 'als', 'auch'], pronunciation: 'zo-VOHL … ahls owkh', example: { de: 'Sowohl Anna als auch Tom kommen.', en: 'Both Anna and Tom are coming.', fr: 'Anna et Tom viennent tous les deux.' } } },
    { kind: 'vocab', item: { id: 'b1l12-je-desto', german: 'je … desto', english: 'the … the', french: 'plus … plus', gender: null, syllables: ['je', 'DES', 'to'], pronunciation: 'yay … DES-to', example: { de: 'Je mehr, desto besser.', en: 'The more, the better.', fr: 'Plus il y en a, mieux c’est.' } } },
    { kind: 'vocab', item: { id: 'b1l12-zwar-aber', german: 'zwar … aber', english: 'admittedly … but', french: 'certes … mais', gender: null, syllables: ['zwar', 'a', 'ber'], pronunciation: 'tsvar … AH-ber', example: { de: 'Es ist zwar teuer, aber gut.', en: 'It is admittedly expensive, but good.', fr: 'C’est certes cher, mais bon.' } } },
    { kind: 'vocab', item: { id: 'b1l12-wahl', german: 'die Wahl', english: 'the choice', french: 'le choix', gender: 'die', syllables: ['WAHL'], pronunciation: 'dee VAHL', example: { de: 'Du hast die Wahl.', en: 'You have the choice.', fr: 'Tu as le choix.' } } },
    { kind: 'vocab', item: { id: 'b1l12-beide', german: 'beide', english: 'both', french: 'les deux', gender: null, syllables: ['BEI', 'de'], pronunciation: 'BYE-de', example: { de: 'Beide sind gut.', en: 'Both are good.', fr: 'Les deux sont bons.' } } },
    { kind: 'vocab', item: { id: 'b1l12-sondern', german: 'sondern', english: 'but (rather)', french: 'mais (plutôt)', gender: null, syllables: ['SON', 'dern'], pronunciation: 'ZON-dern', example: { de: 'Nicht heute, sondern morgen.', en: 'Not today, but tomorrow.', fr: 'Pas aujourd’hui, mais demain.' } } },
    { kind: 'vocab', item: { id: 'b1l12-je-mehr', german: 'je mehr', english: 'the more', french: 'plus', gender: null, syllables: ['je', 'MEHR'], pronunciation: 'yay MEHR', example: { de: 'Je mehr ich übe, desto besser werde ich.', en: 'The more I practise, the better I get.', fr: 'Plus je m’entraîne, meilleur je deviens.' } } },

    { kind: 'grammar', note: {
      id: 'b1l12-entweder', title: 'entweder … oder / weder … noch', titleFr: 'entweder … oder / weder … noch',
      explanationMd: '- **entweder … oder** — either … or: **Entweder** wir gehen ins Kino **oder** wir bleiben zu Hause.\n- **weder … noch** — neither … nor (already negative, no "nicht"): Ich mag **weder** Fisch **noch** Fleisch.',
      explanationMdFr: '- **entweder … oder** — soit … soit : **Entweder** wir gehen ins Kino **oder** wir bleiben zu Hause.\n- **weder … noch** — ni … ni (déjà négatif, pas de « nicht ») : Ich mag **weder** Fisch **noch** Fleisch.',
      examples: [
        { de: 'Entweder du kommst mit oder du bleibst hier.', en: 'Either you come along or you stay here.', fr: 'Soit tu viens, soit tu restes ici.' },
        { de: 'Er spricht weder Deutsch noch Englisch.', en: 'He speaks neither German nor English.', fr: 'Il ne parle ni allemand ni anglais.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l12-nicht-nur-note', title: 'nicht nur … sondern auch / sowohl … als auch', titleFr: 'nicht nur … sondern auch / sowohl … als auch',
      explanationMd: '- **nicht nur … sondern auch** — not only … but also: Sie spricht **nicht nur** Deutsch, **sondern auch** Französisch.\n- **sowohl … als auch** — both … and: **Sowohl** Anna **als auch** Tom kommen.',
      explanationMdFr: '- **nicht nur … sondern auch** — non seulement … mais aussi : Sie spricht **nicht nur** Deutsch, **sondern auch** Französisch.\n- **sowohl … als auch** — à la fois … et : **Sowohl** Anna **als auch** Tom kommen.',
      examples: [
        { de: 'Das Hotel ist nicht nur günstig, sondern auch zentral.', en: 'The hotel is not only cheap but also central.', fr: 'L’hôtel est non seulement bon marché mais aussi central.' },
        { de: 'Ich lerne sowohl Deutsch als auch Spanisch.', en: 'I learn both German and Spanish.', fr: 'J’apprends à la fois l’allemand et l’espagnol.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l12-je-desto-note', title: 'je … desto (+ comparative)', titleFr: 'je … desto (+ comparatif)',
      explanationMd: '**je … desto** links two comparatives ("the … the"). The **je**-clause is subordinate (**verb at the end**); the **desto**-clause starts with the comparative, then the verb:\n\n- **Je** mehr ich **übe**, **desto** besser **werde** ich.\n- **Je** länger der Film **dauert**, **desto** langweiliger **wird** er.',
      explanationMdFr: '**je … desto** relie deux comparatifs (« plus … plus »). La subordonnée **je** a le **verbe à la fin** ; la proposition **desto** commence par le comparatif, puis le verbe :\n\n- **Je** mehr ich **übe**, **desto** besser **werde** ich.\n- **Je** länger der Film **dauert**, **desto** langweiliger **wird** er.',
      examples: [
        { de: 'Je früher, desto besser.', en: 'The earlier, the better.', fr: 'Plus tôt, mieux c’est.' },
        { de: 'Je mehr ich lese, desto mehr verstehe ich.', en: 'The more I read, the more I understand.', fr: 'Plus je lis, plus je comprends.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l12-e1', prompt: 'Entweder Tee ___ Kaffee. (either … or)', answer: 'oder', hint: 'entweder … oder', hintFr: 'entweder … oder' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l12-e2', prompt: 'Ich mag weder Fisch ___ Fleisch. (neither … nor)', answer: 'noch', hint: 'weder … noch', hintFr: 'weder … noch' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l12-e3', prompt: 'Complete: "Sie spricht nicht nur Deutsch, ___ auch Französisch."', promptFr: 'Complète : « Sie spricht nicht nur Deutsch, ___ auch Französisch. »', options: ['aber', 'sondern', 'oder'], answer: 1, explain: 'nicht nur … sondern auch.', explainFr: 'nicht nur … sondern auch.', hint: '"sondern" after a negative "nicht nur".', hintFr: '« sondern » après « nicht nur » (négatif).' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l12-e4', prompt: 'Je mehr ich übe, ___ besser werde ich. (the … the)', answer: 'desto', hint: 'je … desto', hintFr: 'je … desto' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l12-e5', pairs: [ { de: 'entweder … oder', en: 'either … or', fr: 'soit … soit' }, { de: 'weder … noch', en: 'neither … nor', fr: 'ni … ni' }, { de: 'je … desto', en: 'the … the', fr: 'plus … plus' } ], hint: 'Match each connector pair to its meaning.', hintFr: 'Associe chaque paire de connecteurs à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l12-e6', prompt: 'Listen. What does Lena say about the hotel?', promptFr: 'Écoute. Que dit Lena de l’hôtel ?', audio: { ttsText: 'Das Hotel ist nicht nur günstig, sondern auch sehr zentral.' }, options: ['Cheap and central', 'Expensive but nice', 'Far but quiet'], optionsFr: ['Bon marché et central', 'Cher mais joli', 'Loin mais calme'], answer: 0, hint: 'Listen for "nicht nur … sondern auch".', hintFr: 'Écoute « nicht nur … sondern auch ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l12-e7', tokens: ['ich', 'übe', 'Je mehr'], answer: ['Je mehr', 'ich', 'übe'], hint: 'je-clause: verb at the end.', hintFr: 'subordonnée je : verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l12-e8', prompt: 'Which means "both Anna and Tom"?', promptFr: 'Lequel signifie « Anna et Tom tous les deux » ?', options: ['entweder Anna oder Tom', 'sowohl Anna als auch Tom', 'weder Anna noch Tom'], answer: 1, explain: 'sowohl … als auch = both … and.', explainFr: 'sowohl … als auch = à la fois … et.', hint: 'Both, not either/neither.', hintFr: 'Les deux, pas soit/ni.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l12-e9', prompt: 'Es ist ___ teuer, aber sehr gut. (admittedly)', answer: 'zwar', hint: 'zwar … aber', hintFr: 'zwar … aber' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l12-e10', prompt: 'Listen. What is the speaker’s point?', promptFr: 'Écoute. Quel est le point du locuteur ?', audio: { ttsText: 'Je mehr Deutsch ich lerne, desto einfacher wird es.' }, options: ['The more German I learn, the easier it gets', 'German is too hard', 'I stopped learning'], optionsFr: ['Plus j’apprends l’allemand, plus c’est facile', 'L’allemand est trop dur', 'J’ai arrêté'], answer: 0, hint: 'Listen for "je … desto".', hintFr: 'Écoute « je … desto ».' } },

    { kind: 'pronunciation', focus: 'Keep both halves parallel and stress the key words: entWEder … Oder, JE … DESto', focusFr: 'Garde les deux moitiés parallèles et accentue les mots clés : entWEder … Oder, JE … DESto', items: [
      { id: 'b1l12-entweder-pron', german: 'entweder', english: 'either', french: 'soit', gender: null, syllables: ['ent', 'WE', 'der'], pronunciation: 'ent-VAY-der', example: { de: 'Entweder heute oder morgen.', en: 'Either today or tomorrow.', fr: 'Soit aujourd’hui, soit demain.' } },
      { id: 'b1l12-je-desto-pron', german: 'je … desto', english: 'the … the', french: 'plus … plus', gender: null, syllables: ['je', 'DES', 'to'], pronunciation: 'yay … DES-to', example: { de: 'Je eher, desto besser.', en: 'The sooner, the better.', fr: 'Le plus tôt sera le mieux.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now link ideas with two-part connectors: **entweder … oder**, **weder … noch**, **nicht nur … sondern auch**, **sowohl … als auch**, and **je … desto** (+ comparatives). That completes B1 — you’ve reached the intermediate level. Ausgezeichnet! 🎉',
      summaryFr: 'Tu sais maintenant relier les idées avec des connecteurs doubles : **entweder … oder**, **weder … noch**, **nicht nur … sondern auch**, **sowohl … als auch**, et **je … desto** (+ comparatifs). Cela conclut le B1 — tu as atteint le niveau intermédiaire. Ausgezeichnet ! 🎉' },
  ],
};

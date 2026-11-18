import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion12: Lesson = {
  id: 'b1-l12', level: 'B1', module: 7, number: 26,
  title: { de: 'Zweiteilige Konnektoren', en: 'Two-part connectors', fr: 'Les connecteurs doubles' },
  theme: 'Pairs like entweder…oder, nicht nur…sondern auch, and je…desto', themeFr: 'Les paires comme entweder…oder, nicht nur…sondern auch, et je…desto',
  goals: ['Use "entweder … oder" and "weder … noch"', 'Use "nicht nur … sondern auch" and "sowohl … als auch"', 'Use "je … desto" with comparatives', 'Add nuance to your sentences'], goalsFr: ['Utiliser « entweder … oder » et « weder … noch »', 'Utiliser « nicht nur … sondern auch » et « sowohl … als auch »', 'Utiliser « je … desto » avec les comparatifs', 'Nuancer tes phrases'],
  canDo: g('Ich kann zweiteilige Konnektoren wie entweder … oder, weder … noch, nicht nur … sondern auch, sowohl … als auch, zwar … aber und je … desto richtig verwenden.', 'I can use two-part connectors like entweder … oder, weder … noch, nicht nur … sondern auch, sowohl … als auch, zwar … aber and je … desto correctly.', 'Je sais utiliser correctement des connecteurs à deux éléments comme entweder … oder, weder … noch, nicht nur … sondern auch, sowohl … als auch, zwar … aber et je … desto.'),
  steps: [
    { kind: 'intro', title: 'Zweiteilige Konnektoren ⚖️', titleFr: 'Connecteurs à deux éléments ⚖️',
      scene: 'Lena compares hotels, hobbies and choices — and every sentence has two parts that belong together.', sceneFr: 'Lena compare hôtels, loisirs et choix — et chaque phrase a deux parties qui vont ensemble.',
      goals: ['Use entweder … oder and weder … noch', 'Use nicht nur … sondern auch and sowohl … als auch', 'Use zwar … aber and je … desto to add nuance'],
      goalsFr: ['Utiliser entweder … oder et weder … noch', 'Utiliser nicht nur … sondern auch et sowohl … als auch', 'Utiliser zwar … aber et je … desto pour nuancer'] },

    // ───────────── 1 · entweder … oder / weder … noch ─────────────
    { kind: 'chapter', title: 'entweder … oder, weder … noch', titleFr: 'entweder … oder, weder … noch', blurb: 'Choice and negation.', blurbFr: 'Choix et négation.' },

    { kind: 'situation', title: 'Du hast die Wahl', titleFr: 'Tu as le choix',
      setting: 'Lena and Jonas choose between options.', settingFr: 'Lena et Jonas choisissent entre plusieurs options.',
      lines: [
        line('Lena', 'Du hast die Wahl: Entweder Tee oder Kaffee. Entweder wir gehen ins Kino oder wir bleiben zu Hause.', 'You have the choice: either tea or coffee. Either we go to the cinema or we stay at home.', 'Tu as le choix : soit du thé, soit du café. Soit nous allons au cinéma, soit nous restons à la maison.'),
        line('Jonas', 'Ich mag weder Fisch noch Fleisch. Er spricht weder Deutsch noch Englisch. Entweder du kommst mit oder du bleibst hier.', 'I like neither fish nor meat. He speaks neither German nor English. Either you come along or you stay here.', 'Je n’aime ni le poisson ni la viande. Il ne parle ni allemand ni anglais. Soit tu viens avec nous, soit tu restes ici.'),
        line('Lena', 'Beide sind gut. Nicht heute, sondern morgen.', 'Both are good. Not today but tomorrow.', 'Les deux sont bien. Pas aujourd’hui, mais demain.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l12-e11', prompt: 'What does Jonas not like?', promptFr: 'Qu’est-ce que Jonas n’aime pas ?', options: ['Neither fish nor meat', 'Only fish', 'Only meat'], optionsFr: ['Ni le poisson ni la viande', 'Seulement le poisson', 'Seulement la viande'], answer: 0, explain: 'He says: “Ich mag weder Fisch noch Fleisch.”', explainFr: 'Il dit : « Ich mag weder Fisch noch Fleisch. »', hint: 'Look for “weder … noch”.', hintFr: 'Cherche « weder … noch ».' } },

    { kind: 'wordgroup', title: 'Wahl und Verneinung', titleFr: 'Choix et négation',
      items: [{ id: 'b1l12-entweder-oder', german: 'entweder … oder', english: 'either … or', french: 'soit … soit', gender: null, syllables: ['ent', 'WE', 'der', 'o', 'der'], pronunciation: 'ent-VAY-der … OH-der', example: { de: 'Entweder Tee oder Kaffee.', en: 'Either tea or coffee.', fr: 'Soit du thé, soit du café.' } }, { id: 'b1l12-weder-noch', german: 'weder … noch', english: 'neither … nor', french: 'ni … ni', gender: null, syllables: ['WE', 'der', 'noch'], pronunciation: 'VAY-der … nokh', example: { de: 'Weder Fisch noch Fleisch.', en: 'Neither fish nor meat.', fr: 'Ni poisson ni viande.' } }, { id: 'b1l12-wahl', german: 'die Wahl', english: 'the choice', french: 'le choix', gender: 'die', syllables: ['WAHL'], pronunciation: 'dee VAHL', example: { de: 'Du hast die Wahl.', en: 'You have the choice.', fr: 'Tu as le choix.' } }, { id: 'b1l12-beide', german: 'beide', english: 'both', french: 'les deux', gender: null, syllables: ['BEI', 'de'], pronunciation: 'BYE-de', example: { de: 'Beide sind gut.', en: 'Both are good.', fr: 'Les deux sont bons.' } }, { id: 'b1l12-sondern', german: 'sondern', english: 'but (rather)', french: 'mais (plutôt)', gender: null, syllables: ['SON', 'dern'], pronunciation: 'ZON-dern', example: { de: 'Nicht heute, sondern morgen.', en: 'Not today, but tomorrow.', fr: 'Pas aujourd’hui, mais demain.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l12-entweder-weder', title: 'entweder … oder and weder … noch', titleFr: 'entweder … oder et weder … noch',
      lead: 'entweder … oder = either … or. weder … noch = neither … nor (already negative: no nicht).',
      leadFr: 'entweder … oder = soit … soit. weder … noch = ni … ni (déjà négatif : pas de nicht).',
      explanationMd: '**entweder … oder** — either … or: **Entweder wir gehen ins Kino oder wir bleiben zu Hause.** The **verb stays in position 2** after **entweder** if it starts the sentence part: **Entweder gehen wir …** is also possible. **weder … noch** — neither … nor — is **already negative**, so **no nicht**: **Ich mag weder Fisch noch Fleisch. Er spricht weder Deutsch noch Englisch.** The **two parts stand parallel**: **same word class** (noun with noun, verb with verb). With a **verb** after **weder … noch**: **Er raucht weder, noch trinkt er.** Also: **sondern** (but rather) follows a **negation**: **Nicht heute, sondern morgen.**',
      explanationMdFr: '**entweder … oder** — soit … soit : **Entweder wir gehen ins Kino oder wir bleiben zu Hause.** Le **verbe reste en position 2** après **entweder** quand il ouvre la partie de phrase : **Entweder gehen wir …** est aussi possible. **weder … noch** — ni … ni — est **déjà négatif**, donc **pas de nicht** : **Ich mag weder Fisch noch Fleisch. Er spricht weder Deutsch noch Englisch.** Les **deux parties sont parallèles** : **même classe de mots** (nom avec nom, verbe avec verbe). Avec un **verbe** après **weder … noch** : **Er raucht weder, noch trinkt er.** Aussi : **sondern** (mais plutôt) suit une **négation** : **Nicht heute, sondern morgen.**',
      tables: [{ title: 'entweder … oder / weder … noch', titleFr: 'entweder … oder / weder … noch', headers: ['Connector', 'Meaning', 'Example'], headersFr: ['Connecteur', 'Sens', 'Exemple'],
        rows: [['entweder … oder', 'either … or', 'Entweder Tee oder Kaffee.'], ['weder … noch', 'neither … nor', 'Ich mag weder Fisch noch Fleisch.'], ['nicht … sondern', 'not … but rather', 'Nicht heute, sondern morgen.']],
        rowsFr: [['entweder … oder', 'soit … soit', 'Entweder Tee oder Kaffee.'], ['weder … noch', 'ni … ni', 'Ich mag weder Fisch noch Fleisch.'], ['nicht … sondern', 'pas … mais plutôt', 'Nicht heute, sondern morgen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Entweder', role: 'connector' }, { text: 'du', role: 'subject' }, { text: 'kommst', role: 'verb' }, { text: 'mit', role: 'other' }, { text: 'oder', role: 'connector' }, { text: 'du', role: 'subject' }, { text: 'bleibst', role: 'verb' }, { text: 'hier.', role: 'place' }], en: 'Either you come along or you stay here.', fr: 'Soit tu viens avec nous, soit tu restes ici.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'spricht', role: 'verb' }, { text: 'weder Deutsch', role: 'accusative' }, { text: 'noch Englisch.', role: 'accusative' }], en: 'He speaks neither German nor English.', fr: 'Il ne parle ni allemand ni anglais.' },
      ],
      contrast: {
        a: { label: 'oder (simple)', labelFr: 'oder (simple)', note: 'Tee oder Kaffee?', noteFr: 'Tee oder Kaffee ?', examples: [g('Möchtest du Tee oder Kaffee?', 'Would you like tea or coffee?', 'Veux-tu du thé ou du café ?'), g('Wir gehen ins Kino oder bleiben zu Hause.', 'We go to the cinema or stay at home.', 'Nous allons au cinéma ou restons à la maison.')] },
        b: { label: 'entweder … oder (strong)', labelFr: 'entweder … oder (fort)', note: 'one or the other', noteFr: 'l’un ou l’autre', examples: [g('Entweder Tee oder Kaffee — nicht beides.', 'Either tea or coffee — not both.', 'Soit du thé, soit du café — pas les deux.'), g('Entweder du kommst mit oder du bleibst hier.', 'Either you come along or you stay here.', 'Soit tu viens avec nous, soit tu restes ici.')] },
      },
      examples: [
        g('Entweder wir gehen ins Kino oder wir bleiben zu Hause.', 'Either we go to the cinema or we stay at home.', 'Soit nous allons au cinéma, soit nous restons à la maison.'),
        g('Entweder du kommst mit oder du bleibst hier.', 'Either you come along or you stay here.', 'Soit tu viens avec nous, soit tu restes ici.'),
        g('Ich mag weder Fisch noch Fleisch.', 'I like neither fish nor meat.', 'Je n’aime ni le poisson ni la viande.'),
        g('Er spricht weder Deutsch noch Englisch.', 'He speaks neither German nor English.', 'Il ne parle ni allemand ni anglais.'),
        g('Nicht heute, sondern morgen.', 'Not today but tomorrow.', 'Pas aujourd’hui, mais demain.'),
        g('Beide sind gut.', 'Both are good.', 'Les deux sont bien.'),
      ],
      mistakes: [
        { wrong: 'Ich mag weder nicht Fisch noch Fleisch.', right: 'Ich mag weder Fisch noch Fleisch.', why: 'weder … noch is already negative.', whyFr: 'weder … noch est déjà négatif.' },
        { wrong: 'Nicht heute, aber morgen.', right: 'Nicht heute, sondern morgen.', why: 'After a negation use sondern.', whyFr: 'Après une négation, utilise sondern.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l12-e1', prompt: 'Entweder Tee ___ Kaffee. (either … or)', answer: 'oder', hint: 'entweder … oder', hintFr: 'entweder … oder' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l12-e2', prompt: 'Ich mag weder Fisch ___ Fleisch. (neither … nor)', answer: 'noch', hint: 'weder … noch', hintFr: 'weder … noch' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l12-e5', pairs: [{ de: 'entweder … oder', en: 'either … or', fr: 'soit … soit' }, { de: 'weder … noch', en: 'neither … nor', fr: 'ni … ni' }, { de: 'je … desto', en: 'the … the', fr: 'plus … plus' }], hint: 'Match each connector pair to its meaning.', hintFr: 'Associe chaque paire de connecteurs à sa signification.' } },

    // ───────────── 2 · nicht nur / sowohl ─────────────
    { kind: 'chapter', title: 'nicht nur … sondern auch, sowohl … als auch', titleFr: 'nicht nur … sondern auch, sowohl … als auch', blurb: 'Adding things.', blurbFr: 'Ajouter des choses.' },

    { kind: 'situation', title: 'Nicht nur günstig', titleFr: 'Pas seulement bon marché',
      setting: 'Lena talks about her hotel and her languages.', settingFr: 'Lena parle de son hôtel et de ses langues.',
      lines: [
        line('Lena', 'Das Hotel ist nicht nur günstig, sondern auch sehr zentral. Sie spricht nicht nur Deutsch, sondern auch Französisch.', 'The hotel is not only cheap but also very central. She speaks not only German but also French.', 'L’hôtel n’est pas seulement bon marché, mais aussi très central. Elle ne parle pas seulement allemand, mais aussi français.'),
        line('Jonas', 'Ich lerne sowohl Deutsch als auch Spanisch. Sowohl Anna als auch Tom kommen.', 'I learn both German and Spanish. Both Anna and Tom are coming.', 'J’apprends à la fois l’allemand et l’espagnol. Anna et Tom viennent tous les deux.'),
        line('Lena', 'Nicht nur billig, sondern auch gut. Sowohl das Frühstück als auch das Zimmer waren super.', 'Not only cheap but also good. Both the breakfast and the room were great.', 'Pas seulement bon marché, mais aussi bien. Le petit-déjeuner comme la chambre étaient super.'),
      ],
      words: [{ id: 'b1l12-nicht-nur', german: 'nicht nur … sondern auch', english: 'not only … but also', french: 'non seulement … mais aussi', gender: null, syllables: ['nicht', 'nur'], pronunciation: 'nikht noor … ZON-dern owkh', example: { de: 'Nicht nur billig, sondern auch gut.', en: 'Not only cheap, but also good.', fr: 'Non seulement bon marché, mais aussi bon.' } }, { id: 'b1l12-sowohl', german: 'sowohl … als auch', english: 'both … and', french: 'à la fois … et', gender: null, syllables: ['so', 'WOHL', 'als', 'auch'], pronunciation: 'zo-VOHL … ahls owkh', example: { de: 'Sowohl Anna als auch Tom kommen.', en: 'Both Anna and Tom are coming.', fr: 'Anna et Tom viennent tous les deux.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l12-nicht-nur', title: 'nicht nur … sondern auch and sowohl … als auch', titleFr: 'nicht nur … sondern auch et sowohl … als auch',
      lead: 'nicht nur … sondern auch = not only … but also. sowohl … als auch = both … and. Both parts stay parallel.',
      leadFr: 'nicht nur … sondern auch = non seulement … mais aussi. sowohl … als auch = à la fois … et. Les deux parties restent parallèles.',
      explanationMd: '**nicht nur … sondern auch** — not only … but also: **Sie spricht nicht nur Deutsch, sondern auch Französisch.** **sowohl … als auch** — both … and: **Sowohl Anna als auch Tom kommen.** With **sowohl … als auch** the **verb agrees with the plural** (**kommen**). The **two parts stay parallel** (same word class). **nicht nur … sondern auch** can also join **whole clauses**: **Nicht nur ist das Hotel günstig, sondern es ist auch zentral.** (**inversion** after **nicht nur** at the start). Use **both** to **emphasise two good points**.',
      explanationMdFr: '**nicht nur … sondern auch** — non seulement … mais aussi : **Sie spricht nicht nur Deutsch, sondern auch Französisch.** **sowohl … als auch** — à la fois … et : **Sowohl Anna als auch Tom kommen.** Avec **sowohl … als auch**, le **verbe s’accorde au pluriel** (**kommen**). Les **deux parties restent parallèles** (même classe de mots). **nicht nur … sondern auch** peut aussi relier des **propositions entières** : **Nicht nur ist das Hotel günstig, sondern es ist auch zentral.** (**inversion** après **nicht nur** en tête). Utilise-les pour **mettre en valeur deux points positifs**.',
      tables: [{ title: 'Adding connectors', titleFr: 'Connecteurs d’addition', headers: ['Connector', 'Example'], headersFr: ['Connecteur', 'Exemple'],
        rows: [['nicht nur … sondern auch', 'Das Hotel ist nicht nur günstig, sondern auch zentral.'], ['sowohl … als auch', 'Ich lerne sowohl Deutsch als auch Spanisch.'], ['sowohl … als auch (subject)', 'Sowohl Anna als auch Tom kommen.'], ['nicht nur … sondern auch (clause)', 'Nicht nur ist das Hotel günstig, sondern es ist auch zentral.']],
        rowsFr: [['nicht nur … sondern auch', 'Das Hotel ist nicht nur günstig, sondern auch zentral.'], ['sowohl … als auch', 'Ich lerne sowohl Deutsch als auch Spanisch.'], ['sowohl … als auch (sujet)', 'Sowohl Anna als auch Tom kommen.'], ['nicht nur … sondern auch (proposition)', 'Nicht nur ist das Hotel günstig, sondern es ist auch zentral.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'spricht', role: 'verb' }, { text: 'nicht nur Deutsch,', role: 'accusative' }, { text: 'sondern auch Französisch.', role: 'accusative' }], en: 'She speaks not only German but also French.', fr: 'Elle ne parle pas seulement allemand, mais aussi français.' },
        { parts: [{ text: 'Sowohl Anna', role: 'subject' }, { text: 'als auch Tom', role: 'subject' }, { text: 'kommen.', role: 'verb' }], en: 'Both Anna and Tom are coming.', fr: 'Anna comme Tom viennent.' },
      ],
      contrast: {
        a: { label: 'und (simple)', labelFr: 'und (simple)', note: 'neutral', noteFr: 'neutre', examples: [g('Anna und Tom kommen.', 'Anna and Tom are coming.', 'Anna et Tom viennent.'), g('Das Hotel ist günstig und zentral.', 'The hotel is cheap and central.', 'L’hôtel est bon marché et central.')] },
        b: { label: 'two-part (emphasis)', labelFr: 'à deux éléments (emphase)', note: 'both points count', noteFr: 'les deux points comptent', examples: [g('Sowohl Anna als auch Tom kommen.', 'Both Anna and Tom are coming.', 'Anna comme Tom viennent.'), g('Das Hotel ist nicht nur günstig, sondern auch zentral.', 'The hotel is not only cheap but also central.', 'L’hôtel n’est pas seulement bon marché, mais aussi central.')] },
      },
      examples: [
        g('Das Hotel ist nicht nur günstig, sondern auch zentral.', 'The hotel is not only cheap but also central.', 'L’hôtel n’est pas seulement bon marché, mais aussi central.'),
        g('Sie spricht nicht nur Deutsch, sondern auch Französisch.', 'She speaks not only German but also French.', 'Elle ne parle pas seulement allemand, mais aussi français.'),
        g('Ich lerne sowohl Deutsch als auch Spanisch.', 'I learn both German and Spanish.', 'J’apprends à la fois l’allemand et l’espagnol.'),
        g('Sowohl Anna als auch Tom kommen.', 'Both Anna and Tom are coming.', 'Anna comme Tom viennent.'),
        g('Nicht nur billig, sondern auch gut.', 'Not only cheap but also good.', 'Pas seulement bon marché, mais aussi bien.'),
        g('Sowohl das Frühstück als auch das Zimmer waren super.', 'Both the breakfast and the room were great.', 'Le petit-déjeuner comme la chambre étaient super.'),
      ],
      mistakes: [
        { wrong: 'Sie spricht nicht nur Deutsch, aber auch Französisch.', right: 'Sie spricht nicht nur Deutsch, sondern auch Französisch.', why: 'The second part is sondern auch.', whyFr: 'La seconde partie est sondern auch.' },
        { wrong: 'Sowohl Anna und Tom kommen.', right: 'Sowohl Anna als auch Tom kommen.', why: 'The partner of sowohl is als auch.', whyFr: 'Le partenaire de sowohl est als auch.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l12-e3', prompt: 'Complete: "Sie spricht nicht nur Deutsch, ___ auch Französisch."', promptFr: 'Complète : « Sie spricht nicht nur Deutsch, ___ auch Französisch. »', options: ['aber', 'sondern', 'oder'], answer: 1, explain: 'nicht nur … sondern auch.', explainFr: 'nicht nur … sondern auch.', hint: '"sondern" after a negative "nicht nur".', hintFr: '« sondern » après « nicht nur » (négatif).' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l12-e8', prompt: 'Which means "both Anna and Tom"?', promptFr: 'Lequel signifie « Anna et Tom tous les deux » ?', options: ['entweder Anna oder Tom', 'sowohl Anna als auch Tom', 'weder Anna noch Tom'], answer: 1, explain: 'sowohl … als auch = both … and.', explainFr: 'sowohl … als auch = à la fois … et.', hint: 'Both, not either/neither.', hintFr: 'Les deux, pas soit/ni.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l12-e6', prompt: 'Listen. What does Lena say about the hotel?', promptFr: 'Écoute. Que dit Lena de l’hôtel ?', audio: { ttsText: 'Das Hotel ist nicht nur günstig, sondern auch sehr zentral.' }, options: ['Cheap and central', 'Expensive but nice', 'Far but quiet'], optionsFr: ['Bon marché et central', 'Cher mais joli', 'Loin mais calme'], answer: 0, hint: 'Listen for "nicht nur … sondern auch".', hintFr: 'Écoute « nicht nur … sondern auch ».' } },

    // ───────────── 3 · zwar … aber and je … desto ─────────────
    { kind: 'chapter', title: 'zwar … aber und je … desto', titleFr: 'zwar … aber et je … desto', blurb: 'Admit, then limit — and the more, the more.', blurbFr: 'Concéder puis nuancer — et plus … plus ….' },

    { kind: 'situation', title: 'Zwar teuer, aber gut', titleFr: 'Certes cher, mais bien',
      setting: 'Lena weighs up a restaurant and her German.', settingFr: 'Lena évalue un restaurant et son allemand.',
      lines: [
        line('Lena', 'Es ist zwar teuer, aber sehr gut. Das Zimmer ist zwar klein, aber gemütlich.', 'It is admittedly expensive, but very good. The room is admittedly small, but cosy.', 'C’est certes cher, mais très bien. La chambre est certes petite, mais agréable.'),
        line('Jonas', 'Je mehr ich übe, desto besser werde ich. Je länger der Film dauert, desto langweiliger wird er. Je früher, desto besser.', 'The more I practise the better I get. The longer the film lasts the more boring it gets. The earlier the better.', 'Plus je m’exerce, meilleur je deviens. Plus le film dure, plus il devient ennuyeux. Le plus tôt sera le mieux.'),
        line('Lena', 'Je mehr ich lese, desto mehr verstehe ich. Je mehr Deutsch ich lerne, desto einfacher wird es.', 'The more I read the more I understand. The more German I learn the easier it gets.', 'Plus je lis, plus je comprends. Plus j’apprends d’allemand, plus c’est facile.'),
      ],
      words: [{ id: 'b1l12-zwar-aber', german: 'zwar … aber', english: 'admittedly … but', french: 'certes … mais', gender: null, syllables: ['zwar', 'a', 'ber'], pronunciation: 'tsvar … AH-ber', example: { de: 'Es ist zwar teuer, aber gut.', en: 'It is admittedly expensive, but good.', fr: 'C’est certes cher, mais bon.' } }, { id: 'b1l12-je-desto', german: 'je … desto', english: 'the … the', french: 'plus … plus', gender: null, syllables: ['je', 'DES', 'to'], pronunciation: 'yay … DES-to', example: { de: 'Je mehr, desto besser.', en: 'The more, the better.', fr: 'Plus il y en a, mieux c’est.' } }, { id: 'b1l12-je-mehr', german: 'je mehr', english: 'the more', french: 'plus', gender: null, syllables: ['je', 'MEHR'], pronunciation: 'yay MEHR', example: { de: 'Je mehr ich übe, desto besser werde ich.', en: 'The more I practise, the better I get.', fr: 'Plus je m’entraîne, meilleur je deviens.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l12-zwar-je', title: 'zwar … aber and je … desto', titleFr: 'zwar … aber et je … desto',
      lead: 'zwar … aber admits one point and limits it. je + comparative (verb last) … desto + comparative + verb.',
      leadFr: 'zwar … aber concède un point et le limite. je + comparatif (verbe à la fin) … desto + comparatif + verbe.',
      explanationMd: '**zwar … aber** admits one point and then **limits it**: **Es ist zwar teuer, aber sehr gut.** The **verb stays in position 2** in both parts; **zwar** stands in the **middle field**. **je … desto** links **two comparatives** (“the … the”). The **je-clause** is **subordinate** (**verb at the end**); the **desto-clause** starts with the **comparative**, then the **verb**: **Je mehr ich übe, desto besser werde ich.** **Je länger der Film dauert, desto langweiliger wird er.** Short form: **Je früher, desto besser.** Both **comparatives** are used: **mehr, länger, besser, langweiliger**.',
      explanationMdFr: '**zwar … aber** concède un point puis le **limite** : **Es ist zwar teuer, aber sehr gut.** Le **verbe reste en position 2** dans les deux parties ; **zwar** se place dans le **champ du milieu**. **je … desto** relie **deux comparatifs** (« plus … plus … »). La **proposition en je** est **subordonnée** (**verbe à la fin**) ; la **proposition en desto** commence par le **comparatif**, puis le **verbe** : **Je mehr ich übe, desto besser werde ich.** **Je länger der Film dauert, desto langweiliger wird er.** Forme courte : **Je früher, desto besser.** Les deux **comparatifs** sont utilisés : **mehr, länger, besser, langweiliger**.',
      tables: [{ title: 'zwar … aber / je … desto', titleFr: 'zwar … aber / je … desto', headers: ['Connector', 'Order', 'Example'], headersFr: ['Connecteur', 'Ordre', 'Exemple'],
        rows: [['zwar … aber', 'verb 2nd in both parts', 'Es ist zwar teuer, aber gut.'], ['je … desto', 'je: verb last · desto: comparative + verb', 'Je mehr ich übe, desto besser werde ich.'], ['short form', 'no verbs', 'Je früher, desto besser.']],
        rowsFr: [['zwar … aber', 'verbe en 2e dans les deux parties', 'Es ist zwar teuer, aber gut.'], ['je … desto', 'je : verbe à la fin · desto : comparatif + verbe', 'Je mehr ich übe, desto besser werde ich.'], ['forme courte', 'sans verbes', 'Je früher, desto besser.']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'zwar', role: 'connector' }, { text: 'teuer,', role: 'other' }, { text: 'aber', role: 'connector' }, { text: 'sehr gut.', role: 'other' }], en: 'It is admittedly expensive, but very good.', fr: 'C’est certes cher, mais très bien.' },
        { parts: [{ text: 'Je mehr', role: 'other' }, { text: 'ich', role: 'subject' }, { text: 'übe,', role: 'verb' }, { text: 'desto besser', role: 'other' }, { text: 'werde', role: 'verb' }, { text: 'ich.', role: 'subject' }], en: 'The more I practise, the better I get.', fr: 'Plus je m’exerce, meilleur je deviens.' },
      ],
      contrast: {
        a: { label: 'zwar … aber', labelFr: 'zwar … aber', note: 'concession', noteFr: 'concession', examples: [g('Es ist zwar teuer, aber sehr gut.', 'It is admittedly expensive, but very good.', 'C’est certes cher, mais très bien.'), g('Das Zimmer ist zwar klein, aber gemütlich.', 'The room is admittedly small, but cosy.', 'La chambre est certes petite, mais agréable.')] },
        b: { label: 'je … desto', labelFr: 'je … desto', note: 'proportion', noteFr: 'proportion', examples: [g('Je mehr ich übe, desto besser werde ich.', 'The more I practise the better I get.', 'Plus je m’exerce, meilleur je deviens.'), g('Je mehr Deutsch ich lerne, desto einfacher wird es.', 'The more German I learn the easier it gets.', 'Plus j’apprends d’allemand, plus c’est facile.')] },
      },
      examples: [
        g('Es ist zwar teuer, aber sehr gut.', 'It is admittedly expensive, but very good.', 'C’est certes cher, mais très bien.'),
        g('Das Zimmer ist zwar klein, aber gemütlich.', 'The room is admittedly small, but cosy.', 'La chambre est certes petite, mais agréable.'),
        g('Je mehr ich übe, desto besser werde ich.', 'The more I practise the better I get.', 'Plus je m’exerce, meilleur je deviens.'),
        g('Je länger der Film dauert, desto langweiliger wird er.', 'The longer the film lasts the more boring it gets.', 'Plus le film dure, plus il devient ennuyeux.'),
        g('Je mehr ich lese, desto mehr verstehe ich.', 'The more I read the more I understand.', 'Plus je lis, plus je comprends.'),
        g('Je früher, desto besser.', 'The earlier the better.', 'Le plus tôt sera le mieux.'),
      ],
      mistakes: [
        { wrong: 'Je mehr ich übe, desto werde ich besser.', right: 'Je mehr ich übe, desto besser werde ich.', why: 'In the desto-clause the comparative comes first.', whyFr: 'Dans la proposition en desto, le comparatif vient en premier.' },
        { wrong: 'Es ist zwar teuer, es ist aber sehr gut.', right: 'Es ist zwar teuer, aber sehr gut.', why: 'Keep the parts short and parallel.', whyFr: 'Garde les parties courtes et parallèles.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l12-e4', prompt: 'Je mehr ich übe, ___ besser werde ich. (the … the)', answer: 'desto', hint: 'je … desto', hintFr: 'je … desto' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l12-e7', tokens: ['ich', 'übe', 'Je mehr'], answer: ['Je mehr', 'ich', 'übe'], hint: 'je-clause: verb at the end.', hintFr: 'subordonnée je : verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l12-e9', prompt: 'Es ist ___ teuer, aber sehr gut. (admittedly)', answer: 'zwar', hint: 'zwar … aber', hintFr: 'zwar … aber' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l12-e10', prompt: 'Listen. What is the speaker’s point?', promptFr: 'Écoute. Quel est le point du locuteur ?', audio: { ttsText: 'Je mehr Deutsch ich lerne, desto einfacher wird es.' }, options: ['The more German I learn, the easier it gets', 'German is too hard', 'I stopped learning'], optionsFr: ['Plus j’apprends l’allemand, plus c’est facile', 'L’allemand est trop dur', 'J’ai arrêté'], answer: 0, hint: 'Listen for "je … desto".', hintFr: 'Écoute « je … desto ».' } },

    { kind: 'pronunciation', focus: 'Keep both halves parallel and stress the key words: entWEder … Oder, JE … DESto', focusFr: 'Garde les deux moitiés parallèles et accentue les mots clés : entWEder … Oder, JE … DESto', items: [{ id: 'b1l12-entweder-pron', german: 'entweder', english: 'either', french: 'soit', gender: null, syllables: ['ent', 'WE', 'der'], pronunciation: 'ent-VAY-der', example: { de: 'Entweder heute oder morgen.', en: 'Either today or tomorrow.', fr: 'Soit aujourd’hui, soit demain.' } }, { id: 'b1l12-je-desto-pron', german: 'je … desto', english: 'the … the', french: 'plus … plus', gender: null, syllables: ['je', 'DES', 'to'], pronunciation: 'yay … DES-to', example: { de: 'Je eher, desto besser.', en: 'The sooner, the better.', fr: 'Le plus tôt sera le mieux.' } }] },

    { kind: 'wrapup',
      summary: 'You can now link ideas with **two-part connectors**: **entweder … oder**, **weder … noch**, **nicht nur … sondern auch**, **sowohl … als auch**, **zwar … aber** and **je … desto**. 🎉',
      summaryFr: 'Tu sais maintenant relier des idées avec des **connecteurs à deux éléments** : **entweder … oder**, **weder … noch**, **nicht nur … sondern auch**, **sowohl … als auch**, **zwar … aber** et **je … desto**. 🎉',
      card: { title: 'Two-part connectors on one page', titleFr: 'Les connecteurs à deux éléments en une page', sections: [
        { heading: 'Choice', headingFr: 'Choix', rows: [g('entweder … oder', 'either … or', 'soit … soit'), g('weder … noch', 'neither … nor (no nicht)', 'ni … ni (sans nicht)')] },
        { heading: 'Adding', headingFr: 'Ajouter', rows: [g('nicht nur … sondern auch', 'not only … but also', 'non seulement … mais aussi'), g('sowohl … als auch', 'both … and', 'à la fois … et')] },
        { heading: 'Nuance', headingFr: 'Nuance', rows: [g('zwar … aber', 'admittedly … but', 'certes … mais'), g('je … desto', 'the … the', 'plus … plus')] },
      ] } },
  ],
};

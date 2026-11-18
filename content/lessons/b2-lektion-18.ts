import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion18: Lesson = {
  id: 'b2-l18', level: 'B2', module: 6, number: 18,
  title: { de: 'Umwelt und Nachhaltigkeit', en: 'Environment and sustainability', fr: 'Environnement et durabilité' },
  theme: 'Climate, energy, consumption and action: verbs with prepositions (sich einsetzen für, leiden unter, beitragen zu) and nouns with prepositions', themeFr: 'Climat, énergie, consommation et engagement : verbes avec prépositions (sich einsetzen für, leiden unter, beitragen zu) et noms avec prépositions',
  goals: ['Talk about climate change and energy', 'Discuss what individuals and governments can do', 'Use verbs and nouns with fixed prepositions', 'Express hopes, fears and commitments'], goalsFr: ['Parler du changement climatique et de l’énergie', 'Discuter de ce que peuvent faire individus et gouvernements', 'Employer verbes et noms à préposition fixe', 'Exprimer espoirs, craintes et engagements'],
  canDo: g('Ich kann über Klima und Nachhaltigkeit diskutieren, Forderungen formulieren und Verben mit festen Präpositionen richtig verwenden.', 'I can discuss climate and sustainability, formulate demands and use verbs with fixed prepositions correctly.', 'Je sais discuter climat et durabilité, formuler des exigences et utiliser correctement les verbes à préposition fixe.'),
  steps: [
    { kind: 'intro', title: 'Umwelt und Nachhaltigkeit 🌍', titleFr: 'Environnement et durabilité 🌍',
      scene: 'A town hall debate on climate: what must change, and who is campaigning for what?', sceneFr: 'Un débat en mairie sur le climat : que faut-il changer, et qui se bat pour quoi ?',
      goals: ['Talk about climate change, energy and consumption', 'Express demands with sollte / müsste / muss … werden', 'Use verbs and nouns with fixed prepositions'],
      goalsFr: ['Parler du changement climatique, de l’énergie et de la consommation', 'Exprimer des exigences avec sollte / müsste / muss … werden', 'Utiliser verbes et noms à préposition fixe'] },

    // ───────────── 1 · Climate and demands ─────────────
    { kind: 'chapter', title: 'Klima und Forderungen', titleFr: 'Climat et exigences', blurb: 'What must happen?', blurbFr: 'Que doit-il se passer ?' },

    { kind: 'situation', title: 'Bürgerversammlung', titleFr: 'Réunion citoyenne',
      setting: 'The town hall debate.', settingFr: 'Le débat en mairie.',
      lines: [
        line('Moderatorin', 'Der Klimawandel betrifft uns alle. Wir wollen nachhaltig leben. Erneuerbare Energien werden wichtiger.', 'Climate change affects us all. We want to live sustainably. Renewable energies are becoming more important.', 'Le changement climatique nous concerne tous. Nous voulons vivre de façon durable. Les énergies renouvelables deviennent plus importantes.'),
        line('Bürger', 'Wir verbrauchen zu viele Ressourcen. Der Verbrauch an Energie steigt. Wir müssen weniger Müll produzieren. Der CO₂-Ausstoß muss in den nächsten Jahren deutlich sinken.', 'We use too many resources. Energy consumption is rising. We must produce less waste. CO₂ emissions must fall markedly in the coming years.', 'Nous consommons trop de ressources. La consommation d’énergie augmente. Nous devons produire moins de déchets. Les émissions de CO₂ doivent baisser nettement dans les prochaines années.'),
        line('Bürgerin', 'Wir sollten auf Plastik verzichten. Der Müll müsste getrennt werden. Energie muss gespart werden.', 'We should do without plastic. The waste ought to be separated. Energy must be saved.', 'Nous devrions renoncer au plastique. Les déchets devraient être triés. L’énergie doit être économisée.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l18-e11', prompt: 'What must fall in the coming years?', promptFr: 'Qu’est-ce qui doit baisser dans les prochaines années ?', options: ['CO₂ emissions', 'The price of energy', 'The number of citizens'], optionsFr: ['Les émissions de CO₂', 'Le prix de l’énergie', 'Le nombre de citoyens'], answer: 0, explain: 'The text says: “Der CO₂-Ausstoß muss … sinken.”', explainFr: 'Le texte dit : « Der CO₂-Ausstoß muss … sinken. »', hint: 'Look for “Ausstoß”.', hintFr: 'Cherche « Ausstoß ».' } },

    { kind: 'wordgroup', title: 'Klima und Energie', titleFr: 'Climat et énergie',
      items: [{ id: 'b2l18-klimawandel', german: 'der Klimawandel', english: 'climate change', french: 'le changement climatique', gender: 'der', syllables: ['der', 'KLI', 'ma', 'wan', 'del'], pronunciation: 'dair KLEE-mah-van-del', example: { de: 'Der Klimawandel betrifft uns alle.', en: 'Climate change affects us all.', fr: 'Le changement climatique nous concerne tous.' } }, { id: 'b2l18-nachhaltig', german: 'nachhaltig', english: 'sustainable', french: 'durable', gender: null, syllables: ['NACH', 'hal', 'tig'], pronunciation: 'NAKH-hal-tikh', example: { de: 'Wir wollen nachhaltig leben.', en: 'We want to live sustainably.', fr: 'Nous voulons vivre durablement.' } }, { id: 'b2l18-erneuerbar', german: 'erneuerbar', english: 'renewable', french: 'renouvelable', gender: null, syllables: ['er', 'NEU', 'er', 'bar'], pronunciation: 'er-NOY-er-bar', example: { de: 'Erneuerbare Energien werden wichtiger.', en: 'Renewable energies are becoming more important.', fr: 'Les énergies renouvelables gagnent en importance.' } }, { id: 'b2l18-ressourcen', german: 'die Ressourcen', english: 'the resources', french: 'les ressources', gender: 'die', syllables: ['die', 'res', 'SOUR', 'cen'], pronunciation: 'dee re-SOOR-sen', example: { de: 'Wir verbrauchen zu viele Ressourcen.', en: 'We use too many resources.', fr: 'Nous consommons trop de ressources.' } }, { id: 'b2l18-ausstoss', german: 'der Ausstoß', english: 'the emissions', french: 'les émissions', gender: 'der', syllables: ['der', 'AUS', 'stoß'], pronunciation: 'dair OWS-shtohs', example: { de: 'Der CO₂-Ausstoß muss sinken.', en: 'CO₂ emissions must fall.', fr: 'Les émissions de CO₂ doivent baisser.' } }] },

    { kind: 'wordgroup', title: 'Verbrauch und Müll', titleFr: 'Consommation et déchets',
      items: [{ id: 'b2l18-verbrauch', german: 'der Verbrauch', english: 'the consumption', french: 'la consommation', gender: 'der', syllables: ['der', 'ver', 'BRAUCH'], pronunciation: 'dair fer-BROWKH', example: { de: 'Der Verbrauch an Energie steigt.', en: 'Energy consumption is rising.', fr: 'La consommation d’énergie augmente.' } }, { id: 'b2l18-muell', german: 'der Müll', english: 'the waste', french: 'les déchets', gender: 'der', syllables: ['der', 'MÜLL'], pronunciation: 'dair muel', example: { de: 'Wir müssen weniger Müll produzieren.', en: 'We must produce less waste.', fr: 'Nous devons produire moins de déchets.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l18-e6', pairs: [{ de: 'nachhaltig', en: 'sustainable', fr: 'durable' }, { de: 'erneuerbar', en: 'renewable', fr: 'renouvelable' }, { de: 'der Ausstoß', en: 'emissions', fr: 'émissions' }, { de: 'der Müll', en: 'waste', fr: 'déchets' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l18-forderungen', title: 'Demands: muss, sollte, müsste', titleFr: 'Exigences : muss, sollte, müsste',
      lead: 'Strong demand: muss / müssen. Advice: sollte. Polite demand: müsste. For things: modal + Partizip II + werden (passive).',
      leadFr: 'Exigence forte : muss / müssen. Conseil : sollte. Exigence polie : müsste. Pour les choses : modal + participe II + werden (passif).',
      explanationMd: 'To express **what has to happen**, use **modal verbs**: **müssen** = strong demand: **Der CO₂-Ausstoß muss sinken.** **sollen / sollte** = advice: **Wir sollten auf Plastik verzichten.** **müsste** = polite, careful demand: **Man müsste mehr tun.** When **things** are the focus, use the **passive with a modal** — **modal + Partizip II + werden**: **Energie muss gespart werden. Der Müll müsste getrennt werden.** The **modal** is conjugated; **werden** stays at the end as an infinitive. **Intransitive verbs** (sinken, steigen) need no passive: **Der Ausstoß muss sinken.**',
      explanationMdFr: 'Pour exprimer **ce qui doit se passer**, utilise les **verbes modaux** : **müssen** = exigence forte : **Der CO₂-Ausstoß muss sinken.** **sollen / sollte** = conseil : **Wir sollten auf Plastik verzichten.** **müsste** = exigence polie et prudente : **Man müsste mehr tun.** Quand les **choses** sont au centre, utilise le **passif avec modal** — **modal + participe II + werden** : **Energie muss gespart werden. Der Müll müsste getrennt werden.** Le **modal** est conjugué ; **werden** reste à la fin à l’infinitif. Les **verbes intransitifs** (sinken, steigen) n’ont pas de passif : **Der Ausstoß muss sinken.**',
      tables: [{ title: 'Demands', titleFr: 'Exigences', headers: ['Strength', 'Form', 'Example'], headersFr: ['Force', 'Forme', 'Exemple'],
        rows: [['strong', 'muss / müssen', 'Der CO₂-Ausstoß muss sinken.'], ['advice', 'sollte', 'Wir sollten auf Plastik verzichten.'], ['careful', 'müsste', 'Man müsste mehr tun.'], ['passive', 'modal + Part. II + werden', 'Energie muss gespart werden.'], ['passive, careful', 'müsste + Part. II + werden', 'Der Müll müsste getrennt werden.']],
        rowsFr: [['fort', 'muss / müssen', 'Der CO₂-Ausstoß muss sinken.'], ['conseil', 'sollte', 'Wir sollten auf Plastik verzichten.'], ['prudent', 'müsste', 'Man müsste mehr tun.'], ['passif', 'modal + part. II + werden', 'Energie muss gespart werden.'], ['passif, prudent', 'müsste + part. II + werden', 'Der Müll müsste getrennt werden.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Energie', role: 'subject' }, { text: 'muss', role: 'verb' }, { text: 'gespart werden.', role: 'verb' }], en: 'Energy must be saved.', fr: 'L’énergie doit être économisée.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'sollten', role: 'verb' }, { text: 'auf Plastik', role: 'accusative' }, { text: 'verzichten.', role: 'verb' }], en: 'We should do without plastic.', fr: 'Nous devrions renoncer au plastique.' },
      ],
      contrast: {
        a: { label: 'Active', labelFr: 'Actif', note: 'who acts', noteFr: 'qui agit', examples: [g('Wir müssen Energie sparen.', 'We must save energy.', 'Nous devons économiser l’énergie.'), g('Man sollte den Müll trennen.', 'One should separate the waste.', 'On devrait trier les déchets.')] },
        b: { label: 'Passive with modal', labelFr: 'Passif avec modal', note: 'what must be done', noteFr: 'ce qui doit être fait', examples: [g('Energie muss gespart werden.', 'Energy must be saved.', 'L’énergie doit être économisée.'), g('Der Müll müsste getrennt werden.', 'The waste ought to be separated.', 'Les déchets devraient être triés.')] },
      },
      examples: [
        g('Der CO₂-Ausstoß muss in den nächsten Jahren sinken.', 'CO₂ emissions must fall in the coming years.', 'Les émissions de CO₂ doivent baisser dans les prochaines années.'),
        g('Wir sollten auf Plastik verzichten.', 'We should do without plastic.', 'Nous devrions renoncer au plastique.'),
        g('Wir müssen weniger Müll produzieren.', 'We must produce less waste.', 'Nous devons produire moins de déchets.'),
        g('Energie muss gespart werden.', 'Energy must be saved.', 'L’énergie doit être économisée.'),
        g('Der Müll müsste getrennt werden.', 'The waste ought to be separated.', 'Les déchets devraient être triés.'),
        g('Der Verbrauch an Energie steigt.', 'Energy consumption is rising.', 'La consommation d’énergie augmente.'),
      ],
      mistakes: [
        { wrong: 'Energie muss gespart sein.', right: 'Energie muss gespart werden.', why: 'The passive needs werden, not sein.', whyFr: 'Le passif demande werden, pas sein.' },
        { wrong: 'Energie muss werden gespart.', right: 'Energie muss gespart werden.', why: 'Participle first, then werden at the end.', whyFr: 'Le participe d’abord, puis werden à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l18-e7', prompt: 'Listen. What must fall?', promptFr: 'Écoute. Qu’est-ce qui doit baisser ?', audio: { ttsText: 'Der CO₂-Ausstoß muss in den nächsten Jahren deutlich sinken.' }, options: ['Emissions', 'Prices', 'Temperatures'], optionsFr: ['Les émissions', 'Les prix', 'Les températures'], answer: 0, hint: 'Ausstoß = emissions.', hintFr: 'Ausstoß = émissions.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l18-e8', tokens: ['Wir', 'Plastik', 'sollten', 'auf', 'verzichten'], answer: ['Wir', 'sollten', 'auf', 'Plastik', 'verzichten'], hint: 'modal in position 2, infinitive at the end.', hintFr: 'modal en 2e position, infinitif à la fin.' } },

    // ───────────── 2 · Verbs with prepositions ─────────────
    { kind: 'chapter', title: 'Verben mit Präpositionen', titleFr: 'Verbes à préposition', blurb: 'sich einsetzen für · beitragen zu · leiden unter.', blurbFr: 'sich einsetzen für · beitragen zu · leiden unter.' },

    { kind: 'situation', title: 'Wer setzt sich wofür ein?', titleFr: 'Qui se bat pour quoi ?',
      setting: 'Activists introduce themselves.', settingFr: 'Des militants se présentent.',
      lines: [
        line('Aktivistin', 'Sie setzt sich seit Jahren für den Umweltschutz ein. Jeder kann zum Klimaschutz beitragen. Viele Regionen leiden unter Dürre.', 'She has campaigned for environmental protection for years. Everyone can contribute to climate protection. Many regions suffer from drought.', 'Elle se bat depuis des années pour la protection de l’environnement. Chacun peut contribuer à la protection du climat. Beaucoup de régions souffrent de la sécheresse.'),
        line('Aktivist', 'Wir haben die Hoffnung auf eine bessere Zukunft. Viele Menschen haben Angst vor der Zukunft. Wir beschäftigen uns mit dem Thema. Es hängt vom Wetter ab.', 'We have the hope of a better future. Many people are afraid of the future. We are dealing with the topic. It depends on the weather.', 'Nous avons l’espoir d’un avenir meilleur. Beaucoup de gens ont peur de l’avenir. Nous nous occupons du sujet. Cela dépend du temps.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l18-e10', prompt: 'Listen. What does she campaign for?', promptFr: 'Écoute. Pour quoi s’engage-t-elle ?', audio: { ttsText: 'Sie setzt sich seit Jahren für den Umweltschutz ein.' }, options: ['Environmental protection', 'Higher salaries', 'More holidays'], optionsFr: ['La protection de l’environnement', 'De meilleurs salaires', 'Plus de congés'], answer: 0, hint: 'sich einsetzen für', hintFr: 'sich einsetzen für' } },

    { kind: 'wordgroup', title: 'Verben mit Präposition', titleFr: 'Verbes avec préposition',
      items: [{ id: 'b2l18-einsetzen', german: 'sich einsetzen für', english: 'to campaign for', french: 's’engager pour', gender: null, syllables: ['sich', 'EIN', 'set', 'zen', 'für'], pronunciation: 'zikh INE-zet-sen fuer', example: { de: 'Sie setzt sich für den Umweltschutz ein.', en: 'She campaigns for environmental protection.', fr: 'Elle s’engage pour la protection de l’environnement.' } }, { id: 'b2l18-beitragen', german: 'beitragen zu', english: 'to contribute to', french: 'contribuer à', gender: null, syllables: ['BEI', 'tra', 'gen', 'zu'], pronunciation: 'BY-trah-gen tsoo', example: { de: 'Jeder kann zum Klimaschutz beitragen.', en: 'Everyone can contribute to climate protection.', fr: 'Chacun peut contribuer à la protection du climat.' } }, { id: 'b2l18-leiden', german: 'leiden unter', english: 'to suffer from', french: 'souffrir de', gender: null, syllables: ['LEI', 'den', 'un', 'ter'], pronunciation: 'LY-den OON-ter', example: { de: 'Viele Regionen leiden unter Dürre.', en: 'Many regions suffer from drought.', fr: 'De nombreuses régions souffrent de la sécheresse.' } }, { id: 'b2l18-verzichten', german: 'verzichten auf', english: 'to do without', french: 'renoncer à', gender: null, syllables: ['ver', 'ZICH', 'ten', 'auf'], pronunciation: 'fer-TSIKH-ten owf', example: { de: 'Wir sollten auf Plastik verzichten.', en: 'We should do without plastic.', fr: 'Nous devrions renoncer au plastique.' } }, { id: 'b2l18-hoffnung', german: 'die Hoffnung auf', english: 'the hope for', french: 'l’espoir de', gender: 'die', syllables: ['die', 'HOFF', 'nung', 'auf'], pronunciation: 'dee HOF-noong owf', example: { de: 'Wir haben die Hoffnung auf eine bessere Zukunft.', en: 'We have hope for a better future.', fr: 'Nous avons l’espoir d’un avenir meilleur.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l18-e4', prompt: 'Which noun goes with "Hoffnung"?', promptFr: 'Quelle préposition va avec « Hoffnung » ?', options: ['auf', 'vor', 'zu'], answer: 0, explain: 'die Hoffnung auf', explainFr: 'die Hoffnung auf', hint: 'hoffen auf', hintFr: 'hoffen auf' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l18-e9', prompt: 'Ask about a thing: "___ setzt sie sich ein?"', promptFr: 'Question sur une chose : « ___ setzt sie sich ein ? »', options: ['Wofür', 'Für wen', 'Wohin'], answer: 0, explain: 'things → wo(r)- + preposition.', explainFr: 'choses → wo(r)- + préposition.', hint: 'wofür', hintFr: 'wofür' } },

    { kind: 'grammar', note: {
      id: 'b2l18-praeposition', title: 'Verbs and nouns with prepositions', titleFr: 'Verbes et noms avec prépositions',
      lead: 'Learn each verb with its preposition and case; things use da(r)- / wo(r)-; the matching noun often keeps the same preposition.',
      leadFr: 'Apprends chaque verbe avec sa préposition et son cas ; les choses utilisent da(r)- / wo(r)- ; le nom correspondant garde souvent la même préposition.',
      explanationMd: 'Learn each verb **with its preposition and case**: **sich einsetzen für** + Akk.: **sich für den Umweltschutz einsetzen**. **beitragen zu** + Dat.: **zum Klimaschutz beitragen**. **leiden unter** + Dat.: **unter der Hitze leiden**. **verzichten auf** + Akk.: **auf Plastik verzichten**. **sich beschäftigen mit** + Dat.: **sich mit dem Thema beschäftigen**. **abhängen von** + Dat.: **Es hängt vom Wetter ab.** For **things**, use **da(r)- / wo(r)-**: **Ich beschäftige mich damit. / Wofür setzt sie sich ein?** The same preposition appears in the matching **noun**: **die Hoffnung auf, das Interesse an, die Angst vor, der Beitrag zu.**',
      explanationMdFr: 'Apprends chaque verbe **avec sa préposition et son cas** : **sich einsetzen für** + Akk. : **sich für den Umweltschutz einsetzen**. **beitragen zu** + Dat. : **zum Klimaschutz beitragen**. **leiden unter** + Dat. : **unter der Hitze leiden**. **verzichten auf** + Akk. : **auf Plastik verzichten**. **sich beschäftigen mit** + Dat. : **sich mit dem Thema beschäftigen**. **abhängen von** + Dat. : **Es hängt vom Wetter ab.** Pour les **choses**, utilise **da(r)- / wo(r)-** : **Ich beschäftige mich damit. / Wofür setzt sie sich ein ?** La même préposition apparaît dans le **nom** correspondant : **die Hoffnung auf, das Interesse an, die Angst vor, der Beitrag zu.**',
      tables: [{ title: 'Verbs with prepositions', titleFr: 'Verbes à préposition', headers: ['Verb', 'Preposition + case', 'Example'], headersFr: ['Verbe', 'Préposition + cas', 'Exemple'],
        rows: [['sich einsetzen', 'für + Akk.', 'Sie setzt sich für den Umweltschutz ein.'], ['beitragen', 'zu + Dat.', 'Jeder kann zum Klimaschutz beitragen.'], ['leiden', 'unter + Dat.', 'Viele Regionen leiden unter Dürre.'], ['verzichten', 'auf + Akk.', 'Wir verzichten auf Plastik.'], ['abhängen', 'von + Dat.', 'Es hängt vom Wetter ab.'], ['die Hoffnung', 'auf + Akk.', 'die Hoffnung auf eine bessere Zukunft']],
        rowsFr: [['sich einsetzen', 'für + Akk.', 'Sie setzt sich für den Umweltschutz ein.'], ['beitragen', 'zu + Dat.', 'Jeder kann zum Klimaschutz beitragen.'], ['leiden', 'unter + Dat.', 'Viele Regionen leiden unter Dürre.'], ['verzichten', 'auf + Akk.', 'Wir verzichten auf Plastik.'], ['abhängen', 'von + Dat.', 'Es hängt vom Wetter ab.'], ['die Hoffnung', 'auf + Akk.', 'die Hoffnung auf eine bessere Zukunft']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'setzt', role: 'verb' }, { text: 'sich', role: 'accusative' }, { text: 'für den Umweltschutz', role: 'other' }, { text: 'ein.', role: 'verb' }], en: 'She campaigns for environmental protection.', fr: 'Elle se bat pour la protection de l’environnement.' },
        { parts: [{ text: 'Viele Regionen', role: 'subject' }, { text: 'leiden', role: 'verb' }, { text: 'unter Dürre.', role: 'other' }], en: 'Many regions suffer from drought.', fr: 'Beaucoup de régions souffrent de la sécheresse.' },
      ],
      contrast: {
        a: { label: 'People / nouns', labelFr: 'Personnes / noms', note: 'preposition + noun', noteFr: 'préposition + nom', examples: [g('Sie setzt sich für den Umweltschutz ein.', 'She campaigns for environmental protection.', 'Elle se bat pour la protection de l’environnement.'), g('Viele haben Angst vor der Zukunft.', 'Many are afraid of the future.', 'Beaucoup ont peur de l’avenir.')] },
        b: { label: 'Things: da(r)- / wo(r)-', labelFr: 'Choses : da(r)- / wo(r)-', note: 'damit, dafür, wofür', noteFr: 'damit, dafür, wofür', examples: [g('Ich beschäftige mich damit.', 'I deal with it.', 'Je m’en occupe.'), g('Wofür setzt sie sich ein?', 'What does she campaign for?', 'Pour quoi se bat-elle ?')] },
      },
      examples: [
        g('Sie setzt sich für den Klimaschutz ein.', 'She campaigns for climate protection.', 'Elle se bat pour la protection du climat.'),
        g('Viele Menschen haben Angst vor der Zukunft.', 'Many people are afraid of the future.', 'Beaucoup de gens ont peur de l’avenir.'),
        g('Jeder kann zum Klimaschutz beitragen.', 'Everyone can contribute to climate protection.', 'Chacun peut contribuer à la protection du climat.'),
        g('Viele Regionen leiden unter Dürre.', 'Many regions suffer from drought.', 'Beaucoup de régions souffrent de la sécheresse.'),
        g('Wir haben die Hoffnung auf eine bessere Zukunft.', 'We have the hope of a better future.', 'Nous avons l’espoir d’un avenir meilleur.'),
        g('Es hängt vom Wetter ab.', 'It depends on the weather.', 'Cela dépend du temps.'),
      ],
      mistakes: [
        { wrong: 'Wir verzichten für Plastik.', right: 'Wir verzichten auf Plastik.', why: 'verzichten takes auf + Akk.', whyFr: 'verzichten prend auf + Akk.' },
        { wrong: 'Sie leidet von der Hitze.', right: 'Sie leidet unter der Hitze.', why: 'leiden takes unter + Dat.', whyFr: 'leiden prend unter + Dat.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l18-e1', prompt: 'Sie setzt sich ___ den Umweltschutz ein. (for)', answer: 'für', hint: 'sich einsetzen für', hintFr: 'sich einsetzen für' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l18-e2', prompt: 'Jeder kann ___ Klimaschutz beitragen. (zum)', answer: 'zum', hint: 'beitragen zu + Dativ', hintFr: 'beitragen zu + datif' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l18-e3', prompt: 'Which preposition? "Wir verzichten ___ Plastik."', promptFr: 'Quelle préposition ? « Wir verzichten ___ Plastik. »', options: ['auf', 'an', 'von'], answer: 0, explain: 'verzichten auf + Akk.', explainFr: 'verzichten auf + acc.', hint: 'verzichten auf', hintFr: 'verzichten auf' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l18-e5', prompt: 'Viele Regionen leiden ___ Dürre. (from)', answer: 'unter', hint: 'leiden unter', hintFr: 'leiden unter' } },

    { kind: 'pronunciation', focus: 'Stress the stem, not the prefix, in separable verbs: "EINsetzen", "BEItragen", "VERzichten" (inseparable, stress the stem: verZICHten)', focusFr: 'Accentue le radical, pas le préfixe, des verbes séparables : « EINsetzen », « BEItragen » ; inséparable : verZICHten', items: [{ id: 'b2l18-nachhaltig-pron', german: 'nachhaltig', english: 'sustainable', french: 'durable', gender: null, syllables: ['NACH', 'hal', 'tig'], pronunciation: 'NAKH-hal-tikh', example: { de: 'Nachhaltig leben.', en: 'Live sustainably.', fr: 'Vivre durablement.' } }, { id: 'b2l18-verzichten-pron', german: 'verzichten', english: 'to do without', french: 'renoncer', gender: null, syllables: ['ver', 'ZICH', 'ten'], pronunciation: 'fer-TSIKH-ten', example: { de: 'Ich verzichte darauf.', en: 'I do without it.', fr: 'J’y renonce.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **talk about climate and sustainability**, voice **demands** (**muss, sollte, müsste … werden**) and use **verbs with fixed prepositions** (**sich einsetzen für, beitragen zu, leiden unter**). 🎉',
      summaryFr: 'Tu sais maintenant **parler de climat et de durabilité**, formuler des **exigences** (**muss, sollte, müsste … werden**) et utiliser des **verbes à préposition fixe** (**sich einsetzen für, beitragen zu, leiden unter**). 🎉',
      card: { title: 'Environment on one page', titleFr: 'L’environnement en une page', sections: [
        { heading: 'Demands', headingFr: 'Exigences', rows: [g('muss · sollte · müsste', 'strong · advice · careful', 'fort · conseil · prudent'), g('modal + Part. II + werden', 'Energie muss gespart werden.', 'Energie muss gespart werden.')] },
        { heading: 'Prepositions', headingFr: 'Prépositions', rows: [g('sich einsetzen für · beitragen zu', 'für + Akk. · zu + Dat.', 'für + Akk. · zu + Dat.'), g('leiden unter · verzichten auf', 'unter + Dat. · auf + Akk.', 'unter + Dat. · auf + Akk.')] },
      ] } },
  ],
};

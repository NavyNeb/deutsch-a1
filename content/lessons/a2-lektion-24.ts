import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion24: Lesson = {
  id: 'a2-l24', level: 'A2', module: 6, number: 23,
  title: { de: 'Erzählen im Präteritum', en: 'Telling a story in the past', fr: 'Raconter au prétérit' },
  theme: 'The Präteritum of regular and irregular verbs, and story connectors', themeFr: 'Le prétérit des verbes réguliers et irréguliers, et les connecteurs du récit',
  goals: ['Form the Präteritum of regular verbs (lebte, arbeitete)', 'Learn common irregular forms (kam, ging, sah, gab, fand)', 'Tell a story with zuerst, dann, danach, später, plötzlich', 'Write a short report about life abroad'], goalsFr: ['Former le prétérit des verbes réguliers (lebte, arbeitete)', 'Apprendre les formes irrégulières courantes (kam, ging, sah, gab, fand)', 'Raconter avec zuerst, dann, danach, später, plötzlich', 'Rédiger un court récit sur la vie à l’étranger'],
  canDo: g('Ich kann eine Geschichte im Präteritum erzählen: mit regelmäßigen und unregelmäßigen Verben und Wörtern wie zuerst, dann, plötzlich.', 'I can tell a story in the simple past: with regular and irregular verbs and words like zuerst, dann, plötzlich.', 'Je sais raconter une histoire au prétérit : avec des verbes réguliers et irréguliers et des mots comme zuerst, dann, plötzlich.'),
  steps: [
    { kind: 'intro', title: 'Eine Geschichte erzählen 📝', titleFr: 'Raconter une histoire 📝',
      scene: 'Amina’s story: from Yaoundé to a new life in Germany — told in the past.', sceneFr: 'L’histoire d’Amina : de Yaoundé à une nouvelle vie en Allemagne — racontée au passé.',
      goals: ['Form the Präteritum of regular verbs (lebte, arbeitete)', 'Learn common irregular forms (kam, ging, sah, gab, fand)', 'Tell a story with zuerst, dann, danach, später, plötzlich, schließlich'],
      goalsFr: ['Former le prétérit des verbes réguliers (lebte, arbeitete)', 'Apprendre les formes irrégulières courantes (kam, ging, sah, gab, fand)', 'Raconter une histoire avec zuerst, dann, danach, später, plötzlich, schließlich'] },

    // ───────────── 1 · Regular verbs ─────────────
    { kind: 'chapter', title: 'Regelmäßige Verben: -te', titleFr: 'Les verbes réguliers : -te', blurb: 'leben → lebte, arbeiten → arbeitete.', blurbFr: 'leben → lebte, arbeiten → arbeitete.' },

    { kind: 'situation', title: 'Aminas Geschichte', titleFr: 'L’histoire d’Amina',
      setting: 'Amina writes a short report about her life abroad.', settingFr: 'Amina écrit un court compte rendu sur sa vie à l’étranger.',
      lines: [
        line('Amina', 'Zuerst lebte ich in Yaoundé. Ich arbeitete als Krankenschwester.', 'First I lived in Yaoundé. I worked as a nurse.', 'D’abord j’ai vécu à Yaoundé. Je travaillais comme infirmière.'),
        line('Amina', 'Dann wohnten wir in einer kleinen Wohnung. Mein Mann wartete eine Stunde am Flughafen.', 'Then we lived in a small flat. My husband waited an hour at the airport.', 'Ensuite nous habitions dans un petit appartement. Mon mari a attendu une heure à l’aéroport.'),
        line('Amina', 'Später lebte er drei Jahre in Kanada. Schließlich bekam er ein Visum.', 'Later he lived in Canada for three years. In the end he got a visa.', 'Plus tard, il a vécu trois ans au Canada. Finalement, il a obtenu un visa.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l24-e13', prompt: 'What was Amina’s job in Yaoundé?', promptFr: 'Quel était le métier d’Amina à Yaoundé ?', options: ['Nurse', 'Teacher', 'Cook'], optionsFr: ['Infirmière', 'Enseignante', 'Cuisinière'], answer: 0, explain: 'She says: “Ich arbeitete als Krankenschwester.”', explainFr: 'Elle dit : « Ich arbeitete als Krankenschwester. »', hint: 'Look for “arbeitete”.', hintFr: 'Cherche « arbeitete ».' } },

    { kind: 'wordgroup', title: 'Regelmäßig', titleFr: 'Réguliers',
      items: [{ id: 'a2l24-leben', german: 'leben – lebte', english: 'to live – lived', french: 'vivre – vécut', gender: null, syllables: ['LE', 'ben'], pronunciation: 'LAY-ben', example: { de: 'Er lebte drei Jahre in Kanada.', en: 'He lived in Canada for three years.', fr: 'Il vécut trois ans au Canada.' } }, { id: 'a2l24-arbeiten', german: 'arbeiten – arbeitete', english: 'to work – worked', french: 'travailler – travailla', gender: null, syllables: ['AR', 'bei', 'ten'], pronunciation: 'AR-by-ten', example: { de: 'Sie arbeitete als Krankenschwester.', en: 'She worked as a nurse.', fr: 'Elle travaillait comme infirmière.' } }, { id: 'a2l24-sagen', german: 'sagen – sagte', english: 'to say – said', french: 'dire – dit', gender: null, syllables: ['SA', 'gen'], pronunciation: 'ZAH-gen', example: { de: 'Sie sagte: „Guten Morgen!“', en: 'She said, “Good morning!”', fr: 'Elle dit : « Bonjour ! »' } }] },

    { kind: 'grammar', note: {
      id: 'a2l24-regelmaessig', title: 'Regular verbs: stem + -te', titleFr: 'Verbes réguliers : radical + -te',
      lead: 'stem + -te + ending. ich and er/sie/es are identical. Stems in -t / -d: -ete.',
      leadFr: 'radical + -te + terminaison. ich et er/sie/es sont identiques. Radicaux en -t / -d : -ete.',
      explanationMd: 'Regular verbs add **-te** to the stem, then the personal ending: **leben → ich lebte, du lebtest, er lebte, wir lebten, ihr lebtet, sie lebten**. Shortcut: **ich** and **er / sie / es** are **identical** and have **no ending**. Stems ending in **-t / -d** (and many in **-n, -m**) add **-ete** so you can still pronounce them: **arbeiten → arbeitete, warten → wartete, öffnen → öffnete**.',
      explanationMdFr: 'Les verbes réguliers ajoutent **-te** au radical, puis la terminaison personnelle : **leben → ich lebte, du lebtest, er lebte, wir lebten, ihr lebtet, sie lebten**. Raccourci : **ich** et **er / sie / es** sont **identiques** et **sans terminaison**. Les radicaux en **-t / -d** (et beaucoup en **-n, -m**) ajoutent **-ete** pour rester prononçables : **arbeiten → arbeitete, warten → wartete, öffnen → öffnete**.',
      tables: [{ title: 'leben and arbeiten', titleFr: 'leben et arbeiten', headers: ['Person', 'leben', 'arbeiten'], headersFr: ['Personne', 'leben', 'arbeiten'],
        rows: [['ich', 'lebte', 'arbeitete'], ['du', 'lebtest', 'arbeitetest'], ['er / sie / es', 'lebte', 'arbeitete'], ['wir', 'lebten', 'arbeiteten'], ['ihr', 'lebtet', 'arbeitetet'], ['sie / Sie', 'lebten', 'arbeiteten']],
        rowsFr: [['ich', 'lebte', 'arbeitete'], ['du', 'lebtest', 'arbeitetest'], ['er / sie / es', 'lebte', 'arbeitete'], ['wir', 'lebten', 'arbeiteten'], ['ihr', 'lebtet', 'arbeitetet'], ['sie / Sie', 'lebten', 'arbeiteten']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'arbeitete', role: 'verb' }, { text: 'drei Jahre', role: 'time' }, { text: 'in Lyon.', role: 'place' }], en: 'I worked in Lyon for three years.', fr: 'J’ai travaillé trois ans à Lyon.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'wohnten', role: 'verb' }, { text: 'in einer kleinen Wohnung.', role: 'dative' }], en: 'We lived in a small flat.', fr: 'Nous habitions dans un petit appartement.' },
      ],
      contrast: {
        a: { label: 'Present', labelFr: 'Présent', note: 'er arbeitet', noteFr: 'er arbeitet', examples: [g('Er arbeitet in Wien.', 'He works in Vienna.', 'Il travaille à Vienne.'), g('Wir wohnen in Berlin.', 'We live in Berlin.', 'Nous habitons à Berlin.')] },
        b: { label: 'Präteritum', labelFr: 'Prétérit', note: 'er arbeitete', noteFr: 'er arbeitete', examples: [g('Er arbeitete in Wien.', 'He worked in Vienna.', 'Il travaillait à Vienne.'), g('Wir wohnten in Berlin.', 'We lived in Berlin.', 'Nous habitions à Berlin.')] },
      },
      examples: [
        g('Ich arbeitete drei Jahre in Lyon.', 'I worked in Lyon for three years.', 'J’ai travaillé trois ans à Lyon.'),
        g('Wir wohnten in einer kleinen Wohnung.', 'We lived in a small flat.', 'Nous habitions dans un petit appartement.'),
        g('Er wartete eine Stunde am Flughafen.', 'He waited an hour at the airport.', 'Il a attendu une heure à l’aéroport.'),
        g('Sie lebte drei Jahre in Kanada.', 'She lived in Canada for three years.', 'Elle a vécu trois ans au Canada.'),
        g('Die Lehrerin sagte: „Guten Morgen!“', 'The teacher said, “Good morning!”', 'La professeure dit : « Bonjour ! »'),
        g('Sie öffnete die Tür.', 'She opened the door.', 'Elle ouvrit la porte.'),
      ],
      mistakes: [
        { wrong: 'Er arbeitte in Wien.', right: 'Er arbeitete in Wien.', why: 'Stems in -t need -ete.', whyFr: 'Les radicaux en -t demandent -ete.' },
        { wrong: 'Ich lebtete in Yaoundé.', right: 'Ich lebte in Yaoundé.', why: 'Only one -te.', whyFr: 'Un seul -te.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l24-e2', prompt: 'Sie ___ zwei Jahre in Wien. (leben, Präteritum)', promptFr: 'Sie ___ zwei Jahre in Wien. (leben, prétérit)', answer: 'lebte', hint: 'Regular: stem leb- + -te', hintFr: 'Régulier : radical leb- + -te' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l24-e5', prompt: 'What is "ich" in the Präteritum of "arbeiten"?', promptFr: 'Quelle est la forme de « ich » au prétérit de « arbeiten » ?', options: ['arbeitte', 'arbeitete', 'arbeite'], answer: 1, explain: 'The stem ends in -t, so we add -ete: arbeitete.', explainFr: 'Le radical se termine par -t, on ajoute donc -ete : arbeitete.', hint: 'Stems in -t need an extra -e-.', hintFr: 'Les radicaux en -t prennent un -e- supplémentaire.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l24-e12', prompt: 'Er ___ kein Visum. (haben, Präteritum)', promptFr: 'Er ___ kein Visum. (haben, prétérit)', answer: 'hatte', hint: 'haben → hatte', hintFr: 'haben → hatte' } },

    // ───────────── 2 · Irregular ─────────────
    { kind: 'chapter', title: 'Unregelmäßige Verben: neuer Stamm', titleFr: 'Verbes irréguliers : nouveau radical', blurb: 'kam, ging, sah, gab, fand.', blurbFr: 'kam, ging, sah, gab, fand.' },

    { kind: 'situation', title: 'Plötzlich sah ich meinen Bruder', titleFr: 'Soudain, j’ai vu mon frère',
      setting: 'Amina continues her story.', settingFr: 'Amina poursuit son histoire.',
      lines: [
        line('Amina', 'Dann kam ich nach Deutschland. Am Bahnhof sah ich plötzlich meinen Bruder.', 'Then I came to Germany. At the station I suddenly saw my brother.', 'Puis je suis venue en Allemagne. À la gare, j’ai soudain vu mon frère.'),
        line('Amina', 'Danach gingen wir zusammen zum Markt. Wir fanden ein günstiges Hotel.', 'Afterwards we went to the market together. We found a cheap hotel.', 'Ensuite nous sommes allés ensemble au marché. Nous avons trouvé un hôtel bon marché.'),
        line('Amina', 'Die Lehrerin gab uns Hausaufgaben. Ich fand einen Job in Wien. Er hatte kein Visum, aber er blieb ruhig.', 'The teacher gave us homework. I found a job in Vienna. He had no visa, but he stayed calm.', 'La professeure nous donna des devoirs. J’ai trouvé un travail à Vienne. Il n’avait pas de visa, mais il restait calme.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Unregelmäßig', titleFr: 'Irréguliers',
      items: [{ id: 'a2l24-kommen', german: 'kommen – kam', english: 'to come – came', french: 'venir – vint', gender: null, syllables: ['KOM', 'men'], pronunciation: 'KOM-men', example: { de: 'Er kam um acht Uhr nach Hause.', en: 'He came home at eight o’clock.', fr: 'Il rentra à la maison à huit heures.' } }, { id: 'a2l24-geben', german: 'geben – gab', english: 'to give – gave', french: 'donner – donna', gender: null, syllables: ['GE', 'ben'], pronunciation: 'GAY-ben', example: { de: 'Die Lehrerin gab uns Hausaufgaben.', en: 'The teacher gave us homework.', fr: 'La professeure nous donna des devoirs.' } }, { id: 'a2l24-finden', german: 'finden – fand', english: 'to find – found', french: 'trouver – trouva', gender: null, syllables: ['FIN', 'den'], pronunciation: 'FIN-den', example: { de: 'Ich fand einen Job in Wien.', en: 'I found a job in Vienna.', fr: 'Je trouvai un travail à Vienne.' } }, { id: 'a2l24-sehen', german: 'sehen – sah', english: 'to see – saw', french: 'voir – vit', gender: null, syllables: ['SE', 'hen'], pronunciation: 'ZAY-hen', example: { de: 'Am Bahnhof sah ich meinen Bruder.', en: 'At the station I saw my brother.', fr: 'À la gare, je vis mon frère.' } }, { id: 'a2l24-gehen', german: 'gehen – ging', english: 'to go – went', french: 'aller – alla', gender: null, syllables: ['GE', 'hen'], pronunciation: 'GAY-hen', example: { de: 'Wir gingen zusammen zum Markt.', en: 'We went to the market together.', fr: 'Nous allâmes ensemble au marché.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l24-unregelmaessig', title: 'Irregular verbs: a new stem, no -te', titleFr: 'Verbes irréguliers : un nouveau radical, sans -te',
      lead: 'Strong verbs change the stem vowel and have no -te. ich and er/sie/es again have no ending.',
      leadFr: 'Les verbes forts changent la voyelle du radical et n’ont pas de -te. ich et er/sie/es sans terminaison.',
      explanationMd: 'Irregular (strong) verbs **change the stem vowel** and have **no -te**. Again **ich** and **er / sie / es** have **no ending**: **kommen → ich kam, du kamst, er kam, wir kamen, ihr kamt, sie kamen**. Learn the common ones as **pairs** (infinitive → Präteritum): **gehen → ging, sehen → sah, geben → gab, finden → fand, bleiben → blieb, fahren → fuhr, schreiben → schrieb, sprechen → sprach, nehmen → nahm, essen → aß, stehen → stand**. And **sein → war, haben → hatte**. Some verbs **mix both**: **denken → dachte, bringen → brachte, wissen → wusste**.',
      explanationMdFr: 'Les verbes irréguliers (forts) **changent la voyelle du radical** et n’ont **pas de -te**. Là encore, **ich** et **er / sie / es** sont **sans terminaison** : **kommen → ich kam, du kamst, er kam, wir kamen, ihr kamt, sie kamen**. Apprends les plus courants en **paires** (infinitif → prétérit) : **gehen → ging, sehen → sah, geben → gab, finden → fand, bleiben → blieb, fahren → fuhr, schreiben → schrieb, sprechen → sprach, nehmen → nahm, essen → aß, stehen → stand**. Et **sein → war, haben → hatte**. Certains verbes **mélangent les deux** : **denken → dachte, bringen → brachte, wissen → wusste**.',
      tables: [{ title: 'Common irregular verbs', titleFr: 'Verbes irréguliers courants', headers: ['Infinitive', 'Präteritum', 'Example'], headersFr: ['Infinitif', 'Prétérit', 'Exemple'],
        rows: [['kommen', 'kam', 'Er kam um acht Uhr nach Hause.'], ['gehen', 'ging', 'Wir gingen zum Markt.'], ['sehen', 'sah', 'Am Bahnhof sah ich meinen Bruder.'], ['geben', 'gab', 'Sie gab mir ein Geschenk.'], ['finden', 'fand', 'Wir fanden ein günstiges Hotel.'], ['bleiben', 'blieb', 'Er blieb ruhig.']],
        rowsFr: [['kommen', 'kam', 'Er kam um acht Uhr nach Hause.'], ['gehen', 'ging', 'Wir gingen zum Markt.'], ['sehen', 'sah', 'Am Bahnhof sah ich meinen Bruder.'], ['geben', 'gab', 'Sie gab mir ein Geschenk.'], ['finden', 'fand', 'Wir fanden ein günstiges Hotel.'], ['bleiben', 'blieb', 'Er blieb ruhig.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Plötzlich', role: 'time' }, { text: 'sah', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'meinen Bruder.', role: 'accusative' }], en: 'Suddenly I saw my brother.', fr: 'Soudain, j’ai vu mon frère.' },
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'gab', role: 'verb' }, { text: 'mir', role: 'dative' }, { text: 'ein Geschenk.', role: 'accusative' }], en: 'She gave me a present.', fr: 'Elle m’a donné un cadeau.' },
      ],
      contrast: {
        a: { label: 'Regular: -te', labelFr: 'Régulier : -te', note: 'lebte, arbeitete', noteFr: 'lebte, arbeitete', examples: [g('Er lebte drei Jahre in Kanada.', 'He lived in Canada for three years.', 'Il a vécu trois ans au Canada.'), g('Sie arbeitete als Krankenschwester.', 'She worked as a nurse.', 'Elle travaillait comme infirmière.')] },
        b: { label: 'Irregular: new stem', labelFr: 'Irrégulier : nouveau radical', note: 'kam, ging, sah', noteFr: 'kam, ging, sah', examples: [g('Er kam um acht Uhr nach Hause.', 'He came home at eight.', 'Il est rentré à huit heures.'), g('Wir gingen zusammen zum Markt.', 'We went to the market together.', 'Nous sommes allés ensemble au marché.')] },
      },
      examples: [
        g('Sie gab mir ein Geschenk.', 'She gave me a present.', 'Elle m’a donné un cadeau.'),
        g('Wir fanden ein günstiges Hotel.', 'We found a cheap hotel.', 'Nous avons trouvé un hôtel bon marché.'),
        g('Er hatte kein Visum, aber er blieb ruhig.', 'He had no visa, but he stayed calm.', 'Il n’avait pas de visa, mais il restait calme.'),
        g('Am Bahnhof sah ich meinen Bruder.', 'At the station I saw my brother.', 'À la gare, j’ai vu mon frère.'),
        g('Wir gingen zusammen zum Markt.', 'We went to the market together.', 'Nous sommes allés ensemble au marché.'),
        g('Er kam um acht Uhr nach Hause.', 'He came home at eight.', 'Il est rentré à huit heures.'),
      ],
      mistakes: [
        { wrong: 'Ich gehte nach Hause.', right: 'Ich ging nach Hause.', why: 'gehen is irregular: ging, no -te.', whyFr: 'gehen est irrégulier : ging, sans -te.' },
        { wrong: 'Er kamte um acht Uhr.', right: 'Er kam um acht Uhr.', why: 'kommen is irregular: kam.', whyFr: 'kommen est irrégulier : kam.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l24-e1', prompt: 'Er ___ 2015 nach Deutschland. (kommen, Präteritum)', promptFr: 'Er ___ 2015 nach Deutschland. (kommen, prétérit)', answer: 'kam', hint: 'Irregular: kommen → kam', hintFr: 'Irrégulier : kommen → kam' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l24-e3', prompt: 'Wir ___ sofort ein Hotel. (finden, Präteritum)', promptFr: 'Wir ___ sofort ein Hotel. (finden, prétérit)', answer: 'fanden', hint: 'finden → fand; wir → fanden', hintFr: 'finden → fand ; wir → fanden' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l24-e4', pairs: [{ de: 'ging', en: 'gehen (to go)', fr: 'gehen (aller)' }, { de: 'sah', en: 'sehen (to see)', fr: 'sehen (voir)' }, { de: 'gab', en: 'geben (to give)', fr: 'geben (donner)' }, { de: 'fand', en: 'finden (to find)', fr: 'finden (trouver)' }], hint: 'Match each Präteritum form to its infinitive.', hintFr: 'Associe chaque forme du prétérit à son infinitif.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l24-e8', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Ich gehte nach Hause.', 'Ich ging nach Hause.', 'Ich gang nach Hause.'], answer: 1, explain: 'gehen is irregular: ging.', explainFr: 'gehen est irrégulier : ging.', hint: 'gehen does not add -te.', hintFr: 'gehen n’ajoute pas -te.' } },

    // ───────────── 3 · Telling a story ─────────────
    { kind: 'chapter', title: 'Eine Geschichte erzählen', titleFr: 'Raconter une histoire', blurb: 'zuerst, dann, später, plötzlich.', blurbFr: 'zuerst, dann, später, plötzlich.' },

    { kind: 'situation', title: 'Zuerst … dann … schließlich', titleFr: 'D’abord … puis … enfin',
      setting: 'Amina reads her story aloud.', settingFr: 'Amina lit son histoire à voix haute.',
      lines: [
        line('Amina', 'Zuerst lebte Amina in Yaoundé. Dann kam sie nach Deutschland.', 'First Amina lived in Yaoundé. Then she came to Germany.', 'D’abord Amina vivait à Yaoundé. Puis elle est venue en Allemagne.'),
        line('Amina', 'Später arbeitete sie in einem Hotel. Schließlich fand sie eine Wohnung.', 'Later she worked in a hotel. In the end she found a flat.', 'Plus tard, elle a travaillé dans un hôtel. Finalement, elle a trouvé un appartement.'),
        line('Amina', 'Ich stand um sechs Uhr auf und fuhr zur Arbeit. Plötzlich klingelte das Telefon.', 'I got up at six and drove to work. Suddenly the phone rang.', 'Je me suis levée à six heures et suis allée au travail. Soudain, le téléphone a sonné.'),
      ],
      words: [{ id: 'a2l24-zuerst', german: 'zuerst', english: 'first (of all)', french: 'd’abord', gender: null, syllables: ['zu', 'ERST'], pronunciation: 'tsoo-AIRST', example: { de: 'Zuerst lebte ich in Douala.', en: 'First I lived in Douala.', fr: 'D’abord, je vivais à Douala.' } }, { id: 'a2l24-danach', german: 'danach', english: 'afterwards', french: 'ensuite / après', gender: null, syllables: ['da', 'NACH'], pronunciation: 'dah-NAHKH', example: { de: 'Danach gingen wir essen.', en: 'Afterwards we went to eat.', fr: 'Ensuite, nous sommes allés manger.' } }, { id: 'a2l24-spaeter', german: 'später', english: 'later', french: 'plus tard', gender: null, syllables: ['SPÄ', 'ter'], pronunciation: 'SHPAY-ter', example: { de: 'Später fand sie eine Wohnung.', en: 'Later she found a flat.', fr: 'Plus tard, elle trouva un appartement.' } }, { id: 'a2l24-ploetzlich', german: 'plötzlich', english: 'suddenly', french: 'soudain', gender: null, syllables: ['PLÖTZ', 'lich'], pronunciation: 'PLOETS-likh', example: { de: 'Plötzlich klingelte das Telefon.', en: 'Suddenly the phone rang.', fr: 'Soudain, le téléphone sonna.' } }, { id: 'a2l24-schliesslich', german: 'schließlich', english: 'finally / in the end', french: 'finalement', gender: null, syllables: ['SCHLIESS', 'lich'], pronunciation: 'SHLEESS-likh', example: { de: 'Schließlich bekam er ein Visum.', en: 'In the end he got a visa.', fr: 'Finalement, il obtint un visa.' } }, { id: 'a2l24-visum', german: 'das Visum', english: 'the visa', french: 'le visa', gender: 'das', syllables: ['VI', 'sum'], pronunciation: 'dahs VEE-zoom', example: { de: 'Sie brauchte ein Visum für Deutschland.', en: 'She needed a visa for Germany.', fr: 'Elle avait besoin d’un visa pour l’Allemagne.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l24-e14', prompt: 'What did Amina do later?', promptFr: 'Que fit Amina plus tard ?', options: ['She worked in a hotel', 'She studied', 'She stayed in Yaoundé'], optionsFr: ['Elle travailla dans un hôtel', 'Elle fit des études', 'Elle resta à Yaoundé'], answer: 0, explain: 'The text says: “Später arbeitete sie in einem Hotel.”', explainFr: 'Le texte dit : « Später arbeitete sie in einem Hotel. »', hint: 'Look for “Später”.', hintFr: 'Cherche « Später ».' } },

    { kind: 'grammar', note: {
      id: 'a2l24-erzaehlen', title: 'Telling a story: connectors and word order', titleFr: 'Raconter : connecteurs et ordre des mots',
      lead: 'Time words take position 1; the verb comes second, then the subject. Separable verbs: the prefix goes to the end.',
      leadFr: 'Les mots de temps prennent la position 1 ; le verbe vient en deuxième, puis le sujet. Verbes séparables : le préfixe va à la fin.',
      explanationMd: 'For **stories, reports and biographies** (especially in writing) German uses the **Präteritum**. Build the story with **time words**: **zuerst, dann, danach, später, plötzlich, schließlich**. They take **position 1**, so the **verb comes second, then the subject**: **Dann kam sie nach Deutschland. Plötzlich sah ich meinen Bruder.** **Separable verbs:** in the Präteritum the **prefix goes to the end**: **aufstehen → Ich stand um sechs Uhr auf. ankommen → Sie kam spät an.**',
      explanationMdFr: 'Pour les **récits, comptes rendus et biographies** (surtout à l’écrit), l’allemand utilise le **prétérit**. Construis l’histoire avec des **mots de temps** : **zuerst, dann, danach, später, plötzlich, schließlich**. Ils occupent la **position 1**, donc le **verbe vient en deuxième, puis le sujet** : **Dann kam sie nach Deutschland. Plötzlich sah ich meinen Bruder.** **Verbes séparables :** au prétérit, le **préfixe va à la fin** : **aufstehen → Ich stand um sechs Uhr auf. ankommen → Sie kam spät an.**',
      tables: [{ title: 'Story connectors', titleFr: 'Connecteurs de récit', headers: ['Word', 'Meaning', 'Example'], headersFr: ['Mot', 'Sens', 'Exemple'],
        rows: [['zuerst', 'first', 'Zuerst lebte ich in Douala.'], ['dann / danach', 'then / afterwards', 'Danach gingen wir essen.'], ['später', 'later', 'Später fand sie eine Wohnung.'], ['plötzlich', 'suddenly', 'Plötzlich klingelte das Telefon.'], ['schließlich', 'finally', 'Schließlich bekam er ein Visum.']],
        rowsFr: [['zuerst', 'd’abord', 'Zuerst lebte ich in Douala.'], ['dann / danach', 'puis / ensuite', 'Danach gingen wir essen.'], ['später', 'plus tard', 'Später fand sie eine Wohnung.'], ['plötzlich', 'soudain', 'Plötzlich klingelte das Telefon.'], ['schließlich', 'finalement', 'Schließlich bekam er ein Visum.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Dann', role: 'time' }, { text: 'kam', role: 'verb' }, { text: 'sie', role: 'subject' }, { text: 'nach Deutschland.', role: 'place' }], en: 'Then she came to Germany.', fr: 'Puis elle est venue en Allemagne.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'stand', role: 'verb' }, { text: 'um sechs Uhr', role: 'time' }, { text: 'auf.', role: 'verb' }], en: 'I got up at six.', fr: 'Je me suis levé à six heures.' },
      ],
      contrast: {
        a: { label: 'Writing: Präteritum', labelFr: 'Écrit : prétérit', note: 'stories, reports', noteFr: 'récits, comptes rendus', examples: [g('Zuerst lebte Amina in Yaoundé. Dann kam sie nach Deutschland.', 'First Amina lived in Yaoundé. Then she came to Germany.', 'D’abord Amina vivait à Yaoundé. Puis elle est venue en Allemagne.'), g('Später arbeitete sie in einem Hotel.', 'Later she worked in a hotel.', 'Plus tard, elle a travaillé dans un hôtel.')] },
        b: { label: 'Speech: Perfekt', labelFr: 'Oral : parfait', note: 'most verbs', noteFr: 'la plupart des verbes', examples: [g('Zuerst habe ich in Yaoundé gelebt. Dann bin ich nach Deutschland gekommen.', 'First I lived in Yaoundé. Then I came to Germany.', 'D’abord j’ai vécu à Yaoundé. Puis je suis venue en Allemagne.'), g('Später habe ich in einem Hotel gearbeitet.', 'Later I worked in a hotel.', 'Plus tard, j’ai travaillé dans un hôtel.')] },
      },
      examples: [
        g('Zuerst lebte Amina in Yaoundé. Dann kam sie nach Deutschland.', 'First Amina lived in Yaoundé. Then she came to Germany.', 'D’abord Amina vivait à Yaoundé. Puis elle est venue en Allemagne.'),
        g('Später arbeitete sie in einem Hotel. Schließlich fand sie eine Wohnung.', 'Later she worked in a hotel. In the end she found a flat.', 'Plus tard, elle a travaillé dans un hôtel. Finalement, elle a trouvé un appartement.'),
        g('Ich stand um sechs Uhr auf und fuhr zur Arbeit.', 'I got up at six and drove to work.', 'Je me suis levé à six heures et suis allé au travail.'),
        g('Plötzlich sah ich meinen Bruder.', 'Suddenly I saw my brother.', 'Soudain, j’ai vu mon frère.'),
        g('Plötzlich klingelte das Telefon.', 'Suddenly the phone rang.', 'Soudain, le téléphone a sonné.'),
        g('Sie kam spät an.', 'She arrived late.', 'Elle est arrivée tard.'),
      ],
      mistakes: [
        { wrong: 'Dann sie kam nach Deutschland.', right: 'Dann kam sie nach Deutschland.', why: 'After a time word the verb comes second.', whyFr: 'Après un mot de temps, le verbe vient en deuxième.' },
        { wrong: 'Ich aufstand um sechs Uhr.', right: 'Ich stand um sechs Uhr auf.', why: 'The prefix goes to the end.', whyFr: 'Le préfixe va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l24-e7', tokens: ['sah', 'Plötzlich', 'ich', 'meinen', 'Bruder'], answer: ['Plötzlich', 'sah', 'ich', 'meinen', 'Bruder'], hint: 'The connector is in position 1, so the verb comes second.', hintFr: 'Le connecteur est en position 1, donc le verbe vient en deuxième.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l24-e10', tokens: ['stand', 'Ich', 'auf', 'um', 'sechs', 'Uhr'], answer: ['Ich', 'stand', 'um', 'sechs', 'Uhr', 'auf'], hint: 'The separable prefix "auf" goes to the end.', hintFr: 'La particule séparable « auf » va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l24-e11', prompt: 'Which word means "suddenly"?', promptFr: 'Quel mot signifie « soudain » ?', options: ['danach', 'plötzlich', 'schließlich'], answer: 1, explain: 'plötzlich = suddenly; danach = afterwards; schließlich = finally.', explainFr: 'plötzlich = soudain ; danach = ensuite ; schließlich = finalement.', hint: 'Think of a surprise.', hintFr: 'Pense à une surprise.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l24-e6', prompt: 'Listen. What did Amina do later?', promptFr: 'Écoute. Que fit Amina plus tard ?', audio: { ttsText: 'Zuerst lebte Amina in Yaoundé. Dann kam sie nach Deutschland. Später arbeitete sie in einem Hotel.' }, options: ['She worked in a hotel', 'She lived in Yaoundé', 'She studied in Berlin'], optionsFr: ['Elle travailla dans un hôtel', 'Elle vivait à Yaoundé', 'Elle étudia à Berlin'], answer: 0, hint: 'Listen after "Später".', hintFr: 'Écoute après « Später ».' } },

    { kind: 'pronunciation', focus: 'Vowel length in irregular forms: long in kam, sah, gab — short in ging, fand', focusFr: 'Longueur des voyelles dans les formes irrégulières : longues dans kam, sah, gab — courtes dans ging, fand', items: [{ id: 'a2l24-kam-pron', german: 'kam', english: 'came', french: 'vint', gender: null, syllables: ['KAM'], pronunciation: 'kahm (long a)', example: { de: 'Er kam spät.', en: 'He came late.', fr: 'Il arriva tard.' } }, { id: 'a2l24-sah-pron', german: 'sah', english: 'saw', french: 'vit', gender: null, syllables: ['SAH'], pronunciation: 'zah (long a)', example: { de: 'Ich sah einen Film.', en: 'I saw a film.', fr: 'Je vis un film.' } }, { id: 'a2l24-ging-pron', german: 'ging', english: 'went', french: 'alla', gender: null, syllables: ['GING'], pronunciation: 'ging (short i)', example: { de: 'Sie ging nach Hause.', en: 'She went home.', fr: 'Elle rentra chez elle.' } }, { id: 'a2l24-fand-pron', german: 'fand', english: 'found', french: 'trouva', gender: null, syllables: ['FAND'], pronunciation: 'fahnt (short a, final d sounds like t)', example: { de: 'Wir fanden ein Café.', en: 'We found a café.', fr: 'Nous trouvâmes un café.' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l24-e9', prompt: 'Listen. What did the speaker do after getting up?', promptFr: 'Écoute. Que fit le locuteur après s’être levé ?', audio: { ttsText: 'Ich stand um sechs Uhr auf, dann fuhr ich zur Arbeit.' }, options: ['Drove to work', 'Ate breakfast', 'Went back to sleep'], optionsFr: ['Il alla au travail', 'Il prit son petit-déjeuner', 'Il se recoucha'], answer: 0, hint: 'Listen after "dann".', hintFr: 'Écoute après « dann ».' } },

    { kind: 'wrapup',
      summary: 'You can now tell a story in the **Präteritum**: regular verbs with **-te**, irregular verbs with a **new stem**, and link events with **zuerst, dann, später, plötzlich, schließlich**. 🎉',
      summaryFr: 'Tu sais maintenant raconter une histoire au **prétérit** : verbes réguliers en **-te**, verbes irréguliers à **nouveau radical**, et enchaîner les événements avec **zuerst, dann, später, plötzlich, schließlich**. 🎉',
      card: { title: 'The story past on one page', titleFr: 'Le passé du récit en une page', sections: [
        { heading: 'Regular', headingFr: 'Réguliers', rows: [g('lebte · arbeitete · wartete', 'stem + -te (-ete after t / d)', 'radical + -te (-ete après t / d)')] },
        { heading: 'Irregular', headingFr: 'Irréguliers', rows: [g('kam · ging · sah · gab · fand · blieb', 'new stem, no -te', 'nouveau radical, sans -te'), g('war · hatte · wusste', 'always learn by heart', 'toujours à apprendre par cœur')] },
        { heading: 'Story words', headingFr: 'Mots du récit', rows: [g('zuerst · dann · danach · später · plötzlich · schließlich', 'position 1 → verb 2nd', 'position 1 → verbe en 2e')] },
      ] } },
  ],
};

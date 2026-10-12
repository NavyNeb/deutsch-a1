import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const konjunktiv1 = defineSpecial({
  slug: 'konjunktiv-1',
  number: 35,
  group: 'verbs',
  levels: ['B2', 'B2'],
  related: ['b2-l7', 'b2-l8', 'b1-l9'],
  title: ['Konjunktiv I', 'Konjunktiv I and reported speech', 'Le Konjunktiv I et le discours rapporté'],
  theme: [
    'How to report what others say: Konjunktiv I forms, tenses, questions and requests, and the Konjunktiv II substitute',
    'Comment rapporter les paroles d’autrui : formes du Konjunktiv I, temps, questions et demandes, et remplacement par le Konjunktiv II',
  ],
  goals: [
    'Form the Konjunktiv I (stem + -e, and the irregular sein)',
    'Report statements, questions and requests',
    'Choose the right tense (past with habe/sei + Partizip II)',
    'Use Konjunktiv II or würde when K I looks like the indicative',
  ],
  goalsFr: [
    'Former le Konjunktiv I (radical + -e, et le verbe irrégulier sein)',
    'Rapporter affirmations, questions et demandes',
    'Choisir le bon temps (passé avec habe/sei + Partizip II)',
    'Employer le Konjunktiv II ou würde quand le K I ressemble à l’indicatif',
  ],
  steps: [
    intro(
      'Er sagt, er sei krank', 'Il dit qu’il est malade',
      'Newspapers report what politicians say without taking sides: “Der Minister sagte, er sei zuversichtlich.” The special verb form after “sagte” is the Konjunktiv I. It tells the reader: this is what he said, I am only reporting it.',
      'Les journaux rapportent les propos des politiciens sans prendre parti : « Der Minister sagte, er sei zuversichtlich. » La forme verbale particulière après « sagte » est le Konjunktiv I. Elle dit au lecteur : voici ce qu’il a dit, je ne fais que le rapporter.',
      [
        'Recognise the Konjunktiv I in news and reports',
        'Form it correctly in the third person',
        'Report questions and requests',
        'Know the alternatives in speech',
      ],
      [
        'Reconnaître le Konjunktiv I dans la presse et les comptes rendus',
        'Le former correctement à la 3e personne',
        'Rapporter questions et demandes',
        'Connaître les alternatives à l’oral',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Forming Konjunktiv I', 'Former le Konjunktiv I',
      'Stem + -e, and why sein is special.', 'Radical + -e, et pourquoi sein est particulier.',
    ),
    vocab('sp-konjunktiv-1-aussage', 'die Aussage', 'the statement', 'la déclaration', 'die', 'AUS-sa-ge', 'OWS-zah-ge', ['Seine Aussage ist umstritten.', 'His statement is controversial.', 'Sa déclaration est controversée.']),
    vocab('sp-konjunktiv-1-behaupten', 'behaupten', 'to claim', 'affirmer', null, 'be-HAUP-ten', 'be-HOWP-ten', ['Er behauptet, er sei unschuldig.', 'He claims he is innocent.', 'Il affirme être innocent.']),
    vocab('sp-konjunktiv-1-zeuge', 'der Zeuge', 'the witness', 'le témoin', 'der', 'ZEU-ge', 'TSOY-ge', ['Der Zeuge sagte, er habe nichts gesehen.', 'The witness said he had seen nothing.', 'Le témoin a dit n’avoir rien vu.']),
    grammar(
      'sp-k1-forms',
      ['The endings', 'Les terminaisons'],
      [
        'Take the **infinitive stem** and add the endings:\n\n| | **sein** (irregular) | **haben** | **kommen** |\n|---|---|---|---|\n| ich | sei | habe | komme |\n| du | seist | habest | kommest |\n| er/sie/es | **sei** | **habe** | **komme** |\n| wir | seien | haben | kommen |\n| ihr | seiet | habet | kommet |\n| sie/Sie | seien | haben | kommen |\n\nIn practice you mostly need the **third person singular**: *er sei, sie habe, es gebe, er komme, sie könne, er werde.* **sein** is the only verb that differs in every person.',
        'Prends le **radical de l’infinitif** et ajoute les terminaisons :\n\n| | **sein** (irrégulier) | **haben** | **kommen** |\n|---|---|---|---|\n| ich | sei | habe | komme |\n| du | seist | habest | kommest |\n| er/sie/es | **sei** | **habe** | **komme** |\n| wir | seien | haben | kommen |\n| ihr | seiet | habet | kommet |\n| sie/Sie | seien | haben | kommen |\n\nEn pratique, il te faut surtout la **3e personne du singulier** : *er sei, sie habe, es gebe, er komme, sie könne, er werde.* **sein** est le seul verbe qui diffère à toutes les personnes.',
      ],
      [
        ['Der Minister sagt, er sei zuversichtlich.', 'The minister says he is confident.', 'Le ministre dit qu’il est confiant.'],
        ['Die Zeitung schreibt, es gebe Probleme.', 'The paper writes that there are problems.', 'Le journal écrit qu’il y a des problèmes.'],
      ],
    ),
    fb(
      'sp-k1-e1',
      ['Er sagt, er ___ müde. (sein — K I)', 'Er sagt, er ___ müde. (sein — K I)'],
      'sei',
      ['er sei', 'er sei'],
    ),
    fb(
      'sp-k1-e2',
      ['Sie sagt, sie ___ Zeit. (haben — K I)', 'Sie sagt, sie ___ Zeit. (haben — K I)'],
      'habe',
      ['stem hab- + e', 'radical hab- + e'],
    ),
    mc(
      'sp-k1-e3',
      ['K I of "kommen" (er):', 'K I de « kommen » (er) :'],
      ['komme', 'kommt', 'käme'], ['komme', 'kommt', 'käme'], 0,
      ['stem + e', 'radical + e'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Statements, questions, requests', 'Affirmations, questions, demandes',
      'Three kinds of direct speech and how to report them.', 'Trois types de discours direct et comment les rapporter.',
    ),
    vocab('sp-konjunktiv-1-berichten', 'berichten', 'to report', 'rapporter', null, 'be-RICH-ten', 'be-RIKH-ten', ['Die Zeitung berichtet, es gebe Probleme.', 'The paper reports there are problems.', 'Le journal rapporte qu’il y a des problèmes.']),
    vocab('sp-konjunktiv-1-erkundigen', 'sich erkundigen', 'to enquire', 'se renseigner', null, 'zikh er-KUN-di-gen', 'zikh er-KOON-di-gen', ['Er erkundigte sich, ob der Zug fahre.', 'He enquired whether the train was running.', 'Il s’est renseigné pour savoir si le train circulait.']),
    grammar(
      'sp-k1-types',
      ['Reporting three kinds of speech', 'Rapporter trois types de paroles'],
      [
        '| Direct speech | Indirect speech |\n|---|---|\n| *Er sagt: „Ich bin müde.“* | *Er sagt, er **sei** müde.* (statement) |\n| *Sie fragt: „Kommst du?“* | *Sie fragt, **ob** ich **komme**.* (yes/no question) |\n| *Sie fragt: „Wann fährt der Zug?“* | *Sie fragt, **wann** der Zug **fahre**.* (W-question) |\n| *Er sagt: „Warte hier!“* | *Er sagt, ich **solle** dort warten.* (request) |\n\nPronouns and place/time words **shift**: ich → er/sie, hier → dort, heute → an dem Tag.',
        '| Discours direct | Discours indirect |\n|---|---|\n| *Er sagt : « Ich bin müde. »* | *Er sagt, er **sei** müde.* (affirmation) |\n| *Sie fragt : « Kommst du ? »* | *Sie fragt, **ob** ich **komme**.* (question fermée) |\n| *Sie fragt : « Wann fährt der Zug ? »* | *Sie fragt, **wann** der Zug **fahre**.* (question en W) |\n| *Er sagt : « Warte hier ! »* | *Er sagt, ich **solle** dort warten.* (demande) |\n\nPronoms et expressions de lieu/temps **changent** : ich → er/sie, hier → dort, heute → an dem Tag.',
      ],
      [
        ['Er fragte, ob sie schon gegessen habe.', 'He asked whether she had already eaten.', 'Il a demandé si elle avait déjà mangé.'],
        ['Sie sagte, ich solle morgen anrufen.', 'She said I should call tomorrow.', 'Elle a dit que je devais appeler demain.'],
      ],
    ),
    fb(
      'sp-k1-e4',
      ['Er fragt, ___ ich komme. (whether)', 'Er fragt, ___ ich komme. (si)'],
      'ob',
      ['yes/no question → ob', 'question fermée → ob'],
    ),
    wo(
      'sp-k1-e5',
      ['solle', 'Er sagt,', 'ich', 'warten'],
      ['Er sagt,', 'ich', 'solle', 'warten'],
      ['sollen (K I) for requests.', 'sollen (K I) pour les demandes.'],
    ),
    lc(
      'sp-k1-e6',
      ['Listen. What does the witness say?', 'Écoute. Que dit le témoin ?'],
      'Der Zeuge sagte, er habe nichts gesehen.',
      ['He saw nothing', 'He saw everything', 'He was not there'], ['Il n’a rien vu', 'Il a tout vu', 'Il n’était pas là'], 0,
      ['habe gesehen = reported "has seen".', 'habe gesehen = rapporté « a vu ».'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Tenses in indirect speech', 'Les temps du discours indirect',
      'Present, past and future — and what to do when forms are identical.', 'Présent, passé et futur — et que faire quand les formes sont identiques.',
    ),
    vocab('sp-konjunktiv-1-angeblich', 'angeblich', 'allegedly', 'soi-disant', null, 'AN-geb-lich', 'AHN-gayp-likh', ['Er hat angeblich nichts gewusst.', 'He allegedly knew nothing.', 'Il n’aurait soi-disant rien su.']),
    vocab('sp-konjunktiv-1-vorwurf', 'der Vorwurf', 'the accusation', 'le reproche', 'der', 'VOR-wurf', 'FOR-voorf', ['Er wies den Vorwurf zurück.', 'He rejected the accusation.', 'Il a rejeté le reproche.']),
    grammar(
      'sp-k1-tense',
      ['Tenses and the K II substitute', 'Les temps et le remplacement par le K II'],
      [
        '**Keep the time relation**, not the original tense:\n\n- **Present** → K I present: *„Ich bin müde.“* → *Er sagt, er **sei** müde.*\n- **Any past** → **habe / sei + Partizip II**: *„Ich war krank.“* → *Er sagt, er **sei** krank **gewesen**.*\n- **Future** → **werde + Infinitiv**: *„Ich komme morgen.“* → *Er sagt, er **werde** kommen.*\n\n**If K I = indicative** (ich, wir, sie forms): use **Konjunktiv II**: *Sie sagen, sie **hätten** keine Zeit.* If K II = Präteritum (regular verbs): use **würde + Infinitiv**: *Sie sagten, sie **würden** fragen.*',
        '**Garde le rapport de temps**, pas le temps d’origine :\n\n- **Présent** → K I présent : *« Ich bin müde. »* → *Er sagt, er **sei** müde.*\n- **Tout passé** → **habe / sei + Partizip II** : *« Ich war krank. »* → *Er sagt, er **sei** krank **gewesen**.*\n- **Futur** → **werde + infinitif** : *« Ich komme morgen. »* → *Er sagt, er **werde** kommen.*\n\n**Si K I = indicatif** (formes ich, wir, sie) : utilise le **Konjunktiv II** : *Sie sagen, sie **hätten** keine Zeit.* Si K II = Präteritum (verbes réguliers) : utilise **würde + infinitif** : *Sie sagten, sie **würden** fragen.*',
      ],
      [
        ['Sie sagt, sie sei gestern in Berlin gewesen.', 'She says she was in Berlin yesterday.', 'Elle dit qu’elle était hier à Berlin.'],
        ['Die Politiker sagen, sie hätten keine Wahl.', 'The politicians say they had no choice.', 'Les politiciens disent qu’ils n’avaient pas le choix.'],
      ],
    ),
    mc(
      'sp-k1-e7',
      ['"Sie sagen, sie ___ keine Zeit." Which form?', '« Sie sagen, sie ___ keine Zeit. » Quelle forme ?'],
      ['haben', 'habe', 'hätten'], ['haben', 'habe', 'hätten'], 2,
      ['K I = indicative here → use K II.', 'K I = indicatif ici → utilise le K II.'],
    ),
    fb(
      'sp-k1-e8',
      ['„Ich war krank.“ → Er sagt, er ___ krank gewesen. (sein — K I)', '« Ich war krank. » → Er sagt, er ___ krank gewesen. (sein — K I)'],
      'sei',
      ['past → sei + Partizip II', 'passé → sei + Partizip II'],
    ),
    mc(
      'sp-k1-e9',
      ['„Ich komme morgen.“ → Er sagt, er …', '« Ich komme morgen. » → Er sagt, er …'],
      ['werde kommen', 'sei gekommen', 'käme gekommen'], ['werde kommen', 'sei gekommen', 'käme gekommen'], 0,
      ['Future → werde + Infinitiv.', 'Futur → werde + infinitif.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Using it in real texts', 'L’utiliser dans de vrais textes',
      'News, exams and everyday speech.', 'Presse, examens et langue de tous les jours.',
    ),
    vocab('sp-konjunktiv-1-sprecher', 'der Sprecher', 'the spokesperson', 'le porte-parole', 'der', 'SPRE-cher', 'SHPRE-kher', ['Der Sprecher sagte, man prüfe den Fall.', 'The spokesperson said the case is being examined.', 'Le porte-parole a dit que le cas était examiné.']),
    grammar(
      'sp-k1-use',
      ['Where you meet it', 'Où le rencontrer'],
      [
        '**Written German** (news, reports, exams): the standard form for neutral reporting. **Spoken German**: people often use the **indicative** or **Konjunktiv II**; K I sounds formal.\n\n**Reporting verbs:** *sagen, erklären, behaupten, betonen, berichten, mitteilen, bestreiten, ankündigen, versichern, einräumen.*\n\n**Useful phrases:** *Laut + Dativ/Genitiv* (*Laut Polizei …*), *Nach Angaben von …*, *Dem Bericht zufolge …* — these need **no K I** but often appear with it.\n\n**Tip:** if the sentence has *dass*, the K I is optional: *Er sagt, dass er müde **sei*** or *… dass er müde **ist***.',
        '**Allemand écrit** (presse, rapports, examens) : la forme standard du compte rendu neutre. **Allemand parlé** : on emploie souvent l’**indicatif** ou le **Konjunktiv II** ; le K I sonne formel.\n\n**Verbes de compte rendu :** *sagen, erklären, behaupten, betonen, berichten, mitteilen, bestreiten, ankündigen, versichern, einräumen.*\n\n**Formules utiles :** *Laut + datif/génitif* (*Laut Polizei …*), *Nach Angaben von …*, *Dem Bericht zufolge …* — elles n’exigent **pas de K I** mais l’accompagnent souvent.\n\n**Astuce :** avec *dass*, le K I est facultatif : *Er sagt, dass er müde **sei*** ou *… dass er müde **ist***.',
      ],
      [
        ['Laut Polizei gebe es keine Verletzten.', 'According to the police there are no injuries.', 'Selon la police, il n’y a pas de blessés.'],
        ['Er bestreitet, dass er dort gewesen sei.', 'He denies having been there.', 'Il conteste avoir été là.'],
      ],
    ),
    mc(
      'sp-k1-e10',
      ['Where is Konjunktiv I most common?', 'Où le Konjunktiv I est-il le plus courant ?'],
      ['News reports', 'Chats', 'Songs'], ['Articles de presse', 'Chats', 'Chansons'], 0,
      ['Neutral reporting in writing.', 'Compte rendu neutre à l’écrit.'],
    ),

    wrapup(
      '**Form:** stem + -e for er/sie/es (*er komme, sie habe, es gebe*); **sein** is irregular (*er sei*).\n\n**Types:** statement (*dass* / main clause), yes/no question (*ob*), W-question, request (*solle*).\n\n**Tenses:** present → K I present; past → *habe/sei + Partizip II*; future → *werde + Infinitiv*.\n\n**Substitute:** if K I = indicative, use **K II** (*hätten, kämen*); if K II = Präteritum, use **würde + Infinitiv**.',
      '**Forme :** radical + -e pour er/sie/es (*er komme, sie habe, es gebe*) ; **sein** est irrégulier (*er sei*).\n\n**Types :** affirmation (*dass* / principale), question fermée (*ob*), question en W, demande (*solle*).\n\n**Temps :** présent → K I présent ; passé → *habe/sei + Partizip II* ; futur → *werde + infinitif*.\n\n**Remplacement :** si K I = indicatif, emploie le **K II** (*hätten, kämen*) ; si K II = Präteritum, emploie **würde + infinitif**.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Konjunktiv I', 'Quiz final : Konjunktiv I'),
    match(
      'sp-k1-q1',
      [
        ['er sei', 'he is (reported)', 'il serait (rapporté)'],
        ['sie habe', 'she has (reported)', 'elle aurait (rapporté)'],
        ['es gebe', 'there is (reported)', 'il y aurait (rapporté)'],
        ['er komme', 'he comes (reported)', 'il viendrait (rapporté)'],
      ],
      ['Match each K I form with its meaning.', 'Associe chaque forme du K I à sa signification.'],
    ),
    fb(
      'sp-k1-q2',
      ['Die Ministerin sagt, sie ___ zuversichtlich. (sein — K I)', 'Die Ministerin sagt, sie ___ zuversichtlich. (sein — K I)'],
      'sei',
      ['sein → sei', 'sein → sei'],
    ),
    fb(
      'sp-k1-q3',
      ['Er sagt, er ___ keine Zeit. (haben — K I)', 'Er sagt, er ___ keine Zeit. (haben — K I)'],
      'habe',
      ['hab- + e', 'hab- + e'],
    ),
    mc(
      'sp-k1-q4',
      ['Konjunktiv I of "geben" (es):', 'Konjunktiv I de « geben » (es) :'],
      ['gebe', 'gibt', 'gäbe'], ['gebe', 'gibt', 'gäbe'], 0,
      ['stem geb- + e', 'radical geb- + e'],
    ),
    mc(
      'sp-k1-q5',
      ['"Sie sagen, sie ___ keine Wahl." Choose the correct form.', '« Sie sagen, sie ___ keine Wahl. » Choisis la forme correcte.'],
      ['hätten', 'haben', 'habe'], ['hätten', 'haben', 'habe'], 0,
      ['K I = indicative → K II.', 'K I = indicatif → K II.'],
    ),
    wo(
      'sp-k1-q6',
      ['es', 'gebe', 'Probleme', 'Die Zeitung berichtet,'],
      ['Die Zeitung berichtet,', 'es', 'gebe', 'Probleme'],
      ['Reporting verb, comma, K I clause.', 'Verbe de compte rendu, virgule, proposition au K I.'],
    ),
    fb(
      'sp-k1-q7',
      ['Er fragte, ___ der Zug fahre. (whether)', 'Er fragte, ___ der Zug fahre. (si)'],
      'ob',
      ['yes/no → ob', 'question fermée → ob'],
    ),
    fb(
      'sp-k1-q8',
      ['Sie sagt, ich ___ morgen anrufen. (sollen — K I)', 'Sie sagt, ich ___ morgen anrufen. (sollen — K I)'],
      'solle',
      ['ich solle', 'ich solle'],
    ),
    mc(
      'sp-k1-q9',
      ['„Ich war krank.“ → Er sagt, er …', '« Ich war krank. » → Er sagt, er …'],
      ['sei krank gewesen', 'war krank', 'ist krank'], ['sei krank gewesen', 'war krank', 'ist krank'], 0,
      ['Past → sei/habe + Partizip II.', 'Passé → sei/habe + Partizip II.'],
    ),
    lc(
      'sp-k1-q10',
      ['Listen. What does the spokesperson say?', 'Écoute. Que dit le porte-parole ?'],
      'Der Sprecher sagte, man prüfe den Fall.',
      ['The case is being examined', 'The case is closed', 'There is no case'], ['Le cas est examiné', 'Le cas est clos', 'Il n’y a pas de cas'], 0,
      ['prüfe = reported "examines".', 'prüfe = rapporté « examine ».'],
    ),
    lc(
      'sp-k1-q11',
      ['Listen. What does he deny?', 'Écoute. Que conteste-t-il ?'],
      'Er bestreitet, dass er dort gewesen sei.',
      ['Having been there', 'Owning a car', 'Knowing the victim'], ['Avoir été là', 'Posséder une voiture', 'Connaître la victime'], 0,
      ['bestreiten = to deny.', 'bestreiten = contester.'],
    ),
    mc(
      'sp-k1-q12',
      ['Which verb form is irregular in K I?', 'Quelle forme verbale est irrégulière au K I ?'],
      ['sein', 'kommen', 'gehen'], ['sein', 'kommen', 'gehen'], 0,
      ['sein: ich sei, du seist, er sei …', 'sein : ich sei, du seist, er sei …'],
    ),
    mc(
      'sp-k1-q13',
      ['Which sentence reports a question correctly?', 'Quelle phrase rapporte correctement une question ?'],
      ['Er fragte, ob sie schon gegessen habe.', 'Er fragte, hat sie schon gegessen.', 'Er fragte, ob hat sie gegessen.'], ['Er fragte, ob sie schon gegessen habe.', 'Er fragte, hat sie schon gegessen.', 'Er fragte, ob hat sie gegessen.'], 0,
      ['ob + verb at the end.', 'ob + verbe à la fin.'],
    ),
  ],
});

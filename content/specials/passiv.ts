import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const passiv = defineSpecial({
  slug: 'passiv',
  number: 6,
  group: 'verbs',
  levels: ['B1', 'B2'],
  related: ['b1-l5', 'b1-l23', 'b1-l24'],
  title: ['Das Passiv', 'The passive voice', 'Le passif'],
  theme: [
    'When the action matters more than the doer: werden + Partizip II in every tense, with modals, and its everyday alternatives',
    'Quand l’action compte plus que celui qui la fait : werden + participe II à tous les temps, avec les modaux, et ses alternatives courantes',
  ],
  goals: [
    'Understand when German uses the passive',
    'Form the Vorgangspassiv with werden + Partizip II',
    'Use von and durch for the agent',
    'Form the passive in Präteritum and Perfekt and with modals',
    'Tell Zustandspassiv (sein + Partizip II) from Vorgangspassiv',
    'Use alternatives: man, sich lassen, -bar',
  ],
  goalsFr: [
    'Comprendre quand l’allemand emploie le passif',
    'Former le Vorgangspassiv avec werden + participe II',
    'Utiliser von et durch pour l’agent',
    'Former le passif au Präteritum, au Perfekt et avec les modaux',
    'Distinguer le Zustandspassiv (sein + participe II) du Vorgangspassiv',
    'Utiliser les alternatives : man, sich lassen, -bar',
  ],
  steps: [
    intro(
      'Hier wird Deutsch gesprochen', 'Ici on parle allemand',
      'Recipes, instructions, news and notices are full of the passive: "Der Teig wird gerührt", "Das Museum wird renoviert". It puts the action in the spotlight and often leaves the doer out. You do not need it to speak every day, but you do need it to read and write well at B1.',
      'Les recettes, notices, actualités et affiches regorgent de passif : « Der Teig wird gerührt », « Das Museum wird renoviert ». Il met l’action en lumière et laisse souvent de côté celui qui agit. Tu n’en as pas besoin pour parler au quotidien, mais il est indispensable pour bien lire et écrire au niveau B1.',
      [
        'Form the passive with werden + Partizip II',
        'Name the agent with von / durch',
        'Use the passive in past tenses and with modals',
        'Know Zustandspassiv and alternatives',
      ],
      [
        'Former le passif avec werden + participe II',
        'Nommer l’agent avec von / durch',
        'Employer le passif aux temps du passé et avec les modaux',
        'Connaître le Zustandspassiv et les alternatives',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Active becomes passive', 'De l’actif au passif',
      'Swap the focus: the object becomes the subject.', 'Inverser l’accent : le COD devient sujet.',
    ),
    grammar(
      'sp-pv-idea',
      ['The idea of the passive', 'L’idée du passif'],
      [
        'In an **active** sentence the doer is the subject: **Der Bäcker** backt das Brot. In a **passive** sentence the thing affected becomes the subject: **Das Brot** wird (vom Bäcker) gebacken.\n\n- The **accusative object** of the active sentence → **nominative subject** of the passive.\n- The old subject can be added with **von + dative** (or dropped).\n- Only **verbs with an accusative object** can become a normal passive.\n\nUse the passive when the doer is **unknown, unimportant or obvious**, in **instructions**, **news** and **science**.',
        'Dans une phrase **active**, celui qui agit est le sujet : **Der Bäcker** backt das Brot. Dans une phrase **passive**, ce qui subit l’action devient le sujet : **Das Brot** wird (vom Bäcker) gebacken.\n\n- Le **COD à l’accusatif** de la phrase active → **sujet au nominatif** du passif.\n- L’ancien sujet peut être ajouté avec **von + datif** (ou omis).\n- Seuls les **verbes avec un COD à l’accusatif** peuvent former un passif normal.\n\nOn emploie le passif quand l’agent est **inconnu, sans importance ou évident**, dans les **instructions**, les **actualités** et les textes **scientifiques**.',
      ],
      [
        ['Der Bäcker backt das Brot.', 'The baker bakes the bread.', 'Le boulanger cuit le pain.'],
        ['Das Brot wird gebacken.', 'The bread is being baked.', 'Le pain est cuit.'],
        ['Das Brot wird vom Bäcker gebacken.', 'The bread is baked by the baker.', 'Le pain est cuit par le boulanger.'],
      ],
    ),
    grammar(
      'sp-pv-form',
      ['Form: werden + Partizip II', 'Forme : werden + participe II'],
      [
        'The **Vorgangspassiv** (process passive) is built with **werden** (conjugated, position 2) + **Partizip II** (at the end):\n\n- ich werde gefragt · du wirst gefragt · er wird gefragt\n- wir werden gefragt · ihr werdet gefragt · sie werden gefragt\n\nWatch the **subject** to choose the form: **Das Haus wird** gebaut. **Die Häuser werden** gebaut. The participle never changes.\n\nWarning: **werden** + infinitive means the **future** (Ich werde kommen), **werden** + participle means the **passive** (Ich werde gefragt).',
        'Le **Vorgangspassiv** (passif d’action) se construit avec **werden** (conjugué, 2e position) + **participe II** (à la fin) :\n\n- ich werde gefragt · du wirst gefragt · er wird gefragt\n- wir werden gefragt · ihr werdet gefragt · sie werden gefragt\n\nRegarde le **sujet** pour choisir la forme : **Das Haus wird** gebaut. **Die Häuser werden** gebaut. Le participe ne change jamais.\n\nAttention : **werden** + infinitif = **futur** (Ich werde kommen), **werden** + participe = **passif** (Ich werde gefragt).',
      ],
      [
        ['ich werde gefragt', 'I am asked', 'on me demande'],
        ['du wirst gefragt', 'you are asked', 'on te demande'],
        ['er / sie / es wird gefragt', 'he / she / it is asked', 'on lui demande'],
        ['wir werden gefragt', 'we are asked', 'on nous demande'],
        ['ihr werdet gefragt', 'you (pl.) are asked', 'on vous demande'],
        ['sie / Sie werden gefragt', 'they / you are asked', 'on leur / vous demande'],
      ],
      'conjugation-table',
    ),
    vocab('sp-passiv-bauen', 'bauen', 'to build', 'construire', null, 'BAU-en', 'BOW-en', ['Das Haus wird gebaut.', 'The house is being built.', 'La maison est en construction.']),
    vocab('sp-passiv-der-vorgang', 'der Vorgang', 'process, action', 'le processus, l’action', 'der', 'FOR-gang', 'FOR-gahng', ['Das Vorgangspassiv beschreibt einen Vorgang.', 'The Vorgangspassiv describes a process.', 'Le Vorgangspassiv décrit un processus.']),
    vocab('sp-passiv-die-anleitung', 'die Anleitung', 'instructions', 'la notice', 'die', 'AN-lei-tung', 'AHN-ly-toong', ['In der Anleitung wird alles erklärt.', 'Everything is explained in the instructions.', 'Tout est expliqué dans la notice.']),
    mc(
      'sp-pv-e1',
      ['Which sentence is passive?', 'Quelle phrase est au passif ?'],
      ['Ich werde morgen kommen.', 'Das Auto wird repariert.', 'Er wird müde.'], ['Ich werde morgen kommen.', 'Das Auto wird repariert.', 'Er wird müde.'], 1,
      ['werden + Partizip II = passive. The others are future and "to become".', 'werden + participe II = passif. Les autres sont le futur et « devenir ».'],
    ),
    fb(
      'sp-pv-e2',
      ['Das Brot ___ gebacken. (werden — er/sie/es)', 'Das Brot ___ gebacken. (werden — er/sie/es)'],
      'wird',
      ['Singular subject → wird.', 'Sujet singulier → wird.'],
    ),
    fb(
      'sp-pv-e3',
      ['Die Zimmer ___ geputzt. (werden — Plural)', 'Die Zimmer ___ geputzt. (werden — pluriel)'],
      'werden',
      ['Plural subject → werden.', 'Sujet pluriel → werden.'],
    ),
    wo('sp-pv-e4', ['gebaut', 'Das', 'wird', 'Haus'], ['Das', 'Haus', 'wird', 'gebaut'], ['werden in position 2, participle at the end.', 'werden en 2e position, participe à la fin.']),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'The agent and the transformation', 'L’agent et la transformation',
      'von, durch, and what happens to each part of the sentence.', 'von, durch, et ce que devient chaque élément de la phrase.',
    ),
    grammar(
      'sp-pv-agent',
      ['von or durch?', 'von ou durch ?'],
      [
        'If you keep the doer, use:\n\n- **von + dative** for a **person or actor**: Das Haus wird **von einem Architekten** geplant.\n- **durch + accusative** for a **means or cause**, often an event or thing: Das Dorf wurde **durch ein Erdbeben** zerstört.\n\nMost of the time the agent is simply **left out**: Hier wird nicht geraucht. Wann wird das Paket geliefert?',
        'Si tu gardes l’agent, utilise :\n\n- **von + datif** pour une **personne ou un acteur** : Das Haus wird **von einem Architekten** geplant.\n- **durch + accusatif** pour un **moyen ou une cause**, souvent un événement ou une chose : Das Dorf wurde **durch ein Erdbeben** zerstört.\n\nLa plupart du temps, l’agent est simplement **omis** : Hier wird nicht geraucht. Wann wird das Paket geliefert ?',
      ],
      [
        ['Das Haus wird von einem Architekten geplant.', 'The house is planned by an architect.', 'La maison est conçue par un architecte.'],
        ['Das Dorf wurde durch ein Erdbeben zerstört.', 'The village was destroyed by an earthquake.', 'Le village a été détruit par un tremblement de terre.'],
        ['Hier wird nicht geraucht.', 'No smoking here.', 'Il est interdit de fumer ici.'],
      ],
    ),
    grammar(
      'sp-pv-transform',
      ['Active → passive step by step', 'De l’actif au passif pas à pas'],
      [
        'To transform an active sentence:\n\n1. The **accusative object** becomes the **subject** (nominative).\n2. The verb becomes **werden** (same tense as the active verb) + **Partizip II**.\n3. The old **subject** becomes **von + dative** (or disappears).\n\n- Active: Die Lehrerin **erklärt** **die Regel**.\n- Passive: **Die Regel** **wird** (von der Lehrerin) **erklärt**.\n\nVerbs with only a **dative object** (helfen, danken, gratulieren) cannot make a regular passive. The dative stays and the subject is an empty **es** or nothing: **Mir wird** geholfen. (I am being helped.)',
        'Pour transformer une phrase active :\n\n1. Le **COD à l’accusatif** devient le **sujet** (nominatif).\n2. Le verbe devient **werden** (au même temps que le verbe actif) + **participe II**.\n3. L’ancien **sujet** devient **von + datif** (ou disparaît).\n\n- Actif : Die Lehrerin **erklärt** **die Regel**.\n- Passif : **Die Regel** **wird** (von der Lehrerin) **erklärt**.\n\nLes verbes avec seulement un **objet au datif** (helfen, danken, gratulieren) ne forment pas de passif normal. Le datif reste et le sujet est un **es** vide ou rien : **Mir wird** geholfen. (On m’aide.)',
      ],
      [
        ['Die Lehrerin erklärt die Regel.', 'The teacher explains the rule.', 'L’enseignante explique la règle.'],
        ['Die Regel wird von der Lehrerin erklärt.', 'The rule is explained by the teacher.', 'La règle est expliquée par l’enseignante.'],
        ['Mir wird geholfen.', 'I am being helped.', 'On m’aide.'],
      ],
    ),
    vocab('sp-passiv-der-architekt', 'der Architekt', 'architect', 'l’architecte', 'der', 'ar-chi-TEKT', 'ar-khee-TEKT', ['Der Architekt hat den Plan gezeichnet.', 'The architect drew the plan.', 'L’architecte a dessiné le plan.']),
    vocab('sp-passiv-das-erdbeben', 'das Erdbeben', 'earthquake', 'le tremblement de terre', 'das', 'ERD-be-ben', 'AIRT-bay-ben', ['Das Erdbeben hat viele Häuser zerstört.', 'The earthquake destroyed many houses.', 'Le tremblement de terre a détruit beaucoup de maisons.']),
    vocab('sp-passiv-liefern', 'liefern', 'to deliver', 'livrer', null, 'LIE-fern', 'LEE-fern', ['Das Paket wird morgen geliefert.', 'The parcel will be delivered tomorrow.', 'Le colis sera livré demain.']),
    mc(
      'sp-pv-e5',
      ['"Das Dorf wurde ___ ein Erdbeben zerstört."', '« Das Dorf wurde ___ ein Erdbeben zerstört. »'],
      ['von', 'durch', 'mit'], ['von', 'durch', 'mit'], 1,
      ['An event / cause → durch + accusative.', 'Un événement / une cause → durch + accusatif.'],
    ),
    mc(
      'sp-pv-e6',
      ['"Das Haus wird ___ einem Architekten geplant."', '« Das Haus wird ___ einem Architekten geplant. »'],
      ['von', 'durch', 'bei'], ['von', 'durch', 'bei'], 0,
      ['A person → von + dative.', 'Une personne → von + datif.'],
    ),
    mc(
      'sp-pv-e7',
      ['Active: "Die Lehrerin erklärt die Regel." Which passive is correct?', 'Actif : « Die Lehrerin erklärt die Regel. » Quel passif est correct ?'],
      ['Die Regel wird von der Lehrerin erklärt.', 'Die Regel erklärt von der Lehrerin wird.', 'Die Lehrerin wird die Regel erklärt.'],
      ['Die Regel wird von der Lehrerin erklärt.', 'Die Regel erklärt von der Lehrerin wird.', 'Die Lehrerin wird die Regel erklärt.'], 0,
      ['The object becomes the subject, the subject becomes von + dative.', 'Le COD devient sujet, le sujet devient von + datif.'],
    ),
    wo('sp-pv-e8', ['wird', 'Das', 'Paket', 'morgen', 'geliefert'], ['Das', 'Paket', 'wird', 'morgen', 'geliefert'], ['The participle closes the frame.', 'Le participe ferme le cadre.']),
    wo('sp-pv-e9', ['von', 'Regel', 'Die', 'der', 'wird', 'Lehrerin', 'erklärt'], ['Die', 'Regel', 'wird', 'von', 'der', 'Lehrerin', 'erklärt'], ['Subject, werden, agent, participle.', 'Sujet, werden, agent, participe.']),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Passive in other tenses', 'Le passif aux autres temps',
      'Präteritum, Perfekt and the modals.', 'Präteritum, Perfekt et les modaux.',
    ),
    grammar(
      'sp-pv-tenses',
      ['Präteritum, Perfekt, Futur', 'Präteritum, Perfekt, futur'],
      [
        'Only **werden** changes. The Partizip II stays at the end:\n\n- **Präsens**: Das Haus **wird** gebaut.\n- **Präteritum**: Das Haus **wurde** gebaut.\n- **Perfekt**: Das Haus **ist** gebaut **worden**.\n- **Futur**: Das Haus **wird** gebaut **werden**.\n\nIn the **Perfekt** passive, **werden** becomes **worden** (not "geworden") and the auxiliary is **sein**: ist … gebaut **worden**. It is a tricky form; in speech, the **Präteritum** is often preferred.',
        'Seul **werden** change. Le participe II reste à la fin :\n\n- **Präsens** : Das Haus **wird** gebaut.\n- **Präteritum** : Das Haus **wurde** gebaut.\n- **Perfekt** : Das Haus **ist** gebaut **worden**.\n- **Futur** : Das Haus **wird** gebaut **werden**.\n\nAu **Perfekt** passif, **werden** devient **worden** (pas « geworden ») et l’auxiliaire est **sein** : ist … gebaut **worden**. C’est une forme délicate ; à l’oral, on préfère souvent le **Präteritum**.',
      ],
      [
        ['Das Haus wurde 1990 gebaut.', 'The house was built in 1990.', 'La maison a été construite en 1990.'],
        ['Das Haus ist 1990 gebaut worden.', 'The house was built in 1990. (Perfekt)', 'La maison a été construite en 1990. (Perfekt)'],
        ['Das Haus wird nächstes Jahr gebaut werden.', 'The house will be built next year.', 'La maison sera construite l’an prochain.'],
      ],
      'conjugation-table',
    ),
    grammar(
      'sp-pv-modal',
      ['Passive with modals', 'Passif avec les modaux'],
      [
        'With a **modal verb**, the passive infinitive goes to the end: **Partizip II + werden**.\n\n- Das Fenster **muss** repariert **werden**.\n- Die Hausaufgaben **können** morgen abgegeben **werden**.\n- Hier **darf** nicht geraucht **werden**.\n\nIn the **Präteritum**: Das Auto **musste** repariert **werden**. In a **subordinate clause**: …, weil das Auto repariert **werden muss**.',
        'Avec un **verbe modal**, l’infinitif passif va à la fin : **participe II + werden**.\n\n- Das Fenster **muss** repariert **werden**.\n- Die Hausaufgaben **können** morgen abgegeben **werden**.\n- Hier **darf** nicht geraucht **werden**.\n\nAu **Präteritum** : Das Auto **musste** repariert **werden**. Dans une **subordonnée** : …, weil das Auto repariert **werden muss**.',
      ],
      [
        ['Das Fenster muss repariert werden.', 'The window has to be repaired.', 'La fenêtre doit être réparée.'],
        ['Hier darf nicht geraucht werden.', 'Smoking is not allowed here.', 'Il est interdit de fumer ici.'],
        ['Ich weiß, dass das Auto repariert werden muss.', 'I know that the car has to be repaired.', 'Je sais que la voiture doit être réparée.'],
      ],
    ),
    fb(
      'sp-pv-e10',
      ['Das Haus ___ 1990 gebaut. (werden — Präteritum)', 'Das Haus ___ 1990 gebaut. (werden — Präteritum)'],
      'wurde',
      ['Präteritum of werden: wurde.', 'Präteritum de werden : wurde.'],
    ),
    fb(
      'sp-pv-e11',
      ['Das Haus ist 1990 gebaut ___. (Perfekt)', 'Das Haus ist 1990 gebaut ___. (Perfekt)'],
      'worden',
      ['Passive Perfekt: sein + Partizip II + worden.', 'Passif au Perfekt : sein + participe II + worden.'],
    ),
    fb(
      'sp-pv-e12',
      ['Das Fenster muss repariert ___. (werden)', 'Das Fenster muss repariert ___. (werden)'],
      'werden',
      ['Modal + Partizip II + werden.', 'Modal + participe II + werden.'],
    ),
    wo('sp-pv-e13', ['repariert', 'Das', 'muss', 'werden', 'Auto'], ['Das', 'Auto', 'muss', 'repariert', 'werden'], ['Modal in position 2, participle + werden at the end.', 'Modal en 2e position, participe + werden à la fin.']),
    match(
      'sp-pv-e14',
      [
        ['wird gebaut', 'present', 'présent'],
        ['wurde gebaut', 'simple past', 'prétérit'],
        ['ist gebaut worden', 'perfect', 'parfait'],
        ['muss gebaut werden', 'with modal', 'avec modal'],
      ],
      ['Match each passive form with its description.', 'Associe chaque forme passive à sa description.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'State or process?', 'État ou processus ?',
      'Zustandspassiv with sein.', 'Zustandspassiv avec sein.',
    ),
    grammar(
      'sp-pv-zustand',
      ['Zustandspassiv: sein + Partizip II', 'Zustandspassiv : sein + participe II'],
      [
        'The **Zustandspassiv** (state passive) describes the **result** of an action, not the action itself:\n\n- **Vorgangspassiv** (process, werden): Die Tür **wird** geöffnet. (Someone is opening it now.)\n- **Zustandspassiv** (state, sein): Die Tür **ist** geöffnet. (It is open: a result.)\n\nPast: Die Tür **war** geöffnet. Compare: Das Geschäft **wird** um 8 Uhr geöffnet (action) / Das Geschäft **ist** geöffnet (state).',
        'Le **Zustandspassiv** (passif d’état) décrit le **résultat** d’une action, pas l’action elle-même :\n\n- **Vorgangspassiv** (processus, werden) : Die Tür **wird** geöffnet. (Quelqu’un l’ouvre en ce moment.)\n- **Zustandspassiv** (état, sein) : Die Tür **ist** geöffnet. (Elle est ouverte : un résultat.)\n\nPassé : Die Tür **war** geöffnet. Compare : Das Geschäft **wird** um 8 Uhr geöffnet (action) / Das Geschäft **ist** geöffnet (état).',
      ],
      [
        ['Die Tür wird geöffnet.', 'The door is being opened.', 'La porte est en train d’être ouverte.'],
        ['Die Tür ist geöffnet.', 'The door is open.', 'La porte est ouverte.'],
        ['Das Essen ist schon gekocht.', 'The meal is already cooked.', 'Le repas est déjà cuit.'],
      ],
    ),
    vocab('sp-passiv-geoeffnet', 'geöffnet', 'open (state), opened', 'ouvert (état)', null, 'ge-ÖFF-net', 'geh-ÖF-net', ['Das Geschäft ist bis 20 Uhr geöffnet.', 'The shop is open until 8 pm.', 'Le magasin est ouvert jusqu’à 20 h.']),
    vocab('sp-passiv-geschlossen', 'geschlossen', 'closed', 'fermé', null, 'ge-SCHLOS-sen', 'geh-SHLOS-en', ['Die Bank ist am Sonntag geschlossen.', 'The bank is closed on Sunday.', 'La banque est fermée le dimanche.']),
    mc(
      'sp-pv-e15',
      ['Which sentence describes a STATE?', 'Quelle phrase décrit un ÉTAT ?'],
      ['Die Tür wird geöffnet.', 'Die Tür ist geöffnet.', 'Die Tür wurde geöffnet.'], ['Die Tür wird geöffnet.', 'Die Tür ist geöffnet.', 'Die Tür wurde geöffnet.'], 1,
      ['sein + participle = result / state.', 'sein + participe = résultat / état.'],
    ),
    mc(
      'sp-pv-e16',
      ['"Die Bank ___ am Sonntag geschlossen." State: the bank is closed.', '« Die Bank ___ am Sonntag geschlossen. » État : la banque est fermée.'],
      ['wird', 'ist', 'wurde'], ['wird', 'ist', 'wurde'], 1,
      ['A state → sein.', 'Un état → sein.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Alternatives and real texts', 'Alternatives et textes réels',
      'Man, sich lassen, -bar and where you will meet the passive.', 'Man, sich lassen, -bar et où tu rencontreras le passif.',
    ),
    grammar(
      'sp-pv-alt',
      ['Alternatives to the passive', 'Alternatives au passif'],
      [
        'German often avoids the passive in everyday speech. Common alternatives:\n\n- **man** + active verb: **Man spricht** hier Deutsch. = Hier **wird** Deutsch **gesprochen**.\n- **sich lassen + infinitive** (= can be): Das Problem **lässt sich lösen**. = Das Problem kann gelöst werden.\n- **sein + zu + infinitive** (= must/can be): Das Formular **ist** bis Montag **abzugeben**.\n- adjectives in **-bar / -lich**: Das Wasser ist **trinkbar** (drinkable). Der Text ist **lesbar**.',
        'L’allemand évite souvent le passif à l’oral. Alternatives courantes :\n\n- **man** + verbe actif : **Man spricht** hier Deutsch. = Hier **wird** Deutsch **gesprochen**.\n- **sich lassen + infinitif** (= peut être) : Das Problem **lässt sich lösen**. = Das Problem kann gelöst werden.\n- **sein + zu + infinitif** (= doit / peut être) : Das Formular **ist** bis Montag **abzugeben**.\n- adjectifs en **-bar / -lich** : Das Wasser ist **trinkbar** (potable). Der Text ist **lesbar**.',
      ],
      [
        ['Man spricht hier Deutsch.', 'German is spoken here.', 'On parle allemand ici.'],
        ['Das Problem lässt sich lösen.', 'The problem can be solved.', 'Le problème peut être résolu.'],
        ['Das Formular ist bis Montag abzugeben.', 'The form has to be handed in by Monday.', 'Le formulaire est à rendre avant lundi.'],
      ],
    ),
    grammar(
      'sp-pv-texts',
      ['Where you meet the passive', 'Où tu rencontres le passif'],
      [
        'Typical passive texts:\n\n- **Recipes**: Zuerst **werden** die Zwiebeln **geschnitten**. Dann **wird** Öl **erhitzt**.\n- **Instructions**: Das Gerät **wird** an den Strom **angeschlossen**.\n- **News**: Zwei Personen **wurden** bei dem Unfall **verletzt**.\n- **Signs**: Hier **wird** gebaut. · Es **wird** gebeten, Ruhe zu bewahren.\n\nNote the **impersonal passive**: **Es wird** getanzt. = **Getanzt wird** / Hier wird getanzt. Without a subject, the **es** may drop out when something else begins the sentence.',
        'Textes typiquement au passif :\n\n- **Recettes** : Zuerst **werden** die Zwiebeln **geschnitten**. Dann **wird** Öl **erhitzt**.\n- **Notices** : Das Gerät **wird** an den Strom **angeschlossen**.\n- **Actualités** : Zwei Personen **wurden** bei dem Unfall **verletzt**.\n- **Panneaux** : Hier **wird** gebaut. · Es **wird** gebeten, Ruhe zu bewahren.\n\nRetiens le **passif impersonnel** : **Es wird** getanzt. = Hier wird getanzt. Sans sujet, le **es** disparaît quand autre chose ouvre la phrase.',
      ],
      [
        ['Zuerst werden die Zwiebeln geschnitten.', 'First the onions are chopped.', 'D’abord, on coupe les oignons.'],
        ['Zwei Personen wurden verletzt.', 'Two people were injured.', 'Deux personnes ont été blessées.'],
        ['Hier wird gebaut.', 'Building work is going on here.', 'Il y a des travaux ici.'],
      ],
    ),
    vocab('sp-passiv-verletzen', 'verletzen', 'to injure', 'blesser', null, 'ver-LET-zen', 'fer-LET-sen', ['Bei dem Unfall wurde niemand verletzt.', 'Nobody was injured in the accident.', 'Personne n’a été blessé lors de l’accident.']),
    vocab('sp-passiv-schneiden', 'schneiden', 'to cut, to chop', 'couper', null, 'SCHNEI-den', 'SHNY-den', ['Die Zwiebeln werden in kleine Stücke geschnitten.', 'The onions are chopped into small pieces.', 'Les oignons sont coupés en petits morceaux.']),
    mc(
      'sp-pv-e17',
      ['"Man spricht hier Deutsch." means the same as…', '« Man spricht hier Deutsch. » a le même sens que…'],
      ['Hier wird Deutsch gesprochen.', 'Hier ist Deutsch gesprochen.', 'Hier wurde Deutsch gesprochen worden.'], ['Hier wird Deutsch gesprochen.', 'Hier ist Deutsch gesprochen.', 'Hier wurde Deutsch gesprochen worden.'], 0,
      ['man + active ≈ werden + Partizip II.', 'man + actif ≈ werden + participe II.'],
    ),
    mc(
      'sp-pv-e18',
      ['"Das Problem lässt sich lösen" means…', '« Das Problem lässt sich lösen » signifie…'],
      ['The problem can be solved.', 'The problem must be solved.', 'The problem is solved.'], ['Le problème peut être résolu.', 'Le problème doit être résolu.', 'Le problème est résolu.'], 0,
      ['sich lassen + infinitive = "can be …ed".', 'sich lassen + infinitif = « peut être … ».'],
    ),

    wrapup(
      '**Idea** — the passive puts the action in the spotlight. Accusative object → subject; the doer disappears or becomes von + dative (person) / durch + accusative (cause).\n\n**Form** — werden + Partizip II: Das Haus wird gebaut. Präteritum: wurde gebaut. Perfekt: ist gebaut worden. Futur: wird gebaut werden.\n\n**Modals** — Partizip II + werden at the end: Das Fenster muss repariert werden.\n\n**Zustandspassiv** — sein + Partizip II describes a result: Die Tür ist geöffnet.\n\n**Alternatives** — man spricht, lässt sich lösen, ist abzugeben, -bar. **Texts** — recipes, instructions, news, signs.',
      '**Idée** — le passif met l’action en lumière. COD à l’accusatif → sujet ; l’agent disparaît ou devient von + datif (personne) / durch + accusatif (cause).\n\n**Forme** — werden + participe II : Das Haus wird gebaut. Präteritum : wurde gebaut. Perfekt : ist gebaut worden. Futur : wird gebaut werden.\n\n**Modaux** — participe II + werden à la fin : Das Fenster muss repariert werden.\n\n**Zustandspassiv** — sein + participe II décrit un résultat : Die Tür ist geöffnet.\n\n**Alternatives** — man spricht, lässt sich lösen, ist abzugeben, -bar. **Textes** — recettes, notices, actualités, panneaux.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: The passive', 'Quiz final : le passif'),
    mc(
      'sp-pv-q1',
      ['Which passive form is correct?', 'Quelle forme passive est correcte ?'],
      ['Das Auto wird repariert.', 'Das Auto wird reparieren.', 'Das Auto ist repariert werden.'], ['Das Auto wird repariert.', 'Das Auto wird reparieren.', 'Das Auto ist repariert werden.'], 0,
      ['werden + Partizip II.', 'werden + participe II.'],
    ),
    mc(
      'sp-pv-q2',
      ['Passive of "Der Arzt untersucht den Patienten."', 'Passif de « Der Arzt untersucht den Patienten. »'],
      ['Der Patient wird vom Arzt untersucht.', 'Der Patient wird den Arzt untersucht.', 'Den Patienten wird vom Arzt untersucht.'],
      ['Der Patient wird vom Arzt untersucht.', 'Der Patient wird den Arzt untersucht.', 'Den Patienten wird vom Arzt untersucht.'], 0,
      ['Accusative object → nominative subject.', 'COD à l’accusatif → sujet au nominatif.'],
    ),
    mc(
      'sp-pv-q3',
      ['Perfekt passive of "Das Haus wird gebaut" is…', 'Le passif au Perfekt de « Das Haus wird gebaut » est…'],
      ['Das Haus ist gebaut worden.', 'Das Haus hat gebaut worden.', 'Das Haus ist gebaut geworden.'], ['Das Haus ist gebaut worden.', 'Das Haus hat gebaut worden.', 'Das Haus ist gebaut geworden.'], 0,
      ['sein + Partizip II + worden.', 'sein + participe II + worden.'],
    ),
    fb(
      'sp-pv-q4',
      ['Das Dorf ___ durch ein Erdbeben zerstört. (werden — Präteritum)', 'Das Dorf ___ durch ein Erdbeben zerstört. (werden — Präteritum)'],
      'wurde',
      ['Präteritum: wurde.', 'Präteritum : wurde.'],
    ),
    fb(
      'sp-pv-q5',
      ['Hier darf nicht geraucht ___. (werden)', 'Hier darf nicht geraucht ___. (werden)'],
      'werden',
      ['Modal + Partizip II + werden.', 'Modal + participe II + werden.'],
    ),
    fb(
      'sp-pv-q6',
      ['Das Geschäft ___ bis 20 Uhr geöffnet. (state: sein)', 'Das Geschäft ___ bis 20 Uhr geöffnet. (état : sein)'],
      'ist',
      ['Zustandspassiv: sein + Partizip II.', 'Zustandspassiv : sein + participe II.'],
    ),
    mc(
      'sp-pv-q7',
      ['"Der Wagen wurde ___ einen Unfall beschädigt."', '« Der Wagen wurde ___ einen Unfall beschädigt. »'],
      ['von', 'durch', 'für'], ['von', 'durch', 'für'], 1,
      ['An event as cause → durch + accusative.', 'Un événement comme cause → durch + accusatif.'],
    ),
    wo('sp-pv-q8', ['wird', 'Zuerst', 'Öl', 'erhitzt'], ['Zuerst', 'wird', 'Öl', 'erhitzt'], ['Time word first, werden in position 2.', 'Mot de temps en premier, werden en 2e position.']),
    wo('sp-pv-q9', ['muss', 'Das', 'repariert', 'Fenster', 'werden'], ['Das', 'Fenster', 'muss', 'repariert', 'werden'], ['Passive with a modal.', 'Passif avec modal.']),
    wo('sp-pv-q10', ['wurden', 'Zwei', 'verletzt', 'Personen', 'bei', 'dem', 'Unfall'], ['Zwei', 'Personen', 'wurden', 'bei', 'dem', 'Unfall', 'verletzt'], ['Präteritum passive: wurden … Partizip II.', 'Passif au Präteritum : wurden … participe II.']),
    match(
      'sp-pv-q11',
      [
        ['Man spricht Deutsch.', 'Deutsch wird gesprochen.', 'On parle allemand.'],
        ['Es lässt sich lösen.', 'Es kann gelöst werden.', 'Cela peut être résolu.'],
        ['Die Tür ist offen.', 'a state', 'un état'],
        ['Die Tür wird geöffnet.', 'an action', 'une action'],
      ],
      ['Match active/passive equivalents and states.', 'Associe les équivalents actif/passif et les états.'],
    ),
    mc(
      'sp-pv-q12',
      ['Which verb can NOT form a regular passive?', 'Quel verbe ne peut PAS former un passif régulier ?'],
      ['helfen (dative)', 'bauen', 'schreiben'], ['helfen (datif)', 'bauen', 'schreiben'], 0,
      ['Verbs with only a dative object stay impersonal: Mir wird geholfen.', 'Les verbes avec seulement un objet au datif restent impersonnels : Mir wird geholfen.'],
    ),
    lc(
      'sp-pv-q13',
      ['Listen. What is not allowed?', 'Écoute. Qu’est-ce qui n’est pas autorisé ?'],
      'Hier darf nicht geraucht werden.',
      ['Smoking', 'Parking', 'Eating'], ['Fumer', 'Se garer', 'Manger'], 0,
      ['geraucht from rauchen = to smoke.', 'geraucht vient de rauchen = fumer.'],
    ),
    lc(
      'sp-pv-q14',
      ['Listen. When was the house built?', 'Écoute. Quand la maison a-t-elle été construite ?'],
      'Das Haus wurde im Jahr 1990 gebaut.',
      ['In 1990', 'In 1999', 'In 2090'], ['En 1990', 'En 1999', 'En 2090'], 0,
      ['neunzehnhundertneunzig = 1990.', 'neunzehnhundertneunzig = 1990.'],
    ),
  ],
});

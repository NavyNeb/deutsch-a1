import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion23: Lesson = {
  id: 'b1-l23', level: 'B1', module: 5, number: 19,
  title: { de: 'Passiv mit Modalverben und Ortsangaben', en: 'Passive with modal verbs and place/time expressions', fr: 'Passif avec verbes modaux et compléments de lieu/temps' },
  theme: 'Organising an event: passive with modal verbs, innerhalb/außerhalb, um … herum, am … entlang', themeFr: 'Organiser un événement : passif avec verbes modaux, innerhalb/außerhalb, um … herum, am … entlang',
  goals: ['Form the passive with a modal verb (muss … werden)', 'Say what has to be done before an event', 'Use innerhalb and außerhalb with the genitive', 'Describe routes with um … herum and am … entlang'], goalsFr: ['Former le passif avec un verbe modal (muss … werden)', 'Dire ce qui doit être fait avant un événement', 'Utiliser innerhalb et außerhalb avec le génitif', 'Décrire des trajets avec um … herum et am … entlang'],
  canDo: g('Ich kann das Passiv mit Modalverben bilden, eine Veranstaltung organisieren und Orte und Zeiten mit innerhalb, außerhalb, um … herum und entlang beschreiben.', 'I can form the passive with modal verbs, organise an event and describe places and times with innerhalb, außerhalb, um … herum and entlang.', 'Je sais former le passif avec des verbes modaux, organiser un événement et décrire lieux et temps avec innerhalb, außerhalb, um … herum et entlang.'),
  steps: [
    { kind: 'intro', title: 'Ein Konzert organisieren 🎸', titleFr: 'Organiser un concert 🎸',
      scene: 'A band prepares its tour and a big open-air concert — and a long list of what must be done.', sceneFr: 'Un groupe prépare sa tournée et un grand concert en plein air — et une longue liste de choses à faire.',
      goals: ['Form the passive with a modal verb (muss … werden)', 'Use innerhalb and außerhalb with the genitive', 'Describe routes with um … herum and am … entlang'],
      goalsFr: ['Former le passif avec un verbe modal (muss … werden)', 'Utiliser innerhalb et außerhalb avec le génitif', 'Décrire des trajets avec um … herum et am … entlang'] },

    // ───────────── 1 · Passive with modals ─────────────
    { kind: 'chapter', title: 'Passiv mit Modalverben', titleFr: 'Passif avec modaux', blurb: 'muss gemacht werden.', blurbFr: 'muss gemacht werden.' },

    { kind: 'situation', title: 'Was muss getan werden?', titleFr: 'Que faut-il faire ?',
      setting: 'The band manager goes through the to-do list.', settingFr: 'Le manager du groupe passe en revue la liste de tâches.',
      lines: [
        line('Manager', 'Die Bühne muss aufgebaut werden. Die Technik muss früh aufgebaut werden. Die Plakate müssen bald gedruckt werden.', 'The stage has to be set up. The equipment has to be set up early. The posters have to be printed soon.', 'La scène doit être montée. Le matériel doit être installé tôt. Les affiches doivent être imprimées bientôt.'),
        line('Sängerin', 'Es muss noch viel geübt werden. Das darf nicht vergessen werden. Wer organisiert die Busse?', 'A lot still has to be practised. That must not be forgotten. Who is organising the buses?', 'Il faut encore beaucoup répéter. Il ne faut pas l’oublier. Qui organise les bus ?'),
        line('Manager', 'Die Karten können online gekauft werden. Für das Konzert wird viel Werbung gemacht. Die Probe dauert zwei Stunden.', 'The tickets can be bought online. A lot of advertising is done for the concert. The rehearsal takes two hours.', 'Les billets peuvent être achetés en ligne. On fait beaucoup de publicité pour le concert. La répétition dure deux heures.'),
        line('Sängerin', 'Wir sind nervös, weil noch vieles organisiert werden muss. Vor jedem Auftritt habe ich Lampenfieber.', 'We are nervous because a lot still has to be organised. Before every performance I have stage fright.', 'Nous sommes nerveux parce qu’il reste beaucoup à organiser. Avant chaque spectacle, j’ai le trac.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l23-e13', prompt: 'How can the tickets be bought?', promptFr: 'Comment peut-on acheter les billets ?', options: ['Online', 'Only at the stage', 'By phone only'], optionsFr: ['En ligne', 'Seulement à la scène', 'Seulement par téléphone'], answer: 0, explain: 'The manager says: “Die Karten können online gekauft werden.”', explainFr: 'Le manager dit : « Die Karten können online gekauft werden. »', hint: 'Look for “online”.', hintFr: 'Cherche « online ».' } },

    { kind: 'wordgroup', title: 'Auftritt und Bühne', titleFr: 'Spectacle et scène',
      items: [{ id: 'b1l23-veranstaltung', german: 'die Veranstaltung', english: 'the event', french: 'l’événement', gender: 'die', syllables: ['ver', 'AN', 'stal', 'tung'], pronunciation: 'dee fair-AHN-shtahl-toong', example: { de: 'Die Veranstaltung beginnt um sieben Uhr.', en: 'The event starts at seven o’clock.', fr: 'L’événement commence à sept heures.' } }, { id: 'b1l23-auftritt', german: 'der Auftritt', english: 'the performance / gig', french: 'la prestation / le concert', gender: 'der', syllables: ['AUF', 'tritt'], pronunciation: 'dair OWF-trit', example: { de: 'Der Auftritt der Band war ein Erfolg.', en: 'The band’s gig was a success.', fr: 'Le concert du groupe a été un succès.' } }, { id: 'b1l23-probe', german: 'die Probe', english: 'the rehearsal', french: 'la répétition', gender: 'die', syllables: ['PRO', 'be'], pronunciation: 'dee PROH-beh', example: { de: 'Die Probe dauert zwei Stunden.', en: 'The rehearsal lasts two hours.', fr: 'La répétition dure deux heures.' } }, { id: 'b1l23-lampenfieber', german: 'das Lampenfieber', english: 'stage fright', french: 'le trac', gender: 'das', syllables: ['LAM', 'pen', 'fie', 'ber'], pronunciation: 'dahs LAHM-pen-fee-ber', example: { de: 'Vor jedem Auftritt hat sie Lampenfieber.', en: 'She gets stage fright before every performance.', fr: 'Avant chaque concert, elle a le trac.' } }, { id: 'b1l23-buehne', german: 'die Bühne', english: 'the stage', french: 'la scène', gender: 'die', syllables: ['BÜH', 'ne'], pronunciation: 'dee BUE-neh', example: { de: 'Die Bühne steht mitten auf dem Platz.', en: 'The stage stands in the middle of the square.', fr: 'La scène se trouve au milieu de la place.' } }, { id: 'b1l23-publikum', german: 'das Publikum', english: 'the audience', french: 'le public', gender: 'das', syllables: ['PU', 'bli', 'kum'], pronunciation: 'dahs POO-blee-koom', example: { de: 'Das Publikum klatscht laut.', en: 'The audience applauds loudly.', fr: 'Le public applaudit fort.' } }, { id: 'b1l23-tournee', german: 'die Tournee', english: 'the tour', french: 'la tournée', gender: 'die', syllables: ['tour', 'NEE'], pronunciation: 'dee toor-NAY', example: { de: 'Die Band geht im Herbst auf Tournee.', en: 'The band goes on tour in autumn.', fr: 'Le groupe part en tournée en automne.' } }] },

    { kind: 'wordgroup', title: 'Organisieren', titleFr: 'Organiser',
      items: [{ id: 'b1l23-aufbauen', german: 'aufbauen', english: 'to set up / build up', french: 'monter / installer', gender: null, syllables: ['AUF', 'bau', 'en'], pronunciation: 'OWF-bow-en', example: { de: 'Die Technik muss früh aufgebaut werden.', en: 'The equipment has to be set up early.', fr: 'Le matériel doit être installé tôt.' } }, { id: 'b1l23-organisieren', german: 'organisieren', english: 'to organise', french: 'organiser', gender: null, syllables: ['or', 'ga', 'ni', 'SIE', 'ren'], pronunciation: 'or-gah-nee-ZEE-ren', example: { de: 'Wer organisiert die Busse?', en: 'Who is organising the buses?', fr: 'Qui organise les bus ?' } }, { id: 'b1l23-werbung', german: 'die Werbung', english: 'advertising', french: 'la publicité', gender: 'die', syllables: ['WER', 'bung'], pronunciation: 'dee VAIR-boong', example: { de: 'Für das Konzert wird viel Werbung gemacht.', en: 'A lot of advertising is done for the concert.', fr: 'On fait beaucoup de publicité pour le concert.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l23-passiv-modal', title: 'The passive with modal verbs', titleFr: 'Le passif avec modaux',
      lead: 'modal (conjugated) + … + participle + werden (infinitive at the end). In a subordinate clause the modal is the last word.',
      leadFr: 'modal (conjugué) + … + participe + werden (infinitif à la fin). Dans une subordonnée, le modal est le dernier mot.',
      explanationMd: 'You know the present passive (**wird / werden + participle**). With a **modal verb** (**müssen, können, dürfen, sollen, wollen**) the **modal is conjugated** in position 2, and the **participle and the infinitive werden** go to the **end**: **modal + … + participle + werden**: **Die Bühne muss aufgebaut werden. Die Plakate müssen gedruckt werden. Das darf nicht vergessen werden.** In a **subordinate clause** the **modal is the very last word**: **…, weil noch viel geübt werden muss.** **Active → passive**: **Man muss die Tickets verkaufen. → Die Tickets müssen verkauft werden.** The **verb group at the end** has **three parts**: **participle + werden + (modal in subordinate clauses)**.',
      explanationMdFr: 'Tu connais le passif présent (**wird / werden + participe**). Avec un **verbe modal** (**müssen, können, dürfen, sollen, wollen**), le **modal est conjugué** en position 2, et le **participe et l’infinitif werden** vont à la **fin** : **modal + … + participe + werden** : **Die Bühne muss aufgebaut werden. Die Plakate müssen gedruckt werden. Das darf nicht vergessen werden.** Dans une **subordonnée**, le **modal est le tout dernier mot** : **…, weil noch viel geübt werden muss.** **Actif → passif** : **Man muss die Tickets verkaufen. → Die Tickets müssen verkauft werden.** Le **groupe verbal final** a **trois éléments** : **participe + werden + (modal dans les subordonnées)**.',
      tables: [{ title: 'Passive with a modal', titleFr: 'Passif avec modal', headers: ['Clause', 'Example'], headersFr: ['Proposition', 'Exemple'],
        rows: [['Main clause', 'Die Bühne muss aufgebaut werden.'], ['Main clause (plural)', 'Die Plakate müssen gedruckt werden.'], ['With können', 'Die Karten können online gekauft werden.'], ['Subordinate clause', '…, weil noch viel geübt werden muss.']],
        rowsFr: [['Principale', 'Die Bühne muss aufgebaut werden.'], ['Principale (pluriel)', 'Die Plakate müssen gedruckt werden.'], ['Avec können', 'Die Karten können online gekauft werden.'], ['Subordonnée', '…, weil noch viel geübt werden muss.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Die Bühne', role: 'subject' }, { text: 'muss', role: 'verb' }, { text: 'aufgebaut werden.', role: 'verb' }], en: 'The stage has to be set up.', fr: 'La scène doit être montée.' },
        { parts: [{ text: 'Wir sind nervös,', role: 'other' }, { text: 'weil', role: 'connector' }, { text: 'noch vieles', role: 'subject' }, { text: 'organisiert werden muss.', role: 'verb' }], en: 'We are nervous because a lot still has to be organised.', fr: 'Nous sommes nerveux parce qu’il reste beaucoup à organiser.' },
      ],
      contrast: {
        a: { label: 'Active with a modal', labelFr: 'Actif avec modal', note: 'man muss …', noteFr: 'man muss …', examples: [g('Man muss die Tickets verkaufen.', 'One has to sell the tickets.', 'On doit vendre les billets.'), g('Man muss die Bühne aufbauen.', 'One has to set up the stage.', 'On doit monter la scène.')] },
        b: { label: 'Passive with a modal', labelFr: 'Passif avec modal', note: 'muss … werden', noteFr: 'muss … werden', examples: [g('Die Tickets müssen verkauft werden.', 'The tickets have to be sold.', 'Les billets doivent être vendus.'), g('Die Bühne muss aufgebaut werden.', 'The stage has to be set up.', 'La scène doit être montée.')] },
      },
      examples: [
        g('Die Bühne muss aufgebaut werden.', 'The stage has to be set up.', 'La scène doit être montée.'),
        g('Die Plakate müssen bald gedruckt werden.', 'The posters have to be printed soon.', 'Les affiches doivent être imprimées bientôt.'),
        g('Es muss noch viel geübt werden.', 'A lot still has to be practised.', 'Il faut encore beaucoup répéter.'),
        g('Die Karten können online gekauft werden.', 'The tickets can be bought online.', 'Les billets peuvent être achetés en ligne.'),
        g('Das darf nicht vergessen werden.', 'That must not be forgotten.', 'Il ne faut pas l’oublier.'),
        g('Wir sind nervös, weil noch vieles organisiert werden muss.', 'We are nervous because a lot still has to be organised.', 'Nous sommes nerveux parce qu’il reste beaucoup à organiser.'),
      ],
      mistakes: [
        { wrong: 'Die Bühne muss aufgebaut sein.', right: 'Die Bühne muss aufgebaut werden.', why: 'The passive process uses werden, not sein.', whyFr: 'Le passif-processus utilise werden, pas sein.' },
        { wrong: '…, weil noch viel geübt muss werden.', right: '…, weil noch viel geübt werden muss.', why: 'In a subordinate clause the modal is the last word.', whyFr: 'Dans une subordonnée, le modal est le dernier mot.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l23-e1', prompt: 'Die Tickets müssen noch verkauft ___. (passive infinitive)', promptFr: 'Die Tickets müssen noch verkauft ___. (infinitif passif)', answer: 'werden', hint: 'modal + participle + werden', hintFr: 'modal + participe + werden' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l23-e2', prompt: 'Which sentence is a passive with a modal verb?', promptFr: 'Quelle phrase est un passif avec verbe modal ?', options: ['Wir müssen noch viel üben.', 'Es muss noch viel geübt werden.', 'Es wird noch viel geübt.'], optionsFr: ['Wir müssen noch viel üben.', 'Es muss noch viel geübt werden.', 'Es wird noch viel geübt.'], answer: 1, explain: 'Modal (muss) + participle (geübt) + werden.', explainFr: 'Modal (muss) + participe (geübt) + werden.', hint: 'Look for the participle followed by "werden".', hintFr: 'Cherche le participe suivi de « werden ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l23-e3', tokens: ['aufgebaut', 'Die Bühne', 'werden', 'muss'], answer: ['Die Bühne', 'muss', 'aufgebaut', 'werden'], hint: 'Modal in position 2, participle + werden at the end.', hintFr: 'Modal en position 2, participe + werden à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l23-e5', prompt: 'Which subordinate clause is correct?', promptFr: 'Quelle subordonnée est correcte ?', options: ['…, weil noch viel geprobt werden muss.', '…, weil noch viel muss geprobt werden.', '…, weil noch viel geprobt muss werden.'], optionsFr: ['…, weil noch viel geprobt werden muss.', '…, weil noch viel muss geprobt werden.', '…, weil noch viel geprobt muss werden.'], answer: 0, explain: 'In a subordinate clause the conjugated modal stands last.', explainFr: 'Dans une subordonnée, le modal conjugué est en dernière position.', hint: 'Which verb is conjugated — and where does it go?', hintFr: 'Quel verbe est conjugué — et où va-t-il ?' } },

    // ───────────── 2 · innerhalb / außerhalb ─────────────
    { kind: 'chapter', title: 'innerhalb und außerhalb', titleFr: 'innerhalb et außerhalb', blurb: 'Place and time with the genitive.', blurbFr: 'Lieu et temps avec le génitif.' },

    { kind: 'situation', title: 'Wo und bis wann?', titleFr: 'Où et jusqu’à quand ?',
      setting: 'Planning the venue and the payment deadline.', settingFr: 'Planification du lieu et de la date limite de paiement.',
      lines: [
        line('Manager', 'Das Festival findet außerhalb der Stadt statt. Das Stadion liegt außerhalb der Stadt. Innerhalb der Stadt gibt es viele Bühnen.', 'The festival takes place outside the city. The stadium is outside the city. Inside the city there are many stages.', 'Le festival a lieu en dehors de la ville. Le stade est en dehors de la ville. À l’intérieur de la ville, il y a beaucoup de scènes.'),
        line('Sängerin', 'Innerhalb des Gebäudes darf nicht geraucht werden. Die Tickets müssen innerhalb einer Woche bezahlt werden.', 'Smoking is not allowed inside the building. The tickets must be paid for within a week.', 'Il est interdit de fumer à l’intérieur du bâtiment. Les billets doivent être payés dans un délai d’une semaine.'),
        line('Manager', 'Die Halle liegt außerhalb der Stadt, deshalb müssen Busse organisiert werden. Außerhalb der Öffnungszeiten ist das Büro geschlossen.', 'The hall is outside the city, so buses must be organised. Outside opening hours the office is closed.', 'La salle est en dehors de la ville, c’est pourquoi des bus doivent être organisés. En dehors des heures d’ouverture, le bureau est fermé.'),
      ],
      words: [{ id: 'b1l23-innerhalb', german: 'innerhalb', english: 'within / inside (+ gen.)', french: 'à l’intérieur de / dans un délai de', gender: null, syllables: ['IN', 'ner', 'halb'], pronunciation: 'IN-ner-hahlp', example: { de: 'Innerhalb der Stadt gibt es viele Bühnen.', en: 'Within the city there are many stages.', fr: 'Dans la ville, il y a beaucoup de scènes.' } }, { id: 'b1l23-ausserhalb', german: 'außerhalb', english: 'outside of (+ gen.)', french: 'en dehors de', gender: null, syllables: ['AU', 'ßer', 'halb'], pronunciation: 'OW-ser-hahlp', example: { de: 'Das Festival findet außerhalb der Stadt statt.', en: 'The festival takes place outside the city.', fr: 'Le festival a lieu en dehors de la ville.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l23-innerhalb', title: 'innerhalb / außerhalb + genitive', titleFr: 'innerhalb / außerhalb + génitif',
      lead: 'Both take the genitive and work for place and time. m / n nouns get -(e)s. With a bare plural people say von + dative.',
      leadFr: 'Les deux prennent le génitif et fonctionnent pour le lieu et le temps. Les noms m / n prennent -(e)s. Avec un pluriel nu, on dit von + datif.',
      explanationMd: 'Both prepositions take the **genitive** and work for **place and time**: **innerhalb der Stadt** (inside the city), **innerhalb einer Woche** (within a week); **außerhalb des Zentrums** (outside the centre), **außerhalb der Öffnungszeiten** (outside opening hours). **Masculine and neuter** nouns get **-(e)s**: **des Zentrums, des Gebäudes**. With a **bare plural noun**, people often use **von + dative**: **innerhalb von zwei Tagen**. The **question** is **Wo?** (place) or **Bis wann?** (time).',
      explanationMdFr: 'Les deux prépositions prennent le **génitif** et fonctionnent pour le **lieu et le temps** : **innerhalb der Stadt** (à l’intérieur de la ville), **innerhalb einer Woche** (dans un délai d’une semaine) ; **außerhalb des Zentrums** (en dehors du centre), **außerhalb der Öffnungszeiten** (en dehors des heures d’ouverture). Les noms **masculins et neutres** prennent **-(e)s** : **des Zentrums, des Gebäudes**. Avec un **pluriel nu**, on utilise souvent **von + datif** : **innerhalb von zwei Tagen**. La **question** est **Wo ?** (lieu) ou **Bis wann ?** (temps).',
      tables: [{ title: 'innerhalb / außerhalb', titleFr: 'innerhalb / außerhalb', headers: ['', 'Place', 'Time'], headersFr: ['', 'Lieu', 'Temps'],
        rows: [['innerhalb', 'innerhalb der Stadt', 'innerhalb einer Woche'], ['außerhalb', 'außerhalb des Zentrums', 'außerhalb der Öffnungszeiten'], ['with plural', 'innerhalb von Städten', 'innerhalb von zwei Tagen']],
        rowsFr: [['innerhalb', 'innerhalb der Stadt', 'innerhalb einer Woche'], ['außerhalb', 'außerhalb des Zentrums', 'außerhalb der Öffnungszeiten'], ['avec pluriel', 'innerhalb von Städten', 'innerhalb von zwei Tagen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das Stadion', role: 'subject' }, { text: 'liegt', role: 'verb' }, { text: 'außerhalb der Stadt.', role: 'place' }], en: 'The stadium is outside the city.', fr: 'Le stade est en dehors de la ville.' },
        { parts: [{ text: 'Die Tickets', role: 'subject' }, { text: 'müssen', role: 'verb' }, { text: 'innerhalb einer Woche', role: 'time' }, { text: 'bezahlt werden.', role: 'verb' }], en: 'The tickets must be paid for within a week.', fr: 'Les billets doivent être payés dans un délai d’une semaine.' },
      ],
      contrast: {
        a: { label: 'innerhalb', labelFr: 'innerhalb', note: 'inside / within', noteFr: 'à l’intérieur / dans un délai', examples: [g('Innerhalb des Gebäudes darf nicht geraucht werden.', 'Smoking is not allowed inside the building.', 'Il est interdit de fumer à l’intérieur du bâtiment.'), g('Innerhalb der Stadt gibt es viele Bühnen.', 'Inside the city there are many stages.', 'À l’intérieur de la ville, il y a beaucoup de scènes.')] },
        b: { label: 'außerhalb', labelFr: 'außerhalb', note: 'outside of', noteFr: 'en dehors de', examples: [g('Das Stadion liegt außerhalb der Stadt.', 'The stadium is outside the city.', 'Le stade est en dehors de la ville.'), g('Außerhalb der Öffnungszeiten ist das Büro geschlossen.', 'Outside opening hours the office is closed.', 'En dehors des heures d’ouverture, le bureau est fermé.')] },
      },
      examples: [
        g('Das Stadion liegt außerhalb der Stadt.', 'The stadium is outside the city.', 'Le stade est en dehors de la ville.'),
        g('Innerhalb des Gebäudes darf nicht geraucht werden.', 'Smoking is not allowed inside the building.', 'Il est interdit de fumer à l’intérieur du bâtiment.'),
        g('Die Tickets müssen innerhalb einer Woche bezahlt werden.', 'The tickets must be paid for within a week.', 'Les billets doivent être payés dans un délai d’une semaine.'),
        g('Das Festival findet außerhalb der Stadt statt.', 'The festival takes place outside the city.', 'Le festival a lieu en dehors de la ville.'),
        g('Innerhalb der Stadt gibt es viele Bühnen.', 'Inside the city there are many stages.', 'À l’intérieur de la ville, il y a beaucoup de scènes.'),
        g('Außerhalb der Öffnungszeiten ist das Büro geschlossen.', 'Outside opening hours the office is closed.', 'En dehors des heures d’ouverture, le bureau est fermé.'),
      ],
      mistakes: [
        { wrong: 'Das Stadion liegt außerhalb die Stadt.', right: 'Das Stadion liegt außerhalb der Stadt.', why: 'außerhalb takes the genitive: der Stadt.', whyFr: 'außerhalb prend le génitif : der Stadt.' },
        { wrong: 'Innerhalb des Gebäude darf man nicht rauchen.', right: 'Innerhalb des Gebäudes darf man nicht rauchen.', why: 'Neuter genitive: des + -es.', whyFr: 'Génitif neutre : des + -es.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l23-e7', prompt: 'Das Konzert findet innerhalb ___ Stadt statt. (die Stadt → genitive article)', promptFr: 'Das Konzert findet innerhalb ___ Stadt statt. (die Stadt → article au génitif)', answer: 'der', hint: 'feminine genitive: der', hintFr: 'génitif féminin : der' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l23-e8', prompt: 'Listen. What has to be organised?', promptFr: 'Écoute. Qu’est-ce qui doit être organisé ?', audio: { ttsText: 'Die Halle liegt außerhalb der Stadt, deshalb müssen Busse organisiert werden.' }, options: ['Buses', 'Tickets', 'Posters'], optionsFr: ['Des bus', 'Des billets', 'Des affiches'], answer: 0, hint: 'Listen for the noun before "organisiert werden".', hintFr: 'Écoute le nom avant « organisiert werden ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l23-e12', prompt: 'Listen. When must the tickets be paid?', promptFr: 'Écoute. Quand faut-il payer les billets ?', audio: { ttsText: 'Die Karten müssen innerhalb einer Woche bezahlt werden.' }, options: ['Within a week', 'After a month', 'Tomorrow'], optionsFr: ['Dans un délai d’une semaine', 'Après un mois', 'Demain'], answer: 0, hint: 'Listen to the time expression after "innerhalb".', hintFr: 'Écoute l’expression de temps après « innerhalb ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b1l23-e11', word: 'Publikum', answer: 'das', hint: 'Publikum is neuter (das Publikum).', hintFr: 'Publikum est neutre (das Publikum).' } },

    // ───────────── 3 · um … herum / am … entlang ─────────────
    { kind: 'chapter', title: 'um … herum und am … entlang', titleFr: 'um … herum et am … entlang', blurb: 'Routes and positions.', blurbFr: 'Trajets et positions.' },

    { kind: 'situation', title: 'Rund um die Halle', titleFr: 'Autour de la salle',
      setting: 'Fans and stalls around the venue.', settingFr: 'Fans et stands autour du lieu.',
      lines: [
        line('Sängerin', 'Um die Halle herum warten schon viele Fans. Um den See herum stehen Stände. Wir gehen am Fluss entlang.', 'Lots of fans are already waiting around the hall. Stalls stand around the lake. We walk along the river.', 'Beaucoup de fans attendent déjà autour de la salle. Des stands sont installés autour du lac. Nous longeons la rivière.'),
        line('Manager', 'Am Ufer entlang stehen Lichter und Stände. Wir spazieren den Fluss entlang. Das ist der schönste Platz der Stadt!', 'Lights and stalls stand along the bank. We stroll along the river. That is the most beautiful square in the city!', 'Des lumières et des stands bordent la rive. Nous nous promenons le long de la rivière. C’est la plus belle place de la ville !'),
      ],
      words: [{ id: 'b1l23-entlang', german: 'entlang', english: 'along', french: 'le long de', gender: null, syllables: ['ent', 'LANG'], pronunciation: 'ent-LAHNG', example: { de: 'Wir gehen am Fluss entlang.', en: 'We walk along the river.', fr: 'Nous marchons le long de la rivière.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l23-um-herum', title: 'um … herum and an … entlang', titleFr: 'um … herum et an … entlang',
      lead: 'um + accusative + herum = around. an + dative + entlang = along. entlang after the noun takes the accusative.',
      leadFr: 'um + accusatif + herum = autour de. an + datif + entlang = le long de. entlang après le nom prend l’accusatif.',
      explanationMd: 'Two-part expressions for **routes and positions**: **um + accusative + herum** = around: **Um den See herum stehen Stände. Um die Halle herum warten Fans.** **an + dative + entlang** = along: **Wir gehen am Fluss entlang. Am Ufer entlang stehen Lichter.** If the **noun comes first**, **entlang** follows it with the **accusative**: **Wir gehen den Fluss entlang.** The **superlative** is often used to praise places: **Das ist der schönste Platz der Stadt!**',
      explanationMdFr: 'Deux expressions en deux parties pour les **trajets et positions** : **um + accusatif + herum** = autour de : **Um den See herum stehen Stände. Um die Halle herum warten Fans.** **an + datif + entlang** = le long de : **Wir gehen am Fluss entlang. Am Ufer entlang stehen Lichter.** Si le **nom vient en premier**, **entlang** le suit avec l’**accusatif** : **Wir gehen den Fluss entlang.** Le **superlatif** sert souvent à vanter un lieu : **Das ist der schönste Platz der Stadt !**',
      tables: [{ title: 'Routes', titleFr: 'Trajets', headers: ['Pattern', 'Case', 'Example'], headersFr: ['Schéma', 'Cas', 'Exemple'],
        rows: [['um … herum', 'accusative', 'Um den See herum stehen Stände.'], ['an … entlang', 'dative', 'Wir gehen am Fluss entlang.'], ['… entlang (after the noun)', 'accusative', 'Wir gehen den Fluss entlang.']],
        rowsFr: [['um … herum', 'accusatif', 'Um den See herum stehen Stände.'], ['an … entlang', 'datif', 'Wir gehen am Fluss entlang.'], ['… entlang (après le nom)', 'accusatif', 'Wir gehen den Fluss entlang.']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Um die Halle herum', role: 'place' }, { text: 'warten', role: 'verb' }, { text: 'schon', role: 'time' }, { text: 'viele Fans.', role: 'subject' }], en: 'Lots of fans are already waiting around the hall.', fr: 'Beaucoup de fans attendent déjà autour de la salle.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'gehen', role: 'verb' }, { text: 'am Fluss entlang.', role: 'place' }], en: 'We walk along the river.', fr: 'Nous longeons la rivière.' },
      ],
      contrast: {
        a: { label: 'um … herum', labelFr: 'um … herum', note: 'around', noteFr: 'autour de', examples: [g('Um die Halle herum warten schon viele Fans.', 'Lots of fans are already waiting around the hall.', 'Beaucoup de fans attendent déjà autour de la salle.'), g('Um den See herum stehen Stände.', 'Stalls stand around the lake.', 'Des stands sont installés autour du lac.')] },
        b: { label: 'an … entlang', labelFr: 'an … entlang', note: 'along', noteFr: 'le long de', examples: [g('Wir gehen am Fluss entlang.', 'We walk along the river.', 'Nous longeons la rivière.'), g('Am Ufer entlang stehen Lichter und Stände.', 'Lights and stalls stand along the bank.', 'Des lumières et des stands bordent la rive.')] },
      },
      examples: [
        g('Um die Halle herum warten schon viele Fans.', 'Lots of fans are already waiting around the hall.', 'Beaucoup de fans attendent déjà autour de la salle.'),
        g('Um den See herum stehen Stände.', 'Stalls stand around the lake.', 'Des stands sont installés autour du lac.'),
        g('Wir gehen am Fluss entlang.', 'We walk along the river.', 'Nous longeons la rivière.'),
        g('Wir spazieren den Fluss entlang.', 'We stroll along the river.', 'Nous nous promenons le long de la rivière.'),
        g('Am Ufer entlang stehen Lichter und Stände.', 'Lights and stalls stand along the bank.', 'Des lumières et des stands bordent la rive.'),
        g('Das ist der schönste Platz der Stadt!', 'That is the most beautiful square in the city!', 'C’est la plus belle place de la ville !'),
      ],
      mistakes: [
        { wrong: 'Um dem See herum stehen Stände.', right: 'Um den See herum stehen Stände.', why: 'um takes the accusative: den.', whyFr: 'um prend l’accusatif : den.' },
        { wrong: 'Wir gehen entlang dem Fluss.', right: 'Wir gehen am Fluss entlang.', why: 'an + dative … entlang (or den Fluss entlang).', whyFr: 'an + datif … entlang (ou den Fluss entlang).' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l23-e9', prompt: 'Wir spazieren ___ Fluss entlang.', promptFr: 'Wir spazieren ___ Fluss entlang.', options: ['um', 'am', 'im'], answer: 1, explain: '"an dem" = "am": am Fluss entlang (along the river).', explainFr: '« an dem » = « am » : am Fluss entlang (le long de la rivière).', hint: 'an + dative + entlang', hintFr: 'an + datif + entlang' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l23-e10', prompt: 'Die Fans stehen um die Halle ___. (around)', promptFr: 'Die Fans stehen um die Halle ___. (autour)', answer: 'herum', hint: 'um … herum', hintFr: 'um … herum' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l23-e6', pairs: [{ de: 'innerhalb', en: 'within / inside of', fr: 'à l’intérieur de' }, { de: 'außerhalb', en: 'outside of', fr: 'en dehors de' }, { de: 'um … herum', en: 'around', fr: 'autour de' }, { de: 'am … entlang', en: 'along', fr: 'le long de' }], hint: 'Match each expression to its meaning.', hintFr: 'Associe chaque expression à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l23-e4', prompt: 'Die Plakate ___ bald gedruckt werden. (müssen — plural)', promptFr: 'Die Plakate ___ bald gedruckt werden. (müssen — pluriel)', answer: 'müssen', hint: 'plural subject → plural modal', hintFr: 'sujet pluriel → modal au pluriel' } },

    { kind: 'pronunciation', focus: 'Long ü in Bühne vs. short ü in müssen — and stress on the last syllable of Tournee', focusFr: 'ü long dans Bühne vs ü bref dans müssen — et accent sur la dernière syllabe de Tournee', items: [{ id: 'b1l23-buehne-pron', german: 'die Bühne', english: 'the stage', french: 'la scène', gender: 'die', syllables: ['BÜH', 'ne'], pronunciation: 'dee BUE-neh', example: { de: 'Die Bühne ist bereit.', en: 'The stage is ready.', fr: 'La scène est prête.' } }, { id: 'b1l23-muessen-pron', german: 'müssen', english: 'must / have to', french: 'devoir', gender: null, syllables: ['MÜS', 'sen'], pronunciation: 'MUESS-en', example: { de: 'Wir müssen noch proben.', en: 'We still have to rehearse.', fr: 'Nous devons encore répéter.' } }, { id: 'b1l23-ausserhalb-pron', german: 'außerhalb', english: 'outside of', french: 'en dehors de', gender: null, syllables: ['AU', 'ßer', 'halb'], pronunciation: 'OW-ser-hahlp', example: { de: 'Außerhalb der Stadt ist es ruhig.', en: 'It is quiet outside the city.', fr: 'C’est calme en dehors de la ville.' } }, { id: 'b1l23-tournee-pron', german: 'die Tournee', english: 'the tour', french: 'la tournée', gender: 'die', syllables: ['tour', 'NEE'], pronunciation: 'dee toor-NAY', example: { de: 'Die Tournee beginnt im Mai.', en: 'The tour starts in May.', fr: 'La tournée commence en mai.' } }] },

    { kind: 'wrapup',
      summary: 'You can now form the **passive with a modal** (**muss gemacht werden**), use **innerhalb / außerhalb + genitive** and describe routes with **um … herum** and **am … entlang**. 🎉',
      summaryFr: 'Tu sais maintenant former le **passif avec un modal** (**muss gemacht werden**), utiliser **innerhalb / außerhalb + génitif** et décrire des trajets avec **um … herum** et **am … entlang**. 🎉',
      card: { title: 'Organising an event on one page', titleFr: 'Organiser un événement en une page', sections: [
        { heading: 'Passive with a modal', headingFr: 'Passif avec modal', rows: [g('modal + participle + werden', 'Die Bühne muss aufgebaut werden.', 'Die Bühne muss aufgebaut werden.')] },
        { heading: 'Genitive prepositions', headingFr: 'Prépositions du génitif', rows: [g('innerhalb · außerhalb + genitive', 'place and time', 'lieu et temps')] },
        { heading: 'Routes', headingFr: 'Trajets', rows: [g('um … herum (Akk)', 'around', 'autour de'), g('am … entlang (Dat)', 'along', 'le long de')] },
      ] } },
  ],
};

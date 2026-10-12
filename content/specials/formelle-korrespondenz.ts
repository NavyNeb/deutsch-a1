import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const formelleKorrespondenz = defineSpecial({
  slug: 'formelle-korrespondenz',
  number: 41,
  group: 'life',
  levels: ['B1', 'B2'],
  related: ['b2-l25', 'b2-l26', 'b1-l1'],
  title: ['Formelle Korrespondenz', 'Formal correspondence', 'Correspondance formelle'],
  theme: [
    'Formal letters and emails: complaints, requests and applications to authorities, with set phrases and the right register',
    'Lettres et e-mails formels : réclamations, demandes et démarches administratives, avec formules figées et registre adapté',
  ],
  goals: [
    'Structure a formal letter from subject line to closing',
    'Make a complaint politely but firmly',
    'Use standard opening, request and closing phrases',
    'Choose the right register (Sie, Konjunktiv II, nominal style)',
  ],
  goalsFr: [
    'Structurer une lettre formelle de l’objet à la formule finale',
    'Faire une réclamation poliment mais fermement',
    'Employer les formules usuelles d’ouverture, de demande et de clôture',
    'Choisir le bon registre (Sie, Konjunktiv II, style nominal)',
  ],
  steps: [
    intro(
      'Sehr geehrte Damen und Herren', 'Mesdames et Messieurs',
      'Your heating has been broken for three weeks. A phone call did not help, so you write to the landlord. In German, a formal letter follows a fixed pattern and a polite but firm tone. This course gives you the structure and the phrases for complaints, requests and letters to authorities.',
      'Ton chauffage est en panne depuis trois semaines. Un appel n’a rien donné, alors tu écris au propriétaire. En allemand, une lettre formelle suit un schéma fixe et un ton poli mais ferme. Ce cours te donne la structure et les formules pour les réclamations, demandes et courriers aux administrations.',
      [
        'Follow the structure of a formal letter',
        'Use polite and firm phrases',
        'Close professionally',
        'Avoid register mistakes',
      ],
      [
        'Suivre la structure d’une lettre formelle',
        'Employer des formules polies et fermes',
        'Conclure professionnellement',
        'Éviter les erreurs de registre',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Structure of a formal letter', 'Structure d’une lettre formelle',
      'Subject line, salutation, reason, details, request, closing.', 'Objet, appel, motif, détails, demande, clôture.',
    ),
    vocab('sp-formelle-korrespondenz-betreff', 'der Betreff', 'the subject line', 'l’objet', 'der', 'be-TREFF', 'dair be-TREF', ['Betreff: Reklamation der Heizung.', 'Subject: Complaint about the heating.', 'Objet : Réclamation concernant le chauffage.']),
    vocab('sp-formelle-korrespondenz-anliegen', 'das Anliegen', 'the request, the matter', 'la demande', 'das', 'AN-lee-gen', 'das AHN-lee-gen', ['Mein Anliegen betrifft die Nebenkosten.', 'My request concerns the service charges.', 'Ma demande concerne les charges.']),
    grammar(
      'sp-fk-structure',
      ['The parts of a formal letter', 'Les parties d’une lettre formelle'],
      [
        '| Part | Typical phrases |\n|---|---|\n| **Betreff** | Reklamation der Heizung · Anfrage zu … |\n| **Anrede** | Sehr geehrte Damen und Herren, · Sehr geehrte Frau Berger, · Sehr geehrter Herr Schmidt, |\n| **Anlass** | ich schreibe Ihnen wegen … · Bezugnehmend auf … · Mein Anliegen betrifft … |\n| **Details** | facts, dates, what happened (Perfekt / Präteritum) |\n| **Bitte / Forderung** | Ich bitte Sie, … · Ich fordere Sie auf, … zu … · Könnten Sie mir bitte … mitteilen? |\n| **Frist** | Ich setze Ihnen eine Frist bis … · Andernfalls … |\n| **Schluss** | Ich freue mich auf Ihre Rückmeldung. · Mit freundlichen Grüßen |\n\nAlways use **Sie** and capitalise **Ihnen, Ihre**.',
        '| Partie | Formules typiques |\n|---|---|\n| **Betreff** | Reklamation der Heizung · Anfrage zu … |\n| **Anrede** | Sehr geehrte Damen und Herren, · Sehr geehrte Frau Berger, · Sehr geehrter Herr Schmidt, |\n| **Anlass** | ich schreibe Ihnen wegen … · Bezugnehmend auf … · Mein Anliegen betrifft … |\n| **Détails** | faits, dates, déroulement (Perfekt / Präteritum) |\n| **Demande / exigence** | Ich bitte Sie, … · Ich fordere Sie auf, … zu … · Könnten Sie mir bitte … mitteilen ? |\n| **Délai** | Ich setze Ihnen eine Frist bis … · Andernfalls … |\n| **Clôture** | Ich freue mich auf Ihre Rückmeldung. · Mit freundlichen Grüßen |\n\nUtilise toujours **Sie** et mets une majuscule à **Ihnen, Ihre**.',
      ],
      [
        ['Sehr geehrte Frau Berger, ich schreibe Ihnen wegen der Heizung.', 'Dear Ms Berger, I am writing to you about the heating.', 'Chère Madame Berger, je vous écris au sujet du chauffage.'],
        ['Mit freundlichen Grüßen, Anna Müller', 'Yours sincerely, Anna Müller', 'Cordialement, Anna Müller'],
      ],
    ),
    mc(
      'sp-fk-e1',
      ['Correct opening for a letter to Herr Schmidt:', 'Ouverture correcte pour une lettre à Herr Schmidt :'],
      ['Sehr geehrter Herr Schmidt,', 'Hallo Herr Schmidt!', 'Lieber Schmidt,'], ['Sehr geehrter Herr Schmidt,', 'Hallo Herr Schmidt !', 'Lieber Schmidt,'], 0,
      ['Sehr geehrter + Herr + surname.', 'Sehr geehrter + Herr + nom.'],
    ),
    fb(
      'sp-fk-e2',
      ['Mit ___ Grüßen (Yours sincerely)', 'Mit ___ Grüßen (Cordialement)'],
      'freundlichen',
      ['Mit freundlichen Grüßen', 'Mit freundlichen Grüßen'],
    ),
    wo(
      'sp-fk-e3',
      ['mich', 'Ich', 'auf', 'freue', 'Ihre', 'Rückmeldung'],
      ['Ich', 'freue', 'mich', 'auf', 'Ihre', 'Rückmeldung'],
      ['sich freuen auf + Akk.', 'sich freuen auf + acc.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Complaints', 'Réclamations',
      'Firm, factual and polite.', 'Ferme, factuel et poli.',
    ),
    vocab('sp-formelle-korrespondenz-beschwerde', 'die Beschwerde', 'the complaint', 'la réclamation', 'die', 'be-SCHWER-de', 'dee be-SHVER-de', ['Ich möchte mich über den Service beschweren.', 'I would like to complain about the service.', 'Je voudrais me plaindre du service.']),
    vocab('sp-formelle-korrespondenz-mangel', 'der Mangel', 'the defect', 'le défaut', 'der', 'MAN-gel', 'dair MAHN-gel', ['Der Mangel wurde bereits gemeldet.', 'The defect has already been reported.', 'Le défaut a déjà été signalé.']),
    vocab('sp-formelle-korrespondenz-unverzueglich', 'unverzüglich', 'immediately', 'sans délai', null, 'UN-fer-tsueg-lich', 'OON-fer-tsueg-likh', ['Bitte beheben Sie den Schaden unverzüglich.', 'Please repair the damage immediately.', 'Veuillez réparer le dommage sans délai.']),
    grammar(
      'sp-fk-complaint',
      ['Complaint phrases', 'Formules de réclamation'],
      [
        '**State the problem (neutral):** *Leider muss ich feststellen, dass …* · *Wie bereits telefonisch mitgeteilt, …* · *Seit dem … ist … defekt.*\n\n**Demand (firm):** *Ich fordere Sie auf, den Mangel bis zum … zu beheben.* · *Ich erwarte, dass …* · *Ich bitte Sie dringend, …*\n\n**Set a deadline & consequence:** *Ich setze Ihnen eine Frist bis zum 15. Mai. **Andernfalls** sehe ich mich gezwungen, die Miete zu mindern.*\n\n**Never:** insults, exclamation marks, slang. Stay **factual**: dates, amounts, what was agreed.',
        '**Énoncer le problème (neutre) :** *Leider muss ich feststellen, dass …* · *Wie bereits telefonisch mitgeteilt, …* · *Seit dem … ist … defekt.*\n\n**Exiger (ferme) :** *Ich fordere Sie auf, den Mangel bis zum … zu beheben.* · *Ich erwarte, dass …* · *Ich bitte Sie dringend, …*\n\n**Fixer un délai et une conséquence :** *Ich setze Ihnen eine Frist bis zum 15. Mai. **Andernfalls** sehe ich mich gezwungen, die Miete zu mindern.*\n\n**Jamais :** insultes, points d’exclamation, argot. Reste **factuel** : dates, montants, ce qui a été convenu.',
      ],
      [
        ['Leider muss ich feststellen, dass die Heizung seit drei Wochen defekt ist.', 'Unfortunately I must note that the heating has been broken for three weeks.', 'Je dois malheureusement constater que le chauffage est en panne depuis trois semaines.'],
        ['Ich fordere Sie auf, den Mangel bis zum 15. Mai zu beheben.', 'I request that you repair the defect by 15 May.', 'Je vous demande de réparer le défaut d’ici le 15 mai.'],
      ],
    ),
    fb(
      'sp-fk-e4',
      ['Ich ___ Ihnen eine Frist bis zum 15. Mai. (set)', 'Ich ___ Ihnen eine Frist bis zum 15. Mai. (fixe)'],
      'setze',
      ['eine Frist setzen', 'eine Frist setzen'],
    ),
    mc(
      'sp-fk-e5',
      ['Which tone is right in a complaint?', 'Quel ton convient dans une réclamation ?'],
      ['Factual and polite', 'Angry and insulting', 'Joking'], ['Factuel et poli', 'En colère et insultant', 'Plaisantin'], 0,
      ['Stay factual.', 'Reste factuel.'],
    ),
    lc(
      'sp-fk-e6',
      ['Listen. What is the problem?', 'Écoute. Quel est le problème ?'],
      'Leider muss ich feststellen, dass die Heizung seit drei Wochen defekt ist.',
      ['The heating is broken', 'The rent is too high', 'The neighbours are loud'], ['Le chauffage est en panne', 'Le loyer est trop élevé', 'Les voisins sont bruyants'], 0,
      ['Heizung = heating.', 'Heizung = chauffage.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Requests and enquiries', 'Demandes et renseignements',
      'Asking for information or documents politely.', 'Demander poliment des informations ou des documents.',
    ),
    vocab('sp-formelle-korrespondenz-anbei', 'anbei', 'enclosed', 'ci-joint', null, 'AN-bai', 'AHN-by', ['Anbei sende ich Ihnen die Unterlagen.', 'Enclosed I am sending you the documents.', 'Ci-joint, je vous envoie les documents.']),
    vocab('sp-formelle-korrespondenz-erstatten', 'erstatten', 'to refund', 'rembourser', null, 'er-SHTAT-ten', 'er-SHTAT-ten', ['Bitte erstatten Sie mir den Betrag.', 'Please refund the amount to me.', 'Veuillez me rembourser le montant.']),
    grammar(
      'sp-fk-request',
      ['Polite requests with Konjunktiv II', 'Demandes polies avec le Konjunktiv II'],
      [
        '| Level | Phrase |\n|---|---|\n| **Neutral** | Bitte senden Sie mir … · Ich bitte um … |\n| **Polite** | **Könnten** Sie mir bitte … mitteilen? · **Wäre** es möglich, …? |\n| **Very polite** | Ich **wäre** Ihnen dankbar, wenn Sie … **könnten**. · **Würden** Sie so freundlich **sein**, …? |\n\n**Ask for information:** *Ich möchte wissen, ob … / Können Sie mir sagen, wann …?*\n**Attach documents:** *Anbei finden Sie …*\n**Thank in advance:** *Ich bedanke mich im Voraus für Ihre Bemühungen.*',
        '| Niveau | Formule |\n|---|---|\n| **Neutre** | Bitte senden Sie mir … · Ich bitte um … |\n| **Poli** | **Könnten** Sie mir bitte … mitteilen ? · **Wäre** es möglich, … ? |\n| **Très poli** | Ich **wäre** Ihnen dankbar, wenn Sie … **könnten**. · **Würden** Sie so freundlich **sein**, … ? |\n\n**Demander des informations :** *Ich möchte wissen, ob … / Können Sie mir sagen, wann … ?*\n**Joindre des documents :** *Anbei finden Sie …*\n**Remercier d’avance :** *Ich bedanke mich im Voraus für Ihre Bemühungen.*',
      ],
      [
        ['Ich wäre Ihnen dankbar, wenn Sie mir die Unterlagen schicken könnten.', 'I would be grateful if you could send me the documents.', 'Je vous serais reconnaissant de bien vouloir m’envoyer les documents.'],
        ['Könnten Sie mir bitte den Betrag erstatten?', 'Could you please refund the amount?', 'Pourriez-vous me rembourser le montant ?'],
      ],
    ),
    mc(
      'sp-fk-e7',
      ['Which is the most polite request?', 'Laquelle est la demande la plus polie ?'],
      ['Könnten Sie mir bitte den Betrag erstatten?', 'Geben Sie mir das Geld zurück!', 'Ich will mein Geld.'], ['Könnten Sie mir bitte den Betrag erstatten ?', 'Geben Sie mir das Geld zurück !', 'Ich will mein Geld.'], 0,
      ['Konjunktiv II + bitte.', 'Konjunktiv II + bitte.'],
    ),
    fb(
      'sp-fk-e8',
      ['___ sende ich Ihnen die Unterlagen. (enclosed)', '___ sende ich Ihnen die Unterlagen. (ci-joint)'],
      'Anbei',
      ['anbei = enclosed', 'anbei = ci-joint'],
    ),
    lc(
      'sp-fk-e9',
      ['Listen. What does the writer ask?', 'Écoute. Que demande l’auteur ?'],
      'Könnten Sie mir bitte mitteilen, wann die Reparatur stattfindet?',
      ['When the repair takes place', 'How much it costs', 'Who does it'], ['Quand la réparation a lieu', 'Combien ça coûte', 'Qui le fait'], 0,
      ['mitteilen = to let know.', 'mitteilen = faire savoir.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Register and style', 'Registre et style',
      'What to say and what to avoid.', 'Ce qu’il faut dire et ce qu’il faut éviter.',
    ),
    vocab('sp-formelle-korrespondenz-rueckmeldung', 'die Rückmeldung', 'the reply, the feedback', 'le retour', 'die', 'RUECK-mel-dung', 'dee RUEK-mel-doong', ['Ich freue mich auf Ihre Rückmeldung.', 'I look forward to your reply.', 'J’attends votre retour avec intérêt.']),
    grammar(
      'sp-fk-register',
      ['Register: formal vs. informal', 'Registre : formel et informel'],
      [
        '| Informal | Formal |\n|---|---|\n| Hallo! | Sehr geehrte Damen und Herren, |\n| Ich will … | Ich möchte … / Ich bitte um … |\n| kriegen | erhalten |\n| Kannst du …? | Könnten Sie …? |\n| Tschüss | Mit freundlichen Grüßen |\n| weil … | aufgrund / wegen + Genitiv (nominal) |\n\n**Avoid:** contractions (*gibt’s*), slang, exclamation marks, emoticons. **Use:** full sentences, **Sie**, Konjunktiv II for politeness, **nominal style** (*aufgrund des Mangels*, *nach Ablauf der Frist*).',
        '| Informel | Formel |\n|---|---|\n| Hallo ! | Sehr geehrte Damen und Herren, |\n| Ich will … | Ich möchte … / Ich bitte um … |\n| kriegen | erhalten |\n| Kannst du … ? | Könnten Sie … ? |\n| Tschüss | Mit freundlichen Grüßen |\n| weil … | aufgrund / wegen + génitif (nominal) |\n\n**Éviter :** contractions (*gibt’s*), argot, points d’exclamation, émoticônes. **Employer :** phrases complètes, **Sie**, Konjunktiv II pour la politesse, **style nominal** (*aufgrund des Mangels*, *nach Ablauf der Frist*).',
      ],
      [
        ['Aufgrund des Mangels bitte ich um eine Mietminderung.', 'Because of the defect I ask for a rent reduction.', 'En raison du défaut, je demande une réduction de loyer.'],
        ['Nach Ablauf der Frist werde ich rechtliche Schritte einleiten.', 'After the deadline expires I will take legal steps.', 'À l’expiration du délai, j’engagerai des démarches juridiques.'],
      ],
    ),
    mc(
      'sp-fk-e10',
      ['Which should you AVOID in a formal letter?', 'Que faut-il ÉVITER dans une lettre formelle ?'],
      ['Hallo!!!', 'Sie', 'Konjunktiv II'], ['Hallo !!!', 'Sie', 'Konjunktiv II'], 0,
      ['Too informal.', 'Trop informel.'],
    ),

    wrapup(
      '**Structure:** Betreff → Anrede → Anlass → Details → Bitte/Forderung → Frist → Gruß.\n\n**Anrede / Gruß:** *Sehr geehrte Damen und Herren,* · *Mit freundlichen Grüßen.*\n\n**Complaint:** *Leider muss ich feststellen, dass …* · *Ich fordere Sie auf, … zu …* · *Ich setze Ihnen eine Frist … Andernfalls …*\n\n**Politeness:** *Könnten Sie …?* · *Ich wäre Ihnen dankbar, wenn …* · *Anbei …* · *Ich freue mich auf Ihre Rückmeldung.*\n\n**Register:** Sie, no slang, nominal style.',
      '**Structure :** Betreff → Anrede → Anlass → Details → Bitte/Forderung → Frist → Gruß.\n\n**Anrede / Gruß :** *Sehr geehrte Damen und Herren,* · *Mit freundlichen Grüßen.*\n\n**Réclamation :** *Leider muss ich feststellen, dass …* · *Ich fordere Sie auf, … zu …* · *Ich setze Ihnen eine Frist … Andernfalls …*\n\n**Politesse :** *Könnten Sie … ?* · *Ich wäre Ihnen dankbar, wenn …* · *Anbei …* · *Ich freue mich auf Ihre Rückmeldung.*\n\n**Registre :** Sie, pas d’argot, style nominal.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Formal correspondence', 'Quiz final : correspondance formelle'),
    match(
      'sp-fk-q1',
      [
        ['die Beschwerde', 'complaint', 'réclamation'],
        ['der Betreff', 'subject line', 'objet'],
        ['erstatten', 'to refund', 'rembourser'],
        ['unverzüglich', 'immediately', 'sans délai'],
      ],
      ['Match each word with its meaning.', 'Associe chaque mot à sa signification.'],
    ),
    fb(
      'sp-fk-q2',
      ['Sehr ___ Damen und Herren, (Dear)', 'Sehr ___ Damen und Herren, (Chers)'],
      'geehrte',
      ['Sehr geehrte', 'Sehr geehrte'],
    ),
    fb(
      'sp-fk-q3',
      ['Ich freue mich ___ Ihre Rückmeldung. (to)', 'Ich freue mich ___ Ihre Rückmeldung. (de)'],
      'auf',
      ['sich freuen auf', 'sich freuen auf'],
    ),
    mc(
      'sp-fk-q4',
      ['Which is the most polite?', 'Laquelle est la plus polie ?'],
      ['Ich wäre Ihnen dankbar, wenn Sie mir helfen könnten.', 'Helfen Sie mir!', 'Ich will Hilfe.'], ['Ich wäre Ihnen dankbar, wenn Sie mir helfen könnten.', 'Helfen Sie mir !', 'Ich will Hilfe.'], 0,
      ['Konjunktiv II = polite.', 'Konjunktiv II = poli.'],
    ),
    mc(
      'sp-fk-q5',
      ['Formal equivalent of "kriegen":', 'Équivalent formel de « kriegen » :'],
      ['erhalten', 'nehmen', 'holen'], ['erhalten', 'nehmen', 'holen'], 0,
      ['erhalten = receive (formal).', 'erhalten = recevoir (formel).'],
    ),
    wo(
      'sp-fk-q6',
      ['Frist', 'setze', 'Ich', 'Ihnen', 'eine'],
      ['Ich', 'setze', 'Ihnen', 'eine', 'Frist'],
      ['Subject – verb – dative – accusative.', 'Sujet – verbe – datif – accusatif.'],
    ),
    wo(
      'sp-fk-q7',
      ['bitte', 'Könnten', 'Sie', 'mir', 'helfen'],
      ['Könnten', 'Sie', 'mir', 'bitte', 'helfen'],
      ['Konjunktiv II question: verb first.', 'Question au Konjunktiv II : verbe en tête.'],
    ),
    mc(
      'sp-fk-q8',
      ['"Anbei" means …', '« Anbei » signifie …'],
      ['enclosed', 'afterwards', 'on the other hand'], ['ci-joint', 'ensuite', 'd’autre part'], 0,
      ['Anbei = enclosed.', 'Anbei = ci-joint.'],
    ),
    lc(
      'sp-fk-q9',
      ['Listen. What does the writer want?', 'Écoute. Que veut l’auteur ?'],
      'Ich bitte Sie, den Mangel bis zum fünfzehnten Mai zu beheben.',
      ['The defect repaired by 15 May', 'A refund today', 'A new contract'], ['Le défaut réparé d’ici le 15 mai', 'Un remboursement aujourd’hui', 'Un nouveau contrat'], 0,
      ['beheben = repair.', 'beheben = réparer.'],
    ),
    lc(
      'sp-fk-q10',
      ['Listen. How does the letter end?', 'Écoute. Comment la lettre se termine-t-elle ?'],
      'Mit freundlichen Grüßen, Anna Müller.',
      ['Yours sincerely', 'See you soon', 'Thanks a lot'], ['Cordialement', 'À bientôt', 'Merci beaucoup'], 0,
      ['Mit freundlichen Grüßen = yours sincerely.', 'Mit freundlichen Grüßen = cordialement.'],
    ),
    mc(
      'sp-fk-q11',
      ['Which sentence is nominal style?', 'Quelle phrase est au style nominal ?'],
      ['Aufgrund des Mangels bitte ich um Minderung.', 'Weil es kaputt ist, will ich Geld.', 'Es ist kaputt, deshalb bitte ich.'], ['Aufgrund des Mangels bitte ich um Minderung.', 'Weil es kaputt ist, will ich Geld.', 'Es ist kaputt, deshalb bitte ich.'], 0,
      ['Preposition + genitive noun.', 'Préposition + nom au génitif.'],
    ),
    mc(
      'sp-fk-q12',
      ['Which closing is correct?', 'Quelle clôture est correcte ?'],
      ['Mit freundlichen Grüßen', 'Tschüss', 'Bis dann'], ['Mit freundlichen Grüßen', 'Tschüss', 'Bis dann'], 0,
      ['Formal closing.', 'Clôture formelle.'],
    ),
  ],
});

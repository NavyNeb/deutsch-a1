import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion16: Lesson = {
  id: 'b2-l16', level: 'B2', module: 6, number: 16,
  title: { de: 'Arbeitswelt und Bewerbung', en: 'The world of work and applications', fr: 'Le monde du travail et la candidature' },
  theme: 'Careers, applications and job interviews: qualifications, strengths, salary, and polite but confident language', themeFr: 'Carrière, candidatures et entretiens d’embauche : qualifications, atouts, salaire et langage poli mais assuré',
  goals: ['Describe your qualifications and experience', 'Talk about strengths and weaknesses', 'Handle a job interview', 'Use polite, confident Konjunktiv II phrases'], goalsFr: ['Décrire tes qualifications et ton expérience', 'Parler de tes points forts et faibles', 'Gérer un entretien d’embauche', 'Employer des formules polies et assurées au Konjunktiv II'],
  canDo: g('Ich kann meine Qualifikationen beschreiben und ein Vorstellungsgespräch höflich und selbstbewusst führen.', 'I can describe my qualifications and conduct a job interview politely and confidently.', 'Je sais décrire mes qualifications et mener un entretien d’embauche avec courtoisie et assurance.'),
  steps: [
    { kind: 'intro', title: 'Bewerbung und Vorstellungsgespräch 💼', titleFr: 'Candidature et entretien d’embauche 💼',
      scene: 'You apply for a job, describe your experience and answer the tricky interview questions.', sceneFr: 'Tu postules à un emploi, décris ton expérience et réponds aux questions piégeuses de l’entretien.',
      goals: ['Describe qualifications and experience', 'Talk about strengths and weaknesses', 'Use polite Konjunktiv II and confident indicative facts'],
      goalsFr: ['Décrire qualifications et expérience', 'Parler de forces et de faiblesses', 'Utiliser le Konjunktiv II poli et des faits assurés à l’indicatif'] },

    // ───────────── 1 · Application ─────────────
    { kind: 'chapter', title: 'Die Bewerbung', titleFr: 'La candidature', blurb: 'Qualifications, experience, responsibility.', blurbFr: 'Qualifications, expérience, responsabilité.' },

    { kind: 'situation', title: 'Meine Bewerbung', titleFr: 'Ma candidature',
      setting: 'Selin explains her application to a friend.', settingFr: 'Selin explique sa candidature à une amie.',
      lines: [
        line('Selin', 'Ich schicke meine Bewerbung heute ab. Meine Qualifikationen passen gut zur Stelle. Ich habe fünf Jahre Berufserfahrung.', 'I am sending off my application today. My qualifications fit the position well. I have five years of work experience.', 'J’envoie ma candidature aujourd’hui. Mes qualifications correspondent bien au poste. J’ai cinq ans d’expérience professionnelle.'),
        line('Selin', 'Ich bin für das Team verantwortlich. Ich bin ein zuverlässiger Mitarbeiter. Morgen habe ich ein Vorstellungsgespräch.', 'I am responsible for the team. I am a reliable employee. Tomorrow I have a job interview.', 'Je suis responsable de l’équipe. Je suis une employée fiable. Demain j’ai un entretien d’embauche.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l16-e11', prompt: 'How much work experience does Selin have?', promptFr: 'Combien d’expérience professionnelle Selin a-t-elle ?', options: ['Five years', 'Two years', 'None'], optionsFr: ['Cinq ans', 'Deux ans', 'Aucune'], answer: 0, explain: 'She says: “Ich habe fünf Jahre Berufserfahrung.”', explainFr: 'Elle dit : « Ich habe fünf Jahre Berufserfahrung. »', hint: 'Look for “Berufserfahrung”.', hintFr: 'Cherche « Berufserfahrung ».' } },

    { kind: 'wordgroup', title: 'Bewerben', titleFr: 'Postuler',
      items: [{ id: 'b2l16-bewerbung', german: 'die Bewerbung', english: 'the application', french: 'la candidature', gender: 'die', syllables: ['be', 'WER', 'bung'], pronunciation: 'dee be-VER-boong', example: { de: 'Ich schicke meine Bewerbung heute ab.', en: 'I am sending off my application today.', fr: 'J’envoie ma candidature aujourd’hui.' } }, { id: 'b2l16-qualifikation', german: 'die Qualifikation', english: 'the qualification', french: 'la qualification', gender: 'die', syllables: ['qua', 'li', 'fi', 'ka', 'TION'], pronunciation: 'dee kvah-li-fi-kah-TSYOHN', example: { de: 'Meine Qualifikationen passen gut zur Stelle.', en: 'My qualifications fit the position well.', fr: 'Mes qualifications correspondent bien au poste.' } }, { id: 'b2l16-berufserfahrung', german: 'die Berufserfahrung', english: 'the work experience', french: 'l’expérience professionnelle', gender: 'die', syllables: ['be', 'RUFS', 'er', 'fah', 'rung'], pronunciation: 'dee be-ROOFS-er-fah-roong', example: { de: 'Ich habe fünf Jahre Berufserfahrung.', en: 'I have five years of work experience.', fr: 'J’ai cinq ans d’expérience professionnelle.' } }, { id: 'b2l16-verantwortlich', german: 'verantwortlich', english: 'responsible', french: 'responsable', gender: null, syllables: ['ver', 'ANT', 'wort', 'lich'], pronunciation: 'fer-AHNT-vort-likh', example: { de: 'Ich bin für das Team verantwortlich.', en: 'I am responsible for the team.', fr: 'Je suis responsable de l’équipe.' } }, { id: 'b2l16-zuverlaessig', german: 'zuverlässig', english: 'reliable', french: 'fiable', gender: null, syllables: ['ZU', 'ver', 'läs', 'sig'], pronunciation: 'TSOO-fer-les-sikh', example: { de: 'Er ist ein zuverlässiger Mitarbeiter.', en: 'He is a reliable employee.', fr: 'C’est un collaborateur fiable.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l16-e6', pairs: [{ de: 'die Bewerbung', en: 'application', fr: 'candidature' }, { de: 'das Gehalt', en: 'salary', fr: 'salaire' }, { de: 'zuverlässig', en: 'reliable', fr: 'fiable' }, { de: 'kündigen', en: 'to resign', fr: 'démissionner' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l16-fakten', title: 'Stating your experience: confident facts', titleFr: 'Énoncer ton expérience : des faits assurés',
      lead: 'Use the indicative for facts: Ich habe … Erfahrung, Ich bin für … verantwortlich, seit + dative with the present, Perfekt for achievements.',
      leadFr: 'Utilise l’indicatif pour les faits : Ich habe … Erfahrung, Ich bin für … verantwortlich, seit + datif avec le présent, Perfekt pour les réalisations.',
      explanationMd: 'In an application you state **facts** in the **indicative** — short and confident. **Present** for what you are: **Ich bin für das Team verantwortlich.** **seit + Dativ** with the **present** for what still continues: **Seit drei Jahren arbeite ich als Projektleiterin.** **Perfekt** for achievements: **Ich habe ein Team geleitet und Kosten gesenkt.** **Haben + Erfahrung**: **Ich habe fünf Jahre Berufserfahrung.** **Adjectives** describe you: **Ich bin zuverlässig und teamfähig.** Avoid weak hedging in facts — save the **Konjunktiv II** for **wishes and questions** (next chapter).',
      explanationMdFr: 'Dans une candidature, tu énonces des **faits** à l’**indicatif** — courts et assurés. **Présent** pour ce que tu es : **Ich bin für das Team verantwortlich.** **seit + datif** avec le **présent** pour ce qui dure encore : **Seit drei Jahren arbeite ich als Projektleiterin.** **Perfekt** pour les réalisations : **Ich habe ein Team geleitet und Kosten gesenkt.** **Haben + Erfahrung** : **Ich habe fünf Jahre Berufserfahrung.** Les **adjectifs** te décrivent : **Ich bin zuverlässig und teamfähig.** Évite les hésitations dans les faits — garde le **Konjunktiv II** pour les **souhaits et questions** (chapitre suivant).',
      tables: [{ title: 'Facts for an application', titleFr: 'Faits pour une candidature', headers: ['What', 'Structure', 'Example'], headersFr: ['Quoi', 'Structure', 'Exemple'],
        rows: [['state', 'sein / haben + noun', 'Ich habe fünf Jahre Berufserfahrung.'], ['responsibility', 'sein + verantwortlich für + Akk.', 'Ich bin für das Team verantwortlich.'], ['duration', 'seit + Dativ + Präsens', 'Seit drei Jahren arbeite ich als Projektleiterin.'], ['achievement', 'Perfekt', 'Ich habe ein Team geleitet.']],
        rowsFr: [['état', 'sein / haben + nom', 'Ich habe fünf Jahre Berufserfahrung.'], ['responsabilité', 'sein + verantwortlich für + Akk.', 'Ich bin für das Team verantwortlich.'], ['durée', 'seit + datif + présent', 'Seit drei Jahren arbeite ich als Projektleiterin.'], ['réalisation', 'Perfekt', 'Ich habe ein Team geleitet.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'für das Team', role: 'accusative' }, { text: 'verantwortlich.', role: 'other' }], en: 'I am responsible for the team.', fr: 'Je suis responsable de l’équipe.' },
        { parts: [{ text: 'Seit drei Jahren', role: 'time' }, { text: 'arbeite', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'als Projektleiterin.', role: 'other' }], en: 'For three years I have worked as a project manager.', fr: 'Depuis trois ans, je travaille comme cheffe de projet.' },
      ],
      contrast: {
        a: { label: 'Weak', labelFr: 'Faible', note: 'hedging', noteFr: 'hésitant', examples: [g('Ich hätte vielleicht etwas Erfahrung.', 'I might have some experience.', 'J’aurais peut-être un peu d’expérience.'), g('Ich könnte eventuell zuverlässig sein.', 'I could possibly be reliable.', 'Je pourrais éventuellement être fiable.')] },
        b: { label: 'Strong', labelFr: 'Fort', note: 'indicative facts', noteFr: 'faits à l’indicatif', examples: [g('Ich habe fünf Jahre Berufserfahrung.', 'I have five years of work experience.', 'J’ai cinq ans d’expérience professionnelle.'), g('Ich bin ein zuverlässiger Mitarbeiter.', 'I am a reliable employee.', 'Je suis un employé fiable.')] },
      },
      examples: [
        g('Ich habe fünf Jahre Berufserfahrung.', 'I have five years of work experience.', 'J’ai cinq ans d’expérience professionnelle.'),
        g('Ich bin für das Team verantwortlich.', 'I am responsible for the team.', 'Je suis responsable de l’équipe.'),
        g('Ich schicke meine Bewerbung heute ab.', 'I am sending off my application today.', 'J’envoie ma candidature aujourd’hui.'),
        g('Meine Qualifikationen passen gut zur Stelle.', 'My qualifications fit the position well.', 'Mes qualifications correspondent bien au poste.'),
        g('Er ist ein zuverlässiger Mitarbeiter.', 'He is a reliable employee.', 'C’est un employé fiable.'),
        g('Seit drei Jahren arbeite ich als Projektleiterin.', 'For three years I have worked as a project manager.', 'Depuis trois ans, je travaille comme cheffe de projet.'),
      ],
      mistakes: [
        { wrong: 'Ich habe fünf Jahre Erfahrung gehabt. (still true)', right: 'Ich habe fünf Jahre Berufserfahrung.', why: 'Present for what is true now.', whyFr: 'Présent pour ce qui est vrai maintenant.' },
        { wrong: 'Ich arbeite seit drei Jahre.', right: 'Ich arbeite seit drei Jahren.', why: 'seit takes the dative: drei Jahren.', whyFr: 'seit prend le datif : drei Jahren.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l16-e2', prompt: 'Ich habe fünf Jahre ___ . (work experience)', answer: 'Berufserfahrung', hint: 'die Berufserfahrung', hintFr: 'die Berufserfahrung' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l16-e4', prompt: 'What is "das Vorstellungsgespräch"?', promptFr: 'Qu’est-ce que « das Vorstellungsgespräch » ?', options: ['A job interview', 'A lecture', 'A telephone bill'], answer: 0, explain: 'Vorstellung = introduction, Gespräch = talk.', explainFr: 'Vorstellung = présentation, Gespräch = entretien.', hint: 'introducing yourself', hintFr: 'se présenter' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l16-e8', prompt: 'Ich habe noch eine Frage: Wie ___ ist das Gehalt? (high)', answer: 'hoch', hint: 'Wie hoch ist …?', hintFr: 'Wie hoch ist …?' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l16-e7', prompt: 'Listen. What is her strength?', promptFr: 'Écoute. Quel est son atout ?', audio: { ttsText: 'Meine größte Stärke ist die Teamarbeit, und ich bin sehr zuverlässig.' }, options: ['Teamwork', 'Cooking', 'Driving'], optionsFr: ['Le travail d’équipe', 'La cuisine', 'La conduite'], answer: 0, hint: 'Stärke = strength.', hintFr: 'Stärke = atout.' } },

    // ───────────── 2 · Interview ─────────────
    { kind: 'chapter', title: 'Das Vorstellungsgespräch', titleFr: 'L’entretien d’embauche', blurb: 'Strengths, weaknesses, salary — politely.', blurbFr: 'Forces, faiblesses, salaire — avec courtoisie.' },

    { kind: 'situation', title: 'Im Gespräch', titleFr: 'En entretien',
      setting: 'The interview with the HR manager.', settingFr: 'L’entretien avec la responsable RH.',
      lines: [
        line('Personalchefin', 'Was sind Ihre Stärken und Schwächen?', 'What are your strengths and weaknesses?', 'Quelles sont vos forces et vos faiblesses ?'),
        line('Selin', 'Meine größte Stärke ist Teamarbeit. Eine Schwäche von mir ist Ungeduld, daran arbeite ich aber. Ich würde gern mehr Verantwortung übernehmen.', 'My greatest strength is teamwork. A weakness of mine is impatience, but I am working on it. I would like to take on more responsibility.', 'Ma plus grande force est le travail d’équipe. Une de mes faiblesses est l’impatience, mais j’y travaille. J’aimerais assumer plus de responsabilités.'),
        line('Selin', 'Ich hätte noch eine Frage: Wie hoch ist das Gehalt? Die Firma bietet Chancen zum Aufstieg, oder? Wir vereinbaren einen Termin? Ich habe meine Stelle gekündigt, weil ich mich verändern möchte.', 'I would have one more question: how high is the salary? The company offers chances for advancement, right? Shall we arrange a date? I resigned because I want a change.', 'J’aurais encore une question : à combien s’élève le salaire ? L’entreprise offre des perspectives d’évolution, n’est-ce pas ? Convenons-nous d’un rendez-vous ? J’ai démissionné parce que je veux changer.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Im Gespräch', titleFr: 'En entretien',
      items: [{ id: 'b2l16-vorstellungsgespraech', german: 'das Vorstellungsgespräch', english: 'the job interview', french: 'l’entretien d’embauche', gender: 'das', syllables: ['das', 'VOR', 'stel', 'lungs', 'ge', 'spräch'], pronunciation: 'das FOR-shtel-loongs-ge-shpraykh', example: { de: 'Morgen habe ich ein Vorstellungsgespräch.', en: 'Tomorrow I have a job interview.', fr: 'Demain j’ai un entretien d’embauche.' } }, { id: 'b2l16-staerke', german: 'die Stärke', english: 'the strength', french: 'le point fort', gender: 'die', syllables: ['STÄR', 'ke'], pronunciation: 'dee SHTER-ke', example: { de: 'Meine größte Stärke ist Teamarbeit.', en: 'My greatest strength is teamwork.', fr: 'Mon plus grand atout est le travail d’équipe.' } }, { id: 'b2l16-schwaeche', german: 'die Schwäche', english: 'the weakness', french: 'le point faible', gender: 'die', syllables: ['SCHWÄ', 'che'], pronunciation: 'dee SHVE-khe', example: { de: 'Eine Schwäche von mir ist Ungeduld.', en: 'A weakness of mine is impatience.', fr: 'Un de mes points faibles est l’impatience.' } }, { id: 'b2l16-gehalt', german: 'das Gehalt', english: 'the salary', french: 'le salaire', gender: 'das', syllables: ['das', 'ge', 'HALT'], pronunciation: 'das ge-HALT', example: { de: 'Wie hoch ist das Gehalt?', en: 'How high is the salary?', fr: 'À combien s’élève le salaire ?' } }, { id: 'b2l16-aufstieg', german: 'der Aufstieg', english: 'the promotion / advancement', french: 'l’évolution de carrière', gender: 'der', syllables: ['der', 'AUF', 'stieg'], pronunciation: 'dair OWF-shteek', example: { de: 'Die Firma bietet Chancen zum Aufstieg.', en: 'The company offers chances for advancement.', fr: 'L’entreprise offre des perspectives d’évolution.' } }] },

    { kind: 'wordgroup', title: 'Vereinbaren und kündigen', titleFr: 'Convenir et démissionner',
      items: [{ id: 'b2l16-vereinbaren', german: 'vereinbaren', english: 'to agree on / arrange', french: 'convenir de', gender: null, syllables: ['ver', 'EIN', 'ba', 'ren'], pronunciation: 'fer-INE-bah-ren', example: { de: 'Wir vereinbaren einen Termin.', en: 'We arrange an appointment.', fr: 'Nous convenons d’un rendez-vous.' } }, { id: 'b2l16-kuendigen', german: 'kündigen', english: 'to give notice / resign', french: 'démissionner / résilier', gender: null, syllables: ['KÜN', 'di', 'gen'], pronunciation: 'KUEN-di-gen', example: { de: 'Ich habe meine Stelle gekündigt.', en: 'I resigned from my job.', fr: 'J’ai démissionné de mon poste.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l16-hoeflich', title: 'Polite, confident interview language', titleFr: 'Langage d’entretien poli et assuré',
      lead: 'Facts in the indicative, wishes and questions in Konjunktiv II: ich würde gern, ich hätte noch eine Frage. Avoid ich will.',
      leadFr: 'Faits à l’indicatif, souhaits et questions au Konjunktiv II : ich würde gern, ich hätte noch eine Frage. Évite ich will.',
      explanationMd: 'Combine **Konjunktiv II** (polite) and **Indikativ** (confident facts). **Facts (indicative):** **Ich habe fünf Jahre Erfahrung. Ich bin für das Team verantwortlich.** **Polite wish (Konj. II):** **Ich würde gern Verantwortung übernehmen.** / **Ich hätte noch eine Frage.** **Strength:** **Meine größte Stärke ist …** / **Besonders gut kann ich …** **Weakness (honest + positive):** **Eine Schwäche von mir ist …, daran arbeite ich aber.** **Why you:** **Ich bin überzeugt, dass ich gut ins Team passe.** Avoid **ich will** (too direct) — use **ich möchte / ich würde gern**.',
      explanationMdFr: 'Combine **Konjunktiv II** (poli) et **indicatif** (faits assurés). **Faits (indicatif) :** **Ich habe fünf Jahre Erfahrung. Ich bin für das Team verantwortlich.** **Souhait poli (Konj. II) :** **Ich würde gern Verantwortung übernehmen.** / **Ich hätte noch eine Frage.** **Force :** **Meine größte Stärke ist …** / **Besonders gut kann ich …** **Faiblesse (honnête + positive) :** **Eine Schwäche von mir ist …, daran arbeite ich aber.** **Pourquoi toi :** **Ich bin überzeugt, dass ich gut ins Team passe.** Évite **ich will** (trop direct) — utilise **ich möchte / ich würde gern**.',
      tables: [{ title: 'Interview phrases', titleFr: 'Phrases d’entretien', headers: ['Function', 'Phrase'], headersFr: ['Fonction', 'Phrase'],
        rows: [['fact', 'Ich habe fünf Jahre Erfahrung.'], ['polite wish', 'Ich würde gern Verantwortung übernehmen.'], ['polite question', 'Ich hätte noch eine Frage.'], ['strength', 'Meine größte Stärke ist Teamarbeit.'], ['weakness', 'Eine Schwäche von mir ist Ungeduld, daran arbeite ich aber.'], ['conviction', 'Ich bin überzeugt, dass ich gut ins Team passe.']],
        rowsFr: [['fait', 'Ich habe fünf Jahre Erfahrung.'], ['souhait poli', 'Ich würde gern Verantwortung übernehmen.'], ['question polie', 'Ich hätte noch eine Frage.'], ['force', 'Meine größte Stärke ist Teamarbeit.'], ['faiblesse', 'Eine Schwäche von mir ist Ungeduld, daran arbeite ich aber.'], ['conviction', 'Ich bin überzeugt, dass ich gut ins Team passe.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'würde', role: 'verb' }, { text: 'gern', role: 'other' }, { text: 'Verantwortung', role: 'accusative' }, { text: 'übernehmen.', role: 'verb' }], en: 'I would like to take on responsibility.', fr: 'J’aimerais assumer des responsabilités.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'hätte', role: 'verb' }, { text: 'noch', role: 'other' }, { text: 'eine Frage.', role: 'accusative' }], en: 'I would have one more question.', fr: 'J’aurais encore une question.' },
      ],
      contrast: {
        a: { label: 'Too direct', labelFr: 'Trop direct', note: 'ich will', noteFr: 'ich will', examples: [g('Ich will mehr Geld.', 'I want more money.', 'Je veux plus d’argent.'), g('Ich will über das Gehalt sprechen.', 'I want to talk about salary.', 'Je veux parler du salaire.')] },
        b: { label: 'Polite and confident', labelFr: 'Poli et assuré', note: 'Konjunktiv II', noteFr: 'Konjunktiv II', examples: [g('Ich würde gern über das Gehalt sprechen.', 'I would like to talk about the salary.', 'J’aimerais parler du salaire.'), g('Ich würde gern mehr Verantwortung übernehmen.', 'I would like to take on more responsibility.', 'J’aimerais assumer plus de responsabilités.')] },
      },
      examples: [
        g('Ich würde gern mehr Verantwortung übernehmen.', 'I would like to take on more responsibility.', 'J’aimerais assumer plus de responsabilités.'),
        g('Eine Schwäche von mir ist Ungeduld, daran arbeite ich aber.', 'A weakness of mine is impatience, but I am working on it.', 'Une de mes faiblesses est l’impatience, mais j’y travaille.'),
        g('Meine größte Stärke ist Teamarbeit.', 'My greatest strength is teamwork.', 'Ma plus grande force est le travail d’équipe.'),
        g('Ich hätte noch eine Frage.', 'I would have one more question.', 'J’aurais encore une question.'),
        g('Ich würde gern über das Gehalt sprechen.', 'I would like to talk about the salary.', 'J’aimerais parler du salaire.'),
        g('Ich bin überzeugt, dass ich gut ins Team passe.', 'I am convinced that I fit well into the team.', 'Je suis convaincue que je m’intègre bien à l’équipe.'),
      ],
      mistakes: [
        { wrong: 'Ich will über das Gehalt reden.', right: 'Ich würde gern über das Gehalt sprechen.', why: 'ich will sounds too direct in an interview.', whyFr: 'ich will paraît trop direct en entretien.' },
        { wrong: 'Meine Schwäche ist Ungeduld.', right: 'Eine Schwäche von mir ist Ungeduld, daran arbeite ich aber.', why: 'Name it and show you work on it.', whyFr: 'Nomme-la et montre que tu y travailles.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l16-e1', prompt: 'Which sounds more polite in an interview?', promptFr: 'Laquelle est plus polie en entretien ?', options: ['Ich will mehr Gehalt.', 'Ich würde gern über das Gehalt sprechen.', 'Geben Sie mir mehr Geld.'], answer: 1, explain: 'Konjunktiv II softens requests.', explainFr: 'Le Konjunktiv II adoucit les demandes.', hint: 'Konjunktiv II', hintFr: 'Konjunktiv II' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l16-e3', prompt: 'Meine größte ___ ist Teamarbeit. (strength)', answer: 'Stärke', hint: 'die Stärke', hintFr: 'die Stärke' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l16-e5', tokens: ['gern', 'Ich', 'Verantwortung', 'würde', 'übernehmen'], answer: ['Ich', 'würde', 'gern', 'Verantwortung', 'übernehmen'], hint: 'würde + … + infinitive at the end.', hintFr: 'würde + … + infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l16-e9', prompt: 'How do you present a weakness well?', promptFr: 'Comment présenter un point faible correctement ?', options: ['Say "I have none."', 'Name it and say you are working on it.', 'Blame colleagues.'], answer: 1, explain: 'Honest and constructive.', explainFr: 'Honnête et constructif.', hint: 'honest + positive', hintFr: 'honnête + positif' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l16-e10', prompt: 'Listen. What happened?', promptFr: 'Écoute. Que s’est-il passé ?', audio: { ttsText: 'Ich habe meine Stelle gekündigt, weil ich mich verändern möchte.' }, options: ['He resigned', 'He was promoted', 'He retired'], optionsFr: ['Il a démissionné', 'Il a été promu', 'Il a pris sa retraite'], answer: 0, hint: 'kündigen = give notice.', hintFr: 'kündigen = démissionner.' } },

    { kind: 'pronunciation', focus: 'Long compound nouns carry the stress on the first part: "BEWERbung", "BERUFSerfahrung", "VORstellungsgespräch"', focusFr: 'Dans les longs mots composés, l’accent tombe sur le premier élément : « BEWERbung », « BERUFSerfahrung », « VORstellungsgespräch »', items: [{ id: 'b2l16-bewerbung-pron', german: 'Bewerbung', english: 'application', french: 'candidature', gender: null, syllables: ['be', 'WER', 'bung'], pronunciation: 'be-VER-boong', example: { de: 'Meine Bewerbung ist fertig.', en: 'My application is ready.', fr: 'Ma candidature est prête.' } }, { id: 'b2l16-zuverlaessig-pron', german: 'zuverlässig', english: 'reliable', french: 'fiable', gender: null, syllables: ['ZU', 'ver', 'läs', 'sig'], pronunciation: 'TSOO-fer-les-sikh', example: { de: 'Er ist zuverlässig.', en: 'He is reliable.', fr: 'Il est fiable.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **describe your qualifications** with confident facts and **conduct an interview** with polite **Konjunktiv II** (**ich würde gern …, ich hätte noch eine Frage**). 🎉',
      summaryFr: 'Tu sais maintenant **décrire tes qualifications** avec des faits assurés et **mener un entretien** avec un **Konjunktiv II** poli (**ich würde gern …, ich hätte noch eine Frage**). 🎉',
      card: { title: 'Job interview on one page', titleFr: 'L’entretien d’embauche en une page', sections: [
        { heading: 'Facts', headingFr: 'Faits', rows: [g('Ich habe … Jahre Erfahrung.', 'indicative', 'indicatif'), g('Ich bin für … verantwortlich.', 'indicative', 'indicatif')] },
        { heading: 'Polite', headingFr: 'Poli', rows: [g('Ich würde gern …', 'Konjunktiv II', 'Konjunktiv II'), g('Ich hätte noch eine Frage.', 'Konjunktiv II', 'Konjunktiv II')] },
        { heading: 'Weakness', headingFr: 'Faiblesse', rows: [g('…, daran arbeite ich aber.', 'honest + positive', 'honnête + positive')] },
      ] } },
  ],
};

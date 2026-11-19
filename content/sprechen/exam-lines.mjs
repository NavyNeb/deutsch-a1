// Spoken lines and task cards for the mock oral exam: the examiner, a scripted exam partner, planning tasks and
// discussion statements. Plain .mjs so scripts/prepare-audio.mjs can generate the audio.

export const EXAMINER = {
  welcome: 'Guten Tag. Mein Name ist Berger. Wir beginnen jetzt mit der mündlichen Prüfung.',
  prep: 'Sie haben jetzt Zeit, sich auf diesen Teil vorzubereiten.',
  begin: 'Bitte beginnen Sie.',
  thanks: 'Danke schön.',
  next: 'Danke. Wir kommen jetzt zum nächsten Teil.',
  end: 'Vielen Dank. Die Prüfung ist jetzt beendet.',
  introIntro: 'Zuerst möchte ich Sie etwas näher kennenlernen.',
  planIntro: 'In diesem Teil planen Sie gemeinsam mit Ihrem Partner etwas. Ihr Partner beginnt.',
  talkIntro: 'In diesem Teil halten Sie einen kurzen Vortrag zu Ihrem Thema.',
  questionsIntro: 'Ich habe noch einige Fragen zu Ihrem Vortrag.',
  feedbackIntro: 'Geben Sie Ihrem Partner bitte eine kurze Rückmeldung zu seiner Präsentation.',
  discussionIntro: 'In diesem Teil diskutieren Sie mit Ihrem Partner über die folgende Aussage.',
  yourTurn: 'Und was meinen Sie dazu?',
};

export const INTRO_QUESTIONS = [
  'Wie heißen Sie und woher kommen Sie?',
  'Was machen Sie beruflich, oder was lernen Sie?',
  'Was machen Sie gern in Ihrer Freizeit?',
  'Warum lernen Sie Deutsch, und wo möchten Sie die Sprache benutzen?',
  'Wo wohnen Sie jetzt, und wie gefällt es Ihnen dort?',
  'Erzählen Sie bitte etwas über Ihre Familie.',
];

export const FOLLOWUP_QUESTIONS = [
  'Wie ist das in Ihrem Heimatland?',
  'Welche Erfahrungen haben Sie persönlich damit gemacht?',
  'Glauben Sie, dass dieses Thema in Zukunft wichtiger wird?',
  'Welchen Rat würden Sie jungen Leuten dazu geben?',
  'Was ist für Sie der größte Vorteil, und was der größte Nachteil?',
  'Würden Sie etwas anders machen, wenn Sie noch einmal anfangen könnten?',
];

// Generic partner lines for a planning task: object, accept, fix the details, close. Each task adds its own opener.
export const PLAN_PARTNER = [
  'Hm, das ist eine Möglichkeit. Aber ich glaube, das ist ein bisschen schwierig. Hast du vielleicht einen anderen Vorschlag?',
  'Das klingt gut! Wann hast du Zeit? Passt es dir am Samstagnachmittag?',
  'Und wo treffen wir uns? Was müssen wir noch besorgen oder organisieren?',
  'Prima, dann ist alles geplant. Ich freue mich schon. Bis bald!',
];

export const PLAN_SCENARIOS = [
  { id: 'pl1', level: 'B1', title: 'Eine Geburtstagsparty für eine Freundin', task: 'Eine gemeinsame Freundin hat bald Geburtstag. Sie möchten eine Überraschungsparty organisieren. Besprechen Sie, was Sie tun müssen.', points: ['Ort und Zeit', 'Einladungen', 'Essen und Getränke', 'Geschenk'], opener: 'Hallo! Unsere Freundin hat bald Geburtstag. Ich habe eine Idee: Wir könnten eine Überraschungsparty bei mir zu Hause machen. Was meinst du?' },
  { id: 'pl2', level: 'B1', title: 'Ein Ausflug mit der Deutschklasse', task: 'Ihre Deutschklasse möchte am Wochenende einen Ausflug machen. Planen Sie zusammen, wohin Sie fahren und was Sie unternehmen.', points: ['Ziel', 'Verkehrsmittel', 'Programm', 'Kosten'], opener: 'Hallo! Am Wochenende wollen wir als Klasse etwas zusammen machen. Ich schlage einen Ausflug an den See vor. Was hältst du davon?' },
  { id: 'pl3', level: 'B1', title: 'Umzug eines Freundes', task: 'Ein Freund zieht nächste Woche in eine neue Wohnung um. Sie wollen ihm helfen. Überlegen Sie gemeinsam, wer was macht.', points: ['Termin', 'Transport', 'Helfer', 'Essen für alle'], opener: 'Hallo! Unser Freund zieht um und braucht Hilfe. Ich könnte einen Transporter mieten. Was meinst du?' },
  { id: 'pl4', level: 'B1', title: 'Ein gemeinsamer Kochabend', task: 'Sie und Ihre Kollegen möchten einen internationalen Kochabend machen. Besprechen Sie die Planung.', points: ['Wer kocht was', 'Einkaufen', 'Ort', 'Uhrzeit'], opener: 'Hallo! Ich würde gern einen Kochabend mit allen Kollegen machen. Jeder bringt ein Gericht aus seiner Heimat mit. Wie findest du das?' },
  { id: 'pl5', level: 'B1', title: 'Sport im Park', task: 'Sie möchten mit Freunden regelmäßig Sport machen. Planen Sie, was, wann und wo.', points: ['Sportart', 'Tage und Uhrzeit', 'Ort', 'Ausrüstung'], opener: 'Hallo! Ich möchte wieder mehr Sport machen. Wie wäre es, wenn wir zweimal pro Woche im Park joggen? Was denkst du?' },
  { id: 'pl6', level: 'B2', title: 'Ein Straßenfest in der Nachbarschaft', task: 'In Ihrer Nachbarschaft soll ein Straßenfest stattfinden. Sie gehören zum Organisationsteam. Entscheiden Sie gemeinsam über die wichtigsten Punkte und finden Sie Kompromisse.', points: ['Genehmigung und Kosten', 'Programm', 'Helfer', 'Lärm und Müll'], opener: 'Guten Tag! Für das Straßenfest sehe ich vor allem ein Problem: das Geld. Ich würde vorschlagen, dass jeder Nachbar einen kleinen Beitrag zahlt. Wie sehen Sie das?' },
  { id: 'pl7', level: 'B2', title: 'Eine Weiterbildung im Team', task: 'Ihre Firma bietet eine Weiterbildung an. Sie und Ihr Kollege sollen gemeinsam einen Vorschlag machen, welche Kurse sich lohnen.', points: ['Kurse und Inhalte', 'Zeit und Kosten', 'Nutzen für die Firma', 'Wer nimmt teil'], opener: 'Guten Tag! Ich finde, wir sollten einen Sprachkurs anbieten, weil wir viele internationale Kunden haben. Was ist Ihre Meinung dazu?' },
  { id: 'pl8', level: 'B2', title: 'Ein Klassentreffen organisieren', task: 'Zehn Jahre nach dem Schulabschluss soll ein Klassentreffen stattfinden. Planen Sie die wichtigsten Punkte gemeinsam.', points: ['Ort und Datum', 'Einladung aller Ehemaligen', 'Programm', 'Budget'], opener: 'Hallo! Das Klassentreffen soll etwas Besonderes werden. Ich dachte an ein Restaurant mit einem großen Saal. Wie stehst du dazu?' },
];

export const DISCUSSION_CLOSE = [
  'Interessant. Können Sie das mit einem Beispiel erklären?',
  'Ich bin nicht ganz überzeugt. Gibt es nicht auch Nachteile, die man bedenken muss?',
  'Gut, da haben Sie einen Punkt. Aber was ist mit den Kosten und dem Aufwand?',
  'Danke für die Diskussion. Wir sind vielleicht nicht in allem einer Meinung, aber ich habe einiges mitgenommen.',
];

export const DISCUSSION_STATEMENTS = [
  { id: 'ds1', level: 'B2', statement: 'Homeoffice sollte für alle Beschäftigten ein Recht sein.', againstOpener: 'Ich sehe das anders. Wer zu Hause arbeitet, verliert den Kontakt zu den Kollegen, und die Teamarbeit leidet darunter.', forOpener: 'Da stimme ich zu. Das Homeoffice spart Zeit und Geld, und viele können konzentrierter arbeiten.' },
  { id: 'ds2', level: 'B2', statement: 'Fleisch sollte deutlich teurer werden.', againstOpener: 'Das finde ich unfair. Gerade Familien mit wenig Geld würden darunter leiden.', forOpener: 'Das sehe ich genauso. Der Preis muss die Folgen für Umwelt und Tiere zeigen.' },
  { id: 'ds3', level: 'B2', statement: 'Kinder sollten erst ab 14 Jahren ein eigenes Smartphone haben.', againstOpener: 'Ich halte das für unrealistisch. Ohne Handy sind Jugendliche in der Gruppe schnell ausgeschlossen.', forOpener: 'Da haben Sie recht. Kleine Kinder können die Risiken im Netz noch nicht einschätzen.' },
  { id: 'ds4', level: 'B2', statement: 'In Innenstädten sollten keine Privatautos mehr fahren dürfen.', againstOpener: 'Das geht zu weit. Viele Menschen, zum Beispiel Ältere, sind auf das Auto angewiesen.', forOpener: 'Genau. Weniger Autos bedeuten saubere Luft, weniger Lärm und mehr Platz für Menschen.' },
  { id: 'ds5', level: 'B2', statement: 'Ein Studium ist wichtiger als eine Berufsausbildung.', againstOpener: 'Das stimmt nicht. Gute Handwerker werden dringend gebraucht, und sie verdienen oft auch gut.', forOpener: 'Das sehe ich auch so. Mit einem Studium hat man langfristig bessere Aufstiegschancen.' },
  { id: 'ds6', level: 'B2', statement: 'Soziale Medien machen die Menschen einsamer.', againstOpener: 'Das glaube ich nicht. Viele halten über das Internet Kontakt zu Familie und Freunden im Ausland.', forOpener: 'Da ist etwas dran. Echte Gespräche werden oft durch Nachrichten ersetzt.' },
  { id: 'ds7', level: 'B2', statement: 'Jeder junge Mensch sollte ein soziales Jahr machen müssen.', againstOpener: 'Eine Pflicht passt nicht zu einer freien Gesellschaft. Engagement sollte freiwillig sein.', forOpener: 'Das finde ich gut. So lernen junge Leute Verantwortung und andere Lebenswelten kennen.' },
  { id: 'ds8', level: 'B2', statement: 'Der Urlaub im eigenen Land ist besser für die Umwelt und für die Region.', againstOpener: 'Ich sehe das anders. Reisen ins Ausland öffnen den Horizont, und viele Länder leben vom Tourismus.', forOpener: 'Da stimme ich zu. Kurze Wege sparen Energie, und das Geld bleibt in der Region.' },
];

import type { Board, ExamLevel } from './types';

export type PartKind = 'trueFalse' | 'multipleChoice' | 'matching';

export type LesenFormat = { teil: number; kind: PartKind; items: number; what: string };

export type ExamFormat = {
  name: string;
  lesen: { minutes: number; parts: LesenFormat[] };
  schreiben: { minutes: number; tasks: { teil: number; kind: 'form' | 'message'; words?: string; what: string }[] };
  sprechen: { minutes: number; pair: boolean; parts: { teil: number; what: string }[] };
  passPercent: number;
  // false = reconstructed from secondary sources; the UI shows a softer disclaimer.
  verified: boolean;
};

// Structure the practice sets are modelled on (original content, not official papers).
export const FORMATS: Record<Board, Record<ExamLevel, ExamFormat>> = {
  goethe: {
    A1: {
      name: 'Goethe-Zertifikat A1: Start Deutsch 1',
      lesen: { minutes: 25, parts: [
        { teil: 1, kind: 'trueFalse', items: 5, what: 'Kurze E-Mails oder Notizen' },
        { teil: 2, kind: 'multipleChoice', items: 5, what: 'Anzeigen: Wo finden Sie die Information? (a oder b)' },
        { teil: 3, kind: 'trueFalse', items: 5, what: 'Schilder und Hinweise' },
      ] },
      schreiben: { minutes: 20, tasks: [
        { teil: 1, kind: 'form', what: 'Formular ausfüllen' },
        { teil: 2, kind: 'message', words: '≈ 30', what: 'Kurze Nachricht' },
      ] },
      sprechen: { minutes: 15, pair: true, parts: [
        { teil: 1, what: 'Sich vorstellen' },
        { teil: 2, what: 'Um Informationen bitten und Informationen geben' },
        { teil: 3, what: 'Bitten formulieren und darauf reagieren' },
      ] },
      passPercent: 60, verified: true,
    },
    A2: {
      name: 'Goethe-Zertifikat A2',
      lesen: { minutes: 30, parts: [
        { teil: 1, kind: 'multipleChoice', items: 5, what: 'Zeitungs- oder Medientext' },
        { teil: 2, kind: 'multipleChoice', items: 5, what: 'Informationstafel oder Programm' },
        { teil: 3, kind: 'multipleChoice', items: 5, what: 'E-Mail oder Korrespondenz' },
        { teil: 4, kind: 'matching', items: 5, what: 'Anzeigen (ein Text bleibt übrig, x = keine Anzeige passt)' },
      ] },
      schreiben: { minutes: 30, tasks: [
        { teil: 1, kind: 'message', words: '20–30', what: 'SMS an einen Freund (3 Leitpunkte)' },
        { teil: 2, kind: 'message', words: '30–40', what: 'Halbformelle E-Mail (3 Leitpunkte)' },
      ] },
      sprechen: { minutes: 15, pair: true, parts: [
        { teil: 1, what: 'Fragen zur Person (Stichwortkarten)' },
        { teil: 2, what: 'Von sich erzählen' },
        { teil: 3, what: 'Gemeinsam etwas planen' },
      ] },
      passPercent: 60, verified: true,
    },
    B1: {
      name: 'Goethe-Zertifikat B1',
      lesen: { minutes: 65, parts: [
        { teil: 1, kind: 'trueFalse', items: 6, what: 'Blog oder Bericht' },
        { teil: 2, kind: 'multipleChoice', items: 6, what: 'Zeitungsartikel' },
        { teil: 3, kind: 'matching', items: 7, what: 'Anzeigen' },
        { teil: 4, kind: 'trueFalse', items: 7, what: 'Meinungen (Ja/Nein)' },
        { teil: 5, kind: 'multipleChoice', items: 4, what: 'Regeln und Bedingungen' },
      ] },
      schreiben: { minutes: 60, tasks: [
        { teil: 1, kind: 'message', words: '≈ 80', what: 'Persönliche E-Mail' },
        { teil: 2, kind: 'message', words: '≈ 80', what: 'Diskussionsbeitrag' },
        { teil: 3, kind: 'message', words: '≈ 40', what: 'Formelle E-Mail' },
      ] },
      sprechen: { minutes: 15, pair: true, parts: [
        { teil: 1, what: 'Gemeinsam etwas planen' },
        { teil: 2, what: 'Ein Thema präsentieren' },
        { teil: 3, what: 'Fragen stellen und reagieren' },
      ] },
      passPercent: 60, verified: true,
    },
  },
  telc: {
    A1: {
      name: 'telc Deutsch A1 (Start Deutsch 1)',
      lesen: { minutes: 25, parts: [
        { teil: 1, kind: 'trueFalse', items: 5, what: 'Kurze E-Mails und Notizen' },
        { teil: 2, kind: 'multipleChoice', items: 5, what: 'Anzeigen: Welche Anzeige ist interessant für Sie? (a oder b)' },
        { teil: 3, kind: 'trueFalse', items: 5, what: 'Schilder, Hinweise und kurze Texte' },
      ] },
      schreiben: { minutes: 20, tasks: [
        { teil: 1, kind: 'form', what: 'Formular ausfüllen (5 Angaben)' },
        { teil: 2, kind: 'message', words: '≈ 30', what: 'Kurze Nachricht oder Brief (3 Leitpunkte)' },
      ] },
      sprechen: { minutes: 15, pair: false, parts: [
        { teil: 1, what: 'Sich vorstellen' },
        { teil: 2, what: 'Um Informationen bitten und Informationen geben' },
        { teil: 3, what: 'Bitten formulieren und darauf reagieren' },
      ] },
      passPercent: 60, verified: true,
    },
    A2: {
      name: 'telc Deutsch A2 (Start Deutsch 2)',
      lesen: { minutes: 30, parts: [
        { teil: 1, kind: 'multipleChoice', items: 5, what: 'Hinweise und Informationen (a, b oder c)' },
        { teil: 2, kind: 'trueFalse', items: 5, what: 'Ein Text (richtig/falsch)' },
        { teil: 3, kind: 'matching', items: 5, what: 'Situationen und Anzeigen a–h (x = keine Anzeige passt)' },
      ] },
      schreiben: { minutes: 20, tasks: [
        { teil: 1, kind: 'form', what: 'Formular ausfüllen (5 Angaben)' },
        { teil: 2, kind: 'message', words: '≈ 40', what: 'Privater Brief: drei von vier Punkten wählen' },
      ] },
      sprechen: { minutes: 15, pair: true, parts: [
        { teil: 1, what: 'Sich vorstellen' },
        { teil: 2, what: 'Ein Alltagsgespräch führen' },
        { teil: 3, what: 'Etwas aushandeln' },
      ] },
      passPercent: 60, verified: true,
    },
    B1: {
      name: 'telc Deutsch B1 (Zertifikat Deutsch)',
      lesen: { minutes: 90, parts: [
        { teil: 1, kind: 'matching', items: 5, what: 'Leseverstehen: Überschriften a–j zu fünf Texten' },
        { teil: 2, kind: 'multipleChoice', items: 5, what: 'Leseverstehen: ein längerer Text' },
        { teil: 3, kind: 'matching', items: 10, what: 'Leseverstehen: zehn Situationen, zwölf Anzeigen (x = keine passt)' },
        { teil: 4, kind: 'multipleChoice', items: 10, what: 'Sprachbausteine 1: Grammatik (Lücken 21–30)' },
        { teil: 5, kind: 'matching', items: 10, what: 'Sprachbausteine 2: Wortschatz, 15 Wörter für 10 Lücken (31–40)' },
      ] },
      schreiben: { minutes: 30, tasks: [
        { teil: 1, kind: 'message', words: '≈ 100', what: 'E-Mail als Antwort auf eine Nachricht (4 Leitpunkte)' },
      ] },
      sprechen: { minutes: 15, pair: true, parts: [
        { teil: 1, what: 'Einander kennenlernen' },
        { teil: 2, what: 'Über ein Thema sprechen' },
        { teil: 3, what: 'Gemeinsam etwas planen' },
      ] },
      passPercent: 60, verified: true,
    },
  },
};

export const BOARD_LABEL: Record<Board, string> = { goethe: 'Goethe', telc: 'telc' };
export const EXAM_LEVELS: ExamLevel[] = ['A1', 'A2', 'B1'];
export const BOARDS: Board[] = ['goethe', 'telc'];

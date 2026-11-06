import type { L } from './kumpel-copy';

export type TourStopId = 'continue' | 'goal' | 'nav' | 'search' | 'kumpel';

export type TourStop = {
  id: TourStopId;
  /** The `data-kumpel` value of the element this stop spotlights. */
  target: string;
  /** The German headline on the step card. */
  de: string;
  /** A plain gloss of the headline in the interface language. */
  title: L;
  body: L;
};

export const TOUR_STOPS: TourStop[] = [
  {
    id: 'continue', target: 'continue', de: 'Weiter',
    title: { en: 'Continue', fr: 'Continuer' },
    body: {
      en: 'This card always holds your next lesson. One tap and you are back where you stopped.',
      fr: 'Cette carte contient toujours ta prochaine leçon. Un seul geste et tu reprends où tu t’étais arrêté.',
    },
  },
  {
    id: 'goal', target: 'goal', de: 'Tagesziel',
    title: { en: 'Daily goal', fr: 'Objectif du jour' },
    body: {
      en: 'The ring fills as you earn XP. Fill it and you have met today’s goal.',
      fr: 'L’anneau se remplit quand tu gagnes de l’XP. Remplis-le et ton objectif du jour est atteint.',
    },
  },
  {
    id: 'nav', target: 'nav', de: 'Navigation',
    title: { en: 'Navigation', fr: 'Navigation' },
    body: {
      en: 'Heute, Weg, Üben, Bibliothek and Du. Every part of the app is one tap away.',
      fr: 'Heute, Weg, Üben, Bibliothek et Du. Chaque partie de l’appli est à un geste.',
    },
  },
  {
    id: 'search', target: 'search', de: 'Suche',
    title: { en: 'Search', fr: 'Recherche' },
    body: {
      en: 'Press ⌘K or the / key to find any word, lesson or page. Recent searches wait here.',
      fr: 'Appuie sur ⌘K ou sur la touche / pour trouver un mot, une leçon ou une page. Tes recherches récentes sont ici.',
    },
  },
  {
    id: 'kumpel', target: 'kumpel', de: 'Kumpel',
    title: { en: 'Your buddy', fr: 'Ton compagnon' },
    body: {
      en: 'That is me. Tap me on any page to see how it works, or to take this tour again.',
      fr: 'C’est moi. Touche-moi sur n’importe quelle page pour voir comment elle fonctionne, ou pour refaire cette visite.',
    },
  },
];

/** Keeps the stops whose target is actually on screen right now (the phone has no search button). */
export function availableStops(isPresent: (target: string) => boolean): TourStop[] {
  return TOUR_STOPS.filter((s) => isPresent(s.target));
}

export const stopLabel = (index: number, total: number): string => `Station ${index + 1} von ${total}`;

export const lastStop = (index: number, total: number): boolean => index >= total - 1;

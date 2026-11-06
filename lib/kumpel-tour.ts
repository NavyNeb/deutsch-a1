import { PAGE_HELP, type L } from './kumpel-copy';
import type { PageGroupId } from './kumpel-pages';

export type TourStop = {
  id: string;
  /** The `data-kumpel` value of the element this stop spotlights; null for a stop that is a centred card. */
  target: string | null;
  /** The headline on the step card: German where the page uses a German label, otherwise a short gloss. */
  title: L;
  body: L;
  /** App-tour stops that only make sense when their target is on screen (the phone has no search button). */
  skipIfMissing?: boolean;
};

export type TourScope = 'page' | 'app';

const same = (s: string): L => ({ en: s, fr: s });

/** The first-time tour of the app's shell, started by the hello and by Settings. It always runs on Heute. */
export const TOUR_STOPS: TourStop[] = [
  {
    id: 'continue', target: 'continue', skipIfMissing: true, title: same('Weiter'),
    body: {
      en: 'This card always holds your next lesson. One tap and you are back where you stopped.',
      fr: 'Cette carte contient toujours ta prochaine leçon. Un seul geste et tu reprends où tu t’étais arrêté.',
    },
  },
  {
    id: 'goal', target: 'goal', skipIfMissing: true, title: same('Tagesziel'),
    body: {
      en: 'The ring fills as you earn XP. Fill it and you have met today’s goal.',
      fr: 'L’anneau se remplit quand tu gagnes de l’XP. Remplis-le et ton objectif du jour est atteint.',
    },
  },
  {
    id: 'nav', target: 'nav', skipIfMissing: true, title: same('Navigation'),
    body: {
      en: 'Heute, Weg, Üben, Bibliothek and Du. Every part of the app is one tap away.',
      fr: 'Heute, Weg, Üben, Bibliothek et Du. Chaque partie de l’appli est à un geste.',
    },
  },
  {
    id: 'search', target: 'search', skipIfMissing: true, title: same('Suche'),
    body: {
      en: 'Press ⌘K or the / key to find any word, lesson or page. Recent searches wait here.',
      fr: 'Appuie sur ⌘K ou sur la touche / pour trouver un mot, une leçon ou une page. Tes recherches récentes sont ici.',
    },
  },
  {
    id: 'kumpel', target: 'kumpel', skipIfMissing: true, title: same('Kumpel'),
    body: {
      en: 'That is me. Tap me on any page to see how it works, or to take its tour.',
      fr: 'C’est moi. Touche-moi sur n’importe quelle page pour voir comment elle fonctionne, ou pour faire sa visite.',
    },
  },
];

/**
 * The stops to walk. A page tour is the page's own guide, so the help panel and the tour never disagree;
 * the app tour is the shell tour above. Both start from the learner's current page except the app tour, which goes to Heute.
 */
export function tourFor(group: PageGroupId, scope: TourScope): TourStop[] {
  if (scope === 'app') return TOUR_STOPS;
  return PAGE_HELP[group].steps.map((s, i) => ({
    id: `${group}-${i}`,
    target: s.target ?? null,
    title: s.title,
    body: s.text,
  }));
}

/**
 * Keeps the stops worth showing right now. A stop with no anchor is always kept, and so is a page stop whose
 * anchor is not on screen (it shows as a centred card, so its explanation is not lost); only app-tour stops
 * marked `skipIfMissing` are dropped when their target is absent or hidden.
 */
export function availableStops(stops: TourStop[], isPresent: (target: string) => boolean): TourStop[] {
  return stops.filter((s) => s.target === null || isPresent(s.target) || !s.skipIfMissing);
}

export const stopLabel = (index: number, total: number): string => `Station ${index + 1} von ${total}`;

export const lastStop = (index: number, total: number): boolean => index >= total - 1;

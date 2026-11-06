import { describe, expect, it } from 'vitest';
import { PAGE_GROUPS } from './kumpel-pages';
import { PAGE_HELP } from './kumpel-copy';
import { TOUR_STOPS, availableStops, lastStop, stopLabel, tourFor } from './kumpel-tour';

describe('the app tour', () => {
  it('has the five stops in spec order', () => {
    expect(TOUR_STOPS.map((s) => s.id)).toEqual(['continue', 'goal', 'nav', 'search', 'kumpel']);
  });

  it('every stop targets its own id and has EN/FR copy without exclamation marks', () => {
    for (const s of TOUR_STOPS) {
      expect(s.target).toBe(s.id);
      for (const l of [s.title, s.body]) {
        expect(l.en.trim()).not.toBe('');
        expect(l.fr.trim()).not.toBe('');
        expect(l.en).not.toContain('!');
        expect(l.fr).not.toContain('!');
      }
    }
  });

  it('keeps every stop whose target is present', () => {
    expect(availableStops(TOUR_STOPS, () => true)).toHaveLength(5);
  });

  it('skips stops whose target is missing or hidden', () => {
    const stops = availableStops(TOUR_STOPS, (t) => t !== 'search');
    expect(stops).toHaveLength(4);
    expect(stops.map((s) => s.id)).not.toContain('search');
    expect(availableStops(TOUR_STOPS, () => false)).toEqual([]);
  });
});

describe('page tours', () => {
  it.each(PAGE_GROUPS)('%s tours exactly the steps its help panel lists', (g) => {
    const stops = tourFor(g, 'page');
    const steps = PAGE_HELP[g].steps;
    expect(stops).toHaveLength(steps.length);
    stops.forEach((stop, i) => {
      expect(stop.title).toEqual(steps[i].title);
      expect(stop.body).toEqual(steps[i].text);
      expect(stop.target).toBe(steps[i].target ?? null);
    });
  });

  it('a page tour on Heute is the Heute guide, not the shell tour', () => {
    expect(tourFor('today', 'page').map((s) => s.target)).toEqual(['continue', 'goal', 'due', 'wotd']);
  });

  it('the app scope is always the five-stop shell tour', () => {
    expect(tourFor('today', 'app')).toBe(TOUR_STOPS);
    expect(tourFor('exams', 'app')).toBe(TOUR_STOPS);
  });

  it('never drops a page step: with no anchor or a missing one it stays as a centred card', () => {
    const stops = tourFor('exams', 'page');
    expect(availableStops(stops, () => false)).toHaveLength(stops.length);
    const noAnchor = tourFor('games', 'page');
    expect(availableStops(noAnchor, () => false)).toHaveLength(noAnchor.length);
  });
});

describe('labels', () => {
  it('labels the station and detects the last one', () => {
    expect(stopLabel(1, 4)).toBe('Station 2 von 4');
    expect(lastStop(3, 4)).toBe(true);
    expect(lastStop(2, 4)).toBe(false);
  });
});

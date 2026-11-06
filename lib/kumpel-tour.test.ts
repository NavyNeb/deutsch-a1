import { describe, expect, it } from 'vitest';
import { TOUR_STOPS, availableStops, lastStop, stopLabel } from './kumpel-tour';

describe('tour stops', () => {
  it('has the five stops in spec order', () => {
    expect(TOUR_STOPS.map((s) => s.id)).toEqual(['continue', 'goal', 'nav', 'search', 'kumpel']);
  });

  it('every stop targets its own id and has EN/FR copy without exclamation marks', () => {
    for (const s of TOUR_STOPS) {
      expect(s.target).toBe(s.id);
      expect(s.de.trim()).not.toBe('');
      for (const l of [s.title, s.body]) {
        expect(l.en.trim()).not.toBe('');
        expect(l.fr.trim()).not.toBe('');
        expect(l.en).not.toContain('!');
        expect(l.fr).not.toContain('!');
      }
    }
  });

  it('keeps every stop whose target is present', () => {
    expect(availableStops(() => true)).toHaveLength(5);
  });

  it('skips stops whose target is missing or hidden', () => {
    const stops = availableStops((t) => t !== 'search');
    expect(stops).toHaveLength(4);
    expect(stops.map((s) => s.id)).not.toContain('search');
    expect(availableStops(() => false)).toEqual([]);
  });

  it('labels the station and detects the last one', () => {
    expect(stopLabel(1, 4)).toBe('Station 2 von 4');
    expect(lastStop(3, 4)).toBe(true);
    expect(lastStop(2, 4)).toBe(false);
  });
});

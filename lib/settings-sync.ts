import type { Settings } from './settings-store';
import { mergeKumpel } from './kumpel-store';

/**
 * What to apply locally when the account's settings arrive. Everything is the account's value except
 * Kumpel, which is reconciled (see `mergeKumpel`) so a recent local mute is not rolled back by an older copy.
 */
export function mergeCloudSettings(local: Settings, cloud: Partial<Settings>): Partial<Settings> {
  if (cloud.kumpel === undefined) return cloud;
  return { ...cloud, kumpel: { ...mergeKumpel(local.kumpel, cloud.kumpel) } };
}

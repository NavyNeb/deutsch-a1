import { describe, it, expect } from 'vitest';
import { AnatomyRoleSchema } from '@/content/types';
import { ROLE_META, anatomyText } from './anatomy-roles';

describe('anatomy roles', () => {
  it('has a colour and an EN and FR name for every role the schema allows', () => {
    for (const role of AnatomyRoleSchema.options) {
      const m = ROLE_META[role];
      expect(m.color).toMatch(/^var\(--/);
      if (role !== 'other') { expect(m.en).not.toBe(''); expect(m.fr).not.toBe(''); }
    }
  });
  it('never reuses the gender colours', () => {
    for (const m of Object.values(ROLE_META)) expect(m.color).not.toMatch(/--(der|die|das)/);
  });
  it('joins the parts into the sentence that is spoken', () => {
    expect(anatomyText([{ text: 'Heute' }, { text: 'lerne' }, { text: 'ich.' }])).toBe('Heute lerne ich.');
  });
});

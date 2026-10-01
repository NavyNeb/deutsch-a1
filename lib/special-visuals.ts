import type { SpecialGroup } from '@/content/types';

export const GROUP_BAND: Record<SpecialGroup, { grad: string; ink: string }> = {
  verbs: { grad: 'linear-gradient(135deg,#2B788B,#57A9BC)', ink: '#EAF6F9' },
  cases: { grad: 'linear-gradient(135deg,#3D6FB0,#7FA8DE)', ink: '#EAF1FB' },
  sentences: { grad: 'linear-gradient(135deg,#7A6BC4,#A99BE4)', ink: '#F0ECFB' },
  words: { grad: 'linear-gradient(135deg,#3E9E7E,#79C9A9)', ink: '#E9F7F1' },
  life: { grad: 'linear-gradient(135deg,#D9973B,#F4C271)', ink: '#FBF1DF' },
};

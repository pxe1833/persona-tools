import { skills } from '../data/p5r/skill_data';

export const useTraitData = trait => {
  return trait && skills[trait];
};

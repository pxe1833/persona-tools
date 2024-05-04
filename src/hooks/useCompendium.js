import { useSessionContext } from '../context/SessionContext';
import { getCompendium } from '../data/FusionCalculator';

export const useCompendium = () => {
  const { selectedGame } = useSessionContext();
  return getCompendium(selectedGame);
};

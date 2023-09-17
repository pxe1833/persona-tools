import { useSessionContext } from '../context/SessionContext';
import * as P5R from '../data/p5r/compendium';
import * as P5 from '../data/p5r/compendium';

export const useCompendium = () => {
  const { selectedGame } = useSessionContext();
  switch (selectedGame) {
    case 'p5':
      return P5.compendium;
    case 'p5r':
      return P5R.compendium;
    default:
      return {};
  }
};

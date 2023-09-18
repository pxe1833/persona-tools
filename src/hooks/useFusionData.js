import { useSessionContext } from '../context/SessionContext';
import * as P5 from '../data/p5/fusion_data';
import * as P5R from '../data/p5r/fusion_data';

export const useFusionData = () => {
  const { selectedGame } = useSessionContext();
  switch (selectedGame) {
    case 'p5':
      return P5;
    case 'p5r':
    default:
      return P5R;
  }
};

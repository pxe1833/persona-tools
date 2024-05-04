import { useMemo } from 'react';

import { FusionInfo } from './FusionInfo/FusionInfo';
import { useSessionContext } from '../../context/SessionContext';
import { personaeByPotentialFusions } from '../../data/FusionCalculator';

export const FusionTo = () => {
  const { selectedGame, selectedPersona } = useSessionContext();
  const baseFuseList = useMemo(
    () => {
      return selectedGame &&
        selectedPersona &&
        personaeByPotentialFusions[selectedGame][selectedPersona]?.sort((a, b) => a.material1.level - b.material1.level);
    }, [selectedGame, selectedPersona]
  );

  return <FusionInfo baseFuseList={baseFuseList} />;
};

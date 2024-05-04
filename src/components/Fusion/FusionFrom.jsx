import { useMemo } from 'react';

import { FusionInfo } from './FusionInfo/FusionInfo';
import { useSessionContext } from '../../context/SessionContext';
import { fuseAll } from '../../data/FusionCalculator';
import { useSelectedPersona } from '../../hooks/useSelectedPersona';

export const FusionFrom = () => {
  const { selectedGame } = useSessionContext();
  const { personaData } = useSelectedPersona();
  const baseFuseList = useMemo(
    () => {
      return personaData &&
        selectedGame &&
        fuseAll(personaData, selectedGame)
          .filter(res => res.material2 !== undefined)
          .sort((a, b) => a.material1.level - b.material1.level);
    }, [personaData, selectedGame]
  );

  return <FusionInfo from baseFuseList={baseFuseList} />;
};

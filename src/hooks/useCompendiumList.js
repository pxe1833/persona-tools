import { useMemo } from 'react';

import { useCompendium } from './useCompendium';

export const useCompendiumList = () => {
  const compendium = useCompendium();
  const personae = useMemo(() => {
    return Object.keys(compendium);
  }, [compendium]);
  return personae;
};

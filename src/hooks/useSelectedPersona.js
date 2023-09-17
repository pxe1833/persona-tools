import { useCompendium } from './useCompendium';
import { useSessionContext } from '../context/SessionContext';

export const useSelectedPersona = () => {
  const { selectedPersona } = useSessionContext();
  const compendium = useCompendium();
  return { personaName: selectedPersona, personaData: compendium[selectedPersona] };
};

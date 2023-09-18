import { useFusionData } from './useFusionData';
import { useSelectedPersona } from './useSelectedPersona';

export const useInheritanceData = () => {
  const { personaData } = useSelectedPersona();
  const { inheritanceTypes } = useFusionData();
  return { inheritanceType: personaData.inherits, inheritances: inheritanceTypes[personaData.inherits] };
};

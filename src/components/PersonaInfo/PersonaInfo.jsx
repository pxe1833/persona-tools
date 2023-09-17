import React from 'react';

import { useSelectedPersona } from '../../hooks/useSelectedPersona';

export const PersonaInfo = () => {
  const { personaData, personaName } = useSelectedPersona();
  return <p>{personaName}</p>;
};

import React from 'react';

import { AffinityChart } from './AffinityChart/AffinityChart';
import { InheritanceChart } from './InheritanceChart/InheritanceChart';
import { StatBar } from './StatBar/StatBar';
import { useSessionContext } from '../../context/SessionContext';
import { useSelectedPersona } from '../../hooks/useSelectedPersona';
import { useTraitData } from '../../hooks/useTraitData';

import './PersonaInfo.css';

export const PersonaInfo = () => {
  const { selectedGame } = useSessionContext();
  const { personaData, personaName } = useSelectedPersona();
  const traitData = useTraitData(personaData?.trait);

  return personaData
    ?
    <>
      <div className={`persona-info-container ${selectedGame}`}>
        <p className={`persona-info-name ${selectedGame}`}>{personaName}</p>
        <p><span className={`level ${selectedGame}`}>LV</span><span className={`hilight fs30 ${selectedGame}`}>{personaData.level}</span>&nbsp; ~ &nbsp;{personaData.arcana}</p>
        <hr className={selectedGame} />
        { personaData.trait && <p><span className={`hilight ${selectedGame}`}>{personaData.trait}:</span> {traitData.effect}</p> }
        <hr className={selectedGame} />
        <StatBar stat={'ST'} value={personaData.stats.st} />
        <StatBar stat={'MA'} value={personaData.stats.ma} />
        <StatBar stat={'EN'} value={personaData.stats.en} />
        <StatBar stat={'AG'} value={personaData.stats.ag} />
        <StatBar stat={'LU'} value={personaData.stats.lu} />
        <hr className={selectedGame} />
        <InheritanceChart />
        <hr className={selectedGame} />
        <AffinityChart />
      </div>
    </>
    : null;
};

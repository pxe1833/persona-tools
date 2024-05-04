import React from 'react';

import './AffinityChart.css';
import { AffinityTile } from './AffinityTile/AffinityTile';
import { useSelectedPersona } from '../../../hooks/useSelectedPersona';

export const AffinityChart = () => {
  const { personaData } = useSelectedPersona();
  return (
    <div>
      {Object.entries(personaData.affinities).map(affinity => {
        return <AffinityTile element={affinity[0]} affinity={affinity[1]} key={affinity[0]}></AffinityTile>;
      })}
    </div>
  );
};

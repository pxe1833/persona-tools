import React from 'react';

import { useSessionContext } from '../../../../context/SessionContext';

import './AffinityTile.css';

const mapElement = element => {
  switch (element) {
    case 'physical':
      return 'https://static.wikia.nocookie.net/megamitensei/images/c/c6/Melee_Icon_P5.png';
    case 'gun':
      return 'https://static.wikia.nocookie.net/megamitensei/images/d/d9/Ranged_Icon_P5.png';
    case 'fire':
      return 'https://static.wikia.nocookie.net/megamitensei/images/a/ac/Fire_Icon_P5.png';
    case 'ice':
      return 'https://static.wikia.nocookie.net/megamitensei/images/4/4e/Ice_Icon_P5.png';
    case 'wind':
      return 'https://static.wikia.nocookie.net/megamitensei/images/7/7d/Wind_Icon_P5.png';
    case 'electric':
      return 'https://static.wikia.nocookie.net/megamitensei/images/9/96/Elec_Icon_P5.png';
    case 'psychic':
      return 'https://static.wikia.nocookie.net/megamitensei/images/1/10/Psy_Icon_P5.png';
    case 'nuclear':
      return 'https://static.wikia.nocookie.net/megamitensei/images/1/12/Nuclear_Icon_P5.png';
    case 'curse':
      return 'https://static.wikia.nocookie.net/megamitensei/images/e/e6/Dark_Icon_P5.png';
    case 'bless':
      return 'https://static.wikia.nocookie.net/megamitensei/images/6/6d/Light_Icon_P5.png';
    default:
      return 'https://static.wikia.nocookie.net/megamitensei/images/c/c6/Melee_Icon_P5.png';
  }
};

const mapAffinity = affinity => {
  switch (affinity) {
    case 'rs':
      return 'Str';
    case 'rp':
      return 'Rpl';
    case 'ab':
      return 'Dr';
    case 'wk':
      return 'Wk';
    case 'nu':
      return 'Nul';
    default:
      return 'na';
  }
};

export const AffinityTile = ({ element, affinity }) => {
  const { selectedGame } = useSessionContext();
  const mappedAffinity = mapAffinity(affinity);
  return (
    <div className={`affinity-tile-outest ${selectedGame}`}>
      <div className={`affinity-tile-outer ${selectedGame}`}>
        <div className={`affinity-tile-inner ${selectedGame} ${affinity}`}>
          <img src={mapElement(element)} style={{ width: '48px' }} alt={`${element} damage icon`} />
        </div>
      </div>
      <div className={`affinity-text ${selectedGame} ${mappedAffinity}`}>{mappedAffinity}</div>
    </div>
  );
};

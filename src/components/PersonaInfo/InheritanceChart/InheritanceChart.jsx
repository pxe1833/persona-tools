import React from 'react';

import { useSessionContext } from '../../../context/SessionContext';
import { useInheritanceData } from '../../../hooks/useInheritanceData';

import './InheritanceChart.css';

export const InheritanceChart = () => {
  const { selectedGame } = useSessionContext();
  const { inheritances, inheritanceType } = useInheritanceData();
  return (
    <div className={'inheritance-container'}>
      <div className={'inheritance-header'}>
        Skill Inheritance: {inheritanceType}
      </div>
      <div className={'inheritance-cell'}>
        Phys: <span className={`${inheritances.physical ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.physical ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Gun: <span className={`${inheritances.gun ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.gun ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Fire: <span className={`${inheritances.fire ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.fire ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Ice: <span className={`${inheritances.ice ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.ice ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Wind: <span className={`${inheritances.wind ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.wind ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Elec: <span className={`${inheritances.electric ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.electric ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Psych: <span className={`${inheritances.psychic ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.psychic ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Nuke: <span className={`${inheritances.nuclear ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.nuclear ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Bless: <span className={`${inheritances.bless ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.bless ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Curse: <span className={`${inheritances.curse ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.curse ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Heal: <span className={`${inheritances.healing ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.healing ? '✓' : '✘'}</span>
      </div>
      <div className={'inheritance-cell'}>
        Ail: <span className={`${inheritances.ailment ? 'hilight' : 'invalid'} ${selectedGame}`}>{inheritances.ailment ? '✓' : '✘'}</span>
      </div>
    </div>
  );
};

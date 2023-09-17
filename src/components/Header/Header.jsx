import React from 'react';

import './Header.css';
import { useSessionContext } from '../../context/SessionContext';

export const Header = () => {
  const { selectedGame, selectedTool } = useSessionContext();
  return (
    <div className={`header-outer-container ${selectedGame}`}>
      <div className={`header-inner-container ${selectedGame}`}>
        <p className={`header-title ${selectedGame}`}>{ selectedTool === 'unselected' ? '' : selectedTool }</p>
      </div>
    </div>
  );
};

import React from 'react';

import './ToolContainer.css';
import { useSessionContext } from '../../context/SessionContext';

export const ToolContainer = ({ children }) => {
  const { selectedGame } = useSessionContext();
  return (
    <div className={`tool-container-outer ${selectedGame}`}>
      <div className={`tool-container-inner ${selectedGame}`}>
        {children}
      </div>
    </div>
  );
};

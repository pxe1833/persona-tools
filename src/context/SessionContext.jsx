import React, { createContext, useContext, useState } from 'react';

export const SessionContext = createContext();

export const SessionContextProvider = ({ children }) => {
  const [selectedGame, setSelectedGame] = useState('p5r');
  const [selectedPersona, setSelectedPersona] = useState('unselected');
  const [selectedTool, setSelectedTool] = useState('Fusion Calculator');

  return (
    <SessionContext.Provider value={{
      selectedGame,
      selectedPersona,
      selectedTool,
      setSelectedGame,
      setSelectedPersona,
      setSelectedTool
    }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionContext must be used within a SessionContextProvider');
  }
  return context;
};

import React from 'react';


import './StatBar.css';
import { useSessionContext } from '../../../context/SessionContext';

export const StatBar = ({ stat, value }) => {
  const { selectedGame } = useSessionContext();
  return (
    <div className={`stat-bar-outer ${selectedGame}`}>
      <span style={{ width: '25%' }}>{stat} {value}</span>
      <div className={`stat-bar ${selectedGame}`} style={{ width: `${value / 99 * 100 * 0.75}%` }} />
    </div>
  );
};

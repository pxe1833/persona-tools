import React from 'react';

import { useSessionContext } from '../../context/SessionContext';
import './Button.css';

const variants = ['alpha', 'beta', 'chi'];

const pickVariant = game => {
  return game.includes('p5') ? variants[Math.floor(Math.random() * variants.length)] : '';
};

export const Button = ({ copy, onClick, type, variantOverride, disabled } = { disabled: false }) => {
  const { selectedGame } = useSessionContext();
  const variant = variantOverride || pickVariant(selectedGame);
  return (
    <div className={`tool-button-outer ${selectedGame} ${variant}`}>
      <button type={type} onClick={onClick} className={`tool-button ${selectedGame} ${variant}`} disabled={disabled}>
        {copy}
      </button>
    </div>
  );
};

import React, { useState } from 'react';

import './TextInput.css';

export const TextInput = ({ id, labelText, options, placeholder, validate }) => {
  const [selectedGame] = useState('p5r');
  return (
    <div className={`search-wrapper ${selectedGame}`}>
      <label htmlFor={id} className={`search-label ${selectedGame}`}>{labelText}</label>
      <input type={'text'} id={id} className={`search-field ${selectedGame}`} placeholder={placeholder} onChange={e => { validate(e.target.value); }} />
    </div>
  );
};

import React, { useState } from 'react';

import { useSessionContext } from '../../context/SessionContext';
import { useCompendiumList } from '../../hooks/useCompendiumList';
import { Button } from '../Button/Button';
import { TextInput } from '../TextInput/TextInput';

import './Search.css';

export const Search = () => {
  const [isValid, setIsValid] = useState(false);
  const { setSelectedPersona } = useSessionContext();
  const validOptions = useCompendiumList();

  const validateInput = input => {
    setIsValid(
      Boolean(
        validOptions.find(
          persona => persona.localeCompare(input, undefined, { sensitivity: 'accent' }) === 0
        )
      )
    );
  };

  const formSubmit = e => {
    e.preventDefault();
    const casedPersona = validOptions.find(
      persona => persona.localeCompare(e.target[0].value, undefined, { sensitivity: 'accent' }) === 0
    );
    setSelectedPersona(casedPersona);
    e.target[0].value = '';
    setIsValid(false);
  };

  return (
    <div className={'search-container'}>
      <form onSubmit={formSubmit}>
        <TextInput id={'personaSearch'} placeholder={'Persona'} onChange={validateInput} />
        <Button copy={'Change Persona'} type={'submit'} disabled={!isValid} />
      </form>
    </div>
  );
};

import React from 'react';

import { useSessionContext } from '../../context/SessionContext';
import { Button } from '../Button/Button';
import './Nav.css';

export const Nav = () => {
  const { setSelectedGame, setSelectedTool } = useSessionContext();

  return (
    <div className={'nav-container'}>
      <Button
        onClick={() => { setSelectedGame('unselected'); setSelectedTool('unselected'); }} copy={'Games'} />
      <Button
        onClick={() => { setSelectedTool('unselected'); }} copy={'Tools'} />
    </div>
  );
};

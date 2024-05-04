import { useSessionContext } from '../../../context/SessionContext';

import './FusionLine.css';

export const FusionLine = ({ cost, persona1, persona2, clearInfo }) => {
  const { selectedGame, setSelectedPersona } = useSessionContext();

  return (
    <div className={`fusion-line ${selectedGame}`}>
      <div className={`fusion-line-item cost ${selectedGame}`}>
        ¥{cost}
      </div>
      <div className={`fusion-line-item mat ${selectedGame}`}>
        <p className={`fusion-line-item-nav ${selectedGame}`} onClick={() => {
          setSelectedPersona(persona1.name);
          clearInfo();
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}>{persona1.name}
        </p>&nbsp;&nbsp;
        <span className="fusion-line-extra-info">{`(${persona1.level} / ${persona1.arcana})`}</span>
      </div>
      <div className={`fusion-line-item mat ${selectedGame}`}>
        <p className={`fusion-line-item-nav ${selectedGame}`} onClick={() => {
          setSelectedPersona(persona2.name);
          clearInfo();
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}>{persona2.name}
        </p>&nbsp;&nbsp;
        <span className="fusion-line-extra-info">{`(${persona2.level} / ${persona2.arcana})`}</span>
      </div>
    </div>
  );
};

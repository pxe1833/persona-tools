import React, { useState } from 'react';

import { useSessionContext } from '../../../context/SessionContext';
import { Button } from '../../Button/Button';
import { TextInput } from '../../TextInput/TextInput';
import { FusionLine } from '../FusionLine/FusionLine';

import './FusionInfo.css';

export const FusionInfo = ({ from, baseFuseList }) => {
  const { selectedGame } = useSessionContext();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(undefined);

  const fuseList = query ?
    baseFuseList.filter(entry =>
      entry.material1.name.toLowerCase().includes(query) || entry.material2.name.toLowerCase().includes(query))
    : baseFuseList;

  return (
    <>
      <div className={`fusion-info-page-nav ${selectedGame}`}>
        Fusion {from ? 'From' : 'To'} This Persona ({fuseList?.length ?? 0} Recipes)
      </div>
      <hr className={selectedGame} />
      <TextInput id={'fusionFromFilter'} placeholder={'Filter Results'} onChange={e => setQuery(e)} />
      <hr className={selectedGame} />
      <div className={`fusion-info-page-nav ${selectedGame}`}>
        <div className={`fusion-line-item cost ${selectedGame}`}>COST</div>
        <div className={`fusion-line-item mat ${selectedGame}`}>{ from ? 'MATERIAL' : 'FIRST MATERIAL'}</div>
        <div className={`fusion-line-item mat ${selectedGame}`}>{ from ? 'RESULT' : 'SECOND MATERIAL'}</div>
      </div>
      {
        fuseList?.slice((page - 1) * 10, page * 10).map(fusion => {
          return <FusionLine
            cost={42069}
            persona1={fusion.material1}
            persona2={fusion.material2}
            clearInfo={() => { setPage(1); setQuery(undefined); }}
            key={`${fusion.material1.name}${fusion.material2.name}`} />;
        })
      }
      <div className={`fusion-info-page-nav ${selectedGame}`}>
        <div className={`fusion-info-page-count ${selectedGame}`}>
          <Button copy={'<'} onClick={() => setPage(page - 1)} disabled={page <= 1} />
        </div>
        <div className={`fusion-info-page-count ${selectedGame}`}>Page {fuseList && fuseList.length ? page : 0} of {Math.ceil((fuseList?.length ?? 0) / 10)}</div>
        <div className={`fusion-info-page-count ${selectedGame}`}>
          <Button copy={'>'} onClick={() => setPage(page + 1)} disabled={page >= Math.ceil((fuseList?.length ?? 0) / 10)} />
        </div>
      </div>
    </>
  );
};

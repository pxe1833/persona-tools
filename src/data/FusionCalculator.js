import * as P5C from './p5/compendium';
import * as P5FD from './p5/fusion_data';
import * as P5RC from './p5r/compendium';
import * as P5RFD from './p5r/fusion_data';

export const getCompendium = game => {
  switch (game) {
    case 'p5':
      return P5C.compendium;
    case 'p5r':
      return P5RC.compendium;
    default:
      return {};
  }
};

export const getFusionData = game => {
  switch (game) {
    case 'p5':
      return P5FD;
    case 'p5r':
      return P5RFD;
    default:
      return {};
  }
};

const personaeByArcanaAndLevel = {
  p5: (() => {
    const z = {};
    Object
      .keys(P5C.compendium)
      .forEach(persona => {
        if (persona.arcana in z) {
          z[persona.arcana].push(persona);
        } else {
          z[persona.arcana] = [persona];
        }
      });
    return z;
  })(),
  p5r: (() => {
    const z = {};
    Object
      .keys(P5RC.compendium)
      .forEach(persona => {
        if (persona.arcana in z) {
          z[persona.arcana].push(persona);
        } else {
          z[persona.arcana] = [persona];
        }
      });
    return z;
  })()
};

export const getArcanaPersonae = (game, arcana) => {
  if (!(arcana in personaeByArcanaAndLevel[game])) {
    personaeByArcanaAndLevel[game][arcana] = Object.values(getCompendium(game))
      .filter(persona => persona.arcana === arcana)
      .sort((p1, p2) => {
        return p1.level - p2.level;
      });
  }
  return personaeByArcanaAndLevel[game][arcana];
};

const normalFuse = (persona1, persona2, game) => {
  const fusionData = getFusionData(game);
  const specialPersonae = fusionData.advancedRecipes.map(specFuse => specFuse.result);

  const targetLevel = 1 + Math.floor((persona1.level + persona2.level) / 2);
  const targetArcana = fusionData.arcanaCombos[persona1.arcana][persona2.arcana];

  if (!targetArcana) return;

  const arcanaPersonae = getArcanaPersonae(game, targetArcana);

  if (persona1.arcana !== persona2.arcana) {
    for (let i = 0; i < arcanaPersonae.length; i++) {
      let persona = arcanaPersonae[i];
      if (persona.level >= targetLevel && !persona.rare && !specialPersonae.includes(persona.name)) {
        return persona;
      }
    }
  } else {
    for (let i = arcanaPersonae.length - 1; i >= 0; i--) {
      let persona = arcanaPersonae[i];
      if (persona.level <= targetLevel
        && !persona.rare
        && !specialPersonae.includes(persona.name)
        && persona.name !== persona1.name
        && persona.name !== persona2.name
      ) {
        return persona;
      }
    }
  }
};

const rareFuse = (basicPersona, rarePersona, game) => {
  const fusionData = getFusionData(game);
  const arcanaOffset = fusionData.rarePersonaArcanaOffsets[rarePersona.name][basicPersona.arcana];
  const arcanaPersonae = getArcanaPersonae(game, basicPersona.arcana);
  let offset = arcanaPersonae.indexOf(arcanaPersonae.find(p => p.name === basicPersona.name)) + arcanaOffset;

  let fusionResult = arcanaPersonae[offset];

  const specialPersonae = fusionData.advancedRecipes.map(specFuse => specFuse.result);
  while (fusionResult && (fusionResult.rare || specialPersonae.includes(fusionResult.name))) {
    fusionResult = arcanaPersonae[offset++];
  }

  return fusionResult;
};

const advancedFuse = (persona1, persona2, game) => {
  return getFusionData(game).advancedRecipes.find(
    recipe => recipe.sources.length === 2 && recipe.sources.includes(persona1.name) && recipe.sources.includes(persona2.name)
  );
};

export const fuse = (persona1, persona2, game) => {
  const specialResult = advancedFuse(persona1, persona2, game);
  if (specialResult) return specialResult;
  if ((persona1.rare || persona2.rare) && (!persona1.rare || !persona2.rare)) {
    return rareFuse(persona1.rare ? persona2 : persona1, persona2.rare ? persona2 : persona1, game);
  }
  return normalFuse(persona1, persona2, game);
};

export const fuseAll = (persona, game) => {
  const compendium = getCompendium(game);
  return Object.keys(compendium)
    .map(personaName => {
      if (persona.name !== personaName) {
        return { matname: personaName, material1: compendium[personaName], material2: fuse(persona, compendium[personaName], game) };
      } else { return { }; }
    });
};

const getPersonaeByPotentialFusions = (compendium, game) => {
  const z = {};
  const compCopy = JSON.parse(JSON.stringify(Object.values(compendium)));
  while (compCopy.length > 0) {
    const personaOuter = compCopy.pop();
    Object
      .values(compCopy)
      .forEach(personaInner => {
        if (personaOuter.name !== personaInner.name) {
          const res = fuse(personaOuter, personaInner, game);
          if (res) {
            const personaLow = personaOuter.level >= personaInner.level ? personaInner : personaOuter;
            const personaHigh = personaOuter.level >= personaInner.level ? personaOuter : personaInner;
            if (res.name in z) {
              z[res.name].push({
                material1: personaLow,
                material2: personaHigh
              });
            } else {
              z[res.name] = [{
                material1: personaLow,
                material2: personaHigh
              }];
            }
          }
        }
      });
  }
  return z;
};

export const personaeByPotentialFusions = {
  p5: getPersonaeByPotentialFusions(P5C.compendium, 'p5'),
  p5r: getPersonaeByPotentialFusions(P5RC.compendium, 'p5r')
};

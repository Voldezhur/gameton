//const garbageData = {"planetGarbage":{"2FvvP1":[[0,0],[1,0],[2,0],[0,1],[2,1],[2,2],[3,2]],"2FwFZJ":[[0,2],[0,1],[0,0],[1,2],[1,0]],"2FxGXv":[[0,3],[1,3],[2,3],[2,2],[2,1],[2,0],[3,2],[3,0]],"2FxcAi":[[0,0],[1,0],[2,0],[2,1],[3,1]],"2FxwM1":[[0,0],[1,0],[2,0],[3,0],[0,1],[2,1],[0,2],[0,3],[1,3],[2,3]],"2LRZzw":[[0,3],[1,3],[2,3],[2,2],[2,1],[2,0],[3,2],[3,0]],"2MstBS":[[0,2],[1,2],[1,1],[1,0],[2,2],[2,0]],"2PLX9y":[[0,1],[0,0],[1,1],[2,1],[2,0],[3,0]],"2PMY8b":[[0,2],[0,1],[1,1],[1,0],[2,1]],"2PMsJt":[[0,3],[0,2],[0,1],[1,3],[1,1],[1,0],[2,3],[2,1],[3,1],[3,0]],"2PNCVB":[[0,0],[1,0],[2,0],[3,0],[0,1],[3,1],[0,2],[1,2],[2,2],[1,3]],"2PNCwg":[[0,3],[0,2],[0,1],[0,0],[1,3],[2,3],[2,2],[2,1],[2,0],[3,3],[3,0]],"2PNY7y":[[0,3],[1,3],[1,2],[1,1],[1,0],[2,3],[2,1]],"2PNYaU":[[0,0],[1,0],[2,0],[2,1],[2,2],[3,2]],"2PNsq1":[[0,0],[1,0],[2,0],[3,0],[1,1],[3,1],[1,2]],"2PPD1J":[[0,0],[1,0],[2,0],[0,1],[2,1],[0,2],[2,2],[2,3]],"2PPDTo":[[0,0],[0,1],[1,1],[1,2],[2,2],[3,2],[3,3]],"2PPYe6":[[0,0],[1,0],[0,1],[0,2],[1,2],[2,2],[3,2],[2,3]],"2QpWHR":[[0,0],[1,0],[2,0]],"2QpWjv":[[0,0],[1,0],[2,0],[0,1],[0,2],[0,3],[1,3],[2,3]],"2QpqvD":[[0,0],[1,0],[2,0],[3,0],[0,1],[0,2],[1,2],[2,2],[1,3]],"2QprNi":[[0,3],[0,2],[0,1],[0,0],[1,2],[2,2],[2,1]],"2QqBZ1":[[0,3],[0,2],[0,1],[0,0],[1,3],[1,1],[2,3],[2,1],[2,0],[3,3],[3,0]],"2QqWjJ":[[0,2],[1,2],[1,1],[1,0],[2,0]],"2QqXG3":[[0,0],[0,1],[0,2],[1,2],[2,2],[3,2],[0,3]],"2QqrSL":[[0,0],[1,0],[2,0],[3,0],[0,1],[0,2],[1,2]],"2Qqrtq":[[0,0],[1,0],[2,0],[0,1],[2,1],[3,1],[0,2],[2,2]],"2QrC58":[[0,3],[1,3],[1,2],[1,1],[2,3],[3,3],[3,2],[3,1],[3,0]],"2QrXFR":[[0,0],[0,1],[1,1],[1,2]],"2QrXhv":[[0,3],[1,3],[1,2],[1,1],[1,0],[2,3],[2,0],[3,3],[3,2]],"2QrrtD":[[0,3],[0,2],[0,1],[0,0],[1,3],[2,3],[2,2],[3,2],[3,1]],"HryY":[[0,0],[1,0],[2,0]],"JYF8":[[0,0],[1,0],[1,1],[1,2],[2,2]]},"shipGarbage":null,"fuelDiff":18,"planetDiffs":[{"from":"Roob-43","to":"KDEKYVTB1","fuel":28}]}

function sortGarbageForCompartment(garbageData, compartmentRows, compartmentCols, compartmentStatus) {
  const compartment = Array.from({ length: compartmentRows }, () => Array.from({ length: compartmentCols }).fill(null));
  const filledCoordinates = [];

  const planetGarbage = garbageData.planetGarbage;

  const fillPercentage = compartmentStatus === 'empty' ? 0.3 : 0.05;

  const flattenCompartment = compartment.flat();
  let currentFillCount = flattenCompartment.filter(coord => coord !== null).length;
  let targetFillCount = Math.floor(flattenCompartment.length * fillPercentage);

  function hasDuplicateCoords(newGarbage, existingCoords) {
      for (let coord of newGarbage) {
          if (existingCoords.some(existingCoord => existingCoord[0] === coord[0] && existingCoord[1] === coord[1])) {
              return true;
          }
      }
      return false;
  }

  for (const key of Object.keys(planetGarbage)) {
      const shape = planetGarbage[key];

      if (currentFillCount < targetFillCount) {
          if (!hasDuplicateCoords(shape, filledCoordinates)) {
              const addedCoords = [];
              let canAdd = true;
              
              for (const coord of shape) {
                  const [x, y] = coord;

                  if (x < 0 || x >= compartmentRows || y < 0 || y >= compartmentCols || compartment[x][y] !== null) {
                      canAdd = false;
                      break;
                  } else {
                      addedCoords.push(coord);
                  }
              }

              if (canAdd) {
                  for (const coord of addedCoords) {
                      const [x, y] = coord;
                      compartment[x][y] = key;
                      filledCoordinates.push(`${key}: [${x},${y}]`);
                      currentFillCount++;
                  }
              }
          }
      } else {
          break;
      }
  }

  return filledCoordinates;
}

const garbageData = {"planetGarbage":{"2FvvP1":[[0,0],[1,0],[2,0],[0,1],[2,1],[2,2],[3,2]],"2FwFZJ":[[0,2],[0,1],[0,0],[1,2],[1,0]],"2FxGXv":[[0,3],[1,3],[2,3],[2,2],[2,1],[2,0],[3,2],[3,0]],"2FxcAi":[[0,0],[1,0],[2,0],[2,1],[3,1]],"2FxwM1":[[0,0],[1,0],[2,0],[3,0],[0,1],[2,1],[0,2],[0,3],[1,3],[2,3]],"2LRZzw":[[0,3],[1,3],[2,3],[2,2],[2,1],[2,0],[3,2],[3,0]],"2MstBS":[[0,2],[1,2],[1,1],[1,0],[2,2],[2,0]],"2PLX9y":[[0,1],[0,0],[1,1],[2,1],[2,0],[3,0]],"2PMY8b":[[0,2],[0,1],[1,1],[1,0],[2,1]],"2PMsJt":[[0,3],[0,2],[0,1],[1,3],[1,1],[1,0],[2,3],[2,1],[3,1],[3,0]],"2PNCVB":[[0,0],[1,0],[2,0],[3,0],[0,1],[3,1],[0,2],[1,2],[2,2],[1,3]],"2PNCwg":[[0,3],[0,2],[0,1],[0,0],[1,3],[2,3],[2,2],[2,1],[2,0],[3,3],[3,0]],"2PNY7y":[[0,3],[1,3],[1,2],[1,1],[1,0],[2,3],[2,1]],"2PNYaU":[[0,0],[1,0],[2,0],[2,1],[2,2],[3,2]],"2PNsq1":[[0,0],[1,0],[2,0],[3,0],[1,1],[3,1],[1,2]],"2PPD1J":[[0,0],[1,0],[2,0],[0,1],[2,1],[0,2],[2,2],[2,3]],"2PPDTo":[[0,0],[0,1],[1,1],[1,2],[2,2],[3,2],[3,3]],"2PPYe6":[[0,0],[1,0],[0,1],[0,2],[1,2],[2,2],[3,2],[2,3]],"2QpWHR":[[0,0],[1,0],[2,0]],"2QpWjv":[[0,0],[1,0],[2,0],[0,1],[0,2],[0,3],[1,3],[2,3]],"2QpqvD":[[0,0],[1,0],[2,0],[3,0],[0,1],[0,2],[1,2],[2,2],[1,3]],"2QprNi":[[0,3],[0,2],[0,1],[0,0],[1,2],[2,2],[2,1]],"2QqBZ1":[[0,3],[0,2],[0,1],[0,0],[1,3],[1,1],[2,3],[2,1],[2,0],[3,3],[3,0]],"2QqWjJ":[[0,2],[1,2],[1,1],[1,0],[2,0]],"2QqXG3":[[0,0],[0,1],[0,2],[1,2],[2,2],[3,2],[0,3]],"2QqrSL":[[0,0],[1,0],[2,0],[3,0],[0,1],[0,2],[1,2]],"2Qqrtq":[[0,0],[1,0],[2,0],[0,1],[2,1],[3,1],[0,2],[2,2]],"2QrC58":[[0,3],[1,3],[1,2],[1,1],[2,3],[3,3],[3,2],[3,1],[3,0]],"2QrXFR":[[0,0],[0,1],[1,1],[1,2]],"2QrXhv":[[0,3],[1,3],[1,2],[1,1],[1,0],[2,3],[2,0],[3,3],[3,2]],"2QrrtD":[[0,3],[0,2],[0,1],[0,0],[1,3],[2,3],[2,2],[3,2],[3,1]],"HryY":[[0,0],[1,0],[2,0]],"JYF8":[[0,0],[1,0],[1,1],[1,2],[2,2]]},"shipGarbage":null,"fuelDiff":18,"planetDiffs":[{"from":"Roob-43","to":"KDEKYVTB1","fuel":28}]}

const compartmentRows = 8;
const compartmentCols = 11;
const compartmentStatus = 'empty'; // 'empty' - для заполнения на 30%, 'non-empty' - для заполнения на 5%

const filledCoordinates = sortGarbageForCompartment(garbageData, compartmentRows, compartmentCols, compartmentStatus);
console.log(filledCoordinates);
// fetch('сервер/player/collect', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-Auth-Token': 'token'
//     },
//     body: JSON.stringify(dataToSend)
// }).then(response => {
//     console.log('Запрос успешно выполнен');
// }).catch(error => {
//     console.error('Произошла ошибка при запросе на сервер', error);
// });
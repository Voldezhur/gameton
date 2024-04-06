function fillCargoBayWithGarbage(garbageData, cargoBayCapacity) {
  // Проверяем наличие корабельного мусора
  if (!garbageData || !garbageData.planetGarbage) {
      return null;
  }

  const cargoBay = new Array(cargoBayCapacity).fill(null); // Создаем пустой отсек корабля

  const planetGarbage = Object.values(garbageData.planetGarbage);

  let fillPercentage = 0.3; // Начальный процент заполнения, если отсек пустой

  if (cargoBay.some(item => item !== null)) {
      fillPercentage = 0.05; // Процент заполнения, если отсек уже заполнен
  }

  let spacesToFill = Math.floor(cargoBayCapacity * fillPercentage); // Количество мест для заполнения в отсеке

  for (const shape of planetGarbage) {
      while (spacesToFill > 0) {
          const randomIndex = Math.floor(Math.random() * cargoBayCapacity);

          if (cargoBay[randomIndex] === null) {
              cargoBay[randomIndex] = shape;
              spacesToFill--;
              break;
          }
      }
  }

  return cargoBay;
}

const cargoBayCapacity = 8 * 11; // Размер отсека корабля
const garbageData = {"planetGarbage":{"2FvvP1":[[0,0],[1,0],[2,0],[0,1],[2,1],[2,2],[3,2]],"2FwFZJ":[[0,2],[0,1],[0,0],[1,2],[1,0]],"2FxGXv":[[0,3],[1,3],[2,3],[2,2],[2,1],[2,0],[3,2],[3,0]],"2FxcAi":[[0,0],[1,0],[2,0],[2,1],[3,1]],"2FxwM1":[[0,0],[1,0],[2,0],[3,0],[0,1],[2,1],[0,2],[0,3],[1,3],[2,3]],"2LRZzw":[[0,3],[1,3],[2,3],[2,2],[2,1],[2,0],[3,2],[3,0]],"2MstBS":[[0,2],[1,2],[1,1],[1,0],[2,2],[2,0]],"2PLX9y":[[0,1],[0,0],[1,1],[2,1],[2,0],[3,0]],"2PMY8b":[[0,2],[0,1],[1,1],[1,0],[2,1]],"2PMsJt":[[0,3],[0,2],[0,1],[1,3],[1,1],[1,0],[2,3],[2,1],[3,1],[3,0]],"2PNCVB":[[0,0],[1,0],[2,0],[3,0],[0,1],[3,1],[0,2],[1,2],[2,2],[1,3]],"2PNCwg":[[0,3],[0,2],[0,1],[0,0],[1,3],[2,3],[2,2],[2,1],[2,0],[3,3],[3,0]],"2PNY7y":[[0,3],[1,3],[1,2],[1,1],[1,0],[2,3],[2,1]],"2PNYaU":[[0,0],[1,0],[2,0],[2,1],[2,2],[3,2]],"2PNsq1":[[0,0],[1,0],[2,0],[3,0],[1,1],[3,1],[1,2]],"2PPD1J":[[0,0],[1,0],[2,0],[0,1],[2,1],[0,2],[2,2],[2,3]],"2PPDTo":[[0,0],[0,1],[1,1],[1,2],[2,2],[3,2],[3,3]],"2PPYe6":[[0,0],[1,0],[0,1],[0,2],[1,2],[2,2],[3,2],[2,3]],"2QpWHR":[[0,0],[1,0],[2,0]],"2QpWjv":[[0,0],[1,0],[2,0],[0,1],[0,2],[0,3],[1,3],[2,3]],"2QpqvD":[[0,0],[1,0],[2,0],[3,0],[0,1],[0,2],[1,2],[2,2],[1,3]],"2QprNi":[[0,3],[0,2],[0,1],[0,0],[1,2],[2,2],[2,1]],"2QqBZ1":[[0,3],[0,2],[0,1],[0,0],[1,3],[1,1],[2,3],[2,1],[2,0],[3,3],[3,0]],"2QqWjJ":[[0,2],[1,2],[1,1],[1,0],[2,0]],"2QqXG3":[[0,0],[0,1],[0,2],[1,2],[2,2],[3,2],[0,3]],"2QqrSL":[[0,0],[1,0],[2,0],[3,0],[0,1],[0,2],[1,2]],"2Qqrtq":[[0,0],[1,0],[2,0],[0,1],[2,1],[3,1],[0,2],[2,2]],"2QrC58":[[0,3],[1,3],[1,2],[1,1],[2,3],[3,3],[3,2],[3,1],[3,0]],"2QrXFR":[[0,0],[0,1],[1,1],[1,2]],"2QrXhv":[[0,3],[1,3],[1,2],[1,1],[1,0],[2,3],[2,0],[3,3],[3,2]],"2QrrtD":[[0,3],[0,2],[0,1],[0,0],[1,3],[2,3],[2,2],[3,2],[3,1]],"HryY":[[0,0],[1,0],[2,0]],"JYF8":[[0,0],[1,0],[1,1],[1,2],[2,2]]},"shipGarbage":null,"fuelDiff":18,"planetDiffs":[{"from":"Roob-43","to":"KDEKYVTB1","fuel":28}]}

const filledCargoBay = fillCargoBayWithGarbage(garbageData, cargoBayCapacity);
console.log(JSON.stringify(filledCargoBay))


const dataToSend = { "garbage": filledCargoBay };

// Здесь отправляем запрос на сервер
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
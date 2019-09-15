const getRandom = require('./get-random');
const arrayHasThisValue = require('./array-has-this-value');

// Get N random numbers from array of L
module.exports = function getRandomNumbers(indexCount, maxIndex) {

  let randomIndexesArray = [];

  if (indexCount > maxIndex) {
    throw new Error(':: getRandomNumbers : maxIndex should be bigger than count');
  }

  for (let i = 0; i < indexCount; i++) {
    let randomIndex = getRandom(0, maxIndex);
    if ( arrayHasThisValue(randomIndexesArray, randomIndex) ) {
      let nextIndex = randomIndex + 1 < maxIndex ? randomIndex : 0;
      let oneCycle = false;
      while (arrayHasThisValue(randomIndexesArray, nextIndex)) {
        // один раз цикл точно выполнится
        if (nextIndex + 1 < maxIndex) {
          nextIndex += 1;
        } else {
          nextIndex = 0;
          if (!oneCycle) {
            oneCycle = true;
          } else {
            break;
          }
        }
      }
      randomIndexesArray.push(nextIndex);
    } else {
      randomIndexesArray.push(randomIndex);
    }
  }

  return randomIndexesArray.sort(function(a, b) {
    return a - b;
  });
}

// Random number between min and max
module.exports = function getRandom(min = 5, max = 20) {
  return Math.floor(Math.random() * (max - min + 1) + min) ;
};

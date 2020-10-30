const domElements = require('./domElements');
const clickCell = require('./clickCell');

const gameboard = () => {
  domElements.cells.forEach((cell) => cell.addEventListener('click', clickCell, false));
  // it seems like we don't need to return anything
  // Rory thinks that the most crucial refactoring part of this is where are we calling gameboard.
  // return { clickCell };
};

module.exports = gameboard;
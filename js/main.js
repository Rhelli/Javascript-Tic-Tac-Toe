// PLAYERS - FACTORY FUNCTIONS
const Player = (name, symbol) => {
  chooseName = () => name;
  chooseSymbol = () => symbol;
  const sayName = function() {
    console.log(`Yo waddup, ma name is ${name}.`);
  };
  const saySymbol = function() {
    console.log(`Yo was happenin sun, ma gang symbols be ${symbol}.`);
  };
  return { sayName, saySymbol };
};


// GAMEBOARD - MODULE / IIFE
//const gameBoard = (function() {
//  let board = `
//  +-----+-----+-----+
//  |  ${}  |  ${}  |  ${}  |
//  +-----+-----+-----+
//  |  ${}  |  ${}  |  ${}  |
//  +-----+-----+-----+
//  |  ${}  |  ${}  |  ${}  |
//  +-----+-----+-----+
//  `
//})();

// DISPLAY CONTROLLER - MODULE

// GAME LOGIC - SUPER SRS SECTION

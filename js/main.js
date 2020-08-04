// PLAYERS - FACTORY FUNCTIONS
const Player = (name, symbol) => {
  chooseName = () => name;
  chooseSymbol = () => symbol;
  const addSymbol = (item,symbol) => { item.innerHTML = symbol }
  const sayName = function() {
    console.log(`Yo waddup, ma name is ${name}.`);
  };
  const saySymbol = function() {
    console.log(`Yo was happenin sun, ma gang symbols be ${symbol}.`);
  };
  return { sayName, saySymbol, addSymbol };
};


// GAMEBOARD - MODULE / IIFE
const gameBoard = (function() {
  let board = [
    ['O','X','O'],
    ['X','O','O'],
    ['X','O','X']]
    const getBoard = () => board
    return { getBoard }
})();

const displayController = (function(doc, player) {
  const boardContainer = doc.getElementById("gameboard");
  const childrens = boardContainer.childNodes;
  
  const addEvents = childrens.forEach(element => {
    element.addEventListener('click',() => {
      player.addSymbol(element,symbol);
    })
  });
  // const renderBoard = () => { boardContainer.innerHTML = gameBoard.getBoard.map(element => {
  //   ``
  // }) }
  return { addEvents }
})(document);

displayController.addEvents;

// DISPLAY CONTROLLER - MODULE

// GAME LOGIC - SUPER SRS SECTION

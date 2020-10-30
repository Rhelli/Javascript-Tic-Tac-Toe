const domElements = require('./domElements');
const game = require('./game');
const ifCellEmpty = require('./ifCellEmpty');

const clickCell = (event) => {
  if (domElements.namePlayerOne.value === '' && domElements.namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const symbol = game.currentPlayer.getSymbol();
    const img = game.currentPlayer.getImg();
    ifCellEmpty(event, symbol, img);
  }
};

module.exports = clickCell;

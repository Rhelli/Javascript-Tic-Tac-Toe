const domElements = require('./domElements');
const game = require('./game');
const clickCell = require('./clickCell');
const domManipulation = require('./domManipulation');
const choosePlayerIcon = require('./playerIcons');

const reset = () => {
  domElements.cells.forEach((element) => {
    element.addEventListener('click', clickCell, false);
    element.innerHTML = '';
    element.dataset.datasymbol = '';
    domManipulation.initialBackground(element);
    game.count = 1;
    domElements.roundCounter.innerHTML = 'Turn 1.';
    domElements.playerTurnIndicator.innerHTML = '';
    domElements.playerOneIcon.innerHTML = '';
    domElements.playerTwoIcon.innerHTML = '';
    domManipulation.disableBackground(game.currentPlayer.getBackground(), domElements.playerOneIcon);
    domManipulation.disableBackground(game.currentPlayer.getBackground(), domElements.playerTwoIcon);
    domElements.allIcons.forEach((element) => {
      element.addEventListener('click', choosePlayerIcon, false);
    });
    domManipulation.addForm();
  });
};

module.exports = reset;
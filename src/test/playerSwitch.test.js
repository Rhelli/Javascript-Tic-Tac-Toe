const { expect } = require('@jest/globals');
const { default: player } = require('../js/modules/player');
const { default: playerSwitch } = require('../js/modules/playerSwitch');

window.alert = jest.fn();
jest.mock('../js/modules/domManipulation', () => ({
  displayRounds: jest.fn(),
  oppositePlayer: jest.fn(),
}));

jest.mock('../js/modules/domElements', () => ({
  playerTurnIndicator: jest.fn(),
  oppositePlayer: jest.fn(),
}));

const cells = [];
jest.mock('../js/modules/updateBoard', () => ({
  updateBoardArray: jest.fn(cells),
}));

test("if there's no winner and the game hasn't ended it switchs current player and opposite player", () => {
  document.body.innerHTML = '<h3 id="turn-counter">No Turns Yet</h3>';

  const playerOne = player('Alex', 'X', 1, 'O', 'rgba(144, 164, 174, 0.8');
  const playerTwo = player('Rory', 'O', 2, 'x', 'rgba(241, 196, 15, 0.8');
  const currentPlayer = playerOne;
  const oppositePlayer = playerTwo;
  const count = 0;

  playerSwitch(currentPlayer,
    oppositePlayer, playerOne,
    playerTwo,
    count);
  expect(currentPlayer).toEqual(playerTwo);
});

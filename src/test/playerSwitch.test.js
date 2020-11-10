import updateBoardArray from '../js/modules/updateBoard';

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

//jest.mock('../js/modules/updateBoard.js', () => ({
//  updateBoardArray: jest.fn().mockImplementation(() => true),
//}));

//jest.mock('../js/modules/updateBoard', () => ({
//  default: () => ({
//    updateBoardArray: jest.fn()
//  }),
//}));

test("if there's no winner and the game hasn't ended it switchs current player and opposite player", () => {
  document.body.innerHTML = '<h3 id="turn-counter">No Turns Yet</h3>';
  const cells = 'div.#c-3 data-datasymbol="lol"';
  const playerOne = player('Alex', 'X', 1, 'O', 'rgba(144, 164, 174, 0.8');
  const playerTwo = player('Rory', 'O', 2, 'x', 'rgba(241, 196, 15, 0.8');
  const currentPlayer = playerOne;
  const oppositePlayer = playerTwo;
  const count = 0;
  playerSwitch(currentPlayer,
    oppositePlayer, playerOne,
    playerTwo,
    count,
    updateBoardArray,
    cells);
  expect(currentPlayer).toEqual(playerTwo);
});

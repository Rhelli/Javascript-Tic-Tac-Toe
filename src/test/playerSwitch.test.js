import updateBoardArray from '../js/modules/updateBoard';
import * as domManipulation from '../js/modules/domManipulation';

import reset from '../js/modules/reset';

const { default: player } = require('../js/modules/player');
const { default: playerSwitch } = require('../js/modules/playerSwitch');

window.alert = jest.fn();

domManipulation.displayRounds = jest.fn();
domManipulation.oppositePlayer = jest.fn();
domManipulation.disableBackground = jest.fn();
domManipulation.paintBackground = jest.fn();

jest.mock('../js/modules/domElements', () => ({
  playerTurnIndicator: jest.fn(),
  oppositePlayer: jest.fn(),
}));

const cells = document.querySelectorAll('.cells');
const playerOne = player('Alex', 'X', 1, 'O', 'rgba(144, 164, 174, 0.8');
const playerTwo = player('Rory', 'O', 2, 'x', 'rgba(241, 196, 15, 0.8');
const currentPlayer = playerOne;
const oppositePlayer = playerTwo;

test("if there's no winner and the game hasn't ended it switches current player and opposite player", () => {
  document.body.innerHTML = ` <div class="cells" data-datasymbol="A" id="c0">X</div> <div class="cells" data-datasymbol="A" id="c1">X</div> <div class="cells" data-datasymbol="A" id="c2">X</div> 
    <div class="cells" data-datasymbol="" id="c1"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c1"> </div> 
    <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> `;

  const count = 0;
  playerSwitch(
    currentPlayer,
    oppositePlayer,
    playerOne,
    playerTwo,
    count,
    updateBoardArray,
    cells,
  );
  expect(currentPlayer).toBe(playerOne);
});

test('when the game is over and nobody won, it expects a confirmation pop up to be called', () => {
  document.body.innerHTML = ` <div class="cells" data-datasymbol="A" id="c0">X</div> <div class="cells" data-datasymbol="A" id="c1">X</div> <div class="cells" data-datasymbol="A" id="c2">X</div> 
    <div class="cells" data-datasymbol="" id="c1"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c1"> </div> 
    <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> `;

  jest.mock('../js/modules/winningValidations', () => ({
    winningValidation: jest.fn(() => false),
  }));
  const formContainer = document.createElement('div');
  formContainer.style.display = 'block';
  window.localStorage = jest.fn();

  delete window.location;
  window.location = {
    reload: jest.fn(),
  };
  const count = 9;
  playerSwitch(
    currentPlayer,
    oppositePlayer,
    playerOne,
    playerTwo,
    count,
    updateBoardArray,
    cells,

    playerOne,
    playerTwo,
    count,
    updateBoardArray,
    cells,
  );
  window.confirm = jest.fn(() => true);
  expect(reset(formContainer)).toBe(true);
});

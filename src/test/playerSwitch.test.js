import updateBoardArray from '../js/modules/updateBoard';
import mockEvent from './mockEvent';
import * as domManipulation from '../js/modules/domManipulation';

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

// jest.mock('../js/modules/updateBoard.js', () => ({
//  updateBoardArray: jest.fn().mockImplementation(() => true),
// }));

// jest.mock('../js/modules/updateBoard', () => ({
//  default: () => ({
//    updateBoardArray: jest.fn()
//  }),
// }));

const cells = document.querySelectorAll('.cells');
const playerOne = player('Alex', 'X', 1, 'O', 'rgba(144, 164, 174, 0.8');
const playerTwo = player('Rory', 'O', 2, 'x', 'rgba(241, 196, 15, 0.8');
const currentPlayer = playerOne;
const oppositePlayer = playerTwo;

test("if there's no winner and the game hasn't ended it switchs current player and opposite player", () => {
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

test("when the game is over and nobody won, it expects a confirmation pop up to be called", async () => {
  document.body.innerHTML = ` <div class="cells" data-datasymbol="A" id="c0">X</div> <div class="cells" data-datasymbol="A" id="c1">X</div> <div class="cells" data-datasymbol="A" id="c2">X</div> 
    <div class="cells" data-datasymbol="" id="c1"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c1"> </div> 
    <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> `;
  
    jest.mock('../js/modules/winningValidations', () => ({
      winningValidation: jest.fn(() => false),
    }));
  
  window.confirm = jest.fn();
  const count = 9;
  playerSwitch(
    currentPlayer,
    oppositePlayer,
    playerOne,
    playerTwo,
    count,
    updateBoardArray,
    cells,
  );
  setTimeout(() => {
    expect(window.confirm).toHaveBeenCalled();
  }, 450);
});

test("when the game is over and nobody won, it expects a confirmation pop up to be called", async () => {
  document.body.innerHTML = ` <div class="cells" data-datasymbol="A" id="c0">X</div> <div class="cells" data-datasymbol="A" id="c1">X</div> <div class="cells" data-datasymbol="A" id="c2">X</div> 
    <div class="cells" data-datasymbol="" id="c1"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c1"> </div> 
    <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> `;
  
    jest.mock('../js/modules/winningValidations', () => ({
      winningValidation: jest.fn(() => true),
    }));
  
  window.confirm = jest.fn((currentPlayer) => `${currentPlayer.name} has won. Would you like to play again?`);
  const count = 9;
  playerSwitch(
    currentPlayer,
    oppositePlayer,
    playerOne,
    playerTwo,
    count,
    updateBoardArray,
    cells,
  );
  setTimeout(() => {
    expect(window.confirm()).toHaveReturnedWith(`${oppositePlayer.name} has won. Would you like to play again?`);
  }, 450);
});
import * as styles from './domManipulation';
import reset from './reset';
import winningValidation from './winningValidations';
import updateBoardArray from './updateBoard';
import * as domElements from './domElements';
import * as gameInit from './gameInit';

let currentPlayer = gameInit.currentPlayer;
let oppositePlayer = gameInit.oppositePlayer;
let playerOne = gameInit.playerOne;
let playerTwo = gameInit.playerTwo;
let count = 1;

const playerSwitch = () => {
  styles.displayRounds(count + 1);

  if (winningValidation(updateBoardArray(), currentPlayer.getSymbol()) === false && count === 9) {
    setTimeout(() => {
      const reMatch = confirm("It's a draw! Would you like to play again?");
      if (reMatch) {
        reset(domElements.cells);
      } else {
        alert('How sad.');
      }
    }, 450);
  } else if (winningValidation(updateBoardArray(), currentPlayer.getSymbol())) {
    setTimeout(() => {
      const rematch = confirm(
        `${currentPlayer.getName()} has won. Would you like to play again?`,
      );
      if (rematch === true) {
        reset(domElements.cells);
      } else {
        alert('Loser.');
      }
    }, 450);
  } else if (oppositePlayer.getNumber() === 1) {
    styles.disableBackground(currentPlayer.getBackground(), domElements.playerTwoIcon);
    currentPlayer = playerOne;
    oppositePlayer = playerTwo;
    styles.paintBackground(currentPlayer.getBackground(), domElements.playerOneIcon);
  } else {
    styles.disableBackground(currentPlayer.getBackground(), domElements.playerOneIcon);
    currentPlayer = playerTwo;
    oppositePlayer = playerOne;
    styles.paintBackground(currentPlayer.getBackground(), domElements.playerTwoIcon);
  }
  count++;
};

export default playerSwitch;
export { currentPlayer };
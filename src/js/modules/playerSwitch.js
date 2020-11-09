import * as styles from './domManipulation';
import reset from './reset';
import winningValidation from './winningValidations';
import updateBoardArray from './updateBoard';
import * as domElements from './domElements';
import { retrieveItem, saveItem } from './localStorage';

const playerSwitch = () => {
  let currentPlayer = retrieveItem('currentPlayer');
  let oppositePlayer = retrieveItem('oppositePlayer');
  const playerOne = retrieveItem('playerOne');
  const playerTwo = retrieveItem('playerTwo');
  let count = retrieveItem('count');
  styles.displayRounds(count + 1, domElements.roundCounter, oppositePlayer);
  if (winningValidation(currentPlayer, updateBoardArray(), currentPlayer.symbol) === false && count === 9) {
    setTimeout(() => {
      const reMatch = confirm("It's a draw! Would you like to play again?");
      if (reMatch) {
        reset(domElements.cells);
      } else {
        alert('How sad.');
      }
    }, 450);
  } else if (winningValidation(currentPlayer, updateBoardArray(), currentPlayer.symbol)) {
    setTimeout(() => {
      const rematch = confirm(
        `${currentPlayer.name} has won. Would you like to play again?`,
      );
      if (rematch === true) {
        reset(domElements.cells);
      } else {
        alert('Loser.');
      }
    }, 450);
  } else if (oppositePlayer.playerNumber === 1) {
    styles.disableBackground(currentPlayer.background, domElements.playerTwoIcon);
    currentPlayer = playerOne;
    oppositePlayer = playerTwo;
    saveItem('currentPlayer', currentPlayer);
    saveItem('oppositePlayer', oppositePlayer);
    styles.paintBackground(currentPlayer.background, domElements.playerOneIcon);
  } else {
    styles.disableBackground(currentPlayer.background, domElements.playerOneIcon);
    currentPlayer = playerTwo;
    oppositePlayer = playerOne;
    saveItem('currentPlayer', currentPlayer);
    saveItem('oppositePlayer', oppositePlayer);
    styles.paintBackground(currentPlayer.background, domElements.playerTwoIcon);
  }
  count++;
  saveItem('count', count);
};

export default playerSwitch;
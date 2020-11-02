import * as styles from './domManipulation';
import  reset from './reset';
import winningValidation from './winningValidations';
import updateBoardArray from './updateBoard';
import * as domElements from './domElements';

const playerSwitch = () => {
  styles.displayRounds(domElements.count + 1);

  if (winningValidation(updateBoardArray(), domElements.currentPlayer.getSymbol()) === false && domElements.count === 9) {
    setTimeout(() => {
      const reMatch = confirm("It's a draw! Would you like to play again?");
      if (reMatch) {
        reset(domElements.cells);
      } else {
        alert('How sad.');
      }
    }, 450);
  } else if (winningValidation(updateBoardArray(), domElements.currentPlayer.getSymbol())) {
    setTimeout(() => {
      const rematch = confirm(
        `${domElements.currentPlayer.getName()} has won. Would you like to play again?`,
      );
      if (rematch === true) {
        reset(domElements.cells);
      } else {
        alert('Loser.');
      }
    }, 450);
  } else if (game.oppositePlayer.getNumber() === 1) {
    styles.disableBackground(game.currentPlayer.getBackground(), domElements.playerTwoIcon);
    game.currentPlayer = game.playerOne;
    game.oppositePlayer = game.playerTwo;
    styles.paintBackground(game.currentPlayer.getBackground(), domElements.playerOneIcon);
  } else {
    styles.disableBackground(game.currentPlayer.getBackground(), domElements.playerOneIcon);
    game.currentPlayer = game.playerTwo;
    game.oppositePlayer = game.playerOne;
    styles.paintBackground(game.currentPlayer.getBackground(), domElements.playerTwoIcon);
  }
  game.count++;
};

export default playerSwitch;
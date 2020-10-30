const playerSwitch = () => {
  styles.displayRounds(count + 1);

  if (winningValidation(updateBoardArray(), currentPlayer.getSymbol()) === false && count === 9) {
    setTimeout(() => {
      const reMatch = confirm("It's a draw! Would you like to play again?");
      if (reMatch) {
        reset(cells);
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
        reset(cells);
      } else {
        alert('Loser.');
      }
    }, 450);
  } else if (oppositePlayer.getNumber() === 1) {
    styles.disableBackground(currentPlayer.getBackground(), playerTwoIcon);
    currentPlayer = playerOne;
    oppositePlayer = playerTwo;
    styles.paintBackground(currentPlayer.getBackground(), playerOneIcon);
  } else {
    styles.disableBackground(currentPlayer.getBackground(), playerOneIcon);
    currentPlayer = playerTwo;
    oppositePlayer = playerOne;
    styles.paintBackground(currentPlayer.getBackground(), playerTwoIcon);
  }
  count++;
};
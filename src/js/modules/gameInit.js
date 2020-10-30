const gameInit = () => {
  if (namePlayerOne.value === '' || namePlayerTwo.value === '') {
    alert("Please add both players' names to continue.");
    return false;
  }
  if (Icons.length < 2) {
    alert('Please select a character for both players to continue.');
    return false;
  }
  if (namePlayerOne.value !== '' && namePlayerTwo.value !== '' && Icons.length === 2) {
    playerOne = Player(namePlayerOne.value, 'X', 1, Icons[0], 'rgba(144, 164, 174, 0.8');
    playerTwo = Player(namePlayerTwo.value, 'O', 2, Icons[1], 'rgba(241, 196, 15, 0.8');
    currentPlayer = playerOne;
    oppositePlayer = playerTwo;
    styles.displayIcon(playerOne.getImg(), playerOneIcon);
    styles.paintBackground(playerOne.getBackground(), playerOneIcon);
    styles.displayIcon(playerTwo.getImg(), playerTwoIcon);
    playerTurnIndicator.innerHTML = `It's ${currentPlayer.getName()}'s turn`;
    styles.removeForm();
    return true;
  }
  return false;
};
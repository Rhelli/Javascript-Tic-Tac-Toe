import domElements from './domElements';
import game from './game';
import domManipulation from './domManipulation';
import player from './player';


const gameInit = () => {
  console.log('sup perro');
  if (domElements.namePlayerOne.value === '' || domElements.namePlayerTwo.value === '') {
    alert("Please add both players' names to continue.");
    return false;
  }
  if (domElements.Icons.length < 2) {
    alert('Please select a character for both players to continue.');
    return false;
  }
  if (domElements.namePlayerOne.value !== '' && domElements.namePlayerTwo.value !== '' && domElements.Icons.length === 2) {
    game.playerOne = player(domElements.namePlayerOne.value, 'X', 1, domElements.Icons[0], 'rgba(144, 164, 174, 0.8');
    game.playerTwo = player(domElements.namePlayerTwo.value, 'O', 2, domElements.Icons[1], 'rgba(241, 196, 15, 0.8');
    game.currentPlayer = game.playerOne;
    game.oppositePlayer = game.playerTwo;
    domManipulation.displayIcon(game.playerOne.getImg(), domElements.playerOneIcon);
    domManipulation.paintBackground(game.playerOne.getBackground(), domElements.playerOneIcon);
    domManipulation.displayIcon(game.playerTwo.getImg(), domElements.playerTwoIcon);
    domElements.playerTurnIndicator.innerHTML = `It's ${game.currentPlayer.getName()}'s turn`;
    domManipulation.removeForm();
    return true;
  }
  return false;
};

export default gameInit;
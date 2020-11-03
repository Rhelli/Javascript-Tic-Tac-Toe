import * as domElements from './domElements';
import { Icons } from './playerIcons';
import game from './game';
import * as domManipulation from './domManipulation';
import player from './player';
import { saveItem } from './localStorage';

const gameInit = () => {
  if (domElements.namePlayerOne.value === '' || domElements.namePlayerTwo.value === '') {
    alert("Please add both players' names to continue.");
    return false;
  }
  if (Icons.length < 2) {
    alert('Please select a character for both players to continue.');
    return false;
  }
  if (domElements.namePlayerOne.value !== '' && domElements.namePlayerTwo.value !== '' && Icons.length === 2) {
    const playerOne = player(domElements.namePlayerOne.value, 'X', 1, Icons[0], 'rgba(144, 164, 174, 0.8');
    const playerTwo = player(domElements.namePlayerTwo.value, 'O', 2, Icons[1], 'rgba(241, 196, 15, 0.8');
    const currentPlayer = playerOne;
    const oppositePlayer = playerTwo;
    const count = 1;
    domManipulation.displayIcon(playerOne.img, domElements.playerOneIcon);
    domManipulation.paintBackground(playerOne.background, domElements.playerOneIcon);
    domManipulation.displayIcon(playerTwo.img, domElements.playerTwoIcon);
    domElements.playerTurnIndicator.innerHTML = `It's ${currentPlayer.name}'s turn`;
    domManipulation.removeForm();
    saveItem('playerOne', playerOne);
    saveItem('playerTwo', playerTwo);
    saveItem('currentPlayer', currentPlayer);
    saveItem('oppositePlayer', oppositePlayer);
    saveItem('count', count);
  }
};

export default gameInit;
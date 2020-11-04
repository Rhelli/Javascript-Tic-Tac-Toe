import * as domElements from './domElements';
import * as domManipulation from './domManipulation';
import player from './player';
import { retrieveItem, saveItem } from './localStorage';
import { Icons } from './playerIcons';

const gameInit = (namePlayerOne, namePlayerTwo, Icons) => {
  if (namePlayerOne.value === '' || namePlayerTwo.value === '') {
    window.alert("Please add both players' names to continue.");
    return false;
  }
  if (Icons.length < 2) {
    window.alert('Please select a character for both players to continue.');
    return false;
  }
  if (namePlayerOne.value !== '' && namePlayerTwo.value !== '' && Icons.length === 2) {
    const playerOne = player(namePlayerOne.value, 'X', 1, Icons[0], 'rgba(144, 164, 174, 0.8');
    const playerTwo = player(namePlayerTwo.value, 'O', 2, Icons[1], 'rgba(241, 196, 15, 0.8');
    const currentPlayer = playerOne;
    const oppositePlayer = playerTwo;
    const count = 1;
    saveItem('playerOne', playerOne);
    saveItem('playerTwo', playerTwo);
    saveItem('currentPlayer', currentPlayer);
    saveItem('oppositePlayer', oppositePlayer);
    saveItem('count', count);
  }
  return true;
};

const afterGameInit = (namePlayerOne, namePlayerTwo, Icons, playerOneIcon, playerTwoIcon) => {
  if (gameInit(namePlayerOne, namePlayerTwo, Icons, domManipulation)) {
    gameInit(namePlayerOne, namePlayerTwo, Icons, domManipulation);
    domManipulation.displayIcon(Icons[0], playerOneIcon);
    domManipulation.paintBackground('rgba(144, 164, 174, 0.8', playerOneIcon);
    domManipulation.displayIcon(Icons[1], playerTwoIcon);
    const currentPlayer = retrieveItem('currentPlayer');
    domElements.playerTurnIndicator.innerHTML = `It's ${currentPlayer.name}'s turn`;
    domManipulation.removeForm();
  }
};
export default afterGameInit;
export { gameInit };
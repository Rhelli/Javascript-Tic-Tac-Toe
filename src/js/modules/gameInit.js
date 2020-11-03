import * as domElements from './domElements';
import { Icons } from './playerIcons';
import game from './game';
import * as domManipulation from './domManipulation';
import player from './player';

let playerOne;
let playerTwo;
let currentPlayer;
let oppositePlayer;

// if players dont have a name
// if icons havent been selected
// then 27 till 35
// we could return an Array with two player objects
//  and export that into clickCell 

// const renderPlayer = () => {
//   playerOne = player(domElements.namePlayerOne.value, 'X', 1, Icons[0], 'rgba(144, 164, 174, 0.8');
//   playerTwo = player(domElements.namePlayerTwo.value, 'O', 2, Icons[1], 'rgba(241, 196, 15, 0.8');
//   currentPlayer = playerOne;
//   oppositePlayer = playerTwo;

//   // return [
//   //   playerOne, playerTwo,
//   //   currentPlayer, oppositePlayer,
//   // ];

//   return true

// };

// const isGameReady = () => {
//   if (domElements.namePlayerOne.value === '' || domElements.namePlayerTwo.value === '') {
//     alert("Please add both players' names to continue.");
//     return false;
//   }
//   if (Icons.length < 2) {
//     alert('Please select a character for both players to continue.');
//     return false;
//   }
//   return true;
// };

const gameInit = () => {
  console.log('sup perro');
  if (domElements.namePlayerOne.value === '' || domElements.namePlayerTwo.value === '') {
    alert("Please add both players' names to continue.");
    return false;
  }
  if (Icons.length < 2) {
    alert('Please select a character for both players to continue.');
    return false;
  }
  if (domElements.namePlayerOne.value !== '' && domElements.namePlayerTwo.value !== '' && Icons.length === 2) {
    playerOne = player(domElements.namePlayerOne.value, 'X', 1, Icons[0], 'rgba(144, 164, 174, 0.8');
    playerTwo = player(domElements.namePlayerTwo.value, 'O', 2, Icons[1], 'rgba(241, 196, 15, 0.8');
    currentPlayer = playerOne;
    oppositePlayer = playerTwo;
    domManipulation.displayIcon(playerOne.getImg(), domElements.playerOneIcon);
    domManipulation.paintBackground(playerOne.getBackground(), domElements.playerOneIcon);
    domManipulation.displayIcon(playerTwo.getImg(), domElements.playerTwoIcon);
    domElements.playerTurnIndicator.innerHTML = `It's ${currentPlayer.getName()}'s turn`;
    domManipulation.removeForm();
    return true;
  }
  return false;
};

export default gameInit;
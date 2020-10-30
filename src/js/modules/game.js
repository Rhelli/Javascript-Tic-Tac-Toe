import gameboard from './gameboard';
import styles from './domManipulation';
import playerCreator from './player';
import playerIcons from './playerIcons';
import gameInit from './gameInit';
import domElements from './domElements';

const game = () => {
  const count = 1;
  let playerOne;
  let playerTwo;
  const numberOfPlayers = 1;
  // const namePlayerOne = document.getElementById('player-one');
  // const namePlayerTwo = document.getElementById('player-two');
  // const allIcons = document.querySelectorAll('.character-item');
  // const playerTurnIndicator = document.getElementById('player-turn');
  const currentPlayer = '';
  const oppositePlayer = '';
  styles();
  // const Icons = [];
  // const roundCounter = document.getElementById('turn-counter');
  // const playerOneIcon = document.getElementById('activePlayerOne');
  // const playerTwoIcon = document.getElementById('activePlayerTwo');

  playerCreator();
  playerIcons();
  gameInit();
  domElements.allIcons.forEach((element) => {
    element.addEventListener('click', playerIcons, false);
  });
  gameboard();
  // return { gameInit, gameBoard };
  return {
    count,
    playerOne,
    playerTwo,
    numberOfPlayers,
    currentPlayer,
    oppositePlayer,
  };
};

export default game;
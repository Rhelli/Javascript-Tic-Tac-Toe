const domElements = require('./domElements');
const choosePlayerIcon = require('./playerIcons');


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
  // const Icons = [];
  // const roundCounter = document.getElementById('turn-counter');
  // const playerOneIcon = document.getElementById('activePlayerOne');
  // const playerTwoIcon = document.getElementById('activePlayerTwo');

  domElements.allIcons.forEach((element) => {
    element.addEventListener('click', choosePlayerIcon, false);
  });
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

module.export = game;
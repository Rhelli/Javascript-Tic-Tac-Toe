const namePlayerOne = document.getElementById('player-one');
const namePlayerTwo = document.getElementById('player-two');
const allIcons = document.querySelectorAll('.character-item');
const playerTurnIndicator = document.getElementById('player-turn');
const roundCounter = document.getElementById('turn-counter');
const playerOneIcon = document.getElementById('activePlayerOne');
const playerTwoIcon = document.getElementById('activePlayerTwo');
const cells = document.querySelectorAll('.cell');
const call = () => console.log(allIcons);
const initButton = document.getElementById('startGameButton');
const resetButton = document.getElementById('resetButton');
const count = 1;
let playerOne;
let playerTwo;

const playerNumber = 1;

const numberOfPlayers = 1;

export {
  call,
  allIcons,
  namePlayerOne,
  namePlayerTwo,
  playerTurnIndicator,
  roundCounter,
  playerOneIcon,
  playerTwoIcon,
  cells,
  initButton,
  count,
  playerOne,
  playerTwo,
  playerNumber,
  resetButton,
};
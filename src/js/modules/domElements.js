const namePlayerOne = document.getElementById('player-one');
const namePlayerTwo = document.getElementById('player-two');
const allIcons = document.querySelectorAll('.character-item');
const playerTurnIndicator = document.getElementById('player-turn');
const roundCounter = document.getElementById('turn-counter');
const playerOneIcon = document.getElementById('activePlayerOne');
const playerTwoIcon = document.getElementById('activePlayerTwo');
const cells = document.querySelectorAll('.cell');
const initButton = document.getElementById('startGameButton');
const resetButton = document.getElementById('resetButton');

export {
  allIcons,
  namePlayerOne,
  namePlayerTwo,
  playerTurnIndicator,
  roundCounter,
  playerOneIcon,
  playerTwoIcon,
  cells,
  initButton,
  resetButton,
};
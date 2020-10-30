const game = (() => {
  let count = 1;
  let playerOne;
  let playerTwo;
  let numberOfPlayer = 1;
  const namePlayerOne = document.getElementById('player-one');
  const namePlayerTwo = document.getElementById('player-two');
  const allIcons = document.querySelectorAll('.character-item');
  const playerTurnIndicator = document.getElementById('player-turn');
  let currentPlayer = '';
  let oppositePlayer = '';
  const Icons = [];
  const roundCounter = document.getElementById('turn-counter');
  const playerOneIcon = document.getElementById('activePlayerOne');
  const playerTwoIcon = document.getElementById('activePlayerTwo');

  return { gameInit, gameBoard };
})();
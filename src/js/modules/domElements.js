const domElements = () => {
  const namePlayerOne = document.getElementById('player-one');
  const namePlayerTwo = document.getElementById('player-two');
  const allIcons = document.querySelectorAll('.character-item');
  const playerTurnIndicator = document.getElementById('player-turn');
  const Icons = [];
  const roundCounter = document.getElementById('turn-counter');
  const playerOneIcon = document.getElementById('activePlayerOne');
  const playerTwoIcon = document.getElementById('activePlayerTwo');
  const cells = document.querySelectorAll('.cell');

  return {
    cells, playerTwoIcon, playerOneIcon, roundCounter, Icons, playerTurnIndicator, namePlayerTwo, namePlayerOne, allIcons,
  };
};
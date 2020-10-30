import game from './game';

const winningValidation = (array, symbol) => {
  let roundWon = false;
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i <= 7; i += 1) {
    const winCondition = winningConditions[i];
    const a = array[winCondition[0]];
    const b = array[winCondition[1]];
    const c = array[winCondition[2]];
    const aa = document.getElementById(`c${winCondition[0]}`);
    const bb = document.getElementById(`c${winCondition[1]}`);
    const cc = document.getElementById(`c${winCondition[2]}`);
    if (a === symbol && b === symbol && c === symbol) {
      roundWon = true;
      if (game.currentPlayer === game.playerOne) {
        aa.style.background = game.playerOne.getBackground();
        bb.style.background = game.playerOne.getBackground();
        cc.style.background = game.playerOne.getBackground();
      } else {
        aa.style.background = game.playerTwo.getBackground();
        bb.style.background = game.playerTwo.getBackground();
        cc.style.background = game.playerTwo.getBackground();
      }
      return roundWon;
    }
  }
  return roundWon;
};

export default winningValidation;
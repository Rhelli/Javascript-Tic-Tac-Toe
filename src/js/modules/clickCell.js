import * as domElements from './domElements';
import game from './game';
import ifCellEmpty from './ifCellEmpty';
import * as gameInit from './gameInit';
import * as playerSwitch from './playerSwitch';

let currentPlayer = playerSwitch.currentPlayer;

const clickCell = (event) => {
  if (domElements.namePlayerOne.value === '' && domElements.namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const symbol = currentPlayer.getSymbol();
    const img = currentPlayer.getImg();
    ifCellEmpty(event, symbol, img);
  }
};

// we need to create a current/opposite player update state function
// so we can pass that value to line 10/11

export default clickCell;

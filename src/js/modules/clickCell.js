import * as domElements from './domElements';
import game from './game';
import ifCellEmpty from './ifCellEmpty';
import { retrieveItem } from './localStorage';

const clickCell = (event) => {
  const currentPlayer = retrieveItem('currentPlayer');
  if (domElements.namePlayerOne.value === '' && domElements.namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const symbol = currentPlayer.symbol;
    const img = currentPlayer.img;
    ifCellEmpty(event, symbol, img);
  }
};

// we need to create a current/opposite player update state function
// so we can pass that value to line 10/11

export default clickCell;

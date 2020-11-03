import * as domElements from './domElements';
import ifCellEmpty from './ifCellEmpty';
import { retrieveItem } from './localStorage';

const clickCell = (event) => {
  const currentPlayer = retrieveItem('currentPlayer');
  if (domElements.namePlayerOne.value === '' && domElements.namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const { symbol } = currentPlayer;
    const { img } = currentPlayer;
    ifCellEmpty(event, symbol, img);
  }
};

export default clickCell;

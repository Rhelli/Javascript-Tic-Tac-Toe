import * as domElements from './domElements';
import clickCell from './clickCell';
import { retrieveItem } from './localStorage';


const gameboard = () => {
  const namePlayerOne = domElements.namePlayerOne;
  const namePlayerTwo = domElements.namePlayerTwo;
  domElements.cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      const currentPlayer = retrieveItem('currentPlayer');
      clickCell(event, namePlayerOne, namePlayerTwo, currentPlayer);
    });
  });
};

export default gameboard;
import * as domElements from './domElements';
import clickCell from './clickCell';

const gameboard = () => {
  domElements.cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      clickCell(event);
    });
  });
};

export default gameboard;
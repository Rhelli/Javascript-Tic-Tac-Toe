import * as domElements from './domElements';
import clickCell from './clickCell';

// pass cells as an argument, then inject cells wereva we get gameboard

const gameboard = () => {
  domElements.cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      clickCell(event);
    });
  });
};

export default gameboard;
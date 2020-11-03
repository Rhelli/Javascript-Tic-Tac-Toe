import * as domElements from './domElements';
import clickCell from './clickCell';
import ifCellEmpty from './ifCellEmpty';
import reset from './reset';
import winningValidation from './winningValidations';
import updateBoardArray from './updateBoard';
import playerSwitch from './playerSwitch';

const gameboard = () => {
  domElements.cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      //event.preventDefault();
      clickCell();
    });
  });
}

export default gameboard;
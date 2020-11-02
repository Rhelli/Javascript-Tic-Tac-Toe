import * as domElements from './domElements';
import clickCell from './clickCell';
import ifCellEmpty from './ifCellEmpty';
import reset from './reset';
import winningValidation from './winningValidations';
import updateBoardArray from './updateBoard';
import playerSwitch from './playerSwitch';

const gameboard = () => {
  domElements.cells.forEach((cell) => cell.addEventListener('click', clickCell, false));
  // it seems like we don't need to return anything
  // Rory thinks that the most crucial refactoring part of this is where are we calling gameboard.
  // return { clickCell };
};

export default gameboard;
import * as domElements from './domElements';
import { retrieveItem } from './localStorage';
import playerSwitch from './playerSwitch';
import ifCellEmpty from './ifCellEmpty';

const gameboard = () => {
  domElements.cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      const currentPlayer = retrieveItem('currentPlayer');
      ifCellEmpty(
        currentPlayer,
        event,
        playerSwitch,
        retrieveItem('currentPlayer'),
        retrieveItem('oppositePlayer'),
        retrieveItem('playerOne'),
        retrieveItem('playerTwo'),
        retrieveItem('count'),
      );
    });
  });
};

export default gameboard;

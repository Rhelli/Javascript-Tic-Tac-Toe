import * as domElements from './domElements';
import game from './game';
import clickCell from './clickCell';
import * as domManipulation from './domManipulation'; 
import choosePlayerIcon from './playerIcons';
import { retrieveItem, saveItem } from './localStorage';


const reset = () => {
  const currentPlayer = retrieveItem('currentPlayer');
  let count = retrieveItem('count')
  domElements.cells.forEach((element) => {
    element.addEventListener('click', clickCell, false);
    element.innerHTML = '';
    element.dataset.datasymbol = '';
    domManipulation.initialBackground(element);
    count = 1;
    domElements.roundCounter.innerHTML = 'Turn 1.';
    domElements.playerTurnIndicator.innerHTML = '';
    domElements.playerOneIcon.innerHTML = '';
    domElements.playerTwoIcon.innerHTML = '';
    domManipulation.disableBackground(currentPlayer.background, domElements.playerOneIcon);
    domManipulation.disableBackground(currentPlayer.background, domElements.playerTwoIcon);
    domElements.allIcons.forEach((element) => {
      element.addEventListener('click', choosePlayerIcon, false);
    });
    domManipulation.addForm();
  });
  saveItem('currentPlayer', currentPlayer);
  saveItem('count', count);
};

export default reset;
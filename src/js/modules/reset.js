import * as domElements from './domElements';
import game from './game';
import clickCell from './clickCell';
import * as domManipulation from './domManipulation';
import choosePlayerIcon from './playerIcons';
import { retrieveItem, saveItem } from './localStorage';


const reset = () => {
    window.localStorage.clear()
    window.location.reload()
    domManipulation.addForm();
  };

export default reset;
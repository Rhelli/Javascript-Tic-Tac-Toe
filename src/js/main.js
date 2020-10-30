import game from './modules/game';
import gameboard from './modules/gameboard';
import styles from './modules/domManipulation';
import playerCreator from './modules/player';
import playerIcons from './modules/playerIcons';
import gameInit from './modules/gameInit';
import ifCellEmpty from './modules/ifCellEmpty';
import clickCell from './modules/clickCell';
import reset from './modules/reset';
import winningValidation from './modules/winningValidations';
import updateBoard from './modules/updateBoard';
import playerSwitch from './modules/playerSwitch';

const startGameButton = document.getElementById('startGameButton');

game();
styles();
startGameButton.addEventListener('click', gameInit);
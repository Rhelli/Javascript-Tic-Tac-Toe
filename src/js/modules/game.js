import gameboard from './gameboard';
import playerIcons, { Icons } from './playerIcons';
import gameInit from './gameInit';
import * as domElements from './domElements';
import reset from './reset';

const game = () => {
  domElements.initButton.addEventListener('click', () => {
    gameInit(domElements.namePlayerOne, domElements.namePlayerTwo, Icons);
  });
  domElements.resetButton.addEventListener('click', reset);
  domElements.allIcons.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      playerIcons(element);
    });
  });
  gameboard();
};

export default game;
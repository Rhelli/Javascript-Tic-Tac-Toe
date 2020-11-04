import gameboard from './gameboard';
import playerIcons, { Icons } from './playerIcons';
import * as domElements from './domElements';
import reset from './reset';
import * as domManipulation from './domManipulation'
import afterGameInit from './gameInit';

const game = () => {
  domElements.initButton.addEventListener('click', () => {
    afterGameInit(domElements.namePlayerOne, domElements.namePlayerTwo, Icons, domElements.playerOneIcon, domElements.playerTwoIcon)
  });
  domElements.resetButton.addEventListener('click', () => {
    reset(domElements.formContainer);
  });
  domElements.allIcons.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      playerIcons(element);
    });
  });
  gameboard();
};

export default game;
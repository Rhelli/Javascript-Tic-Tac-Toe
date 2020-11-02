import gameboard from './gameboard';
import playerIcons from './playerIcons';
import gameInit from './gameInit';
import * as domElements from './domElements';

const game = () => {
  domElements.initButton.addEventListener('click', gameInit);
  domElements.allIcons.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      playerIcons(element);
    });
  });
  gameboard();
};

export default game;
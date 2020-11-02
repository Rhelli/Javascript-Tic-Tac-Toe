import game from './game';
import * as domElements from './domElements';

const formContainer = document.getElementById('form-container');
const removeForm = () => {
  formContainer.style.display = 'none';
};
const addForm = () => {
  formContainer.style.display = 'flex';
};
const displayIcon = (icon, container) => {
  const imgElement = document.createElement('img');
  imgElement.src = icon;
  container.appendChild(imgElement);
};
const paintBackground = (color, element) => {
  element.style.background = color;
};
const disableBackground = (color, element) => {
  element.style.background = 'rgba(256, 256, 256, 0.5)';
};
const initialBackground = (element) => {
  element.style.background = 'transparent';
};
const displayRounds = (element) => {
  if (domElements.roundCounter.innerHTML === 'No Turns Yet') {
    domElements.roundCounter.innerHTML = 'Turn 1';
  } else {
    domElements.roundCounter.innerHTML = `Turn ${element}.`;
  }
  game.playerTurnIndicator.innerHTML = `It is ${game.oppositePlayer.getName()}'s turn`;
};

export {
  addForm,
  initialBackground,
  removeForm,
  displayRounds,
  // playerTurnIndicator, why ?
  displayIcon,
  paintBackground,
  disableBackground,
};

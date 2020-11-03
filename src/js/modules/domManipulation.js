import * as domElements from './domElements';
import { retrieveItem } from './localStorage';

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
  const oppositePlayer = retrieveItem('oppositePlayer');
  if (domElements.roundCounter.innerHTML === 'No Turns Yet') {
    domElements.roundCounter.innerHTML = 'Turn 1';
  } else {
    domElements.roundCounter.innerHTML = `Turn ${element}.`;
  }
  domElements.playerTurnIndicator.innerHTML = `It is ${oppositePlayer.name}'s turn`;
};

export {
  addForm,
  initialBackground,
  removeForm,
  displayRounds,
  displayIcon,
  paintBackground,
  disableBackground,
};

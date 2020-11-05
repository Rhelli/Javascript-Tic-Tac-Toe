import playerSwitch from './playerSwitch';

const ifCellEmpty = (event, symbol, img) => {
  const imgE = document.createElement('img');
  imgE.src = img;
  event.dataset.datasymbol = symbol;
  event.appendChild(imgE);
  event.classList.add('prevent-clicks');
  playerSwitch();
};

export default ifCellEmpty;
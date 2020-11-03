import playerSwitch from './playerSwitch';

const ifCellEmpty = (event, symbol, img) => {
  const imgE = document.createElement('img');
  imgE.src = img;
  event.target.dataset.datasymbol = symbol;
  event.target.appendChild(imgE);
  event.target.classList.add('prevent-clicks');
  playerSwitch();
};

export default ifCellEmpty;
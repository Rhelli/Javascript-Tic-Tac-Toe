

const ifCellEmpty = (currentPlayer, event, fun) => {
  const imgE = document.createElement('img');
  imgE.src = currentPlayer.img;
  event.target.dataset.datasymbol = currentPlayer.symbol;
  event.target.appendChild(imgE);
  event.target.classList.add('prevent-clicks');
  fun();
};

export default ifCellEmpty;
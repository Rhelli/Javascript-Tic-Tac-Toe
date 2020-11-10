const ifCellEmpty = (currentPlayer, event, fun, param1, param2, param3, param4, param5, fun2, param6) => {
  const imgE = document.createElement('img');
  imgE.src = currentPlayer.img;
  event.target.dataset.datasymbol = currentPlayer.symbol;
  event.target.appendChild(imgE);
  event.target.classList.add('prevent-clicks');
  fun(param1, param2, param3, param4, param5, fun2, param6);
};

export default ifCellEmpty;
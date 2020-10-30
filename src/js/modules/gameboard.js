const gameBoard = (() => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => cell.addEventListener('click', clickCell, false));
  return { clickCell, reset };
})();
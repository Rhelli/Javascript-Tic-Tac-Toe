const clickCell = (event) => {
  if (namePlayerOne.value === '' && namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const symbol = currentPlayer.getSymbol();
    const img = currentPlayer.getImg();
    ifCellEmpty(event, symbol, img);
  }
};

module.exports = clickCell;

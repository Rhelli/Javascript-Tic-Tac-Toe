const updateBoardArray = (cells) => {
  console.log(cells);
  const cellsArray = Array.from(cells);
  const renderBoard = cellsArray.map(
    (cell => cell.dataset.datasymbol),
  );
  return renderBoard;
};

export default updateBoardArray;
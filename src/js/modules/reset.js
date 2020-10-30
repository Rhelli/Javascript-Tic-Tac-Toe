const reset = () => {
  cells.forEach((element) => {
    element.addEventListener('click', clickCell, false);
    element.innerHTML = '';
    element.dataset.datasymbol = '';
    styles.initialBackground(element);
    count = 1;
    roundCounter.innerHTML = 'Turn 1.';
    playerTurnIndicator.innerHTML = '';
    playerOneIcon.innerHTML = '';
    playerTwoIcon.innerHTML = '';
    styles.disableBackground(currentPlayer.getBackground(), playerOneIcon);
    styles.disableBackground(currentPlayer.getBackground(), playerTwoIcon);
    allIcons.forEach((element) => {
      element.addEventListener('click', choosePlayerIcon, false);
    });
    styles.addForm();
  });
};
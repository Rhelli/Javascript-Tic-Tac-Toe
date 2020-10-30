const styles = (() => {
  const formContainer = document.getElementById('form-container');
  const removeForm = () => { formContainer.style.display = 'none'; };
  const addForm = () => { formContainer.style.display = 'flex'; };
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
  const initialBackground = (element) => { element.style.background = 'transparent'; };
  const displayRounds = (element) => {
    if (roundCounter.innerHTML === 'No Turns Yet') {
      roundCounter.innerHTML = 'Turn 1';
    } else {
      roundCounter.innerHTML = `Turn ${element}.`;
    }
    playerTurnIndicator.innerHTML = `It is ${oppositePlayer.getName()}'s turn`;
  };

  return {
    addForm,
    initialBackground,
    removeForm,
    displayRounds,
    playerTurnIndicator,
    displayIcon,
    paintBackground,
    disableBackground,
  };
})();
const domElements = require('./domElements');
const game = require('./game');

const choosePlayerIcon = (event) => {
  const chosenIcon = event.target;
  if (game.numberOfPlayer === 1) {
    if (domElements.Icons[0]) {
      document.getElementById('avoid-clicks').id = '';
      domElements.Icons[0] = chosenIcon.src;
    } else {
      domElements.Icons.push(chosenIcon.src);
    }
    chosenIcon.id = 'avoid-clicks';
    game.numberOfPlayer = 2;
  } else {
    if (domElements.domElements.Icons[1]) {
      document.getElementById('avoid-clicks-p2').id = '';
      domElements.Icons[1] = chosenIcon.src;
    } else {
      domElements.Icons.push(chosenIcon.src);
    }

    chosenIcon.id = 'avoid-clicks-p2';
    game.numberOfPlayer = 1;
  }

  // return { domElements.Icons }; why? x2
};

module.exports = choosePlayerIcon;
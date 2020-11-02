import { Icons, call, allIcons } from './domElements';
import game from './game';

const choosePlayerIcon = (event) => {
  // call();
  console.log(Icons);
  const arr = Icons;
  const chosenIcon = event;
  if (game.numberOfPlayer === 1) {
    if (arr[0]) {
      document.getElementById('avoid-clicks').id = '';
      domElements.Icons[0] = chosenIcon.src;
    } else {
      arr.push(chosenIcon.src);
    }
    chosenIcon.id = 'avoid-clicks';
    game.numberOfPlayer = 2;
  } else {
    if (arr[1]) {
      document.getElementById('avoid-clicks-p2').id = '';
      arr[1] = chosenIcon.src;
    } else {
      arr.push(chosenIcon.src);
    }

    chosenIcon.id = 'avoid-clicks-p2';
    game.numberOfPlayer = 1;
  }

  return { arr };
};

export default choosePlayerIcon;
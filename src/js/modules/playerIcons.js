import * as domElements from './domElements';

let Icons = [];

const choosePlayerIcon = (element) => {
  let icon = Icons;
  const chosenIcon = element;
  if (domElements.numberOfPlayer === 1) {
    if (icon[0]) {
      document.getElementById('avoid-clicks').id = '';
      icon[0] = chosenIcon.src;
    } else {
      Icons.push(chosenIcon.src);
    }
    console.log(Icons.length);
    chosenIcon.id = 'avoid-clicks';
    domElements.numberOfPlayer = 2;
  } else {
    if (icon[1]) {
      document.getElementById('avoid-clicks-p2').id = '';
      icon[1] = chosenIcon.src;
    } else {
      Icons.push(chosenIcon.src);
    }
    console.log(Icons.length);
    chosenIcon.id = 'avoid-clicks-p2';
    domElements.numberOfPlayer = 1;
  }

  Icons = icon;

  return { Icons };
};

export default choosePlayerIcon;
export { Icons };
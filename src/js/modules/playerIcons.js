const choosePlayerIcon = (event) => {
  const chosenIcon = event.target;
  if (numberOfPlayer === 1) {
    if (Icons[0]) {
      document.getElementById('avoid-clicks').id = '';
      Icons[0] = chosenIcon.src;
    } else {
      Icons.push(chosenIcon.src);
    }
    chosenIcon.id = 'avoid-clicks';
    numberOfPlayer = 2;
  } else {
    if (Icons[1]) {
      document.getElementById('avoid-clicks-p2').id = '';
      Icons[1] = chosenIcon.src;
    } else {
      Icons.push(chosenIcon.src);
    }

    chosenIcon.id = 'avoid-clicks-p2';
    numberOfPlayer = 1;
  }

  return { Icons };
};

module.exports = choosePlayerIcon;
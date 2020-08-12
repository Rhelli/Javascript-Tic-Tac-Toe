// PLAYERS - FACTORY FUNCTIONS
const game = (() => {
  let count = 1;
  let numberOfPlayer = 1;
  const namePlayerOne = document.getElementById('player-one');
  const namePlayerTwo = document.getElementById('player-two');
  const allIcons = document.querySelectorAll('.character-item');
  const playerTurnIndicator = document.getElementById('player-turn');
  let currentPlayer = '';
  let oppositePlayer = '';
  const Icons = [];
  const roundCounter = document.getElementById('turn-counter');
  const playerOneIcon = document.getElementById('activePlayerOne');
  const playerTwoIcon = document.getElementById('activePlayerTwo');

  const styles = (() => {
    const formContainer = document.getElementById('form-container');
    const removeForm = () => formContainer.style.display = 'none';
    const addForm = () => formContainer.style.display = 'flex';
    const displayIcon = (icon, container) => {
      const imgElement = document.createElement('img');
      imgElement.src = icon;
      container.appendChild(imgElement);
    };
    const paintBackground = (color, element) => {
      element.style.background = color;
    };
    const disableBackground = (color, element) => {
      element.style.background = '';
    };
    const initialBackground = (element) => element.style.background = 'violet';
    const displayRounds = (element) => {
      if (roundCounter.innerHTML === '') {
        roundCounter.innerHTML = 'Turn 1';
      } else {
        roundCounter.innerHTML = `Turn ${element}.`;
      }
      playerTurnIndicator.innerHTML = `It is ${oppositePlayer.getName()}'s turn.`;
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

  const Player = (name, symbol, playerNumber, img, background) => {
    getName = () => name;
    getSymbol = () => symbol;
    getImg = () => img;
    getNumber = () => playerNumber;
    getBackground = () => background;
    return {
      getName,
      getSymbol,
      getNumber,
      getImg,
      getBackground,
    };
  };

  const choosePlayerIcon = (event) => {
    const chosenIcon = event.target;
    if (numberOfPlayer == 1) {
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

  const gameInit = () => {
    if (namePlayerOne.value === '' || namePlayerTwo.value === '') {
      alert("Please add both players' names to continue.");
      return false;
    }
    if (Icons.length < 2) {
      alert('Please select a character for both players to continue.');
      return false;
    }
    if (namePlayerOne.value !== '' && namePlayerTwo.value !== '' && Icons.length === 2) {
      playerOne = Player(namePlayerOne.value, 'X', 1, Icons[0], 'mediumaquamarine');
      playerTwo = Player(namePlayerTwo.value, 'O', 2, Icons[1], 'cyan');
      currentPlayer = playerOne;
      oppositePlayer = playerTwo;
      styles.displayIcon(playerOne.getImg(), playerOneIcon);
      styles.displayIcon(playerTwo.getImg(), playerTwoIcon);
      styles.removeForm();
      return true;
    }
    return false;
  };

  allIcons.forEach((element) => {
    element.addEventListener('click', choosePlayerIcon, false);
  });

  // GAMEBOARD
  const gameBoard = (() => {
    const cells = document.querySelectorAll('.cell');

    const reset = () => {
      cells.forEach((element) => {
        element.innerHTML = '';
        element.dataset.datasymbol = '';
        styles.initialBackground(element);
        count = 1;
        roundCounter.innerHTML = 'No Turns Yet.';
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

    const winningValidation = (array, symbol) => {
      let roundWon = false;
      const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = array[winCondition[0]];
        const b = array[winCondition[1]];
        const c = array[winCondition[2]];
        const aa = document.getElementById(`c${winCondition[0]}`);
        const bb = document.getElementById(`c${winCondition[1]}`);
        const cc = document.getElementById(`c${winCondition[2]}`);
        if (a === symbol && b === symbol && c === symbol) {
          const style = [aa, bb, cc];
          roundWon = true;
          style.forEach((element) => {
            element.style.background = 'green ';
          });
          return roundWon;
        }
      }
      return roundWon;
    };

    const updateBoardArray = () => {
      const cellsArray = Array.from(cells);
      const renderBoard = cellsArray.map(
        (cell) => (cell = cell.dataset.datasymbol),
      );
      return renderBoard;
    };

    const playerSwitch = () => {
      styles.displayRounds(count);

      if (winningValidation(updateBoardArray(), currentPlayer.getSymbol()) === false && count === 9) {
        setTimeout(() => {
          alert(
            "You both suck so hard. Would you like to play again to prove that you dont both suck as much as each other or are you both absolute losers who have no lives and cant even win a simple game of tic tac toe. I mean seriously, how difficult is it to place three symbols in a row. Do you even like Game of Thrones or Lord of The Rings? I bet you're both absolute neckbeards who live in the basement and dont meet the national recommended dietry requirements for vitamin d.",
          );
          confirm('Would you like to play again? 🙂 ❤️❤️❤️ 💕💕💕')
            ? reset(cells)
            : alert('Knew it.');
        }, 450);
      } else if (winningValidation(updateBoardArray(), currentPlayer.getSymbol())) {
        setTimeout(() => {
          const rematch = confirm(
            `${currentPlayer.getName()} has won. Would you like to play again?`,
          );
          if (rematch === true) {
            reset(cells);
          } else {
            alert('Loser.');
          }
        }, 450);
      } else if (currentPlayer.getNumber() === 1) {
        styles.disableBackground(currentPlayer.getBackground(), playerTwoIcon);
        currentPlayer = playerTwo;
        oppositePlayer = playerOne;
        styles.paintBackground(currentPlayer.getBackground(), playerOneIcon);
      } else {
        styles.disableBackground(currentPlayer.getBackground(), playerOneIcon);
        currentPlayer = playerOne;
        oppositePlayer = playerTwo;
        styles.paintBackground(currentPlayer.getBackground(), playerTwoIcon);
      }

      count++;
    };

    const ifCellEmpty = (event, symbol, img) => {
      if (event.target.innerHTML !== '') {
        alert('But bro');
      } else {
        imgE = document.createElement('img');
        imgE.src = img;
        event.target.dataset.datasymbol = symbol;
        event.target.appendChild(imgE);
        playerSwitch();
      }
    };


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

    cells.forEach((cell) => cell.addEventListener('click', clickCell, false));
    return { clickCell, reset };
  })();


  return { gameInit, gameBoard };
})();


/*
TO DO LIST
  - ADD FORM THAT APPEARS ON GAME STARTUP
    - LIST PROMPTS USERS FOR THEIR NAMES
    - USERS CAN CHOOSE THEIR SYMBOLS / ICONS
    - FORM'S BUTTON STARTS THE GAME
    - FORM REAPPEARS AT THE END OF THE GAME

  - COLORS & DESIGN
    - STONE BACKGROUND (RED)
    - WOOD FOR TABLE EFFECT (SLATEBLUE)
    - PARCHMENT FOR THE GAMEBOARD (GREEN)
    - YELLOW COLOR????

  - USER ICONS / TURN COUNTER
    - USERS SELECT THEIR ICONS FROM THE FORM
    - ICONS ARE DISPLAYED ON THE RIGHT HAND SIDE OF THE BOARD
    - RED & GREEN TRAFFIC LIGHTS BESIDE EACH PLAYERS ICON, GREEN FOR THEIR TURN AND RED WHEN IT ISNT

*/

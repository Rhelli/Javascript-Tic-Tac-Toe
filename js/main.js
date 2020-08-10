// PLAYERS - FACTORY FUNCTIONS
const game = (() => {
  let count = 1;
  let numberOfPlayer = 1;
  const namePlayerOne = document.getElementById('player-one');
  const namePlayerTwo = document.getElementById('player-two');
  const allIcons = document.querySelectorAll('.character-item');
  let currentPlayer = '';
  const Icons = [];

  const Player = (name, symbol, playerNumber, img) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    const setPlayerSymbol = (symbol) => {
      img = symbol;
    };
    const getImg = () => img;
    const getNumber = () => playerNumber;
    return {
      getName, getSymbol, getNumber, getImg, setPlayerSymbol,
    };
  };

  const choosePlayerIcon = (event) => {
    const chosenIcon = event.target.src;
    if (Icons.length < 2) {
      if (numberOfPlayer = 1) {
        Icons.push(chosenIcon);
        numberOfPlayer = 2;
      } else {
        Icons.push(chosenIcon);
        numberOfPlayer = 1;
      }
    }

    // currentPlayer.setPlayerSymbol(chosenSymbol);
    return { Icons };
  };


  const gameInit = () => {
    if (namePlayerOne.value !== '' && namePlayerTwo.value !== '' && Icons.length === 2) {
      playerOne = Player(namePlayerOne.value, 'X', 1, Icons[0]);
      playerTwo = Player(namePlayerTwo.value, 'O', 2, Icons[1]);
      currentPlayer = playerOne;
    }
  };

  allIcons.forEach(element => { element.addEventListener('click', choosePlayerIcon, false); });

  // GAMEBOARD
  const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    const boardContainer = document.getElementById('gameboard');
    const cells = document.querySelectorAll('.cell');

    const checkForThree = (one, two, three, symb) => {
      // (one === two && two === three && one === three) ? true : false;
      if (one === `${symb}` && two === `${symb}` && three === `${symb}`) {
        return true;
      }
      return false;
    };

    const reset = (array) => {
      array.forEach(element => {
        element.innerHTML = '';
        element.dataset.datasymbol = '';
        count = 1;
      });
    };

    const resetButton = () => {
      cells.forEach(cells => {
        cells.innerHTML = '';
        cells.dataset.datasymbol = '';
        count = 1;
      });
      alert('LETS NOT PLAY MURDERBALL!!!!!!');
    };

    //const winningValidation = (array, symbol) => {
    //  // HORIZONTAL
    //  if (checkForThree(array[0], array[1], array[2], symbol)) {
    //    const win = document.querySelectorAll('#c1, #c2, #c3');
    //    const winningwin = [...win];
    //    winningwin.forEach(element => {
    //      element.style.background = 'green ';
    //    });
    //    return true;
    //  }
    //  if (checkForThree(array[3], array[4], array[5], symbol)) {
    //    return true;
    //  }
    //  if (checkForThree(array[6], array[7], array[8], symbol)) {
    //    return true;
    //  }
    //  // VERTICAL
    //  if (checkForThree(array[0], array[3], array[6], symbol)) {
    //    return true;
    //  }
    //  if (checkForThree(array[1], array[4], array[7], symbol)) {
    //    return true;
    //  }
    //  // DIAGONAL
    //  if (checkForThree(array[2], array[5], array[8], symbol)) {
    //    return true;
    //  }
    //  if (checkForThree(array[0], array[4], array[8], symbol)) {
    //    return true;
    //  }
    //  if (checkForThree(array[2], array[4], array[6], symbol)) {
    //    return true;
    //  }
    //};

    const winningValidation = (array) => {
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
        if (a === undefined || b === undefined || c === undefined) {
          continue;
        }
        if (a === b && b === c) {
          const style = [aa, bb, cc];
          roundWon = true;
          style.forEach(element => {
            element.style.background = 'green ';
          });
          return roundWon;
        }
      }
      return roundWon;
    };

    const updateBoardArray = () => {
      const cellsArray = Array.from(cells);
      const renderBoard = cellsArray.map(cell => cell = cell.dataset.datasymbol);
      return renderBoard;
    };

    const playerSwitch = () => {
      const rematch = confirm(`${currentPlayer.getName()} has won. Would you like to play again?`);
      const drawRematch = confirm(`Wow ${playerOne}, how did you not manage to beat ${playerTwo}? That guy is an IDIOT.`);
      let winCheck = winningValidation(updateBoardArray());
      //if (winningValidation(updateBoardArray())) {
      //  setTimeout(() => {
      //    if (rematch === true) {
      //      reset(cells);
      //    } else {
      //      alert('Loser.');
      //    }
      //  }, 450);
      //} else if (currentPlayer.getNumber() === 1) {
      //  currentPlayer = playerTwo;
      //} else {
      //  currentPlayer = playerOne;
      //}
      //if (winningValidation(updateBoardArray() === false && count === 9)) {
      //  setTimeout(() => {
      //    if (drawRematch === true) {
      //      reset(cells);
      //    } else {
      //      alert(`${playerOne}, I had so much faith in you....`);
      //    }
      //  }, 450);
      //}
      switch(winCheck) {
        case true:
          setTimeout(() => {
            if (rematch === true) {
              reset(cells);
            } else {
              alert('Loser.');
            }
          }, 450);
          break;

        case false && count === 9:
          setTimeout(() => {
            if (drawRematch === true) {
              reset(cells);
            } else {
              alert(`${playerOne}, I had so much faith in you....`);
            }
          }, 450);
          break;

        //default:
        //  (function() { 
        //    if (currentPlayer.getNumber() === 1) {
        //    currentPlayer = playerTwo;
        //    } else {
        //    currentPlayer = playerOne;
        //    }
        //  })();
      count++;
      }
    };

    const ifCellEmpty = (event, symbol, img) => {
      if (event.target.innerHTML !== '') {
        alert('But bro');
      } else {
        imgE = document.createElement('img');
        console.log(img);
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

    cells.forEach(cell => cell.addEventListener('click', clickCell, false));
    return { clickCell, reset, resetButton };
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


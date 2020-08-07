// PLAYERS - FACTORY FUNCTIONS
const game = (() => {
  let count = 1;
  const namePlayerOne = document.getElementById('player-one');
  const namePlayerTwo = document.getElementById('player-two');
  let currentPlayer = '';

  const Player = (name, symbol, playerNumber, img) => {
    getName = () => name;
    getSymbol = () => symbol;
    getImg  = () => img;
    getNumber = () => playerNumber;
    return { getName, getSymbol, getNumber, getImg };
  };

  const gameInit = () => {
    if (namePlayerOne.value !== '' && namePlayerTwo.value !== '') {
      playerOne = Player(namePlayerOne.value, 'X',1,gameBoard.symbolHandler().jon.src);
      playerTwo = Player(namePlayerTwo.value, 'O',2,gameBoard.symbolHandler().cersei.src);
      currentPlayer = playerOne;
    }
  };

  // GAMEBOARD
  const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    const boardContainer = document.getElementById('gameboard');
    const cells = document.querySelectorAll('.cell');

    const symbolHandler = () => {
      const allSymbols = document.querySelectorAll('.character-item');
      const symbolArray = Array.from(allSymbols);
      const symbolSources = symbolArray.map(symbol => symbol = symbol.src);
      const cersei = symbolArray[0];
      const jon = symbolArray[1];
      const dragon = symbolArray[2];
      const gandalf = symbolArray[3];
      const golum = symbolArray[4];
      const legolas = symbolArray[5];
      return {
        cersei, jon, dragon, gandalf, golum, legolas
      };
    };

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
        count = 0;
      });
    };

    const resetButton = () => {
      cells.forEach(cells => {
        cells.innerHTML = '';
        count = 0;
      });
      alert('LETS NOT PLAY MURDERBALL!!!!!!');
    };

    const winningValidation = (array, symbol) => {
      // HORIZONTAL
      if (checkForThree(array[0], array[1], array[2], symbol)) {
        return true;
      }
      if (checkForThree(array[3], array[4], array[5], symbol)) {
        return true;
      }
      if (checkForThree(array[6], array[7], array[8], symbol)) {
        return true;
      }
      // VERTICAL
      if (checkForThree(array[0], array[3], array[6], symbol)) {
        return true;
      }
      if (checkForThree(array[1], array[4], array[7], symbol)) {
        return true;
      }
      // DIAGONAL
      if (checkForThree(array[2], array[5], array[8], symbol)) {
        return true;
      }
      if (checkForThree(array[0], array[4], array[8], symbol)) {
        return true;
      }
      if (checkForThree(array[2], array[4], array[6], symbol)) {
        return true;
      }
    };

    const updateBoardArray = () => {
      const cellsArray = Array.from(cells);
      const renderBoard = cellsArray.map(cell => cell = cell.innerHTML);
      return renderBoard;
    };

    const playerSwitch = () => {
      console.log(count);
      console.log(updateBoardArray());
      if (winningValidation(updateBoardArray(), currentPlayer.getSymbol()) || count === 9) {
        alert('Press F');
        reset(cells);
      } else if (currentPlayer.getNumber() === 1) {
        currentPlayer = playerTwo;
      } else {
        currentPlayer = playerOne;
      }
      count++;
    };

    const ifCellEmpty = (event, symbol, img) => {
      if (event.target.innerHTML !== '') {
        alert('But bro');
      } else {
        imgE = document.createElement('img');
        console.log(img);
        imgE.src = img;
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

    //const clickCharacter = (event) => {
    //  if (event.target.getAttribute('src'))
    //}

    cells.forEach(cell => cell.addEventListener('click', clickCell, false));
    //allSymbols.forEach(symbol => symbol.addEventListener('click', clickCharacter, false));
    return { clickCell, reset, resetButton, symbolHandler };

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
/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
const game = (() => {
  let count = 1;
  let playerOne;
  let playerTwo;
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

  const Player = (name, symbol, playerNumber, img, background) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    const getImg = () => img;
    const getNumber = () => playerNumber;
    const getBackground = () => background;
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
      playerOne = Player(namePlayerOne.value, 'X', 1, Icons[0], 'rgba(144, 164, 174, 0.8');
      playerTwo = Player(namePlayerTwo.value, 'O', 2, Icons[1], 'rgba(241, 196, 15, 0.8');
      currentPlayer = playerOne;
      oppositePlayer = playerTwo;
      styles.displayIcon(playerOne.getImg(), playerOneIcon);
      styles.paintBackground(playerOne.getBackground(), playerOneIcon);
      styles.displayIcon(playerTwo.getImg(), playerTwoIcon);
      playerTurnIndicator.innerHTML = `It's ${currentPlayer.getName()}'s turn`;
      styles.removeForm();
      return true;
    }
    return false;
  };

  allIcons.forEach((element) => {
    element.addEventListener('click', choosePlayerIcon, false);
  });

  const gameBoard = (() => {
    const cells = document.querySelectorAll('.cell');

    const ifCellEmpty = (event, symbol, img) => {
      const imgE = document.createElement('img');
      imgE.src = img;
      event.target.dataset.datasymbol = symbol;
      event.target.appendChild(imgE);
      event.target.removeEventListener('click', clickCell, false);
      playerSwitch();
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

      for (let i = 0; i <= 7; i += 1) {
        const winCondition = winningConditions[i];
        const a = array[winCondition[0]];
        const b = array[winCondition[1]];
        const c = array[winCondition[2]];
        const aa = document.getElementById(`c${winCondition[0]}`);
        const bb = document.getElementById(`c${winCondition[1]}`);
        const cc = document.getElementById(`c${winCondition[2]}`);
        if (a === symbol && b === symbol && c === symbol) {
          roundWon = true;
          if (currentPlayer === playerOne) {
            aa.style.background = playerOne.getBackground();
            bb.style.background = playerOne.getBackground();
            cc.style.background = playerOne.getBackground();
          } else {
            aa.style.background = playerTwo.getBackground();
            bb.style.background = playerTwo.getBackground();
            cc.style.background = playerTwo.getBackground();
          }
          return roundWon;
        }
      }
      return roundWon;
    };

    const updateBoardArray = () => {
      const cellsArray = Array.from(cells);
      const renderBoard = cellsArray.map(
        (cell => cell.dataset.datasymbol),
      );
      return renderBoard;
    };

    const playerSwitch = () => {
      styles.displayRounds(count + 1);

      if (winningValidation(updateBoardArray(), currentPlayer.getSymbol()) === false && count === 9) {
        setTimeout(() => {
          const reMatch = confirm("It's a draw! Would you like to play again?");
          if (reMatch) {
            reset(cells);
          } else {
            alert('How sad.');
          }
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
      } else if (oppositePlayer.getNumber() === 1) {
        styles.disableBackground(currentPlayer.getBackground(), playerTwoIcon);
        currentPlayer = playerOne;
        oppositePlayer = playerTwo;
        styles.paintBackground(currentPlayer.getBackground(), playerOneIcon);
      } else {
        styles.disableBackground(currentPlayer.getBackground(), playerOneIcon);
        currentPlayer = playerTwo;
        oppositePlayer = playerOne;
        styles.paintBackground(currentPlayer.getBackground(), playerTwoIcon);
      }
      count++;
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsc0NBQXNDO0FBQ3BFLDJCQUEyQixzQ0FBc0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywwQ0FBMEM7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0EsK0NBQStDLHlCQUF5QjtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHdCQUF3QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9ELCtDQUErQyxnQkFBZ0I7QUFDL0QsK0NBQStDLGdCQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLEdBQUc7O0FBRUgsVUFBVTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2FtZSA9ICgoKSA9PiB7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBsZXQgcGxheWVyT25lO1xyXG4gIGxldCBwbGF5ZXJUd287XHJcbiAgbGV0IG51bWJlck9mUGxheWVyID0gMTtcclxuICBjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcclxuICBjb25zdCBuYW1lUGxheWVyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10d28nKTtcclxuICBjb25zdCBhbGxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItaXRlbScpO1xyXG4gIGNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcclxuICBsZXQgY3VycmVudFBsYXllciA9ICcnO1xyXG4gIGxldCBvcHBvc2l0ZVBsYXllciA9ICcnO1xyXG4gIGNvbnN0IEljb25zID0gW107XHJcbiAgY29uc3Qgcm91bmRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tY291bnRlcicpO1xyXG4gIGNvbnN0IHBsYXllck9uZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyT25lJyk7XHJcbiAgY29uc3QgcGxheWVyVHdvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJUd28nKTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7IGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfTtcclxuICAgIGNvbnN0IGFkZEZvcm0gPSAoKSA9PiB7IGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgfTtcclxuICAgIGNvbnN0IGRpc3BsYXlJY29uID0gKGljb24sIGNvbnRhaW5lcikgPT4ge1xyXG4gICAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIGltZ0VsZW1lbnQuc3JjID0gaWNvbjtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHBhaW50QmFja2dyb3VuZCA9IChjb2xvciwgZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxuICAgIH07XHJcbiAgICBjb25zdCBkaXNhYmxlQmFja2dyb3VuZCA9IChjb2xvciwgZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgyNTYsIDI1NiwgMjU2LCAwLjUpJztcclxuICAgIH07XHJcbiAgICBjb25zdCBpbml0aWFsQmFja2dyb3VuZCA9IChlbGVtZW50KSA9PiB7IGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7IH07XHJcbiAgICBjb25zdCBkaXNwbGF5Um91bmRzID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKHJvdW5kQ291bnRlci5pbm5lckhUTUwgPT09ICdObyBUdXJucyBZZXQnKSB7XHJcbiAgICAgICAgcm91bmRDb3VudGVyLmlubmVySFRNTCA9ICdUdXJuIDEnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdW5kQ291bnRlci5pbm5lckhUTUwgPSBgVHVybiAke2VsZW1lbnR9LmA7XHJcbiAgICAgIH1cclxuICAgICAgcGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSBgSXQgaXMgJHtvcHBvc2l0ZVBsYXllci5nZXROYW1lKCl9J3MgdHVybmA7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFkZEZvcm0sXHJcbiAgICAgIGluaXRpYWxCYWNrZ3JvdW5kLFxyXG4gICAgICByZW1vdmVGb3JtLFxyXG4gICAgICBkaXNwbGF5Um91bmRzLFxyXG4gICAgICBwbGF5ZXJUdXJuSW5kaWNhdG9yLFxyXG4gICAgICBkaXNwbGF5SWNvbixcclxuICAgICAgcGFpbnRCYWNrZ3JvdW5kLFxyXG4gICAgICBkaXNhYmxlQmFja2dyb3VuZCxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuXHJcbiAgY29uc3QgUGxheWVyID0gKG5hbWUsIHN5bWJvbCwgcGxheWVyTnVtYmVyLCBpbWcsIGJhY2tncm91bmQpID0+IHtcclxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xyXG4gICAgY29uc3QgZ2V0U3ltYm9sID0gKCkgPT4gc3ltYm9sO1xyXG4gICAgY29uc3QgZ2V0SW1nID0gKCkgPT4gaW1nO1xyXG4gICAgY29uc3QgZ2V0TnVtYmVyID0gKCkgPT4gcGxheWVyTnVtYmVyO1xyXG4gICAgY29uc3QgZ2V0QmFja2dyb3VuZCA9ICgpID0+IGJhY2tncm91bmQ7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXROYW1lLFxyXG4gICAgICBnZXRTeW1ib2wsXHJcbiAgICAgIGdldE51bWJlcixcclxuICAgICAgZ2V0SW1nLFxyXG4gICAgICBnZXRCYWNrZ3JvdW5kLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaG9vc2VQbGF5ZXJJY29uID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBjaG9zZW5JY29uID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKG51bWJlck9mUGxheWVyID09PSAxKSB7XHJcbiAgICAgIGlmIChJY29uc1swXSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MnKS5pZCA9ICcnO1xyXG4gICAgICAgIEljb25zWzBdID0gY2hvc2VuSWNvbi5zcmM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgSWNvbnMucHVzaChjaG9zZW5JY29uLnNyYyk7XHJcbiAgICAgIH1cclxuICAgICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xyXG4gICAgICBudW1iZXJPZlBsYXllciA9IDI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoSWNvbnNbMV0pIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzLXAyJykuaWQgPSAnJztcclxuICAgICAgICBJY29uc1sxXSA9IGNob3Nlbkljb24uc3JjO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIEljb25zLnB1c2goY2hvc2VuSWNvbi5zcmMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaG9zZW5JY29uLmlkID0gJ2F2b2lkLWNsaWNrcy1wMic7XHJcbiAgICAgIG51bWJlck9mUGxheWVyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBJY29ucyB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdhbWVJbml0ID0gKCkgPT4ge1xyXG4gICAgaWYgKG5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnIHx8IG5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGFkZCBib3RoIHBsYXllcnMnIG5hbWVzIHRvIGNvbnRpbnVlLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKEljb25zLmxlbmd0aCA8IDIpIHtcclxuICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBjaGFyYWN0ZXIgZm9yIGJvdGggcGxheWVycyB0byBjb250aW51ZS4nKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKG5hbWVQbGF5ZXJPbmUudmFsdWUgIT09ICcnICYmIG5hbWVQbGF5ZXJUd28udmFsdWUgIT09ICcnICYmIEljb25zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICBwbGF5ZXJPbmUgPSBQbGF5ZXIobmFtZVBsYXllck9uZS52YWx1ZSwgJ1gnLCAxLCBJY29uc1swXSwgJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44Jyk7XHJcbiAgICAgIHBsYXllclR3byA9IFBsYXllcihuYW1lUGxheWVyVHdvLnZhbHVlLCAnTycsIDIsIEljb25zWzFdLCAncmdiYSgyNDEsIDE5NiwgMTUsIDAuOCcpO1xyXG4gICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xyXG4gICAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuICAgICAgc3R5bGVzLmRpc3BsYXlJY29uKHBsYXllck9uZS5nZXRJbWcoKSwgcGxheWVyT25lSWNvbik7XHJcbiAgICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQocGxheWVyT25lLmdldEJhY2tncm91bmQoKSwgcGxheWVyT25lSWNvbik7XHJcbiAgICAgIHN0eWxlcy5kaXNwbGF5SWNvbihwbGF5ZXJUd28uZ2V0SW1nKCksIHBsYXllclR3b0ljb24pO1xyXG4gICAgICBwbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCdzICR7Y3VycmVudFBsYXllci5nZXROYW1lKCl9J3MgdHVybmA7XHJcbiAgICAgIHN0eWxlcy5yZW1vdmVGb3JtKCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VQbGF5ZXJJY29uLCBmYWxzZSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdhbWVCb2FyZCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcblxyXG4gICAgY29uc3QgaWZDZWxsRW1wdHkgPSAoZXZlbnQsIHN5bWJvbCwgaW1nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGltZ0UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgaW1nRS5zcmMgPSBpbWc7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGFzeW1ib2wgPSBzeW1ib2w7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChpbWdFKTtcclxuICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSk7XHJcbiAgICAgIHBsYXllclN3aXRjaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbGlja0NlbGwgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKG5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnICYmIG5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzLlwiKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IGN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCk7XHJcbiAgICAgICAgY29uc3QgaW1nID0gY3VycmVudFBsYXllci5nZXRJbWcoKTtcclxuICAgICAgICBpZkNlbGxFbXB0eShldmVudCwgc3ltYm9sLCBpbWcpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICBjZWxscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2VsbCwgZmFsc2UpO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0LmRhdGFzeW1ib2wgPSAnJztcclxuICAgICAgICBzdHlsZXMuaW5pdGlhbEJhY2tncm91bmQoZWxlbWVudCk7XHJcbiAgICAgICAgY291bnQgPSAxO1xyXG4gICAgICAgIHJvdW5kQ291bnRlci5pbm5lckhUTUwgPSAnVHVybiAxLic7XHJcbiAgICAgICAgcGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwbGF5ZXJPbmVJY29uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHBsYXllclR3b0ljb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBwbGF5ZXJPbmVJY29uKTtcclxuICAgICAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIHBsYXllclR3b0ljb24pO1xyXG4gICAgICAgIGFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VQbGF5ZXJJY29uLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3R5bGVzLmFkZEZvcm0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHdpbm5pbmdWYWxpZGF0aW9uID0gKGFycmF5LCBzeW1ib2wpID0+IHtcclxuICAgICAgbGV0IHJvdW5kV29uID0gZmFsc2U7XHJcbiAgICAgIGNvbnN0IHdpbm5pbmdDb25kaXRpb25zID0gW1xyXG4gICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICBbMywgNCwgNV0sXHJcbiAgICAgICAgWzYsIDcsIDhdLFxyXG4gICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICBbMSwgNCwgN10sXHJcbiAgICAgICAgWzIsIDUsIDhdLFxyXG4gICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICBbMiwgNCwgNl0sXHJcbiAgICAgIF07XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCB3aW5Db25kaXRpb24gPSB3aW5uaW5nQ29uZGl0aW9uc1tpXTtcclxuICAgICAgICBjb25zdCBhID0gYXJyYXlbd2luQ29uZGl0aW9uWzBdXTtcclxuICAgICAgICBjb25zdCBiID0gYXJyYXlbd2luQ29uZGl0aW9uWzFdXTtcclxuICAgICAgICBjb25zdCBjID0gYXJyYXlbd2luQ29uZGl0aW9uWzJdXTtcclxuICAgICAgICBjb25zdCBhYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMF19YCk7XHJcbiAgICAgICAgY29uc3QgYmIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzFdfWApO1xyXG4gICAgICAgIGNvbnN0IGNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblsyXX1gKTtcclxuICAgICAgICBpZiAoYSA9PT0gc3ltYm9sICYmIGIgPT09IHN5bWJvbCAmJiBjID09PSBzeW1ib2wpIHtcclxuICAgICAgICAgIHJvdW5kV29uID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXJPbmUpIHtcclxuICAgICAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJPbmUuZ2V0QmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJUd28uZ2V0QmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyVHdvLmdldEJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcm91bmRXb247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByb3VuZFdvbjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oY2VsbHMpO1xyXG4gICAgICBjb25zdCByZW5kZXJCb2FyZCA9IGNlbGxzQXJyYXkubWFwKFxyXG4gICAgICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHJlbmRlckJvYXJkO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJTd2l0Y2ggPSAoKSA9PiB7XHJcbiAgICAgIHN0eWxlcy5kaXNwbGF5Um91bmRzKGNvdW50ICsgMSk7XHJcblxyXG4gICAgICBpZiAod2lubmluZ1ZhbGlkYXRpb24odXBkYXRlQm9hcmRBcnJheSgpLCBjdXJyZW50UGxheWVyLmdldFN5bWJvbCgpKSA9PT0gZmFsc2UgJiYgY291bnQgPT09IDkpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlTWF0Y2ggPSBjb25maXJtKFwiSXQncyBhIGRyYXchIFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/XCIpO1xyXG4gICAgICAgICAgaWYgKHJlTWF0Y2gpIHtcclxuICAgICAgICAgICAgcmVzZXQoY2VsbHMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0hvdyBzYWQuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNDUwKTtcclxuICAgICAgfSBlbHNlIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCkpKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZW1hdGNoID0gY29uZmlybShcclxuICAgICAgICAgICAgYCR7Y3VycmVudFBsYXllci5nZXROYW1lKCl9IGhhcyB3b24uIFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/YCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAocmVtYXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXNldChjZWxscyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnTG9zZXIuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNDUwKTtcclxuICAgICAgfSBlbHNlIGlmIChvcHBvc2l0ZVBsYXllci5nZXROdW1iZXIoKSA9PT0gMSkge1xyXG4gICAgICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgcGxheWVyVHdvSWNvbik7XHJcbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcclxuICAgICAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuICAgICAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBwbGF5ZXJPbmVJY29uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIHBsYXllck9uZUljb24pO1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUd287XHJcbiAgICAgICAgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbiAgICAgICAgc3R5bGVzLnBhaW50QmFja2dyb3VuZChjdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgcGxheWVyVHdvSWNvbik7XHJcbiAgICAgIH1cclxuICAgICAgY291bnQrKztcclxuICAgIH07XHJcblxyXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2VsbCwgZmFsc2UpKTtcclxuICAgIHJldHVybiB7IGNsaWNrQ2VsbCwgcmVzZXQgfTtcclxuICB9KSgpO1xyXG5cclxuICByZXR1cm4geyBnYW1lSW5pdCwgZ2FtZUJvYXJkIH07XHJcbn0pKCk7XHJcblxyXG4vKlxyXG5UTyBETyBMSVNUXHJcbiAgLSBBREQgRk9STSBUSEFUIEFQUEVBUlMgT04gR0FNRSBTVEFSVFVQXHJcbiAgICAtIExJU1QgUFJPTVBUUyBVU0VSUyBGT1IgVEhFSVIgTkFNRVNcclxuICAgIC0gVVNFUlMgQ0FOIENIT09TRSBUSEVJUiBTWU1CT0xTIC8gSUNPTlNcclxuICAgIC0gRk9STSdTIEJVVFRPTiBTVEFSVFMgVEhFIEdBTUVcclxuICAgIC0gRk9STSBSRUFQUEVBUlMgQVQgVEhFIEVORCBPRiBUSEUgR0FNRVxyXG5cclxuICAtIENPTE9SUyAmIERFU0lHTlxyXG4gICAgLSBTVE9ORSBCQUNLR1JPVU5EIChSRUQpXHJcbiAgICAtIFdPT0QgRk9SIFRBQkxFIEVGRkVDVCAoU0xBVEVCTFVFKVxyXG4gICAgLSBQQVJDSE1FTlQgRk9SIFRIRSBHQU1FQk9BUkQgKEdSRUVOKVxyXG4gICAgLSBZRUxMT1cgQ09MT1I/Pz8/XHJcblxyXG4gIC0gVVNFUiBJQ09OUyAvIFRVUk4gQ09VTlRFUlxyXG4gICAgLSBVU0VSUyBTRUxFQ1QgVEhFSVIgSUNPTlMgRlJPTSBUSEUgRk9STVxyXG4gICAgLSBJQ09OUyBBUkUgRElTUExBWUVEIE9OIFRIRSBSSUdIVCBIQU5EIFNJREUgT0YgVEhFIEJPQVJEXHJcbiAgICAtIFJFRCAmIEdSRUVOIFRSQUZGSUMgTElHSFRTIEJFU0lERSBFQUNIIFBMQVlFUlMgSUNPTiwgR1JFRU4gRk9SIFRIRUlSIFRVUk4gQU5EIFJFRCBXSEVOIElUIElTTlRcclxuXHJcbiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
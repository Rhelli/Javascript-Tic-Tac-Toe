/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/clickCell.js":
/*!*************************************!*\
  !*** ./src/js/modules/clickCell.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const domElements = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
const game = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
const ifCellEmpty = __webpack_require__(/*! ./ifCellEmpty */ "./src/js/modules/ifCellEmpty.js");

const clickCell = (event) => {
  if (domElements.namePlayerOne.value === '' && domElements.namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const symbol = game.currentPlayer.getSymbol();
    const img = game.currentPlayer.getImg();
    ifCellEmpty(event, symbol, img);
  }
};

module.exports = clickCell;


/***/ }),

/***/ "./src/js/modules/domElements.js":
/*!***************************************!*\
  !*** ./src/js/modules/domElements.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

const domElements = () => {
  const namePlayerOne = document.getElementById('player-one');
  const namePlayerTwo = document.getElementById('player-two');
  const allIcons = document.querySelectorAll('.character-item');
  const playerTurnIndicator = document.getElementById('player-turn');
  const Icons = [];
  const roundCounter = document.getElementById('turn-counter');
  const playerOneIcon = document.getElementById('activePlayerOne');
  const playerTwoIcon = document.getElementById('activePlayerTwo');
  const cells = document.querySelectorAll('.cell');

  return {
    cells, playerTwoIcon, playerOneIcon, roundCounter, Icons, playerTurnIndicator, namePlayerTwo, namePlayerOne, allIcons,
  };
};

/***/ }),

/***/ "./src/js/modules/domManipulation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/domManipulation.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const game = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
const domElements = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");

const styles = () => {
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
    if (domElements.roundCounter.innerHTML === 'No Turns Yet') {
      domElements.roundCounter.innerHTML = 'Turn 1';
    } else {
      domElements.roundCounter.innerHTML = `Turn ${element}.`;
    }
    game.playerTurnIndicator.innerHTML = `It is ${game.oppositePlayer.getName()}'s turn`;
  };

  return {
    addForm,
    initialBackground,
    removeForm,
    displayRounds,
    // playerTurnIndicator, why ?
    displayIcon,
    paintBackground,
    disableBackground,
  };
};

module.exports = styles;

/***/ }),

/***/ "./src/js/modules/game.js":
/*!********************************!*\
  !*** ./src/js/modules/game.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 47:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboard = __webpack_require__(/*! ./gameboard */ "./src/js/modules/gameboard.js");
const styles = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
const playerCreator = __webpack_require__(/*! ./player */ "./src/js/modules/player.js");
const playerIcons = __webpack_require__(/*! ./playerIcons */ "./src/js/modules/playerIcons.js");
const gameInit = __webpack_require__(/*! ./gameInit */ "./src/js/modules/gameInit.js");
const ifCellEmpty = __webpack_require__(/*! ./ifCellEmpty */ "./src/js/modules/ifCellEmpty.js");
const clickCell = __webpack_require__(/*! ./clickCell.js */ "./src/js/modules/clickCell.js");
const reset = __webpack_require__(/*! ./reset */ "./src/js/modules/reset.js");
const winningValidation = __webpack_require__(/*! ./winningValidations */ "./src/js/modules/winningValidations.js");
const updateBoard = __webpack_require__(/*! ./updateBoard */ "./src/js/modules/updateBoard.js");
const playerSwitch = __webpack_require__(/*! ./playerSwitch */ "./src/js/modules/playerSwitch.js");
const domElements = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");

const game = () => {
  const count = 1;
  let playerOne;
  let playerTwo;
  const numberOfPlayers = 1;
  // const namePlayerOne = document.getElementById('player-one');
  // const namePlayerTwo = document.getElementById('player-two');
  // const allIcons = document.querySelectorAll('.character-item');
  // const playerTurnIndicator = document.getElementById('player-turn');
  const currentPlayer = '';
  const oppositePlayer = '';
  // const Icons = [];
  // const roundCounter = document.getElementById('turn-counter');
  // const playerOneIcon = document.getElementById('activePlayerOne');
  // const playerTwoIcon = document.getElementById('activePlayerTwo');

  styles();
  gameInit();
  gameboard();
  domElements.allIcons.forEach((element) => {
    element.addEventListener('click', playerIcons, false);
  });
  // return { gameInit, gameBoard };
  return {
    count,
    playerOne,
    playerTwo,
    numberOfPlayers,
    currentPlayer,
    oppositePlayer,
  };
};

module.exports = game;

/***/ }),

/***/ "./src/js/modules/gameInit.js":
/*!************************************!*\
  !*** ./src/js/modules/gameInit.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const domElements = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
const game = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
const domManipulation = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
const player = __webpack_require__(/*! ./player */ "./src/js/modules/player.js");

const gameInit = () => {
  if (domElements.namePlayerOne.value === '' || domElements.namePlayerTwo.value === '') {
    alert("Please add both players' names to continue.");
    return false;
  }
  if (domElements.Icons.length < 2) {
    alert('Please select a character for both players to continue.');
    return false;
  }
  if (domElements.namePlayerOne.value !== '' && domElements.namePlayerTwo.value !== '' && domElements.Icons.length === 2) {
    game.playerOne = player(domElements.namePlayerOne.value, 'X', 1, domElements.Icons[0], 'rgba(144, 164, 174, 0.8');
    game.playerTwo = player(domElements.namePlayerTwo.value, 'O', 2, domElements.Icons[1], 'rgba(241, 196, 15, 0.8');
    game.currentPlayer = game.playerOne;
    game.oppositePlayer = game.playerTwo;
    domManipulation.displayIcon(game.playerOne.getImg(), domElements.playerOneIcon);
    domManipulation.paintBackground(game.playerOne.getBackground(), domElements.playerOneIcon);
    domManipulation.displayIcon(game.playerTwo.getImg(), domElements.playerTwoIcon);
    domElements.playerTurnIndicator.innerHTML = `It's ${game.currentPlayer.getName()}'s turn`;
    domManipulation.removeForm();
    return true;
  }
  return false;
};

module.exports = gameInit;

/***/ }),

/***/ "./src/js/modules/gameboard.js":
/*!*************************************!*\
  !*** ./src/js/modules/gameboard.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const domElements = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
const clickCell = __webpack_require__(/*! ./clickCell */ "./src/js/modules/clickCell.js");

const gameboard = () => {
  domElements.cells.forEach((cell) => cell.addEventListener('click', clickCell, false));
  // it seems like we don't need to return anything
  // Rory thinks that the most crucial refactoring part of this is where are we calling gameboard.
  // return { clickCell };
};

module.exports = gameboard;

/***/ }),

/***/ "./src/js/modules/ifCellEmpty.js":
/*!***************************************!*\
  !*** ./src/js/modules/ifCellEmpty.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const clickCell = __webpack_require__(/*! ./clickCell */ "./src/js/modules/clickCell.js");
const playerSwitch = __webpack_require__(/*! ./playerSwitch */ "./src/js/modules/playerSwitch.js");

const ifCellEmpty = (event, symbol, img) => {
  const imgE = document.createElement('img');
  imgE.src = img;
  event.target.dataset.datasymbol = symbol;
  event.target.appendChild(imgE);
  event.target.removeEventListener('click', clickCell, false);
  playerSwitch();
};

module.exports = ifCellEmpty;

/***/ }),

/***/ "./src/js/modules/player.js":
/*!**********************************!*\
  !*** ./src/js/modules/player.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

const player = (name, symbol, playerNumber, img, background) => {
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

module.exports = player;

/***/ }),

/***/ "./src/js/modules/playerIcons.js":
/*!***************************************!*\
  !*** ./src/js/modules/playerIcons.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const domElements = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
const game = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");

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

/***/ }),

/***/ "./src/js/modules/playerSwitch.js":
/*!****************************************!*\
  !*** ./src/js/modules/playerSwitch.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

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

module.exports = playerSwitch;

/***/ }),

/***/ "./src/js/modules/reset.js":
/*!*********************************!*\
  !*** ./src/js/modules/reset.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const domElements = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
const game = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
const clickCell = __webpack_require__(/*! ./clickCell */ "./src/js/modules/clickCell.js");
const domManipulation = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
const choosePlayerIcon = __webpack_require__(/*! ./playerIcons */ "./src/js/modules/playerIcons.js");

const reset = () => {
  domElements.cells.forEach((element) => {
    element.addEventListener('click', clickCell, false);
    element.innerHTML = '';
    element.dataset.datasymbol = '';
    domManipulation.initialBackground(element);
    game.count = 1;
    domElements.roundCounter.innerHTML = 'Turn 1.';
    domElements.playerTurnIndicator.innerHTML = '';
    domElements.playerOneIcon.innerHTML = '';
    domElements.playerTwoIcon.innerHTML = '';
    domManipulation.disableBackground(game.currentPlayer.getBackground(), domElements.playerOneIcon);
    domManipulation.disableBackground(game.currentPlayer.getBackground(), domElements.playerTwoIcon);
    domElements.allIcons.forEach((element) => {
      element.addEventListener('click', choosePlayerIcon, false);
    });
    domManipulation.addForm();
  });
};

module.exports = reset;

/***/ }),

/***/ "./src/js/modules/updateBoard.js":
/*!***************************************!*\
  !*** ./src/js/modules/updateBoard.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

const updateBoardArray = () => {
  const cellsArray = Array.from(cells);
  const renderBoard = cellsArray.map(
    (cell => cell.dataset.datasymbol),
  );
  return renderBoard;
};

module.exports = updateBoardArray;

/***/ }),

/***/ "./src/js/modules/winningValidations.js":
/*!**********************************************!*\
  !*** ./src/js/modules/winningValidations.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const game = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");

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
      if (game.currentPlayer === game.playerOne) {
        aa.style.background = game.playerOne.getBackground();
        bb.style.background = game.playerOne.getBackground();
        cc.style.background = game.playerOne.getBackground();
      } else {
        aa.style.background = game.playerTwo.getBackground();
        bb.style.background = game.playerTwo.getBackground();
        cc.style.background = game.playerTwo.getBackground();
      }
      return roundWon;
    }
  }
  return roundWon;
};

module.exports = winningValidation;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
const game = __webpack_require__(/*! ./modules/game */ "./src/js/modules/game.js");
const gameboard = __webpack_require__(/*! ./modules/gameboard */ "./src/js/modules/gameboard.js");
const styles = __webpack_require__(/*! ./modules/domManipulation */ "./src/js/modules/domManipulation.js");
const playerCreator = __webpack_require__(/*! ./modules/player */ "./src/js/modules/player.js");
const playerIcons = __webpack_require__(/*! ./modules/playerIcons */ "./src/js/modules/playerIcons.js");
const gameInit = __webpack_require__(/*! ./modules/gameInit */ "./src/js/modules/gameInit.js");
const ifCellEmpty = __webpack_require__(/*! ./modules/ifCellEmpty */ "./src/js/modules/ifCellEmpty.js");
const clickCell = __webpack_require__(/*! ./modules/clickCell.js */ "./src/js/modules/clickCell.js");
const reset = __webpack_require__(/*! ./modules/reset */ "./src/js/modules/reset.js");
const winningValidation = __webpack_require__(/*! ./modules/winningValidations */ "./src/js/modules/winningValidations.js");
const updateBoard = __webpack_require__(/*! ./modules/updateBoard */ "./src/js/modules/updateBoard.js");
const playerSwitch = __webpack_require__(/*! ./modules/playerSwitch */ "./src/js/modules/playerSwitch.js");

game();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvY2xpY2tDZWxsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9nYW1lSW5pdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9pZkNlbGxFbXB0eS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9wbGF5ZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyU3dpdGNoLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvdXBkYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3dpbm5pbmdWYWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9CQUFvQixtQkFBTyxDQUFDLHNEQUFlO0FBQzNDLGFBQWEsbUJBQU8sQ0FBQyx3Q0FBUTtBQUM3QixvQkFBb0IsbUJBQU8sQ0FBQyxzREFBZTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2RBLGFBQWEsbUJBQU8sQ0FBQyx3Q0FBUTtBQUM3QixvQkFBb0IsbUJBQU8sQ0FBQyxzREFBZTs7QUFFM0M7QUFDQTtBQUNBLDRCQUE0QixzQ0FBc0M7QUFDbEUseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBDQUEwQztBQUNwRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQSxrREFBa0QsOEJBQThCO0FBQ2hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7Ozs7QUN4Q0Esa0JBQWtCLG1CQUFPLENBQUMsa0RBQWE7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLDhEQUFtQjtBQUMxQyxzQkFBc0IsbUJBQU8sQ0FBQyw0Q0FBVTtBQUN4QyxvQkFBb0IsbUJBQU8sQ0FBQyxzREFBZTtBQUMzQyxpQkFBaUIsbUJBQU8sQ0FBQyxnREFBWTtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQyxzREFBZTtBQUMzQyxrQkFBa0IsbUJBQU8s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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0QsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUM7Ozs7OztVQ3hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDckJBLGFBQWEsbUJBQU8sQ0FBQyxnREFBZ0I7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsMERBQXFCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyxzRUFBMkI7QUFDbEQsc0JBQXNCLG1CQUFPLENBQUMsb0RBQWtCO0FBQ2hELG9CQUFvQixtQkFBTyxDQUFDLDhEQUF1QjtBQUNuRCxpQkFBaUIsbUJBQU8sQ0FBQyx3REFBb0I7QUFDN0Msb0JBQW9CLG1CQUFPLENBQUMsOERBQXVCO0FBQ25ELGtCQUFrQixtQkFBTyxDQUFDLDZEQUF3QjtBQUNsRCxjQUFjLG1CQUFPLENBQUMsa0RBQWlCO0FBQ3ZDLDBCQUEwQixtQkFBTyxDQUFDLDRFQUE4QjtBQUNoRSxvQkFBb0IsbUJBQU8sQ0FBQyw4REFBdUI7QUFDbkQscUJBQXFCLG1CQUFPLENBQUMsZ0VBQXdCOztBQUVyRCxPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkb21FbGVtZW50cyA9IHJlcXVpcmUoJy4vZG9tRWxlbWVudHMnKTtcbmNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcbmNvbnN0IGlmQ2VsbEVtcHR5ID0gcmVxdWlyZSgnLi9pZkNlbGxFbXB0eScpO1xuXG5jb25zdCBjbGlja0NlbGwgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzLlwiKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN5bWJvbCA9IGdhbWUuY3VycmVudFBsYXllci5nZXRTeW1ib2woKTtcbiAgICBjb25zdCBpbWcgPSBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0SW1nKCk7XG4gICAgaWZDZWxsRW1wdHkoZXZlbnQsIHN5bWJvbCwgaW1nKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGlja0NlbGw7XG4iLCJjb25zdCBkb21FbGVtZW50cyA9ICgpID0+IHtcbiAgY29uc3QgbmFtZVBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItb25lJyk7XG4gIGNvbnN0IG5hbWVQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR3bycpO1xuICBjb25zdCBhbGxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItaXRlbScpO1xuICBjb25zdCBwbGF5ZXJUdXJuSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10dXJuJyk7XG4gIGNvbnN0IEljb25zID0gW107XG4gIGNvbnN0IHJvdW5kQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWNvdW50ZXInKTtcbiAgY29uc3QgcGxheWVyT25lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJPbmUnKTtcbiAgY29uc3QgcGxheWVyVHdvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJUd28nKTtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuXG4gIHJldHVybiB7XG4gICAgY2VsbHMsIHBsYXllclR3b0ljb24sIHBsYXllck9uZUljb24sIHJvdW5kQ291bnRlciwgSWNvbnMsIHBsYXllclR1cm5JbmRpY2F0b3IsIG5hbWVQbGF5ZXJUd28sIG5hbWVQbGF5ZXJPbmUsIGFsbEljb25zLFxuICB9O1xufTsiLCJjb25zdCBnYW1lID0gcmVxdWlyZSgnLi9nYW1lJyk7XG5jb25zdCBkb21FbGVtZW50cyA9IHJlcXVpcmUoJy4vZG9tRWxlbWVudHMnKTtcblxuY29uc3Qgc3R5bGVzID0gKCkgPT4ge1xuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gIGNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7IGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfTtcbiAgY29uc3QgYWRkRm9ybSA9ICgpID0+IHsgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyB9O1xuICBjb25zdCBkaXNwbGF5SWNvbiA9IChpY29uLCBjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nRWxlbWVudC5zcmMgPSBpY29uO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgcGFpbnRCYWNrZ3JvdW5kID0gKGNvbG9yLCBlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIH07XG4gIGNvbnN0IGRpc2FibGVCYWNrZ3JvdW5kID0gKGNvbG9yLCBlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMjU2LCAyNTYsIDI1NiwgMC41KSc7XG4gIH07XG4gIGNvbnN0IGluaXRpYWxCYWNrZ3JvdW5kID0gKGVsZW1lbnQpID0+IHsgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JzsgfTtcbiAgY29uc3QgZGlzcGxheVJvdW5kcyA9IChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPT09ICdObyBUdXJucyBZZXQnKSB7XG4gICAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSBgVHVybiAke2VsZW1lbnR9LmA7XG4gICAgfVxuICAgIGdhbWUucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSBgSXQgaXMgJHtnYW1lLm9wcG9zaXRlUGxheWVyLmdldE5hbWUoKX0ncyB0dXJuYDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZEZvcm0sXG4gICAgaW5pdGlhbEJhY2tncm91bmQsXG4gICAgcmVtb3ZlRm9ybSxcbiAgICBkaXNwbGF5Um91bmRzLFxuICAgIC8vIHBsYXllclR1cm5JbmRpY2F0b3IsIHdoeSA/XG4gICAgZGlzcGxheUljb24sXG4gICAgcGFpbnRCYWNrZ3JvdW5kLFxuICAgIGRpc2FibGVCYWNrZ3JvdW5kLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7IiwiY29uc3QgZ2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vZG9tTWFuaXB1bGF0aW9uJyk7XG5jb25zdCBwbGF5ZXJDcmVhdG9yID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcbmNvbnN0IHBsYXllckljb25zID0gcmVxdWlyZSgnLi9wbGF5ZXJJY29ucycpO1xuY29uc3QgZ2FtZUluaXQgPSByZXF1aXJlKCcuL2dhbWVJbml0Jyk7XG5jb25zdCBpZkNlbGxFbXB0eSA9IHJlcXVpcmUoJy4vaWZDZWxsRW1wdHknKTtcbmNvbnN0IGNsaWNrQ2VsbCA9IHJlcXVpcmUoJy4vY2xpY2tDZWxsLmpzJyk7XG5jb25zdCByZXNldCA9IHJlcXVpcmUoJy4vcmVzZXQnKTtcbmNvbnN0IHdpbm5pbmdWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi93aW5uaW5nVmFsaWRhdGlvbnMnKTtcbmNvbnN0IHVwZGF0ZUJvYXJkID0gcmVxdWlyZSgnLi91cGRhdGVCb2FyZCcpO1xuY29uc3QgcGxheWVyU3dpdGNoID0gcmVxdWlyZSgnLi9wbGF5ZXJTd2l0Y2gnKTtcbmNvbnN0IGRvbUVsZW1lbnRzID0gcmVxdWlyZSgnLi9kb21FbGVtZW50cycpO1xuXG5jb25zdCBnYW1lID0gKCkgPT4ge1xuICBjb25zdCBjb3VudCA9IDE7XG4gIGxldCBwbGF5ZXJPbmU7XG4gIGxldCBwbGF5ZXJUd287XG4gIGNvbnN0IG51bWJlck9mUGxheWVycyA9IDE7XG4gIC8vIGNvbnN0IG5hbWVQbGF5ZXJPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW9uZScpO1xuICAvLyBjb25zdCBuYW1lUGxheWVyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10d28nKTtcbiAgLy8gY29uc3QgYWxsSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLWl0ZW0nKTtcbiAgLy8gY29uc3QgcGxheWVyVHVybkluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHVybicpO1xuICBjb25zdCBjdXJyZW50UGxheWVyID0gJyc7XG4gIGNvbnN0IG9wcG9zaXRlUGxheWVyID0gJyc7XG4gIC8vIGNvbnN0IEljb25zID0gW107XG4gIC8vIGNvbnN0IHJvdW5kQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWNvdW50ZXInKTtcbiAgLy8gY29uc3QgcGxheWVyT25lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJPbmUnKTtcbiAgLy8gY29uc3QgcGxheWVyVHdvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJUd28nKTtcblxuICBzdHlsZXMoKTtcbiAgZ2FtZUluaXQoKTtcbiAgZ2FtZWJvYXJkKCk7XG4gIGRvbUVsZW1lbnRzLmFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVySWNvbnMsIGZhbHNlKTtcbiAgfSk7XG4gIC8vIHJldHVybiB7IGdhbWVJbml0LCBnYW1lQm9hcmQgfTtcbiAgcmV0dXJuIHtcbiAgICBjb3VudCxcbiAgICBwbGF5ZXJPbmUsXG4gICAgcGxheWVyVHdvLFxuICAgIG51bWJlck9mUGxheWVycyxcbiAgICBjdXJyZW50UGxheWVyLFxuICAgIG9wcG9zaXRlUGxheWVyLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lOyIsImNvbnN0IGRvbUVsZW1lbnRzID0gcmVxdWlyZSgnLi9kb21FbGVtZW50cycpO1xuY29uc3QgZ2FtZSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gcmVxdWlyZSgnLi9kb21NYW5pcHVsYXRpb24nKTtcbmNvbnN0IHBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmNvbnN0IGdhbWVJbml0ID0gKCkgPT4ge1xuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgfHwgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydChcIlBsZWFzZSBhZGQgYm90aCBwbGF5ZXJzJyBuYW1lcyB0byBjb250aW51ZS5cIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChkb21FbGVtZW50cy5JY29ucy5sZW5ndGggPCAyKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBjaGFyYWN0ZXIgZm9yIGJvdGggcGxheWVycyB0byBjb250aW51ZS4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLkljb25zLmxlbmd0aCA9PT0gMikge1xuICAgIGdhbWUucGxheWVyT25lID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUsICdYJywgMSwgZG9tRWxlbWVudHMuSWNvbnNbMF0sICdyZ2JhKDE0NCwgMTY0LCAxNzQsIDAuOCcpO1xuICAgIGdhbWUucGxheWVyVHdvID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUsICdPJywgMiwgZG9tRWxlbWVudHMuSWNvbnNbMV0sICdyZ2JhKDI0MSwgMTk2LCAxNSwgMC44Jyk7XG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XG4gICAgZ2FtZS5vcHBvc2l0ZVBsYXllciA9IGdhbWUucGxheWVyVHdvO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihnYW1lLnBsYXllck9uZS5nZXRJbWcoKSwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gICAgZG9tTWFuaXB1bGF0aW9uLnBhaW50QmFja2dyb3VuZChnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihnYW1lLnBsYXllclR3by5nZXRJbWcoKSwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSBgSXQncyAke2dhbWUuY3VycmVudFBsYXllci5nZXROYW1lKCl9J3MgdHVybmA7XG4gICAgZG9tTWFuaXB1bGF0aW9uLnJlbW92ZUZvcm0oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVJbml0OyIsImNvbnN0IGRvbUVsZW1lbnRzID0gcmVxdWlyZSgnLi9kb21FbGVtZW50cycpO1xuY29uc3QgY2xpY2tDZWxsID0gcmVxdWlyZSgnLi9jbGlja0NlbGwnKTtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSkpO1xuICAvLyBpdCBzZWVtcyBsaWtlIHdlIGRvbid0IG5lZWQgdG8gcmV0dXJuIGFueXRoaW5nXG4gIC8vIFJvcnkgdGhpbmtzIHRoYXQgdGhlIG1vc3QgY3J1Y2lhbCByZWZhY3RvcmluZyBwYXJ0IG9mIHRoaXMgaXMgd2hlcmUgYXJlIHdlIGNhbGxpbmcgZ2FtZWJvYXJkLlxuICAvLyByZXR1cm4geyBjbGlja0NlbGwgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkOyIsImNvbnN0IGNsaWNrQ2VsbCA9IHJlcXVpcmUoJy4vY2xpY2tDZWxsJyk7XG5jb25zdCBwbGF5ZXJTd2l0Y2ggPSByZXF1aXJlKCcuL3BsYXllclN3aXRjaCcpO1xuXG5jb25zdCBpZkNlbGxFbXB0eSA9IChldmVudCwgc3ltYm9sLCBpbWcpID0+IHtcbiAgY29uc3QgaW1nRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFLnNyYyA9IGltZztcbiAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGF0YXN5bWJvbCA9IHN5bWJvbDtcbiAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGltZ0UpO1xuICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcbiAgcGxheWVyU3dpdGNoKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlmQ2VsbEVtcHR5OyIsImNvbnN0IHBsYXllciA9IChuYW1lLCBzeW1ib2wsIHBsYXllck51bWJlciwgaW1nLCBiYWNrZ3JvdW5kKSA9PiB7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBnZXRTeW1ib2wgPSAoKSA9PiBzeW1ib2w7XG4gIGNvbnN0IGdldEltZyA9ICgpID0+IGltZztcbiAgY29uc3QgZ2V0TnVtYmVyID0gKCkgPT4gcGxheWVyTnVtYmVyO1xuICBjb25zdCBnZXRCYWNrZ3JvdW5kID0gKCkgPT4gYmFja2dyb3VuZDtcbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFN5bWJvbCxcbiAgICBnZXROdW1iZXIsXG4gICAgZ2V0SW1nLFxuICAgIGdldEJhY2tncm91bmQsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcjsiLCJjb25zdCBkb21FbGVtZW50cyA9IHJlcXVpcmUoJy4vZG9tRWxlbWVudHMnKTtcbmNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcblxuY29uc3QgY2hvb3NlUGxheWVySWNvbiA9IChldmVudCkgPT4ge1xuICBjb25zdCBjaG9zZW5JY29uID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoZ2FtZS5udW1iZXJPZlBsYXllciA9PT0gMSkge1xuICAgIGlmIChkb21FbGVtZW50cy5JY29uc1swXSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcycpLmlkID0gJyc7XG4gICAgICBkb21FbGVtZW50cy5JY29uc1swXSA9IGNob3Nlbkljb24uc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50cy5JY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcbiAgICB9XG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xuICAgIGdhbWUubnVtYmVyT2ZQbGF5ZXIgPSAyO1xuICB9IGVsc2Uge1xuICAgIGlmIChkb21FbGVtZW50cy5kb21FbGVtZW50cy5JY29uc1sxXSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcy1wMicpLmlkID0gJyc7XG4gICAgICBkb21FbGVtZW50cy5JY29uc1sxXSA9IGNob3Nlbkljb24uc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50cy5JY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcbiAgICB9XG5cbiAgICBjaG9zZW5JY29uLmlkID0gJ2F2b2lkLWNsaWNrcy1wMic7XG4gICAgZ2FtZS5udW1iZXJPZlBsYXllciA9IDE7XG4gIH1cblxuICAvLyByZXR1cm4geyBkb21FbGVtZW50cy5JY29ucyB9OyB3aHk/IHgyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNob29zZVBsYXllckljb247IiwiY29uc3QgcGxheWVyU3dpdGNoID0gKCkgPT4ge1xuICBzdHlsZXMuZGlzcGxheVJvdW5kcyhjb3VudCArIDEpO1xuXG4gIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCkpID09PSBmYWxzZSAmJiBjb3VudCA9PT0gOSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVNYXRjaCA9IGNvbmZpcm0oXCJJdCdzIGEgZHJhdyEgV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9cIik7XG4gICAgICBpZiAocmVNYXRjaCkge1xuICAgICAgICByZXNldChjZWxscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnSG93IHNhZC4nKTtcbiAgICAgIH1cbiAgICB9LCA0NTApO1xuICB9IGVsc2UgaWYgKHdpbm5pbmdWYWxpZGF0aW9uKHVwZGF0ZUJvYXJkQXJyYXkoKSwgY3VycmVudFBsYXllci5nZXRTeW1ib2woKSkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlbWF0Y2ggPSBjb25maXJtKFxuICAgICAgICBgJHtjdXJyZW50UGxheWVyLmdldE5hbWUoKX0gaGFzIHdvbi4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9gLFxuICAgICAgKTtcbiAgICAgIGlmIChyZW1hdGNoID09PSB0cnVlKSB7XG4gICAgICAgIHJlc2V0KGNlbGxzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdMb3Nlci4nKTtcbiAgICAgIH1cbiAgICB9LCA0NTApO1xuICB9IGVsc2UgaWYgKG9wcG9zaXRlUGxheWVyLmdldE51bWJlcigpID09PSAxKSB7XG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBwbGF5ZXJUd29JY29uKTtcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuICAgIG9wcG9zaXRlUGxheWVyID0gcGxheWVyVHdvO1xuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIHBsYXllck9uZUljb24pO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgcGxheWVyT25lSWNvbik7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllclR3bztcbiAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllck9uZTtcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBwbGF5ZXJUd29JY29uKTtcbiAgfVxuICBjb3VudCsrO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJTd2l0Y2g7IiwiY29uc3QgZG9tRWxlbWVudHMgPSByZXF1aXJlKCcuL2RvbUVsZW1lbnRzJyk7XG5jb25zdCBnYW1lID0gcmVxdWlyZSgnLi9nYW1lJyk7XG5jb25zdCBjbGlja0NlbGwgPSByZXF1aXJlKCcuL2NsaWNrQ2VsbCcpO1xuY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gcmVxdWlyZSgnLi9kb21NYW5pcHVsYXRpb24nKTtcbmNvbnN0IGNob29zZVBsYXllckljb24gPSByZXF1aXJlKCcuL3BsYXllckljb25zJyk7XG5cbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2VsbCwgZmFsc2UpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgZWxlbWVudC5kYXRhc2V0LmRhdGFzeW1ib2wgPSAnJztcbiAgICBkb21NYW5pcHVsYXRpb24uaW5pdGlhbEJhY2tncm91bmQoZWxlbWVudCk7XG4gICAgZ2FtZS5jb3VudCA9IDE7XG4gICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9ICdUdXJuIDEuJztcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9ICcnO1xuICAgIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24uaW5uZXJIVE1MID0gJyc7XG4gICAgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbi5pbm5lckhUTUwgPSAnJztcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzYWJsZUJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICAgIGRvbUVsZW1lbnRzLmFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VQbGF5ZXJJY29uLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgZG9tTWFuaXB1bGF0aW9uLmFkZEZvcm0oKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc2V0OyIsImNvbnN0IHVwZGF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGNlbGxzQXJyYXkgPSBBcnJheS5mcm9tKGNlbGxzKTtcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSBjZWxsc0FycmF5Lm1hcChcbiAgICAoY2VsbCA9PiBjZWxsLmRhdGFzZXQuZGF0YXN5bWJvbCksXG4gICk7XG4gIHJldHVybiByZW5kZXJCb2FyZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlQm9hcmRBcnJheTsiLCJjb25zdCBnYW1lID0gcmVxdWlyZSgnLi9nYW1lJyk7XG5cbmNvbnN0IHdpbm5pbmdWYWxpZGF0aW9uID0gKGFycmF5LCBzeW1ib2wpID0+IHtcbiAgbGV0IHJvdW5kV29uID0gZmFsc2U7XG4gIGNvbnN0IHdpbm5pbmdDb25kaXRpb25zID0gW1xuICAgIFswLCAxLCAyXSxcbiAgICBbMywgNCwgNV0sXG4gICAgWzYsIDcsIDhdLFxuICAgIFswLCAzLCA2XSxcbiAgICBbMSwgNCwgN10sXG4gICAgWzIsIDUsIDhdLFxuICAgIFswLCA0LCA4XSxcbiAgICBbMiwgNCwgNl0sXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNzsgaSArPSAxKSB7XG4gICAgY29uc3Qgd2luQ29uZGl0aW9uID0gd2lubmluZ0NvbmRpdGlvbnNbaV07XG4gICAgY29uc3QgYSA9IGFycmF5W3dpbkNvbmRpdGlvblswXV07XG4gICAgY29uc3QgYiA9IGFycmF5W3dpbkNvbmRpdGlvblsxXV07XG4gICAgY29uc3QgYyA9IGFycmF5W3dpbkNvbmRpdGlvblsyXV07XG4gICAgY29uc3QgYWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzBdfWApO1xuICAgIGNvbnN0IGJiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblsxXX1gKTtcbiAgICBjb25zdCBjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMl19YCk7XG4gICAgaWYgKGEgPT09IHN5bWJvbCAmJiBiID09PSBzeW1ib2wgJiYgYyA9PT0gc3ltYm9sKSB7XG4gICAgICByb3VuZFdvbiA9IHRydWU7XG4gICAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyID09PSBnYW1lLnBsYXllck9uZSkge1xuICAgICAgICBhYS5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJPbmUuZ2V0QmFja2dyb3VuZCgpO1xuICAgICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJPbmUuZ2V0QmFja2dyb3VuZCgpO1xuICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJPbmUuZ2V0QmFja2dyb3VuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyVHdvLmdldEJhY2tncm91bmQoKTtcbiAgICAgICAgYmIuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyVHdvLmdldEJhY2tncm91bmQoKTtcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyVHdvLmdldEJhY2tncm91bmQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3VuZFdvbjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJvdW5kV29uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5uaW5nVmFsaWRhdGlvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL21vZHVsZXMvZ2FtZScpO1xuY29uc3QgZ2FtZWJvYXJkID0gcmVxdWlyZSgnLi9tb2R1bGVzL2dhbWVib2FyZCcpO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbicpO1xuY29uc3QgcGxheWVyQ3JlYXRvciA9IHJlcXVpcmUoJy4vbW9kdWxlcy9wbGF5ZXInKTtcbmNvbnN0IHBsYXllckljb25zID0gcmVxdWlyZSgnLi9tb2R1bGVzL3BsYXllckljb25zJyk7XG5jb25zdCBnYW1lSW5pdCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9nYW1lSW5pdCcpO1xuY29uc3QgaWZDZWxsRW1wdHkgPSByZXF1aXJlKCcuL21vZHVsZXMvaWZDZWxsRW1wdHknKTtcbmNvbnN0IGNsaWNrQ2VsbCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9jbGlja0NlbGwuanMnKTtcbmNvbnN0IHJlc2V0ID0gcmVxdWlyZSgnLi9tb2R1bGVzL3Jlc2V0Jyk7XG5jb25zdCB3aW5uaW5nVmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMnKTtcbmNvbnN0IHVwZGF0ZUJvYXJkID0gcmVxdWlyZSgnLi9tb2R1bGVzL3VwZGF0ZUJvYXJkJyk7XG5jb25zdCBwbGF5ZXJTd2l0Y2ggPSByZXF1aXJlKCcuL21vZHVsZXMvcGxheWVyU3dpdGNoJyk7XG5cbmdhbWUoKTsiXSwic291cmNlUm9vdCI6IiJ9
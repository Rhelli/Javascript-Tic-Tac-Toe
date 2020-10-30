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
/*! runtime requirements: module */
/***/ ((module) => {

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
    cells: cells,
    playerTwoIcon: playerTwoIcon,
    playerOneIcon: playerOneIcon,
    roundCounter: roundCounter,
    Icons: Icons,
    playerTurnIndicator: playerTurnIndicator,
    namePlayerTwo: namePlayerTwo,
    namePlayerOne: namePlayerOne,
    allIcons: allIcons,
  }
};

module.exports = domElements;

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
    addForm: addForm,
    initialBackground: initialBackground,
    removeForm: removeForm,
    displayRounds: displayRounds,
    // playerTurnIndicator, why ?
    displayIcon: displayIcon,
    paintBackground: paintBackground,
    disableBackground: disableBackground,
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

  (function () {
    styles();
    gameboard();
  }());

  domElements.allIcons.forEach((element) => {
    element.addEventListener('click', playerIcons, false);
  });
  // return { gameInit, gameBoard };
  return {
    count: count,
    playerOne: playerOne,
    playerTwo: playerTwo,
    numberOfPlayers: numberOfPlayers,
    currentPlayer: currentPlayer,
    oppositePlayer: oppositePlayer,
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

  // return { domElements.Icons };
};

module.exports = choosePlayerIcon;

/***/ }),

/***/ "./src/js/modules/playerSwitch.js":
/*!****************************************!*\
  !*** ./src/js/modules/playerSwitch.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 45:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const styles = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
const reset = __webpack_require__(/*! ./reset */ "./src/js/modules/reset.js");
const winningValidation = __webpack_require__(/*! ./winningValidations */ "./src/js/modules/winningValidations.js");
const updateBoardArray = __webpack_require__(/*! ./updateBoard */ "./src/js/modules/updateBoard.js");
const domElements = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
const game = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");

const playerSwitch = () => {
  styles.displayRounds(game.count + 1);

  if (winningValidation(updateBoardArray(), game.currentPlayer.getSymbol()) === false && game.count === 9) {
    setTimeout(() => {
      const reMatch = confirm("It's a draw! Would you like to play again?");
      if (reMatch) {
        reset(domElements.cells);
      } else {
        alert('How sad.');
      }
    }, 450);
  } else if (winningValidation(updateBoardArray(), game.currentPlayer.getSymbol())) {
    setTimeout(() => {
      const rematch = confirm(
        `${game.currentPlayer.getName()} has won. Would you like to play again?`,
      );
      if (rematch === true) {
        reset(domElements.cells);
      } else {
        alert('Loser.');
      }
    }, 450);
  } else if (game.oppositePlayer.getNumber() === 1) {
    styles.disableBackground(game.currentPlayer.getBackground(), domElements.playerTwoIcon);
    game.currentPlayer = game.playerOne;
    game.oppositePlayer = game.playerTwo;
    styles.paintBackground(game.currentPlayer.getBackground(), domElements.playerOneIcon);
  } else {
    styles.disableBackground(game.currentPlayer.getBackground(), domElements.playerOneIcon);
    game.currentPlayer = game.playerTwo;
    game.oppositePlayer = game.playerOne;
    styles.paintBackground(game.currentPlayer.getBackground(), domElements.playerTwoIcon);
  }
  game.count++;
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvY2xpY2tDZWxsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9nYW1lSW5pdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9pZkNlbGxFbXB0eS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9wbGF5ZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyU3dpdGNoLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvdXBkYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3dpbm5pbmdWYWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9CQUFvQixtQkFBTyxDQUFDLHNEQUFlO0FBQzNDLGFBQWEsbUJBQU8sQ0FBQyx3Q0FBUTtBQUM3QixvQkFBb0IsbUJBQU8sQ0FBQyxzREFBZTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qjs7Ozs7Ozs7Ozs7O0FDeEJBLGFBQWEsbUJBQU8sQ0FBQyx3Q0FBUTtBQUM3QixvQkFBb0IsbUJBQU8sQ0FBQyxzREFBZTs7QUFFM0M7QUFDQTtBQUNBLDRCQUE0QixzQ0FBc0M7QUFDbEUseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBDQUEwQztBQUNwRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQSxrREFBa0QsOEJBQThCO0FBQ2hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7OztBQ3hDQSxrQkFBa0IsbUJBQU8sQ0FBQyxrREFBYTtBQUN2QyxlQUFlLG1CQUFPLENBQUMsOERBQW1CO0FBQzFDLHNCQUFzQixtQkFBTyxDQUFDLDRDQUFVO0FBQ3hDLG9CQUFvQixtQkFBTyxDQUFDLHNEQUFlO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLGdEQUFZO0FB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OERBQXVCO0FBQ25ELHFCQUFxQixtQkFBTyxDQUFDLGdFQUF3QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG9tRWxlbWVudHMgPSByZXF1aXJlKCcuL2RvbUVsZW1lbnRzJyk7XHJcbmNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcclxuY29uc3QgaWZDZWxsRW1wdHkgPSByZXF1aXJlKCcuL2lmQ2VsbEVtcHR5Jyk7XHJcblxyXG5jb25zdCBjbGlja0NlbGwgPSAoZXZlbnQpID0+IHtcclxuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgJiYgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcclxuICAgIGFsZXJ0KFwiUGxlYXNlIEVudGVyIEFsbCBQbGF5ZXIncyBOYW1lcy5cIik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzeW1ib2wgPSBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCk7XHJcbiAgICBjb25zdCBpbWcgPSBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0SW1nKCk7XHJcbiAgICBpZkNlbGxFbXB0eShldmVudCwgc3ltYm9sLCBpbWcpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2xpY2tDZWxsO1xyXG4iLCJjb25zdCBkb21FbGVtZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcclxuICBjb25zdCBuYW1lUGxheWVyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10d28nKTtcclxuICBjb25zdCBhbGxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItaXRlbScpO1xyXG4gIGNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcclxuICBjb25zdCBJY29ucyA9IFtdO1xyXG4gIGNvbnN0IHJvdW5kQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWNvdW50ZXInKTtcclxuICBjb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xyXG4gIGNvbnN0IHBsYXllclR3b0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyVHdvJyk7XHJcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2VsbHM6IGNlbGxzLFxyXG4gICAgcGxheWVyVHdvSWNvbjogcGxheWVyVHdvSWNvbixcclxuICAgIHBsYXllck9uZUljb246IHBsYXllck9uZUljb24sXHJcbiAgICByb3VuZENvdW50ZXI6IHJvdW5kQ291bnRlcixcclxuICAgIEljb25zOiBJY29ucyxcclxuICAgIHBsYXllclR1cm5JbmRpY2F0b3I6IHBsYXllclR1cm5JbmRpY2F0b3IsXHJcbiAgICBuYW1lUGxheWVyVHdvOiBuYW1lUGxheWVyVHdvLFxyXG4gICAgbmFtZVBsYXllck9uZTogbmFtZVBsYXllck9uZSxcclxuICAgIGFsbEljb25zOiBhbGxJY29ucyxcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUVsZW1lbnRzOyIsImNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcclxuY29uc3QgZG9tRWxlbWVudHMgPSByZXF1aXJlKCcuL2RvbUVsZW1lbnRzJyk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7IGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfTtcclxuICBjb25zdCBhZGRGb3JtID0gKCkgPT4geyBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7IH07XHJcbiAgY29uc3QgZGlzcGxheUljb24gPSAoaWNvbiwgY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWdFbGVtZW50LnNyYyA9IGljb247XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XHJcbiAgfTtcclxuICBjb25zdCBwYWludEJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xyXG4gIH07XHJcbiAgY29uc3QgZGlzYWJsZUJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNSknO1xyXG4gIH07XHJcbiAgY29uc3QgaW5pdGlhbEJhY2tncm91bmQgPSAoZWxlbWVudCkgPT4geyBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnOyB9O1xyXG4gIGNvbnN0IGRpc3BsYXlSb3VuZHMgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPT09ICdObyBUdXJucyBZZXQnKSB7XHJcbiAgICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSAnVHVybiAxJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSBgVHVybiAke2VsZW1lbnR9LmA7XHJcbiAgICB9XHJcbiAgICBnYW1lLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0IGlzICR7Z2FtZS5vcHBvc2l0ZVBsYXllci5nZXROYW1lKCl9J3MgdHVybmA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZEZvcm06IGFkZEZvcm0sXHJcbiAgICBpbml0aWFsQmFja2dyb3VuZDogaW5pdGlhbEJhY2tncm91bmQsXHJcbiAgICByZW1vdmVGb3JtOiByZW1vdmVGb3JtLFxyXG4gICAgZGlzcGxheVJvdW5kczogZGlzcGxheVJvdW5kcyxcclxuICAgIC8vIHBsYXllclR1cm5JbmRpY2F0b3IsIHdoeSA/XHJcbiAgICBkaXNwbGF5SWNvbjogZGlzcGxheUljb24sXHJcbiAgICBwYWludEJhY2tncm91bmQ6IHBhaW50QmFja2dyb3VuZCxcclxuICAgIGRpc2FibGVCYWNrZ3JvdW5kOiBkaXNhYmxlQmFja2dyb3VuZCxcclxuICB9O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7IiwiY29uc3QgZ2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcclxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9kb21NYW5pcHVsYXRpb24nKTtcclxuY29uc3QgcGxheWVyQ3JlYXRvciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XHJcbmNvbnN0IHBsYXllckljb25zID0gcmVxdWlyZSgnLi9wbGF5ZXJJY29ucycpO1xyXG5jb25zdCBnYW1lSW5pdCA9IHJlcXVpcmUoJy4vZ2FtZUluaXQnKTtcclxuY29uc3QgaWZDZWxsRW1wdHkgPSByZXF1aXJlKCcuL2lmQ2VsbEVtcHR5Jyk7XHJcbmNvbnN0IGNsaWNrQ2VsbCA9IHJlcXVpcmUoJy4vY2xpY2tDZWxsLmpzJyk7XHJcbmNvbnN0IHJlc2V0ID0gcmVxdWlyZSgnLi9yZXNldCcpO1xyXG5jb25zdCB3aW5uaW5nVmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vd2lubmluZ1ZhbGlkYXRpb25zJyk7XHJcbmNvbnN0IHVwZGF0ZUJvYXJkID0gcmVxdWlyZSgnLi91cGRhdGVCb2FyZCcpO1xyXG5jb25zdCBwbGF5ZXJTd2l0Y2ggPSByZXF1aXJlKCcuL3BsYXllclN3aXRjaCcpO1xyXG5jb25zdCBkb21FbGVtZW50cyA9IHJlcXVpcmUoJy4vZG9tRWxlbWVudHMnKTtcclxuXHJcbmNvbnN0IGdhbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY291bnQgPSAxO1xyXG4gIGxldCBwbGF5ZXJPbmU7XHJcbiAgbGV0IHBsYXllclR3bztcclxuICBjb25zdCBudW1iZXJPZlBsYXllcnMgPSAxO1xyXG4gIC8vIGNvbnN0IG5hbWVQbGF5ZXJPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW9uZScpO1xyXG4gIC8vIGNvbnN0IG5hbWVQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR3bycpO1xyXG4gIC8vIGNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1pdGVtJyk7XHJcbiAgLy8gY29uc3QgcGxheWVyVHVybkluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHVybicpO1xyXG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSAnJztcclxuICBjb25zdCBvcHBvc2l0ZVBsYXllciA9ICcnO1xyXG4gIC8vIGNvbnN0IEljb25zID0gW107XHJcbiAgLy8gY29uc3Qgcm91bmRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tY291bnRlcicpO1xyXG4gIC8vIGNvbnN0IHBsYXllck9uZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyT25lJyk7XHJcbiAgLy8gY29uc3QgcGxheWVyVHdvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJUd28nKTtcclxuXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIHN0eWxlcygpO1xyXG4gICAgZ2FtZWJvYXJkKCk7XHJcbiAgfSgpKTtcclxuXHJcbiAgZG9tRWxlbWVudHMuYWxsSWNvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckljb25zLCBmYWxzZSk7XHJcbiAgfSk7XHJcbiAgLy8gcmV0dXJuIHsgZ2FtZUluaXQsIGdhbWVCb2FyZCB9O1xyXG4gIHJldHVybiB7XHJcbiAgICBjb3VudDogY291bnQsXHJcbiAgICBwbGF5ZXJPbmU6IHBsYXllck9uZSxcclxuICAgIHBsYXllclR3bzogcGxheWVyVHdvLFxyXG4gICAgbnVtYmVyT2ZQbGF5ZXJzOiBudW1iZXJPZlBsYXllcnMsXHJcbiAgICBjdXJyZW50UGxheWVyOiBjdXJyZW50UGxheWVyLFxyXG4gICAgb3Bwb3NpdGVQbGF5ZXI6IG9wcG9zaXRlUGxheWVyLFxyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWU7IiwiY29uc3QgZG9tRWxlbWVudHMgPSByZXF1aXJlKCcuL2RvbUVsZW1lbnRzJyk7XHJcbmNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcclxuY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gcmVxdWlyZSgnLi9kb21NYW5pcHVsYXRpb24nKTtcclxuY29uc3QgcGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcclxuXHJcbmNvbnN0IGdhbWVJbml0ID0gKCkgPT4ge1xyXG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlID09PSAnJyB8fCBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlID09PSAnJykge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgYWRkIGJvdGggcGxheWVycycgbmFtZXMgdG8gY29udGludWUuXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZG9tRWxlbWVudHMuSWNvbnMubGVuZ3RoIDwgMikge1xyXG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBjaGFyYWN0ZXIgZm9yIGJvdGggcGxheWVycyB0byBjb250aW51ZS4nKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLkljb25zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgZ2FtZS5wbGF5ZXJPbmUgPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSwgJ1gnLCAxLCBkb21FbGVtZW50cy5JY29uc1swXSwgJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44Jyk7XHJcbiAgICBnYW1lLnBsYXllclR3byA9IHBsYXllcihkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlLCAnTycsIDIsIGRvbUVsZW1lbnRzLkljb25zWzFdLCAncmdiYSgyNDEsIDE5NiwgMTUsIDAuOCcpO1xyXG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XHJcbiAgICBnYW1lLm9wcG9zaXRlUGxheWVyID0gZ2FtZS5wbGF5ZXJUd287XHJcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24oZ2FtZS5wbGF5ZXJPbmUuZ2V0SW1nKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLnBhaW50QmFja2dyb3VuZChnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc3BsYXlJY29uKGdhbWUucGxheWVyVHdvLmdldEltZygpLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0J3MgJHtnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpfSdzIHR1cm5gO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLnJlbW92ZUZvcm0oKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVJbml0OyIsImNvbnN0IGRvbUVsZW1lbnRzID0gcmVxdWlyZSgnLi9kb21FbGVtZW50cycpO1xyXG5jb25zdCBjbGlja0NlbGwgPSByZXF1aXJlKCcuL2NsaWNrQ2VsbCcpO1xyXG5cclxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gIGRvbUVsZW1lbnRzLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKSk7XHJcbiAgLy8gaXQgc2VlbXMgbGlrZSB3ZSBkb24ndCBuZWVkIHRvIHJldHVybiBhbnl0aGluZ1xyXG4gIC8vIFJvcnkgdGhpbmtzIHRoYXQgdGhlIG1vc3QgY3J1Y2lhbCByZWZhY3RvcmluZyBwYXJ0IG9mIHRoaXMgaXMgd2hlcmUgYXJlIHdlIGNhbGxpbmcgZ2FtZWJvYXJkLlxyXG4gIC8vIHJldHVybiB7IGNsaWNrQ2VsbCB9O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmQ7IiwiY29uc3QgY2xpY2tDZWxsID0gcmVxdWlyZSgnLi9jbGlja0NlbGwnKTtcclxuY29uc3QgcGxheWVyU3dpdGNoID0gcmVxdWlyZSgnLi9wbGF5ZXJTd2l0Y2gnKTtcclxuXHJcbmNvbnN0IGlmQ2VsbEVtcHR5ID0gKGV2ZW50LCBzeW1ib2wsIGltZykgPT4ge1xyXG4gIGNvbnN0IGltZ0UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWdFLnNyYyA9IGltZztcclxuICBldmVudC50YXJnZXQuZGF0YXNldC5kYXRhc3ltYm9sID0gc3ltYm9sO1xyXG4gIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChpbWdFKTtcclxuICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcclxuICBwbGF5ZXJTd2l0Y2goKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaWZDZWxsRW1wdHk7IiwiY29uc3QgcGxheWVyID0gKG5hbWUsIHN5bWJvbCwgcGxheWVyTnVtYmVyLCBpbWcsIGJhY2tncm91bmQpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGdldFN5bWJvbCA9ICgpID0+IHN5bWJvbDtcbiAgY29uc3QgZ2V0SW1nID0gKCkgPT4gaW1nO1xuICBjb25zdCBnZXROdW1iZXIgPSAoKSA9PiBwbGF5ZXJOdW1iZXI7XG4gIGNvbnN0IGdldEJhY2tncm91bmQgPSAoKSA9PiBiYWNrZ3JvdW5kO1xuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0U3ltYm9sLFxuICAgIGdldE51bWJlcixcbiAgICBnZXRJbWcsXG4gICAgZ2V0QmFja2dyb3VuZCxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyOyIsImNvbnN0IGRvbUVsZW1lbnRzID0gcmVxdWlyZSgnLi9kb21FbGVtZW50cycpO1xyXG5jb25zdCBnYW1lID0gcmVxdWlyZSgnLi9nYW1lJyk7XHJcblxyXG5jb25zdCBjaG9vc2VQbGF5ZXJJY29uID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgY2hvc2VuSWNvbiA9IGV2ZW50LnRhcmdldDtcclxuICBpZiAoZ2FtZS5udW1iZXJPZlBsYXllciA9PT0gMSkge1xyXG4gICAgaWYgKGRvbUVsZW1lbnRzLkljb25zWzBdKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MnKS5pZCA9ICcnO1xyXG4gICAgICBkb21FbGVtZW50cy5JY29uc1swXSA9IGNob3Nlbkljb24uc3JjO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvbUVsZW1lbnRzLkljb25zLnB1c2goY2hvc2VuSWNvbi5zcmMpO1xyXG4gICAgfVxyXG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xyXG4gICAgZ2FtZS5udW1iZXJPZlBsYXllciA9IDI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChkb21FbGVtZW50cy5kb21FbGVtZW50cy5JY29uc1sxXSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzLXAyJykuaWQgPSAnJztcclxuICAgICAgZG9tRWxlbWVudHMuSWNvbnNbMV0gPSBjaG9zZW5JY29uLnNyYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvbUVsZW1lbnRzLkljb25zLnB1c2goY2hvc2VuSWNvbi5zcmMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNob3Nlbkljb24uaWQgPSAnYXZvaWQtY2xpY2tzLXAyJztcclxuICAgIGdhbWUubnVtYmVyT2ZQbGF5ZXIgPSAxO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJuIHsgZG9tRWxlbWVudHMuSWNvbnMgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2hvb3NlUGxheWVySWNvbjsiLCJjb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL2RvbU1hbmlwdWxhdGlvbicpO1xuY29uc3QgcmVzZXQgPSByZXF1aXJlKCcuL3Jlc2V0Jyk7XG5jb25zdCB3aW5uaW5nVmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vd2lubmluZ1ZhbGlkYXRpb25zJyk7XG5jb25zdCB1cGRhdGVCb2FyZEFycmF5ID0gcmVxdWlyZSgnLi91cGRhdGVCb2FyZCcpO1xuY29uc3QgZG9tRWxlbWVudHMgPSByZXF1aXJlKCcuL2RvbUVsZW1lbnRzJyk7XG5jb25zdCBnYW1lID0gcmVxdWlyZSgnLi9nYW1lJyk7XG5cbmNvbnN0IHBsYXllclN3aXRjaCA9ICgpID0+IHtcbiAgc3R5bGVzLmRpc3BsYXlSb3VuZHMoZ2FtZS5jb3VudCArIDEpO1xuXG4gIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGdhbWUuY3VycmVudFBsYXllci5nZXRTeW1ib2woKSkgPT09IGZhbHNlICYmIGdhbWUuY291bnQgPT09IDkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlTWF0Y2ggPSBjb25maXJtKFwiSXQncyBhIGRyYXchIFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/XCIpO1xuICAgICAgaWYgKHJlTWF0Y2gpIHtcbiAgICAgICAgcmVzZXQoZG9tRWxlbWVudHMuY2VsbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0hvdyBzYWQuJyk7XG4gICAgICB9XG4gICAgfSwgNDUwKTtcbiAgfSBlbHNlIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGdhbWUuY3VycmVudFBsYXllci5nZXRTeW1ib2woKSkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlbWF0Y2ggPSBjb25maXJtKFxuICAgICAgICBgJHtnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpfSBoYXMgd29uLiBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP2AsXG4gICAgICApO1xuICAgICAgaWYgKHJlbWF0Y2ggPT09IHRydWUpIHtcbiAgICAgICAgcmVzZXQoZG9tRWxlbWVudHMuY2VsbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0xvc2VyLicpO1xuICAgICAgfVxuICAgIH0sIDQ1MCk7XG4gIH0gZWxzZSBpZiAoZ2FtZS5vcHBvc2l0ZVBsYXllci5nZXROdW1iZXIoKSA9PT0gMSkge1xuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcbiAgICBnYW1lLmN1cnJlbnRQbGF5ZXIgPSBnYW1lLnBsYXllck9uZTtcbiAgICBnYW1lLm9wcG9zaXRlUGxheWVyID0gZ2FtZS5wbGF5ZXJUd287XG4gICAgc3R5bGVzLnBhaW50QmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJUd287XG4gICAgZ2FtZS5vcHBvc2l0ZVBsYXllciA9IGdhbWUucGxheWVyT25lO1xuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gIH1cbiAgZ2FtZS5jb3VudCsrO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJTd2l0Y2g7IiwiY29uc3QgZG9tRWxlbWVudHMgPSByZXF1aXJlKCcuL2RvbUVsZW1lbnRzJyk7XHJcbmNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcclxuY29uc3QgY2xpY2tDZWxsID0gcmVxdWlyZSgnLi9jbGlja0NlbGwnKTtcclxuY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gcmVxdWlyZSgnLi9kb21NYW5pcHVsYXRpb24nKTtcclxuY29uc3QgY2hvb3NlUGxheWVySWNvbiA9IHJlcXVpcmUoJy4vcGxheWVySWNvbnMnKTtcclxuXHJcbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gIGRvbUVsZW1lbnRzLmNlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBlbGVtZW50LmRhdGFzZXQuZGF0YXN5bWJvbCA9ICcnO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmluaXRpYWxCYWNrZ3JvdW5kKGVsZW1lbnQpO1xyXG4gICAgZ2FtZS5jb3VudCA9IDE7XHJcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMS4nO1xyXG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xyXG4gICAgZG9tRWxlbWVudHMuYWxsSWNvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGxheWVySWNvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICBkb21NYW5pcHVsYXRpb24uYWRkRm9ybSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXNldDsiLCJjb25zdCB1cGRhdGVCb2FyZEFycmF5ID0gKCkgPT4ge1xuICBjb25zdCBjZWxsc0FycmF5ID0gQXJyYXkuZnJvbShjZWxscyk7XG4gIGNvbnN0IHJlbmRlckJvYXJkID0gY2VsbHNBcnJheS5tYXAoXG4gICAgKGNlbGwgPT4gY2VsbC5kYXRhc2V0LmRhdGFzeW1ib2wpLFxuICApO1xuICByZXR1cm4gcmVuZGVyQm9hcmQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZUJvYXJkQXJyYXk7IiwiY29uc3QgZ2FtZSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xyXG5cclxuY29uc3Qgd2lubmluZ1ZhbGlkYXRpb24gPSAoYXJyYXksIHN5bWJvbCkgPT4ge1xyXG4gIGxldCByb3VuZFdvbiA9IGZhbHNlO1xyXG4gIGNvbnN0IHdpbm5pbmdDb25kaXRpb25zID0gW1xyXG4gICAgWzAsIDEsIDJdLFxyXG4gICAgWzMsIDQsIDVdLFxyXG4gICAgWzYsIDcsIDhdLFxyXG4gICAgWzAsIDMsIDZdLFxyXG4gICAgWzEsIDQsIDddLFxyXG4gICAgWzIsIDUsIDhdLFxyXG4gICAgWzAsIDQsIDhdLFxyXG4gICAgWzIsIDQsIDZdLFxyXG4gIF07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDc7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgd2luQ29uZGl0aW9uID0gd2lubmluZ0NvbmRpdGlvbnNbaV07XHJcbiAgICBjb25zdCBhID0gYXJyYXlbd2luQ29uZGl0aW9uWzBdXTtcclxuICAgIGNvbnN0IGIgPSBhcnJheVt3aW5Db25kaXRpb25bMV1dO1xyXG4gICAgY29uc3QgYyA9IGFycmF5W3dpbkNvbmRpdGlvblsyXV07XHJcbiAgICBjb25zdCBhYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMF19YCk7XHJcbiAgICBjb25zdCBiYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMV19YCk7XHJcbiAgICBjb25zdCBjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMl19YCk7XHJcbiAgICBpZiAoYSA9PT0gc3ltYm9sICYmIGIgPT09IHN5bWJvbCAmJiBjID09PSBzeW1ib2wpIHtcclxuICAgICAgcm91bmRXb24gPSB0cnVlO1xyXG4gICAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyID09PSBnYW1lLnBsYXllck9uZSkge1xyXG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgYmIuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcclxuICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJPbmUuZ2V0QmFja2dyb3VuZCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgYmIuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyVHdvLmdldEJhY2tncm91bmQoKTtcclxuICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJUd28uZ2V0QmFja2dyb3VuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByb3VuZFdvbjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJvdW5kV29uO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB3aW5uaW5nVmFsaWRhdGlvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL21vZHVsZXMvZ2FtZScpO1xyXG5jb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKCcuL21vZHVsZXMvZ2FtZWJvYXJkJyk7XHJcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vbW9kdWxlcy9kb21NYW5pcHVsYXRpb24nKTtcclxuY29uc3QgcGxheWVyQ3JlYXRvciA9IHJlcXVpcmUoJy4vbW9kdWxlcy9wbGF5ZXInKTtcclxuY29uc3QgcGxheWVySWNvbnMgPSByZXF1aXJlKCcuL21vZHVsZXMvcGxheWVySWNvbnMnKTtcclxuY29uc3QgZ2FtZUluaXQgPSByZXF1aXJlKCcuL21vZHVsZXMvZ2FtZUluaXQnKTtcclxuY29uc3QgaWZDZWxsRW1wdHkgPSByZXF1aXJlKCcuL21vZHVsZXMvaWZDZWxsRW1wdHknKTtcclxuY29uc3QgY2xpY2tDZWxsID0gcmVxdWlyZSgnLi9tb2R1bGVzL2NsaWNrQ2VsbC5qcycpO1xyXG5jb25zdCByZXNldCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9yZXNldCcpO1xyXG5jb25zdCB3aW5uaW5nVmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMnKTtcclxuY29uc3QgdXBkYXRlQm9hcmQgPSByZXF1aXJlKCcuL21vZHVsZXMvdXBkYXRlQm9hcmQnKTtcclxuY29uc3QgcGxheWVyU3dpdGNoID0gcmVxdWlyZSgnLi9tb2R1bGVzL3BsYXllclN3aXRjaCcpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ "./src/js/modules/game.js");
/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard */ "./src/js/modules/gameboard.js");
/* harmony import */ var _modules_domManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/player */ "./src/js/modules/player.js");
/* harmony import */ var _modules_playerIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/playerIcons */ "./src/js/modules/playerIcons.js");
/* harmony import */ var _modules_gameInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/gameInit */ "./src/js/modules/gameInit.js");
/* harmony import */ var _modules_ifCellEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ifCellEmpty */ "./src/js/modules/ifCellEmpty.js");
/* harmony import */ var _modules_clickCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/clickCell */ "./src/js/modules/clickCell.js");
/* harmony import */ var _modules_reset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/reset */ "./src/js/modules/reset.js");
/* harmony import */ var _modules_winningValidations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/winningValidations */ "./src/js/modules/winningValidations.js");
/* harmony import */ var _modules_updateBoard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/updateBoard */ "./src/js/modules/updateBoard.js");
/* harmony import */ var _modules_playerSwitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/playerSwitch */ "./src/js/modules/playerSwitch.js");













const startGameButton = document.getElementById('startGameButton');

(0,_modules_game__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_2__.default)();
startGameButton.addEventListener('click', _modules_gameInit__WEBPACK_IMPORTED_MODULE_5__.default);

/***/ }),

/***/ "./src/js/modules/clickCell.js":
/*!*************************************!*\
  !*** ./src/js/modules/clickCell.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
/* harmony import */ var _ifCellEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ifCellEmpty */ "./src/js/modules/ifCellEmpty.js");




const clickCell = (event) => {
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.default.namePlayerOne.value === '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.default.namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const symbol = _game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getSymbol();
    const img = _game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getImg();
    (0,_ifCellEmpty__WEBPACK_IMPORTED_MODULE_2__.default)(event, symbol, img);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickCell);


/***/ }),

/***/ "./src/js/modules/domElements.js":
/*!***************************************!*\
  !*** ./src/js/modules/domElements.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElements);

/***/ }),

/***/ "./src/js/modules/domManipulation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/domManipulation.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");



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
    if (_domElements__WEBPACK_IMPORTED_MODULE_1__.default.roundCounter.innerHTML === 'No Turns Yet') {
      _domElements__WEBPACK_IMPORTED_MODULE_1__.default.roundCounter.innerHTML = 'Turn 1';
    } else {
      _domElements__WEBPACK_IMPORTED_MODULE_1__.default.roundCounter.innerHTML = `Turn ${element}.`;
    }
    _game__WEBPACK_IMPORTED_MODULE_0__.default.playerTurnIndicator.innerHTML = `It is ${_game__WEBPACK_IMPORTED_MODULE_0__.default.oppositePlayer.getName()}'s turn`;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);

/***/ }),

/***/ "./src/js/modules/game.js":
/*!********************************!*\
  !*** ./src/js/modules/game.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/modules/gameboard.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/js/modules/player.js");
/* harmony import */ var _playerIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerIcons */ "./src/js/modules/playerIcons.js");
/* harmony import */ var _gameInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameInit */ "./src/js/modules/gameInit.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");







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
  (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.default)();
  // const Icons = [];
  // const roundCounter = document.getElementById('turn-counter');
  // const playerOneIcon = document.getElementById('activePlayerOne');
  // const playerTwoIcon = document.getElementById('activePlayerTwo');

  (0,_player__WEBPACK_IMPORTED_MODULE_2__.default)();
  (0,_playerIcons__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,_gameInit__WEBPACK_IMPORTED_MODULE_4__.default)();
  _domElements__WEBPACK_IMPORTED_MODULE_5__.default.allIcons.forEach((element) => {
    element.addEventListener('click', _playerIcons__WEBPACK_IMPORTED_MODULE_3__.default, false);
  });
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.default)();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);

/***/ }),

/***/ "./src/js/modules/gameInit.js":
/*!************************************!*\
  !*** ./src/js/modules/gameInit.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/js/modules/player.js");






const gameInit = () => {
  console.log('sup perro');
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.default.namePlayerOne.value === '' || _domElements__WEBPACK_IMPORTED_MODULE_0__.default.namePlayerTwo.value === '') {
    alert("Please add both players' names to continue.");
    return false;
  }
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.default.Icons.length < 2) {
    alert('Please select a character for both players to continue.');
    return false;
  }
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.default.namePlayerOne.value !== '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.default.namePlayerTwo.value !== '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.default.Icons.length === 2) {
    _game__WEBPACK_IMPORTED_MODULE_1__.default.playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_3__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.default.namePlayerOne.value, 'X', 1, _domElements__WEBPACK_IMPORTED_MODULE_0__.default.Icons[0], 'rgba(144, 164, 174, 0.8');
    _game__WEBPACK_IMPORTED_MODULE_1__.default.playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_3__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.default.namePlayerTwo.value, 'O', 2, _domElements__WEBPACK_IMPORTED_MODULE_0__.default.Icons[1], 'rgba(241, 196, 15, 0.8');
    _game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer = _game__WEBPACK_IMPORTED_MODULE_1__.default.playerOne;
    _game__WEBPACK_IMPORTED_MODULE_1__.default.oppositePlayer = _game__WEBPACK_IMPORTED_MODULE_1__.default.playerTwo;
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.default.displayIcon(_game__WEBPACK_IMPORTED_MODULE_1__.default.playerOne.getImg(), _domElements__WEBPACK_IMPORTED_MODULE_0__.default.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.default.paintBackground(_game__WEBPACK_IMPORTED_MODULE_1__.default.playerOne.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_0__.default.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.default.displayIcon(_game__WEBPACK_IMPORTED_MODULE_1__.default.playerTwo.getImg(), _domElements__WEBPACK_IMPORTED_MODULE_0__.default.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.default.playerTurnIndicator.innerHTML = `It's ${_game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getName()}'s turn`;
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.default.removeForm();
    return true;
  }
  return false;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameInit);

/***/ }),

/***/ "./src/js/modules/gameboard.js":
/*!*************************************!*\
  !*** ./src/js/modules/gameboard.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickCell */ "./src/js/modules/clickCell.js");
/* harmony import */ var _ifCellEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ifCellEmpty */ "./src/js/modules/ifCellEmpty.js");
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset */ "./src/js/modules/reset.js");
/* harmony import */ var _winningValidations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./winningValidations */ "./src/js/modules/winningValidations.js");
/* harmony import */ var _updateBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateBoard */ "./src/js/modules/updateBoard.js");
/* harmony import */ var _playerSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playerSwitch */ "./src/js/modules/playerSwitch.js");









const gameboard = () => {
  (0,_ifCellEmpty__WEBPACK_IMPORTED_MODULE_2__.default)();
  (0,_clickCell__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,_reset__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,_winningValidations__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,_updateBoard__WEBPACK_IMPORTED_MODULE_5__.default)();
  (0,_playerSwitch__WEBPACK_IMPORTED_MODULE_6__.default)();
  
  _domElements__WEBPACK_IMPORTED_MODULE_0__.default.cells.forEach((cell) => cell.addEventListener('click', _clickCell__WEBPACK_IMPORTED_MODULE_1__.default, false));
  // it seems like we don't need to return anything
  // Rory thinks that the most crucial refactoring part of this is where are we calling gameboard.
  // return { clickCell };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);

/***/ }),

/***/ "./src/js/modules/ifCellEmpty.js":
/*!***************************************!*\
  !*** ./src/js/modules/ifCellEmpty.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickCell */ "./src/js/modules/clickCell.js");
/* harmony import */ var _playerSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerSwitch */ "./src/js/modules/playerSwitch.js");



const ifCellEmpty = (event, symbol, img) => {
  const imgE = document.createElement('img');
  imgE.src = img;
  event.target.dataset.datasymbol = symbol;
  event.target.appendChild(imgE);
  event.target.removeEventListener('click', _clickCell__WEBPACK_IMPORTED_MODULE_0__.default, false);
  (0,_playerSwitch__WEBPACK_IMPORTED_MODULE_1__.default)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ifCellEmpty);

/***/ }),

/***/ "./src/js/modules/player.js":
/*!**********************************!*\
  !*** ./src/js/modules/player.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/js/modules/playerIcons.js":
/*!***************************************!*\
  !*** ./src/js/modules/playerIcons.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");




const choosePlayerIcon = (event) => {
  const arr = _domElements__WEBPACK_IMPORTED_MODULE_0__.default.Icons;
  const chosenIcon = event;
  if (_game__WEBPACK_IMPORTED_MODULE_1__.default.numberOfPlayer === 1) {
    if (arr[0]) {
      document.getElementById('avoid-clicks').id = '';
      _domElements__WEBPACK_IMPORTED_MODULE_0__.default.Icons[0] = chosenIcon.src;
    } else {
      arr.push(chosenIcon.src);
    }
    chosenIcon.id = 'avoid-clicks';
    _game__WEBPACK_IMPORTED_MODULE_1__.default.numberOfPlayer = 2;
  } else {
    if (arr[1]) {
      document.getElementById('avoid-clicks-p2').id = '';
      arr[1] = chosenIcon.src;
    } else {
      arr.push(chosenIcon.src);
    }

    chosenIcon.id = 'avoid-clicks-p2';
    _game__WEBPACK_IMPORTED_MODULE_1__.default.numberOfPlayer = 1;
  }

  return { arr };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (choosePlayerIcon);

/***/ }),

/***/ "./src/js/modules/playerSwitch.js":
/*!****************************************!*\
  !*** ./src/js/modules/playerSwitch.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerSwitch);

/***/ }),

/***/ "./src/js/modules/reset.js":
/*!*********************************!*\
  !*** ./src/js/modules/reset.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickCell */ "./src/js/modules/clickCell.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _playerIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerIcons */ "./src/js/modules/playerIcons.js");






const reset = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.default.cells.forEach((element) => {
    element.addEventListener('click', _clickCell__WEBPACK_IMPORTED_MODULE_2__.default, false);
    element.innerHTML = '';
    element.dataset.datasymbol = '';
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.initialBackground(element);
    _game__WEBPACK_IMPORTED_MODULE_1__.default.count = 1;
    _domElements__WEBPACK_IMPORTED_MODULE_0__.default.roundCounter.innerHTML = 'Turn 1.';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.default.playerTurnIndicator.innerHTML = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.default.playerOneIcon.innerHTML = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.default.playerTwoIcon.innerHTML = '';
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.disableBackground(_game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_0__.default.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.disableBackground(_game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_0__.default.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.default.allIcons.forEach((element) => {
      element.addEventListener('click', _playerIcons__WEBPACK_IMPORTED_MODULE_4__.default, false);
    });
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.default.addForm();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);

/***/ }),

/***/ "./src/js/modules/updateBoard.js":
/*!***************************************!*\
  !*** ./src/js/modules/updateBoard.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const updateBoardArray = () => {
  const cellsArray = Array.from(cells);
  const renderBoard = cellsArray.map(
    (cell => cell.dataset.datasymbol),
  );
  return renderBoard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateBoardArray);

/***/ }),

/***/ "./src/js/modules/winningValidations.js":
/*!**********************************************!*\
  !*** ./src/js/modules/winningValidations.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");


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
      if (_game__WEBPACK_IMPORTED_MODULE_0__.default.currentPlayer === _game__WEBPACK_IMPORTED_MODULE_0__.default.playerOne) {
        aa.style.background = _game__WEBPACK_IMPORTED_MODULE_0__.default.playerOne.getBackground();
        bb.style.background = _game__WEBPACK_IMPORTED_MODULE_0__.default.playerOne.getBackground();
        cc.style.background = _game__WEBPACK_IMPORTED_MODULE_0__.default.playerOne.getBackground();
      } else {
        aa.style.background = _game__WEBPACK_IMPORTED_MODULE_0__.default.playerTwo.getBackground();
        bb.style.background = _game__WEBPACK_IMPORTED_MODULE_0__.default.playerTwo.getBackground();
        cc.style.background = _game__WEBPACK_IMPORTED_MODULE_0__.default.playerTwo.getBackground();
      }
      return roundWon;
    }
  }
  return roundWon;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (winningValidation);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllclN3aXRjaC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3VwZGF0ZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1U7QUFDRztBQUNGO0FBQ0c7QUFDTjtBQUNNO0FBQ0o7QUFDUjtBQUN5QjtBQUNiO0FBQ0U7O0FBRWxEOztBQUVBLHNEQUFJO0FBQ0osaUVBQU07QUFDTiwwQ0FBMEMsc0RBQVEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJWO0FBQ2Q7QUFDYzs7QUFFeEM7QUFDQSxNQUFNLHFFQUErQixXQUFXLHFFQUErQjtBQUMvRTtBQUNBO0FBQ0EsR0FBRztBQUNILG1CQUFtQixrRUFBNEI7QUFDL0MsZ0JBQWdCLCtEQUF5QjtBQUN6QyxJQUFJLHFEQUFXO0FBQ2Y7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ2M7O0FBRXhDO0FBQ0E7QUFD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QUFDeEQsS0FBSztBQUNMLElBQUksNkRBQXVCO0FBQzNCLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxLQUFLLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSTDs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsZ0JBQWdCO0FBQzNELDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBLFVBQVUsd0RBQWtCLEtBQUssb0RBQWM7QUFDL0MsOEJBQThCLGtFQUE0QjtBQUMxRCw4QkFBOEIsa0VBQTRCO0FBQzFELDhCQUE4QixrRUFBNEI7QUFDMUQsT0FBTztBQUNQLDhCQUE4QixrRUFBNEI7QUFDMUQsOEJBQThCLGtFQUE0QjtBQUMxRCw4QkFBOEIsa0VBQTRCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRTs7Ozs7O1VDeENoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lIGZyb20gJy4vbW9kdWxlcy9nYW1lJztcbmltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9tb2R1bGVzL2dhbWVib2FyZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kdWxlcy9kb21NYW5pcHVsYXRpb24nO1xuaW1wb3J0IHBsYXllckNyZWF0b3IgZnJvbSAnLi9tb2R1bGVzL3BsYXllcic7XG5pbXBvcnQgcGxheWVySWNvbnMgZnJvbSAnLi9tb2R1bGVzL3BsYXllckljb25zJztcbmltcG9ydCBnYW1lSW5pdCBmcm9tICcuL21vZHVsZXMvZ2FtZUluaXQnO1xuaW1wb3J0IGlmQ2VsbEVtcHR5IGZyb20gJy4vbW9kdWxlcy9pZkNlbGxFbXB0eSc7XG5pbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vbW9kdWxlcy9jbGlja0NlbGwnO1xuaW1wb3J0IHJlc2V0IGZyb20gJy4vbW9kdWxlcy9yZXNldCc7XG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi9tb2R1bGVzL3dpbm5pbmdWYWxpZGF0aW9ucyc7XG5pbXBvcnQgdXBkYXRlQm9hcmQgZnJvbSAnLi9tb2R1bGVzL3VwZGF0ZUJvYXJkJztcbmltcG9ydCBwbGF5ZXJTd2l0Y2ggZnJvbSAnLi9tb2R1bGVzL3BsYXllclN3aXRjaCc7XG5cbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEdhbWVCdXR0b24nKTtcblxuZ2FtZSgpO1xuc3R5bGVzKCk7XG5zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lSW5pdCk7IiwiaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL2lmQ2VsbEVtcHR5JztcblxuY29uc3QgY2xpY2tDZWxsID0gKGV2ZW50KSA9PiB7XG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlID09PSAnJyAmJiBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlID09PSAnJykge1xuICAgIGFsZXJ0KFwiUGxlYXNlIEVudGVyIEFsbCBQbGF5ZXIncyBOYW1lcy5cIik7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIEVudGVyIEFsbCBQbGF5ZXIncyBOYW1lc1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzeW1ib2wgPSBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCk7XG4gICAgY29uc3QgaW1nID0gZ2FtZS5jdXJyZW50UGxheWVyLmdldEltZygpO1xuICAgIGlmQ2VsbEVtcHR5KGV2ZW50LCBzeW1ib2wsIGltZyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWNrQ2VsbDtcbiIsImNvbnN0IGRvbUVsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcbiAgY29uc3QgbmFtZVBsYXllclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHdvJyk7XG4gIGNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1pdGVtJyk7XG4gIGNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcbiAgY29uc3QgSWNvbnMgPSBbXTtcbiAgY29uc3Qgcm91bmRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tY291bnRlcicpO1xuICBjb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xuICBjb25zdCBwbGF5ZXJUd29JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllclR3bycpO1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBjZWxsczogY2VsbHMsXG4gICAgcGxheWVyVHdvSWNvbjogcGxheWVyVHdvSWNvbixcbiAgICBwbGF5ZXJPbmVJY29uOiBwbGF5ZXJPbmVJY29uLFxuICAgIHJvdW5kQ291bnRlcjogcm91bmRDb3VudGVyLFxuICAgIEljb25zOiBJY29ucyxcbiAgICBwbGF5ZXJUdXJuSW5kaWNhdG9yOiBwbGF5ZXJUdXJuSW5kaWNhdG9yLFxuICAgIG5hbWVQbGF5ZXJUd286IG5hbWVQbGF5ZXJUd28sXG4gICAgbmFtZVBsYXllck9uZTogbmFtZVBsYXllck9uZSxcbiAgICBhbGxJY29uczogYWxsSWNvbnMsXG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tRWxlbWVudHM7IiwiaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxuY29uc3Qgc3R5bGVzID0gKCkgPT4ge1xuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gIGNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7IGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfTtcbiAgY29uc3QgYWRkRm9ybSA9ICgpID0+IHsgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyB9O1xuICBjb25zdCBkaXNwbGF5SWNvbiA9IChpY29uLCBjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nRWxlbWVudC5zcmMgPSBpY29uO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgcGFpbnRCYWNrZ3JvdW5kID0gKGNvbG9yLCBlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIH07XG4gIGNvbnN0IGRpc2FibGVCYWNrZ3JvdW5kID0gKGNvbG9yLCBlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMjU2LCAyNTYsIDI1NiwgMC41KSc7XG4gIH07XG4gIGNvbnN0IGluaXRpYWxCYWNrZ3JvdW5kID0gKGVsZW1lbnQpID0+IHsgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JzsgfTtcbiAgY29uc3QgZGlzcGxheVJvdW5kcyA9IChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPT09ICdObyBUdXJucyBZZXQnKSB7XG4gICAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSBgVHVybiAke2VsZW1lbnR9LmA7XG4gICAgfVxuICAgIGdhbWUucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSBgSXQgaXMgJHtnYW1lLm9wcG9zaXRlUGxheWVyLmdldE5hbWUoKX0ncyB0dXJuYDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZEZvcm0sXG4gICAgaW5pdGlhbEJhY2tncm91bmQsXG4gICAgcmVtb3ZlRm9ybSxcbiAgICBkaXNwbGF5Um91bmRzLFxuICAgIC8vIHBsYXllclR1cm5JbmRpY2F0b3IsIHdoeSA/XG4gICAgZGlzcGxheUljb24sXG4gICAgcGFpbnRCYWNrZ3JvdW5kLFxuICAgIGRpc2FibGVCYWNrZ3JvdW5kLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzOyIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5pbXBvcnQgcGxheWVyQ3JlYXRvciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgcGxheWVySWNvbnMgZnJvbSAnLi9wbGF5ZXJJY29ucyc7XG5pbXBvcnQgZ2FtZUluaXQgZnJvbSAnLi9nYW1lSW5pdCc7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gMTtcbiAgbGV0IHBsYXllck9uZTtcbiAgbGV0IHBsYXllclR3bztcbiAgY29uc3QgbnVtYmVyT2ZQbGF5ZXJzID0gMTtcbiAgLy8gY29uc3QgbmFtZVBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItb25lJyk7XG4gIC8vIGNvbnN0IG5hbWVQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR3bycpO1xuICAvLyBjb25zdCBhbGxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItaXRlbScpO1xuICAvLyBjb25zdCBwbGF5ZXJUdXJuSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10dXJuJyk7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSAnJztcbiAgY29uc3Qgb3Bwb3NpdGVQbGF5ZXIgPSAnJztcbiAgc3R5bGVzKCk7XG4gIC8vIGNvbnN0IEljb25zID0gW107XG4gIC8vIGNvbnN0IHJvdW5kQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWNvdW50ZXInKTtcbiAgLy8gY29uc3QgcGxheWVyT25lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJPbmUnKTtcbiAgLy8gY29uc3QgcGxheWVyVHdvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJUd28nKTtcblxuICBwbGF5ZXJDcmVhdG9yKCk7XG4gIHBsYXllckljb25zKCk7XG4gIGdhbWVJbml0KCk7XG4gIGRvbUVsZW1lbnRzLmFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVySWNvbnMsIGZhbHNlKTtcbiAgfSk7XG4gIGdhbWVib2FyZCgpO1xuICAvLyByZXR1cm4geyBnYW1lSW5pdCwgZ2FtZUJvYXJkIH07XG4gIHJldHVybiB7XG4gICAgY291bnQsXG4gICAgcGxheWVyT25lLFxuICAgIHBsYXllclR3byxcbiAgICBudW1iZXJPZlBsYXllcnMsXG4gICAgY3VycmVudFBsYXllcixcbiAgICBvcHBvc2l0ZVBsYXllcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7IiwiaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBkb21NYW5pcHVsYXRpb24gZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcic7XG5cblxuY29uc3QgZ2FtZUluaXQgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzdXAgcGVycm8nKTtcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnIHx8IGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgYWRkIGJvdGggcGxheWVycycgbmFtZXMgdG8gY29udGludWUuXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZG9tRWxlbWVudHMuSWNvbnMubGVuZ3RoIDwgMikge1xuICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgY2hhcmFjdGVyIGZvciBib3RoIHBsYXllcnMgdG8gY29udGludWUuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlICE9PSAnJyAmJiBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlICE9PSAnJyAmJiBkb21FbGVtZW50cy5JY29ucy5sZW5ndGggPT09IDIpIHtcbiAgICBnYW1lLnBsYXllck9uZSA9IHBsYXllcihkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlLCAnWCcsIDEsIGRvbUVsZW1lbnRzLkljb25zWzBdLCAncmdiYSgxNDQsIDE2NCwgMTc0LCAwLjgnKTtcbiAgICBnYW1lLnBsYXllclR3byA9IHBsYXllcihkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlLCAnTycsIDIsIGRvbUVsZW1lbnRzLkljb25zWzFdLCAncmdiYSgyNDEsIDE5NiwgMTUsIDAuOCcpO1xuICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUucGxheWVyT25lO1xuICAgIGdhbWUub3Bwb3NpdGVQbGF5ZXIgPSBnYW1lLnBsYXllclR3bztcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24oZ2FtZS5wbGF5ZXJPbmUuZ2V0SW1nKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5wYWludEJhY2tncm91bmQoZ2FtZS5wbGF5ZXJPbmUuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24oZ2FtZS5wbGF5ZXJUd28uZ2V0SW1nKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0J3MgJHtnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpfSdzIHR1cm5gO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5yZW1vdmVGb3JtKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUluaXQ7IiwiaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XG5pbXBvcnQgaWZDZWxsRW1wdHkgZnJvbSAnLi9pZkNlbGxFbXB0eSc7XG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9yZXNldCc7XG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi93aW5uaW5nVmFsaWRhdGlvbnMnO1xuaW1wb3J0IHVwZGF0ZUJvYXJkQXJyYXkgZnJvbSAnLi91cGRhdGVCb2FyZCc7XG5pbXBvcnQgcGxheWVyU3dpdGNoIGZyb20gJy4vcGxheWVyU3dpdGNoJztcblxuXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGlmQ2VsbEVtcHR5KCk7XG4gIGNsaWNrQ2VsbCgpO1xuICByZXNldCgpO1xuICB3aW5uaW5nVmFsaWRhdGlvbigpO1xuICB1cGRhdGVCb2FyZEFycmF5KCk7XG4gIHBsYXllclN3aXRjaCgpO1xuICBcbiAgZG9tRWxlbWVudHMuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2VsbCwgZmFsc2UpKTtcbiAgLy8gaXQgc2VlbXMgbGlrZSB3ZSBkb24ndCBuZWVkIHRvIHJldHVybiBhbnl0aGluZ1xuICAvLyBSb3J5IHRoaW5rcyB0aGF0IHRoZSBtb3N0IGNydWNpYWwgcmVmYWN0b3JpbmcgcGFydCBvZiB0aGlzIGlzIHdoZXJlIGFyZSB3ZSBjYWxsaW5nIGdhbWVib2FyZC5cbiAgLy8gcmV0dXJuIHsgY2xpY2tDZWxsIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7IiwiaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XG5pbXBvcnQgcGxheWVyU3dpdGNoIGZyb20gJy4vcGxheWVyU3dpdGNoJztcblxuY29uc3QgaWZDZWxsRW1wdHkgPSAoZXZlbnQsIHN5bWJvbCwgaW1nKSA9PiB7XG4gIGNvbnN0IGltZ0UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nRS5zcmMgPSBpbWc7XG4gIGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGFzeW1ib2wgPSBzeW1ib2w7XG4gIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChpbWdFKTtcbiAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSk7XG4gIHBsYXllclN3aXRjaCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaWZDZWxsRW1wdHk7IiwiY29uc3QgcGxheWVyID0gKG5hbWUsIHN5bWJvbCwgcGxheWVyTnVtYmVyLCBpbWcsIGJhY2tncm91bmQpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGdldFN5bWJvbCA9ICgpID0+IHN5bWJvbDtcbiAgY29uc3QgZ2V0SW1nID0gKCkgPT4gaW1nO1xuICBjb25zdCBnZXROdW1iZXIgPSAoKSA9PiBwbGF5ZXJOdW1iZXI7XG4gIGNvbnN0IGdldEJhY2tncm91bmQgPSAoKSA9PiBiYWNrZ3JvdW5kO1xuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0U3ltYm9sLFxuICAgIGdldE51bWJlcixcbiAgICBnZXRJbWcsXG4gICAgZ2V0QmFja2dyb3VuZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiLCJpbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuXG5cbmNvbnN0IGNob29zZVBsYXllckljb24gPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgYXJyID0gZG9tRWxlbWVudHMuSWNvbnM7XG4gIGNvbnN0IGNob3Nlbkljb24gPSBldmVudDtcbiAgaWYgKGdhbWUubnVtYmVyT2ZQbGF5ZXIgPT09IDEpIHtcbiAgICBpZiAoYXJyWzBdKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzJykuaWQgPSAnJztcbiAgICAgIGRvbUVsZW1lbnRzLkljb25zWzBdID0gY2hvc2VuSWNvbi5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyci5wdXNoKGNob3Nlbkljb24uc3JjKTtcbiAgICB9XG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xuICAgIGdhbWUubnVtYmVyT2ZQbGF5ZXIgPSAyO1xuICB9IGVsc2Uge1xuICAgIGlmIChhcnJbMV0pIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MtcDInKS5pZCA9ICcnO1xuICAgICAgYXJyWzFdID0gY2hvc2VuSWNvbi5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyci5wdXNoKGNob3Nlbkljb24uc3JjKTtcbiAgICB9XG5cbiAgICBjaG9zZW5JY29uLmlkID0gJ2F2b2lkLWNsaWNrcy1wMic7XG4gICAgZ2FtZS5udW1iZXJPZlBsYXllciA9IDE7XG4gIH1cblxuICByZXR1cm4geyBhcnIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNob29zZVBsYXllckljb247IiwiY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9kb21NYW5pcHVsYXRpb24nKTtcbmNvbnN0IHJlc2V0ID0gcmVxdWlyZSgnLi9yZXNldCcpO1xuY29uc3Qgd2lubmluZ1ZhbGlkYXRpb24gPSByZXF1aXJlKCcuL3dpbm5pbmdWYWxpZGF0aW9ucycpO1xuY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9IHJlcXVpcmUoJy4vdXBkYXRlQm9hcmQnKTtcbmNvbnN0IGRvbUVsZW1lbnRzID0gcmVxdWlyZSgnLi9kb21FbGVtZW50cycpO1xuY29uc3QgZ2FtZSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuXG5jb25zdCBwbGF5ZXJTd2l0Y2ggPSAoKSA9PiB7XG4gIHN0eWxlcy5kaXNwbGF5Um91bmRzKGdhbWUuY291bnQgKyAxKTtcblxuICBpZiAod2lubmluZ1ZhbGlkYXRpb24odXBkYXRlQm9hcmRBcnJheSgpLCBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCkpID09PSBmYWxzZSAmJiBnYW1lLmNvdW50ID09PSA5KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCByZU1hdGNoID0gY29uZmlybShcIkl0J3MgYSBkcmF3ISBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP1wiKTtcbiAgICAgIGlmIChyZU1hdGNoKSB7XG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdIb3cgc2FkLicpO1xuICAgICAgfVxuICAgIH0sIDQ1MCk7XG4gIH0gZWxzZSBpZiAod2lubmluZ1ZhbGlkYXRpb24odXBkYXRlQm9hcmRBcnJheSgpLCBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCkpKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCByZW1hdGNoID0gY29uZmlybShcbiAgICAgICAgYCR7Z2FtZS5jdXJyZW50UGxheWVyLmdldE5hbWUoKX0gaGFzIHdvbi4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9gLFxuICAgICAgKTtcbiAgICAgIGlmIChyZW1hdGNoID09PSB0cnVlKSB7XG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdMb3Nlci4nKTtcbiAgICAgIH1cbiAgICB9LCA0NTApO1xuICB9IGVsc2UgaWYgKGdhbWUub3Bwb3NpdGVQbGF5ZXIuZ2V0TnVtYmVyKCkgPT09IDEpIHtcbiAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XG4gICAgZ2FtZS5vcHBvc2l0ZVBsYXllciA9IGdhbWUucGxheWVyVHdvO1xuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUucGxheWVyVHdvO1xuICAgIGdhbWUub3Bwb3NpdGVQbGF5ZXIgPSBnYW1lLnBsYXllck9uZTtcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICB9XG4gIGdhbWUuY291bnQrKztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllclN3aXRjaDsiLCJpbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XG5pbXBvcnQgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcbmltcG9ydCBjaG9vc2VQbGF5ZXJJY29uIGZyb20gJy4vcGxheWVySWNvbnMnO1xuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMuY2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGVsZW1lbnQuZGF0YXNldC5kYXRhc3ltYm9sID0gJyc7XG4gICAgZG9tTWFuaXB1bGF0aW9uLmluaXRpYWxCYWNrZ3JvdW5kKGVsZW1lbnQpO1xuICAgIGdhbWUuY291bnQgPSAxO1xuICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSAnVHVybiAxLic7XG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSAnJztcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uLmlubmVySFRNTCA9ICcnO1xuICAgIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24uaW5uZXJIVE1MID0gJyc7XG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNhYmxlQmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcbiAgICBkb21FbGVtZW50cy5hbGxJY29ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGxheWVySWNvbiwgZmFsc2UpO1xuICAgIH0pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5hZGRGb3JtKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7IiwiY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcbiAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oY2VsbHMpO1xuICBjb25zdCByZW5kZXJCb2FyZCA9IGNlbGxzQXJyYXkubWFwKFxuICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcbiAgKTtcbiAgcmV0dXJuIHJlbmRlckJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQm9hcmRBcnJheTsiLCJpbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCB3aW5uaW5nVmFsaWRhdGlvbiA9IChhcnJheSwgc3ltYm9sKSA9PiB7XG4gIGxldCByb3VuZFdvbiA9IGZhbHNlO1xuICBjb25zdCB3aW5uaW5nQ29uZGl0aW9ucyA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbMCwgMywgNl0sXG4gICAgWzEsIDQsIDddLFxuICAgIFsyLCA1LCA4XSxcbiAgICBbMCwgNCwgOF0sXG4gICAgWzIsIDQsIDZdLFxuICBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDc7IGkgKz0gMSkge1xuICAgIGNvbnN0IHdpbkNvbmRpdGlvbiA9IHdpbm5pbmdDb25kaXRpb25zW2ldO1xuICAgIGNvbnN0IGEgPSBhcnJheVt3aW5Db25kaXRpb25bMF1dO1xuICAgIGNvbnN0IGIgPSBhcnJheVt3aW5Db25kaXRpb25bMV1dO1xuICAgIGNvbnN0IGMgPSBhcnJheVt3aW5Db25kaXRpb25bMl1dO1xuICAgIGNvbnN0IGFhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblswXX1gKTtcbiAgICBjb25zdCBiYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMV19YCk7XG4gICAgY29uc3QgY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzJdfWApO1xuICAgIGlmIChhID09PSBzeW1ib2wgJiYgYiA9PT0gc3ltYm9sICYmIGMgPT09IHN5bWJvbCkge1xuICAgICAgcm91bmRXb24gPSB0cnVlO1xuICAgICAgaWYgKGdhbWUuY3VycmVudFBsYXllciA9PT0gZ2FtZS5wbGF5ZXJPbmUpIHtcbiAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcbiAgICAgICAgYmIuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIGNjLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91bmRXb247XG4gICAgfVxuICB9XG4gIHJldHVybiByb3VuZFdvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpbm5pbmdWYWxpZGF0aW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
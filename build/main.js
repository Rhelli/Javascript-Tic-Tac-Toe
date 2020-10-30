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
/*! export Icons [provided] [no usage info] [missing usage info prevents renaming] */
/*! export allIcons [provided] [no usage info] [missing usage info prevents renaming] */
/*! export call [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "call": () => /* binding */ call,
/* harmony export */   "Icons": () => /* binding */ Icons,
/* harmony export */   "allIcons": () => /* binding */ allIcons
/* harmony export */ });
const namePlayerOne = document.getElementById('player-one');
const namePlayerTwo = document.getElementById('player-two');
const allIcons = document.querySelectorAll('.character-item');
const playerTurnIndicator = document.getElementById('player-turn');
const Icons = [];
const roundCounter = document.getElementById('turn-counter');
const playerOneIcon = document.getElementById('activePlayerOne');
const playerTwoIcon = document.getElementById('activePlayerTwo');
const cells = document.querySelectorAll('.cell');
const call = () => console.log(allIcons);




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
  (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.call)();
  const arr = _domElements__WEBPACK_IMPORTED_MODULE_0__.Icons;
  const chosenIcon = event;
  if (_game__WEBPACK_IMPORTED_MODULE_1__.default.numberOfPlayer === 1) {
    if (arr[0]) {
      document.getElementById('avoid-clicks').id = '';
      domElements.Icons[0] = chosenIcon.src;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllclN3aXRjaC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3VwZGF0ZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1U7QUFDRztBQUNGO0FBQ0c7QUFDTjtBQUNNO0FBQ0o7QUFDUjtBQUN5QjtBQUNiO0FBQ0U7O0FBRWxEOztBQUVBLHNEQUFJO0FBQ0osaUVBQU07QUFDTiwwQ0FBMEMsc0RBQVEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJWO0FBQ2Q7QUFDYzs7QUFFeEM7QUFDQSxNQUFNLHFFQUErQixXQUFXLHFFQUErQjtBQUMvRTtBQUNBO0FBQ0EsR0FBRztBQUNILG1CQUFtQixrRUFBNEI7QUFDL0MsZ0JBQWdCLCtEQUF5QjtBQUN6QyxJQUFJLHFEQUFXO0FBQ2Y7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1QwQjtBQUNjOztBQUV4QztBQUNBO0FBQ0EsNEJBQTRCLHNDQUFzQztBQUNsRSx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7QUMxQnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkw7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0QsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQSxVQUFVLHdEQUFrQixLQUFLLG9EQUFjO0FBQy9DLDhCQUE4QixrRUFBNEI7QUFDMUQsOEJBQThCLGtFQUE0QjtBQUMxRCw4QkFBOEIsa0VBQTRCO0FBQzFELE9BQU87QUFDUCw4QkFBOEIsa0VBQTRCO0FBQzFELDhCQUE4QixrRUFBNEI7QUFDMUQsOEJBQThCLGtFQUE0QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEU7Ozs7OztVQ3hDaEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcbmltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9tb2R1bGVzL2dhbWVib2FyZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbic7XHJcbmltcG9ydCBwbGF5ZXJDcmVhdG9yIGZyb20gJy4vbW9kdWxlcy9wbGF5ZXInO1xyXG5pbXBvcnQgcGxheWVySWNvbnMgZnJvbSAnLi9tb2R1bGVzL3BsYXllckljb25zJztcclxuaW1wb3J0IGdhbWVJbml0IGZyb20gJy4vbW9kdWxlcy9nYW1lSW5pdCc7XHJcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL21vZHVsZXMvaWZDZWxsRW1wdHknO1xyXG5pbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vbW9kdWxlcy9jbGlja0NlbGwnO1xyXG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9tb2R1bGVzL3Jlc2V0JztcclxuaW1wb3J0IHdpbm5pbmdWYWxpZGF0aW9uIGZyb20gJy4vbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgdXBkYXRlQm9hcmQgZnJvbSAnLi9tb2R1bGVzL3VwZGF0ZUJvYXJkJztcclxuaW1wb3J0IHBsYXllclN3aXRjaCBmcm9tICcuL21vZHVsZXMvcGxheWVyU3dpdGNoJztcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEdhbWVCdXR0b24nKTtcclxuXHJcbmdhbWUoKTtcclxuc3R5bGVzKCk7XHJcbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWVJbml0KTsiLCJpbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IGlmQ2VsbEVtcHR5IGZyb20gJy4vaWZDZWxsRW1wdHknO1xuXG5jb25zdCBjbGlja0NlbGwgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzLlwiKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN5bWJvbCA9IGdhbWUuY3VycmVudFBsYXllci5nZXRTeW1ib2woKTtcbiAgICBjb25zdCBpbWcgPSBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0SW1nKCk7XG4gICAgaWZDZWxsRW1wdHkoZXZlbnQsIHN5bWJvbCwgaW1nKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpY2tDZWxsO1xuIiwiY29uc3QgbmFtZVBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItb25lJyk7XHJcbmNvbnN0IG5hbWVQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR3bycpO1xyXG5jb25zdCBhbGxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItaXRlbScpO1xyXG5jb25zdCBwbGF5ZXJUdXJuSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10dXJuJyk7XHJcbmNvbnN0IEljb25zID0gW107XHJcbmNvbnN0IHJvdW5kQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWNvdW50ZXInKTtcclxuY29uc3QgcGxheWVyT25lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJPbmUnKTtcclxuY29uc3QgcGxheWVyVHdvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJUd28nKTtcclxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG5jb25zdCBjYWxsID0gKCkgPT4gY29uc29sZS5sb2coYWxsSWNvbnMpO1xyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgY2FsbCxcclxuICBJY29ucywgYWxsSWNvbnMsXHJcbn0iLCJpbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuXG5jb25zdCBzdHlsZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKTtcbiAgY29uc3QgcmVtb3ZlRm9ybSA9ICgpID0+IHsgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9O1xuICBjb25zdCBhZGRGb3JtID0gKCkgPT4geyBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7IH07XG4gIGNvbnN0IGRpc3BsYXlJY29uID0gKGljb24sIGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWdFbGVtZW50LnNyYyA9IGljb247XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICB9O1xuICBjb25zdCBwYWludEJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgfTtcbiAgY29uc3QgZGlzYWJsZUJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgyNTYsIDI1NiwgMjU2LCAwLjUpJztcbiAgfTtcbiAgY29uc3QgaW5pdGlhbEJhY2tncm91bmQgPSAoZWxlbWVudCkgPT4geyBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnOyB9O1xuICBjb25zdCBkaXNwbGF5Um91bmRzID0gKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9PT0gJ05vIFR1cm5zIFlldCcpIHtcbiAgICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSAnVHVybiAxJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9IGBUdXJuICR7ZWxlbWVudH0uYDtcbiAgICB9XG4gICAgZ2FtZS5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCBpcyAke2dhbWUub3Bwb3NpdGVQbGF5ZXIuZ2V0TmFtZSgpfSdzIHR1cm5gO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkRm9ybSxcbiAgICBpbml0aWFsQmFja2dyb3VuZCxcbiAgICByZW1vdmVGb3JtLFxuICAgIGRpc3BsYXlSb3VuZHMsXG4gICAgLy8gcGxheWVyVHVybkluZGljYXRvciwgd2h5ID9cbiAgICBkaXNwbGF5SWNvbixcbiAgICBwYWludEJhY2tncm91bmQsXG4gICAgZGlzYWJsZUJhY2tncm91bmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7IiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xyXG5pbXBvcnQgcGxheWVyQ3JlYXRvciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCBwbGF5ZXJJY29ucyBmcm9tICcuL3BsYXllckljb25zJztcclxuaW1wb3J0IGdhbWVJbml0IGZyb20gJy4vZ2FtZUluaXQnO1xyXG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcblxyXG5jb25zdCBnYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvdW50ID0gMTtcclxuICBsZXQgcGxheWVyT25lO1xyXG4gIGxldCBwbGF5ZXJUd287XHJcbiAgY29uc3QgbnVtYmVyT2ZQbGF5ZXJzID0gMTtcclxuICAvLyBjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcclxuICAvLyBjb25zdCBuYW1lUGxheWVyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10d28nKTtcclxuICAvLyBjb25zdCBhbGxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItaXRlbScpO1xyXG4gIC8vIGNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcclxuICBjb25zdCBjdXJyZW50UGxheWVyID0gJyc7XHJcbiAgY29uc3Qgb3Bwb3NpdGVQbGF5ZXIgPSAnJztcclxuICBzdHlsZXMoKTtcclxuICAvLyBjb25zdCBJY29ucyA9IFtdO1xyXG4gIC8vIGNvbnN0IHJvdW5kQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWNvdW50ZXInKTtcclxuICAvLyBjb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xyXG4gIC8vIGNvbnN0IHBsYXllclR3b0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyVHdvJyk7XHJcblxyXG4gIHBsYXllckNyZWF0b3IoKTtcclxuICBwbGF5ZXJJY29ucygpO1xyXG4gIGdhbWVJbml0KCk7XHJcbiAgZG9tRWxlbWVudHMuYWxsSWNvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckljb25zLCBmYWxzZSk7XHJcbiAgfSk7XHJcbiAgZ2FtZWJvYXJkKCk7XHJcbiAgLy8gcmV0dXJuIHsgZ2FtZUluaXQsIGdhbWVCb2FyZCB9O1xyXG4gIHJldHVybiB7XHJcbiAgICBjb3VudCxcclxuICAgIHBsYXllck9uZSxcclxuICAgIHBsYXllclR3byxcclxuICAgIG51bWJlck9mUGxheWVycyxcclxuICAgIGN1cnJlbnRQbGF5ZXIsXHJcbiAgICBvcHBvc2l0ZVBsYXllcixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiLCJpbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IGRvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuXG5jb25zdCBnYW1lSW5pdCA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ3N1cCBwZXJybycpO1xuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgfHwgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydChcIlBsZWFzZSBhZGQgYm90aCBwbGF5ZXJzJyBuYW1lcyB0byBjb250aW51ZS5cIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChkb21FbGVtZW50cy5JY29ucy5sZW5ndGggPCAyKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBjaGFyYWN0ZXIgZm9yIGJvdGggcGxheWVycyB0byBjb250aW51ZS4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLkljb25zLmxlbmd0aCA9PT0gMikge1xuICAgIGdhbWUucGxheWVyT25lID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUsICdYJywgMSwgZG9tRWxlbWVudHMuSWNvbnNbMF0sICdyZ2JhKDE0NCwgMTY0LCAxNzQsIDAuOCcpO1xuICAgIGdhbWUucGxheWVyVHdvID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUsICdPJywgMiwgZG9tRWxlbWVudHMuSWNvbnNbMV0sICdyZ2JhKDI0MSwgMTk2LCAxNSwgMC44Jyk7XG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XG4gICAgZ2FtZS5vcHBvc2l0ZVBsYXllciA9IGdhbWUucGxheWVyVHdvO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihnYW1lLnBsYXllck9uZS5nZXRJbWcoKSwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gICAgZG9tTWFuaXB1bGF0aW9uLnBhaW50QmFja2dyb3VuZChnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihnYW1lLnBsYXllclR3by5nZXRJbWcoKSwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSBgSXQncyAke2dhbWUuY3VycmVudFBsYXllci5nZXROYW1lKCl9J3MgdHVybmA7XG4gICAgZG9tTWFuaXB1bGF0aW9uLnJlbW92ZUZvcm0oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lSW5pdDsiLCJpbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL2lmQ2VsbEVtcHR5JztcbmltcG9ydCByZXNldCBmcm9tICcuL3Jlc2V0JztcbmltcG9ydCB3aW5uaW5nVmFsaWRhdGlvbiBmcm9tICcuL3dpbm5pbmdWYWxpZGF0aW9ucyc7XG5pbXBvcnQgdXBkYXRlQm9hcmRBcnJheSBmcm9tICcuL3VwZGF0ZUJvYXJkJztcbmltcG9ydCBwbGF5ZXJTd2l0Y2ggZnJvbSAnLi9wbGF5ZXJTd2l0Y2gnO1xuXG5cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgaWZDZWxsRW1wdHkoKTtcbiAgY2xpY2tDZWxsKCk7XG4gIHJlc2V0KCk7XG4gIHdpbm5pbmdWYWxpZGF0aW9uKCk7XG4gIHVwZGF0ZUJvYXJkQXJyYXkoKTtcbiAgcGxheWVyU3dpdGNoKCk7XG4gIFxuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSkpO1xuICAvLyBpdCBzZWVtcyBsaWtlIHdlIGRvbid0IG5lZWQgdG8gcmV0dXJuIGFueXRoaW5nXG4gIC8vIFJvcnkgdGhpbmtzIHRoYXQgdGhlIG1vc3QgY3J1Y2lhbCByZWZhY3RvcmluZyBwYXJ0IG9mIHRoaXMgaXMgd2hlcmUgYXJlIHdlIGNhbGxpbmcgZ2FtZWJvYXJkLlxuICAvLyByZXR1cm4geyBjbGlja0NlbGwgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDsiLCJpbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcbmltcG9ydCBwbGF5ZXJTd2l0Y2ggZnJvbSAnLi9wbGF5ZXJTd2l0Y2gnO1xuXG5jb25zdCBpZkNlbGxFbXB0eSA9IChldmVudCwgc3ltYm9sLCBpbWcpID0+IHtcbiAgY29uc3QgaW1nRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFLnNyYyA9IGltZztcbiAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGF0YXN5bWJvbCA9IHN5bWJvbDtcbiAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGltZ0UpO1xuICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcbiAgcGxheWVyU3dpdGNoKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpZkNlbGxFbXB0eTsiLCJjb25zdCBwbGF5ZXIgPSAobmFtZSwgc3ltYm9sLCBwbGF5ZXJOdW1iZXIsIGltZywgYmFja2dyb3VuZCkgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgZ2V0U3ltYm9sID0gKCkgPT4gc3ltYm9sO1xuICBjb25zdCBnZXRJbWcgPSAoKSA9PiBpbWc7XG4gIGNvbnN0IGdldE51bWJlciA9ICgpID0+IHBsYXllck51bWJlcjtcbiAgY29uc3QgZ2V0QmFja2dyb3VuZCA9ICgpID0+IGJhY2tncm91bmQ7XG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBnZXRTeW1ib2wsXG4gICAgZ2V0TnVtYmVyLFxuICAgIGdldEltZyxcbiAgICBnZXRCYWNrZ3JvdW5kLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImltcG9ydCB7IEljb25zLCBjYWxsLCBhbGxJY29ucyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcblxuXG5jb25zdCBjaG9vc2VQbGF5ZXJJY29uID0gKGV2ZW50KSA9PiB7XG4gIGNhbGwoKTtcbiAgY29uc3QgYXJyID0gSWNvbnM7XG4gIGNvbnN0IGNob3Nlbkljb24gPSBldmVudDtcbiAgaWYgKGdhbWUubnVtYmVyT2ZQbGF5ZXIgPT09IDEpIHtcbiAgICBpZiAoYXJyWzBdKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzJykuaWQgPSAnJztcbiAgICAgIGRvbUVsZW1lbnRzLkljb25zWzBdID0gY2hvc2VuSWNvbi5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyci5wdXNoKGNob3Nlbkljb24uc3JjKTtcbiAgICB9XG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xuICAgIGdhbWUubnVtYmVyT2ZQbGF5ZXIgPSAyO1xuICB9IGVsc2Uge1xuICAgIGlmIChhcnJbMV0pIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MtcDInKS5pZCA9ICcnO1xuICAgICAgYXJyWzFdID0gY2hvc2VuSWNvbi5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyci5wdXNoKGNob3Nlbkljb24uc3JjKTtcbiAgICB9XG5cbiAgICBjaG9zZW5JY29uLmlkID0gJ2F2b2lkLWNsaWNrcy1wMic7XG4gICAgZ2FtZS5udW1iZXJPZlBsYXllciA9IDE7XG4gIH1cblxuICByZXR1cm4geyBhcnIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNob29zZVBsYXllckljb247IiwiY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9kb21NYW5pcHVsYXRpb24nKTtcbmNvbnN0IHJlc2V0ID0gcmVxdWlyZSgnLi9yZXNldCcpO1xuY29uc3Qgd2lubmluZ1ZhbGlkYXRpb24gPSByZXF1aXJlKCcuL3dpbm5pbmdWYWxpZGF0aW9ucycpO1xuY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9IHJlcXVpcmUoJy4vdXBkYXRlQm9hcmQnKTtcbmNvbnN0IGRvbUVsZW1lbnRzID0gcmVxdWlyZSgnLi9kb21FbGVtZW50cycpO1xuY29uc3QgZ2FtZSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuXG5jb25zdCBwbGF5ZXJTd2l0Y2ggPSAoKSA9PiB7XG4gIHN0eWxlcy5kaXNwbGF5Um91bmRzKGdhbWUuY291bnQgKyAxKTtcblxuICBpZiAod2lubmluZ1ZhbGlkYXRpb24odXBkYXRlQm9hcmRBcnJheSgpLCBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCkpID09PSBmYWxzZSAmJiBnYW1lLmNvdW50ID09PSA5KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCByZU1hdGNoID0gY29uZmlybShcIkl0J3MgYSBkcmF3ISBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP1wiKTtcbiAgICAgIGlmIChyZU1hdGNoKSB7XG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdIb3cgc2FkLicpO1xuICAgICAgfVxuICAgIH0sIDQ1MCk7XG4gIH0gZWxzZSBpZiAod2lubmluZ1ZhbGlkYXRpb24odXBkYXRlQm9hcmRBcnJheSgpLCBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCkpKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCByZW1hdGNoID0gY29uZmlybShcbiAgICAgICAgYCR7Z2FtZS5jdXJyZW50UGxheWVyLmdldE5hbWUoKX0gaGFzIHdvbi4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9gLFxuICAgICAgKTtcbiAgICAgIGlmIChyZW1hdGNoID09PSB0cnVlKSB7XG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdMb3Nlci4nKTtcbiAgICAgIH1cbiAgICB9LCA0NTApO1xuICB9IGVsc2UgaWYgKGdhbWUub3Bwb3NpdGVQbGF5ZXIuZ2V0TnVtYmVyKCkgPT09IDEpIHtcbiAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XG4gICAgZ2FtZS5vcHBvc2l0ZVBsYXllciA9IGdhbWUucGxheWVyVHdvO1xuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUucGxheWVyVHdvO1xuICAgIGdhbWUub3Bwb3NpdGVQbGF5ZXIgPSBnYW1lLnBsYXllck9uZTtcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICB9XG4gIGdhbWUuY291bnQrKztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllclN3aXRjaDsiLCJpbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XG5pbXBvcnQgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcbmltcG9ydCBjaG9vc2VQbGF5ZXJJY29uIGZyb20gJy4vcGxheWVySWNvbnMnO1xuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMuY2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGVsZW1lbnQuZGF0YXNldC5kYXRhc3ltYm9sID0gJyc7XG4gICAgZG9tTWFuaXB1bGF0aW9uLmluaXRpYWxCYWNrZ3JvdW5kKGVsZW1lbnQpO1xuICAgIGdhbWUuY291bnQgPSAxO1xuICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSAnVHVybiAxLic7XG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSAnJztcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uLmlubmVySFRNTCA9ICcnO1xuICAgIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24uaW5uZXJIVE1MID0gJyc7XG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNhYmxlQmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcbiAgICBkb21FbGVtZW50cy5hbGxJY29ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGxheWVySWNvbiwgZmFsc2UpO1xuICAgIH0pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5hZGRGb3JtKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7IiwiY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcbiAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oY2VsbHMpO1xuICBjb25zdCByZW5kZXJCb2FyZCA9IGNlbGxzQXJyYXkubWFwKFxuICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcbiAgKTtcbiAgcmV0dXJuIHJlbmRlckJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQm9hcmRBcnJheTsiLCJpbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCB3aW5uaW5nVmFsaWRhdGlvbiA9IChhcnJheSwgc3ltYm9sKSA9PiB7XG4gIGxldCByb3VuZFdvbiA9IGZhbHNlO1xuICBjb25zdCB3aW5uaW5nQ29uZGl0aW9ucyA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbMCwgMywgNl0sXG4gICAgWzEsIDQsIDddLFxuICAgIFsyLCA1LCA4XSxcbiAgICBbMCwgNCwgOF0sXG4gICAgWzIsIDQsIDZdLFxuICBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDc7IGkgKz0gMSkge1xuICAgIGNvbnN0IHdpbkNvbmRpdGlvbiA9IHdpbm5pbmdDb25kaXRpb25zW2ldO1xuICAgIGNvbnN0IGEgPSBhcnJheVt3aW5Db25kaXRpb25bMF1dO1xuICAgIGNvbnN0IGIgPSBhcnJheVt3aW5Db25kaXRpb25bMV1dO1xuICAgIGNvbnN0IGMgPSBhcnJheVt3aW5Db25kaXRpb25bMl1dO1xuICAgIGNvbnN0IGFhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblswXX1gKTtcbiAgICBjb25zdCBiYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMV19YCk7XG4gICAgY29uc3QgY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzJdfWApO1xuICAgIGlmIChhID09PSBzeW1ib2wgJiYgYiA9PT0gc3ltYm9sICYmIGMgPT09IHN5bWJvbCkge1xuICAgICAgcm91bmRXb24gPSB0cnVlO1xuICAgICAgaWYgKGdhbWUuY3VycmVudFBsYXllciA9PT0gZ2FtZS5wbGF5ZXJPbmUpIHtcbiAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcbiAgICAgICAgYmIuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIGNjLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91bmRXb247XG4gICAgfVxuICB9XG4gIHJldHVybiByb3VuZFdvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpbm5pbmdWYWxpZGF0aW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
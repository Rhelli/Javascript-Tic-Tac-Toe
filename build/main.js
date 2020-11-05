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


(0,_modules_game__WEBPACK_IMPORTED_MODULE_0__.default)();

/***/ }),

/***/ "./src/js/modules/domElements.js":
/*!***************************************!*\
  !*** ./src/js/modules/domElements.js ***!
  \***************************************/
/*! namespace exports */
/*! export allIcons [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cells [provided] [no usage info] [missing usage info prevents renaming] */
/*! export formContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export namePlayerOne [provided] [no usage info] [missing usage info prevents renaming] */
/*! export namePlayerTwo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerOneIcon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerTurnIndicator [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerTwoIcon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resetButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export roundCounter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allIcons": () => /* binding */ allIcons,
/* harmony export */   "namePlayerOne": () => /* binding */ namePlayerOne,
/* harmony export */   "namePlayerTwo": () => /* binding */ namePlayerTwo,
/* harmony export */   "playerTurnIndicator": () => /* binding */ playerTurnIndicator,
/* harmony export */   "roundCounter": () => /* binding */ roundCounter,
/* harmony export */   "playerOneIcon": () => /* binding */ playerOneIcon,
/* harmony export */   "playerTwoIcon": () => /* binding */ playerTwoIcon,
/* harmony export */   "cells": () => /* binding */ cells,
/* harmony export */   "initButton": () => /* binding */ initButton,
/* harmony export */   "resetButton": () => /* binding */ resetButton,
/* harmony export */   "formContainer": () => /* binding */ formContainer
/* harmony export */ });
const namePlayerOne = document.getElementById('player-one');
const namePlayerTwo = document.getElementById('player-two');
const allIcons = document.querySelectorAll('.character-item');
const playerTurnIndicator = document.getElementById('player-turn');
const roundCounter = document.getElementById('turn-counter');
const playerOneIcon = document.getElementById('activePlayerOne');
const playerTwoIcon = document.getElementById('activePlayerTwo');
const cells = document.querySelectorAll('.cell');
const initButton = document.getElementById('startGameButton');
const resetButton = document.getElementById('resetButton');
const formContainer = document.getElementById('form-container');



/***/ }),

/***/ "./src/js/modules/domManipulation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/domManipulation.js ***!
  \*******************************************/
/*! namespace exports */
/*! export disableBackground [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayIcon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayRounds [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initialBackground [provided] [no usage info] [missing usage info prevents renaming] */
/*! export paintBackground [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialBackground": () => /* binding */ initialBackground,
/* harmony export */   "removeForm": () => /* binding */ removeForm,
/* harmony export */   "displayRounds": () => /* binding */ displayRounds,
/* harmony export */   "displayIcon": () => /* binding */ displayIcon,
/* harmony export */   "paintBackground": () => /* binding */ paintBackground,
/* harmony export */   "disableBackground": () => /* binding */ disableBackground
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");



const removeForm = (container) => {
  container.style.display = 'none';
};

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
const initialBackground = (element) => {
  element.style.background = 'transparent';
};
const displayRounds = (element, roundCounter, oppositePlayer) => {
  if (roundCounter.innerHTML === 'No Turns Yet') {
    roundCounter.innerHTML = 'Turn 1';
  } else {
    roundCounter.innerHTML = `Turn ${element}.`;
  }
  _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = `It is ${oppositePlayer.name}'s turn`;
};




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
/* harmony import */ var _playerIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerIcons */ "./src/js/modules/playerIcons.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset */ "./src/js/modules/reset.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _gameInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameInit */ "./src/js/modules/gameInit.js");







const game = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_2__.initButton.addEventListener('click', () => {
    (0,_gameInit__WEBPACK_IMPORTED_MODULE_5__.default)(_domElements__WEBPACK_IMPORTED_MODULE_2__.namePlayerOne, _domElements__WEBPACK_IMPORTED_MODULE_2__.namePlayerTwo, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons, _domElements__WEBPACK_IMPORTED_MODULE_2__.playerOneIcon, _domElements__WEBPACK_IMPORTED_MODULE_2__.playerTwoIcon);
  });
  _domElements__WEBPACK_IMPORTED_MODULE_2__.resetButton.addEventListener('click', () => {
    (0,_reset__WEBPACK_IMPORTED_MODULE_3__.default)(_domElements__WEBPACK_IMPORTED_MODULE_2__.formContainer);
  });
  _domElements__WEBPACK_IMPORTED_MODULE_2__.allIcons.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      (0,_playerIcons__WEBPACK_IMPORTED_MODULE_1__.default)(element);
    });
  });
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.default)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);

/***/ }),

/***/ "./src/js/modules/gameInit.js":
/*!************************************!*\
  !*** ./src/js/modules/gameInit.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gameInit [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "gameInit": () => /* binding */ gameInit
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/js/modules/player.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");
/* harmony import */ var _playerIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerIcons */ "./src/js/modules/playerIcons.js");






const gameInit = (namePlayerOne, namePlayerTwo, Icons) => {
  if (namePlayerOne.value === '' || namePlayerTwo.value === '') {
    window.alert("Please add both players' names to continue.");
    return false;
  }
  if (Icons.length < 2) {
    window.alert('Please select a character for both players to continue.');
    return false;
  }
  if (namePlayerOne.value !== '' && namePlayerTwo.value !== '' && Icons.length === 2) {
    const playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_2__.default)(namePlayerOne.value, 'X', 1, Icons[0], 'rgba(144, 164, 174, 0.8');
    const playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_2__.default)(namePlayerTwo.value, 'O', 2, Icons[1], 'rgba(241, 196, 15, 0.8');
    const currentPlayer = playerOne;
    const oppositePlayer = playerTwo;
    const count = 1;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveItem)('playerOne', playerOne);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveItem)('playerTwo', playerTwo);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveItem)('currentPlayer', currentPlayer);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveItem)('oppositePlayer', oppositePlayer);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveItem)('count', count);
  }
  return true;
};

const afterGameInit = (namePlayerOne, namePlayerTwo, Icons, playerOneIcon, playerTwoIcon) => {
  if (gameInit(namePlayerOne, namePlayerTwo, Icons, _domManipulation__WEBPACK_IMPORTED_MODULE_1__)) {
    gameInit(namePlayerOne, namePlayerTwo, Icons, _domManipulation__WEBPACK_IMPORTED_MODULE_1__);
    _domManipulation__WEBPACK_IMPORTED_MODULE_1__.displayIcon(Icons[0], playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_1__.paintBackground('rgba(144, 164, 174, 0.8)', playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_1__.displayIcon(Icons[1], playerTwoIcon);
    const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)('currentPlayer');
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = `It's ${currentPlayer.name}'s turn`;
    const formContainer = document.getElementById('form-container');
    _domManipulation__WEBPACK_IMPORTED_MODULE_1__.removeForm(formContainer);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (afterGameInit);


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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");
/* harmony import */ var _playerSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerSwitch */ "./src/js/modules/playerSwitch.js");
/* harmony import */ var _ifCellEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ifCellEmpty */ "./src/js/modules/ifCellEmpty.js");





const gameboard = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.retrieveItem)('currentPlayer');
      (0,_ifCellEmpty__WEBPACK_IMPORTED_MODULE_3__.default)(currentPlayer, event, _playerSwitch__WEBPACK_IMPORTED_MODULE_2__.default);
    });
  });
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
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const ifCellEmpty = (currentPlayer, event, fun) => {
  const imgE = document.createElement('img');
  imgE.src = currentPlayer.img;
  event.target.dataset.datasymbol = currentPlayer.symbol;
  event.target.appendChild(imgE);
  event.target.classList.add('prevent-clicks');
  fun();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ifCellEmpty);

/***/ }),

/***/ "./src/js/modules/localStorage.js":
/*!****************************************!*\
  !*** ./src/js/modules/localStorage.js ***!
  \****************************************/
/*! namespace exports */
/*! export retrieveItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saveItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveItem": () => /* binding */ saveItem,
/* harmony export */   "retrieveItem": () => /* binding */ retrieveItem
/* harmony export */ });
const saveItem = (string, object) => {
  localStorage.setItem(string, JSON.stringify(object));
};

const retrieveItem = (string) => JSON.parse(localStorage.getItem(string));



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
const player = (name, symbol, playerNumber, img, background) => ({
  name,
  symbol,
  playerNumber,
  img,
  background,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/js/modules/playerIcons.js":
/*!***************************************!*\
  !*** ./src/js/modules/playerIcons.js ***!
  \***************************************/
/*! namespace exports */
/*! export Icons [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "Icons": () => /* binding */ Icons
/* harmony export */ });
let numberOfPlayer = 1;
const Icons = [];

const choosePlayerIcon = (element) => {
  const chosenIcon = element;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (choosePlayerIcon);


/***/ }),

/***/ "./src/js/modules/playerSwitch.js":
/*!****************************************!*\
  !*** ./src/js/modules/playerSwitch.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset */ "./src/js/modules/reset.js");
/* harmony import */ var _winningValidations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winningValidations */ "./src/js/modules/winningValidations.js");
/* harmony import */ var _updateBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateBoard */ "./src/js/modules/updateBoard.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");







const playerSwitch = () => {
  let currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('currentPlayer');
  let oppositePlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('oppositePlayer');
  const playerOne = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('playerOne');
  const playerTwo = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('playerTwo');
  let count = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('count');
  _domManipulation__WEBPACK_IMPORTED_MODULE_0__.displayRounds(count + 1, _domElements__WEBPACK_IMPORTED_MODULE_4__.roundCounter, oppositePlayer);
  if ((0,_winningValidations__WEBPACK_IMPORTED_MODULE_2__.default)((0,_updateBoard__WEBPACK_IMPORTED_MODULE_3__.default)(), currentPlayer.symbol) === false && count === 9) {
    setTimeout(() => {
      const reMatch = confirm("It's a draw! Would you like to play again?");
      if (reMatch) {
        (0,_reset__WEBPACK_IMPORTED_MODULE_1__.default)(_domElements__WEBPACK_IMPORTED_MODULE_4__.cells);
      } else {
        alert('How sad.');
      }
    }, 450);
  } else if ((0,_winningValidations__WEBPACK_IMPORTED_MODULE_2__.default)((0,_updateBoard__WEBPACK_IMPORTED_MODULE_3__.default)(), currentPlayer.symbol)) {
    setTimeout(() => {
      const rematch = confirm(
        `${currentPlayer.name} has won. Would you like to play again?`,
      );
      if (rematch === true) {
        (0,_reset__WEBPACK_IMPORTED_MODULE_1__.default)(_domElements__WEBPACK_IMPORTED_MODULE_4__.cells);
      } else {
        alert('Loser.');
      }
    }, 450);
  } else if (oppositePlayer.playerNumber === 1) {
    _domManipulation__WEBPACK_IMPORTED_MODULE_0__.disableBackground(currentPlayer.background, _domElements__WEBPACK_IMPORTED_MODULE_4__.playerTwoIcon);
    currentPlayer = playerOne;
    oppositePlayer = playerTwo;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('currentPlayer', currentPlayer);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('oppositePlayer', oppositePlayer);
    _domManipulation__WEBPACK_IMPORTED_MODULE_0__.paintBackground(currentPlayer.background, _domElements__WEBPACK_IMPORTED_MODULE_4__.playerOneIcon);
  } else {
    _domManipulation__WEBPACK_IMPORTED_MODULE_0__.disableBackground(currentPlayer.background, _domElements__WEBPACK_IMPORTED_MODULE_4__.playerOneIcon);
    currentPlayer = playerTwo;
    oppositePlayer = playerOne;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('currentPlayer', currentPlayer);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('oppositePlayer', oppositePlayer);
    _domManipulation__WEBPACK_IMPORTED_MODULE_0__.paintBackground(currentPlayer.background, _domElements__WEBPACK_IMPORTED_MODULE_4__.playerTwoIcon);
  }
  count++;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('count', count);
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


const reset = (formContainer) => {
  localStorage.clear();
  location.reload();
  formContainer.style.display = 'flex';
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
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");


const updateBoardArray = () => {
  const cellsArray = Array.from(_domElements__WEBPACK_IMPORTED_MODULE_0__.cells);
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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");


const winningValidation = (array, symbol) => {
  const playerOne = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.retrieveItem)('playerOne');
  const playerTwo = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.retrieveItem)('playerTwo');
  const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.retrieveItem)('currentPlayer');
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
      aa.style.background = currentPlayer.background;
      bb.style.background = currentPlayer.background;
      cc.style.background = currentPlayer.background;
      roundWon = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9kb21NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVJbml0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2lmQ2VsbEVtcHR5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllclN3aXRjaC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3VwZGF0ZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQzs7QUFFbEMsc0RBQUksRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y2QztBQUNDOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBLEVBQUUsdUVBQXlDLFlBQVksb0JBQW9CO0FBQzNFOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNrQztBQUNlO0FBQ047QUFDakI7QUFDeUI7QUFDZDs7QUFFdkM7QUFDQSxFQUFFLHFFQUF1QztBQUN6QyxJQUFJLGtEQUFhLENBQUMsdURBQXlCLEVBQUUsdURBQXlCLEVBQUUsK0NBQUssRUFBRSx1REFBeUIsRUFBRSx1REFBeUI7QUFDbkks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Q1osSUFBSSw2REFBc0IsMkJBQTJCLHVEQUF5QjtBQUM5RTtBQUNBO0FBQ0EsRUFBRSx1REFBUTtBQUNWOztBQUVBLGlFQUFlLFlBQVksRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEa0I7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmtCOztBQUV0QztBQUNBLGdDQUFnQywrQ0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmU7O0FBRTlDO0FBQ0Esb0JBQW9CLDJEQUFZO0FBQ2hDLG9CQUFvQiwyREFBWTtBQUNoQyx3QkFBd0IsMkRBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0QsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRTs7Ozs7O1VDcENoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lIGZyb20gJy4vbW9kdWxlcy9nYW1lJztcblxuZ2FtZSgpOyIsImNvbnN0IG5hbWVQbGF5ZXJPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW9uZScpO1xuY29uc3QgbmFtZVBsYXllclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHdvJyk7XG5jb25zdCBhbGxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItaXRlbScpO1xuY29uc3QgcGxheWVyVHVybkluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHVybicpO1xuY29uc3Qgcm91bmRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tY291bnRlcicpO1xuY29uc3QgcGxheWVyT25lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJPbmUnKTtcbmNvbnN0IHBsYXllclR3b0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyVHdvJyk7XG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG5jb25zdCBpbml0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0R2FtZUJ1dHRvbicpO1xuY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRCdXR0b24nKTtcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKTtcblxuZXhwb3J0IHtcbiAgYWxsSWNvbnMsXG4gIG5hbWVQbGF5ZXJPbmUsXG4gIG5hbWVQbGF5ZXJUd28sXG4gIHBsYXllclR1cm5JbmRpY2F0b3IsXG4gIHJvdW5kQ291bnRlcixcbiAgcGxheWVyT25lSWNvbixcbiAgcGxheWVyVHdvSWNvbixcbiAgY2VsbHMsXG4gIGluaXRCdXR0b24sXG4gIHJlc2V0QnV0dG9uLFxuICBmb3JtQ29udGFpbmVyLFxufTsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCB7IHJldHJpZXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuY29uc3QgcmVtb3ZlRm9ybSA9IChjb250YWluZXIpID0+IHtcbiAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5jb25zdCBkaXNwbGF5SWNvbiA9IChpY29uLCBjb250YWluZXIpID0+IHtcbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFbGVtZW50LnNyYyA9IGljb247XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbn07XG5jb25zdCBwYWludEJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG59O1xuY29uc3QgZGlzYWJsZUJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMjU2LCAyNTYsIDI1NiwgMC41KSc7XG59O1xuY29uc3QgaW5pdGlhbEJhY2tncm91bmQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xufTtcbmNvbnN0IGRpc3BsYXlSb3VuZHMgPSAoZWxlbWVudCwgcm91bmRDb3VudGVyLCBvcHBvc2l0ZVBsYXllcikgPT4ge1xuICBpZiAocm91bmRDb3VudGVyLmlubmVySFRNTCA9PT0gJ05vIFR1cm5zIFlldCcpIHtcbiAgICByb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMSc7XG4gIH0gZWxzZSB7XG4gICAgcm91bmRDb3VudGVyLmlubmVySFRNTCA9IGBUdXJuICR7ZWxlbWVudH0uYDtcbiAgfVxuICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCBpcyAke29wcG9zaXRlUGxheWVyLm5hbWV9J3MgdHVybmA7XG59O1xuXG5leHBvcnQge1xuICBpbml0aWFsQmFja2dyb3VuZCxcbiAgcmVtb3ZlRm9ybSxcbiAgZGlzcGxheVJvdW5kcyxcbiAgZGlzcGxheUljb24sXG4gIHBhaW50QmFja2dyb3VuZCxcbiAgZGlzYWJsZUJhY2tncm91bmQsXG59O1xuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgcGxheWVySWNvbnMsIHsgSWNvbnMgfSBmcm9tICcuL3BsYXllckljb25zJztcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IHJlc2V0IGZyb20gJy4vcmVzZXQnO1xuaW1wb3J0ICogYXMgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcbmltcG9ydCBhZnRlckdhbWVJbml0IGZyb20gJy4vZ2FtZUluaXQnO1xuXG5jb25zdCBnYW1lID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5pbml0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFmdGVyR2FtZUluaXQoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZSwgZG9tRWxlbWVudHMubmFtZVBsYXllclR3bywgSWNvbnMsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24sIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICB9KTtcbiAgZG9tRWxlbWVudHMucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXQoZG9tRWxlbWVudHMuZm9ybUNvbnRhaW5lcik7XG4gIH0pO1xuICBkb21FbGVtZW50cy5hbGxJY29ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHBsYXllckljb25zKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9KTtcbiAgZ2FtZWJvYXJkKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0ICogYXMgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgcmV0cmlldmVJdGVtLCBzYXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCB7IEljb25zIH0gZnJvbSAnLi9wbGF5ZXJJY29ucyc7XG5cbmNvbnN0IGdhbWVJbml0ID0gKG5hbWVQbGF5ZXJPbmUsIG5hbWVQbGF5ZXJUd28sIEljb25zKSA9PiB7XG4gIGlmIChuYW1lUGxheWVyT25lLnZhbHVlID09PSAnJyB8fCBuYW1lUGxheWVyVHdvLnZhbHVlID09PSAnJykge1xuICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBhZGQgYm90aCBwbGF5ZXJzJyBuYW1lcyB0byBjb250aW51ZS5cIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChJY29ucy5sZW5ndGggPCAyKSB7XG4gICAgd2luZG93LmFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgY2hhcmFjdGVyIGZvciBib3RoIHBsYXllcnMgdG8gY29udGludWUuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChuYW1lUGxheWVyT25lLnZhbHVlICE9PSAnJyAmJiBuYW1lUGxheWVyVHdvLnZhbHVlICE9PSAnJyAmJiBJY29ucy5sZW5ndGggPT09IDIpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBwbGF5ZXIobmFtZVBsYXllck9uZS52YWx1ZSwgJ1gnLCAxLCBJY29uc1swXSwgJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44Jyk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gcGxheWVyKG5hbWVQbGF5ZXJUd28udmFsdWUsICdPJywgMiwgSWNvbnNbMV0sICdyZ2JhKDI0MSwgMTk2LCAxNSwgMC44Jyk7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcbiAgICBjb25zdCBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcbiAgICBjb25zdCBjb3VudCA9IDE7XG4gICAgc2F2ZUl0ZW0oJ3BsYXllck9uZScsIHBsYXllck9uZSk7XG4gICAgc2F2ZUl0ZW0oJ3BsYXllclR3bycsIHBsYXllclR3byk7XG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XG4gICAgc2F2ZUl0ZW0oJ2NvdW50JywgY291bnQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgYWZ0ZXJHYW1lSW5pdCA9IChuYW1lUGxheWVyT25lLCBuYW1lUGxheWVyVHdvLCBJY29ucywgcGxheWVyT25lSWNvbiwgcGxheWVyVHdvSWNvbikgPT4ge1xuICBpZiAoZ2FtZUluaXQobmFtZVBsYXllck9uZSwgbmFtZVBsYXllclR3bywgSWNvbnMsIGRvbU1hbmlwdWxhdGlvbikpIHtcbiAgICBnYW1lSW5pdChuYW1lUGxheWVyT25lLCBuYW1lUGxheWVyVHdvLCBJY29ucywgZG9tTWFuaXB1bGF0aW9uKTtcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24oSWNvbnNbMF0sIHBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5wYWludEJhY2tncm91bmQoJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44KScsIHBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihJY29uc1sxXSwgcGxheWVyVHdvSWNvbik7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0J3MgJHtjdXJyZW50UGxheWVyLm5hbWV9J3MgdHVybmA7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5yZW1vdmVGb3JtKGZvcm1Db250YWluZXIpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgYWZ0ZXJHYW1lSW5pdDtcbmV4cG9ydCB7IGdhbWVJbml0IH07IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgcGxheWVyU3dpdGNoIGZyb20gJy4vcGxheWVyU3dpdGNoJztcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL2lmQ2VsbEVtcHR5JztcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xuICAgICAgaWZDZWxsRW1wdHkoY3VycmVudFBsYXllciwgZXZlbnQsIHBsYXllclN3aXRjaCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkOyIsImNvbnN0IGlmQ2VsbEVtcHR5ID0gKGN1cnJlbnRQbGF5ZXIsIGV2ZW50LCBmdW4pID0+IHtcbiAgY29uc3QgaW1nRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFLnNyYyA9IGN1cnJlbnRQbGF5ZXIuaW1nO1xuICBldmVudC50YXJnZXQuZGF0YXNldC5kYXRhc3ltYm9sID0gY3VycmVudFBsYXllci5zeW1ib2w7XG4gIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChpbWdFKTtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3ByZXZlbnQtY2xpY2tzJyk7XG4gIGZ1bigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaWZDZWxsRW1wdHk7IiwiY29uc3Qgc2F2ZUl0ZW0gPSAoc3RyaW5nLCBvYmplY3QpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RyaW5nLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbn07XG5cbmNvbnN0IHJldHJpZXZlSXRlbSA9IChzdHJpbmcpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RyaW5nKSk7XG5cbmV4cG9ydCB7IHNhdmVJdGVtLCByZXRyaWV2ZUl0ZW0gfTsiLCJjb25zdCBwbGF5ZXIgPSAobmFtZSwgc3ltYm9sLCBwbGF5ZXJOdW1iZXIsIGltZywgYmFja2dyb3VuZCkgPT4gKHtcbiAgbmFtZSxcbiAgc3ltYm9sLFxuICBwbGF5ZXJOdW1iZXIsXG4gIGltZyxcbiAgYmFja2dyb3VuZCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7IiwibGV0IG51bWJlck9mUGxheWVyID0gMTtcbmNvbnN0IEljb25zID0gW107XG5cbmNvbnN0IGNob29zZVBsYXllckljb24gPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBjaG9zZW5JY29uID0gZWxlbWVudDtcbiAgaWYgKG51bWJlck9mUGxheWVyID09PSAxKSB7XG4gICAgaWYgKEljb25zWzBdKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzJykuaWQgPSAnJztcbiAgICAgIEljb25zWzBdID0gY2hvc2VuSWNvbi5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIEljb25zLnB1c2goY2hvc2VuSWNvbi5zcmMpO1xuICAgIH1cbiAgICBjaG9zZW5JY29uLmlkID0gJ2F2b2lkLWNsaWNrcyc7XG4gICAgbnVtYmVyT2ZQbGF5ZXIgPSAyO1xuICB9IGVsc2Uge1xuICAgIGlmIChJY29uc1sxXSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcy1wMicpLmlkID0gJyc7XG4gICAgICBJY29uc1sxXSA9IGNob3Nlbkljb24uc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICBJY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcbiAgICB9XG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MtcDInO1xuICAgIG51bWJlck9mUGxheWVyID0gMTtcbiAgfVxuICByZXR1cm4geyBJY29ucyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hvb3NlUGxheWVySWNvbjtcbmV4cG9ydCB7IEljb25zIH07IiwiaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcbmltcG9ydCByZXNldCBmcm9tICcuL3Jlc2V0JztcbmltcG9ydCB3aW5uaW5nVmFsaWRhdGlvbiBmcm9tICcuL3dpbm5pbmdWYWxpZGF0aW9ucyc7XG5pbXBvcnQgdXBkYXRlQm9hcmRBcnJheSBmcm9tICcuL3VwZGF0ZUJvYXJkJztcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IHsgcmV0cmlldmVJdGVtLCBzYXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuY29uc3QgcGxheWVyU3dpdGNoID0gKCkgPT4ge1xuICBsZXQgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xuICBsZXQgb3Bwb3NpdGVQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ29wcG9zaXRlUGxheWVyJyk7XG4gIGNvbnN0IHBsYXllck9uZSA9IHJldHJpZXZlSXRlbSgncGxheWVyT25lJyk7XG4gIGNvbnN0IHBsYXllclR3byA9IHJldHJpZXZlSXRlbSgncGxheWVyVHdvJyk7XG4gIGxldCBjb3VudCA9IHJldHJpZXZlSXRlbSgnY291bnQnKTtcbiAgc3R5bGVzLmRpc3BsYXlSb3VuZHMoY291bnQgKyAxLCBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIsIG9wcG9zaXRlUGxheWVyKTtcbiAgaWYgKHdpbm5pbmdWYWxpZGF0aW9uKHVwZGF0ZUJvYXJkQXJyYXkoKSwgY3VycmVudFBsYXllci5zeW1ib2wpID09PSBmYWxzZSAmJiBjb3VudCA9PT0gOSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVNYXRjaCA9IGNvbmZpcm0oXCJJdCdzIGEgZHJhdyEgV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9cIik7XG4gICAgICBpZiAocmVNYXRjaCkge1xuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnSG93IHNhZC4nKTtcbiAgICAgIH1cbiAgICB9LCA0NTApO1xuICB9IGVsc2UgaWYgKHdpbm5pbmdWYWxpZGF0aW9uKHVwZGF0ZUJvYXJkQXJyYXkoKSwgY3VycmVudFBsYXllci5zeW1ib2wpKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCByZW1hdGNoID0gY29uZmlybShcbiAgICAgICAgYCR7Y3VycmVudFBsYXllci5uYW1lfSBoYXMgd29uLiBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP2AsXG4gICAgICApO1xuICAgICAgaWYgKHJlbWF0Y2ggPT09IHRydWUpIHtcbiAgICAgICAgcmVzZXQoZG9tRWxlbWVudHMuY2VsbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0xvc2VyLicpO1xuICAgICAgfVxuICAgIH0sIDQ1MCk7XG4gIH0gZWxzZSBpZiAob3Bwb3NpdGVQbGF5ZXIucGxheWVyTnVtYmVyID09PSAxKSB7XG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcbiAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcbiAgICBzYXZlSXRlbSgnY3VycmVudFBsYXllcicsIGN1cnJlbnRQbGF5ZXIpO1xuICAgIHNhdmVJdGVtKCdvcHBvc2l0ZVBsYXllcicsIG9wcG9zaXRlUGxheWVyKTtcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllclR3bztcbiAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllck9uZTtcbiAgICBzYXZlSXRlbSgnY3VycmVudFBsYXllcicsIGN1cnJlbnRQbGF5ZXIpO1xuICAgIHNhdmVJdGVtKCdvcHBvc2l0ZVBsYXllcicsIG9wcG9zaXRlUGxheWVyKTtcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gIH1cbiAgY291bnQrKztcbiAgc2F2ZUl0ZW0oJ2NvdW50JywgY291bnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyU3dpdGNoOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuXG5jb25zdCByZXNldCA9IChmb3JtQ29udGFpbmVyKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7IiwiaW1wb3J0IHsgY2VsbHMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxuY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcbiAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oY2VsbHMpO1xuICBjb25zdCByZW5kZXJCb2FyZCA9IGNlbGxzQXJyYXkubWFwKFxuICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcbiAgKTtcbiAgcmV0dXJuIHJlbmRlckJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQm9hcmRBcnJheTsiLCJpbXBvcnQgeyByZXRyaWV2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IHdpbm5pbmdWYWxpZGF0aW9uID0gKGFycmF5LCBzeW1ib2wpID0+IHtcbiAgY29uc3QgcGxheWVyT25lID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJPbmUnKTtcbiAgY29uc3QgcGxheWVyVHdvID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJUd28nKTtcbiAgY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xuICBsZXQgcm91bmRXb24gPSBmYWxzZTtcbiAgY29uc3Qgd2lubmluZ0NvbmRpdGlvbnMgPSBbXG4gICAgWzAsIDEsIDJdLFxuICAgIFszLCA0LCA1XSxcbiAgICBbNiwgNywgOF0sXG4gICAgWzAsIDMsIDZdLFxuICAgIFsxLCA0LCA3XSxcbiAgICBbMiwgNSwgOF0sXG4gICAgWzAsIDQsIDhdLFxuICAgIFsyLCA0LCA2XSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpICs9IDEpIHtcbiAgICBjb25zdCB3aW5Db25kaXRpb24gPSB3aW5uaW5nQ29uZGl0aW9uc1tpXTtcbiAgICBjb25zdCBhID0gYXJyYXlbd2luQ29uZGl0aW9uWzBdXTtcbiAgICBjb25zdCBiID0gYXJyYXlbd2luQ29uZGl0aW9uWzFdXTtcbiAgICBjb25zdCBjID0gYXJyYXlbd2luQ29uZGl0aW9uWzJdXTtcbiAgICBjb25zdCBhYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMF19YCk7XG4gICAgY29uc3QgYmIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzFdfWApO1xuICAgIGNvbnN0IGNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblsyXX1gKTtcbiAgICBpZiAoYSA9PT0gc3ltYm9sICYmIGIgPT09IHN5bWJvbCAmJiBjID09PSBzeW1ib2wpIHtcbiAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBjdXJyZW50UGxheWVyLmJhY2tncm91bmQ7XG4gICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gY3VycmVudFBsYXllci5iYWNrZ3JvdW5kO1xuICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZDtcbiAgICAgIHJvdW5kV29uID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJvdW5kV29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2lubmluZ1ZhbGlkYXRpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbWFpbi5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
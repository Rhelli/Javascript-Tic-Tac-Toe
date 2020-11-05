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
const displayRounds = (element, oppositePlayer) => {
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.roundCounter.innerHTML === 'No Turns Yet') {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.roundCounter.innerHTML = 'Turn 1';
  } else {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.roundCounter.innerHTML = `Turn ${element}.`;
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
  _domManipulation__WEBPACK_IMPORTED_MODULE_0__.displayRounds(count + 1, oppositePlayer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9kb21NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVJbml0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2lmQ2VsbEVtcHR5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllclN3aXRjaC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3VwZGF0ZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQzs7QUFFbEMsc0RBQUksRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y2QztBQUNDOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnRUFBa0M7QUFDeEMsSUFBSSxnRUFBa0M7QUFDdEMsR0FBRztBQUNILElBQUksZ0VBQWtDLFdBQVcsUUFBUTtBQUN6RDtBQUNBLEVBQUUsdUVBQXlDLFlBQVksb0JBQW9CO0FBQzNFOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNrQztBQUNlO0FBQ047QUFDakI7QUFDeUI7QUFDZDs7QUFFdkM7QUFDQSxFQUFFLHFFQUF1QztBQUN6QyxJQUFJLGtEQUFhLENBQUMsdURBQXlCLEVBQUUsdURBQXlCLEVBQUUs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cm9tICcuL21vZHVsZXMvZ2FtZSc7XG5cbmdhbWUoKTsiLCJjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcclxuY29uc3QgbmFtZVBsYXllclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHdvJyk7XHJcbmNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1pdGVtJyk7XHJcbmNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcclxuY29uc3Qgcm91bmRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tY291bnRlcicpO1xyXG5jb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xyXG5jb25zdCBwbGF5ZXJUd29JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllclR3bycpO1xyXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbmNvbnN0IGluaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRHYW1lQnV0dG9uJyk7XHJcbmNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0QnV0dG9uJyk7XHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgYWxsSWNvbnMsXHJcbiAgbmFtZVBsYXllck9uZSxcclxuICBuYW1lUGxheWVyVHdvLFxyXG4gIHBsYXllclR1cm5JbmRpY2F0b3IsXHJcbiAgcm91bmRDb3VudGVyLFxyXG4gIHBsYXllck9uZUljb24sXHJcbiAgcGxheWVyVHdvSWNvbixcclxuICBjZWxscyxcclxuICBpbml0QnV0dG9uLFxyXG4gIHJlc2V0QnV0dG9uLFxyXG4gIGZvcm1Db250YWluZXIsXHJcbn07IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuXHJcbmNvbnN0IHJlbW92ZUZvcm0gPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5SWNvbiA9IChpY29uLCBjb250YWluZXIpID0+IHtcclxuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nRWxlbWVudC5zcmMgPSBpY29uO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcclxufTtcclxuY29uc3QgcGFpbnRCYWNrZ3JvdW5kID0gKGNvbG9yLCBlbGVtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XHJcbn07XHJcbmNvbnN0IGRpc2FibGVCYWNrZ3JvdW5kID0gKGNvbG9yLCBlbGVtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMjU2LCAyNTYsIDI1NiwgMC41KSc7XHJcbn07XHJcbmNvbnN0IGluaXRpYWxCYWNrZ3JvdW5kID0gKGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xyXG59O1xyXG5jb25zdCBkaXNwbGF5Um91bmRzID0gKGVsZW1lbnQsIG9wcG9zaXRlUGxheWVyKSA9PiB7XHJcbiAgaWYgKGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPT09ICdObyBUdXJucyBZZXQnKSB7XHJcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSBgVHVybiAke2VsZW1lbnR9LmA7XHJcbiAgfVxyXG4gIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0IGlzICR7b3Bwb3NpdGVQbGF5ZXIubmFtZX0ncyB0dXJuYDtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaW5pdGlhbEJhY2tncm91bmQsXHJcbiAgcmVtb3ZlRm9ybSxcclxuICBkaXNwbGF5Um91bmRzLFxyXG4gIGRpc3BsYXlJY29uLFxyXG4gIHBhaW50QmFja2dyb3VuZCxcclxuICBkaXNhYmxlQmFja2dyb3VuZCxcclxufTtcclxuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCBwbGF5ZXJJY29ucywgeyBJY29ucyB9IGZyb20gJy4vcGxheWVySWNvbnMnO1xyXG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHJlc2V0IGZyb20gJy4vcmVzZXQnO1xyXG5pbXBvcnQgKiBhcyBkb21NYW5pcHVsYXRpb24gZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xyXG5pbXBvcnQgYWZ0ZXJHYW1lSW5pdCBmcm9tICcuL2dhbWVJbml0JztcclxuXHJcbmNvbnN0IGdhbWUgPSAoKSA9PiB7XHJcbiAgZG9tRWxlbWVudHMuaW5pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGFmdGVyR2FtZUluaXQoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZSwgZG9tRWxlbWVudHMubmFtZVBsYXllclR3bywgSWNvbnMsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24sIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xyXG4gIH0pO1xyXG4gIGRvbUVsZW1lbnRzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVzZXQoZG9tRWxlbWVudHMuZm9ybUNvbnRhaW5lcik7XHJcbiAgfSk7XHJcbiAgZG9tRWxlbWVudHMuYWxsSWNvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwbGF5ZXJJY29ucyhlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGdhbWVib2FyZCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0ICogYXMgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcclxuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSwgc2F2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcbmltcG9ydCB7IEljb25zIH0gZnJvbSAnLi9wbGF5ZXJJY29ucyc7XHJcblxyXG5jb25zdCBnYW1lSW5pdCA9IChuYW1lUGxheWVyT25lLCBuYW1lUGxheWVyVHdvLCBJY29ucykgPT4ge1xyXG4gIGlmIChuYW1lUGxheWVyT25lLnZhbHVlID09PSAnJyB8fCBuYW1lUGxheWVyVHdvLnZhbHVlID09PSAnJykge1xyXG4gICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGFkZCBib3RoIHBsYXllcnMnIG5hbWVzIHRvIGNvbnRpbnVlLlwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKEljb25zLmxlbmd0aCA8IDIpIHtcclxuICAgIHdpbmRvdy5hbGVydCgnUGxlYXNlIHNlbGVjdCBhIGNoYXJhY3RlciBmb3IgYm90aCBwbGF5ZXJzIHRvIGNvbnRpbnVlLicpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAobmFtZVBsYXllck9uZS52YWx1ZSAhPT0gJycgJiYgbmFtZVBsYXllclR3by52YWx1ZSAhPT0gJycgJiYgSWNvbnMubGVuZ3RoID09PSAyKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBwbGF5ZXIobmFtZVBsYXllck9uZS52YWx1ZSwgJ1gnLCAxLCBJY29uc1swXSwgJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44Jyk7XHJcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBwbGF5ZXIobmFtZVBsYXllclR3by52YWx1ZSwgJ08nLCAyLCBJY29uc1sxXSwgJ3JnYmEoMjQxLCAxOTYsIDE1LCAwLjgnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbiAgICBjb25zdCBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuICAgIGNvbnN0IGNvdW50ID0gMTtcclxuICAgIHNhdmVJdGVtKCdwbGF5ZXJPbmUnLCBwbGF5ZXJPbmUpO1xyXG4gICAgc2F2ZUl0ZW0oJ3BsYXllclR3bycsIHBsYXllclR3byk7XHJcbiAgICBzYXZlSXRlbSgnY3VycmVudFBsYXllcicsIGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgc2F2ZUl0ZW0oJ29wcG9zaXRlUGxheWVyJywgb3Bwb3NpdGVQbGF5ZXIpO1xyXG4gICAgc2F2ZUl0ZW0oJ2NvdW50JywgY291bnQpO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IGFmdGVyR2FtZUluaXQgPSAobmFtZVBsYXllck9uZSwgbmFtZVBsYXllclR3bywgSWNvbnMsIHBsYXllck9uZUljb24sIHBsYXllclR3b0ljb24pID0+IHtcclxuICBpZiAoZ2FtZUluaXQobmFtZVBsYXllck9uZSwgbmFtZVBsYXllclR3bywgSWNvbnMsIGRvbU1hbmlwdWxhdGlvbikpIHtcclxuICAgIGdhbWVJbml0KG5hbWVQbGF5ZXJPbmUsIG5hbWVQbGF5ZXJUd28sIEljb25zLCBkb21NYW5pcHVsYXRpb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc3BsYXlJY29uKEljb25zWzBdLCBwbGF5ZXJPbmVJY29uKTtcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5wYWludEJhY2tncm91bmQoJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44KScsIHBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc3BsYXlJY29uKEljb25zWzFdLCBwbGF5ZXJUd29JY29uKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInKTtcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0J3MgJHtjdXJyZW50UGxheWVyLm5hbWV9J3MgdHVybmA7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJyk7XHJcbiAgICBkb21NYW5pcHVsYXRpb24ucmVtb3ZlRm9ybShmb3JtQ29udGFpbmVyKTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGFmdGVyR2FtZUluaXQ7XHJcbmV4cG9ydCB7IGdhbWVJbml0IH07IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuaW1wb3J0IHBsYXllclN3aXRjaCBmcm9tICcuL3BsYXllclN3aXRjaCc7XHJcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL2lmQ2VsbEVtcHR5JztcclxuXHJcblxyXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgZG9tRWxlbWVudHMuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50UGxheWVyID0gcmV0cmlldmVJdGVtKCdjdXJyZW50UGxheWVyJyk7XHJcbiAgICAgIGlmQ2VsbEVtcHR5KGN1cnJlbnRQbGF5ZXIsIGV2ZW50LCBwbGF5ZXJTd2l0Y2gpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7IiwiY29uc3QgaWZDZWxsRW1wdHkgPSAoY3VycmVudFBsYXllciwgZXZlbnQsIGZ1bikgPT4ge1xyXG4gIGNvbnN0IGltZ0UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWdFLnNyYyA9IGN1cnJlbnRQbGF5ZXIuaW1nO1xyXG4gIGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGFzeW1ib2wgPSBjdXJyZW50UGxheWVyLnN5bWJvbDtcclxuICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQoaW1nRSk7XHJcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3ByZXZlbnQtY2xpY2tzJyk7XHJcbiAgZnVuKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpZkNlbGxFbXB0eTsiLCJjb25zdCBzYXZlSXRlbSA9IChzdHJpbmcsIG9iamVjdCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdHJpbmcsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xufTtcblxuY29uc3QgcmV0cmlldmVJdGVtID0gKHN0cmluZykgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdHJpbmcpKTtcblxuZXhwb3J0IHsgc2F2ZUl0ZW0sIHJldHJpZXZlSXRlbSB9OyIsImNvbnN0IHBsYXllciA9IChuYW1lLCBzeW1ib2wsIHBsYXllck51bWJlciwgaW1nLCBiYWNrZ3JvdW5kKSA9PiAoe1xyXG4gIG5hbWUsXHJcbiAgc3ltYm9sLFxyXG4gIHBsYXllck51bWJlcixcclxuICBpbWcsXHJcbiAgYmFja2dyb3VuZCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7IiwibGV0IG51bWJlck9mUGxheWVyID0gMTtcclxuY29uc3QgSWNvbnMgPSBbXTtcclxuXHJcbmNvbnN0IGNob29zZVBsYXllckljb24gPSAoZWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IGNob3Nlbkljb24gPSBlbGVtZW50O1xyXG4gIGlmIChudW1iZXJPZlBsYXllciA9PT0gMSkge1xyXG4gICAgaWYgKEljb25zWzBdKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MnKS5pZCA9ICcnO1xyXG4gICAgICBJY29uc1swXSA9IGNob3Nlbkljb24uc3JjO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgSWNvbnMucHVzaChjaG9zZW5JY29uLnNyYyk7XHJcbiAgICB9XHJcbiAgICBjaG9zZW5JY29uLmlkID0gJ2F2b2lkLWNsaWNrcyc7XHJcbiAgICBudW1iZXJPZlBsYXllciA9IDI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChJY29uc1sxXSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzLXAyJykuaWQgPSAnJztcclxuICAgICAgSWNvbnNbMV0gPSBjaG9zZW5JY29uLnNyYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEljb25zLnB1c2goY2hvc2VuSWNvbi5zcmMpO1xyXG4gICAgfVxyXG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MtcDInO1xyXG4gICAgbnVtYmVyT2ZQbGF5ZXIgPSAxO1xyXG4gIH1cclxuICByZXR1cm4geyBJY29ucyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hvb3NlUGxheWVySWNvbjtcclxuZXhwb3J0IHsgSWNvbnMgfTsiLCJpbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xyXG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9yZXNldCc7XHJcbmltcG9ydCB3aW5uaW5nVmFsaWRhdGlvbiBmcm9tICcuL3dpbm5pbmdWYWxpZGF0aW9ucyc7XHJcbmltcG9ydCB1cGRhdGVCb2FyZEFycmF5IGZyb20gJy4vdXBkYXRlQm9hcmQnO1xyXG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtLCBzYXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuXHJcbmNvbnN0IHBsYXllclN3aXRjaCA9ICgpID0+IHtcclxuICBsZXQgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xyXG4gIGxldCBvcHBvc2l0ZVBsYXllciA9IHJldHJpZXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInKTtcclxuICBjb25zdCBwbGF5ZXJPbmUgPSByZXRyaWV2ZUl0ZW0oJ3BsYXllck9uZScpO1xyXG4gIGNvbnN0IHBsYXllclR3byA9IHJldHJpZXZlSXRlbSgncGxheWVyVHdvJyk7XHJcbiAgbGV0IGNvdW50ID0gcmV0cmlldmVJdGVtKCdjb3VudCcpO1xyXG4gIHN0eWxlcy5kaXNwbGF5Um91bmRzKGNvdW50ICsgMSwgb3Bwb3NpdGVQbGF5ZXIpO1xyXG4gIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuc3ltYm9sKSA9PT0gZmFsc2UgJiYgY291bnQgPT09IDkpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCByZU1hdGNoID0gY29uZmlybShcIkl0J3MgYSBkcmF3ISBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP1wiKTtcclxuICAgICAgaWYgKHJlTWF0Y2gpIHtcclxuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0hvdyBzYWQuJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDQ1MCk7XHJcbiAgfSBlbHNlIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuc3ltYm9sKSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlbWF0Y2ggPSBjb25maXJtKFxyXG4gICAgICAgIGAke2N1cnJlbnRQbGF5ZXIubmFtZX0gaGFzIHdvbi4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9gLFxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVtYXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnTG9zZXIuJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDQ1MCk7XHJcbiAgfSBlbHNlIGlmIChvcHBvc2l0ZVBsYXllci5wbGF5ZXJOdW1iZXIgPT09IDEpIHtcclxuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcclxuICAgIG9wcG9zaXRlUGxheWVyID0gcGxheWVyVHdvO1xyXG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcclxuICAgIHNhdmVJdGVtKCdvcHBvc2l0ZVBsYXllcicsIG9wcG9zaXRlUGxheWVyKTtcclxuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XHJcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHdvO1xyXG4gICAgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbiAgICBzYXZlSXRlbSgnY3VycmVudFBsYXllcicsIGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgc2F2ZUl0ZW0oJ29wcG9zaXRlUGxheWVyJywgb3Bwb3NpdGVQbGF5ZXIpO1xyXG4gICAgc3R5bGVzLnBhaW50QmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xyXG4gIH1cclxuICBjb3VudCsrO1xyXG4gIHNhdmVJdGVtKCdjb3VudCcsIGNvdW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllclN3aXRjaDsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuXHJcbmNvbnN0IHJlc2V0ID0gKGZvcm1Db250YWluZXIpID0+IHtcclxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNldDsiLCJpbXBvcnQgeyBjZWxscyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5cclxuY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcclxuICBjb25zdCBjZWxsc0FycmF5ID0gQXJyYXkuZnJvbShjZWxscyk7XHJcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSBjZWxsc0FycmF5Lm1hcChcclxuICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcclxuICApO1xyXG4gIHJldHVybiByZW5kZXJCb2FyZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUJvYXJkQXJyYXk7IiwiaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3Qgd2lubmluZ1ZhbGlkYXRpb24gPSAoYXJyYXksIHN5bWJvbCkgPT4ge1xyXG4gIGNvbnN0IHBsYXllck9uZSA9IHJldHJpZXZlSXRlbSgncGxheWVyT25lJyk7XHJcbiAgY29uc3QgcGxheWVyVHdvID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJUd28nKTtcclxuICBjb25zdCBjdXJyZW50UGxheWVyID0gcmV0cmlldmVJdGVtKCdjdXJyZW50UGxheWVyJyk7XHJcbiAgbGV0IHJvdW5kV29uID0gZmFsc2U7XHJcbiAgY29uc3Qgd2lubmluZ0NvbmRpdGlvbnMgPSBbXHJcbiAgICBbMCwgMSwgMl0sXHJcbiAgICBbMywgNCwgNV0sXHJcbiAgICBbNiwgNywgOF0sXHJcbiAgICBbMCwgMywgNl0sXHJcbiAgICBbMSwgNCwgN10sXHJcbiAgICBbMiwgNSwgOF0sXHJcbiAgICBbMCwgNCwgOF0sXHJcbiAgICBbMiwgNCwgNl0sXHJcbiAgXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNzsgaSArPSAxKSB7XHJcbiAgICBjb25zdCB3aW5Db25kaXRpb24gPSB3aW5uaW5nQ29uZGl0aW9uc1tpXTtcclxuICAgIGNvbnN0IGEgPSBhcnJheVt3aW5Db25kaXRpb25bMF1dO1xyXG4gICAgY29uc3QgYiA9IGFycmF5W3dpbkNvbmRpdGlvblsxXV07XHJcbiAgICBjb25zdCBjID0gYXJyYXlbd2luQ29uZGl0aW9uWzJdXTtcclxuICAgIGNvbnN0IGFhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblswXX1gKTtcclxuICAgIGNvbnN0IGJiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblsxXX1gKTtcclxuICAgIGNvbnN0IGNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblsyXX1gKTtcclxuICAgIGlmIChhID09PSBzeW1ib2wgJiYgYiA9PT0gc3ltYm9sICYmIGMgPT09IHN5bWJvbCkge1xyXG4gICAgICBhYS5zdHlsZS5iYWNrZ3JvdW5kID0gY3VycmVudFBsYXllci5iYWNrZ3JvdW5kO1xyXG4gICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gY3VycmVudFBsYXllci5iYWNrZ3JvdW5kO1xyXG4gICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gY3VycmVudFBsYXllci5iYWNrZ3JvdW5kO1xyXG4gICAgICByb3VuZFdvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByb3VuZFdvbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpbm5pbmdWYWxpZGF0aW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
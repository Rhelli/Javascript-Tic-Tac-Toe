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
/* harmony import */ var _ifCellEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ifCellEmpty */ "./src/js/modules/ifCellEmpty.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");




const clickCell = (event) => {
  const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.retrieveItem)('currentPlayer');
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value === '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const { symbol } = currentPlayer;
    const { img } = currentPlayer;
    (0,_ifCellEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(event, symbol, img);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickCell);


/***/ }),

/***/ "./src/js/modules/domElements.js":
/*!***************************************!*\
  !*** ./src/js/modules/domElements.js ***!
  \***************************************/
/*! namespace exports */
/*! export allIcons [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cells [provided] [no usage info] [missing usage info prevents renaming] */
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
/* harmony export */   "resetButton": () => /* binding */ resetButton
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



/***/ }),

/***/ "./src/js/modules/domManipulation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/domManipulation.js ***!
  \*******************************************/
/*! namespace exports */
/*! export addForm [provided] [no usage info] [missing usage info prevents renaming] */
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
/* harmony export */   "addForm": () => /* binding */ addForm,
/* harmony export */   "initialBackground": () => /* binding */ initialBackground,
/* harmony export */   "removeForm": () => /* binding */ removeForm,
/* harmony export */   "displayRounds": () => /* binding */ displayRounds,
/* harmony export */   "displayIcon": () => /* binding */ displayIcon,
/* harmony export */   "paintBackground": () => /* binding */ paintBackground,
/* harmony export */   "disableBackground": () => /* binding */ disableBackground
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");



const formContainer = document.getElementById('form-container');
const removeForm = () => {
  formContainer.style.display = 'none';
};
const addForm = () => {
  formContainer.style.display = 'flex';
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
const displayRounds = (element) => {
  const oppositePlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.retrieveItem)('oppositePlayer');
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
/* harmony import */ var _gameInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameInit */ "./src/js/modules/gameInit.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset */ "./src/js/modules/reset.js");






const game = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_3__.initButton.addEventListener('click', _gameInit__WEBPACK_IMPORTED_MODULE_2__.default);
  _domElements__WEBPACK_IMPORTED_MODULE_3__.resetButton.addEventListener('click', _reset__WEBPACK_IMPORTED_MODULE_4__.default);
  _domElements__WEBPACK_IMPORTED_MODULE_3__.allIcons.forEach((element) => {
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
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _playerIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerIcons */ "./src/js/modules/playerIcons.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/js/modules/player.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");






const gameInit = () => {
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value === '' || _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value === '') {
    alert("Please add both players' names to continue.");
    return false;
  }
  if (_playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons.length < 2) {
    alert('Please select a character for both players to continue.');
    return false;
  }
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value !== '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value !== '' && _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons.length === 2) {
    const playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_3__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value, 'X', 1, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons[0], 'rgba(144, 164, 174, 0.8');
    const playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_3__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value, 'O', 2, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons[1], 'rgba(241, 196, 15, 0.8');
    const currentPlayer = playerOne;
    const oppositePlayer = playerTwo;
    const count = 1;
    if (!playerOne.img && !playerTwo.img) {
      alert('Please select a character for both players to continue.');
      return false;
    }

    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.displayIcon(playerOne.img, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.paintBackground(playerOne.background, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.displayIcon(playerTwo.img, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = `It's ${currentPlayer.name}'s turn`;
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.removeForm();
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveItem)('playerOne', playerOne);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveItem)('playerTwo', playerTwo);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveItem)('currentPlayer', currentPlayer);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveItem)('oppositePlayer', oppositePlayer);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveItem)('count', count);
  }
  return true;
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



const gameboard = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      (0,_clickCell__WEBPACK_IMPORTED_MODULE_1__.default)(event);
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
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _playerSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerSwitch */ "./src/js/modules/playerSwitch.js");


const ifCellEmpty = (event, symbol, img) => {
  const imgE = document.createElement('img');
  imgE.src = img;
  event.target.dataset.datasymbol = symbol;
  event.target.appendChild(imgE);
  event.target.classList.add('prevent-clicks');
  (0,_playerSwitch__WEBPACK_IMPORTED_MODULE_0__.default)();
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
  _domManipulation__WEBPACK_IMPORTED_MODULE_0__.displayRounds(count + 1);
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
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const reset = () => {
  window.localStorage.clear();
  window.location.reload();
  const formContainer = document.getElementById('form-container');
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
      roundWon = true;
      if (currentPlayer === playerOne) {
        aa.style.background = playerOne.background;
        bb.style.background = playerOne.background;
        cc.style.background = playerOne.background;
      } else {
        aa.style.background = playerTwo.background;
        bb.style.background = playerTwo.background;
        cc.style.background = playerTwo.background;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9wbGF5ZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyU3dpdGNoLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvdXBkYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3dpbm5pbmdWYWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQyxzREFBSSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeUM7QUFDTDtBQUNNOztBQUU5QztBQUNBLHdCQUF3QiwyREFBWTtBQUNwQyxNQUFNLDZEQUErQixXQUFXLDZEQUErQjtBQUMvRTtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcsU0FBUztBQUNwQixXQUFXLE1BQU07QUFDakIsSUFBSSxxREFBVztBQUNmO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q2QztBQUNDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyREFBWTtBQUNyQyxNQUFNLGdFQUFrQztBQUN4QyxJQUFJLGdFQUFrQztBQUN0QyxHQUFHO0FBQ0gsSUFBSSxnRUFBa0MsV0FBVyxRQUFRO0FBQ3pEO0FBQ0EsRUFBRSx1RUFBeUMsWUFBWSxvQkFBb0I7QUFDM0U7O0FBVUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDa0M7QUFDSTtBQUNOO0FBQ1c7QUFDakI7O0FBRTVCO0FBQ0EsRUFBRSxxRUFBdUMsVUFBVSw4Q0FBUTtBQUMzRCxFQUFFLHNFQUF3QyxVQUFVLDJDQUFLO0FBQ3pELEVBQUUsMERBQTRCO0FBQzlCO0FBQ0E7QUFDQSxNQUFNLHFEQUFXO0FBQ2pCLEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSxtREFBUztBQUNYOztBQUVBLGlFQUFlLElBQUksRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjBCO0FBQ1A7QUFDZTtBQUN2QjtBQUNZOztBQUUxQztBQUNBLE1BQU0sNkRBQStCLFdBQVcsNkRBQStCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQVk7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBK0IsV0FBVyw2REFBK0IsV0FBVyxzREFBWTtBQUN0RyxzQkFBc0IsZ0RBQU0sQ0FBQyw2REFBK0IsVUFBVSxrREFBUTtBQUM5RSxzQkFBc0IsZ0RBQU0sQ0FBQyw2REFBK0IsVUFBVSxrREFBUTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHlEQUEyQixnQkFBZ0IsdURBQXlCO0FBQ3hFLElBQUksNkRBQStCLHVCQUF1Qix1REFBeUI7QUFDbkYsSUFBSSx5REFBMkIsZ0JBQWdCLHVEQUF5QjtBQUN4RSxJQUFJLHVFQUF5QyxXQUFXLG1CQUFtQjtBQUMzRSxJQUFJLHdEQUEwQjtBQUM5QixJQUFJLHVEQUFRO0FBQ1osSUFBSSx1REFBUTtBQUNaLElBQUksdURBQVE7QUFDWixJQUFJLHVEQUFRO0FBQ1osSUFBSSx1REFBUTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENzQjtBQUNUOztBQUVwQztBQUNBLEVBQUUsdURBQXlCO0FBQzNCO0FBQ0EsTUFBTSxtREFBUztBQUNmLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGtCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFZO0FBQ2Q7O0FBRUEsaUVBQWUsV0FBVyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1gxQjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JZO0FBQ2hCO0FBQ3lCO0FBQ1I7QUFDQTtBQUNXOztBQUV4RDtBQUNBLHNCQUFzQiwyREFBWTtBQUNsQyx1QkFBdUIsMkRBQVk7QUFDbkMsb0JBQW9CLDJEQUFZO0FBQ2hDLG9CQUFvQiwyREFBWTtBQUNoQyxjQUFjLDJEQUFZO0FBQzFCLEVBQUUsMkRBQW9CO0FBQ3RCLE1BQU0sNERBQWlCLENBQUMscURBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQUssQ0FBQywrQ0FBaUI7QUFDL0IsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyxVQUFVLDREQUFpQixDQUFDLHFEQUFnQjtBQUMvQztBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTtBQUNBLFFBQVEsK0NBQUssQ0FBQywrQ0FBaUI7QUFDL0IsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILElBQUksK0RBQXdCLDJCQUEyQix1REFBeUI7QUFDaEY7QUFDQTtBQUNBLElBQUksdURBQVE7QUFDWixJQUFJLHVEQUFRO0FBQ1osSUFBSSw2REFBc0IsMkJBQTJCLHVEQUF5QjtBQUM5RSxHQUFHO0FBQ0gsSUFBSSwrREFBd0IsMkJBQTJCLHVEQUF5QjtBQUNoRjtBQUNBO0FBQ0EsSUFBSSx1REFBUTtBQUNaLElBQUksdURBQVE7QUFDWixJQUFJLDZEQUFzQiwyQkFBMkIsdURBQXlCO0FBQzlFO0FBQ0E7QUFDQSxFQUFFLHVEQUFRO0FBQ1Y7O0FBRUEsaUVBQWUsWUFBWSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRDNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQa0I7O0FBRXRDO0FBQ0EsZ0NBQWdDLCtDQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZTs7QUFFOUM7QUFDQSxvQkFBb0IsMkRBQVk7QUFDaEMsb0JBQW9CLDJEQUFZO0FBQ2hDLHdCQUF3QiwyREFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsZ0JBQWdCO0FBQzNELDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRTs7Ozs7O1VDM0NoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lIGZyb20gJy4vbW9kdWxlcy9nYW1lJztcblxuZ2FtZSgpOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IGlmQ2VsbEVtcHR5IGZyb20gJy4vaWZDZWxsRW1wdHknO1xuaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5jb25zdCBjbGlja0NlbGwgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgJiYgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydChcIlBsZWFzZSBFbnRlciBBbGwgUGxheWVyJ3MgTmFtZXMuXCIpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBFbnRlciBBbGwgUGxheWVyJ3MgTmFtZXNcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBzeW1ib2wgfSA9IGN1cnJlbnRQbGF5ZXI7XG4gICAgY29uc3QgeyBpbWcgfSA9IGN1cnJlbnRQbGF5ZXI7XG4gICAgaWZDZWxsRW1wdHkoZXZlbnQsIHN5bWJvbCwgaW1nKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpY2tDZWxsO1xuIiwiY29uc3QgbmFtZVBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItb25lJyk7XG5jb25zdCBuYW1lUGxheWVyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10d28nKTtcbmNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1pdGVtJyk7XG5jb25zdCBwbGF5ZXJUdXJuSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10dXJuJyk7XG5jb25zdCByb3VuZENvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybi1jb3VudGVyJyk7XG5jb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xuY29uc3QgcGxheWVyVHdvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJUd28nKTtcbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbmNvbnN0IGluaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRHYW1lQnV0dG9uJyk7XG5jb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldEJ1dHRvbicpO1xuXG5leHBvcnQge1xuICBhbGxJY29ucyxcbiAgbmFtZVBsYXllck9uZSxcbiAgbmFtZVBsYXllclR3byxcbiAgcGxheWVyVHVybkluZGljYXRvcixcbiAgcm91bmRDb3VudGVyLFxuICBwbGF5ZXJPbmVJY29uLFxuICBwbGF5ZXJUd29JY29uLFxuICBjZWxscyxcbiAgaW5pdEJ1dHRvbixcbiAgcmVzZXRCdXR0b24sXG59OyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJyk7XG5jb25zdCByZW1vdmVGb3JtID0gKCkgPT4ge1xuICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuY29uc3QgYWRkRm9ybSA9ICgpID0+IHtcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufTtcbmNvbnN0IGRpc3BsYXlJY29uID0gKGljb24sIGNvbnRhaW5lcikgPT4ge1xuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ0VsZW1lbnQuc3JjID0gaWNvbjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xufTtcbmNvbnN0IHBhaW50QmFja2dyb3VuZCA9IChjb2xvciwgZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbn07XG5jb25zdCBkaXNhYmxlQmFja2dyb3VuZCA9IChjb2xvciwgZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgyNTYsIDI1NiwgMjU2LCAwLjUpJztcbn07XG5jb25zdCBpbml0aWFsQmFja2dyb3VuZCA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG59O1xuY29uc3QgZGlzcGxheVJvdW5kcyA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IG9wcG9zaXRlUGxheWVyID0gcmV0cmlldmVJdGVtKCdvcHBvc2l0ZVBsYXllcicpO1xuICBpZiAoZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9PT0gJ05vIFR1cm5zIFlldCcpIHtcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMSc7XG4gIH0gZWxzZSB7XG4gICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9IGBUdXJuICR7ZWxlbWVudH0uYDtcbiAgfVxuICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCBpcyAke29wcG9zaXRlUGxheWVyLm5hbWV9J3MgdHVybmA7XG59O1xuXG5leHBvcnQge1xuICBhZGRGb3JtLFxuICBpbml0aWFsQmFja2dyb3VuZCxcbiAgcmVtb3ZlRm9ybSxcbiAgZGlzcGxheVJvdW5kcyxcbiAgZGlzcGxheUljb24sXG4gIHBhaW50QmFja2dyb3VuZCxcbiAgZGlzYWJsZUJhY2tncm91bmQsXG59O1xuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgcGxheWVySWNvbnMgZnJvbSAnLi9wbGF5ZXJJY29ucyc7XG5pbXBvcnQgZ2FtZUluaXQgZnJvbSAnLi9nYW1lSW5pdCc7XG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCByZXNldCBmcm9tICcuL3Jlc2V0JztcblxuY29uc3QgZ2FtZSA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMuaW5pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWVJbml0KTtcbiAgZG9tRWxlbWVudHMucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldCk7XG4gIGRvbUVsZW1lbnRzLmFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcGxheWVySWNvbnMoZWxlbWVudCk7XG4gICAgfSk7XG4gIH0pO1xuICBnYW1lYm9hcmQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gJy4vcGxheWVySWNvbnMnO1xuaW1wb3J0ICogYXMgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgc2F2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IGdhbWVJbml0ID0gKCkgPT4ge1xuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgfHwgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydChcIlBsZWFzZSBhZGQgYm90aCBwbGF5ZXJzJyBuYW1lcyB0byBjb250aW51ZS5cIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChJY29ucy5sZW5ndGggPCAyKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBjaGFyYWN0ZXIgZm9yIGJvdGggcGxheWVycyB0byBjb250aW51ZS4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgIT09ICcnICYmIEljb25zLmxlbmd0aCA9PT0gMikge1xuICAgIGNvbnN0IHBsYXllck9uZSA9IHBsYXllcihkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlLCAnWCcsIDEsIEljb25zWzBdLCAncmdiYSgxNDQsIDE2NCwgMTc0LCAwLjgnKTtcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSwgJ08nLCAyLCBJY29uc1sxXSwgJ3JnYmEoMjQxLCAxOTYsIDE1LCAwLjgnKTtcbiAgICBjb25zdCBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuICAgIGNvbnN0IG9wcG9zaXRlUGxheWVyID0gcGxheWVyVHdvO1xuICAgIGNvbnN0IGNvdW50ID0gMTtcbiAgICBpZiAoIXBsYXllck9uZS5pbWcgJiYgIXBsYXllclR3by5pbWcpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgY2hhcmFjdGVyIGZvciBib3RoIHBsYXllcnMgdG8gY29udGludWUuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc3BsYXlJY29uKHBsYXllck9uZS5pbWcsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5wYWludEJhY2tncm91bmQocGxheWVyT25lLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihwbGF5ZXJUd28uaW1nLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCdzICR7Y3VycmVudFBsYXllci5uYW1lfSdzIHR1cm5gO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5yZW1vdmVGb3JtKCk7XG4gICAgc2F2ZUl0ZW0oJ3BsYXllck9uZScsIHBsYXllck9uZSk7XG4gICAgc2F2ZUl0ZW0oJ3BsYXllclR3bycsIHBsYXllclR3byk7XG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XG4gICAgc2F2ZUl0ZW0oJ2NvdW50JywgY291bnQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUluaXQ7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY2xpY2tDZWxsKGV2ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7IiwiaW1wb3J0IHBsYXllclN3aXRjaCBmcm9tICcuL3BsYXllclN3aXRjaCc7XG5cbmNvbnN0IGlmQ2VsbEVtcHR5ID0gKGV2ZW50LCBzeW1ib2wsIGltZykgPT4ge1xuICBjb25zdCBpbWdFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ0Uuc3JjID0gaW1nO1xuICBldmVudC50YXJnZXQuZGF0YXNldC5kYXRhc3ltYm9sID0gc3ltYm9sO1xuICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQoaW1nRSk7XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwcmV2ZW50LWNsaWNrcycpO1xuICBwbGF5ZXJTd2l0Y2goKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlmQ2VsbEVtcHR5OyIsImNvbnN0IHNhdmVJdGVtID0gKHN0cmluZywgb2JqZWN0KSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0cmluZywgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG59O1xuXG5jb25zdCByZXRyaWV2ZUl0ZW0gPSAoc3RyaW5nKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0cmluZykpO1xuXG5leHBvcnQgeyBzYXZlSXRlbSwgcmV0cmlldmVJdGVtIH07IiwiY29uc3QgcGxheWVyID0gKG5hbWUsIHN5bWJvbCwgcGxheWVyTnVtYmVyLCBpbWcsIGJhY2tncm91bmQpID0+ICh7XG4gIG5hbWUsXG4gIHN5bWJvbCxcbiAgcGxheWVyTnVtYmVyLFxuICBpbWcsXG4gIGJhY2tncm91bmQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImxldCBudW1iZXJPZlBsYXllciA9IDE7XG5jb25zdCBJY29ucyA9IFtdO1xuXG5jb25zdCBjaG9vc2VQbGF5ZXJJY29uID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgY2hvc2VuSWNvbiA9IGVsZW1lbnQ7XG4gIGlmIChudW1iZXJPZlBsYXllciA9PT0gMSkge1xuICAgIGlmIChJY29uc1swXSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcycpLmlkID0gJyc7XG4gICAgICBJY29uc1swXSA9IGNob3Nlbkljb24uc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICBJY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcbiAgICB9XG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xuICAgIG51bWJlck9mUGxheWVyID0gMjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoSWNvbnNbMV0pIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MtcDInKS5pZCA9ICcnO1xuICAgICAgSWNvbnNbMV0gPSBjaG9zZW5JY29uLnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgSWNvbnMucHVzaChjaG9zZW5JY29uLnNyYyk7XG4gICAgfVxuICAgIGNob3Nlbkljb24uaWQgPSAnYXZvaWQtY2xpY2tzLXAyJztcbiAgICBudW1iZXJPZlBsYXllciA9IDE7XG4gIH1cbiAgcmV0dXJuIHsgSWNvbnMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNob29zZVBsYXllckljb247XG5leHBvcnQgeyBJY29ucyB9OyIsImltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9yZXNldCc7XG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi93aW5uaW5nVmFsaWRhdGlvbnMnO1xuaW1wb3J0IHVwZGF0ZUJvYXJkQXJyYXkgZnJvbSAnLi91cGRhdGVCb2FyZCc7XG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCB7IHJldHJpZXZlSXRlbSwgc2F2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IHBsYXllclN3aXRjaCA9ICgpID0+IHtcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInKTtcbiAgbGV0IG9wcG9zaXRlUGxheWVyID0gcmV0cmlldmVJdGVtKCdvcHBvc2l0ZVBsYXllcicpO1xuICBjb25zdCBwbGF5ZXJPbmUgPSByZXRyaWV2ZUl0ZW0oJ3BsYXllck9uZScpO1xuICBjb25zdCBwbGF5ZXJUd28gPSByZXRyaWV2ZUl0ZW0oJ3BsYXllclR3bycpO1xuICBsZXQgY291bnQgPSByZXRyaWV2ZUl0ZW0oJ2NvdW50Jyk7XG4gIHN0eWxlcy5kaXNwbGF5Um91bmRzKGNvdW50ICsgMSk7XG4gIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuc3ltYm9sKSA9PT0gZmFsc2UgJiYgY291bnQgPT09IDkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlTWF0Y2ggPSBjb25maXJtKFwiSXQncyBhIGRyYXchIFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/XCIpO1xuICAgICAgaWYgKHJlTWF0Y2gpIHtcbiAgICAgICAgcmVzZXQoZG9tRWxlbWVudHMuY2VsbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0hvdyBzYWQuJyk7XG4gICAgICB9XG4gICAgfSwgNDUwKTtcbiAgfSBlbHNlIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuc3ltYm9sKSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVtYXRjaCA9IGNvbmZpcm0oXG4gICAgICAgIGAke2N1cnJlbnRQbGF5ZXIubmFtZX0gaGFzIHdvbi4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9gLFxuICAgICAgKTtcbiAgICAgIGlmIChyZW1hdGNoID09PSB0cnVlKSB7XG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdMb3Nlci4nKTtcbiAgICAgIH1cbiAgICB9LCA0NTApO1xuICB9IGVsc2UgaWYgKG9wcG9zaXRlUGxheWVyLnBsYXllck51bWJlciA9PT0gMSkge1xuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gICAgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XG4gICAgc3R5bGVzLnBhaW50QmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XG4gICAgc3R5bGVzLnBhaW50QmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICB9XG4gIGNvdW50Kys7XG4gIHNhdmVJdGVtKCdjb3VudCcsIGNvdW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllclN3aXRjaDsiLCJjb25zdCByZXNldCA9ICgpID0+IHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKTtcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7IiwiaW1wb3J0IHsgY2VsbHMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxuY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcbiAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oY2VsbHMpO1xuICBjb25zdCByZW5kZXJCb2FyZCA9IGNlbGxzQXJyYXkubWFwKFxuICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcbiAgKTtcbiAgcmV0dXJuIHJlbmRlckJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQm9hcmRBcnJheTsiLCJpbXBvcnQgeyByZXRyaWV2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IHdpbm5pbmdWYWxpZGF0aW9uID0gKGFycmF5LCBzeW1ib2wpID0+IHtcbiAgY29uc3QgcGxheWVyT25lID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJPbmUnKTtcbiAgY29uc3QgcGxheWVyVHdvID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJUd28nKTtcbiAgY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xuICBsZXQgcm91bmRXb24gPSBmYWxzZTtcbiAgY29uc3Qgd2lubmluZ0NvbmRpdGlvbnMgPSBbXG4gICAgWzAsIDEsIDJdLFxuICAgIFszLCA0LCA1XSxcbiAgICBbNiwgNywgOF0sXG4gICAgWzAsIDMsIDZdLFxuICAgIFsxLCA0LCA3XSxcbiAgICBbMiwgNSwgOF0sXG4gICAgWzAsIDQsIDhdLFxuICAgIFsyLCA0LCA2XSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpICs9IDEpIHtcbiAgICBjb25zdCB3aW5Db25kaXRpb24gPSB3aW5uaW5nQ29uZGl0aW9uc1tpXTtcbiAgICBjb25zdCBhID0gYXJyYXlbd2luQ29uZGl0aW9uWzBdXTtcbiAgICBjb25zdCBiID0gYXJyYXlbd2luQ29uZGl0aW9uWzFdXTtcbiAgICBjb25zdCBjID0gYXJyYXlbd2luQ29uZGl0aW9uWzJdXTtcbiAgICBjb25zdCBhYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMF19YCk7XG4gICAgY29uc3QgYmIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzFdfWApO1xuICAgIGNvbnN0IGNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblsyXX1gKTtcbiAgICBpZiAoYSA9PT0gc3ltYm9sICYmIGIgPT09IHN5bWJvbCAmJiBjID09PSBzeW1ib2wpIHtcbiAgICAgIHJvdW5kV29uID0gdHJ1ZTtcbiAgICAgIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXJPbmUpIHtcbiAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllck9uZS5iYWNrZ3JvdW5kO1xuICAgICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyT25lLmJhY2tncm91bmQ7XG4gICAgICAgIGNjLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJPbmUuYmFja2dyb3VuZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJUd28uYmFja2dyb3VuZDtcbiAgICAgICAgYmIuc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllclR3by5iYWNrZ3JvdW5kO1xuICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyVHdvLmJhY2tncm91bmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91bmRXb247XG4gICAgfVxuICB9XG4gIHJldHVybiByb3VuZFdvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpbm5pbmdWYWxpZGF0aW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
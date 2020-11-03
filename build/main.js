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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
/* harmony import */ var _ifCellEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ifCellEmpty */ "./src/js/modules/ifCellEmpty.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");





const clickCell = (event) => {
  const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)('currentPlayer');
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value === '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const symbol = currentPlayer.symbol;
    const img = currentPlayer.img;
    (0,_ifCellEmpty__WEBPACK_IMPORTED_MODULE_2__.default)(event, symbol, img);
  }
};

// we need to create a current/opposite player update state function
// so we can pass that value to line 10/11

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickCell);


/***/ }),

/***/ "./src/js/modules/domElements.js":
/*!***************************************!*\
  !*** ./src/js/modules/domElements.js ***!
  \***************************************/
/*! namespace exports */
/*! export allIcons [provided] [no usage info] [missing usage info prevents renaming] */
/*! export call [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cells [provided] [no usage info] [missing usage info prevents renaming] */
/*! export count [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export namePlayerOne [provided] [no usage info] [missing usage info prevents renaming] */
/*! export namePlayerTwo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerOne [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerOneIcon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerTurnIndicator [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerTwo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerTwoIcon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resetButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export roundCounter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "call": () => /* binding */ call,
/* harmony export */   "allIcons": () => /* binding */ allIcons,
/* harmony export */   "namePlayerOne": () => /* binding */ namePlayerOne,
/* harmony export */   "namePlayerTwo": () => /* binding */ namePlayerTwo,
/* harmony export */   "playerTurnIndicator": () => /* binding */ playerTurnIndicator,
/* harmony export */   "roundCounter": () => /* binding */ roundCounter,
/* harmony export */   "playerOneIcon": () => /* binding */ playerOneIcon,
/* harmony export */   "playerTwoIcon": () => /* binding */ playerTwoIcon,
/* harmony export */   "cells": () => /* binding */ cells,
/* harmony export */   "initButton": () => /* binding */ initButton,
/* harmony export */   "count": () => /* binding */ count,
/* harmony export */   "playerOne": () => /* binding */ playerOne,
/* harmony export */   "playerTwo": () => /* binding */ playerTwo,
/* harmony export */   "playerNumber": () => /* binding */ playerNumber,
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
const call = () => console.log(allIcons);
const initButton = document.getElementById('startGameButton');
const resetButton = document.getElementById('resetButton');
const count = 1;
let playerOne;
let playerTwo;

const playerNumber = 1;

const numberOfPlayers = 1;



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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");




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
  const oppositePlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.retrieveItem)('oppositePlayer');
  if (_domElements__WEBPACK_IMPORTED_MODULE_1__.roundCounter.innerHTML === 'No Turns Yet') {
    _domElements__WEBPACK_IMPORTED_MODULE_1__.roundCounter.innerHTML = 'Turn 1';
  } else {
    _domElements__WEBPACK_IMPORTED_MODULE_1__.roundCounter.innerHTML = `Turn ${element}.`;
  }
  _domElements__WEBPACK_IMPORTED_MODULE_1__.playerTurnIndicator.innerHTML = `It is ${oppositePlayer.name}'s turn`;
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/js/modules/game.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/js/modules/player.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");







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
    const playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_4__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value, 'X', 1, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons[0], 'rgba(144, 164, 174, 0.8');
    const playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_4__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value, 'O', 2, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons[1], 'rgba(241, 196, 15, 0.8');
    const currentPlayer = playerOne;
    const oppositePlayer = playerTwo;
    const count = 1;
    if (!playerOne.img && !playerTwo.img) {
      alert('Please select a character for both players to continue.');
      return false;
    }

    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.displayIcon(playerOne.img, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.paintBackground(playerOne.background, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.displayIcon(playerTwo.img, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = `It's ${currentPlayer.name}'s turn`;
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.removeForm();
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('playerOne', playerOne);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('playerTwo', playerTwo);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('currentPlayer', currentPlayer);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('oppositePlayer', oppositePlayer);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('count', count);
  }
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
  _domElements__WEBPACK_IMPORTED_MODULE_0__.cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      //event.preventDefault();
      (0,_clickCell__WEBPACK_IMPORTED_MODULE_1__.default)(event);
    });
  });
}

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
const player = (name, symbol, playerNumber, img, background) => {
  return {
    name,
    symbol,
    playerNumber,
    img,
    background
  };
}

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
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "Icons": () => /* binding */ Icons
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");



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
    console.log(`opposite player number is one`)
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
}

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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");








const reset = () => {
  const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('currentPlayer');
  let count = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('count')
  _domElements__WEBPACK_IMPORTED_MODULE_0__.cells.forEach((element) => {
    element.addEventListener('click', _clickCell__WEBPACK_IMPORTED_MODULE_2__.default, false);
    element.innerHTML = '';
    element.dataset.datasymbol = '';
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.initialBackground(element);
    count = 1;
    _domElements__WEBPACK_IMPORTED_MODULE_0__.roundCounter.innerHTML = 'Turn 1.';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon.innerHTML = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon.innerHTML = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value = '';
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.disableBackground(currentPlayer.background, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.disableBackground(currentPlayer.background, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.allIcons.forEach((element) => {
      element.addEventListener('click', _playerIcons__WEBPACK_IMPORTED_MODULE_4__.default, false);
    });
    document.getElementById('avoid-clicks').id = '';
    document.getElementById('avoid-clicks-p2').id = '';
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.addForm();
  });
  const resetIconSelect = 1;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('numberOfPlayer', resetIconSelect);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('currentPlayer', currentPlayer);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('count', count);
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
const cells = document.querySelectorAll('.cell');
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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/js/modules/localStorage.js");





const winningValidation = (array, symbol) => {
  const playerOne = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.retrieveItem)('playerOne');
const playerTwo = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.retrieveItem)('playerTwo');
const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.retrieveItem)('currentPlayer');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9wbGF5ZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyU3dpdGNoLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvdXBkYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3dpbm5pbmdWYWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQyxzREFBSSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnlDO0FBQ25CO0FBQ2M7QUFDTTs7QUFFOUM7QUFDQSx3QkFBd0IsMkRBQVk7QUFDcEMsTUFBTSw2REFBK0IsV0FBVyw2REFBK0I7QUFDL0U7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCMEI7QUFDbUI7QUFDQzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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cURBQXVCO0FBQzNCLEdBQUc7QUFDSDtBQUNBLEVBQUUsdURBQVE7QUFDVixFQUFFLHVEQUFRO0FBQ1YsRUFBRSx1REFBUTtBQUNWOztBQUVBLGlFQUFlLEtBQUssRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RMO0FBQ29COzs7O0FBSTlDO0FBQ0Esb0JBQW9CLDJEQUFZO0FBQ2hDLGtCQUFrQiwyREFBWTtBQUM5QixzQkFBc0IsMkRBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0QsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEU7Ozs7OztVQzlDaEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcblxyXG5nYW1lKCk7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL2lmQ2VsbEVtcHR5JztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgY2xpY2tDZWxsID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xyXG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlID09PSAnJyAmJiBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlID09PSAnJykge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzLlwiKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBFbnRlciBBbGwgUGxheWVyJ3MgTmFtZXNcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHN5bWJvbCA9IGN1cnJlbnRQbGF5ZXIuc3ltYm9sO1xyXG4gICAgY29uc3QgaW1nID0gY3VycmVudFBsYXllci5pbWc7XHJcbiAgICBpZkNlbGxFbXB0eShldmVudCwgc3ltYm9sLCBpbWcpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIHdlIG5lZWQgdG8gY3JlYXRlIGEgY3VycmVudC9vcHBvc2l0ZSBwbGF5ZXIgdXBkYXRlIHN0YXRlIGZ1bmN0aW9uXHJcbi8vIHNvIHdlIGNhbiBwYXNzIHRoYXQgdmFsdWUgdG8gbGluZSAxMC8xMVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpY2tDZWxsO1xyXG4iLCJjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcclxuY29uc3QgbmFtZVBsYXllclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHdvJyk7XHJcbmNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1pdGVtJyk7XHJcbmNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcclxuY29uc3Qgcm91bmRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tY291bnRlcicpO1xyXG5jb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xyXG5jb25zdCBwbGF5ZXJUd29JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllclR3bycpO1xyXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbmNvbnN0IGNhbGwgPSAoKSA9PiBjb25zb2xlLmxvZyhhbGxJY29ucyk7XHJcbmNvbnN0IGluaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRHYW1lQnV0dG9uJyk7XHJcbmNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0QnV0dG9uJyk7XHJcbmNvbnN0IGNvdW50ID0gMTtcclxubGV0IHBsYXllck9uZTtcclxubGV0IHBsYXllclR3bztcclxuXHJcbmNvbnN0IHBsYXllck51bWJlciA9IDE7XHJcblxyXG5jb25zdCBudW1iZXJPZlBsYXllcnMgPSAxO1xyXG5cclxuZXhwb3J0IHtcclxuICBjYWxsLFxyXG4gIGFsbEljb25zLFxyXG4gIG5hbWVQbGF5ZXJPbmUsXHJcbiAgbmFtZVBsYXllclR3byxcclxuICBwbGF5ZXJUdXJuSW5kaWNhdG9yLFxyXG4gIHJvdW5kQ291bnRlcixcclxuICBwbGF5ZXJPbmVJY29uLFxyXG4gIHBsYXllclR3b0ljb24sXHJcbiAgY2VsbHMsXHJcbiAgaW5pdEJ1dHRvbixcclxuICBjb3VudCxcclxuICBwbGF5ZXJPbmUsXHJcbiAgcGxheWVyVHdvLFxyXG4gIHBsYXllck51bWJlcixcclxuICByZXNldEJ1dHRvbixcclxufTsiLCJpbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5jb25zdCByZW1vdmVGb3JtID0gKCkgPT4ge1xyXG4gIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuY29uc3QgYWRkRm9ybSA9ICgpID0+IHtcclxuICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlJY29uID0gKGljb24sIGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWdFbGVtZW50LnNyYyA9IGljb247XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xyXG59O1xyXG5jb25zdCBwYWludEJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxufTtcclxuY29uc3QgZGlzYWJsZUJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgyNTYsIDI1NiwgMjU2LCAwLjUpJztcclxufTtcclxuY29uc3QgaW5pdGlhbEJhY2tncm91bmQgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlSb3VuZHMgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IG9wcG9zaXRlUGxheWVyID0gcmV0cmlldmVJdGVtKCdvcHBvc2l0ZVBsYXllcicpO1xyXG4gIGlmIChkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID09PSAnTm8gVHVybnMgWWV0Jykge1xyXG4gICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9ICdUdXJuIDEnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gYFR1cm4gJHtlbGVtZW50fS5gO1xyXG4gIH1cclxuICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCBpcyAke29wcG9zaXRlUGxheWVyLm5hbWV9J3MgdHVybmA7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGFkZEZvcm0sXHJcbiAgaW5pdGlhbEJhY2tncm91bmQsXHJcbiAgcmVtb3ZlRm9ybSxcclxuICBkaXNwbGF5Um91bmRzLFxyXG4gIC8vIHBsYXllclR1cm5JbmRpY2F0b3IsIHdoeSA/XHJcbiAgZGlzcGxheUljb24sXHJcbiAgcGFpbnRCYWNrZ3JvdW5kLFxyXG4gIGRpc2FibGVCYWNrZ3JvdW5kLFxyXG59O1xyXG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHBsYXllckljb25zIGZyb20gJy4vcGxheWVySWNvbnMnO1xyXG5pbXBvcnQgZ2FtZUluaXQgZnJvbSAnLi9nYW1lSW5pdCc7XHJcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9yZXNldCc7XHJcblxyXG5jb25zdCBnYW1lID0gKCkgPT4ge1xyXG4gIGRvbUVsZW1lbnRzLmluaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lSW5pdCk7XHJcbiAgZG9tRWxlbWVudHMucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldCk7XHJcbiAgZG9tRWxlbWVudHMuYWxsSWNvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwbGF5ZXJJY29ucyhlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGdhbWVib2FyZCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgSWNvbnMgfSBmcm9tICcuL3BsYXllckljb25zJztcclxuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0ICogYXMgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcclxuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IHNhdmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgZ2FtZUluaXQgPSAoKSA9PiB7XHJcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnIHx8IGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XHJcbiAgICBhbGVydChcIlBsZWFzZSBhZGQgYm90aCBwbGF5ZXJzJyBuYW1lcyB0byBjb250aW51ZS5cIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChJY29ucy5sZW5ndGggPCAyKSB7XHJcbiAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIGNoYXJhY3RlciBmb3IgYm90aCBwbGF5ZXJzIHRvIGNvbnRpbnVlLicpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSAhPT0gJycgJiYgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSAhPT0gJycgJiYgSWNvbnMubGVuZ3RoID09PSAyKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSwgJ1gnLCAxLCBJY29uc1swXSwgJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44Jyk7XHJcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSwgJ08nLCAyLCBJY29uc1sxXSwgJ3JnYmEoMjQxLCAxOTYsIDE1LCAwLjgnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbiAgICBjb25zdCBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuICAgIGNvbnN0IGNvdW50ID0gMTtcclxuICAgIGlmICghcGxheWVyT25lLmltZyAmJiAhcGxheWVyVHdvLmltZykge1xyXG4gICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIGNoYXJhY3RlciBmb3IgYm90aCBwbGF5ZXJzIHRvIGNvbnRpbnVlLicpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc3BsYXlJY29uKHBsYXllck9uZS5pbWcsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLnBhaW50QmFja2dyb3VuZChwbGF5ZXJPbmUuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XHJcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24ocGxheWVyVHdvLmltZywgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XHJcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCdzICR7Y3VycmVudFBsYXllci5uYW1lfSdzIHR1cm5gO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLnJlbW92ZUZvcm0oKTtcclxuICAgIHNhdmVJdGVtKCdwbGF5ZXJPbmUnLCBwbGF5ZXJPbmUpO1xyXG4gICAgc2F2ZUl0ZW0oJ3BsYXllclR3bycsIHBsYXllclR3byk7XHJcbiAgICBzYXZlSXRlbSgnY3VycmVudFBsYXllcicsIGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgc2F2ZUl0ZW0oJ29wcG9zaXRlUGxheWVyJywgb3Bwb3NpdGVQbGF5ZXIpO1xyXG4gICAgc2F2ZUl0ZW0oJ2NvdW50JywgY291bnQpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVJbml0OyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcclxuaW1wb3J0IGlmQ2VsbEVtcHR5IGZyb20gJy4vaWZDZWxsRW1wdHknO1xyXG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9yZXNldCc7XHJcbmltcG9ydCB3aW5uaW5nVmFsaWRhdGlvbiBmcm9tICcuL3dpbm5pbmdWYWxpZGF0aW9ucyc7XHJcbmltcG9ydCB1cGRhdGVCb2FyZEFycmF5IGZyb20gJy4vdXBkYXRlQm9hcmQnO1xyXG5pbXBvcnQgcGxheWVyU3dpdGNoIGZyb20gJy4vcGxheWVyU3dpdGNoJztcclxuXHJcbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcclxuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY2xpY2tDZWxsKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7IiwiaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XHJcbmltcG9ydCBwbGF5ZXJTd2l0Y2ggZnJvbSAnLi9wbGF5ZXJTd2l0Y2gnO1xyXG5cclxuY29uc3QgaWZDZWxsRW1wdHkgPSAoZXZlbnQsIHN5bWJvbCwgaW1nKSA9PiB7XHJcbiAgY29uc3QgaW1nRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltZ0Uuc3JjID0gaW1nO1xyXG4gIGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGFzeW1ib2wgPSBzeW1ib2w7XHJcbiAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGltZ0UpO1xyXG4gIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2VsbCwgZmFsc2UpO1xyXG4gIHBsYXllclN3aXRjaCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaWZDZWxsRW1wdHk7IiwiY29uc3Qgc2F2ZUl0ZW0gPSAoc3RyaW5nLCBvYmplY3QpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RyaW5nLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbn07XG5cbmNvbnN0IHJldHJpZXZlSXRlbSA9IChzdHJpbmcpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RyaW5nKSk7XG5cbmV4cG9ydCB7IHNhdmVJdGVtLCByZXRyaWV2ZUl0ZW0gfTsiLCJjb25zdCBwbGF5ZXIgPSAobmFtZSwgc3ltYm9sLCBwbGF5ZXJOdW1iZXIsIGltZywgYmFja2dyb3VuZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgc3ltYm9sLFxyXG4gICAgcGxheWVyTnVtYmVyLFxyXG4gICAgaW1nLFxyXG4gICAgYmFja2dyb3VuZFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtLCBzYXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuXHJcbmxldCBudW1iZXJPZlBsYXllciA9IDE7XHJcbmNvbnN0IEljb25zID0gW107XHJcblxyXG5jb25zdCBjaG9vc2VQbGF5ZXJJY29uID0gKGVsZW1lbnQpID0+IHtcclxuICBjb25zdCBjaG9zZW5JY29uID0gZWxlbWVudDtcclxuICBpZiAobnVtYmVyT2ZQbGF5ZXIgPT09IDEpIHtcclxuICAgIGlmIChJY29uc1swXSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzJykuaWQgPSAnJztcclxuICAgICAgSWNvbnNbMF0gPSBjaG9zZW5JY29uLnNyYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEljb25zLnB1c2goY2hvc2VuSWNvbi5zcmMpO1xyXG4gICAgfVxyXG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xyXG4gICAgbnVtYmVyT2ZQbGF5ZXIgPSAyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoSWNvbnNbMV0pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcy1wMicpLmlkID0gJyc7XHJcbiAgICAgIEljb25zWzFdID0gY2hvc2VuSWNvbi5zcmM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBJY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcclxuICAgIH1cclxuICAgIGNob3Nlbkljb24uaWQgPSAnYXZvaWQtY2xpY2tzLXAyJztcclxuICAgIG51bWJlck9mUGxheWVyID0gMTtcclxuICB9XHJcbiAgcmV0dXJuIHsgSWNvbnMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNob29zZVBsYXllckljb247XHJcbmV4cG9ydCB7IEljb25zIH07IiwiaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcclxuaW1wb3J0IHJlc2V0IGZyb20gJy4vcmVzZXQnO1xyXG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi93aW5uaW5nVmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgdXBkYXRlQm9hcmRBcnJheSBmcm9tICcuL3VwZGF0ZUJvYXJkJztcclxuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSwgc2F2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHBsYXllclN3aXRjaCA9ICgpID0+IHtcclxuXHJcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInKTtcclxuICBsZXQgb3Bwb3NpdGVQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ29wcG9zaXRlUGxheWVyJyk7XHJcbiAgY29uc3QgcGxheWVyT25lID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJPbmUnKTtcclxuICBjb25zdCBwbGF5ZXJUd28gPSByZXRyaWV2ZUl0ZW0oJ3BsYXllclR3bycpO1xyXG4gIGxldCBjb3VudCA9IHJldHJpZXZlSXRlbSgnY291bnQnKTtcclxuICBzdHlsZXMuZGlzcGxheVJvdW5kcyhjb3VudCArIDEpO1xyXG4gIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuc3ltYm9sKSA9PT0gZmFsc2UgJiYgY291bnQgPT09IDkpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCByZU1hdGNoID0gY29uZmlybShcIkl0J3MgYSBkcmF3ISBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP1wiKTtcclxuICAgICAgaWYgKHJlTWF0Y2gpIHtcclxuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0hvdyBzYWQuJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDQ1MCk7XHJcbiAgfSBlbHNlIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuc3ltYm9sKSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlbWF0Y2ggPSBjb25maXJtKFxyXG4gICAgICAgIGAke2N1cnJlbnRQbGF5ZXIubmFtZX0gaGFzIHdvbi4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9gLFxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVtYXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnTG9zZXIuJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDQ1MCk7XHJcbiAgfSBlbHNlIGlmIChvcHBvc2l0ZVBsYXllci5wbGF5ZXJOdW1iZXIgPT09IDEpIHtcclxuICAgIGNvbnNvbGUubG9nKGBvcHBvc2l0ZSBwbGF5ZXIgbnVtYmVyIGlzIG9uZWApXHJcbiAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbiAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuICAgIHNhdmVJdGVtKCdjdXJyZW50UGxheWVyJywgY3VycmVudFBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XHJcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllclR3bztcclxuICAgIG9wcG9zaXRlUGxheWVyID0gcGxheWVyT25lO1xyXG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcclxuICAgIHNhdmVJdGVtKCdvcHBvc2l0ZVBsYXllcicsIG9wcG9zaXRlUGxheWVyKTtcclxuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICB9XHJcbiAgY291bnQrKztcclxuICBzYXZlSXRlbSgnY291bnQnLCBjb3VudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllclN3aXRjaDsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XHJcbmltcG9ydCAqIGFzIGRvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XHJcbmltcG9ydCBjaG9vc2VQbGF5ZXJJY29uIGZyb20gJy4vcGxheWVySWNvbnMnO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0sIHNhdmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuXHJcbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInKTtcclxuICBsZXQgY291bnQgPSByZXRyaWV2ZUl0ZW0oJ2NvdW50JylcclxuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSk7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgZWxlbWVudC5kYXRhc2V0LmRhdGFzeW1ib2wgPSAnJztcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5pbml0aWFsQmFja2dyb3VuZChlbGVtZW50KTtcclxuICAgIGNvdW50ID0gMTtcclxuICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSAnVHVybiAxLic7XHJcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlID0gJyc7XHJcbiAgICBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlID0gJyc7XHJcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzYWJsZUJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xyXG4gICAgZG9tRWxlbWVudHMuYWxsSWNvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGxheWVySWNvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzJykuaWQgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MtcDInKS5pZCA9ICcnO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmFkZEZvcm0oKTtcclxuICB9KTtcclxuICBjb25zdCByZXNldEljb25TZWxlY3QgPSAxO1xyXG4gIHNhdmVJdGVtKCdudW1iZXJPZlBsYXllcicsIHJlc2V0SWNvblNlbGVjdCk7XHJcbiAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcclxuICBzYXZlSXRlbSgnY291bnQnLCBjb3VudCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNldDsiLCJjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbmNvbnN0IHVwZGF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oY2VsbHMpO1xyXG4gIGNvbnN0IHJlbmRlckJvYXJkID0gY2VsbHNBcnJheS5tYXAoXHJcbiAgICAoY2VsbCA9PiBjZWxsLmRhdGFzZXQuZGF0YXN5bWJvbCksXHJcbiAgKTtcclxuICByZXR1cm4gcmVuZGVyQm9hcmQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVCb2FyZEFycmF5OyIsImltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuXHJcblxyXG5cclxuY29uc3Qgd2lubmluZ1ZhbGlkYXRpb24gPSAoYXJyYXksIHN5bWJvbCkgPT4ge1xyXG4gIGNvbnN0IHBsYXllck9uZSA9IHJldHJpZXZlSXRlbSgncGxheWVyT25lJyk7XHJcbmNvbnN0IHBsYXllclR3byA9IHJldHJpZXZlSXRlbSgncGxheWVyVHdvJyk7XHJcbmNvbnN0IGN1cnJlbnRQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInKTtcclxuICBsZXQgcm91bmRXb24gPSBmYWxzZTtcclxuICBjb25zdCB3aW5uaW5nQ29uZGl0aW9ucyA9IFtcclxuICAgIFswLCAxLCAyXSxcclxuICAgIFszLCA0LCA1XSxcclxuICAgIFs2LCA3LCA4XSxcclxuICAgIFswLCAzLCA2XSxcclxuICAgIFsxLCA0LCA3XSxcclxuICAgIFsyLCA1LCA4XSxcclxuICAgIFswLCA0LCA4XSxcclxuICAgIFsyLCA0LCA2XSxcclxuICBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdpbkNvbmRpdGlvbiA9IHdpbm5pbmdDb25kaXRpb25zW2ldO1xyXG4gICAgY29uc3QgYSA9IGFycmF5W3dpbkNvbmRpdGlvblswXV07XHJcbiAgICBjb25zdCBiID0gYXJyYXlbd2luQ29uZGl0aW9uWzFdXTtcclxuICAgIGNvbnN0IGMgPSBhcnJheVt3aW5Db25kaXRpb25bMl1dO1xyXG4gICAgY29uc3QgYWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzBdfWApO1xyXG4gICAgY29uc3QgYmIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzFdfWApO1xyXG4gICAgY29uc3QgY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzJdfWApO1xyXG4gICAgaWYgKGEgPT09IHN5bWJvbCAmJiBiID09PSBzeW1ib2wgJiYgYyA9PT0gc3ltYm9sKSB7XHJcbiAgICAgIHJvdW5kV29uID0gdHJ1ZTtcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllck9uZSkge1xyXG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJPbmUuYmFja2dyb3VuZDtcclxuICAgICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyT25lLmJhY2tncm91bmQ7XHJcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllck9uZS5iYWNrZ3JvdW5kO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJUd28uYmFja2dyb3VuZDtcclxuICAgICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyVHdvLmJhY2tncm91bmQ7XHJcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllclR3by5iYWNrZ3JvdW5kO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByb3VuZFdvbjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJvdW5kV29uO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2lubmluZ1ZhbGlkYXRpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbWFpbi5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
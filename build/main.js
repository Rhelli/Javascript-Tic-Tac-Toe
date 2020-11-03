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
    window.localStorage.clear()
    window.location.reload()
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.addForm();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9wbGF5ZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyU3dpdGNoLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvdXBkYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3dpbm5pbmdWYWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQyxzREFBSSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnlDO0FBQ25CO0FBQ2M7QUFDTTs7QUFFOUM7QUFDQSx3QkFBd0IsMkRBQVk7QUFDcEMsTUFBTSw2REFBK0IsV0FBVyw2REFBK0I7QUFDL0U7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCMEI7QUFDbUI7QUFDQzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QzNELDJDQUEyQyxnQkFBZ0I7QUFDM0QsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFOzs7Ozs7VUM5Q2hDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWUgZnJvbSAnLi9tb2R1bGVzL2dhbWUnO1xuXG5nYW1lKCk7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL2lmQ2VsbEVtcHR5JztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgY2xpY2tDZWxsID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xyXG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlID09PSAnJyAmJiBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlID09PSAnJykge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzLlwiKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBFbnRlciBBbGwgUGxheWVyJ3MgTmFtZXNcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHN5bWJvbCA9IGN1cnJlbnRQbGF5ZXIuc3ltYm9sO1xyXG4gICAgY29uc3QgaW1nID0gY3VycmVudFBsYXllci5pbWc7XHJcbiAgICBpZkNlbGxFbXB0eShldmVudCwgc3ltYm9sLCBpbWcpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIHdlIG5lZWQgdG8gY3JlYXRlIGEgY3VycmVudC9vcHBvc2l0ZSBwbGF5ZXIgdXBkYXRlIHN0YXRlIGZ1bmN0aW9uXHJcbi8vIHNvIHdlIGNhbiBwYXNzIHRoYXQgdmFsdWUgdG8gbGluZSAxMC8xMVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpY2tDZWxsO1xyXG4iLCJjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcbmNvbnN0IG5hbWVQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR3bycpO1xuY29uc3QgYWxsSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLWl0ZW0nKTtcbmNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcbmNvbnN0IHJvdW5kQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWNvdW50ZXInKTtcbmNvbnN0IHBsYXllck9uZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyT25lJyk7XG5jb25zdCBwbGF5ZXJUd29JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllclR3bycpO1xuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuY29uc3QgY2FsbCA9ICgpID0+IGNvbnNvbGUubG9nKGFsbEljb25zKTtcbmNvbnN0IGluaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRHYW1lQnV0dG9uJyk7XG5jb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldEJ1dHRvbicpO1xuY29uc3QgY291bnQgPSAxO1xubGV0IHBsYXllck9uZTtcbmxldCBwbGF5ZXJUd287XG5cbmNvbnN0IHBsYXllck51bWJlciA9IDE7XG5cbmNvbnN0IG51bWJlck9mUGxheWVycyA9IDE7XG5cbmV4cG9ydCB7XG4gIGNhbGwsXG4gIGFsbEljb25zLFxuICBuYW1lUGxheWVyT25lLFxuICBuYW1lUGxheWVyVHdvLFxuICBwbGF5ZXJUdXJuSW5kaWNhdG9yLFxuICByb3VuZENvdW50ZXIsXG4gIHBsYXllck9uZUljb24sXG4gIHBsYXllclR3b0ljb24sXG4gIGNlbGxzLFxuICBpbml0QnV0dG9uLFxuICBjb3VudCxcbiAgcGxheWVyT25lLFxuICBwbGF5ZXJUd28sXG4gIHBsYXllck51bWJlcixcbiAgcmVzZXRCdXR0b24sXG59OyIsImltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJyk7XHJcbmNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7XHJcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5jb25zdCBhZGRGb3JtID0gKCkgPT4ge1xyXG4gIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufTtcclxuY29uc3QgZGlzcGxheUljb24gPSAoaWNvbiwgY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltZ0VsZW1lbnQuc3JjID0gaWNvbjtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XHJcbn07XHJcbmNvbnN0IHBhaW50QmFja2dyb3VuZCA9IChjb2xvciwgZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xyXG59O1xyXG5jb25zdCBkaXNhYmxlQmFja2dyb3VuZCA9IChjb2xvciwgZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNSknO1xyXG59O1xyXG5jb25zdCBpbml0aWFsQmFja2dyb3VuZCA9IChlbGVtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcclxufTtcclxuY29uc3QgZGlzcGxheVJvdW5kcyA9IChlbGVtZW50KSA9PiB7XHJcbiAgY29uc3Qgb3Bwb3NpdGVQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ29wcG9zaXRlUGxheWVyJyk7XHJcbiAgaWYgKGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPT09ICdObyBUdXJucyBZZXQnKSB7XHJcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSBgVHVybiAke2VsZW1lbnR9LmA7XHJcbiAgfVxyXG4gIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0IGlzICR7b3Bwb3NpdGVQbGF5ZXIubmFtZX0ncyB0dXJuYDtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgYWRkRm9ybSxcclxuICBpbml0aWFsQmFja2dyb3VuZCxcclxuICByZW1vdmVGb3JtLFxyXG4gIGRpc3BsYXlSb3VuZHMsXHJcbiAgLy8gcGxheWVyVHVybkluZGljYXRvciwgd2h5ID9cclxuICBkaXNwbGF5SWNvbixcclxuICBwYWludEJhY2tncm91bmQsXHJcbiAgZGlzYWJsZUJhY2tncm91bmQsXHJcbn07XHJcbiIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHBsYXllckljb25zIGZyb20gJy4vcGxheWVySWNvbnMnO1xuaW1wb3J0IGdhbWVJbml0IGZyb20gJy4vZ2FtZUluaXQnO1xuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9yZXNldCc7XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLmluaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lSW5pdCk7XG4gIGRvbUVsZW1lbnRzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXQpO1xuICBkb21FbGVtZW50cy5hbGxJY29ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHBsYXllckljb25zKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9KTtcbiAgZ2FtZWJvYXJkKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyBJY29ucyB9IGZyb20gJy4vcGxheWVySWNvbnMnO1xyXG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgKiBhcyBkb21NYW5pcHVsYXRpb24gZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xyXG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgc2F2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG5jb25zdCBnYW1lSW5pdCA9ICgpID0+IHtcclxuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgfHwgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcclxuICAgIGFsZXJ0KFwiUGxlYXNlIGFkZCBib3RoIHBsYXllcnMnIG5hbWVzIHRvIGNvbnRpbnVlLlwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKEljb25zLmxlbmd0aCA8IDIpIHtcclxuICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgY2hhcmFjdGVyIGZvciBib3RoIHBsYXllcnMgdG8gY29udGludWUuJyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlICE9PSAnJyAmJiBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlICE9PSAnJyAmJiBJY29ucy5sZW5ndGggPT09IDIpIHtcclxuICAgIGNvbnN0IHBsYXllck9uZSA9IHBsYXllcihkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlLCAnWCcsIDEsIEljb25zWzBdLCAncmdiYSgxNDQsIDE2NCwgMTc0LCAwLjgnKTtcclxuICAgIGNvbnN0IHBsYXllclR3byA9IHBsYXllcihkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlLCAnTycsIDIsIEljb25zWzFdLCAncmdiYSgyNDEsIDE5NiwgMTUsIDAuOCcpO1xyXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcclxuICAgIGNvbnN0IG9wcG9zaXRlUGxheWVyID0gcGxheWVyVHdvO1xyXG4gICAgY29uc3QgY291bnQgPSAxO1xyXG4gICAgaWYgKCFwbGF5ZXJPbmUuaW1nICYmICFwbGF5ZXJUd28uaW1nKSB7XHJcbiAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgY2hhcmFjdGVyIGZvciBib3RoIHBsYXllcnMgdG8gY29udGludWUuJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24ocGxheWVyT25lLmltZywgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XHJcbiAgICBkb21NYW5pcHVsYXRpb24ucGFpbnRCYWNrZ3JvdW5kKHBsYXllck9uZS5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihwbGF5ZXJUd28uaW1nLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0J3MgJHtjdXJyZW50UGxheWVyLm5hbWV9J3MgdHVybmA7XHJcbiAgICBkb21NYW5pcHVsYXRpb24ucmVtb3ZlRm9ybSgpO1xyXG4gICAgc2F2ZUl0ZW0oJ3BsYXllck9uZScsIHBsYXllck9uZSk7XHJcbiAgICBzYXZlSXRlbSgncGxheWVyVHdvJywgcGxheWVyVHdvKTtcclxuICAgIHNhdmVJdGVtKCdjdXJyZW50UGxheWVyJywgY3VycmVudFBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnY291bnQnLCBjb3VudCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZUluaXQ7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCBjbGlja0NlbGwgZnJvbSAnLi9jbGlja0NlbGwnO1xyXG5pbXBvcnQgaWZDZWxsRW1wdHkgZnJvbSAnLi9pZkNlbGxFbXB0eSc7XHJcbmltcG9ydCByZXNldCBmcm9tICcuL3Jlc2V0JztcclxuaW1wb3J0IHdpbm5pbmdWYWxpZGF0aW9uIGZyb20gJy4vd2lubmluZ1ZhbGlkYXRpb25zJztcclxuaW1wb3J0IHVwZGF0ZUJvYXJkQXJyYXkgZnJvbSAnLi91cGRhdGVCb2FyZCc7XHJcbmltcG9ydCBwbGF5ZXJTd2l0Y2ggZnJvbSAnLi9wbGF5ZXJTd2l0Y2gnO1xyXG5cclxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gIGRvbUVsZW1lbnRzLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjbGlja0NlbGwoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDsiLCJpbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcbmltcG9ydCBwbGF5ZXJTd2l0Y2ggZnJvbSAnLi9wbGF5ZXJTd2l0Y2gnO1xuXG5jb25zdCBpZkNlbGxFbXB0eSA9IChldmVudCwgc3ltYm9sLCBpbWcpID0+IHtcbiAgY29uc3QgaW1nRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFLnNyYyA9IGltZztcbiAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGF0YXN5bWJvbCA9IHN5bWJvbDtcbiAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGltZ0UpO1xuICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcbiAgcGxheWVyU3dpdGNoKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpZkNlbGxFbXB0eTsiLCJjb25zdCBzYXZlSXRlbSA9IChzdHJpbmcsIG9iamVjdCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0cmluZywgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbn07XHJcblxyXG5jb25zdCByZXRyaWV2ZUl0ZW0gPSAoc3RyaW5nKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0cmluZykpO1xyXG5cclxuZXhwb3J0IHsgc2F2ZUl0ZW0sIHJldHJpZXZlSXRlbSB9OyIsImNvbnN0IHBsYXllciA9IChuYW1lLCBzeW1ib2wsIHBsYXllck51bWJlciwgaW1nLCBiYWNrZ3JvdW5kKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBzeW1ib2wsXHJcbiAgICBwbGF5ZXJOdW1iZXIsXHJcbiAgICBpbWcsXHJcbiAgICBiYWNrZ3JvdW5kXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0sIHNhdmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuXHJcblxyXG5cclxubGV0IG51bWJlck9mUGxheWVyID0gMTtcclxuY29uc3QgSWNvbnMgPSBbXTtcclxuXHJcbmNvbnN0IGNob29zZVBsYXllckljb24gPSAoZWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IGNob3Nlbkljb24gPSBlbGVtZW50O1xyXG5cclxuICBpZiAobnVtYmVyT2ZQbGF5ZXIgPT09IDEpIHtcclxuICAgIGlmIChJY29uc1swXSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzJykuaWQgPSAnJztcclxuICAgICAgSWNvbnNbMF0gPSBjaG9zZW5JY29uLnNyYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEljb25zLnB1c2goY2hvc2VuSWNvbi5zcmMpO1xyXG4gICAgfVxyXG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xyXG4gICAgbnVtYmVyT2ZQbGF5ZXIgPSAyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoSWNvbnNbMV0pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcy1wMicpLmlkID0gJyc7XHJcbiAgICAgIEljb25zWzFdID0gY2hvc2VuSWNvbi5zcmM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBJY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcclxuICAgIH1cclxuICAgIGNob3Nlbkljb24uaWQgPSAnYXZvaWQtY2xpY2tzLXAyJztcclxuICAgIG51bWJlck9mUGxheWVyID0gMTtcclxuICB9XHJcbiAgcmV0dXJuIHsgSWNvbnMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNob29zZVBsYXllckljb247XHJcbmV4cG9ydCB7IEljb25zIH07IiwiaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcclxuaW1wb3J0IHJlc2V0IGZyb20gJy4vcmVzZXQnO1xyXG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi93aW5uaW5nVmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgdXBkYXRlQm9hcmRBcnJheSBmcm9tICcuL3VwZGF0ZUJvYXJkJztcclxuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSwgc2F2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHBsYXllclN3aXRjaCA9ICgpID0+IHtcclxuXHJcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInKTtcclxuICBsZXQgb3Bwb3NpdGVQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ29wcG9zaXRlUGxheWVyJyk7XHJcbiAgY29uc3QgcGxheWVyT25lID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJPbmUnKTtcclxuICBjb25zdCBwbGF5ZXJUd28gPSByZXRyaWV2ZUl0ZW0oJ3BsYXllclR3bycpO1xyXG4gIGxldCBjb3VudCA9IHJldHJpZXZlSXRlbSgnY291bnQnKTtcclxuICBzdHlsZXMuZGlzcGxheVJvdW5kcyhjb3VudCArIDEpO1xyXG4gIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuc3ltYm9sKSA9PT0gZmFsc2UgJiYgY291bnQgPT09IDkpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCByZU1hdGNoID0gY29uZmlybShcIkl0J3MgYSBkcmF3ISBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP1wiKTtcclxuICAgICAgaWYgKHJlTWF0Y2gpIHtcclxuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0hvdyBzYWQuJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDQ1MCk7XHJcbiAgfSBlbHNlIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGN1cnJlbnRQbGF5ZXIuc3ltYm9sKSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlbWF0Y2ggPSBjb25maXJtKFxyXG4gICAgICAgIGAke2N1cnJlbnRQbGF5ZXIubmFtZX0gaGFzIHdvbi4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9gLFxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVtYXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnTG9zZXIuJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDQ1MCk7XHJcbiAgfSBlbHNlIGlmIChvcHBvc2l0ZVBsYXllci5wbGF5ZXJOdW1iZXIgPT09IDEpIHtcclxuICAgIGNvbnNvbGUubG9nKGBvcHBvc2l0ZSBwbGF5ZXIgbnVtYmVyIGlzIG9uZWApXHJcbiAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbiAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuICAgIHNhdmVJdGVtKCdjdXJyZW50UGxheWVyJywgY3VycmVudFBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XHJcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllclR3bztcclxuICAgIG9wcG9zaXRlUGxheWVyID0gcGxheWVyT25lO1xyXG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcclxuICAgIHNhdmVJdGVtKCdvcHBvc2l0ZVBsYXllcicsIG9wcG9zaXRlUGxheWVyKTtcclxuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICB9XHJcbiAgY291bnQrKztcclxuICBzYXZlSXRlbSgnY291bnQnLCBjb3VudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllclN3aXRjaDsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XHJcbmltcG9ydCAqIGFzIGRvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XHJcbmltcG9ydCBjaG9vc2VQbGF5ZXJJY29uIGZyb20gJy4vcGxheWVySWNvbnMnO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0sIHNhdmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuXHJcbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5hZGRGb3JtKCk7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc2V0OyIsImNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbmNvbnN0IHVwZGF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGNlbGxzQXJyYXkgPSBBcnJheS5mcm9tKGNlbGxzKTtcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSBjZWxsc0FycmF5Lm1hcChcbiAgICAoY2VsbCA9PiBjZWxsLmRhdGFzZXQuZGF0YXN5bWJvbCksXG4gICk7XG4gIHJldHVybiByZW5kZXJCb2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUJvYXJkQXJyYXk7IiwiaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuXHJcblxyXG5jb25zdCB3aW5uaW5nVmFsaWRhdGlvbiA9IChhcnJheSwgc3ltYm9sKSA9PiB7XHJcbiAgY29uc3QgcGxheWVyT25lID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJPbmUnKTtcclxuY29uc3QgcGxheWVyVHdvID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJUd28nKTtcclxuY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xyXG4gIGxldCByb3VuZFdvbiA9IGZhbHNlO1xyXG4gIGNvbnN0IHdpbm5pbmdDb25kaXRpb25zID0gW1xyXG4gICAgWzAsIDEsIDJdLFxyXG4gICAgWzMsIDQsIDVdLFxyXG4gICAgWzYsIDcsIDhdLFxyXG4gICAgWzAsIDMsIDZdLFxyXG4gICAgWzEsIDQsIDddLFxyXG4gICAgWzIsIDUsIDhdLFxyXG4gICAgWzAsIDQsIDhdLFxyXG4gICAgWzIsIDQsIDZdLFxyXG4gIF07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDc7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgd2luQ29uZGl0aW9uID0gd2lubmluZ0NvbmRpdGlvbnNbaV07XHJcbiAgICBjb25zdCBhID0gYXJyYXlbd2luQ29uZGl0aW9uWzBdXTtcclxuICAgIGNvbnN0IGIgPSBhcnJheVt3aW5Db25kaXRpb25bMV1dO1xyXG4gICAgY29uc3QgYyA9IGFycmF5W3dpbkNvbmRpdGlvblsyXV07XHJcbiAgICBjb25zdCBhYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMF19YCk7XHJcbiAgICBjb25zdCBiYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMV19YCk7XHJcbiAgICBjb25zdCBjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMl19YCk7XHJcbiAgICBpZiAoYSA9PT0gc3ltYm9sICYmIGIgPT09IHN5bWJvbCAmJiBjID09PSBzeW1ib2wpIHtcclxuICAgICAgcm91bmRXb24gPSB0cnVlO1xyXG4gICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyT25lKSB7XHJcbiAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllck9uZS5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJPbmUuYmFja2dyb3VuZDtcclxuICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyT25lLmJhY2tncm91bmQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllclR3by5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJUd28uYmFja2dyb3VuZDtcclxuICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyVHdvLmJhY2tncm91bmQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJvdW5kV29uO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcm91bmRXb247XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aW5uaW5nVmFsaWRhdGlvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tYWluLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
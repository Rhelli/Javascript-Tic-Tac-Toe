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
/* harmony export */   "playerNumber": () => /* binding */ playerNumber
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
  if (_domElements__WEBPACK_IMPORTED_MODULE_1__.roundCounter.innerHTML === 'No Turns Yet') {
    _domElements__WEBPACK_IMPORTED_MODULE_1__.roundCounter.innerHTML = 'Turn 1';
  } else {
    _domElements__WEBPACK_IMPORTED_MODULE_1__.roundCounter.innerHTML = `Turn ${element}.`;
  }
  _domElements__WEBPACK_IMPORTED_MODULE_1__.playerTurnIndicator.innerHTML = `It is ${_game__WEBPACK_IMPORTED_MODULE_0__.default.oppositePlayer.name}'s turn`;
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





const game = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_3__.initButton.addEventListener('click', _gameInit__WEBPACK_IMPORTED_MODULE_2__.default);
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







// if players dont have a name
// if icons havent been selected
// then 27 till 35
// we could return an Array with two player objects
//  and export that into clickCell

// const renderPlayer = () => {
//   playerOne = player(domElements.namePlayerOne.value, 'X', 1, Icons[0], 'rgba(144, 164, 174, 0.8');
//   playerTwo = player(domElements.namePlayerTwo.value, 'O', 2, Icons[1], 'rgba(241, 196, 15, 0.8');
//   currentPlayer = playerOne;
//   oppositePlayer = playerTwo;

//   // return [
//   //   playerOne, playerTwo,
//   //   currentPlayer, oppositePlayer,
//   // ];

//   return true

// };

// const isGameReady = () => {
//   if (domElements.namePlayerOne.value === '' || domElements.namePlayerTwo.value === '') {
//     alert("Please add both players' names to continue.");
//     return false;
//   }
//   if (Icons.length < 2) {
//     alert('Please select a character for both players to continue.');
//     return false;
//   }
//   return true;
// };

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
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.displayIcon(playerOne.img, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.paintBackground(playerOne.background, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.displayIcon(playerTwo.img, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = `It's ${currentPlayer.name}'s turn`;
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.removeForm();
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('playerOne', playerOne);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('playerTwo', playerTwo);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('currentPlayer', currentPlayer);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveItem)('oppositePlayer', oppositePlayer);
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


const Icons = [];
let numberOfPlayer = 1;
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







let currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('currentPlayer');
let oppositePlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('oppositePlayer');
let playerOne = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('playerOne');
let playerTwo = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('playerTwo');
let count = 1;

const playerSwitch = () => {
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
  } else if (oppositePlayer.number === 1) {
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



 


const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveItem)('currentPlayer');

const reset = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.cells.forEach((element) => {
    element.addEventListener('click', _clickCell__WEBPACK_IMPORTED_MODULE_2__.default, false);
    element.innerHTML = '';
    element.dataset.datasymbol = '';
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.initialBackground(element);
    _game__WEBPACK_IMPORTED_MODULE_1__.default.count = 1;
    _domElements__WEBPACK_IMPORTED_MODULE_0__.roundCounter.innerHTML = 'Turn 1.';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon.innerHTML = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon.innerHTML = '';
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.disableBackground(currentPlayer.background, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.disableBackground(currentPlayer.background, _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.allIcons.forEach((element) => {
      element.addEventListener('click', _playerIcons__WEBPACK_IMPORTED_MODULE_4__.default, false);
    });
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.addForm();
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



const playerOne = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.retrieveItem)('playerOne');
const playerTwo = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.retrieveItem)('playerTwo');
const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.retrieveItem)('currentPlayer');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9wbGF5ZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyU3dpdGNoLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvdXBkYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3dpbm5pbmdWYWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQyxzREFBSSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnlDO0FBQ25CO0FBQ2M7QUFDTTs7QUFFOUM7QUFDQSx3QkFBd0IsMkRBQVk7QUFDcEMsTUFBTSw2REFBK0IsV0FBVyw2REFBK0I7QUFDL0U7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakIwQjtBQUNtQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7OztBQzVCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUTDtBQUNvQjs7QUFFOUMsa0JBQWtCLDJEQUFZO0FBQzlCLGtCQUFrQiwyREFBWTtBQUM5QixzQkFBc0IsMkRBQVk7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0QsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEU7Ozs7OztVQzdDaEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcblxyXG5nYW1lKCk7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL2lmQ2VsbEVtcHR5JztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgY2xpY2tDZWxsID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xyXG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlID09PSAnJyAmJiBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlID09PSAnJykge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzLlwiKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBFbnRlciBBbGwgUGxheWVyJ3MgTmFtZXNcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHN5bWJvbCA9IGN1cnJlbnRQbGF5ZXIuc3ltYm9sO1xyXG4gICAgY29uc3QgaW1nID0gY3VycmVudFBsYXllci5pbWc7XHJcbiAgICBpZkNlbGxFbXB0eShldmVudCwgc3ltYm9sLCBpbWcpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIHdlIG5lZWQgdG8gY3JlYXRlIGEgY3VycmVudC9vcHBvc2l0ZSBwbGF5ZXIgdXBkYXRlIHN0YXRlIGZ1bmN0aW9uXHJcbi8vIHNvIHdlIGNhbiBwYXNzIHRoYXQgdmFsdWUgdG8gbGluZSAxMC8xMVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpY2tDZWxsO1xyXG4iLCJjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcclxuY29uc3QgbmFtZVBsYXllclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHdvJyk7XHJcbmNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1pdGVtJyk7XHJcbmNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcclxuY29uc3Qgcm91bmRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tY291bnRlcicpO1xyXG5jb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xyXG5jb25zdCBwbGF5ZXJUd29JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllclR3bycpO1xyXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbmNvbnN0IGNhbGwgPSAoKSA9PiBjb25zb2xlLmxvZyhhbGxJY29ucyk7XHJcbmNvbnN0IGluaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRHYW1lQnV0dG9uJyk7XHJcblxyXG5jb25zdCBjb3VudCA9IDE7XHJcbmxldCBwbGF5ZXJPbmU7XHJcbmxldCBwbGF5ZXJUd287XHJcblxyXG5jb25zdCBwbGF5ZXJOdW1iZXIgPSAxO1xyXG5cclxuY29uc3QgbnVtYmVyT2ZQbGF5ZXJzID0gMTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgY2FsbCxcclxuICBhbGxJY29ucyxcclxuICBuYW1lUGxheWVyT25lLFxyXG4gIG5hbWVQbGF5ZXJUd28sXHJcbiAgcGxheWVyVHVybkluZGljYXRvcixcclxuICByb3VuZENvdW50ZXIsXHJcbiAgcGxheWVyT25lSWNvbixcclxuICBwbGF5ZXJUd29JY29uLFxyXG4gIGNlbGxzLFxyXG4gIGluaXRCdXR0b24sXHJcbiAgY291bnQsXHJcbiAgcGxheWVyT25lLFxyXG4gIHBsYXllclR3byxcclxuICBwbGF5ZXJOdW1iZXIsXHJcbn07IiwiaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcblxyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJyk7XHJcbmNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7XHJcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5jb25zdCBhZGRGb3JtID0gKCkgPT4ge1xyXG4gIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufTtcclxuY29uc3QgZGlzcGxheUljb24gPSAoaWNvbiwgY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltZ0VsZW1lbnQuc3JjID0gaWNvbjtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XHJcbn07XHJcbmNvbnN0IHBhaW50QmFja2dyb3VuZCA9IChjb2xvciwgZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xyXG59O1xyXG5jb25zdCBkaXNhYmxlQmFja2dyb3VuZCA9IChjb2xvciwgZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNSknO1xyXG59O1xyXG5jb25zdCBpbml0aWFsQmFja2dyb3VuZCA9IChlbGVtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcclxufTtcclxuY29uc3QgZGlzcGxheVJvdW5kcyA9IChlbGVtZW50KSA9PiB7XHJcbiAgaWYgKGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPT09ICdObyBUdXJucyBZZXQnKSB7XHJcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSBgVHVybiAke2VsZW1lbnR9LmA7XHJcbiAgfVxyXG4gIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0IGlzICR7Z2FtZS5vcHBvc2l0ZVBsYXllci5uYW1lfSdzIHR1cm5gO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBhZGRGb3JtLFxyXG4gIGluaXRpYWxCYWNrZ3JvdW5kLFxyXG4gIHJlbW92ZUZvcm0sXHJcbiAgZGlzcGxheVJvdW5kcyxcclxuICAvLyBwbGF5ZXJUdXJuSW5kaWNhdG9yLCB3aHkgP1xyXG4gIGRpc3BsYXlJY29uLFxyXG4gIHBhaW50QmFja2dyb3VuZCxcclxuICBkaXNhYmxlQmFja2dyb3VuZCxcclxufTtcclxuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCBwbGF5ZXJJY29ucyBmcm9tICcuL3BsYXllckljb25zJztcclxuaW1wb3J0IGdhbWVJbml0IGZyb20gJy4vZ2FtZUluaXQnO1xyXG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuXHJcbmNvbnN0IGdhbWUgPSAoKSA9PiB7XHJcbiAgZG9tRWxlbWVudHMuaW5pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWVJbml0KTtcclxuICBkb21FbGVtZW50cy5hbGxJY29ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBsYXllckljb25zKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZ2FtZWJvYXJkKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyBJY29ucyB9IGZyb20gJy4vcGxheWVySWNvbnMnO1xyXG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgKiBhcyBkb21NYW5pcHVsYXRpb24gZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xyXG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgc2F2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG4vLyBpZiBwbGF5ZXJzIGRvbnQgaGF2ZSBhIG5hbWVcclxuLy8gaWYgaWNvbnMgaGF2ZW50IGJlZW4gc2VsZWN0ZWRcclxuLy8gdGhlbiAyNyB0aWxsIDM1XHJcbi8vIHdlIGNvdWxkIHJldHVybiBhbiBBcnJheSB3aXRoIHR3byBwbGF5ZXIgb2JqZWN0c1xyXG4vLyAgYW5kIGV4cG9ydCB0aGF0IGludG8gY2xpY2tDZWxsXHJcblxyXG4vLyBjb25zdCByZW5kZXJQbGF5ZXIgPSAoKSA9PiB7XHJcbi8vICAgcGxheWVyT25lID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUsICdYJywgMSwgSWNvbnNbMF0sICdyZ2JhKDE0NCwgMTY0LCAxNzQsIDAuOCcpO1xyXG4vLyAgIHBsYXllclR3byA9IHBsYXllcihkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlLCAnTycsIDIsIEljb25zWzFdLCAncmdiYSgyNDEsIDE5NiwgMTUsIDAuOCcpO1xyXG4vLyAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbi8vICAgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXJUd287XHJcblxyXG4vLyAgIC8vIHJldHVybiBbXHJcbi8vICAgLy8gICBwbGF5ZXJPbmUsIHBsYXllclR3byxcclxuLy8gICAvLyAgIGN1cnJlbnRQbGF5ZXIsIG9wcG9zaXRlUGxheWVyLFxyXG4vLyAgIC8vIF07XHJcblxyXG4vLyAgIHJldHVybiB0cnVlXHJcblxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgaXNHYW1lUmVhZHkgPSAoKSA9PiB7XHJcbi8vICAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnIHx8IGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XHJcbi8vICAgICBhbGVydChcIlBsZWFzZSBhZGQgYm90aCBwbGF5ZXJzJyBuYW1lcyB0byBjb250aW51ZS5cIik7XHJcbi8vICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgfVxyXG4vLyAgIGlmIChJY29ucy5sZW5ndGggPCAyKSB7XHJcbi8vICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIGNoYXJhY3RlciBmb3IgYm90aCBwbGF5ZXJzIHRvIGNvbnRpbnVlLicpO1xyXG4vLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdHJ1ZTtcclxuLy8gfTtcclxuXHJcbmNvbnN0IGdhbWVJbml0ID0gKCkgPT4ge1xyXG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlID09PSAnJyB8fCBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlID09PSAnJykge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgYWRkIGJvdGggcGxheWVycycgbmFtZXMgdG8gY29udGludWUuXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoSWNvbnMubGVuZ3RoIDwgMikge1xyXG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBjaGFyYWN0ZXIgZm9yIGJvdGggcGxheWVycyB0byBjb250aW51ZS4nKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgIT09ICcnICYmIEljb25zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgY29uc3QgcGxheWVyT25lID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUsICdYJywgMSwgSWNvbnNbMF0sICdyZ2JhKDE0NCwgMTY0LCAxNzQsIDAuOCcpO1xyXG4gICAgY29uc3QgcGxheWVyVHdvID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUsICdPJywgMiwgSWNvbnNbMV0sICdyZ2JhKDI0MSwgMTk2LCAxNSwgMC44Jyk7XHJcbiAgICBjb25zdCBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xyXG4gICAgY29uc3Qgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXJUd287XHJcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24ocGxheWVyT25lLmltZywgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XHJcbiAgICBkb21NYW5pcHVsYXRpb24ucGFpbnRCYWNrZ3JvdW5kKHBsYXllck9uZS5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihwbGF5ZXJUd28uaW1nLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0J3MgJHtjdXJyZW50UGxheWVyLm5hbWV9J3MgdHVybmA7XHJcbiAgICBkb21NYW5pcHVsYXRpb24ucmVtb3ZlRm9ybSgpO1xyXG4gICAgc2F2ZUl0ZW0oJ3BsYXllck9uZScsIHBsYXllck9uZSk7XHJcbiAgICBzYXZlSXRlbSgncGxheWVyVHdvJywgcGxheWVyVHdvKTtcclxuICAgIHNhdmVJdGVtKCdjdXJyZW50UGxheWVyJywgY3VycmVudFBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZUluaXQ7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCBjbGlja0NlbGwgZnJvbSAnLi9jbGlja0NlbGwnO1xyXG5pbXBvcnQgaWZDZWxsRW1wdHkgZnJvbSAnLi9pZkNlbGxFbXB0eSc7XHJcbmltcG9ydCByZXNldCBmcm9tICcuL3Jlc2V0JztcclxuaW1wb3J0IHdpbm5pbmdWYWxpZGF0aW9uIGZyb20gJy4vd2lubmluZ1ZhbGlkYXRpb25zJztcclxuaW1wb3J0IHVwZGF0ZUJvYXJkQXJyYXkgZnJvbSAnLi91cGRhdGVCb2FyZCc7XHJcbmltcG9ydCBwbGF5ZXJTd2l0Y2ggZnJvbSAnLi9wbGF5ZXJTd2l0Y2gnO1xyXG5cclxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gIGRvbUVsZW1lbnRzLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjbGlja0NlbGwoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDsiLCJpbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcclxuaW1wb3J0IHBsYXllclN3aXRjaCBmcm9tICcuL3BsYXllclN3aXRjaCc7XHJcblxyXG5jb25zdCBpZkNlbGxFbXB0eSA9IChldmVudCwgc3ltYm9sLCBpbWcpID0+IHtcclxuICBjb25zdCBpbWdFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nRS5zcmMgPSBpbWc7XHJcbiAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGF0YXN5bWJvbCA9IHN5bWJvbDtcclxuICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQoaW1nRSk7XHJcbiAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSk7XHJcbiAgcGxheWVyU3dpdGNoKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpZkNlbGxFbXB0eTsiLCJjb25zdCBzYXZlSXRlbSA9IChzdHJpbmcsIG9iamVjdCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdHJpbmcsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xufTtcblxuY29uc3QgcmV0cmlldmVJdGVtID0gKHN0cmluZykgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdHJpbmcpKTtcblxuZXhwb3J0IHsgc2F2ZUl0ZW0sIHJldHJpZXZlSXRlbSB9OyIsImNvbnN0IHBsYXllciA9IChuYW1lLCBzeW1ib2wsIHBsYXllck51bWJlciwgaW1nLCBiYWNrZ3JvdW5kKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBzeW1ib2wsXHJcbiAgICBwbGF5ZXJOdW1iZXIsXHJcbiAgICBpbWcsXHJcbiAgICBiYWNrZ3JvdW5kXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5cclxuY29uc3QgSWNvbnMgPSBbXTtcclxubGV0IG51bWJlck9mUGxheWVyID0gMTtcclxuY29uc3QgY2hvb3NlUGxheWVySWNvbiA9IChlbGVtZW50KSA9PiB7XHJcbiAgY29uc3QgY2hvc2VuSWNvbiA9IGVsZW1lbnQ7XHJcbiAgaWYgKG51bWJlck9mUGxheWVyID09PSAxKSB7XHJcbiAgICBpZiAoSWNvbnNbMF0pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcycpLmlkID0gJyc7XHJcbiAgICAgIEljb25zWzBdID0gY2hvc2VuSWNvbi5zcmM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBJY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcclxuICAgIH1cclxuICAgIGNob3Nlbkljb24uaWQgPSAnYXZvaWQtY2xpY2tzJztcclxuICAgIG51bWJlck9mUGxheWVyID0gMjtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKEljb25zWzFdKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MtcDInKS5pZCA9ICcnO1xyXG4gICAgICBJY29uc1sxXSA9IGNob3Nlbkljb24uc3JjO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgSWNvbnMucHVzaChjaG9zZW5JY29uLnNyYyk7XHJcbiAgICB9XHJcbiAgICBjaG9zZW5JY29uLmlkID0gJ2F2b2lkLWNsaWNrcy1wMic7XHJcbiAgICBudW1iZXJPZlBsYXllciA9IDE7XHJcbiAgfVxyXG4gIHJldHVybiB7IEljb25zIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaG9vc2VQbGF5ZXJJY29uO1xyXG5leHBvcnQgeyBJY29ucyB9OyIsImltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XHJcbmltcG9ydCByZXNldCBmcm9tICcuL3Jlc2V0JztcclxuaW1wb3J0IHdpbm5pbmdWYWxpZGF0aW9uIGZyb20gJy4vd2lubmluZ1ZhbGlkYXRpb25zJztcclxuaW1wb3J0IHVwZGF0ZUJvYXJkQXJyYXkgZnJvbSAnLi91cGRhdGVCb2FyZCc7XHJcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0sIHNhdmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxubGV0IGN1cnJlbnRQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInKTtcclxubGV0IG9wcG9zaXRlUGxheWVyID0gcmV0cmlldmVJdGVtKCdvcHBvc2l0ZVBsYXllcicpO1xyXG5sZXQgcGxheWVyT25lID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJPbmUnKTtcclxubGV0IHBsYXllclR3byA9IHJldHJpZXZlSXRlbSgncGxheWVyVHdvJyk7XHJcbmxldCBjb3VudCA9IDE7XHJcblxyXG5jb25zdCBwbGF5ZXJTd2l0Y2ggPSAoKSA9PiB7XHJcbiAgc3R5bGVzLmRpc3BsYXlSb3VuZHMoY291bnQgKyAxKTtcclxuXHJcbiAgaWYgKHdpbm5pbmdWYWxpZGF0aW9uKHVwZGF0ZUJvYXJkQXJyYXkoKSwgY3VycmVudFBsYXllci5zeW1ib2wpID09PSBmYWxzZSAmJiBjb3VudCA9PT0gOSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlTWF0Y2ggPSBjb25maXJtKFwiSXQncyBhIGRyYXchIFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/XCIpO1xyXG4gICAgICBpZiAocmVNYXRjaCkge1xyXG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnSG93IHNhZC4nKTtcclxuICAgICAgfVxyXG4gICAgfSwgNDUwKTtcclxuICB9IGVsc2UgaWYgKHdpbm5pbmdWYWxpZGF0aW9uKHVwZGF0ZUJvYXJkQXJyYXkoKSwgY3VycmVudFBsYXllci5zeW1ib2wpKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgcmVtYXRjaCA9IGNvbmZpcm0oXHJcbiAgICAgICAgYCR7Y3VycmVudFBsYXllci5uYW1lfSBoYXMgd29uLiBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP2AsXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZW1hdGNoID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzZXQoZG9tRWxlbWVudHMuY2VsbHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdMb3Nlci4nKTtcclxuICAgICAgfVxyXG4gICAgfSwgNDUwKTtcclxuICB9IGVsc2UgaWYgKG9wcG9zaXRlUGxheWVyLm51bWJlciA9PT0gMSkge1xyXG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XHJcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xyXG4gICAgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXJUd287XHJcbiAgICBzYXZlSXRlbSgnY3VycmVudFBsYXllcicsIGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgc2F2ZUl0ZW0oJ29wcG9zaXRlUGxheWVyJywgb3Bwb3NpdGVQbGF5ZXIpO1xyXG4gICAgc3R5bGVzLnBhaW50QmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUd287XHJcbiAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllck9uZTtcclxuICAgIHNhdmVJdGVtKCdjdXJyZW50UGxheWVyJywgY3VycmVudFBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XHJcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XHJcbiAgfVxyXG4gIGNvdW50Kys7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllclN3aXRjaDsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XHJcbmltcG9ydCAqIGFzIGRvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7IGltcG9ydCBjaG9vc2VQbGF5ZXJJY29uIGZyb20gJy4vcGxheWVySWNvbnMnO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG5jb25zdCBjdXJyZW50UGxheWVyID0gcmV0cmlldmVJdGVtKCdjdXJyZW50UGxheWVyJyk7XHJcblxyXG5jb25zdCByZXNldCA9ICgpID0+IHtcclxuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSk7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgZWxlbWVudC5kYXRhc2V0LmRhdGFzeW1ib2wgPSAnJztcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5pbml0aWFsQmFja2dyb3VuZChlbGVtZW50KTtcclxuICAgIGdhbWUuY291bnQgPSAxO1xyXG4gICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9ICdUdXJuIDEuJztcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XHJcbiAgICBkb21FbGVtZW50cy5hbGxJY29ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VQbGF5ZXJJY29uLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5hZGRGb3JtKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNldDsiLCJjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbmNvbnN0IHVwZGF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oY2VsbHMpO1xyXG4gIGNvbnN0IHJlbmRlckJvYXJkID0gY2VsbHNBcnJheS5tYXAoXHJcbiAgICAoY2VsbCA9PiBjZWxsLmRhdGFzZXQuZGF0YXN5bWJvbCksXHJcbiAgKTtcclxuICByZXR1cm4gcmVuZGVyQm9hcmQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVCb2FyZEFycmF5OyIsImltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuXHJcbmNvbnN0IHBsYXllck9uZSA9IHJldHJpZXZlSXRlbSgncGxheWVyT25lJyk7XHJcbmNvbnN0IHBsYXllclR3byA9IHJldHJpZXZlSXRlbSgncGxheWVyVHdvJyk7XHJcbmNvbnN0IGN1cnJlbnRQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInKTtcclxuXHJcbmNvbnN0IHdpbm5pbmdWYWxpZGF0aW9uID0gKGFycmF5LCBzeW1ib2wpID0+IHtcclxuICBsZXQgcm91bmRXb24gPSBmYWxzZTtcclxuICBjb25zdCB3aW5uaW5nQ29uZGl0aW9ucyA9IFtcclxuICAgIFswLCAxLCAyXSxcclxuICAgIFszLCA0LCA1XSxcclxuICAgIFs2LCA3LCA4XSxcclxuICAgIFswLCAzLCA2XSxcclxuICAgIFsxLCA0LCA3XSxcclxuICAgIFsyLCA1LCA4XSxcclxuICAgIFswLCA0LCA4XSxcclxuICAgIFsyLCA0LCA2XSxcclxuICBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdpbkNvbmRpdGlvbiA9IHdpbm5pbmdDb25kaXRpb25zW2ldO1xyXG4gICAgY29uc3QgYSA9IGFycmF5W3dpbkNvbmRpdGlvblswXV07XHJcbiAgICBjb25zdCBiID0gYXJyYXlbd2luQ29uZGl0aW9uWzFdXTtcclxuICAgIGNvbnN0IGMgPSBhcnJheVt3aW5Db25kaXRpb25bMl1dO1xyXG4gICAgY29uc3QgYWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzBdfWApO1xyXG4gICAgY29uc3QgYmIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzFdfWApO1xyXG4gICAgY29uc3QgY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzJdfWApO1xyXG4gICAgaWYgKGEgPT09IHN5bWJvbCAmJiBiID09PSBzeW1ib2wgJiYgYyA9PT0gc3ltYm9sKSB7XHJcbiAgICAgIHJvdW5kV29uID0gdHJ1ZTtcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllck9uZSkge1xyXG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJPbmUuYmFja2dyb3VuZDtcclxuICAgICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyT25lLmJhY2tncm91bmQ7XHJcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllck9uZS5iYWNrZ3JvdW5kO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJUd28uYmFja2dyb3VuZDtcclxuICAgICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyVHdvLmJhY2tncm91bmQ7XHJcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllclR3by5iYWNrZ3JvdW5kO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByb3VuZFdvbjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJvdW5kV29uO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2lubmluZ1ZhbGlkYXRpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbWFpbi5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
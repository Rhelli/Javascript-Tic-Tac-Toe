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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9wbGF5ZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyU3dpdGNoLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvdXBkYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3dpbm5pbmdWYWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQyxzREFBSSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnlDO0FBQ25CO0FBQ2M7QUFDTTs7QUFFOUM7QUFDQSx3QkFBd0IsMkRBQVk7QUFDcEMsTUFBTSw2REFBK0IsV0FBVyw2REFBK0I7QUFDL0U7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCMEI7QUFDbUI7QUFDQzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LEtBQUssRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RMO0FBQ29COztBQUU5QyxrQkFBa0IsMkRBQVk7QUFDOUIsa0JBQWtCLDJEQUFZO0FBQzlCLHNCQUFzQiwyREFBWTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsZ0JBQWdCO0FBQzNELDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRTs7Ozs7O1VDN0NoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lIGZyb20gJy4vbW9kdWxlcy9nYW1lJztcclxuXHJcbmdhbWUoKTsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IGlmQ2VsbEVtcHR5IGZyb20gJy4vaWZDZWxsRW1wdHknO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG5jb25zdCBjbGlja0NlbGwgPSAoZXZlbnQpID0+IHtcclxuICBjb25zdCBjdXJyZW50UGxheWVyID0gcmV0cmlldmVJdGVtKCdjdXJyZW50UGxheWVyJyk7XHJcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XHJcbiAgICBhbGVydChcIlBsZWFzZSBFbnRlciBBbGwgUGxheWVyJ3MgTmFtZXMuXCIpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIEVudGVyIEFsbCBQbGF5ZXIncyBOYW1lc1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc3ltYm9sID0gY3VycmVudFBsYXllci5zeW1ib2w7XHJcbiAgICBjb25zdCBpbWcgPSBjdXJyZW50UGxheWVyLmltZztcclxuICAgIGlmQ2VsbEVtcHR5KGV2ZW50LCBzeW1ib2wsIGltZyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gd2UgbmVlZCB0byBjcmVhdGUgYSBjdXJyZW50L29wcG9zaXRlIHBsYXllciB1cGRhdGUgc3RhdGUgZnVuY3Rpb25cclxuLy8gc28gd2UgY2FuIHBhc3MgdGhhdCB2YWx1ZSB0byBsaW5lIDEwLzExXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGlja0NlbGw7XHJcbiIsImNvbnN0IG5hbWVQbGF5ZXJPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW9uZScpO1xyXG5jb25zdCBuYW1lUGxheWVyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10d28nKTtcclxuY29uc3QgYWxsSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLWl0ZW0nKTtcclxuY29uc3QgcGxheWVyVHVybkluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHVybicpO1xyXG5jb25zdCByb3VuZENvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybi1jb3VudGVyJyk7XHJcbmNvbnN0IHBsYXllck9uZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyT25lJyk7XHJcbmNvbnN0IHBsYXllclR3b0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyVHdvJyk7XHJcbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuY29uc3QgY2FsbCA9ICgpID0+IGNvbnNvbGUubG9nKGFsbEljb25zKTtcclxuY29uc3QgaW5pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEdhbWVCdXR0b24nKTtcclxuXHJcbmNvbnN0IGNvdW50ID0gMTtcclxubGV0IHBsYXllck9uZTtcclxubGV0IHBsYXllclR3bztcclxuXHJcbmNvbnN0IHBsYXllck51bWJlciA9IDE7XHJcblxyXG5jb25zdCBudW1iZXJPZlBsYXllcnMgPSAxO1xyXG5cclxuZXhwb3J0IHtcclxuICBjYWxsLFxyXG4gIGFsbEljb25zLFxyXG4gIG5hbWVQbGF5ZXJPbmUsXHJcbiAgbmFtZVBsYXllclR3byxcclxuICBwbGF5ZXJUdXJuSW5kaWNhdG9yLFxyXG4gIHJvdW5kQ291bnRlcixcclxuICBwbGF5ZXJPbmVJY29uLFxyXG4gIHBsYXllclR3b0ljb24sXHJcbiAgY2VsbHMsXHJcbiAgaW5pdEJ1dHRvbixcclxuICBjb3VudCxcclxuICBwbGF5ZXJPbmUsXHJcbiAgcGxheWVyVHdvLFxyXG4gIHBsYXllck51bWJlcixcclxufTsiLCJpbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5jb25zdCByZW1vdmVGb3JtID0gKCkgPT4ge1xyXG4gIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuY29uc3QgYWRkRm9ybSA9ICgpID0+IHtcclxuICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlJY29uID0gKGljb24sIGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWdFbGVtZW50LnNyYyA9IGljb247XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xyXG59O1xyXG5jb25zdCBwYWludEJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxufTtcclxuY29uc3QgZGlzYWJsZUJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgyNTYsIDI1NiwgMjU2LCAwLjUpJztcclxufTtcclxuY29uc3QgaW5pdGlhbEJhY2tncm91bmQgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlSb3VuZHMgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IG9wcG9zaXRlUGxheWVyID0gcmV0cmlldmVJdGVtKCdvcHBvc2l0ZVBsYXllcicpO1xyXG4gIGlmIChkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID09PSAnTm8gVHVybnMgWWV0Jykge1xyXG4gICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9ICdUdXJuIDEnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gYFR1cm4gJHtlbGVtZW50fS5gO1xyXG4gIH1cclxuICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCBpcyAke29wcG9zaXRlUGxheWVyLm5hbWV9J3MgdHVybmA7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGFkZEZvcm0sXHJcbiAgaW5pdGlhbEJhY2tncm91bmQsXHJcbiAgcmVtb3ZlRm9ybSxcclxuICBkaXNwbGF5Um91bmRzLFxyXG4gIC8vIHBsYXllclR1cm5JbmRpY2F0b3IsIHdoeSA/XHJcbiAgZGlzcGxheUljb24sXHJcbiAgcGFpbnRCYWNrZ3JvdW5kLFxyXG4gIGRpc2FibGVCYWNrZ3JvdW5kLFxyXG59O1xyXG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHBsYXllckljb25zIGZyb20gJy4vcGxheWVySWNvbnMnO1xyXG5pbXBvcnQgZ2FtZUluaXQgZnJvbSAnLi9nYW1lSW5pdCc7XHJcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5cclxuY29uc3QgZ2FtZSA9ICgpID0+IHtcclxuICBkb21FbGVtZW50cy5pbml0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZUluaXQpO1xyXG4gIGRvbUVsZW1lbnRzLmFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGxheWVySWNvbnMoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBnYW1lYm9hcmQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWU7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IEljb25zIH0gZnJvbSAnLi9wbGF5ZXJJY29ucyc7XHJcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCAqIGFzIGRvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBzYXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuXHJcbi8vIGlmIHBsYXllcnMgZG9udCBoYXZlIGEgbmFtZVxyXG4vLyBpZiBpY29ucyBoYXZlbnQgYmVlbiBzZWxlY3RlZFxyXG4vLyB0aGVuIDI3IHRpbGwgMzVcclxuLy8gd2UgY291bGQgcmV0dXJuIGFuIEFycmF5IHdpdGggdHdvIHBsYXllciBvYmplY3RzXHJcbi8vICBhbmQgZXhwb3J0IHRoYXQgaW50byBjbGlja0NlbGxcclxuXHJcbi8vIGNvbnN0IHJlbmRlclBsYXllciA9ICgpID0+IHtcclxuLy8gICBwbGF5ZXJPbmUgPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSwgJ1gnLCAxLCBJY29uc1swXSwgJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44Jyk7XHJcbi8vICAgcGxheWVyVHdvID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUsICdPJywgMiwgSWNvbnNbMV0sICdyZ2JhKDI0MSwgMTk2LCAxNSwgMC44Jyk7XHJcbi8vICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcclxuLy8gICBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuXHJcbi8vICAgLy8gcmV0dXJuIFtcclxuLy8gICAvLyAgIHBsYXllck9uZSwgcGxheWVyVHdvLFxyXG4vLyAgIC8vICAgY3VycmVudFBsYXllciwgb3Bwb3NpdGVQbGF5ZXIsXHJcbi8vICAgLy8gXTtcclxuXHJcbi8vICAgcmV0dXJuIHRydWVcclxuXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBpc0dhbWVSZWFkeSA9ICgpID0+IHtcclxuLy8gICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgfHwgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcclxuLy8gICAgIGFsZXJ0KFwiUGxlYXNlIGFkZCBib3RoIHBsYXllcnMnIG5hbWVzIHRvIGNvbnRpbnVlLlwiKTtcclxuLy8gICAgIHJldHVybiBmYWxzZTtcclxuLy8gICB9XHJcbi8vICAgaWYgKEljb25zLmxlbmd0aCA8IDIpIHtcclxuLy8gICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgY2hhcmFjdGVyIGZvciBib3RoIHBsYXllcnMgdG8gY29udGludWUuJyk7XHJcbi8vICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiB0cnVlO1xyXG4vLyB9O1xyXG5cclxuY29uc3QgZ2FtZUluaXQgPSAoKSA9PiB7XHJcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnIHx8IGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XHJcbiAgICBhbGVydChcIlBsZWFzZSBhZGQgYm90aCBwbGF5ZXJzJyBuYW1lcyB0byBjb250aW51ZS5cIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChJY29ucy5sZW5ndGggPCAyKSB7XHJcbiAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIGNoYXJhY3RlciBmb3IgYm90aCBwbGF5ZXJzIHRvIGNvbnRpbnVlLicpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSAhPT0gJycgJiYgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSAhPT0gJycgJiYgSWNvbnMubGVuZ3RoID09PSAyKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSwgJ1gnLCAxLCBJY29uc1swXSwgJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44Jyk7XHJcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSwgJ08nLCAyLCBJY29uc1sxXSwgJ3JnYmEoMjQxLCAxOTYsIDE1LCAwLjgnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbiAgICBjb25zdCBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihwbGF5ZXJPbmUuaW1nLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5wYWludEJhY2tncm91bmQocGxheWVyT25lLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc3BsYXlJY29uKHBsYXllclR3by5pbWcsIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xyXG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSBgSXQncyAke2N1cnJlbnRQbGF5ZXIubmFtZX0ncyB0dXJuYDtcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5yZW1vdmVGb3JtKCk7XHJcbiAgICBzYXZlSXRlbSgncGxheWVyT25lJywgcGxheWVyT25lKTtcclxuICAgIHNhdmVJdGVtKCdwbGF5ZXJUd28nLCBwbGF5ZXJUd28pO1xyXG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcclxuICAgIHNhdmVJdGVtKCdvcHBvc2l0ZVBsYXllcicsIG9wcG9zaXRlUGxheWVyKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lSW5pdDsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XHJcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL2lmQ2VsbEVtcHR5JztcclxuaW1wb3J0IHJlc2V0IGZyb20gJy4vcmVzZXQnO1xyXG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi93aW5uaW5nVmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgdXBkYXRlQm9hcmRBcnJheSBmcm9tICcuL3VwZGF0ZUJvYXJkJztcclxuaW1wb3J0IHBsYXllclN3aXRjaCBmcm9tICcuL3BsYXllclN3aXRjaCc7XHJcblxyXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgZG9tRWxlbWVudHMuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNsaWNrQ2VsbChldmVudCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkOyIsImltcG9ydCBjbGlja0NlbGwgZnJvbSAnLi9jbGlja0NlbGwnO1xyXG5pbXBvcnQgcGxheWVyU3dpdGNoIGZyb20gJy4vcGxheWVyU3dpdGNoJztcclxuXHJcbmNvbnN0IGlmQ2VsbEVtcHR5ID0gKGV2ZW50LCBzeW1ib2wsIGltZykgPT4ge1xyXG4gIGNvbnN0IGltZ0UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWdFLnNyYyA9IGltZztcclxuICBldmVudC50YXJnZXQuZGF0YXNldC5kYXRhc3ltYm9sID0gc3ltYm9sO1xyXG4gIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChpbWdFKTtcclxuICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcclxuICBwbGF5ZXJTd2l0Y2goKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlmQ2VsbEVtcHR5OyIsImNvbnN0IHNhdmVJdGVtID0gKHN0cmluZywgb2JqZWN0KSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0cmluZywgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG59O1xuXG5jb25zdCByZXRyaWV2ZUl0ZW0gPSAoc3RyaW5nKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0cmluZykpO1xuXG5leHBvcnQgeyBzYXZlSXRlbSwgcmV0cmlldmVJdGVtIH07IiwiY29uc3QgcGxheWVyID0gKG5hbWUsIHN5bWJvbCwgcGxheWVyTnVtYmVyLCBpbWcsIGJhY2tncm91bmQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIHN5bWJvbCxcclxuICAgIHBsYXllck51bWJlcixcclxuICAgIGltZyxcclxuICAgIGJhY2tncm91bmRcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcblxyXG5jb25zdCBJY29ucyA9IFtdO1xyXG5sZXQgbnVtYmVyT2ZQbGF5ZXIgPSAxO1xyXG5jb25zdCBjaG9vc2VQbGF5ZXJJY29uID0gKGVsZW1lbnQpID0+IHtcclxuICBjb25zdCBjaG9zZW5JY29uID0gZWxlbWVudDtcclxuICBpZiAobnVtYmVyT2ZQbGF5ZXIgPT09IDEpIHtcclxuICAgIGlmIChJY29uc1swXSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzJykuaWQgPSAnJztcclxuICAgICAgSWNvbnNbMF0gPSBjaG9zZW5JY29uLnNyYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEljb25zLnB1c2goY2hvc2VuSWNvbi5zcmMpO1xyXG4gICAgfVxyXG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xyXG4gICAgbnVtYmVyT2ZQbGF5ZXIgPSAyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoSWNvbnNbMV0pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcy1wMicpLmlkID0gJyc7XHJcbiAgICAgIEljb25zWzFdID0gY2hvc2VuSWNvbi5zcmM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBJY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcclxuICAgIH1cclxuICAgIGNob3Nlbkljb24uaWQgPSAnYXZvaWQtY2xpY2tzLXAyJztcclxuICAgIG51bWJlck9mUGxheWVyID0gMTtcclxuICB9XHJcbiAgcmV0dXJuIHsgSWNvbnMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNob29zZVBsYXllckljb247XHJcbmV4cG9ydCB7IEljb25zIH07IiwiaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcclxuaW1wb3J0IHJlc2V0IGZyb20gJy4vcmVzZXQnO1xyXG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi93aW5uaW5nVmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgdXBkYXRlQm9hcmRBcnJheSBmcm9tICcuL3VwZGF0ZUJvYXJkJztcclxuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSwgc2F2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG5sZXQgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xyXG5sZXQgb3Bwb3NpdGVQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ29wcG9zaXRlUGxheWVyJyk7XHJcbmxldCBwbGF5ZXJPbmUgPSByZXRyaWV2ZUl0ZW0oJ3BsYXllck9uZScpO1xyXG5sZXQgcGxheWVyVHdvID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJUd28nKTtcclxubGV0IGNvdW50ID0gMTtcclxuXHJcbmNvbnN0IHBsYXllclN3aXRjaCA9ICgpID0+IHtcclxuICBzdHlsZXMuZGlzcGxheVJvdW5kcyhjb3VudCArIDEpO1xyXG5cclxuICBpZiAod2lubmluZ1ZhbGlkYXRpb24odXBkYXRlQm9hcmRBcnJheSgpLCBjdXJyZW50UGxheWVyLnN5bWJvbCkgPT09IGZhbHNlICYmIGNvdW50ID09PSA5KSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgcmVNYXRjaCA9IGNvbmZpcm0oXCJJdCdzIGEgZHJhdyEgV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9cIik7XHJcbiAgICAgIGlmIChyZU1hdGNoKSB7XHJcbiAgICAgICAgcmVzZXQoZG9tRWxlbWVudHMuY2VsbHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdIb3cgc2FkLicpO1xyXG4gICAgICB9XHJcbiAgICB9LCA0NTApO1xyXG4gIH0gZWxzZSBpZiAod2lubmluZ1ZhbGlkYXRpb24odXBkYXRlQm9hcmRBcnJheSgpLCBjdXJyZW50UGxheWVyLnN5bWJvbCkpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCByZW1hdGNoID0gY29uZmlybShcclxuICAgICAgICBgJHtjdXJyZW50UGxheWVyLm5hbWV9IGhhcyB3b24uIFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/YCxcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlbWF0Y2ggPT09IHRydWUpIHtcclxuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0xvc2VyLicpO1xyXG4gICAgICB9XHJcbiAgICB9LCA0NTApO1xyXG4gIH0gZWxzZSBpZiAob3Bwb3NpdGVQbGF5ZXIubnVtYmVyID09PSAxKSB7XHJcbiAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbiAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuICAgIHNhdmVJdGVtKCdjdXJyZW50UGxheWVyJywgY3VycmVudFBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XHJcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllclR3bztcclxuICAgIG9wcG9zaXRlUGxheWVyID0gcGxheWVyT25lO1xyXG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcclxuICAgIHNhdmVJdGVtKCdvcHBvc2l0ZVBsYXllcicsIG9wcG9zaXRlUGxheWVyKTtcclxuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICB9XHJcbiAgY291bnQrKztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyU3dpdGNoOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcclxuaW1wb3J0ICogYXMgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJzsgaW1wb3J0IGNob29zZVBsYXllckljb24gZnJvbSAnLi9wbGF5ZXJJY29ucyc7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuXHJcbmNvbnN0IGN1cnJlbnRQbGF5ZXIgPSByZXRyaWV2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInKTtcclxuXHJcbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gIGRvbUVsZW1lbnRzLmNlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBlbGVtZW50LmRhdGFzZXQuZGF0YXN5bWJvbCA9ICcnO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmluaXRpYWxCYWNrZ3JvdW5kKGVsZW1lbnQpO1xyXG4gICAgZ2FtZS5jb3VudCA9IDE7XHJcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMS4nO1xyXG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XHJcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzYWJsZUJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGRvbUVsZW1lbnRzLmFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZVBsYXllckljb24sIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmFkZEZvcm0oKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc2V0OyIsImNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcclxuICBjb25zdCBjZWxsc0FycmF5ID0gQXJyYXkuZnJvbShjZWxscyk7XHJcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSBjZWxsc0FycmF5Lm1hcChcclxuICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcclxuICApO1xyXG4gIHJldHVybiByZW5kZXJCb2FyZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUJvYXJkQXJyYXk7IiwiaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgcGxheWVyT25lID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJPbmUnKTtcclxuY29uc3QgcGxheWVyVHdvID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJUd28nKTtcclxuY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpO1xyXG5cclxuY29uc3Qgd2lubmluZ1ZhbGlkYXRpb24gPSAoYXJyYXksIHN5bWJvbCkgPT4ge1xyXG4gIGxldCByb3VuZFdvbiA9IGZhbHNlO1xyXG4gIGNvbnN0IHdpbm5pbmdDb25kaXRpb25zID0gW1xyXG4gICAgWzAsIDEsIDJdLFxyXG4gICAgWzMsIDQsIDVdLFxyXG4gICAgWzYsIDcsIDhdLFxyXG4gICAgWzAsIDMsIDZdLFxyXG4gICAgWzEsIDQsIDddLFxyXG4gICAgWzIsIDUsIDhdLFxyXG4gICAgWzAsIDQsIDhdLFxyXG4gICAgWzIsIDQsIDZdLFxyXG4gIF07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDc7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgd2luQ29uZGl0aW9uID0gd2lubmluZ0NvbmRpdGlvbnNbaV07XHJcbiAgICBjb25zdCBhID0gYXJyYXlbd2luQ29uZGl0aW9uWzBdXTtcclxuICAgIGNvbnN0IGIgPSBhcnJheVt3aW5Db25kaXRpb25bMV1dO1xyXG4gICAgY29uc3QgYyA9IGFycmF5W3dpbkNvbmRpdGlvblsyXV07XHJcbiAgICBjb25zdCBhYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMF19YCk7XHJcbiAgICBjb25zdCBiYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMV19YCk7XHJcbiAgICBjb25zdCBjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMl19YCk7XHJcbiAgICBpZiAoYSA9PT0gc3ltYm9sICYmIGIgPT09IHN5bWJvbCAmJiBjID09PSBzeW1ib2wpIHtcclxuICAgICAgcm91bmRXb24gPSB0cnVlO1xyXG4gICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyT25lKSB7XHJcbiAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllck9uZS5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJPbmUuYmFja2dyb3VuZDtcclxuICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyT25lLmJhY2tncm91bmQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllclR3by5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJUd28uYmFja2dyb3VuZDtcclxuICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyVHdvLmJhY2tncm91bmQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJvdW5kV29uO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcm91bmRXb247XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aW5uaW5nVmFsaWRhdGlvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tYWluLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
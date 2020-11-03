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




const clickCell = (event) => {
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value === '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value === '') {
    alert("Please Enter All Player's Names.");
    throw new Error("Please Enter All Player's Names");
  } else {
    const symbol = _game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getSymbol();
    const img = _game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getImg();
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
  _domElements__WEBPACK_IMPORTED_MODULE_1__.playerTurnIndicator.innerHTML = `It is ${_game__WEBPACK_IMPORTED_MODULE_0__.default.oppositePlayer.getName()}'s turn`;
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






let playerOne;
let playerTwo;
let currentPlayer;
let oppositePlayer;

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
  console.log('sup perro');
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value === '' || _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value === '') {
    alert("Please add both players' names to continue.");
    return false;
  }
  if (_playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons.length < 2) {
    alert('Please select a character for both players to continue.');
    return false;
  }
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value !== '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value !== '' && _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons.length === 2) {
    playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_4__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value, 'X', 1, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons[0], 'rgba(144, 164, 174, 0.8');
    playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_4__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value, 'O', 2, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons[1], 'rgba(241, 196, 15, 0.8');
    currentPlayer = playerOne;
    oppositePlayer = playerTwo;
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.displayIcon(playerOne.getImg(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.paintBackground(playerOne.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.displayIcon(playerTwo.getImg(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = `It's ${currentPlayer.getName()}'s turn`;
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.removeForm();
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
  _domElements__WEBPACK_IMPORTED_MODULE_0__.cells.forEach((cell) => cell.addEventListener('click', _clickCell__WEBPACK_IMPORTED_MODULE_1__.default, false));
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
  console.log(Icons.length);
  console.log(numberOfPlayer);
  const chosenIcon = element;
  if (numberOfPlayer === 1) {
    if (Icons[0]) {
      document.getElementById('avoid-clicks').id = '';
      Icons[0] = chosenIcon.src;
    } else {
      Icons.push(chosenIcon.src);
    }
    console.log(Icons.length);
    chosenIcon.id = 'avoid-clicks';
    numberOfPlayer = 2;
  } else {
    if (Icons[1]) {
      document.getElementById('avoid-clicks-p2').id = '';
      Icons[1] = chosenIcon.src;
    } else {
      Icons.push(chosenIcon.src);
    }
    console.log(Icons.length);
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






const playerSwitch = () => {
  _domManipulation__WEBPACK_IMPORTED_MODULE_0__.displayRounds(_domElements__WEBPACK_IMPORTED_MODULE_4__.count + 1);

  if ((0,_winningValidations__WEBPACK_IMPORTED_MODULE_2__.default)((0,_updateBoard__WEBPACK_IMPORTED_MODULE_3__.default)(), _domElements__WEBPACK_IMPORTED_MODULE_4__.currentPlayer.getSymbol()) === false && _domElements__WEBPACK_IMPORTED_MODULE_4__.count === 9) {
    setTimeout(() => {
      const reMatch = confirm("It's a draw! Would you like to play again?");
      if (reMatch) {
        (0,_reset__WEBPACK_IMPORTED_MODULE_1__.default)(_domElements__WEBPACK_IMPORTED_MODULE_4__.cells);
      } else {
        alert('How sad.');
      }
    }, 450);
  } else if ((0,_winningValidations__WEBPACK_IMPORTED_MODULE_2__.default)((0,_updateBoard__WEBPACK_IMPORTED_MODULE_3__.default)(), _domElements__WEBPACK_IMPORTED_MODULE_4__.currentPlayer.getSymbol())) {
    setTimeout(() => {
      const rematch = confirm(
        `${_domElements__WEBPACK_IMPORTED_MODULE_4__.currentPlayer.getName()} has won. Would you like to play again?`,
      );
      if (rematch === true) {
        (0,_reset__WEBPACK_IMPORTED_MODULE_1__.default)(_domElements__WEBPACK_IMPORTED_MODULE_4__.cells);
      } else {
        alert('Loser.');
      }
    }, 450);
  } else if (game.oppositePlayer.getNumber() === 1) {
    _domManipulation__WEBPACK_IMPORTED_MODULE_0__.disableBackground(game.currentPlayer.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_4__.playerTwoIcon);
    game.currentPlayer = game.playerOne;
    game.oppositePlayer = game.playerTwo;
    _domManipulation__WEBPACK_IMPORTED_MODULE_0__.paintBackground(game.currentPlayer.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_4__.playerOneIcon);
  } else {
    _domManipulation__WEBPACK_IMPORTED_MODULE_0__.disableBackground(game.currentPlayer.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_4__.playerOneIcon);
    game.currentPlayer = game.playerTwo;
    game.oppositePlayer = game.playerOne;
    _domManipulation__WEBPACK_IMPORTED_MODULE_0__.paintBackground(game.currentPlayer.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_4__.playerTwoIcon);
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
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.disableBackground(_game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.disableBackground(_game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllclN3aXRjaC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3VwZGF0ZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQzs7QUFFbEMsc0RBQUksRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnlDO0FBQ25CO0FBQ2M7O0FBRXhDO0FBQ0EsTUFBTSw2REFBK0IsV0FBVyw2REFBK0I7QUFDL0U7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsa0VBQTRCO0FBQy9DLGdCQUFnQiwrREFBeUI7QUFDekMsSUFBSSxxREFBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakIwQjtBQUNtQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QzNELDJDQUEyQyxnQkFBZ0I7QUFDM0QsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0EsVUFBVSx3REFBa0IsS0FBSyxvREFBYztBQUMvQyw4QkFBOEIsa0VBQTRCO0FBQzFELDhCQUE4QixrRUFBNEI7QUFDMUQsOEJBQThCLGtFQUE0QjtBQUMxRCxPQUFPO0FBQ1AsOEJBQThCLGtFQUE0QjtBQUMxRCw4QkFBOEIsa0VBQTRCO0FBQzFELDhCQUE4QixrRUFBNEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFOzs7Ozs7VUN4Q2hDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWUgZnJvbSAnLi9tb2R1bGVzL2dhbWUnO1xuXG5nYW1lKCk7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IGlmQ2VsbEVtcHR5IGZyb20gJy4vaWZDZWxsRW1wdHknO1xuXG5jb25zdCBjbGlja0NlbGwgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzLlwiKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN5bWJvbCA9IGdhbWUuY3VycmVudFBsYXllci5nZXRTeW1ib2woKTtcbiAgICBjb25zdCBpbWcgPSBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0SW1nKCk7XG4gICAgaWZDZWxsRW1wdHkoZXZlbnQsIHN5bWJvbCwgaW1nKTtcbiAgfVxufTtcblxuLy8gd2UgbmVlZCB0byBjcmVhdGUgYSBjdXJyZW50L29wcG9zaXRlIHBsYXllciB1cGRhdGUgc3RhdGUgZnVuY3Rpb25cbi8vIHNvIHdlIGNhbiBwYXNzIHRoYXQgdmFsdWUgdG8gbGluZSAxMC8xMVxuXG5leHBvcnQgZGVmYXVsdCBjbGlja0NlbGw7XG4iLCJjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcbmNvbnN0IG5hbWVQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR3bycpO1xuY29uc3QgYWxsSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLWl0ZW0nKTtcbmNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcbmNvbnN0IHJvdW5kQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWNvdW50ZXInKTtcbmNvbnN0IHBsYXllck9uZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyT25lJyk7XG5jb25zdCBwbGF5ZXJUd29JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllclR3bycpO1xuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuY29uc3QgY2FsbCA9ICgpID0+IGNvbnNvbGUubG9nKGFsbEljb25zKTtcbmNvbnN0IGluaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRHYW1lQnV0dG9uJyk7XG5cbmNvbnN0IGNvdW50ID0gMTtcbmxldCBwbGF5ZXJPbmU7XG5sZXQgcGxheWVyVHdvO1xuXG5jb25zdCBwbGF5ZXJOdW1iZXIgPSAxO1xuXG5jb25zdCBudW1iZXJPZlBsYXllcnMgPSAxO1xuXG5leHBvcnQge1xuICBjYWxsLFxuICBhbGxJY29ucyxcbiAgbmFtZVBsYXllck9uZSxcbiAgbmFtZVBsYXllclR3byxcbiAgcGxheWVyVHVybkluZGljYXRvcixcbiAgcm91bmRDb3VudGVyLFxuICBwbGF5ZXJPbmVJY29uLFxuICBwbGF5ZXJUd29JY29uLFxuICBjZWxscyxcbiAgaW5pdEJ1dHRvbixcbiAgY291bnQsXG4gIHBsYXllck9uZSxcbiAgcGxheWVyVHdvLFxuICBwbGF5ZXJOdW1iZXIsXG59OyIsImltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpO1xuY29uc3QgcmVtb3ZlRm9ybSA9ICgpID0+IHtcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcbmNvbnN0IGFkZEZvcm0gPSAoKSA9PiB7XG4gIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn07XG5jb25zdCBkaXNwbGF5SWNvbiA9IChpY29uLCBjb250YWluZXIpID0+IHtcbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFbGVtZW50LnNyYyA9IGljb247XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbn07XG5jb25zdCBwYWludEJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG59O1xuY29uc3QgZGlzYWJsZUJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMjU2LCAyNTYsIDI1NiwgMC41KSc7XG59O1xuY29uc3QgaW5pdGlhbEJhY2tncm91bmQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xufTtcbmNvbnN0IGRpc3BsYXlSb3VuZHMgPSAoZWxlbWVudCkgPT4ge1xuICBpZiAoZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9PT0gJ05vIFR1cm5zIFlldCcpIHtcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMSc7XG4gIH0gZWxzZSB7XG4gICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9IGBUdXJuICR7ZWxlbWVudH0uYDtcbiAgfVxuICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCBpcyAke2dhbWUub3Bwb3NpdGVQbGF5ZXIuZ2V0TmFtZSgpfSdzIHR1cm5gO1xufTtcblxuZXhwb3J0IHtcbiAgYWRkRm9ybSxcbiAgaW5pdGlhbEJhY2tncm91bmQsXG4gIHJlbW92ZUZvcm0sXG4gIGRpc3BsYXlSb3VuZHMsXG4gIC8vIHBsYXllclR1cm5JbmRpY2F0b3IsIHdoeSA/XG4gIGRpc3BsYXlJY29uLFxuICBwYWludEJhY2tncm91bmQsXG4gIGRpc2FibGVCYWNrZ3JvdW5kLFxufTtcbiIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHBsYXllckljb25zIGZyb20gJy4vcGxheWVySWNvbnMnO1xuaW1wb3J0IGdhbWVJbml0IGZyb20gJy4vZ2FtZUluaXQnO1xuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLmluaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lSW5pdCk7XG4gIGRvbUVsZW1lbnRzLmFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcGxheWVySWNvbnMoZWxlbWVudCk7XG4gICAgfSk7XG4gIH0pO1xuICBnYW1lYm9hcmQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gJy4vcGxheWVySWNvbnMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCAqIGFzIGRvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcblxubGV0IHBsYXllck9uZTtcbmxldCBwbGF5ZXJUd287XG5sZXQgY3VycmVudFBsYXllcjtcbmxldCBvcHBvc2l0ZVBsYXllcjtcblxuLy8gaWYgcGxheWVycyBkb250IGhhdmUgYSBuYW1lXG4vLyBpZiBpY29ucyBoYXZlbnQgYmVlbiBzZWxlY3RlZFxuLy8gdGhlbiAyNyB0aWxsIDM1XG4vLyB3ZSBjb3VsZCByZXR1cm4gYW4gQXJyYXkgd2l0aCB0d28gcGxheWVyIG9iamVjdHNcbi8vICBhbmQgZXhwb3J0IHRoYXQgaW50byBjbGlja0NlbGwgXG5cbi8vIGNvbnN0IHJlbmRlclBsYXllciA9ICgpID0+IHtcbi8vICAgcGxheWVyT25lID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUsICdYJywgMSwgSWNvbnNbMF0sICdyZ2JhKDE0NCwgMTY0LCAxNzQsIDAuOCcpO1xuLy8gICBwbGF5ZXJUd28gPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSwgJ08nLCAyLCBJY29uc1sxXSwgJ3JnYmEoMjQxLCAxOTYsIDE1LCAwLjgnKTtcbi8vICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcbi8vICAgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXJUd287XG5cbi8vICAgLy8gcmV0dXJuIFtcbi8vICAgLy8gICBwbGF5ZXJPbmUsIHBsYXllclR3byxcbi8vICAgLy8gICBjdXJyZW50UGxheWVyLCBvcHBvc2l0ZVBsYXllcixcbi8vICAgLy8gXTtcblxuLy8gICByZXR1cm4gdHJ1ZVxuXG4vLyB9O1xuXG4vLyBjb25zdCBpc0dhbWVSZWFkeSA9ICgpID0+IHtcbi8vICAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnIHx8IGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XG4vLyAgICAgYWxlcnQoXCJQbGVhc2UgYWRkIGJvdGggcGxheWVycycgbmFtZXMgdG8gY29udGludWUuXCIpO1xuLy8gICAgIHJldHVybiBmYWxzZTtcbi8vICAgfVxuLy8gICBpZiAoSWNvbnMubGVuZ3RoIDwgMikge1xuLy8gICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgY2hhcmFjdGVyIGZvciBib3RoIHBsYXllcnMgdG8gY29udGludWUuJyk7XG4vLyAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICB9XG4vLyAgIHJldHVybiB0cnVlO1xuLy8gfTtcblxuY29uc3QgZ2FtZUluaXQgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzdXAgcGVycm8nKTtcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnIHx8IGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgYWRkIGJvdGggcGxheWVycycgbmFtZXMgdG8gY29udGludWUuXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoSWNvbnMubGVuZ3RoIDwgMikge1xuICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgY2hhcmFjdGVyIGZvciBib3RoIHBsYXllcnMgdG8gY29udGludWUuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlICE9PSAnJyAmJiBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlICE9PSAnJyAmJiBJY29ucy5sZW5ndGggPT09IDIpIHtcbiAgICBwbGF5ZXJPbmUgPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSwgJ1gnLCAxLCBJY29uc1swXSwgJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44Jyk7XG4gICAgcGxheWVyVHdvID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUsICdPJywgMiwgSWNvbnNbMV0sICdyZ2JhKDI0MSwgMTk2LCAxNSwgMC44Jyk7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcbiAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24ocGxheWVyT25lLmdldEltZygpLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcbiAgICBkb21NYW5pcHVsYXRpb24ucGFpbnRCYWNrZ3JvdW5kKHBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihwbGF5ZXJUd28uZ2V0SW1nKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0J3MgJHtjdXJyZW50UGxheWVyLmdldE5hbWUoKX0ncyB0dXJuYDtcbiAgICBkb21NYW5pcHVsYXRpb24ucmVtb3ZlRm9ybSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVJbml0OyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XG5pbXBvcnQgaWZDZWxsRW1wdHkgZnJvbSAnLi9pZkNlbGxFbXB0eSc7XG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9yZXNldCc7XG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi93aW5uaW5nVmFsaWRhdGlvbnMnO1xuaW1wb3J0IHVwZGF0ZUJvYXJkQXJyYXkgZnJvbSAnLi91cGRhdGVCb2FyZCc7XG5pbXBvcnQgcGxheWVyU3dpdGNoIGZyb20gJy4vcGxheWVyU3dpdGNoJztcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSkpO1xuICAvLyBpdCBzZWVtcyBsaWtlIHdlIGRvbid0IG5lZWQgdG8gcmV0dXJuIGFueXRoaW5nXG4gIC8vIFJvcnkgdGhpbmtzIHRoYXQgdGhlIG1vc3QgY3J1Y2lhbCByZWZhY3RvcmluZyBwYXJ0IG9mIHRoaXMgaXMgd2hlcmUgYXJlIHdlIGNhbGxpbmcgZ2FtZWJvYXJkLlxuICAvLyByZXR1cm4geyBjbGlja0NlbGwgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDsiLCJpbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcbmltcG9ydCBwbGF5ZXJTd2l0Y2ggZnJvbSAnLi9wbGF5ZXJTd2l0Y2gnO1xuXG5jb25zdCBpZkNlbGxFbXB0eSA9IChldmVudCwgc3ltYm9sLCBpbWcpID0+IHtcbiAgY29uc3QgaW1nRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFLnNyYyA9IGltZztcbiAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGF0YXN5bWJvbCA9IHN5bWJvbDtcbiAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGltZ0UpO1xuICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcbiAgcGxheWVyU3dpdGNoKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpZkNlbGxFbXB0eTsiLCJjb25zdCBwbGF5ZXIgPSAobmFtZSwgc3ltYm9sLCBwbGF5ZXJOdW1iZXIsIGltZywgYmFja2dyb3VuZCkgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgZ2V0U3ltYm9sID0gKCkgPT4gc3ltYm9sO1xuICBjb25zdCBnZXRJbWcgPSAoKSA9PiBpbWc7XG4gIGNvbnN0IGdldE51bWJlciA9ICgpID0+IHBsYXllck51bWJlcjtcbiAgY29uc3QgZ2V0QmFja2dyb3VuZCA9ICgpID0+IGJhY2tncm91bmQ7XG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBnZXRTeW1ib2wsXG4gICAgZ2V0TnVtYmVyLFxuICAgIGdldEltZyxcbiAgICBnZXRCYWNrZ3JvdW5kLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xuXG5jb25zdCBJY29ucyA9IFtdO1xubGV0IG51bWJlck9mUGxheWVyID0gMTtcbmNvbnN0IGNob29zZVBsYXllckljb24gPSAoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhJY29ucy5sZW5ndGgpO1xuICBjb25zb2xlLmxvZyhudW1iZXJPZlBsYXllcik7XG4gIGNvbnN0IGNob3Nlbkljb24gPSBlbGVtZW50O1xuICBpZiAobnVtYmVyT2ZQbGF5ZXIgPT09IDEpIHtcbiAgICBpZiAoSWNvbnNbMF0pIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MnKS5pZCA9ICcnO1xuICAgICAgSWNvbnNbMF0gPSBjaG9zZW5JY29uLnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgSWNvbnMucHVzaChjaG9zZW5JY29uLnNyYyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKEljb25zLmxlbmd0aCk7XG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MnO1xuICAgIG51bWJlck9mUGxheWVyID0gMjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoSWNvbnNbMV0pIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MtcDInKS5pZCA9ICcnO1xuICAgICAgSWNvbnNbMV0gPSBjaG9zZW5JY29uLnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgSWNvbnMucHVzaChjaG9zZW5JY29uLnNyYyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKEljb25zLmxlbmd0aCk7XG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MtcDInO1xuICAgIG51bWJlck9mUGxheWVyID0gMTtcbiAgfVxuICByZXR1cm4geyBJY29ucyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hvb3NlUGxheWVySWNvbjtcbmV4cG9ydCB7IEljb25zIH07IiwiaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcbmltcG9ydCAgcmVzZXQgZnJvbSAnLi9yZXNldCc7XG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi93aW5uaW5nVmFsaWRhdGlvbnMnO1xuaW1wb3J0IHVwZGF0ZUJvYXJkQXJyYXkgZnJvbSAnLi91cGRhdGVCb2FyZCc7XG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxuY29uc3QgcGxheWVyU3dpdGNoID0gKCkgPT4ge1xuICBzdHlsZXMuZGlzcGxheVJvdW5kcyhkb21FbGVtZW50cy5jb3VudCArIDEpO1xuXG4gIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGRvbUVsZW1lbnRzLmN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCkpID09PSBmYWxzZSAmJiBkb21FbGVtZW50cy5jb3VudCA9PT0gOSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVNYXRjaCA9IGNvbmZpcm0oXCJJdCdzIGEgZHJhdyEgV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9cIik7XG4gICAgICBpZiAocmVNYXRjaCkge1xuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnSG93IHNhZC4nKTtcbiAgICAgIH1cbiAgICB9LCA0NTApO1xuICB9IGVsc2UgaWYgKHdpbm5pbmdWYWxpZGF0aW9uKHVwZGF0ZUJvYXJkQXJyYXkoKSwgZG9tRWxlbWVudHMuY3VycmVudFBsYXllci5nZXRTeW1ib2woKSkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlbWF0Y2ggPSBjb25maXJtKFxuICAgICAgICBgJHtkb21FbGVtZW50cy5jdXJyZW50UGxheWVyLmdldE5hbWUoKX0gaGFzIHdvbi4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9gLFxuICAgICAgKTtcbiAgICAgIGlmIChyZW1hdGNoID09PSB0cnVlKSB7XG4gICAgICAgIHJlc2V0KGRvbUVsZW1lbnRzLmNlbGxzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdMb3Nlci4nKTtcbiAgICAgIH1cbiAgICB9LCA0NTApO1xuICB9IGVsc2UgaWYgKGdhbWUub3Bwb3NpdGVQbGF5ZXIuZ2V0TnVtYmVyKCkgPT09IDEpIHtcbiAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XG4gICAgZ2FtZS5vcHBvc2l0ZVBsYXllciA9IGdhbWUucGxheWVyVHdvO1xuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUucGxheWVyVHdvO1xuICAgIGdhbWUub3Bwb3NpdGVQbGF5ZXIgPSBnYW1lLnBsYXllck9uZTtcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICB9XG4gIGdhbWUuY291bnQrKztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllclN3aXRjaDsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcbmltcG9ydCAqIGFzIGRvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7IGltcG9ydCBjaG9vc2VQbGF5ZXJJY29uIGZyb20gJy4vcGxheWVySWNvbnMnO1xuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMuY2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGVsZW1lbnQuZGF0YXNldC5kYXRhc3ltYm9sID0gJyc7XG4gICAgZG9tTWFuaXB1bGF0aW9uLmluaXRpYWxCYWNrZ3JvdW5kKGVsZW1lbnQpO1xuICAgIGdhbWUuY291bnQgPSAxO1xuICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSAnVHVybiAxLic7XG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSAnJztcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uLmlubmVySFRNTCA9ICcnO1xuICAgIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24uaW5uZXJIVE1MID0gJyc7XG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNhYmxlQmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcbiAgICBkb21FbGVtZW50cy5hbGxJY29ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGxheWVySWNvbiwgZmFsc2UpO1xuICAgIH0pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5hZGRGb3JtKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7IiwiY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcbiAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oY2VsbHMpO1xuICBjb25zdCByZW5kZXJCb2FyZCA9IGNlbGxzQXJyYXkubWFwKFxuICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcbiAgKTtcbiAgcmV0dXJuIHJlbmRlckJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQm9hcmRBcnJheTsiLCJpbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCB3aW5uaW5nVmFsaWRhdGlvbiA9IChhcnJheSwgc3ltYm9sKSA9PiB7XG4gIGxldCByb3VuZFdvbiA9IGZhbHNlO1xuICBjb25zdCB3aW5uaW5nQ29uZGl0aW9ucyA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbMCwgMywgNl0sXG4gICAgWzEsIDQsIDddLFxuICAgIFsyLCA1LCA4XSxcbiAgICBbMCwgNCwgOF0sXG4gICAgWzIsIDQsIDZdLFxuICBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDc7IGkgKz0gMSkge1xuICAgIGNvbnN0IHdpbkNvbmRpdGlvbiA9IHdpbm5pbmdDb25kaXRpb25zW2ldO1xuICAgIGNvbnN0IGEgPSBhcnJheVt3aW5Db25kaXRpb25bMF1dO1xuICAgIGNvbnN0IGIgPSBhcnJheVt3aW5Db25kaXRpb25bMV1dO1xuICAgIGNvbnN0IGMgPSBhcnJheVt3aW5Db25kaXRpb25bMl1dO1xuICAgIGNvbnN0IGFhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblswXX1gKTtcbiAgICBjb25zdCBiYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMV19YCk7XG4gICAgY29uc3QgY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzJdfWApO1xuICAgIGlmIChhID09PSBzeW1ib2wgJiYgYiA9PT0gc3ltYm9sICYmIGMgPT09IHN5bWJvbCkge1xuICAgICAgcm91bmRXb24gPSB0cnVlO1xuICAgICAgaWYgKGdhbWUuY3VycmVudFBsYXllciA9PT0gZ2FtZS5wbGF5ZXJPbmUpIHtcbiAgICAgICAgYWEuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcbiAgICAgICAgYmIuc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIGNjLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91bmRXb247XG4gICAgfVxuICB9XG4gIHJldHVybiByb3VuZFdvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpbm5pbmdWYWxpZGF0aW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
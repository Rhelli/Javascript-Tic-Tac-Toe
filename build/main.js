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
/*! export currentPlayer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export namePlayerOne [provided] [no usage info] [missing usage info prevents renaming] */
/*! export namePlayerTwo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export oppositePlayer [provided] [no usage info] [missing usage info prevents renaming] */
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
/* harmony export */   "playerNumber": () => /* binding */ playerNumber,
/* harmony export */   "currentPlayer": () => /* binding */ currentPlayer,
/* harmony export */   "oppositePlayer": () => /* binding */ oppositePlayer
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
const currentPlayer = '';
const oppositePlayer = '';



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
  _game__WEBPACK_IMPORTED_MODULE_0__.default.playerTurnIndicator.innerHTML = `It is ${_game__WEBPACK_IMPORTED_MODULE_0__.default.oppositePlayer.getName()}'s turn`;
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
    _game__WEBPACK_IMPORTED_MODULE_2__.default.playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_4__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value, 'X', 1, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons[0], 'rgba(144, 164, 174, 0.8');
    _game__WEBPACK_IMPORTED_MODULE_2__.default.playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_4__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value, 'O', 2, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons[1], 'rgba(241, 196, 15, 0.8');
    _game__WEBPACK_IMPORTED_MODULE_2__.default.currentPlayer = _game__WEBPACK_IMPORTED_MODULE_2__.default.playerOne;
    _game__WEBPACK_IMPORTED_MODULE_2__.default.oppositePlayer = _game__WEBPACK_IMPORTED_MODULE_2__.default.playerTwo;
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.displayIcon(_game__WEBPACK_IMPORTED_MODULE_2__.default.playerOne.getImg(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.paintBackground(_game__WEBPACK_IMPORTED_MODULE_2__.default.playerOne.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_3__.displayIcon(_game__WEBPACK_IMPORTED_MODULE_2__.default.playerTwo.getImg(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = `It's ${_game__WEBPACK_IMPORTED_MODULE_2__.default.currentPlayer.getName()}'s turn`;
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


let Icons = [];

const choosePlayerIcon = (element) => {
  let icon = Icons;
  const chosenIcon = element;
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.numberOfPlayer === 1) {
    if (icon[0]) {
      document.getElementById('avoid-clicks').id = '';
      icon[0] = chosenIcon.src;
    } else {
      Icons.push(chosenIcon.src);
    }
    console.log(Icons.length);
    chosenIcon.id = 'avoid-clicks';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.numberOfPlayer = 2;
  } else {
    if (icon[1]) {
      document.getElementById('avoid-clicks-p2').id = '';
      icon[1] = chosenIcon.src;
    } else {
      Icons.push(chosenIcon.src);
    }
    console.log(Icons.length);
    chosenIcon.id = 'avoid-clicks-p2';
    _domElements__WEBPACK_IMPORTED_MODULE_0__.numberOfPlayer = 1;
  }

  Icons = icon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllclN3aXRjaC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3VwZGF0ZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQzs7QUFFbEMsc0RBQUksRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnlDO0FBQ25CO0FBQ2M7O0FBRXhDO0FBQ0EsTUFBTSw2REFBK0IsV0FBVyw2REFBK0I7QUFDL0U7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsa0VBQTRCO0FBQy9DLGdCQUFnQiwrREFBeUI7QUFDekMsSUFBSSxxREFBVztBQUNmO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjBCO0FBQ21COztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QThCLGtFQUE0QjtBQUMxRCw4QkFBOEIsa0VBQTRCO0FBQzFELDhCQUE4QixrRUFBNEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFOzs7Ozs7VUN4Q2hDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWUgZnJvbSAnLi9tb2R1bGVzL2dhbWUnO1xyXG5cclxuZ2FtZSgpOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgaWZDZWxsRW1wdHkgZnJvbSAnLi9pZkNlbGxFbXB0eSc7XHJcblxyXG5jb25zdCBjbGlja0NlbGwgPSAoZXZlbnQpID0+IHtcclxuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgJiYgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcclxuICAgIGFsZXJ0KFwiUGxlYXNlIEVudGVyIEFsbCBQbGF5ZXIncyBOYW1lcy5cIik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgRW50ZXIgQWxsIFBsYXllcidzIE5hbWVzXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzeW1ib2wgPSBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCk7XHJcbiAgICBjb25zdCBpbWcgPSBnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0SW1nKCk7XHJcbiAgICBpZkNlbGxFbXB0eShldmVudCwgc3ltYm9sLCBpbWcpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWNrQ2VsbDtcclxuIiwiY29uc3QgbmFtZVBsYXllck9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItb25lJyk7XG5jb25zdCBuYW1lUGxheWVyVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10d28nKTtcbmNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1pdGVtJyk7XG5jb25zdCBwbGF5ZXJUdXJuSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci10dXJuJyk7XG5jb25zdCByb3VuZENvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybi1jb3VudGVyJyk7XG5jb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xuY29uc3QgcGxheWVyVHdvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJUd28nKTtcbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbmNvbnN0IGNhbGwgPSAoKSA9PiBjb25zb2xlLmxvZyhhbGxJY29ucyk7XG5jb25zdCBpbml0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0R2FtZUJ1dHRvbicpO1xuXG5jb25zdCBjb3VudCA9IDE7XG5sZXQgcGxheWVyT25lO1xubGV0IHBsYXllclR3bztcblxuY29uc3QgcGxheWVyTnVtYmVyID0gMTtcblxuY29uc3QgbnVtYmVyT2ZQbGF5ZXJzID0gMTtcbmNvbnN0IGN1cnJlbnRQbGF5ZXIgPSAnJztcbmNvbnN0IG9wcG9zaXRlUGxheWVyID0gJyc7XG5cbmV4cG9ydCB7XG4gIGNhbGwsXG4gIGFsbEljb25zLFxuICBuYW1lUGxheWVyT25lLFxuICBuYW1lUGxheWVyVHdvLFxuICBwbGF5ZXJUdXJuSW5kaWNhdG9yLFxuICByb3VuZENvdW50ZXIsXG4gIHBsYXllck9uZUljb24sXG4gIHBsYXllclR3b0ljb24sXG4gIGNlbGxzLFxuICBpbml0QnV0dG9uLFxuICBjb3VudCxcbiAgcGxheWVyT25lLFxuICBwbGF5ZXJUd28sXG4gIHBsYXllck51bWJlcixcbiAgY3VycmVudFBsYXllcixcbiAgb3Bwb3NpdGVQbGF5ZXIsXG59OyIsImltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5cclxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5jb25zdCByZW1vdmVGb3JtID0gKCkgPT4ge1xyXG4gIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuY29uc3QgYWRkRm9ybSA9ICgpID0+IHtcclxuICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlJY29uID0gKGljb24sIGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWdFbGVtZW50LnNyYyA9IGljb247XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xyXG59O1xyXG5jb25zdCBwYWludEJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxufTtcclxuY29uc3QgZGlzYWJsZUJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgyNTYsIDI1NiwgMjU2LCAwLjUpJztcclxufTtcclxuY29uc3QgaW5pdGlhbEJhY2tncm91bmQgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlSb3VuZHMgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGlmIChkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID09PSAnTm8gVHVybnMgWWV0Jykge1xyXG4gICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9ICdUdXJuIDEnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gYFR1cm4gJHtlbGVtZW50fS5gO1xyXG4gIH1cclxuICBnYW1lLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0IGlzICR7Z2FtZS5vcHBvc2l0ZVBsYXllci5nZXROYW1lKCl9J3MgdHVybmA7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGFkZEZvcm0sXHJcbiAgaW5pdGlhbEJhY2tncm91bmQsXHJcbiAgcmVtb3ZlRm9ybSxcclxuICBkaXNwbGF5Um91bmRzLFxyXG4gIC8vIHBsYXllclR1cm5JbmRpY2F0b3IsIHdoeSA/XHJcbiAgZGlzcGxheUljb24sXHJcbiAgcGFpbnRCYWNrZ3JvdW5kLFxyXG4gIGRpc2FibGVCYWNrZ3JvdW5kLFxyXG59O1xyXG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHBsYXllckljb25zIGZyb20gJy4vcGxheWVySWNvbnMnO1xyXG5pbXBvcnQgZ2FtZUluaXQgZnJvbSAnLi9nYW1lSW5pdCc7XHJcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5cclxuY29uc3QgZ2FtZSA9ICgpID0+IHtcclxuICBkb21FbGVtZW50cy5pbml0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZUluaXQpO1xyXG4gIGRvbUVsZW1lbnRzLmFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGxheWVySWNvbnMoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBnYW1lYm9hcmQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWU7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IEljb25zIH0gZnJvbSAnLi9wbGF5ZXJJY29ucyc7XHJcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCAqIGFzIGRvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuY29uc3QgZ2FtZUluaXQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3N1cCBwZXJybycpO1xyXG4gIGlmIChkb21FbGVtZW50cy5uYW1lUGxheWVyT25lLnZhbHVlID09PSAnJyB8fCBkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlID09PSAnJykge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgYWRkIGJvdGggcGxheWVycycgbmFtZXMgdG8gY29udGludWUuXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoSWNvbnMubGVuZ3RoIDwgMikge1xyXG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBjaGFyYWN0ZXIgZm9yIGJvdGggcGxheWVycyB0byBjb250aW51ZS4nKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgIT09ICcnICYmIEljb25zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgZ2FtZS5wbGF5ZXJPbmUgPSBwbGF5ZXIoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSwgJ1gnLCAxLCBJY29uc1swXSwgJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44Jyk7XHJcbiAgICBnYW1lLnBsYXllclR3byA9IHBsYXllcihkb21FbGVtZW50cy5uYW1lUGxheWVyVHdvLnZhbHVlLCAnTycsIDIsIEljb25zWzFdLCAncmdiYSgyNDEsIDE5NiwgMTUsIDAuOCcpO1xyXG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XHJcbiAgICBnYW1lLm9wcG9zaXRlUGxheWVyID0gZ2FtZS5wbGF5ZXJUd287XHJcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24oZ2FtZS5wbGF5ZXJPbmUuZ2V0SW1nKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLnBhaW50QmFja2dyb3VuZChnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc3BsYXlJY29uKGdhbWUucGxheWVyVHdvLmdldEltZygpLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0J3MgJHtnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpfSdzIHR1cm5gO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLnJlbW92ZUZvcm0oKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lSW5pdDsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XHJcbmltcG9ydCBpZkNlbGxFbXB0eSBmcm9tICcuL2lmQ2VsbEVtcHR5JztcclxuaW1wb3J0IHJlc2V0IGZyb20gJy4vcmVzZXQnO1xyXG5pbXBvcnQgd2lubmluZ1ZhbGlkYXRpb24gZnJvbSAnLi93aW5uaW5nVmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgdXBkYXRlQm9hcmRBcnJheSBmcm9tICcuL3VwZGF0ZUJvYXJkJztcclxuaW1wb3J0IHBsYXllclN3aXRjaCBmcm9tICcuL3BsYXllclN3aXRjaCc7XHJcblxyXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgZG9tRWxlbWVudHMuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2VsbCwgZmFsc2UpKTtcclxuICAvLyBpdCBzZWVtcyBsaWtlIHdlIGRvbid0IG5lZWQgdG8gcmV0dXJuIGFueXRoaW5nXHJcbiAgLy8gUm9yeSB0aGlua3MgdGhhdCB0aGUgbW9zdCBjcnVjaWFsIHJlZmFjdG9yaW5nIHBhcnQgb2YgdGhpcyBpcyB3aGVyZSBhcmUgd2UgY2FsbGluZyBnYW1lYm9hcmQuXHJcbiAgLy8gcmV0dXJuIHsgY2xpY2tDZWxsIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7IiwiaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XHJcbmltcG9ydCBwbGF5ZXJTd2l0Y2ggZnJvbSAnLi9wbGF5ZXJTd2l0Y2gnO1xyXG5cclxuY29uc3QgaWZDZWxsRW1wdHkgPSAoZXZlbnQsIHN5bWJvbCwgaW1nKSA9PiB7XHJcbiAgY29uc3QgaW1nRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltZ0Uuc3JjID0gaW1nO1xyXG4gIGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGFzeW1ib2wgPSBzeW1ib2w7XHJcbiAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGltZ0UpO1xyXG4gIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2VsbCwgZmFsc2UpO1xyXG4gIHBsYXllclN3aXRjaCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaWZDZWxsRW1wdHk7IiwiY29uc3QgcGxheWVyID0gKG5hbWUsIHN5bWJvbCwgcGxheWVyTnVtYmVyLCBpbWcsIGJhY2tncm91bmQpID0+IHtcclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICBjb25zdCBnZXRTeW1ib2wgPSAoKSA9PiBzeW1ib2w7XHJcbiAgY29uc3QgZ2V0SW1nID0gKCkgPT4gaW1nO1xyXG4gIGNvbnN0IGdldE51bWJlciA9ICgpID0+IHBsYXllck51bWJlcjtcclxuICBjb25zdCBnZXRCYWNrZ3JvdW5kID0gKCkgPT4gYmFja2dyb3VuZDtcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0TmFtZSxcclxuICAgIGdldFN5bWJvbCxcclxuICAgIGdldE51bWJlcixcclxuICAgIGdldEltZyxcclxuICAgIGdldEJhY2tncm91bmQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxubGV0IEljb25zID0gW107XG5cbmNvbnN0IGNob29zZVBsYXllckljb24gPSAoZWxlbWVudCkgPT4ge1xuICBsZXQgaWNvbiA9IEljb25zO1xuICBjb25zdCBjaG9zZW5JY29uID0gZWxlbWVudDtcbiAgaWYgKGRvbUVsZW1lbnRzLm51bWJlck9mUGxheWVyID09PSAxKSB7XG4gICAgaWYgKGljb25bMF0pIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MnKS5pZCA9ICcnO1xuICAgICAgaWNvblswXSA9IGNob3Nlbkljb24uc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICBJY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coSWNvbnMubGVuZ3RoKTtcbiAgICBjaG9zZW5JY29uLmlkID0gJ2F2b2lkLWNsaWNrcyc7XG4gICAgZG9tRWxlbWVudHMubnVtYmVyT2ZQbGF5ZXIgPSAyO1xuICB9IGVsc2Uge1xuICAgIGlmIChpY29uWzFdKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzLXAyJykuaWQgPSAnJztcbiAgICAgIGljb25bMV0gPSBjaG9zZW5JY29uLnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgSWNvbnMucHVzaChjaG9zZW5JY29uLnNyYyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKEljb25zLmxlbmd0aCk7XG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MtcDInO1xuICAgIGRvbUVsZW1lbnRzLm51bWJlck9mUGxheWVyID0gMTtcbiAgfVxuXG4gIEljb25zID0gaWNvbjtcblxuICByZXR1cm4geyBJY29ucyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hvb3NlUGxheWVySWNvbjtcbmV4cG9ydCB7IEljb25zIH07IiwiY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9kb21NYW5pcHVsYXRpb24nKTtcclxuY29uc3QgcmVzZXQgPSByZXF1aXJlKCcuL3Jlc2V0Jyk7XHJcbmNvbnN0IHdpbm5pbmdWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi93aW5uaW5nVmFsaWRhdGlvbnMnKTtcclxuY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9IHJlcXVpcmUoJy4vdXBkYXRlQm9hcmQnKTtcclxuY29uc3QgZG9tRWxlbWVudHMgPSByZXF1aXJlKCcuL2RvbUVsZW1lbnRzJyk7XHJcbmNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcclxuXHJcbmNvbnN0IHBsYXllclN3aXRjaCA9ICgpID0+IHtcclxuICBzdHlsZXMuZGlzcGxheVJvdW5kcyhnYW1lLmNvdW50ICsgMSk7XHJcblxyXG4gIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGdhbWUuY3VycmVudFBsYXllci5nZXRTeW1ib2woKSkgPT09IGZhbHNlICYmIGdhbWUuY291bnQgPT09IDkpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCByZU1hdGNoID0gY29uZmlybShcIkl0J3MgYSBkcmF3ISBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP1wiKTtcclxuICAgICAgaWYgKHJlTWF0Y2gpIHtcclxuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0hvdyBzYWQuJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDQ1MCk7XHJcbiAgfSBlbHNlIGlmICh3aW5uaW5nVmFsaWRhdGlvbih1cGRhdGVCb2FyZEFycmF5KCksIGdhbWUuY3VycmVudFBsYXllci5nZXRTeW1ib2woKSkpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCByZW1hdGNoID0gY29uZmlybShcclxuICAgICAgICBgJHtnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpfSBoYXMgd29uLiBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluP2AsXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZW1hdGNoID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzZXQoZG9tRWxlbWVudHMuY2VsbHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdMb3Nlci4nKTtcclxuICAgICAgfVxyXG4gICAgfSwgNDUwKTtcclxuICB9IGVsc2UgaWYgKGdhbWUub3Bwb3NpdGVQbGF5ZXIuZ2V0TnVtYmVyKCkgPT09IDEpIHtcclxuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUucGxheWVyT25lO1xyXG4gICAgZ2FtZS5vcHBvc2l0ZVBsYXllciA9IGdhbWUucGxheWVyVHdvO1xyXG4gICAgc3R5bGVzLnBhaW50QmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJUd287XHJcbiAgICBnYW1lLm9wcG9zaXRlUGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XHJcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xyXG4gIH1cclxuICBnYW1lLmNvdW50Kys7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJTd2l0Y2g7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCBjbGlja0NlbGwgZnJvbSAnLi9jbGlja0NlbGwnO1xyXG5pbXBvcnQgKiBhcyBkb21NYW5pcHVsYXRpb24gZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nOyBpbXBvcnQgY2hvb3NlUGxheWVySWNvbiBmcm9tICcuL3BsYXllckljb25zJztcclxuXHJcbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gIGRvbUVsZW1lbnRzLmNlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NlbGwsIGZhbHNlKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBlbGVtZW50LmRhdGFzZXQuZGF0YXN5bWJvbCA9ICcnO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmluaXRpYWxCYWNrZ3JvdW5kKGVsZW1lbnQpO1xyXG4gICAgZ2FtZS5jb3VudCA9IDE7XHJcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMS4nO1xyXG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xyXG4gICAgZG9tRWxlbWVudHMuYWxsSWNvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGxheWVySWNvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICBkb21NYW5pcHVsYXRpb24uYWRkRm9ybSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7IiwiY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcclxuICBjb25zdCBjZWxsc0FycmF5ID0gQXJyYXkuZnJvbShjZWxscyk7XHJcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSBjZWxsc0FycmF5Lm1hcChcclxuICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcclxuICApO1xyXG4gIHJldHVybiByZW5kZXJCb2FyZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUJvYXJkQXJyYXk7IiwiaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IHdpbm5pbmdWYWxpZGF0aW9uID0gKGFycmF5LCBzeW1ib2wpID0+IHtcclxuICBsZXQgcm91bmRXb24gPSBmYWxzZTtcclxuICBjb25zdCB3aW5uaW5nQ29uZGl0aW9ucyA9IFtcclxuICAgIFswLCAxLCAyXSxcclxuICAgIFszLCA0LCA1XSxcclxuICAgIFs2LCA3LCA4XSxcclxuICAgIFswLCAzLCA2XSxcclxuICAgIFsxLCA0LCA3XSxcclxuICAgIFsyLCA1LCA4XSxcclxuICAgIFswLCA0LCA4XSxcclxuICAgIFsyLCA0LCA2XSxcclxuICBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdpbkNvbmRpdGlvbiA9IHdpbm5pbmdDb25kaXRpb25zW2ldO1xyXG4gICAgY29uc3QgYSA9IGFycmF5W3dpbkNvbmRpdGlvblswXV07XHJcbiAgICBjb25zdCBiID0gYXJyYXlbd2luQ29uZGl0aW9uWzFdXTtcclxuICAgIGNvbnN0IGMgPSBhcnJheVt3aW5Db25kaXRpb25bMl1dO1xyXG4gICAgY29uc3QgYWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzBdfWApO1xyXG4gICAgY29uc3QgYmIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzFdfWApO1xyXG4gICAgY29uc3QgY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzJdfWApO1xyXG4gICAgaWYgKGEgPT09IHN5bWJvbCAmJiBiID09PSBzeW1ib2wgJiYgYyA9PT0gc3ltYm9sKSB7XHJcbiAgICAgIHJvdW5kV29uID0gdHJ1ZTtcclxuICAgICAgaWYgKGdhbWUuY3VycmVudFBsYXllciA9PT0gZ2FtZS5wbGF5ZXJPbmUpIHtcclxuICAgICAgICBhYS5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJPbmUuZ2V0QmFja2dyb3VuZCgpO1xyXG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyT25lLmdldEJhY2tncm91bmQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhYS5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJUd28uZ2V0QmFja2dyb3VuZCgpO1xyXG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllclR3by5nZXRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgY2Muc3R5bGUuYmFja2dyb3VuZCA9IGdhbWUucGxheWVyVHdvLmdldEJhY2tncm91bmQoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcm91bmRXb247XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByb3VuZFdvbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpbm5pbmdWYWxpZGF0aW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
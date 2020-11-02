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
/*! export Icons [provided] [no usage info] [missing usage info prevents renaming] */
/*! export allIcons [provided] [no usage info] [missing usage info prevents renaming] */
/*! export call [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cells [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export namePlayerOne [provided] [no usage info] [missing usage info prevents renaming] */
/*! export namePlayerTwo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerOneIcon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerTurnIndicator [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playerTwoIcon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export roundCounter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "call": () => /* binding */ call,
/* harmony export */   "Icons": () => /* binding */ Icons,
/* harmony export */   "allIcons": () => /* binding */ allIcons,
/* harmony export */   "namePlayerOne": () => /* binding */ namePlayerOne,
/* harmony export */   "namePlayerTwo": () => /* binding */ namePlayerTwo,
/* harmony export */   "playerTurnIndicator": () => /* binding */ playerTurnIndicator,
/* harmony export */   "roundCounter": () => /* binding */ roundCounter,
/* harmony export */   "playerOneIcon": () => /* binding */ playerOneIcon,
/* harmony export */   "playerTwoIcon": () => /* binding */ playerTwoIcon,
/* harmony export */   "cells": () => /* binding */ cells,
/* harmony export */   "initButton": () => /* binding */ initButton
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
const initButton = document.getElementById('startGameButton');



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
  _domElements__WEBPACK_IMPORTED_MODULE_3__.initButton.addEventListener('click', _gameInit__WEBPACK_IMPORTED_MODULE_2__.default);
  // const Icons = [];
  // const roundCounter = document.getElementById('turn-counter');
  // const playerOneIcon = document.getElementById('activePlayerOne');
  // const playerTwoIcon = document.getElementById('activePlayerTwo');
  _domElements__WEBPACK_IMPORTED_MODULE_3__.allIcons.forEach((element) => {
    element.addEventListener('click', _playerIcons__WEBPACK_IMPORTED_MODULE_1__.default, false);
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
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value === '' || _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value === '') {
    alert("Please add both players' names to continue.");
    return false;
  }
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.Icons.length < 2) {
    alert('Please select a character for both players to continue.');
    return false;
  }
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value !== '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value !== '' && _domElements__WEBPACK_IMPORTED_MODULE_0__.Icons.length === 2) {
    _game__WEBPACK_IMPORTED_MODULE_1__.default.playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_3__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerOne.value, 'X', 1, _domElements__WEBPACK_IMPORTED_MODULE_0__.Icons[0], 'rgba(144, 164, 174, 0.8');
    _game__WEBPACK_IMPORTED_MODULE_1__.default.playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_3__.default)(_domElements__WEBPACK_IMPORTED_MODULE_0__.namePlayerTwo.value, 'O', 2, _domElements__WEBPACK_IMPORTED_MODULE_0__.Icons[1], 'rgba(241, 196, 15, 0.8');
    _game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer = _game__WEBPACK_IMPORTED_MODULE_1__.default.playerOne;
    _game__WEBPACK_IMPORTED_MODULE_1__.default.oppositePlayer = _game__WEBPACK_IMPORTED_MODULE_1__.default.playerTwo;
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.displayIcon(_game__WEBPACK_IMPORTED_MODULE_1__.default.playerOne.getImg(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.paintBackground(_game__WEBPACK_IMPORTED_MODULE_1__.default.playerOne.getBackground(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.displayIcon(_game__WEBPACK_IMPORTED_MODULE_1__.default.playerTwo.getImg(), _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTwoIcon);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = `It's ${_game__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.getName()}'s turn`;
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__.removeForm();
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
  // call();
  console.log(_domElements__WEBPACK_IMPORTED_MODULE_0__.Icons);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3BsYXllclN3aXRjaC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3VwZGF0ZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy93aW5uaW5nVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQzs7QUFFbEMsc0RBQUksRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnlDO0FBQ25CO0FBQ2M7O0FBRXhDO0FBQ0EsTUFBTSw2REFBK0IsV0FBVyw2REFBK0I7QUFDL0U7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsa0VBQTRCO0FBQy9DLGdCQUFnQiwrREFBeUI7QUFDekMsSUFBSSxxREFBVztBQUNmO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1YwQjtBQUNtQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdFQUFrQztBQUN4QyxJQUFJLGdFQUFrQztBQUN0QyxHQUFH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QUE4QixrRUFBNEI7QUFDMUQsOEJBQThCLGtFQUE0QjtBQUMxRCw4QkFBOEIsa0VBQTRCO0FBQzFELE9BQU87QUFDUCw4QkFBOEIsa0VBQTRCO0FBQzFELDhCQUE4QixrRUFBNEI7QUFDMUQsOEJBQThCLGtFQUE0QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEU7Ozs7OztVQ3hDaEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XG5cbmdhbWUoKTsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgaWZDZWxsRW1wdHkgZnJvbSAnLi9pZkNlbGxFbXB0eSc7XG5cbmNvbnN0IGNsaWNrQ2VsbCA9IChldmVudCkgPT4ge1xuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgJiYgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydChcIlBsZWFzZSBFbnRlciBBbGwgUGxheWVyJ3MgTmFtZXMuXCIpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBFbnRlciBBbGwgUGxheWVyJ3MgTmFtZXNcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3ltYm9sID0gZ2FtZS5jdXJyZW50UGxheWVyLmdldFN5bWJvbCgpO1xuICAgIGNvbnN0IGltZyA9IGdhbWUuY3VycmVudFBsYXllci5nZXRJbWcoKTtcbiAgICBpZkNlbGxFbXB0eShldmVudCwgc3ltYm9sLCBpbWcpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGlja0NlbGw7XG4iLCJjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcbmNvbnN0IG5hbWVQbGF5ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR3bycpO1xuY29uc3QgYWxsSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLWl0ZW0nKTtcbmNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcbmNvbnN0IEljb25zID0gW107XG5jb25zdCByb3VuZENvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybi1jb3VudGVyJyk7XG5jb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xuY29uc3QgcGxheWVyVHdvSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVQbGF5ZXJUd28nKTtcbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbmNvbnN0IGNhbGwgPSAoKSA9PiBjb25zb2xlLmxvZyhhbGxJY29ucyk7XG5jb25zdCBpbml0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0R2FtZUJ1dHRvbicpO1xuXG5leHBvcnQge1xuICBjYWxsLFxuICBJY29ucywgYWxsSWNvbnMsXG4gIG5hbWVQbGF5ZXJPbmUsXG4gIG5hbWVQbGF5ZXJUd28sXG4gIHBsYXllclR1cm5JbmRpY2F0b3IsXG4gIHJvdW5kQ291bnRlcixcbiAgcGxheWVyT25lSWNvbixcbiAgcGxheWVyVHdvSWNvbixcbiAgY2VsbHMsXG4gIGluaXRCdXR0b24sXG59OyIsImltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpO1xuY29uc3QgcmVtb3ZlRm9ybSA9ICgpID0+IHtcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcbmNvbnN0IGFkZEZvcm0gPSAoKSA9PiB7XG4gIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn07XG5jb25zdCBkaXNwbGF5SWNvbiA9IChpY29uLCBjb250YWluZXIpID0+IHtcbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFbGVtZW50LnNyYyA9IGljb247XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbn07XG5jb25zdCBwYWludEJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG59O1xuY29uc3QgZGlzYWJsZUJhY2tncm91bmQgPSAoY29sb3IsIGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMjU2LCAyNTYsIDI1NiwgMC41KSc7XG59O1xuY29uc3QgaW5pdGlhbEJhY2tncm91bmQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xufTtcbmNvbnN0IGRpc3BsYXlSb3VuZHMgPSAoZWxlbWVudCkgPT4ge1xuICBpZiAoZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9PT0gJ05vIFR1cm5zIFlldCcpIHtcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMSc7XG4gIH0gZWxzZSB7XG4gICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9IGBUdXJuICR7ZWxlbWVudH0uYDtcbiAgfVxuICBnYW1lLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gYEl0IGlzICR7Z2FtZS5vcHBvc2l0ZVBsYXllci5nZXROYW1lKCl9J3MgdHVybmA7XG59O1xuXG5leHBvcnQge1xuICBhZGRGb3JtLFxuICBpbml0aWFsQmFja2dyb3VuZCxcbiAgcmVtb3ZlRm9ybSxcbiAgZGlzcGxheVJvdW5kcyxcbiAgLy8gcGxheWVyVHVybkluZGljYXRvciwgd2h5ID9cbiAgZGlzcGxheUljb24sXG4gIHBhaW50QmFja2dyb3VuZCxcbiAgZGlzYWJsZUJhY2tncm91bmQsXG59O1xuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgcGxheWVySWNvbnMgZnJvbSAnLi9wbGF5ZXJJY29ucyc7XG5pbXBvcnQgZ2FtZUluaXQgZnJvbSAnLi9nYW1lSW5pdCc7XG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxuY29uc3QgZ2FtZSA9ICgpID0+IHtcbiAgY29uc3QgY291bnQgPSAxO1xuICBsZXQgcGxheWVyT25lO1xuICBsZXQgcGxheWVyVHdvO1xuICBjb25zdCBudW1iZXJPZlBsYXllcnMgPSAxO1xuICAvLyBjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcbiAgLy8gY29uc3QgbmFtZVBsYXllclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHdvJyk7XG4gIC8vIGNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1pdGVtJyk7XG4gIC8vIGNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcbiAgY29uc3QgY3VycmVudFBsYXllciA9ICcnO1xuICBjb25zdCBvcHBvc2l0ZVBsYXllciA9ICcnO1xuICBkb21FbGVtZW50cy5pbml0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZUluaXQpO1xuICAvLyBjb25zdCBJY29ucyA9IFtdO1xuICAvLyBjb25zdCByb3VuZENvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybi1jb3VudGVyJyk7XG4gIC8vIGNvbnN0IHBsYXllck9uZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyT25lJyk7XG4gIC8vIGNvbnN0IHBsYXllclR3b0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUGxheWVyVHdvJyk7XG4gIGRvbUVsZW1lbnRzLmFsbEljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVySWNvbnMsIGZhbHNlKTtcbiAgfSk7XG4gIGdhbWVib2FyZCgpO1xuICAvLyByZXR1cm4geyBnYW1lSW5pdCwgZ2FtZUJvYXJkIH07XG4gIHJldHVybiB7XG4gICAgY291bnQsXG4gICAgcGxheWVyT25lLFxuICAgIHBsYXllclR3byxcbiAgICBudW1iZXJPZlBsYXllcnMsXG4gICAgY3VycmVudFBsYXllcixcbiAgICBvcHBvc2l0ZVBsYXllcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0ICogYXMgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5jb25zdCBnYW1lSW5pdCA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ3N1cCBwZXJybycpO1xuICBpZiAoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZS52YWx1ZSA9PT0gJycgfHwgZG9tRWxlbWVudHMubmFtZVBsYXllclR3by52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydChcIlBsZWFzZSBhZGQgYm90aCBwbGF5ZXJzJyBuYW1lcyB0byBjb250aW51ZS5cIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChkb21FbGVtZW50cy5JY29ucy5sZW5ndGggPCAyKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBjaGFyYWN0ZXIgZm9yIGJvdGggcGxheWVycyB0byBjb250aW51ZS4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgIT09ICcnICYmIGRvbUVsZW1lbnRzLkljb25zLmxlbmd0aCA9PT0gMikge1xuICAgIGdhbWUucGxheWVyT25lID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUsICdYJywgMSwgZG9tRWxlbWVudHMuSWNvbnNbMF0sICdyZ2JhKDE0NCwgMTY0LCAxNzQsIDAuOCcpO1xuICAgIGdhbWUucGxheWVyVHdvID0gcGxheWVyKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUsICdPJywgMiwgZG9tRWxlbWVudHMuSWNvbnNbMV0sICdyZ2JhKDI0MSwgMTk2LCAxNSwgMC44Jyk7XG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XG4gICAgZ2FtZS5vcHBvc2l0ZVBsYXllciA9IGdhbWUucGxheWVyVHdvO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihnYW1lLnBsYXllck9uZS5nZXRJbWcoKSwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XG4gICAgZG9tTWFuaXB1bGF0aW9uLnBhaW50QmFja2dyb3VuZChnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5SWNvbihnYW1lLnBsYXllclR3by5nZXRJbWcoKSwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gICAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSBgSXQncyAke2dhbWUuY3VycmVudFBsYXllci5nZXROYW1lKCl9J3MgdHVybmA7XG4gICAgZG9tTWFuaXB1bGF0aW9uLnJlbW92ZUZvcm0oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lSW5pdDsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCBjbGlja0NlbGwgZnJvbSAnLi9jbGlja0NlbGwnO1xuaW1wb3J0IGlmQ2VsbEVtcHR5IGZyb20gJy4vaWZDZWxsRW1wdHknO1xuaW1wb3J0IHJlc2V0IGZyb20gJy4vcmVzZXQnO1xuaW1wb3J0IHdpbm5pbmdWYWxpZGF0aW9uIGZyb20gJy4vd2lubmluZ1ZhbGlkYXRpb25zJztcbmltcG9ydCB1cGRhdGVCb2FyZEFycmF5IGZyb20gJy4vdXBkYXRlQm9hcmQnO1xuaW1wb3J0IHBsYXllclN3aXRjaCBmcm9tICcuL3BsYXllclN3aXRjaCc7XG5cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2VsbCwgZmFsc2UpKTtcbiAgLy8gaXQgc2VlbXMgbGlrZSB3ZSBkb24ndCBuZWVkIHRvIHJldHVybiBhbnl0aGluZ1xuICAvLyBSb3J5IHRoaW5rcyB0aGF0IHRoZSBtb3N0IGNydWNpYWwgcmVmYWN0b3JpbmcgcGFydCBvZiB0aGlzIGlzIHdoZXJlIGFyZSB3ZSBjYWxsaW5nIGdhbWVib2FyZC5cbiAgLy8gcmV0dXJuIHsgY2xpY2tDZWxsIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7IiwiaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XG5pbXBvcnQgcGxheWVyU3dpdGNoIGZyb20gJy4vcGxheWVyU3dpdGNoJztcblxuY29uc3QgaWZDZWxsRW1wdHkgPSAoZXZlbnQsIHN5bWJvbCwgaW1nKSA9PiB7XG4gIGNvbnN0IGltZ0UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nRS5zcmMgPSBpbWc7XG4gIGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGFzeW1ib2wgPSBzeW1ib2w7XG4gIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChpbWdFKTtcbiAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSk7XG4gIHBsYXllclN3aXRjaCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaWZDZWxsRW1wdHk7IiwiY29uc3QgcGxheWVyID0gKG5hbWUsIHN5bWJvbCwgcGxheWVyTnVtYmVyLCBpbWcsIGJhY2tncm91bmQpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGdldFN5bWJvbCA9ICgpID0+IHN5bWJvbDtcbiAgY29uc3QgZ2V0SW1nID0gKCkgPT4gaW1nO1xuICBjb25zdCBnZXROdW1iZXIgPSAoKSA9PiBwbGF5ZXJOdW1iZXI7XG4gIGNvbnN0IGdldEJhY2tncm91bmQgPSAoKSA9PiBiYWNrZ3JvdW5kO1xuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0U3ltYm9sLFxuICAgIGdldE51bWJlcixcbiAgICBnZXRJbWcsXG4gICAgZ2V0QmFja2dyb3VuZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiLCJpbXBvcnQgeyBJY29ucywgY2FsbCwgYWxsSWNvbnMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IGNob29zZVBsYXllckljb24gPSAoZXZlbnQpID0+IHtcbiAgLy8gY2FsbCgpO1xuICBjb25zb2xlLmxvZyhJY29ucyk7XG4gIGNvbnN0IGFyciA9IEljb25zO1xuICBjb25zdCBjaG9zZW5JY29uID0gZXZlbnQ7XG4gIGlmIChnYW1lLm51bWJlck9mUGxheWVyID09PSAxKSB7XG4gICAgaWYgKGFyclswXSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcycpLmlkID0gJyc7XG4gICAgICBkb21FbGVtZW50cy5JY29uc1swXSA9IGNob3Nlbkljb24uc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnIucHVzaChjaG9zZW5JY29uLnNyYyk7XG4gICAgfVxuICAgIGNob3Nlbkljb24uaWQgPSAnYXZvaWQtY2xpY2tzJztcbiAgICBnYW1lLm51bWJlck9mUGxheWVyID0gMjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoYXJyWzFdKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZvaWQtY2xpY2tzLXAyJykuaWQgPSAnJztcbiAgICAgIGFyclsxXSA9IGNob3Nlbkljb24uc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnIucHVzaChjaG9zZW5JY29uLnNyYyk7XG4gICAgfVxuXG4gICAgY2hvc2VuSWNvbi5pZCA9ICdhdm9pZC1jbGlja3MtcDInO1xuICAgIGdhbWUubnVtYmVyT2ZQbGF5ZXIgPSAxO1xuICB9XG5cbiAgcmV0dXJuIHsgYXJyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaG9vc2VQbGF5ZXJJY29uOyIsImNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vZG9tTWFuaXB1bGF0aW9uJyk7XG5jb25zdCByZXNldCA9IHJlcXVpcmUoJy4vcmVzZXQnKTtcbmNvbnN0IHdpbm5pbmdWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi93aW5uaW5nVmFsaWRhdGlvbnMnKTtcbmNvbnN0IHVwZGF0ZUJvYXJkQXJyYXkgPSByZXF1aXJlKCcuL3VwZGF0ZUJvYXJkJyk7XG5jb25zdCBkb21FbGVtZW50cyA9IHJlcXVpcmUoJy4vZG9tRWxlbWVudHMnKTtcbmNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcblxuY29uc3QgcGxheWVyU3dpdGNoID0gKCkgPT4ge1xuICBzdHlsZXMuZGlzcGxheVJvdW5kcyhnYW1lLmNvdW50ICsgMSk7XG5cbiAgaWYgKHdpbm5pbmdWYWxpZGF0aW9uKHVwZGF0ZUJvYXJkQXJyYXkoKSwgZ2FtZS5jdXJyZW50UGxheWVyLmdldFN5bWJvbCgpKSA9PT0gZmFsc2UgJiYgZ2FtZS5jb3VudCA9PT0gOSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVNYXRjaCA9IGNvbmZpcm0oXCJJdCdzIGEgZHJhdyEgV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9cIik7XG4gICAgICBpZiAocmVNYXRjaCkge1xuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnSG93IHNhZC4nKTtcbiAgICAgIH1cbiAgICB9LCA0NTApO1xuICB9IGVsc2UgaWYgKHdpbm5pbmdWYWxpZGF0aW9uKHVwZGF0ZUJvYXJkQXJyYXkoKSwgZ2FtZS5jdXJyZW50UGxheWVyLmdldFN5bWJvbCgpKSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVtYXRjaCA9IGNvbmZpcm0oXG4gICAgICAgIGAke2dhbWUuY3VycmVudFBsYXllci5nZXROYW1lKCl9IGhhcyB3b24uIFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/YCxcbiAgICAgICk7XG4gICAgICBpZiAocmVtYXRjaCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnTG9zZXIuJyk7XG4gICAgICB9XG4gICAgfSwgNDUwKTtcbiAgfSBlbHNlIGlmIChnYW1lLm9wcG9zaXRlUGxheWVyLmdldE51bWJlcigpID09PSAxKSB7XG4gICAgc3R5bGVzLmRpc2FibGVCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pO1xuICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUucGxheWVyT25lO1xuICAgIGdhbWUub3Bwb3NpdGVQbGF5ZXIgPSBnYW1lLnBsYXllclR3bztcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGdhbWUuY3VycmVudFBsYXllci5nZXRCYWNrZ3JvdW5kKCksIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcbiAgICBnYW1lLmN1cnJlbnRQbGF5ZXIgPSBnYW1lLnBsYXllclR3bztcbiAgICBnYW1lLm9wcG9zaXRlUGxheWVyID0gZ2FtZS5wbGF5ZXJPbmU7XG4gICAgc3R5bGVzLnBhaW50QmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcbiAgfVxuICBnYW1lLmNvdW50Kys7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJTd2l0Y2g7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IGNsaWNrQ2VsbCBmcm9tICcuL2NsaWNrQ2VsbCc7XG5pbXBvcnQgKiBhcyBkb21NYW5pcHVsYXRpb24gZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nOyBpbXBvcnQgY2hvb3NlUGxheWVySWNvbiBmcm9tICcuL3BsYXllckljb25zJztcblxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLmNlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDZWxsLCBmYWxzZSk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBlbGVtZW50LmRhdGFzZXQuZGF0YXN5bWJvbCA9ICcnO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5pbml0aWFsQmFja2dyb3VuZChlbGVtZW50KTtcbiAgICBnYW1lLmNvdW50ID0gMTtcbiAgICBkb21FbGVtZW50cy5yb3VuZENvdW50ZXIuaW5uZXJIVE1MID0gJ1R1cm4gMS4nO1xuICAgIGRvbUVsZW1lbnRzLnBsYXllclR1cm5JbmRpY2F0b3IuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbi5pbm5lckhUTUwgPSAnJztcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uLmlubmVySFRNTCA9ICcnO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kaXNhYmxlQmFja2dyb3VuZChnYW1lLmN1cnJlbnRQbGF5ZXIuZ2V0QmFja2dyb3VuZCgpLCBkb21FbGVtZW50cy5wbGF5ZXJPbmVJY29uKTtcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzYWJsZUJhY2tncm91bmQoZ2FtZS5jdXJyZW50UGxheWVyLmdldEJhY2tncm91bmQoKSwgZG9tRWxlbWVudHMucGxheWVyVHdvSWNvbik7XG4gICAgZG9tRWxlbWVudHMuYWxsSWNvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZVBsYXllckljb24sIGZhbHNlKTtcbiAgICB9KTtcbiAgICBkb21NYW5pcHVsYXRpb24uYWRkRm9ybSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2V0OyIsImNvbnN0IHVwZGF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGNlbGxzQXJyYXkgPSBBcnJheS5mcm9tKGNlbGxzKTtcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSBjZWxsc0FycmF5Lm1hcChcbiAgICAoY2VsbCA9PiBjZWxsLmRhdGFzZXQuZGF0YXN5bWJvbCksXG4gICk7XG4gIHJldHVybiByZW5kZXJCb2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUJvYXJkQXJyYXk7IiwiaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3Qgd2lubmluZ1ZhbGlkYXRpb24gPSAoYXJyYXksIHN5bWJvbCkgPT4ge1xuICBsZXQgcm91bmRXb24gPSBmYWxzZTtcbiAgY29uc3Qgd2lubmluZ0NvbmRpdGlvbnMgPSBbXG4gICAgWzAsIDEsIDJdLFxuICAgIFszLCA0LCA1XSxcbiAgICBbNiwgNywgOF0sXG4gICAgWzAsIDMsIDZdLFxuICAgIFsxLCA0LCA3XSxcbiAgICBbMiwgNSwgOF0sXG4gICAgWzAsIDQsIDhdLFxuICAgIFsyLCA0LCA2XSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpICs9IDEpIHtcbiAgICBjb25zdCB3aW5Db25kaXRpb24gPSB3aW5uaW5nQ29uZGl0aW9uc1tpXTtcbiAgICBjb25zdCBhID0gYXJyYXlbd2luQ29uZGl0aW9uWzBdXTtcbiAgICBjb25zdCBiID0gYXJyYXlbd2luQ29uZGl0aW9uWzFdXTtcbiAgICBjb25zdCBjID0gYXJyYXlbd2luQ29uZGl0aW9uWzJdXTtcbiAgICBjb25zdCBhYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjJHt3aW5Db25kaXRpb25bMF19YCk7XG4gICAgY29uc3QgYmIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7d2luQ29uZGl0aW9uWzFdfWApO1xuICAgIGNvbnN0IGNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblsyXX1gKTtcbiAgICBpZiAoYSA9PT0gc3ltYm9sICYmIGIgPT09IHN5bWJvbCAmJiBjID09PSBzeW1ib2wpIHtcbiAgICAgIHJvdW5kV29uID0gdHJ1ZTtcbiAgICAgIGlmIChnYW1lLmN1cnJlbnRQbGF5ZXIgPT09IGdhbWUucGxheWVyT25lKSB7XG4gICAgICAgIGFhLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIGJiLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICAgIGNjLnN0eWxlLmJhY2tncm91bmQgPSBnYW1lLnBsYXllck9uZS5nZXRCYWNrZ3JvdW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhYS5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJUd28uZ2V0QmFja2dyb3VuZCgpO1xuICAgICAgICBiYi5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJUd28uZ2V0QmFja2dyb3VuZCgpO1xuICAgICAgICBjYy5zdHlsZS5iYWNrZ3JvdW5kID0gZ2FtZS5wbGF5ZXJUd28uZ2V0QmFja2dyb3VuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdW5kV29uO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcm91bmRXb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aW5uaW5nVmFsaWRhdGlvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tYWluLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
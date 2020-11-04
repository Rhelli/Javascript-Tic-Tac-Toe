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
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset */ "./src/js/modules/reset.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _gameInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameInit */ "./src/js/modules/gameInit.js");







const game = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_2__.initButton.addEventListener('click', () => {
    (0,_gameInit__WEBPACK_IMPORTED_MODULE_5__.default)(_domElements__WEBPACK_IMPORTED_MODULE_2__.namePlayerOne, _domElements__WEBPACK_IMPORTED_MODULE_2__.namePlayerTwo, _playerIcons__WEBPACK_IMPORTED_MODULE_1__.Icons, _domElements__WEBPACK_IMPORTED_MODULE_2__.playerOneIcon, _domElements__WEBPACK_IMPORTED_MODULE_2__.playerTwoIcon)
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
    _domManipulation__WEBPACK_IMPORTED_MODULE_1__.paintBackground('rgba(144, 164, 174, 0.8', playerOneIcon);
    _domManipulation__WEBPACK_IMPORTED_MODULE_1__.displayIcon(Icons[1], playerTwoIcon);
    const currentPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)('currentPlayer')
    _domElements__WEBPACK_IMPORTED_MODULE_0__.playerTurnIndicator.innerHTML = `It's ${currentPlayer.name}'s turn`;
    _domManipulation__WEBPACK_IMPORTED_MODULE_1__.removeForm();
  }
}
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
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/modules/domElements.js");


const reset = (formContainer) => {
  window.localStorage.clear();
  window.location.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvZ2FtZUluaXQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvaWZDZWxsRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9wbGF5ZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvcGxheWVyU3dpdGNoLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2UvLi9zcmMvanMvbW9kdWxlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lLy4vc3JjL2pzL21vZHVsZXMvdXBkYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS8uL3NyYy9qcy9tb2R1bGVzL3dpbm5pbmdWYWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXRpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC10aWMtdGFjLXRvZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQyxzREFBSSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeUM7QUFDTDtBQUNNOztBQUU5QztBQUNBLHdCQUF3QiwyREFBWTtBQUNwQyxNQUFNLDZEQUErQixXQUFXLDZEQUErQjtBQUMvRTtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcsU0FBUztBQUNwQixXQUFXLE1BQU07QUFDakIsSUFBSSxxREFBVztBQUNmO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNkM7QUFDQzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XG5cbmdhbWUoKTsiLCJpbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IGlmQ2VsbEVtcHR5IGZyb20gJy4vaWZDZWxsRW1wdHknO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG5jb25zdCBjbGlja0NlbGwgPSAoZXZlbnQpID0+IHtcclxuICBjb25zdCBjdXJyZW50UGxheWVyID0gcmV0cmlldmVJdGVtKCdjdXJyZW50UGxheWVyJyk7XHJcbiAgaWYgKGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnICYmIGRvbUVsZW1lbnRzLm5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XHJcbiAgICBhbGVydChcIlBsZWFzZSBFbnRlciBBbGwgUGxheWVyJ3MgTmFtZXMuXCIpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIEVudGVyIEFsbCBQbGF5ZXIncyBOYW1lc1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBzeW1ib2wgfSA9IGN1cnJlbnRQbGF5ZXI7XHJcbiAgICBjb25zdCB7IGltZyB9ID0gY3VycmVudFBsYXllcjtcclxuICAgIGlmQ2VsbEVtcHR5KGV2ZW50LCBzeW1ib2wsIGltZyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpY2tDZWxsO1xyXG4iLCJjb25zdCBuYW1lUGxheWVyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKTtcclxuY29uc3QgbmFtZVBsYXllclR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHdvJyk7XHJcbmNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1pdGVtJyk7XHJcbmNvbnN0IHBsYXllclR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR1cm4nKTtcclxuY29uc3Qgcm91bmRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tY291bnRlcicpO1xyXG5jb25zdCBwbGF5ZXJPbmVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllck9uZScpO1xyXG5jb25zdCBwbGF5ZXJUd29JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZVBsYXllclR3bycpO1xyXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbmNvbnN0IGluaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRHYW1lQnV0dG9uJyk7XHJcbmNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0QnV0dG9uJyk7XHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgYWxsSWNvbnMsXHJcbiAgbmFtZVBsYXllck9uZSxcclxuICBuYW1lUGxheWVyVHdvLFxyXG4gIHBsYXllclR1cm5JbmRpY2F0b3IsXHJcbiAgcm91bmRDb3VudGVyLFxyXG4gIHBsYXllck9uZUljb24sXHJcbiAgcGxheWVyVHdvSWNvbixcclxuICBjZWxscyxcclxuICBpbml0QnV0dG9uLFxyXG4gIHJlc2V0QnV0dG9uLFxyXG4gIGZvcm1Db250YWluZXIsXHJcbn07IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IHJldHJpZXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKTtcclxuY29uc3QgcmVtb3ZlRm9ybSA9ICgpID0+IHtcclxuICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcbmNvbnN0IGFkZEZvcm0gPSAoKSA9PiB7XHJcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG59O1xyXG5jb25zdCBkaXNwbGF5SWNvbiA9IChpY29uLCBjb250YWluZXIpID0+IHtcclxuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nRWxlbWVudC5zcmMgPSBpY29uO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcclxufTtcclxuY29uc3QgcGFpbnRCYWNrZ3JvdW5kID0gKGNvbG9yLCBlbGVtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XHJcbn07XHJcbmNvbnN0IGRpc2FibGVCYWNrZ3JvdW5kID0gKGNvbG9yLCBlbGVtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMjU2LCAyNTYsIDI1NiwgMC41KSc7XHJcbn07XHJcbmNvbnN0IGluaXRpYWxCYWNrZ3JvdW5kID0gKGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xyXG59O1xyXG5jb25zdCBkaXNwbGF5Um91bmRzID0gKGVsZW1lbnQpID0+IHtcclxuICBjb25zdCBvcHBvc2l0ZVBsYXllciA9IHJldHJpZXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInKTtcclxuICBpZiAoZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9PT0gJ05vIFR1cm5zIFlldCcpIHtcclxuICAgIGRvbUVsZW1lbnRzLnJvdW5kQ291bnRlci5pbm5lckhUTUwgPSAnVHVybiAxJztcclxuICB9IGVsc2Uge1xyXG4gICAgZG9tRWxlbWVudHMucm91bmRDb3VudGVyLmlubmVySFRNTCA9IGBUdXJuICR7ZWxlbWVudH0uYDtcclxuICB9XHJcbiAgZG9tRWxlbWVudHMucGxheWVyVHVybkluZGljYXRvci5pbm5lckhUTUwgPSBgSXQgaXMgJHtvcHBvc2l0ZVBsYXllci5uYW1lfSdzIHR1cm5gO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBhZGRGb3JtLFxyXG4gIGluaXRpYWxCYWNrZ3JvdW5kLFxyXG4gIHJlbW92ZUZvcm0sXHJcbiAgZGlzcGxheVJvdW5kcyxcclxuICBkaXNwbGF5SWNvbixcclxuICBwYWludEJhY2tncm91bmQsXHJcbiAgZGlzYWJsZUJhY2tncm91bmQsXHJcbn07XHJcbiIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xyXG5pbXBvcnQgcGxheWVySWNvbnMsIHsgSWNvbnMgfSBmcm9tICcuL3BsYXllckljb25zJztcclxuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCByZXNldCBmcm9tICcuL3Jlc2V0JztcclxuaW1wb3J0ICogYXMgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJ1xyXG5pbXBvcnQgYWZ0ZXJHYW1lSW5pdCBmcm9tICcuL2dhbWVJbml0JztcclxuXHJcbmNvbnN0IGdhbWUgPSAoKSA9PiB7XHJcbiAgZG9tRWxlbWVudHMuaW5pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGFmdGVyR2FtZUluaXQoZG9tRWxlbWVudHMubmFtZVBsYXllck9uZSwgZG9tRWxlbWVudHMubmFtZVBsYXllclR3bywgSWNvbnMsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24sIGRvbUVsZW1lbnRzLnBsYXllclR3b0ljb24pXHJcbiAgfSk7XHJcbiAgZG9tRWxlbWVudHMucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZXNldChkb21FbGVtZW50cy5mb3JtQ29udGFpbmVyKTtcclxuICB9KTtcclxuICBkb21FbGVtZW50cy5hbGxJY29ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBsYXllckljb25zKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZ2FtZWJvYXJkKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lOyIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgKiBhcyBkb21NYW5pcHVsYXRpb24gZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xyXG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtLCBzYXZlSXRlbSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcclxuaW1wb3J0IHsgSWNvbnMgfSBmcm9tICcuL3BsYXllckljb25zJztcclxuXHJcbmNvbnN0IGdhbWVJbml0ID0gKG5hbWVQbGF5ZXJPbmUsIG5hbWVQbGF5ZXJUd28sIEljb25zKSA9PiB7XHJcbiAgaWYgKG5hbWVQbGF5ZXJPbmUudmFsdWUgPT09ICcnIHx8IG5hbWVQbGF5ZXJUd28udmFsdWUgPT09ICcnKSB7XHJcbiAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgYWRkIGJvdGggcGxheWVycycgbmFtZXMgdG8gY29udGludWUuXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoSWNvbnMubGVuZ3RoIDwgMikge1xyXG4gICAgd2luZG93LmFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgY2hhcmFjdGVyIGZvciBib3RoIHBsYXllcnMgdG8gY29udGludWUuJyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChuYW1lUGxheWVyT25lLnZhbHVlICE9PSAnJyAmJiBuYW1lUGxheWVyVHdvLnZhbHVlICE9PSAnJyAmJiBJY29ucy5sZW5ndGggPT09IDIpIHtcclxuICAgIGNvbnN0IHBsYXllck9uZSA9IHBsYXllcihuYW1lUGxheWVyT25lLnZhbHVlLCAnWCcsIDEsIEljb25zWzBdLCAncmdiYSgxNDQsIDE2NCwgMTc0LCAwLjgnKTtcclxuICAgIGNvbnN0IHBsYXllclR3byA9IHBsYXllcihuYW1lUGxheWVyVHdvLnZhbHVlLCAnTycsIDIsIEljb25zWzFdLCAncmdiYSgyNDEsIDE5NiwgMTUsIDAuOCcpO1xyXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcclxuICAgIGNvbnN0IG9wcG9zaXRlUGxheWVyID0gcGxheWVyVHdvO1xyXG4gICAgY29uc3QgY291bnQgPSAxO1xyXG4gICAgc2F2ZUl0ZW0oJ3BsYXllck9uZScsIHBsYXllck9uZSk7XHJcbiAgICBzYXZlSXRlbSgncGxheWVyVHdvJywgcGxheWVyVHdvKTtcclxuICAgIHNhdmVJdGVtKCdjdXJyZW50UGxheWVyJywgY3VycmVudFBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnY291bnQnLCBjb3VudCk7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuY29uc3QgYWZ0ZXJHYW1lSW5pdCA9IChuYW1lUGxheWVyT25lLCBuYW1lUGxheWVyVHdvLCBJY29ucywgcGxheWVyT25lSWNvbiwgcGxheWVyVHdvSWNvbikgPT4ge1xyXG5cclxuICBpZiAoZ2FtZUluaXQobmFtZVBsYXllck9uZSwgbmFtZVBsYXllclR3bywgSWNvbnMsIGRvbU1hbmlwdWxhdGlvbikpIHtcclxuICAgIGdhbWVJbml0KG5hbWVQbGF5ZXJPbmUsIG5hbWVQbGF5ZXJUd28sIEljb25zLCBkb21NYW5pcHVsYXRpb24pO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRpc3BsYXlJY29uKEljb25zWzBdLCBwbGF5ZXJPbmVJY29uKTtcclxuICAgIGRvbU1hbmlwdWxhdGlvbi5wYWludEJhY2tncm91bmQoJ3JnYmEoMTQ0LCAxNjQsIDE3NCwgMC44JywgcGxheWVyT25lSWNvbik7XHJcbiAgICBkb21NYW5pcHVsYXRpb24uZGlzcGxheUljb24oSWNvbnNbMV0sIHBsYXllclR3b0ljb24pO1xyXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHJldHJpZXZlSXRlbSgnY3VycmVudFBsYXllcicpXHJcbiAgICBkb21FbGVtZW50cy5wbGF5ZXJUdXJuSW5kaWNhdG9yLmlubmVySFRNTCA9IGBJdCdzICR7Y3VycmVudFBsYXllci5uYW1lfSdzIHR1cm5gO1xyXG4gICAgZG9tTWFuaXB1bGF0aW9uLnJlbW92ZUZvcm0oKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYWZ0ZXJHYW1lSW5pdDtcclxuZXhwb3J0IHsgZ2FtZUluaXQgfSIsImltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgY2xpY2tDZWxsIGZyb20gJy4vY2xpY2tDZWxsJztcclxuXHJcbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcclxuICBkb21FbGVtZW50cy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNsaWNrQ2VsbChldmVudCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDsiLCJpbXBvcnQgcGxheWVyU3dpdGNoIGZyb20gJy4vcGxheWVyU3dpdGNoJztcclxuXHJcbmNvbnN0IGlmQ2VsbEVtcHR5ID0gKGV2ZW50LCBzeW1ib2wsIGltZykgPT4ge1xyXG4gIGNvbnN0IGltZ0UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWdFLnNyYyA9IGltZztcclxuICBldmVudC50YXJnZXQuZGF0YXNldC5kYXRhc3ltYm9sID0gc3ltYm9sO1xyXG4gIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChpbWdFKTtcclxuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgncHJldmVudC1jbGlja3MnKTtcclxuICBwbGF5ZXJTd2l0Y2goKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlmQ2VsbEVtcHR5OyIsImNvbnN0IHNhdmVJdGVtID0gKHN0cmluZywgb2JqZWN0KSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0cmluZywgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG59O1xuXG5jb25zdCByZXRyaWV2ZUl0ZW0gPSAoc3RyaW5nKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0cmluZykpO1xuXG5leHBvcnQgeyBzYXZlSXRlbSwgcmV0cmlldmVJdGVtIH07IiwiY29uc3QgcGxheWVyID0gKG5hbWUsIHN5bWJvbCwgcGxheWVyTnVtYmVyLCBpbWcsIGJhY2tncm91bmQpID0+ICh7XHJcbiAgbmFtZSxcclxuICBzeW1ib2wsXHJcbiAgcGxheWVyTnVtYmVyLFxyXG4gIGltZyxcclxuICBiYWNrZ3JvdW5kLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiLCJsZXQgbnVtYmVyT2ZQbGF5ZXIgPSAxO1xyXG5jb25zdCBJY29ucyA9IFtdO1xyXG5cclxuY29uc3QgY2hvb3NlUGxheWVySWNvbiA9IChlbGVtZW50KSA9PiB7XHJcbiAgY29uc3QgY2hvc2VuSWNvbiA9IGVsZW1lbnQ7XHJcbiAgaWYgKG51bWJlck9mUGxheWVyID09PSAxKSB7XHJcbiAgICBpZiAoSWNvbnNbMF0pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2b2lkLWNsaWNrcycpLmlkID0gJyc7XHJcbiAgICAgIEljb25zWzBdID0gY2hvc2VuSWNvbi5zcmM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBJY29ucy5wdXNoKGNob3Nlbkljb24uc3JjKTtcclxuICAgIH1cclxuICAgIGNob3Nlbkljb24uaWQgPSAnYXZvaWQtY2xpY2tzJztcclxuICAgIG51bWJlck9mUGxheWVyID0gMjtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKEljb25zWzFdKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdm9pZC1jbGlja3MtcDInKS5pZCA9ICcnO1xyXG4gICAgICBJY29uc1sxXSA9IGNob3Nlbkljb24uc3JjO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgSWNvbnMucHVzaChjaG9zZW5JY29uLnNyYyk7XHJcbiAgICB9XHJcbiAgICBjaG9zZW5JY29uLmlkID0gJ2F2b2lkLWNsaWNrcy1wMic7XHJcbiAgICBudW1iZXJPZlBsYXllciA9IDE7XHJcbiAgfVxyXG4gIHJldHVybiB7IEljb25zIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaG9vc2VQbGF5ZXJJY29uO1xyXG5leHBvcnQgeyBJY29ucyB9OyIsImltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XHJcbmltcG9ydCByZXNldCBmcm9tICcuL3Jlc2V0JztcclxuaW1wb3J0IHdpbm5pbmdWYWxpZGF0aW9uIGZyb20gJy4vd2lubmluZ1ZhbGlkYXRpb25zJztcclxuaW1wb3J0IHVwZGF0ZUJvYXJkQXJyYXkgZnJvbSAnLi91cGRhdGVCb2FyZCc7XHJcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW0sIHNhdmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgcGxheWVyU3dpdGNoID0gKCkgPT4ge1xyXG4gIGxldCBjdXJyZW50UGxheWVyID0gcmV0cmlldmVJdGVtKCdjdXJyZW50UGxheWVyJyk7XHJcbiAgbGV0IG9wcG9zaXRlUGxheWVyID0gcmV0cmlldmVJdGVtKCdvcHBvc2l0ZVBsYXllcicpO1xyXG4gIGNvbnN0IHBsYXllck9uZSA9IHJldHJpZXZlSXRlbSgncGxheWVyT25lJyk7XHJcbiAgY29uc3QgcGxheWVyVHdvID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJUd28nKTtcclxuICBsZXQgY291bnQgPSByZXRyaWV2ZUl0ZW0oJ2NvdW50Jyk7XHJcbiAgc3R5bGVzLmRpc3BsYXlSb3VuZHMoY291bnQgKyAxKTtcclxuICBpZiAod2lubmluZ1ZhbGlkYXRpb24odXBkYXRlQm9hcmRBcnJheSgpLCBjdXJyZW50UGxheWVyLnN5bWJvbCkgPT09IGZhbHNlICYmIGNvdW50ID09PSA5KSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgcmVNYXRjaCA9IGNvbmZpcm0oXCJJdCdzIGEgZHJhdyEgV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj9cIik7XHJcbiAgICAgIGlmIChyZU1hdGNoKSB7XHJcbiAgICAgICAgcmVzZXQoZG9tRWxlbWVudHMuY2VsbHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdIb3cgc2FkLicpO1xyXG4gICAgICB9XHJcbiAgICB9LCA0NTApO1xyXG4gIH0gZWxzZSBpZiAod2lubmluZ1ZhbGlkYXRpb24odXBkYXRlQm9hcmRBcnJheSgpLCBjdXJyZW50UGxheWVyLnN5bWJvbCkpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCByZW1hdGNoID0gY29uZmlybShcclxuICAgICAgICBgJHtjdXJyZW50UGxheWVyLm5hbWV9IGhhcyB3b24uIFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/YCxcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlbWF0Y2ggPT09IHRydWUpIHtcclxuICAgICAgICByZXNldChkb21FbGVtZW50cy5jZWxscyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0xvc2VyLicpO1xyXG4gICAgICB9XHJcbiAgICB9LCA0NTApO1xyXG4gIH0gZWxzZSBpZiAob3Bwb3NpdGVQbGF5ZXIucGxheWVyTnVtYmVyID09PSAxKSB7XHJcbiAgICBzdHlsZXMuZGlzYWJsZUJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XHJcbiAgICBvcHBvc2l0ZVBsYXllciA9IHBsYXllclR3bztcclxuICAgIHNhdmVJdGVtKCdjdXJyZW50UGxheWVyJywgY3VycmVudFBsYXllcik7XHJcbiAgICBzYXZlSXRlbSgnb3Bwb3NpdGVQbGF5ZXInLCBvcHBvc2l0ZVBsYXllcik7XHJcbiAgICBzdHlsZXMucGFpbnRCYWNrZ3JvdW5kKGN1cnJlbnRQbGF5ZXIuYmFja2dyb3VuZCwgZG9tRWxlbWVudHMucGxheWVyT25lSWNvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0eWxlcy5kaXNhYmxlQmFja2dyb3VuZChjdXJyZW50UGxheWVyLmJhY2tncm91bmQsIGRvbUVsZW1lbnRzLnBsYXllck9uZUljb24pO1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllclR3bztcclxuICAgIG9wcG9zaXRlUGxheWVyID0gcGxheWVyT25lO1xyXG4gICAgc2F2ZUl0ZW0oJ2N1cnJlbnRQbGF5ZXInLCBjdXJyZW50UGxheWVyKTtcclxuICAgIHNhdmVJdGVtKCdvcHBvc2l0ZVBsYXllcicsIG9wcG9zaXRlUGxheWVyKTtcclxuICAgIHN0eWxlcy5wYWludEJhY2tncm91bmQoY3VycmVudFBsYXllci5iYWNrZ3JvdW5kLCBkb21FbGVtZW50cy5wbGF5ZXJUd29JY29uKTtcclxuICB9XHJcbiAgY291bnQrKztcclxuICBzYXZlSXRlbSgnY291bnQnLCBjb3VudCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJTd2l0Y2g7IiwiaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcblxyXG5jb25zdCByZXNldCA9IChmb3JtQ29udGFpbmVyKSA9PiB7XHJcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNldDsiLCJpbXBvcnQgeyBjZWxscyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5cclxuY29uc3QgdXBkYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcclxuICBjb25zdCBjZWxsc0FycmF5ID0gQXJyYXkuZnJvbShjZWxscyk7XHJcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSBjZWxsc0FycmF5Lm1hcChcclxuICAgIChjZWxsID0+IGNlbGwuZGF0YXNldC5kYXRhc3ltYm9sKSxcclxuICApO1xyXG4gIHJldHVybiByZW5kZXJCb2FyZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUJvYXJkQXJyYXk7IiwiaW1wb3J0IHsgcmV0cmlldmVJdGVtIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3Qgd2lubmluZ1ZhbGlkYXRpb24gPSAoYXJyYXksIHN5bWJvbCkgPT4ge1xyXG4gIGNvbnN0IHBsYXllck9uZSA9IHJldHJpZXZlSXRlbSgncGxheWVyT25lJyk7XHJcbiAgY29uc3QgcGxheWVyVHdvID0gcmV0cmlldmVJdGVtKCdwbGF5ZXJUd28nKTtcclxuICBjb25zdCBjdXJyZW50UGxheWVyID0gcmV0cmlldmVJdGVtKCdjdXJyZW50UGxheWVyJyk7XHJcbiAgbGV0IHJvdW5kV29uID0gZmFsc2U7XHJcbiAgY29uc3Qgd2lubmluZ0NvbmRpdGlvbnMgPSBbXHJcbiAgICBbMCwgMSwgMl0sXHJcbiAgICBbMywgNCwgNV0sXHJcbiAgICBbNiwgNywgOF0sXHJcbiAgICBbMCwgMywgNl0sXHJcbiAgICBbMSwgNCwgN10sXHJcbiAgICBbMiwgNSwgOF0sXHJcbiAgICBbMCwgNCwgOF0sXHJcbiAgICBbMiwgNCwgNl0sXHJcbiAgXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNzsgaSArPSAxKSB7XHJcbiAgICBjb25zdCB3aW5Db25kaXRpb24gPSB3aW5uaW5nQ29uZGl0aW9uc1tpXTtcclxuICAgIGNvbnN0IGEgPSBhcnJheVt3aW5Db25kaXRpb25bMF1dO1xyXG4gICAgY29uc3QgYiA9IGFycmF5W3dpbkNvbmRpdGlvblsxXV07XHJcbiAgICBjb25zdCBjID0gYXJyYXlbd2luQ29uZGl0aW9uWzJdXTtcclxuICAgIGNvbnN0IGFhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblswXX1gKTtcclxuICAgIGNvbnN0IGJiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblsxXX1gKTtcclxuICAgIGNvbnN0IGNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke3dpbkNvbmRpdGlvblsyXX1gKTtcclxuICAgIGlmIChhID09PSBzeW1ib2wgJiYgYiA9PT0gc3ltYm9sICYmIGMgPT09IHN5bWJvbCkge1xyXG4gICAgICByb3VuZFdvbiA9IHRydWU7XHJcbiAgICAgIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXJPbmUpIHtcclxuICAgICAgICBhYS5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyT25lLmJhY2tncm91bmQ7XHJcbiAgICAgICAgYmIuc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllck9uZS5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGNjLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJPbmUuYmFja2dyb3VuZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhYS5zdHlsZS5iYWNrZ3JvdW5kID0gcGxheWVyVHdvLmJhY2tncm91bmQ7XHJcbiAgICAgICAgYmIuc3R5bGUuYmFja2dyb3VuZCA9IHBsYXllclR3by5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGNjLnN0eWxlLmJhY2tncm91bmQgPSBwbGF5ZXJUd28uYmFja2dyb3VuZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcm91bmRXb247XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByb3VuZFdvbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpbm5pbmdWYWxpZGF0aW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
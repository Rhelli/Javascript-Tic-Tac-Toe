const gameboard = require('./gameboard');
const styles = require('./domManipulation');
const playerCreator = require('./player');
const playerIcons = require('./playerIcons');
const gameInit = require('./gameInit');
const ifCellEmpty = require('./ifCellEmpty');
const clickCell = require('./clickCell.js');
const reset = require('./reset');
const winningValidation = require('./winningValidations');
const updateBoard = require('./updateBoard');
const playerSwitch = require('./playerSwitch');
const domElements = require('./domElements');

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
  // const Icons = [];
  // const roundCounter = document.getElementById('turn-counter');
  // const playerOneIcon = document.getElementById('activePlayerOne');
  // const playerTwoIcon = document.getElementById('activePlayerTwo');

  (function () {
    styles();
    gameboard();
  }());

  domElements.allIcons.forEach((element) => {
    element.addEventListener('click', playerIcons, false);
  });
  // return { gameInit, gameBoard };
  return {
    count: count,
    playerOne: playerOne,
    playerTwo: playerTwo,
    numberOfPlayers: numberOfPlayers,
    currentPlayer: currentPlayer,
    oppositePlayer: oppositePlayer,
  };
};

module.exports = game;
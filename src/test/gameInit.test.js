import { expect } from '@jest/globals';
import { gameInit } from '../js/modules/gameInit';
import { retrieveItem } from '../js/modules/localStorage';

window.alert = jest.fn();
const namePlayerOne = document.createElement('input');
const namePlayerTwo = document.createElement('input');
const namePlayerWrong = document.createElement('input');
namePlayerOne.value = 'Steve';
namePlayerTwo.value = 'Jim';
namePlayerWrong.value = '';

it('returns true when passed the correct parameters', () => {
  expect(gameInit(namePlayerOne, namePlayerTwo, [1, 2])).toBe(true);
});

it("provides an alert and returns false when a name isn't provided", () => {
  expect(gameInit(namePlayerOne, namePlayerWrong, [1, 2])).toBe(false);
});

it('fails if there are less than two icons selected', () => {
  expect(gameInit(namePlayerOne, namePlayerTwo, [1])).toBe(false);
});

it('saves player names and initial count on successful completion', () => {
  gameInit(namePlayerOne, namePlayerTwo, [1, 2]);
  expect(retrieveItem('playerOne').name).toBe('Steve');
  expect(retrieveItem('playerTwo').name).toBe('Jim');
  expect(retrieveItem('count')).toBe(1);
});

it('saves current player as player one and opposite player as player two', () => {
  gameInit(namePlayerOne, namePlayerTwo, [1, 2]);
  expect(retrieveItem('currentPlayer')).toEqual(retrieveItem('playerOne'));
  expect(retrieveItem('oppositePlayer')).toEqual(retrieveItem('playerTwo'));
});

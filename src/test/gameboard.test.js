import { expect, jest } from '@jest/globals';
import player from '../js/modules/player';

const playerOne = player('fun', 'X', 1, 'imagepath', 'backgroundColor');
const playerTwo = player('fan', 'X', 1, 'imagepath', 'backgroundColor');

function mockGameBoard(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const element = document.createElement('div');
const forEachTest = [element, element];
const mockClickCell = jest.fn((event) => event);

mockGameBoard(forEachTest, mockClickCell);

test('adds event listeners to event', () => {
  expect(mockClickCell.mock.calls.length).toBe(2);
});

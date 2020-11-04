import { expect } from '@jest/globals';
import player from '../js/modules/player';

const player1 = player('Alexis', 'O', 2, 'img/cercei.png', '#f1c40f');

it.only('player constructor creates an object with name, symbol, playerNumber, img and background properties', () => {
  expect(typeof player1).toBe(Object);
});
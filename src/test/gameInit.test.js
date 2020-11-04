import { expect } from '@jest/globals';
import gameInit from '../js/modules/gameInit';
import { displayIcon, paintBackground, removeForm } from '../js/modules/domManipulation';

window.alert = jest.fn();

displayIcon = jest.fn();
paintBackground = jest.fn();
removeForm = jest.fn();

const namePlayerOne = document.createElement('input');
namePlayerOne.value = 'Steve';
const namePlayerTwo = document.createElement('input');
namePlayerTwo.value = 'Jim';
const Icons = [1, 2];

it('does not fuck up when we try to run it', () => {
  expect(gameInit(namePlayerOne, namePlayerTwo, Icons)).toBe();
})
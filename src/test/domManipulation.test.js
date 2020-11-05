import * as domManipulation from '../js/modules/domManipulation';
import { roundCounter, playerTurnIndicator } from '../js/modules/domElements';
import player from '../js/modules/player';

jest.mock('../js/modules/domElements', () => ({
  playerTurnIndicator: jest.fn(),
  oppositePlayer: jest.fn(),
}));

const playerOne = player('Ale', 'O', 1, 'no.png', '#404040');
const container = document.createElement('div');

it('removes a form from the container', () => {
  container.id = 'form-container';
  container.style.display = 'flex';
  domManipulation.removeForm(container);
  expect(container.style.display).toBe('none');
});

it('displays a freaking icon', () => {
  const icon = 'icon.something';
  domManipulation.displayIcon(icon, container);
  expect(container).toBeTruthy();
})

it('paints backgrounds of icons', () => {
  domManipulation.paintBackground('#404040', container);
  expect(container).toHaveProperty("style.backgroundColor", 'rgb(64, 64, 64)');
})

it('sets the background of an item to its initial transparent value', () => {
  domManipulation.initialBackground(container);
  expect(container).toHaveProperty("style.backgroundColor", 'transparent');
});

it('displays the round of the game', () => {
  
  domManipulation.displayRounds(1, container, playerOne);
  expect(container.innerHTML).toBe('Turn 1.');
})
import clickCell from '../js/modules/clickCell';
import player from '../js/modules/player';

const playerOne = player('fun', 'X', 1, 'imagepath', 'backgroundColor');
const playerTwo = player('fan', 'X', 1, 'imagepath', 'backgroundColor');
const namePlayerOne = playerOne.name;
const namePlayerTwo = playerTwo.name;
const emptyPlayer = '';
const event = document.createElement('div');
window.alert = jest.fn();

it('passes', () => {
  const currentPlayer = playerOne;
  expect(clickCell(event, namePlayerOne, namePlayerTwo)).toBeTruthy();
});

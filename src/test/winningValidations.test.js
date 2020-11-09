import { expect } from "@jest/globals";
import { retrieveItem } from "../js/modules/localStorage";
import player from "../js/modules/player";
import winningValidation from "../js/modules/winningValidations";

document.body.innerHTML =
  ' <div id = "c0"> </div> <div id = "c1"> </div> <div id = "c2"> </div> ';

test('if a winning combination is given the function returns true', () => {
  const currentPlayer = player('Alexis', 'X', 1, 'something', '#100000');
  const testarr = ['X', 'X', 'X', '', '', '', '', '', ''];

  expect(winningValidation(currentPlayer, testarr, currentPlayer.symbol)).toBe(
    true
  );
});

test("if the grid is full and there's no winning validation, it returns false", () => {
  const currentPlayer = player('Alexis', 'X', 1, 'something', '#100000');
  const testarr = ['X', 'O', 'O',
    'O', 'X', 'X',
    'X', 'X', 'O'];
  expect(winningValidation(currentPlayer, testarr, currentPlayer.symbol)).toBe(
    false
  );
})

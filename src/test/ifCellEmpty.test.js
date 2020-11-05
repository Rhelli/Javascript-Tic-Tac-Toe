
import player from "../js/modules/player";
import ifCellEmpty from "../js/modules/ifCellEmpty";
import mockEvent from "./mockEvent";

const playerOne = player("fun", "X", 1, "imagepath", "backgroundColor");
const playerTwo = player("fan", "X", 1, "imagepath", "backgroundColor");
const namePlayerOne = document.createElement('input')
namePlayerOne.value = ''
const namePlayerTwo = document.createElement('input');
namePlayerTwo.value = playerOne.name
const event = document.createElement("div");
const playerSwitchMock = jest.fn(() => {
  return true;
})

document.body.append(event);
window.alert = jest.fn();

it('calls the playerSwitch function on correct execution', () => {
  ifCellEmpty(playerOne, mockEvent, playerSwitchMock)
  expect(playerSwitchMock()).toBe(true);
})

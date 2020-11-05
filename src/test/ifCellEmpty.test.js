
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
const playerSwitchMock = jest.fn()

document.body.append(event);
window.alert = jest.fn();

it("throws an error if one of the players name is empty", () => {
    expect(ifCellEmpty(playerOne, mockEvent, playerSwitchMock)
    ).toThrowError(new Error("Please Enter All Player's Names"));
});

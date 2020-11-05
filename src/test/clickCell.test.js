import clickCell from "../js/modules/clickCell";
import player from "../js/modules/player";

const playerOne = player("fun", "X", 1, "imagepath", "backgroundColor");
const playerTwo = player("fan", "X", 1, "imagepath", "backgroundColor");
const namePlayerOne = playerOne.name;
const namePlayerTwo = playerTwo.name;
const emptyPlayer = "";
const event = document.createElement("div");

const mockEvent = {
  target: {
    appendChild(imageElement) {
        console.log(imageElement);
      },
      classList: {
        add: [],
      },
    dataset: {
      datasymbol: "",
    },
  },
};

document.body.append(event);
window.alert = jest.fn();

it("passes", () => {
  expect(
    clickCell(mockEvent, namePlayerOne, namePlayerTwo, playerOne)
  ).toBeTruthy();
});

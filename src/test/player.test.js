import { expect } from "@jest/globals";
import player from "../js/modules/player";

const player1 = player("Alexis", "O", 2, "img/cercei.png", "#f1c40f");

it("player constructor creates an object with name properties", () => {
  expect(player1.name).toBe("Alexis");
});

it("player constructor creates an object with name, symbol, playerNumber, img and background properties", () => {
  expect(player1.symbol).toBe("O");
});

it("player constructor creates an object with name, symbol, playerNumber, img and background properties", () => {
  expect(player1.playerNumber).toBe(2);
});

it("player constructor creates an object with name, symbol, playerNumber, img and background properties", () => {
  expect(player1.img).toBe("img/cercei.png");
});

it("player constructor creates an object with name, symbol, playerNumber, img and background properties", () => {
  expect(player1.background).toBe("#f1c40f");
});

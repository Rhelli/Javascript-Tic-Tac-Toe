import choosePlayerIcon from '../js/modules/playerIcons';

const icon1 = document.createElement('img');
icon1.src = 'testSrc';

test.only('Returns an array', () => {
  expect(choosePlayerIcon(icon1)).toBe({ Icons: ['testSrc'] });
});

test('Limits the icon array to two icons', () => {
  expect().toBe();
});

test('Allows player one to re-select a new icon', () => {
  expect().toBe();
});

test("Pushes player one's chosen player icon into the icon array", () => {
  expect().toBe();
});

test("Highlights player one's chosen icon with their color by class addition", () => {
  expect().toBe();
});

test('Allows player one to re-select a new icon', () => {
  expect().toBe();
});

test("Pushes player two's chosen player icon into the icon array", () => {
  expect().toBe();
});

test("Highlights player two's chosen icon with their color by class addition", () => {
  expect().toBe();
});

test('Allows player two to re-select an icon', () => {
  expect().toBe();
});

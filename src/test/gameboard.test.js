import { expect } from '@jest/globals';
import gameboard from '../js/modules/gameboard';

const element = document.createElement('div')
const forEachTest = [element]
const mockClickCell = jest.fn(true);

test('adds event listeners to event', () => {
    // pass foreachetest
    expect(gameboard())
})
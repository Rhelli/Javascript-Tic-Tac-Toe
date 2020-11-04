import { jest } from '@jest/globals';
import reset from '../js/modules/reset';
import { retrieveItem } from '../js/modules/localStorage';

const formContainer = document.createElement('div');
window.localStorage = jest.fn();

delete window.location;
window.location = {
  reload: jest.fn(),
};

const location = window.location.reload;

it('wipes the windows local storage', () => {
  reset(formContainer);
  expect(retrieveItem('currentPlayer')).toBeFalsy();
});

it('reloaded the page and declared display style property of formContainer to be flex', () => {
  reset(formContainer);
  expect(formContainer.style.display).toBe('flex');
});
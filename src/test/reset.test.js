import reset from '../js/modules/reset';
import { retrieveItem } from '../js/modules/localStorage';

const formContainer = document.createElement('div');
window.localStorage = jest.fn();
window.location.reload = jest.fn();
//describe('test window location"s reload function', () => {
//  const { reload } = window.location;
//
//  beforeAll(() => {
//    Object.defineProperty(window.location, 'reload', {
//      configurable: true,
//    });
//    window.location.reload = jest.fn();
//  });
//
//  afterAll(() => {
//    window.location.reload = reload;
//  });
//
//  it('mocks reload function', () => {
//    expect(jest.isMockFunction(window.location.reload)).toBe(true);
//  });
//
//  it('calls reload function', () => {
//    reloadFn(); // as defined above..
//    expect(window.location.reload).toHaveBeenCalled();
//  });
//});



it('wipes the windows local storage', () => {
  reset(formContainer);
  expect(retrieveItem('currentPlayer')).toBeFalsy();
})
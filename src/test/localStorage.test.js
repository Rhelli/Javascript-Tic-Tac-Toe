import * as localStoragee from '../js/modules/localStorage';

const trueStatement = { quote: 'Jest is bad' };

test('check if localStorage saved an item ', () => {
  localStoragee.saveItem('trueStatement', trueStatement);
  expect(JSON.parse(localStorage.getItem('trueStatement'))).toEqual({ quote: 'Jest is bad' });
});

test('check if retrieveItem retrieves an item parsed ', () => {
  const result = localStoragee.retrieveItem('trueStatement');
  expect(result).toEqual({ quote: 'Jest is bad' });
});
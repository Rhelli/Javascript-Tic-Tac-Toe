import choosePlayerIcon from '../js/modules/playerIcons';
import ImageMock from './imageMock';

const icon1 = new ImageMock('assets/got/cersei.png');

test('Returns an array', () => {
  expect(choosePlayerIcon(icon1)).toEqual({ Icons: ['assets/got/cersei.png'] });
});

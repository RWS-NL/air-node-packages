import { capitilizeFirstLetter } from '../src/CapitilizeFirstLetter';

test('should capitilize first letter', () => {
  const expected = 'This Is Expected';
  const actual = capitilizeFirstLetter('this Is Expected');

  expect(actual).toStrictEqual(expected);
});

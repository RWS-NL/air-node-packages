import { cutText } from '../src/CutText';

test('should get spaces inserted', () => {
  const expected = 'lorum...';
  const actual = cutText('lorum ipsum solor ditam et', 8);
  expect(actual).toStrictEqual(expected);
});
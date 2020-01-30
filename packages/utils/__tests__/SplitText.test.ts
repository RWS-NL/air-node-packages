import { splitText } from '../src/SplitText';

test('should split text', () => {
  const expected = 'lorum';
  const actual = splitText('lorum ipsum solor ditam et', 10);

  expect(actual).toStrictEqual(expected);
});

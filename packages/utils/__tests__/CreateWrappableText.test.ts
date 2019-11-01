import { createWrappableText } from '../src/CreateWrappableText';

test('should get spaces inserted', () => {
  const expected = 'lorum ipsum solor ditam et';
  const actual = createWrappableText('lorumipsumsolorditamet', 5);
  expect(actual).toStrictEqual(expected);
});
import { sentenceCase } from '../src/SentenceCase';

test('should create sentence case', () => {
  const expected = 'This is expected';
  const actual = sentenceCase('tHiS iS exPecTed');

  expect(actual).toStrictEqual(expected);
});

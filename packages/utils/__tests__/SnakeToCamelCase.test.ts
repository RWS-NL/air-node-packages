import { snakeToCamelCase } from '../src/SnakeToCamelCase';

test('should create sentence case', () => {
  const expected = 'lorumIpsumSolorDitAmet';
  const actual = snakeToCamelCase('LORUM_IPSUM_SOLOR_DIT_AMET');

  expect(actual).toStrictEqual(expected);
});
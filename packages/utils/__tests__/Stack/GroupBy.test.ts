import { groupBy } from '../../src/Stack/GroupBy';
import { Stack } from '../../src/Stack/Stack';

describe('groupBy', () => {
  test('GIVEN array of integers AND key/value extractors THEN groups extracted values by key', () => {
    const input = [1, 2, 3, 4];

    const result = groupBy(
      input,
      (i) => i % 2 === 0,
      (i) => i + 10
    );

    expect(result).toStrictEqual(
      new Stack([
        [true, [12, 14]],
        [false, [11, 13]]
      ])
    );
  });
});

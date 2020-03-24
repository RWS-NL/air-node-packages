import { Stack } from '../../src/Stack/Stack';
import { toStack } from '../../src/Stack/ToStack';

describe('toStack', () => {
  test('GIVEN array of integers AND key/value extractors THEN indexes values by key', () => {
    const input = [1, 2, 3, 13];

    const result = toStack(
      input,
      (i) => i % 10,
      (i) => i + 10
    );

    expect(result).toStrictEqual(
      new Stack([
        [1, 11],
        [2, 12],
        [3, 23] // 3 and 13 conflict, last one wins.
      ])
    );
  });
});

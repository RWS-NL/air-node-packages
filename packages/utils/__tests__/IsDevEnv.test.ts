import { isDevEnv } from '../src/IsDevEnv';

test('should be isDevEnv', () => {
  expect(isDevEnv).toStrictEqual(true);
});

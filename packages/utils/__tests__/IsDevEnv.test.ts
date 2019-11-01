import { isDevEnv } from '../src/IsDevEnv';

test('should be inDevEnv', () => {
  expect(isDevEnv).toStrictEqual(true);
});
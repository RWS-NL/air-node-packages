import { isTestEnv } from '../src/IsTestEnv';

test('should be inDevEnv', () => {
  expect(isTestEnv).toStrictEqual(true);
});
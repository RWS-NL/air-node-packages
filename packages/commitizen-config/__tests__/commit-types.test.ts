import commitTypes from '../src/commit-types';

describe('Commit Types Snapshot', () => {
  test('should match snapshot', () => {
    expect(commitTypes).toMatchSnapshot();
  });
});

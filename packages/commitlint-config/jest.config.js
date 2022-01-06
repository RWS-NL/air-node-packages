module.exports = {
  displayName: 'ts-jest',
  testMatch: ['<rootDir>/__tests__/*.test.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/__tests__/tsconfig.json'
    }
  }
};

module.exports = {
  displayName: 'ts-jest',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/__tests__/tsconfig.json'
    }
  }
};

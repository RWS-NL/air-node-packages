module.exports = {
  projects: [
    {
      displayName: 'ts-jest',
      testMatch: ['<rootDir>/__tests__/**/*.ts'],
      preset: 'ts-jest',
      testEnvironment: 'node',
      testRunner: 'jest-circus/runner',
      globals: {
        'ts-jest': {
          tsconfig: '<rootDir>/__tests__/tsconfig.json'
        }
      }
    },
    {
      displayName: 'react-test',
      testMatch: ['<rootDir>/__tests__/**/*.tsx'],
      snapshotSerializers: ['enzyme-to-json/serializer'],
      setupFiles: ['<rootDir>/jest.setup.ts']
    }
  ]
};

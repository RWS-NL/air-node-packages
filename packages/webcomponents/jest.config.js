module.exports = {
  displayName: 'react-test',
  testMatch: [ '<rootDir>/__tests__/**/*.tsx' ],
  snapshotSerializers: [ 'enzyme-to-json/serializer' ],
  setupFiles: [
    '<rootDir>/jest.setup.ts'
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgrMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
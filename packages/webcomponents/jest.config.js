module.exports = {
  displayName: 'react-test',
  testMatch: ['<rootDir>/__tests__/**/*.test.tsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/resource/jest.setup.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgrMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@Resource/(.*)$': '<rootDir>/__tests__/resource/$1',
    '^@TableComponents/(.*)$': '<rootDir>/src/TableComponents/$1',
    '^@DrawerNavBar/(.*)$': '<rootDir>/src/DrawerNavBar/$1',
    '^@I18nComponents/(.*)$': '<rootDir>/src/I18nComponents/$1',
    '^@PanelGroup/(.*)$': '<rootDir>/src/PanelGroup/$1',
    '^@FormikComponents/(.*)$': '<rootDir>/src/FormikComponents/$1',
    '^@src/(.*)$': '<rootDir>/src/$1'
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/__tests__/tsconfig.json'
    }
  }
};

module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  preset: 'react-native',
  transformIgnorePatterns: ['node_modules/?!(react-navigation-shared-element)',],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgrMock.js',
  },
};

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'node',
};

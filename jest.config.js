module.exports = {
  testPathIgnorePatterns: ['node_modules'],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css)$": "identity-obj-proxy"
  },
}
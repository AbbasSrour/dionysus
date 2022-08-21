/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "./tests/coverage",
  coverageProvider: "v8",

  preset: 'ts-jest',
  testEnvironment: 'node',
  "roots": [
    "<rootDir>/tests"
  ],

  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },

  setupFiles: ['dotenv/config'],
};

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {

  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: [
    '**/__tests__/*.spec.ts',
  ],
};

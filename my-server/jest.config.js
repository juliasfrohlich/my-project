module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  coverage: true,
  testPathIgnorePatterns: [
    "/node_modules/",
    "/build/"
  ],
  transform: {},
  extensionsToTreatAsEsm: [".ts"]
};
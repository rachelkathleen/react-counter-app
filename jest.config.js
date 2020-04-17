module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.js", "!<rootDir>/src/**/*test.js*"],
  coverageDirectory: "test-coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/config/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};

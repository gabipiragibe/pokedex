module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setupTests.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/.jest/mocks/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
};

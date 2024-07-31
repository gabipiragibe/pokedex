module.exports = {
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};

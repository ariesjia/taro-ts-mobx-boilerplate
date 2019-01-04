const path = require("path");

process.env.NODE_ENV = "test";

module.exports = {
  testURL: "http://localhost/",
  rootDir: path.resolve(__dirname, "../../"),
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/fileMock.js"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testResultsProcessor: "jest-sonar-reporter",
  setupFiles: ["<rootDir>/test/unit/setup"],
  collectCoverage: true,
  coverageReporters: ["html", "text-summary", "lcov"],
  coverageDirectory: "<rootDir>/test/unit/coverage",
  collectCoverageFrom: ["src/**/*.{ts, js}"]
};

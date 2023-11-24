module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1", // Adjust this if your source files are in a different directory
    },
    testMatch: ["**/*.test.ts"], // Specify the pattern for test files
};

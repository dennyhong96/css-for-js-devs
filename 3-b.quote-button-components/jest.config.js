module.exports = {
	testEnvironment: "jsdom", // 'jsdom' or 'node'

	setupFilesAfterEnv: ["./jest.setup.js"],

	moduleNameMapper: {
		// Mock css and svg imports
		"\\.css$": "<rootDir>/src/__test__/mock.js",
		"\\.svg$": "<rootDir>/src/__test__/mock.js",
		// For import aliasing
		"^@components(.*)$": "<rootDir>/src/components$1",
		"^@context(.*)$": "<rootDir>/src/context$1",
		"^@hooks(.*)$": "<rootDir>/src/hooks$1",
		"^@lib(.*)$": "<rootDir>/src/lib$1",
		"^@pages(.*)$": "<rootDir>/src/pages$1",
		"^@theme(.*)$": "<rootDir>/src/theme$1",
		"^@utils(.*)$": "<rootDir>/src/utils$1",
		"^@styles(.*)$": "<rootDir>/src/styles$1",
	},

	collectCoverageFrom: ["**/src/**/*.js"],

	// Set coverage target thresholds to meet
	coverageThreshold: {
		global: {
			statements: 35,
			branches: 20,
			functions: 35,
			lines: 35,
		},
	},
};

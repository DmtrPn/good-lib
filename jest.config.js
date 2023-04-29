module.exports = {
    name: 'good-lib',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            diagnostics: false,
        },
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '((\\.|/)(test.ts|test.js|spec.js|spec.ts))$',
    testURL: 'http://localhost/',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'js'],
    testTimeout: 50000,
    moduleNameMapper: {
    },
    setupFilesAfterEnv: ['@jest-decorated/core/globals'],
};

module.exports = {
    roots: ['<rootDir>/src'], // specifies the root folders for Jest to look for tests
    transform: {'^.+\\.jsx?$':'babel-jest',}, // transforms javascript and JSX files using Babel
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // module fule extensions for importing
    clearMocks: true, // automatically clears mock calls and instances before every test
    moduleNameMapper: {'\\.(css|less|sass|scss)$':'identity-obj-proxy',}, // mocks CSS imports
    testEnvironment: 'jsdom', // use jsdom for testing react components - sets the test environment to be like a browser
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    //setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    transformIgnorePatterns: ['/node_modules/(?!(axios)/)',], // tell Jest to transform axios module
};


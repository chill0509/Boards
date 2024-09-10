import '@testing-library/jest-dom/extend-expect';

jest.mock('html2canvas', () =>
jest.fn().mockResolvedValue({
    toDataURL: () => 'data:image/png;base64,...' // Mock the image data URL
}));

jest.mock('jspdf', () => {
    return jest.fn().mockImplementation(() => ({
        addImage: jest.fn(),
        save: jest.fn(),
    }));
});

beforeEach(() => {
    // setup default values or reset mocks here
    console.log('Starting a new test...');
});

afterEach(() => {
    // clean up operations if needed after each test
});
import '@testing-library/jest-dom/extend-expect';
import jestConfig from '../../jest.config';

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

Object.defineProperty(window.HTMLCanvasElement.prototype, 'getContext', {
    value: () => {
        return {
            fillRect: jest.fn(),
            clearReact: jest.fn(),
            getImageData: jest.fn(() => ({data: []})),
            putImageData: jest.fn(),
            createImageData: jest.fn(),
            setTransform: jest.fn(),
            drawImage: jest.fn(),
            save: jest.fn(),
            fillText: jest.fn(),
            restore: jest.fn(),
            beginPath: jest.fn(),
            moveTo: jest.fn(),
            lineTo: jest.fn(),
            closePath: jest.fn(),
            stroke: jest.fn(),
            strokeRect: jest.fn(),
            strokeText: jest.fn(),
        };
    },
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import BoardCanvas from './BoardCanvas';
import '@testing-library/jest-dom'; // /extend-expect'; // for better assertions
// import { fabric } from 'fabric';

jest.mock('fabric', () => {
    return {
        Canvas: jest.fn(() => ({
            dispose: jest.fn(), // mock dispose method
            add: jest.fn(), // mock add method
            remove: jest.fn(), // mock remove method
            clear: jest.fn(), // mock clear method
            getObjects: jest.fn(() => []), // mock method that returns empty array for canvas objects
        })),
    };
});

describe('BoardCanvas Component', () => {
    test('renders the canvas correctly', () => {
        const { getByTestId } = render(<BoardCanvas />);
        const canvasElement = getByTestId('boardCanvas');
        
        expect(canvasElement).toBeInTheDocument();
        expect(canvasElement.width).toBe(800);
        expect(canvasElement.height).toBe(600);
    });
});

// test('renders the welcome message', () => {
//     render(<BoardCanvas />);
//     const boardElement = screen.getByText(/Welcome to Boards App/i);

//     expect(boardElement).toBeInTheDocument();
// });

// test('export as image button works', () => {
//     render(<BoardCanvas />);
//     const exportImageButton = screen.getByRole('button', { name: /Export as Image/i }); //screen.getByText(/Export as Image/i);

//     expect(exportImageButton).toBeInTheDocument();
// });

// test('export as PDF button works', () => {
//     render(<BoardCanvas />);
//     const exportPDFButton = screen.getByText(/Export as PDF/i);

//     expect(exportPDFButton).toBeInTheDocument();
// });
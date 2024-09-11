import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BoardCanvas from './BoardCanvas';
// import { fabric } from 'fabric';

test('renders the welcome message', () => {
    render(<BoardCanvas />);
    const boardElement = screen.getByText(/Welcome to Boards App/i);

    expect(boardElement).toBeInTheDocument();
});

test('export as image button works', () => {
    render(<BoardCanvas />);
    const exportImageButton = screen.getByText(/Export as Image/i);

    expect(exportImageButton).toBeInTheDocument();
});

test('export as PDF button works', () => {
    render(<BoardCanvas />);
    const exportPDFButton = screen.getByText(/Export as PDF/i);

    expect(exportPDFButton).toBeInTheDocument();
});
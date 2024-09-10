import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BoardCanvas from '../BoardCanvas';

test('renders the board content', () => {
    render(<BoardCanvas />);
    const boardElement = screen.getByText(/Board Content/i);

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
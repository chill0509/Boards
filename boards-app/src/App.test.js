import { render, screen } from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders Dashboard component with a list of boards', () => {
  // mock a list of boards
  const boards = [
    { id: 1, name: 'Board 1' },
    { id: 2, name: 'Board 2' },
    { id: 3, name: 'Board 3' }
  ];

  // render the dashboard component with the mocked boards
  render(<Dashboard boards={boards} />);

  // check if the board names are in the document
  boards.forEach(board => {
    const boardElement = screen.getByText(board.name);

    expect(boardElement).toBeInTheDocument();
  });
});


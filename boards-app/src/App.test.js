import { render, screen } from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard';
import {jest} from '@jest/globals';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// mock a list of boards
const boards = [
  { id: 1, name: 'Board 1' },
  { id: 2, name: 'Board 2' },
  { id: 3, name: 'Board 3' }
];

jest.mock('./BoardList', () => {
  return function MockBoardList() {
    return (
      <div>
        {MockBoardList.map((board) => (
          <div key={board.id}>{board.name}</div>
        ))}
      </div>
    );
  };
});

test('renders the list of boards', () => {
  render(<App />);

  // check if the boards are displayed
  expect(screen.getByText(boards(0).name)).toBeInTheDocument();
  expect(screen.getByText(boards(1).name)).toBeInTheDocument();
  expect(screen.getByText(boards(2).name)).toBeInTheDocument();
});

//  test('renders Dashboard component with a list of boards', () => { 

//   // render the dashboard component with the mocked boards
//   render(<Dashboard boards={boards} />);

//   // check if the board names are in the document
//   boards.forEach(board => {
//     const boardElement = screen.getByText(board.name);

//     expect(boardElement).toBeInTheDocument();
//   });
// });


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const [boards, setBoards] = useState([]);
    const [boardName, setBoardName] = useState("");

    const handleCreateBoard = (name) => {
        const newBoard = {
            id: Date.now(),
            name: boardName
        };
        setBoards([...boards, newBoard]);
    };

    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>

            <div className="create-board">
                <input type="text" value={boardName} onChange={(e) => setBoardName(e.target.value)} placeholder="Board Name" />
                <button onClick={handleCreateBoard}>Create Board</button>
            </div>

            <div className="boards-list">
                <h2>Your Boards</h2>
                <ul>
                    {boards.map((board) => (
                        <li key={board.id}>
                            <Link to={"/board/${board.id}"}>{board.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
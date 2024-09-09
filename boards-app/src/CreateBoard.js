import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CreateBoard.css';

function CreateBoard({ onCreateBoard }) {
    const [boardName, setBoardName] = useState("");

    const handleCreate = () => {
        onCreateBoard(boardName);
        setBoardName("");
    };

    return (
        <div className="create-board">
            <input 
                type="text"
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)} placeholder="Enter board name"
            />
            <button onClick={handleCreate}>Create Board</button>
        </div>
    );
}

export default CreateBoard;
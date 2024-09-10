import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import { fabric } from 'fabric';
import * as signalR from '@microsoft/signalr';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './BoardCanvas.css';

const BoardCanvas = () => {
    const boardRef = useRef(null); // this ref points to the html element of the board
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const [boards, setBoards] = useState([]);
    const [selectedBoardId, setSelectedBoardId] = useState(null);
    const [connection, setConnection] = useState(null);
    const [boardContent, setBoardContent] = useState([]); // hold current board's content
    const fabric = require('fabric').fabric;

    useEffect(() => {
        if (boardRef.current) {
            console.log("Board element: ", boardRef.current);
            
            // for example, you can set a background color or style
            boardRef.current.style.backgroundColor = 'lightblue';
        }
    }, []); // empty dependency array to run only on mount

    useEffect(() => {
        const canvas = new fabric.fabric.Canvas('boardCanvas', {
            width: 800,
            height: 600,
            backgroundColor: 'white'
        });
        
        return () => {
            canvas.dispose(); // clean up on component unmount
        };
    }, []);

    useEffect(() => {
        // setup signalR connection
        const newConnection = new signalR.HubConnectionBuilder()
        .withUrl("/boardHub")
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Information)
        .build();

        setConnection(newConnection);

        newConnection.start()
            .then(() => {
                newConnection.invoke("JoinBoardGroup", selectedBoardId);
                newConnection.on("ReceiveCanvasUpdate",(canvasState) => {
                    canvas.loadFromJSON(canvasState, () => {
                        canvas.renderAll();
                    });
                });
            })
        .catch(e => console.log('Connection failed: ', e));

        // handle updates from hub
        newConnection.on("ReceiveUpdate", (boardId, content) => {
            setBoardContent(content);
        });

        // clean up the connection when the component unmounts
        return () => {
            connection.stop();
        };

    }, [canvas, selectedBoardId]);

    const saveBoard = async () => {
        if (selectedBoardId === null) return;

        await axios.put('/api/boards/${selectedBoardId}', {
            canvasState: JSON.stringify(canvas.ToJSON())
        });

        if (connection) {
            connection.invoke("SendCanvasUpdate", selectedBoardId, JSON.stringify(canvas.ToJSON()));
        }

        alert('Board saved and broadcasted successfully!');
    };

    const createNewBoard = async (boardName) => {
        const response = await axios.post('/api/boards', {
            boardName, 
            CanvasState: JSON.stringify(canvas.ToJSON())
        });
        setSelectedBoardId(response.data);
        alert('Board created with ID: ${response.data}');
        fetchBoards();
    };

    const loadBoard = async (boardId) => {
        const response = await axios.get('/api/boards/${boardId}');
        canvas.loadFromJSON(response.data.canvasState, () => {
            canvas.renderAll();
        });
        setSelectedBoardId(boardId);
        alert('Board loaded with ID: ${boardId}');
    };

    const fetchBoards = async () => {
        const response = await axios.get('/api/boards/');
        setBoards(response.data);
    };

    // Function to save canvas state
    const saveCanvasState = () => {
        const json = canvas.ToJSON();
        
        // Save JSON to localStorage (or send it to a server)
        localStorage.setItem('canvasState', JSON.stringify(json));
        alert("Canvas state saved!");
    };

    // Function to load canvas state
    const loadCanvasState = () => {
        const savedState = localStorage.getItem('canvasState');
        if (savedState) {
            canvas.loadFromJSON(JSON.parse(savedState), () => {
                canvas.renderAll();
            });
            alert("No saved canvas state found!");
        }
    };

    // Function to capture the board as an image
    const exportAsImage = () => {
        const boardElement = boardRef.current;

        html2canvas(boardElement).then(canvas => {
            const imageData = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.href = imageData;
            link.download = 'board.png';
            link.click();
        });
    };

    // Function to export the board as PDF
    const exportAsPDF = () => {
        const boardElement = boardRef.current;

        html2canvas(boardElement).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF('landscape');
            const imgWidth = 210; // A4 size papaer width in mm
            const imgHeight = canvas.height * imgWidth / canvas.width; // Scale the image to fit the page

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('board.pdf');
        });
    };

    //return <canvas ref={canvasRef} />;
    return (
        <div>
            {/* The board content (canvas, div, etc.) */}

            <div ref={boardRef} id="board-container" style={{ width: '800px', height: '600px', background: 'lightgray'}}>
                {/* Your board's content, shapes, text, etc. */}
                <h2>Board Content</h2>
            </div>

            {/* Export buttons */}
            <button onClick={exportAsImage}>Export as Image</button>
            <button onClick={exportAsPDF}>Export as PDF</button>

            <button onClick={() => createNewBoard(prompt("Enter board name:"))}>New Board</button>
            <button onClick={saveBoard}>Save Board</button>

            <ul>
                {boards.map(board => (
                    <li key={board.boardId}>
                        <button onClick={() => loadBoard(board.boardId)}>{board.boardName}</button>
                    </li>
                ))}
            </ul>
            
            <canvas id="boardCanvas" ref={canvasRef} width={800} height={600}></canvas>
        </div>
    );
};

export default BoardCanvas;
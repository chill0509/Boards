import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardCanvas from './components/BoardCanvas';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import * as signalR from '@microsoft/signalr';
import './App.css';


const connection = new signalR.HubConnectionBuilder()
  .withUrl('http://localhost:3000/boardHub')
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection.start()
  .then(() => console.log('Connected to SignalR hub'))
  .catch(e => console.error('Error connecting to SignalR hub: ', e));
connection.on("ReceiveUpdate", (boardId, content) => {
  // Handle the update in your React App
});


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/:id" element={<BoardCanvas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


//https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
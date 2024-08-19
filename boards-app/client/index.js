const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;

app.get('/', (req, res) => {res.send('Hello World');});
app.listen(port, () => {console.log('Server is running on http://localhost:${port}');});


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});

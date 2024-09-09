const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const apiRoutes = require('./routes/api');  

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use('/api', apiRoutes);

io.on('connection', (socket) => {
  console.log('A user connected');
  setInterval(() => {
    socket.emit('data', { value: Math.random() * 100 });
  }, 5000);

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});

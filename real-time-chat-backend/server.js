const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // allow all origins for development
  },
});

// Track users and rooms
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Join room
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    console.log(`${username} joined room: ${room}`);

    // Broadcast to room
    socket.to(room).emit('message', {
      user: 'system',
      text: `${username} has joined the room.`,
    });

    // Send welcome message to user
    socket.emit('message', {
      user: 'system',
      text: `Welcome to the ${room} room, ${username}!`,
    });
  });

  // Chat message
  socket.on('chatMessage', ({ room, username, message }) => {
    io.to(room).emit('message', {
      user: username,
      text: message,
    });
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    // You can enhance this by tracking which user left, etc.
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

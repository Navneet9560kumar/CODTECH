// client2.js
const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  socket.emit("registerUser", "Riya");
});

socket.on("privateMessage", (data) => {
  console.log(`Riya received message from ${data.from}: ${data.text}`);
});

// client1.js
const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  socket.emit("registerUser", "Navneet");

  setTimeout(() => {
    socket.emit("sendPrivateMessage", {
      to: "Riya",
      from: "Navneet",
      message: "Hi Riya! ❤️",
    });
  }, 2000);
});

socket.on("privateMessage", (data) => {
  console.log(`Navneet received message from ${data.from}: ${data.text}`);
});

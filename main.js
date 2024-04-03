require("dotenv").config();
const config = require("config");
const express = require("express");
const path = require("path");
const url = require("url");

const PORT = process.env.PORT ?? config.get("PORT");
const STATIC_PATH = path.resolve(__dirname, "public");

const app = express();

app.use(express.static(STATIC_PATH));

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server has been start on http://localhost:${PORT}`);
});

// Socket Io

const room = {
  arena: null,
  clients: {},
};

function updateArena() {
  if (!room.arena) return;

  room.arena.emit("update", {
    clients: Object.keys(room.clients).reduce((clients, clientID) => {
      clients[clientID] = {
        name: room.clients[clientID].name,
        avatar: room.clients[clientID].avatar,
      };

      return clients;
    }, {}),
  });
}

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log(`connected ${socket.id}`);

  socket.on("join-arena", () => {
    room.arena = socket;
    updateArena();
  });

  socket.on("join-hero", (data) => {
    room.clients[socket.id] = data;
    updateArena();
  });

  socket.on("update-hero", (data) => {
    room.clients[socket.id] = {
      ...socket,
      ...data,
    };
    updateArena();
  });

  socket.on("disconnect", () => {
    delete room.clients[socket.id];
    updateArena();
  });
});

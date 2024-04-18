require("dotenv").config();
const config = require("config");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT ?? config.get("PORT");
const STATIC_PATH = path.resolve(__dirname, "public");

const app = express();

app.use(express.static(STATIC_PATH));

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server has been start on http://localhost:${PORT}`);
});

// Socket IO

const room = {
  enemyHealth: 1550,
  errors: 0,
  points: 0,
  arena: null,
  clients: {},
};

function updateArena() {
  if (!room.arena) return;

  room.arena.emit("update", {
    errors: room.errors,
    points: room.points,
    enemyHealth: room.enemyHealth,
    clients: Object.keys(room.clients).reduce((clients, clientID) => {
      clients[clientID] = {
        name: room.clients[clientID].name,
        health: room.clients[clientID].health,
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
    room.clients[socket.id] = {
      health: 100,
      ...data
    };
    updateArena();
  });

  socket.on("update-hero", (data) => {
    room.clients[socket.id] = {
      ...room.clients[socket.id],
      ...data,
    };
    updateArena();
  });

  socket.on("hero-attack", (data) => {
    room.enemyHealth -= 50 * Math.pow(2, data.level);
    room.points += data.level + 1;
    updateArena();
  });

  socket.on("enemy-attack", () => {
    room.clients[socket.id].health -= 10;
    room.errors += 1;
    updateArena();
  });

  socket.on("reset", () => {
    room.enemyHealth = 1550;
    room.clients = {};
    room.errors = 0;
    room.points = 0;
  });

  socket.on("disconnect", () => {
    delete room.clients[socket.id];
    updateArena();
  });

  socket.on("error", () => {
    delete room.clients[socket.id];
    updateArena();
  });
});

require("dotenv").config();
const config = require("config");
const express = require("express");
const path = require("path");
const url = require("url");

const PORT = process.env.PORT ?? config.get("PORT");
const STATIC_PATH = path.resolve(__dirname, "public");

const app = express();

app.use(express.static(STATIC_PATH));

app.get("/api/login", (req, res) => {
  const { code, name } = url.parse(req.url, true).query;

  res.end();
});

// Socket Io

const server = app.listen(PORT, () => {
  console.log(`Server has been start on http://localhost:${PORT}`);
});

const io = require("socket.io")(server);

io.on("connection", (client) => {
    console.log(`connected ${client.id}`);
  client.on("event", (data) => {
    /* … */
  });
  client.on("disconnect", () => {
    /* … */
  });
});

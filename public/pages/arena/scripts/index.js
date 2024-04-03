const socket = io();
const arena = new Arena({
  elem: document.getElementById("arena"),
});

socket.on("connect", () => {
  socket.emit("join-arena");
});

let clients = {};

socket.on("update", (data) => {
  clients = data.clients;
  updateArena();
});

const AVATARS = [
  "../../image/creature/hero/0.png",
  "../../image/creature/hero/1.png",
  "../../image/creature/hero/2.png",
  "../../image/creature/hero/3.png",
];

function updateArena() {
  arena.clear();

  if (!clients) return;

  const enemy = new Enemy({
    name: "Динозаврик",
    health: 1000,
    maxHealth: 1000,
    avatarSrc: "../../image/creature/enemy/0.gif",
    position: {
      x: `${window.innerWidth - 500}px`,
      y: `-40px`,
    },
    size: {
      width: "auto",
      height: "500px",
    },
  });

  Object.keys(clients).forEach((clientID, index) => {
    const hero = new Hero({
      name: clients[clientID].name,
      health: 100,
      maxHealth: 100,
      avatarSrc: AVATARS[clients[clientID].avatar],
      position: {
        x: `${100 + 150 * index - 150 * 5 * Math.floor(index / 5)}px`,
        y: index % 2 === 0 ? 0 : "40px",
      },
      size: {
        width: "100px",
        height: "200px",
      },
    });

    arena.add(hero);
  });

  arena.add(enemy);
}

window.addEventListener("resize", updateArena);
updateArena();

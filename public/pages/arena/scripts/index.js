const socket = io();
const arena = new Arena({
  elem: document.getElementById("arena"),
});

socket.on("connect", () => {
  socket.emit("join-arena");
});

let enemyHealth = 1550;

socket.on("update", (data) => {
  enemyHealth = data.enemyHealth;
  document.getElementById("points").innerText = data.points;
  document.getElementById("errors").innerText = data.errors;
  updateArena(data.clients);
});

const AVATARS = [
  "../../image/creature/hero/0.png",
  "../../image/creature/hero/1.png",
  "../../image/creature/hero/2.png",
  "../../image/creature/hero/3.png",
];

function updateArena(clients) {
  arena.clear();

  const enemy = new Enemy({
    name: "Динозаврик",
    health: enemyHealth,
    maxHealth: 1550,
    avatarSrc: enemyHealth > 0 ? "../../image/creature/enemy/0.gif" : "../../image/creature/enemy/bum.gif",
    position: {
      x: `${window.innerWidth - 600}px`,
      y: `-40px`,
    },
    size: {
      width: "auto",
      height: "500px",
    },
  });

  arena.add(enemy);

  if (!Object.keys(clients ?? {}).length) return;

  Object.keys(clients).forEach((clientID, index) => {
    if (index % 2 !== 0) {
      const hero = new Hero({
        id: clientID,
        name: clients[clientID].name,
        health: clients[clientID].health,
        maxHealth: 100,
        avatarSrc: AVATARS[clients[clientID].avatar],
        position: {
          x: `${300 + 150 * index - 150 * 5 * Math.floor(index / 5)}px`,
          y: index % 2 === 0 ? 0 : "40px",
        },
        size: {
          width: "180px",
          height: "350px",
        },
      });
  
      arena.add(hero);
    } else {
      const hero = new Hero({
        id: clientID,
        name: clients[clientID].name,
        health: clients[clientID].health,
        maxHealth: 100,
        avatarSrc: AVATARS[clients[clientID].avatar],
        position: {
          x: `${300 + 150 * index - 150 * 5 * Math.floor(index / 5)}px`,
          y: index % 2 === 0 ? 0 : "40px",
        },
        size: {
          width: "180px",
          height: "350px",
        },
      });
  
      arena.add(hero);
    }
  });
}

window.addEventListener("resize", () => updateArena({}));
updateArena({});

var Reset = function() {
  socket.emit("reset");
}
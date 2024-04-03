const socket = io();
const arena = new Arena({
  elem: document.getElementById("arena"),
});

socket.on("connect", () => {
  socket.emit("join-arena");
});

let enemyHealth = 1000;
let clients = {};

socket.on("update", (data) => {
  enemyHealth = data.enemyHealth;
  clients = data.clients;
  updateArena();
});

socket.on("hero-attack", (data) => {

});

socket.on("enemy-attack", (clientID) => {

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
    health: enemyHealth,
    maxHealth: 10000,
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
    if (index % 2 !== 0 && clients[clientID].health > 0) {
      const hero = new Hero({
        id: clientID,
        name: clients[clientID].name,
        health: clients[clientID].health,
        maxHealth: 100,
        avatarSrc: AVATARS[clients[clientID].avatar],
        position: {
          x: `${100 + 150 * index - 150 * 5 * Math.floor(index / 5)}px`,
          y: index % 2 === 0 ? 0 : "40px",
        },
        size: {
          width: "120px",
          height: "250px",
        },
      });
  
      arena.add(hero);
    }
  });

  Object.keys(clients).forEach((clientID, index) => {
    if (index % 2 === 0 && clients[clientID].health > 0) {
      const hero = new Hero({
        id: clientID,
        name: clients[clientID].name,
        health: 100,
        maxHealth: 100,
        avatarSrc: AVATARS[clients[clientID].avatar],
        position: {
          x: `${100 + 150 * index - 150 * 5 * Math.floor(index / 5)}px`,
          y: index % 2 === 0 ? 0 : "40px",
        },
        size: {
          width: "120px",
          height: "250px",
        },
      });
  
      arena.add(hero);
    }
  });

  arena.add(enemy);
}

window.addEventListener("resize", updateArena);
updateArena();

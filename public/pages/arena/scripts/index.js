const arena = new Arena({
    elem: document.querySelector("#arena"),
});

const boss = new Boss({
    health: 750,
    maxHealth: 1000,
    avatarSrc: "./images/boss.gif",
    position: {
        x: `${window.innerWidth - 500}px`,
        y: `0px`,
    },
    size: {
        width: "500px",
        height: "fit-content",
    }
});

const hero = new Hero({
    health: 80,
    maxHealth: 100,
    avatarSrc: "./images/hero_1.png",
    position: {
        x: "100px",
        y: "-30px",
    },
    size: {
        width: "300px",
        height: "500px",
    }
});

const hero2 = new Hero({
    health: 100,
    maxHealth: 100,
    avatarSrc: "./images/hero_2.png",
    position: {
        x: "330px",
        y: "40px",
    },
    size: {
        width: "500px",
        height: "500px",
    }
});

const hero3 = new Hero({
    health: 100,
    maxHealth: 100,
    avatarSrc: "./images/hero_3.png",
    position: {
        x: "800px",
        y: "0px",
    },
    size: {
        width: "300px",
        height: "500px",
    }
});

arena.add(boss);
arena.add(hero2);
arena.add(hero3);
arena.add(hero);

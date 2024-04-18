class Enemy extends Entity {
    constructor({
        name,
        health,
        maxHealth,
        avatarSrc,
        position,
        size,
    }) {
        super({
            name,
            health,
            maxHealth,
            healthColor: "#ff0000",
            avatarSrc,
            position,
            size,
            isEnemy: true,
        });
    }
}
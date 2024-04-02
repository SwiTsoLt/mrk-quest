class Hero extends Entity {
    constructor({
        health,
        maxHealth,
        avatarSrc,
        position,
        size,
    }) {
        super({
            health,
            maxHealth,
            healthColor: "#00ff00",
            avatarSrc,
            position,
            size,
        });
    }
}
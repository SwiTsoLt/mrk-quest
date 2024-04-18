class Hero extends Entity {
    constructor({
        id,
        name,
        health,
        maxHealth,
        avatarSrc,
        position,
        size,
    }) {
        super({
            id,
            name,
            health,
            maxHealth,
            healthColor: "#00ff00",
            avatarSrc,
            position,
            size,
        });
    }
}
class Boss extends Entity {
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
            healthColor: "#ff0000",
            avatarSrc,
            position,
            size,
        });
    }
}
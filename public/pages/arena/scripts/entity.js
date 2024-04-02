class Entity {
    #health;
    #maxHealth;
    #healthColor;
    #avatarSrc;
    #position;
    #size;

    constructor({
        health,
        maxHealth,
        healthColor,
        avatarSrc,
        position,
        size,
    }) {
        this.#health = health;
        this.#maxHealth = maxHealth;
        this.#healthColor = healthColor;
        this.#avatarSrc = avatarSrc;
        this.#position = position;
        this.#size = size;
    }

    getHealth() {
        return this.#health;
    }

    getMaxHealth() {
        return this.#maxHealth;
    }

    getHTML() {
        const entityElem = document.createElement("div");
        entityElem.classList.add("entity");

        // Size
        entityElem.style.width = this.#size.width;
        entityElem.style.height = this.#size.height;

        // Position

        entityElem.style.left = this.#position.x;
        entityElem.style.bottom = this.#position.y;

        // Avatar

        const avatarElem = document.createElement("img");
        avatarElem.src = this.#avatarSrc;

        // Health

        const healthPercentage = this.#health / this.#maxHealth * 100;

        const healthElem = document.createElement("div");
        healthElem.style = `
        --health: ${healthPercentage}%;
        --health-color: ${this.#healthColor};
        --health-color-opacity: ${this.#healthColor}60;
        `;
        healthElem.classList.add("health");
    
        const healthTextElem = document.createElement("span");
        healthTextElem.innerText = `${this.#health} / ${this.#maxHealth}`;

        healthElem.appendChild(healthTextElem);

        // Append

        entityElem.appendChild(avatarElem);
        entityElem.appendChild(healthElem);

        return entityElem;
    }
}
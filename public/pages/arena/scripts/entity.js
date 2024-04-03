class Entity {
    #id;
    #name;
    #health;
    #maxHealth;
    #healthColor;
    #avatarSrc;
    #position;
    #size;
    #isEnemy = false;

    constructor({
        id,
        name,
        health,
        maxHealth,
        healthColor,
        avatarSrc,
        position,
        size,
        isEnemy,
    }) {
        this.#id = id;
        this.#name = name;
        this.#health = health;
        this.#maxHealth = maxHealth;
        this.#healthColor = healthColor;
        this.#avatarSrc = avatarSrc;
        this.#position = position;
        this.#size = size;
        this.#isEnemy = !!isEnemy;
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
        this.#isEnemy && entityElem.classList.add("enemy");

        // Size
        entityElem.style.width = this.#size.width;
        entityElem.style.height = this.#size.height;

        // Position

        entityElem.style.left = this.#position.x;
        entityElem.style.bottom = this.#position.y;

        // Name

        const nameElem = document.createElement("h2");
        nameElem.innerText = this.#name;

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

        entityElem.appendChild(nameElem);
        entityElem.appendChild(avatarElem);
        entityElem.appendChild(healthElem);

        return entityElem;
    }
}
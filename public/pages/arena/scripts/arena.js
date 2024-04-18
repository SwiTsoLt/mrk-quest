class Arena {
  #elem;
  #entityList = [];

  constructor({
    elem
  }) {
    this.#elem = elem;
  }

  add(entity) {
    this.#entityList.push(entity);
    this.#elem.appendChild(entity.getHTML());
  }

  attackHero(id, level) {
    const heroIndex = this.#entityList.findIndex(entity => entity.id === id);
    this.#entityList[heroIndex].heath -= 50 * Math.pow(2, level);
  }

  clear() {
    this.#elem.innerHTML = "";
    this.#entityList = [];
  }
}

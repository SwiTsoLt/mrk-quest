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
}

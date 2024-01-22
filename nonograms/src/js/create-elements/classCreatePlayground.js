export default class CreatePlayground {
  constructor() {
    this.ground = null;
    this.columns = [];
    this.matrix = [];

    this.initPlayground(15);
    this.addClick();
  }

  initPlayground(size) {
    this.ground = document.createElement('section');
    this.ground.className = `main__section-playground`;

    for (let i = 0; i < size + 1; i += 1) {
      const row = document.createElement('div');
      this.ground.append(row);
      row.className = `row`;

      for (let j = 0; j < size + 1; j += 1) {
        const column = document.createElement('div');
        row.append(column);
        column.className = `column`;

        this.columns.push(column);
      }
    }
  }

  addClick() {
    this.columns.forEach((column) => {
      column.addEventListener('click', () => {
        column.classList.toggle('black');
      });
    });
  }

  getElement() {
    return this.ground;
  }
}

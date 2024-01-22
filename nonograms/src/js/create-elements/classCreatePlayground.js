export default class CreatePlayground {
  constructor(size) {
    this.ground = document.createElement('section');
    this.columns = [];
    this.matrix = [];

    this.initPlayground(size);
    this.addClick();
  }

  updatePlayground(size) {
    this.initPlayground(size);
    this.addClick();
  }

  initPlayground(size) {
    this.ground.innerHTML = '';

    this.ground.className = `main__section-playground`;

    for (let i = 0; i < size + 1; i += 1) {
      const row = document.createElement('div');
      this.ground.append(row);
      row.className = `row`;

      if (i === 0) {
        row.className = `first__row`;
      }

      for (let j = 0; j < size + 1; j += 1) {
        const column = document.createElement('div');
        row.append(column);
        column.className = `column`;

        if (j === 0) {
          column.className = `first__column`;
        }

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

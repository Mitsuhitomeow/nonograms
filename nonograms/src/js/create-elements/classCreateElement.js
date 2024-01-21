export default class CreateElement {
  constructor() {
    this.header = null;
    this.footer = null;

    this.components = [];

    this.initHeader();
    this.initFooter();
  }

  initHeader() {
    this.header = document.createElement('header');

    const div = document.createElement('div');
    const title = document.createElement('h1');

    title.textContent = 'Nonograms';

    this.header.className = `header`;
    div.className = `header__container container`;
    title.className = `header__title title`;

    this.header.append(div);
    div.append(title);

    this.components.push(this.header);
  }

  initFooter() {
    this.footer = document.createElement('header');

    const div = document.createElement('div');
    const title = document.createElement('h1');

    title.textContent = '© RS School Production 2024';

    this.header.className = `footer`;
    div.className = `footer__container container`;
    title.className = `footer__title title`;

    this.footer.append(div);
    div.append(title);

    this.components.push(this.footer);
  }

  getElement() {
    return this.components.forEach((component) => {
      document.body.append(component);
    });
  }
}

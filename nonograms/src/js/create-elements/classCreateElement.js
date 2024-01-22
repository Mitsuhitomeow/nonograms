import CreateOptions from './classCreateOptions';

export default class CreateElement {
  constructor() {
    this.header = null;
    this.footer = null;
    this.main = null;

    this.components = [];

    this.initHeader();
    this.initMain();
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

  initMain() {
    this.main = document.createElement('main');
    const container = document.createElement('div');

    const options = new CreateOptions();

    this.main.className = `main`;
    container.className = `main__container container`;

    this.main.append(container);
    container.append(options.getElement());

    this.components.push(this.main);
  }

  initFooter() {
    this.footer = document.createElement('footer');

    const div = document.createElement('div');
    const title = document.createElement('h1');

    title.textContent = '© RS School Production 2024';

    this.footer.className = `footer`;
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

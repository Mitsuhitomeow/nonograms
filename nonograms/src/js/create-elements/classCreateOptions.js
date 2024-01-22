import CreatePlayground from './classCreatePlayground';

export default class CreateOptions {
  constructor(time) {
    this.ground = new CreatePlayground(5, time);
    this.value = 5;
    [this.section, this.sizeControl, this.main] = [
      document.createElement('section'),
      document.createElement('select'),
      document.querySelector('.main__container'),
    ];

    this.initGroundSize();
  }

  initGroundSize() {
    const [container, optionEasy, optionMedium, optionHard] = [
      document.createElement('div'),
      document.createElement('option'),
      document.createElement('option'),
      document.createElement('option'),
    ];

    this.section.appendChild(container);
    container.appendChild(this.sizeControl);
    this.sizeControl.appendChild(optionEasy);
    this.sizeControl.appendChild(optionMedium);
    this.sizeControl.appendChild(optionHard);

    this.sizeControl.className = `main__options-select`;

    optionEasy.setAttribute('value', '5');
    optionMedium.setAttribute('value', '10');
    optionHard.setAttribute('value', '15');

    optionEasy.textContent = '5x5';
    optionMedium.textContent = '10x10';
    optionHard.textContent = '15x15';

    this.sizeControl.value = this.value;

    this.sizeControl.addEventListener('change', () => {
      const size = +this.sizeControl.value;
      this.ground.updatePlayground(size);
    });

    this.section.appendChild(this.ground.getElement());
    console.log(this.main);
  }

  getElement() {
    return this.section;
  }

  getValue() {
    return this.value;
  }
}

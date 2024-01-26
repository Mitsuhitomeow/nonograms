import CreatePlayground from './classCreatePlayground';
import nonograms from '../../nongrams-db.json';
import initGame from '../game-process/initGame';

export default class CreateOptions {
  constructor(time) {
    this.ground = new CreatePlayground(5, time);
    this.value = 5;
    this.size = this.value;
    this.arrayPictures = nonograms.images;
    this.matrixPicture = this.arrayPictures[this.size][0].pixels;
    [this.section, this.sizeControl, this.imageSection, this.container] = [
      document.createElement('section'),
      document.createElement('select'),
      document.createElement('select'),
      document.createElement('div'),
    ];

    this.initGroundSize();
    this.initImageSelection(this.value);
  }

  initGroundSize() {
    const [optionEasy, optionMedium, optionHard] = [
      document.createElement('option'),
      document.createElement('option'),
      document.createElement('option'),
    ];

    this.section.appendChild(this.container);
    this.container.appendChild(this.sizeControl);
    this.sizeControl.appendChild(optionEasy);
    this.sizeControl.appendChild(optionMedium);
    this.sizeControl.appendChild(optionHard);

    this.sizeControl.className = `main__options-select`;
    this.container.className = `options__container`;

    optionEasy.setAttribute('value', '5');
    optionMedium.setAttribute('value', '10');
    optionHard.setAttribute('value', '15');

    optionEasy.textContent = '5x5';
    optionMedium.textContent = '10x10';
    optionHard.textContent = '15x15';

    this.sizeControl.value = this.value;

    /* Событие, которое отслеживает опшены у селект.
     *
     *  При выборе размера поля:
     *   1. Рендерит таблицу полей.
     *   2. Изменяет у другого селекта, меню картинок, под нужное поле.
     */
    this.sizeControl.addEventListener('change', () => {
      this.size = +this.sizeControl.value;
      this.initImageSelection(this.size);
      this.ground.updatePlayground(this.size);
      console.log('-------');
    });

    this.section.appendChild(this.ground.getElement());
  }

  initImageSelection(size) {
    const notOption = document.createElement('option');
    this.arrayPictures = nonograms.images[size];

    this.imageSection.innerHTML = '';
    this.imageSection.className = 'image__section';
    notOption.textContent = '---';

    this.imageSection.appendChild(notOption);
    this.container.appendChild(this.imageSection);

    const newImageSection = this.imageSection.cloneNode(true);
    this.container.replaceChild(newImageSection, this.imageSection);
    this.imageSection = newImageSection;

    /* Событие, которое отслеживает опшены у селект.
     *
     *  При выборе опшены, выводит матрицу картинки.
     */

    this.handleChange = () => {
      const { value } = this.imageSection;

      if (value === '---') return;

      const foundImage = this.arrayPictures.find(
        (image) => image.name === value
      );
      this.matrixPicture = foundImage.pixels;

      initGame(this.matrixPicture);
    };

    /**
     * Перезаписываю событие, избавляюсь от постоянно увеличивающегося вывода
     */

    this.imageSection.removeEventListener('change', this.handleChange);
    this.imageSection.addEventListener('change', this.handleChange);
    /* ---------------------- */

    this.arrayPictures.forEach((element) => {
      const option = document.createElement('option');
      this.imageSection.appendChild(option);
      option.textContent = element.name;
      option.setAttribute('value', `${element.name}`);
    });
  }

  getMatrixPicture() {
    return this.matrixPicture;
  }

  getElement() {
    return this.section;
  }

  getValue() {
    return this.value;
  }
}

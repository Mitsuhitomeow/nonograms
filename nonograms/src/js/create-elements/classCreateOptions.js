import CreatePlayground from './classCreatePlayground';
import nonograms from '../../nongrams-db.json';
import { initGame, resetGame, setMatrixData } from '../game-process/initGame';
import createButtons from './createButtons';
import calcSequenceForHint from '../game-process/calcHint';
import clearHint from '../game-process/clearHint';

export default class CreateOptions {
  constructor(time, size = 5) {
    this.time = time;
    this.ground = new CreatePlayground(size, time);
    this.value = 5;
    this.size = this.value;
    this.arrayPictures = nonograms.images;
    this.matrixPicture = this.arrayPictures[this.size][0].pixels;

    [
      this.section,
      this.sectionButton,
      this.sizeControl,
      this.imageSection,
      this.container,
    ] = [
      document.createElement('section'),
      document.createElement('section'),
      document.createElement('select'),
      document.createElement('select'),
      document.createElement('div'),
    ];

    this.initGroundSize();
    this.initButtonsSection(this.time);
    this.initImageSelection(this.value);

    this.initGameOnStartAsync();
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

    optionHard.className = 'option__size';
    optionMedium.className = 'option__size';
    optionEasy.className = 'option__size';

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
     *   1. Стирает текущую и рендерит новую таблицу полей с подсказками.
     *   2. Изменяет у другого селекта, меню картинок, под нужное поле.
     */

    this.sizeControl.addEventListener('change', () => {
      this.size = +this.sizeControl.value;
      this.initImageSelection(this.size);
      this.ground.updatePlayground(this.size);
      this.initGameOnStartAsync();

      this.handleChanged();
      clearHint();
    });
  }

  initImageSelection(size) {
    this.arrayPictures = nonograms.images[size];

    this.imageSection.innerHTML = '';
    this.imageSection.className = 'image__section';

    this.container.appendChild(this.imageSection);

    // // делаю копию узла, что бы сбросить состояние.
    const newImageSection = this.imageSection.cloneNode(true);
    this.container.replaceChild(newImageSection, this.imageSection);
    this.imageSection = newImageSection;

    /* Событие, которое отслеживает опшены у селект.
     *  - При выборе опшены, выводит матрицу картинки.
     *  - Перезаписываю событие, избавляюсь от постоянно увеличивающегося вывода
     */
    this.imageSection.removeEventListener('change', () => this.handleChanged());
    this.imageSection.addEventListener('change', () => this.handleChanged());
    /* --------------------------------------------------------------------- */

    this.arrayPictures.forEach((element) => {
      const option = document.createElement('option');
      this.imageSection.appendChild(option);
      option.className = 'option__image';
      option.textContent = element.name;
      option.setAttribute('value', `${element.name}`);
    });
  }

  initGameOnStartAsync() {
    const asyncFunc = async () => {
      try {
        await this.section.appendChild(this.ground.getElement());
        setMatrixData(this.matrixPicture);
        this.initGameOnStart();
      } catch (err) {
        throw new Error(`Ошибка в АСИНХРОННОМ генерировании подсказок(${err})`);
      }
    };
    asyncFunc();
  }

  handleChanged() {
    const { value } = this.imageSection;
    const foundImage = this.arrayPictures.find((image) => image.name === value);
    const newMatrixPicture = foundImage.pixels;
    this.matrixPicture = newMatrixPicture;

    setMatrixData(this.matrixPicture);
    resetGame(this.time);
    clearHint();
    calcSequenceForHint(this.matrixPicture);
  }

  initGameOnStart() {
    const matrixPicture = this.arrayPictures[0].pixels;
    initGame(matrixPicture, this.time);
  }

  initButtonsSection(time) {
    createButtons(this.sectionButton, time);
  }

  getElementsButton() {
    return this.sectionButton;
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

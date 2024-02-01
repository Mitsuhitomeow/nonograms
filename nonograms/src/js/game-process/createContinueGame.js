import clearHint from './clearHint';
import nonograms from '../../nongrams-db.json';
import { setMatrixValue } from './initGame';

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    });
  });
}

const eventSize = new Event('change');

export default async function createContinueGame() {
  const data = JSON.parse(localStorage.getItem('saveGame'));

  try {
    const { time, sizeSelect, imageSelect } = data;
    const arrayPictures = nonograms.images[sizeSelect];
    const foundImage = arrayPictures.find(
      (image) => image.name === imageSelect
    ).pixels;

    console.log(`matrix: ${data.imageMatrix}
    matrixData: ${foundImage}
    select size: ${sizeSelect}
    select image: ${imageSelect}
    time: ${time}`);

    const sizeControl = document.querySelector('.main__options-select');
    sizeControl.value = sizeSelect;
    sizeControl.dispatchEvent(eventSize);

    await delay();
    clearHint();
    const imageControl = document.querySelector('.image__section');
    const squares = document.querySelectorAll('.column');
    const { imageMatrix } = data;

    imageControl.value = imageSelect;
    imageControl.dispatchEvent(eventSize);

    setMatrixValue(imageMatrix);

    let ms = 20;
    squares.forEach((element, index) => {
      const square = element;
      square.innerHTML = '';
      square.classList.remove('black', 'cross');

      setTimeout(() => {
        if (imageMatrix[index] === 0) {
          square.classList.remove('black', 'cross');
        } else if (imageMatrix[index] === 1) {
          square.classList.remove('black', 'cross');
          square.classList.add('black');
        }
      }, ms);
      ms += 20;
    });
  } catch (err) {
    console.error(err);
    throw new Error('ERROR CREATE CONTINUE: ', err);
  }
}

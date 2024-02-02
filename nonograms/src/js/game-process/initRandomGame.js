import clearHint from './clearHint';

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    });
  });
}

const eventSize = new Event('change');

export default async function randomGame() {
  try {
    const [sizeControl, sizeOptions] = [
      document.querySelector('.main__options-select'),
      document.querySelectorAll('.option__size'),
    ];

    const randomSize = Math.floor(Math.random() * sizeOptions.length);

    sizeControl.value = sizeOptions[randomSize].value;
    sizeControl.dispatchEvent(eventSize);

    await delay();
    clearHint();

    const [imageControl, imageOptions] = [
      document.querySelector('.image__section'),
      document.querySelectorAll('.option__image'),
    ];

    const randomImage = Math.floor(Math.random() * sizeOptions.length);

    imageControl.value = imageOptions[randomImage].value;
    imageControl.dispatchEvent(eventSize);
  } catch (err) {
    throw new Error(err.message);
  }
}

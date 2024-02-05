import clearHint from './clearHint';
import { setMatrixValue } from './initGame';

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    });
  });
}

const eventSize = new Event('change');

export default async function createContinueGame(stopwatch) {
  const data = JSON.parse(localStorage.getItem('saveGame'));

  function updateTime(newTime) {
    const oldTime = stopwatch;
    oldTime.time = newTime.time;
    oldTime.second = newTime.second;
    oldTime.minute = newTime.minute;
    oldTime.hour = newTime.hour;
    oldTime.span.innerHTML = newTime.time;
  }

  try {
    const { time, sizeSelect, imageSelect, crosses } = data;
    const [sizeControl, resetBtn] = [
      document.querySelector('.main__options-select'),
      document.querySelector('.reset__btn'),
    ];

    sizeControl.value = sizeSelect;
    sizeControl.dispatchEvent(eventSize);

    await delay();
    clearHint();

    const imageControl = document.querySelector('.image__section');
    const squares = document.querySelectorAll('.column');
    const { imageMatrix } = data;

    imageControl.value = imageSelect;
    imageControl.dispatchEvent(eventSize);

    let ms = 0;

    resetBtn.disabled = true;
    squares.forEach((element, index) => {
      const square = element;
      square.innerHTML = '';
      square.classList.remove('black', 'cross', 'cross_solution');

      setTimeout(() => {
        if (imageMatrix[index] === 0) {
          square.classList.remove('black', 'cross', 'cross_solution');
        }
        if (imageMatrix[index] === 1) {
          square.classList.remove('black', 'cross', 'cross_solution');
          square.classList.add('black');
        }
        if (crosses[index] === 1) {
          square.classList.remove('black', 'cross', 'cross_solution');
          square.classList.add('cross');
          square.innerHTML = `
            <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
                  <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
                  </path>
                </g>
              </g>
            </svg>
          `;
        }

        if (index === squares.length - 1) {
          resetBtn.disabled = false;
        }
      }, ms);
      ms += 20;
    });

    setMatrixValue(imageMatrix);
    updateTime(time);
  } catch (err) {
    throw new Error(err.message);
  }
}

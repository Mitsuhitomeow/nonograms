import nonograms from '../../nongrams-db.json';

export default function initSolution(time) {
  const [sizeValueElement, imageValueElement, squares, ground, resetBtn] = [
    document.querySelector('.main__options-select'),
    document.querySelector('.image__section'),
    document.querySelectorAll('.column'),
    document.querySelector('.main__section-playground'),
    document.querySelector('.reset__btn'),
  ];

  ground.classList.add('block__events');

  const imageValue = imageValueElement.value;
  const sizeValue = sizeValueElement.value;

  const imageMatrix = nonograms.images[sizeValue];
  const foundImage = imageMatrix
    .find((image) => image.name === imageValue)
    .pixels.flat();

  let ms = 0;

  resetBtn.disabled = true;
  squares.forEach((element, index) => {
    const square = element;
    time.pause();
    time.restart();
    square.innerHTML = '';
    square.classList.remove('black', 'cross', 'cross_solution');

    setTimeout(() => {
      if (foundImage[index] === 0) {
        square.classList.remove('black', 'cross', 'cross_solution');
        square.classList.add('cross_solution');
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
      } else if (foundImage[index] === 1) {
        square.classList.remove('black', 'cross', 'cross_solution');
        square.classList.add('black');
      }

      if (index === squares.length - 1) {
        resetBtn.disabled = false;
      }
    }, ms);
    ms += 20;
  });
}

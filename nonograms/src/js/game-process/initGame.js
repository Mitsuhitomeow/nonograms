import calcSequenceForHint from './calcHint';
import clearHint from './clearHint';
import { setResults } from './initLocalstorage';

let matrix;
let matrixData;
let timeData;

export function initGame(data, time) {
  matrixData = data;
  timeData = time;
  console.log(matrix);
  const squares = document.querySelectorAll('.column');
  const matrixPicture = data;
  let newMatrix = matrix;
  if (!newMatrix || newMatrix.length !== squares.length) {
    newMatrix = Array.from({ length: squares.length }, () => 0);
  }

  const handleClick = (square, index) => {
    matrix = newMatrix;
    if (square.classList.contains('cross')) return;

    if (newMatrix[index] === 0) {
      newMatrix[index] = 1;
    } else {
      newMatrix[index] = 0;
    }

    const isEqual = newMatrix.every((item, ind) => item === data.flat()[ind]);

    if (isEqual) {
      const solutionTime = time.getTime();

      time.pause();
      alert(`Массивы идентичны!, Время: ${solutionTime}`);
      setResults(time);
      newMatrix = Array.from({ length: squares.length }, () => 0);
    }
    console.log(newMatrix);
  };

  squares.forEach((square, index) => {
    square.removeEventListener('click', () => handleClick(square, index));
    square.addEventListener('click', () => handleClick(square, index));
  });

  calcSequenceForHint(matrixPicture);
}

export function resetGame(time) {
  const squares = document.querySelectorAll('.column');
  matrix = Array.from({ length: squares.length }, () => 0);

  squares.forEach((elem) => {
    const square = elem;
    square.classList.remove('black');
    square.classList.remove('cross');
    square.innerHTML = '';
  });

  time.pause();
  time.restart();
  clearHint();
}

export function resetGround(time) {
  const squares = document.querySelectorAll('.column');
  matrix = Array.from({ length: squares.length }, () => 0);

  squares.forEach((elem) => {
    const square = elem;
    square.classList.remove('black');
    square.classList.remove('cross');
    square.innerHTML = '';
  });

  time.pause();
  time.restart();
  clearHint();
  initGame(matrixData, timeData);
}

export function saveGame(time) {
  const continueBtn = document.querySelector('.continue__btn');
  const sizeValueElement = document.querySelector('.main__options-select');
  const imageValueElement = document.querySelector('.image__section');

  const sizeValue = sizeValueElement.value;
  const imageValue = imageValueElement.value;
  console.log(imageValue);

  continueBtn.disabled = false;

  const objSaveGame = {
    imageMatrix: matrix,
    sizeSelect: sizeValue,
    imageSelect: imageValue,
    time,
  };

  localStorage.setItem('saveGame', JSON.stringify(objSaveGame));
  localStorage.setItem('continue', JSON.stringify(false));
}

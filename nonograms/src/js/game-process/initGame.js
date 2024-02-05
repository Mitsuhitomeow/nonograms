import openModalWin from '../create-elements/createModalWin';
import calcSequenceForHint from './calcHint';
import { setResults } from './initLocalstorage';

let matrix;
let matrixData;
let newMatrix;

export function setMatrixData(value) {
  matrixData = value;
}

export function setMatrixValue(value) {
  newMatrix = value;
}

export function initGame(data, time) {
  const squares = document.querySelectorAll('.column');
  const matrixPicture = data;
  newMatrix = matrix;
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

    const isEqual = newMatrix.every(
      (item, ind) => item === matrixData.flat()[ind]
    );

    if (!isEqual) return;

    time.pause();
    const solutionTime = time.getTime();
    const [sizeValueElement, imageValueElement, ground] = [
      document.querySelector('.main__options-select'),
      document.querySelector('.image__section'),
      document.querySelector('.main__section-playground'),
    ];
    const selectedValue = sizeValueElement.value;
    const selectedOption = Array.from(sizeValueElement.options).find(
      (option) => option.value === selectedValue
    );
    const setResult = {
      size: selectedOption ? selectedOption.textContent : '',
      name: imageValueElement.value,
      time: solutionTime,
      sec: time.second,
    };

    setResults(setResult);

    newMatrix = Array.from({ length: squares.length }, () => 0);

    ground.classList.add('block__events');
    openModalWin(solutionTime);
  };

  squares.forEach((square, index) => {
    square.removeEventListener('click', () => handleClick(square, index));
    square.addEventListener('click', () => handleClick(square, index));
  });

  calcSequenceForHint(matrixPicture);
}

export function resetGame(time) {
  const [squares, ground] = [
    document.querySelectorAll('.column'),
    document.querySelector('.main__section-playground'),
  ];

  newMatrix = Array.from({ length: squares.length }, () => 0);
  matrix = newMatrix;
  squares.forEach((elem) => {
    const square = elem;
    square.classList.remove('black', 'cross', 'cross_solution');
    square.innerHTML = '';
  });

  time.pause();
  time.restart();

  if (ground.classList.contains('block__events')) {
    ground.classList.remove('block__events');
  }
}

export function saveGame(time) {
  const crossMatrix = [];
  const [continueBtn, sizeValueElement, imageValueElement, squares] = [
    document.querySelector('.continue__btn'),
    document.querySelector('.main__options-select'),
    document.querySelector('.image__section'),
    document.querySelectorAll('.column'),
  ];

  squares.forEach((square) => {
    if (!square.classList.contains('cross')) {
      crossMatrix.push(0);
    } else {
      crossMatrix.push(1);
    }
  });

  const sizeValue = sizeValueElement.value;
  const imageValue = imageValueElement.value;
  const objSaveGame = {
    resultImage: matrixData,
    imageMatrix: newMatrix,
    crosses: crossMatrix,
    sizeSelect: sizeValue,
    imageSelect: imageValue,
    time,
  };

  continueBtn.disabled = false;

  localStorage.setItem('saveGame', JSON.stringify(objSaveGame));
  localStorage.setItem('continue', JSON.stringify(false));
}

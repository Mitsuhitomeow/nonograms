import calcSequenceForHint from './calcHint';
import clearHint from './clearHint';

let matrix;
let newMatrix;

export function initGame(data, time) {
  const squares = document.querySelectorAll('.column');
  const matrixPicture = data;
  matrix = [];

  squares.forEach(() => matrix.push(0));

  newMatrix = matrix;

  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      if (square.classList.contains('cross')) return;

      if (newMatrix[index] === 0) {
        newMatrix[index] = 1;
      } else {
        newMatrix[index] = 0;
      }

      const isEqual = newMatrix.every((item, ind) => item === data.flat()[ind]);

      if (isEqual) {
        time.pause();
        const solutionTime = time.getTime();
        alert(`Массивы идентичны!, Время: ${solutionTime}`);
      }
      console.log(matrix);
    });
  });

  calcSequenceForHint(matrixPicture);
}

export function resetGame(time) {
  const squares = document.querySelectorAll('.column');
  matrix = [];
  squares.forEach(() => matrix.push(0));
  newMatrix = matrix;

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
  matrix = [];
  const squares = document.querySelectorAll('.column');
  squares.forEach(() => matrix.push(0));
  newMatrix = matrix;

  squares.forEach((elem) => {
    const square = elem;
    square.classList.remove('black');
    square.classList.remove('cross');
    square.innerHTML = '';
  });

  time.pause();
  time.restart();
}

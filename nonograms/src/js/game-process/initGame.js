import calcSequenceForHint from './calcHint';
import clearHint from './clearHint';

let matrix;

export function initGame(data, time) {
  const squares = document.querySelectorAll('.column');
  const matrixPicture = data;
  matrix = [];

  squares.forEach(() => matrix.push(0));

  const newMatrix = matrix;

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
        const solutionTime = time.getTime();
        alert(`Массивы идентичны!, Время: ${solutionTime}`);
      }
    });
  });

  calcSequenceForHint(matrixPicture);
}

export function resetGame(time) {
  matrix = [];
  const squares = document.querySelectorAll('.column');

  squares.forEach((elem) => {
    const square = elem;

    square.classList.remove('black');
    square.innerHTML = '';
  });

  time.pause();
  time.restart();
  clearHint();
}

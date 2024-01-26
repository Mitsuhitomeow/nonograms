import calcSequenceForHint from './calcHint';

export default function initGame(data, time) {
  const squares = document.querySelectorAll('.column');
  const matrixPicture = data;
  const matrix = [];

  console.log(matrixPicture);

  squares.forEach(() => matrix.push(0));

  const newMatrix = matrix;

  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
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

import createHint from './initHint';

export default function calcSequenceForHint(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Считаю подсказки слева на право
  const leftToRight = matrix.map((row) =>
    row
      .reduce(
        (acc, value) => {
          if (value === 1) {
            acc[acc.length - 1] += 1;
          } else if (acc[acc.length - 1] !== 0) {
            acc.push(0);
          }
          return acc;
        },
        [0]
      )
      .filter((length) => length !== 0)
  );

  // Добавляю нули, если в строке нет элементов
  leftToRight.forEach((hints) => {
    if (hints.length === 0) {
      hints.push(0);
    }
  });

  // Считаю подсказки верху вниз
  const topToBottom = Array.from({ length: cols }, () => []);
  for (let col = 0; col < cols; col += 1) {
    let count = 0;
    for (let row = 0; row < rows; row += 1) {
      if (matrix[row][col] === 1) {
        count += 1;
      } else if (count !== 0) {
        topToBottom[col].push(count);
        count = 0;
      }
    }

    if (count !== 0) {
      topToBottom[col].push(count);
    }

    // Добавляю нули, если в столбце нет элементов
    if (topToBottom[col].length === 0) {
      topToBottom[col].push(0);
    }
  }

  createHint(leftToRight, topToBottom);
}

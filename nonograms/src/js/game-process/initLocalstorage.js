import createContinueGame from './createContinueGame';

export function continueGame() {
  const matrix = JSON.parse(localStorage.getItem('saveGame'));

  createContinueGame(matrix);
  // todo: Сгенерировать поле по матрице...
}

export function setResults(time) {
  console.log('записано в таблицу: ', time.getTime());

  // todo: Сделать функцию заполнения таблицы результатов...
}

export function getResults() {
  console.log('results: ');

  // todo: Cделать список результатов с сортировкой по времени...
}

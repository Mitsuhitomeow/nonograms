import openModal from '../create-elements/createModal';
import createContinueGame from './createContinueGame';

export function continueGame() {
  const matrix = JSON.parse(localStorage.getItem('saveGame'));

  createContinueGame(matrix);
  // todo: Сгенерировать поле по матрице...
}

export function setResults(data) {
  const isData = JSON.parse(localStorage.getItem('results'));

  let arrayResults =
    isData !== null ? JSON.parse(localStorage.getItem('results')) : [];

  arrayResults.push(data);

  arrayResults = arrayResults.sort((a, b) => {
    const timeA = new Date(`1970-01-01T${a.time}`);
    const timeB = new Date(`1970-01-01T${b.time}`);
    return timeA - timeB;
  });

  const results = arrayResults.slice(0, 5);

  localStorage.setItem('results', JSON.stringify(results));
}

export function getResults() {
  openModal();
}

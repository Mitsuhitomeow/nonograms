import openModal from '../create-elements/createModal';
import createContinueGame from './createContinueGame';

export function continueGame() {
  const matrix = JSON.parse(localStorage.getItem('saveGame'));

  createContinueGame(matrix);
  // todo: Сгенерировать поле по матрице...
}

export function setResults(data) {
  const isData = JSON.parse(localStorage.getItem('results'));

  const arrayResults =
    isData !== null ? JSON.parse(localStorage.getItem('results')) : [];

  arrayResults.push(data);
  localStorage.setItem('results', JSON.stringify(arrayResults));
}

export function getResults() {
  openModal();
}

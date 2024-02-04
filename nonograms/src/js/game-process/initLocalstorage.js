import openModalResults from '../create-elements/createModalResults';

export function setResults(data) {
  const isData = JSON.parse(localStorage.getItem('results'));

  const arrayResults =
    isData !== null ? JSON.parse(localStorage.getItem('results')) : [];

  if (arrayResults.length === 5) {
    arrayResults.shift();
  }

  arrayResults.push(data);

  localStorage.setItem('results', JSON.stringify(arrayResults));
}

export function getResults() {
  openModalResults();
}

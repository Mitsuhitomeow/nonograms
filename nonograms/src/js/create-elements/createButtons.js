import createContinueGame from '../game-process/createContinueGame';
import { resetGame, saveGame } from '../game-process/initGame';
import { getResults } from '../game-process/initLocalstorage';
import randomGame from '../game-process/initRandomGame';
import initSolution from '../game-process/initSolution';

export default function createButtons(block, time) {
  const sectionButtons = block;

  const [
    buttonsBlock,
    resetBtn,
    saveBtn,
    continueBtn,
    resultBtn,
    solutionBtn,
    randomBtn,
  ] = [
    document.createElement('div'),
    document.createElement('button'),
    document.createElement('button'),
    document.createElement('button'),
    document.createElement('button'),
    document.createElement('button'),
    document.createElement('button'),
  ];

  const arrayBtn = [
    resetBtn,
    saveBtn,
    continueBtn,
    resultBtn,
    solutionBtn,
    randomBtn,
  ];

  arrayBtn.forEach((btn) => {
    btn.classList.add('btn');
    buttonsBlock.appendChild(btn);
  });

  resetBtn.addEventListener('click', () => resetGame(time));
  saveBtn.addEventListener('click', () => saveGame(time));
  continueBtn.addEventListener('click', () => createContinueGame(time));
  resultBtn.addEventListener('click', getResults);
  solutionBtn.addEventListener('click', () => initSolution(time));
  randomBtn.addEventListener('click', randomGame);

  block.appendChild(buttonsBlock);

  sectionButtons.className = 'main__section-buttons';
  buttonsBlock.className = 'main__block-buttons';
  resetBtn.classList.add('reset__btn');
  continueBtn.classList.add('continue__btn');
  continueBtn.classList.add('reset__btn');
  resultBtn.classList.add('result__btn');

  resetBtn.textContent = 'Reset';
  saveBtn.textContent = 'Save';
  continueBtn.textContent = 'Continue';
  resultBtn.textContent = 'Results';
  solutionBtn.textContent = 'Solution';
  randomBtn.textContent = 'Random Game';

  const isSave = JSON.parse(localStorage.getItem('saveGame'));
  const isResults = JSON.parse(localStorage.getItem('results'));

  continueBtn.disabled = isSave === null;
  resultBtn.disabled = isResults === null;
}

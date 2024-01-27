import { resetGround, saveGame } from '../game-process/initGame';
import { continueGame, getResults } from '../game-process/initLocalstorage';

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

  resetBtn.addEventListener('click', () => resetGround(time));
  saveBtn.addEventListener('click', saveGame);
  continueBtn.addEventListener('click', continueGame);
  resultBtn.addEventListener('click', getResults);

  block.appendChild(buttonsBlock);

  sectionButtons.className = 'main__section-buttons';
  buttonsBlock.className = 'main__block-buttons';
  resetBtn.textContent = 'Reset';
  saveBtn.textContent = 'Save';
  continueBtn.textContent = 'Continue';
  resultBtn.textContent = 'Results';
  solutionBtn.textContent = 'Solution';
  randomBtn.textContent = 'Random Game';

  // ---------------------------------------
  /** todo: Добавить функционал кнопкам.   *
   * Кнопки без функционала, заблокированы,*
   * выводят только сообщение в консоль.   *
   * ------------------------------------- *
   */
  saveBtn.disabled = true;
  continueBtn.disabled = true;
  resultBtn.disabled = true;
  solutionBtn.disabled = true;
  randomBtn.disabled = true;
  /* ------------------------------------- */
}

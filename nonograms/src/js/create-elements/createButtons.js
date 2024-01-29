import { resetGround, saveGame } from '../game-process/initGame';
import { continueGame, getResults } from '../game-process/initLocalstorage';
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

  resetBtn.addEventListener('click', () => resetGround(time));
  saveBtn.addEventListener('click', () => saveGame(time));
  continueBtn.addEventListener('click', continueGame);
  resultBtn.addEventListener('click', getResults);
  solutionBtn.addEventListener('click', () => initSolution(time));

  block.appendChild(buttonsBlock);

  sectionButtons.className = 'main__section-buttons';
  buttonsBlock.className = 'main__block-buttons';
  resetBtn.classList.add('reset__btn');
  continueBtn.classList.add('continue__btn');

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
   * Добавлено:                            *
   *   - Кнопка save, заносит матрицу и    *
   *   другие данные в localstorage.       *
   *   - Кнопка continue разблокируется,   *
   *   если в localstorage есть данные от  *
   *   нажатия на save, выводит данные от  *
   *   сохранения в консоль, пока что.     *
   *   - кнопка Solution заполняет поле    *
   *   показывая картинку.                 *
   * ------------------------------------- *
   */

  // saveBtn.disabled = true;
  // solutionBtn.disabled = true;
  const isContinue = JSON.parse(localStorage.getItem('continue'));
  continueBtn.disabled = isContinue !== false;

  resultBtn.disabled = true;
  randomBtn.disabled = true;
  /* ------------------------------------- */
}

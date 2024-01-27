import { resetGround } from '../game-process/initGame';

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
  block.appendChild(buttonsBlock);

  sectionButtons.className = 'main__section-buttons';
  buttonsBlock.className = 'main__block-buttons';
  resetBtn.textContent = 'Reset';
  saveBtn.textContent = 'Save';
  continueBtn.textContent = 'Continue';
  resultBtn.textContent = 'Results';
  solutionBtn.textContent = 'Solution';
  randomBtn.textContent = 'Random Game';

  saveBtn.disabled = true;
  continueBtn.disabled = true;
  resultBtn.disabled = true;
  solutionBtn.disabled = true;
  randomBtn.disabled = true;
}

import { resetGround } from '../game-process/initGame';

export default function createButtons(Block, time) {
  const [buttonsBlock, resetBtn, saveBtn, continueBtn, resultBtn] = [
    document.createElement('div'),
    document.createElement('button'),
    document.createElement('button'),
    document.createElement('button'),
    document.createElement('button'),
  ];

  const arrayBtn = [resetBtn, saveBtn, continueBtn, resultBtn];

  arrayBtn.forEach((btn) => {
    btn.classList.add('btn');
    buttonsBlock.appendChild(btn);
  });

  resetBtn.addEventListener('click', () => resetGround(time));
  Block.appendChild(buttonsBlock);

  buttonsBlock.className = 'main__Block-buttons';
  resetBtn.textContent = 'Reset';
  saveBtn.textContent = 'Save';
  continueBtn.textContent = 'Continue';
  resultBtn.textContent = 'Results';

  saveBtn.disabled = true;
  continueBtn.disabled = true;
  resultBtn.disabled = true;
}
